import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Zap,
  Settings,
  RefreshCw,
  TrendingUp,
  CheckCircle,
  Star,
  Shield,
  Code,
  Clock,
  Database,
  GitBranch,
  Activity,
  PlayCircle,
  Download,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Users,
  Target,
  Lock,
  Award,
  FileText,
  AlertCircle,
  Sparkles,
  Globe,
  BarChart3,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function N8nAutomation() {
  const [taskVolume, setTaskVolume] = useState(50000);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise n8n Automation Services",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Save 90% on automation costs with enterprise n8n solutions. Unlimited workflow executions, custom code support, self-hosted options. 500+ successful migrations.",
    areaServed: "Global - US, EU",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does migration from Zapier to n8n take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical timeline: 2-3 weeks for up to 50 workflows (Starter), 3-5 weeks for 50-200 workflows (Professional), 6-8 weeks for 200+ workflows (Enterprise). Zero downtime guaranteed.",
        },
      },
    ],
  };

  // Problem Pain Points
  const painPoints = [
    {
      icon: DollarSign,
      title: "Escalating Costs That Don't Make Sense",
      issues: [
        "Zapier charges per task: 10,000 tasks = $150/month, 50,000 tasks = $800/month",
        "Automation needs grow, but budget doesn't scale",
        "Forced to choose between automation and profitability"
      ],
      cost: "Companies waste $50,000+ annually on task-based pricing"
    },
    {
      icon: Code,
      title: "Limited Customization Kills Complex Workflows",
      issues: [
        "Zapier's no-code hits a wall with custom logic",
        "Can't write JavaScript for data transformations",
        "Can't build advanced conditional workflows",
        "Can't connect to internal APIs without pre-built integrations"
      ],
      cost: "Teams spend 20+ hours/week on manual workarounds"
    },
    {
      icon: Lock,
      title: "Vendor Lock-In Creates Anxiety",
      issues: [
        "Entire business depends on third-party platform",
        "No control over data or infrastructure",
        "One API change breaks your workflows",
        "Forced to accept price increases"
      ],
      cost: "Migration becomes impossible as workflow library grows"
    },
    {
      icon: Clock,
      title: "Slow Execution Speed Impacts Real-Time Operations",
      issues: [
        "Zapier workflows take 2-5 seconds to execute",
        "Delays accumulate across thousands of executions",
        "Real-time customer experiences suffer",
        "Order processing, support tickets, lead routing—all delayed"
      ],
      cost: "Lost revenue from slow automation"
    },
    {
      icon: Shield,
      title: "No Enterprise-Grade Security",
      issues: [
        "Can't self-host for compliance (HIPAA, SOC 2, GDPR)",
        "Sensitive data flows through third-party servers",
        "Limited audit logs and access controls",
        "Compliance teams block Zapier adoption"
      ],
      cost: "Compliance violations or inability to automate critical processes"
    }
  ];

  // Features
  const features = [
    {
      icon: Sparkles,
      title: "Unlimited Workflow Executions",
      desc: "Run 10,000 or 10 million workflows per month—same flat price. No more watching the task counter.",
      benefit: "Scale without limits"
    },
    {
      icon: Code,
      title: "Custom Code Support",
      desc: "Write JavaScript/Python for ANY workflow logic. Complex transformations, custom API calls, advanced conditionals.",
      benefit: "Build anything you can imagine"
    },
    {
      icon: Database,
      title: "Self-Hosted or Cloud",
      desc: "Keep sensitive data on YOUR infrastructure (GDPR, HIPAA compliant) or use managed cloud.",
      benefit: "Full data control"
    },
    {
      icon: GitBranch,
      title: "450+ Integrations + Webhooks",
      desc: "Connect to all major tools PLUS any API via webhooks. If it has an API, n8n connects.",
      benefit: "Connect anything"
    },
    {
      icon: Zap,
      title: "Blazing-Fast Execution",
      desc: "Workflows run in <500ms—5-10x faster than Zapier. Real-time customer experiences.",
      benefit: "Speed matters"
    },
    {
      icon: Activity,
      title: "Advanced Error Handling",
      desc: "Workflows automatically retry on failure, alert issues, and log errors. Enterprise-grade reliability.",
      benefit: "Never miss a beat"
    },
    {
      icon: RefreshCw,
      title: "Workflow Versioning",
      desc: "Test changes safely, rollback to previous versions, maintain dev/staging/prod environments.",
      benefit: "Professional workflow management"
    },
    {
      icon: Globe,
      title: "Open-Source & No Lock-In",
      desc: "Export workflows anytime (JSON format). Migrate to another platform if needed. You own your automation.",
      benefit: "True ownership"
    },
    {
      icon: Users,
      title: "White-Glove Migration",
      desc: "We handle everything: audit Zaps, rebuild in n8n, test thoroughly, launch with zero downtime.",
      benefit: "Effortless transition"
    },
    {
      icon: Award,
      title: "30-Day ROI Guarantee",
      desc: "Don't see measurable ROI in 30 days? Full refund of setup fee. Risk-free transformation.",
      benefit: "Zero risk"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "We were spending $850/month on Zapier for 60,000 tasks. D2 Group migrated us to n8n in 3 weeks. Now we pay $500/month for UNLIMITED executions. That's $4,200/year saved—and we can finally build the complex workflows we needed.",
      author: "Michael Chen",
      role: "CTO @ CloudMetrics",
      company: "SaaS Analytics Platform",
      results: ["$4,200/year saved", "60,000+ tasks/month", "0 downtime during migration"]
    },
    {
      quote: "Our Shopify order automation was slow and expensive with Zapier. Since switching to n8n with D2 Group, our order processing is 10x faster (now under 500ms) and costs 90% less. We handle 50,000 orders/month without breaking a sweat.",
      author: "Sarah Williams",
      role: "COO @ StyleMaven",
      company: "Fashion E-commerce",
      results: ["10x faster execution", "50,000 orders/month automated", "$42K saved in first year"]
    },
    {
      quote: "As an agency, we needed white-label automation for 50+ clients. n8n's self-hosted option let us deploy client-specific instances. D2 Group built our entire automation infrastructure. Now we offer premium automation as a service—pure profit margin.",
      author: "David Martinez",
      role: "Founder @ GrowthLab Agency",
      company: "Digital Agency",
      results: ["50+ client systems", "New revenue stream ($15K/month)", "Full control over client data"]
    }
  ];

  // Pricing
  const pricingTiers = [
    {
      name: "Starter",
      setup: "$5,000",
      monthly: "$500",
      popular: false,
      ideal: "Companies spending $200-400/month on Zapier",
      features: [
        "Automation audit & strategy",
        "Up to 50 workflow migrations",
        "n8n cloud deployment & configuration",
        "Error monitoring & alerts",
        "30-day post-launch support",
        "Team training (2 sessions)",
        "Basic integrations setup",
        "Email support (24-hour response)"
      ],
      specs: ["10-50 workflows", "Up to 100K executions/month", "Cloud-hosted (managed)"]
    },
    {
      name: "Professional",
      setup: "$12,000",
      monthly: "$1,500",
      popular: true,
      ideal: "Companies spending $400-800+/month on Zapier",
      features: [
        "Everything in Starter, plus:",
        "Unlimited workflow migrations",
        "Custom code development",
        "Advanced error handling & retry logic",
        "Workflow versioning (dev/staging/prod)",
        "Self-hosted deployment option",
        "90-day post-launch support",
        "Priority support (4-hour response)",
        "Monthly optimization reviews",
        "Dedicated Slack channel"
      ],
      specs: ["50-200 workflows", "Unlimited executions", "Self-hosted or cloud"]
    },
    {
      name: "Enterprise",
      setup: "Custom",
      monthly: "Starts at $25,000",
      popular: false,
      ideal: "Complex automation needs and compliance",
      features: [
        "Everything in Professional, plus:",
        "White-glove migration (we handle everything)",
        "Multi-region deployment",
        "Enterprise SSO integration",
        "Custom security configurations",
        "Dedicated account manager",
        "24/7 priority support",
        "SLA guarantees (99.9% uptime)",
        "Quarterly business reviews",
        "Custom integrations development"
      ],
      specs: ["200+ workflows", "Multi-environment setup", "Complex compliance"]
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How long does the migration from Zapier to n8n take?",
      answer: "Typical timeline: Starter Package (2-3 weeks for up to 50 workflows), Professional Package (3-5 weeks for 50-200 workflows), Enterprise Package (6-8 weeks for 200+ workflows). We work in phases so you can start using n8n workflows while others are being built. Zero downtime guaranteed."
    },
    {
      question: "Will my workflows still work the same way in n8n?",
      answer: "Yes—and often better! We rebuild your Zapier workflows in n8n with the same functionality, plus improvements: Faster execution (10x speed increase), Better error handling, Custom code where needed, Optimized for reliability. We test everything thoroughly before go-live."
    },
    {
      question: "What if I need custom code or complex logic Zapier couldn't handle?",
      answer: "That's where n8n shines! Unlike Zapier, n8n supports: JavaScript and Python code nodes, Complex conditional logic, Custom data transformations, Direct API calls with authentication, Advanced error handling. Our team has 5+ years of automation development experience."
    },
    {
      question: "Is n8n as easy to use as Zapier for my team?",
      answer: "n8n has a visual workflow builder similar to Zapier. Key differences: More powerful (handles complex workflows Zapier can't), Steeper learning curve (takes 1-2 weeks to learn advanced features), Better long-term (more flexibility). We provide comprehensive training to get your team up to speed quickly."
    },
    {
      question: "What about data security and compliance?",
      answer: "n8n offers two options: Self-Hosted (your data never leaves your infrastructure, HIPAA/SOC 2/GDPR compliant, custom security policies) or Cloud (hosted on secure AWS, SOC 2 Type II certified, GDPR compliant, encrypted data). We help you choose based on your compliance requirements."
    },
    {
      question: "Can I keep using Zapier during the migration?",
      answer: "Absolutely! Our migration process: Phase 1 (Build and test n8n workflows in parallel), Phase 2 (Review and approve), Phase 3 (Launch n8n with Zapier as backup), Phase 4 (After 7-14 days monitoring, turn off Zapier). You can extend the parallel period as needed."
    }
  ];

  // Calculate savings
  const calculateSavings = () => {
    const zapierCost = taskVolume <= 10000 ? 150 : taskVolume <= 50000 ? 800 : 1200;
    const n8nCost = 500;
    const monthlySavings = zapierCost - n8nCost;
    const annualSavings = monthlySavings * 12;
    const fiveYearSavings = annualSavings * 5;
    
    return { zapierCost, n8nCost, monthlySavings, annualSavings, fiveYearSavings };
  };

  const savings = calculateSavings();

  return (
    <>
      <SEO
        title="Enterprise n8n Automation Services | Save 90% vs Zapier | D2 Group"
        description="Professional n8n automation services. Unlimited workflows, 90% cost savings vs Zapier. Self-hosted or cloud. 500+ successful migrations. Book free audit."
        keywords="n8n automation, workflow automation, n8n integration, zapier alternative, n8n migration, enterprise automation"
        canonicalUrl="/services/n8n-automation"
        structuredData={[structuredData, faqStructuredData]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                Official n8n Partner • 500+ Workflows Automated
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Save <span className="text-primary">90% on Automation Costs</span>
                <br />with Enterprise n8n Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Unlimited workflow executions. No per-task pricing. Self-hosted or cloud. Scale your business 
                automation without scaling your costs. Trusted by 500+ US/EU companies.
              </p>
              <div className="flex gap-4 justify-center flex-wrap mb-12">
                <Button size="lg" asChild className="shadow-glow">
                  <Link to="/contact">
                    Book Free Automation Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#calculator">Calculate Your Savings</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Star, label: "500+ Workflows Automated" },
                  { icon: DollarSign, label: "Average Savings: $50K/Year" },
                  { icon: Shield, label: "SOC 2 • GDPR Compliant" },
                  { icon: Award, label: "Official n8n Partner" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center justify-center gap-2 text-sm animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Is <span className="text-primary">Zapier Draining Your Budget</span> as You Scale?
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Running a growing business means more workflows, more automation—and with Zapier, that means 
                exponentially higher costs. What started as $25/month quickly becomes $800+ as your task volume increases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.slice(0, 3).map((pain, index) => {
                const IconComponent = pain.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-10 w-10 text-destructive mr-3" />
                      <h3 className="text-lg font-bold">{pain.title}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {pain.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-destructive mr-2 mt-1">❌</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-destructive/10 p-3 rounded-md">
                      <p className="text-xs font-semibold text-destructive">The cost: {pain.cost}</p>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center animate-fade-in">
              <p className="text-lg text-muted-foreground mb-4 italic">
                Every month, you watch your Zapier bill climb higher. You know you're overpaying, but the thought 
                of migrating hundreds of workflows seems impossible. Meanwhile, your competitors are scaling faster 
                because they're not burning cash on per-task pricing.
              </p>
              <p className="text-2xl font-bold text-primary">How much longer can you afford to wait?</p>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">n8n Automation:</span> Enterprise-Grade Workflows
                <br />Without the Enterprise Price Tag
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                D2 Group specializes in n8n automation—the open-source platform that eliminates per-task pricing, 
                supports custom code, and gives you complete control over your automation infrastructure.
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  step: "1",
                  icon: FileText,
                  title: "Free Audit",
                  desc: "30-minute analysis",
                  details: ["Cost comparison", "Migration complexity", "ROI timeline", "Custom recommendations"]
                },
                {
                  step: "2",
                  icon: Target,
                  title: "Planning",
                  desc: "1-2 weeks",
                  details: ["Prioritize workflows", "Design n8n workflows", "Plan data migration", "Setup instance"]
                },
                {
                  step: "3",
                  icon: Settings,
                  title: "Build & Test",
                  desc: "2-4 weeks",
                  details: ["Rebuild workflows", "Enhanced error handling", "Custom code", "Comprehensive testing"]
                },
                {
                  step: "4",
                  icon: TrendingUp,
                  title: "Launch",
                  desc: "Ongoing",
                  details: ["Parallel running", "Monitor performance", "Team training", "30-day support"]
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
                    <p className="text-sm text-muted-foreground mb-4">{step.desc}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <Check className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>

            <div className="bg-primary/5 p-8 rounded-lg text-center animate-fade-in">
              <p className="text-xl font-semibold mb-2">The Result:</p>
              <p className="text-lg text-muted-foreground">
                Your automation runs <span className="text-primary font-bold">faster</span>, costs{" "}
                <span className="text-primary font-bold">90% less</span>, and scales{" "}
                <span className="text-primary font-bold">infinitely</span> without additional fees. You own your 
                workflows, control your data, and never worry about vendor price increases again.
              </p>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Leading B2B Companies Choose <span className="text-primary">n8n with D2 Group</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{feature.desc}</p>
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
                Trusted by <span className="text-primary">500+ B2B Companies</span> Across US & EU
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <blockquote className="text-sm text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <cite className="font-semibold not-italic block">{testimonial.author}</cite>
                    <p className="text-xs text-muted-foreground mb-3">{testimonial.role}</p>
                    <div className="space-y-1">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <CheckCircle className="h-3 w-3 text-primary mr-2" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Savings Calculator */}
        <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                💰 Calculate <span className="text-primary">Your Savings</span>
              </h2>
            </div>

            <Card className="p-8">
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4">
                  Monthly Task Volume: {taskVolume.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="10000"
                  value={taskVolume}
                  onChange={(e) => setTaskVolume(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>10K</span>
                  <span>50K</span>
                  <span>100K+</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-destructive/10 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Current Zapier Cost</p>
                  <p className="text-3xl font-bold text-destructive">${savings.zapierCost}/month</p>
                  <p className="text-sm mt-2">${(savings.zapierCost * 12).toLocaleString()}/year</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">With D2 Group n8n</p>
                  <p className="text-3xl font-bold text-primary">${savings.n8nCost}/month</p>
                  <p className="text-sm mt-2">${(savings.n8nCost * 12).toLocaleString()}/year</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                  <span className="font-semibold">Monthly Savings:</span>
                  <span className="text-2xl font-bold text-primary">${savings.monthlySavings}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                  <span className="font-semibold">Annual Savings:</span>
                  <span className="text-2xl font-bold text-primary">${savings.annualSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                  <span className="font-semibold">5-Year Savings:</span>
                  <span className="text-2xl font-bold text-primary">${savings.fiveYearSavings.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Detailed Savings Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">Transparent Pricing.</span> No Per-Task Fees. Ever.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`p-8 hover:shadow-xl transition-all ${tier.popular ? 'border-primary border-2' : ''}`}>
                  {tier.popular && (
                    <Badge className="mb-4 bg-primary">⭐ Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary">{tier.setup}</p>
                    <p className="text-sm text-muted-foreground">Setup</p>
                    <p className="text-xl font-semibold mt-2">{tier.monthly}/month</p>
                    <p className="text-xs text-muted-foreground mt-4 italic">{tier.ideal}</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    {tier.specs.map((spec, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">• {spec}</p>
                    ))}
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

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">🛡️ 30-Day ROI Guarantee</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're so confident in our n8n automation services that we offer a 30-day ROI guarantee: If you don't 
                see measurable ROI within 30 days—whether through cost savings, time savings, or revenue increase—we'll 
                refund 100% of your setup fee. No questions asked.
              </p>
              <p className="text-primary font-semibold mt-4">Risk-free automation transformation.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Common Questions About <span className="text-primary">n8n Migration</span>
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
              Ready to Cut Your Automation Costs by 90%?
            </h2>
            <p className="text-xl mb-4">Here's what you get when you partner with D2 Group for n8n automation:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8 text-left">
              {[
                "90% cost reduction (no more per-task pricing)",
                "Unlimited workflow executions (scale without limits)",
                "Faster execution speed (10x faster than Zapier)",
                "Enterprise-grade security (self-hosted or cloud)",
                "White-glove migration service (we do everything)",
                "30-day ROI guarantee (risk-free transformation)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg mb-8">
              Over 500 B2B companies have made the switch. The average payback period is just 10-15 months. 
              After that, it's pure savings—year after year.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/contact">
                  Book Your Free Automation Audit Now
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" asChild>
                <Link to="/resources">
                  Download Migration Guide
                  <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="text-sm">
              🔥 Limited Availability: We only onboard 10 new clients per month. 7 spots remaining this month.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
