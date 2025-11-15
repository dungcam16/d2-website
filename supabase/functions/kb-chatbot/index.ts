import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, conversationHistory = [] } = await req.json();

    if (!query) {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!OPENAI_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Required environment variables not configured');
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Step 1: Generate embedding for the query
    const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'text-embedding-ada-002',
        input: query,
      }),
    });

    if (!embeddingResponse.ok) {
      throw new Error('Failed to generate query embedding');
    }

    const embeddingData = await embeddingResponse.json();
    const queryEmbedding = embeddingData.data[0].embedding;

    // Step 2: Search knowledge base for relevant articles
    const { data: relevantArticles, error: searchError } = await supabase
      .rpc('search_knowledge_base', {
        query_embedding: queryEmbedding,
        match_threshold: 0.7,
        match_count: 5,
      });

    if (searchError) {
      console.error('Search error:', searchError);
    }

    // Step 3: Build context from relevant articles
    let context = '';
    const sources: Array<{ title: string; slug: string; category: string }> = [];

    if (relevantArticles && relevantArticles.length > 0) {
      context = relevantArticles
        .map((article: any) => {
          sources.push({
            title: article.title,
            slug: article.slug,
            category: article.category,
          });
          return `### ${article.title}\n${article.excerpt || ''}\n${article.content.substring(0, 500)}...`;
        })
        .join('\n\n');
    }

    // Step 4: Generate response using GPT-4
    const systemPrompt = `You are D2 Group's AI assistant, an expert in automation, AI integration, and workflow optimization.

Your knowledge base contains detailed information about:
- D2 Group's services (n8n automation, AI chatbots, Zapier migration, marketing automation)
- Technical capabilities and tech stack
- Team structure and expertise
- Pricing and packages
- Case studies and client success stories
- Industry solutions

Use the following context from the knowledge base to answer questions accurately:

${context}

Guidelines:
1. Always provide accurate information based on the knowledge base
2. If you don't have specific information, say so honestly
3. Reference specific knowledge base articles when relevant
4. Be professional but friendly
5. Focus on how D2 Group can help solve the customer's problems
6. Include pricing details when discussing services
7. Mention relevant case studies to build credibility

If the question is outside your knowledge base, politely redirect to contacting D2 Group directly.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: query },
    ];

    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!chatResponse.ok) {
      const error = await chatResponse.text();
      console.error('OpenAI chat error:', error);
      throw new Error('Failed to generate response');
    }

    const chatData = await chatResponse.json();
    const answer = chatData.choices[0].message.content;

    return new Response(
      JSON.stringify({
        answer,
        sources,
        relevance: relevantArticles?.length > 0 ? 'high' : 'low',
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
