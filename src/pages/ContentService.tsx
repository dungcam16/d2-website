import React from 'react';
import { ArrowRight, BarChart3, Target, Users, CheckCircle, Star, TrendingUp, FileText, Search, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContentService = () => {
  const services = [
    {
      icon: FileText,
      title: "Content Strategy",
      description: "Chiến lược nội dung toàn diện từ phân tích đối thủ đến content calendar",
      features: ["Phân tích đối thủ cạnh tranh", "Content mapping theo customer journey", "Calendar content 6 tháng", "KPI tracking system"]
    },
    {
      icon: Search,
      title: "SEO Content Creation",
      description: "Tạo nội dung SEO chất lượng cao với keyword research chuyên sâu",
      features: ["Keyword research chi tiết", "Content cluster optimization", "Technical SEO audit", "Featured snippet optimization"]
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Phân tích hiệu quả nội dung với dashboard real-time và insights chuyên sâu",
      features: ["Real-time performance dashboard", "Content ROI tracking", "Audience behavior analysis", "Conversion attribution"]
    },
    {
      icon: Lightbulb,
      title: "Content Automation",
      description: "Tự động hóa quy trình sản xuất và phân phối nội dung",
      features: ["Auto content distribution", "Social media automation", "Email sequence automation", "Content repurposing"]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Tăng 300% Traffic Organic",
      description: "Chiến lược content SEO được tối ưu cho search intent và user experience"
    },
    {
      icon: Users,
      title: "Tăng 250% Lead Generation",
      description: "Content funnel được thiết kế để chuyển đổi từ awareness đến decision"
    },
    {
      icon: BarChart3,
      title: "ROI 400% trong 6 tháng",
      description: "Đo lường chính xác hiệu quả đầu tư content marketing"
    }
  ];

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      company: "CEO Tech Startup",
      content: "D2 Group đã giúp chúng tôi tăng 300% organic traffic chỉ trong 4 tháng. Content strategy của họ rất chuyên nghiệp.",
      rating: 5
    },
    {
      name: "Trần Thị B",
      company: "Marketing Director",
      content: "Performance analytics dashboard của D2 Group giúp chúng tôi optimize content ROI một cách rất hiệu quả.",
      rating: 5
    }
  ];

  const pricing = [
    {
      title: "Content Starter",
      price: "15 triệu",
      period: "/tháng",
      description: "Phù hợp cho SME bắt đầu content marketing",
      features: [
        "8 bài blog SEO/tháng",
        "Content strategy cơ bản",
        "Social media content",
        "Monthly performance report",
        "Email support"
      ],
      recommended: false
    },
    {
      title: "Content Professional",
      price: "35 triệu",
      period: "/tháng",
      description: "Giải pháp toàn diện cho doanh nghiệp vừa",
      features: [
        "20 bài blog SEO/tháng",
        "Advanced content strategy",
        "Video content creation",
        "Performance dashboard",
        "Weekly consulting call",
        "A/B testing & optimization"
      ],
      recommended: true
    },
    {
      title: "Content Enterprise",
      price: "Tùy chỉnh",
      period: "",
      description: "Giải pháp enterprise với yêu cầu đặc biệt",
      features: [
        "Content production không giới hạn",
        "Dedicated content team",
        "Multi-language content",
        "Advanced analytics & reporting",
        "24/7 support",
        "Custom integrations"
      ],
      recommended: false
    }
  ];

  const faqs = [
    {
      question: "Content strategy bao gồm những gì?",
      answer: "Content strategy bao gồm phân tích đối thủ, keyword research, content mapping theo customer journey, content calendar 6 tháng và KPI tracking system."
    },
    {
      question: "Tôi có thể theo dõi hiệu quả content như thế nào?",
      answer: "Chúng tôi cung cấp dashboard real-time tracking traffic, engagement, conversion và ROI. Báo cáo chi tiết được gửi hàng tuần/tháng."
    },
    {
      question: "Thời gian để thấy kết quả content marketing?",
      answer: "Thông thường bạn sẽ thấy kết quả đầu tiên sau 2-3 tháng, và kết quả rõ rệt sau 4-6 tháng với chiến lược content phù hợp."
    },
    {
      question: "D2 Group có hỗ trợ content đa ngôn ngữ?",
      answer: "Có, chúng tôi có team native writer cho tiếng Anh, tiếng Nhật và các ngôn ngữ khác tùy theo yêu cầu dự án."
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
              <Lightbulb className="w-4 h-4 mr-2" />
              Content Performance Solutions
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                Content Marketing
              </span>
              <br />
              Tăng Trưởng Doanh Số
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Chiến lược content marketing toàn diện giúp doanh nghiệp tăng 300% traffic organic, 
              250% lead generation và ROI 400% trong 6 tháng
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow">
                Tư vấn Content Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Xem Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Dịch Vụ Content Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Giải pháp content marketing toàn diện từ strategy đến execution và measurement
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
              Kết Quả Content Marketing
            </h2>
            <p className="text-xl text-muted-foreground">
              Số liệu thực tế từ các dự án thành công
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-elevation transition-all duration-300 border-0">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Khách Hàng Nói Gì
            </h2>
            <p className="text-xl text-muted-foreground">
              Phản hồi từ các doanh nghiệp đã thành công
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 gradient-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Gói Dịch Vụ Content
            </h2>
            <p className="text-xl text-muted-foreground">
              Chọn gói phù hợp với quy mô doanh nghiệp
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
                    {plan.price === "Tùy chỉnh" ? "Liên hệ tư vấn" : "Chọn gói này"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-xl text-muted-foreground">
              Giải đáp các thắc mắc về Content Marketing
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
            Sẵn Sàng Tăng Trưởng Với Content Marketing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Liên hệ ngay để nhận consultation miễn phí về chiến lược content phù hợp với doanh nghiệp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-glow">
              Đặt lịch tư vấn miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Tải case study
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentService;