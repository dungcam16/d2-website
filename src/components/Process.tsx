import { Search, Lightbulb, Rocket, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery Call",
      description: "30-min consultation to understand your technical requirements and automation needs.",
      number: "01",
    },
    {
      icon: Lightbulb,
      title: "Development Sprint",
      description: "1-2 weeks to build, test, and iterate on the solution with regular updates.",
      number: "02",
    },
    {
      icon: Rocket,
      title: "Deploy & Support",
      description: "Production deployment with documentation, testing, and ongoing maintenance support.",
      number: "03",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              How We Work
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Streamlined process from discovery to deployment
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Animated connector with data flow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full -translate-x-1/2 z-0">
                  {/* Connection line */}
                  <div className="relative h-1 w-full bg-gradient-to-r from-primary via-accent to-primary opacity-30" />
                  {/* Data flow animation */}
                  <div className="absolute top-0 left-0 h-1 w-full overflow-hidden">
                    <div className="absolute h-full w-12 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow" 
                         style={{ animationDelay: `${index * 0.5}s` }} />
                  </div>
                  {/* Arrow */}
                  <ArrowRight className="absolute -right-3 -top-2 w-5 h-5 text-primary" />
                </div>
              )}
              
              <div className="workflow-node animate-node-appear group z-10" 
                   style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow animate-node-pulse">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 relative">
                  <step.icon className="h-8 w-8 text-primary relative z-10" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl animate-pulse-glow" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Active indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-medium">Ready</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
