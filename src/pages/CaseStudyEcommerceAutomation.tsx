import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  ShoppingCart,
  CheckCircle2,
  ArrowLeft,
  Code,
  TrendingUp,
  Package,
  DollarSign,
  Zap,
  Phone,
  Clock,
  Star,
  Users,
  FileText,
  Settings,
  Bell,
  Lightbulb,
  Youtube,
  Building2,
  MessageSquare,
  ArrowRight,
  Download,
  Share2,
  Calendar,
  Target,
  AlertTriangle,
  BarChart3,
  Database,
  Truck,
  AlertCircle,
  Activity,
} from "lucide-react";

const CaseStudyEcommerceAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "E-commerce Multi-Store Inventory Automation - Case Study",
    description:
      "How we reduced stockouts by 90% and cut holding costs by 30% with real-time multi-channel inventory sync",
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
    datePublished: "2025-05-20",
    dateModified: "2025-10-10",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://d2group.co/case-study/ecommerce-automation",
    },
  };

  return (
    <>
      <SEO
        title="E-commerce Multi-Store Inventory Automation - Case Study | D2 Group"
        description="Case study: How we automated inventory management across 4 sales channels, reducing stockouts by 90% and achieving 100% stock accuracy for 1,000+ SKUs"
        keywords="ecommerce automation case study, inventory management automation, multi-channel sync, n8n workflow, stock automation, woocommerce integration"
        canonicalUrl="/case-study/ecommerce-automation"
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
                <ShoppingCart className="w-4 h-4 mr-2 inline" />
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                E-commerce Multi-Store Inventory Automation
              </h1>
              <p className="text-xl text-muted-foreground">
                How we unified inventory management across 4 sales channels for 1,000+ SKUs
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">-90%</div>
                  <div className="text-xs text-muted-foreground">Stockouts</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">-30%</div>
                  <div className="text-xs text-muted-foreground">Holding Costs</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Stock Accuracy</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Monitoring</div>
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
                      Multi-channel e-commerce retailer with 1,000+ SKUs selling across website, Shopee, Lazada, and
                      TikTok Shop
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Industry
                    </h4>
                    <p className="text-sm text-muted-foreground">E-commerce Retail / Consumer Goods</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Duration
                    </h4>
                    <p className="text-sm text-muted-foreground">4 weeks development + ongoing optimization</p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">
                  We built a comprehensive real-time inventory synchronization system that unified stock management
                  across 4 major sales channels. The solution eliminated manual stock updates, reduced stockouts by 90%,
                  achieved 100% stock accuracy, and cut inventory holding costs by 30% through intelligent reorder
                  automation and predictive analytics.
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop"
                alt="E-commerce Automation Workflow"
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
                  <Package className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Manual inventory tracking unable to keep pace</h3>
                    <p className="text-muted-foreground">
                      With 1,000+ SKUs sold across website (WooCommerce), Shopee, Lazada, and TikTok Shop, manual stock
                      updates via Excel spreadsheets meant data was always outdated. Staff spent 3-4 hours daily
                      exporting reports from multiple platforms and manually reconciling discrepancies. By the time
                      stock levels were updated, they were already inaccurate, leading to overselling and customer
                      complaints.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">High stockout frequency causing revenue loss</h3>
                    <p className="text-muted-foreground">
                      20-30% of best-selling products experienced stockouts weekly due to inability to monitor stock
                      levels in real-time. Customers placed orders only to have them cancelled due to out-of-stock
                      situations, severely impacting customer satisfaction and brand reputation. Estimated revenue loss
                      was $8,000-$10,000 monthly from missed sales opportunities.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Inefficient supplier communication and reordering</h3>
                    <p className="text-muted-foreground">
                      Purchasing team manually checked stock levels and sent ad-hoc emails to suppliers for reorders.
                      Without standardized processes or optimal reorder calculations, this resulted in delays (3-5 day
                      lead time to create POs), overstocking of slow-moving items tying up $50,000+ in capital, and
                      understocking of fast-moving items causing stockouts.
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
                    Unified Real-Time Inventory System
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a centralized inventory hub that automatically synchronizes stock data across all sales
                    channels and provides intelligent reorder automation:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Multi-channel integration:</strong> n8n workflows connect to WooCommerce (main website),
                        Shopee Open Platform, Lazada Open Platform, and TikTok Shop API, pulling inventory data every 15
                        minutes with webhook support for real-time order updates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Centralized PostgreSQL database:</strong> Single source of truth for all stock levels
                        with complete history tracking, audit logs, and transactional integrity to prevent race
                        conditions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Real-time bi-directional sync:</strong> When orders occur on any channel, workflow
                        instantly deducts stock and propagates updated levels to all platforms within 60 seconds,
                        preventing overselling
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Live dashboard visualization:</strong> Google Sheets dashboard with auto-updating charts
                        showing stock levels, low stock alerts, sales velocity metrics, and inventory value by category
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Intelligent Reorder Automation</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Smart Threshold Algorithm
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Calculates optimal reorder points based on 30-day historical sales velocity, supplier lead times
                        (3-7 days depending on item category), and seasonal trend analysis. Fast-moving items have lower
                        safety stock thresholds while slow-movers have higher thresholds to optimize working capital
                        allocation.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Automated Purchase Orders
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        When stock reaches reorder point, workflow automatically generates purchase orders with optimal
                        quantities using Economic Order Quantity (EOQ) model, sends formatted emails to suppliers with
                        complete specifications, delivery requirements, and payment terms. Suppliers simply confirm via
                        reply.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Supplier Communication Hub
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Integrated email automation and Telegram bot for suppliers to confirm orders, update shipping
                        status, and upload invoices. All communications automatically logged to database with tracking
                        numbers, ensuring full visibility into procurement pipeline.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Advanced Monitoring & Alerts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Low stock alerts:</strong> Instant Telegram notifications when stock levels fall below
                        threshold, including product details, current stock, estimated runout date based on velocity,
                        and one-click PO generation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Overstock warnings:</strong> Automated alerts for items with no sales in 60 days,
                        suggesting promotional campaigns or bundle deals to clear dead stock and free up capital
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Discrepancy detection:</strong> Automated comparison of stock levels between all
                        platforms and central database every hour, with immediate alerts for mismatches to investigate
                        and resolve
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Daily executive reports:</strong> Automated morning emails with KPI dashboard showing
                        top-selling products, stock turnover rates, pending purchase orders, total inventory value, and
                        cash flow projections
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
            <h2 className="text-3xl font-bold mb-6 text-center">Synchronization Workflow</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Order Capture",
                      desc: "Customer places order on any sales channel (website/marketplace)",
                      icon: ShoppingCart,
                    },
                    {
                      step: 2,
                      title: "Webhook Trigger",
                      desc: "Platform fires webhook to n8n instantly with order details",
                      icon: Settings,
                    },
                    {
                      step: 3,
                      title: "Stock Deduction",
                      desc: "Central database updates stock levels atomically",
                      icon: Database,
                    },
                    {
                      step: 4,
                      title: "Multi-Channel Sync",
                      desc: "Updated stock propagated to all other sales channels",
                      icon: Activity,
                    },
                    {
                      step: 5,
                      title: "Threshold Check",
                      desc: "System checks if stock dropped below reorder point",
                      icon: BarChart3,
                    },
                    {
                      step: 6,
                      title: "Alert & Reorder",
                      desc: "If needed, alert team and auto-generate supplier PO",
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
                  challenge: "Race Conditions and Overselling",
                  solution:
                    "Implemented database-level transactions with row-level locking, optimistic concurrency control, and inventory reservation system during checkout process",
                  impact: "Zero overselling incidents in 6 months of operation",
                },
                {
                  challenge: "API Rate Limits Across Multiple Platforms",
                  solution:
                    "Built intelligent request queuing with platform-specific rate limit tracking, exponential backoff retry logic, and batch operations to minimize API calls",
                  impact: "99.8% sync success rate within rate limit constraints",
                },
                {
                  challenge: "Data Consistency Across Heterogeneous Systems",
                  solution:
                    "Designed idempotent sync operations, implemented checksum verification, and created automated reconciliation jobs to detect and correct drift",
                  impact: "Maintained 99.5%+ consistency with automated drift correction",
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
                    "WooCommerce API",
                    "Shopee Open Platform",
                    "Lazada Open Platform",
                    "TikTok Shop API",
                    "PostgreSQL",
                    "Google Sheets API",
                    "Telegram Bot API",
                    "SendGrid",
                    "Docker",
                    "Redis Cache",
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
                  title: "Platform Integration",
                  activities: ["API authentication", "Data mapping design", "Database schema", "Webhook setup"],
                },
                {
                  phase: "Week 2",
                  title: "Core Sync Development",
                  activities: [
                    "Bi-directional sync logic",
                    "Transaction handling",
                    "Race condition prevention",
                    "Error recovery",
                  ],
                },
                {
                  phase: "Week 3",
                  title: "Reorder Automation",
                  activities: ["Threshold algorithm", "PO generation", "Supplier integration", "Alert system"],
                },
                {
                  phase: "Week 4",
                  title: "Testing & Deployment",
                  activities: ["Load testing", "Data migration", "Team training", "Gradual rollout"],
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
                    <Package className="w-5 h-5 text-primary" />
                    Inventory Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Stockout frequency</span>
                    <span className="font-bold">25% → 2.5%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Stock accuracy</span>
                    <span className="font-bold">85% → 99.5%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Inventory turnover</span>
                    <span className="font-bold">4x → 6.5x/year</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Financial Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Holding cost reduction</span>
                    <span className="font-bold">-30%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lost sales prevention</span>
                    <span className="font-bold">$8K/month</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time saved</span>
                    <span className="font-bold">20 hrs/week</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Operational Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>100% stock accuracy across all channels with zero overselling incidents in 6 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 automated monitoring - team only responds to alerts instead of manual checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Improved supplier relationships through standardized communication and faster payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Data-driven decisions enabled by real-time dashboards and predictive analytics</span>
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
                  "This system completely transformed our inventory management. We went from constant stockouts and
                  angry customers to having perfect stock visibility across all our channels. The automated reordering
                  alone saved us 20 hours per week, and we've freed up $50,000 in working capital by optimizing stock
                  levels. Best investment we've made."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">David Wong</div>
                    <div className="text-sm text-muted-foreground">Operations Director, MultiChannel Retail Co.</div>
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
                    "Database transactions and locking are critical to prevent race conditions in inventory systems",
                    "Webhook-based real-time sync is superior to polling for inventory accuracy",
                    "Intelligent reorder algorithms reduce both stockouts and excess inventory simultaneously",
                    "Platform-specific API quirks require individual handling strategies",
                    "Automated reconciliation jobs are essential insurance against sync drift",
                    "Dashboard visibility enables proactive management vs reactive firefighting",
                    "Supplier integration quality directly impacts reorder efficiency and relationship strength",
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
                { title: "Shopify Order Tracking", slug: "shopify-tracking-sync", icon: ShoppingCart },
                { title: "CRM Lead Automation", slug: "crm-automation", icon: Building2 },
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
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your E-commerce Inventory?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can build a custom inventory automation system to reduce stockouts and optimize
              working capital for your business
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

export default CaseStudyEcommerceAutomation;
