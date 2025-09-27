import React from 'react';
import { MessageCircle, Zap, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ZaloService = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Zalo OA Setup & Management',
      description: 'Thiết lập và quản lý tài khoản Zalo Official Account chuyên nghiệp',
      features: ['Xác minh tài khoản', 'Thiết kế profile', 'Content strategy', 'Performance tracking']
    },
    {
      icon: Zap,
      title: 'ZNS Messaging Campaigns',
      description: 'Chiến dịch tin nhắn ZNS hiệu quả với tỷ lệ mở cao',
      features: ['Template design', 'Audience targeting', 'A/B testing', 'Analytics reporting']
    },
    {
      icon: Users,
      title: 'Integrated Chatbot',
      description: 'Chatbot tích hợp sâu với hệ sinh thái Zalo',
      features: ['Natural conversation', 'Lead qualification', 'Order tracking', 'Customer support']
    }
  ];

  const stats = [
    { number: '15M+', label: 'Users tiếp cận hàng tháng' },
    { number: '85%', label: 'Tỷ lệ mở tin nhắn ZNS' },
    { number: '3x', label: 'Tăng engagement rate' },
    { number: '50%', label: 'Giảm chi phí marketing' }
  ];

  const whyZalo = [
    'Nền tảng #1 tại Việt Nam với 74M+ users',
    'Tỷ lệ mở tin nhắn cao nhất (85%+)',
    'Tích hợp thanh toán và e-commerce',
    'Hỗ trợ đa dạng content format',
    'API mạnh mẽ cho automation',
    'Chi phí marketing hiệu quả'
  ];

  const testimonials = [
    {
      name: 'Lê Văn C',
      company: 'F&B Chain',
      content: 'Zalo OA của D2 Group giúp chúng tôi tiếp cận 2M+ khách hàng với chi phí chỉ bằng 1/3 Facebook Ads.',
      rating: 5
    },
    {
      name: 'Phạm Thị D',
      company: 'Beauty Brand',
      content: 'ZNS campaigns có tỷ lệ mở 88%, cao gấp 4 lần email marketing. Sales tăng 180% sau 6 tháng.',
      rating: 5
    }
  ];

  const pricing = [
    {
      name: 'Setup Cơ Bản',
      price: '3,000,000',
      period: 'một lần + 1,500,000đ/tháng',
      features: [
        'Setup Zalo OA',
        'Xác minh chính thức',
        'Template cơ bản',
        '1,000 ZNS/tháng',
        'Báo cáo cơ bản'
      ],
      popular: false
    },
    {
      name: 'Pro Package',
      price: '8,000,000',
      period: 'setup + 3,500,000đ/tháng',
      features: [
        'Tất cả tính năng Basic',
        '10,000 ZNS/tháng',
        'Chatbot tích hợp',
        'Advanced analytics',
        'A/B testing',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Liên hệ',
      period: 'tùy chỉnh theo quy mô',
      features: [
        'Unlimited ZNS',
        'Custom chatbot flows',
        'API integration',
        'White-label solution',
        'Dedicated account manager',
        'Training & workshop'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'ZNS (Zalo Notification Service) khác gì với tin nhắn thường?',
      answer: 'ZNS là tin nhắn chính thức từ doanh nghiệp với tỷ lệ mở cao (85%+), có thể gửi đến tất cả user Zalo mà không cần kết bạn trước.'
    },
    {
      question: 'Chi phí ZNS như thế nào?',
      answer: 'Chi phí ZNS từ 200-800đ/tin nhắn tùy loại template. Rẻ hơn 50-70% so với SMS marketing truyền thống.'
    },
    {
      question: 'Có thể tích hợp Zalo OA với website không?',
      answer: 'Có, chúng tôi tích hợp Zalo chat widget vào website và kết nối với hệ thống CRM để quản lý lead hiệu quả.'
    },
    {
      question: 'Quy trình xác minh Zalo OA mất bao lâu?',
      answer: 'Thường 3-7 ngày làm việc. Chúng tôi sẽ hỗ trợ chuẩn bị đầy đủ giấy tờ để tăng tỷ lệ approval.'
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
              <span className="text-foreground">Zalo OA</span>
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">Complete Solutions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Giải pháp toàn diện cho Zalo Official Account. Từ setup, quản lý đến automation 
              và ZNS campaigns - tối ưu hóa cho thị trường Việt Nam.
            </p>

            <Button size="lg" className="shadow-glow">
              Tư vấn Zalo OA miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dịch vụ <span className="text-primary">Zalo OA</span> toàn diện
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-card transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-primary mb-6">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Zalo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tại sao chọn <span className="text-primary">Zalo</span>?
              </h2>
              
              <div className="space-y-4">
                {whyZalo.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Zalo Market Dominance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Market Share</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Daily Active Users</span>
                  <span className="font-bold">45M+</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Message Open Rate</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Khách hàng <span className="text-primary">thành công</span> với Zalo OA
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
            Bảng giá <span className="text-primary">Zalo OA</span> dịch vụ
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
                      Được chọn nhiều nhất
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
            Câu hỏi <span className="text-primary">thường gặp</span> về Zalo OA
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
              Bắt đầu với <span className="text-primary">Zalo OA</span> ngay hôm nay
            </h2>
            <p className="text-muted-foreground mb-6">
              Tiếp cận 74M+ người dùng Việt Nam với chi phí marketing hiệu quả nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow">
                Setup Zalo OA miễn phí
              </Button>
              <Button variant="outline" size="lg">
                Tư vấn pricing
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZaloService;