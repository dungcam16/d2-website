import React from 'react';
import { MessageCircle, Zap, Workflow, ArrowRight, Bot, Globe, Settings, TrendingUp, Search, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Chatbot Đa Nền Tảng",
      description: "AI hội thoại thông minh trên Facebook Messenger, Instagram, WhatsApp, Telegram, Zalo và tích hợp Website.",
      features: [
        "Tin nhắn đa nền tảng",
        "Phản hồi AI thông minh",
        "Chuyển tiếp liền mạch",
        "Phân tích & báo cáo"
      ],
      color: "text-blue-400",
      delay: "0s",
      href: "/services/chatbot"
    },
    {
      icon: Zap,
      title: "Giải Pháp Zalo OA Toàn Diện",
      description: "Quản lý Zalo Official Account hoàn chỉnh với tin nhắn ZNS và gói chatbot tích hợp cho thị trường Việt Nam.",
      features: [
        "Thiết lập & quản lý Zalo OA",
        "Chiến dịch tin nhắn ZNS",
        "Luồng chatbot tích hợp",
        "Tối ưu thị trường Việt Nam"
      ],
      color: "text-green-400",
      delay: "0.2s",
      href: "/services/zalo"
    },
    {
      icon: TrendingUp,
      title: "Content Performance",
      description: "Chiến lược content marketing toàn diện với SEO optimization, analytics và performance tracking cho tăng trưởng bền vững.",
      features: [
        "Content strategy & planning",
        "SEO content optimization",
        "Performance analytics",
        "Multi-channel distribution"
      ],
      color: "text-orange-400",
      delay: "0.6s",
      href: "/services/content"
    },
    {
      icon: Search,
      title: "SEO Boost",
      description: "Dịch vụ SEO chuyên nghiệp với cam kết top 3 Google, tăng 400% organic traffic và ROI bền vững cho doanh nghiệp.",
      features: [
        "Technical SEO audit",
        "Keyword strategy & optimization",
        "Content & link building",
        "Top 3 ranking guarantee"
      ],
      color: "text-purple-400",
      delay: "0.8s",
      href: "/services/seo"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Phát triển website hiện đại, responsive với UI/UX tối ưu, tích hợp đầy đủ tính năng và tối ưu SEO từ đầu.",
      features: [
        "Responsive design & mobile-first",
        "Modern UI/UX experience",
        "SEO optimization built-in",
        "CMS integration & automation"
      ],
      color: "text-cyan-400",
      delay: "1.0s",
      href: "/services/website"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
            <span className="text-primary">Dịch Vụ Cốt Lõi</span> Của Chúng Tôi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Giải pháp automation toàn diện được thiết kế để chuyển đổi doanh nghiệp Việt Nam 
            thông qua công nghệ thông minh và phương pháp đã được chứng minh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card 
                key={service.title}
                className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in relative overflow-hidden"
                style={{ animationDelay: service.delay }}
              >
                <div className="shimmer-effect">
                  <div className="p-8 relative z-10">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`inline-flex p-4 rounded-xl bg-card/50 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-glow transition-all"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      className="w-full tech-border group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      onClick={() => window.location.href = service.href}
                    >
                      Tìm hiểu thêm
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-light/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Services;