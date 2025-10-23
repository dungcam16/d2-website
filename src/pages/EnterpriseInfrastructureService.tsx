import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Server,
  Shield,
  TrendingUp,
  Globe,
  Lock,
  Database,
  CloudCog,
  FileCheck,
  BarChart3,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EnterpriseInfrastructureService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise Infrastructure Services - Scalability & Compliance",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Enterprise-grade infrastructure services including scalability planning, optimization, compliance management, and disaster recovery solutions.",
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
        name: "Enterprise Infrastructure",
      },
    ],
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Scalability Planning",
      description: "Design infrastructure that grows with your business, handling increased load seamlessly",
    },
    {
      icon: CloudCog,
      title: "Infrastructure Optimization",
      description: "Maximize resource efficiency and reduce costs while maintaining peak performance",
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Ensure adherence to industry standards including GDPR, HIPAA, SOC 2, and ISO 27001",
    },
    {
      icon: Database,
      title: "Disaster Recovery",
      description: "Comprehensive backup strategies and rapid recovery procedures for business continuity",
    },
    {
      icon: Shield,
      title: "Security Architecture",
      description: "Multi-layered security approach with encryption, access controls, and threat detection",
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Real-time monitoring and analytics for infrastructure health and optimization",
    },
  ];

  const capabilities = [
    {
      category: "Cloud Infrastructure",
      items: ["AWS, Azure, GCP deployment", "Multi-cloud strategies", "Hybrid cloud solutions", "Container orchestration (Kubernetes)"],
    },
    {
      category: "Security & Compliance",
      items: ["Security audits & assessments", "Compliance certification support", "Data encryption & protection", "Access management (IAM)"],
    },
    {
      category: "Performance & Reliability",
      items: ["Load balancing & auto-scaling", "CDN integration", "Database optimization", "99.9% uptime SLA"],
    },
    {
      category: "Disaster Recovery",
      items: ["Automated backup systems", "Multi-region redundancy", "Recovery time objectives (RTO)", "Business continuity planning"],
    },
  ];

  const benefits = [
    "Enterprise-grade reliability",
    "Cost optimization strategies",
    "Scalable architecture design",
    "24/7 infrastructure monitoring",
    "Compliance-ready systems",
    "Disaster recovery planning",
  ];

  const packages = [
    {
      name: "Standard",
      price: "$5,000/month",
      features: [
        "Single cloud deployment",
        "Basic security setup",
        "Monthly health reports",
        "Standard backup solutions",
        "Email support",
        "99.5% uptime SLA",
      ],
    },
    {
      name: "Professional",
      price: "$10,000/month",
      features: [
        "Multi-cloud deployment",
        "Advanced security architecture",
        "Weekly performance reviews",
        "Automated disaster recovery",
        "Priority support",
        "99.9% uptime SLA",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Global infrastructure",
        "Custom compliance solutions",
        "Real-time monitoring dashboards",
        "24/7 dedicated support team",
        "Custom SLA agreements",
        "Zero-downtime deployments",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Enterprise Infrastructure Services - Scalability & Compliance | D2 Group"
        description="Enterprise-grade infrastructure services with scalability planning, optimization, compliance management, and disaster recovery. Build resilient, scalable systems."
        keywords="enterprise infrastructure, cloud infrastructure, scalability, compliance, disaster recovery, AWS, Azure, GCP, Kubernetes"
        canonicalUrl="/services/enterprise-infrastructure"
        structuredData={[structuredData, breadcrumbStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Server className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build Scalable, Secure
            <span className="text-primary"> Enterprise Infrastructure</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Enterprise-grade infrastructure solutions designed for scalability, security, and compliance.
            From cloud deployment to disaster recovery, we build resilient systems that grow with your business.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="#packages">
                <Globe className="w-4 h-4 mr-2" /> View Solutions
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
            <h2 className="text-4xl font-bold mb-4">Infrastructure Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive infrastructure solutions for enterprise needs
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

      {/* Capabilities */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive infrastructure expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl">{capability.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
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
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Infrastructure Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary flex-shrink-0" />
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
            <h2 className="text-4xl font-bold mb-4">Infrastructure Packages</h2>
            <p className="text-xl text-muted-foreground">
              Choose the right infrastructure solution for your scale
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
          <Lock className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-4">Ready to Build Enterprise-Grade Infrastructure?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your infrastructure needs and create a scalable, secure solution for your business.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Get a Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseInfrastructureService;
