import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Zap, Settings, RefreshCw, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function N8nAutomation() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Workflow Automation",
      description: "Automate complex business processes with n8n's powerful visual workflow builder"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom Integration",
      description: "Connect 300+ apps and services with custom logic and data transformations"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Real-time Sync",
      description: "Keep your data synchronized across multiple platforms in real-time"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Enterprise-grade automation that grows with your business needs"
    }
  ];

  const benefits = [
    "Self-hosted & secure automation platform",
    "500+ pre-built workflow templates",
    "Advanced data processing & transformation",
    "Webhook triggers & API integrations",
    "Custom code execution (JavaScript/Python)",
    "Monitoring & error handling built-in"
  ];

  return (
    <>
      <SEO
        title="n8n Automation Services - Workflow Automation & Integration | D2 Group"
        description="Professional n8n automation services. Build powerful workflow automation, integrate 300+ apps, and scale your business operations with custom n8n solutions."
        keywords="n8n automation, workflow automation, n8n integration, business process automation, n8n consulting"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              n8n Automation Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powerful Workflow Automation with n8n
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your business operations with custom n8n workflows. Automate repetitive tasks, 
              integrate your tools, and boost productivity with professional n8n automation solutions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose n8n Automation?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Complete n8n Automation Solutions</h2>
                <p className="text-muted-foreground mb-6">
                  We specialize in building custom n8n workflows that automate your unique business processes. 
                  From simple task automation to complex multi-system integrations, we deliver solutions that work.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our n8n Services</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Workflow Development</h4>
                    <p className="text-sm text-muted-foreground">Custom automation workflows tailored to your needs</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">System Integration</h4>
                    <p className="text-sm text-muted-foreground">Connect all your business tools seamlessly</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Migration & Setup</h4>
                    <p className="text-sm text-muted-foreground">Migrate from Zapier or set up n8n from scratch</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Training & Support</h4>
                    <p className="text-sm text-muted-foreground">Ongoing support and team training programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Workflows?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how n8n automation can transform your business operations
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
