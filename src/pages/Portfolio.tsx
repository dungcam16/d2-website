import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Database,
  Network,
  Settings,
  GraduationCap,
  Bot,
  Server,
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

const Portfolio = () => {
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
          .limit(9); // Limit to 9 case studies for 3x3 grid

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
    priceRange: "$$-$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
  };


  const services = [
    {
      icon: Database,
      title: "Data & AI Development",
      description: "Predictive models, ML, NLP, CV, data pipelines",
      features: ["Machine Learning models", "Natural Language Processing", "Computer Vision", "Data engineering pipelines"],
    },
    {
      icon: Workflow,
      title: "Workflow & Automation",
      description: "n8n workflows, process automation, sync, optimization",
      features: ["n8n workflows", "Process automation", "System synchronization", "Performance optimization"],
    },
    {
      icon: Network,
      title: "Integration & API",
      description: "Custom APIs, legacy systems, webhooks, tool integration",
      features: ["REST & GraphQL APIs", "Legacy system integration", "Webhook handling", "Third-party integrations"],
    },
    {
      icon: Target,
      title: "Consulting & Strategy",
      description: "AI strategy, tech stack, process audit, ROI analysis",
      features: ["AI strategy planning", "Tech stack selection", "Process auditing", "ROI analysis"],
    },
    {
      icon: Settings,
      title: "Support & Optimization",
      description: "24/7 monitoring, tuning, bug fixes, security updates",
      features: ["24/7 system monitoring", "Performance tuning", "Bug fixes & patches", "Security updates"],
    },
    {
      icon: GraduationCap,
      title: "Training & Knowledge",
      description: "Training programs, documentation, workshops, handoff",
      features: ["Custom training programs", "Technical documentation", "Team workshops", "Knowledge handoff"],
    },
    {
      icon: Bot,
      title: "Custom AI Solutions",
      description: "Chatbots, recommendation engines, anomaly detection",
      features: ["AI chatbots", "Recommendation systems", "Anomaly detection", "Intelligent automation"],
    },
    {
      icon: Server,
      title: "Enterprise Infrastructure",
      description: "Scalability, optimization, compliance, disaster recovery",
      features: ["Scalability planning", "Infrastructure optimization", "Compliance management", "Disaster recovery"],
    },
  ];

  const methodology = [
    {
      phase: "Discovery",
      duration: "Week 1",
      activities: ["Technical requirements gathering", "System architecture planning", "Technology stack selection", "Project timeline & milestones"],
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
    { icon: Award, label: "Successful Projects", value: "100+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: Globe, label: "Countries Served", value: "15+" },
  ];

  const testimonials = [
    {
      quote:
        "D2 Group delivered a complex RAG system that processes thousands of documents daily. Their expertise in AI and automation is exceptional. Highly recommended for enterprise projects.",
      author: "Sarah Chen",
      role: "CTO, TechVentures (San Francisco, USA)",
      rating: 5,
    },
    {
      quote:
        "Outstanding technical skills and professional communication. They built our entire SaaS platform from scratch using React and Node.js. Perfect for remote collaboration.",
      author: "Michael Roberts",
      role: "CEO, DataFlow Solutions (Sydney, Australia)",
      rating: 5,
    },
    {
      quote: "Their n8n automation workflows saved us 40+ hours per week. The ROI was immediate and the code quality is production-ready. Best development partner we've had.",
      author: "Emma Schmidt",
      role: "Operations Director, GrowthLabs (Berlin, Germany)",
      rating: 5,
    },
  ];

  return (
    <>
      <SEO
        title="Portfolio - D2 Group | AI Automation Agency for Remote Teams"
        description="View our portfolio of AI automation projects for US, Australian, and European companies. Expert in n8n workflows, RAG systems, GPT-4/Claude integration, and full-stack SaaS development."
        keywords="AI automation portfolio, n8n case studies, RAG system examples, remote developer portfolio, SaaS development portfolio, automation agency work, AI integration projects"
        canonicalUrl="/portfolio"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <Badge variant="secondary" className="text-lg px-6 py-2 mb-6">
              <Award className="w-4 h-4 mr-2 inline" /> Trusted by Remote Teams Worldwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              AI Automation Agency
              <span className="text-primary"> for Remote Teams</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We build AI-powered workflows, RAG systems, and SaaS products for companies in the US, Australia, and Europe. Specializing in n8n automation, LLM integration, and full-stack development.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" /> Schedule Consultation
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

        {/* Services */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-xl text-muted-foreground">Technical capabilities for complex automation and AI projects</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <service.icon className="w-10 h-10 mb-3 text-primary" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid - 3x3 Grid */}
        <section id="projects" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Latest Case Studies</h2>
              <p className="text-xl text-muted-foreground">Featured automation projects showcasing our expertise. View all case studies for our complete portfolio.</p>
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
                    <Card
                      key={project.id}
                      className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                    >
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
                        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-xs">{project.client}</CardDescription>
                      </CardHeader>

                      {/* Content - Always Visible */}
                      <CardContent className="pt-0 space-y-4 flex-grow">
                        {/* Excerpt */}
                        {project.excerpt && (
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {project.excerpt}
                          </p>
                        )}

                        <Separator />

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {new Date(project.created_at).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short' 
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
                        <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
                          <Link to={`/portfolio/${project.slug}`}>
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
                  Browse All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Client Partners & Results */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Trusted by Leading Companies</h2>
              <p className="text-xl text-muted-foreground">Delivering measurable results for businesses worldwide</p>
            </div>

            {/* Key Results */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <p className="text-sm text-muted-foreground">Hours Saved per Week</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <DollarSign className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </CardContent>
              </Card>
            </div>

            {/* Industry Sectors */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-xl">E-commerce & Retail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automated order processing, inventory management, and customer support for online stores
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <Building2 className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-xl">Financial Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Financial reporting automation, invoice processing, and payment reconciliation systems
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <MessageSquare className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-xl">SaaS & Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI-powered customer support, lead nurturing, and multi-platform data integration
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Development Process</h2>
              <p className="text-xl text-muted-foreground">Proven agile methodology for successful project delivery</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {methodology.map((phase, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      {index + 1}
                    </div>
                    <CardTitle>{phase.phase}</CardTitle>
                    <CardDescription className="font-semibold">{phase.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-left">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground">Trusted by businesses worldwide</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your automation and AI project. We specialize in working with remote teams across different time zones.
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
                <div className="text-left">
                  <div className="text-sm opacity-80">Location</div>
                  <div className="font-semibold">Ho Chi Minh City</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" /> Schedule a Call
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="mailto:info@d2group.co">
                  <Mail className="w-4 h-4 mr-2" /> Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
