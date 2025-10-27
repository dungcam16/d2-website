import React from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Star,
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Shield,
  BarChart3,
  Target,
  PlayCircle,
  Download,
  Settings,
  Activity,
  AlertTriangle,
  Mail,
  CreditCard,
  RefreshCw,
  GitBranch,
  Award,
  MessageSquare,
  Database,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function SaasCompanies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SaaS Automation Solutions",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
    },
    description: "Purpose-built workflow automation for SaaS companies. Automate onboarding, billing, analytics. 30%+ faster growth with 500+ tool integrations.",
    areaServed: ["Global"],
  };

  // Pain Points
  const painPoints = [
    {
      icon: Clock,
      title: "Manual Onboarding Killing Activation",
      problem: "Every new customer signup requires 2-3 hours of manual onboarding work. Your CS team is drowning in welcome emails, product tours, and account setup.",
      impact: "Time to First Value: 7-14 days (should be <24 hours). Activation rate: 40-50% (should be 70-80%).",
      cost: "$50K-100K/year in CS time + 30% customer loss"
    },
    {
      icon: AlertTriangle,
      title: "High Churn from Poor Activation",
      problem: "Customers sign up, don't understand the product, never hit their first 'aha moment', and churn within 30-60 days.",
      impact: "30-40% of customers never activate. 60-day churn rate: 25-35%.",
      cost: "At $500 MRR, 100 churned customers = $50K MRR lost annually = $600K lost"
    },
    {
      icon: Database,
      title: "Siloed Product & Customer Data",
      problem: "Usage data is in Amplitude. Billing data is in Stripe. Customer data is in Salesforce. Support tickets are in Intercom. Nobody has complete visibility.",
      impact: "Your PMs, CS, and Sales teams work with incomplete data. Decisions are slow and often wrong.",
      cost: "Opportunity cost: Slow product decisions = 6-12 month delays on critical features"
    },
    {
      icon: Users,
      title: "Support Workload Growing Exponentially",
      problem: "As you scale from 100 → 1,000 customers, support tickets grow 10x but your team only grew 2x. You're overwhelmed.",
      impact: "Average response time went from 2 hours → 24 hours. CSAT score dropped from 90 → 70.",
      cost: "$120K-$200K to hire 2 more support reps + 3 months training"
    },
    {
      icon: CreditCard,
      title: "Billing Errors Costing Revenue",
      problem: "Failed payments aren't retried properly. Invoices are sent late. Customers don't get receipts. Dunning is manual and inconsistent.",
      impact: "10-20% of involuntary churn is preventable. Failed payment recovery: 30% (should be 70-80%).",
      cost: "$75K-$250K/year in lost MRR from preventable billing issues"
    }
  ];

  // Solutions
  const solutions = [
    {
      icon: Sparkles,
      title: "Customer Onboarding Automation",
      description: "Personalized onboarding workflows triggered by signup. Usage milestone emails, product tours, success call scheduling.",
      features: [
        "Welcome email sequence (day 1, 3, 7, 14)",
        "In-app product tours based on user segment",
        "Automated milestone tracking",
        "CS team notified of high-value signups",
        "Automated success call scheduling"
      ],
      results: [
        "Activation rate: 45% → 78% (+73% improvement)",
        "Time to First Value: 7 days → <24 hours",
        "Churn reduced by 35%",
        "CS time saved: 25 hours/week"
      ]
    },
    {
      icon: BarChart3,
      title: "Product Analytics Automation",
      description: "Auto-track product milestones, in-app events, feature adoption. Syncs to Amplitude, Mixpanel, BigQuery, custom dashboards.",
      features: [
        "Event tracking across all tools",
        "Real-time sync to analytics platforms",
        "Automated cohort analysis",
        "Usage alerts for CS team",
        "Custom dashboard creation"
      ],
      results: [
        "100% data completeness",
        "Real-time insights (was: 14 days lag)",
        "PMs & CS teams react same-day",
        "Feature adoption tracking automated"
      ]
    },
    {
      icon: CreditCard,
      title: "Revenue & Billing Automation",
      description: "Automated dunning emails, failed payment retries, invoices, receipts, and revenue reports synced to finance tools.",
      features: [
        "Smart payment retry logic",
        "Automated dunning sequences",
        "Invoice & receipt generation",
        "Revenue report automation",
        "Failed payment alerts"
      ],
      results: [
        "Payment recovery: 30% → 75% (+150%)",
        "Involuntary churn down 18%",
        "20+ hours/month saved for ops",
        "$75K-$250K/year revenue recovered"
      ]
    },
    {
      icon: MessageSquare,
      title: "Support Automation & Routing",
      description: "AI chatbots handle tier-1 questions, smart routing to right team member, automated ticket categorization.",
      features: [
        "AI chatbot for FAQs",
        "Smart ticket routing",
        "Priority escalation logic",
        "Automated CSAT surveys",
        "Knowledge base updates"
      ],
      results: [
        "Support ticket volume: -40%",
        "Response time: 24h → 2h",
        "CSAT score: 70 → 88",
        "Team handles 3x volume"
      ]
    }
  ];

  // Success Stories
  const successStories = [
    {
      company: "CloudSync",
      stage: "Series B SaaS",
      challenge: "Manual onboarding took 3 hours per customer. Activation rate was 42%. Churn in first 60 days was 32%.",
      solution: "Automated entire onboarding workflow across HubSpot, Productboard, Slack, Intercom.",
      results: [
        "90% of onboarding busywork eliminated",
        "Activation up 30% (42% → 72%)",
        "Churn down 22% (32% → 10%)",
        "1,200 support hours saved/year",
        "ROI: 450% in year 1"
      ],
      quote: "D2 Group eliminated 90% of our onboarding busywork. Activation up 30%, churn down 22%."
    },
    {
      company: "Finly.io",
      stage: "SaaS, Global Users",
      challenge: "Billing and usage data syncs between Stripe and Salesforce used to take 1 FTE. Manual dunning was inconsistent.",
      solution: "Complete revenue workflow automation with smart retry logic and finance notifications.",
      results: [
        "$110K/year saved (eliminated 1 FTE)",
        "Payment recovery: 35% → 78%",
        "Zero billing errors in 6 months",
        "Finance team has real-time visibility",
        "Recovered $180K in failed payments"
      ],
      quote: "Billing automation saved us $110K/year and recovered $180K in failed payments. It's lights-out now."
    },
    {
      company: "ProductViz",
      stage: "B2B SaaS",
      challenge: "Product analytics took 14 days to compile. PMs couldn't make data-driven decisions quickly.",
      solution: "Real-time product analytics automation syncing to Amplitude, Mixpanel, and custom dashboards.",
      results: [
        "Time-to-insight: 14 days → same-day",
        "PMs & CS react instantly to trends",
        "Feature adoption tracked automatically",
        "100% data completeness",
        "Faster product iterations"
      ],
      quote: "Complete product analytics automation brought our time-to-insight from 14 days to same-day."
    }
  ];

  // Pricing
  const pricingTiers = [
    {
      name: "Starter",
      price: "Contact Us",
      setup: "Contact Us",
      ideal: "Early-stage SaaS (Seed to Series A)",
      features: [
        "Customer onboarding automation",
        "Basic billing workflows",
        "Up to 10 integrations",
        "Unlimited users & workflows",
        "Email support",
        "Monthly optimization review"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "Contact Us",
      setup: "Contact Us",
      ideal: "Scaling SaaS (Series A to B)",
      features: [
        "Advanced onboarding & retention",
        "Complete billing automation",
        "Product analytics sync",
        "Support automation",
        "Up to 25 integrations",
        "Dedicated automation manager",
        "Bi-weekly optimization",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      setup: "Contact Us",
      ideal: "Enterprise SaaS (Series B+)",
      features: [
        "Multi-product automation",
        "Custom integrations",
        "Unlimited workflows",
        "24/7 dedicated support",
        "Custom SLAs",
        "Weekly strategy calls",
        "White-glove implementation",
        "SOC 2 compliance support"
      ],
      popular: false
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How fast is onboarding for D2 Group's automation?",
      answer: "Most SaaS companies are live in 2-4 weeks: Week 1 (Workflow assessment), Week 2 (Rapid prototyping), Week 3 (Integration deployment), Week 4 (Testing & optimization). You'll see initial results within 30 days."
    },
    {
      question: "Can I run this on my own cloud infrastructure?",
      answer: "Yes! We support both cloud-hosted (managed by us) and self-hosted (on your infrastructure) deployment. Self-hosted gives you complete data control and is ideal for compliance requirements (HIPAA, SOC 2, GDPR)."
    },
    {
      question: "What SaaS tools do you support?",
      answer: "500+ integrations including: Stripe, Intercom, HubSpot, Salesforce, ChurnZero, Amplitude, Mixpanel, Segment, BigQuery, Slack, Postmark, QuickBooks, Calendly, Zendesk, and more. If it has an API, we can connect it."
    },
    {
      question: "Can you migrate us from Zapier to save costs?",
      answer: "Absolutely. Many SaaS companies switch from Zapier to n8n to save 70-90% on automation costs. We handle the entire migration: audit, rebuild, test, and deploy. Timeline: 2-4 weeks. Average savings: $50K-$150K/year."
    },
    {
      question: "What's the minimum commitment?",
      answer: "Month-to-month after initial setup. No long-term contracts required. You can cancel anytime with 30 days notice. We're confident you'll see the value and want to stay."
    },
    {
      question: "What support is included?",
      answer: "All plans include: Dedicated automation manager, Monthly/bi-weekly optimization reviews, Email support (24-48 hour response), Access to our SaaS automation knowledge base. Growth & Enterprise get priority support and dedicated Slack channel."
    },
    {
      question: "Is this secure and compliant?",
      answer: "Yes. SOC 2 Type II certified, GDPR compliant, CCPA compliant. Data encrypted in transit and at rest. Self-hosted option available for maximum security. Audit trails for compliance. We take security seriously."
    },
    {
      question: "What if we have complex, custom workflows?",
      answer: "That's our specialty. Unlike no-code tools with limitations, n8n supports custom JavaScript code, advanced logic, loops, and error handling. We've built workflows for the most complex SaaS businesses. If you can describe it, we can automate it."
    }
  ];

  return (
    <>
      <SEO
        title="SaaS Automation Solutions | Onboarding, Billing, Analytics | D2 Group"
        description="Purpose-built workflow automation for SaaS. Instant onboarding, automated billing, unified data. 30%+ faster growth with 500+ tool integrations. Free demo."
        keywords="SaaS automation, customer onboarding automation, billing automation, product analytics, churn reduction, SaaS workflow automation"
        canonicalUrl="/solutions/saas-companies"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                ✅ Trusted by 90+ SaaS Teams | SOC 2, GDPR, Enterprise-Grade Security
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Scalable Automation</span> for SaaS Companies
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Automate onboarding, customer success, product analytics, and billing with purpose-built workflows 
                for SaaS. Eliminate manual, repetitive processes and unlock your team's bandwidth. Integrate with 500+ 
                SaaS tools. Deploy in weeks—not months. See real ROI in 30 days.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mb-8">
                <Button size="lg" asChild className="shadow-glow">
                  <Link to="/company/contact">
                    Book Free SaaS Assessment
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#solutions">Explore SaaS Solutions</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm">
                {[
                  { icon: Users, text: "90+ SaaS teams" },
                  { icon: TrendingUp, text: "35% churn reduction" },
                  { icon: Clock, text: "40+ hours/week saved" },
                  { icon: DollarSign, text: "$75K-250K recovered" }
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
                Every SaaS Business Faces <span className="text-primary">These Growth Blockers</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.slice(0, 3).map((pain, index) => {
                const IconComponent = pain.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-destructive mb-4" />
                    <h3 className="text-lg font-bold mb-3">{pain.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-destructive mb-1">The Problem:</p>
                        <p className="text-sm text-muted-foreground">{pain.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1">The Impact:</p>
                        <p className="text-sm text-muted-foreground">{pain.impact}</p>
                      </div>
                      <div className="bg-destructive/10 p-3 rounded-md">
                        <p className="text-xs font-semibold text-destructive">Cost: {pain.cost}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <p className="text-xl font-semibold text-primary mb-4">
                Whether you're scaling from Series A or managing millions in MRR, these challenges kill momentum and drain resources.
              </p>
              <p className="text-lg text-muted-foreground">
                That's why D2 Group built industry-grade SaaS automation with n8n and best-in-class integrations.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How <span className="text-primary">D2 Group</span> Automates Your SaaS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  icon: Target,
                  title: "Workflow Assessment",
                  desc: "Map your onboarding, product, and ops workflows for automation readiness."
                },
                {
                  step: "2",
                  icon: Settings,
                  title: "Rapid Prototyping",
                  desc: "Create industry-ready, SaaS-specific workflow templates tailored to your stack."
                },
                {
                  step: "3",
                  icon: GitBranch,
                  title: "Lightning Integration",
                  desc: "Deploy n8n and connect all critical tools — self-hosted or cloud."
                },
                {
                  step: "4",
                  icon: TrendingUp,
                  title: "Iterative Optimization",
                  desc: "Monitor, test, and improve flows for ongoing growth."
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
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Timeline:</strong> Deploy in weeks—not months! Most clients see results within 30 days.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Deep Dive */}
        <section id="solutions" className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">SaaS Solutions</span>
              </h2>
            </div>

            <div className="space-y-12">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-xl transition-all animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <IconComponent className="h-10 w-10 text-primary mr-3" />
                          <h3 className="text-2xl font-bold">{solution.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-6">{solution.description}</p>
                        <div>
                          <p className="font-semibold mb-3">Features:</p>
                          <ul className="space-y-2">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="bg-primary/5 p-6 rounded-lg">
                          <p className="font-semibold mb-4">Results:</p>
                          <ul className="space-y-3">
                            {solution.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span className="font-semibold">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild className="shadow-glow">
                <Link to="/company/contact">
                  Get My SaaS Automation Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">SaaS Success Stories</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{story.company}</h3>
                    <p className="text-sm text-muted-foreground">{story.stage}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold mb-1">Challenge:</p>
                      <p className="text-sm text-muted-foreground">{story.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-1">Solution:</p>
                      <p className="text-sm text-muted-foreground">{story.solution}</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold mb-2">Results:</p>
                      <ul className="space-y-1">
                        {story.results.map((result, idx) => (
                          <li key={idx} className="text-xs flex items-start">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary pl-3 mt-4">
                      "{story.quote}"
                    </blockquote>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                    <Link to="/portfolio">Read Full Case Study</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">SaaS Pricing</span> Overview
              </h2>
              <p className="text-lg text-muted-foreground">
                All plans include: Unlimited users, unlimited automations, onboarding, optimization, and dedicated automation manager.
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
                    <p className="text-3xl font-bold text-primary mb-1">{tier.price}</p>
                    <p className="text-sm text-muted-foreground">Setup: {tier.setup}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/company/contact">
                      {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
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
              Unlock 30%+ Faster Growth, Eliminate Busywork, and Recover $100K+ in Operational ROI
            </h2>
            <p className="text-xl mb-8">
              Book a free automation strategy session for your SaaS. See exactly how we'll automate your onboarding, 
              billing, and analytics—and the ROI you can expect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/company/contact">
                  Book Free SaaS Assessment
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" asChild>
                <Link to="/portfolio">
                  See SaaS Client Results
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-sm">
              {[
                "No long-term contracts",
                "30-day money-back",
                "SOC 2 certified",
                "500+ integrations"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
