import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Youtube,
  CheckCircle2,
  ArrowLeft,
  Code,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  Phone,
  Star,
  Users,
  FileText,
  Settings,
  Bell,
  Lightbulb,
  Building2,
  ShoppingCart,
  Sparkles,
  ArrowRight,
  Download,
  Share2,
  Calendar,
  Target,
  AlertTriangle,
} from "lucide-react";

const CaseStudyYoutubeAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "YouTube Content Automation System - Case Study",
    description: "How we reduced video upload time by 95% and saved $2,000/month using n8n automation",
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
    datePublished: "2025-01-15",
    dateModified: "2025-10-10",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://d2group.co/case-study/youtube-automation",
    },
  };

  return (
    <>
      <SEO
        title="YouTube Content Automation System - Case Study | D2 Group"
        description="Case study: How we automated YouTube video uploads and reduced processing time by 95%, saving $2,000/month with n8n workflow automation"
        keywords="youtube automation case study, n8n workflow, content automation, video upload automation, youtube api integration"
        canonicalUrl="/case-study/youtube-automation"
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
                <Youtube className="w-4 h-4 mr-2 inline" />
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">YouTube Content Automation System</h1>
              <p className="text-xl text-muted-foreground">
                How we reduced video upload time by 95% and saved $2,000/month for a 100K+ subscriber channel
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-xs text-muted-foreground">Time Saved</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">0</div>
                  <div className="text-xs text-muted-foreground">Errors in 6 months</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">$2K</div>
                  <div className="text-xs text-muted-foreground">Saved/month</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">3x</div>
                  <div className="text-xs text-muted-foreground">Productivity boost</div>
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
                      Media channel with 100K+ subscribers in lifestyle niche
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Industry
                    </h4>
                    <p className="text-sm text-muted-foreground">Digital Media & Content Creation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Duration
                    </h4>
                    <p className="text-sm text-muted-foreground">6 weeks development + ongoing support</p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground leading-relaxed">
                  We built a complete YouTube automation system that reduced video upload time by 95%, eliminated
                  errors, and saved $2,000 monthly in labor costs while maintaining 100% content quality. The solution
                  handles everything from audio processing to thumbnail generation and metadata optimization.
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
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop"
                alt="YouTube Automation Workflow"
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
                    <h3 className="font-semibold mb-2">Manual uploads consuming 4 hours daily</h3>
                    <p className="text-muted-foreground">
                      The channel needed to upload 10+ videos daily, with each video taking 20-30 minutes to upload,
                      fill metadata, create thumbnails, and schedule. This consumed 4 hours of productive time every
                      day.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Inconsistent metadata and branding</h3>
                    <p className="text-muted-foreground">
                      Manual metadata entry led to spelling errors, inconsistent tags, non-standardized descriptions,
                      affecting SEO and channel branding. No template system meant quality varied significantly.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">No backup or monitoring system</h3>
                    <p className="text-muted-foreground">
                      When upload failures occurred or videos were rejected, there was no automatic retry mechanism or
                      timely notification system, resulting in lost content and reduced posting frequency.
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
                    n8n Workflow Architecture
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Designed complete automation workflow from content preparation to YouTube publishing:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Automatic trigger:</strong> Webhook receives video information from Google Sheets or
                        CMS, activating workflow instantly
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Audio processing:</strong> FFmpeg handles audio crossfading, volume normalization, and
                        exports optimized format for YouTube
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Thumbnail generation:</strong> ImageMagick automatically creates thumbnails from
                        templates, adds text overlay and watermark per brand guidelines
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Metadata management:</strong> Template engine auto-generates title, description, tags
                        following SEO best practices from data source
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">API Integration & Data Flow</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        YouTube Data API v3
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Upload videos, set metadata, manage playlists, and schedule publish time. Handle OAuth2
                        authentication and retry logic for stable uploads.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Google Sheets API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Sync content calendar, update video status, log errors and track analytics. Team can manage and
                        monitor everything from spreadsheet.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Suno AI Integration
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Auto-generate background music for videos, customize by mood and duration, ensuring consistent
                        audio quality.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Monitoring & Error Handling</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Real-time Telegram notifications for each step: upload started, processing, published, or failed
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Automatic retry mechanism with exponential backoff when encountering API rate limits or network
                        errors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Backup video files and metadata to Google Drive before upload for recovery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Health check endpoints and uptime monitoring ensuring 24/7 workflow operation</span>
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
                      title: "Content Input",
                      desc: "Team adds video info to Google Sheets",
                      icon: FileText,
                    },
                    {
                      step: 2,
                      title: "Webhook Trigger",
                      desc: "n8n workflow activates automatically",
                      icon: Zap,
                    },
                    {
                      step: 3,
                      title: "Media Processing",
                      desc: "FFmpeg processes audio, ImageMagick creates thumbnails",
                      icon: Settings,
                    },
                    {
                      step: 4,
                      title: "YouTube Upload",
                      desc: "Automated upload with optimized metadata",
                      icon: Youtube,
                    },
                    {
                      step: 5,
                      title: "Notification",
                      desc: "Team gets Telegram alert on success/failure",
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
                  challenge: "YouTube API Rate Limits",
                  solution:
                    "Implemented exponential backoff retry logic and request queuing to stay within quota limits",
                  impact: "100% upload success rate without hitting rate limits",
                },
                {
                  challenge: "Large Video File Handling",
                  solution: "Chunked upload mechanism with resumable uploads and progress tracking",
                  impact: "Successfully handled videos up to 10GB without timeouts",
                },
                {
                  challenge: "Thumbnail Quality Consistency",
                  solution: "Created template system with brand guidelines and automated quality checks",
                  impact: "35% increase in CTR from improved thumbnail quality",
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
                    "YouTube Data API v3",
                    "FFmpeg",
                    "ImageMagick",
                    "Google Sheets API",
                    "Suno AI",
                    "Google Cloud APIs",
                    "Docker",
                    "Telegram Bot API",
                    "OAuth2",
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
                  phase: "Week 1-2",
                  title: "Discovery & Planning",
                  activities: ["Requirements gathering", "Workflow design", "API analysis", "Architecture planning"],
                },
                {
                  phase: "Week 3-4",
                  title: "Development",
                  activities: ["n8n workflow build", "FFmpeg integration", "YouTube API setup", "Testing"],
                },
                {
                  phase: "Week 5",
                  title: "Testing & Optimization",
                  activities: ["UAT testing", "Performance tuning", "Error handling", "Documentation"],
                },
                {
                  phase: "Week 6",
                  title: "Deployment & Training",
                  activities: ["Production deployment", "Team training", "Monitoring setup", "Go-live"],
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
                    Operational Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Upload time per video</span>
                    <span className="font-bold">25 min → 1 min</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total daily time</span>
                    <span className="font-bold">4 hours → 12 min</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Error rate</span>
                    <span className="font-bold">15% → 0%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Economic Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Labor cost savings</span>
                    <span className="font-bold">$2,000/month</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ROI after 3 months</span>
                    <span className="font-bold">450%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Output increase</span>
                    <span className="font-bold">3x videos</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Quality Improvements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>100% consistency in metadata, titles, tags following SEO best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Professional thumbnails with consistent branding, 35% CTR increase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Stable publish schedule improving engagement and subscriber retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Team can focus on content creation instead of technical uploads</span>
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
                  "D2 Group's automation solution transformed our entire content workflow. What used to take us 4 hours
                  daily now runs automatically in minutes. The ROI was clear within the first month, and we haven't
                  looked back since. Our team can now focus on creating great content instead of tedious uploads."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">Content Director, Lifestyle Media Channel</div>
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
                    "Always implement comprehensive error handling and retry logic for API integrations",
                    "Use webhook triggers instead of polling for real-time responsiveness and efficiency",
                    "Template-based metadata generation ensures SEO consistency and brand compliance",
                    "Backup strategies are critical before any automated upload to prevent data loss",
                    "Monitoring and alerting should be built in from day one, not as an afterthought",
                    "Exponential backoff prevents API rate limit issues and improves reliability",
                    "Document all workflows thoroughly for team handover and future maintenance",
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
                { title: "E-commerce Inventory Sync", slug: "ecommerce-sync", icon: ShoppingCart },
                { title: "AI Content Pipeline", slug: "ai-content", icon: Sparkles },
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
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Workflow?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              D2 Group is ready to consult and implement automation solutions tailored to your business needs
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Free Consultation
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

export default CaseStudyYoutubeAutomation;
