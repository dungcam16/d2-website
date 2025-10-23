import React, { useState } from "react";
import {
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  Shield,
  CheckCircle,
  Star,
  BarChart3,
  Zap,
  Globe,
  Award,
  Clock,
  Users,
  Monitor,
  Database,
  Settings,
  Link,
  FileText,
  AlertTriangle,
  Smartphone,
  Gauge,
  MapPin,
  Brain,
  Eye,
  Filter,
  Download,
  Lightbulb,
  Trophy,
  Building,
  ShoppingCart,
  Heart,
  Code,
  Home,
  Briefcase,
  PlayCircle,
  Calculator,
  GitBranch,
  Server,
  Workflow,
  Lock,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Activity,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ApiIntegrationService = () => {
  const [showTechnicalDeepDive, setShowTechnicalDeepDive] = useState(false);
  const [roiInputs, setRoiInputs] = useState({
    systems: 9,
    manualHours: 80,
    hourlyCost: 75,
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom API & Integration Solutions - Enterprise Integration Platform",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "End-to-end API development, legacy system integration, and webhook orchestration. Connect 25+ systems real-time. 99.7% uptime SLA. Professional integration services.",
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
        name: "API Integration Solutions",
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
          text: "Typical timeline is 6-10 weeks: Discovery (1-2 weeks) → Hub build (3-4 weeks) → First integrations (2-3 weeks) → Optimization & handoff (1-2 weeks). Critical path for MVP (3 core integrations) is 4-5 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate our legacy systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Options: (1) Database-level sync if legacy system has database; (2) File export/import if legacy system supports; (3) Custom API wrapper if neither; (4) Middleware if system is truly incompatible. We've integrated systems from 1980s successfully.",
        },
      },
    ],
  };

  const calculateROI = () => {
    const monthlyWaste = roiInputs.manualHours * roiInputs.hourlyCost;
    const annualSavings = monthlyWaste * 12;
    const implementationCost = 85000; // Average from case study
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = (implementationCost / monthlyWaste).toFixed(1);

    return {
      annualSavings: annualSavings.toLocaleString(),
      roi: roi.toFixed(0),
      paybackMonths,
      monthlyWaste: monthlyWaste.toLocaleString(),
    };
  };

  const roiResults = calculateROI();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Custom API & Integration Solutions | Enterprise Integration Platform"
        description="End-to-end API development, legacy system integration, and webhook orchestration. Connect 25+ systems real-time. 99.7% uptime SLA. 6-week implementation."
        keywords="custom API development, enterprise integration platform, webhook orchestration, legacy system integration, API integration services, real-time data sync, integration architecture, n8n implementation"
        canonicalUrl="/services/api-integration"
        structuredData={[structuredData, breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-primary">Connect 25+ Systems in Real-Time.</span>
              <br />
              <span className="text-foreground">Stop Manual API Work</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Stop losing time to manual integrations and data conflicts. D2 Group builds custom API solutions that
              connect your entire business ecosystem—legacy systems to modern SaaS—in production-grade, real-time
              pipelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule Your Integration Assessment
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                Download Integration Strategy Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, value: "65%", label: "Faster Integration", desc: "6 weeks → 2.5 weeks" },
              { icon: Link, value: "25+", label: "Systems Connected", desc: "Real-time, bidirectional sync" },
              { icon: Activity, value: "99.7%", label: "Uptime SLA", desc: "Monitored 24/7" },
              { icon: TrendingUp, value: "50%", label: "Lower Cost", desc: "Per-integration savings" },
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
              { icon: Link, value: "50+", label: "Integrations Built", desc: "Proven patterns across industries" },
              { icon: Star, value: "4.8/5", label: "Satisfaction", desc: "Verified by enterprise clients" },
              { icon: BarChart3, value: "100M+", label: "Events/Day", desc: "Handled reliably" },
              { icon: Shield, value: "99.7%", label: "Uptime SLA", desc: "Production-grade infrastructure" },
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
              Client Success Story: SyncCorp Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Industry:</strong> E-commerce analytics platform
              <br />
              <strong>Size:</strong> 320 employees, $75M ARR, 45% YoY growth
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                SyncCorp Solutions is a fast-growing e-commerce analytics platform serving 180+ mid-market retailers
                across North America and Europe. After a successful Series B ($40M) in Q2 2024, the company scaled to
                320 employees and $75M ARR—but their integration architecture couldn't keep pace. With 9 critical
                business systems (Salesforce, Shopify, QuickBooks, Stripe, Google Analytics, Slack, Datadog, Segment,
                and a proprietary admin tool), the team was manually syncing data 40+ hours per week and missing
                critical business events when systems went out of sync.
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
              The Challenge: Integration Sprawl Kills Productivity
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Integration sprawl is killing productivity. Most mid-market companies have 12-25 disconnected systems but
              rely on manual processes (email, CSV, copy-paste) to sync critical data. The result: wasted hours, data
              conflicts, compliance risk, and impossible scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Link,
                title: "System Silos & Manual Data Sync",
                description:
                  "SyncCorp was managing 9 systems with zero unified data flow. Every new customer in Shopify required manual entry into Salesforce and QuickBooks. Product updates went to inventory system but not to analytics platform. Reconciliation meetings consumed 8+ hours weekly.",
                impact: "40+ hours/month in manual entry; $45K/month in wasted labor; constant data conflicts",
              },
              {
                icon: Clock,
                title: "Slow, Expensive API Development",
                description:
                  "Each new integration required 6-8 weeks of custom development. The team had one senior engineer dedicated to 'integration work' instead of core product. Adding new systems meant either slow delivery or hiring more engineers at $200K+/year salary.",
                impact:
                  "$60K per integration in opportunity cost; feature velocity dropped 40%; hiring pipeline strained",
              },
              {
                icon: Database,
                title: "Legacy System Drag",
                description:
                  "Old accounting system (20+ years old) had no modern API. Workarounds included scheduled database exports, file uploads to FTP, and custom middleware—fragile and unmaintainable.",
                impact: "$25K/year in custom middleware; impossible to achieve real-time sync; compliance nightmare",
              },
              {
                icon: AlertTriangle,
                title: "Webhook Inconsistency & Data Loss",
                description:
                  "Webhooks from Shopify, Stripe, and payment processors sent payloads with different structures. No standardized retry logic; events were lost if destination temporarily down. Debugging failures took 4-8 hours.",
                impact: "Lost $150K+ in unprocessed transactions per year; customer escalations; low trust",
              },
              {
                icon: Shield,
                title: "Zero Integration Governance",
                description:
                  "No audit trail of which data went where, no version control on integrations, no compliance framework. Auditors flagged 'undefined data lineage' as a control gap.",
                impact: "Failed SOC 2 audit; $40K in remediation; compliance risk exposure",
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
              "We were trying to scale a 20-person engineering team into a 40-person team just to keep up with
              integration requests. It was clear we needed a platform approach, not more developers. That's when D2
              Group showed us a path forward."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Marcus T., VP Engineering, SyncCorp Solutions</cite>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: Unified Integration Architecture
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              D2 Group designed a centralized API hub using n8n orchestration as the backbone, with custom connectors
              for legacy systems, webhook normalization, and a governance layer. The hub ingests data from 9 systems,
              normalizes payloads, applies business rules, and publishes to destinations in real-time. Every integration
              is version-controlled, monitored, and logged—enabling compliance audits in minutes, not weeks.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Rather than "Zapier alternative" or "We'll hand-code every API," D2 Group combines pre-built connectors
              (50+ common systems), visual workflow builder (no-code for 80% of logic), and custom development (for
              unique legacy systems). Result: Same-day integrations for common tools, 2-week turnaround for custom APIs,
              and reusable patterns that cost 50% less per integration after the first 3.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">How It Works: User Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Source System Event",
                  description:
                    "Customer order created in Shopify. System automatically sends webhook to integration hub.",
                  icon: ShoppingCart,
                },
                {
                  step: "2",
                  title: "Webhook Ingestion",
                  description:
                    "Hub receives webhook, validates payload structure, de-duplicates (checksum), and stores in queue.",
                  icon: Server,
                },
                {
                  step: "3",
                  title: "Data Transformation",
                  description:
                    "Hub maps Shopify order schema to internal canonical schema: Product IDs harmonized, currency converted, tax calculated.",
                  icon: RefreshCw,
                },
                {
                  step: "4",
                  title: "Business Rules",
                  description:
                    "Automated rules: IF order > $5K THEN flag for fraud review. IF customer is new THEN create record in CRM.",
                  icon: Settings,
                },
                {
                  step: "5",
                  title: "Multi-Destination Fan-Out",
                  description:
                    "Transformed order syncs to: Salesforce, QuickBooks, Slack, Google Analytics, Segment, and data warehouse.",
                  icon: GitBranch,
                },
                {
                  step: "6",
                  title: "Delivery Confirmation",
                  description:
                    "Hub confirms each destination received data. If any destination fails, automatic retry with exponential backoff.",
                  icon: CheckCircle,
                },
                {
                  step: "7",
                  title: "Audit Log Written",
                  description:
                    "Complete trace recorded: source payload → transformation → destinations → timestamps → success/failure status.",
                  icon: FileText,
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
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Key System Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Link,
                  title: "Pre-Built Connectors",
                  description:
                    "50+ ready-to-use integrations for Salesforce, Shopify, QuickBooks, Stripe, etc. Connect in hours, not weeks.",
                  example: "Connect Shopify to data warehouse in 4 hours (vs. 2 weeks custom)",
                },
                {
                  icon: Code,
                  title: "Custom API Development",
                  description:
                    "Build APIs for systems without modern connectors. Bridge legacy systems to modern stack.",
                  example: "Connect old AS/400 system to Salesforce; real-time customer sync",
                },
                {
                  icon: Zap,
                  title: "Real-Time Webhooks",
                  description: "Accept webhooks from any system. Normalize payload structure. Smart retry logic.",
                  example: "Shopify order webhook auto-routed to Salesforce, QuickBooks, Segment simultaneously",
                },
                {
                  icon: Shield,
                  title: "Enterprise Reliability",
                  description: "99.7% uptime SLA. Automatic failover, retry logic, monitoring 24/7.",
                  example: "Stripe API down 2 hours; system queues transactions, resumes automatically",
                },
                {
                  icon: FileText,
                  title: "Complete Audit Trail",
                  description:
                    "Every data movement logged: source, transformation, destination, timestamp, user. Immutable records.",
                  example: "Auditor asks about $50K order; full trace available in 2 clicks",
                },
                {
                  icon: Monitor,
                  title: "Real-Time Monitoring",
                  description:
                    "Dashboard showing sync status, latency, failures. Configurable alerts to Slack or email.",
                  example: "System flags Salesforce sync hasn't completed in 60 minutes; team alerted in 5 minutes",
                },
                {
                  icon: RefreshCw,
                  title: "Reusable Patterns",
                  description:
                    "After first 3 integrations, common patterns captured. Subsequent integrations 50% faster.",
                  example: "First Shopify integration takes 2 weeks. Second Shopify-like integration takes 4 days",
                },
                {
                  icon: GitBranch,
                  title: "Bi-Directional Sync",
                  description:
                    "Data flows both directions. Automatic conflict resolution when same record updated in multiple systems.",
                  example: "Customer updates address in Salesforce; auto-syncs to Stripe, Shopify, QuickBooks",
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
            Implementation Journey: 6-10 Week Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Discovery & Architecture",
                duration: "Week 1-2",
                activities: [
                  "Inventory all systems (authentication, APIs, schemas)",
                  "Map data flows: which systems currently sync",
                  "Define canonical data model (unified schema)",
                  "Document compliance requirements (audit trail, GDPR, SOC 2)",
                ],
                insight:
                  "We discovered that 60% of their 'integrations' were actually manual processes. These became the highest-priority automation targets.",
                icon: FileText,
              },
              {
                phase: "Hub Infrastructure & First 3",
                duration: "Week 2-5",
                activities: [
                  "Deploy n8n workflow engine, webhook receiver, database",
                  "Activate 3 highest-value pre-built connectors",
                  "Build canonical data model in database",
                  "Set up monitoring, alerting, audit logging",
                ],
                insight:
                  "Within week 3, they had more real-time visibility into customer data than they'd ever had. Adoption was immediate.",
                icon: Server,
              },
              {
                phase: "Scale to Full Integration",
                duration: "Week 5-8",
                activities: [
                  "Build remaining 6 integrations (mix of pre-built and custom)",
                  "Implement custom API for legacy accounting system",
                  "Set up webhook handlers for Shopify, Stripe",
                  "Performance tuning (optimize queries, add caching)",
                ],
                insight:
                  "The hardest part wasn't the technology—it was organizational change. Forced standardization upfront saved weeks.",
                icon: TrendingUp,
              },
              {
                phase: "Optimization & Handoff",
                duration: "Week 8-10",
                activities: [
                  "Run full-cycle testing (1 month parallel run)",
                  "Optimize for production (redundancy, disaster recovery)",
                  "Document playbooks and train internal team",
                  "Establish on-call support model",
                ],
                insight:
                  "We designed the system so their team could add future integrations without us. They added 4 new integrations in the first 6 months on their own.",
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
            SyncCorp transformed from a fragmented, manual integration nightmare into a unified, real-time ecosystem—
            delivering faster insights, faster features, and dramatically lower operational overhead.
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
                    metric: "Manual Integration Hours/Month",
                    before: "80+ hours",
                    after: "4-6 hours",
                    change: "-93%",
                    impact: "Freed 75+ hours/month for core product",
                  },
                  {
                    metric: "Integration Turnaround Time",
                    before: "6-8 weeks",
                    after: "2.5 weeks",
                    change: "-60%",
                    impact: "Faster feature velocity, faster market response",
                  },
                  {
                    metric: "Data Sync Latency",
                    before: "Daily batch (24h)",
                    after: "Real-time (5-10 min)",
                    change: "96x faster",
                    impact: "Real-time business decisions possible",
                  },
                  {
                    metric: "Systems Connected",
                    before: "9 (siloed)",
                    after: "9 (unified + capacity for 20+)",
                    change: "Complete",
                    impact: "Single source of truth",
                  },
                  {
                    metric: "Integration Cost Per Connection",
                    before: "$8K-$15K",
                    after: "$2K-$4K",
                    change: "-50%",
                    impact: "3x ROI on first project",
                  },
                  {
                    metric: "System Uptime",
                    before: "92%",
                    after: "99.7%",
                    change: "+7.7 pts",
                    impact: "SLA-grade reliability",
                  },
                  {
                    metric: "Data Sync Failures/Month",
                    before: "12-18 incidents",
                    after: "<2 incidents",
                    change: "-90%",
                    impact: "Customer trust restored",
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
                <p className="text-sm text-muted-foreground mb-2">Implementation Cost</p>
                <p className="text-3xl font-bold text-primary">$85,000</p>
                <p className="text-xs text-muted-foreground mt-2">Design + development + deployment + training</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
                <p className="text-3xl font-bold text-primary">$420,000</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Labor + audit overhead + incidents + infrastructure
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Break-Even Timeline</p>
                <p className="text-3xl font-bold text-primary">2.4 months</p>
                <p className="text-xs text-muted-foreground mt-2">Fast return on investment</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">12-Month ROI</p>
                <p className="text-3xl font-bold text-primary">494%</p>
                <p className="text-xs text-muted-foreground mt-2">$420K saved + $500K revenue / $85K investment</p>
              </div>
            </div>
          </Card>

          {/* Qualitative Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For Engineering Team",
                icon: Code,
                impacts: [
                  "Integration work went from 30% of engineering time to <5%",
                  "Team now focuses on core product innovation, not infrastructure",
                  "New integrations can be built by junior engineers",
                  "Morale improved; reduced burnout; retention improved",
                ],
              },
              {
                title: "For Operations",
                icon: Settings,
                impacts: [
                  "Data conflicts resolved immediately (vs. manual reconciliation)",
                  "Real-time visibility: instant answers vs. waiting 1-2 days",
                  "Compliance audit risk eliminated",
                  "Incident response time: 4-8 hours → 5-10 minutes",
                ],
              },
              {
                title: "For Business Leadership",
                icon: TrendingUp,
                impacts: [
                  "Real-time KPI dashboards enabling faster decisions",
                  "Faster time-to-market for new features",
                  "Ability to scale to new markets without hiring more engineers",
                  "Competitive advantage: real-time data that competitors can't match",
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
              For Technical Decision Makers & Architects — Architecture depth & design rationale
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
                <AccordionItem value="orchestration">
                  <AccordionTrigger className="text-lg font-semibold">
                    Why n8n as Central Orchestration Engine
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Decision Rationale:</strong> n8n provides visual workflow builder (no code for 80% of
                        integrations) + 200+ pre-built connectors + ability to run custom code for remaining 20% (legacy
                        systems, unique logic).
                      </p>
                      <p>
                        <strong>Architecture Impact:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Integrations can be built/modified by business analysts, not just engineers</li>
                        <li>
                          Faster iteration: Update workflow visually, test, deploy in hours (vs. code → review → merge →
                          deploy days)
                        </li>
                        <li>Reusable templates: Build once, use 20+ times for similar scenarios</li>
                      </ul>
                      <p className="mt-4">
                        <strong>Alternative Approaches Considered:</strong> Apache Airflow (too complex), custom Python
                        code (too slow to build), Zapier (limits on payload/frequency)
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="webhooks">
                  <AccordionTrigger className="text-lg font-semibold">
                    Webhook Normalization & Retry Logic
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p className="font-semibold">Validation Layer Pattern:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Signature verification (HMAC-SHA256 to ensure authenticity)</li>
                        <li>Schema validation (required fields, data types)</li>
                        <li>Deduplication (checksum of payload; drop if seen before)</li>
                        <li>Rate limiting (throttle if source too noisy)</li>
                        <li>If validation fails: Route to exception queue for manual review; alert team</li>
                        <li>If validation passes: Queue for transformation</li>
                      </ol>
                      <p className="mt-4">
                        <strong>Why it matters:</strong> Without this layer, webhook data is inconsistent. Shopify sends
                        different payload format than Stripe. Some webhooks sent twice (duplicate events). Missing
                        required fields cause downstream errors. Normalization layer ensures consistency.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="transformation">
                  <AccordionTrigger className="text-lg font-semibold">
                    Data Transformation & Canonical Schema
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Problem:</strong> CRM has "Customer" with 20 fields. Accounting system has "Account"
                        with 15 fields (different names, types). E-commerce has "Buyer" with 25 fields. No overlap.
                      </p>
                      <div className="bg-secondary/20 p-4 rounded-md font-mono text-xs mt-2">
                        UNIFIED_CUSTOMER &#123;
                        <br />
                        &nbsp;&nbsp;id: UUID
                        <br />
                        &nbsp;&nbsp;name: String
                        <br />
                        &nbsp;&nbsp;email: String
                        <br />
                        &nbsp;&nbsp;status: ENUM [active, suspended, closed]
                        <br />
                        &nbsp;&nbsp;segments: Array&lt;String&gt;
                        <br />
                        &nbsp;&nbsp;created: DateTime
                        <br />
                        &nbsp;&nbsp;metadata: JSON
                        <br />
                        &#125;
                      </div>
                      <p className="mt-4">
                        <strong>Impact:</strong> Once schema defined, future integrations are fast. Just map new system
                        → canonical → broadcast to all destinations.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scalability">
                  <AccordionTrigger className="text-lg font-semibold">
                    Scalability: Handling 100M+ Events/Day
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Current Capacity:</strong> 500K events/day with 2-core infrastructure
                      </p>
                      <div>
                        <p className="font-semibold mb-2">To Scale to 10M+ events/day:</p>
                        <ul className="list-disc pl-5">
                          <li>Add Kafka cluster (partitioned by source/destination)</li>
                          <li>Horizontal scale transformation workers (10 → 30 workers)</li>
                          <li>Add database read replicas for audit log queries</li>
                          <li>Implement caching layer for metadata lookups</li>
                          <li>
                            <strong>Cost impact:</strong> +$8-12K/month infrastructure
                          </li>
                        </ul>
                      </div>
                      <p className="font-semibold mt-4">
                        Key principle: Linear scaling. Doubling throughput ≈ 2x infrastructure cost, not exponential
                        cost.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="security">
                  <AccordionTrigger className="text-lg font-semibold">Security & Compliance Deep Dive</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Authentication & Authorization:</p>
                        <ul className="list-disc pl-5">
                          <li>OAuth 2.0 for SaaS integrations (e.g., Salesforce)</li>
                          <li>API key rotation every 30 days (legacy systems)</li>
                          <li>Role-based access control: Finance can see financial integrations only</li>
                          <li>Row-level security: Each team sees only their data</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Encryption:</p>
                        <ul className="list-disc pl-5">
                          <li>In-transit: TLS 1.3</li>
                          <li>At-rest: AES-256 for payloads, credentials in separate encrypted vault</li>
                          <li>Key management: AWS KMS or HashiCorp Vault</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Audit Logging:</p>
                        <ul className="list-disc pl-5">
                          <li>Immutable log of every event: source → transformation → destination</li>
                          <li>
                            Compliance exports: "Show me all customer orders from last 90 days" → One-click JSON export
                          </li>
                          <li>Retention: 7 years (or per compliance requirement)</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech-stack">
                  <AccordionTrigger className="text-lg font-semibold">Technology Stack</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-secondary/20 p-4 rounded-md">
                      <p className="font-mono text-xs space-y-1">
                        <strong>🛠️ Technologies & Tools:</strong>
                        <br />
                        <br />
                        • n8n: Central workflow orchestration (200+ pre-built connectors)
                        <br />
                        • Node.js/Express: Custom API development for legacy systems
                        <br />
                        • Kafka: Event streaming & queue management (high throughput)
                        <br />
                        • PostgreSQL (Supabase): Data store, audit logs, governance
                        <br />
                        • OAuth 2.0 / API Keys: Secure authentication & authorization
                        <br />
                        • DataDog: Monitoring, alerting, performance dashboards
                        <br />
                        • TLS 1.3 / AES-256: Encryption in-transit & at-rest
                        <br />• Terraform: Infrastructure as code for repeatable deployments
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
                  "Before D2 Group, I had one senior engineer dedicated full-time to 'making systems talk to each other.' After 2 months with their integration hub, that engineer rejoined the core product team. We haven't added engineering headcount, but we've added 3x the integration capability.",
                author: "Sarah J.",
                role: "CTO, SyncCorp Solutions",
              },
              {
                quote:
                  "Auditors used to give us a hard time about integration controls. Now I pull one report from the system and auditors are impressed. First audit after implementation: passed with zero exceptions.",
                author: "David K.",
                role: "Finance Director",
              },
              {
                quote:
                  "Our product team proposed 5 new real-time features. All were impossible before because data wasn't synced fast enough. Now? All 5 launched this quarter. The integration layer unblocked our roadmap.",
                author: "Jessica L.",
                role: "VP Product",
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

      {/* ROI Calculator */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <Calculator className="inline-block mr-3 h-8 w-8 text-primary" />
            Calculate Your Integration ROI
          </h2>

          <Card className="gradient-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Enter Your Data</h3>
                <div className="space-y-4">
                  <div>
                    <Label>Number of Systems</Label>
                    <Input
                      type="number"
                      value={roiInputs.systems}
                      onChange={(e) => setRoiInputs({ ...roiInputs, systems: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <Label>Manual Integration Hours/Month</Label>
                    <Input
                      type="number"
                      value={roiInputs.manualHours}
                      onChange={(e) => setRoiInputs({ ...roiInputs, manualHours: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <Label>Average Hourly Cost ($)</Label>
                    <Input
                      type="number"
                      value={roiInputs.hourlyCost}
                      onChange={(e) => setRoiInputs({ ...roiInputs, hourlyCost: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Projected Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">${roiResults.monthlyWaste}</div>
                    <div className="text-muted-foreground">Monthly Waste</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">${roiResults.annualSavings}</div>
                    <div className="text-muted-foreground">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{roiResults.roi}%</div>
                    <div className="text-muted-foreground">12-Month ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{roiResults.paybackMonths}</div>
                    <div className="text-muted-foreground">Payback (Months)</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">Related Use Cases</h2>
          <p className="text-center text-muted-foreground mb-12">The integration architecture adapts to any industry</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "E-Commerce Omnichannel Sync",
                description:
                  "Real-time inventory hub; update in one place, syncs to all channels instantly. 60-70% reduction in inventory conflicts.",
                icon: ShoppingCart,
                industry: "Fashion, Electronics, Retail",
              },
              {
                title: "Financial Services Consolidation",
                description:
                  "Secure integration hub with encryption + audit trail for regulatory compliance. Real-time customer view; audit-ready.",
                icon: Briefcase,
                industry: "Banking, Lending, Wealth Management",
              },
              {
                title: "Healthcare Interoperability",
                description:
                  "HIPAA-compliant integration hub. Real-time patient data; faster clinical decisions; compliance demonstrated.",
                icon: Heart,
                industry: "Hospitals, Clinics, Insurance",
              },
              {
                title: "SaaS Multi-Tenant Integration",
                description:
                  "Integration hub becomes product feature; customers self-serve connect their tools. New revenue stream.",
                icon: Globe,
                industry: "Software Companies",
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
          <h2 className="text-4xl font-bold font-heading mb-8 animate-pulse">Ready to Eliminate System Silos?</h2>
          <p className="text-xl mb-8 animate-fade-in">
            SyncCorp connected 9 systems, achieved 99.7% uptime, saved $420K/year.
            <strong> Your company can achieve similar results.</strong>
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg mb-4">What You Get:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Real-time data sync across all systems (no more 24-hour delays)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>50% lower integration cost (via reusable patterns)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Production-grade reliability (99.7% uptime SLA)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Compliance audit ready (immutable audit trail)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Implementation in 6-10 weeks (not 6 months)</span>
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
              Schedule Your Integration Assessment
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30"
              onClick={() => (window.location.href = "/contact")}
            >
              Download Integration Strategy Guide
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
              <span>Implementation in 6-10 weeks typical</span>
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              <span>ROI guarantee: 3x return within 12 months</span>
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
                Typical timeline is 6-10 weeks: Discovery (1-2 weeks) → Hub build (3-4 weeks) → First integrations (2-3
                weeks) → Optimization & handoff (1-2 weeks). Critical path for MVP (3 core integrations) is 4-5 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>How much does this cost?</AccordionTrigger>
              <AccordionContent>
                Varies by complexity. Typical project: $50K-$100K. Includes design, infrastructure, first 3-5
                integrations, testing, team training. Reusable patterns reduce cost of future integrations by 50%+.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="engineers">
              <AccordionTrigger>Do we need engineers on our side?</AccordionTrigger>
              <AccordionContent>
                Minimal. You provide: system access (API credentials, database connection strings), business
                requirements (which systems need to sync), and 4-5 hours/week for design questions. We handle all
                technical implementation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="legacy">
              <AccordionTrigger>Can you integrate our legacy systems (20+ years old)?</AccordionTrigger>
              <AccordionContent>
                Yes. Options: (1) Database-level sync if legacy system has database; (2) File export/import if legacy
                system supports; (3) Custom API wrapper if neither; (4) Middleware if system is truly incompatible.
                We've integrated systems from 1980s successfully.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security">
              <AccordionTrigger>What about security? Can you handle PII/compliance data?</AccordionTrigger>
              <AccordionContent>
                Yes. TLS 1.3 encryption in-transit, AES-256 at-rest. Role-based access control. Audit logs for every
                data movement. We support GDPR, SOC 2, HIPAA (with BAA), PCI-DSS. Data never leaves your infrastructure;
                processing happens on servers you control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-loss">
              <AccordionTrigger>How do you prevent data loss or duplication?</AccordionTrigger>
              <AccordionContent>
                Multiple layers: (1) Webhook signature verification; (2) Deduplication by checksum; (3) Retry logic with
                exponential backoff; (4) Immutable audit log of every event; (5) Monitoring alerts if sync breaks. 99.7%
                data integrity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="volume">
              <AccordionTrigger>Can you handle high-volume real-time sync (100K+ events/day)?</AccordionTrigger>
              <AccordionContent>
                Current architecture scales to 500K events/day easily. To 10M+ events/day: add Kafka cluster, horizontal
                scale workers. Cost scales linearly. We've handled financial transaction volumes (100M+ events/month)
                successfully.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="downtime">
              <AccordionTrigger>What happens if a destination system goes down?</AccordionTrigger>
              <AccordionContent>
                Integration hub queues the events and automatically retries when destination recovers. Your business is
                unaffected. Data reaches destination even if down for hours. Manual intervention only if system is down
                for 3+ days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="locked-in">
              <AccordionTrigger>Can we add new integrations after go-live, or are we locked in?</AccordionTrigger>
              <AccordionContent>
                You're not locked in. We train your team to add new integrations using the same platform. For common
                systems, you can add them yourselves (4-8 hours work). For custom systems, we help (2-3 week timeline).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support">
              <AccordionTrigger>What's your support model after implementation?</AccordionTrigger>
              <AccordionContent>
                Year 1: Included 24/7 support + quarterly optimization reviews. Year 2+: Tiered support (Basic
                $2K/month, Premium $5K/month, Enterprise custom pricing). Includes monitoring, alerting, urgent issue
                response.
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
              { icon: Link, stat: "50+", label: "Successful integrations delivered" },
              { icon: Star, stat: "4.8/5", label: "Average client satisfaction (verified)" },
              { icon: Activity, stat: "99.7%", label: "Uptime SLA proven" },
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
                  <span>Free revisions during implementation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>24/7 support (first year included)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>ROI guarantee: 3x within 12 months</span>
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

export default ApiIntegrationService;
