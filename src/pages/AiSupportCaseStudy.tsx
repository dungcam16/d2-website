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
  AlertCircle,
  RefreshCw,
  BookOpen,
  TrendingDown,
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
                73% Reduction in Support Costs.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent">
                52% Increase in Customer Satisfaction.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your customer support from reactive to intelligent with AI-powered automation that understands
              context, learns from interactions, and delivers human-quality responses at scale.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in">
                <div className="text-4xl font-bold text-primary mb-2">73%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
                <div className="text-xs text-muted-foreground mt-1">$45K → $12K monthly</div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-100">
                <div className="text-4xl font-bold text-primary mb-2">4.2h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
                <div className="text-xs text-muted-foreground mt-1">Down from 18 hours</div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-200">
                <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-sm text-muted-foreground">CSAT Score</div>
                <div className="text-xs text-muted-foreground mt-1">Up from 3.2/5</div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-300">
                <div className="text-4xl font-bold text-primary mb-2">86%</div>
                <div className="text-sm text-muted-foreground">Automation</div>
                <div className="text-xs text-muted-foreground mt-1">First-contact resolution</div>
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
              <div className="text-sm text-muted-foreground">Enterprise Implementations</div>
            </div>
            <div className="animate-fade-in animation-delay-100">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Satisfaction</div>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <div className="text-sm text-muted-foreground">Conversations Handled</div>
            </div>
            <div className="animate-fade-in animation-delay-300">
              <div className="text-3xl font-bold text-primary mb-2">400%</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Client Overview</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet TechFlow Technologies</h2>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20 animate-scale-in">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">TechFlow Technologies</strong> is a rapidly growing SaaS company
                providing project management solutions to mid-market enterprises across North America and Europe. With{" "}
                <strong className="text-primary">250+ customers</strong> and experiencing{" "}
                <strong className="text-primary">35% year-over-year growth</strong>, the company was scaling faster than
                its support infrastructure could handle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The company's support team had grown to 18 agents, yet response times were increasing and customer
                satisfaction declining. They faced a critical decision: hire more support staff (estimated cost:{" "}
                <strong className="text-foreground">$400K annually</strong>) or find a smarter solution. They chose
                intelligence over headcount.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Crisis Behind the Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TechFlow's support operation was becoming a bottleneck to growth. While their product was best-in-class,
              customers were leaving not because of product quality, but because they couldn't get help when they needed
              it.
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
                The 18-person team was receiving <strong>850+ tickets daily</strong>, with 60% being common, repetitive
                questions (password resets, billing questions, feature location). Agents spent 40% of their time on
                questions they'd answered 100+ times before. This wasn't just inefficient—it was demoralizing for the
                team and frustrating for customers who waited 16-18 hours for basic answers.
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
                Customers experienced an average <strong>18-hour response time</strong>. During high-volume periods (end
                of quarter, product launches), wait times exceeded 36 hours. The company's CSAT score had dropped from
                4.2/5 to 3.2/5 in just six months. Worst of all, customers couldn't get help outside business
                hours—leaving them stuck at critical moments.
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
                Simple issues escalated to human agents because the ticketing system couldn't route intelligently. A
                question about pricing got routed to a billing specialist; a question about feature usage went to a
                product specialist. This created silos and prevented knowledge sharing.
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
                  <BookOpen className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Knowledge Scattered Across Systems</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Help documentation existed across 4 different platforms: help center, wiki, email templates, and chat
                transcripts. This fragmentation meant agents had to search multiple sources to answer a single question,
                while customers couldn't find answers in the help center even when they existed.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <RefreshCw className="h-4 w-4" />
                <span>25% repeat ticket rate on same issues</span>
              </div>
            </Card>

            {/* Pain Point 5 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-400 md:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Globe className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">No After-Hours Support</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                The company operated support during 9-5 EST only. Customers in Europe, Asia, and even West Coast US were
                sending emails that went unanswered for 12-24 hours. Time-sensitive issues (account locked, payment
                failures) had no immediate resolution path.
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
                  We were hiring more support staff every quarter, but the experience wasn't actually getting better.
                  Our agents were burnt out, our customers were frustrated, and our CEO kept telling me we needed to
                  find a different approach. That's when we decided to explore AI.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Intelligent Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional chatbots use rule-based logic. Our system understands language naturally, learns from
              interactions, and knows exactly when to involve a human.
            </p>
          </div>

          {/* Why Different Section */}
          <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-card to-muted/30 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Why AI-Powered Customer Support Is Different</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Most companies view customer support as a cost center to be minimized. TechFlow viewed it as a{" "}
                <strong className="text-foreground">competitive advantage</strong> to be optimized. The difference is
                how you think about AI's role.
              </p>
              <p className="leading-relaxed">
                Traditional chatbots use rule-based logic: "If user says X, respond with Y." This creates frustrating
                conversations where customers feel like they're talking to a broken system, not a helpful assistant. The
                chatbot doesn't understand context, can't handle variations, and has no memory beyond the current
                conversation.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Intelligent AI support systems are fundamentally different.</strong>{" "}
                They understand language naturally, learn from past interactions, understand your business context, and
                know exactly when to involve a human. They don't replace your support team—they amplify it, letting
                agents focus on the complex, high-value conversations that actually need human judgment.
              </p>
            </div>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conversational AI</h3>
              <p className="text-muted-foreground">
                Understands context and intent, not just keywords. Multi-turn conversations feel natural with perfect
                context retention. The system remembers everything about each customer's history, previous issues, and
                preferred solutions.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-100">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Instant Response</h3>
              <p className="text-muted-foreground">
                Never sleeps, never takes breaks. Questions answered at 3 AM receive the same quality as 9 AM inquiries.
                Support availability goes from 40 hours/week to 168 hours/week.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-200">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Escalation</h3>
              <p className="text-muted-foreground">
                Complex issues go to humans instantly with full context. Simple questions handled automatically with
                high confidence. When escalation happens, agents see the full conversation, AI's analysis, and suggested
                solutions.
              </p>
            </Card>
          </div>

          {/* The Customer Journey */}
          <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">How It Works: The Customer Journey</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customer Reaches Out</h4>
                  <p className="text-muted-foreground text-sm">
                    A customer with an urgent question submits a support ticket or starts a chat at 11 PM on a Saturday.
                    With traditional support, this gets queued until Monday morning. With the AI system, the
                    conversation begins immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Intelligent Understanding</h4>
                  <p className="text-muted-foreground text-sm">
                    The AI reads the message and understands not just the words, but the intent. "I can't log in" isn't
                    just about authentication—the system recognizes this customer has been a loyal user for 18 months,
                    recently renewed their contract, and has a critical project deadline Monday. Context matters.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Instant Response</h4>
                  <p className="text-muted-foreground text-sm">
                    The system searches the knowledge base for relevant solutions, finds the most relevant 5 articles,
                    and composes a response in the customer's tone and style. The customer gets a helpful, personalized
                    answer in 2 seconds—not 18 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Resolution or Escalation</h4>
                  <p className="text-muted-foreground text-sm">
                    In 78% of cases, the customer's issue is fully resolved. No human involvement needed. For complex
                    issues, the system prepares a complete context summary for the human agent, including the
                    conversation history, customer background, and suggested solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Learning & Improvement</h4>
                  <p className="text-muted-foreground text-sm">
                    Every interaction teaches the system. If the customer asks a follow-up question, the system gets
                    smarter. When an agent provides exceptional service on a complex issue, the system learns the best
                    practices and applies them to future similar cases.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Tech Stack */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/30 animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">Technologies Powering the Solution</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Orchestration</div>
                  <div className="text-sm text-muted-foreground">n8n workflow automation</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Vector Database</div>
                  <div className="text-sm text-muted-foreground">Supabase + pgvector</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">LLM & NLP</div>
                  <div className="text-sm text-muted-foreground">Google Gemini 2.5 Pro + Claude 3.5 Sonnet</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Semantic Search</div>
                  <div className="text-sm text-muted-foreground">Gemini Embedding 001</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Chat Interface</div>
                  <div className="text-sm text-muted-foreground">Custom webhook + WebSocket streaming</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Integrations</div>
                  <div className="text-sm text-muted-foreground">Stripe, Salesforce, Zendesk, Intercom</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Implementation</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">From Concept to Production in 6 Weeks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Standard implementation timeline with clear milestones and deliverables
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-right">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">1-2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Discovery & Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Audit current support ticketing system and workflows. Export and analyze 6 months of historical
                    tickets to train the AI on your specific language, tone, and issue patterns. Map customer journey
                    touchpoints where AI can help.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold mb-2">Deliverables:</div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Discovery report identifying automation opportunities</li>
                      <li>Integration completed between AI and support infrastructure</li>
                      <li>Historical data imported (10K-50K tickets)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-right animation-delay-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">2-4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Knowledge Base Structuring</h3>
                  <p className="text-muted-foreground mb-4">
                    Consolidate all support documentation into centralized knowledge base. Convert existing help center
                    articles, email templates, and tribal knowledge into AI-searchable format. Create vector embeddings
                    of all knowledge for semantic indexing.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold mb-2">Deliverables:</div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Unified knowledge base with 300+ structured articles</li>
                      <li>Semantic search enabled (find by meaning, not keywords)</li>
                      <li>Process for real-time knowledge base updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-right animation-delay-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">4-5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">AI Training & Testing</h3>
                  <p className="text-muted-foreground mb-4">
                    Fine-tune the AI model using your historical tickets to learn your specific industry terminology,
                    customer context, and optimal response style. Conduct A/B testing comparing AI vs. human response
                    quality. Train support team on new AI system.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold mb-2">Deliverables:</div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>AI model optimized for your business context</li>
                      <li>Accuracy baseline established (85-92% resolution rate)</li>
                      <li>Support team trained and ready</li>
                      <li>Monitoring and alerting system live</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-right animation-delay-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">5-6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Soft Launch & Optimization</h3>
                  <p className="text-muted-foreground mb-4">
                    Deploy AI to handle 30% of incoming tickets in monitored mode—humans review AI responses before
                    sending. Gather feedback from both customers and support team. Fine-tune AI behavior based on
                    real-world performance. Gradually increase AI's autonomy as confidence increases.
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold mb-2">Deliverables:</div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>AI system live and handling traffic</li>
                      <li>Performance metrics baseline established</li>
                      <li>Optimization recommendations documented</li>
                      <li>Full team trained and confident</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30 animate-fade-in">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Key Learning from Implementation</h4>
                <p className="text-sm text-muted-foreground">
                  The most successful AI support implementations don't try to replace human agents immediately. Instead,
                  they start by protecting agents' time. First, automate the simple FAQ questions (30% of volume) and
                  let agents focus on complex issues. Agents see this as liberating, not threatening. Then gradually
                  expand to 50%, then 70%, then 80%+ automation with humans handling only complex escalations.
                </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transformative Outcomes</h2>
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
                <TrendingDown className="h-8 w-8 text-primary" />
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
              <p className="text-muted-foreground">Financial impact and return on investment</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Implementation Investment</div>
                <div className="text-4xl font-bold text-foreground">$28K</div>
                <div className="text-xs text-muted-foreground mt-2">System setup, integration, training</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Monthly Savings</div>
                <div className="text-4xl font-bold text-primary">$33K</div>
                <div className="text-xs text-muted-foreground mt-2">Payroll reduction + overtime elimination</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Break-Even Period</div>
                <div className="text-4xl font-bold text-primary">25 days</div>
                <div className="text-xs text-muted-foreground mt-2">Faster than projected 30 days</div>
              </div>
            </div>
            <Separator className="my-8" />
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">12-Month Return on Investment</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                1,314%
              </div>
              <div className="text-muted-foreground mt-2">$368K net benefit from $28K investment</div>
              <div className="text-sm text-muted-foreground mt-4">
                Monthly savings: $33K × 12 months = $396K annual savings
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-right">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                "Before this system, our support team was literally drowning. What impressed me most isn't just the 86%
                automation rate—it's that our best agents are actually happier now. They're solving hard problems, not
                answering the same question for the thousandth time."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Kevin Martinez</div>
                  <div className="text-sm text-muted-foreground">Head of Customer Support, TechFlow</div>
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
                "The ROI calculator showed break-even in 25 days. We hit it in 23. What I didn't anticipate was the
                morale improvement. Support team turnover went from 40% annually to 8%. When people aren't burnt out,
                they actually want to come to work."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">VP of Operations, TechFlow</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-right animation-delay-200">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6 italic">
              "Our after-hours support availability was literally zero. We'd get emails at 2 AM from panicked customers
              who couldn't log in during their morning. Now they get instant help from the AI, and 78% of those cases
              are completely resolved without anyone waking up. As a global company, this changed our competitive
              positioning overnight."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">VP of Sales, TechFlow Technologies</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4">Ready to Transform?</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Companies That Revolutionized Their Support</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              You've seen how TechFlow achieved 73% cost reduction and 52% satisfaction improvement. Your company can
              achieve similar results. The question isn't whether AI-powered support is possible for your business—it
              is. The question is whether you'll implement it now and gain competitive advantage, or wait until your
              competitors do.
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
