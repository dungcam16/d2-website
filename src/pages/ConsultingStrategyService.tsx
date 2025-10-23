import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Shield,
  BarChart3,
  Workflow,
  Clock,
  Users,
  FileText,
  PlayCircle,
  Download,
  GitBranch,
  Settings,
  Brain,
  Zap,
  AlertTriangle,
  LineChart,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Package,
  Lock,
  Activity,
  RefreshCw,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ConsultingStrategyService = () => {
  const [showTechnicalDeepDive, setShowTechnicalDeepDive] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Strategy Consulting | Enterprise Automation Roadmap",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Strategic clarity before technology choice. Enterprise consulting for AI/automation strategy, ROI analysis, implementation roadmap. 4-week engagement delivering $2.5M+ average benefit.",
    areaServed: "Vietnam",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://d2group.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://d2group.co/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Consulting & Strategy",
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a consulting engagement take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical engagement is 4 weeks (part-time engagement, 10-15 hours/week client time). Fast-track option available: 2 weeks if you're ready for daily engagement. Timeline depends on complexity and data availability.",
        },
      },
      {
        "@type": "Question",
        name: "What exactly do we get at the end?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "(1) Detailed strategy report with 3 recommended automation opportunities, (2) 3-year implementation roadmap with phases and timelines, (3) Financial models showing ROI by phase, (4) Risk assessment and mitigation plan, (5) Team capability and hiring plan, (6) Executive presentation deck ready for board presentation.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Strategy Consulting | Enterprise Automation Roadmap | D2 Group"
        description="Strategic clarity before technology choice. Enterprise consulting for AI/automation strategy, ROI analysis, implementation roadmap. Free assessment available."
        keywords="AI strategy consulting, automation roadmap, technology evaluation consultant, enterprise AI adoption, digital transformation strategy, process automation audit, ROI analysis for technology"
        canonicalUrl="/services/consulting-strategy"
        structuredData={[structuredData, breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-primary">Cut Through AI Hype.</span>
              <br />
              <span className="text-foreground">Get Strategic Clarity in 3 Weeks</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Forget vendor pitches and guessing. Our strategic consulting translates business goals into an executable
              AI roadmap—backed by data, derisked, and designed for your reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule Your Free Strategy Session
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                Download: AI Readiness Assessment
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, value: "30-40%", label: "Cost Savings", desc: "Identified in current tech spend" },
              { icon: Clock, value: "3 Weeks", label: "To Clarity", desc: "From chaos to strategic roadmap" },
              { icon: TrendingUp, value: "$2.5M", label: "Average Impact", desc: "Per engagement across clients" },
              { icon: CheckCircle, value: "88%", label: "Implementation", desc: "Strategies executed in 12 months" },
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

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Building, value: "50+", label: "Enterprise Clients", desc: "Global companies across industries" },
              { icon: Star, value: "4.7/5", label: "Exec Satisfaction", desc: "Verified C-level feedback" },
              { icon: DollarSign, value: "$2.5M", label: "Avg Savings", desc: "Identified per engagement" },
              { icon: CheckCircle, value: "Zero", label: "Failed Roadmaps", desc: "When strategy is followed" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Client Success Story: CloudVenture Inc.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Industry:</strong> Enterprise SaaS
              <br />
              <strong>Size:</strong> 520 employees, $180M ARR, global operations
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                CloudVenture was at a critical inflection point. Their product was winning market share, but back-office
                operations were becoming a bottleneck. The CTO and CFO couldn't agree: hire 40 people or invest $2M in
                automation? Without clear data, the decision felt reckless either way. They needed strategic clarity
                before committing resources. Scaling 40% YoY but manual processes limiting velocity; leaders unsure
                whether to invest in automation or hire more staff. Challenge: 15 different automation "solutions"
                proposed by vendors; no clear ROI clarity; fear of wrong technology choice; compliance requirements
                complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Challenge: Decision Paralysis Around AI Investment
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Corporate decision paralysis around AI/automation investments creates hidden costs. Poor technology
              choices cost 3-5x more than spending time on strategy. Opportunity cost of delay compounds monthly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Vendor Confusion & Bias",
                description:
                  "20+ vendors pitching solutions; no objective way to evaluate; risk of expensive wrong choice leading to sunk costs and rework.",
                impact: "6-month decision paralysis; $500K+ risk exposure per wrong platform choice",
              },
              {
                icon: DollarSign,
                title: "Hidden Costs & Redundancy",
                description:
                  "Internal tools doing 70% of job; new platform would duplicate existing capability; nobody mapped the true total cost of ownership.",
                impact: "$1M+ in redundant tool spend annually; 30-40% of tech budget wasted",
              },
              {
                icon: Target,
                title: "ROI Uncertainty",
                description:
                  "CFO asked for payback timeline; nobody could answer with confidence; decision got deferred indefinitely while competitors moved forward.",
                impact: "Missed market windows; competitors gain 12-18 month advantage; lost revenue",
              },
              {
                icon: Users,
                title: "Team Capability Gap",
                description:
                  "Proposed solutions require skills we don't have; hire or train? Timeline unknown; organizational readiness unclear.",
                impact: "$200K+ per engineer hired too early; 6-12 month training/onboarding delays",
              },
              {
                icon: Shield,
                title: "Regulatory & Compliance Complexity",
                description:
                  "Financial/data sensitivity; automation choices ripple into compliance framework; risky without thorough audit trail planning.",
                impact: "SOC 2 / GDPR audit failures; $100K+ remediation; customer trust erosion",
              },
            ].map((pain, index) => {
              const IconComponent = pain.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="font-semibold text-lg mb-3">{pain.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{pain.description}</p>
                  <div className="bg-destructive/10 p-3 rounded-md">
                    <p className="text-xs font-semibold text-destructive">Impact: {pain.impact}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md animate-fade-in">
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
              "We knew we needed to automate. We just didn't know what to automate, when, or how much to invest. Three
              vendors, three different pitches, zero clarity on which was right. We needed someone to cut through the
              noise."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Sarah Chen, VP Operations, CloudVenture</cite>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: Data-Driven Strategic Roadmap
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              D2 Group's consulting approach is simple: Combine data, domain expertise, and pragmatism to answer three
              questions: (1) What problems can automation solve? (2) What's the right technology for YOUR situation (not
              in general)? (3) What's the realistic ROI and implementation timeline? We do this through a structured,
              4-week engagement that produces a board-ready roadmap with clear phases, budget, timeline, and risk
              mitigation.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Unlike traditional consulting firms (which recommend expensive transformations), we start with YOUR
              current state and recommend evolutionary improvement—sometimes that means no new tech, sometimes it means
              targeted automation, sometimes it means rip-and-replace. Our goal: maximum ROI for your specific context.
              We're not paid to recommend tech; we're accountable for outcomes.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">How It Works: Engagement Flow</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Initial Conversation",
                  description:
                    "Understand business strategy, growth plans, current pain points, budget constraints. 'What keeps you up at night?'",
                  icon: Users,
                },
                {
                  step: "2",
                  title: "Current State Audit",
                  description:
                    "Document all processes, systems, team composition, existing automation, compliance requirements. Identify top 10 automation opportunities.",
                  icon: FileText,
                },
                {
                  step: "3",
                  title: "Opportunity Assessment",
                  description:
                    "Prioritize opportunities by ROI, implementation difficulty, and strategic alignment. Build financial models for top 5.",
                  icon: BarChart3,
                },
                {
                  step: "4",
                  title: "Technology Evaluation",
                  description:
                    "For each priority, map tech options (build vs. buy vs. integrate). Evaluate against criteria: cost, time, team capability, risk.",
                  icon: Settings,
                },
                {
                  step: "5",
                  title: "Recommendation & Roadmap",
                  description:
                    "Present phased implementation plan. Phase 1 (quick wins): 2-3 months, $200K, 3x ROI. Phase 2-3: Medium and strategic investments.",
                  icon: GitBranch,
                },
                {
                  step: "6",
                  title: "Stakeholder Alignment",
                  description:
                    "Present to board/execs with confidence: 'Here's why we chose this path, here's the ROI, here's what could go wrong and how we prevent it.'",
                  icon: CheckCircle,
                },
                {
                  step: "7",
                  title: "Hand-off & Execution",
                  description:
                    "Optional: D2 Group stays engaged through implementation to ensure roadmap execution and course-correct if needed.",
                  icon: Zap,
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                        {item.step}
                      </div>
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-md mb-3">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Key Consulting Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Objective Technology Evaluation",
                  description:
                    "We evaluate options from all vendors (not just our preferred partners). You get honest recommendations, not biased pitches.",
                  example:
                    "For customer support, we compare Intercom vs. Zendesk vs. custom solution, showing pros/cons of each",
                },
                {
                  icon: DollarSign,
                  title: "Financial Rigor & ROI Modeling",
                  description: "Every recommendation backed by 3-year financial projection with sensitivity analysis.",
                  example: "This automation costs $300K to implement, saves $450K/year in labor, pays back in 8 months",
                },
                {
                  icon: Shield,
                  title: "Risk Mitigation & Contingency",
                  description:
                    "We identify 15+ common failure modes and provide mitigation strategies before they happen.",
                  example:
                    "If data migration takes 2x longer, here's plan B; if team doesn't adopt, here's adoption plan",
                },
                {
                  icon: GitBranch,
                  title: "Phased Implementation Roadmap",
                  description: "12-24 month roadmap broken into phases with clear milestones and dependencies.",
                  example:
                    "Q1: Quick win automation (3x ROI) → Q2-Q3: Medium effort (5x ROI) → Q4: Strategic platform (8x ROI)",
                },
                {
                  icon: Users,
                  title: "Team Capability & Change Mgmt",
                  description: "Plan for skills you need, hiring strategy, training plan, change management approach.",
                  example: "You'll need 2 n8n workflow engineers; hire + certify in Q1; train existing team in Q2",
                },
                {
                  icon: FileText,
                  title: "Board-Ready Presentation",
                  description:
                    "Deliver strategy as polished executive deck with financials, timeline, risks, and contingencies.",
                  example: "Deck shows: 3-year cost projection, ROI by phase, risk dashboard, success metrics",
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h4 className="font-semibold text-md mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-xs italic">{feature.example}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Implementation Journey: 4-Week Engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Initial Consultation & Scoping",
                duration: "Week 1",
                activities: [
                  "Kickoff meeting: Understand business strategy, growth goals",
                  "Stakeholder interviews: CTO, CFO, COO, operations leads",
                  "Document current state: systems, processes, team",
                ],
                insight: "Most clients say 'We're about 70% ready for automation.' Audit usually shows 40%.",
                icon: Users,
              },
              {
                phase: "Assessment & Analysis",
                duration: "Week 2",
                activities: [
                  "Deep-dive process mapping: Identify 50+ automation opportunities",
                  "Financial modeling: Build ROI cases for top 10",
                  "Technology evaluation: Research and shortlist tech options",
                ],
                insight:
                  "Usually discover that 30% of planned work overlaps with existing tool capability—easy savings.",
                icon: BarChart3,
              },
              {
                phase: "Strategy Development",
                duration: "Week 3",
                activities: [
                  "Create phased roadmap: Phases 1-3 across 12-24 months",
                  "Risk assessment and mitigation planning",
                  "Team planning: Skills needed, hiring/training plan",
                  "Change management planning: Adoption strategy",
                ],
                insight: "Roadmap is 50% technology, 50% organizational change. Most consultants forget the 50%.",
                icon: GitBranch,
              },
              {
                phase: "Presentation & Alignment",
                duration: "Week 4",
                activities: [
                  "Develop executive presentation deck (board-ready)",
                  "Present strategy to leadership team",
                  "Gather feedback and finalize roadmap",
                  "Optional: Design hand-off plan for execution",
                ],
                insight:
                  "When strategy is clear, execution becomes 10x easier. Leadership commitment is the game-changer.",
                icon: CheckCircle,
              },
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-fade-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-4">
                    <IconComponent className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-1">{phase.phase}</h3>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Activities:</h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0 text-primary mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-md">
                    <p className="text-xs">
                      <strong>Key Learning:</strong> {phase.insight}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-primary/10 p-6 rounded-lg inline-block">
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-lg font-semibold">
                "Strategy is 80% business + 20% technology. Most strategies fail because they treat it as opposite. We
                prioritize organizational readiness as much as technical soundness."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">
            Results & Impact: Strategic Clarity Delivered
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            CloudVenture went from confused decision paralysis to confident strategic clarity—and avoided a $2M mistake
            in the process.
          </p>

          {/* Quantitative Results Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary/20">
                  <th className="border p-3 text-left font-semibold">Metric</th>
                  <th className="border p-3 text-center font-semibold">Before</th>
                  <th className="border p-3 text-center font-semibold">After</th>
                  <th className="border p-3 text-center font-semibold">Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: "Decision Clarity",
                    before: "15 vendors, no path forward",
                    after: "3-phase roadmap, confidence",
                    impact: "Reduced decision time 6 months → 3 weeks",
                  },
                  {
                    metric: "ROI Visibility",
                    before: "Unknown payback",
                    after: "$2.5M 3-year benefit identified",
                    impact: "CFO confidence level: 3/10 → 8/10",
                  },
                  {
                    metric: "Cost Efficiency",
                    before: "Planned $3M spend",
                    after: "Optimized to $2M (same outcome)",
                    impact: "$1M saved through objective evaluation",
                  },
                  {
                    metric: "Implementation Risk",
                    before: "High (uncertainty)",
                    after: "Low (phased approach, mitigation)",
                    impact: "Risk confidence: 4/10 → 8/10",
                  },
                  {
                    metric: "Time to Value",
                    before: "Deferred indefinitely",
                    after: "Phase 1 ROI in 8 months",
                    impact: "First benefits arrive Q2 (not Q4)",
                  },
                  {
                    metric: "Organizational Readiness",
                    before: "Unclear skill gaps",
                    after: "Clear hiring + training plan",
                    impact: "Team knows expectations, recruiting started",
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-secondary/5"}>
                    <td className="border p-3 font-medium">{row.metric}</td>
                    <td className="border p-3 text-center text-sm">{row.before}</td>
                    <td className="border p-3 text-center text-primary font-semibold text-sm">{row.after}</td>
                    <td className="border p-3 text-sm">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ROI Calculation */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 animate-fade-in mb-12">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">Consulting Engagement ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Consulting Cost</p>
                <p className="text-3xl font-bold text-primary">$45,000</p>
                <p className="text-xs text-muted-foreground mt-2">4-week engagement</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Benefits Identified</p>
                <p className="text-3xl font-bold text-primary">$2,500,000</p>
                <p className="text-xs text-muted-foreground mt-2">3-year cumulative</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Mistakes Avoided</p>
                <p className="text-3xl font-bold text-primary">$1,000,000</p>
                <p className="text-xs text-muted-foreground mt-2">Planned overspend redirected</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">3-Year ROI</p>
                <p className="text-3xl font-bold text-primary">5,433%</p>
                <p className="text-xs text-muted-foreground mt-2">Payback in &lt;1 month</p>
              </div>
            </div>
          </Card>

          {/* Qualitative Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For Finance Leadership",
                icon: DollarSign,
                impacts: [
                  "Confidence in Investment Decisions: From 'we're guessing' to 'we have objective data'",
                  "Cost Efficiency Gains: Discovered $1M in redundant tool spend",
                  "Risk Mitigation: Avoid expensive mistake of choosing wrong platform",
                ],
              },
              {
                title: "For Operations Leadership",
                icon: Target,
                impacts: [
                  "Clarity on Priorities: Top 3 automation opportunities clearly identified",
                  "Team Planning: Know exactly what skills to hire/train and when",
                  "Adoption Confidence: Change management plan increases likelihood of success",
                ],
              },
              {
                title: "For IT/CTO",
                icon: Settings,
                impacts: [
                  "Technology Roadmap: Clear architecture progression across 24 months",
                  "Build vs. Buy Guidance: Know which solutions to develop vs. buy",
                  "Risk Reduction: Implementation plan de-risks execution",
                ],
              },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-semibold text-lg mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.impacts.map((impact, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-heading mb-4 animate-fade-in">Technical Deep Dive</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              For Technical Decision Makers — Explore methodology depth
            </p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => setShowTechnicalDeepDive(!showTechnicalDeepDive)}
            >
              {showTechnicalDeepDive ? (
                <>
                  Hide Technical Details <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show Technical Details <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {showTechnicalDeepDive && (
            <div className="mt-8 animate-fade-in">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="evaluation">
                  <AccordionTrigger className="text-lg font-semibold">Our Evaluation Framework</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Technology Evaluation Matrix:</strong>
                      </p>
                      <p>
                        <strong>Dimensions:</strong> Cost, time-to-value, team capability, integrations, scalability,
                        vendor stability, support SLA
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>For each dimension:</strong> Rate options 1-10, weight by importance
                        </li>
                        <li>
                          <strong>Transparency:</strong> Show all trade-offs, not just winner
                        </li>
                      </ul>
                      <div className="bg-secondary/20 p-4 rounded-md mt-4">
                        <p className="font-semibold mb-2">Example Evaluation:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Option A (Salesforce Flow): Easy, proven, high cost ($500K+ year 1), vendor lock-in risk
                          </li>
                          <li>
                            Option B (n8n + Custom): Medium learning curve, flexible, low cost ($80K year 1),
                            open-source
                          </li>
                          <li>Option C (Zapier): Very easy, moderate cost ($150K year 1), scaling limits</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="financial">
                  <AccordionTrigger className="text-lg font-semibold">Financial Modeling Approach</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Inputs:</p>
                        <ul className="list-disc pl-5">
                          <li>Current labor costs (headcount, hourly rates, burden rate)</li>
                          <li>Process volume and efficiency metrics</li>
                          <li>Tool costs (licensing, hosting, integration)</li>
                          <li>Implementation costs (consulting, training, change management)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Model: 3-year cash flow projection</p>
                        <ul className="list-disc pl-5">
                          <li>Year 1: High implementation costs, partial ROI</li>
                          <li>Year 2: Full ROI from phase 1, beginning of phase 2</li>
                          <li>Year 3: Cumulative benefits across all phases</li>
                        </ul>
                      </div>
                      <p className="mt-4">
                        <strong>Outputs:</strong> Payback timeline, IRR, sensitivity analysis (what if X costs 2x more?)
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="risk">
                  <AccordionTrigger className="text-lg font-semibold">Risk Assessment Methodology</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Risk Categories:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>
                            <strong>Technology Risk:</strong> Platform doesn't deliver promised functionality
                          </li>
                          <li>
                            <strong>Implementation Risk:</strong> Project takes 2x longer than planned
                          </li>
                          <li>
                            <strong>Adoption Risk:</strong> Team doesn't use new system, goes back to old ways
                          </li>
                          <li>
                            <strong>Organizational Risk:</strong> Leadership changes, priorities shift
                          </li>
                          <li>
                            <strong>Vendor Risk:</strong> Vendor is acquired, support ends, pricing changes
                          </li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Mitigation:</p>
                        <ul className="list-disc pl-5">
                          <li>For each risk: Probability estimate, impact, mitigation strategy</li>
                          <li>Create contingency plan if top 3 risks materialize</li>
                          <li>Monitor during implementation and adjust</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="benchmarking">
                  <AccordionTrigger className="text-lg font-semibold">
                    Benchmarking & Comparative Analysis
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Data Sources:</p>
                        <ul className="list-disc pl-5">
                          <li>Gartner magic quadrants and cost models</li>
                          <li>Industry benchmarks (% of revenue spent on IT, automation maturity by industry)</li>
                          <li>Peer analysis (what are similar companies doing?)</li>
                          <li>Total Cost of Ownership (TCO) models incorporating hidden costs</li>
                        </ul>
                      </div>
                      <p className="mt-4 font-semibold">
                        "Most companies underestimate total cost of ownership by 40-60%. We help you see the full
                        picture."
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We were paralyzed—15 vendors pitching different solutions, CEO and CFO couldn't agree on budget. D2 Group's consulting wasn't just a recommendation; it was a process. They asked hard questions, built financial models, evaluated options objectively. When they presented the roadmap, we finally had confidence. Not just in what to do, but WHY. That confidence got buy-in from the board and team. Implementation has been exactly on plan.",
                author: "Mark Rodriguez",
                role: "CTO, CloudVenture Inc.",
              },
              {
                quote:
                  "The ROI models D2 built were more rigorous than anything our finance team had done. That credibility got CFO approval immediately.",
                author: "Janet Lee",
                role: "CFO, CloudVenture Inc.",
              },
              {
                quote:
                  "Their risk mitigation plan saved us from a costly implementation failure. They flagged issues we would have discovered the hard way.",
                author: "Robert Khan",
                role: "VP Operations, CloudVenture Inc.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <blockquote className="text-sm text-muted-foreground italic mb-4">{testimonial.quote}</blockquote>
                <div className="border-t pt-4">
                  <cite className="font-semibold not-italic block">{testimonial.author}</cite>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">Related Use Cases</h2>
          <p className="text-center text-muted-foreground mb-12">
            This consulting methodology applies across diverse scenarios
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Financial Services Data Modernization",
                description:
                  "Bank has legacy data silos, wants unified analytics + AI-driven lending decisions. 18-month roadmap, $4M-6M investment, $8M annual benefit.",
                icon: DollarSign,
                industry: "Financial Services",
              },
              {
                title: "E-Commerce Operational Scaling",
                description:
                  "Retailer scaling 100% YoY, automation vs. hiring decision. 12-month roadmap, $2M investment, $5M annual labor savings.",
                icon: TrendingUp,
                industry: "E-Commerce",
              },
              {
                title: "Manufacturing Supply Chain",
                description:
                  "Manual procurement, inventory, forecasting needs predictive capability. 24-month roadmap, $3.5M investment, $12M benefits.",
                icon: Package,
                industry: "Manufacturing",
              },
              {
                title: "SaaS Product Automation",
                description:
                  "Embed automation/AI into product, architecture unclear. 18-month product roadmap, $20M+ incremental revenue.",
                icon: Zap,
                industry: "SaaS",
              },
            ].map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <p className="text-xs text-muted-foreground mb-2">{useCase.industry}</p>
                  <h3 className="font-semibold text-md mb-3">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                  <Button variant="link" className="p-0 h-auto" onClick={() => (window.location.href = "/contact")}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-8 animate-pulse">Ready for Strategic Clarity?</h2>
          <p className="text-xl mb-8 animate-fade-in">
            CloudVenture went from decision paralysis to confident strategy in 4 weeks. Avoided a $2M mistake.
            <strong> Your company can achieve similar clarity.</strong>
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg mb-4">What You Get:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Avoid expensive technology mistakes through objective evaluation</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Build confidence with rigorous ROI models and financial justification</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Get board approval faster with compelling strategy presentation</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>De-risk implementation with mitigation planning</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Execute with timeline clarity and team alignment</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule Your Free Strategy Session
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30"
              onClick={() => (window.location.href = "/contact")}
            >
              Download: AI Readiness Assessment
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              <span>Free consultation (no products to sell)</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Strategy delivery in 4 weeks</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              <span>ROI guarantee: $2M+ savings identified on average</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="timeline">
              <AccordionTrigger>How long does a consulting engagement take?</AccordionTrigger>
              <AccordionContent>
                Typical engagement is 4 weeks (part-time engagement, 10-15 hours/week client time). Fast-track option
                available: 2 weeks if you're ready for daily engagement. Timeline depends on complexity and data
                availability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="commitment">
              <AccordionTrigger>How much time do we need to commit?</AccordionTrigger>
              <AccordionContent>
                Approximately 10-15 hours per week across 4 people (CTO, CFO, COO, Ops Lead). We handle analysis; you
                provide context and access.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="deliverables">
              <AccordionTrigger>What exactly do we get at the end?</AccordionTrigger>
              <AccordionContent>
                (1) Detailed strategy report with 3 recommended automation opportunities, (2) 3-year implementation
                roadmap with phases and timelines, (3) Financial models showing ROI by phase, (4) Risk assessment and
                mitigation plan, (5) Team capability and hiring plan, (6) Executive presentation deck ready for board
                presentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bias">
              <AccordionTrigger>Will you recommend your own services?</AccordionTrigger>
              <AccordionContent>
                Transparency first: If our services fit your roadmap, we'll recommend them. If a competitor's service is
                better, we'll recommend that. We're objective. If you choose us for implementation, we'll execute the
                roadmap we designed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>What does a consulting engagement cost?</AccordionTrigger>
              <AccordionContent>
                Typical engagement: $35K-$65K depending on complexity. Includes full strategy, roadmap, financial
                models, and executive presentation. ROI is typically 50-100x investment (average $2.5M benefit
                identified).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="roi-justify">
              <AccordionTrigger>Can this be ROI-justified?</AccordionTrigger>
              <AccordionContent>
                Yes. Average engagement identifies $2M+ in benefits, pays for itself in &lt;1 month. Risk mitigation
                alone (avoiding one $5M technology mistake) justifies the investment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technology">
              <AccordionTrigger>Will you recommend the "latest and greatest" technology?</AccordionTrigger>
              <AccordionContent>
                We recommend what fits your situation. Sometimes that's cutting-edge; sometimes it's boring, proven
                technology—and boring is right. We evaluate against your criteria, not hype.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="after">
              <AccordionTrigger>What happens after the 4-week engagement?</AccordionTrigger>
              <AccordionContent>
                Strategy is complete; you own it. Optional: We can stay engaged during implementation (30-50% our hourly
                rate) to course-correct and ensure roadmap execution. Many clients do this for Phases 1-2.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="re-engage">
              <AccordionTrigger>Can we re-engage if strategy needs updates?</AccordionTrigger>
              <AccordionContent>
                Yes. Technology changes, business changes—strategy should evolve. We typically review and update
                annually or when business context shifts significantly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fractional">
              <AccordionTrigger>Do you offer fractional CTO/strategy advisor services?</AccordionTrigger>
              <AccordionContent>
                Yes, for some clients. 10-20 hours/month retainer for ongoing strategic guidance, vendor management, and
                decision support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold font-heading text-center mb-12">Why Trust D2 Group</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Building, stat: "50+", label: "Enterprise consulting engagements completed" },
              { icon: Star, stat: "4.7/5", label: "C-level executive satisfaction (verified)" },
              { icon: DollarSign, stat: "$2.5M", label: "Average benefit identified per engagement" },
              { icon: CheckCircle, stat: "88%", label: "Recommended strategies implemented in 12 months" },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">Certifications & Credentials</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 text-primary mr-2" />
                  <span>n8n Official Consulting Partner</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>Google Cloud Architecture Expertise</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-4 w-4 text-primary mr-2" />
                  <span>ISO 27001 Advisory</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 text-primary mr-2" />
                  <span>Gartner & Forrester Report Access</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">Our Guarantees</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>100% Honesty Guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Free Revision Guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Accessible Leadership (Direct access to senior consultants)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>On-Time Delivery (4-week engagements on schedule)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultingStrategyService;
