import React from "react";
import {
  MessageCircle,
  Zap,
  Workflow,
  ArrowRight,
  Bot,
  Globe,
  Settings,
  TrendingUp,
  Search,
  Code,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const automationServices = [
    {
      icon: Workflow,
      title: "N8N Workflow Development",
      description:
        "Design & implement automation workflows on the n8n platform with JavaScript/TypeScript scripting, error handling, and monitoring.",
      features: [
        "Build triggers, nodes & sub-workflows",
        "JavaScript/TypeScript scripting",
        "Error handling & retry logic",
        "Monitoring & logging system",
      ],
      color: "text-blue-400",
      delay: "0s",
      href: "/services/n8n-workflow",
    },
    {
      icon: Settings,
      title: "Business Process Automation",
      description:
        "Consult & optimize operational processes, analyze AS-IS/TO-BE, and design a comprehensive blueprint to ensure effective automation.",
      features: [
        "Current state process analysis",
        "AS-IS/TO-BE flowchart design",
        "KPI & SLA definition",
        "Comprehensive automation blueprint",
      ],
      color: "text-green-400",
      delay: "0.2s",
      href: "/services/business-process",
    },
    {
      icon: Bot,
      title: "AI Integration & Optimization",
      description:
        "Integrate AI (GPT-4, Claude) into workflows for auto-classification, sentiment analysis, document parsing, and predictive analytics.",
      features: [
        "LLM Integration (GPT-4, Claude)",
        "Auto-classification & sentiment analysis",
        "Document parsing & extraction",
        "Predictive analytics with ML",
      ],
      color: "text-purple-400",
      delay: "0.4s",
      href: "/services/ai-integration",
    },
  ];

  const digitalServices = [
    {
      icon: MessageCircle,
      title: "Chatbot & Conversational AI",
      description:
        "Intelligent conversational AI on Facebook Messenger, Instagram, WhatsApp, Telegram, Zalo, and Website integration.",
      features: [
        "Multi-platform messaging",
        "Intelligent AI responses",
        "Seamless agent handover",
        "Analytics & reporting",
      ],
      color: "text-cyan-400",
      delay: "0.6s",
      href: "/services/chatbot",
    },
    {
      icon: Zap,
      title: "Zalo OA Management",
      description:
        "Complete Zalo Official Account management with ZNS messaging and integrated chatbot packages for the Vietnamese market.",
      features: [
        "Zalo OA setup & management",
        "ZNS message campaigns",
        "Integrated chatbot flows",
        "Optimized for the Vietnam market",
      ],
      color: "text-yellow-400",
      delay: "0.8s",
      href: "/services/zalo",
    },
    {
      icon: TrendingUp,
      title: "Content Performance Marketing",
      description:
        "Comprehensive content marketing strategy with SEO optimization, analytics, and performance tracking for sustainable growth.",
      features: [
        "Content strategy & planning",
        "SEO content optimization",
        "Performance analytics",
        "Multi-channel distribution",
      ],
      color: "text-orange-400",
      delay: "1.0s",
      href: "/services/content",
    },
    {
      icon: Search,
      title: "Technical SEO Optimization",
      description:
        "Professional SEO services with a top 3 Google ranking commitment, a 400% increase in organic traffic, and sustainable ROI.",
      features: [
        "Technical SEO audit",
        "Keyword strategy & optimization",
        "Content & link building",
        "Top 3 ranking guarantee",
      ],
      color: "text-pink-400",
      delay: "1.2s",
      href: "/services/seo",
    },
    {
      icon: Code,
      title: "Automation-Ready Website Development",
      description:
        "Develop modern, responsive websites with optimal UI/UX, built to be automation-ready and SEO-optimized from the ground up.",
      features: [
        "Responsive design & mobile-first",
        "Modern UI/UX experience",
        "Built-in SEO optimization",
        "CMS & automation integration",
      ],
      color: "text-indigo-400",
      delay: "1.4s",
      href: "/services/website",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
            Our <span className="text-primary">Core Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation solutions designed to transform Vietnamese businesses through intelligent
            technology and proven methodologies.
          </p>
        </div>

        {/* Automation Services - Featured */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-foreground flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            🎯 AUTOMATION SERVICES
          </h3>
          <p className="text-muted-foreground mb-8">Our primary automation offerings</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service) => {
              const IconComponent = service.icon;

              return (
                <Card
                  key={service.title}
                  className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in relative overflow-hidden"
                  style={{ animationDelay: service.delay }}
                >
                  <div className="shimmer-effect">
                    <div className="p-8 relative z-10">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div
                          className={`inline-flex p-4 rounded-xl bg-card/50 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-glow transition-all"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        variant="outline"
                        className="w-full tech-border group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        onClick={() => (window.location.href = service.href)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Digital Services - Supporting */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-foreground flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            💼 DIGITAL SERVICES
          </h3>
          <p className="text-muted-foreground mb-8">Additional services to fuel your growth</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service) => {
              const IconComponent = service.icon;

              return (
                <Card
                  key={service.title}
                  className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in relative overflow-hidden"
                  style={{ animationDelay: service.delay }}
                >
                  <div className="shimmer-effect">
                    <div className="p-8 relative z-10">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div
                          className={`inline-flex p-4 rounded-xl bg-card/50 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-glow transition-all"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        variant="outline"
                        className="w-full tech-border group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        onClick={() => (window.location.href = service.href)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-light/3 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  );
};

export default Services;
