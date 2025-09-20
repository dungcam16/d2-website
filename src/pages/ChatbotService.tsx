import React from 'react';
import { MessageCircle, Facebook, Instagram, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ChatbotService = () => {
  const platforms = [
    { name: 'Facebook Messenger', icon: Facebook, color: 'text-blue-600' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'text-green-500' },
    { name: 'Telegram', icon: Zap, color: 'text-blue-400' },
    { name: 'Zalo', icon: MessageCircle, color: 'text-blue-500' },
    { name: 'Website', icon: Globe, color: 'text-primary' },
  ];

  const features = [
    'AI-powered natural language processing',
    'Multi-language support (Vietnamese & English)',
    'Seamless platform integration',
    'Advanced conversation flows',
    'Real-time analytics and reporting',
    'Custom branding and personalization',
    'Lead qualification and routing',
    '24/7 automated customer support'
  ];

  const benefits = [
    { title: 'Tăng hiệu quả', description: 'Tự động hóa 80% cuộc hội thoại khách hàng' },
    { title: 'Giảm chi phí', description: 'Tiết kiệm 60% chi phí vận hành support' },
    { title: 'Trải nghiệm nhất quán', description: 'Đồng nhất trên tất cả các nền tảng' },
    { title: 'Tăng chuyển đổi', description: 'Nâng cao tỷ lệ chuyển đổi lead 35%' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-foreground">Multi-Platform</span>
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">Chatbot Solutions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Tích hợp chatbot thông minh trên tất cả nền tảng messaging phổ biến tại Việt Nam. 
              Tự động hóa customer service và tăng hiệu quả kinh doanh.
            </p>

            <Button size="lg" className="shadow-glow">
              Tư vấn miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tích hợp <span className="text-primary">6+ nền tảng</span> messaging
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Card 
                  key={platform.name}
                  className="p-6 text-center hover:shadow-card transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className={`h-12 w-12 mx-auto mb-3 ${platform.color}`} />
                  <p className="text-sm font-medium">{platform.name}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tính năng <span className="text-primary">vượt trội</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="p-6 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 gradient-card">
            <h2 className="text-3xl font-bold mb-4">
              Sẵn sàng tự động hóa <span className="text-primary">customer service</span>?
            </h2>
            <p className="text-muted-foreground mb-6">
              Liên hệ ngay để được tư vấn miễn phí và demo chatbot phù hợp với doanh nghiệp của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow">
                Đặt lịch demo
              </Button>
              <Button variant="outline" size="lg">
                Tải case study
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatbotService;