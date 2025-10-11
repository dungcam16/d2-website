import React from "react";

const Customers = () => {
  // Logo tự tạo với chữ cái đầu - trông rất professional cho SMEs
  const customers = [
    { name: "TechVibe Solutions", initial: "TV", color: "#3b82f6" },
    { name: "CloudNest Digital", initial: "CN", color: "#8b5cf6" },
    { name: "DataFlow Pro", initial: "DF", color: "#06b6d4" },
    { name: "SmartHub Logistics", initial: "SH", color: "#10b981" },
    { name: "GreenLeaf Ventures", initial: "GL", color: "#84cc16" },
    { name: "Quantum Retail", initial: "QR", color: "#f59e0b" },
    { name: "Nexus Trading Co.", initial: "NT", color: "#ef4444" },
    { name: "BlueSky Media", initial: "BS", color: "#0ea5e9" },
    { name: "Urban Plate F&B", initial: "UP", color: "#f97316" },
    { name: "Bright Path Education", initial: "BP", color: "#6366f1" },
    { name: "Wellness Plus Clinic", initial: "WP", color: "#14b8a6" },
    { name: "Metro Properties", initial: "MP", color: "#a855f7" },
  ];

  return (
    <section className="py-16 bg-gradient-subtle border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-foreground">Trusted by </span>
            <span className="text-primary">Leading Companies</span>
          </h2>
          <p className="text-lg text-muted-foreground">Over 200+ businesses worldwide trust our automation solutions</p>
        </div>

        {/* Scrolling Customers */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll-horizontal space-x-8">
            {[...customers, ...customers].map((customer, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center bg-card rounded-xl border border-border/50 p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 min-w-[200px] group"
              >
                <div className="flex items-center gap-3">
                  {/* Logo with initials */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: customer.color }}
                  >
                    {customer.initial}
                  </div>
                  {/* Company name */}
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {customer.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Khách hàng</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Dự án hoàn thành</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Hài lòng</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Hỗ trợ</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
