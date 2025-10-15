import { CheckCircle, Clock, Zap } from "lucide-react";

const TrustBar = () => {
  const logos = ["Agency X", "GrowthLab", "FlowOps", "Nova SaaS"];
  
  const stats = [
    { icon: Clock, text: "+200 hours saved / month" },
    { icon: Zap, text: "15+ reusable templates" },
    { icon: CheckCircle, text: "99.9% uptime on automations" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground mb-8">
          Trusted by digital agencies and startups across 5+ countries.
        </p>
        
        {/* Logo placeholders */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-secondary/50 rounded-lg border border-border text-muted-foreground font-medium"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card border border-border"
            >
              <stat.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
