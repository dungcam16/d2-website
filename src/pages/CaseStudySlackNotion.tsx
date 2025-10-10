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
  Users,
  Star,
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
  BarChart3,
  Database,
  GitBranch,
  DollarSign,
} from "lucide-react";

const CaseStudySlackNotion = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Slack & Notion Integration Bot - Case Study",
    description:
      "How we increased team efficiency by 60% and reduced manual work by 90% with automated Slack-Notion sync",
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
    datePublished: "2025-03-10",
    dateModified: "2025-10-10",
    image: "https://images.unsplash.com/photo-1581092334538-6a7f1f57c6f5",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://d2group.co/case-study/slack-notion-bot",
    },
  };

  return (
    <>
      <SEO
        title="Slack & Notion Integration Bot - Case Study | D2 Group"
        description="Case study: How we automated task synchronization between Slack and Notion, increasing team efficiency by 60% and reducing manual input by 90%"
        keywords="slack automation case study, notion integration, n8n workflow, team collaboration automation, slack bot, notion sync"
        canonicalUrl="/case-study/slack-notion-bot"
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Slack & Notion Integration Bot</h1>
              <p className="text-xl text-muted-foreground">
                How we unified team communication and project management with intelligent automation
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">+60%</div>
                  <div className="text-xs text-muted-foreground">Team Efficiency</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">-90%</div>
                  <div className="text-xs text-muted-foreground">Manual Input</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-xs text-muted-foreground">Adoption Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <BarChart3 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Sync Accuracy</div>
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
                      Fast-growing tech startup with 25 employees across product, engineering, and operations
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Industry
                    </h4>
                    <p className="text-sm text-muted-foreground">SaaS / Team Collaboration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Duration
                    </h4>
                    <p className="text-sm text-muted-foreground">3 weeks development + ongoing optimization</p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">
                  We built an intelligent Slack-Notion synchronization bot that eliminated duplicate task entry, unified
                  team communication and project tracking, and increased overall team productivity by 60%. The bot
                  handles bi-directional sync, smart task creation, and automated status updates with 98% team adoption
                  rate.
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
                src="https://images.unsplash.com/photo-1581092334538-6a7f1f57c6f5?w=1200&auto=format&fit=crop"
                alt="Slack Notion Bot Workflow"
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
                    <h3 className="font-semibold mb-2">Fragmented communication and task management</h3>
                    <p className="text-muted-foreground">
                      The team used Slack for real-time communication but managed all project tasks and documentation in
                      Notion. This created information silos - conversations happened in Slack but action items lived in
                      Notion, making it difficult to track context and progress. Team members constantly switched
                      between tools, losing valuable time and mental focus.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Duplicate manual task entry across platforms</h3>
                    <p className="text-muted-foreground">
                      Every task required double entry: team members discussed tasks in Slack channels, then manually
                      copied information to Notion databases for tracking. This duplication consumed 30+ minutes daily
                      per person and led to inconsistencies when updates weren't synced properly between platforms.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">No automated status updates or notifications</h3>
                    <p className="text-muted-foreground">
                      When task statuses changed in Notion, team members working primarily in Slack had no visibility
                      into updates without manually checking Notion. This delayed responses to blockers and created
                      communication gaps that slowed down project velocity.
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
                    Intelligent Slack-Notion Automation Bot
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a comprehensive integration that seamlessly connects Slack and Notion workflows:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Bi-directional synchronization:</strong> Automatic sync of messages from Slack channels
                        to Notion databases and vice versa. Any update in either platform reflects instantly in the
                        other, maintaining single source of truth.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Slash command task creation:</strong> Team members use simple /task commands in Slack to
                        instantly create tasks in Notion with all relevant metadata (assignee, priority, deadline,
                        tags).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Smart status notifications:</strong> When task status changes in Notion (To Do → In
                        Progress → Done), bot automatically posts formatted updates to relevant Slack channels with
                        @mentions.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Context preservation:</strong> Links Slack thread IDs to Notion task pages, preserving
                        full conversation context and enabling one-click navigation between platforms.
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">API Integration Architecture</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Slack API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Event subscriptions for message capture, slash commands for task creation, interactive message
                        components for quick actions (assign, prioritize, close), and OAuth2 authentication for secure
                        workspace access.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Notion API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Database queries for retrieving tasks, page creation and updates for task management, property
                        management for metadata sync (status, assignee, dates), and relation handling for linking tasks
                        to projects.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        n8n Workflow Engine
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Orchestrates all integrations with trigger-based automation, handles error recovery and retry
                        logic, manages rate limiting, and provides monitoring dashboard for health checks.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Smart field mapping:</strong> Automatically extracts and maps relevant data from Slack
                        messages to appropriate Notion properties
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Duplicate detection:</strong> Prevents redundant task creation by checking for existing
                        tasks with similar content
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Customizable templates:</strong> Team can configure task templates with default values
                        for different project types
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Rich formatting preservation:</strong> Maintains markdown formatting, code blocks, and
                        file attachments across platforms
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
            <h2 className="text-3xl font-bold mb-6 text-center">Integration Workflow</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Slack Event Trigger",
                      desc: "User creates task via slash command or reacts to message",
                      icon: MessageSquare,
                    },
                    {
                      step: 2,
                      title: "n8n Processing",
                      desc: "Workflow extracts data, validates format, maps to Notion schema",
                      icon: Settings,
                    },
                    {
                      step: 3,
                      title: "Notion Task Creation",
                      desc: "Creates page in Notion database with all metadata",
                      icon: FileText,
                    },
                    {
                      step: 4,
                      title: "Confirmation Message",
                      desc: "Bot posts confirmation in Slack with link to Notion task",
                      icon: Bell,
                    },
                    {
                      step: 5,
                      title: "Status Monitoring",
                      desc: "Watches Notion database for status changes",
                      icon: Database,
                    },
                    {
                      step: 6,
                      title: "Update Notification",
                      desc: "Posts status change updates back to Slack channel",
                      icon: GitBranch,
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
                  challenge: "Rate Limiting Across Two APIs",
                  solution:
                    "Implemented intelligent request queuing and caching strategy to batch operations and stay within both Slack and Notion rate limits without blocking workflows",
                  impact: "100% uptime with zero API throttling incidents",
                },
                {
                  challenge: "Data Schema Mapping Complexity",
                  solution:
                    "Created flexible field mapping system with custom transformation rules for different task types, allowing team to configure mappings without code changes",
                  impact: "98% accurate automatic field population, 2% manual adjustments",
                },
                {
                  challenge: "Real-time Sync Performance",
                  solution:
                    "Leveraged webhooks instead of polling, implemented delta sync to only update changed fields, and added local caching layer to reduce API calls",
                  impact: "Sub-second sync latency for 95% of operations",
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
                    "Slack API",
                    "Notion API",
                    "Node.js",
                    "Webhooks",
                    "OAuth2",
                    "Redis Cache",
                    "PostgreSQL",
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
                  title: "Discovery & Setup",
                  activities: [
                    "Workflow analysis",
                    "API authentication",
                    "Schema mapping design",
                    "Prototype development",
                  ],
                },
                {
                  phase: "Week 2",
                  title: "Core Development",
                  activities: [
                    "Bi-directional sync build",
                    "Slash command handlers",
                    "Status notification logic",
                    "Error handling",
                  ],
                },
                {
                  phase: "Week 3",
                  title: "Testing & Rollout",
                  activities: ["User acceptance testing", "Performance tuning", "Team training", "Gradual rollout"],
                },
                {
                  phase: "Ongoing",
                  title: "Optimization",
                  activities: [
                    "Feature enhancements",
                    "Template additions",
                    "Performance monitoring",
                    "User feedback integration",
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
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Productivity Gains
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team efficiency increase</span>
                    <span className="font-bold">+60%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Manual data entry reduction</span>
                    <span className="font-bold">-90%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Context switching time</span>
                    <span className="font-bold">-70%</span>
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
                    <span className="text-muted-foreground">Time saved per person</span>
                    <span className="font-bold">30 min/day</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team adoption rate</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sync accuracy</span>
                    <span className="font-bold">100%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Quality Improvements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Eliminated duplicate task entry saving 12.5 hours per week across the team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Real-time status visibility improved cross-team coordination by 60%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Context preservation through linked threads reduced follow-up questions by 40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>98% team adoption within first week with minimal training required</span>
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
                  "This bot transformed how our team works. No more copying tasks between Slack and Notion, no more
                  missed updates. Everything just syncs automatically and we can focus on getting work done instead of
                  managing tools. The 98% adoption rate speaks for itself - the team actually loves using it."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Emma Chen</div>
                    <div className="text-sm text-muted-foreground">Head of Operations, TechFlow Startup</div>
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
                    "User adoption is critical - design workflows that feel natural within existing team habits",
                    "Context preservation through linked references is more valuable than just data sync",
                    "Start with minimal viable automation and iterate based on actual usage patterns",
                    "Smart defaults and templates reduce cognitive load and increase adoption",
                    "Webhook-based sync is far superior to polling for real-time collaboration",
                    "Clear error messages and fallback behaviors build trust in automation",
                    "Regular team feedback sessions surface opportunities for workflow improvements",
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
            <h2 className="text-3xl font-bold mb-4">Want to Automate Your Team Workflow?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can build custom integrations to streamline your team's collaboration and boost
              productivity
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

export default CaseStudySlackNotion;
