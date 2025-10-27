"use client";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Import case study images
import caseAiSupportTicketRouting from "@/assets/case-ai-support-ticket-routing.jpg";
import caseMultiPlatformDataIntegration from "@/assets/case-multi-platform-data-integration.jpg";
import caseRagChatbotPipelines from "@/assets/case-rag-chatbot-pipelines.jpg";
import caseFinancialReportingAutomation from "@/assets/case-financial-reporting-automation.jpg";
import caseSalesLeadManagement from "@/assets/case-sales-lead-management.jpg";
import caseSalesPipelineAutomation from "@/assets/case-sales-pipeline-automation.jpg";
import caseAiDataExtraction from "@/assets/case-ai-data-extraction.jpg";
import caseDataMigrationScripts from "@/assets/case-data-migration-scripts.jpg";
import caseAiResumeBuilder from "@/assets/case-ai-resume-builder.jpg";
import caseMarketingCampaignAutomation from "@/assets/case-marketing-campaign-automation.jpg";
import caseEcommerceOrderAutomation from "@/assets/case-ecommerce-order-automation.jpg";
import caseContentSeoPipeline from "@/assets/case-content-seo-pipeline.jpg";
import caseDocumentProcessingAutomation from "@/assets/case-document-processing-automation.jpg";
import caseEcommerceInventorySync from "@/assets/case-ecommerce-inventory-sync.jpg";
import caseSocialMediaAutomation from "@/assets/case-social-media-automation.jpg";
import caseDynamicPricingAgent from "@/assets/case-dynamic-pricing-agent.jpg";
import caseErrorHandlingMonitoring from "@/assets/case-error-handling-monitoring.jpg";
import caseNotificationSystem from "@/assets/case-notification-system.jpg";
import caseWebhookApiWrapper from "@/assets/case-webhook-api-wrapper.jpg";
import caseHrOnboardingAutomation from "@/assets/case-hr-onboarding-automation.jpg";

import {
  Workflow,
  Code,
  Cloud,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Building2,
  Sparkles,
  Target,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  Users,
  Globe,
  Clock,
  DollarSign,
  Star,
  LucideIcon,
  ShoppingCart,
  Shield,
  Linkedin,
  ExternalLink,
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Building2,
  ShoppingCart,
  Sparkles,
  MessageSquare,
  BarChart3,
};

// Image mapping for case studies
const imageMap: Record<string, string> = {
  "/src/assets/case-ai-support-ticket-routing.jpg": caseAiSupportTicketRouting,
  "/src/assets/case-multi-platform-data-integration.jpg": caseMultiPlatformDataIntegration,
  "/src/assets/case-rag-chatbot-pipelines.jpg": caseRagChatbotPipelines,
  "/src/assets/case-financial-reporting-automation.jpg": caseFinancialReportingAutomation,
  "/src/assets/case-sales-lead-management.jpg": caseSalesLeadManagement,
  "/src/assets/case-sales-pipeline-automation.jpg": caseSalesPipelineAutomation,
  "/src/assets/case-ai-data-extraction.jpg": caseAiDataExtraction,
  "/src/assets/case-data-migration-scripts.jpg": caseDataMigrationScripts,
  "/src/assets/case-ai-resume-builder.jpg": caseAiResumeBuilder,
  "/src/assets/case-marketing-campaign-automation.jpg": caseMarketingCampaignAutomation,
  "/src/assets/case-ecommerce-order-automation.jpg": caseEcommerceOrderAutomation,
  "/src/assets/case-content-seo-pipeline.jpg": caseContentSeoPipeline,
  "/src/assets/case-document-processing-automation.jpg": caseDocumentProcessingAutomation,
  "/src/assets/case-ecommerce-inventory-sync.jpg": caseEcommerceInventorySync,
  "/src/assets/case-social-media-automation.jpg": caseSocialMediaAutomation,
  "/src/assets/case-dynamic-pricing-agent.jpg": caseDynamicPricingAgent,
  "/src/assets/case-error-handling-monitoring.jpg": caseErrorHandlingMonitoring,
  "/src/assets/case-notification-system.jpg": caseNotificationSystem,
  "/src/assets/case-webhook-api-wrapper.jpg": caseWebhookApiWrapper,
  "/src/assets/case-hr-onboarding-automation.jpg": caseHrOnboardingAutomation,
};

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  client: string | null;
  image_url: string | null;
  excerpt: string | null;
  content: string | null;
  icon_name: string;
  created_at: string;
  views: number;
}

