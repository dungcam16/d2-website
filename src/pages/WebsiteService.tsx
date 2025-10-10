import React, { useState } from "react";
import {
  Code,
  Globe,
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Settings,
  BarChart3,
  Monitor,
  Search,
  ChevronDown,
  Star,
  PlayCircle,
  Layers,
  Palette,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WebsiteService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Website Design Services",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Professional website design company. Comprehensive website design services, custom website development for businesses with competitive pricing.",
    offers: {
      "@type": "Offer",
      price: "20000000",
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
        name: "Website Design",
      },
    ],
  };

  const benefits = [
    {
      title: "Responsive Design",
      description: "Optimized for all devices",
      icon: Smartphone,
      color: "text-primary",
    },
    {
      title: "Load Speed 3s",
      description: "Maximum performance optimization",
      icon: Zap,
      color: "text-primary",
    },
    {
      title: "SEO Ready",
      description: "SEO integrated from the start",
      icon: Search,
      color: "text-primary",
    },
    {
      title: "24/7 Support",
      description: "Continuous technical support",
      icon: Shield,
      color: "text-primary",
    },
  ];

  const features = [
    {
      title: "Modern UI/UX Design",
      description: "Beautiful design, optimal experience",
      icon: Palette,
      details: ["User-centric design", "Mobile-first optimization", "Accessibility standards", "Brand consistency"],
    },
    {
      title: "Responsive Framework",
      description: "Perfect performance on all devices",
      icon: Monitor,
      details: ["Cross-browser compatibility", "Mobile optimization", "Tablet friendly", "Desktop experience"],
    },
    {
      title: "Performance Optimization",
      description: "Fast load speed, SEO friendly",
      icon: Zap,
      details: ["Image optimization", "Code minification", "CDN integration", "Caching strategy"],
    },
    {
      title: "CMS Integration",
      description: "Easy content management",
      icon: Settings,
      details: ["Content management", "User-friendly admin", "Blog system", "Media library"],
    },
    {
      title: "Analytics & Tracking",
      description: "Detailed performance monitoring",
      icon: BarChart3,
      details: ["Google Analytics", "Conversion tracking", "User behavior", "Performance metrics"],
    },
    {
      title: "Security & Maintenance",
      description: "High security, regular updates",
      icon: Shield,
      details: ["SSL certificate", "Security monitoring", "Regular updates", "Backup system"],
    },
  ];

  const technologies = [
    { name: "React", description: "Frontend framework", icon: Code },
    { name: "WordPress", description: "CMS platform", icon: Globe },
    { name: "Next.js", description: "Full-stack framework", icon: Layers },
    { name: "Tailwind CSS", description: "Styling framework", icon: Palette },
    { name: "Node.js", description: "Backend runtime", icon: Settings },
    { name: "MongoDB", description: "Database", icon: BarChart3 },
    { name: "AWS", description: "Cloud hosting", icon: Monitor },
    { name: "Cloudflare", description: "CDN & Security", icon: Shield },
  ];

  const demoWebsites = [
    {
      title: "Food & Restaurant",
      industry: "Restaurant",
      description: "Restaurant website with online menu and booking",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://hungry-raccoon.lovable.app",
      features: ["Online menu", "Reservation system", "Location map"],
    },
    {
      title: "Fashion E-commerce",
      industry: "Fashion",
      description: "Online clothing store with cart and payment",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://preview--vintage-smile-capture.lovable.app",
      features: ["Product catalog", "Shopping cart", "Payment gateway"],
    },
    {
      title: "Travel & Tourism",
      industry: "Travel",
      description: "Travel website with tour and hotel booking",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://shipped.lovable.app",
      features: ["Tour booking", "Hotel reservation", "Travel guide"],
    },
    {
      title: "E-commerce Store",
      industry: "E-commerce",
      description: "Online store with order management system",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://meal-muse-journal.lovable.app",
      features: ["Product management", "Order tracking", "Customer service"],
    },
    {
      title: "Retail Store",
      industry: "Retail",
      description: "Retail store website with inventory management",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://mobiledevs.lovable.app",
      features: ["Inventory system", "POS integration", "Customer loyalty"],
    },
    {
      title: "Solar Energy Solutions",
      industry: "Energy",
      description: "Solar energy website with calculator and simulation",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://solar-sim-showcase.lovable.app",
      features: ["Solar calculator", "Energy simulation", "Installation guide"],
    },
    {
      title: "Project Management Tool",
      industry: "Project Management",
      description: "Project management app with todo list and tracking",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://preview--project-planner-sunny.lovable.app",
      features: ["Task management", "Team collaboration", "Progress tracking"],
    },
    {
      title: "Daily Todo App",
      industry: "Productivity",
      description: "Daily task management application",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://preview--easy-daily-todo.lovable.app",
      features: ["Task scheduling", "Reminder system", "Progress tracking"],
    },
    {
      title: "AI Finance Automation",
      industry: "Finance",
      description: "AI-powered financial automation platform",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://finance-ai-automations-lab.lovable.app",
      features: ["AI automation", "Financial analysis", "Process optimization"],
    },
    {
      title: "Social Media Caption AI",
      industry: "Marketing",
      description: "Automatic caption generation tool for social media",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://reach-boost-captions-craft.lovable.app",
      features: ["AI caption generation", "SEO optimization", "Multi-platform support"],
    },
    {
      title: "Medical Compliance Platform",
      industry: "Healthcare",
      description: "Medical compliance platform for medical devices",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://vivacomply.lovable.app",
      features: ["Compliance tracking", "Medical device management", "Regulatory reports"],
    },
    {
      title: "Chat Community Platform",
      industry: "Community",
      description: "Community chat platform with water cooler chat",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://water-cooler-chat-club.lovable.app",
      features: ["Community chat", "Group discussions", "Member management"],
    },
    {
      title: "Customer Experience Analytics",
      industry: "Analytics",
      description: "Customer experience analytics tool",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://cx-truth-teller-app.lovable.app",
      features: ["CX analytics", "Customer insights", "Feedback tracking"],
    },
    {
      title: "Manga Creation Studio",
      industry: "Creative",
      description: "AI-powered webtoon and manga creation studio",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://manga-craft-boost.lovable.app",
      features: ["AI-powered creation", "Webtoon tools", "Creative workflow"],
    },
    {
      title: "Real Estate Platform",
      industry: "Real Estate",
      description: "Real estate website with search and virtual tours",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://solar-sim-showcase.lovable.app",
      features: ["Property search", "Virtual tours", "Agent profiles"],
    },
    {
      title: "Education Platform",
      industry: "Education",
      description: "Online learning platform with course management",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://shipped.lovable.app",
      features: ["Course catalog", "Online learning", "Student portal"],
    },
    {
      title: "Photography Portfolio",
      industry: "Photography",
      description: "Portfolio website for photographers and creatives",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://preview--vintage-smile-capture.lovable.app",
      features: ["Gallery showcase", "Client booking", "Portfolio management"],
    },
    {
      title: "Fitness & Gym",
      industry: "Fitness",
      description: "Gym website with class booking and membership",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://mobiledevs.lovable.app",
      features: ["Class schedules", "Membership plans", "Trainer profiles"],
    },
    {
      title: "Beauty & Spa",
      industry: "Beauty",
      description: "Spa and salon website with appointment booking",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://water-cooler-chat-club.lovable.app",
      features: ["Service booking", "Staff profiles", "Treatment packages"],
    },
    {
      title: "Law Firm",
      industry: "Legal",
      description: "Law firm website with consultation booking",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://cx-truth-teller-app.lovable.app",
      features: ["Legal services", "Case studies", "Attorney profiles"],
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform: 300% Online Sales Increase",
      metrics: "300% sales growth",
      description: "Online store with payment integration, order management and automated CRM",
      results: ["300% sales increase", "85% conversion rate", "50% bounce rate reduction"],
    },
    {
      title: "Corporate Website: 400% Traffic Increase",
      metrics: "400% more traffic",
      description: "Corporate website with SEO optimization and content marketing integration",
      results: ["400% traffic increase", "Top 3 Google rankings", "90% faster load time"],
    },
    {
      title: "SaaS Platform: 250% User Engagement",
      metrics: "250% engagement",
      description: "SaaS platform with analytics dashboard and user management system",
      results: ["250% user engagement", "99.9% uptime", "60% faster performance"],
    },
  ];

  const pricing = [
    {
      name: "LANDING PAGE",
      price: "$600",
      period: "",
      description: "Single page website, conversion optimized",
      features: [
        "Responsive design",
        "SEO optimization",
        "Contact form integration",
        "Google Analytics",
        "SSL certificate",
        "3 months support",
      ],
      popular: false,
    },
    {
      name: "BUSINESS WEBSITE",
      price: "$1,400",
      period: "",
      description: "Multi-page website with CMS",
      features: [
        "5-10 page website",
        "CMS integration",
        "Blog system",
        "Advanced SEO",
        "Social media integration",
        "6 months support",
        "Performance optimization",
      ],
      popular: true,
    },
    {
      name: "E-COMMERCE",
      price: "Custom",
      period: "",
      description: "Online store website",
      features: [
        "Product catalog",
        "Shopping cart & checkout",
        "Payment integration",
        "Order management",
        "Customer dashboard",
        "Inventory system",
        "12 months support",
      ],
      popular: false,
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Requirements analysis and project planning",
      duration: "2-3 days",
    },
    {
      step: "2",
      title: "Design & Prototype",
      description: "UI/UX design and prototype creation",
      duration: "5-7 days",
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Website development and comprehensive testing",
      duration: "10-15 days",
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "Go-live and operational support",
      duration: "ongoing",
    },
  ];

  const faqs = [
    {
      question: "How long does website development take?",
      answer: "Depends on complexity: Landing page 1-2 weeks, Business website 3-4 weeks, E-commerce 6-8 weeks.",
    },
    {
      question: "Is the website mobile responsive?",
      answer: "Yes, all our websites are responsive, perfectly optimized for all devices from mobile to desktop.",
    },
    {
      question: "Is SEO integrated from the start?",
      answer: "Yes, we integrate on-page SEO, optimize load speed, meta tags and search engine friendly URL structure.",
    },
    {
      question: "Can I manage the content myself?",
      answer: "Yes, we integrate CMS so you can easily update content, images and products.",
    },
    {
      question: "What about hosting and domain costs?",
      answer:
        "Hosting costs $80-200/year depending on package, .com domain approximately $20/year. We support initial setup.",
    },
    {
      question: "Is there support after handover?",
      answer: "Yes, we provide 3-12 months support depending on package, including bug fixes and usage guidance.",
    },
    {
      question: "Does the website integrate online payment?",
      answer: "Yes, we integrate popular payment gateways like VNPay, MoMo, ZaloPay and credit cards.",
    },
    {
      question: "Do I get the source code?",
      answer: "Yes, after project completion, you'll receive full source code and website ownership.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Professional Website Design Services - Trusted Web Design Company"
        description="Vietnam's leading website design company. Comprehensive website design services, professional custom website development with competitive pricing for businesses."
        keywords="website design services, website design company, professional website design, comprehensive website design, custom website development, website design pricing, business web design, trusted website design"
        canonicalUrl="/services/website"
        structuredData={[structuredData, breadcrumbStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                <span className="text-primary">Website Development</span>
                <br />
                <span className="text-foreground">Modern & Conversion Optimized</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Develop responsive websites with beautiful UI/UX, SEO optimized, CMS integrated and automation features.
                Increase 300% conversion rate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                  <PlayCircle className="mr-2 h-5 w-5" />
                  View Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">300+</div>
                  <div className="text-sm text-muted-foreground">projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3s</div>
                  <div className="text-sm text-muted-foreground">load time</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="gradient-card p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Website Performance</h3>
                  <div className="text-sm text-muted-foreground">Real-time metrics</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">98</div>
                    <div className="text-xs">PageSpeed Score</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">100%</div>
                    <div className="text-xs">Mobile Responsive</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">A+</div>
                    <div className="text-xs">Security Rating</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">SEO</div>
                    <div className="text-xs">Optimized</div>
                  </div>
                </div>

                <div className="h-32 rounded-lg bg-muted/30 flex items-center justify-center">
                  <div className="text-center text-sm text-muted-foreground">
                    🚀 High Performance Website
                    <br />
                    Modern tech stack & optimization
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose D2 GROUP <span className="text-primary">Website Development</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card p-6 text-center hover:shadow-elevation transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <IconComponent className={`h-12 w-12 mx-auto ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Outstanding</span> Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card p-6 hover:shadow-elevation transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>

                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Modern</span> Technology
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card p-6 text-center hover:shadow-elevation transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <IconComponent className="h-8 w-8 mx-auto text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Websites Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Demo</span> Websites by Industry
          </h2>

          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {demoWebsites.map((demo, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <Card className="gradient-card h-full hover:shadow-elevation transition-all duration-300">
                    <div className="relative">
                      <img src={demo.image} alt={demo.title} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {demo.industry}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                      <p className="text-muted-foreground mb-4">{demo.description}</p>

                      <ul className="space-y-2 mb-6">
                        {demo.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button variant="outline" className="w-full" onClick={() => window.open(demo.demoUrl, "_blank")}>
                        View Live Demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center mt-8">
            <Button size="lg" onClick={() => (window.location.href = "/contact")}>
              Request Custom Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Real Results</span> From Clients
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="gradient-card p-6 hover:shadow-elevation transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="text-sm font-medium text-primary mb-2">{study.metrics}</div>
                  <h3 className="text-lg font-bold mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                </div>

                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Development</span> Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <Card
                key={index}
                className="gradient-card p-6 text-center hover:shadow-elevation transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-3">{step.description}</p>
                <div className="text-sm font-medium text-primary">{step.duration}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Transparent</span> Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`gradient-card p-6 hover:shadow-elevation transition-all duration-300 animate-scale-in ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => (window.location.href = "/contact")}
                >
                  Choose This Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Frequently Asked</span> Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="gradient-card px-6 border-0 rounded-lg">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build an <span className="text-primary">Amazing Website</span>?
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Contact us now to receive free consultation and detailed quote for your website project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 0977 027 634
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteService;
