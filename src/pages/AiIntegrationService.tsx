import React from 'react';
import { 
  ArrowRight, CheckCircle, Star, Brain, Sparkles, Zap, Bot, 
  FileText, PlayCircle, Download, Workflow, Clock, Shield,
  BarChart3, TrendingUp, Settings, Database, Code, MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const AiIntegrationService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Integration & Optimization - Tích hợp AI vào Workflows",
    "provider": {
      "@type": "Organization", 
      "name": "D2 Group",
      "url": "https://d2group.co"
    },
    "description": "Dịch vụ tích hợp AI vào workflows N8N. Large Language Models (GPT-4, Claude), AI automation cho chatbot, email, document parsing, sentiment analysis và predictive analytics.",
    "areaServed": "Vietnam"
  };

  const features = [
    {
      icon: Brain,
      title: "LLM Integration",
      description: "Tích hợp GPT-4, Claude, Gemini vào workflows cho xử lý ngôn ngữ tự nhiên nâng cao"
    },
    {
      icon: MessageCircle,
      title: "AI Chatbot Automation",
      description: "Xây dựng chatbot thông minh với context awareness và multi-turn conversations"
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Tự động parsing, phân tích và extract thông tin từ documents phức tạp"
    },
    {
      icon: BarChart3,
      title: "Sentiment Analysis",
      description: "Phân tích cảm xúc khách hàng từ feedback, reviews và social media"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Dự đoán xu hướng và hành vi sử dụng machine learning models"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Tối ưu workflows bằng AI cho decision nodes và routing logic"
    }
  ];

  const aiUseCases = [
    {
      category: "Customer Service",
      use_cases: [
        {
          name: "AI Email Response",
          description: "Tự động trả lời email khách hàng với context-aware responses",
          models: "GPT-4, Claude"
        },
        {
          name: "Ticket Classification",
          description: "Phân loại và route support tickets tự động",
          models: "Custom ML"
        }
      ]
    },
    {
      category: "Content & Marketing",
      use_cases: [
        {
          name: "Content Generation",
          description: "Tạo nội dung marketing, blog posts, social media",
          models: "GPT-4, Claude"
        },
        {
          name: "SEO Optimization",
          description: "Tối ưu nội dung cho search engines với AI suggestions",
          models: "Custom NLP"
        }
      ]
    },
    {
      category: "Sales & CRM",
      use_cases: [
        {
          name: "Lead Scoring",
          description: "Chấm điểm leads tự động dựa trên predictive models",
          models: "ML Classification"
        },
        {
          name: "Proposal Generation",
          description: "Tạo proposals tùy chỉnh dựa trên customer data",
          models: "GPT-4"
        }
      ]
    },
    {
      category: "Finance & Operations",
      use_cases: [
        {
          name: "Invoice Processing",
          description: "Extract và validate thông tin từ invoices tự động",
          models: "Document AI"
        },
        {
          name: "Fraud Detection",
          description: "Phát hiện giao dịch bất thường với anomaly detection",
          models: "ML Anomaly"
        }
      ]
    }
  ];

  const aiModels = [
    { 
      provider: "OpenAI", 
      models: ["GPT-5", "GPT-4", "GPT-4o"], 
      use_for: "Text generation, conversation, coding"
    },
    { 
      provider: "Anthropic", 
      models: ["Claude 3 Opus", "Claude 3 Sonnet"], 
      use_for: "Long context, analysis, safety-focused"
    },
    { 
      provider: "Google", 
      models: ["Gemini Pro", "Gemini Ultra"], 
      use_for: "Multimodal, reasoning, search integration"
    },
    { 
      provider: "Custom ML", 
      models: ["Scikit-learn", "TensorFlow", "PyTorch"], 
      use_for: "Classification, prediction, clustering"
    }
  ];

  const implementationSteps = [
    {
      step: "AI Strategy Workshop",
      duration: "1 tuần",
      activities: ["Use case identification", "Model selection", "Data requirements", "Success metrics"]
    },
    {
      step: "Proof of Concept",
      duration: "2 tuần",
      activities: ["Prototype development", "Model testing", "Accuracy evaluation", "Cost analysis"]
    },
    {
      step: "Production Integration",
      duration: "2-3 tuần",
      activities: ["Workflow integration", "Error handling", "Performance optimization", "Monitoring setup"]
    },
    {
      step: "Optimization & Training",
      duration: "1 tuần",
      activities: ["Fine-tuning", "A/B testing", "Team training", "Documentation"]
    }
  ];

  const optimizationTechniques = [
    { technique: "Prompt Engineering", impact: "50% better output quality" },
    { technique: "Context Optimization", impact: "40% cost reduction" },
    { technique: "Caching Strategy", impact: "70% faster response" },
    { technique: "Model Selection", impact: "60% cost savings" },
    { technique: "Batch Processing", impact: "80% throughput increase" },
    { technique: "Fallback Logic", impact: "99.9% reliability" }
  ];

  const pricingOptions = [
    {
      name: "AI Pilot",
      price: "30.000.000đ",
      description: "1-2 AI use cases",
      features: [
        "Basic LLM integration",
        "Simple AI workflows",
        "Usage optimization",
        "3-4 tuần triển khai"
      ]
    },
    {
      name: "AI Production",
      price: "70.000.000đ",
      description: "3-5 AI use cases",
      features: [
        "Advanced AI workflows",
        "Custom ML models",
        "Performance tuning",
        "6-8 tuần triển khai"
      ]
    },
    {
      name: "AI Enterprise",
      price: "Liên hệ",
      description: "Organization-wide AI",
      features: [
        "End-to-end AI platform",
        "Custom model training",
        "Dedicated support",
        "Timeline linh hoạt"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Integration & Optimization - Tích hợp AI vào Workflows N8N"
        description="Dịch vụ tích hợp AI chuyên nghiệp. Large Language Models (GPT-4, Claude), AI chatbot automation, document parsing, sentiment analysis, predictive analytics cho workflows."
        keywords="tích hợp AI workflow, AI automation, GPT-4 integration, Claude AI, chatbot AI, document parsing AI, sentiment analysis, predictive analytics, machine learning workflow"
        canonicalUrl="/services/ai-integration"
        structuredData={structuredData}
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
                <span className="text-foreground">Nâng Cao Workflows Với Trí Tuệ Nhân Tạo</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Tích hợp Large Language Models (GPT-4, Claude) vào workflows N8N. Tự động hóa 
                với AI cho chatbot, email automation, document parsing, sentiment analysis và 
                predictive analytics. Tối ưu performance bằng machine learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="shadow-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Tư Vấn AI Strategy
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Tải AI Playbook
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
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3x</div>
                  <div className="text-sm text-muted-foreground">Faster</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="gradient-card p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">AI Capabilities</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Natural Language', progress: 95 },
                    { name: 'Document Analysis', progress: 90 },
                    { name: 'Sentiment Detection', progress: 85 },
                    { name: 'Predictive Models', progress: 88 }
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
            Khả Năng <span className="text-primary">AI Integration</span>
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
            AI Use Cases Theo <span className="text-primary">Từng Lĩnh Vực</span>
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
            AI Models <span className="text-primary">Chúng Tôi Tích Hợp</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiModels.map((provider, index) => (
              <Card 
                key={index}
                className="gradient-card p-6"
              >
                <h3 className="text-lg font-bold mb-3 text-primary">{provider.provider}</h3>
                <div className="space-y-2 mb-4">
                  {provider.models.map((model, mIndex) => (
                    <div key={mIndex} className="text-sm font-medium">{model}</div>
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
            Quy Trình <span className="text-primary">Triển Khai AI</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <Card 
                key={index}
                className="gradient-card p-6"
              >
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
            Kỹ Thuật <span className="text-primary">Tối Ưu AI</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optimizationTechniques.map((item, index) => (
              <Card 
                key={index}
                className="gradient-card p-6"
              >
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
            Gói <span className="text-primary">AI Integration</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index}
                className={`gradient-card p-8 ${index === 1 ? 'border-primary border-2' : ''}`}
              >
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
                  onClick={() => window.location.href = '/contact'}
                >
                  Liên Hệ Tư Vấn
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
            Sẵn Sàng Nâng Cấp <span className="text-primary">Với AI?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Đặt lịch AI strategy session để khám phá cơ hội tích hợp AI cho doanh nghiệp bạn
          </p>
          <Button 
            size="lg" 
            className="shadow-glow"
            onClick={() => window.location.href = '/contact'}
          >
            Đặt Lịch AI Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiIntegrationService;
