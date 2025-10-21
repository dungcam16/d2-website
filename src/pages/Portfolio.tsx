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
import workflowInvoicePayment from "@/assets/workflow-invoice-payment.jpg";
import workflowTicketTriage from "@/assets/workflow-ticket-triage.jpg";
import workflowContentRepurposing from "@/assets/workflow-content-repurposing.jpg";
import workflowAiLeadNurture from "@/assets/workflow-ai-lead-nurture.jpg";
import workflowClientOnboarding from "@/assets/workflow-client-onboarding.jpg";
import blogRagSystems from "@/assets/blog-rag-systems.jpg";
import caseStudyDocumentProcessing from "@/assets/case-study-document-processing.jpg";
import workflowSlackAiAssistant from "@/assets/workflow-slack-ai-assistant.jpg";
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
  Users,
  Globe,
  Clock,
  DollarSign,
  Star,
  AlertTriangle,
  LucideIcon,
  Download,
  Eye,
  Grid3x3,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Youtube,
  Building2,
  ShoppingCart,
  Sparkles,
  MessageSquare,
  BarChart3,
};

// Image mapping for case studies
const imageMap: Record<string, string> = {
  "/src/assets/workflow-invoice-payment.jpg": workflowInvoicePayment,
  "/src/assets/workflow-ticket-triage.jpg": workflowTicketTriage,
  "/src/assets/workflow-content-repurposing.jpg": workflowContentRepurposing,
  "/src/assets/workflow-ai-lead-nurture.jpg": workflowAiLeadNurture,
  "/src/assets/workflow-client-onboarding.jpg": workflowClientOnboarding,
  "/src/assets/blog-rag-systems.jpg": blogRagSystems,
  "/src/assets/case-study-document-processing.jpg": caseStudyDocumentProcessing,
  "/src/assets/workflow-slack-ai-assistant.jpg": workflowSlackAiAssistant,
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

interface WorkflowTemplate {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  thumbnail_url: string | null;
  category: string | null;
  tags: string[] | null;
  views: number | null;
  downloads: number | null;
}

const Portfolio = () => {
  const { toast } = useToast();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [workflows, setWorkflows] = useState<WorkflowTemplate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [caseStudiesResponse, workflowsResponse] = await Promise.all([
          supabase
            .from("case_studies")
            .select("*")
            .eq("is_published", true)
            .order("order_index", { ascending: true })
            .limit(6),
          supabase
            .from("workflow_templates")
            .select("id, title, slug, description, thumbnail_url, category, tags, views, downloads")
            .eq("is_published", true)
            .order("published_at", { ascending: false })
            .limit(6),
        ]);

        if (caseStudiesResponse.error) throw caseStudiesResponse.error;
        if (workflowsResponse.error) throw workflowsResponse.error;

        setCaseStudies((caseStudiesResponse.data as any) || []);
        setWorkflows((workflowsResponse.data as any) || []);
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
      icon: Workflow,
      title: "n8n Workflow Automation",
      description: "Complex automation workflows with error handling and monitoring",
      features: ["Custom triggers & actions", "API integrations", "Error handling & retry logic", "Performance optimization"],
    },
    {
      icon: Code,
      title: "AI & RAG Systems",
      description: "LLM integration with vector databases and retrieval systems",
      features: ["GPT-4 & Claude integration", "Vector databases (Pinecone, Weaviate)", "Custom RAG pipelines", "Prompt engineering"],
    },
    {
      icon: Cloud,
      title: "SaaS Development",
      description: "Full-stack applications with modern tech stack",
      features: ["React & Next.js", "Node.js & Express", "Supabase & PostgreSQL", "AWS/GCP deployment"],
    },
    {
      icon: BarChart3,
      title: "API Development",
      description: "RESTful APIs and third-party integrations",
      features: ["REST & GraphQL APIs", "Webhook handling", "OAuth & authentication", "API documentation"],
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

        {/* Case Studies Grid - Always Show Challenge & Solution */}
        <section id="projects" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground">Real automation and AI projects with measurable business impact</p>
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
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">
                  Browse All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Workflow Templates */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Workflow Templates</h2>
              <p className="text-xl text-muted-foreground">Ready-to-use automation workflows to accelerate your projects</p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading workflow templates...</p>
              </div>
            ) : workflows.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No workflow templates available yet.</p>
              </div>
            ) : (
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {workflows.map((workflow) => (
                    <CarouselItem key={workflow.id} className="md:basis-1/2 lg:basis-1/3">
                      <Link to={`/templates/${workflow.slug}`}>
                        <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                          <div className="relative overflow-hidden">
                            {workflow.thumbnail_url ? (
                              <img
                                src={workflow.thumbnail_url}
                                alt={workflow.title}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                <Grid3x3 className="h-16 w-16 text-muted-foreground" />
                              </div>
                            )}
                            {workflow.category && (
                              <Badge className="absolute top-4 right-4 bg-primary">{workflow.category}</Badge>
                            )}
                          </div>

                          <CardHeader>
                            <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                              {workflow.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="space-y-4">
                            {workflow.description && (
                              <p className="text-sm text-muted-foreground line-clamp-3">
                                {workflow.description}
                              </p>
                            )}

                            {workflow.tags && workflow.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {workflow.tags.slice(0, 3).map((tag, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            <Separator />

                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  {workflow.views || 0}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Download className="w-3 h-3" />
                                  {workflow.downloads || 0}
                                </span>
                              </div>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </Carousel>
            )}

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/templates">
                  Browse Full Workflow Library <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
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
