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
  User,
  Zap,
  Brain,
  Search,
  MessageSquare,
  FileText,
  Shield,
  BarChart3,
  TrendingDown,
  Globe,
  Target,
  BookOpen,
  Download,
  ChevronDown,
  AlertCircle,
} from "lucide-react";

const RagChatbotCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "RAG-Powered Chatbot: 95% Accuracy, 15K Daily Questions Answered",
    description:
      "How CloudDocx converted chaotic knowledge into instant answers, serving 15K daily questions with 95% accuracy and zero hallucinations using RAG technology",
    image: "https://d2group.co/assets/case-rag-chatbot-pipelines.jpg",
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
        title="RAG Chatbot: 95% Accuracy Case Study | D2 Group"
        description="See how CloudDocx built an intelligent knowledge assistant with 95% accuracy, serving 15K daily questions with zero hallucinations. Full RAG implementation guide."
        keywords="RAG chatbot, knowledge assistant, semantic search, AI documentation, vector database, chatbot accuracy, LLM integration, pgvector, knowledge base AI"
        ogImage="/assets/case-rag-chatbot-pipelines.jpg"
        canonicalUrl="https://d2group.co/portfolio/rag-powered-chatbot-pipelines"
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
              <Brain className="h-4 w-4 mr-2" />
              RAG-Powered Knowledge Assistant
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                15,000 Daily Questions.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent">
                Zero Hallucinations.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build intelligent knowledge assistants that understand context, learn from conversations, 
              and deliver accurate answers across your entire knowledge base—without the hallucination 
              risks of standard AI.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Verified across 50K+ interactions
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-100">
                <div className="text-4xl font-bold text-primary mb-2">2s</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
                <div className="text-xs text-muted-foreground mt-1">
                  From question to answer
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-200">
                <div className="text-4xl font-bold text-primary mb-2">340%</div>
                <div className="text-sm text-muted-foreground">Self-Service Increase</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Customers finding answers
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all duration-300 animate-scale-in animation-delay-300">
                <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Hallucinations</div>
                <div className="text-xs text-muted-foreground mt-1">
                  100% grounded in documentation
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="gap-2 group">
                  Schedule 30-Min Knowledge Assistant Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download RAG Framework Guide
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
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">
                RAG Implementations
              </div>
            </div>
            <div className="animate-fade-in animation-delay-100">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">
                Accuracy Rating
              </div>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-sm text-muted-foreground">
                Documents Indexed
              </div>
            </div>
            <div className="animate-fade-in animation-delay-300">
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">
                Conversations/Month
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
              Meet CloudDocx
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20 animate-scale-in">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">CloudDocx</strong> is a leading SaaS documentation and 
                knowledge management platform serving <strong className="text-primary">2,000+ enterprise customers</strong> across 
                software, financial services, and healthcare. With <strong className="text-primary">150 employees</strong> and{" "}
                <strong className="text-primary">$40M ARR</strong>, the company was growing at{" "}
                <strong className="text-primary">45% year-over-year</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                However, customer satisfaction was stalling. While CloudDocx's documentation platform was 
                best-in-class for storing knowledge, customers still struggled with finding knowledge. 
                They had beautiful, comprehensive documentation that customers couldn't navigate. Support tickets 
                flooded in asking questions that were already answered in the docs. CloudDocx needed to transform 
                their platform from "knowledge repository" to "knowledge assistant."
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
              The Documentation Paradox
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The more comprehensive your documentation, the harder it is to find things. A 500-page 
              API reference contains the answer to almost every question—but customers can't find it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pain Point 1 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <FileText className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Documentation Overload</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Customers typically had <strong>50-500 pages</strong> of well-written, comprehensive documentation. 
                It was also completely unsearchable—keyword search couldn't handle "I need to reset my API key" 
                finding "Regenerate authentication credentials."
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>$42K/month in wasted support labor</span>
              </div>
            </Card>

            {/* Pain Point 2 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Search className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Search That Doesn't Understand</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Keyword-based search couldn't understand intent. A user searching "Can I integrate with Slack?" 
                wouldn't find the Slack integration guide because they didn't use the exact phrase "Slack integration." 
                <strong>60% of searches</strong> returned no relevant results.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>3-minute average search time to find answer</span>
              </div>
            </Card>

            {/* Pain Point 3 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">No Conversational Interface</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Documentation was presented as static pages. If a customer didn't find the answer to their first 
                question, they couldn't ask a follow-up. There was no conversation, no context, no guided discovery. 
                Modern users expect ChatGPT-like interactions.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>45% of support tickets were escalations</span>
              </div>
            </Card>

            {/* Pain Point 4 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Support Team Bottleneck</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Support team spent <strong>60% of their time</strong> answering questions from documentation. 
                These were high-confidence answers (read documentation, copy answer, send). But they were also 
                high-volume and low-value. Response times averaged <strong>4 hours</strong>.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>80% capacity utilization—couldn't scale</span>
              </div>
            </Card>

            {/* Pain Point 5 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-400">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Losing to Competitors</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                CloudDocx lost deals to competitors with "AI search" or "AI assistant" features. Prospects would 
                say: "Your documentation is better, but I like that Competitor X has a chatbot that answers questions." 
                Feature perception was costing deals.
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>$120K-180K in lost ARR per quarter</span>
              </div>
            </Card>

            {/* Pain Point 6 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive/50 animate-slide-in-right animation-delay-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Target className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Blocked Platform Evolution</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                CloudDocx wanted to add new features: AI-powered content generation, automated documentation from 
                code, live examples. But they couldn't build these because they needed to first solve "How do 
                customers find answers?"
              </p>
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <TrendingDown className="h-4 w-4" />
                <span>Product roadmap blocked by discovery problem</span>
              </div>
            </Card>
          </div>

          {/* Quote */}
          <Card className="mt-12 p-8 md:p-12 bg-gradient-to-br from-muted/50 to-primary/5 border-l-4 border-l-primary animate-fade-in">
            <div className="flex gap-4 items-start">
              <div className="text-6xl text-primary/20 leading-none">"</div>
              <div>
                <p className="text-lg md:text-xl text-foreground italic mb-4">
                  We had the best documentation in the market. Customers would tell us 'I love your docs, I just 
                  can't find anything in them.' It was incredibly frustrating. We knew the solution was AI—something 
                  that understood language naturally—but building a proper RAG system seemed massively complex. When 
                  we understood how to implement RAG properly, everything clicked.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">
                      VP of Product, CloudDocx
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
              RAG-Powered Knowledge Assistant
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike simple chatbots that hallucinate, RAG (Retrieval-Augmented Generation) combines semantic 
              search, context augmentation, and grounded generation—every answer comes from your documentation.
            </p>
          </div>

          {/* How RAG Works */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">How RAG Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 1</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Knowledge Ingestion</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Upload documentation (PDFs, markdown, web pages). System extracts structured content, normalizes 
                  formatting, chunks into semantic units, generates vector embeddings.
                </p>
                <div className="text-xs text-muted-foreground">
                  768-dimensional embeddings for semantic search
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 2</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Semantic Retrieval</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  User asks question. System converts to semantic space and finds conceptually similar content—not 
                  keyword matching, but meaning-based search.
                </p>
                <div className="text-xs text-muted-foreground">
                  Retrieves top 10 most relevant documentation chunks
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 3</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Context Assembly</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Combines retrieved documentation, conversation history, and user metadata to build complete context 
                  for answer generation.
                </p>
                <div className="text-xs text-muted-foreground">
                  Multi-turn conversation with memory retention
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 4</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Answer Generation</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  LLM generates natural answer synthesizing all information. Directly answers question, includes 
                  step-by-step instructions, links to related docs, cites sources.
                </p>
                <div className="text-xs text-muted-foreground">
                  Grounded in documentation—no hallucinations
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 5</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Confidence Validation</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  System scores confidence before sending. High confidence (90%+): send immediately. Medium (70-90%): 
                  human review. Low (&lt;70%): escalate to human.
                </p>
                <div className="text-xs text-muted-foreground">
                  No guessing—maintains quality at scale
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground">Step 6</div>
                </div>
                <h4 className="text-xl font-bold mb-3">Continuous Learning</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Every interaction teaches the system. Customer feedback, escalations, and successful resolutions 
                  all improve accuracy over time.
                </p>
                <div className="text-xs text-muted-foreground">
                  Self-improving knowledge assistant
                </div>
              </Card>
            </div>
          </div>

          {/* Tech Stack */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Tech Stack Under the Hood</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Orchestration: n8n</div>
                    <div className="text-sm text-muted-foreground">Workflow engine for RAG pipeline</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Vector Database: Supabase pgvector</div>
                    <div className="text-sm text-muted-foreground">PostgreSQL with vector similarity search</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">LLM: Google Gemini 2.5 Pro</div>
                    <div className="text-sm text-muted-foreground">Answer generation with context</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Embeddings: Gemini Embedding 001</div>
                    <div className="text-sm text-muted-foreground">768-dimension semantic vectors</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Chat Interface: n8n Chat Trigger</div>
                    <div className="text-sm text-muted-foreground">WebSocket streaming responses</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Safety: Confidence Scoring</div>
                    <div className="text-sm text-muted-foreground">Hallucination detection & validation</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Key Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Makes RAG Different
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Semantic Search</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Understands meaning, not just keywords. "Modify API credentials" finds "Regenerate authentication 
                tokens" even though words don't overlap. 10x better than traditional search.
              </p>
              <div className="text-xs text-primary font-semibold">
                First search usually succeeds
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-100">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Turn Conversation</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Not static Q&A—it's a conversation. Customer asks follow-up questions and system maintains context. 
                Guided discovery instead of "search and hope."
              </p>
              <div className="text-xs text-primary font-semibold">
                Context-aware responses
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-200">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Citation & Source Attribution</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Every answer includes "this comes from [Documentation Section]." Customers can click through to 
                full documentation. Builds trust and enables verification.
              </p>
              <div className="text-xs text-primary font-semibold">
                100% grounded in actual docs
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-300">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant 24/7 Availability</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Always available. No waiting for support. Questions answered at 2 AM in customer's timezone 
                instantly. Removes friction from customer experience.
              </p>
              <div className="text-xs text-primary font-semibold">
                Unblocks urgent issues immediately
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-400">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Escalation</h3>
              <p className="text-muted-foreground text-sm mb-3">
                When chatbot can't handle something, escalates to human with full context. No "please explain 
                again." Human already knows conversation history.
              </p>
              <div className="text-xs text-primary font-semibold">
                40% faster human resolution
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-500">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Multilingual Support</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Documentation in multiple languages automatically creates multi-language chatbot. Customer in 
                Germany gets answers in German. Japan gets Japanese.
              </p>
              <div className="text-xs text-primary font-semibold">
                Global support without multilingual team
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Results & Impact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformative Business Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CloudDocx implemented the RAG-powered knowledge assistant and achieved comprehensive 
              transformation across support, product, and customer experience.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="text-5xl font-bold text-primary mb-3">85%</div>
              <div className="text-sm font-semibold mb-2">Self-Service Rate</div>
              <div className="text-xs text-muted-foreground">From 15% to 85% documentation self-service</div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-100">
              <div className="text-5xl font-bold text-primary mb-3">15min</div>
              <div className="text-sm font-semibold mb-2">Response Time</div>
              <div className="text-xs text-muted-foreground">From 4 hours to 15 minutes (escalations only)</div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in animation-delay-200">
              <div className="text-5xl font-bold text-primary mb-3">4.6/5</div>
              <div className="text-sm font-semibold mb-2">Customer Satisfaction</div>
              <div className="text-xs text-muted-foreground">From 2.1/5 to 4.6/5 documentation rating</div>
            </Card>
          </div>

          {/* ROI Breakdown */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-primary/20 animate-fade-in mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">ROI Analysis</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                  Implementation Investment
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RAG infrastructure setup</span>
                    <span className="font-semibold">$35,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Knowledge ingestion & processing</span>
                    <span className="font-semibold">$20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">LLM fine-tuning & testing</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Chat interface development</span>
                    <span className="font-semibold">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Training & rollout</span>
                    <span className="font-semibold">$10,000</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Investment</span>
                    <span className="text-destructive">$105,000</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Annual Benefits
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support cost reduction</span>
                    <span className="font-semibold text-primary">$168,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reduced churn (better experience)</span>
                    <span className="font-semibold text-primary">$240,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">New deals won (competitive feature)</span>
                    <span className="font-semibold text-primary">$180,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Engineering time freed</span>
                    <span className="font-semibold text-primary">$80,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">&nbsp;</span>
                    <span className="font-semibold">&nbsp;</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Annual Value</span>
                    <span className="text-primary">$668,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Payback Period</div>
                  <div className="text-2xl font-bold text-primary">1.9 months</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">12-Month ROI</div>
                  <div className="text-2xl font-bold text-primary">536%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">3-Year Projection</div>
                  <div className="text-2xl font-bold text-primary">$2.0M</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold mb-4 text-destructive">Before RAG</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-xs">✕</span>
                  </div>
                  <span className="text-muted-foreground">Support team: 8 people, 60% time on docs questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-xs">✕</span>
                  </div>
                  <span className="text-muted-foreground">Average response time: 4 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-xs">✕</span>
                  </div>
                  <span className="text-muted-foreground">Self-service rate: 15% (most open tickets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-xs">✕</span>
                  </div>
                  <span className="text-muted-foreground">Documentation satisfaction: 2.1/5</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-xs">✕</span>
                  </div>
                  <span className="text-muted-foreground">Losing deals to competitors with AI features</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold mb-4 text-primary">After RAG</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Same team, capacity freed for complex issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Average response: 15 minutes (escalations only)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Self-service rate: 85% (instant answers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Documentation satisfaction: 4.6/5</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Winning deals with best-in-class AI assistant</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge className="mb-6">Ready to Transform Your Knowledge Base?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Your Documentation Into an Intelligent Assistant
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a 30-minute demo to see how RAG-powered chatbots can transform your customer experience 
            and support operations with 95% accuracy and zero hallucinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gap-2 group">
                Schedule Your Knowledge Assistant Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download RAG Implementation Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RagChatbotCaseStudy;
