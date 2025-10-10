import React, { useState } from "react";
import {
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  Shield,
  CheckCircle,
  Star,
  BarChart3,
  Zap,
  Globe,
  Award,
  Clock,
  Users,
  Monitor,
  Database,
  Settings,
  Link,
  FileText,
  AlertTriangle,
  Smartphone,
  Gauge,
  MapPin,
  Brain,
  Eye,
  Filter,
  Download,
  Lightbulb,
  Trophy,
  Building,
  ShoppingCart,
  Heart,
  Code,
  Home,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SeoService = () => {
  const [auditForm, setAuditForm] = useState({
    website: "",
    industry: "",
    currentRankings: "",
    mainCompetitors: "",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional SEO Services",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Trusted and professional SEO services. Vietnam's leading SEO agency specializing in comprehensive SEO services, outsourced SEO with guaranteed top 3 Google rankings.",
    offers: {
      "@type": "Offer",
      price: "15000000",
      priceCurrency: "VND",
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://d2group.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://d2group.co/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO Services",
      },
    ],
  };

  const guaranteeDetails = [
    {
      icon: Trophy,
      title: "Top 3 Results",
      description: "Primary keywords in top 3 Google VN",
      guarantee: "Position 1-3",
    },
    {
      icon: Clock,
      title: "6 Month Timeline",
      description: "Clear results within 6 months",
      guarantee: "Fixed timeframe",
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "100% refund if targets not met",
      guarantee: "Full refund",
    },
    {
      icon: TrendingUp,
      title: "Traffic Growth",
      description: "Minimum 200% organic traffic increase",
      guarantee: "Measurable results",
    },
    {
      icon: Target,
      title: "Lead Quality",
      description: "Quality traffic, not just numbers",
      guarantee: "Quality focus",
    },
  ];

  const vietnamExpertise = [
    {
      icon: Globe,
      title: "Vietnamese SEO",
      description: "Native Vietnamese optimization with deep understanding of search context and behavior",
    },
    {
      icon: MapPin,
      title: "Local Search Optimization",
      description: "Google My Business, local citations, and geo-targeting for Vietnam market",
    },
    {
      icon: Users,
      title: "Vietnam Market Knowledge",
      description: "Consumer behavior, search patterns and preferences of Vietnamese users",
    },
    {
      icon: Eye,
      title: "Competitive Landscape",
      description: "Deep knowledge of VN competitors and successful strategies",
    },
    {
      icon: Brain,
      title: "Google VN Algorithm",
      description: "Updates and changes specific to VN market, local ranking factors",
    },
  ];

  const seoServices = [
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Site speed, mobile, Core Web Vitals, indexing",
      details: ["Page speed optimization", "Mobile-first indexing", "Core Web Vitals", "Crawl optimization"],
    },
    {
      icon: FileText,
      title: "On-Page Optimization",
      description: "Content optimization, internal linking",
      details: ["Title & meta optimization", "Header structure", "Internal linking", "Content optimization"],
    },
    {
      icon: Link,
      title: "Off-Page SEO",
      description: "Link building, citations, brand mentions",
      details: ["High-quality backlinks", "Local citations", "Brand mentions", "Authority building"],
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "GMB optimization, local directories",
      details: ["Google My Business", "Local citations", "Review management", "Local content"],
    },
    {
      icon: Search,
      title: "Content SEO",
      description: "Keyword strategy, topic clusters, content gaps",
      details: ["Keyword research", "Content strategy", "Topic clusters", "Content gaps"],
    },
    {
      icon: BarChart3,
      title: "SEO Analytics",
      description: "Performance tracking, competitor monitoring",
      details: ["Rank tracking", "Traffic analysis", "Competitor monitoring", "ROI reporting"],
    },
  ];

  const technicalChecklist = [
    {
      icon: Gauge,
      title: "Site Speed Optimization",
      description: "Ensure load time <3s",
      metric: "Core Web Vitals Score: 90+",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Indexing",
      description: "Perfect mobile experience",
      metric: "Mobile-friendly score: 100%",
    },
    {
      icon: Monitor,
      title: "Core Web Vitals",
      description: "Optimize LCP, FID, CLS",
      metric: "All metrics in green zone",
    },
    {
      icon: Code,
      title: "Schema Markup",
      description: "Implement rich snippets",
      metric: "Structured data coverage: 95%",
    },
    {
      icon: Database,
      title: "XML Sitemap",
      description: "Proper indexing structure",
      metric: "100% pages indexed",
    },
    {
      icon: Shield,
      title: "SSL & Security",
      description: "HTTPS, security headers",
      metric: "Security score: A+",
    },
  ];

  const linkBuildingStrategy = [
    {
      title: "High Authority Domains",
      description: "DA 70+ websites with high traffic",
      metric: "Average DA: 75+",
    },
    {
      title: "Industry Relevance",
      description: "Niche-specific backlinks from related sites",
      metric: "Industry relevance: 95%",
    },
    {
      title: "Content-Based Links",
      description: "Guest posts, resource pages, content partnerships",
      metric: "Editorial links: 80%",
    },
    {
      title: "Local Citations",
      description: "Vietnam business directories and local platforms",
      metric: "Local citations: 50+",
    },
    {
      title: "Brand Mentions",
      description: "Convert unlinked mentions into backlinks",
      metric: "Mention conversion: 60%",
    },
    {
      title: "Competitor Analysis",
      description: "Reverse engineer competitor link strategies",
      metric: "Gap coverage: 85%",
    },
  ];

  const auditCategories = [
    {
      icon: Settings,
      title: "Technical Issues",
      description: "Crawl errors, indexing problems",
      checks: "35+ technical factors",
    },
    {
      icon: FileText,
      title: "On-Page Analysis",
      description: "Title tags, meta descriptions, headers",
      checks: "25+ on-page elements",
    },
    {
      icon: Search,
      title: "Content Analysis",
      description: "Keyword optimization, content gaps",
      checks: "20+ content factors",
    },
    {
      icon: Link,
      title: "Backlink Profile",
      description: "Link quality, toxic links audit",
      checks: "15+ link metrics",
    },
    {
      icon: Target,
      title: "Competitor Analysis",
      description: "Gap analysis vs top competitors",
      checks: "30+ competitive factors",
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "GMB, citations, local rankings",
      checks: "20+ local factors",
    },
  ];

  const industries = [
    {
      icon: ShoppingCart,
      name: "E-commerce SEO",
      description: "Product optimization, category pages",
      specialties: ["Product page SEO", "Category optimization", "Shopping feed", "Review schemas"],
    },
    {
      icon: Building,
      name: "Local Business",
      description: "GMB, local citations, review management",
      specialties: ["Google My Business", "Local citations", "Review management", "Local content"],
    },
    {
      icon: Briefcase,
      name: "B2B Services",
      description: "Lead generation, thought leadership content",
      specialties: ["Service page SEO", "Case studies", "Industry content", "Lead magnets"],
    },
    {
      icon: Code,
      name: "SaaS/Tech",
      description: "Technical content, developer resources",
      specialties: ["Technical content", "API documentation", "Product pages", "Developer SEO"],
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Compliance, local health search",
      specialties: ["Medical content", "Local health SEO", "Compliance", "Patient resources"],
    },
    {
      icon: Home,
      name: "Real Estate",
      description: "Local property search, MLS optimization",
      specialties: ["Property listings", "Local area content", "MLS optimization", "Market reports"],
    },
  ];

  const seoTools = [
    {
      category: "Research",
      tools: ["SEMrush Enterprise", "Ahrefs", "Screaming Frog"],
      color: "text-foreground",
    },
    {
      category: "Analytics",
      tools: ["Google Analytics 4", "Search Console", "Data Studio"],
      color: "text-foreground",
    },
    {
      category: "Technical",
      tools: ["PageSpeed Insights", "GTmetrix", "Lighthouse"],
      color: "text-foreground",
    },
    {
      category: "Monitoring",
      tools: ["Rank tracking", "SERP monitoring", "Alert systems"],
      color: "text-foreground",
    },
    {
      category: "Reporting",
      tools: ["Custom dashboards", "Automated reports", "ROI tracking"],
      color: "text-foreground",
    },
  ];

  const packages = [
    {
      name: "LOCAL SEO",
      price: "$200",
      period: "/month",
      description: "Perfect for local businesses and SMEs",
      features: [
        "Google My Business optimization",
        "10 local keywords",
        "Local citations building",
        "Review management",
        "Local content creation",
        "Monthly local ranking reports",
      ],
      guarantee: "Top 3 local results",
      popular: false,
    },
    {
      name: "NATIONAL SEO",
      price: "$480",
      period: "/month",
      description: "Comprehensive SEO for national market",
      features: [
        "25 target keywords",
        "Technical SEO optimization",
        "Content strategy & creation",
        "Link building campaign",
        "Competitor analysis",
        "Weekly performance reports",
      ],
      guarantee: "Top 3 national results",
      popular: true,
    },
    {
      name: "COMPETITIVE SEO",
      price: "$800",
      period: "/month",
      description: "Advanced SEO for high-competition markets",
      features: [
        "50+ competitive keywords",
        "Advanced technical optimization",
        "Premium content creation",
        "Authority link building",
        "Advanced competitor tracking",
        "Custom reporting dashboard",
      ],
      guarantee: "Top 3 competitive results",
      popular: false,
    },
    {
      name: "ENTERPRISE SEO",
      price: "Custom",
      period: "",
      description: "Tailored solution for large organizations",
      features: [
        "Unlimited keywords",
        "Multi-site SEO management",
        "Dedicated SEO team",
        "Custom development",
        "24/7 monitoring",
        "Executive reporting",
      ],
      guarantee: "Custom KPIs",
      popular: false,
    },
  ];

  const resultsShowcase = [
    {
      client: "E-commerce Fashion",
      industry: "Retail",
      before: "Position 50+",
      after: "Position 2",
      traffic: "+750% organic traffic",
      revenue: "+400% revenue from SEO",
    },
    {
      client: "SaaS Platform",
      industry: "Technology",
      before: "500 monthly visitors",
      after: "25,000 monthly visitors",
      traffic: "+4900% traffic growth",
      revenue: "+300% qualified leads",
    },
    {
      client: "Local Restaurant Chain",
      industry: "Food & Beverage",
      before: "10 locations visible",
      after: "50 locations top 3",
      traffic: "+200% local traffic",
      revenue: "+150% foot traffic",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Professional SEO Services - Guaranteed Top 3 Google Rankings"
        description="Vietnam's leading trusted SEO services. Professional SEO agency with comprehensive SEO services, outsourced SEO guaranteed top 3 Google. Transparent SEO pricing."
        keywords="SEO services, comprehensive SEO services, trusted SEO company, outsource SEO, Vietnam SEO agency, Google top ranking guarantee, SEO pricing, website SEO services"
        canonicalUrl="/services/seo"
        structuredData={[structuredData, breadcrumbStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">SEO Boost</span>
                <br />
                Top 3 Google Or <span className="text-primary">100% Money Back</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Clear results guarantee: Top 3 in 6 months for primary keywords, or full refund. 300+ websites achieved
                500% organic traffic growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="tech-border"
                  onClick={() => (window.location.href = "/contact")}
                >
                  View Results Showcase
                </Button>
              </div>

              <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border-2 border-primary">
                <Shield className="h-6 w-6 mr-3 text-primary" />
                <span className="font-bold text-primary">Top 3 or 100% money back</span>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Live Search Results</h3>
                  <div className="text-sm text-muted-foreground">Current client rankings</div>
                </div>

                <div className="space-y-4">
                  {[
                    { site: "client-ecommerce.com", position: "#1", traffic: "↗ 500%" },
                    { site: "saas-platform.vn", position: "#2", traffic: "↗ 750%" },
                    { site: "local-business.com", position: "#3", traffic: "↗ 300%" },
                  ].map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div>
                        <div className="font-medium text-sm">{result.site}</div>
                        <div className="text-xs text-muted-foreground">Google Search Results</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">{result.position}</div>
                        <div className="text-xs text-foreground">{result.traffic}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Guarantee Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Clear Results Guarantee - <span className="text-primary">No Empty Promises</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {guaranteeDetails.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 text-primary">
                    <IconComponent className="h-10 w-10 mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{detail.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{detail.description}</p>
                  <div className="text-xs font-medium px-3 py-1 rounded bg-primary/10 text-primary">
                    {detail.guarantee}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vietnam SEO Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span style={{ color: "#2563eb" }}>#1 Vietnam Market</span> SEO Experts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vietnamExpertise.map((expertise, index) => {
              const IconComponent = expertise.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div style={{ color: "#2563eb" }}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{expertise.title}</h3>
                      <p className="text-muted-foreground text-sm">{expertise.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive SEO - <span style={{ color: "#16a34a" }}>Technical</span> to{" "}
            <span style={{ color: "#2563eb" }}>Content</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="mb-4" style={{ color: "#16a34a" }}>
                      <IconComponent className="h-10 w-10 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>

                    <ul className="space-y-2 text-left">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" style={{ color: "#16a34a" }} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical SEO Deep Dive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical SEO - <span style={{ color: "#f59e0b" }}>Solid Foundation</span> For Rankings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalChecklist.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div style={{ color: "#f59e0b" }}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <div
                        className="text-xs font-medium px-3 py-1 rounded"
                        style={{ backgroundColor: "#fef3c7", color: "#f59e0b" }}
                      >
                        {item.metric}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Link Building Strategy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            White-Hat Link Building - <span style={{ color: "#2563eb" }}>Real Authority</span>, No Spam
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {linkBuildingStrategy.map((strategy, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: "#2563eb" }}>
                  {strategy.title}
                </h3>
                <p className="text-muted-foreground mb-4">{strategy.description}</p>
                <div
                  className="text-sm font-medium px-3 py-2 rounded"
                  style={{ backgroundColor: "#dbeafe", color: "#2563eb" }}
                >
                  {strategy.metric}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Audit Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            In-Depth SEO Audit <span style={{ color: "#16a34a" }}>150+ Checkpoints</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="mb-4" style={{ color: "#16a34a" }}>
                      <IconComponent className="h-10 w-10 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div
                      className="text-sm font-medium px-3 py-2 rounded"
                      style={{ backgroundColor: "#dcfce7", color: "#16a34a" }}
                    >
                      {category.checks}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry-Specific SEO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            SEO Strategies <span style={{ color: "#2563eb" }}>By Industry</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div style={{ color: "#2563eb" }}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                      <p className="text-muted-foreground text-sm">{industry.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {industry.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" style={{ color: "#16a34a" }} />
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Tools & Technology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional <span style={{ color: "#f59e0b" }}>SEO Tool Stack</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {seoTools.map((toolCategory, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: toolCategory.color }}>
                  {toolCategory.category}
                </h3>
                <div className="space-y-2">
                  {toolCategory.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-muted-foreground p-2 rounded"
                      style={{ backgroundColor: "#f8fafc" }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            SEO Packages With <span style={{ color: "#16a34a" }}>Clear Guarantees</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-6 relative ${pkg.popular ? "border-green-500 shadow-lg" : ""} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className="px-4 py-2 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: "#16a34a" }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#2563eb" }}>
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold mb-2">
                    {pkg.price}
                    <span className="text-lg font-normal text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{pkg.description}</p>
                  <div
                    className="text-xs font-medium px-3 py-1 rounded"
                    style={{ backgroundColor: "#dcfce7", color: "#16a34a" }}
                  >
                    {pkg.guarantee}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: "#16a34a" }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                  style={
                    pkg.popular
                      ? { backgroundColor: "#16a34a", color: "white" }
                      : { borderColor: "#16a34a", color: "#16a34a" }
                  }
                  onClick={() => (window.location.href = "/contact")}
                >
                  {pkg.price === "Custom" ? "Contact Sales" : "Choose Package"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real Results From <span style={{ color: "#2563eb" }}>300+ Projects</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resultsShowcase.map((result, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold mb-1">{result.client}</h3>
                  <div className="text-sm text-muted-foreground">{result.industry}</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Before:</span>
                    <span className="text-sm text-red-600">{result.before}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">After:</span>
                    <span className="text-sm text-primary">{result.after}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="text-center">
                      <div className="text-sm font-bold text-foreground">{result.traffic}</div>
                      <div className="text-xs text-muted-foreground">{result.revenue}</div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4" onClick={() => (window.location.href = "/contact")}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Case Study
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Reach <span className="text-primary">Top 3 Google</span> in 6 Months?
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free consultation to discover how SEO can take your website to the top positions. Get a free SEO
            audit worth $400.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Comprehensive technical analysis of 50+ factors</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Keyword gap analysis vs competitors</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Prioritized 90-day action plan</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Top 3 guarantee or 100% money back</span>
            </div>
          </div>

          <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
            Get Free SEO Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoService;
