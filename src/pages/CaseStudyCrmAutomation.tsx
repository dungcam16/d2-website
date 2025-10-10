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
  Users,
  DollarSign,
  Zap,
  Phone,
  Target,
  Star,
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
  Database,
  Mail,
  Clock,
  Filter,
  UserPlus,
  Activity,
  Smartphone,
} from "lucide-react";

const CaseStudyCrmAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "CRM Lead Management Automation - Case Study",
    description:
      "How we increased conversion rate by 40% and reduced lead processing time by 75% with centralized CRM automation",
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
    datePublished: "2025-08-01",
    dateModified: "2025-10-10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://d2group.co/case-study/crm-automation",
    },
  };

  return (
    <>
      <SEO
        title="CRM Lead Management Automation - Case Study | D2 Group"
        description="Case study: How we automated end-to-end lead management for a real estate company, increasing conversion by 40% and reducing processing time by 75%"
        keywords="crm automation case study, lead management automation, n8n workflow, sales automation, hubspot integration, lead scoring"
        canonicalUrl="/case-study/crm-automation"
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">CRM Lead Management Automation</h1>
              <p className="text-xl text-muted-foreground">
                How we unified multi-channel leads and automated sales workflows for a real estate company
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
                  <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
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
                      Real estate company with 50+ sales staff managing 800+ monthly leads from multiple channels
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Industry
                    </h4>
                    <p className="text-sm text-muted-foreground">Real Estate / Property Sales</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Duration
                    </h4>
                    <p className="text-sm text-muted-foreground">5 weeks development + ongoing optimization</p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">
                  We built a comprehensive CRM automation system that unified leads from 6 different sources,
                  implemented intelligent scoring and assignment, and automated multi-channel follow-up workflows. The
                  solution increased conversion rate by 40%, reduced lead processing time by 75%, achieved 90% scoring
                  accuracy, and generated $15,000 in additional monthly revenue through faster response times and better
                  lead prioritization.
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
                alt="CRM Automation Workflow"
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
                  <Users className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Fragmented lead data across multiple platforms</h3>
                    <p className="text-muted-foreground">
                      Leads arrived from 6 different sources: company website contact forms, Facebook Lead Ads, Google
                      Ads landing pages, property portal inquiries, walk-in registrations, and referral programs. Each
                      source fed into different systems (website database, Meta Business Suite, Google Sheets,
                      third-party portals, paper forms). Sales team had to manually check multiple platforms daily to
                      avoid missing leads. Approximately 15-20% of leads were lost or significantly delayed due to this
                      fragmentation, costing thousands in missed opportunities.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Manual lead scoring and inconsistent assignment</h3>
                    <p className="text-muted-foreground">
                      No systematic criteria for evaluating lead quality. Sales manager spent 2-3 hours daily manually
                      reviewing leads and assigning to sales staff based on subjective judgment. Assignment was
                      inconsistent - some agents received too many low-quality leads while hot prospects were sometimes
                      assigned to less experienced staff. No prioritization meant high-value leads (luxury properties,
                      cash buyers) received the same treatment as casual inquiries, resulting in poor conversion rates
                      and frustrated top performers.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Delayed and inconsistent follow-up processes</h3>
                    <p className="text-muted-foreground">
                      Zero automation in follow-up sequences meant sales staff had to manually remember to call, email,
                      and message each lead. Average first response time was 4+ hours, far exceeding industry best
                      practice of under 5 minutes. Follow-up was inconsistent - some leads received 10+ touches while
                      others were contacted once and forgotten. No standardized nurture sequences meant messaging varied
                      wildly between agents. Approximately 40% of leads never received any follow-up beyond initial
                      contact, representing massive revenue leakage.
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
                    Centralized Lead Management Hub
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a unified system that captures, enriches, scores, and routes leads automatically from all
                    sources:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Multi-source lead capture:</strong> Webhook integrations automatically funnel leads from
                        website forms (Gravity Forms), Facebook Lead Ads API, Google Forms, Zapier connections to
                        property portals, and manual entry forms directly into HubSpot CRM. All leads centralized within
                        60 seconds of capture.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Automated data enrichment:</strong> API calls to Google Maps (verify addresses, get
                        coordinates), Clearbit (company information for corporate clients), LinkedIn (professional
                        background), and social profiles automatically append valuable context to each lead record.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Intelligent duplicate detection:</strong> Fuzzy matching algorithm checks email, phone
                        number, and name similarity to identify duplicates across sources. Automatically merges records,
                        updates with latest information, and preserves interaction history.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Real-time synchronization:</strong> Bi-directional sync ensures HubSpot, Google Sheets
                        dashboard, Slack team channel, and individual agent apps all display identical up-to-date
                        information, eliminating version conflicts.
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Intelligent Scoring & Assignment</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Multi-Factor Scoring Algorithm
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Weighted scoring model assigns 0-100 points: Lead source quality (40 pts - direct website
                        inquiries score highest), stated budget/property value (30 pts - higher budget = higher score),
                        urgency/timeline (20 pts - immediate buyers prioritized), and engagement indicators (10 pts -
                        multiple page views, form completions, calls). Scores 80+ are "Hot Leads" requiring immediate
                        response, 60-79 "Warm Leads" for same-day follow-up, below 60 "Cold Leads" for nurture
                        sequences.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Smart Territory-Based Assignment
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Automated routing considers: Geographic location matching to agent territories, property type
                        matching to agent specialization (luxury, commercial, residential, investment), current workload
                        (number of active leads per agent), historical conversion performance, and availability status.
                        Round-robin distribution within qualified agents ensures fairness while respecting expertise.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Escalation & Re-assignment Rules
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        If assigned agent doesn't acknowledge within 30 minutes (hot leads) or 4 hours (warm leads),
                        workflow automatically escalates to team leader via Slack and SMS. After 24 hours with no
                        contact, system re-assigns to next available agent with notifications explaining the transfer.
                        All escalations logged for performance review.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Multi-Channel Follow-Up Automation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Personalized email sequences:</strong> Dynamic drip campaigns tailored by segment
                        (first-time buyers get educational content, investors get ROI calculators, upgraders get market
                        comparisons). Behavioral triggers adjust sequence based on link clicks and email opens.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>SMS appointment reminders:</strong> Automated SMS sent 24 hours and 1 hour before
                        property viewings, payment deadlines, document submission dates, and follow-up calls. Two-way
                        SMS enables confirmation and rescheduling.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>WhatsApp rich media:</strong> WhatsApp Business API integration sends property photos,
                        video tours, floor plans, brochures, and virtual walkthrough links. Interactive buttons enable
                        scheduling viewings directly in chat.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Automated call scheduling:</strong> System books calls into Google Calendar based on
                        agent availability and lead preferences, sends calendar invites to both parties with property
                        details, and triggers reminders 1 hour before scheduled time.
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
            <h2 className="text-3xl font-bold mb-6 text-center">Lead Management Workflow</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Multi-Source Capture",
                      desc: "Lead enters from any of 6 sources, webhook triggers instantly",
                      icon: UserPlus,
                    },
                    {
                      step: 2,
                      title: "Data Enrichment",
                      desc: "APIs append company info, social profiles, location data",
                      icon: Database,
                    },
                    {
                      step: 3,
                      title: "Duplicate Check",
                      desc: "Algorithm identifies and merges existing records",
                      icon: Filter,
                    },
                    {
                      step: 4,
                      title: "Intelligent Scoring",
                      desc: "Multi-factor model assigns 0-100 quality score",
                      icon: BarChart3,
                    },
                    {
                      step: 5,
                      title: "Smart Assignment",
                      desc: "Best-fit agent receives instant Slack + SMS notification",
                      icon: Bell,
                    },
                    {
                      step: 6,
                      title: "Automated Follow-Up",
                      desc: "Email, SMS, WhatsApp sequences trigger based on behavior",
                      icon: Mail,
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
                  challenge: "Handling High Volume During Peak Hours (100+ Leads/Hour)",
                  solution:
                    "Implemented asynchronous processing with job queues, parallel API calls for enrichment, and caching layer for frequently accessed data. Optimized database queries with proper indexing.",
                  impact: "Maintained sub-60-second processing time even during peak campaign launches",
                },
                {
                  challenge: "Complex Fuzzy Matching for Duplicate Detection",
                  solution:
                    "Built custom similarity algorithm using Levenshtein distance for names, normalized phone formats, and email domain analysis. Configurable threshold allows tuning precision vs recall.",
                  impact: "97% accuracy in duplicate detection with <3% false positives requiring manual review",
                },
                {
                  challenge: "Multi-Channel API Rate Limits and Reliability",
                  solution:
                    "Designed request queuing system with platform-specific rate limit tracking, exponential backoff retry logic, and graceful degradation when enrichment APIs unavailable.",
                  impact:
                    "99.5% successful lead processing with automated fallback to manual enrichment for edge cases",
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
                    "HubSpot CRM",
                    "Facebook Lead Ads API",
                    "Google Sheets API",
                    "Slack API",
                    "WhatsApp Business API",
                    "Twilio SMS",
                    "Google Analytics",
                    "Clearbit Enrichment",
                    "Zapier",
                    "PostgreSQL",
                    "Redis Cache",
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
                  title: "Discovery & Planning",
                  activities: [
                    "Lead source mapping",
                    "Scoring criteria design",
                    "Workflow requirements",
                    "API documentation",
                  ],
                },
                {
                  phase: "Week 2-3",
                  title: "Core Development",
                  activities: ["Source integrations", "Enrichment pipeline", "Scoring algorithm", "Assignment logic"],
                },
                {
                  phase: "Week 4",
                  title: "Automation Build",
                  activities: ["Follow-up sequences", "Notification system", "Dashboard creation", "Testing"],
                },
                {
                  phase: "Week 5",
                  title: "Deployment & Training",
                  activities: ["Production rollout", "Team training", "Performance monitoring", "Documentation"],
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
                    <span className="font-bold">12% → 17%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Response time</span>
                    <span className="font-bold">4h → 15min</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lead-to-deal rate</span>
                    <span className="font-bold">8% → 14%</span>
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
                    <span className="text-muted-foreground">Revenue increase</span>
                    <span className="font-bold">$15K/month</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time saved per agent</span>
                    <span className="font-bold">10h/week</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ROI after 6 months</span>
                    <span className="font-bold">380%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Operational Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>90% accuracy in lead scoring eliminated wasted effort on low-quality prospects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Zero leads lost due to fragmentation - 100% capture rate across all sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sales team satisfaction increased 45% from reduced manual work and better data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Real-time dashboard enabled data-driven optimization and performance coaching</span>
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
                  "This system revolutionized how we handle leads. We went from chaos - checking six different places
                  for new inquiries - to having everything automatically organized, scored, and assigned. Our agents now
                  respond to hot leads within minutes instead of hours, and the conversion rate jumped 40%. The ROI paid
                  for itself in under 3 months. Best investment we've made in sales technology."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Jennifer Lee</div>
                    <div className="text-sm text-muted-foreground">Head of Sales, Skyline Properties Ltd.</div>
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
                    "Centralization eliminates more problems than optimization - fixing fragmentation had bigger impact than any scoring refinement",
                    "Response speed matters more than perfect matching - 15-minute response with 80% fit beats 4-hour response with perfect fit",
                    "Data enrichment is worth the API costs - additional context dramatically improves scoring accuracy and personalization",
                    "Escalation rules prevent accountability gaps - automated re-assignment ensures no lead falls through cracks",
                    "Multi-channel sequences outperform single channel - combining email, SMS, and WhatsApp increased response rates 3x",
                    "Transparent dashboards create healthy competition among sales team and drive continuous improvement",
                    "Gradual rollout with feedback loops is crucial - pilot with 5 agents, refine, then scale to full team",
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
                { title: "HubSpot Pipeline", slug: "crm-pipeline-builder", icon: Building2 },
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your CRM Process?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can unify your lead sources, automate workflows, and increase conversion rates with
              intelligent CRM automation
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

export default CaseStudyCrmAutomation;
