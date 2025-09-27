import React, { useState } from 'react';
import { 
  MessageCircle, Facebook, Instagram, Globe, Zap, ArrowRight, CheckCircle, 
  Phone, Mail, Users, Clock, TrendingUp, Shield, Settings, BarChart3,
  Smartphone, Headphones, ChevronDown, Star, PlayCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ChatbotService = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    budget: ''
  });

  const benefits = [
    {
      title: "Tiết Kiệm 80% Chi Phí",
      description: "So với team support truyền thống",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      title: "Phục Vụ 24/7",
      description: "Không giới hạn thời gian, múi giờ",
      icon: Clock,
      color: "text-primary"
    },
    {
      title: "Tăng Conversion 3X",
      description: "Lead qualification tự động",
      icon: BarChart3,
      color: "text-primary"
    },
    {
      title: "Tích Hợp Đa Nền Tảng",
      description: "8+ channels trong 1 dashboard",
      icon: Globe,
      color: "text-primary"
    }
  ];

  const features = [
    {
      title: "NLP Tiếng Việt",
      description: "Hiểu ngữ cảnh conversation",
      icon: MessageCircle,
      details: ["Natural Language Processing", "Context understanding", "Intent recognition", "Multi-turn conversations"]
    },
    {
      title: "Multi-Channel Hub",
      description: "Quản lý tất cả từ 1 dashboard",
      icon: Globe,
      details: ["Unified inbox", "Cross-platform analytics", "Centralized management", "Seamless handoff"]
    },
    {
      title: "Smart Routing",
      description: "Chuyển cho agent khi cần",
      icon: Settings,
      details: ["Intelligent escalation", "Agent availability", "Skill-based routing", "Priority handling"]
    },
    {
      title: "Analytics Dashboard",
      description: "Báo cáo performance chi tiết",
      icon: BarChart3,
      details: ["Real-time metrics", "Conversation analytics", "Performance insights", "ROI tracking"]
    },
    {
      title: "API Integration",
      description: "Kết nối CRM, ERP existing",
      icon: Zap,
      details: ["RESTful APIs", "Webhook support", "Real-time sync", "Custom integrations"]
    },
    {
      title: "Custom Workflows",
      description: "Automation theo business logic",
      icon: Shield,
      details: ["Visual flow builder", "Conditional logic", "Business rules", "Custom actions"]
    }
  ];

  const platforms = [
    { name: "Website", description: "Widget tích hợp", icon: Globe },
    { name: "Facebook Messenger", description: "Automated responses", icon: Facebook },
    { name: "Zalo OA", description: "Official Account", icon: MessageCircle },
    { name: "WhatsApp Business", description: "Business API", icon: Phone },
    { name: "Telegram", description: "Bot integration", icon: MessageCircle },
    { name: "Viber", description: "Business messages", icon: MessageCircle },
    { name: "Instagram DM", description: "Direct messages", icon: Instagram },
    { name: "Live Chat", description: "Website chat", icon: Headphones }
  ];

  const caseStudies = [
    {
      title: "E-commerce Fashion: Tăng 250% conversion rate",
      metrics: "250% conversion",
      description: "Chatbot hỗ trợ tư vấn sản phẩm, xử lý đơn hàng và chăm sóc khách hàng tự động",
      results: ["250% tăng conversion", "70% giảm cart abandonment", "40% tăng AOV"]
    },
    {
      title: "F&B Chain: Giảm 70% thời gian response",
      metrics: "70% faster response",
      description: "Tự động hóa đặt bàn, menu consultation và feedback collection",
      results: ["70% faster response", "300% increase bookings", "95% customer satisfaction"]
    },
    {
      title: "Real Estate: 400% tăng lead qualified",
      metrics: "400% qualified leads",
      description: "Lead qualification, property consultation và appointment scheduling",
      results: ["400% qualified leads", "60% time saving", "85% lead conversion"]
    }
  ];

  const pricing = [
    {
      name: "STARTER",
      price: "5M",
      period: "/tháng",
      description: "2 platforms, 1000 conversations/tháng",
      features: [
        "2 integrated platforms",
        "1,000 conversations/month",
        "Basic NLP Vietnamese",
        "Standard templates",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "BUSINESS",
      price: "12M",
      period: "/tháng",
      description: "5 platforms, 5000 conversations/tháng",
      features: [
        "5 integrated platforms",
        "5,000 conversations/month",
        "Advanced NLP + AI",
        "Custom workflows",
        "Priority support",
        "Advanced analytics",
        "API integrations"
      ],
      popular: true
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
        "Dedicated manager",
        "24/7 phone support",
        "Custom integrations",
        "White-label option"
      ],
      popular: false
    }
  ];

  const workflow = [
    {
      step: "1",
      title: "Tư Vấn & Phân Tích",
      description: "Phân tích nhu cầu và thiết kế chatbot flow",
      duration: "1-2 ngày"
    },
    {
      step: "2", 
      title: "Setup & Training",
      description: "Cài đặt chatbot và training AI model",
      duration: "3-5 ngày"
    },
    {
      step: "3",
      title: "Testing & Go-live",
      description: "Test toàn diện và deploy production",
      duration: "2-3 ngày"
    },
    {
      step: "4",
      title: "Support & Optimization",
      description: "Monitoring và tối ưu hóa performance",
      duration: "ongoing"
    }
  ];

  const faqs = [
    {
      question: "Chatbot có hiểu được tiếng Việt tự nhiên không?",
      answer: "Có, chatbot của chúng tôi được train đặc biệt cho tiếng Việt với khả năng hiểu ngữ cảnh, từ khóa và intent của người dùng một cách tự nhiên."
    },
    {
      question: "Tích hợp với những platform nào?",
      answer: "Website, Facebook Messenger, Zalo OA, WhatsApp Business, Telegram, Viber, Instagram DM và các platform khác theo yêu cầu."
    },
    {
      question: "Thời gian setup chatbot mất bao lâu?",
      answer: "Thông thường 7-10 ngày từ lúc ký hợp đồng đến khi chatbot hoạt động hoàn chỉnh, tùy thuộc vào độ phức tạp của yêu cầu."
    },
    {
      question: "Có thể custom logic chatbot theo business không?",
      answer: "Hoàn toàn có thể. Chúng tôi thiết kế chatbot theo business logic riêng của từng doanh nghiệp với workflow và rules phù hợp."
    },
    {
      question: "Chi phí duy trì hàng tháng là bao nhiêu?",
      answer: "Chi phí từ 5M-12M/tháng tùy package, bao gồm hosting, maintenance, support và số lượng conversations."
    },
    {
      question: "Chatbot có thể kết nối với CRM existing không?",
      answer: "Có, chúng tôi hỗ trợ tích hợp với các CRM phổ biến như Salesforce, HubSpot, hoặc custom integration qua API."
    },
    {
      question: "Làm sao để train chatbot hiểu sản phẩm/dịch vụ của tôi?",
      answer: "Chúng tôi sẽ làm việc với team của bạn để thu thập data, FAQ, product info và train chatbot hiểu domain knowledge cụ thể."
    },
    {
      question: "Có báo cáo analytics và insights không?",
      answer: "Có dashboard real-time với metrics về conversations, conversion rate, popular questions, user satisfaction và ROI tracking."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                <span className="text-primary">Chatbot Đa Nền Tảng</span>
                <br />
                <span className="text-foreground">Tự Động Hóa Chăm Sóc Khách Hàng 24/7</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Tích hợp thông minh trên Website, Facebook Messenger, Zalo, WhatsApp, Telegram. 
                Tăng conversion 300%, giảm 80% chi phí support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow">
                  Nhận Tư Vấn Miễn Phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Xem Demo Live
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50M+</div>
                  <div className="text-sm text-muted-foreground">users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">300%</div>
                  <div className="text-sm text-muted-foreground">ROAS</div>
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
                    <div className="text-xs">Mở rate</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">3x</div>
                    <div className="text-xs">Higher engagement</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">800đ</div>
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
            Tại Sao <span className="text-primary">500+ Doanh Nghiệp</span> Tin Tưởng Chatbot D2 GROUP?
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
            Tính Năng <span className="text-primary">Vượt Trội</span>
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
            Tích Hợp <span className="text-primary">Mọi Nền Tảng</span> Phổ Biến
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
            Kết Quả <span className="text-primary">Thực Tế</span> Từ Khách Hàng
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
            Gói Dịch Vụ <span className="text-primary">Phù Hợp Mọi Quy Mô</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className={`gradient-card p-6 relative ${plan.popular ? 'border-primary shadow-glow' : ''} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Được chọn nhiều nhất
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
                  onClick={() => window.location.href = '/contact'}
                >
                  {plan.price === "Custom" ? "Liên Hệ Báo Giá" : "Chọn Gói Này"}
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
            Quy Trình Triển Khai <span className="text-primary">Đơn Giản</span>
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
            Câu Hỏi <span className="text-primary">Thường Gặp</span>
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
                Bắt Đầu Tự Động Hóa <span className="text-primary">Customer Service</span> Ngay Hôm Nay
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Đặt lịch tư vấn miễn phí và khám phá cách chatbot có thể chuyển đổi hoạt động kinh doanh của bạn.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Tư vấn miễn phí 30 phút</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Demo chatbot theo nhu cầu thực tế</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Báo giá chi tiết trong 24h</span>
                </div>
              </div>
            </div>
            
            <ContactForm 
              service="chatbot"
              title="Đặt Lịch Tư Vấn Chatbot"
              description="Chia sẻ nhu cầu chatbot và chúng tôi sẽ tạo demo phù hợp với doanh nghiệp của bạn."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatbotService;