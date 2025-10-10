import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  BarChart3,
  CheckCircle2,
  ArrowLeft,
  Code,
  TrendingUp,
  Clock,
  Eye,
  Phone,
  Database,
  Star,
  Users,
  FileText,
  Settings,
  Bell,
  Lightbulb,
  Youtube,
  Building2,
  ShoppingCart,
  ArrowRight,
  Download,
  Share2,
  Calendar,
  Target,
  AlertTriangle,
  DollarSign,
  Zap,
  Filter,
  RefreshCw,
  LineChart,
} from "lucide-react";

const CaseStudyDataDashboard = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Multi-Platform Analytics Dashboard - Case Study",
    description:
      "How we unified marketing data from 8 platforms and reduced reporting time by 90% with automated dashboard",
    author: {
      "@type": "Organization",
      name: "D2 Group",
    },
    publisher: {
      "@type": "Organization",
      name: "D2 Group",
      logo: {
        "@type": "ImageObject",
        url: "https://d2group.co/logo.png",
      },
    },
    datePublished: "2025-06-01",
    dateModified: "2025-10-10",
    image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://d2group.co/case-study/data-report-dashboard",
    },
  };

  return (
    <>
      <SEO
        title="Multi-Platform Analytics Dashboard - Case Study | D2 Group"
        description="Case study: How we automated data collection from Google Analytics, Meta Ads, and HubSpot into a unified dashboard, reducing reporting time by 90%"
        keywords="data integration case study, reporting automation, analytics dashboard, n8n workflow, multi-platform data sync, google analytics integration"
        canonicalUrl="/case-study/data-report-dashboard"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>

            <div className="space-y-6">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <BarChart3 className="w-4 h-4 mr-2 inline" />
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Multi-Platform Analytics Dashboard</h1>
              <p className="text-xl text-muted-foreground">
                How we unified marketing data from 8 platforms into a single real-time dashboard
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">-90%</div>
                  <div className="text-xs text-muted-foreground">Reporting Time</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Eye className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">+70%</div>
                  <div className="text-xs text-muted-foreground">Team Visibility</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Database className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">99%</div>
                  <div className="text-xs text-muted-foreground">Data Accuracy</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">8</div>
                  <div className="text-xs text-muted-foreground">Platforms Unified</div>
                </CardContent>
              </Card>
            </div>

            {/* Share & Download */}
            <div className="flex gap-4 mt-8">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-12 px-6 bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Executive Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Client
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Digital marketing agency managing campaigns across 20+ client accounts
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Industry
                    </h4>
                    <p className="text-sm text-muted-foreground">Digital Marketing & Analytics</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Duration
                    </h4>
                    <p className="text-sm text-muted-foreground">3 weeks development + ongoing enhancements</p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">
                  We built a unified analytics dashboard that automatically aggregates data from 8 marketing platforms
                  (Google Analytics, Meta Ads, Google Ads, LinkedIn Ads, HubSpot, Mailchimp, Google Search Console, and
                  Shopify) into a single real-time view. The solution eliminated 10+ hours of weekly manual reporting
                  work, improved data accuracy to 99%, and gave the entire team instant visibility into cross-platform
                  marketing performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Workflow Image */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=1200&auto=format&fit=crop"
                alt="Data Dashboard Workflow"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  <span className="text-destructive">The Challenge</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Database className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Marketing data fragmented across 8 platforms</h3>
                    <p className="text-muted-foreground">
                      Critical marketing metrics were scattered across Google Analytics (web traffic), Meta Ads Manager
                      (Facebook/Instagram performance), Google Ads (search campaigns), LinkedIn Campaign Manager,
                      HubSpot (CRM and email), Mailchimp (newsletters), Google Search Console (SEO), and Shopify
                      (e-commerce). This fragmentation made it nearly impossible to get a holistic view of campaign
                      performance or understand the full customer journey across touchpoints.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Manual data collection consuming 10+ hours weekly</h3>
                    <p className="text-muted-foreground">
                      The marketing team spent 10-12 hours every week manually logging into each platform, exporting CSV
                      files, copying data into Excel, reconciling different date ranges and metrics definitions, and
                      creating client reports. This tedious process delayed insights by 3-5 days, prevented real-time
                      optimization, and was highly error-prone with frequent copy-paste mistakes and formula errors.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <LineChart className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Limited team visibility and slow decision-making</h3>
                    <p className="text-muted-foreground">
                      Only the analytics specialist had access to complete data, creating bottlenecks when account
                      managers needed performance updates. Campaign managers couldn't make data-driven optimization
                      decisions in real-time. Executives lacked visibility into overall agency performance across all
                      clients. Weekly stakeholder meetings were delayed waiting for reports to be compiled manually.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <span className="text-primary">The Solution</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Automated Multi-Platform Data Pipeline
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a comprehensive ETL (Extract, Transform, Load) pipeline that unifies all marketing data:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Automated data extraction:</strong> n8n workflows automatically pull data from all 8
                        platforms using their respective APIs on daily scheduled runs (3 AM automatically), with
                        configurable date ranges and metric selections
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Intelligent data transformation:</strong> Normalize disparate data formats, reconcile
                        different metric definitions (e.g., sessions vs visits), convert currencies, align time zones,
                        and calculate derived metrics (ROI, CPA, ROAS) consistently
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Live dashboard integration:</strong> Auto-populate Google Sheets dashboard with latest
                        data, update pivot tables and charts, apply conditional formatting for KPI alerts, and maintain
                        historical data archive
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Automated reporting:</strong> Weekly executive summaries with key trends, anomaly
                        detection alerts, month-over-month comparisons, and client-specific performance reports
                        auto-generated and emailed
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Platform Integrations</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Google Analytics 4
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Website traffic, user behavior, conversion funnels, event tracking, audience demographics
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Meta Ads API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Facebook/Instagram ad performance, spend data, audience insights, creative performance
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Google Ads API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Search campaign metrics, keyword performance, quality scores, conversion tracking
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        LinkedIn Campaign Manager
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        B2B ad performance, lead gen forms, professional demographic insights
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        HubSpot API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Lead generation, sales pipeline, email campaign performance, customer lifecycle metrics
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Mailchimp API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Newsletter performance, subscriber growth, email engagement, automation workflows
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Google Search Console
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Organic search performance, keyword rankings, click-through rates, technical SEO issues
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Shopify API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        E-commerce sales, order values, product performance, customer lifetime value
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Dashboard Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Real-time KPI tracking:</strong> Live views of revenue, conversions, ad spend, ROI, CAC,
                        LTV with color-coded alerts for goals
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Cross-platform attribution:</strong> Unified view showing how different channels
                        contribute to conversions throughout customer journey
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Trend analysis charts:</strong> Automated visualizations showing month-over-month,
                        year-over-year comparisons with forecasting
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Custom filtering:</strong> Drill down by client, campaign, channel, date range, product
                        category with saved view presets
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Workflow Visualization */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Data Pipeline Workflow</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Scheduled Trigger",
                      desc: "Daily 3 AM cron job initiates data collection workflow",
                      icon: Clock,
                    },
                    {
                      step: 2,
                      title: "API Extraction",
                      desc: "Parallel API calls to all 8 platforms with authentication",
                      icon: Database,
                    },
                    {
                      step: 3,
                      title: "Data Transformation",
                      desc: "Normalize formats, calculate metrics, reconcile differences",
                      icon: Settings,
                    },
                    {
                      step: 4,
                      title: "Quality Validation",
                      desc: "Check for anomalies, missing data, and threshold violations",
                      icon: Filter,
                    },
                    {
                      step: 5,
                      title: "Dashboard Update",
                      desc: "Populate Google Sheets with transformed data and refresh charts",
                      icon: RefreshCw,
                    },
                    {
                      step: 6,
                      title: "Alert & Report",
                      desc: "Send notifications for anomalies and generate weekly reports",
                      icon: Bell,
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Technical Challenges & Solutions</h2>
            <div className="space-y-4">
              {[
                {
                  challenge: "Inconsistent Metric Definitions Across Platforms",
                  solution:
                    "Created comprehensive data dictionary mapping platform-specific metrics to standardized definitions, implemented transformation layer to normalize all metrics to common business KPIs",
                  impact: "99% data consistency across all platforms with clear metric definitions",
                },
                {
                  challenge: "API Rate Limits and Quota Management",
                  solution:
                    "Implemented intelligent request batching, exponential backoff retry logic, quota tracking per platform, and distributed API calls across different time windows",
                  impact: "100% successful data extraction within API limits, zero quota violations",
                },
                {
                  challenge: "Handling Missing or Incomplete Data",
                  solution:
                    "Built data quality validation layer with anomaly detection, automated alerts for missing data, forward-fill logic for continuity, and clear flagging of estimated vs actual values",
                  impact: "Automated handling of 95% of data quality issues without manual intervention",
                },
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-destructive mb-2">Challenge</h4>
                        <p className="text-sm">{item.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">Solution</h4>
                        <p className="text-sm">{item.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-green-600 mb-2">Impact</h4>
                        <p className="text-sm">{item.impact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Tech Stack & Tools</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    "n8n Workflow Engine",
                    "Google Analytics API",
                    "Meta Marketing API",
                    "Google Ads API",
                    "LinkedIn API",
                    "HubSpot API",
                    "Mailchimp API",
                    "Google Search Console API",
                    "Shopify API",
                    "Google Sheets API",
                    "OAuth2",
                    "PostgreSQL",
                    "Docker",
                  ].map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Project Timeline</h2>
            <div className="space-y-6">
              {[
                {
                  phase: "Week 1",
                  title: "API Integration",
                  activities: ["API authentication", "Data mapping", "Metric standardization", "Test connections"],
                },
                {
                  phase: "Week 2",
                  title: "ETL Pipeline Build",
                  activities: ["Extraction workflows", "Transformation logic", "Data validation", "Error handling"],
                },
                {
                  phase: "Week 3",
                  title: "Dashboard & Deployment",
                  activities: ["Google Sheets design", "Chart automation", "Team training", "Production launch"],
                },
                {
                  phase: "Ongoing",
                  title: "Optimization",
                  activities: ["New platform additions", "Custom reports", "Performance tuning", "Feature requests"],
                },
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary font-bold text-lg min-w-[80px]">{item.phase}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3">{item.title}</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {item.activities.map((activity, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Impact & Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Time Savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekly reporting time</span>
                    <span className="font-bold">10h → 1h</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Data freshness</span>
                    <span className="font-bold">5 days → 24h</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Manual errors</span>
                    <span className="font-bold">15-20/mo → 0</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Business Value
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team visibility</span>
                    <span className="font-bold">+70%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Decision speed</span>
                    <span className="font-bold">5x faster</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Client satisfaction</span>
                    <span className="font-bold">+40%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Strategic Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Real-time campaign optimization replaced delayed post-campaign analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Entire team gained data access, eliminating bottlenecks and enabling autonomy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Cross-platform insights revealed optimization opportunities worth $50K+ annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Client reporting became proactive showcase instead of defensive explanation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6">
                  "This dashboard transformed how we run our agency. We went from spending half our week compiling
                  reports to having instant insights for every campaign. The team can now make data-driven decisions in
                  real-time instead of waiting days for analytics. Our clients love the transparency, and we've
                  identified optimization opportunities we would have completely missed before."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Rachel Thompson</div>
                    <div className="text-sm text-muted-foreground">Director of Analytics, Digital Growth Agency</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Key Learnings & Best Practices</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "Standardizing metric definitions upfront prevents confusion and enables accurate cross-platform comparison",
                    "Automated data validation catches issues early before they propagate to reports",
                    "Daily scheduled runs with historical data archiving ensure data continuity and audit trails",
                    "Clear data quality indicators (actual vs estimated) build trust in automated systems",
                    "User-friendly dashboard design is as important as data accuracy for adoption",
                    "Incremental rollout (starting with 3 platforms, adding more) reduces complexity",
                    "Documentation of API quirks and transformation logic enables team maintenance",
                  ].map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Related Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "CRM Lead Automation", slug: "crm-automation", icon: Building2 },
                { title: "E-commerce Inventory", slug: "ecommerce-sync", icon: ShoppingCart },
                { title: "YouTube Automation", slug: "youtube-automation", icon: Youtube },
              ].map((study, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all group">
                  <CardContent className="pt-6 text-center">
                    <study.icon className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-3">{study.title}</h3>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={`/case-study/${study.slug}`}>
                        View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for a Unified Analytics Dashboard?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can integrate your marketing platforms and automate reporting to save time and
              improve decision-making
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View More Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudyDataDashboard;
