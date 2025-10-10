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
  Smile,
  Phone,
  Zap,
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
  Mail,
  Clock,
  DollarSign,
  Package,
  Truck,
} from "lucide-react";

const CaseStudyShopifyTracking = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Shopify Order Tracking Automation - Case Study",
    description:
      "How we increased customer satisfaction by 35% and eliminated tracking errors with automated Shopify order sync",
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
    datePublished: "2025-04-15",
    dateModified: "2025-10-10",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://d2group.co/case-study/shopify-tracking-sync",
    },
  };

  return (
    <>
      <SEO
        title="Shopify Order Tracking Automation - Case Study | D2 Group"
        description="Case study: How we automated Shopify order tracking updates to customers, increasing satisfaction by 35% and eliminating manual errors"
        keywords="shopify automation case study, order tracking automation, n8n workflow, ecommerce automation, shopify integration"
        canonicalUrl="/case-study/shopify-tracking-sync"
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Shopify Order Tracking Automation</h1>
              <p className="text-xl text-muted-foreground">
                How we transformed customer communication for a fashion e-commerce brand
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Smile className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">+35%</div>
                  <div className="text-xs text-muted-foreground">Customer Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">-60%</div>
                  <div className="text-xs text-muted-foreground">Support Tickets</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">-50%</div>
                  <div className="text-xs text-muted-foreground">Processing Time</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Error Reduction</div>
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
                      Fashion e-commerce brand with 1,000+ daily orders across multiple sales channels
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Industry
                    </h4>
                    <p className="text-sm text-muted-foreground">E-commerce / Fashion Retail</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Duration
                    </h4>
                    <p className="text-sm text-muted-foreground">2 weeks development + ongoing optimization</p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">
                  We automated the complete order tracking workflow for a fashion e-commerce brand, eliminating manual
                  tracking updates and reducing support tickets by 60%. The solution provides real-time customer
                  notifications, centralized tracking dashboard, and team alerts, resulting in 35% increase in customer
                  satisfaction scores.
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
                alt="Shopify Tracking Workflow"
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
                  <Mail className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Manual tracking updates causing delays and errors</h3>
                    <p className="text-muted-foreground">
                      Customer service team manually copied tracking numbers from supplier emails and sent individual
                      update emails to customers. With 1,000+ orders daily, this process consumed 15+ hours per week and
                      was prone to copy-paste errors, missing updates, and delayed notifications. Customers frequently
                      contacted support asking "Where is my order?" due to lack of proactive communication.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Bell className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">No real-time team visibility into shipments</h3>
                    <p className="text-muted-foreground">
                      Operations team had no centralized dashboard to monitor shipping status across all orders. They
                      relied on manually checking Shopify admin or spreadsheets, leading to missed delivery issues,
                      inability to proactively address delays, and poor coordination between customer service and
                      logistics teams.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">High support ticket volume for order status inquiries</h3>
                    <p className="text-muted-foreground">
                      60% of support tickets were customers asking about their order status and tracking information.
                      This overwhelmed the support team, increased response times, and prevented them from focusing on
                      more complex customer service issues that actually required human attention.
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
                    End-to-End Order Tracking Automation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a complete automated workflow from fulfillment to customer delivery:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Shopify webhook integration:</strong> Automatically captures tracking information when
                        suppliers update fulfillment status, triggering immediate processing without manual intervention
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Google Sheets tracking dashboard:</strong> All tracking data logged to centralized
                        spreadsheet with order details, customer info, carrier, tracking number, and status for easy
                        team monitoring and reporting
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Automated customer notifications:</strong> Branded email templates sent automatically
                        with tracking links, estimated delivery dates, and carrier information the moment tracking is
                        available
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Slack team alerts:</strong> Real-time notifications to operations channel for new
                        shipments, plus daily digest reports with key metrics (shipped, in transit, delivered, delayed)
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Integration Architecture</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Shopify API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Webhook subscriptions for fulfillment events, order management API for fetching order details,
                        customer data retrieval for personalized communications, and inventory sync for stock level
                        tracking.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Google Sheets API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Centralized tracking database with automated data entry, formula-based metrics calculation,
                        conditional formatting for status visualization, and report generation for management reviews.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Slack API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Real-time team notifications with rich message formatting, daily summary reports with charts,
                        interactive buttons for quick actions, and thread-based discussions for specific order issues.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Email Service
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Transactional email delivery with custom branded templates, tracking pixel for open rates,
                        dynamic content personalization, and delivery confirmation tracking.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Smart Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Carrier detection:</strong> Automatically identifies shipping carrier from tracking
                        number format and includes correct tracking URL
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Delay alerts:</strong> Monitors expected vs actual delivery dates and proactively
                        notifies team of potential delays
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Template personalization:</strong> Dynamic email content based on order value, customer
                        tier, and product category
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Error recovery:</strong> Automatic retry for failed email deliveries with logging and
                        alerting
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
            <h2 className="text-3xl font-bold mb-6 text-center">Automation Workflow</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Fulfillment Event",
                      desc: "Supplier updates Shopify order with tracking information",
                      icon: Package,
                    },
                    {
                      step: 2,
                      title: "Webhook Trigger",
                      desc: "Shopify fires webhook to n8n workflow instantly",
                      icon: Settings,
                    },
                    {
                      step: 3,
                      title: "Data Processing",
                      desc: "Extract tracking number, carrier, customer details",
                      icon: Database,
                    },
                    {
                      step: 4,
                      title: "Sheets Logging",
                      desc: "Append tracking data to Google Sheets dashboard",
                      icon: FileText,
                    },
                    {
                      step: 5,
                      title: "Customer Email",
                      desc: "Send branded tracking update to customer",
                      icon: Mail,
                    },
                    {
                      step: 6,
                      title: "Team Notification",
                      desc: "Post shipment alert to Slack operations channel",
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
                  challenge: "Handling Multiple Carriers and Tracking Formats",
                  solution:
                    "Built pattern recognition system to identify carrier from tracking number format, with fallback to manual carrier specification in Shopify",
                  impact: "100% accurate carrier detection and correct tracking URL generation",
                },
                {
                  challenge: "Email Deliverability and Spam Filtering",
                  solution:
                    "Implemented SPF, DKIM, and DMARC authentication, used reputable SMTP provider, and optimized email content to avoid spam triggers",
                  impact: "98.5% delivery rate with <0.1% spam classification",
                },
                {
                  challenge: "High Volume Processing During Peak Sales",
                  solution:
                    "Implemented request queuing and batch processing to handle Black Friday/Cyber Monday spikes of 5,000+ orders per day",
                  impact: "Zero downtime during peak periods with average 30-second processing time",
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
                    "Shopify API",
                    "Google Sheets API",
                    "Slack API",
                    "Webhooks",
                    "SendGrid",
                    "Node.js",
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
                  title: "Foundation & Integration",
                  activities: [
                    "Shopify webhook setup",
                    "Email template design",
                    "Sheets dashboard structure",
                    "n8n workflow skeleton",
                  ],
                },
                {
                  phase: "Week 2",
                  title: "Development & Testing",
                  activities: [
                    "Complete workflow build",
                    "Carrier detection logic",
                    "Email delivery testing",
                    "Load testing",
                  ],
                },
                {
                  phase: "Week 3",
                  title: "Deployment & Training",
                  activities: ["Production deployment", "Team training sessions", "Monitoring setup", "Documentation"],
                },
                {
                  phase: "Ongoing",
                  title: "Optimization",
                  activities: [
                    "Performance monitoring",
                    "Template improvements",
                    "Feature additions",
                    "Analytics tracking",
                  ],
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
                    <Smile className="w-5 h-5 text-primary" />
                    Customer Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Satisfaction score</span>
                    <span className="font-bold">+35%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Support tickets</span>
                    <span className="font-bold">-60%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Email open rate</span>
                    <span className="font-bold">78%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Operational Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Processing time</span>
                    <span className="font-bold">-50%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Manual errors</span>
                    <span className="font-bold">0%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time saved weekly</span>
                    <span className="font-bold">15+ hours</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Business Improvements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Real-time tracking updates replaced 24-48 hour delays in customer communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>CS team redirected 15 hours/week from manual updates to high-value customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Centralized dashboard enabled proactive issue detection and faster resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>100% error elimination improved brand reputation and customer trust</span>
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
                  "The automated tracking system transformed our customer service. We went from manually updating
                  customers about every single shipment to having everything handled automatically. Customer
                  satisfaction scores jumped 35%, and our support team can finally focus on actually helping customers
                  instead of copy-pasting tracking numbers all day."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Jessica Brown</div>
                    <div className="text-sm text-muted-foreground">Operations Manager, Fashion Forward Co.</div>
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
                    "Proactive communication reduces support burden more effectively than reactive responses",
                    "Centralized tracking visibility enables better team coordination and issue prevention",
                    "Email template personalization significantly increases engagement and customer satisfaction",
                    "Webhook-based automation is more reliable than scheduled polling for time-sensitive updates",
                    "Carrier auto-detection saves time but requires comprehensive pattern matching logic",
                    "Peak load handling must be designed from day one for e-commerce automation",
                    "Dashboard analytics help identify process bottlenecks and improvement opportunities",
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
                { title: "E-commerce Inventory Sync", slug: "ecommerce-sync", icon: ShoppingCart },
                { title: "CRM Lead Automation", slug: "crm-automation", icon: Building2 },
                { title: "Slack-Notion Integration", slug: "slack-notion-bot", icon: MessageSquare },
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
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Shopify Store?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can streamline your e-commerce operations and improve customer satisfaction through
              smart automation
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

export default CaseStudyShopifyTracking;
