import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Settings,
  Monitor,
  Shield,
  AlertCircle,
  Clock,
  TrendingUp,
  Activity,
  FileText,
  Zap,
  RefreshCw,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SupportOptimizationService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Support & Optimization Services - 24/7 Monitoring & Maintenance",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Professional support and optimization services with 24/7 monitoring, performance tuning, bug fixes, and security updates for your systems.",
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
        name: "Support & Optimization",
      },
    ],
  };

  const features = [
    {
      icon: Monitor,
      title: "24/7 System Monitoring",
      description: "Round-the-clock monitoring of your systems with real-time alerts and proactive issue detection",
    },
    {
      icon: TrendingUp,
      title: "Performance Tuning",
      description: "Continuous optimization of system performance, response times, and resource utilization",
    },
    {
      icon: AlertCircle,
      title: "Bug Fixes & Patches",
      description: "Rapid response to bugs and issues with comprehensive testing and deployment",
    },
    {
      icon: Shield,
      title: "Security Updates",
      description: "Regular security patches, vulnerability assessments, and compliance monitoring",
    },
    {
      icon: Activity,
      title: "Health Checks",
      description: "Scheduled system health assessments and detailed performance reports",
    },
    {
      icon: RefreshCw,
      title: "Backup & Recovery",
      description: "Automated backup solutions and disaster recovery planning",
    },
  ];

  const benefits = [
    "99.9% uptime guarantee",
    "Average response time < 15 minutes",
    "Dedicated support team",
    "Regular performance reports",
    "Proactive issue prevention",
    "Cost optimization recommendations",
  ];

  const packages = [
    {
      name: "Essential",
      price: "$999/month",
      features: [
        "Business hours monitoring (9-5)",
        "Monthly health checks",
        "Email support",
        "2-hour response time",
        "Basic security updates",
        "Quarterly reports",
      ],
    },
    {
      name: "Professional",
      price: "$1,999/month",
      features: [
        "24/7 monitoring & alerts",
        "Weekly health checks",
        "Priority email & chat support",
        "30-minute response time",
        "Advanced security updates",
        "Monthly reports",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "24/7 dedicated monitoring team",
        "Daily health checks",
        "Phone, email & chat support",
        "15-minute response time",
        "Custom security solutions",
        "Real-time dashboards",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Support & Optimization Services - 24/7 Monitoring & Maintenance | D2 Group"
        description="Professional support and optimization services with 24/7 monitoring, performance tuning, bug fixes, and security updates. Keep your systems running smoothly."
        keywords="24/7 monitoring, system optimization, performance tuning, bug fixes, security updates, technical support, maintenance services"
        canonicalUrl="/services/support-optimization"
        structuredData={[structuredData, breadcrumbStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Support & Optimization</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            24/7 Support & System
            <span className="text-primary"> Optimization</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Keep your systems running at peak performance with our comprehensive support and optimization services.
            We monitor, maintain, and optimize your infrastructure 24/7.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="#packages">
                <Clock className="w-4 h-4 mr-2" /> View Packages
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Support Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support to keep your systems healthy and performant
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

      {/* Benefits */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Support</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Support Packages</h2>
            <p className="text-xl text-muted-foreground">
              Choose the right level of support for your needs
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
          <h2 className="text-4xl font-bold mb-4">Ready to Ensure System Reliability?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our support and optimization services can keep your systems running smoothly.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportOptimizationService;
