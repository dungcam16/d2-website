import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Sparkles,
  Zap,
  FileText,
  PlayCircle,
  Download,
  Workflow,
  BarChart3,
  TrendingUp,
  Settings,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const AiIntegrationService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Integration & Optimization - Integrating AI into Workflows",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "AI integration service for N8N workflows. Large Language Models (GPT-4, Claude), AI automation for chatbots, email, document parsing, sentiment analysis, and predictive analytics.",
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
        name: "AI Integration",
      },
    ],
  };

  const features = [
    {
      icon: Brain,
      title: "LLM Integration",
      description: "Integrate GPT-4, Claude, and Gemini into workflows for advanced natural language processing.",
    },
    {
      icon: MessageCircle,
      title: "AI Chatbot Automation",
      description: "Build intelligent chatbots with context awareness and multi-turn conversation capabilities.",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Automatically parse, analyze, and extract information from complex documents.",
    },
    {
      icon: BarChart3,
      title: "Sentiment Analysis",
      description: "Analyze customer sentiment from feedback, reviews, and social media.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors using advanced machine learning models.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize workflows using AI for decision nodes and intelligent routing logic.",
    },
  ];

  const aiUseCases = [
    {
      category: "Customer Service",
      use_cases: [
        {
          name: "AI Email Response",
          description: "Automatically reply to customer emails with context-aware responses.",
          models: "GPT-4, Claude",
        },
        {
          name: "Ticket Classification",
          description: "Automatically classify and route support tickets to the right department.",
          models: "Custom ML",
        },
      ],
    },
    {
      category: "Content & Marketing",
      use_cases: [
        {
          name: "Content Generation",
          description: "Create marketing copy, blog posts, and social media content.",
          models: "GPT-4, Claude",
        },
        {
          name: "SEO Optimization",
          description: "Optimize content for search engines with AI-powered suggestions.",
          models: "Custom NLP",
        },
      ],
    },
    {
      category: "Sales & CRM",
      use_cases: [
        {
          name: "Lead Scoring",
          description: "Automatically score leads based on predictive models to prioritize efforts.",
          models: "ML Classification",
        },
        {
          name: "Proposal Generation",
          description: "Create customized sales proposals based on customer data.",
          models: "GPT-4",
        },
      ],
    },
    {
      category: "Finance & Operations",
      use_cases: [
        {
          name: "Invoice Processing",
          description: "Automatically extract and validate information from invoices.",
          models: "Document AI",
        },
        {
          name: "Fraud Detection",
          description: "Identify unusual transactions with anomaly detection models.",
          models: "ML Anomaly",
        },
      ],
    },
  ];

  const aiModels = [
    {
      provider: "OpenAI",
      models: ["GPT-5", "GPT-4", "GPT-4o"],
      use_for: "Text generation, conversation, coding",
    },
    {
      provider: "Anthropic",
      models: ["Claude 3 Opus", "Claude 3 Sonnet"],
      use_for: "Long context, analysis, safety-focused",
    },
    {
      provider: "Google",
      models: ["Gemini Pro", "Gemini Ultra"],
      use_for: "Multimodal, reasoning, search integration",
    },
    {
      provider: "Custom ML",
      models: ["Scikit-learn", "TensorFlow", "PyTorch"],
      use_for: "Classification, prediction, clustering",
    },
  ];

  const implementationSteps = [
    {
      step: "AI Strategy Workshop",
      duration: "1 Week",
      activities: ["Use case identification", "Model selection", "Data requirements", "Success metrics"],
    },
    {
      step: "Proof of Concept (PoC)",
      duration: "2 Weeks",
      activities: ["Prototype development", "Model testing", "Accuracy evaluation", "Cost analysis"],
    },
    {
      step: "Production Integration",
      duration: "2-3 Weeks",
      activities: ["Workflow integration", "Error handling", "Performance optimization", "Monitoring setup"],
    },
    {
      step: "Optimization & Training",
      duration: "1 Week",
      activities: ["Fine-tuning models", "A/B testing", "Team training", "Documentation handover"],
    },
  ];

  const optimizationTechniques = [
    { technique: "Prompt Engineering", impact: "50% better output quality" },
    { technique: "Context Optimization", impact: "40% cost reduction" },
    { technique: "Caching Strategy", impact: "70% faster response" },
    { technique: "Model Selection", impact: "60% cost savings" },
    { technique: "Batch Processing", impact: "80% throughput increase" },
    { technique: "Fallback Logic", impact: "99.9% reliability" },
  ];

  const pricingOptions = [
    {
      name: "AI Pilot",
      price: "30,000,000đ",
      description: "For 1-2 AI use cases",
      features: ["Basic LLM integration", "Simple AI workflows", "Usage optimization", "3-4 weeks deployment"],
    },
    {
      name: "AI Production",
      price: "70,000,000đ",
      description: "For 3-5 AI use cases",
      features: ["Advanced AI workflows", "Custom ML models", "Performance tuning", "6-8 weeks deployment"],
    },
    {
      name: "AI Enterprise",
      price: "Contact Us",
      description: "Organization-wide AI",
      features: ["End-to-end AI platform", "Custom model training", "Dedicated support", "Flexible timeline"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Integration & Optimization - Integrate AI into N8N Workflows"
        description="Professional AI integration services. Large Language Models (GPT-4, Claude), AI chatbot automation, document parsing, sentiment analysis, and predictive analytics for your workflows."
        keywords="AI workflow integration, AI automation, GPT-4 integration, Claude AI, AI chatbot, AI document parsing, sentiment analysis, predictive analytics, machine learning workflow"
        canonicalUrl="/services/ai-integration"
        structuredData={[structuredData, breadcrumbStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                <span className="text-primary">AI Integration & Optimization</span>
                <br />
                <span className="text-foreground">Enhance Workflows With Artificial Intelligence</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Integrate Large Language Models (GPT-4, Claude) into your N8N workflows. Automate with AI for chatbots,
                email automation, document parsing, sentiment analysis, and predictive analytics. Optimize performance
                with machine learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                  Book AI Strategy Session
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                  Download AI Playbook
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">AI Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">85%</div>
                  <div className="text-sm text-muted-foreground">Avg. Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3x</div>
                  <div className="text-sm text-muted-foreground">Process Speed</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="gradient-card p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">AI Capabilities</h3>
                <div className="space-y-4">
                  {[
                    { name: "Natural Language Processing", progress: 95 },
                    { name: "Document Analysis", progress: 90 },
                    { name: "Sentiment Detection", progress: 85 },
                    { name: "Predictive Models", progress: 88 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.name}</span>
                        <span className="text-primary font-bold">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-primary">AI Integration</span> Capabilities
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
                  <div className="mb-4">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI Use Cases By <span className="text-primary">Industry</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiUseCases.map((category, index) => (
              <Card
                key={index}
                className="gradient-card p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{category.category}</h3>
                <div className="space-y-4">
                  {category.use_cases.map((useCase, ucIndex) => (
                    <div key={ucIndex} className="border-l-2 border-primary pl-4">
                      <h4 className="font-bold mb-1">{useCase.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{useCase.description}</p>
                      <div className="text-xs text-primary font-medium">Models: {useCase.models}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI Models <span className="text-primary">We Integrate</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiModels.map((provider, index) => (
              <Card key={index} className="gradient-card p-6">
                <h3 className="text-lg font-bold mb-3 text-primary">{provider.provider}</h3>
                <div className="space-y-2 mb-4">
                  {provider.models.map((model, mIndex) => (
                    <div key={mIndex} className="text-sm font-medium">
                      {model}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">{provider.use_for}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our AI <span className="text-primary">Implementation Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <Card key={index} className="gradient-card p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold">{step.step}</h3>
                  <div className="text-sm text-muted-foreground">{step.duration}</div>
                </div>
                <ul className="space-y-2">
                  {step.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start text-sm">
                      <Sparkles className="h-4 w-4 mr-2 flex-shrink-0 text-primary mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Techniques */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI <span className="text-primary">Optimization Techniques</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optimizationTechniques.map((item, index) => (
              <Card key={index} className="gradient-card p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{item.technique}</h3>
                  <div className="text-primary font-bold">{item.impact}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI Integration <span className="text-primary">Packages</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card key={index} className={`gradient-card p-8 ${index === 1 ? "border-primary border-2" : ""}`}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{option.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{option.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">{option.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={index === 1 ? "default" : "outline"}
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact for Consultation
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Upgrade <span className="text-primary">With AI?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule an AI strategy session to discover the AI integration opportunities for your business.
          </p>
          <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
            Schedule AI Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiIntegrationService;
