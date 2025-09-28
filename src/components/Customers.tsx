import React from 'react';

const Customers = () => {
  const customers = [
    { name: "Vingroup", logo: "🏢" },
    { name: "FPT Corporation", logo: "💻" },
    { name: "Viettel", logo: "📡" },
    { name: "BIDV", logo: "🏦" },
    { name: "VinFast", logo: "🚗" },
    { name: "Sacombank", logo: "💳" },
    { name: "Techcombank", logo: "🏛️" },
    { name: "Masan Group", logo: "🛒" },
    { name: "VNG Corporation", logo: "🎮" },
    { name: "Tiki", logo: "📦" },
    { name: "Sendo", logo: "🛍️" },
    { name: "MoMo", logo: "💰" }
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
                  <div className="text-4xl mb-2">{customer.logo}</div>
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