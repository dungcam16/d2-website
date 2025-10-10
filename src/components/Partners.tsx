import React from "react";

// Import logos (assuming you have these in your assets)
import n8nLogo from "@/assets/n8n-logo.png";
import makeLogo from "@/assets/make-logo.png";
import openAiLogo from "@/assets/openai-logo.png";
import googleAiLogo from "@/assets/google-ai-logo.png";
import anthropicLogo from "@/assets/anthropic-logo.png";
import supabaseLogo from "@/assets/supabase-logo.png";
import cloudflareLogo from "@/assets/cloudflare-logo.svg";

const partners = [
  { name: "n8n", logo: n8nLogo },
  { name: "Make", logo: makeLogo },
  ,
  { name: "OpenAI", logo: openAiLogo },
  { name: "Google AI", logo: googleAiLogo },
  { name: "Anthropic", logo: anthropicLogo },
  { name: "Supabase", logo: supabaseLogo },
  { name: "Cloudflare", logo: cloudflareLogo },
];

const Partners = () => {
  return (
    <section id="partners" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Trusted by Industry Leaders</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We partner with the best in the industry to deliver cutting-edge solutions for our clients.
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Render partners twice for a seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-6 flex items-center justify-center">
                <img src={partner.logo} alt={`${partner.name} Logo`} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
