import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'jsr:@supabase/supabase-js@2';
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Server-side validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email" }).max(255),
  phone: z.string().trim().regex(/^\+?[0-9\s-]{8,20}$/, { message: "Invalid phone" }).max(20),
  company: z.string().trim().max(100).optional(),
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, { message: "Message is required" }).max(2000),
  consentMarketing: z.boolean().optional(),
  // Honeypot field - should be empty
  website: z.string().max(0).optional(),
});

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data = await req.json();
    
    console.log('Contact form submission received');

    // Honeypot check - if filled, silently accept but don't forward
    if (data.website && data.website.trim() !== '') {
      console.log('Honeypot triggered - likely bot submission');
      return new Response(
        JSON.stringify({ success: true, message: 'Form submitted successfully' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Server-side validation
    const validated = contactSchema.parse(data);
    
    console.log('Validation passed, saving to database');

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Rate limiting: Check submissions from same email in last 24 hours
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { count } = await supabaseClient
      .from('contact_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('email', validated.email)
      .gte('submitted_at', oneDayAgo);

    if (count && count >= 3) {
      console.log('Rate limit exceeded for email:', validated.email);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Too many submissions. Please try again tomorrow.' 
        }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Save to database FIRST (critical for GDPR compliance)
    const { data: submission, error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert({
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        company: validated.company,
        service: validated.service,
        message: validated.message,
        consent_marketing: validated.consentMarketing || false,
        ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
        user_agent: req.headers.get('user-agent') || 'unknown',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Failed to save to database:', dbError);
      throw new Error('Failed to save submission');
    }

    console.log('Successfully saved to database, forwarding to n8n');

    // Forward to n8n webhook (non-blocking, data is already safe in DB)
    try {
      const webhookResponse = await fetch(
        'https://n8n.d2group.co/webhook/d2group_website?flow=contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(validated),
        }
      );

      if (!webhookResponse.ok) {
        console.error('n8n webhook failed:', webhookResponse.status, 'but data is saved in DB');
      } else {
        console.log('Successfully forwarded to n8n');
      }
    } catch (webhookError) {
      console.error('n8n webhook error:', webhookError, 'but data is saved in DB');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Invalid form data',
          errors: error.errors 
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to submit form. Please try again.' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
