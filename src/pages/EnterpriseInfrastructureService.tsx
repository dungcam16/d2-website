import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Server,
  Shield,
  TrendingUp,
  Globe,
  Lock,
  Database,
  CloudCog,
  FileCheck,
  BarChart3,
  AlertTriangle,
  Zap,
  PlayCircle,
  Download,
  ChevronDown,
  ChevronUp,
  Users,
  DollarSign,
  Clock,
  Award,
  Target,
  Activity,
  Code,
  GitBranch,
  RefreshCw,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EnterpriseInfrastructureService = () => {
  const [showTechnicalDeepDive, setShowTechnicalDeepDive] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise Infrastructure: Scalability, Optimization, Compliance, Disaster Recovery",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "From 98.2% to 99.99% Uptime. Scale 100x Without Adding Staff. Enterprise-grade infrastructure that scales infinitely, recovers in minutes, passes any compliance audit.",
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
        name: "Enterprise Infrastructure",
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
          text: "Typical implementation is 8-10 weeks. First 2 weeks: assessment + design. Weeks 3-8: infrastructure build + testing. Weeks 9-10: optimization + team training.",
        },
      },
      {
        "@type": "Question",
        name: "What's the typical cost and ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical project cost: $80K-$150K. Most companies break even in 2-3 months from infrastructure savings alone. Average 47% cost reduction with 99.99% uptime.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Enterprise Infrastructure: 99.99% Uptime, Auto-Scaling | D2 Group"
        description="From 98.2% to 99.99% uptime. Scale 100x without adding staff. Multi-region, auto-scaling, compliance-ready infrastructure. 47% cost savings."
        keywords="enterprise infrastructure scaling, multi-region disaster recovery, Kubernetes infrastructure, cloud infrastructure optimization, 99.99% uptime, auto-scaling infrastructure"
        canonicalUrl="/services/enterprise-infrastructure"
        structuredData={[structuredData, breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-primary">From 98.2% to 99.99% Uptime.</span>
              <br />
              <span className="text-foreground">Scale 100x Without Adding Staff</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Enterprise-grade infrastructure that scales infinitely, recovers in minutes, and passes any compliance
              audit. Built for growth-stage companies that can't afford downtime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Request Your Infrastructure Assessment
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                Download: Enterprise Infrastructure Checklist
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, value: "99.99%", label: "Uptime SLA", desc: "Zero business interruption" },
              { icon: TrendingUp, value: "100x", label: "Peak Load", desc: "Handle explosive growth" },
              { icon: DollarSign, value: "$85K/mo", label: "Cost Savings", desc: "47% reduction" },
              { icon: Shield, value: "5 Min", label: "Recovery Time", desc: "Automated disaster recovery" },
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
              { icon: Server, value: "50+", label: "Enterprise Deployments", desc: "Production systems at scale" },
              { icon: Star, value: "4.9/5", label: "Satisfaction", desc: "Verified by customers" },
              { icon: Globe, value: "Multi-Region", label: "Ready", desc: "AWS/GCP/Azure/On-Prem" },
              { icon: Lock, value: "SOC2", label: "+ HIPAA", desc: "Compliance built-in" },
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Client Success Story: ScaleVenture</h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Industry:</strong> B2B SaaS / FinTech
              <br />
              <strong>Size:</strong> 400 employees, $150M ARR, scaling 80% YoY
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                ScaleVenture is a B2B SaaS / FinTech platform serving 2,000+ enterprise clients with real-time financial
                data. The company grew from $80M to $150M ARR in 18 months but infrastructure became a critical
                bottleneck. During peak usage (quarter-end, market volatility spikes), systems crashed, customers lost
                access to critical data, and compliance auditors flagged 18 infrastructure control deficiencies. The CEO
                gave CTO 60 days to fix or face customer losses and audit failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">The Challenge: Decision Paralysis</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Growing companies face a cruel irony: success breaks your infrastructure. Your current setup worked fine
              at $10M ARR. At $100M, it's a liability. Compliance regulations get stricter. Customers demand 99.99%
              uptime. Yet your ops team is drowning fighting fires instead of building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "System Crashes During Peak Load",
                description:
                  "Infrastructure maxes out at 5x baseline traffic. Quarter-end close, product launch, or viral feature? System crashes. Customers lose access. Revenue stops.",
                impact: "$500K-$2M in annual downtime costs; customers switching to competitors",
              },
              {
                icon: Shield,
                title: "Zero Disaster Recovery Plan",
                description:
                  "You have backups somewhere. But nobody tested recovery. Single data center failure, ransomware attack, or human error = catastrophic data loss.",
                impact: "Existential risk; $3M-50M+ potential loss; bankruptcy if severe",
              },
              {
                icon: DollarSign,
                title: "Infrastructure Sprawl & Waste",
                description:
                  "Infrastructure evolved ad-hoc. Servers running unused. Databases duplicated. No central control. Scaling team means 3x infrastructure spend but 1x performance gain.",
                impact: "$300K-$800K annually in infrastructure waste; IT budget consumed by OpEx",
              },
              {
                icon: FileCheck,
                title: "Compliance Audit Failures",
                description:
                  "SOC2, GDPR, HIPAA, PCI-DSS: each has infrastructure requirements. Your current setup fails most audits. Every audit = $200K+ consulting fees + 2-3 month delays.",
                impact: "18+ control deficiencies; $200K-$500K audit costs; product launch delays",
              },
              {
                icon: Users,
                title: "Team Burnout & Knowledge Silos",
                description:
                  "3-4 ops engineers spending 60% of time firefighting. No documentation. When they leave, knowledge walks out. Scaling = hiring more ops (expensive, slow).",
                impact: "40% annual ops team turnover; $150K+ hiring costs; ongoing crisis management",
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
              "Our infrastructure was like a Jenga tower held together with duct tape and prayers. Every scaling event
              felt like playing Russian roulette. When D2 helped us rebuild, it wasn't just faster and more reliable—it
              gave us back our peace of mind."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Marcus T., VP Infrastructure, ScaleVenture</cite>
          </div>
        </div>
      </section>

      {/* The Solution - Condensed version showing key architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: Infrastructure Transformation
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              Instead of patching current infrastructure, we rebuild from first principles using modern cloud-native
              architecture. The foundation is infrastructure-as-code (IaC): every server, network rule, and security
              control defined in Git, versioned, tested, and reproducible. Kubernetes orchestrates compute. Terraform
              manages infrastructure. DataDog monitors everything. Multi-region deployment ensures no single point of
              failure.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Result: Infrastructure that scales infinitely, recovers from disasters in minutes, and passes any
              compliance audit on first try.
            </p>
          </div>

          {/* Architecture Layers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Enterprise-Grade Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  layer: "Edge & Protection",
                  icon: Shield,
                  components: ["CloudFlare CDN", "WAF protection", "DDoS mitigation", "Geo-routing"],
                },
                {
                  layer: "Compute Orchestration",
                  icon: Server,
                  components: ["Kubernetes", "Load balancers", "Auto-scaling", "Blue-green deployments"],
                },
                {
                  layer: "Data & Persistence",
                  icon: Database,
                  components: ["Primary database", "Read replicas", "Automated backups", "Point-in-time restore"],
                },
                {
                  layer: "Disaster Recovery",
                  icon: RefreshCw,
                  components: ["Cross-region failover", "5-min RTO", "Near-zero RPO", "Monthly drills"],
                },
                {
                  layer: "Monitoring & Observability",
                  icon: BarChart3,
                  components: ["DataDog monitoring", "Centralized logging", "Alerting", "Real-time dashboards"],
                },
                {
                  layer: "Security & Compliance",
                  icon: Lock,
                  components: ["Vault secrets", "AES-256 encryption", "Audit logging", "SOC2/GDPR/HIPAA"],
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
                    <h4 className="font-semibold text-md mb-3">{item.layer}</h4>
                    <ul className="space-y-1">
                      {item.components.map((comp, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0 text-primary mt-0.5" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Tech Stack Callout */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 animate-fade-in">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">🛠️ Technologies Used</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                "Kubernetes: Container orchestration",
                "Terraform: Infrastructure-as-code",
                "AWS/GCP/Azure: Multi-cloud",
                "PostgreSQL: Scalable database",
                "DataDog: Comprehensive monitoring",
                "CloudFlare: CDN & DDoS protection",
                "Vault: Secret management",
                "ELK Stack: Centralized logging",
              ].map((tech, idx) => (
                <div key={idx} className="flex items-start">
                  <Code className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            10-Week Implementation Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Assessment & Design",
                duration: "Week 1-2",
                activities: [
                  "Full infrastructure audit",
                  "Performance baseline",
                  "Compliance gap analysis",
                  "Architecture design",
                ],
                insight: "Discovered $85K/month infrastructure waste and 3 single points of failure",
                icon: FileCheck,
              },
              {
                phase: "Core Infrastructure",
                duration: "Week 3-5",
                activities: [
                  "Kubernetes cluster setup",
                  "Load balancing configured",
                  "Database replication",
                  "Monitoring dashboards",
                ],
                insight: "Baseline system 30% faster. Fixed 20% locking contention.",
                icon: Server,
              },
              {
                phase: "DR & Compliance",
                duration: "Week 6-8",
                activities: [
                  "Cross-region failover",
                  "Backup automation",
                  "Security controls",
                  "Compliance documentation",
                ],
                insight: "First DR drill: 3-minute failover. Audit prep from 240 to 24 hours.",
                icon: Shield,
              },
              {
                phase: "Optimization & Handoff",
                duration: "Week 9-10",
                activities: ["Performance tuning", "Cost optimization", "Team training", "Documentation"],
                insight: "47% cost reduction, 3x performance improvement. Team now self-sufficient.",
                icon: Award,
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

      {/* Results - Showing quantitative table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">
            Results & Impact: From Liability to Competitive Advantage
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            ScaleVenture transformed from infrastructure liability to competitive advantage. The team went from fighting
            fires to driving innovation.
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
                    before: "98.2%",
                    after: "99.99%",
                    change: "+1.79 points",
                    impact: "99.9% downtime reduction",
                  },
                  {
                    metric: "Peak Load Capacity",
                    before: "5x baseline",
                    after: "100x baseline",
                    change: "20x improvement",
                    impact: "Handle explosive growth",
                  },
                  {
                    metric: "Infrastructure Cost",
                    before: "$180K/month",
                    after: "$95K/month",
                    change: "-47%",
                    impact: "$85K/month savings",
                  },
                  {
                    metric: "Disaster Recovery Time",
                    before: "72 hours",
                    after: "5 minutes",
                    change: "99.9% faster",
                    impact: "Business continuity",
                  },
                  {
                    metric: "Compliance Audit Time",
                    before: "240 hours",
                    after: "24 hours",
                    change: "90% reduction",
                    impact: "Audit-ready year-round",
                  },
                  {
                    metric: "Team Firefighting",
                    before: "60% capacity",
                    after: "10% capacity",
                    change: "83% reduction",
                    impact: "Time for innovation",
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
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">💰 ROI Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Implementation Cost</p>
                <p className="text-3xl font-bold text-primary">$95,000</p>
                <p className="text-xs text-muted-foreground mt-2">10-week build + training</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
                <p className="text-3xl font-bold text-primary">$680,000+</p>
                <p className="text-xs text-muted-foreground mt-2">Infrastructure + operational gains</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Break-Even</p>
                <p className="text-3xl font-bold text-primary">1.7 months</p>
                <p className="text-xs text-muted-foreground mt-2">Fast payback</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">12-Month ROI</p>
                <p className="text-3xl font-bold text-primary">716%</p>
                <p className="text-xs text-muted-foreground mt-2">$680K benefit / $95K cost</p>
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
                  "Firefighting eliminated; system self-heals",
                  "Team shifted from reactive to strategic work",
                  "Work-life balance: on-call burden reduced 80%",
                ],
              },
              {
                title: "For Engineering/Product",
                icon: Code,
                impacts: [
                  "Deploy 10x per day; no waiting for infrastructure",
                  "Scale without limits; infrastructure never blocks features",
                  "Full observability; quickly identify and fix issues",
                ],
              },
              {
                title: "For Executive/Finance",
                icon: DollarSign,
                impacts: [
                  "Infrastructure spend reduced 47%; predictable costs",
                  "99.99% uptime means customers stay loyal; no SLA breaches",
                  "Audit-ready year-round; compliance confident",
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

      {/* Technical Deep Dive - Condensed */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-heading mb-4 animate-fade-in">Technical Deep Dive</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              For Technical Decision Makers — See architecture depth
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
                <AccordionItem value="kubernetes">
                  <AccordionTrigger className="text-lg font-semibold">
                    Kubernetes & Container Orchestration
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Why Kubernetes?</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Auto-scaling: Pods scale from 5 to 500 based on demand</li>
                        <li>Self-healing: Failed pods automatically restarted</li>
                        <li>Rolling updates: Deploy new code without service interruption</li>
                        <li>Multi-cloud: Same Kubernetes API on AWS, GCP, Azure, on-prem</li>
                      </ul>
                      <p className="mt-4">
                        <strong>Performance:</strong> Pod startup &lt;30s, deployment &lt;5min zero-downtime, 30%
                        capacity headroom reserved for spikes
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="database">
                  <AccordionTrigger className="text-lg font-semibold">Database Replication Strategy</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Primary database (us-east): All writes go here</li>
                        <li>Read replicas (eu-west, ap-southeast, us-west): Read-only copies</li>
                        <li>Replication: Changes replicate to all regions in &lt;100ms</li>
                        <li>Disaster recovery: If primary fails, promote replica to primary</li>
                      </ul>
                      <p className="mt-4">
                        <strong>Technology:</strong> PostgreSQL with logical replication, automated hourly backup,
                        point-in-time restore to any point in last 30 days
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="dr">
                  <AccordionTrigger className="text-lg font-semibold">Disaster Recovery Automation</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>RTO Goal:</strong> 5 minutes | <strong>RPO Goal:</strong> &lt;1 minute
                      </p>
                      <p className="mt-4">
                        <strong>How It Works:</strong>
                      </p>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Primary region active, secondary standby with real-time replication</li>
                        <li>Health checks every 30 seconds verify primary is healthy</li>
                        <li>On failure: automatically promote secondary to primary within 5 minutes</li>
                        <li>Traffic rerouting: DNS and load balancers updated; users redirected</li>
                      </ol>
                      <p className="mt-4 font-semibold">
                        Testing: Monthly DR drill to measure RTO/RPO and document improvements
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="compliance">
                  <AccordionTrigger className="text-lg font-semibold">Compliance Controls</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>SOC2 Controls:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>CC6.1: Role-based access control</li>
                        <li>CC7.2: Real-time anomaly alerts</li>
                        <li>CC8.1: Immutable audit logs</li>
                        <li>A1.1: 99.99% uptime SLA</li>
                      </ul>
                      <p className="mt-4">
                        <strong>GDPR Controls:</strong> Data minimization, AES-256 encryption, automated data purge,
                        audit trail
                      </p>
                      <p className="mt-4">
                        <strong>HIPAA Controls:</strong> PHI encryption, MFA + RBAC, immutable PHI access logs, 1-hour
                        incident logging
                      </p>
                      <p className="mt-4 font-semibold">
                        Implementation: All controls built into infrastructure (not manual); automated compliance
                        verification; monthly reports; audit-ready 365 days/year
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
                  "Our infrastructure was crumbling under our own success. D2's redesign transformed everything. We went from fighting infrastructure to using it as a competitive advantage. Now we deploy 10x per day, scale infinitely, pass audits on first try, and reduced infrastructure spend 47%. Best decision we made.",
                author: "Marcus T.",
                role: "VP Infrastructure, ScaleVenture",
              },
              {
                quote:
                  "The most surprising outcome: Our compliance audit went from a nightmare to routine. Before, we'd spend 2-3 months preparing, and still fail 20% of controls. After D2's infrastructure redesign, our auditor said 'This is best-in-class infrastructure we've seen.' Compliance is now a competitive advantage.",
                author: "Sarah K.",
                role: "Chief Compliance Officer",
              },
              {
                quote:
                  "We were terrified of the cutover. D2 didn't just build new infrastructure—they trained our team to own it. Within 3 weeks, we deployed our first feature on new infrastructure. Now we're moving fast and safely. That's the dream.",
                author: "James R.",
                role: "Engineering Manager",
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
            Ready to Build Enterprise-Grade Infrastructure?
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            ScaleVenture achieved 99.99% uptime, 100x scaling capacity, and $680K annual savings.
            <strong> Your company can achieve similar results.</strong>
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg mb-4">What You Get:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Multi-region, multi-cloud architecture</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>99.99% uptime with 5-minute disaster recovery</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Compliance controls built-in; audit-ready year-round</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Infrastructure costs reduced 40-60%</span>
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
              Request Your Infrastructure Assessment
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30"
              onClick={() => (window.location.href = "/contact")}
            >
              Download: Infrastructure Checklist
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              <span>Free consultation, zero obligation</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>8-10 weeks implementation</span>
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              <span>ROI guarantee: 200%+ within 12 months</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Condensed version showing key questions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="timeline">
              <AccordionTrigger>How long does implementation take?</AccordionTrigger>
              <AccordionContent>
                Typical implementation is 8-10 weeks. First 2 weeks: assessment + design. Weeks 3-8: infrastructure
                build + testing. Weeks 9-10: optimization + team training. Some companies go faster (critical path: 6
                weeks).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="offline">
              <AccordionTrigger>Do we need to take systems offline during migration?</AccordionTrigger>
              <AccordionContent>
                No. We build new infrastructure in parallel, run both systems simultaneously (double-blind), validate
                identical results, then gradually shift traffic. The cutover happens over hours, not days. Zero
                downtime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>What's the typical cost?</AccordionTrigger>
              <AccordionContent>
                Typical project cost: $80K-$150K depending on starting state. Includes assessment, architecture design,
                infrastructure build, compliance setup, and team training. Most companies break even in 2-3 months from
                infrastructure savings alone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="multi-cloud">
              <AccordionTrigger>Multi-cloud vs single cloud—which is better?</AccordionTrigger>
              <AccordionContent>
                Multi-cloud is better but more complex. Single cloud is easier but creates vendor lock-in. We recommend:
                AWS for compute, Google Cloud for data processing, with ability to failover between them. Costs less
                than pure multi-cloud, flexibility of avoiding lock-in.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security">
              <AccordionTrigger>How do you handle security?</AccordionTrigger>
              <AccordionContent>
                Defense in depth: edge protection (DDoS), network segmentation, encryption everywhere (in-transit and
                at-rest), access controls (RBAC + MFA), audit logging, and incident response. All controls automated and
                verified continuously. We can pass any security audit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dr">
              <AccordionTrigger>What if the entire primary region fails?</AccordionTrigger>
              <AccordionContent>
                Automatic failover to secondary region in &lt;5 minutes. Traffic automatically redirects. Data is
                already replicated to secondary, so zero loss. Customers see no interruption. We test this monthly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compliance">
              <AccordionTrigger>What compliance standards do you support?</AccordionTrigger>
              <AccordionContent>
                SOC2 Type II, GDPR, CCPA, HIPAA, PCI-DSS, and most industry standards. Compliance is built into
                infrastructure design. We document which controls address which standards, and automate verification.
                Your compliance team can self-serve audit reports.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support">
              <AccordionTrigger>What happens after implementation?</AccordionTrigger>
              <AccordionContent>
                Two options: (1) D2 manages infrastructure with 24/7 support. (2) Your team manages with D2 available
                for escalation. Most customers choose option 1 initially, transition to option 2 as team skills grow.
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
              { icon: Server, stat: "50+", label: "Enterprise infrastructure deployments completed" },
              { icon: Star, stat: "4.9/5", label: "Average customer satisfaction" },
              { icon: Award, stat: "AWS/GCP", label: "Multi-cloud architecture partner" },
              { icon: CheckCircle, stat: "99.99%", label: "Average uptime across all clients" },
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
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>SOC 2 Type II Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>HIPAA Ready</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>ISO 27001 Certified</span>
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
                  <span>Free optimization if targets missed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>24/7 support availability</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>99.99% uptime SLA backed by contract</span>
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

export default EnterpriseInfrastructureService;
