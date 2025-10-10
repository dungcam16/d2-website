import React from "react";
import {
  MessageCircle,
  Facebook,
  Instagram,
  Globe,
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
  Smartphone,
  Headphones,
  ChevronDown,
  Star,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const ChatbotService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise Chatbot Services",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Professional chatbot services for B2B enterprises. A comprehensive AI chatbot solution with multi-platform integration and 24/7 support.",
    offers: {
      "@type": "Offer",
      price: "5000000",
      priceCurrency: "VND",
      priceValidUntil: "2025-12-31",
    },
    areaServed: "Vietnam",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chatbot Service Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Starter Package - Basic Chatbot",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Package - Advanced Chatbot",
          },
        },
      ],
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
        name: "Chatbot Service",
      },
    ],
  };

  const benefits = [
    {
      title: "Save 80% on Costs",
      description: "Compared to a traditional support team",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      title: "Serve 24/7",
      description: "No time or time zone limitations",
      icon: Clock,
      color: "text-primary",
    },
    {
      title: "3X Conversion Increase",
      description: "Automated lead qualification",
      icon: BarChart3,
      color: "text-primary",
    },
    {
      title: "Multi-Platform Integration",
      description: "8+ channels in one dashboard",
      icon: Globe,
      color: "text-primary",
    },
  ];

  const features = [
    {
      title: "Vietnamese NLP",
      description: "Understands conversational context",
      icon: MessageCircle,
      details: [
        "Natural Language Processing",
        "Context understanding",
        "Intent recognition",
        "Multi-turn conversations",
      ],
    },
    {
      title: "Multi-Channel Hub",
      description: "Manage everything from one dashboard",
      icon: Globe,
      details: ["Unified inbox", "Cross-platform analytics", "Centralized management", "Seamless handoff"],
    },
    {
      title: "Smart Routing",
      description: "Transfer to a live agent when needed",
      icon: Settings,
      details: ["Intelligent escalation", "Agent availability", "Skill-based routing", "Priority handling"],
    },
    {
      title: "Analytics Dashboard",
      description: "Detailed performance reports",
      icon: BarChart3,
      details: ["Real-time metrics", "Conversation analytics", "Performance insights", "ROI tracking"],
    },
    {
      title: "API Integration",
      description: "Connect with existing CRM, ERP systems",
      icon: Zap,
      details: ["RESTful APIs", "Webhook support", "Real-time sync", "Custom integrations"],
    },
    {
      title: "Custom Workflows",
      description: "Automation based on business logic",
      icon: Shield,
      details: ["Visual flow builder", "Conditional logic", "Business rules", "Custom actions"],
    },
  ];

  const platforms = [
    { name: "Website", description: "Integrated widget", icon: Globe },
    { name: "Facebook Messenger", description: "Automated responses", icon: Facebook },
    { name: "Zalo OA", description: "Official Account", icon: MessageCircle },
    { name: "WhatsApp Business", description: "Business API", icon: Phone },
    { name: "Telegram", description: "Bot integration", icon: MessageCircle },
    { name: "Viber", description: "Business messages", icon: MessageCircle },
    { name: "Instagram DM", description: "Direct messages", icon: Instagram },
    { name: "Live Chat", description: "Website chat", icon: Headphones },
  ];

  const caseStudies = [
    {
      title: "E-commerce Fashion: 250% Increase in Conversion Rate",
      metrics: "250% conversion",
      description: "The chatbot assists with product consultation, order processing, and automated customer care.",
      results: ["250% increase in conversion", "70% reduction in cart abandonment", "40% increase in AOV"],
    },
    {
      title: "F&B Chain: 70% Reduction in Response Time",
      metrics: "70% faster response",
      description: "Automated table reservations, menu consultations, and feedback collection.",
      results: ["70% faster response", "300% increase in bookings", "95% customer satisfaction"],
    },
    {
      title: "Real Estate: 400% Increase in Qualified Leads",
      metrics: "400% qualified leads",
      description: "Lead qualification, property consultation, and appointment scheduling.",
      results: ["400% increase in qualified leads", "60% time saving", "85% lead conversion"],
    },
  ];

  const pricing = [
    {
      name: "STARTER",
      price: "5M VND",
      period: "/month",
      description: "2 platforms, 1000 conversations/month",
      features: [
        "2 integrated platforms",
        "1,000 conversations/month",
        "Basic Vietnamese NLP",
        "Standard templates",
        "Email support",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "BUSINESS",
      price: "12M VND",
      period: "/month",
      description: "5 platforms, 5000 conversations/month",
      features: [
        "5 integrated platforms",
        "5,000 conversations/month",
        "Advanced NLP + AI",
        "Custom workflows",
        "Priority support",
        "Advanced analytics",
        "API integrations",
      ],
      popular: true,
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: "",
      description: "Unlimited, custom features",
      features: [
        "Unlimited platforms",
        "Unlimited conversations",
        "Custom AI training",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "White-label option",
      ],
      popular: false,
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Consultation & Analysis",
      description: "Analyze needs and design the chatbot flow",
      duration: "1-2 days",
    },
    {
      step: "2",
      title: "Setup & Training",
      description: "Install the chatbot and train the AI model",
      duration: "3-5 days",
    },
    {
      step: "3",
      title: "Testing & Go-live",
      description: "Comprehensive testing and production deployment",
      duration: "2-3 days",
    },
    {
      step: "4",
      title: "Support & Optimization",
      description: "Monitoring and performance optimization",
      duration: "ongoing",
    },
  ];

  const faqs = [
    {
      question: "Does the chatbot understand natural Vietnamese?",
      answer:
        "Yes, our chatbot is specifically trained for Vietnamese with the ability to understand context, keywords, and user intent naturally.",
    },
    {
      question: "Which platforms does it integrate with?",
      answer:
        "Website, Facebook Messenger, Zalo OA, WhatsApp Business, Telegram, Viber, Instagram DM, and other platforms upon request.",
    },
    {
      question: "How long does it take to set up the chatbot?",
      answer:
        "Typically, it takes 7-10 days from contract signing to a fully operational chatbot, depending on the complexity of the requirements.",
    },
    {
      question: "Can the chatbot logic be customized for my business?",
      answer:
        "Absolutely. We design the chatbot according to the specific business logic of each company with appropriate workflows and rules.",
    },
    {
      question: "What is the monthly maintenance cost?",
      answer:
        "Costs range from 5M to 12M VND per month depending on the package, which includes hosting, maintenance, support, and a number of conversations.",
    },
    {
      question: "Can the chatbot connect to an existing CRM?",
      answer: "Yes, we support integration with popular CRMs like Salesforce, HubSpot, or custom integrations via API.",
    },
    {
      question: "How do you train the chatbot to understand my products/services?",
      answer:
        "We will work with your team to collect data, FAQs, product info, and train the chatbot to understand your specific domain knowledge.",
    },
    {
      question: "Are there analytics and insights reports?",
      answer:
        "Yes, there is a real-time dashboard with metrics on conversations, conversion rates, popular questions, user satisfaction, and ROI tracking.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Professional Chatbot Services - AI Chatbot Solutions for B2B Businesses"
        description="Vietnam's leading chatbot provider. Full-service chatbot solutions, custom chatbot design, and professional AI chatbot development for businesses with multi-platform integration."
        keywords="chatbot services, chatbot solutions for business, chatbot for B2B, chatbot provider company, AI chatbot for business, professional chatbot development, chatbot marketing agency, custom chatbot design, full-service chatbot"
        canonicalUrl="/services/chatbot"
        structuredData={[structuredData, breadcrumbStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                <span className="text-primary">Professional Chatbot Services</span>
                <br />
                <span className="text-foreground">AI Chatbot Solutions for B2B Businesses</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                A leading chatbot provider with full-service packages. Custom chatbot design, professional AI chatbot
                development for B2B businesses. Increase conversion by 300%, reduce support costs by 80%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                  Request a Free Chatbot Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Live Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50M+</div>
                  <div className="text-sm text-muted-foreground">users reached</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">300%</div>
                  <div className="text-sm text-muted-foreground">average ROAS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">automation</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="gradient-card p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Chatbot Dashboard</h3>
                  <div className="text-sm text-muted-foreground">Live conversation metrics</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">85%</div>
                    <div className="text-xs">Open Rate</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">3x</div>
                    <div className="text-xs">Higher Engagement</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">800 VND</div>
                    <div className="text-xs">Per ZNS message</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">24/7</div>
                    <div className="text-xs">Available</div>
                  </div>
                </div>

                <div className="h-32 rounded-lg bg-muted/30 flex items-center justify-center">
                  <div className="text-center text-sm text-muted-foreground">
                    📊 Interactive Chatbot Analytics
                    <br />
                    Real-time performance tracking
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
            Why Do <span className="text-primary">500+ B2B Businesses</span> Trust D2 GROUP's Chatbot Service?
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
            Outstanding <span className="text-primary">Features</span>
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

      {/* Platform Integration */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Integrate with <span className="text-primary">All Popular</span> Platforms
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card p-6 text-center hover:shadow-elevation transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <IconComponent className="h-8 w-8 mx-auto text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real <span className="text-primary">Results</span> From Our Clients
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
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Service Packages for <span className="text-primary">Every Scale</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`gradient-card p-6 relative ${plan.popular ? "border-primary shadow-glow" : ""} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => (window.location.href = "/contact")}
                >
                  {plan.price === "Custom" ? "Contact for Quote" : "Choose This Plan"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple <span className="text-primary">Implementation Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <Card
                key={index}
                className="gradient-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                <div className="text-xs text-primary font-medium">{step.duration}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none">
                <Card className="gradient-card">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">
                Start Automating Your <span className="text-primary">Customer Service</span> Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a free consultation and discover how a chatbot can transform your business operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>30-minute free consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Live demo tailored to your needs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Detailed quote within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule a Chatbot Consultation Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatbotService;
