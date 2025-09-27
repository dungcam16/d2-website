import React from 'react';
import { ArrowRight, Search, TrendingUp, Target, Shield, CheckCircle, Star, BarChart3, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SeoService = () => {
  const services = [
    {
      icon: Search,
      title: "Technical SEO Audit",
      description: "Kiểm tra kỹ thuật website toàn diện với 200+ yếu tố ranking",
      features: ["Core Web Vitals optimization", "Site architecture analysis", "Mobile-first indexing", "Schema markup implementation"]
    },
    {
      icon: Target,
      title: "Keyword Strategy",
      description: "Nghiên cứu từ khóa chuyên sâu và xây dựng content cluster",
      features: ["Competitor keyword analysis", "Search intent mapping", "Long-tail keyword research", "SERP feature optimization"]
    },
    {
      icon: TrendingUp,
      title: "On-Page Optimization",
      description: "Tối ưu hóa từng trang web để đạt ranking cao nhất",
      features: ["Title & meta optimization", "Internal linking strategy", "Content optimization", "Featured snippet targeting"]
    },
    {
      icon: Globe,
      title: "Local SEO",
      description: "Tối ưu hóa cho tìm kiếm địa phương và Google My Business",
      features: ["Google My Business optimization", "Local citation building", "Review management", "Local keyword targeting"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Top 3 Rankings Đảm Bảo",
      description: "Cam kết đưa website lên top 3 Google hoặc hoàn tiền 100%",
      metric: "98% thành công"
    },
    {
      icon: BarChart3,
      title: "Tăng 400% Organic Traffic",
      description: "Tăng trưởng traffic tự nhiên bền vững từ Google Search",
      metric: "Trong 6-12 tháng"
    },
    {
      icon: Shield,
      title: "White-Hat SEO 100%",
      description: "Tuân thủ nghiêm ngặt Google Guidelines, không rủi ro penalty",
      metric: "An toàn tuyệt đối"
    }
  ];

  const testimonials = [
    {
      name: "Lê Văn C",
      company: "CEO E-commerce",
      content: "Sau 8 tháng làm SEO với D2 Group, traffic organic tăng 500%, doanh số online tăng 300%. ROI rất ấn tượng.",
      rating: 5,
      result: "+500% traffic"
    },
    {
      name: "Phạm Thị D",
      company: "Marketing Manager",
      content: "D2 Group đã đưa 15/20 từ khóa target lên top 3 Google. Technical SEO audit của họ rất chi tiết và chuyên nghiệp.",
      rating: 5,
      result: "15/20 top 3 keywords"
    }
  ];

  const pricing = [
    {
      title: "SEO Starter",
      price: "2,000",
      currency: "USD",
      period: "/tháng",
      description: "Phù hợp cho website nhỏ, startup",
      features: [
        "5-10 target keywords",
        "Technical SEO audit",
        "On-page optimization",
        "Monthly reporting",
        "Email support"
      ],
      recommended: false
    },
    {
      title: "SEO Professional",
      price: "5,000",
      currency: "USD", 
      period: "/tháng",
      description: "Giải pháp toàn diện cho doanh nghiệp vừa",
      features: [
        "20-50 target keywords",
        "Advanced technical SEO",
        "Content optimization",
        "Link building strategy",
        "Weekly consultation",
        "Competitor analysis"
      ],
      recommended: true
    },
    {
      title: "SEO Enterprise",
      price: "8,000",
      currency: "USD",
      period: "/tháng",
      description: "Giải pháp enterprise cho website lớn",
      features: [
        "100+ target keywords",
        "Multi-site SEO management",
        "Advanced analytics setup",
        "Dedicated SEO team",
        "24/7 monitoring",
        "Custom reporting dashboard"
      ],
      recommended: false
    }
  ];

  const faqs = [
    {
      question: "Bao lâu để thấy kết quả SEO?",
      answer: "Thông thường bạn sẽ thấy cải thiện đầu tiên sau 3-4 tháng, và kết quả rõ rệt sau 6-12 tháng. SEO là chiến lược dài hạn mang lại kết quả bền vững."
    },
    {
      question: "D2 Group có đảm bảo ranking không?",
      answer: "Chúng tôi cam kết đưa website lên top 3 Google cho các từ khóa target hoặc hoàn tiền 100%. Tỷ lệ thành công hiện tại là 98%."
    },
    {
      question: "Có rủi ro penalty từ Google không?",
      answer: "Hoàn toàn không. Chúng tôi chỉ sử dụng White-Hat SEO techniques tuân thủ 100% Google Guidelines. Website của bạn sẽ an toàn tuyệt đối."
    },
    {
      question: "Tôi có thể theo dõi tiến độ SEO như thế nào?",
      answer: "Chúng tôi cung cấp dashboard real-time tracking rankings, traffic, và conversions. Báo cáo chi tiết được gửi hàng tuần/tháng."
    },
    {
      question: "SEO có phù hợp với mọi loại hình kinh doanh?",
      answer: "SEO hiệu quả cho hầu hết các ngành nghề, đặc biệt là B2B, e-commerce, dịch vụ địa phương. Chúng tôi sẽ đánh giá và tư vấn strategy phù hợp."
    }
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "Phân tích toàn diện website, đối thủ và từ khóa",
      duration: "Tuần 1-2"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Xây dựng chiến lược SEO chi tiết và roadmap",
      duration: "Tuần 2-3"
    },
    {
      step: "03",
      title: "Technical Implementation",
      description: "Triển khai tối ưu hóa kỹ thuật và on-page",
      duration: "Tuần 3-6"
    },
    {
      step: "04",
      title: "Content & Link Building",
      description: "Tối ưu nội dung và xây dựng backlink chất lượng",
      duration: "Tuần 6-12"
    },
    {
      step: "05",
      title: "Monitor & Optimize",
      description: "Theo dõi kết quả và tối ưu hóa liên tục",
      duration: "Liên tục"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              SEO Boost Solutions
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                SEO Boost
              </span>
              <br />
              Top 3 Google Đảm Bảo
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Dịch vụ SEO chuyên nghiệp với cam kết đưa website lên top 3 Google 
              hoặc hoàn tiền 100%. Tăng 400% organic traffic trong 6-12 tháng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow">
                Nhận SEO Audit Miễn Phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Xem Case Studies
              </Button>
            </div>
            
            {/* Guarantee Badge */}
            <div className="mt-12 inline-flex items-center px-6 py-3 rounded-full bg-green-50 border border-green-200">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Top 3 Google hoặc hoàn tiền 100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Dịch Vụ SEO Chuyên Nghiệp
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Giải pháp SEO toàn diện từ technical audit đến content optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elevation transition-all duration-300 animate-slide-up border-0 gradient-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Tại Sao Chọn SEO Boost D2 Group?
            </h2>
            <p className="text-xl text-muted-foreground">
              Cam kết kết quả và hiệu quả đã được chứng minh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-elevation transition-all duration-300 border-0">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <div className="text-sm text-primary font-semibold mb-4">{benefit.metric}</div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Quy Trình SEO Chuyên Nghiệp
            </h2>
            <p className="text-xl text-muted-foreground">
              5 bước đưa website lên top 3 Google
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                <div className="text-xs text-primary font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Khách Hàng Thành Công
            </h2>
            <p className="text-xl text-muted-foreground">
              Kết quả thực tế từ các dự án SEO
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 gradient-card">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Gói Dịch Vụ SEO
            </h2>
            <p className="text-xl text-muted-foreground">
              Giá cả minh bạch, cam kết kết quả
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.recommended ? 'border-primary shadow-glow' : 'border-0'}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Phổ biến nhất
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                  <div className="text-4xl font-bold">
                    {plan.currency && <span className="text-lg font-normal">{plan.currency} </span>}
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.recommended ? "default" : "outline"}
                  >
                    Chọn gói này
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-xl text-muted-foreground">
              Giải đáp thắc mắc về dịch vụ SEO
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 gradient-card">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
            Sẵn Sàng Lên Top 3 Google?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nhận SEO audit miễn phí và consultation về strategy phù hợp với website của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-glow">
              Nhận SEO Audit Miễn Phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Tư vấn chiến lược SEO
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoService;