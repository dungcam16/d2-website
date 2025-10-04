import React from 'react';
import n8nLogo from '@/assets/n8n-logo.png';
import makeLogo from '@/assets/make-logo.png';
import zapierLogo from '@/assets/zapier-logo.png';
import openaiLogo from '@/assets/openai-logo.png';
import anthropicLogo from '@/assets/anthropic-logo.png';
import googleAiLogo from '@/assets/google-ai-logo.png';
import dockerLogo from '@/assets/docker-logo.svg';
import traefikLogo from '@/assets/traefik-logo.png';
import nginxLogo from '@/assets/nginx-logo.png';
import cloudfareLogo from '@/assets/cloudflare-logo.svg';
import supabaseLogo from '@/assets/supabase-logo.png';
import postgresqlLogo from '@/assets/postgresql-logo.svg';
import viteLogo from '@/assets/vite-logo.svg';
import reactLogo from '@/assets/react-logo.svg';

const Partners = () => {
  const partners = [
    { name: "N8N", logo: n8nLogo },
    { name: "Make", logo: makeLogo },
    { name: "Zapier", logo: zapierLogo },
    { name: "OpenAI", logo: openaiLogo },
    { name: "Anthropic", logo: anthropicLogo },
    { name: "Google AI", logo: googleAiLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "Coolify", logo: "https://avatars.githubusercontent.com/u/82715100?s=200&v=4" },
    { name: "Traefik", logo: traefikLogo },
    { name: "Nginx", logo: nginxLogo },
    { name: "Cloudflare", logo: cloudfareLogo },
    { name: "Supabase", logo: supabaseLogo },
    { name: "PostgreSQL", logo: postgresqlLogo },
    { name: "Vite", logo: viteLogo },
    { name: "React", logo: reactLogo }
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

        {/* Scrolling Customers */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-horizontal space-x-12">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center bg-card rounded-lg border tech-border p-6 hover:shadow-glow transition-all duration-300 min-w-[200px]"
              >
                <div className="text-center">
                  <img 
                    src={partner.logo} 
                    alt={`Logo đối tác công nghệ ${partner.name} của D2 Group`}
                    className="h-12 w-auto mx-auto mb-2 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="text-4xl mb-2 hidden">🏢</div>
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