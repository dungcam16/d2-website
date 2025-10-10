import React, { useState } from "react";
import {
  MessageCircle,
  Users,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Smartphone,
  BarChart3,
  Settings,
  Zap,
  Star,
  PlayCircle,
  Calendar,
  Phone,
  Mail,
  Globe,
  Target,
  Award,
  Timer,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ZaloService = () => {
  const [roiData, setRoiData] = useState({
    monthlyBudget: "",
    currentConversion: "",
    targetConversion: "",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Zalo OA Services - Setup and Management of Zalo Official Account",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Professional Zalo OA service provider. Comprehensive Zalo OA setup services, management and deployment of Zalo Official Account for B2B businesses.",
    offers: {
      "@type": "Offer",
      price: "8000000",
      priceCurrency: "VND",
    },
    areaServed: "Vietnam",
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
        name: "Zalo OA Services",
      },
    ],
  };

  const marketStats = [
    {
      number: "50M+",
      label: "active users",
      icon: Users,
    },
    {
      number: "85%",
      label: "open rate vs 20% email",
      icon: BarChart3,
    },
    {
      number: "3x",
      label: "higher engagement vs Facebook",
      icon: TrendingUp,
    },
    {
      number: "800-1200đ",
      label: "ZNS cost per message",
      icon: MessageCircle,
    },
  ];

  const services = [
    {
      icon: Settings,
      title: "OA Setup & Verification",
      description: "From registration to official approval, complete process support",
      features: ["OA registration", "Business verification", "Profile optimization"],
    },
    {
      icon: Calendar,
      title: "Content Strategy",
      description: "Automated posting schedule, engagement-optimized content calendar",
      features: ["Content calendar", "Auto posting", "Engagement tracking"],
    },
    {
      icon: Zap,
      title: "ZNS Automation",
      description: "Professional triggered messages and customer journey automation",
      features: ["Welcome series", "Cart abandonment", "Transaction updates"],
    },
    {
      icon: BarChart3,
      title: "Mini CRM Integration",
      description: "Lead management, customer data and lifecycle marketing",
      features: ["Lead management", "Customer segmentation", "Lifecycle tracking"],
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Performance tracking, ROI reports and detailed insights",
      features: ["Real-time analytics", "ROI tracking", "Custom reports"],
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Technical support and in-depth strategy consulting",
      features: ["Technical support", "Strategy consulting", "Performance optimization"],
    },
  ];

  const automationScenarios = [
    {
      title: "Welcome Series",
      description: "Welcome new customers with personalized message sequences",
      trigger: "When user follows OA for first time",
    },
    {
      title: "Abandoned Cart",
      description: "Remind forgotten carts with attractive offers",
      trigger: "15 minutes after adding to cart",
    },
    {
      title: "Birthday/Anniversary",
      description: "Personalized offers on customer's special occasions",
      trigger: "Birthday or anniversary date",
    },
    {
      title: "Re-engagement",
      description: "Win-back inactive customers with specialized campaigns",
      trigger: "30 days of no interaction",
    },
    {
      title: "Transaction Updates",
      description: "Automated real-time order status and shipping updates",
      trigger: "When order status changes",
    },
    {
      title: "Survey & Feedback",
      description: "Post-purchase experience to improve service quality",
      trigger: "48 hours after delivery",
    },
  ];

  const industryTargets = [
    {
      industry: "E-commerce",
      solutions: "Cart recovery, product updates, reviews collection",
      icon: "🛒",
    },
    {
      industry: "F&B",
      solutions: "Menu updates, delivery status, loyalty programs",
      icon: "🍔",
    },
    {
      industry: "Real Estate",
      solutions: "Property alerts, viewing appointments, market updates",
      icon: "🏠",
    },
    {
      industry: "Healthcare",
      solutions: "Appointment reminders, health tips, test results",
      icon: "🏥",
    },
    {
      industry: "Education",
      solutions: "Course updates, exam schedules, grade notifications",
      icon: "🎓",
    },
    {
      industry: "Financial",
      solutions: "Transaction alerts, payment reminders, investment tips",
      icon: "💰",
    },
  ];

  const successMetrics = [
    { metric: "Message delivery rate", value: "98.5%", trend: "+2.3%" },
    { metric: "Open rate", value: "85%", trend: "+12%" },
    { metric: "Click-through rate", value: "15%", trend: "+8.5%" },
    { metric: "Conversion rate", value: "8.2%", trend: "+4.1%" },
    { metric: "ROAS", value: "300%", trend: "+45%" },
    { metric: "Customer retention", value: "+45%", trend: "+15%" },
  ];

  const implementationSteps = [
    {
      day: "Day 1-2",
      title: "OA Setup & Verification",
      description: "OA registration, verification submission and profile setup",
    },
    {
      day: "Day 3-4",
      title: "Content Strategy Design",
      description: "Content strategy, automation design and workflow mapping",
    },
    {
      day: "Day 5-6",
      title: "Integration & Testing",
      description: "Integration setup, testing and quality assurance",
    },
    {
      day: "Day 7",
      title: "Go-live & Training",
      description: "Go-live deployment, training handover and documentation",
    },
  ];

  const caseStudies = [
    {
      company: "The Gioi Di Dong",
      industry: "E-commerce",
      challenge: "Low conversion rate from social traffic",
      solution: "Automated Zalo OA funnel with personalized offers",
      results: "350% conversion increase, 25% AOV increase, 2M+ leads/month",
      testimonial: "Zalo OA automation completely transformed how we approach customers. ROI exceeded expectations.",
      author: "Nguyen Van A - Marketing Director",
    },
    {
      company: "Highlands Coffee",
      industry: "F&B Chain",
      challenge: "Customer retention and loyalty program effectiveness",
      solution: "ZNS automation for loyalty rewards and personalized offers",
      results: "40% repeat purchase increase, 60% app engagement increase",
      testimonial: "Customers prefer receiving offers via Zalo over email. Engagement rate is much higher.",
      author: "Tran Thi B - CRM Manager",
    },
    {
      company: "Novaland",
      industry: "Real Estate",
      challenge: "Effective lead qualification and follow-up",
      solution: "Zalo OA with AI chatbot and automated nurturing sequences",
      results: "200% qualified leads increase, 50% cost per lead reduction",
      testimonial:
        "The lead nurturing system via Zalo helps sales team focus on hot leads, closing rate significantly increased.",
      author: "Le Van C - Sales Director",
    },
    {
      company: "VinFast",
      industry: "Automotive",
      challenge: "Customer service and after-sales support",
      solution: "ZNS automation for service reminders and customer support",
      results: "85% customer satisfaction, 30% support tickets reduction",
      testimonial: "Automated service reminders via Zalo ensure customers never forget maintenance schedules.",
      author: "Pham Thi D - Customer Success",
    },
  ];

  const calculateROI = () => {
    const budget = parseFloat(roiData.monthlyBudget) || 0;
    const current = parseFloat(roiData.currentConversion) || 0;
    const target = parseFloat(roiData.targetConversion) || 0;

    if (budget && current && target) {
      const improvement = ((target - current) / current) * 100;
      const additionalRevenue = (budget * (target - current)) / 100;
      const roiPercentage = (additionalRevenue / (budget * 0.3)) * 100;

      return {
        improvement: improvement.toFixed(1),
        additionalRevenue: additionalRevenue.toLocaleString(),
        roi: roiPercentage.toFixed(0),
      };
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Professional Zalo OA Services - Setup and Management of Zalo Official Account"
        description="Vietnam's leading Zalo OA service provider. Comprehensive Zalo OA setup services, professional management, deployment and verification of Zalo OA for B2B businesses."
        keywords="zalo oa services, zalo oa management services, comprehensive zalo oa setup, zalo oa service provider, zalo oa solutions for businesses, professional zalo oa deployment, zalo oa verification services, zalo oa gold badge, zalo oa for b2b businesses, create zalo oa for business"
        canonicalUrl="/services/zalo"
        structuredData={[structuredData, breadcrumbStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">#1 Vietnam</div>
                <div className="bg-green-500 px-3 py-1 rounded-full text-sm font-medium">Official Partner</div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6 text-foreground">
                Professional Zalo OA Services
                <br />
                <span className="text-primary">Complete Setup & Management Solutions</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive Zalo OA service provider from setup, verification to professional management. Deploy Zalo
                OA for B2B businesses with ZNS automation and CRM integration. 50M+ Zalo users = golden opportunity for
                your business.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50M+</div>
                  <div className="text-sm text-muted-foreground">users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">300%</div>
                  <div className="text-sm text-muted-foreground">ROAS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">automation</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="shadow-glow text-lg px-8"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Free OA Setup
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="tech-border"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  View Live Demo
                </Button>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
                <div className="bg-white rounded-lg p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Zalo OA Dashboard</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Messages sent today</span>
                      <span className="font-bold text-blue-600">2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Open rate</span>
                      <span className="font-bold text-green-600">85.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Conversion rate</span>
                      <span className="font-bold text-purple-600">12.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vietnam Market Advantage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Why Zalo OA is the #1 Marketing Channel in Vietnam?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers don't lie - Zalo dominates Vietnamese messaging market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-6">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All-in-One Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Comprehensive Services From A to Z
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From OA setup to campaign optimization - we handle everything
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ZNS Automation Deep Dive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              ZNS Automation - Right Message, Right Person, Right Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart triggers and behavioral automation to maximize engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationScenarios.map((scenario, index) => (
              <Card
                key={scenario.title}
                className="hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-gray-900">{scenario.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{scenario.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-xs font-medium text-blue-600">TRIGGER:</span>
                    <p className="text-sm text-blue-800 mt-1">{scenario.trigger}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for each industry with verified best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryTargets.map((industry, index) => (
              <Card
                key={industry.industry}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold font-heading mb-3 text-gray-900">{industry.industry}</h3>
                  <p className="text-gray-600">{industry.solutions}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">Measurable Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real metrics dashboard from live campaigns</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successMetrics.map((metric, index) => (
                <div
                  key={metric.metric}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-gray-700 font-medium mb-2">{metric.metric}</div>
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">{metric.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              7-Day Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From zero to hero - go live with Zalo OA automation in just 1 week
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={step.day} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {step.day}
                  </div>
                  {index < implementationSteps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 z-0"
                      style={{ transform: "translateX(50%)" }}
                    ></div>
                  )}
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparent */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Transparent Pricing, No Hidden Fees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Detailed investment breakdown with ROI calculator</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pricing Table */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">Service Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <div className="font-semibold">Setup Fee</div>
                    <div className="text-sm text-gray-600">One-time setup & configuration</div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">3,000,000đ</div>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <div className="font-semibold">Monthly Retainer</div>
                    <div className="text-sm text-gray-600">Management & optimization</div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">5,000,000đ/month</div>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <div className="font-semibold">ZNS Credits</div>
                    <div className="text-sm text-gray-600">Pay-as-use messaging</div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">800-1200đ/message</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Additional Services</div>
                    <div className="text-sm text-gray-600">Custom development & integrations</div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">Custom quote</div>
                </div>
              </CardContent>
            </Card>

            {/* ROI Calculator */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold flex items-center justify-center gap-2">
                  <Calculator className="w-6 h-6" />
                  ROI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Marketing Budget (VND)</label>
                  <Input
                    type="number"
                    placeholder="50,000,000"
                    value={roiData.monthlyBudget}
                    onChange={(e) => setRoiData({ ...roiData, monthlyBudget: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Current Conversion Rate (%)</label>
                  <Input
                    type="number"
                    placeholder="2.5"
                    value={roiData.currentConversion}
                    onChange={(e) => setRoiData({ ...roiData, currentConversion: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Target Conversion Rate (%)</label>
                  <Input
                    type="number"
                    placeholder="8.0"
                    value={roiData.targetConversion}
                    onChange={(e) => setRoiData({ ...roiData, targetConversion: e.target.value })}
                  />
                </div>

                {calculateROI() && (
                  <div className="bg-white rounded-lg p-4 mt-6">
                    <h4 className="font-bold mb-3">Projected Results:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Conversion Improvement:</span>
                        <span className="font-bold text-green-600">+{calculateROI()?.improvement}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Revenue/Month:</span>
                        <span className="font-bold text-blue-600">{calculateROI()?.additionalRevenue}đ</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROI:</span>
                        <span className="font-bold text-purple-600">{calculateROI()?.roi}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Success Stories From Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from major brands implementing Zalo OA automation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={study.company}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-gray-900">{study.company}</h3>
                      <span className="text-sm text-blue-600">{study.industry}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-1">Solution:</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm text-green-700 mb-1">Results:</h4>
                      <p className="text-sm font-medium text-green-800">{study.results}</p>
                    </div>

                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                      "{study.testimonial}"<footer className="text-sm text-gray-500 mt-2">- {study.author}</footer>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-foreground">
              Don't Let Competitors Overtake You on Zalo
            </h2>
            <div className="bg-red-500 inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              🔥 Only accepting 10 new clients per month
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Limited slots to ensure quality service. Book now to secure your spot!
            </p>
          </div>

          <Button size="lg" className="shadow-glow text-lg px-8" onClick={() => (window.location.href = "/contact")}>
            Register for Free OA Setup
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZaloService;
