import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Workflow,
  Code,
  Cloud,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Youtube,
  ShoppingCart,
  Building2,
  Sparkles,
  Target,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Portfolio = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "D2 Group - Automation & n8n Developer Portfolio",
    description:
      "Professional n8n Developer specializing in business process automation, API integrations, and workflow optimization.",
    url: "https://d2group.co/portfolio",
  };

  const featuredProjects = [
    {
      id: "youtube-automation",
      icon: Youtube,
      title: "YouTube Content Automation Pipeline",
      client: "Media channel with 100K+ subscribers",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
      challenge: [
        "Manual upload of 10+ videos daily consuming 4 hours",
        "Inconsistent metadata and branding setup",
        "Lack of monitoring and backup system",
      ],
      solution: [
        "Designed n8n workflow for automated video uploads",
        "Integrated YouTube API, Google Sheets, and Suno AI",
        "Audio pre-processing using FFmpeg for crossfade",
        "Dynamic thumbnail generation with ImageMagick",
      ],
      results: [
        { label: "Processing time reduced", value: "95%" },
        { label: "Zero upload errors", value: "6 months" },
        { label: "Cost savings", value: "$2,000/month" },
        { label: "Productivity", value: "3x increase" },
      ],
      tech: "n8n, YouTube API v3, FFmpeg, Google Cloud APIs, Docker",
    },
    {
      id: "crm-automation",
      icon: Building2,
      title: "CRM Lead Management Automation",
      client: "Real Estate company (50+ staff)",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      challenge: [
        "Leads scattered across multiple platforms",
        "Manual lead scoring and assignment",
        "Delayed customer follow-ups",
      ],
      solution: [
        "Centralized lead management with n8n",
        "Automated lead scoring based on customer behavior",
        "Smart assignment using weighted logic",
        "Multi-channel automated follow-ups (email, chat)",
      ],
      results: [
        { label: "Conversion rate increased", value: "40%" },
        { label: "Lead processing time reduced", value: "75%" },
        { label: "Lead scoring accuracy", value: "90%" },
        { label: "Monthly revenue growth", value: "$15,000" },
      ],
      tech: "n8n, HubSpot API, Zapier, Google Analytics, Slack",
    },
    {
      id: "ecommerce-automation",
      icon: ShoppingCart,
      title: "E-commerce Inventory Synchronization",
      client: "Online store with 1,000+ SKUs",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      challenge: [
        "Manual stock updates causing frequent stockouts",
        "Slow supplier communication",
        "Inefficient product monitoring",
      ],
      solution: [
        "Implemented real-time inventory monitoring",
        "Automated reorder notifications to suppliers",
        "Multi-store stock synchronization workflows",
      ],
      results: [
        { label: "Stockouts reduced", value: "90%" },
        { label: "Holding cost decreased", value: "30%" },
        { label: "Stock accuracy", value: "100%" },
        { label: "Monitoring uptime", value: "24/7" },
      ],
      tech: "n8n, WooCommerce API, PostgreSQL, Telegram Bot",
    },
  ];

  const techStack = [
    {
      category: "Core Technologies",
      items: [
        "n8n Platform: Expert level (2+ years, 200+ workflows)",
        "JavaScript/Node.js: Custom nodes and backend scripting",
        "Python: API development and data processing",
        "Docker: Containerization and deployment",
        "Git/GitHub: Version control & CI/CD integration",
      ],
    },
    {
      category: "Integration Expertise",
      items: [
        "APIs: RESTful, Webhooks, OAuth, GraphQL",
        "Databases: PostgreSQL, MySQL, MongoDB, NocoDB",
        "Cloud: AWS, Google Cloud, Digital Ocean",
        "Messaging: Telegram, Slack, Discord, Email systems",
        "Media: FFmpeg, ImageMagick, YouTube, TikTok, Instagram",
      ],
    },
    {
      category: "Business Platforms",
      items: [
        "CRM: HubSpot, Pipedrive, Salesforce",
        "E-commerce: Shopify, WooCommerce, BigCommerce",
        "Marketing: Google Analytics, Meta Ads, Email automation",
        "Communication: Zalo OA, WhatsApp Business, ChatGPT",
      ],
    },
  ];

  const whyChoose = [
    {
      icon: Award,
      title: "Proven Track Record",
      points: ["3+ years in automation development", "50+ successful projects", "95% client satisfaction"],
    },
    {
      icon: Code,
      title: "Technical Excellence",
      points: ["Deep understanding of n8n core", "Cross-platform API experience", "Scalable architecture mindset"],
    },
    {
      icon: TrendingUp,
      title: "Business-Centric Approach",
      points: ["ROI-focused automation", "Performance tracking", "Sustainable improvement"],
    },
    {
      icon: Workflow,
      title: "Continuous Support",
      points: ["24/7 monitoring", "Quick bug resolution", "Workflow optimization"],
    },
  ];

  return (
    <>
      <SEO
        title="n8n Developer Portfolio - D2 Group"
        description="Professional automation engineer specializing in n8n, API integration, and business process optimization."
        keywords="n8n developer, automation engineer, workflow automation, API integration"
        canonicalUrl="/portfolio"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <Badge variant="secondary" className="text-lg px-6 py-2 mb-6">
              <Workflow className="w-4 h-4 mr-2 inline" /> n8n Developer & Automation Expert
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Building Scalable Automation Systems for Modern Businesses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              I help startups and enterprises streamline operations, integrate APIs, and automate repetitive workflows using n8n and cloud technologies.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" /> Book a Call
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#projects">
                  <Target className="w-4 h-4 mr-2" /> View Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground">Real-world workflow automation case studies</p>
            </div>

            <div className="space-y-12">
              {featuredProjects.map((study, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto overflow-hidden bg-muted">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      <study.icon className="absolute bottom-4 left-4 w-12 h-12 text-primary" />
                    </div>
                    <div>
                      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{study.client}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-destructive">Challenge:</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {study.challenge.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-primary">Solution:</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {study.solution.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Separator className="my-6" />

                        <div>
                          <h4 className="font-semibold text-lg mb-4">Results:</h4>
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="text-center p-3 bg-primary/5 rounded-lg">
                                <div className="text-xl font-bold text-primary mb-1">{result.value}</div>
                                <div className="text-xs text-muted-foreground">{result.label}</div>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-3 items-center">
                            <Badge variant="outline" className="text-xs">
                              {study.tech}
                            </Badge>
                            <Button size="sm" variant="default" asChild>
                              <Link to={`/case-study/${study.id}`}>
                                View Details <ArrowRight className="w-4 h-4 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
              <p className="text-xl text-muted-foreground">Tools and platforms mastered</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {index === 0 && <Code className="w-6 h-6 text-primary" />}
                      {index === 1 && <Cloud className="w-6 h-6 text-primary" />}
                      {index === 2 && <MessageSquare className="w-6 h-6 text-primary" />}
                      {stack.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {stack.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Work With Me</h2>
              <p className="text-xl text-muted-foreground">Key values that make a difference</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <item.icon className="w-12 h-12 mx-auto text-primary mb-3" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-left">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a free consultation and discover how automation can transform your business.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Email</div>
                  <div className="font-semibold">info@d2group.co</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Phone</div>
                  <div className="font-semibold">+84 977 027 634</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6" />
                <div className="text-left