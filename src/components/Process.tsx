import { Search, Lightbulb, Rocket } from "lucide-react";

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 z-10">
                <div className="absolute top-4 right-4 text-6xl font-bold text-muted/20">
                  {step.number}
                </div>
                
                <div className="inline-flex p-4 rounded-lg bg-primary/10 mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
