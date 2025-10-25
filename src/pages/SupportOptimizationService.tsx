import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Settings,
  Monitor,
  Shield,
  AlertCircle,
  Clock,
  TrendingUp,
  Activity,
  FileText,
  Zap,
  RefreshCw,
  Lock,
  PlayCircle,
  Download,
  ChevronDown,
  ChevronUp,
  Users,
  DollarSign,
  Target,
  Code,
  Database,
  BarChart3,
  Award,
  Brain,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SupportOptimizationService = () => {
  const [showTechnicalDeepDive, setShowTechnicalDeepDive] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "24/7 Infrastructure Monitoring & Support - Uptime SLA Management",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Intelligent 24/7 monitoring with automated remediation. 99.98% uptime SLA, 80% faster incident response, zero production surprises.",
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
        name: "Support & Optimization",
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What happens if something breaks at 3 AM on Sunday?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You're covered. System automatically detects the issue. If it's a known issue, system auto-fixes (65% of incidents). If it's novel, system pages the on-call expert immediately with full context.",
        },
      },
      {
        "@type": "Question",
        name: "What's the typical cost and timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical setup: $35K-$50K (one-time), then $3K-$8K/month (ongoing monitoring + support). Timeline: 4-6 weeks from kick-off to full go-live. ROI typically breaks even in 2-3 months.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="24/7 Infrastructure Monitoring & Support | 99.98% Uptime SLA | D2 Group"
        description="Intelligent monitoring with automated remediation. Stop firefighting. ScaleHub went from 99.7% to 99.98% uptime, 88% faster incident response. Book your assessment."
        keywords="24/7 infrastructure monitoring, managed monitoring services, incident response automation, uptime SLA management, DevOps support services, system reliability engineering"
        canonicalUrl="/services/support-optimization"
        structuredData={[structuredData, breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-primary">99.98% Uptime.</span>
              <br />
              <span className="text-foreground">80% Faster Incident Response</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Stop firefighting. Start building. Intelligent 24/7 monitoring and automated remediation that keeps
              systems running while your team focuses on growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule Your Infrastructure Health Check
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                Download: 24/7 Monitoring Setup Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, value: "99.98%", label: "Uptime SLA", desc: "36 hours/year → <2 hours/year" },
              { icon: Clock, value: "80% Faster", label: "Incident Response", desc: "MTTR: 8 hours → 1 hour" },
              { icon: Shield, value: "340 Patches", label: "Applied Proactively", desc: "0 security breaches" },
              { icon: TrendingUp, value: "45% Better", label: "Performance", desc: "Latency optimized" },
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
              { icon: Award, value: "50+", label: "Systems Monitored", desc: "Across enterprise clients" },
              { icon: Star, value: "4.9/5", label: "Uptime Score", desc: "Verified by customers" },
              { icon: BarChart3, value: "2M+", label: "Events Processed", desc: "Monthly anomaly detection" },
              { icon: Users, value: "24/7", label: "Global Support", desc: "Bilingual SRE team" },
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Client Success Story: ScaleHub</h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Industry:</strong> B2B SaaS / Analytics
              <br />
              <strong>Size:</strong> 150 employees, $20M ARR, Series B startup
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                ScaleHub is a Series B SaaS analytics platform with 150 employees and $20M ARR, experiencing 80%
                year-over-year growth. As they scaled from 50K to 500K users in 12 months, infrastructure reliability
                became critical—but their monitoring was reactive and fragmented. A 4-hour production outage on a
                holiday weekend cost a customer $2M in lost trading revenue and triggered contract termination threats.
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
              The Challenge: The Hidden Cost of Downtime
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Most companies think they have a monitoring problem. Actually, they have a response problem. They're
              drowning in alerts, missing critical issues, and fighting fires instead of preventing them. For ScaleHub,
              this meant $500K+ annual revenue loss from outages, customer churn, and team burnout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: AlertCircle,
                title: "Fragmented Monitoring Across 7 Tools",
                description:
                  "ScaleHub had separate tools for infrastructure, logs, databases, uptime checks, security, incident tracking, and on-call. Finding root cause took 4-6 hours of tool-hopping.",
                impact:
                  "8-hour average MTTR vs 30-minute industry best practice; $2K per incident in lost productivity",
              },
              {
                icon: Clock,
                title: "No Automated Remediation",
                description:
                  "Monitoring detected issues, then humans had to manually investigate, determine fixes, and apply patches. Common fixes took hours even though they could be automated.",
                impact: "12+ hours per week in rote tasks; recurring issues never solved; SLAs constantly breached",
              },
              {
                icon: Shield,
                title: "Security Patches Applied Reactively",
                description:
                  "Vulnerabilities discovered via CVE feeds, but patches only applied when teams got 'around to it'—sometimes weeks later. No automated testing or audit trail.",
                impact: "$3.6M average breach cost; 340+ unpatched vulnerabilities; compliance risk",
              },
              {
                icon: Target,
                title: "No Visibility Into Root Causes",
                description:
                  "No systematic investigation. Teams guessed at causes, applied band-aids. Without distributed tracing, couldn't connect errors to infrastructure changes or deployments.",
                impact: "Same issue recurring every 3-4 weeks; $50K/month in repeated rework",
              },
              {
                icon: Users,
                title: "Operations Team Burned Out",
                description:
                  "60% of ops team time spent reacting to incidents. The other 40% maintaining 7 different tools. No time for real improvements, capacity planning, or security hardening.",
                impact: "35% annual turnover; 8 weeks to hire; knowledge silos; quality decline",
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
              "We had more alerts than we had people. Our on-call team was running around like crazy, and we still
              missed critical issues. It felt like we were losing control of our own infrastructure."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Marcus T., VP Infrastructure, ScaleHub</cite>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: Intelligent Reliability Platform
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              Instead of layering another monitoring tool on top of a broken system, ScaleHub implemented an
              <strong> intelligent reliability platform</strong>—a unified, AI-driven monitoring and remediation system
              that detects issues before they impact customers, automatically fixes common problems, and guides human
              experts through complex investigations.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The system combines three layers: (1) <strong>Comprehensive Observability</strong>: One place to see
              everything; (2) <strong>Intelligent Detection</strong>: AI-powered anomaly detection learns normal
              behavior; (3) <strong>Automated Remediation</strong>: Common issues fixed automatically, complex issues
              guided with context.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">How It Works: System Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Continuous Ingestion",
                  description:
                    "All system signals flow into one place: metrics, logs, traces, deployments. Real-time streaming, no missed events.",
                  icon: Database,
                },
                {
                  step: "2",
                  title: "AI Baseline Learning",
                  description:
                    "System learns 'normal' patterns: latency ranges, traffic patterns, error rates by time of day.",
                  icon: Brain,
                },
                {
                  step: "3",
                  title: "Anomaly Detection",
                  description:
                    "When something deviates from baseline (latency spike, error rate jump), system flags before customers notice.",
                  icon: AlertCircle,
                },
                {
                  step: "4",
                  title: "Context Correlation",
                  description:
                    "System correlates: Did deployment coincide with latency spike? Did config change cause errors?",
                  icon: GitBranch,
                },
                {
                  step: "5",
                  title: "Smart Triage",
                  description:
                    "Critical (page engineer)? Non-urgent (queue)? Auto-fixable (execute immediately)? System decides.",
                  icon: Target,
                },
                {
                  step: "6",
                  title: "Automated Remediation",
                  description:
                    "Known issues: Auto-restart, scale, rollback. Unknown: Full context + guided investigation.",
                  icon: Zap,
                },
                {
                  step: "7",
                  title: "Post-Incident Analysis",
                  description:
                    "System generates root cause analysis. Feedback loop means rare issues become automated.",
                  icon: FileText,
                },
                {
                  step: "8",
                  title: "Compliance Trail",
                  description:
                    "Every action logged immutably. Audit-ready evidence of security posture and incident response.",
                  icon: Lock,
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
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Key Platform Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Monitor,
                  title: "Unified Observability",
                  description: "One place to see everything. No tool-switching, no data silos.",
                  example: "Latency spike shows CPU spike, deployment, config change—root cause obvious in seconds",
                },
                {
                  icon: Brain,
                  title: "AI Anomaly Detection",
                  description:
                    "ML identifies deviations before customer impact. Context-aware, learns from 6+ months history.",
                  example: "Query latency climbs slowly over 2 hours—AI detects trend early, proposes scaling",
                },
                {
                  icon: Zap,
                  title: "Automated Remediation",
                  description: "Common issues fixed automatically. Complex issues routed with full context.",
                  example:
                    "Memory leak detected; system scales instance, triggers investigation, escalates if persists",
                },
                {
                  icon: GitBranch,
                  title: "Distributed Tracing",
                  description: "End-to-end visibility. System correlates logs, metrics, traces, events automatically.",
                  example: "Slow checkout traces to: Service A (fast) → Service B (slow) → Database X (timeout)",
                },
                {
                  icon: FileText,
                  title: "Intelligent Runbooks",
                  description: "Real-time dashboards + auto-generated runbooks with context and 1-click remediation.",
                  example: "On-call gets paged; dashboard loads with logs, metrics, affected users, suggested fix",
                },
                {
                  icon: Shield,
                  title: "Security Automation",
                  description: "Patches tested and staged automatically. Secrets rotated. Audit trail immutable.",
                  example: "CVE published Monday; system tests patch, deploys Tuesday. 72-hour window vs 6-week manual",
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
            Implementation Journey: 4-6 Week Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                phase: "Assessment & Baseline",
                duration: "Week 1",
                activities: [
                  "Audit monitoring tools, alert volume, MTTR metrics",
                  "Map all systems (7+ tools identified)",
                  "Interview on-call team about patterns",
                  "Define success metrics",
                ],
                insight: "Discovered 45% alerts were false positives and 60% incidents were recurring.",
                icon: FileText,
              },
              {
                phase: "Monitoring Setup",
                duration: "Week 1-2",
                activities: [
                  "Deploy unified observability platform",
                  "Configure data ingestion from all tools",
                  "Train ML on 6 months historical data",
                  "Build critical dashboards",
                ],
                insight: "First week produced 80% fewer false alerts. Old thresholds were catching noise.",
                icon: Monitor,
              },
              {
                phase: "Incident Response",
                duration: "Week 2-3",
                activities: [
                  "Document top 20 recurring incidents",
                  "Encode 12 common remediation workflows",
                  "Configure intelligent routing",
                  "Set up Slack bot",
                ],
                insight: "Week 2 automation handled 60% of incidents without human intervention.",
                icon: Zap,
              },
              {
                phase: "Optimization",
                duration: "Week 3-4",
                activities: [
                  "Fine-tune detection thresholds",
                  "Implement secrets rotation",
                  "Enable automated patch testing",
                  "Build capacity planning dashboards",
                ],
                insight: "Security automation revealed 340+ patches that should have been applied months ago.",
                icon: Shield,
              },
              {
                phase: "Training & Handoff",
                duration: "Week 4-6",
                activities: [
                  "Train ops team on workflows",
                  "Document runbooks and procedures",
                  "Establish SLA for each incident type",
                  "Run incident simulation",
                ],
                insight: "Junior engineers could handle issues independently thanks to automated context.",
                icon: Users,
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
            Results & Impact: From Firefighting to Prevention
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            The transformation was dramatic: from reactive firefighting to proactive automation.
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
                    metric: "System Uptime",
                    before: "99.7%",
                    after: "99.98%",
                    change: "+0.28%",
                    impact: "34 hours/year prevented = $500K+ revenue protected",
                  },
                  {
                    metric: "Mean Time to Recovery",
                    before: "8 hours",
                    after: "1 hour",
                    change: "88% faster",
                    impact: "$120K/year ops labor saved",
                  },
                  {
                    metric: "Auto-Remediation Rate",
                    before: "0%",
                    after: "65%",
                    change: "65% automated",
                    impact: "Team freed for strategic work",
                  },
                  {
                    metric: "False Alert Rate",
                    before: "45%",
                    after: "2%",
                    change: "95% reduction",
                    impact: "Alert fatigue eliminated",
                  },
                  {
                    metric: "Security Patch Window",
                    before: "3-4 weeks",
                    after: "<24 hours",
                    change: "98% faster",
                    impact: "Breach window closed",
                  },
                  {
                    metric: "Investigation Time",
                    before: "4-6 hours",
                    after: "15 minutes",
                    change: "95% faster",
                    impact: "Context vs manual detective work",
                  },
                  {
                    metric: "On-Call Overtime",
                    before: "120 hrs/mo",
                    after: "8 hrs/mo",
                    change: "93% reduction",
                    impact: "Team morale improved",
                  },
                  {
                    metric: "Unpatched Vulnerabilities",
                    before: "340+",
                    after: "<5",
                    change: "99% reduction",
                    impact: "Compliance risk eliminated",
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
                <p className="text-3xl font-bold text-primary">$45,000</p>
                <p className="text-xs text-muted-foreground mt-2">One-time setup + training</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
                <p className="text-3xl font-bold text-primary">$850,000</p>
                <p className="text-xs text-muted-foreground mt-2">Prevented downtime + labor + tools + churn</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Break-Even</p>
                <p className="text-3xl font-bold text-primary">&lt;1 month</p>
                <p className="text-xs text-muted-foreground mt-2">Fast payback</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">12-Month ROI</p>
                <p className="text-3xl font-bold text-primary">1,789%</p>
                <p className="text-xs text-muted-foreground mt-2">$850K saved / $45K investment</p>
              </div>
            </div>
          </Card>

          {/* Qualitative Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For Operations Team",
                icon: Users,
                impacts: [
                  "Reduced burnout: On-call went from stressful to manageable",
                  "Career growth: Moved from reactive troubleshooting to proactive optimization",
                  "Psychological safety: Junior engineers can confidently handle issues",
                ],
              },
              {
                title: "For Business Leadership",
                icon: DollarSign,
                impacts: [
                  "Revenue protection: $500K+ saved from avoided outages",
                  "Customer trust: SLA breaches eliminated; satisfaction up 40%",
                  "Scalability: Infrastructure problems no longer bottleneck growth",
                ],
              },
              {
                title: "For Security & Compliance",
                icon: Shield,
                impacts: [
                  "Risk mitigation: 340+ vulnerabilities → <5; breach exposure closed",
                  "Audit readiness: Compliance audits went from weeks to 2 hours",
                  "Policy enforcement: Security policies now automated vs occasionally enforced",
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
              For Technical Decision Makers — Architecture depth and system design
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
                <AccordionItem value="tracing">
                  <AccordionTrigger className="text-lg font-semibold">
                    Distributed Tracing & Root Cause Analysis
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        Traditional monitoring shows "something is broken." Distributed tracing shows "why it's broken."
                      </p>
                      <p>
                        <strong>When a request takes 5 seconds instead of 1 second:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Traditional: Check metrics (CPU OK, memory OK). Dead end. Hours of investigation.</li>
                        <li>
                          Distributed tracing: Follow request: API gateway (50ms) → auth (100ms) → database (4.7s) →
                          cache (100ms). Database is culprit. Check: slow query? Timeout? Lock? Solution obvious.
                        </li>
                      </ul>
                      <p className="font-semibold mt-4">
                        Why it matters: Latency root cause found in 15 minutes instead of 4 hours.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="anomaly">
                  <AccordionTrigger className="text-lg font-semibold">
                    Anomaly Detection Without False Alarms
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Traditional alerting:</strong> "If latency &gt; 2.0s, alert."
                      </p>
                      <p>
                        Problem: On holiday weekend, traffic is 10% normal. Threshold fires constantly (false alarm).
                        Team turns off alerts. Real issues slip through.
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold mb-2">Intelligent baseline learning:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>System observes 6 months: latency by time/day, traffic volume</li>
                          <li>Learns Saturday afternoon naturally higher than Tuesday morning</li>
                          <li>Learns seasonal patterns: holiday traffic, spikes</li>
                          <li>New deviation: calculates "3σ from expected given conditions"</li>
                          <li>Only significant deviations alert (true positives)</li>
                        </ol>
                      </div>
                      <p className="font-semibold mt-4">Result: 95% fewer false alarms; no alerts missed.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="remediation">
                  <AccordionTrigger className="text-lg font-semibold">
                    Automated Remediation: When to Auto-Fix vs Escalate
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Auto-Fix Criteria:</p>
                        <ul className="list-disc pl-5">
                          <li>Issue is well-understood (happened 5+ times before)</li>
                          <li>Fix is reversible (scaling can be rolled back)</li>
                          <li>Confidence is high (AI model 95%+ certain)</li>
                          <li>Impact is low (only affects this microservice)</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold mb-2">Examples of auto-fixed issues:</p>
                        <ul className="list-disc pl-5">
                          <li>"Memory &gt; 85% → scale up instances"</li>
                          <li>"Queue latency → add more workers"</li>
                          <li>"Cache hit rate &lt; 50% → clear and rebuild"</li>
                          <li>"Slow query → run optimization and update index"</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold mb-2">Escalate to Human When:</p>
                        <ul className="list-disc pl-5">
                          <li>Issue is novel (never seen before)</li>
                          <li>Impact is high (critical service failing)</li>
                          <li>Uncertainty is high (multiple potential causes)</li>
                          <li>Fix requires human judgment (migration, architecture change)</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="profiling">
                  <AccordionTrigger className="text-lg font-semibold">
                    Performance Optimization Through Continuous Profiling
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>The Problem:</strong> Code runs slow, but why? CPU-bound? I/O-bound? Memory-bound?
                        Network-bound?
                      </p>
                      <p>
                        <strong>Continuous Profiling Solution:</strong> System continuously profiles code (which
                        functions consume CPU? Which API calls slowest? Which queries run most frequently?). Over time,
                        patterns emerge:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Top 3 functions consume 80% of CPU</li>
                        <li>Top 5 database queries take 90% of query time</li>
                        <li>Specific API endpoint consistently slow on certain traffic patterns</li>
                      </ul>
                      <p className="font-semibold mt-4">
                        Result: Optimization targets obvious. 45% latency reduction achieved by optimizing top 5
                        database queries.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="security">
                  <AccordionTrigger className="text-lg font-semibold">
                    Security & Compliance Automation
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Secrets Management:</p>
                        <ul className="list-disc pl-5">
                          <li>Credentials never hardcoded</li>
                          <li>Vault service stores all secrets</li>
                          <li>Applications retrieve at runtime</li>
                          <li>Secrets rotate on schedule (daily for API keys)</li>
                          <li>Every access logged immutably</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold mb-2">Patch Management:</p>
                        <ul className="list-disc pl-5">
                          <li>CVE feeds monitored automatically</li>
                          <li>Patches tested in staging automatically</li>
                          <li>Applied to canary production (1% traffic) first</li>
                          <li>If healthy for 12 hours, rollout to 100%</li>
                          <li>If anomaly detected, auto-rollback</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold mb-2">Audit Trail:</p>
                        <ul className="list-disc pl-5">
                          <li>Every action logged: who, what, when, why, result</li>
                          <li>Logs stored immutably (cannot be edited)</li>
                          <li>Compliance reports generated automatically</li>
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
                  "Our on-call team was running around like crazy reacting to incidents. Since implementing 24/7 monitoring with automated remediation, we've gone from fighting fires to building features. Uptime went from 99.7% to 99.98%, but the real win is that my team is happy again. One engineer said 'I actually slept through the night last week'—that's when I knew we'd solved the problem.",
                author: "Marcus T.",
                role: "VP Infrastructure, ScaleHub",
              },
              {
                quote:
                  "The incident response time is insane. What used to take 8 hours now takes 15 minutes. We went from 12-15 SLA breaches per month to less than 1. Customers are noticing—retention improved significantly.",
                author: "Jennifer L.",
                role: "VP Customer Success, ScaleHub",
              },
              {
                quote:
                  "As a junior engineer, I was intimidated by on-call rotation. Now with the context-rich dashboards and automated workflows, I can confidently handle incidents that previously would have woken up the senior team. The learning curve has flattened dramatically.",
                author: "Arun K.",
                role: "Software Engineer, ScaleHub",
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

      {/* Support Packages */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Support Packages</h2>
            <p className="text-xl text-muted-foreground">Choose the right level of support for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "$3,000/month",
                features: [
                  "Business hours monitoring (9-5)",
                  "Weekly health checks",
                  "Email support",
                  "2-hour response time",
                  "Basic security updates",
                  "Monthly reports",
                ],
              },
              {
                name: "Professional",
                price: "$6,000/month",
                features: [
                  "24/7 monitoring & alerts",
                  "Daily health checks",
                  "Priority email & chat support",
                  "30-minute response time",
                  "Advanced security + patch automation",
                  "Weekly reports + real-time dashboards",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "24/7 dedicated monitoring team",
                  "Continuous health checks",
                  "Phone, email & chat support",
                  "15-minute response time",
                  "Custom security solutions",
                  "Real-time dashboards + dedicated SRE",
                ],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-xl transition-all ${pkg.popular ? "border-primary border-2" : ""}`}
              >
                <div className="text-center">
                  {pkg.popular && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-4">
                      <Star className="w-3 h-3" /> Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-6">{pkg.price}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-8 animate-pulse">Ready to Stop Firefighting?</h2>
          <p className="text-xl mb-8 animate-fade-in">
            Your systems deserve expert 24/7 care. Your team deserves better than constant on-call stress.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg mb-4">What's possible:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>99.98%+ uptime (protected revenue)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>&lt;1 hour incident response (not 8 hours)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>65% incidents fixed automatically</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Security patched in 24 hours (not weeks)</span>
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
              Schedule Your Infrastructure Health Check
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30"
              onClick={() => (window.location.href = "/contact")}
            >
              Download: 24/7 Monitoring Setup Guide
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              <span>Free consultation, no commitment</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>4-6 weeks to full go-live</span>
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              <span>ROI: 200-400% in first year</span>
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
            <AccordionItem value="3am-break">
              <AccordionTrigger>What happens if something breaks at 3 AM on Sunday?</AccordionTrigger>
              <AccordionContent>
                You're covered. System automatically detects the issue. If it's a known issue, system auto-fixes (65% of
                incidents). If it's novel, system pages the on-call expert immediately. Expert has full context and can
                diagnose/fix in 15 minutes on average. You don't know about it because service never went down.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="legacy">
              <AccordionTrigger>We have custom legacy systems. Can you monitor them?</AccordionTrigger>
              <AccordionContent>
                Yes, absolutely. If system has APIs or webhooks, we integrate directly. If system has log output, we
                parse and analyze logs. If system is totally closed, we monitor externally (response time,
                availability). We've integrated with 200+ systems including ancient mainframes and custom-built
                applications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost-timeline">
              <AccordionTrigger>What's the typical cost and timeline?</AccordionTrigger>
              <AccordionContent>
                Typical setup: $35K-$50K (one-time), then $3K-$8K/month (ongoing monitoring + support). Timeline: 4-6
                weeks from kick-off to full go-live, often with quick wins in week 1 (unified observability + immediate
                MTTR improvement). ROI typically breaks even in 2-3 months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vs-hiring">
              <AccordionTrigger>How much will this cost vs. hiring an ops engineer?</AccordionTrigger>
              <AccordionContent>
                Comparison: Hire one ops engineer: $120K/year salary + $40K benefits + $20K training = $180K total.
                Covers 40 hours/week. On-call burnout leads to turnover. D2 managed monitoring: $50K setup + $60K/year =
                $110K total. Covers 24/7. No burnout. Scalable (doesn't get more expensive if you add services). You're
                paying ~40% less and getting better coverage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="handle-incidents">
              <AccordionTrigger>Will you help with incidents or just notify us when something breaks?</AccordionTrigger>
              <AccordionContent>
                We handle end-to-end: (1) Detect issue (often before customer impact), (2) Auto-remediate if it's a
                known issue, (3) If human judgment needed, our expert investigates with full context, (4) Fix applied
                and verified, (5) Root cause analysis conducted, (6) Learning incorporated so similar issues
                auto-remediate next time. You're not just getting alerts—you're getting expert problem-solving 24/7.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vendor-lock">
              <AccordionTrigger>How do you prevent vendor lock-in?</AccordionTrigger>
              <AccordionContent>
                Monitoring data stored in your AWS/GCP account (not ours). Alerting rules and workflows documented and
                exported. We use open-source stack (Prometheus, ELK) at the core. If you ever want to switch, we help
                with migration. You own your data and configurations. We're partners, not jailers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security-patching">
              <AccordionTrigger>Can you help with security patching and compliance?</AccordionTrigger>
              <AccordionContent>
                Yes, that's a core service. We monitor CVE feeds for vulnerabilities affecting your systems. Patches
                auto-tested in staging. Staged rollout to production (canary → full). Immutable audit trail for
                compliance verification. Compliance reports auto-generated. For regulated industries (finance,
                healthcare), this alone typically pays for the service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scaling">
              <AccordionTrigger>What if we want to scale to 10x our current traffic?</AccordionTrigger>
              <AccordionContent>
                We help you through the growth. Predictive analytics identify scaling needs before you hit them.
                Infrastructure recommendations customized to your growth trajectory. Automated scaling configured to
                handle growth automatically. Periodic optimization sessions as your systems evolve. Most clients scale
                3-5x without any ops team growth thanks to automation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security-of-systems">
              <AccordionTrigger>How do you ensure security of our systems?</AccordionTrigger>
              <AccordionContent>
                Multi-layer approach: All communication encrypted (TLS 1.3). Access control by role. Secrets never
                stored in plain text (Vault managed). Every action logged immutably. Security patches auto-applied
                proactively. Regular security audits and penetration testing. We treat your security like it's ours
                (because reputation-wise, it is).
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
              { icon: Award, stat: "50+", label: "Systems monitored successfully" },
              { icon: Star, stat: "4.9/5", label: "Average uptime score (verified)" },
              { icon: Shield, stat: "Datadog", label: "Premier Partner status" },
              { icon: TrendingUp, stat: "99.98%", label: "Average uptime across clients" },
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
              <h4 className="font-semibold text-lg mb-4">Certifications & Partnerships</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-primary mr-2" />
                  <span>Datadog Premier Partner</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>PagerDuty Solutions Partner</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-4 w-4 text-primary mr-2" />
                  <span>SOC 2 Type II Compliant</span>
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
                  <span>99.98% uptime SLA guaranteed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>&lt;1 hour incident response SLA</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>24/7 bilingual expert support</span>
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

export default SupportOptimizationService;
