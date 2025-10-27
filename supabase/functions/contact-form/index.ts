import "jsr:@supabase/functions-js/edge-runtime.d.ts";
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
    
    console.log('Validation passed, forwarding to n8n webhook');

    // Forward to n8n webhook
    const webhookResponse = await fetch(
      'https://n8n.d2group.co/webhook/d2group_website?flow=contact',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      }
    );

    if (!webhookResponse.ok) {
      console.error('n8n webhook failed:', webhookResponse.status);
      throw new Error('Failed to forward to webhook');
    }

    console.log('Successfully forwarded to n8n');

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
