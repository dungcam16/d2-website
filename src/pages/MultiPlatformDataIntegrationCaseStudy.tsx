import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Clock,
  Database,
  User,
  Zap,
  RefreshCw,
  Shield,
  BarChart3,
  FileWarning,
  TrendingDown,
  Code,
  Layers,
  Network,
  CheckCircle,
  Download,
  ChevronDown,
} from "lucide-react";

const MultiPlatformDataIntegrationCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Multi-Platform Data Integration: $180K Annual Savings, 27 Systems Unified",
    description:
      "How Nexus Analytics eliminated manual data entry and unified 27 disconnected systems, saving $180K annually with real-time data synchronization",
    image: "https://d2group.co/assets/case-multi-platform-data-integration.jpg",
    author: {
      "@type": "Organization",
      name: "D2 Group",
    },
    publisher: {
      "@type": "Organization",
      name: "D2 Group",
    },
    datePublished: "2025-10-23",
    dateModified: "2025-10-23",
  };

  return (
    <>
      <SEO
        title="Data Integration Hub: $180K Savings Case Study | D2 Group"
        description="See how Nexus unified 27 data sources and eliminated manual entry, saving $180K annually with real-time sync and 99.7% data accuracy. Full ROI analysis included."
        keywords="data integration, ETL automation, API integration, data sync, multi-platform integration, data warehouse, real-time data, data quality, n8n workflows"
        ogImage="/assets/case-multi-platform-data-integration.jpg"
        canonicalUrl="https://d2group.co/portfolio/multi-system-data-sync-n8n"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10 pt-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link to="/portfolio" className="inline-block mb-8 group">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="text-lg px-6 py-2 mb-4">
              <Database className="h-4 w-4 mr-2" />
              Enterprise Data Integration
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                $1.2M in Wasted Labor.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent">
                27 Systems. One Solution.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Eliminate manual data entry, reconciliation, and system silos. One integration hub 
              that connects your entire business data ecosystem—real-time, automated, intelligent.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in">
                <div className="text-4xl font-bold text-primary mb-2">$180K</div>
                <div className="text-sm text-muted-foreground">Annual Savings</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Labor & error costs eliminated
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-100">
                <div className="text-4xl font-bold text-primary mb-2">27</div>
                <div className="text-sm text-muted-foreground">Systems Connected</div>
                <div className="text-xs text-muted-foreground mt-1">
                  From 0 unified integration
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-200">
                <div className="text-4xl font-bold text-primary mb-2">45s</div>
                <div className="text-sm text-muted-foreground">Data Latency</div>
                <div className="text-xs text-muted-foreground mt-1">
                  From 24-hour batch sync
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-300">
                <div className="text-4xl font-bold text-primary mb-2">99.7%</div>
                <div className="text-sm text-muted-foreground">Data Accuracy</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Automated validation
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="gap-2 group">
                  Schedule 30-Min Integration Assessment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download ROI Calculator
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary/60" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted/30 py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                Integrations Built
              </div>
            </div>
            <div className="animate-fade-in animation-delay-100">
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <div className="text-3xl font-bold text-primary mb-2">2B+</div>
              <div className="text-sm text-muted-foreground">
                Records Processed/Month
              </div>
            </div>
            <div className="animate-fade-in animation-delay-300">
              <div className="text-3xl font-bold text-primary mb-2">99.7%</div>
              <div className="text-sm text-muted-foreground">
                Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Client Overview</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Nexus Analytics
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20 animate-scale-in">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Nexus Analytics</strong> is a mid-market data analytics 
                consulting firm serving <strong className="text-primary">80+ enterprise clients</strong> across 
                financial services, retail, and healthcare. The company had grown to{" "}
                <strong className="text-primary">120 employees</strong> managing client data integration projects 
                worth <strong className="text-primary">$40M</strong> in annual managed services revenue.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                However, the company faced a critical growth constraint: each client relationship required 
                custom data integration work—manually building ETL pipelines, reconciling data conflicts, 
                managing ongoing synchronization. This required <strong className="text-primary">8 dedicated 
                integration engineers</strong> spending <strong className="text-primary">60% of their time</strong> on 
                repetitive, manual integration tasks that could be automated.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4" variant="destructive">
              The Challenge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Infrastructure Nightmare
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most companies don't start with a data integration problem—they inherit it through growth. 
              What starts as a minor annoyance becomes a critical business problem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pain Point 1 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Database className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">27 Scattered Systems</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Data scattered across CRM systems, accounting software, e-commerce platforms, 
                marketing automation, analytics databases, and 10+ proprietary systems. No central 
                view of truth—knowledge existed only in employee mental maps.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>$85K/month in unproductive search time</span>
              </div>
            </Card>

            {/* Pain Point 2 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Manual Data Entry Hell</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Despite having 27 systems, the company still relied on manual data entry to keep 
                systems synchronized. <strong>160 hours/month</strong> in manual entry,{" "}
                <strong>340 conflicts monthly</strong> requiring manual resolution.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>$35K/month in error correction labor</span>
              </div>
            </Card>

            {/* Pain Point 3 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Daily Data Silos</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Finance couldn't see real-time sales data. Marketing couldn't see customer behavior. 
                Every department had outdated versions of shared data, making decisions based on 1-3 days 
                old information. Required a 4-hour Monday meeting with 12 people just to reconcile numbers.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>$68K/month in meetings + lost opportunities</span>
              </div>
            </Card>

            {/* Pain Point 4 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <FileWarning className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Data Quality Nightmare</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Different systems, different formats. <strong>15,000+ duplicate records</strong> created 
                monthly. Analytics team spent 30% of their time cleaning data instead of analyzing. 
                Executives' first question was always "Which system is the source of truth?"
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>$28K/month in wasted analytical capacity</span>
              </div>
            </Card>

            {/* Pain Point 5 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-400">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Impossible to Scale</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Each new tool integration meant custom ETL coding. Each new data source meant new connectors, 
                new validation rules, new reconciliation logic. To handle growth, they'd need to hire{" "}
                <strong>5-7 new integration engineers</strong> at $500K/year—but couldn't afford it or find qualified talent fast enough.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>$3-5M in potential revenue unable to service</span>
              </div>
            </Card>

            {/* Pain Point 6 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">No Audit Trail</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Data was moving between systems but nobody knew exactly how or when. No audit log of changes. 
                Data governance was nonexistent. For clients in regulated industries (financial services, 
                healthcare), this was a compliance nightmare.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>$40K/month compliance consulting + risk exposure</span>
              </div>
            </Card>
          </div>

          {/* Quote */}
          <Card className="mt-12 p-8 md:p-12 bg-gradient-to-br from-muted/50 to-primary/5 border-l-4 border-l-primary animate-fade-in">
            <div className="flex gap-4 items-start">
              <div className="text-6xl text-primary/20 leading-none">"</div>
              <div>
                <p className="text-lg md:text-xl text-foreground italic mb-4">
                  We built a successful services business by being really good at custom data integration work. 
                  But we hit a wall where we couldn't scale. Every new client meant 3-4 weeks of custom coding. 
                  Our best engineers were doing configuration work instead of innovation. When we implemented the 
                  Data Integration Hub, it was like we finally had the infrastructure to scale.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">James Sullivan</div>
                    <div className="text-sm text-muted-foreground">
                      VP of Engineering, Nexus Analytics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">The Solution</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unified Data Integration Hub
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A central nervous system for your business data. Instead of 27 individual connections, 
              one unified platform that connects to any system, transforms data, handles conflicts, 
              validates quality, and syncs in real-time.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 1</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Source Discovery</h4>
                <p className="text-muted-foreground">
                  Connect a new data source. System automatically discovers its schema—what data it 
                  contains and how it's structured. Click "connect," authorize access, done.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 2</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Data Transformation</h4>
                <p className="text-muted-foreground">
                  Different systems store data differently. Hub automatically transforms between formats. 
                  No manual mapping for common transformations; custom rules for edge cases.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 3</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Quality Validation</h4>
                <p className="text-muted-foreground">
                  Before data moves, system validates format, detects duplicates, checks business rules. 
                  Catches 99%+ of data quality issues before they infect your databases.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 4</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Real-Time Sync</h4>
                <p className="text-muted-foreground">
                  System detects when data changes in source and propagates to all destinations in seconds. 
                  No more daily batch jobs, no stale data, no "that number was wrong."
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 5</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Audit & Reconciliation</h4>
                <p className="text-muted-foreground">
                  Every data movement logged: source record, transformation applied, destination received, 
                  timestamp, any conflicts. Complete audit trail for troubleshooting and compliance.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 6</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Error Recovery</h4>
                <p className="text-muted-foreground">
                  Destination unavailable? System automatically retries with exponential backoff. Network hiccup? 
                  Resumes exactly where it left off. 99.7% uptime SLA guaranteed.
                </p>
              </Card>
            </div>
          </div>

          {/* Tech Stack */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Tech Stack Under the Hood</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Orchestration: n8n</div>
                    <div className="text-sm text-muted-foreground">Workflow engine for data flows</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Real-Time Sync: Kafka</div>
                    <div className="text-sm text-muted-foreground">Event streaming for instant data</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Data Warehouse: Snowflake/BigQuery</div>
                    <div className="text-sm text-muted-foreground">Centralized data storage</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">50+ Pre-Built Connectors</div>
                    <div className="text-sm text-muted-foreground">Salesforce, Shopify, QuickBooks, etc.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Validation: Great Expectations</div>
                    <div className="text-sm text-muted-foreground">Data quality framework</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Monitoring: DataDog</div>
                    <div className="text-sm text-muted-foreground">Integration metrics and alerts</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Results & Impact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformative Business Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nexus implemented the Data Integration Hub over 12 weeks and achieved comprehensive 
              transformation across engineering, operations, and business impact.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="text-5xl font-bold text-primary mb-3">95%</div>
              <div className="text-sm font-semibold mb-2">Manual Entry Reduction</div>
              <div className="text-xs text-muted-foreground">720 hours → 35 hours monthly</div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-100">
              <div className="text-5xl font-bold text-primary mb-3">1,920x</div>
              <div className="text-sm font-semibold mb-2">Faster Data Sync</div>
              <div className="text-xs text-muted-foreground">24 hours → 45 seconds</div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-200">
              <div className="text-5xl font-bold text-primary mb-3">97%</div>
              <div className="text-sm font-semibold mb-2">Fewer Data Conflicts</div>
              <div className="text-xs text-muted-foreground">340+ → 8-12 issues monthly</div>
            </Card>
          </div>

          {/* ROI Breakdown */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20 animate-fade-in mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">ROI Analysis</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                  Implementation Investment
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hub infrastructure setup</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Initial integrations</span>
                    <span className="font-semibold">$20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data modeling & transformation</span>
                    <span className="font-semibold">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team training</span>
                    <span className="font-semibold">$10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Professional services (12 weeks)</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Investment</span>
                    <span className="text-destructive">$95,000</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Annual Savings
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Eliminated manual labor</span>
                    <span className="font-semibold text-primary">$120,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reduced data quality issues</span>
                    <span className="font-semibold text-primary">$30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reduced support overhead</span>
                    <span className="font-semibold text-primary">$20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Infrastructure consolidation</span>
                    <span className="font-semibold text-primary">$10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">&nbsp;</span>
                    <span className="font-semibold">&nbsp;</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Annual Savings</span>
                    <span className="text-primary">$180,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Break-Even</div>
                  <div className="text-2xl font-bold text-primary">6.3 months</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">12-Month ROI</div>
                  <div className="text-2xl font-bold text-primary">189%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">5-Year Savings</div>
                  <div className="text-2xl font-bold text-primary">$900K</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Qualitative Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in">
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                For Operations
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>No more manual reconciliation meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Instant access to real-time data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Proactive problem detection via alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Audit-ready compliance (2hrs vs 40hrs)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-100">
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                For Engineering
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Focus on innovation, not ETL pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>24-hour integrations (vs 3-4 weeks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Reduced alert fatigue—only real issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Self-managing, documented system</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-200">
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                For Leadership
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time dashboards with single truth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Instant decisions with current data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Predictable, scalable infrastructure costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>3x revenue growth without 3x team size</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge className="mb-6">Ready to Transform Your Data Integration?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Drowning in Manual Data Entry
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a 30-minute assessment to see your specific data integration opportunities 
            and get a custom ROI projection for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gap-2 group">
                Schedule Your Integration Assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download Full Case Study
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MultiPlatformDataIntegrationCaseStudy;
