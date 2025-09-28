import React from 'react';
import n8nLogo from '@/assets/n8n-logo.png';
import makeLogo from '@/assets/make-logo.png';
import zapierLogo from '@/assets/zapier-logo.png';
import openaiLogo from '@/assets/openai-logo.png';
import anthropicLogo from '@/assets/anthropic-logo.png';
import googleAiLogo from '@/assets/google-ai-logo.png';

const Partners = () => {
  const partners = [
    { name: "N8N", logo: n8nLogo },
    { name: "Make", logo: makeLogo },
    { name: "Zapier", logo: zapierLogo },
    { name: "OpenAI", logo: openaiLogo },
    { name: "Anthropic", logo: anthropicLogo },
    { name: "Google AI", logo: googleAiLogo },
    { name: "Microsoft AI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png" },
    { name: "Airtable", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/200px-Airtable_Logo.svg.png" },
    { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/200px-Notion-logo.svg.png" },
    { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/200px-Slack_icon_2019.svg.png" },
    { name: "Discord", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Discord_blue_logo.svg/200px-Discord_blue_logo.svg.png" },
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/200px-Shopify_logo_2018.svg.png" }
  ];

  return (
    <section className="py-16 bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-foreground">Nền Tảng </span>
            <span className="text-primary">Công Nghệ</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Chúng tôi sử dụng nền tảng công nghệ của các thương hiệu hàng đầu thế giới
          </p>
        </div>

        {/* Scrolling Partners */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-horizontal space-x-12">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center bg-card rounded-lg border tech-border p-6 hover:shadow-glow transition-all duration-300 min-w-[200px]"
              >
                <div className="text-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 w-auto mx-auto mb-2 object-contain"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="text-4xl mb-2 hidden">🔧</div>
                  <div className="text-sm font-medium text-foreground">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;