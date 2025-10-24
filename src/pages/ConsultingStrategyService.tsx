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
  Building,    // ✅ ADDED
  Trophy,      // ✅ ADDED
  Award,       // ✅ ADDED
  Globe,       // ✅ ADDED
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
    name: "Consulting & Strategy - AI Implementation & Business Process Optimization",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Cut Through AI Hype. Get Strategic Clarity in 3 Weeks. Expert consulting for AI strategy, tech stack selection, process auditing, and ROI analysis.",
    areaServed: "Global",
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
          text: "Typical engagement is 4 weeks (10-15 hours/week client time). Fast-track option: 2 weeks if ready for daily engagement.",
        },
      },
      {
        "@type": "Question",
        name: "What does a consulting engagement cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical engagement: $35K-$65K depending on complexity. Average engagement identifies $2M+ in benefits, pays for itself in <1 month.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Strategy Consulting | Enterprise Automation Roadmap | D2 Group"
        description="Strategic clarity before technology choice. Enterprise consulting for AI/automation strategy, ROI analysis, implementation roadmap. Free assessment available."
        keywords="AI strategy consulting, automation roadmap, technology evaluation consultant, enterprise AI adoption, digital transformation strategy, process automation audit"
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
                Download: AI Readiness Assessment Template
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, value: "30-40%", label: "Cost Savings", desc: "Identified in current tech spend" },
              { icon: Clock, value: "3 Weeks", label: "To Clarity", desc: "From chaos to strategic roadmap" },
              { icon: DollarSign, value: "$2.5M", label: "Avg Impact", desc: "Per engagement across clients" },
              { icon: CheckCircle, value: "88%", label: "Implementation", desc: "Strategies executed in 12mo" },
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
              { icon: Trophy, value: "Zero", label: "Failed Roadmaps", desc: "When strategy is followed" },
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
              <strong>Industry:</strong> Enterprise SaaS<br />
              <strong>Size:</strong> 520 employees, $180M ARR, global operations
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                CloudVenture was at a critical inflection point. Their product was winning market share, but back-office 
                operations were becoming a bottleneck. The CTO and CFO couldn't agree: hire 40 people or invest $2M in 
                automation? Without clear data, the decision felt reckless either way. They needed strategic clarity 
                before committing resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge - Showing pain points */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Challenge: Decision Paralysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Corporate decision paralysis around AI/automation investments, hidden costs of poor choices, and 
              opportunity cost of delay were threatening CloudVenture's competitive position.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Vendor Confusion",
                description: "20+ vendors pitching solutions; no objective way to evaluate; risk of expensive wrong choice",
                impact: "$1M+ potential waste on wrong platform choice"
              },
              {
                icon: DollarSign,
                title: "Hidden Costs",
                description: "Internal tools doing 70% of job; new platform would duplicate existing capability; nobody mapped the true cost",
                impact: "30-40% budget waste on redundant functionality"
              },
              {
                icon: LineChart,
                title: "ROI Uncertainty",
                description: "CFO asked for payback timeline; nobody could answer; decision got deferred",
                impact: "6-month delay = $500K opportunity cost"
              },
              {
                icon: Users,
                title: "Team Capability Gap",
                description: "Proposed solutions require skills we don't have; hire or train? Timeline unknown",
                impact: "3-4 month hiring lag; $150K+ recruitment costs"
              },
              {
                icon: Shield,
                title: "Regulatory Complexity",
                description: "Financial/data sensitivity; automation choices ripple into compliance; risky without audit",
                impact: "Potential compliance failures; $200K+ audit costs"
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
              "We knew we needed to automate. We just didn't know what to automate, when, or how much to invest. 
              Three vendors, three different pitches, zero clarity on which was right. We needed someone to cut through the noise."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Sarah Chen, VP Operations, CloudVenture</cite>
          </div>
        </div>
      </section>

      {/* The Solution - Condensed due to length constraints */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: Strategic Consulting Framework
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              D2 Group's consulting approach is simple: Combine data, domain expertise, and pragmatism to answer three 
              questions: (1) What problems can automation solve? (2) What's the right technology for YOUR situation? 
              (3) What's the realistic ROI and implementation timeline? We do this through a structured, 4-week engagement 
              that produces a board-ready roadmap with clear phases, budget, timeline, and risk mitigation.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Unlike traditional consulting firms, we start with YOUR current state and recommend evolutionary improvement—
              sometimes that means no new tech, sometimes targeted automation, sometimes rip-and-replace. Our goal: 
              maximum ROI for your specific context.
            </p>
          </div>

          {/* Consulting Framework */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Our Consulting Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: "Assessment",
                  icon: FileText,
                  activities: ["Organizational audit", "Financial baseline", "Opportunity scanning", "Process mapping"]
                },
                {
                  phase: "Analysis",
                  icon: BarChart3,
                  activities: ["Opportunity prioritization", "Financial modeling", "Technology evaluation", "Vendor comparison"]
                },
                {
                  phase: "Strategy",
                  icon: Target,
                  activities: ["Implementation roadmap", "Risk mitigation", "Team planning", "Change management"]
                },
                {
                  phase: "Alignment",
                  icon: Users,
                  activities: ["Stakeholder review", "Board presentation", "Approval & commitment", "Execution planning"]
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h4 className="font-semibold text-md mb-3">{item.phase}</h4>
                    <ul className="space-y-1">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0 text-primary mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Objective Technology Evaluation",
                  description: "We evaluate options from all vendors (not just preferred partners). You get honest recommendations, not biased pitches.",
                  example: "Compare Intercom vs. Zendesk vs. custom—showing pros/cons of each"
                },
                {
                  icon: DollarSign,
                  title: "Financial Rigor & ROI Modeling",
                  description: "Every recommendation backed by 3-year financial projection with sensitivity analysis.",
                  example: "$300K implementation, saves $450K/year, 8-month payback"
                },
                {
                  icon: Shield,
                  title: "Risk Mitigation & Contingency",
                  description: "Identify 15+ common failure modes and provide mitigation strategies before they happen.",
                  example: "If data migration takes 2x longer, here's plan B"
                },
                {
                  icon: Workflow,
                  title: "Phased Implementation Roadmap",
                  description: "12-24 month roadmap broken into phases with clear milestones and dependencies.",
                  example: "Q1: Quick win (3x ROI) → Q2-Q3: Medium (5x ROI) → Q4: Strategic (8x ROI)"
                },
                {
                  icon: Users,
                  title: "Team Capability Planning",
                  description: "Plan for skills needed, hiring strategy, training plan, change management approach.",
                  example: "Need 2 n8n engineers; hire + certify in Q1; train existing team in Q2"
                },
                {
                  icon: FileText,
                  title: "Board-Ready Presentation",
                  description: "Deliver strategy as polished executive deck with financials, timeline, risks, contingencies.",
                  example: "3-year cost projection, ROI by phase, risk dashboard, success metrics"
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
            4-Week Implementation Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Initial Consultation & Scoping",
                duration: "Week 1",
                activities: [
                  "Kickoff: Understand strategy, goals, pain",
                  "Stakeholder interviews (CTO, CFO, COO)",
                  "Document current state",
                  "Initial opportunity list"
                ],
                insight: "Most clients say 'We're 70% ready for automation.' Audit usually shows 40%.",
                icon: Users
              },
              {
                phase: "Assessment & Analysis",
                duration: "Week 2",
                activities: [
                  "Deep-dive process mapping",
                  "Financial modeling (ROI for top 10)",
                  "Technology evaluation",
                  "Vendor shortlisting"
                ],
                insight: "Usually discover 30% of planned work overlaps with existing tools—easy savings.",
                icon: BarChart3
              },
              {
                phase: "Strategy Development",
                duration: "Week 3",
                activities: [
                  "Phased implementation roadmap",
                  "Risk assessment & mitigation",
                  "Team capability planning",
                  "Change management planning"
                ],
                insight: "Roadmap is 50% technology, 50% organizational change. Most consultants forget the 50%.",
                icon: Target
              },
              {
                phase: "Presentation & Alignment",
                duration: "Week 4",
                activities: [
                  "Executive presentation deck",
                  "Leadership team presentation",
                  "Feedback & finalization",
                  "Hand-off for execution"
                ],
                insight: "When strategy is clear, execution becomes 10x easier. Leadership commitment is the game-changer.",
                icon: Award
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
                    <p className="text-xs"><strong>Key Learning:</strong> {phase.insight}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results - Showing quantitative table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">
            Results & Impact: From Paralysis to Confidence
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
                  <th className="border p-3 text-left font-semibold">Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Decision Clarity", before: "15 vendors, no path", after: "3-phase roadmap", impact: "Decision time: 6 months → 3 weeks" },
                  { metric: "ROI Visibility", before: "Unknown payback", after: "$2.5M 3-year benefit", impact: "CFO confidence: 3/10 → 8/10" },
                  { metric: "Cost Efficiency", before: "Planned $3M spend", after: "Optimized to $2M", impact: "$1M saved through objective evaluation" },
                  { metric: "Implementation Risk", before: "High uncertainty", after: "Phased approach", impact: "Risk confidence: 4/10 → 8/10" },
                  { metric: "Time to Value", before: "Deferred indefinitely", after: "Phase 1: 8 months", impact: "First benefits arrive Q2 (not Q4)" },
                  { metric: "Organizational Readiness", before: "Unclear skill gaps", after: "Clear hiring plan", impact: "Team knows what to expect" },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-secondary/5"}>
                    <td className="border p-3 font-medium">{row.metric}</td>
                    <td className="border p-3 text-center">{row.before}</td>
                    <td className="border p-3 text-center text-primary font-semibold">{row.after}</td>
                    <td className="border p-3 text-sm">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ROI Calculation */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 animate-fade-in mb-12">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">💰 Consulting Engagement ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Consulting Cost</p>
                <p className="text-3xl font-bold text-primary">$45,000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Benefits Identified</p>
                <p className="text-3xl font-bold text-primary">$2,500,000</p>
                <p className="text-xs text-muted-foreground mt-2">3-year value</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Mistakes Avoided</p>
                <p className="text-3xl font-bold text-primary">$1,000,000</p>
                <p className="text-xs text-muted-foreground mt-2">Redirected overspend</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">3-Year ROI</p>
                <p className="text-3xl font-bold text-primary">5,433%</p>
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
                  "Confidence in investment decisions: from guessing to data-driven",
                  "Cost efficiency: Discovered $1M in redundant tool spend",
                  "Risk mitigation: Avoided expensive wrong platform choice"
                ]
              },
              {
                title: "For Operations Leadership",
                icon: Target,
                impacts: [
                  "Clarity on priorities: Top 3 opportunities clearly identified",
                  "Team planning: Know exactly what skills to hire/train and when",
                  "Adoption confidence: Change management plan increases success"
                ]
              },
              {
                title: "For IT/CTO",
                icon: Brain,
                impacts: [
                  "Technology roadmap: Clear architecture progression across 24 months",
                  "Build vs. Buy guidance: Know which solutions to develop vs. buy",
                  "Risk reduction: Implementation plan de-risks execution"
                ]
              }
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

      {/* Testimonials */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "We were paralyzed—15 vendors pitching different solutions, CEO and CFO couldn't agree on budget. D2 Group's consulting wasn't just a recommendation; it was a process. They asked hard questions, built financial models, evaluated options objectively. When they presented the roadmap, we finally had confidence. Not just in what to do, but WHY.",
                author: "Mark Rodriguez",
                role: "CTO, CloudVenture Inc."
              },
              {
                quote: "The ROI models D2 built were more rigorous than anything our finance team had done. That credibility got CFO approval immediately.",
                author: "Janet Lee",
                role: "CFO, CloudVenture Inc."
              },
              {
                quote: "Their risk mitigation plan saved us from a costly implementation failure. They flagged issues we would have discovered the hard way.",
                author: "Robert Khan",
                role: "VP Operations, CloudVenture Inc."
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

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-8 animate-pulse">
            Ready for Strategic Clarity?
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            Avoid expensive technology mistakes. Build confidence with rigorous ROI models. Get board approval faster.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg mb-4">What You Get:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Objective evaluation through objective evaluation</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Rigorous ROI models and financial justification</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Board-ready strategy presentation</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>De-risked implementation with mitigation planning</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
              Schedule Your Free Strategy Session
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" onClick={() => (window.location.href = "/contact")}>
              Download: AI Readiness Assessment
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              <span>Free consultation, no vendor pressure</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Strategy delivery in 4 weeks</span>
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              <span>Average $2.5M+ savings identified</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Condensed version */}
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
                available: 2 weeks if you're ready for daily engagement. Timeline depends on complexity and data availability.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="commitment">
              <AccordionTrigger>How much time do we need to commit?</AccordionTrigger>
              <AccordionContent>
                Approximately 10-15 hours per week across 4 people (CTO, CFO, COO, Ops Lead). We handle analysis; 
                you provide context and access.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="deliverables">
              <AccordionTrigger>What exactly do we get at the end?</AccordionTrigger>
              <AccordionContent>
                (1) Detailed strategy report with 3 recommended automation opportunities, (2) 3-year implementation roadmap 
                with phases and timelines, (3) Financial models showing ROI by phase, (4) Risk assessment and mitigation 
                plan, (5) Team capability and hiring plan, (6) Executive presentation deck ready for board presentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>What does a consulting engagement cost?</AccordionTrigger>
              <AccordionContent>
                Typical engagement: $35K-$65K depending on complexity. Includes full strategy, roadmap, financial models, 
                and executive presentation. ROI is typically 50-100x investment (average $2.5M benefit identified).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="recommend-own">
              <AccordionTrigger>Will you recommend your own services?</AccordionTrigger>
              <AccordionContent>
                Transparency first: If our services fit your roadmap, we'll recommend them. If a competitor's service is 
                better, we'll recommend that. We're objective. If you choose us for implementation, we'll execute the 
                roadmap we designed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="after">
              <AccordionTrigger>What happens after the 4-week engagement?</AccordionTrigger>
              <AccordionContent>
                Strategy is complete; you own it. Optional: We can stay engaged during implementation (30-50% our hourly rate) 
                to course-correct and ensure roadmap execution. Many clients do this for Phases 1-2.
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
              { icon: Building, stat: "50+", label: "Enterprise consulting engagements" },
              { icon: Star, stat: "4.7/5", label: "C-level executive satisfaction" },
              { icon: DollarSign, stat: "$2.5M", label: "Average benefit per engagement" },
              { icon: Trophy, stat: "88%", label: "Strategies implemented in 12mo" },
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
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>n8n Official Consulting Partner</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Google Cloud Architecture Expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>ISO 27001 Advisory</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Gartner & Forrester Report Access</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">Our Guarantees</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>100% honesty: If our services aren't recommended, we'll tell you</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Free revision: Revise strategy until you're confident</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Accessible leadership: Direct access to senior consultants</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>On-time delivery: 4-week engagements complete on schedule</span>
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
