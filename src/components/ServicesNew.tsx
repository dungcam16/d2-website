import { Workflow, Brain, BarChart3, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesNew = () => {
  const services = [
    {
      icon: Workflow,
      title: "Workflow Automation (n8n, Make)",
      description: "Streamline any process across apps and teams.",
      color: "primary",
    },
    {
      icon: Brain,
      title: "AI Integration (GPT, RAG, LangChain)",
      description: "Add intelligence to your automations with LLMs.",
      color: "accent",
    },
    {
      icon: BarChart3,
      title: "Data & Reporting Automation",
      description: "Generate daily dashboards and performance summaries.",
      color: "primary",
    },
    {
      icon: Network,
      title: "No-code System Architecture",
      description: "Design scalable, maintainable systems with expert oversight.",
      color: "accent",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Build
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-3 rounded-lg bg-${service.color}/10 mb-6`}>
                  <service.icon className={`h-8 w-8 text-${service.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
