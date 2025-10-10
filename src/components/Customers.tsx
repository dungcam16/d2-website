import React from "react";

const Customers = () => {
  const customers = [
    {
      name: "TechVision Corp",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-287.svg",
    },
    {
      name: "CloudStack Solutions",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-289.svg",
    },
    {
      name: "DataFlow Systems",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-296.svg",
    },
    {
      name: "SmartLogix Pro",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-225.svg",
    },
    {
      name: "NexGen Digital",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-265.svg",
    },
    {
      name: "Quantum Labs",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-244.svg",
    },
    {
      name: "Innovate Hub",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-217.svg",
    },
    {
      name: "CodeCraft Studios",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-232.svg",
    },
    {
      name: "Velocity Tech",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-239.svg",
    },
    {
      name: "BrightPath Systems",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-250.svg",
    },
    {
      name: "Apex Innovations",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-255.svg",
    },
    {
      name: "Synergy Platforms",
      logo: "https://cdn.jsdelivr.net/gh/untitledui/untitledui-js@latest/logos/logoipsum-261.svg",
    },
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
