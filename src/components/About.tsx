import React from "react";
import { BarChart3, Target, TrendingUp, Users, Zap, Bot, Workflow, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Digital Performance Marketing",
      description: "Optimize advertising and marketing campaign performance with real-time data",
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI-Powered Automation",
      description: "Automate business processes with advanced AI and machine learning technology",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Multi-Platform Chatbots",
      description: "Intelligent chatbots across all platforms: Facebook, Instagram, Zalo, Website",
    },
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      title: "Business Process Optimization",
      description: "Optimize entire operational workflows with N8N workflow automation",
    },
  ];

  const stats = [
    { number: "200+", label: "Trusted Businesses", delay: "0.1s" },
    { number: "500+", label: "Automation Workflows", delay: "0.2s" },
    { number: "15x", label: "Average ROI Growth", delay: "0.3s" },
    { number: "99.9%", label: "Guaranteed Uptime", delay: "0.4s" },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 animate-float opacity-20">
          <Target className="h-20 w-20 text-primary" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float opacity-20" style={{ animationDelay: "3s" }}>
          <TrendingUp className="h-16 w-16 text-primary" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-foreground">Leading </span>
            <span className="text-primary">Automation & Digital Performance</span>
            <span className="text-foreground"> Agency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            D2 Group is the trusted partner for over 200 Vietnamese businesses in digital transformation, process
            automation, and marketing performance optimization. We combine advanced AI technology with a deep
            understanding of the Vietnamese market.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: stat.delay }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group glass-effect tech-border hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div
          className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center animate-scale-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="flex justify-center mb-6">
            <Users className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
            We are committed to helping Vietnamese businesses achieve sustainable growth by applying automation
            technology and digital performance marketing. Each solution is custom-designed to fit the culture and market
            of Vietnam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
