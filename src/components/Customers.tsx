import React from 'react';

const Customers = () => {
  const customers = [
    { name: "TechCorp Vietnam", logo: "https://via.placeholder.com/120x60/2563eb/ffffff?text=TechCorp" },
    { name: "GreenTech Solutions", logo: "https://via.placeholder.com/120x60/059669/ffffff?text=GreenTech" },
    { name: "SmartLogistics", logo: "https://via.placeholder.com/120x60/dc2626/ffffff?text=SmartLog" },
    { name: "EduTech Plus", logo: "https://via.placeholder.com/120x60/7c3aed/ffffff?text=EduTech" },
    { name: "HealthCare Digital", logo: "https://via.placeholder.com/120x60/0891b2/ffffff?text=HealthCare" },
    { name: "FinTech Pro", logo: "https://via.placeholder.com/120x60/ea580c/ffffff?text=FinTech" },
    { name: "AgriSmart", logo: "https://via.placeholder.com/120x60/16a34a/ffffff?text=AgriSmart" },
    { name: "RetailTech", logo: "https://via.placeholder.com/120x60/c2410c/ffffff?text=RetailTech" },
    { name: "FoodTech Vietnam", logo: "https://via.placeholder.com/120x60/be185d/ffffff?text=FoodTech" },
    { name: "PropertyTech", logo: "https://via.placeholder.com/120x60/0d9488/ffffff?text=PropertyTech" },
    { name: "TravelTech Plus", logo: "https://via.placeholder.com/120x60/4338ca/ffffff?text=TravelTech" },
    { name: "MediaTech Solutions", logo: "https://via.placeholder.com/120x60/9333ea/ffffff?text=MediaTech" }
  ];

  return (
    <section className="py-16 bg-gradient-subtle border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-foreground">Khách Hàng </span>
            <span className="text-primary">Tin Tưởng</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hơn 200 doanh nghiệp đã tin tưởng và sử dụng dịch vụ của chúng tôi
          </p>
        </div>

        {/* Scrolling Customers */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-horizontal space-x-12">
            {[...customers, ...customers].map((customer, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center bg-card rounded-lg border tech-border p-6 hover:shadow-glow transition-all duration-300 min-w-[200px]"
              >
                <div className="text-center">
                  <img 
                    src={customer.logo} 
                    alt={customer.name}
                    className="h-12 w-auto mx-auto mb-2 object-contain"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="text-4xl mb-2 hidden">🏢</div>
                  <div className="text-sm font-medium text-foreground">{customer.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;