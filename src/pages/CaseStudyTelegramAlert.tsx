import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  MessageSquare,
  CheckCircle2,
  ArrowLeft,
  Code,
  TrendingUp,
  Clock,
  Zap,
  Phone,
  Activity,
  Star,
  Users,
  Database,
  Settings,
  Bell,
  Lightbulb,
  Building2,
  ShoppingCart,
  Youtube,
  ArrowRight,
  Download,
  Share2,
  Calendar,
  Target,
  AlertTriangle,
  Webhook,
  BarChart3,
  Shield,
} from "lucide-react";

const CaseStudyTelegramAlert = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Telegram Real-Time Alert System - Case Study",
    description: "How we achieved <2s alert delay and 99.9% uptime with Telegram bot automation",
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
    datePublished: "2025-02-20",
    dateModified: "2025-10-10",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://d2group.co/case-study/telegram-alert-system",
    },
  };

  return (
    <>
      <SEO
        title="Telegram Real-Time Alert System - Case Study | D2 Group"
        description="Case study: How we built a real-time business alert system with <2s delay and 99.9% uptime using Telegram bot and n8n webhooks"
        keywords="telegram bot case study, real-time alerts, n8n workflow, notification system, webhook automation, business monitoring"
        canonicalUrl="/case-study/telegram-alert-system"
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
                <MessageSquare className="w-4 h-4 mr-2 inline" />
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Telegram Real-Time Alert System</h1>
              <p className="text-xl text-muted-foreground">
                How we achieved sub-2-second alert delivery and 99.9% uptime for a SaaS analytics platform
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">&lt;2s</div>
                  <div className="text-xs text-muted-foreground">Alert Speed</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Activity className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">-80%</div>
                  <div className="text-xs text-muted-foreground">MTTR</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-primary" />
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
                      SaaS analytics platform serving 500+ enterprise customers
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Industry
                    </h4>
                    <p className="text-sm text-muted-foreground">Business Intelligence & Analytics</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Duration
                    </h4>
                    <p className="text-sm text-muted-foreground">2 weeks development + ongoing support</p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">
                  We built a real-time Telegram notification system that delivers critical business alerts in under 2
                  seconds, replacing a slow email-based system. The solution achieved 99.9% uptime and reduced mean time
                  to response (MTTR) by 80%, enabling faster incident response and better business decision-making.
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
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop"
                alt="Telegram Alert Workflow"
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
                  <Clock className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Delayed awareness of critical system issues</h3>
                    <p className="text-muted-foreground">
                      Email notifications had 5-10 minute delays, preventing the team from responding quickly to
                      critical business events like traffic spikes, server errors, payment failures, or SLA violations.
                      This resulted in customer impact and potential revenue loss.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Activity className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Fragmented alert channels</h3>
                    <p className="text-muted-foreground">
                      Alerts came from multiple sources (email, SMS, app notifications, Slack) making it difficult to
                      centralize monitoring. Team members missed important alerts due to notification fatigue and lack
                      of priority classification.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">No alert history or analytics</h3>
                    <p className="text-muted-foreground">
                      Previous system didn't log alert history, making it impossible to analyze patterns, identify
                      recurring issues, or measure response times. No way to generate incident reports or track team
                      performance.
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
                    Real-Time Telegram Alert System
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a webhook-based notification system with intelligent routing and real-time delivery:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Webhook triggers:</strong> n8n workflows listen to events from multiple data sources
                        (database changes, API calls, monitoring tools) with instant activation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Smart routing:</strong> Alert classification by severity (critical, warning, info) with
                        different Telegram channels for different alert types and team responsibilities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Rich formatting:</strong> Markdown-formatted messages with inline buttons for quick
                        actions (acknowledge, escalate, view details, mute)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Interactive bot:</strong> Team can query metrics, check system status, and control alert
                        preferences directly through Telegram commands
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">System Architecture</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Telegram Bot API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Message delivery, inline keyboards, bot commands for team interaction. Supports message editing
                        for status updates and file attachments for logs/screenshots.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        PostgreSQL Database
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Event logging with full history, alert metadata, response times, and team actions. Enables
                        analytics dashboards and incident reports.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Webhook Infrastructure
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Real-time event streaming from application servers, monitoring tools (Prometheus, Datadog),
                        payment gateways, and custom business logic.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Advanced Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Alert aggregation:</strong> Combines multiple related events into single digest messages
                        to prevent spam during incident storms
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Escalation workflows:</strong> Auto-escalate unacknowledged critical alerts after 5
                        minutes to senior team members
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Custom alert rules:</strong> Business-specific thresholds and conditions (e.g., "Alert
                        if error rate &gt; 5% for 2 minutes")
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Quiet hours:</strong> Configurable do-not-disturb schedules for non-critical alerts
                        during off-hours
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
            <h2 className="text-3xl font-bold mb-6 text-center">Alert Workflow</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Event Detection",
                      desc: "System monitors trigger threshold violations or critical events",
                      icon: Activity,
                    },
                    {
                      step: 2,
                      title: "Webhook Activation",
                      desc: "Event fires webhook to n8n workflow instantly",
                      icon: Webhook,
                    },
                    {
                      step: 3,
                      title: "Alert Processing",
                      desc: "n8n classifies severity, formats message, determines routing",
                      icon: Settings,
                    },
                    {
                      step: 4,
                      title: "Telegram Delivery",
                      desc: "Bot sends formatted alert to appropriate channel <2s",
                      icon: MessageSquare,
                    },
                    {
                      step: 5,
                      title: "Database Logging",
                      desc: "Event logged to PostgreSQL for analytics and reporting",
                      icon: Database,
                    },
                    {
                      step: 6,
                      title: "Team Response",
                      desc: "Team acknowledges via bot, triggering status updates",
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
                  challenge: "Telegram API Rate Limits",
                  solution:
                    "Implemented request queuing with rate limit tracking, message batching for multiple alerts, and fallback to secondary notification channels",
                  impact: "Zero message delivery failures, 100% alert delivery success rate",
                },
                {
                  challenge: "Alert Storm Management",
                  solution:
                    "Created smart aggregation logic to combine related events, suppress duplicate alerts within time windows, and progressive digest summaries",
                  impact: "Reduced notification spam by 90% during incidents while maintaining awareness",
                },
                {
                  challenge: "Database Performance at Scale",
                  solution:
                    "Optimized PostgreSQL with proper indexing, implemented connection pooling, and set up asynchronous logging to prevent blocking",
                  impact: "Handles 10,000+ events/hour with <100ms write latency",
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
                    "Telegram Bot API",
                    "PostgreSQL",
                    "Webhooks",
                    "Node.js",
                    "Docker",
                    "Redis",
                    "Prometheus",
                    "Nginx",
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
                  title: "Foundation & Core Setup",
                  activities: [
                    "Requirements analysis",
                    "Telegram bot setup",
                    "Webhook infrastructure",
                    "Database schema design",
                  ],
                },
                {
                  phase: "Week 2",
                  title: "Development & Testing",
                  activities: ["n8n workflow build", "Alert routing logic", "Bot command handlers", "Load testing"],
                },
                {
                  phase: "Week 3",
                  title: "Deployment & Monitoring",
                  activities: ["Production deployment", "Team training", "Performance monitoring", "Documentation"],
                },
                {
                  phase: "Ongoing",
                  title: "Support & Enhancement",
                  activities: ["24/7 monitoring", "Bug fixes", "Feature additions", "Performance tuning"],
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
                    <Zap className="w-5 h-5 text-primary" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Alert delivery</span>
                    <span className="font-bold">5-10 min → &lt;2s</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Mean time to response</span>
                    <span className="font-bold">-80%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">System uptime</span>
                    <span className="font-bold">99.9%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Business Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Incident resolution</span>
                    <span className="font-bold">60% faster</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Missed critical alerts</span>
                    <span className="font-bold">0 in 12 months</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Customer satisfaction</span>
                    <span className="font-bold">+25%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Reliability Improvements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 automated monitoring with zero missed critical business events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Centralized alert history enabling pattern analysis and incident reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Team response time improved 80% through instant mobile notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Smart aggregation reduced notification fatigue by 90% during incident storms</span>
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
                  "The Telegram alert system completely transformed our incident response. We went from finding out
                  about issues 10 minutes too late via email, to getting instant notifications we can't ignore. The
                  99.9% uptime speaks for itself - this system just works, reliably, 24/7."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Alex Martinez</div>
                    <div className="text-sm text-muted-foreground">VP of Engineering, Analytics Platform Inc.</div>
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
                    "Webhook-based architecture is superior to polling for real-time responsiveness",
                    "Always implement rate limiting and request queuing when working with external APIs",
                    "Alert aggregation is critical to prevent notification fatigue during incidents",
                    "Database logging enables valuable incident analysis and team performance metrics",
                    "Interactive bot commands significantly improve team workflow efficiency",
                    "Escalation workflows ensure critical alerts are never missed",
                    "Comprehensive monitoring of the monitoring system itself prevents blind spots",
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
                { title: "YouTube Automation", slug: "youtube-automation", icon: Youtube },
                { title: "CRM Lead System", slug: "crm-automation", icon: Building2 },
                { title: "E-commerce Sync", slug: "ecommerce-sync", icon: ShoppingCart },
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
            <h2 className="text-3xl font-bold mb-4">Need a Real-Time Notification System?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert consultation on building reliable alert automation for your business monitoring needs
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

export default CaseStudyTelegramAlert;
