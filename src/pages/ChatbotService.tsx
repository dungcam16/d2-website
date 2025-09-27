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

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      company: 'E-commerce Platform',
      content: 'Chatbot đa nền tảng của D2 Group đã giúp chúng tôi tăng 300% engagement và giảm 50% thời gian phản hồi khách hàng.',
      rating: 5
    },
    {
      name: 'Trần Thị B',
      company: 'Retail Chain',
      content: 'Tích hợp trên 6 platforms một cách seamless. ROI đạt 250% chỉ sau 3 tháng sử dụng.',
      rating: 5
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '5,000,000',
      period: 'setup + 2,000,000đ/tháng',
      features: [
        '2 nền tảng tích hợp',
        '1,000 conversations/tháng',
        'Chatbot cơ bản',
        'Analytics dashboard',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '15,000,000',
      period: 'setup + 5,000,000đ/tháng',
      features: [
        '4 nền tảng tích hợp',
        '5,000 conversations/tháng',
        'AI-powered chatbot',
        'Advanced analytics',
        'CRM integration',
        'Phone support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Tùy chỉnh',
      period: 'theo quy mô',
      features: [
        'Tất cả nền tảng',
        'Unlimited conversations',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Chatbot có thể tích hợp với hệ thống CRM hiện tại không?',
      answer: 'Có, chúng tôi hỗ trợ tích hợp với hầu hết các hệ thống CRM phổ biến như Salesforce, HubSpot, và các CRM local tại Việt Nam.'
    },
    {
      question: 'Thời gian setup và deployment là bao lâu?',
      answer: 'Thường từ 2-4 tuần tùy thuộc vào độ phức tạp. Chúng tôi có quy trình chuẩn để đảm bảo go-live đúng timeline.'
    },
    {
      question: 'Chatbot có hỗ trợ tiếng Việt tự nhiên không?',
      answer: 'Có, chatbot được train đặc biệt cho ngôn ngữ tiếng Việt với khả năng hiểu context và slang Việt Nam.'
    },
    {
      question: 'Chi phí maintenance hàng năm như thế nào?',
      answer: 'Chi phí maintenance bao gồm trong gói monthly. Chúng tôi cung cấp updates, monitoring và technical support 24/7.'
    }
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

            <Button size="lg" className="shadow-glow" onClick={() => window.location.href = '/contact'}>
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

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Khách hàng nói gì về <span className="text-primary">dịch vụ</span> của chúng tôi
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Bảng giá <span className="text-primary">chatbot đa nền tảng</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative ${plan.popular ? 'border-primary shadow-glow' : ''} animate-scale-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Phổ biến nhất
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.period}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  Chọn gói {plan.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Câu hỏi <span className="text-primary">thường gặp</span>
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
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
              <Button size="lg" className="shadow-glow" onClick={() => window.location.href = '/contact'}>
                Đặt lịch demo miễn phí
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