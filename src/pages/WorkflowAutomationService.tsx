import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Code,
  GitBranch,
  Settings,
  Monitor,
  Database,
  PlayCircle,
  Download,
  Workflow,
  Clock,
  Shield,
  BarChart3,
  Brain,
  FileText,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Users,
  RefreshCw,
  Lock,
  ChevronDown,
  ChevronUp,
  Link,
  Server,
  Activity,
  Package,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WorkflowAutomationService = () => {
  const [showTechnicalDeepDive, setShowTechnicalDeepDive] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "N8N Workflow Development - Design and Deployment Services",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Professional N8N workflow design and deployment services. Build triggers, nodes, error handling, sub-workflows with JavaScript/TypeScript.",
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
        name: "N8N Workflow Development",
      },
    ],
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
          text: "Typical implementation is 6-8 weeks: Week 1-2: Discovery and process audit, Week 3-5: Build core workflows, Week 6-8: Scaling, optimization, go-live. For simpler 1-2 process automation, as fast as 3-4 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Can n8n integrate with our legacy systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. n8n integrates with modern systems via APIs and legacy systems via database connections, file imports, or custom webhooks. 99% of enterprises can integrate.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="N8N Workflow Development - Professional Workflow Design and Deployment"
        description="Professional N8N workflow design and deployment services. Build triggers, nodes, error handling, sub-workflows with JavaScript/TypeScript. Custom scripting and performance optimization."
        keywords="n8n workflow development, n8n workflow design, n8n workflow deployment, n8n custom scripting, n8n function nodes, n8n error handling, n8n sub-workflows"
        canonicalUrl="/services/workflow-automation"
        structuredData={[structuredData, breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-primary">95% Faster Process Execution.</span>
              <br />
              <span className="text-foreground">1,200 Hours/Year Automated</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Replace fragile spreadsheets and manual workflows with intelligent, enterprise-grade automation. Scale
              repetitive processes instantly—at a fraction of hiring costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule Workflow Audit
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                Download n8n Best Practices Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, value: "95%", label: "Process Speed", desc: "2 hours → 8 minutes per cycle" },
              { icon: DollarSign, value: "$180K", label: "Annual Savings", desc: "Manual labor eliminated" },
              { icon: TrendingUp, value: "87%", label: "Time Reduction", desc: "Repetitive tasks automated" },
              { icon: Activity, value: "10,000+", label: "Daily Volume", desc: "Transactions processed automatically" },
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
              { icon: Workflow, value: "25+", label: "n8n Workflows", desc: "Built across industries" },
              { icon: Star, value: "4.9/5", label: "Satisfaction", desc: "Client satisfaction score" },
              { icon: BarChart3, value: "1M+", label: "Executions", desc: "Automations executed/month" },
              { icon: Shield, value: "99.8%", label: "Uptime", desc: "System uptime SLA proven" },
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
              Client Success Story: TechFlow Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Industry:</strong> Mid-market SaaS company
              <br />
              <strong>Size:</strong> 250 employees, $45M ARR, rapid growth trajectory
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                TechFlow Solutions is a mid-market SaaS company with 250 employees and $45M ARR. Rapid growth meant
                their manual processes couldn't keep up—data entry took 40+ hours/week, spreadsheets had formula errors,
                and teams wasted time on repetitive tasks. A critical shipment missed SLA due to manual processing
                delays, triggering urgent process automation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">The Challenge: Manual Process Overload</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Manual processes don't just waste time—they erode efficiency, introduce errors, and prevent scaling. For
              companies growing 50%+ annually, spreadsheets become a bottleneck that threatens growth itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: "Manual Data Entry Grind",
                description:
                  "Employees spend 40+ hours/week manually copying data between systems. Errors occur constantly, requiring rework.",
                impact: "200+ hours/month wasted, 15% error rate",
              },
              {
                icon: AlertCircle,
                title: "Repetitive Task Overload",
                description:
                  "Same processes repeated daily—invoice processing, report generation, customer onboarding—yet no standardization or automation.",
                impact: "60% of team time on repetitive, non-strategic work",
              },
              {
                icon: Link,
                title: "System Silos",
                description:
                  "Data lives in different tools (CRM, ERP, billing, analytics) with no sync. Updates in one system aren't reflected in others.",
                impact: "Data conflicts daily, delayed decisions, customer service failures",
              },
              {
                icon: Users,
                title: "Scaling Impossible",
                description:
                  "Adding new processes requires hiring more staff or spending weeks building custom integrations.",
                impact: "$500K annual hiring cost for work that could be automated; growth constrained",
              },
              {
                icon: BarChart3,
                title: "No Visibility",
                description:
                  "Nobody knows actual processing time, error rates, or bottlenecks across workflows. Decision-making is guesswork.",
                impact: "30% of decisions made on incomplete information; missed optimization opportunities",
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
              "Our team wasn't lazy—they were drowning. We could hire more people, but that's just adding more drowning.
              We needed automation."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Maria Chen, VP Operations, TechFlow Solutions</cite>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: Intelligent Workflow Automation
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              Instead of patching processes with spreadsheets or building custom code for each workflow, we implement a
              unified automation platform using n8n—a low-code orchestration engine that connects all your systems and
              automates any process without requiring engineering expertise.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What makes n8n-based automation different: it's <strong>flexible</strong> (supports unlimited
              integrations),
              <strong>affordable</strong> (low-code means 10x faster development), and <strong>maintainable</strong>{" "}
              (your team can modify workflows themselves, not vendor-dependent). Most automation projects cost $200K+.
              n8n-based automation delivers similar results in 6-8 weeks, for $50-80K.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">How It Works: Customer Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Daily Trigger",
                  description: "6:00 AM, invoices arrive via email and API from all sources automatically",
                  icon: Clock,
                },
                {
                  step: "2",
                  title: "Collection",
                  description:
                    "System pulls invoices from Stripe, QuickBooks, manual uploads without human intervention",
                  icon: Database,
                },
                {
                  step: "3",
                  title: "Extraction",
                  description: "AI reads invoice data: vendor, amount, GL code, project—structured automatically",
                  icon: Brain,
                },
                {
                  step: "4",
                  title: "Validation",
                  description: "Amount checked against PO, GL code verified, vendor matched to approved list",
                  icon: CheckCircle,
                },
                {
                  step: "5",
                  title: "Routing",
                  description: "Approved invoices route to payment queue; exceptions flagged for human review",
                  icon: GitBranch,
                },
                {
                  step: "6",
                  title: "Posting",
                  description: "Validated invoices auto-post to accounting system with full audit trail",
                  icon: FileText,
                },
                {
                  step: "7",
                  title: "Reporting",
                  description:
                    "Finance team sees dashboard: '500 invoices processed, 98% approved, 2% exceptions reviewed'",
                  icon: BarChart3,
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
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Code,
                  title: "Low-Code Builder",
                  description:
                    "Visual interface to create workflows without coding. Non-technical analysts can build workflows in hours.",
                  example: "Marketing ops creates lead-tagging workflow in 2 hours, not 2 weeks",
                },
                {
                  icon: Link,
                  title: "350+ Connectors",
                  description:
                    "Pre-built integrations to Salesforce, Stripe, Shopify, QuickBooks, Google Sheets, Slack, etc.",
                  example: "Connect Shopify to accounting in 30 minutes—orders auto-post, inventory syncs",
                },
                {
                  icon: GitBranch,
                  title: "Intelligent Routing",
                  description:
                    "Workflows make decisions. Route data to different paths based on conditions without coding.",
                  example: "Invoices >$10K → CFO approval; <$10K → controller; mismatched PO → procurement",
                },
                {
                  icon: RefreshCw,
                  title: "Error Handling",
                  description:
                    "If system is down, workflow queues and retries automatically. Data isn't lost on temporary outages.",
                  example: "Stripe API down 2 hours; workflow queued 3,000 transactions, auto-resumed when recovered",
                },
                {
                  icon: Monitor,
                  title: "Real-Time Monitoring",
                  description:
                    "Dashboard showing every workflow's status, execution count, success rate, failures with alerts.",
                  example: "Ops sees 'Invoice Processing' processed 2,000 invoices at 99.2% success rate",
                },
                {
                  icon: FileText,
                  title: "Audit Trail",
                  description:
                    "Every execution logged—data processed, transformations applied, approvals given, timestamp, user.",
                  example: "Auditor asks about invoice X; system pulls full lineage—source, transformation, posting",
                },
                {
                  icon: TrendingUp,
                  title: "Scalability",
                  description: "Process 10 items or 1M items, workflow speed doesn't change. Scales horizontally.",
                  example: "Holiday season, 10x order volume. Workflow processes 100K+ orders/day without slowdown",
                },
                {
                  icon: Settings,
                  title: "Customization",
                  description:
                    "JavaScript expressions for custom logic, webhook support, ability to call APIs/ML models.",
                  example: "Build custom connector to legacy mainframe in 1 week, integrates seamlessly",
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
            Implementation Journey: 6-8 Week Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Discovery & Process Audit",
                duration: "Week 1-2",
                activities: [
                  "Map current processes: how work flows today",
                  "Identify bottlenecks: where time wasted, errors occur",
                  "Prioritize workflows: which have highest ROI",
                  "Define success metrics: what 'done' looks like",
                ],
                insight:
                  "Most teams discover 30-40% of their time is spent on automatable processes. Once visualized, the opportunity becomes obvious.",
                icon: FileText,
              },
              {
                phase: "Core Workflows Build",
                duration: "Week 3-5",
                activities: [
                  "Build 2-3 highest-impact workflows in n8n",
                  "Configure connectors to all required systems",
                  "Implement validation rules and error handling",
                  "Parallel testing: run workflow alongside manual process",
                ],
                insight:
                  "Parallel runs prove value—team sees identical results, but 10x faster. This builds confidence for full cutover.",
                icon: Settings,
              },
              {
                phase: "Scaling & Optimization",
                duration: "Week 6-8",
                activities: [
                  "Build remaining workflows (tier 2 and 3)",
                  "Integrate with additional systems",
                  "Fine-tune performance: optimize execution time",
                  "User training: teams learn to modify workflows",
                ],
                insight:
                  "Performance optimization happens here. Workflows that take 5 minutes can often be tuned to 30 seconds with better logic.",
                icon: TrendingUp,
              },
              {
                phase: "Go-Live & Improvement",
                duration: "Week 9-12+",
                activities: [
                  "Cutover from manual to fully automated",
                  "Hypercare: continuous monitoring during cutover",
                  "Document runbooks: how to handle common issues",
                  "Monitor ROI: validate time savings, cost reduction",
                ],
                insight:
                  "Best automation implementations don't end at go-live. Continuous improvement culture compounds ROI.",
                icon: Zap,
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
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">
            Results & Impact: Transforming Business Performance
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            TechFlow replaced 40+ hours/week of manual labor with reliable automation, enabling team to focus on
            strategic work while cutting operational costs by 62%.
          </p>

          {/* Quantitative Results Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary/20">
                  <th className="border p-3 text-left font-semibold">Metric</th>
                  <th className="border p-3 text-center font-semibold">Before</th>
                  <th className="border p-3 text-center font-semibold">After</th>
                  <th className="border p-3 text-center font-semibold">Change</th>
                  <th className="border p-3 text-left font-semibold">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: "Time per cycle",
                    before: "2 hours",
                    after: "8 minutes",
                    change: "93% faster",
                    impact: "40+ hours/week saved",
                  },
                  {
                    metric: "Error rate",
                    before: "8.5%",
                    after: "0.3%",
                    change: "96% reduction",
                    impact: "Data quality trusted across org",
                  },
                  {
                    metric: "Processes automated",
                    before: "0",
                    after: "12",
                    change: "12 processes",
                    impact: "Operational overhead eliminated",
                  },
                  {
                    metric: "Annual labor cost",
                    before: "$180K",
                    after: "$30K",
                    change: "$150K saved",
                    impact: "Reinvest in strategic work",
                  },
                  {
                    metric: "System downtime incidents",
                    before: "15/year",
                    after: "0",
                    change: "100% eliminated",
                    impact: "Predictable, reliable operations",
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-secondary/5"}>
                    <td className="border p-3 font-medium">{row.metric}</td>
                    <td className="border p-3 text-center">{row.before}</td>
                    <td className="border p-3 text-center text-primary font-semibold">{row.after}</td>
                    <td className="border p-3 text-center font-semibold">{row.change}</td>
                    <td className="border p-3 text-sm">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ROI Calculation */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 animate-fade-in mb-12">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">ROI Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Implementation Investment</p>
                <p className="text-3xl font-bold text-primary">$65,000</p>
                <p className="text-xs text-muted-foreground mt-2">Discovery + build + training + hypercare</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
                <p className="text-3xl font-bold text-primary">$180,000</p>
                <p className="text-xs text-muted-foreground mt-2">Labor + error correction + tool consolidation</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Break-Even Timeline</p>
                <p className="text-3xl font-bold text-primary">4.3 months</p>
                <p className="text-xs text-muted-foreground mt-2">Fast return on investment</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">12-Month ROI</p>
                <p className="text-3xl font-bold text-primary">277%</p>
                <p className="text-xs text-muted-foreground mt-2">$180K savings / $65K investment</p>
              </div>
            </div>
          </Card>

          {/* Qualitative Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For Operations Teams",
                icon: Users,
                impacts: [
                  "Predictability: Workflows run on schedule, no surprises or firefighting",
                  "Visibility: Dashboard shows exactly what's happening, when, and why",
                  "Empowerment: Team can modify workflows, own their processes, experiment",
                ],
              },
              {
                title: "For Finance/Leadership",
                icon: DollarSign,
                impacts: [
                  "Cost Clarity: Labor costs visible, reduced, and controlled",
                  "Scalability Without Headcount: Double volume without doubling team",
                  "Competitive Advantage: Faster turnaround = faster decision-making",
                ],
              },
              {
                title: "For Customers",
                icon: CheckCircle,
                impacts: [
                  "Speed: Processes complete faster (invoicing, orders, onboarding)",
                  "Accuracy: Fewer errors, better data quality",
                  "Consistency: Same process every time, predictable outcomes",
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
              For Technical Decision Makers — Explore architecture depth and scalability details
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
                <AccordionItem value="low-code-vs-custom">
                  <AccordionTrigger className="text-lg font-semibold">
                    Why Low-Code, Not Custom Development
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">The Traditional Approach (Expensive & Slow):</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Custom code requires software engineers</li>
                          <li>Every workflow needs 4-8 weeks, $30-50K</li>
                          <li>Team is bottleneck; can't scale</li>
                          <li>Maintenance falls to engineers; business can't modify</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">The n8n Approach (Fast & Affordable):</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Low-code means business analysts can build workflows</li>
                          <li>Workflows deploy in days, not weeks</li>
                          <li>Business owns workflows; engineering isn't bottleneck</li>
                          <li>Costs 5-10x less; results similar or better</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="integration-architecture">
                  <AccordionTrigger className="text-lg font-semibold">
                    Integration Architecture: How n8n Connects Everything
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p className="font-semibold">
                        Core Concept: n8n acts as middleware—it sits between all your systems and manages data flow.
                      </p>
                      <div className="bg-secondary/20 p-4 rounded-md font-mono text-xs">
                        Source Systems → n8n Orchestration → Destination Systems
                        <br />
                        ├─ Salesforce → ├─ Validation → ├─ Data Warehouse
                        <br />
                        ├─ Stripe → ├─ Transformation → ├─ Accounting
                        <br />
                        ├─ Google Sheets → ├─ Routing → ├─ Email/Slack
                        <br />
                        └─ REST APIs → └─ Error Handling → └─ Custom APIs
                      </div>
                      <div>
                        <p className="font-semibold mb-2">How It Works:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Data enters from any source (API, webhook, file, database)</li>
                          <li>n8n applies business logic (validate, transform, decide)</li>
                          <li>Data routes to multiple destinations simultaneously</li>
                          <li>Errors are caught and exceptions routed for review</li>
                          <li>All activity is logged (audit trail)</li>
                        </ol>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="validation">
                  <AccordionTrigger className="text-lg font-semibold">Validation & Error Prevention</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p className="font-semibold">In n8n Workflows, Validation Happens Everywhere:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          <strong>Input Validation:</strong> Data checked against schema before processing
                        </li>
                        <li>
                          <strong>Business Rule Validation:</strong> Does this customer exist? Is invoice amount
                          reasonable?
                        </li>
                        <li>
                          <strong>Cross-System Validation:</strong> Check source system and destination system agree
                        </li>
                        <li>
                          <strong>Exception Flagging:</strong> If anything fails, flag for human review—never force
                          garbage data through
                        </li>
                      </ol>
                      <p className="mt-4">
                        <strong>Result:</strong> 99.5%+ success rate, errors caught before they cause downstream
                        problems
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="performance">
                  <AccordionTrigger className="text-lg font-semibold">Performance Optimizations</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p className="font-semibold">Why n8n Workflows Are Fast:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Parallel Processing:</strong> Multiple workflows run simultaneously; one slow workflow
                          doesn't block others
                        </li>
                        <li>
                          <strong>Batch Operations:</strong> Process 1,000 items in 1 API call instead of 1 item at a
                          time (when possible)
                        </li>
                        <li>
                          <strong>Caching:</strong> Frequently accessed data (reference tables, configs) cached to
                          reduce API calls
                        </li>
                        <li>
                          <strong>Smart Retries:</strong> Failed requests retry with exponential backoff; don't hammer
                          systems
                        </li>
                      </ul>
                      <p className="mt-4">
                        <strong>Result:</strong> Typical workflows execute in seconds; can process 1,000+ items/minute
                        on standard infrastructure
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scalability">
                  <AccordionTrigger className="text-lg font-semibold">Scalability & Growth Path</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Current Architecture Handles:</p>
                        <ul className="list-disc pl-5">
                          <li>50+ concurrent workflows</li>
                          <li>100K+ total executions per day</li>
                          <li>10+ system integrations</li>
                          <li>99.5% uptime SLA</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">To Scale 10x:</p>
                        <ul className="list-disc pl-5">
                          <li>Add horizontal scaling (more workers)</li>
                          <li>Implement message queuing (Kafka) for high-volume ingestion</li>
                          <li>Infrastructure cost: +$2K-5K/month</li>
                        </ul>
                      </div>
                      <p className="font-semibold mt-4">
                        Key Point: Cost scales linearly with volume, not exponentially. You can automate millions of
                        items/month with predictable, manageable infrastructure costs.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="security">
                  <AccordionTrigger className="text-lg font-semibold">Security & Compliance</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Data Protection:</p>
                        <ul className="list-disc pl-5">
                          <li>Encryption in Transit: TLS 1.3 (all data encrypted)</li>
                          <li>Encryption at Rest: AES-256 (data encrypted in storage)</li>
                          <li>Credentials Management: API keys stored in secure vault, never logged</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Access Control:</p>
                        <ul className="list-disc pl-5">
                          <li>RBAC: Role-based access (admin, operator, viewer)</li>
                          <li>Audit Logging: Every action recorded</li>
                          <li>API Key Rotation: Keys rotated every 30 days</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Compliance:</p>
                        <ul className="list-disc pl-5">
                          <li>GDPR Ready: Data deletion on request, data portability</li>
                          <li>SOC 2 Compatible: Audit logs, access controls</li>
                          <li>HIPAA Compatible: With proper configuration and BAA</li>
                        </ul>
                      </div>
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
                  "We thought automation would mean firing people. Instead, it freed our team to do work they actually enjoy—less data entry, more problem-solving. And we grew 3x without adding headcount to operations. That's the real win.",
                author: "Michael Torres",
                role: "VP Operations, TechFlow Solutions",
              },
              {
                quote:
                  "We were skeptical a low-code tool could handle our complexity. n8n surprised us—it handled everything, and when we needed custom logic, we could add JavaScript expressions. Engineering team loved it.",
                author: "Dr. Priya Sharma",
                role: "CTO, DataViz Solutions",
              },
              {
                quote:
                  "Our month-end close was chaos—invoice matching took 3 days, errors everywhere. Now it's done overnight, automatically. Our finance team goes home at 5 PM. Priceless.",
                author: "James Liu",
                role: "Controller, Global Supply Co.",
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
            The n8n automation architecture adapts to any process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "E-Commerce Order Processing",
                description:
                  "Orders arrive from 5 channels, auto-sync inventory, consolidate for fulfillment. Manual consolidation eliminated, inventory errors prevented.",
                icon: Package,
                industry: "E-commerce",
              },
              {
                title: "Lead Management & Qualification",
                description:
                  "Lead capture, scoring, auto-assignment to reps, Slack notification. First response time <30 sec vs. 4 hours.",
                icon: Users,
                industry: "B2B SaaS",
              },
              {
                title: "Financial Reconciliation",
                description:
                  "Auto-match transactions, flag anomalies, prepare exception report. Close time 3 days → 1 day, zero reconciliation errors.",
                icon: DollarSign,
                industry: "Finance",
              },
              {
                title: "HR Onboarding",
                description:
                  "Automated onboarding workflow: trigger email, collect docs, provision systems, schedule training. 40 hours saved per hire.",
                icon: Users,
                industry: "HR/Talent",
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
          <h2 className="text-4xl font-bold font-heading mb-8 animate-pulse">Ready to Automate Your Workflows?</h2>
          <p className="text-xl mb-8 animate-fade-in">
            TechFlow replaced 40+ hours/week of manual labor with automation. Achieved $180K annual savings.
            <strong> Your company can achieve similar results.</strong>
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg mb-4">What's included in our approach:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>95% faster processes, zero manual work</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Proven ROI: break-even in &lt;5 months</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Implementation in 6-8 weeks, not 6 months</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Your team can modify workflows themselves</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Full team training & knowledge transfer</span>
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
              Schedule Your Automation Audit
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30"
              onClick={() => (window.location.href = "/contact")}
            >
              Calculate Your Automation ROI
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              <span>Free consultation, zero commitment</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Implementation in 6-8 weeks typical</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              <span>ROI guarantee: 200%+ within 12 months</span>
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
            <AccordionItem value="implementation-time">
              <AccordionTrigger>How long does implementation take?</AccordionTrigger>
              <AccordionContent>
                Typical implementation is 6-8 weeks: Week 1-2: Discovery and process audit, Week 3-5: Build core
                workflows, Week 6-8: Scaling, optimization, go-live. For simpler 1-2 process automation, as fast as 3-4
                weeks. For complex multi-system integration, 10-12 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical-resources">
              <AccordionTrigger>Do we need technical resources, or do you handle everything?</AccordionTrigger>
              <AccordionContent>
                We handle 95% of work. You provide: Access to your systems (API keys, credentials), 1-2 business people
                (2-3 hours/week) to confirm processes, 1 technical person (5 hours/week) for security/infrastructure
                questions. That's 10-15 hours total from your team over 8 weeks. We do the rest.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="legacy-integration">
              <AccordionTrigger>Can n8n integrate with our legacy systems?</AccordionTrigger>
              <AccordionContent>
                Yes. n8n integrates with: Modern systems (Salesforce, Stripe, QuickBooks, Shopify, etc.) via APIs,
                Legacy systems via: database connections, file imports, or custom webhooks. If your system is truly
                unique, we build a custom connector (1-2 weeks). 99% of enterprises can integrate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="downtime">
              <AccordionTrigger>What if n8n goes down? How do we recover?</AccordionTrigger>
              <AccordionContent>
                n8n has 99.5% uptime SLA. If it does go down: Workflows queue (wait for n8n to recover) and auto-resume,
                You never lose data; everything is logged and can be replayed. For mission-critical processes, we can
                arrange 99.9%+ uptime with failover/redundancy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="modify-workflows">
              <AccordionTrigger>Can we modify workflows ourselves, or do we need you?</AccordionTrigger>
              <AccordionContent>
                You can modify workflows yourself. n8n is designed so business users (no coding) can: Adjust conditions
                (change routing logic), Update mappings (change field names), Modify schedules (change when workflow
                runs), Add simple steps. We provide training. For complex changes, we're available for support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>How much does this cost?</AccordionTrigger>
              <AccordionContent>
                Implementation typically $50-100K depending on complexity: Simple (2-3 single-system workflows):
                $35-50K, Moderate (5-10 workflows, 3-4 system integrations): $60-85K, Complex (15+ workflows, legacy
                systems, custom logic): $100K+. Monthly operating cost: $500-2K depending on execution volume and
                complexity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="roi">
              <AccordionTrigger>What's the ROI? Will we actually save money?</AccordionTrigger>
              <AccordionContent>
                Average ROI is 200-400% in 12 months. Example: Implementation: $75K, Annual labor savings: $150K (200+
                hours @ $75/hr), Error correction savings: $20K, Total Year 1 savings: $170K, Year 1 ROI: 227%. Most
                companies break even in 4-5 months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="replace-team">
              <AccordionTrigger>Will this replace our team members?</AccordionTrigger>
              <AccordionContent>
                No, it frees them. Our client's typical story: Before: Team of 8 spends 40+ hours/week on repetitive
                work. After: Team of 8 spends 5 hours/week on monitoring + improvement, 35 hours on strategic work. Team
                stays same size or grows; they work on higher-value tasks. Satisfaction increases; turnover decreases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-security">
              <AccordionTrigger>Is our data secure? Where is it stored?</AccordionTrigger>
              <AccordionContent>
                Enterprise-grade security: Encryption: TLS 1.3 in transit, AES-256 at rest. Storage: Your chosen
                location (AWS, GCP, Azure, or on-premise). Access: Role-based (only authorized people see data). Audit:
                Every access logged. Compliance: GDPR, SOC 2, HIPAA-ready. We never see your data. It stays on your
                infrastructure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vendor-lock-in">
              <AccordionTrigger>What about hidden costs or ongoing vendor lock-in?</AccordionTrigger>
              <AccordionContent>
                Full transparency: No hidden costs; all included in quoted price. No vendor lock-in: your data and
                workflows export as JSON; you can migrate anytime. n8n is open-source; you can self-host if you want. We
                support you for continuous improvement, but you're never trapped.
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
              { icon: Workflow, stat: "25+", label: "n8n automation implementations completed" },
              { icon: Star, stat: "4.9/5", label: "Average client satisfaction (verified)" },
              { icon: DollarSign, stat: "$50M+", label: "Cumulative client impact" },
              { icon: Shield, stat: "n8n Partner", label: "Official Partner Status" },
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
              <h4 className="font-semibold text-lg mb-4">Certifications & Compliance</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 text-primary mr-2" />
                  <span>ISO 27001 Information Security Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>SOC 2 Type II Compliant</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>HIPAA Compatible (with BAA)</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">Our Guarantees</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>30-day satisfaction guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Free optimization in Year 1</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>24/7 support hotline</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>ROI guarantee: 200%+ in 12 months</span>
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

export default WorkflowAutomationService;
