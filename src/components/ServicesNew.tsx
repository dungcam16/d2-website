import { Workflow, Brain, BarChart3, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesNew = () => {
  const services = [
    {
      icon: Workflow,
      title: "n8n Workflow Automation",
      description: "Complex multi-step workflows with error handling, scheduling, and API integrations.",
      color: "primary",
      href: "/services/workflow-automation",
    },
    {
      icon: Brain,
      title: "AI & RAG Systems",
      description: "Custom LLM integrations with GPT-4, Claude, vector databases, and retrieval systems.",
      color: "accent",
      href: "/services/ai-rag",
    },
    {
      icon: BarChart3,
      title: "SaaS Product Development",
      description: "Full-stack SaaS applications with React, Node.js, Supabase, and AI capabilities.",
      color: "primary",
      href: "/services/saas-product",
    },
    {
      icon: Network,
      title: "API Development & Integration",
      description: "RESTful APIs, webhooks, OAuth flows, and third-party service integrations.",
      color: "accent",
      href: "/services/api-integration",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized technical skills for remote collaboration with international teams
          </p>
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
                
                <Link to={service.href}>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                    Learn more →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
