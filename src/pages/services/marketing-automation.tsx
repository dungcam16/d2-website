import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  Shield,
  Zap,
  DollarSign,
  Clock,
  AlertTriangle,
  BarChart3,
  PlayCircle,
  Download,
  Settings,
  Activity,
  Globe,
  FileText,
  Award,
  Lock,
  Code,
  GitBranch,
  RefreshCw,
  MessageSquare,
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

export default function MarketingAutomation() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Marketing Automation",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
    },
    description: "Marketing automation services connecting your entire tech stack. Save 35+ hours/week. Increase ROI by 400%.",
    areaServed: ["US", "EU"],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does implementation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical implementation is 2-4 weeks: Week 1 (Audit & design), Week 2 (Setup & configuration), Week 3 (Testing & optimization), Week 4 (Team training & go-live).",
        },
      },
    ],
  };

  // Problems
  const problems = [
    {
      icon: Clock,
      title: "Manual Data Syncing = Lost Hours",
      pain: "Your marketing team spends 2-3 hours DAILY manually moving data between tools. Lead comes into HubSpot → manually enter into email platform → manually log in Slack → manually update spreadsheet.",
      agitation: "That's 10-15 hours per week. Per person. Multiply by 3-4 marketers? You're burning 40-60 hours/week on busywork that could be spent on strategy and revenue-generating activities.",
      cost: "At $60/hour loaded cost, that's $2,400-$3,600 per week = $125K-$187K/year wasted on data entry"
    },
    {
      icon: AlertTriangle,
      title: "Marketing Data is Fragmented Across 10+ Tools",
      pain: "You use HubSpot for CRM, Google Ads for paid, Mailchimp for email, Intercom for chat, Slack for team communication, Google Analytics for web traffic. None of them talk to each other.",
      agitation: "Your VP of Sales doesn't know which leads came from which channel. Your email team can't segment by website behavior. You don't know the real ROI of campaigns because data is scattered.",
      cost: "You could be losing $50K+ per month on wasted ad spend"
    },
    {
      icon: DollarSign,
      title: "Can't Scale Without Hiring More Marketers",
      pain: "Every new campaign requires manual setup. Manual follow-ups. Manual reporting. To handle 2x the volume, you need 2x the team. But hiring is expensive ($80K+ annually per marketer).",
      agitation: "You're stuck. You can't grow revenue without hiring. But hiring slows down profitability. You're trading growth for margin.",
      cost: "Each new hire: $40K-$50K in ramp time before they contribute"
    },
    {
      icon: Target,
      title: "Lead Scoring is Manual and Inconsistent",
      pain: "Your sales team complains: 'These leads are garbage.' Your marketing team argues: 'We're getting plenty of leads.' Nobody knows which leads are actually qualified.",
      agitation: "Sales and Marketing aren't aligned. Leads fall through the cracks. Good prospects don't get followed up with. Bad prospects waste sales time.",
      cost: "You're losing 20-30% of deals to poor lead quality = $100K-$150K on the table if you close $500K/month"
    },
    {
      icon: BarChart3,
      title: "Marketing Attribution is Guess-Work",
      pain: "You don't know which marketing channel drives the most revenue. Is it Google Ads? Email? Content? SEO? Your CFO asks: 'Where should we spend marketing budget?' And you say: 'I'm not sure.'",
      agitation: "You're probably wasting 40-50% of marketing budget on low-ROI channels. You're not doubling down on what works because you don't know what works.",
      cost: "If you spend $100K/month on marketing and 40% is wasted, that's $480K/year down the drain"
    }
  ];

  // Features
  const features = [
    {
      icon: Globe,
      title: "Multi-Tool Integration",
      description: "Connect all your marketing tools (HubSpot, Google Ads, Mailchimp, Slack, Salesforce, Intercom, etc.)",
      benefit: "Save 30+ hours per week on manual data syncing. Your team has time back for strategy, creativity, and revenue-generating work."
    },
    {
      icon: Target,
      title: "Automated Lead Scoring & Qualification",
      description: "AI-powered lead scoring that automatically qualifies leads based on behavior, firmographics, and engagement",
      benefit: "Improve sales efficiency by 40-50%. Increase conversion rate by 25-35% because sales focuses on hot leads, not time-wasters."
    },
    {
      icon: Mail,
      title: "Intelligent Email Sequences",
      description: "Automated email campaigns triggered by user behavior, not just send dates",
      benefit: "Increase email engagement by 2-3x. Reduce unsubscribe rates by 40% because emails are relevant and timely. Scale campaigns without hiring more marketers."
    },
    {
      icon: BarChart3,
      title: "Attribution & Analytics Unification",
      description: "Connect all your data sources into one attribution dashboard showing which channels drive revenue",
      benefit: "Optimize marketing spend by 30-40%. Stop wasting money on low-ROI channels. Double down on what works. Increase ROAS by 2-3x."
    },
    {
      icon: Activity,
      title: "Real-Time Marketing Dashboards",
      description: "Automated dashboards that update in real-time showing leads, conversions, revenue attribution, and team performance",
      benefit: "Save 5-10 hours per week on reporting. Executives have complete transparency. Marketing gets credit for revenue contribution."
    },
    {
      icon: Users,
      title: "CRM-to-Sales Alignment",
      description: "Automatic workflows that keep sales updated on hot leads, high-engagement prospects, and customers at risk of churning",
      benefit: "Increase sales velocity by 20-30%. Improve win rate by 15-25% because sales focuses on the right prospects at the right time."
    },
    {
      icon: Shield,
      title: "Compliance & Data Governance",
      description: "Automated compliance workflows ensuring GDPR, CCPA, and other regulations are followed automatically",
      benefit: "Reduce compliance risk by 100%. Avoid potential fines ($1M+ in some cases). Maintain customer trust through transparent data handling."
    },
    {
      icon: Code,
      title: "Custom Integrations & Webhooks",
      description: "Ability to build custom integrations and webhooks to connect tools that don't have native integrations",
      benefit: "Full flexibility to use the tools that work best for your business. Not forced into expensive, bloated platforms just because of integrations."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Marketing Automation Freed Up 2 Full-Time Equivalents",
      name: "Sarah Chen",
      role: "VP Marketing",
      company: "CloudSync (SaaS, Series B)",
      challenge: "5 marketing tools that didn't communicate. 40 hours/week on manual tasks. Couldn't scale without hiring.",
      results: [
        "35 hours/week eliminated (2 FTE = $160K/year saved)",
        "Lead response time: 4 hours → 30 minutes",
        "Sales conversion improved 28%",
        "ROAS improved from 2.5x to 4.2x",
        "Team morale improved dramatically"
      ]
    },
    {
      quote: "From Manual Reporting to Real-Time Visibility",
      name: "Marcus Williams",
      role: "Marketing Director",
      company: "StyleHub (E-commerce, $5M revenue)",
      challenge: "20+ hours/week creating manual marketing reports. Didn't know which channels drove revenue. Budget allocation was guesswork.",
      results: [
        "Attribution is now 100% transparent",
        "Identified Instagram Ads: 1.2x ROAS → shifted to email: 3.8x ROAS",
        "Eliminated 15 hours/week of manual reporting",
        "Executives now have live dashboard",
        "Marketing spend ROI improved 40%"
      ]
    },
    {
      quote: "Scaled to 50 Clients Without Adding Staff",
      name: "James Rodriguez",
      role: "Founder",
      company: "GrowthAgency (Digital Agency)",
      challenge: "Every client needed custom setup. Taking weeks per client. Couldn't scale without hiring more account managers.",
      results: [
        "Onboard clients 5x faster",
        "Scaled from 10 to 50 clients in 1 year without hiring",
        "Offer better service to clients",
        "Improved margins - same team, 5x revenue",
        "Clients happier with automated campaigns"
      ]
    }
  ];

  // Pricing
  const pricingTiers = [
    {
      name: "Starter",
      setup: "$5,000",
      monthly: "$1,000",
      popular: false,
      ideal: "Early-stage SaaS, small marketing teams, 1-3 tools",
      roi: "Average ROI: 300% in year 1 (pays for itself in 3-4 months)",
      features: [
        "Up to 5 marketing tools integrated",
        "10-15 custom workflows",
        "Basic lead scoring automation",
        "Email sequence automation",
        "Weekly check-in calls",
        "30 days of training & support"
      ]
    },
    {
      name: "Professional",
      setup: "$12,000",
      monthly: "$2,000",
      popular: true,
      ideal: "Growth-stage SaaS, mid-size e-commerce, digital agencies, 3-8 marketers",
      roi: "Average ROI: 400-500% in year 1 ($50K-$150K value generated)",
      features: [
        "Up to 12 marketing tools integrated",
        "25-35 custom workflows",
        "Advanced lead scoring (behavior + firmographics)",
        "Real-time marketing dashboard",
        "Attribution & analytics unification",
        "CRM-to-sales team automation",
        "Bi-weekly strategy calls",
        "60 days of training & support",
        "Quarterly optimization reviews"
      ]
    },
    {
      name: "Enterprise",
      setup: "Custom",
      monthly: "From $3,000",
      popular: false,
      ideal: "Enterprise SaaS, large e-commerce, multi-team organizations, complex workflows",
      roi: "Average ROI: 500%+ ($200K-$500K+ annual value)",
      features: [
        "Unlimited tool integrations",
        "50+ complex workflows",
        "Custom AI models for lead scoring",
        "Multi-team automation (marketing, sales, finance)",
        "Advanced compliance & governance",
        "Weekly strategy calls",
        "Dedicated success manager",
        "Custom webhooks & integrations",
        "Priority support (24-hour response)",
        "Monthly optimization & strategic review"
      ]
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Typical implementation is 2-4 weeks, depending on complexity: Week 1 (Audit & design), Week 2 (Setup & configuration), Week 3 (Testing & optimization), Week 4 (Team training & go-live). We keep your team involved every step of the way. No surprises."
    },
    {
      question: "Do I need to switch tools or can I keep my existing stack?",
      answer: "You can keep your existing tools 100%. We work with whatever you're already using - HubSpot, Salesforce, Pipedrive, Monday.com, Google Ads, Facebook Ads, Mailchimp, Intercom, etc. If you want to migrate from a tool like Zapier to n8n (for cost savings), we can handle that migration too."
    },
    {
      question: "What if we add new tools after implementation?",
      answer: "Easy. We add new integrations quickly. Most new tool integrations take 1-2 days to add. This is actually one of the benefits - your automation grows as your business grows. We update workflows as your needs evolve."
    },
    {
      question: "Who manages the automation after implementation?",
      answer: "We do, as part of ongoing support. We: (1) Monitor all workflows daily, (2) Fix issues before they impact your business, (3) Optimize based on performance, (4) Add new workflows as you identify new opportunities, (5) Train your team so they understand how it works. You're not left managing it yourself. That's included in your monthly fee."
    },
    {
      question: "How quickly will I see ROI?",
      answer: "Most clients see ROI within 4-8 weeks: Week 1-2 (Time savings from automation, usually 15-20 hours/week), Week 3-4 (Better lead quality and conversion improvements), Week 5-8 (Full attribution and optimization results). Average payback period: 2-4 months. So by month 5, it's all profit."
    },
    {
      question: "What if something breaks or a workflow fails?",
      answer: "We monitor all workflows 24/7 and alert you to any issues within 1 hour of detection. Most issues we fix automatically before you even notice. For any issues: Priority support (24-hour response for Enterprise, 48-hour for Professional), Dedicated support team, Redundancy built in so critical workflows never stop."
    },
    {
      question: "Can you help us migrate from Zapier/Make to save on costs?",
      answer: "Yes, absolutely. Many of our clients switch from Zapier to n8n to reduce costs by 70-90%. We handle the entire migration: Export all your Zapier workflows, Map them to n8n equivalents, Test everything thoroughly, Train your team, Handle the switchover. Usually takes 2-4 weeks. Most clients see $50K-$150K/year in savings."
    },
    {
      question: "What about data privacy and compliance?",
      answer: "We take data privacy seriously: SOC 2 Type II certified, GDPR compliant, CCPA compliant, Data encryption in transit and at rest, Automatic compliance workflows, Audit trails for regulators, No data stored longer than necessary. Your data is handled securely at every step."
    }
  ];

  return (
    <>
      <SEO
        title="Connect Your Marketing Tech Stack - Automate Campaigns, Not Your Team | D2 Group"
        description="Stop wasting 30+ hours/week on manual marketing tasks. Automate email sequences, lead scoring, CRM syncing, and attribution tracking. Scale campaigns with the same team."
        keywords="marketing automation, email automation, lead nurturing, campaign automation, marketing workflows, CRM automation, attribution tracking"
        canonicalUrl="/services/marketing-automation"
        structuredData={[structuredData, faqStructuredData]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                ✅ 150+ Marketing Workflows Automated • 98% Client Satisfaction
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Connect Your Entire <span className="text-primary">Marketing Tech Stack</span>
                <br />
                Automate Your Campaigns, Not Your Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Stop wasting 30+ hours per week on manual marketing tasks. Automate email sequences, lead scoring, 
                CRM syncing, and attribution tracking. Scale campaigns with the same team.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mb-8">
                <Button size="lg" asChild className="shadow-glow">
                  <Link to="/contact">
                    Get Free Marketing Audit
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#solution">See How It Works</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto text-sm">
                {[
                  { icon: CheckCircle, text: "150+ workflows automated" },
                  { icon: Clock, text: "2-week average setup" },
                  { icon: Users, text: "35 hours/week saved" },
                  { icon: TrendingUp, text: "400% average ROI" },
                  { icon: Star, text: "98% satisfaction" }
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
                Your Marketing Tech Stack is <span className="text-primary">Broken</span> - And It's Costing You Money
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {problems.slice(0, 3).map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-destructive mb-4" />
                    <h3 className="text-lg font-bold mb-3">{problem.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-destructive mb-1">Pain Point:</p>
                        <p className="text-sm text-muted-foreground">{problem.pain}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1">Agitation:</p>
                        <p className="text-sm text-muted-foreground">{problem.agitation}</p>
                      </div>
                      <div className="bg-destructive/10 p-3 rounded-md">
                        <p className="text-xs font-semibold text-destructive">Cost Impact: {problem.cost}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <p className="text-xl font-semibold text-primary mb-4">
                The problem isn't your marketing strategy. It's your infrastructure.
              </p>
              <p className="text-lg text-muted-foreground">
                Your tools don't work together. Your team is stuck managing systems instead of driving growth. There's a better way.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">Connect Every Tool.</span> Automate Every Workflow. See Every Result.
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                D2 Group's marketing automation integrates your entire tech stack so your team focuses on strategy, not spreadsheets.
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  step: "1",
                  icon: FileText,
                  title: "Audit Your Stack",
                  duration: "Week 1",
                  activities: ["Map all current tools", "Identify data silos", "Find quick wins", "Full transparency"]
                },
                {
                  step: "2",
                  icon: Settings,
                  title: "Design Custom Workflows",
                  duration: "Week 2",
                  activities: ["Specific to your business", "Aligned with sales process", "No generic templates", "Clear roadmap"]
                },
                {
                  step: "3",
                  icon: GitBranch,
                  title: "Implement & Connect",
                  duration: "Week 3",
                  activities: ["Set up automation platform", "Connect all tools", "Error handling", "Test thoroughly"]
                },
                {
                  step: "4",
                  icon: TrendingUp,
                  title: "Optimize & Scale",
                  duration: "Ongoing",
                  activities: ["Daily monitoring", "Quarterly reviews", "Team training", "Continuous improvement"]
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
                Comprehensive <span className="text-primary">Marketing Automation</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-xs font-semibold text-primary">{feature.benefit}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted by Marketing Teams at <span className="text-primary">150+ B2B Companies</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3 className="text-lg font-bold mb-2">{testimonial.quote}</h3>
                  <div className="mb-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold mb-2">Challenge:</p>
                    <p className="text-xs text-muted-foreground">{testimonial.challenge}</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-xs font-semibold mb-2">Results:</p>
                    <ul className="space-y-1">
                      {testimonial.results.map((result, idx) => (
                        <li key={idx} className="text-xs flex items-start">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                <span className="text-primary">Simple, Transparent Pricing</span> - No Hidden Fees
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`p-8 hover:shadow-xl transition-all ${tier.popular ? 'border-primary border-2' : ''}`}>
                  {tier.popular && (
                    <Badge className="mb-4 bg-primary">⭐ Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Setup</p>
                    <p className="text-3xl font-bold text-primary mb-2">{tier.setup}</p>
                    <p className="text-sm text-muted-foreground mb-1">Monthly</p>
                    <p className="text-2xl font-semibold mb-3">{tier.monthly}</p>
                    <p className="text-xs text-muted-foreground italic mb-2">{tier.ideal}</p>
                    <p className="text-xs font-semibold text-primary">{tier.roi}</p>
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
                    <Link to="/contact">
                      {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">🛡️ 30-Day Money-Back Guarantee</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                If after 30 days you're not seeing the value, we'll refund your setup fee. No questions asked. 
                You only pay for the month of service used. We stand behind our work.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About <span className="text-primary">Marketing Automation?</span>
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
              Stop Wasting Hours on Manual Marketing Tasks
            </h2>
            <p className="text-xl mb-8">
              Your team didn't get into marketing to do data entry and spreadsheet management. They got into marketing 
              to build campaigns, analyze strategy, and drive revenue. Give them back their time. Let automation handle the busywork.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto text-left">
              <p className="text-lg font-semibold mb-4">In 4 weeks, you could have:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "35+ hours/week of time back for your team",
                  "Real-time visibility into marketing performance",
                  "Better sales and marketing alignment",
                  "Campaigns running automatically at scale",
                  "$50K-$200K+ in value generated annually"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg mb-8">
              The cost? Less than 1 FTE salary. The ROI? 400-500% in year one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/contact">
                  Schedule Free Marketing Audit
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" asChild>
                <Link to="/resources">
                  Download Marketing ROI Calculator
                  <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-sm">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Can cancel anytime</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>We stand behind our results</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
