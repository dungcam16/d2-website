import { Workflow, Brain, Database, Network, Target, Settings, GraduationCap, Bot, Server, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesNew = () => {
  const services = [
    {
      icon: Database,
      title: "Data & AI Development",
      description: "Predictive models, ML, NLP, CV, data pipelines",
      color: "primary",
      href: "/services/data-ai-development",
      features: ["Machine Learning models", "Natural Language Processing", "Computer Vision", "Data engineering pipelines"],
    },
    {
      icon: Workflow,
      title: "Workflow & Automation",
      description: "n8n workflows, process automation, sync, optimization",
      color: "accent",
      href: "/services/workflow-automation",
      features: ["n8n workflows", "Process automation", "System synchronization", "Performance optimization"],
    },
    {
      icon: Network,
      title: "Integration & API",
      description: "Custom APIs, legacy systems, webhooks, tool integration",
      color: "primary",
      href: "/services/api-integration",
      features: ["REST & GraphQL APIs", "Legacy system integration", "Webhook handling", "Third-party integrations"],
    },
    {
      icon: Target,
      title: "Consulting & Strategy",
      description: "AI strategy, tech stack, process audit, ROI analysis",
      color: "accent",
      href: "/services/consulting-strategy",
      features: ["AI strategy planning", "Tech stack selection", "Process auditing", "ROI analysis"],
    },
    {
      icon: Settings,
      title: "Support & Optimization",
      description: "24/7 monitoring, tuning, bug fixes, security updates",
      color: "primary",
      href: "/services/support-optimization",
      features: ["24/7 system monitoring", "Performance tuning", "Bug fixes & patches", "Security updates"],
    },
    {
      icon: GraduationCap,
      title: "Training & Knowledge",
      description: "Training programs, documentation, workshops, handoff",
      color: "accent",
      href: "/services/training-knowledge",
      features: ["Custom training programs", "Technical documentation", "Team workshops", "Knowledge handoff"],
    },
    {
      icon: Bot,
      title: "Custom AI Solutions",
      description: "Chatbots, recommendation engines, anomaly detection",
      color: "primary",
      href: "/services/chatbot",
      features: ["AI chatbots", "Recommendation systems", "Anomaly detection", "Intelligent automation"],
    },
    {
      icon: Server,
      title: "Enterprise Infrastructure",
      description: "Scalability, optimization, compliance, disaster recovery",
      color: "accent",
      href: "/services/enterprise-infrastructure",
      features: ["Scalability planning", "Infrastructure optimization", "Compliance management", "Disaster recovery"],
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
            <Card
              key={index}
              className="workflow-node animate-node-appear group hover:shadow-lg transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <service.icon className="w-10 h-10 mb-3 text-primary" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
