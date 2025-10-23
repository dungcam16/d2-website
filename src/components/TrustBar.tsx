import { CheckCircle, Clock, Zap, TrendingUp } from "lucide-react";

const TrustBar = () => {
  const logos = ["Agency X", "GrowthLab", "FlowOps", "Nova SaaS"];
  
  const stats = [
    { icon: Clock, text: "+200 hours saved / month" },
    { icon: Zap, text: "15+ reusable templates" },
    { icon: CheckCircle, text: "99.9% uptime on automations" },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-y border-border/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="w-4 h-4 text-primary" />
            <p className="text-sm font-medium">
              Trusted by digital agencies and startups across 5+ countries
            </p>
          </div>
        </div>
        
        {/* Logo placeholders with animation */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="b2b-card px-8 py-4 text-muted-foreground font-semibold hover:text-primary transition-colors animate-node-appear"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Stats with workflow styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="workflow-node animate-node-appear text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-3 animate-node-pulse">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-semibold">{stat.text}</p>
              
              {/* Active indicator */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
