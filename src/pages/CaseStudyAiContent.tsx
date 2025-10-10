import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  Code,
  TrendingUp,
  Clock,
  Zap,
  Phone,
  FileText,
  Star,
  Users,
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
  DollarSign,
  Brain,
  Layout,
  Database,
  Send,
} from "lucide-react";

const CaseStudyAiContent = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Content Generation Pipeline - Case Study",
    description:
      "How we increased content output by 3x and saved 85% of time with AI-powered content automation using ChatGPT and n8n",
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
    datePublished: "2025-09-01",
    dateModified: "2025-10-10",
    image: "https://images.unsplash.com/photo-1554774853-b414d2a2b3b6",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://d2group.co/case-study/ai-content-workflow",
    },
  };

  return (
    <>
      <SEO
        title="AI Content Generation Pipeline - Case Study | D2 Group"
        description="Case study: How we built an AI-powered content generation and scheduling pipeline that tripled output and saved 85% of time using OpenAI GPT-4 and n8n automation"
        keywords="ai automation case study, chatgpt content generation, openai automation, n8n workflow, content automation, ai marketing"
        canonicalUrl="/case-study/ai-content-workflow"
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
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">AI Content Generation Pipeline</h1>
              <p className="text-xl text-muted-foreground">
                How we scaled content production 3x with ChatGPT automation for a digital marketing agency
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">3x</div>
                  <div className="text-xs text-muted-foreground">Content Output</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">-85%</div>
                  <div className="text-xs text-muted-foreground">Time Saved</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Sparkles className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">4.5/5</div>
                  <div className="text-xs text-muted-foreground">Quality Score</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <BarChart3 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Schedule Accuracy</div>
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
                      Digital marketing agency managing content for 15+ client brands across social platforms
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Industry
                    </h4>
                    <p className="text-sm text-muted-foreground">Digital Marketing / Content Creation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Duration
                    </h4>
                    <p className="text-sm text-muted-foreground">3 weeks development + ongoing refinement</p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">
                  We built an AI-powered content generation and distribution pipeline that automates the entire workflow
                  from ideation to multi-platform publishing. Using OpenAI GPT-4, the system generates high-quality,
                  on-brand content, automatically adapts it for different platforms (Twitter, LinkedIn, Instagram,
                  Facebook), schedules optimal posting times, and archives all content. Results: 3x increase in content
                  output (10 to 30+ posts/week), 85% time savings, and 4.5/5 average quality rating.
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
                src="https://images.unsplash.com/photo-1554774853-b414d2a2b3b6?w=1200&auto=format&fit=crop"
                alt="AI Content Workflow"
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
                  <FileText className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Manual content creation bottleneck limiting scale</h3>
                    <p className="text-muted-foreground">
                      The 3-person content team spent 15-20 hours weekly creating 10-12 social media posts across
                      multiple clients. The manual process included: brainstorming topics, researching trends, drafting
                      copy, editing for tone and grammar, formatting for each platform (character limits, hashtag
                      strategies, image requirements), and coordinating approvals. This bottleneck prevented the agency
                      from taking on new clients or expanding content volume for existing ones. Content quality was
                      inconsistent due to time pressure and writer fatigue.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Inefficient multi-platform distribution workflow</h3>
                    <p className="text-muted-foreground">
                      After content creation, the team manually logged into each social platform (Twitter, LinkedIn,
                      Instagram, Facebook) to schedule posts individually. Each post required reformatting for platform
                      specifications: Twitter's 280 character limit, LinkedIn's professional tone, Instagram's visual
                      focus with hashtags in comments, Facebook's longer-form style. No centralized scheduling meant
                      missed posting windows, inconsistent timing across platforms, and inability to leverage optimal
                      engagement times. This manual scheduling consumed 5+ hours weekly and introduced human error.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Layout className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">No content library or reusability strategy</h3>
                    <p className="text-muted-foreground">
                      Created content lived scattered across Google Docs, social platform drafts, and team members'
                      local drives. No centralized repository meant inability to repurpose evergreen content, difficulty
                      finding past posts for reference, no analytics on what performed well to inform future strategy,
                      and knowledge loss when team members left. Content was essentially "write once, use once" - a
                      massive waste of creative effort that could be leveraged across multiple campaigns.
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
                    End-to-End AI Content Pipeline
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a comprehensive automated workflow that handles ideation, generation, optimization, and
                    distribution:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>GPT-4 content generation:</strong> Custom-engineered prompts incorporate brand voice
                        guidelines, target audience personas, content goals (awareness, engagement, conversion),
                        trending topics, and SEO keywords. Generate multiple variations per brief for A/B testing, with
                        automatic quality checks for grammar, tone, and brand alignment.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Intelligent platform adaptation:</strong> AI automatically reformats base content for
                        each platform - shortens to Twitter's character limit while preserving key message, adds
                        professional context for LinkedIn, optimizes hashtag strategy for Instagram discovery, expands
                        with storytelling for Facebook's algorithm preference. Maintains consistent messaging while
                        honoring platform best practices.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Smart scheduling optimization:</strong> Buffer API integration enables centralized
                        scheduling with analytics-driven timing. System analyzes historical engagement data to determine
                        optimal posting times per platform and audience timezone. Queue management ensures consistent
                        cadence without overwhelming followers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Centralized content library:</strong> All generated content automatically saved to
                        organized Google Drive folders by client, platform, topic, and date. Searchable metadata enables
                        easy discovery for repurposing. Version history preserves edits and A/B test variations for
                        learning.
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">AI Workflow Components</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        OpenAI GPT-4 API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Advanced language model for high-quality content generation with custom prompts, temperature
                        control for creativity vs consistency, system messages defining brand voice, few-shot examples
                        for context, and max tokens management for length control. Supports multiple languages and
                        writing styles.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Buffer Publishing API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Multi-platform scheduling interface supporting Twitter, LinkedIn, Instagram, Facebook, and
                        Pinterest. Features optimal timing suggestions based on audience analytics, queue management,
                        draft storage, and performance tracking with engagement metrics.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Google Drive API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Cloud storage and collaboration platform for content archival. Organized folder structure by
                        client and campaign, rich metadata tagging, version control, team commenting for approval
                        workflows, and search functionality for content discovery.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        n8n Orchestration
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Workflow automation engine connecting all components. Manages trigger events (content brief
                        submissions), sequential processing steps, conditional logic for platform-specific handling,
                        error recovery, and monitoring dashboards for health checks.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Quality Control Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Human-in-the-loop review:</strong> Optional review queue allows team to approve, edit,
                        or regenerate AI content before scheduling
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Brand voice consistency:</strong> Custom prompt engineering with few-shot examples
                        ensures output matches each client's unique tone and messaging
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Plagiarism detection:</strong> API integration checks generated content against existing
                        web content to ensure originality
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>A/B testing:</strong> Generate multiple variations for testing, with performance
                        tracking to refine prompts over time
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
            <h2 className="text-3xl font-bold mb-6 text-center">Content Generation Workflow</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Content Brief Input",
                      desc: "Team submits topic, target audience, platform, and brand guidelines",
                      icon: FileText,
                    },
                    {
                      step: 2,
                      title: "AI Generation",
                      desc: "GPT-4 creates base content with brand voice and messaging",
                      icon: Brain,
                    },
                    {
                      step: 3,
                      title: "Platform Adaptation",
                      desc: "Content automatically formatted for each social platform",
                      icon: Layout,
                    },
                    {
                      step: 4,
                      title: "Quality Review",
                      desc: "Optional human review queue for approval or edits",
                      icon: CheckCircle2,
                    },
                    {
                      step: 5,
                      title: "Smart Scheduling",
                      desc: "Buffer schedules posts at optimal times per platform",
                      icon: Send,
                    },
                    {
                      step: 6,
                      title: "Content Archival",
                      desc: "All content saved to organized Google Drive library",
                      icon: Database,
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
                  challenge: "Maintaining Consistent Brand Voice Across AI-Generated Content",
                  solution:
                    "Developed comprehensive prompt engineering framework with brand voice guidelines, tone examples, do's/don'ts lists, and few-shot learning examples. Created client-specific system messages and temperature settings to balance creativity with consistency.",
                  impact: "95% of AI-generated content approved on first draft with minimal edits required",
                },
                {
                  challenge: "Platform-Specific Character Limits and Formatting Rules",
                  solution:
                    "Built intelligent truncation algorithm that preserves core message when shortening for Twitter, adds platform-appropriate context for LinkedIn, and optimizes hashtag placement for Instagram. Conditional logic handles edge cases gracefully.",
                  impact: "100% posting success rate across all platforms with zero formatting errors",
                },
                {
                  challenge: "API Cost Management with High-Volume Generation",
                  solution:
                    "Implemented caching layer for similar prompts, smart token management to avoid waste, batch processing for efficiency, and usage monitoring with cost alerts. Optimized prompt length while maintaining output quality.",
                  impact: "Reduced OpenAI API costs by 40% while maintaining quality through optimization",
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
                    "OpenAI GPT-4 API",
                    "Buffer API",
                    "Google Drive API",
                    "Webhooks",
                    "Node.js",
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
                  title: "Prompt Engineering",
                  activities: [
                    "Brand voice analysis",
                    "Prompt template design",
                    "Few-shot examples",
                    "Quality testing",
                  ],
                },
                {
                  phase: "Week 2",
                  title: "Workflow Development",
                  activities: ["n8n workflow build", "API integrations", "Platform adapters", "Error handling"],
                },
                {
                  phase: "Week 3",
                  title: "Testing & Launch",
                  activities: ["Quality assurance", "Team training", "Pilot rollout", "Optimization"],
                },
                {
                  phase: "Ongoing",
                  title: "Refinement",
                  activities: ["Prompt optimization", "Performance tracking", "Cost management", "Feature additions"],
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
                    Productivity Gains
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Content output</span>
                    <span className="font-bold">10 → 30+ posts/week</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time per post</span>
                    <span className="font-bold">90 min → 15 min</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team time saved</span>
                    <span className="font-bold">85%</span>
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
                    <span className="text-muted-foreground">Quality rating</span>
                    <span className="font-bold">4.5/5</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">First-draft approval</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Client capacity</span>
                    <span className="font-bold">+40%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Strategic Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Team shifted from content execution to strategy and client relationship management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Consistent brand voice across all platforms eliminated quality variance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Content library enables repurposing and performance analysis for future optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Scalability unlocked - can now onboard new clients without increasing headcount</span>
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
                  "This AI workflow completely transformed our content operation. We tripled our output without
                  sacrificing quality - in fact, the consistency improved. Our team now focuses on strategy and client
                  relationships instead of grinding out posts. The ROI is incredible - we've taken on 6 new clients
                  without hiring additional writers. This is the future of content marketing."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Amanda Parker</div>
                    <div className="text-sm text-muted-foreground">Creative Director, Velocity Digital Marketing</div>
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
                    "Prompt engineering is 80% of success - invest heavily in crafting detailed, example-rich prompts",
                    "Human-in-the-loop review builds trust during transition period but becomes optional as team confidence grows",
                    "Platform-specific adaptation is crucial - generic content underperforms on every channel",
                    "Content library archival provides compounding value through repurposing and performance insights",
                    "A/B testing multiple AI variations reveals optimal prompt parameters faster than manual iteration",
                    "Cost monitoring is essential - unoptimized API usage can quickly become expensive at scale",
                    "Quality consistency improves over time as prompt library grows with real-world examples",
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
                { title: "Multi-Platform Analytics", slug: "data-report-dashboard", icon: BarChart3 },
                { title: "CRM Lead Management", slug: "crm-automation", icon: Building2 },
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
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Content with AI?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can integrate AI into your content workflow to increase output while maintaining
              quality and brand consistency
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

export default CaseStudyAiContent;
