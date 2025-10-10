import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Building2,
  CheckCircle2,
  ArrowLeft,
  Code,
  TrendingUp,
  Clock,
  Target,
  Phone,
  DollarSign,
  Star,
  Users,
  FileText,
  Settings,
  Bell,
  Lightbulb,
  Youtube,
  ShoppingCart,
  MessageSquare,
  ArrowRight,
  Download,
  Share2,
  Calendar,
  AlertTriangle,
  BarChart3,
  Zap,
  Filter,
  UserPlus,
  Activity,
  Mail,
} from "lucide-react";

const CaseStudyCrmPipeline = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "HubSpot CRM Pipeline Automation - Case Study",
    description:
      "How we increased conversion rate by 40% and reduced lead processing time by 75% with intelligent HubSpot automation",
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
    datePublished: "2025-07-15",
    dateModified: "2025-10-10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://d2group.co/case-study/crm-pipeline-builder",
    },
  };

  return (
    <>
      <SEO
        title="HubSpot CRM Pipeline Automation - Case Study | D2 Group"
        description="Case study: How we automated HubSpot CRM pipeline with intelligent lead scoring and assignment, increasing conversion by 40% and reducing processing time by 75%"
        keywords="hubspot automation case study, crm automation, lead scoring automation, n8n workflow, sales pipeline automation, hubspot integration"
        canonicalUrl="/case-study/crm-pipeline-builder"
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
                <Building2 className="w-4 h-4 mr-2 inline" />
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">HubSpot CRM Pipeline Automation</h1>
              <p className="text-xl text-muted-foreground">
                How we transformed lead management for a 50-person real estate sales team
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">+40%</div>
                  <div className="text-xs text-muted-foreground">Conversion Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">-75%</div>
                  <div className="text-xs text-muted-foreground">Processing Time</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">90%</div>
                  <div className="text-xs text-muted-foreground">Scoring Accuracy</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">$15K</div>
                  <div className="text-xs text-muted-foreground">Monthly Revenue</div>
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
                      Real estate company with 50+ sales agents managing 500+ leads monthly
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Industry
                    </h4>
                    <p className="text-sm text-muted-foreground">Real Estate / B2C Sales</p>
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
                  We built an intelligent HubSpot CRM automation system that revolutionized lead management for a real
                  estate sales team. The solution features AI-powered lead scoring, smart territory-based assignment,
                  automated follow-up workflows, and real-time Slack notifications. Results: 40% increase in conversion
                  rate, 75% reduction in lead processing time, and $15,000 additional monthly revenue from faster lead
                  response.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop"
                alt="CRM Pipeline Workflow"
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
                    <h3 className="font-semibold mb-2">Manual lead assignment causing critical delays</h3>
                    <p className="text-muted-foreground">
                      Sales manager manually reviewed every new lead (500+ monthly) and assigned to agents based on
                      subjective judgment. This process took 2-3 hours daily and introduced 4-6 hour delays before leads
                      were contacted. In real estate, speed kills - competitors who responded within minutes captured
                      deals while this team was still processing assignments. Hot leads went cold waiting for manual
                      distribution.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Inconsistent lead qualification and prioritization</h3>
                    <p className="text-muted-foreground">
                      Without systematic lead scoring, high-value prospects were treated the same as casual inquiries.
                      Sales agents wasted time on low-quality leads while hot prospects didn't receive priority
                      attention. No consistent criteria meant different agents used different qualification approaches,
                      leading to missed opportunities and inefficient resource allocation. Conversion rates suffered as
                      quality leads were lost in the noise.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Bell className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Poor visibility and delayed follow-up</h3>
                    <p className="text-muted-foreground">
                      Sales agents had no real-time notifications when assigned new leads - they relied on manually
                      checking HubSpot throughout the day. Critical tasks like follow-up calls fell through the cracks
                      without automated reminders. Management lacked visibility into response times, lead status, and
                      team performance. Many leads were never contacted at all, and those that were faced 24-48 hour
                      response delays instead of the industry-standard sub-5-minute response.
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
                    Intelligent Lead Management System
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a comprehensive automation system that handles lead intake, scoring, routing, and follow-up:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>AI-powered lead scoring:</strong> Machine learning algorithm analyzes behavior (website
                        visits, page views, time on site), demographics (budget, location, property type), engagement
                        (email opens, form submissions, phone calls), and urgency indicators to assign 0-100 scores. Hot
                        leads (80+) trigger immediate alerts.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Smart territory-based assignment:</strong> Automated routing to correct sales agent
                        based on property location, lead source, agent specialization, current workload, and performance
                        metrics. Round-robin distribution ensures fair allocation while respecting expertise and
                        availability.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Automated follow-up sequences:</strong> Pre-built email and task sequences trigger based
                        on lead behavior and stage. Reminders, appointment scheduling, document requests, and nurture
                        campaigns execute automatically, ensuring no lead falls through cracks.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Real-time Slack notifications:</strong> Instant alerts to assigned agents when hot leads
                        arrive, with lead details, score, contact info, and one-click actions to call or email. Team
                        channel updates track pipeline movement and celebrate wins.
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Workflow Components</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        HubSpot CRM API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Contact management, deal pipeline, custom properties for scoring, workflow triggers, task
                        automation, and reporting. OAuth2 authentication ensures secure access to customer data.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Zapier Integration Layer
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Connects HubSpot with email systems (Gmail, Outlook), calendar (Google Calendar), phone systems
                        (RingCentral), SMS (Twilio), and other business tools. Enables cross-platform automation without
                        custom API development.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Slack Notifications
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Real-time team notifications with rich formatting, interactive buttons for quick actions (claim
                        lead, mark contacted, schedule meeting), threaded discussions for collaboration, and automated
                        status updates.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        n8n Orchestration
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Central workflow engine coordinating all integrations, executing scoring algorithms, managing
                        routing logic, triggering sequences, and handling error recovery. Provides monitoring dashboard
                        and audit logs.
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
                        <strong>Predictive analytics:</strong> ML model predicts conversion probability based on
                        historical data, helping prioritize efforts on high-likelihood opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Dynamic workload balancing:</strong> Monitors each agent's current lead count and stage
                        distribution, adjusting assignments to prevent overload
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Automated re-assignment:</strong> If agent doesn't respond within SLA (5 min for hot
                        leads), automatically escalates to backup or manager
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Performance dashboards:</strong> Real-time metrics on response times, conversion rates,
                        pipeline velocity, and agent leaderboards
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
            <h2 className="text-3xl font-bold mb-6 text-center">Lead Processing Workflow</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Lead Capture",
                      desc: "New lead enters HubSpot from website form, phone call, or referral",
                      icon: UserPlus,
                    },
                    {
                      step: 2,
                      title: "Instant Scoring",
                      desc: "AI algorithm analyzes lead data and assigns 0-100 quality score",
                      icon: BarChart3,
                    },
                    {
                      step: 3,
                      title: "Smart Routing",
                      desc: "System assigns to best-fit agent based on territory and workload",
                      icon: Filter,
                    },
                    {
                      step: 4,
                      title: "Slack Alert",
                      desc: "Agent receives instant notification with lead details and action buttons",
                      icon: Bell,
                    },
                    {
                      step: 5,
                      title: "Automated Tasks",
                      desc: "Follow-up sequence triggers with reminders and scheduled activities",
                      icon: Settings,
                    },
                    {
                      step: 6,
                      title: "Performance Tracking",
                      desc: "System monitors response time, updates pipeline, logs all interactions",
                      icon: Activity,
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
                  challenge: "Complex Lead Scoring Logic Across Multiple Data Points",
                  solution:
                    "Built weighted scoring model with configurable rules, trained on historical conversion data, with fallback to rule-based scoring for new lead types. Implemented A/B testing framework to continuously improve accuracy.",
                  impact: "90% scoring accuracy with 15% improvement in conversion prediction vs manual qualification",
                },
                {
                  challenge: "Territory Assignment with Multiple Overlapping Criteria",
                  solution:
                    "Designed priority-based decision tree accounting for location, specialization, language, current load, past performance, and availability. Created conflict resolution logic and manual override capability.",
                  impact: "95% automated assignment success rate, <5% requiring manual intervention",
                },
                {
                  challenge: "Real-Time Performance at Scale (500+ Leads Monthly)",
                  solution:
                    "Implemented asynchronous processing, caching layers for frequently accessed data, and webhook-based triggers instead of polling. Optimized API calls with batching and parallel execution.",
                  impact: "Sub-30-second processing time even during peak lead influx periods",
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
                    "HubSpot CRM API",
                    "Zapier",
                    "Slack API",
                    "OAuth2",
                    "Webhooks",
                    "Python ML Models",
                    "PostgreSQL",
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
                  title: "Discovery & Design",
                  activities: [
                    "Process mapping",
                    "Scoring model design",
                    "Territory rules definition",
                    "Workflow planning",
                  ],
                },
                {
                  phase: "Week 2-3",
                  title: "Development",
                  activities: [
                    "HubSpot integration",
                    "Scoring algorithm build",
                    "Assignment logic",
                    "Slack notifications",
                  ],
                },
                {
                  phase: "Week 4",
                  title: "Testing & Launch",
                  activities: ["UAT with sales team", "Scoring calibration", "Training sessions", "Phased rollout"],
                },
                {
                  phase: "Ongoing",
                  title: "Optimization",
                  activities: ["Performance monitoring", "Model retraining", "Rule adjustments", "Feature additions"],
                },
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary font-bold text-lg min-w-[90px]">{item.phase}</div>
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
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Sales Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Conversion rate</span>
                    <span className="font-bold">18% → 25%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lead processing time</span>
                    <span className="font-bold">4h → 1h</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lead scoring accuracy</span>
                    <span className="font-bold">90%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Business Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Additional revenue</span>
                    <span className="font-bold">$15K/month</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Response time</span>
                    <span className="font-bold">&lt;5 min</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team efficiency</span>
                    <span className="font-bold">2x</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Operational Improvements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Eliminated 3-hour daily manual lead distribution workload for sales manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Response time improved from 4-6 hours to under 5 minutes for hot leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fair lead distribution increased team morale and reduced territory disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Data-driven insights enabled coaching and performance improvement</span>
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
                  "This system completely changed our sales game. We went from losing hot leads to competitors because
                  of slow response times, to having agents on the phone with prospects within minutes. The intelligent
                  scoring means our best agents focus on the best opportunities. Our conversion rate jumped 40% and
                  we're closing an extra $15,000 in commissions every month. Best ROI of any technology investment we've
                  made."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Marcus Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Sales Director, Premier Realty Group</div>
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
                    "Lead scoring accuracy improves dramatically when trained on actual conversion data vs theoretical rules",
                    "Response time is the #1 factor in real estate conversion - sub-5-minute target is critical",
                    "Balanced workload distribution prevents agent burnout and improves team performance",
                    "Real-time Slack notifications dramatically outperform email for immediate action triggers",
                    "Automated follow-up sequences ensure consistency while freeing agents for high-value activities",
                    "Transparent performance dashboards create healthy competition and accountability",
                    "Manual override capabilities build trust in automation systems during transition period",
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
                { title: "Slack-Notion Integration", slug: "slack-notion-bot", icon: MessageSquare },
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
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your CRM Pipeline?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can automate lead management and increase your sales team's conversion rate with
              intelligent HubSpot automation
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

export default CaseStudyCrmPipeline;
