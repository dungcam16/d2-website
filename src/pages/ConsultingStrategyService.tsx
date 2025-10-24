import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Target, CheckCircle, ArrowRight, Brain, TrendingUp, Shield, Users, Lightbulb } from "lucide-react";

const ConsultingStrategyService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Consulting & Strategy - AI Implementation & Business Process Optimization | D2 Group"
        description="Expert AI strategy consulting, tech stack selection, process auditing, and ROI analysis. Transform your business with data-driven insights and strategic planning."
        keywords="AI strategy consulting, business process optimization, tech stack selection, ROI analysis, digital transformation, process auditing"
        canonicalUrl="/services/consulting-strategy"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Turn Strategy Into Action. <span className="text-primary">AI-Powered</span> Business Transformation
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Expert consulting to identify opportunities, design AI strategies, and implement automation that drives measurable ROI. From initial audit to full deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                Download: AI Readiness Checklist
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, value: "85%", label: "Success Rate", desc: "Projects achieving KPIs" },
              { icon: TrendingUp, value: "3.2x", label: "Average ROI", desc: "Within 12 months" },
              { icon: Shield, value: "100+", label: "Strategies", desc: "Delivered successfully" },
              { icon: Users, value: "98%", label: "Client Satisfaction", desc: "Would recommend" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card p-6 text-center animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive strategy and implementation support for your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Strategy Planning",
                description: "Define AI vision, identify high-impact use cases, create roadmap",
                features: ["Use case identification", "Technology assessment", "Roadmap creation", "Budget planning"],
              },
              {
                icon: Target,
                title: "Tech Stack Selection",
                description: "Choose the right tools and platforms for your specific needs",
                features: ["Platform evaluation", "Vendor comparison", "Cost analysis", "Integration planning"],
              },
              {
                icon: TrendingUp,
                title: "Process Auditing",
                description: "Identify inefficiencies and automation opportunities",
                features: ["Current state analysis", "Bottleneck identification", "Automation opportunities", "Process mapping"],
              },
              {
                icon: Shield,
                title: "ROI Analysis",
                description: "Calculate expected returns and build business cases",
                features: ["Cost-benefit analysis", "Risk assessment", "Timeline projection", "Success metrics"],
              },
              {
                icon: Users,
                title: "Change Management",
                description: "Prepare your team for successful adoption",
                features: ["Training programs", "Communication plans", "User adoption", "Support systems"],
              },
              {
                icon: Lightbulb,
                title: "Innovation Workshops",
                description: "Collaborative sessions to discover new possibilities",
                features: ["Brainstorming sessions", "Prototype design", "Feasibility studies", "Quick wins identification"],
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free 30-minute strategy session to discuss your goals
          </p>
          <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
            Book Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultingStrategyService;
