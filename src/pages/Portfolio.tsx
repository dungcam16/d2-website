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
} from "lucide-react";

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

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  client: string | null;
  image_url: string | null;
  excerpt: string | null;
  challenge: string;
  solution: string;
  results: Array<{ label: string; value: string }>;
  tech: string[];
  icon_name: string;
}

const Portfolio = () => {
  const { toast } = useToast();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const { data, error } = await supabase
          .from("case_studies")
          .select("*")
          .eq("is_published", true)
          .order("order_index", { ascending: true });

        if (error) throw error;
        setCaseStudies((data as any) || []);
      } catch (error) {
        console.error("Error fetching case studies:", error);
        toast({
          title: "Error loading case studies",
          description: "Failed to load case studies. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, [toast]);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "D2 Group - n8n Automation & Integration Specialists",
    description:
      "Leading automation agency specializing in n8n workflow development, API integrations, and business process optimization for international B2B companies.",
    url: "https://d2group.co/portfolio",
    areaServed: "International",
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
      title: "n8n Workflow Development",
      description: "Custom automation workflows tailored to your business needs",
      features: ["Trigger design", "Error handling", "Sub-workflows", "Performance optimization"],
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Seamless connection between your business tools",
      features: ["REST APIs", "Webhooks", "OAuth", "GraphQL"],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable deployment and hosting solutions",
      features: ["Docker", "AWS/GCP", "CI/CD", "Monitoring"],
    },
    {
      icon: BarChart3,
      title: "Process Optimization",
      description: "Analyze and improve existing workflows",
      features: ["Workflow audit", "Bottleneck analysis", "KPI tracking", "ROI measurement"],
    },
  ];

  const methodology = [
    {
      phase: "Discovery",
      duration: "Week 1",
      activities: ["Requirements gathering", "Process mapping", "Feasibility analysis", "Solution design"],
    },
    {
      phase: "Development",
      duration: "Week 2-3",
      activities: ["Workflow building", "API integration", "Testing & QA", "Documentation"],
    },
    {
      phase: "Deployment",
      duration: "Week 4",
      activities: ["Production setup", "User training", "Monitoring setup", "Handover"],
    },
    {
      phase: "Support",
      duration: "Ongoing",
      activities: ["24/7 monitoring", "Bug fixes", "Optimization", "Feature updates"],
    },
  ];

  const stats = [
    { icon: Award, label: "Successful Projects", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Clock, label: "Years Experience", value: "3+" },
    { icon: Globe, label: "Countries Served", value: "10+" },
  ];

  const testimonials = [
    {
      quote:
        "D2 Group transformed our operations. The automation saved us 20 hours per week and reduced errors to zero.",
      author: "John Smith",
      role: "CTO, TechCorp",
      rating: 5,
    },
    {
      quote:
        "Professional, responsive, and delivered exactly what we needed. Best automation partner we've worked with.",
      author: "Sarah Johnson",
      role: "Operations Director, E-com Inc",
      rating: 5,
    },
    {
      quote: "ROI was clear within the first month. Highly recommend for any business looking to scale.",
      author: "Michael Chen",
      role: "CEO, Growth Startup",
      rating: 5,
    },
  ];

  return (
    <>
      <SEO
        title="n8n Automation & Integration Portfolio - D2 Group | Business Process Automation Experts"
        description="Leading automation agency specializing in n8n workflow development, API integrations, and business process optimization for B2B companies. View our portfolio of 50+ successful automation projects."
        keywords="n8n developer portfolio, automation engineer, workflow automation, API integration, business process automation, n8n case studies, automation agency, n8n expert"
        canonicalUrl="/portfolio"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <Badge variant="secondary" className="text-lg px-6 py-2 mb-6">
              <Award className="w-4 h-4 mr-2 inline" /> Trusted by International B2B Companies
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Automation Solutions That Drive
              <span className="text-primary"> Measurable Business Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We build scalable n8n workflows and API integrations that reduce costs, eliminate errors, and accelerate
              growth for B2B companies worldwide.
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
                  <Target className="w-4 h-4 mr-2" /> View Case Studies
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground">Comprehensive automation solutions for modern businesses</p>
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
              <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
              <p className="text-xl text-muted-foreground">Real automation projects with measurable business impact</p>
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
                          src={project.image_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"}
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
                        {/* Challenge & Solution - Always Displayed */}
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-xs text-destructive mb-1 flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3" />
                              Challenge:
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{project.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-xs text-primary mb-1 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              Solution:
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{project.solution}</p>
                          </div>
                        </div>

                        <Separator />

                        {/* Results Grid */}
                        <div className="grid grid-cols-3 gap-2">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="text-center p-2 bg-primary/5 rounded">
                              <div className="text-base font-bold text-primary">{result.value}</div>
                              <div className="text-xs text-muted-foreground line-clamp-1">{result.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tech.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* CTA */}
                        <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
                          <Link to={`/case-study/${project.slug}`}>
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
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Your Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-muted-foreground">Proven methodology for successful automation projects</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you save time, reduce costs, and scale efficiently with custom automation
              solutions.
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
                  <Phone className="w-4 h-4 mr-2" /> Schedule Free Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/contact">
                  <DollarSign className="w-4 h-4 mr-2" /> Get Started
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

export default Portfolio;
