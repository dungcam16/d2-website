import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Contact Us",
      period: "",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "Up to 3 workflow automations",
        "Basic integrations (5 apps)",
        "Email support",
        "30 days of post-launch support",
        "Basic documentation",
        "1 revision round"
      ],
      cta: "Contact Us",
      popular: false
    },
    {
      name: "Professional",
      price: "Contact Us",
      period: "",
      description: "For growing businesses needing comprehensive automation",
      features: [
        "Up to 10 workflow automations",
        "Advanced integrations (15+ apps)",
        "Priority support (24-48h response)",
        "90 days of post-launch support",
        "Complete documentation & training",
        "3 revision rounds",
        "Custom code when needed",
        "Performance optimization"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      period: "",
      description: "For large organizations with complex automation needs",
      features: [
        "Unlimited workflow automations",
        "Enterprise integrations & custom APIs",
        "Dedicated support (4h response)",
        "6 months of post-launch support",
        "Full documentation & team training",
        "Unlimited revisions",
        "Advanced custom development",
        "SLA guarantees",
        "Security audit & compliance",
        "Dedicated account manager"
      ],
      cta: "Contact Us",
      popular: false
    }
  ];

  const addons = [
    { name: "Additional workflow", price: "Contact Us", description: "Per workflow complexity" },
    { name: "Monthly maintenance", price: "Contact Us", description: "Monitoring, updates & optimization" },
    { name: "Training session", price: "Contact Us", description: "2-hour team training" },
    { name: "Custom integration", price: "Contact Us", description: "Complex API development" }
  ];

  return (
    <>
      <SEO
        title="Automation Services Pricing | D2 Group"
        description="Transparent pricing for workflow automation services. From starter packages to enterprise solutions. Get custom quotes for n8n, Zapier, and AI automation projects."
        keywords="automation pricing, n8n pricing, workflow automation cost, Zapier alternative pricing"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choose the package that fits your needs. All plans include implementation, testing, and support.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" variant="default">
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link to="/company/contact">{plan.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Add-on Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{addon.name}</h3>
                    <Badge variant="secondary">{addon.price}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">What's included in the price?</h3>
                <p className="text-muted-foreground">All plans include strategy consultation, workflow design, implementation, testing, documentation, and post-launch support.</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Do you offer payment plans?</h3>
                <p className="text-muted-foreground">Yes, we offer 50% upfront and 50% upon completion for Professional and Enterprise plans.</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">What if I need changes after launch?</h3>
                <p className="text-muted-foreground">All plans include post-launch support. Additional changes can be added as maintenance packages or one-time fees.</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">How long does implementation take?</h3>
                <p className="text-muted-foreground">Starter: 1-2 weeks, Professional: 3-6 weeks, Enterprise: 8-12 weeks depending on complexity.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to discuss your automation needs
            </p>
            <Button size="lg" asChild>
              <Link to="/company/contact">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
