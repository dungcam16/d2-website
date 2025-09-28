import React from 'react';

const Partners = () => {
  const partners = [
    { name: "OpenAI", logo: "🤖" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Google Cloud", logo: "☁️" },
    { name: "Meta", logo: "📘" },
    { name: "Shopify", logo: "🛍️" },
    { name: "Salesforce", logo: "☁️" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Slack", logo: "💬" },
    { name: "Notion", logo: "📝" },
    { name: "Airtable", logo: "📊" },
    { name: "Stripe", logo: "💳" },
    { name: "Twilio", logo: "📞" }
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
                  <div className="text-4xl mb-2">{partner.logo}</div>
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