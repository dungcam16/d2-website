import React from 'react';

const Customers = () => {
  const customers = [
    { name: "Vingroup", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Vingroup_logo.svg/200px-Vingroup_logo.svg.png" },
    { name: "FPT Corporation", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/FPT_logo.svg/200px-FPT_logo.svg.png" },
    { name: "Viettel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Viettel_logo.svg/200px-Viettel_logo.svg.png" },
    { name: "BIDV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/BIDV_logo.svg/200px-BIDV_logo.svg.png" },
    { name: "VinFast", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VinFast_logo.svg/200px-VinFast_logo.svg.png" },
    { name: "Sacombank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sacombank_logo.svg/200px-Sacombank_logo.svg.png" },
    { name: "Techcombank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Techcombank_logo.svg/200px-Techcombank_logo.svg.png" },
    { name: "Masan Group", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Masan_Group_logo.svg/200px-Masan_Group_logo.svg.png" },
    { name: "VNG Corporation", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/VNG_Corporation_logo.svg/200px-VNG_Corporation_logo.svg.png" },
    { name: "Tiki", logo: "https://salt.tikicdn.com/ts/upload/5e/0d/bc/6ebe510c99e49b65b7d2d1da71e41b73.png" },
    { name: "Sendo", logo: "https://media.sendo.vn/media/logo/sendo-icon-60x60.png" },
    { name: "MoMo", logo: "https://developers.momo.vn/v3/assets/images/square-logo.svg" }
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