import React from "react";

const Customers = () => {
  // Logo placeholder từ Logoipsum - trông rất professional và realistic
  const customers = [
    { name: "TechVibe Solutions", logo: "https://logoipsum.com/logo/logo-1.svg" },
    { name: "CloudNest Digital", logo: "https://logoipsum.com/logo/logo-2.svg" },
    { name: "DataFlow Pro", logo: "https://logoipsum.com/logo/logo-3.svg" },
    { name: "SmartHub Logistics", logo: "https://logoipsum.com/logo/logo-4.svg" },
    { name: "GreenLeaf Ventures", logo: "https://logoipsum.com/logo/logo-5.svg" },
    { name: "Quantum Retail", logo: "https://logoipsum.com/logo/logo-6.svg" },
    { name: "Nexus Trading Co.", logo: "https://logoipsum.com/logo/logo-7.svg" },
    { name: "BlueSky Media", logo: "https://logoipsum.com/logo/logo-8.svg" },
    { name: "Urban Plate F&B", logo: "https://logoipsum.com/logo/logo-9.svg" },
    { name: "Bright Path Education", logo: "https://logoipsum.com/logo/logo-10.svg" },
    { name: "Wellness Plus Clinic", logo: "https://logoipsum.com/logo/logo-11.svg" },
    { name: "Metro Properties", logo: "https://logoipsum.com/logo/logo-12.svg" },
  ];

  return (
    <section className="py-16 bg-gradient-subtle border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Trusted Customers</span>
          </h2>
          <p className="text-lg text-muted-foreground">Over 200 businesses have trusted and used our services</p>
        </div>

        {/* Scrolling Customers */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll-horizontal space-x-12">
            {[...customers, ...customers].map((customer, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center bg-card rounded-lg border tech-border p-8 hover:shadow-glow transition-all duration-300 min-w-[200px] group"
              >
                <div className="text-center">
                  <img
                    src={customer.logo}
                    alt={`${customer.name} - Client of D2 Group`}
                    className="h-16 w-auto mx-auto mb-3 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {customer.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats below */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
