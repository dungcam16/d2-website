import React from 'react';
import { MessageCircle, Zap, Workflow, ArrowRight, Bot, Globe, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Multi-Platform Chatbots",
      description: "Intelligent conversational AI across Facebook Messenger, Instagram, WhatsApp, Telegram, Zalo, and Website integration.",
      features: [
        "Cross-platform messaging",
        "AI-powered responses",
        "Seamless handoffs",
        "Analytics & insights"
      ],
      color: "text-blue-400",
      delay: "0s"
    },
    {
      icon: Zap,
      title: "Zalo OA Complete Solutions",
      description: "Comprehensive Zalo Official Account management with ZNS messaging and integrated chatbot packages for Vietnamese market.",
      features: [
        "Zalo OA setup & management",
        "ZNS messaging campaigns",
        "Integrated chatbot flows",
        "Vietnamese market optimization"
      ],
      color: "text-green-400",
      delay: "0.2s"
    },
    {
      icon: Workflow,
      title: "N8N Enterprise Automation",
      description: "Advanced business process automation using N8N workflows to optimize operations and eliminate manual tasks.",
      features: [
        "Custom workflow design",
        "API integrations",
        "Process optimization",
        "Scalable automation"
      ],
      color: "text-primary",
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Core Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation solutions designed to transform Vietnamese businesses 
            through intelligent technology and proven methodologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
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
                      <div className={`inline-flex p-4 rounded-xl bg-card/50 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

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
                    <Button variant="outline" className="w-full tech-border group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold font-heading mb-8 text-foreground">
            Powered by <span className="text-primary">Cutting-Edge Technology</span>
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['N8N', 'Zalo', 'WhatsApp', 'Facebook', 'Instagram', 'Telegram'].map((tech, index) => (
              <div 
                key={tech}
                className="px-6 py-3 glass-effect rounded-lg tech-border hover:text-primary transition-all cursor-pointer animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-light/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Services;