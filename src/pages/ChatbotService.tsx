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
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ChatbotService = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    needs: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://n8n.d2group.co/webhook/website_d2group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          note: `Loại hình: ${formData.business}, Nhu cầu: ${formData.needs}`
        }),
      });

      if (response.ok) {
        alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất có thể.');
        setFormData({ name: '', phone: '', email: '', business: '', needs: '' });
      }
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Tiết Kiệm 80% Chi Phí",
      description: "So với team support truyền thống",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Phục Vụ 24/7",
      description: "Không giới hạn thời gian, múi giờ",
      color: "text-blue-500"
    },
    {
      icon: BarChart3,
      title: "Tăng Conversion 3X",
      description: "Lead qualification tự động",
      color: "text-purple-500"
    },
    {
      icon: Settings,
      title: "Tích Hợp Đa Nền Tảng",
      description: "8+ channels trong 1 dashboard",
      color: "text-orange-500"
    }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "NLP Tiếng Việt",
      description: "Hiểu ngữ cảnh conversation chính xác"
    },
    {
      icon: Globe,
      title: "Multi-Channel Hub",
      description: "Quản lý tất cả từ 1 dashboard thống nhất"
    },
    {
      icon: Users,
      title: "Smart Routing",
      description: "Chuyển cho agent khi cần thiệp"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Báo cáo performance chi tiết real-time"
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "Kết nối CRM, ERP existing seamless"
    },
    {
      icon: Zap,
      title: "Custom Workflows",
      description: "Automation theo business logic riêng"
    }
  ];

  const platforms = [
    { name: 'Website Widget', icon: Globe, description: 'Tích hợp widget chat vào website' },
    { name: 'Facebook Messenger', icon: Facebook, description: 'Auto-reply và chăm sóc khách' },
    { name: 'Zalo OA', icon: MessageCircle, description: 'Tin nhắn ZNS và chat automation' },
    { name: 'WhatsApp Business', icon: Phone, description: 'API chính thức WhatsApp' },
    { name: 'Telegram', icon: MessageCircle, description: 'Bot telegram tự động' },
    { name: 'Viber', icon: Phone, description: 'Tin nhắn Viber automation' },
    { name: 'Instagram DM', icon: Instagram, description: 'Auto-reply Instagram messages' },
    { name: 'Live Chat', icon: Headphones, description: 'Live chat với agent backup' }
  ];

  const caseStudies = [
    {
      title: "E-commerce Fashion",
      result: "Tăng 250% conversion rate",
      description: "Chatbot tư vấn size, màu sắc và xử lý đơn hàng tự động",
      metrics: "15,000+ conversations/tháng"
    },
    {
      title: "F&B Chain",
      result: "Giảm 70% thời gian response",
      description: "Đặt bàn, menu consultation và feedback collection",
      metrics: "98% customer satisfaction"
    },
    {
      title: "Real Estate",
      result: "400% tăng lead qualified",
      description: "Tư vấn dự án, lọc khách có budget và booking lịch xem",
      metrics: "2,500+ leads/tháng"
    }
  ];

  const pricingPlans = [
    {
      name: "STARTER",
      price: "5M/tháng",
      description: "Phù hợp startup và SME",
      features: [
        "2 platforms tích hợp",
        "1,000 conversations/tháng",
        "Basic analytics",
        "Email support",
        "Template chatbot sẵn có"
      ],
      highlighted: false
    },
    {
      name: "BUSINESS",
      price: "12M/tháng",
      description: "Lựa chọn phổ biến nhất",
      features: [
        "5 platforms tích hợp",
        "5,000 conversations/tháng",
        "Advanced analytics",
        "Priority support",
        "Custom workflow",
        "API integration",
        "Agent handover"
      ],
      highlighted: true
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      description: "Giải pháp toàn diện",
      features: [
        "Unlimited platforms",
        "Unlimited conversations",
        "White-label solution",
        "Dedicated support",
        "Custom development",
        "SLA guarantee",
        "On-premise option"
      ],
      highlighted: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Tư Vấn & Phân Tích",
      duration: "1-2 ngày",
      description: "Audit quy trình hiện tại, xác định pain points và đề xuất giải pháp"
    },
    {
      step: "02", 
      title: "Setup & Training",
      duration: "3-5 ngày",
      description: "Cấu hình chatbot, training data và tích hợp các platform"
    },
    {
      step: "03",
      title: "Testing & Go-live", 
      duration: "2-3 ngày",
      description: "UAT testing, fine-tuning và chính thức triển khai"
    },
    {
      step: "04",
      title: "Support & Optimization",
      duration: "ongoing",
      description: "24/7 monitoring, maintenance và continuous improvement"
    }
  ];

  const faqs = [
    {
      question: "Chatbot có hiểu được tiếng Việt không?",
      answer: "Có, chatbot của chúng tôi được training đặc biệt cho tiếng Việt với khả năng hiểu ngữ cảnh, từ lóng và cách diễn đạt đa dạng của người Việt."
    },
    {
      question: "Thời gian triển khai mất bao lâu?",
      answer: "Thông thường từ 1-2 tuần tùy theo độ phức tạp. Gói Starter có thể go-live trong 3-5 ngày, Enterprise có thể mất 2-4 tuần."
    },
    {
      question: "Chi phí setup và maintenance như thế nào?",
      answer: "Không có phí setup. Chi phí chỉ tính theo gói subscription hàng tháng. Maintenance và update được bao gồm trong gói."
    },
    {
      question: "Có thể tích hợp với hệ thống CRM hiện tại không?",
      answer: "Có, chúng tôi hỗ trợ tích hợp với hầu hết các CRM phổ biến như HubSpot, Salesforce, Pipedrive qua API hoặc Zapier."
    },
    {
      question: "Dữ liệu khách hàng có được bảo mật không?",
      answer: "Tuyệt đối. Chúng tôi tuân thủ GDPR, có SSL encryption và không lưu trữ dữ liệu nhạy cảm. Khách hàng hoàn toàn sở hữu data."
    },
    {
      question: "Chatbot có thể xử lý được bao nhiều cuộc hội thoại cùng lúc?",
      answer: "Không giới hạn số cuộc hội thoại đồng thời. Hệ thống auto-scale theo traffic và đảm bảo response time dưới 2 giây."
    },
    {
      question: "Nếu chatbot không trả lời được thì sao?",
      answer: "Hệ thống sẽ tự động chuyển cho agent người thật hoặc thu thập thông tin để callback. Tỷ lệ resolve tự động đạt 85-90%."
    },
    {
      question: "Có hỗ trợ đào tạo sử dụng không?",
      answer: "Có, chúng tôi cung cấp training session cho team, tài liệu hướng dẫn chi tiết và support 1-1 trong tháng đầu."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">
                Chatbot Đa Nền Tảng
                <br />
                <span className="text-blue-200">Tự Động Hóa Chăm Sóc Khách Hàng 24/7</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Tích hợp thông minh trên Website, Facebook Messenger, Zalo, WhatsApp, Telegram. 
                Tăng conversion 300%, giảm 80% chi phí support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Nhận Tư Vấn Miễn Phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Xem Demo Live
                </Button>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
                <div className="bg-white rounded-lg p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Chatbot Dashboard</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Facebook: 145 conversations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Website: 89 conversations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Zalo: 67 conversations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Tại Sao 500+ Doanh Nghiệp Tin Tưởng Chatbot D2 GROUP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Giải pháp chatbot đa nền tảng được tin tưởng bởi các doanh nghiệp hàng đầu Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={benefit.title} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-full bg-gray-50 ${benefit.color} mb-6`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Tính Năng Vượt Trội
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Công nghệ AI tiên tiến kết hợp với hiểu biết sâu về thị trường Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold font-heading mb-2 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Tích Hợp Mọi Nền Tảng Phổ Biến
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quản lý tất cả channels từ một dashboard thống nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Card key={platform.name} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-full bg-blue-50 text-blue-600 mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold font-heading mb-2 text-gray-900">{platform.name}</h3>
                    <p className="text-sm text-gray-600">{platform.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Kết Quả Thực Tế Từ Khách Hàng
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con số ấn tượng từ các doanh nghiệp đã triển khai chatbot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-gray-900">{study.title}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-3">{study.result}</div>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="text-sm font-medium text-blue-600">{study.metrics}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Gói Dịch Vụ Phù Hợp Mọi Quy Mô
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lựa chọn gói phù hợp với ngân sách và nhu cầu của doanh nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={plan.name} className={`relative hover:shadow-lg transition-all duration-300 animate-scale-in ${plan.highlighted ? 'ring-2 ring-blue-600 scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      PHỔ BIẾN NHẤT
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">{plan.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      variant={plan.highlighted ? "default" : "outline"}
                      onClick={() => window.location.href = '/contact'}
                    >
                      Liên Hệ Báo Giá
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Quy Trình Triển Khai Đơn Giản
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Từ tư vấn đến go-live chỉ trong 1-2 tuần
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 z-0" style={{ transform: 'translateX(50%)' }}></div>
                  )}
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">{step.title}</h3>
                <div className="text-sm font-medium text-blue-600 mb-3">{step.duration}</div>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-gray-900">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-xl text-gray-600">
              Giải đáp những thắc mắc phổ biến về dịch vụ chatbot
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
              Bắt Đầu Tự Động Hóa Customer Service Ngay Hôm Nay
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Hơn 500+ doanh nghiệp đã tin tưởng. Đến lượt bạn trải nghiệm sự khác biệt!
            </p>
          </div>

          <Card className="bg-white text-gray-900">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Họ và tên *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ tên của bạn"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Số điện thoại *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại"
                      required
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Loại hình kinh doanh</label>
                    <select
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Chọn ngành nghề</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="F&B">F&B</option>
                      <option value="Real Estate">Bất động sản</option>
                      <option value="Education">Giáo dục</option>
                      <option value="Healthcare">Y tế</option>
                      <option value="Other">Khác</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nhu cầu cụ thể</label>
                  <Textarea
                    name="needs"
                    value={formData.needs}
                    onChange={handleChange}
                    placeholder="Mô tả ngắn về nhu cầu chatbot của bạn..."
                    className="border-gray-300"
                    rows={3}
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Đặt Lịch Tư Vấn Miễn Phí
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Tư vấn miễn phí</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Không cam kết dài hạn</span>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatbotService;