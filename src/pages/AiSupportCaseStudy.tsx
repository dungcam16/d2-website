import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Clock,
  Users,
  User,
  Star,
  Zap,
  Target,
  BarChart3,
  MessageSquare,
  Globe,
  Brain,
  Shield,
  ChevronDown,
} from "lucide-react";

const AiSupportCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI-Powered Customer Support: 73% Cost Reduction, 52% CSAT Increase",
    description:
      "How TechFlow Technologies reduced support costs by 73% while improving customer satisfaction to 4.8/5 using AI-powered intelligent support automation",
    image: "https://d2group.co/assets/case-ai-support-ticket-routing.jpg",
    author: {
      "@type": "Organization",
      name: "D2 Group",
    },
    publisher: {
      "@type": "Organization",
      name: "D2 Group",
    },
    datePublished: "2025-10-23",
    dateModified: "2025-10-23",
  };

  return (
    <>
      <SEO
        title="AI Customer Support: 73% Cost Reduction Case Study | D2 Group"
        description="See how TechFlow reduced support costs by 73% while improving CSAT to 4.8/5 using AI-powered intelligent support. Full ROI analysis and implementation guide."
        keywords="AI customer support, support automation, chatbot enterprise, helpdesk AI, CSAT improvement, support cost reduction, 24/7 customer support, RAG chatbot"
        ogImage="/assets/case-ai-support-ticket-routing.jpg"
        canonicalUrl="https://d2group.co/portfolio/ai-support-ticket-routing-n8n"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10 pt-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link to="/portfolio" className="inline-block mb-8 group">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="text-lg px-6 py-2 mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Enterprise AI Automation
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                73% Cost Reduction.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent">
                52% Satisfaction Increase.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your customer support from reactive to intelligent with
              AI-powered automation that understands context, learns from
              interactions, and delivers human-quality responses at scale.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in">
                <div className="text-4xl font-bold text-primary mb-2">73%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
                <div className="text-xs text-muted-foreground mt-1">
                  $45K → $12K monthly
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-100">
                <div className="text-4xl font-bold text-primary mb-2">4.2h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Down from 18 hours
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-200">
                <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-sm text-muted-foreground">CSAT Score</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Up from 3.2/5
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-300">
                <div className="text-4xl font-bold text-primary mb-2">86%</div>
                <div className="text-sm text-muted-foreground">Automation</div>
                <div className="text-xs text-muted-foreground mt-1">
                  First-contact resolution
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="gap-2 group">
                  Schedule Your 30-Min Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                Download ROI Calculator
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary/60" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted/30 py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">
                Enterprise Implementations
              </div>
            </div>
            <div className="animate-fade-in animation-delay-100">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">
                Average Satisfaction
              </div>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <div className="text-sm text-muted-foreground">
                Conversations Handled
              </div>
            </div>
            <div className="animate-fade-in animation-delay-300">
              <div className="text-3xl font-bold text-primary mb-2">400%</div>
              <div className="text-sm text-muted-foreground">
                Average ROI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Client Overview</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet TechFlow Technologies
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20 animate-scale-in">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">TechFlow Technologies</strong> is a rapidly growing SaaS company providing project
                management solutions to mid-market enterprises across North America and
                Europe. With <strong className="text-primary">250+ customers</strong> and experiencing{" "}
                <strong className="text-primary">35% year-over-year growth</strong>, the company was scaling faster than its
                support infrastructure could handle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The company's support team had grown to 18 agents, yet response times were
                increasing and customer satisfaction declining. They faced a critical
                decision: hire more support staff (estimated cost: $400K annually) or find a
                smarter solution. They chose intelligence over headcount.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4" variant="destructive">
              The Challenge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Crisis Behind the Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TechFlow's support operation was becoming a bottleneck to growth. Customers
              were leaving not because of product quality, but because they couldn't get
              help when they needed it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pain Point 1 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Users className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Overwhelmed Support Team</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                18-person team receiving <strong>850+ tickets daily</strong>, with 60%
                being repetitive questions. Agents spent 40% of their time on questions
                they'd answered 100+ times before.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingUp className="h-4 w-4" />
                <span>$45K/month payroll + 40% annual turnover</span>
              </div>
            </Card>

            {/* Pain Point 2 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Poor Customer Experience</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Average <strong>18-hour response time</strong>. During high-volume periods,
                wait times exceeded 36 hours. CSAT score dropped from 4.2/5 to 3.2/5 in
                just six months.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingUp className="h-4 w-4" />
                <span>12% monthly churn + $180K lost revenue</span>
              </div>
            </Card>

            {/* Pain Point 3 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ticket Escalation Chaos</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Simple issues escalated unnecessarily because the ticketing system couldn't
                route intelligently. Created silos and prevented knowledge sharing.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingUp className="h-4 w-4" />
                <span>35% of tickets required 2-3 handoffs</span>
              </div>
            </Card>

            {/* Pain Point 4 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Globe className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">No After-Hours Support</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Support operated 9-5 EST only. Customers in Europe, Asia, and West Coast US
                waited 12-24 hours for responses. Time-sensitive issues had no immediate
                resolution.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingUp className="h-4 w-4" />
                <span>$35K/month lost revenue from unavailability</span>
              </div>
            </Card>
          </div>

          {/* Quote */}
          <Card className="mt-12 p-8 md:p-12 bg-gradient-to-br from-muted/50 to-primary/5 border-l-4 border-l-primary animate-fade-in">
            <div className="flex gap-4 items-start">
              <div className="text-6xl text-primary/20 leading-none">"</div>
              <div>
                <p className="text-lg md:text-xl text-foreground italic mb-4">
                  We were hiring more support staff every quarter, but the experience
                  wasn't actually getting better. Our agents were burnt out, our customers
                  were frustrated, and our CEO kept telling me we needed to find a different
                  approach. That's when we decided to explore AI.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Maria Chen</div>
                    <div className="text-sm text-muted-foreground">
                      VP of Customer Operations, TechFlow Technologies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">The Solution</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Intelligent Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional chatbots use rule-based logic. Our system understands language
              naturally, learns from interactions, and knows exactly when to involve a
              human.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conversational AI</h3>
              <p className="text-muted-foreground">
                Understands context and intent, not just keywords. Multi-turn conversations
                feel natural with perfect context retention.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-100">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Instant Response</h3>
              <p className="text-muted-foreground">
                Never sleeps, never takes breaks. Questions answered at 3 AM receive the
                same quality as 9 AM inquiries.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-200">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Escalation</h3>
              <p className="text-muted-foreground">
                Complex issues go to humans instantly with full context. Simple questions
                handled automatically with high confidence.
              </p>
            </Card>
          </div>

          {/* Tech Stack */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/30 animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Technologies Powering the Solution
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Orchestration</div>
                  <div className="text-sm text-muted-foreground">
                    n8n workflow automation
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Vector Database</div>
                  <div className="text-sm text-muted-foreground">
                    Supabase + pgvector
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">LLM & NLP</div>
                  <div className="text-sm text-muted-foreground">
                    Google Gemini 2.5 Pro + Claude 3.5 Sonnet
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Semantic Search</div>
                  <div className="text-sm text-muted-foreground">
                    Gemini Embedding 001
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Integrations</div>
                  <div className="text-sm text-muted-foreground">
                    Stripe, Salesforce, Zendesk, Intercom
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Security</div>
                  <div className="text-sm text-muted-foreground">
                    Enterprise-grade encryption & compliance
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Results & Impact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformative Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TechFlow saw immediate, dramatic impact across every metric that matters.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent hover:scale-105 transition-all duration-300 animate-scale-in">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-primary">99.7%</div>
                  <div className="text-sm text-muted-foreground">Faster</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-semibold mb-1">Response Time</div>
                <div className="text-muted-foreground">18 hours → 2.1 seconds</div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-100">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-primary">+52%</div>
                  <div className="text-sm text-muted-foreground">Improvement</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-semibold mb-1">CSAT Score</div>
                <div className="text-muted-foreground">3.2/5 → 4.8/5</div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-primary">-73%</div>
                  <div className="text-sm text-muted-foreground">Reduction</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-semibold mb-1">Support Cost</div>
                <div className="text-muted-foreground">$45K → $12K monthly</div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-primary">86%</div>
                  <div className="text-sm text-muted-foreground">Auto-Resolved</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-semibold mb-1">First-Contact Resolution</div>
                <div className="text-muted-foreground">Up from 38%</div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-400">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Coverage</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-semibold mb-1">After-Hours Support</div>
                <div className="text-muted-foreground">0 → 168 hours/week</div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-500">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-primary">-80%</div>
                  <div className="text-sm text-muted-foreground">Decrease</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-semibold mb-1">Agent Turnover</div>
                <div className="text-muted-foreground">40% → 8% annually</div>
              </div>
            </Card>
          </div>

          {/* ROI */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">ROI Analysis</h3>
              <p className="text-muted-foreground">
                Financial impact and return on investment
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Implementation Investment
                </div>
                <div className="text-4xl font-bold text-foreground">$28K</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Monthly Savings
                </div>
                <div className="text-4xl font-bold text-primary">$33K</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Break-Even Period
                </div>
                <div className="text-4xl font-bold text-primary">25 days</div>
              </div>
            </div>
            <Separator className="my-8" />
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">
                12-Month Return on Investment
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                1,314%
              </div>
              <div className="text-muted-foreground mt-2">
                $368K net benefit from $28K investment
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Client Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-right">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                "Before this system, our support team was literally drowning. What impressed
                me most isn't just the 86% automation rate—it's that our best agents are
                actually happier now. They're solving hard problems, not answering the same
                question for the thousandth time."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Kevin Martinez</div>
                  <div className="text-sm text-muted-foreground">
                    Head of Customer Support, TechFlow
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-right animation-delay-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                "The ROI calculator showed break-even in 25 days. We hit it in 23. What I
                didn't anticipate was the morale improvement. Support team turnover went
                from 40% annually to 8%. When people aren't burnt out, they actually want
                to come to work."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">
                    VP of Operations, TechFlow
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4">Ready to Transform?</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Companies That Revolutionized Their Support
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              You've seen how TechFlow achieved 73% cost reduction and 52% satisfaction
              improvement. Your company can achieve similar results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="gap-2 group">
                  <MessageSquare className="h-5 w-5" />
                  Schedule Your Free Demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                <BarChart3 className="h-5 w-5" />
                Download ROI Calculator
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Zero commitment consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">4-6 weeks implementation</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">400% average ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AiSupportCaseStudy;
