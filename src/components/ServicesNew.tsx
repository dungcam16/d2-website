import { Workflow, Brain, Database, Network, Target, Settings, GraduationCap, Bot, Server, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesNew = () => {
  const services = [
    {
      icon: Database,
      title: "Data & AI Development",
      description: "Predictive models, ML, NLP, CV, data pipelines",
      color: "primary",
      href: "/services/ai-rag",
    },
    {
      icon: Workflow,
      title: "Workflow & Automation",
      description: "n8n workflows, process automation, sync, optimization",
      color: "accent",
      href: "/services/workflow-automation",
    },
    {
      icon: Network,
      title: "Integration & API",
      description: "Custom APIs, legacy systems, webhooks, tool integration",
      color: "primary",
      href: "/services/api-integration",
    },
    {
      icon: Target,
      title: "Consulting & Strategy",
      description: "AI strategy, tech stack, process audit, ROI analysis",
      color: "accent",
      href: "/services/business-process",
    },
    {
      icon: Settings,
      title: "Support & Optimization",
      description: "24/7 monitoring, tuning, bug fixes, security updates",
      color: "primary",
      href: "/services/workflow-automation",
    },
    {
      icon: GraduationCap,
      title: "Training & Knowledge",
      description: "Training programs, documentation, workshops, handoff",
      color: "accent",
      href: "/services/business-process",
    },
    {
      icon: Bot,
      title: "Custom AI Solutions",
      description: "Chatbots, recommendation engines, anomaly detection",
      color: "primary",
      href: "/services/chatbot",
    },
    {
      icon: Server,
      title: "Enterprise Infrastructure",
      description: "Scalability, optimization, compliance, disaster recovery",
      color: "accent",
      href: "/services/saas-product",
    },
  ];

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Core Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized technical skills for remote collaboration with international teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="workflow-node animate-node-appear group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with pulse effect */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`relative p-4 rounded-xl bg-gradient-to-br ${
                  service.color === 'primary' 
                    ? 'from-primary/20 to-primary/5' 
                    : 'from-accent/20 to-accent/5'
                } animate-node-pulse`}>
                  <service.icon className={`h-8 w-8 ${
                    service.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card animate-pulse" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* CTA */}
              <Link to={service.href} className="block">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary hover:bg-primary/10 gap-2 group/btn"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>

              {/* Data flow indicator */}
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
