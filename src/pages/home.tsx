import React, { useState } from "react";
import { 
  ArrowRight, Play, Zap, Bot, Workflow, MessageCircle, 
  Settings, TrendingUp, Search, Code, Target, Globe,
  BarChart3, Users, MessageSquare, Brain, Database, Cpu,
  CheckCircle, Award, Shield, Clock, Star, Sparkles,
  DollarSign, Package, Activity, FileText, Lock,
  ChevronDown, ChevronUp, Download, PlayCircle,
  Heart, GitBranch, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import heroImage from "@/assets/hero-automation-light.jpg";
import serviceN8n from "@/assets/service-n8n-automation.jpg";
import serviceAI from "@/assets/service-ai-chatbots.jpg";
import serviceZapier from "@/assets/service-zapier-migration.jpg";
import serviceNoCode from "@/assets/service-nocode-lowcode.jpg";
import serviceMarketing from "@/assets/service-marketing-automation.jpg";
import benefitTime from "@/assets/benefit-time-savings.jpg";
import benefitCost from "@/assets/benefit-cost-savings.jpg";
import benefitVisibility from "@/assets/benefit-visibility.jpg";
import benefitScale from "@/assets/benefit-scale-growth.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  const [showFaq, setShowFaq] = useState(false);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "D2 Group - AI Automation Agency",
    description: "Enterprise automation solutions that save companies 40+ hours/week and generate $50K-$200K in annual value without the complexity or cost of Zapier",
    url: "https://d2group.co",
    sameAs: ["https://facebook.com/d2group", "https://linkedin.com/company/d2group"],
    serviceArea: {
      "@type": "Place",
      name: "Global - US, Australia, Europe"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation & Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "n8n Workflow Automation",
            description: "Unlimited workflow automation with custom code support and 90% cost savings vs Zapier",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Chatbots & Agents",
            description: "GPT-4 powered chatbots with 24/7 automation and multi-language support",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zapier Migration",
            description: "Save $50K-$150K annually migrating from Zapier to n8n with zero downtime",
          },
        },
      ],
    },
  };

  // Core Services (giữ nguyên như code cũ)
  const coreServices = [
    {
      icon: Workflow,
      title: "n8n Workflow Automation",
      desc: "Build unlimited custom workflows. Connect any tool, write custom code, scale without limits.",
      features: [
        "500+ integrations",
        "Custom JavaScript support",
        "Unlimited executions",
        "Self-hosted option"
      ],
      color: "text-blue-500",
      delay: "0s",
      href: "/services/n8n-automation",
      image: serviceN8n,
    },
    {
      icon: Bot,
      title: "AI Agents & Chatbots",
      desc: "Intelligent automation that learns. Build GPT-4 powered agents that handle customer inquiries, qualify leads, and automate support—24/7.",
      features: [
        "GPT-4 powered",
        "Multi-language support",
        "Real-time learning",
        "10+ platform integration"
      ],
      color: "text-purple-500",
      delay: "0.1s",
      href: "/services/ai-chatbots",
      image: serviceAI,
    },
    {
      icon: Zap,
      title: "Zapier Migration",
      desc: "Save 90% switching from Zapier. We'll migrate all your workflows to n8n, save you $50K-$150K/year, and improve performance.",
      features: [
        "70-90% cost savings",
        "2-4 week migration",
        "Zero downtime",
        "Full training included"
      ],
      color: "text-orange-500",
      delay: "0.2s",
      href: "/services/zapier-migration",
      image: serviceZapier,
    },
    {
      icon: Code,
      title: "No-Code/Low-Code Solutions",
      desc: "Build custom applications and automations without hiring expensive developers. Deploy in weeks, not months.",
      features: [
        "Lovable.dev integration",
        "Custom logic",
        "Database design",
        "API development"
      ],
      color: "text-green-500",
      delay: "0.3s",
      href: "/services/nocode-lowcode",
      image: serviceNoCode,
    },
    {
      icon: TrendingUp,
      title: "Marketing Automation",
      desc: "Automate email, lead scoring, CRM syncing, attribution tracking. Scale campaigns without scaling your team.",
      features: [
        "Email automation",
        "Lead scoring",
        "Attribution tracking",
        "Dashboard reporting"
      ],
      color: "text-pink-500",
      delay: "0.4s",
      href: "/services/marketing-automation",
      image: serviceMarketing,
    },
  ];

  // Industry Solutions (giữ nguyên)
  const solutions = [
    {
      icon: Users,
      title: "Digital Agencies",
      desc: "Deliver better service. Scale from 10 to 50 clients with the same team size through automated client workflows.",
      href: "/solutions/digital-agencies",
      delay: "0s",
    },
    {
      icon: Target,
      title: "E-commerce Brands",
      desc: "Scale operations. 90% faster order fulfillment, 20% increase in repeat purchases through automation.",
      href: "/solutions/ecommerce-brands",
      delay: "0.1s",
    },
    {
      icon: Shield,
      title: "Fintech Companies",
      desc: "Ensure compliance. Automated KYC/AML, zero compliance violations, 99.9% uptime with automated audit trails.",
      href: "/solutions/fintech-companies",
      delay: "0.2s",
    },
    {
      icon: Cpu,
      title: "SaaS Companies",
      desc: "Accelerate growth. 40% improvement in sales velocity, 35 hours/week time saved through automated onboarding.",
      href: "/solutions/saas-companies",
      delay: "0.3s",
    },
  ];

  const stats = [
    { number: "500+", label: "Companies Trust Us", delay: "0.1s" },
    { number: "40+ Hours", label: "Saved Per Week Average", delay: "0.2s" },
    { number: "$50M+", label: "Client Value Generated", delay: "0.3s" },
    { number: "99.9%", label: "Platform Uptime", delay: "0.4s" },
  ];

  // NEW: Problem-Solution Section
  const problems = [
    {
      title: "Manual Everything",
      icon: Users,
      issues: [
        "Team spends 40+ hours/week on manual tasks",
        "Data scattered across 10+ tools",
        "Scaling requires hiring more people ($80K+ each)",
        "Error rates are 5-10% due to manual work",
        "Can't compete with automation-using competitors"
      ],
      impact: "$125K-$187K annual in wasted payroll"
    },
    {
      title: "Expensive Automation Platforms",
      icon: DollarSign,
      issues: [
        "Zapier: $800+/month at scale (per-task pricing)",
        "Complex implementation (2-3 months)",
        "Limited customization (no code support)",
        "Vendor lock-in (hard to switch)",
        "Per-task pricing kills ROI as you scale"
      ],
      impact: "$10K-$15K annually (more as you grow)"
    }
  ];

  // NEW: Key Differentiators
  const differentiators = [
    {
      icon: Sparkles,
      title: "Unlimited Executions",
      desc: "Unlike Zapier's per-task pricing, unlimited workflow executions at flat-rate pricing.",
      benefit: "Save: $50K-$200K annually"
    },
    {
      icon: Code,
      title: "Custom Code Support",
      desc: "Write custom JavaScript in workflows. Build what Zapier says is impossible.",
      benefit: "Capability: Build anything you can imagine"
    },
    {
      icon: Database,
      title: "Self-Hosted Option",
      desc: "Keep your data on YOUR infrastructure. On-premise deployment for enterprises.",
      benefit: "Security: Full data control"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "SOC 2 Type II certified, GDPR/CCPA compliant, 99.9% uptime SLA.",
      benefit: "Trust: Bank-level security"
    },
    {
      icon: BarChart3,
      title: "Proven Results",
      desc: "500+ companies generating $50M+ in value annually.",
      benefit: "Experience: 500+ successful implementations"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      desc: "Not ticket-based support. Dedicated success manager, weekly strategy calls.",
      benefit: "Partnership: True business partnership"
    }
  ];

  // NEW: Benefits with Real Impact
  const benefits = [
    {
      icon: Clock,
      title: "Get Your Team's Time Back",
      subtitle: "Save 40+ hours per week",
      description: "Your marketing team spends 40+ hours/week on manual tasks (data entry, email syncing, reporting). D2 Group automates all of it.",
      features: [
        "Save 35+ hours/week per team",
        "Eliminate manual data entry",
        "Automate repetitive workflows",
        "Focus on revenue-generating work"
      ],
      impact: "That's 2 FTE salaries worth of time ($160K+ annually)",
      image: benefitTime,
    },
    {
      icon: DollarSign,
      title: "90% Cost Savings on Automation",
      subtitle: "Cut automation costs from $800+/month to $50/month",
      description: "Zapier's per-task pricing becomes expensive fast. At 50K tasks/month, you're paying $800+. D2 Group's flat pricing means unlimited workflows.",
      features: [
        "Unlimited executions (not per-task)",
        "Flat monthly pricing ($50-$3,000)",
        "No hidden fees",
        "Save $50K-$200K annually"
      ],
      impact: "Zapier: $800/month vs D2 Group: $50/month = $9K annual savings",
      image: benefitCost,
    },
    {
      icon: BarChart3,
      title: "Complete Visibility Into Your Business",
      subtitle: "Real-time dashboards, attribution, performance tracking",
      description: "Marketing teams fly blind without proper data integration. D2 Group connects all your data into unified dashboards.",
      features: [
        "Attribution dashboards",
        "Real-time KPI tracking",
        "Process bottleneck visibility",
        "Data-driven budget allocation"
      ],
      impact: "Optimize marketing spend 30-40%, Increase ROAS by 2-3x",
      image: benefitVisibility,
    },
    {
      icon: TrendingUp,
      title: "Scale Without Hiring",
      subtitle: "Automate 5x the work with the same team",
      description: "Every new campaign usually requires hiring. Instead, automate. Handle 5x the volume with your current team.",
      features: [
        "Handle 5x transaction volume",
        "Serve 5x more customers",
        "Run 5x more campaigns",
        "Same team size"
      ],
      impact: "Hire 1 person: $80K+ vs Automate: $1K-$3K/month (ROI: 0-2 months)",
      image: benefitScale,
    }
  ];

  // NEW: FAQ Data
  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "Most clients go live in 2-4 weeks: Week 1 (Discovery & audit), Week 2-3 (Design, build, test), Week 4 (Launch & training). Fast-track option available (1-2 weeks for simple workflows)."
    },
    {
      question: "Do I need technical skills or coding knowledge?",
      answer: "No. Our team handles all technical implementation. Your job is to describe what you want to automate; we handle the how. We provide training so you understand the system, but no coding required from you."
    },
    {
      question: "How much does this cost vs Zapier?",
      answer: "Huge savings at scale: Zapier: $800+/month (at 50K tasks) vs D2 Group: $50-$3K/month (unlimited tasks). Typical savings: $50K-$200K/year. Plus better features (custom code, self-hosted, enterprise security)."
    },
    {
      question: "Can we migrate from Zapier without downtime?",
      answer: "Yes. We handle complete migration: Export all your Zaps, Map to n8n equivalents, Test thoroughly, Deploy with zero downtime, Train your team. Timeline: 2-4 weeks. Typical savings: $50K-$150K/year."
    },
    {
      question: "Is my data secure?",
      answer: "Bank-level security: SOC 2 Type II certified, GDPR & CCPA compliant, Encryption at rest & in transit, Automated compliance workflows, Audit trails for regulators, Option for self-hosted deployment. Your data is YOUR data."
    },
    {
      question: "What makes you different from other automation agencies?",
      answer: "Several things: 1) Results-focused (not just implementation), 2) Unlimited executions (not per-task pricing), 3) Custom code support (more flexible), 4) Self-hosted option (more control), 5) Proven track record (500+ clients), 6) Dedicated support (true partnership). We're not just an automation vendor—we're your automation partner."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="D2 Group — Enterprise Automation Without the Enterprise Price Tag"
        description="Save 40+ hours per week. Cut automation costs by 90%. Unlimited workflow automation with n8n. 500+ companies trust D2 Group for AI automation, chatbots, and Zapier migration."
        keywords="enterprise automation, n8n automation, Zapier migration, AI chatbots, workflow automation, save automation costs, unlimited executions, custom code automation"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section - Updated with stronger value prop */}
      <section id="main-content" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Automation Technology Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-40 animate-float" style={{ willChange: 'transform' }}>
            <Bot className="h-12 w-12 text-primary" />
          </div>
          <div className="absolute top-40 right-20 opacity-40 animate-float" style={{ willChange: 'transform', animationDelay: '0.5s' }}>
            <Workflow className="h-16 w-16 text-primary" />
          </div>
          <div className="absolute bottom-40 left-20 opacity-40 animate-float" style={{ willChange: 'transform', animationDelay: '1s' }}>
            <Zap className="h-10 w-10 text-primary" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
              <span className="block text-foreground">Enterprise Automation</span>
              <span className="block text-primary font-bold">Without the Enterprise Price Tag</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Scale your business with <span className="text-primary font-semibold">unlimited workflow automation</span>. 
              Save 40+ hours per week. Cut automation costs by 90%. No coding required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="shadow-glow group text-lg px-8 py-4 button-scale" onClick={() => window.location.href = '/company/contact'}>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg" className="tech-border group text-lg px-8 py-4 button-scale" onClick={() => window.location.href = '/resources/casestudies'}>
                <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Case Studies
              </Button>
            </div>

            {/* Trust Indicators Bar */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 max-w-5xl mx-auto">
              {[
                { icon: CheckCircle, text: "150+ Enterprise Workflows" },
                { icon: Users, text: "500+ Companies" },
                { icon: DollarSign, text: "$50M+ Client Value" },
                { icon: Star, text: "98% Satisfaction" },
                { icon: Shield, text: "99.9% Uptime SLA" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-4 w-4 text-primary" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Quick Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { icon: Zap, text: "Setup in 2 weeks" },
                { icon: GitBranch, text: "500+ integrations" },
                { icon: DollarSign, text: "Save 90% vs Zapier" },
                { icon: Shield, text: "Enterprise Security" }
              ].map((feature, index) => (
                <div key={index} className="glass-effect rounded-lg p-4 tech-border animate-scale-in" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                  <feature.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">{feature.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* NEW: Problem-Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Your Business is Stuck Between <span className="text-primary">Two Bad Options</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <Card key={index} className="gradient-card border-border tech-border animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <IconComponent className="h-10 w-10 text-destructive mr-4" />
                      <h3 className="text-2xl font-bold">OPTION {index + 1}: {problem.title}</h3>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {problem.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <span className="text-destructive mr-3 font-bold">❌</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-destructive/10 p-4 rounded-md">
                      <p className="text-sm font-semibold text-destructive">Cost Impact: {problem.impact}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center animate-fade-in">
            <p className="text-2xl font-bold text-primary mb-8">
              There's a third option that 500+ companies are using today.
            </p>
            <Button size="lg" className="shadow-glow" onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}>
              Discover The Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* NEW: The Solution Section */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              <span className="text-primary">Unlimited Automation.</span> Unlimited Growth. Unlimited Possibilities.
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              D2 Group's enterprise automation platform gives you unlimited workflows, custom code, and pricing that actually makes sense.
            </p>
          </div>

          {/* How It Works - 4 Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                step: "1",
                icon: Search,
                title: "AUDIT",
                desc: "We map your current tech stack",
                details: ["Identify manual processes", "Find quick wins", "Estimate ROI"],
                timeline: "1 week"
              },
              {
                step: "2",
                icon: FileText,
                title: "DESIGN",
                desc: "Create custom workflows for your business",
                details: ["Specific to your sales process", "Aligned with your revenue model", "Zero generic templates"],
                timeline: "1-2 weeks"
              },
              {
                step: "3",
                icon: Settings,
                title: "BUILD",
                desc: "Implement and connect your tools",
                details: ["All tools communicate automatically", "Real-time data syncing", "Full redundancy & error handling"],
                timeline: "2-3 weeks"
              },
              {
                step: "4",
                icon: TrendingUp,
                title: "SCALE",
                desc: "Continuous optimization as you grow",
                details: ["Daily monitoring", "Quarterly strategy reviews", "Add new workflows on demand"],
                timeline: "Ongoing"
              }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mr-3">
                        {step.step}
                      </div>
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{step.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs text-primary font-semibold">Timeline: {step.timeline}</div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="shadow-glow" onClick={() => window.location.href = '/company/contact'}>
              Start Your Free Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section - Giữ nguyên nhưng update mô tả */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Automation Solutions for <span className="text-primary">Every Business Need</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete automation solutions designed to transform your business through intelligent technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: service.delay }}
                >
                  <div className="shimmer-effect">
                    <div className="p-8 relative z-10">
                      {/* Service Image */}
                      <div className="relative mb-6 w-full h-48 rounded-lg overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                        <div className={`absolute bottom-4 left-4 inline-flex p-3 rounded-xl bg-card/80 backdrop-blur-sm ${service.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="outline"
                        className="w-full tech-border group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        onClick={() => (window.location.href = service.href)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }}></div>
      </section>

      {/* Solutions by Industry - Giữ nguyên */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Automation Built for <span className="text-primary">Your Industry</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored automation strategies with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in cursor-pointer"
                  style={{ animationDelay: solution.delay }}
                  onClick={() => (window.location.href = solution.href)}
                >
                  <div className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">{solution.desc}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:text-primary transition-colors"
                    >
                      View Solutions
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: Benefits Section with Real Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              The Real Impact of <span className="text-primary">Enterprise Automation</span>
            </h2>
          </div>

          <div className="space-y-20">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6">
                      <IconComponent className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-xl text-primary font-semibold mb-4">{benefit.subtitle}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{benefit.description}</p>
                    <ul className="space-y-3 mb-6">
                      {benefit.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-primary/10 p-4 rounded-md">
                      <p className="font-semibold text-primary">{benefit.impact}</p>
                    </div>
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="relative rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: Key Differentiators */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Why <span className="text-primary">D2 Group</span> is Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => {
              const IconComponent = diff.icon;
              return (
                <Card key={index} className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-6">
                    <IconComponent className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{diff.desc}</p>
                    <div className="bg-primary/10 p-3 rounded-md">
                      <p className="text-xs font-semibold text-primary">{diff.benefit}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: stat.delay }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Common Questions, <span className="text-primary">Answered</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg px-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">Still have questions?</p>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '/company/contact'}>
              Talk to Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 animate-pulse">
            Stop Manually Managing Your Business
          </h2>
          <p className="text-xl mb-4">Scale operations. Reduce costs. Increase revenue.</p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Your team has unlimited potential. They're just stuck managing systems instead of driving growth. 
            Give them back their time. Automate everything else.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto text-left">
            <p className="text-lg font-semibold mb-4">In 4 weeks, you could have:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "40+ hours/week of time back",
                "Real-time visibility into your business",
                "Fully automated core processes",
                "$50K-$200K+ in annual value",
                "A team that's energized, not burned out"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="shadow-glow text-lg px-8 py-4" onClick={() => window.location.href = '/company/contact'}>
              Start Free Discovery Call
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-lg px-8 py-4" onClick={() => window.location.href = '/resources/roi-calculator'}>
              Calculate Your ROI
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Can cancel anytime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Free consultation today</span>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
