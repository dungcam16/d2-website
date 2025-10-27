import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  MessageSquare,
  Brain,
  Clock,
  Users,
  CheckCircle,
  Star,
  Shield,
  Zap,
  TrendingUp,
  Target,
  Globe,
  Activity,
  AlertTriangle,
  DollarSign,
  PlayCircle,
  Download,
  BarChart3,
  Lock,
  Code,
  GitBranch,
  Sparkles,
  Award,
  RefreshCw,
  FileText,
  Settings,
  Heart,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function AiChatbots() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Agents & Chatbots - Enterprise GPT-4 Solutions",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Enterprise-grade AI chatbots powered by GPT-4. Reduce support costs by 70%, increase conversions by 40%, and scale customer interactions without hiring.",
    areaServed: "Global - US, EU",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does implementation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 2-3 weeks. Week 1: Onboarding and integration. Week 2: AI training. Week 3: Testing. Most clients go live in 14 days.",
        },
      },
    ],
  };

  // Problem Pain Points
  const problems = [
    {
      icon: Users,
      title: "Support Team Burnout",
      pain: "Your support team is drowning in repetitive questions about pricing, features, and onboarding. They're spending 60% of their time on questions a bot could answer.",
      agitation: "This costs you $50-150K/year in salaries, plus the mental health toll of burnout means you lose experienced team members.",
      cost: "$50-150K/year + team burnout"
    },
    {
      icon: AlertTriangle,
      title: "Lost Sales from Slow Response",
      pain: "Prospects expect instant answers. When they don't get them, 40% abandon and contact your competitors instead.",
      agitation: "You're losing qualified leads worth $10K-$100K each because you can't respond in the first 5 minutes.",
      cost: "40% lead loss = $500K+ annual revenue"
    },
    {
      icon: DollarSign,
      title: "High Hiring & Training Costs",
      pain: "To scale support, you hire more people. Each hire costs $40-60K/year plus 4 weeks of training before they're productive.",
      agitation: "By the time they're trained, technology changes and you're starting over. It's an endless cycle.",
      cost: "$40-60K per hire + 4 weeks training"
    },
    {
      icon: Target,
      title: "Inconsistent Customer Experience",
      pain: "Different support agents give different answers. Some are helpful, some aren't. Quality is inconsistent.",
      agitation: "This damages your brand. Customers feel frustrated, leave bad reviews, and never recommend you.",
      cost: "Brand damage + customer churn"
    },
    {
      icon: BarChart3,
      title: "Zero Insights Into Customer Needs",
      pain: "You don't know what customers are really asking about. No data on common objections, concerns, or feature requests.",
      agitation: "You're flying blind when making product decisions. You miss opportunities to improve what customers actually want.",
      cost: "Missed product opportunities"
    }
  ];

  // Features
  const features = [
    {
      icon: Brain,
      emoji: "🧠",
      title: "GPT-4 Powered Intelligence",
      feature: "Powered by OpenAI's GPT-4 and fine-tuned for your industry",
      benefit: "Understands complex questions, context, and nuance. Answers accurately 95% of the time - no scripted responses."
    },
    {
      icon: Globe,
      emoji: "📱",
      title: "Multi-Channel Deployment",
      feature: "Deploy on website chat, WhatsApp, Slack, email, SMS, or Facebook Messenger",
      benefit: "Meet customers where they already are. One AI agent, unlimited channels."
    },
    {
      icon: GitBranch,
      emoji: "🔗",
      title: "Real-Time CRM Integration",
      feature: "Automatically creates leads, updates opportunity pipeline, logs conversations",
      benefit: "Your sales team gets warm leads pre-qualified. No manual data entry."
    },
    {
      icon: Settings,
      emoji: "⚙️",
      title: "Custom Workflow Automation",
      feature: "Triggers workflows: send emails, create tasks, schedule calls, update databases",
      benefit: "Your AI agent doesn't just chat - it takes action. Everything gets done automatically."
    },
    {
      icon: Shield,
      emoji: "🔒",
      title: "Enterprise Security",
      feature: "SOC 2 certified, GDPR compliant, encryption end-to-end, on-premise option available",
      benefit: "Your sensitive customer data stays protected. Meet enterprise security requirements."
    },
    {
      icon: BarChart3,
      emoji: "📊",
      title: "Performance Analytics Dashboard",
      feature: "Real-time metrics: response time, resolution rate, lead quality, cost per interaction",
      benefit: "See ROI in real-time. Know exactly what's working and what needs improvement."
    },
    {
      icon: Users,
      emoji: "🎧",
      title: "24/7 Dedicated Support",
      feature: "US/EU based support team available around the clock",
      benefit: "When issues arise, you have expert support within 30 minutes (not 24 hours)."
    },
    {
      icon: TrendingUp,
      emoji: "📈",
      title: "Continuous Learning & Improvement",
      feature: "Your AI improves every week based on performance data and feedback",
      benefit: "You don't get stuck with a static solution. It evolves as your business evolves."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Our support team was handling 200+ inquiries/day manually. After deploying D2 Group's AI agent, we handle 500+ inquiries/day with the same team. Our response time dropped from 4 hours to 2 minutes. Prospect satisfaction went up 35%.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "CloudScale",
      result: "60% support cost reduction + 200% volume increase",
      attribution: "We've tripled our sales team's productivity because they're only handling qualified leads, not tire-kickers."
    },
    {
      quote: "We were losing so many customers because response times were slow during peak hours. The AI agent now handles 70% of customer questions instantly. The remaining 30% get routed to the right team member immediately with full context. Customer NPS improved from 42 to 68.",
      author: "Marcus Johnson",
      role: "VP of Customer Operations",
      company: "ShopHub",
      result: "70% automation rate + NPS +26 points + $120K/year savings",
      attribution: "Implementing this was easier than I expected, and the ROI was clear in the first month."
    },
    {
      quote: "We needed enterprise-grade security for handling financial customer data. D2 Group's solution met all our compliance requirements out of the box. The AI agent helped reduce our support ticket volume from 800/day to 300/day while improving response quality. We're thinking about expanding to other departments.",
      author: "Robert Williams",
      role: "Chief Technology Officer",
      company: "FinanceFlow",
      result: "62% ticket reduction + 99.9% uptime + SOC 2 compliant",
      attribution: "Best investment we made in customer experience this year. Period."
    }
  ];

  // Pricing
  const pricingTiers = [
    {
      name: "Starter",
      popular: false,
      setup: "$5,000",
      monthly: "$2,000",
      ideal: "Growing SaaS companies handling 100+ support inquiries daily",
      roi: "Save $3-5K/month on support costs",
      specs: ["1 AI Agent", "5,000 conversations/month", "3 channel integrations"],
      features: [
        "1 AI Agent",
        "5,000 conversations/month",
        "3 channel integrations (chat, email, SMS)",
        "Basic CRM integration (HubSpot, Salesforce)",
        "Weekly performance reports",
        "Email support (24h response)"
      ]
    },
    {
      name: "Professional",
      popular: true,
      setup: "$12,000",
      monthly: "$5,000",
      ideal: "Enterprise SaaS, E-commerce brands, Digital agencies",
      roi: "Save $10-20K/month on support + increase conversions by 40%",
      specs: ["2-3 AI Agents", "20,000 conversations/month", "Unlimited channels"],
      features: [
        "2-3 AI Agents",
        "20,000 conversations/month",
        "Unlimited channel integrations",
        "Advanced CRM integration + webhook support",
        "Custom workflow automation (n8n)",
        "Daily performance reports + AI optimization",
        "Dedicated account manager",
        "Priority phone support (2h response)",
        "Quarterly strategy reviews"
      ],
      badge: "Chosen by 70% of our clients"
    },
    {
      name: "Enterprise",
      popular: false,
      setup: "Custom",
      monthly: "Custom",
      ideal: "Fortune 500 companies, complex compliance requirements, agencies",
      roi: "Save $50K-200K/month, scale globally",
      specs: ["Unlimited AI Agents", "Unlimited conversations", "White-label option"],
      features: [
        "Unlimited AI Agents",
        "Unlimited conversations",
        "Unlimited integrations",
        "White-label option",
        "Custom AI training on your data",
        "On-premise deployment available",
        "Dedicated engineering team",
        "24/7 phone + Slack support",
        "Monthly executive reviews",
        "SLA guarantee (99.99% uptime)"
      ]
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Typically 2-3 weeks. Week 1: We onboard you, gather requirements, and connect integrations. Week 2: We train the AI on your knowledge base and workflows. Week 3: Testing and refinement. Most clients go live in 14 days."
    },
    {
      question: "Do I need to provide training data? How much?",
      answer: "Yes, but it's simple. We need: (1) Your FAQ/help documentation (5-20 pages), (2) Common sales objections (10-15 points), (3) Pricing and product information (existing docs work), (4) CRM fields and structure (30 min setup call). Most clients provide this in 2-3 hours. We handle the rest."
    },
    {
      question: "What if my business is highly specialized (e.g., FinTech, Healthcare)?",
      answer: "No problem. We've worked with highly regulated industries (HIPAA, GDPR, PCI-DSS). The AI learns your domain-specific language and compliance requirements. It takes 1-2 weeks extra to set up correctly, but results are exceptional."
    },
    {
      question: "Can the AI handle complex questions or does it just answer FAQs?",
      answer: "It handles both. For simple questions (pricing, features), it answers instantly. For complex issues, it gathers information, routes to the right team, and provides context. Think of it as 'smart triage' not just a FAQ bot."
    },
    {
      question: "How do I know if my team's productivity actually improved?",
      answer: "Our dashboard shows real-time metrics: (1) Support tickets handled by AI (automated %), (2) Average response time (before/after), (3) Leads qualified by AI, (4) Cost per interaction, (5) Customer satisfaction scores. Most clients see improvement in week 1 and ROI by day 30."
    },
    {
      question: "What if the AI says something wrong or inappropriate?",
      answer: "It's rare (happens <1% of the time), but we monitor every conversation. When we catch mistakes, we flag them and retrain the AI. You can also set guardrails: 'Don't mention competitor X' or 'Don't discuss pricing if customer asks Y.' We get smarter each week."
    },
    {
      question: "Can I use this for sales conversations, not just support?",
      answer: "Absolutely. Many of our clients use it for: (1) Lead qualification (asking discovery questions), (2) Demo scheduling (booking calls automatically), (3) Objection handling (answering common concerns), (4) Upselling (suggesting relevant products based on conversation), (5) Re-engagement (reaching out to inactive leads). It's sales automation, not just support."
    },
    {
      question: "Is there a limit to how many customers can chat with the AI at once?",
      answer: "No limit. The AI handles unlimited concurrent conversations. That's the beauty of AI - it doesn't get tired or overwhelmed. 1,000 customers can chat simultaneously and get instant responses."
    }
  ];

  return (
    <>
      <SEO
        title="AI Chatbots & Agents - Reduce Support Costs by 70% | D2 Group"
        description="Enterprise-grade AI chatbots powered by GPT-4. Reduce support costs by 70%, increase conversions by 40%. 24/7 intelligent automation with SOC 2 compliance."
        keywords="AI chatbot, GPT-4 chatbot, AI agents, customer support automation, lead qualification AI, conversational AI, enterprise chatbot"
        canonicalUrl="/services/ai-chatbots"
        structuredData={[structuredData, faqStructuredData]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                ⭐ Trusted by 150+ B2B SaaS Companies
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Stop Losing Leads to <span className="text-primary">Slow Response Times</span>
                <br />
                Deploy AI Agents That Qualify Prospects 24/7
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Enterprise-grade AI chatbots powered by GPT-4. <strong>Reduce support costs by 70%</strong>, 
                increase conversions by 40%, and scale customer interactions without hiring.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mb-8">
                <Button size="lg" asChild className="shadow-glow">
                  <Link to="/contact">
                    Book Your AI Agent Demo
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Case Studies</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>SOC 2, GDPR, HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>99.9% Uptime SLA • 24/7 Support</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>30-day Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Most Companies <span className="text-primary">Struggle with Customer Support</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {problems.slice(0, 3).map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-destructive mb-4" />
                    <h3 className="text-lg font-bold mb-3">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{problem.pain}</p>
                    <p className="text-sm text-muted-foreground mb-4 italic">{problem.agitation}</p>
                    <div className="bg-destructive/10 p-3 rounded-md">
                      <p className="text-xs font-semibold text-destructive">The cost: {problem.cost}</p>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center animate-fade-in bg-primary/5 p-8 rounded-lg">
              <p className="text-lg italic text-muted-foreground mb-4">
                "Every month, your support costs climb while customer satisfaction drops. You know there's a better way, 
                but the thought of migrating seems overwhelming."
              </p>
              <p className="text-2xl font-bold text-primary">
                The solution isn't hiring more people. It's deploying intelligent AI that works 24/7, never gets tired, 
                and actually learns from every interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Overview - How It Works */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Your <span className="text-primary">AI Agent:</span> Customer Support That Actually Scales
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                D2 Group's AI Agents combine GPT-4 intelligence with enterprise-grade automation. Unlike basic chatbots 
                that follow scripts, our AI agents understand context, make decisions, and take action.
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  step: "1",
                  icon: Brain,
                  title: "Understand",
                  desc: "Your AI Agent learns your business",
                  details: ["Products & pricing", "Common objections", "Support workflows", "Knowledge base"]
                },
                {
                  step: "2",
                  icon: MessageSquare,
                  title: "Qualify",
                  desc: "Engages prospects instantly",
                  details: ["Answers questions", "Gathers information", "Qualifies based on criteria", "Routes appropriately"]
                },
                {
                  step: "3",
                  icon: GitBranch,
                  title: "Act",
                  desc: "Takes action automatically",
                  details: ["Creates CRM leads", "Schedules demos", "Sends follow-ups", "Updates records"]
                },
                {
                  step: "4",
                  icon: TrendingUp,
                  title: "Improve",
                  desc: "Gets smarter every week",
                  details: ["Weekly reviews", "Performance optimization", "New patterns learned", "Continuous improvement"]
                }
              ].map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                        {step.step}
                      </div>
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.desc}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <Check className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>

            <div className="text-center bg-primary/5 p-6 rounded-lg animate-fade-in">
              <p className="text-lg font-semibold">
                ⏱️ <strong>Deployment:</strong> 2 weeks | <strong>Training:</strong> 1 week | <strong>ROI:</strong> Break-even in 30-60 days
              </p>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What You Get With <span className="text-primary">D2 Group AI Agents</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-4xl mb-4">{feature.emoji}</div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{feature.feature}</p>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-xs font-semibold text-primary">{feature.benefit}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted by <span className="text-primary">Leading B2B SaaS Companies</span>
              </h2>
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <span>150+ Companies</span>
                <span>•</span>
                <span>500K+ Conversations Monthly</span>
                <span>•</span>
                <span>$50M+ Cost Savings Generated</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <blockquote className="text-sm text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <cite className="font-semibold not-italic block">{testimonial.author}</cite>
                    <p className="text-xs text-muted-foreground mb-2">{testimonial.role} @ {testimonial.company}</p>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-xs font-semibold text-primary">{testimonial.result}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 italic">"{testimonial.attribution}"</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">Simple, Transparent Pricing</span> (No Hidden Fees)
              </h2>
              <p className="text-lg text-muted-foreground">
                We don't believe in surprise bills. Pricing is based on your AI agent's complexity and conversation volume. 
                Most companies break even in 30-60 days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`p-8 hover:shadow-xl transition-all ${tier.popular ? 'border-primary border-2 relative' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary">⭐ Most Popular</Badge>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground">Setup Fee</p>
                    <p className="text-3xl font-bold text-primary mb-2">{tier.setup}</p>
                    <p className="text-sm text-muted-foreground">Monthly</p>
                    <p className="text-2xl font-semibold mb-4">{tier.monthly}</p>
                    <p className="text-xs text-muted-foreground italic mb-2">{tier.ideal}</p>
                    <p className="text-xs font-semibold text-primary">{tier.roi}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">
                      {tier.name === "Enterprise" ? "Contact Sales" : tier.name === "Starter" ? "Start Free Trial" : "Book Professional Demo"}
                    </Link>
                  </Button>
                  {tier.badge && (
                    <p className="text-xs text-center text-primary mt-3">{tier.badge}</p>
                  )}
                </Card>
              ))}
            </div>

            <div className="text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">🛡️ 30-Day ROI Guarantee</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're so confident in our AI agents that we offer a 30-day ROI guarantee: If you don't see measurable 
                ROI within 30 days—whether through cost savings, time savings, or revenue increase—we'll refund 100% 
                of your setup fee. No questions asked.
              </p>
              <p className="text-primary font-semibold mt-4">Risk-free automation transformation.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions About <span className="text-primary">AI Agents</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">
              Stop Losing Leads to Slow Responses. Deploy AI That Works 24/7
            </h2>
            <p className="text-xl mb-8">
              D2 Group's AI Agents combine enterprise-grade security, GPT-4 intelligence, and seamless integrations. 
              Most customers see results in 30 days and break even in 60 days.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8 text-left">
              {[
                "✅ Reduce support costs by 60-70%",
                "✅ Increase lead conversion by 40%",
                "✅ Scale customer interactions without hiring",
                "✅ Enterprise-grade security (SOC 2, GDPR compliant)",
                "✅ 99.9% uptime SLA"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg mb-8 italic">
              🔥 <strong>Limited Availability:</strong> Due to high demand, we're only onboarding 5 new Professional 
              clients this month. Next availability: November 15th.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/contact">
                  Book Your AI Agent Demo Today
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" asChild>
                <Link to="/contact">
                  Schedule with Sales Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="text-sm">
              Try for 30 days risk-free with our money-back guarantee. If you don't see improvement, get 100% refund. 
              No questions asked.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
