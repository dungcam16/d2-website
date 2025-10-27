import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  DollarSign,
  Shield,
  Zap,
  TrendingDown,
  CheckCircle,
  Star,
  Clock,
  Users,
  AlertTriangle,
  Code,
  Lock,
  GitBranch,
  Activity,
  PlayCircle,
  Download,
  Target,
  BarChart3,
  FileText,
  Settings,
  TrendingUp,
  Award,
  RefreshCw,
  Globe,
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

export default function ZapierMigration() {
  const [taskCount, setTaskCount] = useState(50000);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Zapier to n8n Migration Services",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Save 90% on automation costs. Professional Zapier to n8n migration in 2-4 weeks. Zero downtime, 99.9% workflow preservation rate.",
    areaServed: ["US", "EU"],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does Zapier migration take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most migrations take 2-4 weeks from start to finish. Throughout the migration, your current Zapier workflows keep running normally. Zero downtime for your business.",
        },
      },
    ],
  };

  // Problem Pain Points
  const problems = [
    {
      icon: DollarSign,
      title: "Unsustainable Pricing",
      problem: "You're paying $5-$50 per 1,000 tasks executed. The math: 50,000 tasks/month = $250-$800/month = $3,000-$9,600/year just for automation.",
      meaning: "Every new workflow increases costs. Scaling is painful. ROI discussions with stakeholders are awkward."
    },
    {
      icon: AlertTriangle,
      title: "Execution Limits Holding You Back",
      problem: "Zapier has rate limits and execution caps per tier. Your workflows suddenly slow down or pause when you hit monthly task limits.",
      meaning: "Missed orders. Delayed customer notifications. Support tickets pile up. Revenue leaks."
    },
    {
      icon: Code,
      title: "No Custom Code Support",
      problem: "Zapier can't handle complex logic you need. Can't do custom data transformations. Can't add conditional logic beyond basic 'if/then'.",
      meaning: "Expensive workarounds. Over-engineered solutions. Frustrated team members."
    },
    {
      icon: Lock,
      title: "Vendor Lock-In",
      problem: "Your workflows are trapped in Zapier. If you want to migrate, it's a nightmare. No easy export. Have to rebuild everything manually.",
      meaning: "Feeling stuck. Can't explore better, cheaper alternatives. Lost business agility."
    },
    {
      icon: Users,
      title: "Limited Support for Enterprise Needs",
      problem: "Zapier's support doesn't scale for serious automation. No dedicated account manager. Generic troubleshooting responses.",
      meaning: "When critical workflows break, you're on your own. Stress. Downtime. Angry customers."
    }
  ];

  // Benefits
  const benefits = [
    {
      icon: DollarSign,
      title: "Massive Cost Savings",
      feature: "Flat-rate pricing ($50-$1,500/month)",
      benefit: "No per-task charges means unlimited workflows at a predictable monthly cost",
      impact: ["$800/month → $50/month = $9,000/year savings", "$1,200/month → $250/month = $11,400/year savings"]
    },
    {
      icon: Sparkles,
      title: "Unlimited Execution & No Rate Limits",
      feature: "Unlimited executions included with plan",
      benefit: "Scale your automation without paying more per execution",
      impact: ["Process 1M workflows/month at same price as 10K", "No more 'wait until next month' for task limits", "3x faster execution than Zapier"]
    },
    {
      icon: Code,
      title: "Custom Code Support",
      feature: "JavaScript nodes for custom logic",
      benefit: "Build complex workflows that Zapier can't handle",
      impact: ["15-20% more workflows you can now automate", "Better data transformations", "Advanced conditional logic"]
    },
    {
      icon: Shield,
      title: "Self-Hosted Option (Privacy & Compliance)",
      feature: "Deploy n8n on your own infrastructure",
      benefit: "Data never leaves your servers. Full compliance with GDPR, HIPAA, SOC 2 requirements.",
      impact: ["Enterprise security", "No data-sharing concerns", "Regulatory compliance"]
    },
    {
      icon: GitBranch,
      title: "Full Workflow Control & Portability",
      feature: "Export workflows anytime (JSON format)",
      benefit: "No vendor lock-in. Own your automation assets.",
      impact: ["Freedom to switch if you want", "Backup your workflows", "Share workflows across teams"]
    },
    {
      icon: Activity,
      title: "Faster, More Reliable Execution",
      feature: "n8n's optimized infrastructure",
      benefit: "Workflows run 3x faster than Zapier with better error handling",
      impact: ["Real-time order processing", "Fewer failed workflows", "Better customer experience"]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Operations Director",
      company: "TechStart (50-person SaaS company)",
      budget: "$8,400 annually on Zapier",
      quote: "We were spending $700/month on Zapier with constant rate limit issues. D2 Group migrated us in 3 weeks. Now we pay $150/month, have unlimited workflows, and everything runs faster. We saved $6,600 in year one. Best decision we made.",
      results: ["Reduced: $700 → $150/month ($6,600/year savings)", "Eliminated rate limiting issues", "Added 20+ new workflows", "Response time: 2-5s → <500ms"]
    },
    {
      name: "Marcus Johnson",
      role: "Founder",
      company: "EcomStore ($5M revenue)",
      setup: "100+ Zapier workflows",
      quote: "With 100+ workflows, our Zapier bill hit $1,200/month. The migration team understood our complex setup perfectly. Everything worked on day one with zero downtime. We now pay $500/month and actually EXPANDED our automation. The ROI was immediate.",
      results: ["Reduced: $1,200 → $500/month ($8,400/year savings)", "Zero downtime during migration", "Added 35 new workflows", "60% faster order processing"]
    },
    {
      name: "Jennifer Lee",
      role: "Founder",
      company: "Digital Agency (20-person agency)",
      setup: "50 workflows across 10 clients",
      quote: "Managing Zapier for 10 clients was a nightmare—each client's workflows hitting different limits. D2 Group moved us to n8n and set up multi-client automation properly. Now I offer it as a service to my clients. Revenue generator, not just a cost.",
      results: ["70% reduction in client costs", "Turned automation into profit center", "Added advanced workflows", "Standardized across all clients"]
    }
  ];

  // Pricing Tiers
  const pricingTiers = [
    {
      name: "Basic Migration",
      workflows: "10-50 Zapier workflows",
      setup: "Contact Us",
      monthly: "Contact Us",
      timeline: "2-3 weeks",
      popular: false,
      features: [
        "Complete workflow audit",
        "Migration to n8n Cloud",
        "50 workflows rebuilt + tested",
        "2 weeks post-migration support",
        "Team training (2 hours)"
      ]
    },
    {
      name: "Professional Migration",
      workflows: "50-150 Zapier workflows",
      setup: "Contact Us",
      monthly: "Contact Us",
      timeline: "3-4 weeks",
      popular: true,
      features: [
        "Complete workflow audit + optimization",
        "n8n Cloud OR Self-Hosted deployment",
        "150 workflows rebuilt + tested",
        "Advanced features added (custom code, error handling)",
        "30 days post-migration support",
        "Team training (4 hours)",
        "Performance optimization"
      ]
    },
    {
      name: "Enterprise Migration",
      workflows: "150+ workflows + complex requirements",
      setup: "Custom",
      monthly: "Custom",
      timeline: "4-8 weeks",
      popular: false,
      features: [
        "Comprehensive audit + roadmap",
        "Self-Hosted n8n deployment (your infrastructure)",
        "Unlimited workflows rebuilt + optimized",
        "Custom integrations if needed",
        "90 days post-migration support",
        "Weekly check-ins for 90 days",
        "Dedicated account manager",
        "Performance & cost optimization"
      ]
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How long does the migration actually take?",
      answer: "Most migrations take 2-4 weeks from start to finish. The timeline depends on: (1) Number of workflows (10 = 2 weeks, 150+ = 4 weeks), (2) Complexity of workflows (simple = faster, complex = slower). Throughout the migration, your current Zapier workflows keep running normally. Zero downtime for your business."
    },
    {
      question: "Will I lose any of my workflows or data during migration?",
      answer: "No. We preserve 99.9% of workflows perfectly. Here's why: (1) We audit everything before starting, (2) Workflows run in parallel (Zapier + n8n) during testing, (3) We thoroughly test each workflow before cutover, (4) If anything goes wrong, we can roll back in 24 hours. In 50+ migrations, we've never lost a workflow."
    },
    {
      question: "What if my workflows are really complex?",
      answer: "Perfect. Complex workflows are where n8n shines. n8n can handle: Custom JavaScript code (Zapier can't), Advanced conditional logic, Loops and error handling, Parallel processing. Often, complex Zapier workarounds become simpler in n8n. Plus, we can add features you couldn't do in Zapier before."
    },
    {
      question: "Do I need technical knowledge to use n8n after migration?",
      answer: "No. We'll train your team on day 19-21. n8n is built for both technical AND non-technical users: Visual workflow builder (no coding needed), But supports custom code if you want it. We include 4-hour team training + documentation. Most teams are comfortable managing workflows after that."
    },
    {
      question: "Can I keep my current Zapier setup during migration?",
      answer: "Yes. That's the whole point of our approach. Your Zapier workflows stay active and running the entire time. We build everything in n8n in parallel. Only on day 19 do we switch to n8n. This means: Zero business disruption. Zero downtime."
    },
    {
      question: "What if I want to self-host n8n?",
      answer: "Absolutely. Self-hosting is one of the best parts of n8n. Benefits: Data stays on your servers, Regulatory compliance (GDPR, HIPAA, SOC 2), Custom integrations, Full control. We help with setup and deployment. Enterprise tier includes dedicated support for self-hosted environments."
    },
    {
      question: "How much will I actually save?",
      answer: "Depends on your current Zapier usage, but typically: 50 workflows: $6,000-$9,600/year → $6,000/year (saves $0-3,600), 100 workflows: $12,000-$19,200/year → $18,000/year (saves $0-1,200), 150+ workflows: Often saves $5,000-$12,000/year. Use our ROI calculator above to see your specific savings. Average client saves $6,000-$12,000/year."
    },
    {
      question: "What if something goes wrong after migration?",
      answer: "We've got your back with our 30-day post-migration support. Includes: Priority support (response in <1 hour), Weekly check-ins for first month, Performance optimization, Any workflow adjustments. Plus: 99.9% SLA guarantee + rollback option if needed."
    }
  ];

  // Calculate savings
  const calculateSavings = () => {
    const zapierMonthly = taskCount >= 50000 ? 800 : taskCount >= 20000 ? 400 : 150;
    const n8nMonthly = 500;
    const monthlySavings = zapierMonthly - n8nMonthly;
    const annualSavings = monthlySavings * 12;
    const setupCost = 5000;
    const breakEven = Math.ceil(setupCost / monthlySavings);
    
    return { zapierMonthly, n8nMonthly, monthlySavings, annualSavings, breakEven };
  };

  const savings = calculateSavings();

  return (
    <>
      <SEO
        title="Save 90% on Automation Costs - Zapier to n8n Migration | D2 Group"
        description="Done-for-you Zapier migration in 2-4 weeks. Zero downtime. Unlimited workflows. Save $6K-$12K/year. 50+ successful migrations. Free audit included."
        keywords="Zapier migration, n8n migration, Zapier alternative, automation migration, reduce automation costs, zapier to n8n"
        canonicalUrl="/services/zapier-migration"
        structuredData={[structuredData, faqStructuredData]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                ✅ 50+ Successful Migrations • 99.9% Workflow Preservation Rate
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Save <span className="text-primary">90% on Automation Costs</span>
                <br />
                Migrate from Zapier to n8n Without Losing a Single Workflow
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Done-for-you migration in 2-4 weeks. Keep all your workflows. Zero downtime. 
                Unlimited executions at a fraction of Zapier's cost.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mb-8">
                <Button size="lg" asChild className="shadow-glow">
                  <Link to="/company/contact">
                    Get Free Migration Audit
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#how-it-works">See Migration Timeline</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm">
                {[
                  { icon: CheckCircle, text: "50+ successful migrations" },
                  { icon: Clock, text: "Average: 18 days" },
                  { icon: Star, text: "4.9/5 client rating" },
                  { icon: Award, text: "99.9% workflow preservation" }
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

        {/* Problem-Agitation Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Is Zapier <span className="text-primary">Costing You Too Much?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Every month, your automation bill keeps climbing. Sound familiar?
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Most companies don't realize how expensive Zapier becomes at scale. What started as a $25/month tool 
                can easily spiral to $800+ as you add more workflows and tasks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {problems.slice(0, 3).map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-destructive mb-4" />
                    <h3 className="text-lg font-bold mb-3">{problem.title}</h3>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="text-destructive font-semibold">🔴 Problem:</span> {problem.problem}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">💡 What this means for you:</span> {problem.meaning}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="bg-destructive/10 p-8 rounded-lg text-center animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">The Real Cost of Staying on Zapier:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Annual Automation Cost", value: "$3,000-$9,600" },
                  { label: "Time Managing Zapier", value: "5-10 hours/month" },
                  { label: "Workflows You Can't Build", value: "15-20%" },
                  { label: "Vendor Lock-In Anxiety", value: "Priceless" }
                ].map((item, idx) => (
                  <div key={idx}>
                    <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                    <p className="text-2xl font-bold text-destructive">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg font-semibold mt-6">
                Total Annual Impact: <span className="text-destructive">$10K+ in costs + opportunity costs</span>
              </p>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The <span className="text-primary">n8n Advantage:</span> Enterprise Automation Without Enterprise Pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Migrate your entire Zapier setup to n8n. Get unlimited workflows, custom code, and full control. 
                We handle the entire migration—audit, rebuild, test, and deploy—so you can focus on running your business.
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  step: "1",
                  icon: FileText,
                  title: "Audit Your Setup",
                  duration: "Week 1",
                  activities: ["Map all Zaps", "Identify mission-critical flows", "Document data flows", "Create migration roadmap"]
                },
                {
                  step: "2",
                  icon: Settings,
                  title: "Build Workflows",
                  duration: "Week 2",
                  activities: ["Recreate in n8n", "Implement advanced features", "Add error handling", "Optimize for speed"]
                },
                {
                  step: "3",
                  icon: CheckCircle,
                  title: "Rigorous Testing",
                  duration: "Week 3",
                  activities: ["End-to-end testing", "Parallel testing", "Validate data accuracy", "Stress test performance"]
                },
                {
                  step: "4",
                  icon: TrendingUp,
                  title: "Deploy & Optimize",
                  duration: "Week 4",
                  activities: ["Cut over to n8n", "Monitor for 2 weeks", "Optimize performance", "Train your team"]
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

            <div className="text-center bg-primary/5 p-6 rounded-lg animate-fade-in">
              <p className="text-lg font-semibold">
                ⏱️ Timeline: <span className="text-primary">2-4 weeks start to finish</span> | 
                Zero Downtime | 99.9% Workflow Preservation
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What You Get With <span className="text-primary">n8n Migration</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">{benefit.feature}</p>
                    <p className="text-sm text-muted-foreground mb-4">{benefit.benefit}</p>
                    <div className="bg-primary/10 p-3 rounded-md">
                      <p className="text-xs font-semibold text-primary mb-2">Real Impact:</p>
                      <ul className="space-y-1">
                        {benefit.impact.map((item, idx) => (
                          <li key={idx} className="text-xs">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
              Side-by-Side <span className="text-primary">Cost Comparison</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-destructive/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-destructive">Zapier</h3>
                  <Badge variant="destructive">Current Cost</Badge>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>💰 $299-599/month for business plans</p>
                  <p>📊 Limited to 10,000-50,000 tasks</p>
                  <p>🔒 Data flows through third-party servers</p>
                  <p>⚠️ Additional costs for premium apps</p>
                  <p>📈 Costs increase with usage</p>
                  <p>❌ No custom code support</p>
                </div>
                <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                  <p className="text-2xl font-bold text-destructive">$800+/month</p>
                  <p className="text-sm">At 50,000 tasks/month</p>
                </div>
              </Card>

              <Card className="p-8 border-primary border-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">n8n</h3>
                  <Badge className="bg-primary">With D2 Group</Badge>
                </div>
                <div className="space-y-3">
                  <p>✅ $20-100/month for hosting</p>
                  <p>✅ Unlimited workflows & executions</p>
                  <p>✅ Self-hosted, full data control</p>
                  <p>✅ All integrations included</p>
                  <p>✅ Fixed costs regardless of scale</p>
                  <p>✅ Full custom code support</p>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">$500/month</p>
                  <p className="text-sm">Unlimited executions</p>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">💰 Annual Savings Calculator</h3>
              <div className="max-w-2xl mx-auto">
                <label className="block text-sm font-semibold mb-4">
                  Monthly Task Volume: {taskCount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="10000"
                  value={taskCount}
                  onChange={(e) => setTaskCount(parseInt(e.target.value))}
                  className="w-full mb-6"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-destructive/10 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Zapier Cost</p>
                    <p className="text-3xl font-bold text-destructive">${savings.zapierMonthly}/mo</p>
                    <p className="text-sm mt-2">${(savings.zapierMonthly * 12).toLocaleString()}/year</p>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">n8n Cost</p>
                    <p className="text-3xl font-bold text-primary">${savings.n8nMonthly}/mo</p>
                    <p className="text-sm mt-2">${(savings.n8nMonthly * 12).toLocaleString()}/year</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                    <span className="font-semibold">Monthly Savings:</span>
                    <span className="text-2xl font-bold text-primary">${savings.monthlySavings}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                    <span className="font-semibold">Annual Savings:</span>
                    <span className="text-2xl font-bold text-primary">${savings.annualSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                    <span className="font-semibold">Break-Even Period:</span>
                    <span className="text-2xl font-bold text-primary">{savings.breakEven} months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted by <span className="text-primary">50+ Companies</span> • 99.9% Migration Success Rate
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mb-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">Transparent Pricing.</span> No Surprises.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`p-8 hover:shadow-xl transition-all ${tier.popular ? 'border-primary border-2' : ''}`}>
                  {tier.popular && (
                    <Badge className="mb-4 bg-primary">⭐ Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.workflows}</p>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground">Setup Fee</p>
                    <p className="text-3xl font-bold text-primary mb-2">{tier.setup}</p>
                    <p className="text-sm text-muted-foreground">Monthly Platform</p>
                    <p className="text-2xl font-semibold mb-2">{tier.monthly}</p>
                    <p className="text-xs text-muted-foreground">Timeline: {tier.timeline}</p>
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
                      {tier.name === "Enterprise Migration" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">🛡️ Risk-Free Migration Guarantee</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                If your migration isn't successful OR you're not satisfied with n8n performance, we'll help you 
                migrate back to Zapier at no additional cost. Your satisfaction is guaranteed. Risk-free trial 
                period: 30 days.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About <span className="text-primary">Zapier Migration?</span> We've Got Answers.
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
              Ready to Stop Overpaying for Automation?
            </h2>
            <p className="text-xl mb-8">
              Save 90% on automation costs without sacrificing quality or functionality. Get unlimited workflows, 
              custom code support, and full control with n8n.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto text-left">
              <p className="text-lg font-semibold mb-4">What Happens Next:</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-2xl font-bold mr-4">1️⃣</span>
                  <div>
                    <p className="font-semibold">SCHEDULE A CALL</p>
                    <p className="text-sm">Click the button and pick your preferred time (takes 2 minutes)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl font-bold mr-4">2️⃣</span>
                  <div>
                    <p className="font-semibold">FREE AUDIT & ASSESSMENT</p>
                    <p className="text-sm">30-minute call with our migration expert to analyze your setup</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl font-bold mr-4">3️⃣</span>
                  <div>
                    <p className="font-semibold">CUSTOM MIGRATION PLAN</p>
                    <p className="text-sm">Detailed roadmap with transparent pricing and clear timeline</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/company/contact">
                  Get Free Migration Audit
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" asChild>
                <Link to="/resources">
                  Download Migration Checklist
                  <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="text-sm mb-4">
              💯 <strong>100% RISK-FREE:</strong> If you're not satisfied with n8n after 30 days, we'll help you 
              migrate back to Zapier at no additional cost. Your satisfaction is guaranteed.
            </p>
            <p className="text-sm">
              ⏳ <strong>Limited Spots Available:</strong> We only take on 2-3 migrations per month to ensure quality.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
