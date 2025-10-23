import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  Video,
  Code,
  Target,
  Clock,
  Award,
  MessageSquare,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TrainingKnowledgeService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Training & Knowledge Transfer Services - Professional Development",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Professional training programs, technical documentation, team workshops, and knowledge transfer services for AI automation and development.",
    areaServed: "Global",
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
        name: "Training & Knowledge",
      },
    ],
  };

  const features = [
    {
      icon: Users,
      title: "Custom Training Programs",
      description: "Tailored training programs designed for your team's specific needs and skill levels",
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Comprehensive documentation covering system architecture, APIs, and best practices",
    },
    {
      icon: BookOpen,
      title: "Team Workshops",
      description: "Hands-on workshops for practical learning and skill development",
    },
    {
      icon: Download,
      title: "Knowledge Handoff",
      description: "Structured knowledge transfer process ensuring team autonomy",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "On-demand video content for self-paced learning and reference",
    },
    {
      icon: MessageSquare,
      title: "Ongoing Support",
      description: "Continued support and Q&A sessions after training completion",
    },
  ];

  const trainingTypes = [
    {
      name: "n8n Workflow Development",
      duration: "3 days",
      topics: ["Workflow design", "Node configuration", "Error handling", "Best practices"],
    },
    {
      name: "AI & RAG Systems",
      duration: "5 days",
      topics: ["LLM integration", "Vector databases", "RAG pipelines", "Prompt engineering"],
    },
    {
      name: "API Development",
      duration: "4 days",
      topics: ["REST API design", "Authentication", "Webhooks", "Documentation"],
    },
    {
      name: "Custom Training",
      duration: "Flexible",
      topics: ["Your requirements", "Customized content", "Team-specific needs", "Project-based learning"],
    },
  ];

  const benefits = [
    "Expert instructors with real-world experience",
    "Practical, hands-on exercises",
    "Certificate of completion",
    "30-day post-training support",
    "All training materials included",
    "Flexible scheduling options",
  ];

  const packages = [
    {
      name: "Documentation",
      price: "$2,500",
      features: [
        "System architecture docs",
        "API documentation",
        "User guides",
        "Setup instructions",
        "Best practices guide",
        "PDF & online formats",
      ],
    },
    {
      name: "Workshop",
      price: "$5,000",
      features: [
        "2-day intensive workshop",
        "Up to 10 participants",
        "Hands-on exercises",
        "Training materials",
        "Certificate of completion",
        "14-day follow-up support",
      ],
      popular: true,
    },
    {
      name: "Full Program",
      price: "Custom",
      features: [
        "Complete training curriculum",
        "Custom documentation",
        "Multiple workshops",
        "Video tutorials",
        "Knowledge transfer process",
        "90-day ongoing support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Training & Knowledge Transfer Services - Professional Development | D2 Group"
        description="Professional training programs, technical documentation, team workshops, and knowledge transfer for AI automation and development. Empower your team with expert guidance."
        keywords="training programs, technical documentation, team workshops, knowledge transfer, professional development, n8n training, AI training"
        canonicalUrl="/services/training-knowledge"
        structuredData={[structuredData, breadcrumbStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Training & Knowledge</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Empower Your Team with
            <span className="text-primary"> Expert Training</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive training programs, technical documentation, and knowledge transfer services
            to help your team master AI automation and development.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="#packages">
                <BookOpen className="w-4 h-4 mr-2" /> View Programs
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">
                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Training Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive learning solutions for your team
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-3 text-primary" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Types */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Training Programs</h2>
            <p className="text-xl text-muted-foreground">
              Specialized training for different technology stacks
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {trainingTypes.map((training, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl">{training.name}</CardTitle>
                    <div className="flex items-center gap-1 text-primary">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">{training.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {training.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Training Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Training Packages</h2>
            <p className="text-xl text-muted-foreground">
              Choose the right training solution for your team
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all ${pkg.popular ? 'border-primary' : ''}`}>
                <CardHeader>
                  {pkg.popular && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-2 w-fit">
                      <Star className="w-3 h-3" /> Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <p className="text-3xl font-bold text-primary mt-2">{pkg.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} asChild>
                    <a href="/contact">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-4">Ready to Invest in Your Team?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your training needs and create a customized learning program for your team.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingKnowledgeService;