export default function Portfolio() {
  const { toast } = useToast();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("case_studies")
          .select("*")
          .eq("is_published", true)
          .order("sort", { ascending: true })
          .limit(9);

        if (error) throw error;
        setCaseStudies((data as any) || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error loading portfolio",
          description: "Failed to load portfolio data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "D2 Group - AI Automation Agency",
    description:
      "Professional AI automation agency specializing in n8n workflows, RAG systems, and SaaS development for remote teams in the US, Australia, and Europe.",
    url: "https://d2group.co/portfolio",
    areaServed: ["United States", "Australia", "Europe", "Global"],
    priceRange: "$$-$$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  const services = [
    {
      icon: Workflow,
      title: "n8n Automation",
      description: "Build powerful automation workflows with n8n - the open-source workflow automation platform",
      features: ["Custom n8n workflows", "API integrations", "Process automation", "Scalable solutions"],
      outcomes: ["Average 40% time savings", "ROI within 3 months", "90% client retention"],
      pricing: "Starting from $5,000",
      link: "/services/n8n-automation",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent chatbots powered by GPT-4, Claude, and custom AI models for seamless customer interactions",
      features: ["GPT-4/Claude integration", "RAG systems", "Custom training", "Multi-platform support"],
      outcomes: ["85% faster response time", "24/7 availability", "70% cost reduction"],
      pricing: "Starting from $8,000",
      link: "/services/ai-chatbots",
    },
    {
      icon: Code,
      title: "Zapier Migration",
      description: "Migrate from expensive Zapier workflows to cost-effective n8n solutions without losing functionality",
      features: ["Cost savings up to 90%", "Zero downtime migration", "Enhanced features", "Full support"],
      outcomes: ["90% cost savings", "2-week migration", "Enhanced functionality"],
      pricing: "Starting from $3,000",
      link: "/services/zapier-migration",
    },
    {
      icon: Cloud,
      title: "No-Code/Low-Code",
      description: "Build and deploy applications faster with modern no-code and low-code development platforms",
      features: ["Rapid development", "Visual builders", "API integration", "Custom solutions"],
      outcomes: ["5x faster development", "60% cost reduction", "Production-ready"],
      pricing: "Starting from $7,000",
      link: "/services/nocode-lowcode",
    },
    {
      icon: BarChart3,
      title: "Marketing Automation",
      description: "Automate your marketing campaigns, lead nurturing, and customer engagement workflows",
      features: ["Email automation", "Lead scoring", "Campaign tracking", "CRM integration"],
      outcomes: ["3x lead conversion", "50% time savings", "Automated reporting"],
      pricing: "Starting from $6,000",
      link: "/services/marketing-automation",
    },
  ];

  const methodology = [
    {
      phase: "Discovery",
      duration: "Week 1",
      activities: [
        "Technical requirements gathering",
        "System architecture planning",
        "Technology stack selection",
        "Project timeline & milestones",
      ],
    },
    {
      phase: "Development",
      duration: "Week 2-3",
      activities: ["Agile development sprints", "Regular progress updates", "Code reviews & testing", "Documentation & comments"],
    },
    {
      phase: "Deployment",
      duration: "Week 4",
      activities: ["Production environment setup", "Performance testing", "Security audit", "Knowledge transfer"],
    },
    {
      phase: "Support",
      duration: "Ongoing",
      activities: ["24/7 monitoring", "Bug fixes & patches", "Performance optimization", "Feature enhancements"],
    },
  ];

  const stats = [
    {
      icon: Award,
      label: "Enterprise Projects",
      value: "127",
      context: "Since 2020",
      description: "Including 47 Fortune 500 clients",
    },
    {
      icon: Users,
      label: "Global Clients",
      value: "85",
      context: "Active partnerships",
      description: "Across 15+ countries",
    },
    {
      icon: Clock,
      label: "Combined Experience",
      value: "25+",
      context: "Years",
      description: "Senior development team",
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: "15+",
      context: "Worldwide",
      description: "US, UK, EU, APAC regions",
    },
  ];

  const testimonials = [
    {
      quote:
        "D2 Group delivered a complex RAG system that processes thousands of documents daily. Their expertise in AI and automation is exceptional. The 3-week delivery timeline was impressive. Highly recommended for enterprise projects.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechVentures Inc.",
      location: "San Francisco, USA",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      linkedinUrl: "#",
      companyLogo: null,
    },
    {
      quote:
        "Outstanding technical skills and professional communication. They built our entire SaaS platform from scratch using React and Node.js. The code quality is production-ready and well-documented. Perfect for remote collaboration across time zones.",
      author: "Michael Roberts",
      role: "CEO",
      company: "DataFlow Solutions",
      location: "Sydney, Australia",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      linkedinUrl: "#",
      companyLogo: null,
    },
    {
      quote:
        "Their n8n automation workflows saved us 40+ hours per week in manual data processing. The ROI was immediate and measurable. They understood our compliance requirements perfectly. Best development partner we've had in 5 years.",
      author: "Emma Schmidt",
      role: "Operations Director",
      company: "GrowthLabs GmbH",
      location: "Berlin, Germany",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      linkedinUrl: "#",
      companyLogo: null,
    },
  ];

  const trustBadges = [
    {
      name: "n8n Certified Partner",
      description: "Official n8n automation partner",
      icon: Workflow,
    },
    {
      name: "ISO 27001 Compliant",
      description: "Information security certified",
      icon: Shield,
    },
    {
      name: "GDPR Compliant",
      description: "EU data protection standards",
      icon: Shield,
    },
    {
      name: "SOC 2 Type II",
      description: "Enterprise security audit",
      icon: Shield,
    },
  ];

  const keyResults = [
    {
      icon: TrendingUp,
      value: "40+",
      label: "Hours Saved Weekly",
      description: "Average time savings per client",
    },
    {
      icon: DollarSign,
      value: "85%",
      label: "Cost Reduction",
      description: "Compared to manual processes",
    },
    {
      icon: CheckCircle2,
      value: "100%",
      label: "On-Time Delivery",
      description: "Projects delivered on schedule",
    },
    {
      icon: Target,
      value: "98%",
      label: "Client Satisfaction",
      description: "Based on 127 project reviews",
    },
  ];

  return (
    <>
      <SEO
        title="Portfolio - D2 Group | AI Automation Agency for Enterprise Teams"
        description="View our portfolio of 127+ AI automation projects for US, Australian, and European companies. Expert in n8n workflows, RAG systems, GPT-4/Claude integration, and full-stack SaaS development. ISO 27001 & SOC 2 certified."
        keywords="AI automation portfolio, n8n case studies, RAG system examples, enterprise automation portfolio, SaaS development portfolio, automation agency work, AI integration projects"
        canonicalUrl="/portfolio"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <Badge variant="secondary" className="text-lg px-6 py-2 mb-6">
              <Award className="w-4 h-4 mr-2 inline" /> Trusted by 85+ Enterprise Teams Worldwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              AI Automation Agency <span className="text-primary">for Enterprise Teams</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We build AI-powered workflows, RAG systems, and SaaS products for companies in the US, Australia, and Europe. Specializing in
              n8n automation, LLM integration, and full-stack development. ISO 27001 & SOC 2 certified.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.context}</div>
                  <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild className="shadow-glow">
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" /> Schedule Free Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">
                  <Target className="w-4 h-4 mr-2" /> View Our Work
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold mb-2">Certified & Compliant</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustBadges.map((badge, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardContent className="pt-6 pb-4">
                    <badge.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="font-semibold text-sm">{badge.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{badge.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services with Enhanced Details */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground">Expert automation and AI solutions with measurable results</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all flex flex-col group">
                  <CardHeader>
                    <service.icon className="w-10 h-10 mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="mt-2">
                      <Badge variant="secondary">{service.pricing}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4 bg-primary/5 p-3 rounded-md">
                      <p className="text-xs font-semibold mb-2">Typical Outcomes:</p>
                      <ul className="space-y-1">
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-xs flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-primary" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full mt-auto" asChild>
                      <Link to={service.link}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid - Enhanced */}
        <section id="projects" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>
              <p className="text-xl text-muted-foreground">
                Real projects, real results. View detailed case studies showcasing our expertise across industries.
              </p>
            </div>

            {loading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Loading case studies...</p>
              </div>
            ) : caseStudies.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No case studies available yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((project) => {
                  const IconComponent = iconMap[project.icon_name] || Workflow;

                  return (
                    <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={
                            project.image_url && imageMap[project.image_url]
                              ? imageMap[project.image_url]
                              : "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
                          }
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <IconComponent className="absolute bottom-4 left-4 w-8 h-8 text-white" />
                        <Badge className="absolute top-4 right-4 bg-primary">{project.category}</Badge>
                      </div>

                      {/* Header */}
                      <CardHeader>
                        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                        <CardDescription className="text-xs flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          {project.client}
                        </CardDescription>
                      </CardHeader>

                      {/* Content */}
                      <CardContent className="pt-0 space-y-4 flex-grow">
                        {/* Excerpt */}
                        {project.excerpt && <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.excerpt}</p>}

                        <Separator />

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {new Date(project.created_at).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                          </div>
                          {project.views > 0 && (
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              {project.views} views
                            </div>
                          )}
                        </div>

                        {/* CTA */}
                        <Button variant="outline" size="sm" className="w-full mt-auto group-hover:bg-primary group-hover:text-white" asChild>
                          <Link to={`/resources/casestudies/${project.slug}`}>
                            View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}

            <div className="text-center mt-12">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all" asChild>
                <Link to="/casestudies">
                  Browse All 127+ Case Studies <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Results */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Measurable Results</h2>
              <p className="text-xl text-muted-foreground">Data-driven outcomes from our automation projects</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {keyResults.map((result, index) => (
                <Card key={index} className="text-center bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <result.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                    <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
                    <p className="text-sm font-semibold mb-1">{result.label}</p>
                    <p className="text-xs text-muted-foreground">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

{/* Enhanced Industry Sectors - 6 Industries */}
<section className="py-20 px-6 bg-muted/30">
  <div className="container mx-auto max-w-7xl">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
      <p className="text-xl text-muted-foreground">
        Specialized automation solutions delivering measurable ROI across key sectors
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* E-commerce & Retail */}
      <Card className="hover:shadow-xl transition-all group border-t-4 border-t-primary">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
            <Badge variant="secondary">35+ Projects</Badge>
          </div>
          <CardTitle className="text-2xl">E-commerce & Retail</CardTitle>
          <CardDescription className="text-base">
            End-to-end automation for online stores and retail operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              From order processing to inventory management and customer support automation, 
              we help online stores scale efficiently.
            </p>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Key Solutions:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Order Automation</Badge>
                <Badge variant="outline">Inventory Sync</Badge>
                <Badge variant="outline">Customer Support</Badge>
                <Badge variant="outline">Shipping Integration</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-xs font-semibold">Typical Results:</p>
              <ul className="space-y-1">
                <li className="text-xs flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 text-primary" />
                  <span>85% faster order processing</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <DollarSign className="w-3 h-3 text-primary" />
                  <span>40% reduction in operational costs</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>24/7 automated customer service</span>
                </li>
              </ul>
            </div>

            <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white" asChild>
              <Link to="/solutions/ecommerce">
                View E-commerce Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Financial Services */}
      <Card className="hover:shadow-xl transition-all group border-t-4 border-t-primary">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Building2 className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
            <Badge variant="secondary">28+ Projects</Badge>
          </div>
          <CardTitle className="text-2xl">Financial Services</CardTitle>
          <CardDescription className="text-base">
            Secure, compliant automation for fintech and financial institutions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              ISO 27001 & SOC 2 certified automation solutions for financial reporting, 
              invoice processing, and payment reconciliation.
            </p>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Key Solutions:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Financial Reports</Badge>
                <Badge variant="outline">Invoice Processing</Badge>
                <Badge variant="outline">Payment Reconciliation</Badge>
                <Badge variant="outline">KYC/AML Automation</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-xs font-semibold">Typical Results:</p>
              <ul className="space-y-1">
                <li className="text-xs flex items-center gap-2">
                  <Shield className="w-3 h-3 text-primary" />
                  <span>100% regulatory compliance</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <DollarSign className="w-3 h-3 text-primary" />
                  <span>70% reduction in processing time</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>99.9% accuracy in reconciliation</span>
                </li>
              </ul>
            </div>

            <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white" asChild>
              <Link to="/solutions/fintech">
                View FinTech Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* SaaS & Technology */}
      <Card className="hover:shadow-xl transition-all group border-t-4 border-t-primary">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <MessageSquare className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
            <Badge variant="secondary">42+ Projects</Badge>
          </div>
          <CardTitle className="text-2xl">SaaS & Technology</CardTitle>
          <CardDescription className="text-base">
            Scale your SaaS operations without scaling headcount
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered customer support, automated lead nurturing, and seamless 
              multi-platform data integration for modern SaaS companies.
            </p>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Key Solutions:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">AI Support Bots</Badge>
                <Badge variant="outline">Lead Nurturing</Badge>
                <Badge variant="outline">Data Integration</Badge>
                <Badge variant="outline">User Onboarding</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-xs font-semibold">Typical Results:</p>
              <ul className="space-y-1">
                <li className="text-xs flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 text-primary" />
                  <span>3x increase in lead conversion</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>90% faster response times</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <Users className="w-3 h-3 text-primary" />
                  <span>Scale without hiring support team</span>
                </li>
              </ul>
            </div>

            <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white" asChild>
              <Link to="/solutions/saas">
                View SaaS Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Marketing & Agencies */}
      <Card className="hover:shadow-xl transition-all group border-t-4 border-t-primary">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
            <Badge variant="secondary">31+ Projects</Badge>
          </div>
          <CardTitle className="text-2xl">Marketing & Agencies</CardTitle>
          <CardDescription className="text-base">
            Automate campaigns, reporting, and client management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              End-to-end marketing automation from campaign execution to performance 
              reporting and client communication.
            </p>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Key Solutions:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Campaign Automation</Badge>
                <Badge variant="outline">Lead Scoring</Badge>
                <Badge variant="outline">Client Reporting</Badge>
                <Badge variant="outline">Social Media Automation</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-xs font-semibold">Typical Results:</p>
              <ul className="space-y-1">
                <li className="text-xs flex items-center gap-2">
                  <Target className="w-3 h-3 text-primary" />
                  <span>50% more campaigns with same team</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <BarChart3 className="w-3 h-3 text-primary" />
                  <span>Automated client reporting</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>30+ hours saved weekly</span>
                </li>
              </ul>
            </div>

            <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white" asChild>
              <Link to="/solutions/agencies">
                View Agency Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Healthcare & Medical */}
      <Card className="hover:shadow-xl transition-all group border-t-4 border-t-primary">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Shield className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
            <Badge variant="secondary">18+ Projects</Badge>
          </div>
          <CardTitle className="text-2xl">Healthcare & Medical</CardTitle>
          <CardDescription className="text-base">
            HIPAA-compliant automation for healthcare providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Secure patient data management, appointment scheduling, and medical 
              record processing with full HIPAA compliance.
            </p>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Key Solutions:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Patient Scheduling</Badge>
                <Badge variant="outline">Medical Records</Badge>
                <Badge variant="outline">Insurance Processing</Badge>
                <Badge variant="outline">Appointment Reminders</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-xs font-semibold">Typical Results:</p>
              <ul className="space-y-1">
                <li className="text-xs flex items-center gap-2">
                  <Shield className="w-3 h-3 text-primary" />
                  <span>100% HIPAA compliance</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>60% reduction in admin time</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <Users className="w-3 h-3 text-primary" />
                  <span>Better patient experience</span>
                </li>
              </ul>
            </div>

            <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white" asChild>
              <Link to="/solutions/healthcare">
                View Healthcare Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Real Estate */}
      <Card className="hover:shadow-xl transition-all group border-t-4 border-t-primary">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Building2 className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
            <Badge variant="secondary">22+ Projects</Badge>
          </div>
          <CardTitle className="text-2xl">Real Estate</CardTitle>
          <CardDescription className="text-base">
            Streamline property management and sales operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automate lead management, property listings, client communication, 
              and document processing for real estate firms.
            </p>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Key Solutions:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Lead Management</Badge>
                <Badge variant="outline">Property Listings</Badge>
                <Badge variant="outline">Document Automation</Badge>
                <Badge variant="outline">Client Follow-ups</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-xs font-semibold">Typical Results:</p>
              <ul className="space-y-1">
                <li className="text-xs flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 text-primary" />
                  <span>2x more leads managed per agent</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>80% faster document processing</span>
                </li>
                <li className="text-xs flex items-center gap-2">
                  <Target className="w-3 h-3 text-primary" />
                  <span>35% increase in conversion rate</span>
                </li>
              </ul>
            </div>

            <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white" asChild>
              <Link to="/solutions/real-estate">
                View Real Estate Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>

    {/* CTA for Custom Industries */}
    <div className="mt-16 text-center">
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="pt-8 pb-8">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-3">Don't See Your Industry?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We've successfully delivered automation solutions across 15+ industries. 
            Every business has unique workflows that can be optimized.
          </p>
          <Button size="lg" asChild className="shadow-glow">
            <Link to="/contact">
              Discuss Your Industry <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


        {/* Methodology */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Proven Development Process</h2>
              <p className="text-xl text-muted-foreground">Agile methodology ensuring successful project delivery</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {methodology.map((phase, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      {index + 1}
                    </div>
                    <CardTitle>{phase.phase}</CardTitle>
                    <CardDescription className="font-semibold text-primary">{phase.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground text-left">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-xl text-muted-foreground">Trusted by leading companies worldwide</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>

                    <Separator className="my-4" />

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <div className="font-semibold flex items-center gap-2">
                          {testimonial.author}
                          {testimonial.linkedinUrl && (
                            <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                              <Linkedin className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground font-medium">{testimonial.company}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">Based on 127 verified client reviews • Average rating: 4.9/5.0</p>
            </div>
          </div>
        </section>

        {/* Enhanced CTA */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a free 30-minute consultation to discuss your automation needs. We specialize in working with enterprise teams across
              different time zones.
            </p>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto text-left">
              {[
                "Free 30-minute strategy call",
                "Custom automation roadmap",
                "ROI analysis for your business",
                "No obligation • Average response: 2 hours",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
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
                  <div className="font-semibold">+84 909 099 421</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Location</div>
                  <div className="font-semibold">Ho Chi Minh City</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/company/contact">
                  <Phone className="w-4 h-4 mr-2" /> Book Free Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
