import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'jsr:@supabase/supabase-js@2';
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Server-side validation schema
const newsletterSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email" }).max(255),
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
    
    console.log('Newsletter subscription received');

    // Honeypot check - if filled, silently accept but don't forward
    if (data.website && data.website.trim() !== '') {
      console.log('Honeypot triggered - likely bot submission');
      return new Response(
        JSON.stringify({ success: true, message: 'Subscribed successfully' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Server-side validation
    const validated = newsletterSchema.parse(data);
    
    console.log('Validation passed, saving to database');

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Check if email already exists
    const { data: existing } = await supabaseClient
      .from('newsletter_subscribers')
      .select('id, status')
      .eq('email', validated.email)
      .single();

    if (existing) {
      if (existing.status === 'active') {
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: 'Email already subscribed' 
          }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } else {
        // Reactivate unsubscribed user
        const { error: updateError } = await supabaseClient
          .from('newsletter_subscribers')
          .update({
            status: 'active',
            subscribed_at: new Date().toISOString(),
            unsubscribed_at: null,
          })
          .eq('id', existing.id);

        if (updateError) {
          console.error('Failed to reactivate subscriber:', updateError);
          throw new Error('Failed to reactivate subscription');
        }
      }
    } else {
      // Save new subscriber to database
      const { error: dbError } = await supabaseClient
        .from('newsletter_subscribers')
        .insert({
          email: validated.email,
          status: 'active',
          source: data.source || 'blog_page',
          ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
          subscribed_at: new Date().toISOString(),
        });

      if (dbError) {
        console.error('Failed to save to database:', dbError);
        throw new Error('Failed to save subscription');
      }
    }

    console.log('Successfully saved to database, forwarding to n8n');

    // Forward to n8n webhook (non-blocking, data is already safe in DB)
    try {
      const webhookResponse = await fetch(
        'https://n8n.d2group.co/webhook/d2group_website?flow=newsletter',
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
      JSON.stringify({ success: true, message: 'Subscribed successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Invalid email address',
          errors: error.errors 
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to subscribe. Please try again.' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
