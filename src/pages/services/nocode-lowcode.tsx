import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Boxes,
  Rocket,
  Code,
  Layers,
  CheckCircle,
  Star,
  Clock,
  Users,
  DollarSign,
  Target,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
  Settings,
  PlayCircle,
  Download,
  FileText,
  Award,
  GitBranch,
  Activity,
  Globe,
  BarChart3,
  Package,
  Lock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export default function NoCodeLowCode() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "No-Code/Low-Code Application Development",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Enterprise-grade no-code/low-code solutions using Webflow, Bubble, Retool, Airtable, and Softr. Built in 2-4 weeks, not months. 50+ custom apps delivered.",
    areaServed: ["US", "EU"],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does implementation actually take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Discovery (Week 1) → Prototype (Week 2) → Development (Week 3) → Launch (Week 4). Fast-track projects can go live in 2 weeks. Complex projects with many integrations may take 6-8 weeks.",
        },
      },
    ],
  };

  // Problem Pain Points
  const problems = [
    {
      icon: Clock,
      title: "Time Waste",
      problem: "Traditional development takes 3-6 months for simple applications. Your competitors are already using automated systems while you're still waiting.",
      cost: "Every month of delay = lost productivity, manual processes, employee frustration, and competitive disadvantage.",
      hook: "You know exactly what you need, but developers keep pushing timelines back."
    },
    {
      icon: DollarSign,
      title: "Developer Shortage & Cost",
      problem: "Full-stack developers cost $80-150K+ annually. And finding good ones? Nearly impossible. Even if you hire, they'll leave in 2 years, taking your knowledge with them.",
      cost: "Recruitment time + onboarding + salary + benefits = $250K+ before building your first app.",
      hook: "You can't afford to hire developers. You shouldn't have to."
    },
    {
      icon: AlertTriangle,
      title: "Inflexible Solutions",
      problem: "Off-the-shelf tools don't fit your workflow. Custom code is too expensive. You're stuck choosing between 'good enough' and 'out of budget.'",
      cost: "Your team works around tools instead of tools working for you. Hours wasted on manual workarounds.",
      hook: "Your business is unique. Your tools should be too."
    },
    {
      icon: TrendingUp,
      title: "Scaling Nightmares",
      problem: "As you grow, your custom app becomes a liability. The developer who built it is gone. Maintenance costs spiral. You're locked into old technology.",
      cost: "Technical debt + maintenance costs + inability to adapt = $100K-500K over 3 years.",
      hook: "You need a solution that grows WITH you, not against you."
    },
    {
      icon: Users,
      title: "Internal Bottlenecks",
      problem: "Your team spends 50% of their time on manual data entry, spreadsheet management, and repetitive tasks instead of high-value work.",
      cost: "Lost productivity per employee per year: 250 hours × salary = $20K-50K per person wasted.",
      hook: "Your best people are doing robot work. You're paying premium salaries for data entry."
    }
  ];

  // Features
  const features = [
    {
      icon: Globe,
      title: "Webflow Custom Websites & Portals",
      description: "High-performance websites with advanced interactions, animations, and custom logic.",
      benefit: "Professional online presence that loads in <2 seconds and converts visitors. Your client portal becomes a competitive advantage.",
      useCase: "Customer portals, internal knowledge bases, company websites"
    },
    {
      icon: Rocket,
      title: "Bubble Web Applications",
      description: "Full-featured web applications with user authentication, databases, workflows, and payment processing.",
      benefit: "Deploy SaaS-quality apps without hiring a development team. Your idea → live product in 2-3 weeks.",
      useCase: "Project management tools, CRM systems, booking platforms, marketplaces"
    },
    {
      icon: BarChart3,
      title: "Retool Internal Dashboards & Tools",
      description: "Real-time dashboards connecting to your databases, APIs, and business tools with zero front-end code.",
      benefit: "Your team gets instant visibility into business metrics. Data-driven decisions become the default.",
      useCase: "Admin dashboards, analytics dashboards, customer management tools, operations centers"
    },
    {
      icon: GitBranch,
      title: "Airtable + Zapier Automations",
      description: "Connect Airtable with 1,000+ apps to automate workflows, data syncing, and notifications.",
      benefit: "Information flows automatically. Your team spends less time managing data, more time analyzing it.",
      useCase: "Form automation, lead management, content calendars, project tracking"
    },
    {
      icon: Package,
      title: "Softr Client Portals",
      description: "Convert Airtable or spreadsheets into branded client portals without coding.",
      benefit: "Clients have instant access to project status, deliverables, and updates. Reduces support requests by 60%+.",
      useCase: "Client portals, project management dashboards, form submissions, document sharing"
    },
    {
      icon: Code,
      title: "API Integrations & Custom Logic",
      description: "Connect your no-code apps to any API or external system with custom JavaScript/webhooks.",
      benefit: "Your app integrates with your entire tech stack seamlessly. No data silos.",
      useCase: "Stripe payments, HubSpot CRM, Google Workspace, custom proprietary systems"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "They delivered in 3 weeks what our development team said would take 6 months.",
      name: "Sarah Chen",
      role: "VP Operations",
      company: "TechFlow (SaaS)",
      result: "Built internal project management dashboard → 30 hours/week saved",
      before: "Spreadsheets + manual updates = chaos",
      after: "Real-time dashboard + automated reporting = visibility"
    },
    {
      quote: "This portal cut our customer onboarding time from 2 days to 2 hours.",
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "Digital Growth Agency",
      result: "Client onboarding portal + automated workflows → improved satisfaction",
      before: "Manual form collection + email back-and-forth",
      after: "Self-service portal + instant integrations"
    },
    {
      quote: "No-code doesn't mean low-quality. D2 Group proved that.",
      name: "Lisa Patel",
      role: "Head of Product",
      company: "E-commerce Platform",
      result: "Built customer analytics dashboard + checkout portal → 25% conversion increase",
      before: "Expensive custom development = slow iterations",
      after: "Fast iterations = rapid optimization"
    }
  ];

  // Pricing Tiers
  const pricingTiers = [
    {
      name: "Starter App",
      price: "Contact Us",
      timeline: "2-3 weeks",
      popular: false,
      ideal: "Small teams, simple workflows, internal tools",
      features: [
        "Simple no-code application (Bubble, Webflow, or Retool)",
        "Basic integrations (up to 2 tools)",
        "User authentication",
        "Basic training + documentation",
        "30 days post-launch support"
      ],
      example: "Lead form + automated email notifications, simple project tracker, basic admin dashboard"
    },
    {
      name: "Professional App",
      price: "Contact Us",
      timeline: "3-4 weeks",
      popular: true,
      ideal: "SaaS companies, agencies, scaling businesses",
      features: [
        "Advanced application (Bubble or Retool)",
        "Complex integrations (up to 5 tools)",
        "Database design + management",
        "User roles & permissions",
        "Payment processing setup",
        "Comprehensive training + handoff documentation",
        "60 days post-launch support + 2 free revisions"
      ],
      example: "Full CRM system, customer portal + dashboard, advanced project management tool, SaaS MVP"
    },
    {
      name: "Enterprise Solution",
      price: "Custom Quote",
      timeline: "4-8 weeks",
      popular: false,
      ideal: "Large enterprises, complex systems, white-label solutions",
      features: [
        "Complex multi-platform solution",
        "Unlimited integrations",
        "Custom API development",
        "White-label branding",
        "Advanced security & compliance",
        "Ongoing maintenance & updates",
        "Dedicated support + success manager",
        "90 days post-launch support"
      ],
      example: "Enterprise client portal system, marketplace platform, custom SaaS product, internal operations hub"
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What's the difference between no-code and custom development?",
      answer: "Custom development uses programming languages (JavaScript, Python, etc.) built from scratch. No-code uses visual builders to assemble pre-built components. The result? Same functionality, but no-code is 3-6x faster and 50-70% cheaper. The tradeoff: no-code has some limitations on edge-case customizations (which don't matter for 95% of businesses)."
    },
    {
      question: "Will my app work when it grows? What about scaling?",
      answer: "Yes. Bubble, Webflow, Retool, and Airtable all handle enterprise-level traffic. Netflix, Slack, and other major companies use similar no-code tools for portions of their infrastructure. We architect your app to scale from day one. If you eventually need custom development, your no-code app becomes a perfect prototype."
    },
    {
      question: "How long does implementation actually take?",
      answer: "Discovery (Week 1) → Prototype (Week 2) → Development (Week 3) → Launch (Week 4). Fast-track projects can go live in 2 weeks. Complex projects with many integrations may take 6-8 weeks. We give you an exact timeline in Week 1."
    },
    {
      question: "What happens after launch? Can I update the app myself?",
      answer: "We provide complete documentation and training. If it's simple (copy changes, form tweaks), your team can do it. If it's complex logic, you have options: update it yourself, hire a no-code freelancer, or hire us for ongoing support ($500-2,000/month). You're not locked in."
    },
    {
      question: "How much does ongoing maintenance cost?",
      answer: "Most apps need minimal maintenance. Updates are rare. We offer optional monthly support ($500-2,000/month) for continuous optimization, new features, or peace of mind. Many clients need nothing after launch."
    },
    {
      question: "What if I need to integrate with my existing systems?",
      answer: "That's our specialty. We integrate with Salesforce, HubSpot, Stripe, Google Workspace, custom APIs—basically anything with an API or webhook. Integration costs $500 per tool (usually included in project scope)."
    },
    {
      question: "Is my data secure? What about compliance?",
      answer: "All platforms we use (Bubble, Webflow, Retool) are SOC 2 certified and GDPR compliant. Data is encrypted in transit and at rest. For enterprise clients requiring additional security, we deploy on private servers or your own infrastructure."
    }
  ];

  // Platforms
  const platforms = [
    { name: "Bubble", icon: Rocket, use: "Web applications & SaaS products" },
    { name: "Webflow", icon: Globe, use: "Marketing websites & landing pages" },
    { name: "Airtable", icon: FileText, use: "Database & workflow management" },
    { name: "Make", icon: Settings, use: "Advanced automation scenarios" },
    { name: "Retool", icon: BarChart3, use: "Internal tools & admin panels" },
    { name: "Softr", icon: Package, use: "Client portals & member sites" }
  ];

  return (
    <>
      <SEO
        title="Custom Business Apps Built in Weeks, Not Months | No-Code Development | D2 Group"
        description="Enterprise-grade no-code solutions using Webflow, Bubble, Retool, Airtable. Built in 2-4 weeks. 50+ custom apps delivered. Save 60-70% vs traditional development."
        keywords="no-code development, low-code platform, Bubble development, Webflow development, rapid application development, Retool dashboard, Airtable automation"
        canonicalUrl="/services/nocode-lowcode"
        structuredData={[structuredData, faqStructuredData]}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/nocode-lowcode' },
          { name: 'No-Code/Low-Code', url: '/services/nocode-lowcode' }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                ✅ 50+ Custom Apps Built • 2-4 Week Average Delivery
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom Business Apps Built in <span className="text-primary">Weeks, Not Months</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Get enterprise-grade web applications, dashboards, and internal tools without hiring a development team. 
                D2 Group delivers fully functional no-code solutions faster and more cost-effectively than traditional development.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mb-8">
                <Button size="lg" asChild className="shadow-glow">
                  <Link to="/company/contact">
                    Schedule Free App Consultation
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">See Live Examples</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm">
                {[
                  { icon: Rocket, text: "50+ Custom Apps Built" },
                  { icon: Clock, text: "2-4 Week Average Delivery" },
                  { icon: Globe, text: "Enterprise Clients in US/EU" },
                  { icon: Star, text: "4.9/5 Client Rating" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center justify-center gap-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <IconComponent className="h-4 w-4 text-primary" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Traditional Development <span className="text-primary">Fails For Your Business</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.slice(0, 3).map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-destructive mb-4" />
                    <h3 className="text-lg font-bold mb-3">{problem.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-destructive mb-1">🔴 The Problem:</p>
                        <p className="text-sm text-muted-foreground">{problem.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1">💰 The Cost:</p>
                        <p className="text-sm text-muted-foreground">{problem.cost}</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-md">
                        <p className="text-xs italic">{problem.hook}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The <span className="text-primary">D2 Group Difference:</span> No-Code Apps Built Right
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                We combine the speed of no-code platforms with the sophistication of enterprise applications. 
                No compromise on functionality. No waiting for developers.
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  step: "1",
                  icon: Target,
                  title: "Discovery & Planning",
                  duration: "Week 1",
                  activities: ["Interview your team", "Understand workflow", "Design solution", "Clear roadmap + pricing"]
                },
                {
                  step: "2",
                  icon: Code,
                  title: "Rapid Prototyping",
                  duration: "Week 2",
                  activities: ["Build clickable prototype", "Visual demo", "Incorporate feedback", "Test drive solution"]
                },
                {
                  step: "3",
                  icon: Settings,
                  title: "Full Development",
                  duration: "Week 3",
                  activities: ["Complete application", "All integrations", "Data flows", "Automated systems"]
                },
                {
                  step: "4",
                  icon: Rocket,
                  title: "Launch & Training",
                  duration: "Week 4",
                  activities: ["Deploy app", "Train team", "Documentation", "30 days support"]
                }
              ].map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                        {step.step}
                      </div>
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.duration}</p>
                    <ul className="space-y-1">
                      {step.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <Check className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What We <span className="text-primary">Can Build For You</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <div className="bg-primary/10 p-3 rounded-md mb-3">
                      <p className="text-xs font-semibold text-primary mb-1">What it means for you:</p>
                      <p className="text-xs">{feature.benefit}</p>
                    </div>
                    <p className="text-xs text-muted-foreground"><strong>Use case:</strong> {feature.useCase}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
              Platforms We <span className="text-primary">Master</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                    <p className="text-muted-foreground text-sm">{platform.use}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted by <span className="text-primary">Leading Companies</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <blockquote className="text-sm text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <cite className="font-semibold not-italic block">{testimonial.name}</cite>
                    <p className="text-xs text-muted-foreground mb-3">{testimonial.role} @ {testimonial.company}</p>
                    <div className="space-y-2 text-xs">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <p className="font-semibold text-primary">{testimonial.result}</p>
                      </div>
                      <p><strong>Before:</strong> {testimonial.before}</p>
                      <p><strong>After:</strong> {testimonial.after}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">Transparent Pricing,</span> No Hidden Fees
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the scope that fits your needs. Every project includes discovery, design, development, testing, deployment, and training.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`p-8 hover:shadow-xl transition-all ${tier.popular ? 'border-primary border-2' : ''}`}>
                  {tier.popular && (
                    <Badge className="mb-4 bg-primary">⭐ Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.ideal}</p>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary mb-2">{tier.price}</p>
                    <p className="text-sm text-muted-foreground">Timeline: {tier.timeline}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-secondary/10 p-3 rounded-md mb-6">
                    <p className="text-xs"><strong>Example:</strong> {tier.example}</p>
                  </div>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/company/contact">
                      {tier.name === "Enterprise Solution" ? "Contact for Quote" : `Start with ${tier.name.split(' ')[0]}`}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">🛡️ Money-Back Guarantee</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Not satisfied with the first prototype? We'll refund 50% of your discovery fee and part ways. 
                No questions asked. We're confident in our process. We're willing to bet on it.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About <span className="text-primary">No-Code Development?</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">
              Stop Waiting for Developers. Start Shipping Solutions.
            </h2>
            <p className="text-xl mb-8">
              Your business has unique needs. Your tools should reflect that. Whether you need a custom portal, 
              internal dashboard, or full web application, D2 Group delivers enterprise-grade solutions in weeks, not months.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
              <p className="text-lg mb-4"><strong>Limited availability:</strong> We typically book 6-8 weeks in advance. 
              Schedule your free consultation now to lock in your start date.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/company/contact">
                  Schedule Free 30-Min Consultation
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" asChild>
                <Link to="/portfolio">
                  View No-Code Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-sm">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Free consultation (no sales pitch, just advice)</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>50% refund if you're not happy with prototype</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>You own the app completely</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Full documentation + training included</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
