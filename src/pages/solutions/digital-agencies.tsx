import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Users,
  FileText,
  Calendar,
  DollarSign,
  CheckCircle,
  Star,
  Clock,
  TrendingUp,
  AlertTriangle,
  Shield,
  PlayCircle,
  Download,
  Settings,
  Target,
  Award,
  MessageSquare,
  BarChart3,
  Activity,
  Zap,
  GitBranch,
  Package,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function DigitalAgencies() {
  const [clientCount, setClientCount] = useState(30);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Agency Automation Solutions",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
    },
    description: "Scale to 10x clients without 10x headcount. Automate client onboarding, reporting, and delivery for digital agencies.",
    areaServed: ["Global"],
  };

  // Pain Points
  const painPoints = [
    {
      icon: Clock,
      title: "Client Onboarding is a Black Hole",
      problem: "Each new client requires 40-60 hours of setup work. Create contracts, set up reporting templates, integrate their tools, configure dashboards, create Slack channels, schedule kickoff calls. Multiply by 50 clients? You're talking 2,000-3,000 hours of administrative work annually.",
      impact: "That's 1-2 full-time employees just doing onboarding. And it still takes 3-4 weeks per client.",
      cost: "If you could automate it to 4 hours per client? That's 1,840 hours saved = cost of 1 full employee freed up."
    },
    {
      icon: FileText,
      title: "Reporting is Killing Your Margins",
      problem: "Every client wants a custom report. Dashboard showing Google Ads data, social metrics, website analytics, email performance, all in their custom format. Your team spends 15-20 hours per week pulling data, creating reports, sending PDFs.",
      impact: "If you have 30 clients and spend 6 hours per client on monthly reporting? That's 2,160 hours per year on admin work.",
      cost: "At $50/hour (junior staff), that's $108,000 annually just on reporting. Automated reporting? 30 minutes per client. That's 15 hours/month instead of 120."
    },
    {
      icon: Settings,
      title: "Multi-Client Operations are Chaotic",
      problem: "You use Asana for project management, Google Drive for files, Slack for communication, Hubspot for CRM, accounting software for billing. No client data flows between them. You're manually updating Asana → Google Drive → Slack → HubSpot.",
      impact: "Your team wastes 10-15 hours per week moving data between systems. Worse: Data gets out of sync.",
      cost: "Clients don't get billed on time. Projects slip through the cracks. You're losing money on operational inefficiency."
    },
    {
      icon: Users,
      title: "Scaling is Linear (Hire + Train = Lost Productivity)",
      problem: "To go from 30 clients to 60 clients, you need to hire 5-10 new people. Each hire takes 3-6 months to become productive. You're spending $40K-$50K per hire in ramp-up time before they contribute.",
      impact: "You want to grow 30% but it requires hiring 30% more people. Your margins don't improve.",
      cost: "Your hiring process creates 6-month delays. By the time new hires are productive, you've already lost 2-3 clients."
    },
    {
      icon: MessageSquare,
      title: "Client Communication is Fragmented",
      problem: "Clients email questions. Your team responds in Slack. Some responses are lost. Clients ask the same questions every week because nobody has a system for communication. Important client requests get buried in channels.",
      impact: "Lost communication = lost deals. Client gets no response to their question, they assume you don't care, they leave for a competitor.",
      cost: "You lose the client over a communication gap, not over the work quality."
    }
  ];

  // Solutions
  const solutions = [
    {
      icon: Users,
      title: "Automated Client Onboarding",
      tagline: "40 Hours → 4 Hours Per Client",
      description: "Every new client follows the same automated workflow from signed contract to first project kickoff.",
      features: [
        "Auto-generate client folder structure",
        "Auto-send welcome packet email",
        "Auto-configure reporting dashboard",
        "Auto-create Slack channel",
        "Auto-integrate client's tools",
        "Auto-schedule kickoff call",
        "Auto-create project in Asana"
      ],
      impact: "50 clients × 40 hours = 2,000 hours/year. Automated: 50 × 4 = 200 hours. Savings: 1,800 hours = 1 full employee"
    },
    {
      icon: BarChart3,
      title: "Automated Reporting & Dashboards",
      tagline: "6 Hours → 30 Minutes Per Client",
      description: "Every client gets a custom, automated dashboard updated daily showing their campaign performance, budget spend, results, and ROI.",
      features: [
        "Real-time automated dashboards",
        "Auto-email weekly/monthly reports",
        "Alerts when metrics fall below targets",
        "Month-over-month comparisons",
        "Client 24/7 access"
      ],
      impact: "30 clients × 6 hours/month = 2,160 hours/year. Automated: 30 × 0.5 = 300 hours. Savings: 1,860 hours"
    },
    {
      icon: GitBranch,
      title: "Multi-Client Project Management",
      tagline: "Projects Run Themselves",
      description: "Projects, timelines, budgets, and team capacity are all managed automatically across all clients.",
      features: [
        "Auto-route client requests",
        "Auto-create projects with budgets",
        "Auto-assign tasks to team",
        "Auto-track time to budget",
        "Auto-alert when over budget",
        "Auto-update client with progress"
      ],
      impact: "Projects delivered on time: 40% → 95%. Budget overruns caught: Previously unknown → 100% visibility."
    },
    {
      icon: DollarSign,
      title: "Automated Billing & Revenue Ops",
      tagline: "Invoices Create Themselves",
      description: "Time is tracked, invoices are generated, payments are collected—all automatically based on project completion.",
      features: [
        "Time auto-consolidates by client",
        "Invoice auto-generated with details",
        "Auto-reminder emails sent",
        "Payment auto-reconciled",
        "Auto-record as revenue"
      ],
      impact: "Invoice turnaround: 3 days → 0 days. Payment collection: 30 days → 15 days. DSO: 45 → 20 days."
    },
    {
      icon: MessageSquare,
      title: "Client Communication Hub",
      tagline: "No More Lost Requests",
      description: "Client questions are routed, tracked, and responded to automatically based on request type and team availability.",
      features: [
        "Auto-identify request type",
        "Auto-route to correct team",
        "Request tracked in system",
        "Auto-response sent to client",
        "FAQ auto-answered",
        "Response logged for history"
      ],
      impact: "Response time: Variable → Consistent SLA. Lost requests: Unknown → 0%. Client satisfaction improved significantly."
    }
  ];

  // Success Stories
  const successStories = [
    {
      company: "BrandStudio Creative",
      type: "20-person creative agency",
      challenge: "Growing but can't scale. Each new client = hiring new people. Margins getting worse not better.",
      before: {
        clients: 15,
        team: 20,
        revenue: "$2.4M",
        margin: "28%",
        onboarding: "40 hours/client",
        reporting: "12 hours/client/month"
      },
      after: {
        clients: 60,
        team: 22,
        revenue: "$5.8M",
        margin: "34%",
        growth: "+300% clients, +10% team",
        delivery: "92% on-time"
      },
      quote: "We went from 'hiring for growth' to 'automation for growth.' We added 45 clients without adding 45 people. That's not just profit improvement—that's a completely different business model."
    },
    {
      company: "Marketing Plus Agency",
      type: "45-person multi-service agency",
      challenge: "Three different teams, three different tools, clients falling through cracks, no visibility into profitability by client.",
      results: [
        "Client churn: 35% → 12% (-66%)",
        "Team size: 45 → 42 (-7%)",
        "Revenue: $4.2M → $4.8M (+14%)",
        "Net margin: 22% → 31% (+9%)",
        "Staff turnover: 20% → 5%"
      ],
      quote: "Before automation, we were drowning in operational work. My COO was spending 50% of her time in meetings about meetings. Now that's automated. She strategizes about growth instead."
    },
    {
      company: "GrowthForce Agency",
      type: "12-person performance marketing",
      challenge: "Hit a growth ceiling. Can only serve so many clients with current model. Clients asking: 'Can you automate THIS for us?'",
      solution: "Created white-label automation offering",
      results: [
        "Clients: 18 → 45 (+150%)",
        "Team: 12 → 16 (+33%)",
        "Revenue: $1.8M → $4.2M (+133%)",
        "Margin: 35% → 42% (+7%)",
        "New revenue stream: $800K/year"
      ],
      quote: "We realized we could turn automation into a new service line. Now 60% of our new revenue is automation consulting. We've created a defensible moat."
    }
  ];

  // Pricing
  const pricingTiers = [
    {
      name: "Agency Starter",
      setup: "$8,000",
      monthly: "$1,500",
      ideal: "5-20 clients, small agencies (5-15 people)",
      roi: "$30K-$50K/year value",
      features: [
        "Automated client onboarding",
        "Basic project management automation",
        "Automated team notifications",
        "Email integration and routing",
        "Monthly reporting dashboard",
        "Weekly support & optimization",
        "30 days of training"
      ],
      popular: false
    },
    {
      name: "Agency Professional",
      setup: "$15,000",
      monthly: "$2,500",
      ideal: "20-60 clients, growing agencies (15-50 people)",
      roi: "$80K-$150K/year value",
      features: [
        "Full automated client onboarding",
        "Comprehensive project management",
        "Multi-client workflow coordination",
        "Automated billing & invoicing",
        "Advanced reporting dashboards",
        "Unlimited integrations",
        "Advanced team communication",
        "Multi-client resource planning",
        "Bi-weekly strategy calls",
        "60 days training",
        "Quarterly optimization reviews"
      ],
      popular: true
    },
    {
      name: "Agency Enterprise",
      setup: "$25,000+",
      monthly: "$4,000+",
      ideal: "60+ clients, scaling agencies (50+ people)",
      roi: "$200K-$500K+/year value",
      features: [
        "Everything in Professional, plus:",
        "Custom workflow development",
        "Multi-team automation",
        "Advanced compliance & governance",
        "White-label automation support",
        "Dedicated success manager",
        "24-hour priority support",
        "Custom API integrations",
        "Advanced analytics & insights",
        "Weekly strategy sessions",
        "Unlimited optimization"
      ],
      popular: false
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How long does it take to implement?",
      answer: "Typical implementation: 4-6 weeks. Week 1: Audit & design customization. Week 2-3: Build & configure automations. Week 4: Test & refine. Week 5: Team training. Week 6: Go-live & optimization. We can run pilots faster (2 weeks) if you want to test first. Many agencies start with one workflow, see results, then add more."
    },
    {
      question: "Will this work with our specific tools?",
      answer: "Probably yes. We integrate with: All major project management tools (Asana, Monday, ClickUp), All major CRMs (HubSpot, Salesforce, Pipedrive), All major accounting software (QuickBooks, Xero), Communication tools (Slack, Teams), Custom tools via API. If your tool has an API, we can connect it. We support 300+ integrations."
    },
    {
      question: "Can we start with just one workflow?",
      answer: "Absolutely. Most agencies start with client onboarding (biggest pain point, fastest ROI). Get that working, see results, then add more. Recommended order for most agencies: 1. Client onboarding (save 30+ hours/week immediately), 2. Automated reporting (improve client satisfaction), 3. Project management automation, 4. Advanced billing workflows. You don't need to do everything at once."
    },
    {
      question: "What if we already have Zapier workflows set up?",
      answer: "We can migrate them to n8n (usually more cost-effective) or integrate with your existing Zapier setup. Many agencies find: moving from Zapier to n8n saves 70-90% on automation costs. If you're spending $800/month on Zapier for 100 tasks, n8n = $50/month for unlimited tasks. We handle the full migration: export workflows, retest, train team, switchover."
    },
    {
      question: "How long before we see ROI?",
      answer: "Most agencies see ROI within 4-8 weeks: Week 1-2: Time savings (usually 20-30 hours/week), Week 3-4: Quality improvements (fewer errors, better communication), Week 5-8: Client retention improvements (faster response, better reporting), Week 9+: Revenue growth improvements (capacity for more clients). Average payback: 6-12 weeks. Most agencies are cash-flow positive by month 3."
    },
    {
      question: "Can we automate for our own clients (white-label)?",
      answer: "Yes. We have agencies white-labeling automation services to clients: You offer 'automation consulting' to clients, We provide the platform and support, You mark it up and keep the margin, New revenue stream: $1K-5K/client/month. We provide training, sales templates, and support for client deployments. Many agencies are making $5-20K/month from white-labeled automation."
    },
    {
      question: "What if our team doesn't have technical skills?",
      answer: "That's fine. We don't require technical expertise: Our platform is visual/no-code, We do all the setup for you, We train your team (very learnable workflows), We provide ongoing support, Your team just uses the outputs (no management needed). Most of our agencies don't have developers. They learn the basics in 1-2 days and are productive immediately."
    }
  ];

  // Calculate agency cost
  const calculateAgencyCost = () => {
    const onboardingHoursManual = clientCount * 40;
    const onboardingHoursAuto = clientCount * 4;
    const reportingHoursManual = clientCount * 6 * 12; // 6 hours/month
    const reportingHoursAuto = clientCount * 0.5 * 12;
    
    const totalHoursSaved = (onboardingHoursManual - onboardingHoursAuto) + (reportingHoursManual - reportingHoursAuto);
    const annualSavings = totalHoursSaved * 50; // $50/hour
    const fteEquivalent = Math.round(totalHoursSaved / 2080 * 10) / 10; // 2080 hours/year
    
    return {
      hoursSaved: Math.round(totalHoursSaved),
      annualSavings: Math.round(annualSavings),
      fteEquivalent
    };
  };

  const costs = calculateAgencyCost();

  return (
    <>
      <SEO
        title="Scale Your Agency Without Hiring - Digital Agency Automation | D2 Group"
        description="Scale to 10x clients without 10x headcount. Automate client onboarding, reporting, project delivery. Trusted by 75+ agencies. Save 30+ hours/week."
        keywords="agency automation, digital agency operations, client management automation, agency project management, white label automation"
        canonicalUrl="/solutions/digital-agencies"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                ✅ 75+ Digital Agencies Automated • 1,000+ Client Workflows
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Scale Your Agency to <span className="text-primary">50+ Clients</span>
                <br />
                Without Hiring 50+ People
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Automate client onboarding, reporting, and project workflows. Deliver better results faster. 
                Scale profitably without adding headcount.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mb-8">
                <Button size="lg" asChild className="shadow-glow">
                  <Link to="/contact">
                    Get Free Agency Consultation
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#solutions">See How It Works</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto text-sm">
                {[
                  { icon: Users, text: "75+ agencies automated" },
                  { icon: Clock, text: "30 hours/week saved" },
                  { icon: TrendingUp, text: "$150K-$500K/year ROI" },
                  { icon: CheckCircle, text: "35% retention improvement" },
                  { icon: Star, text: "97% satisfaction rate" }
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

        {/* Agency Growth Paradox */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Agency <span className="text-primary">Growth Paradox</span> - And How to Break It
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                As your agency grows, your profitability shrinks
              </p>
            </div>

            <Card className="p-8 mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4"></th>
                      <th className="p-4">10 Clients</th>
                      <th className="p-4">25 Clients</th>
                      <th className="p-4">50 Clients</th>
                      <th className="p-4">100 Clients</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold text-left">Team Size</td>
                      <td className="p-4">5</td>
                      <td className="p-4">15</td>
                      <td className="p-4">35</td>
                      <td className="p-4">75</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold text-left">Staff Costs</td>
                      <td className="p-4">$300K</td>
                      <td className="p-4">$900K</td>
                      <td className="p-4">$2.1M</td>
                      <td className="p-4">$4.5M</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-left">Profitability</td>
                      <td className="p-4 text-primary font-bold">40%</td>
                      <td className="p-4 text-orange-500 font-bold">28%</td>
                      <td className="p-4 text-destructive font-bold">15%</td>
                      <td className="p-4 text-destructive font-bold">8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 text-center space-y-4">
                <p className="text-lg font-semibold text-destructive">THE PROBLEM: Every new client needs more people.</p>
                <p className="text-lg font-semibold text-primary">THE SOLUTION: Every new client needs more automation.</p>
              </div>
            </Card>

            {/* ROI Calculator */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">📊 Agency ROI Calculator</h3>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-4">
                  How many clients do you manage? {clientCount}
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={clientCount}
                  onChange={(e) => setClientCount(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Hours Saved Annually</p>
                  <p className="text-3xl font-bold text-primary">{costs.hoursSaved.toLocaleString()}</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">FTE Equivalent</p>
                  <p className="text-3xl font-bold text-primary">{costs.fteEquivalent}</p>
                  <p className="text-xs text-muted-foreground mt-1">Full-time employees</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Annual Value</p>
                  <p className="text-3xl font-bold text-primary">${costs.annualSavings.toLocaleString()}</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Common Agency <span className="text-primary">Pain Points</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((pain, index) => {
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
                        <p className="text-xs font-semibold text-destructive">{pain.cost}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">Agency Automation</span> Solutions
              </h2>
            </div>

            <div className="space-y-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-xl transition-all animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <IconComponent className="h-10 w-10 text-primary mr-3" />
                          <div>
                            <h3 className="text-2xl font-bold">{solution.title}</h3>
                            <p className="text-sm font-semibold text-primary">{solution.tagline}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6">{solution.description}</p>
                        <div>
                          <p className="font-semibold mb-3">Key Features:</p>
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
                      <div className="bg-primary/5 p-6 rounded-lg">
                        <p className="font-semibold mb-4">Business Impact:</p>
                        <p className="text-sm">{solution.impact}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real Agencies, <span className="text-primary">Real Results</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{story.company}</h3>
                    <p className="text-sm text-muted-foreground">{story.type}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold mb-1">Challenge:</p>
                      <p className="text-sm text-muted-foreground">{story.challenge}</p>
                    </div>
                    {story.before && (
                      <div className="bg-destructive/10 p-3 rounded-md">
                        <p className="text-xs font-semibold mb-2">Before:</p>
                        <ul className="text-xs space-y-1">
                          <li>• {story.before.clients} clients, {story.before.team} team</li>
                          <li>• {story.before.revenue} revenue, {story.before.margin} margin</li>
                        </ul>
                      </div>
                    )}
                    {story.after && (
                      <div className="bg-primary/10 p-3 rounded-md">
                        <p className="text-xs font-semibold mb-2">After:</p>
                        <ul className="text-xs space-y-1">
                          <li>• {story.after.clients} clients, {story.after.team} team</li>
                          <li>• {story.after.revenue} revenue, {story.after.margin} margin</li>
                          <li>• {story.after.growth}</li>
                        </ul>
                      </div>
                    )}
                    {story.results && (
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
                    )}
                    <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary pl-3 mt-4">
                      "{story.quote}"
                    </blockquote>
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
                <span className="text-primary">Transparent Pricing</span> That Scales With You
              </h2>
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
                    <p className="text-sm text-muted-foreground">Setup</p>
                    <p className="text-3xl font-bold text-primary mb-2">{tier.setup}</p>
                    <p className="text-sm text-muted-foreground">Monthly</p>
                    <p className="text-2xl font-semibold mb-3">{tier.monthly}</p>
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
                      {tier.name === "Agency Enterprise" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">🛡️ Agency Growth Guarantee</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                {[
                  "30-day money-back guarantee",
                  "No long-term contracts",
                  "Cancel anytime",
                  "We stand behind results"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About <span className="text-primary">Agency Automation?</span>
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
              Stop Hiring for Growth. Start Automating for Growth.
            </h2>
            <p className="text-xl mb-8">
              Your agency doesn't need more people. It needs better systems. Every time you grow from 10 to 20 clients, 
              you shouldn't need to hire 10 more people. With proper automation, you can go from 10 to 50 clients with just 3-4 new hires.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
              <p className="text-lg font-semibold mb-4">In 4 weeks, your agency could have:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {[
                  "Automated onboarding (eliminate 35+ hours/week)",
                  "Unified client communication (no lost requests)",
                  "Real-time reporting (clients trust you more)",
                  "Project automation (fewer mistakes, on-time)",
                  "Capacity for 2x more clients (without 2x headcount)",
                  "400-600% ROI in year one"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/contact">
                  Schedule Free Agency Consultation
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" asChild>
                <Link to="/resources">
                  Download Agency ROI Calculator
                  <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="text-sm">
              ⏰ Limited Capacity: We take on only 4-6 new agency clients per quarter. Schedule your consultation today.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
