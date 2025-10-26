import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Zap, Users, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function SaasCompanies() {
  const challenges = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Onboarding",
      description: "Automate trial signup flows, welcome sequences, and feature adoption campaigns"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth & Retention",
      description: "Trigger lifecycle emails, usage alerts, and re-engagement campaigns automatically"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Customer Success",
      description: "Monitor health scores, automate check-ins, and prevent churn proactively"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Operations Scale",
      description: "Streamline billing, support tickets, and product analytics workflows"
    }
  ];

  const solutions = [
    "Automated user onboarding & trial workflows",
    "Customer health monitoring & alerts",
    "Usage-based billing automation",
    "Support ticket routing & prioritization",
    "Product analytics pipeline integration",
    "Churn prediction & prevention workflows"
  ];

  return (
    <>
      <SEO
        title="Automation Solutions for SaaS Companies | D2 Group"
        description="Scale your SaaS business with intelligent automation. Streamline onboarding, reduce churn, automate customer success, and optimize operations with custom workflows."
        keywords="SaaS automation, customer onboarding automation, churn prevention, SaaS operations, customer success automation"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              SaaS Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Scale Your SaaS with Smart Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Free your team from repetitive tasks. Focus on product development and customer experience 
              while we automate your operations, onboarding, and growth workflows.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/company/contact">Get Custom Solution <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">See SaaS Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common SaaS Challenges We Solve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Automation Built for SaaS Growth</h2>
                <p className="text-muted-foreground mb-6">
                  We understand the unique challenges of scaling a SaaS business. Our automation solutions 
                  help you deliver exceptional customer experiences while optimizing operational efficiency.
                </p>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Why SaaS Companies Choose Us</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Fast Implementation</h4>
                    <p className="text-sm text-muted-foreground">Launch automation in weeks, not months</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Scalable Architecture</h4>
                    <p className="text-sm text-muted-foreground">Workflows that grow with your user base</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Custom Integrations</h4>
                    <p className="text-sm text-muted-foreground">Connect your entire SaaS stack seamlessly</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Data-Driven Insights</h4>
                    <p className="text-sm text-muted-foreground">Track automation ROI and optimize continuously</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your SaaS?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build custom automation workflows for your SaaS platform
            </p>
            <Button size="lg" asChild>
              <Link to="/company/contact">Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
