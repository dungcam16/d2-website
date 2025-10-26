import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "We're on a mission to make automation accessible to businesses of all sizes"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Focused",
      description: "Your success is our success. We build solutions that drive real business results"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, security, and support"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of automation trends to deliver cutting-edge solutions"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10K+", label: "Hours Automated" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <>
      <SEO
        title="About D2 Group - Automation & AI Integration Experts"
        description="Learn about D2 Group, your trusted partner for n8n automation, AI integration, and workflow optimization. We help businesses scale through intelligent automation."
        keywords="about D2 Group, automation agency, n8n experts, workflow automation company"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              We Build Automation That Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              D2 Group specializes in workflow automation, AI integration, and business process optimization. 
              We help companies scale efficiently by automating repetitive tasks and building intelligent systems.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                D2 Group was founded with a simple belief: every business deserves access to powerful automation, 
                regardless of their technical expertise or budget constraints.
              </p>
              <p className="text-muted-foreground mb-4">
                We started by helping small businesses automate their manual processes with tools like n8n and Zapier. 
                As we grew, we expanded into AI integration, custom development, and enterprise-scale automation solutions.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to work with businesses across industries—from SaaS startups to established 
                enterprises—helping them save time, reduce costs, and scale operations through intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help automate and scale your business
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/company/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
