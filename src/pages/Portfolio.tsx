import { useState } from "react";
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
  Zap,
  Users,
  Globe,
  Clock,
  DollarSign,
  Star,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
} from "lucide-react";

const Portfolio = () => {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCard = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

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

  // Client logos for social proof
  const trustedBy = [
    { name: "Fortune 500 E-commerce", logo: "🛒" },
    { name: "SaaS Platform", logo: "💻" },
    { name: "Real Estate Corp", logo: "🏢" },
    { name: "Media Agency", logo: "📺" },
    { name: "FinTech Startup", logo: "💰" },
    { name: "Healthcare Tech", logo: "🏥" },
  ];

  const featuredProjects = [
    {
      id: "youtube-automation",
      icon: Youtube,
      title: "YouTube Content Automation Pipeline",
      category: "Media & Content",
      client: "Media channel with 100K+ subscribers",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
      excerpt: "Automated video publishing workflow reducing manual work by 95%",
      challenge:
        "Manual upload of 10+ videos daily consuming 4 hours. Inconsistent metadata and branding setup with lack of monitoring and backup system.",
      solution:
        "Full-stack n8n automation with YouTube API, AI integration, and media processing. Designed automated workflow with audio pre-processing using FFmpeg and dynamic thumbnail generation with ImageMagick.",
      results: [
        { label: "Time saved", value: "95%" },
        { label: "Error reduction", value: "100%" },
        { label: "Monthly savings", value: "$2,000" },
      ],
      tech: ["n8n", "YouTube API", "FFmpeg", "Google Cloud", "Docker"],
    },
    {
      id: "crm-automation",
      icon: Building2,
      title: "CRM Lead Management System",
      category: "Sales & CRM",
      client: "Real Estate company (50+ staff)",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      excerpt: "Intelligent lead scoring and routing system increasing conversions by 40%",
      challenge:
        "Leads scattered across multiple platforms with manual lead scoring and assignment causing delayed customer follow-ups.",
      solution:
        "Centralized lead management with n8n featuring automated lead scoring based on customer behavior, smart assignment using weighted logic, and multi-channel automated follow-ups via email and chat.",
      results: [
        { label: "Conversion rate", value: "+40%" },
        { label: "Processing time", value: "-75%" },
        { label: "Revenue growth", value: "$15K/mo" },
      ],
      tech: ["n8n", "HubSpot", "Slack", "Google Analytics"],
    },
    {
      id: "ecommerce-sync",
      icon: ShoppingCart,
      title: "Multi-Store Inventory Sync",
      category: "E-commerce",
      client: "Online store with 1,000+ SKUs",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      excerpt: "Real-time inventory synchronization across 5 sales channels",
      challenge:
        "Manual stock updates causing frequent stockouts, slow supplier communication, and inefficient product monitoring across multiple sales channels.",
      solution:
        "Implemented real-time inventory monitoring with automated reorder notifications to suppliers and multi-store stock synchronization workflows ensuring 100% accuracy.",
      results: [
        { label: "Stockouts reduced", value: "90%" },
        { label: "Cost savings", value: "30%" },
        { label: "Accuracy", value: "100%" },
      ],
      tech: ["n8n", "WooCommerce", "PostgreSQL", "Telegram"],
    },
    {
      id: "ai-content-workflow",
      icon: Sparkles,
      title: "AI Content Generation Pipeline",
      category: "Marketing Automation",
      client: "Digital marketing agency",
      image: "https://images.unsplash.com/photo-1554774853-b414d2a2b3b6?w=800&auto=format&fit=crop",
      excerpt: "Automated content creation and social publishing with AI",
      challenge:
        "Manual content creation bottleneck limiting content production capacity and creating inconsistent posting schedules.",
      solution:
        "OpenAI API integration with automated scheduling and publishing workflow. Content generated, reviewed, and distributed across multiple social platforms automatically.",
      results: [
        { label: "Content output", value: "+3x" },
        { label: "Time saved", value: "85%" },
        { label: "Quality score", value: "4.5/5" },
      ],
      tech: ["n8n", "OpenAI", "Buffer", "Google Drive"],
    },
    {
      id: "slack-notion-sync",
      icon: MessageSquare,
      title: "Slack & Notion Integration",
      category: "Team Productivity",
      client: "Tech startup (25 employees)",
      image: "https://images.unsplash.com/photo-1581092334538-6a7f1f57c6f5?w=800&auto=format&fit=crop",
      excerpt: "Bi-directional sync between communication and project management",
      challenge:
        "Disjointed communication between Slack and Notion with manual task duplication across platforms causing information silos.",
      solution:
        "Real-time synchronization bot with smart task creation. Messages automatically converted to tasks, database updates reflected in Slack, and seamless bi-directional sync.",
      results: [
        { label: "Team efficiency", value: "+60%" },
        { label: "Manual work", value: "-90%" },
        { label: "Adoption rate", value: "98%" },
      ],
      tech: ["n8n", "Slack API", "Notion API", "Node.js"],
    },
    {
      id: "data-analytics-dashboard",
      icon: BarChart3,
      title: "Multi-Platform Analytics Hub",
      category: "Data Analytics",
      client: "Marketing analytics team",
      image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800&auto=format&fit=crop",
      excerpt: "Unified reporting dashboard aggregating data from 8 platforms",
      challenge:
        "Marketing data scattered across Google Analytics, Meta Ads, HubSpot, and 5 other platforms making comprehensive reporting nearly impossible.",
      solution:
        "Automated data collection and unified reporting system pulling data from all platforms daily, normalizing metrics, and generating comprehensive dashboards automatically.",
      results: [
        { label: "Report time", value: "-90%" },
        { label: "Data accuracy", value: "99%" },
        { label: "Insights gained", value: "+70%" },
      ],
      tech: ["n8n", "Google Analytics", "Meta Ads", "HubSpot"],
    },
    {
      id: "telegram-monitoring",
      icon: MessageSquare,
      title: "Real-Time Alert System",
      category: "DevOps & Monitoring",
      client: "SaaS platform",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop",
      excerpt: "Instant business alerts via Telegram for critical events",
      challenge:
        "Delayed awareness of system issues, server problems, and critical business events leading to slow response times and customer impact.",
      solution:
        "Webhook-based real-time alerting system integrated with Telegram. Instant notifications for errors, performance issues, and business-critical events with custom priority routing.",
      results: [
        { label: "Alert speed", value: "<2s" },
        { label: "Uptime", value: "99.9%" },
        { label: "MTTR", value: "-80%" },
      ],
      tech: ["n8n", "Telegram", "PostgreSQL", "Webhooks"],
    },
    {
      id: "shopify-automation",
      icon: ShoppingCart,
      title: "Shopify Order Automation",
      category: "E-commerce",
      client: "Fashion e-commerce brand",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
      excerpt: "End-to-end order processing and customer communication",
      challenge:
        "Manual tracking updates to customers causing delays and high support ticket volume. Inconsistent communication leading to customer dissatisfaction.",
      solution:
        "Automated order workflow with customer notifications at every stage. Integrated Shopify API with Google Sheets tracking and Slack alerts for team coordination.",
      results: [
        { label: "Customer satisfaction", value: "+35%" },
        { label: "Support tickets", value: "-60%" },
        { label: "Processing time", value: "-50%" },
      ],
      tech: ["n8n", "Shopify", "Google Sheets", "Slack"],
    },
    {
      id: "hubspot-pipeline",
      icon: Building2,
      title: "HubSpot Sales Pipeline",
      category: "Sales Automation",
      client: "B2B SaaS company",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      excerpt: "Dynamic lead scoring and automated pipeline management",
      challenge:
        "Inefficient lead qualification process with manual scoring causing slow sales cycles and inconsistent deal progression.",
      solution:
        "Smart scoring algorithm with automated deal progression based on engagement metrics, behavior tracking, and custom business rules. Automated notifications and task assignments.",
      results: [
        { label: "Sales cycle", value: "-30%" },
        { label: "Win rate", value: "+25%" },
        { label: "Lead quality", value: "+45%" },
      ],
      tech: ["n8n", "HubSpot", "Zapier", "Slack"],
    },
  ];

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

            {/* Stats Bar */}
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

        {/* Social Proof */}
        <section className="py-12 px-6 border-y bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">
              Trusted by Leading Companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {trustedBy.map((client, index) => (
                <div key={index} className="text-4xl opacity-60 hover:opacity-100 transition-opacity">
                  {client.logo}
                </div>
              ))}
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

        {/* Case Studies Grid 3x3 with Expandable Details */}
        <section id="projects" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
              <p className="text-xl text-muted-foreground">Real automation projects with measurable business impact</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => {
                const isExpanded = expandedCards.has(index);

                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <project.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
                      <Badge className="absolute top-4 right-4 bg-primary">{project.category}</Badge>
                    </div>

                    <CardHeader className="flex-grow">
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{project.excerpt}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-4">
                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className="space-y-3 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div>
                            <h4 className="font-semibold text-sm text-destructive mb-1 flex items-center gap-1">
                              <AlertTriangle className="w-4 h-4" />
                              Challenge:
                            </h4>
                            <p className="text-xs text-muted-foreground">{project.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-primary mb-1 flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4" />
                              Solution:
                            </h4>
                            <p className="text-xs text-muted-foreground">{project.solution}</p>
                          </div>
                          <Separator />
                        </div>
                      )}

                      {/* Results Grid */}
                      <div className="grid grid-cols-3 gap-2">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="text-center p-2 bg-primary/5 rounded">
                            <div className="text-lg font-bold text-primary">{result.value}</div>
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

                      {/* Toggle Details Button */}
                      <Button variant="ghost" size="sm" className="w-full" onClick={() => toggleCard(index)}>
                        {isExpanded ? (
                          <>
                            Hide Details <ChevronUp className="w-4 h-4 ml-2" />
                          </>
                        ) : (
                          <>
                            Show Details <ChevronDown className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>

                      {/* View Full Case Study */}
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link to={`/case-study/${project.id}`}>
                          View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/case-studies">
                  View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
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
                <Link to="/services">
                  <DollarSign className="w-4 h-4 mr-2" /> View Pricing
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
