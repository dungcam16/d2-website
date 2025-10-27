import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Boxes, Rocket, Code, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function NoCodeLowCode() {
  const features = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Rapid Development",
      description: "Build and deploy applications 10x faster than traditional coding"
    },
    {
      icon: <Boxes className="h-6 w-6" />,
      title: "Visual Development",
      description: "Drag-and-drop interfaces with powerful automation capabilities"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Code Support",
      description: "Extend functionality with custom code when needed"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Integration Ready",
      description: "Connect with your existing tools and databases seamlessly"
    }
  ];

  const platforms = [
    { name: "Bubble", use: "Web applications & SaaS products" },
    { name: "Webflow", use: "Marketing websites & landing pages" },
    { name: "Airtable", use: "Database & workflow management" },
    { name: "Make", use: "Advanced automation scenarios" },
    { name: "Retool", use: "Internal tools & admin panels" },
    { name: "Softr", use: "Client portals & member sites" }
  ];

  return (
    <>
      <SEO
        title="No-Code & Low-Code Development Services | D2 Group"
        description="Build powerful applications without extensive coding. Expert no-code and low-code development using Bubble, Webflow, Airtable, Make, and more."
        keywords="no-code development, low-code platform, Bubble development, Webflow development, rapid application development"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              No-Code & Low-Code Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Build Faster with No-Code & Low-Code
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Launch your application in weeks, not months. We build powerful, scalable solutions 
              using the best no-code and low-code platforms without compromising on quality.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">See What We've Built</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why No-Code & Low-Code?</h2>
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

        {/* Platforms Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Platforms We Work With</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground">{platform.use}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What Can You Build?</h2>
                <p className="text-muted-foreground mb-6">
                  No-code and low-code platforms are powerful enough to build production-ready applications 
                  for businesses of all sizes. From MVPs to enterprise tools, we can help you build it.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>SaaS products & web applications</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Internal tools & admin dashboards</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Client portals & membership sites</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>E-commerce & marketplace platforms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>CRM & project management tools</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Marketing & landing pages</span>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">1. Discovery & Planning</h4>
                    <p className="text-sm text-muted-foreground">Understand your requirements and choose the right platform</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">2. Design & Prototype</h4>
                    <p className="text-sm text-muted-foreground">Create user-friendly designs and interactive prototypes</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">3. Build & Test</h4>
                    <p className="text-sm text-muted-foreground">Develop features iteratively with continuous testing</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">4. Launch & Support</h4>
                    <p className="text-sm text-muted-foreground">Deploy to production and provide ongoing support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Application?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how no-code/low-code can accelerate your project
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
