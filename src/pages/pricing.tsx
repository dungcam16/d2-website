import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  ArrowRight, 
  X, 
  DollarSign,
  Zap,
  Shield,
  Clock,
  Users,
  Star,
  Calculator,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"project" | "retainer">("project");

  const projectPlans = [
    {
      name: "Starter",
      price: "$3,000",
      priceRange: "$3K - $5K",
      period: "one-time",
      description: "Perfect for small businesses starting their automation journey",
      ideal: "1-3 simple workflows",
      timeline: "2-3 weeks",
      features: [
        "Up to 3 workflow automations",
        "Basic integrations (5 apps)",
        "Email & chat support",
        "30 days post-launch support",
        "Basic documentation",
        "1 revision round",
        "n8n or Zapier setup"
      ],
      notIncluded: [
        "Custom code development",
        "Advanced integrations",
        "Training sessions",
        "Priority support"
      ],
      cta: "Get Started",
      popular: false,
      savings: null
    },
    {
      name: "Professional",
      price: "$8,000",
      priceRange: "$8K - $15K",
      period: "one-time",
      description: "For growing businesses needing comprehensive automation",
      ideal: "5-10 complex workflows",
      timeline: "4-6 weeks",
      features: [
        "Up to 10 workflow automations",
        "Advanced integrations (15+ apps)",
        "Priority support (24h response)",
        "90 days post-launch support",
        "Complete documentation & training",
        "3 revision rounds",
        "Custom code when needed",
        "Performance optimization",
        "Error handling & monitoring",
        "2 training sessions (4 hours)"
      ],
      notIncluded: [
        "Dedicated account manager",
        "SLA guarantees",
        "24/7 emergency support"
      ],
      cta: "Most Popular",
      popular: true,
      savings: "Save 40% vs hourly"
    },
    {
      name: "Enterprise",
      price: "$25,000+",
      priceRange: "$25K+",
      period: "custom scope",
      description: "For large organizations with complex automation needs",
      ideal: "Unlimited workflows",
      timeline: "8-12 weeks",
      features: [
        "Unlimited workflow automations",
        "Enterprise integrations & custom APIs",
        "Dedicated support (4h response)",
        "6 months post-launch support",
        "Full documentation & team training",
        "Unlimited revisions",
        "Advanced custom development",
        "SLA guarantees (99.9% uptime)",
        "Security audit & compliance",
        "Dedicated account manager",
        "White-glove onboarding",
        "Quarterly optimization reviews"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
      savings: "ROI within 3 months"
    }
  ];

  const retainerPlans = [
    {
      name: "Maintenance",
      price: "$500",
      period: "/month",
      description: "Keep your workflows running smoothly",
      features: [
        "Monitoring & bug fixes",
        "Monthly performance report",
        "Small updates (up to 2 hours/month)",
        "Email support (48h response)",
        "Documentation updates"
      ],
      cta: "Get Started",
      popular: false,
      hours: "~4 hours/month"
    },
    {
      name: "Growth",
      price: "$1,500",
      period: "/month",
      description: "Continuous optimization and new features",
      features: [
        "Everything in Maintenance",
        "New workflow development (up to 8 hours/month)",
        "Priority support (24h response)",
        "Bi-weekly check-ins",
        "Proactive optimization",
        "Integration updates",
        "Monthly training sessions"
      ],
      cta: "Most Popular",
      popular: true,
      hours: "~12 hours/month"
    },
    {
      name: "Dedicated",
      price: "$5,000",
      period: "/month",
      description: "Full-time automation team at your service",
      features: [
        "Everything in Growth",
        "Unlimited workflow development",
        "Dedicated support (4h response)",
        "Weekly strategy calls",
        "Custom integrations & APIs",
        "Advanced analytics & reporting",
        "Team training & workshops",
        "Dedicated Slack channel"
      ],
      cta: "Contact Sales",
      popular: false,
      hours: "~40 hours/month"
    }
  ];

  const addons = [
    { 
      name: "Additional Workflow", 
      price: "$800 - $2,500", 
      description: "Price varies by complexity",
      icon: Zap 
    },
    { 
      name: "Training Session", 
      price: "$400", 
      description: "2-hour team training per session",
      icon: Users 
    },
    { 
      name: "Custom Integration", 
      price: "$1,500 - $5,000", 
      description: "Complex API development",
      icon: Shield 
    },
    { 
      name: "Migration Service", 
      price: "$2,000 - $8,000", 
      description: "Zapier/Make to n8n migration",
      icon: ArrowRight 
    }
  ];

  const comparisonFeatures = [
    {
      category: "Workflows & Integrations",
      features: [
        { name: "Number of workflows", starter: "Up to 3", professional: "Up to 10", enterprise: "Unlimited" },
        { name: "App integrations", starter: "5 apps", professional: "15+ apps", enterprise: "Unlimited + Custom APIs" },
        { name: "Custom code", starter: false, professional: true, enterprise: true },
        { name: "API development", starter: false, professional: "Basic", enterprise: "Advanced" }
      ]
    },
    {
      category: "Support & Maintenance",
      features: [
        { name: "Support response time", starter: "48 hours", professional: "24 hours", enterprise: "4 hours" },
        { name: "Post-launch support", starter: "30 days", professional: "90 days", enterprise: "6 months" },
        { name: "Revision rounds", starter: "1", professional: "3", enterprise: "Unlimited" },
        { name: "Dedicated account manager", starter: false, professional: false, enterprise: true }
      ]
    },
    {
      category: "Training & Documentation",
      features: [
        { name: "Documentation", starter: "Basic", professional: "Complete", enterprise: "Full + Video" },
        { name: "Training sessions", starter: "None", professional: "2 sessions", enterprise: "Unlimited" },
        { name: "Team workshops", starter: false, professional: false, enterprise: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "What's included in the project price?",
      answer: "All project plans include: strategy consultation, workflow design & architecture, implementation, testing, documentation, and post-launch support. You get a complete, production-ready automation solution."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! For Professional and Enterprise plans, we offer: 50% upfront to start the project, 50% upon completion and approval. For retainer plans, monthly billing."
    },
    {
      question: "What if I need changes after launch?",
      answer: "All plans include post-launch support (30-180 days depending on plan). After that, you can: purchase hourly support ($150/hour), upgrade to a retainer plan, or request a quote for specific changes."
    },
    {
      question: "How long does implementation take?",
      answer: "Starter: 2-3 weeks | Professional: 4-6 weeks | Enterprise: 8-12 weeks. Timeline depends on complexity, integrations needed, and your team's availability for feedback."
    },
    {
      question: "What if I'm not sure which plan I need?",
      answer: "Book a free 30-minute consultation. We'll discuss your workflows, volume, integrations needed, and recommend the best plan. No obligation."
    },
    {
      question: "Do you charge per automation execution?",
      answer: "No! Unlike Zapier/Make, we build self-hosted or flat-rate solutions. You pay once for development, then only for hosting (if needed) or optional maintenance."
    },
    {
      question: "What's the difference between project vs retainer?",
      answer: "Project-based: One-time payment for a defined scope. Best for building initial automations. Retainer: Monthly ongoing support for maintenance, optimization, and new features."
    },
    {
      question: "Can I switch plans later?",
      answer: "Yes! You can upgrade anytime. If you start with a project and want ongoing support, we'll credit your project payment toward a retainer plan."
    }
  ];

  const industries = [
    { name: "E-commerce", avgProject: "$8K-$15K", roi: "4-6 months" },
    { name: "SaaS", avgProject: "$12K-$25K", roi: "3-5 months" },
    { name: "Financial Services", avgProject: "$15K-$35K", roi: "6-9 months" },
    { name: "Marketing Agencies", avgProject: "$6K-$12K", roi: "2-4 months" }
  ];

  return (
    <>
      <SEO
        title="Pricing - Automation Services Starting at $3,000 | D2 Group"
        description="Transparent pricing for n8n workflow automation. Starter plans from $3K, Professional from $8K, Enterprise from $25K. No hidden fees. ROI-focused solutions for businesses."
        keywords="automation pricing, n8n pricing, workflow automation cost, Zapier alternative pricing, automation services cost"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <DollarSign className="w-3 h-3 mr-1" />
              Transparent Pricing • No Hidden Fees
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choose the package that fits your needs. All plans include implementation, testing, and support. 
              <strong className="text-foreground"> Average ROI within 3-6 months.</strong>
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              {[
                { label: "Starting from", value: "$3,000" },
                { label: "Avg ROI Time", value: "4 months" },
                { label: "Projects Delivered", value: "127+" },
                { label: "Client Satisfaction", value: "98%" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources/roi-calculator">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Your ROI
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Toggle */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs value={billingCycle} onValueChange={(v) => setBillingCycle(v as any)} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="project">Project-Based</TabsTrigger>
                <TabsTrigger value="retainer">Monthly Retainer</TabsTrigger>
              </TabsList>

              {/* Project-Based Pricing */}
              <TabsContent value="project">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {projectPlans.map((plan, index) => (
                    <Card 
                      key={index} 
                      className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'hover:shadow-lg'} transition-all`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 shadow-lg" variant="default">
                          <Star className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      )}
                      
                      <CardHeader>
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <div className="mb-2">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-sm text-muted-foreground">{plan.period}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Typical range: {plan.priceRange}
                          </div>
                        </div>
                        <CardDescription className="text-base">{plan.description}</CardDescription>
                        
                        <div className="grid grid-cols-2 gap-2 pt-3">
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">Ideal for</div>
                            <div className="text-xs font-semibold">{plan.ideal}</div>
                          </div>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">Timeline</div>
                            <div className="text-xs font-semibold">{plan.timeline}</div>
                          </div>
                        </div>

                        {plan.savings && (
                          <Badge variant="secondary" className="w-fit mt-2">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {plan.savings}
                          </Badge>
                        )}
                      </CardHeader>

                      <CardContent className="flex-grow flex flex-col">
                        <Button 
                          className="w-full mb-6" 
                          size="lg"
                          variant={plan.popular ? "default" : "outline"} 
                          asChild
                        >
                          <Link to="/contact">
                            {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>

                        <div className="space-y-4">
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground mb-3">WHAT'S INCLUDED:</p>
                            <ul className="space-y-2">
                              {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {plan.notIncluded.length > 0 && (
                            <>
                              <Separator />
                              <div>
                                <p className="text-xs font-semibold text-muted-foreground mb-3">NOT INCLUDED:</p>
                                <ul className="space-y-2">
                                  {plan.notIncluded.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                      <span className="text-sm text-muted-foreground">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Retainer Pricing */}
              <TabsContent value="retainer">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {retainerPlans.map((plan, index) => (
                    <Card 
                      key={index} 
                      className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-xl scale-105' : 'hover:shadow-lg'} transition-all`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" variant="default">
                          Most Popular
                        </Badge>
                      )}
                      
                      <CardHeader>
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <div className="mb-2">
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">{plan.period}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            ~{plan.hours} included
                          </div>
                        </div>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="flex-grow flex flex-col">
                        <Button 
                          className="w-full mb-6" 
                          variant={plan.popular ? "default" : "outline"} 
                          asChild
                        >
                          <Link to="/contact">{plan.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                        
                        <ul className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Why choose a retainer?</h3>
                        <p className="text-sm text-muted-foreground">
                          Retainer plans are perfect for businesses that want ongoing optimization, new features, 
                          and priority support. Save 30-40% vs hourly billing and get predictable monthly costs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Add-on Services</h2>
              <p className="text-muted-foreground">Extend your automation capabilities with these optional services</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, index) => {
                const IconComponent = addon.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold">{addon.name}</h3>
                          <Badge variant="secondary" className="ml-2">{addon.price}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{addon.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Detailed Plan Comparison</h2>
              <p className="text-muted-foreground">See exactly what's included in each plan</p>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold bg-primary/10">Professional</th>
                      <th className="text-center p-4 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category, catIdx) => (
                      <React.Fragment key={catIdx}>
                        <tr className="bg-muted/50">
                          <td colSpan={4} className="p-3 font-semibold text-sm">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature, featIdx) => (
                          <tr key={featIdx} className="border-b">
                            <td className="p-4 text-sm">{feature.name}</td>
                            <td className="p-4 text-center text-sm">
                              {typeof feature.starter === 'boolean' ? (
                                feature.starter ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />
                              ) : (
                                feature.starter
                              )}
                            </td>
                            <td className="p-4 text-center text-sm bg-primary/5">
                              {typeof feature.professional === 'boolean' ? (
                                feature.professional ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />
                              ) : (
                                feature.professional
                              )}
                            </td>
                            <td className="p-4 text-center text-sm">
                              {typeof feature.enterprise === 'boolean' ? (
                                feature.enterprise ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />
                              ) : (
                                feature.enterprise
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Industry Pricing Guide */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pricing by Industry</h2>
              <p className="text-muted-foreground">Average project costs and ROI timelines</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-primary">{industry.avgProject}</div>
                      <div className="text-xs text-muted-foreground">Typical project cost</div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-lg font-semibold">{industry.roi}</div>
                      <div className="text-xs text-muted-foreground">Avg ROI timeline</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pricing FAQs</h2>
              <p className="text-muted-foreground">Everything you need to know about our pricing</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all">
                  <h3 className="font-semibold mb-3 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-muted-foreground pl-7">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a free 30-minute consultation to discuss your automation needs. 
              We'll recommend the best plan and provide a detailed quote.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
              {[
                "✅ Free consultation (no obligation)",
                "✅ Custom quote within 24 hours",
                "✅ ROI analysis included"
              ].map((item, idx) => (
                <div key={idx} className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 border-white" asChild>
                <a href="mailto:info@d2group.co">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
