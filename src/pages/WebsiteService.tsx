import React, { useState } from 'react';
import { 
  Code, Globe, Smartphone, Zap, ArrowRight, CheckCircle, 
  Phone, Mail, Users, Clock, TrendingUp, Shield, Settings, BarChart3,
  Monitor, Search, ChevronDown, Star, PlayCircle, Layers, Palette,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WebsiteService = () => {

  const benefits = [
    {
      title: "Responsive Design",
      description: "Tối ưu mọi thiết bị",
      icon: Smartphone,
      color: "text-primary"
    },
    {
      title: "Load Speed 3s",
      description: "Tối ưu hiệu suất tối đa",
      icon: Zap,
      color: "text-primary"
    },
    {
      title: "SEO Ready",
      description: "Tích hợp SEO từ đầu",
      icon: Search,
      color: "text-primary"
    },
    {
      title: "24/7 Support",
      description: "Hỗ trợ kỹ thuật liên tục",
      icon: Shield,
      color: "text-primary"
    }
  ];

  const features = [
    {
      title: "Thiết Kế UI/UX Hiện Đại",
      description: "Thiết kế đẹp mắt, trải nghiệm tối ưu",
      icon: Palette,
      details: ["Thiết kế tập trung người dùng", "Tối ưu mobile-first", "Tiêu chuẩn accessibility", "Thống nhất thương hiệu"]
    },
    {
      title: "Framework Responsive",
      description: "Hoạt động hoàn hảo mọi thiết bị",
      icon: Monitor,
      details: ["Tương thích đa trình duyệt", "Tối ưu mobile", "Thân thiện tablet", "Trải nghiệm desktop"]
    },
    {
      title: "Tối Ưu Hiệu Suất",
      description: "Tốc độ tải nhanh, SEO friendly",
      icon: Zap,
      details: ["Tối ưu hình ảnh", "Nén code", "Tích hợp CDN", "Chiến lược cache"]
    },
    {
      title: "Tích Hợp CMS",
      description: "Quản lý nội dung dễ dàng",
      icon: Settings,
      details: ["Quản lý nội dung", "Admin thân thiện", "Hệ thống blog", "Thư viện media"]
    },
    {
      title: "Analytics & Tracking",
      description: "Theo dõi hiệu suất chi tiết",
      icon: BarChart3,
      details: ["Google Analytics", "Tracking conversion", "Hành vi người dùng", "Metrics hiệu suất"]
    },
    {
      title: "Bảo Mật & Bảo Trì",
      description: "Bảo mật cao, cập nhật thường xuyên",
      icon: Shield,
      details: ["Chứng chỉ SSL", "Giám sát bảo mật", "Cập nhật định kỳ", "Hệ thống backup"]
    }
  ];

  const technologies = [
    { name: "React", description: "Framework frontend", icon: Code },
    { name: "WordPress", description: "Nền tảng CMS", icon: Globe },
    { name: "Next.js", description: "Framework full-stack", icon: Layers },
    { name: "Tailwind CSS", description: "Framework styling", icon: Palette },
    { name: "Node.js", description: "Backend runtime", icon: Settings },
    { name: "MongoDB", description: "Cơ sở dữ liệu", icon: BarChart3 },
    { name: "AWS", description: "Cloud hosting", icon: Monitor },
    { name: "Cloudflare", description: "CDN & Bảo mật", icon: Shield }
  ];

  const demoWebsites = [
    // Các ngành cơ bản ở đầu
    {
      title: "Food & Restaurant",
      industry: "Nhà hàng",
      description: "Website nhà hàng với menu online và đặt bàn",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://hungry-raccoon.lovable.app",
      features: ["Online menu", "Reservation system", "Location map"]
    },
    {
      title: "Fashion E-commerce",
      industry: "Thời trang",
      description: "Website bán quần áo online với giỏ hàng và thanh toán",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://preview--vintage-smile-capture.lovable.app",
      features: ["Product catalog", "Shopping cart", "Payment gateway"]
    },
    {
      title: "Travel & Tourism",
      industry: "Du lịch",
      description: "Website du lịch với booking tour và khách sạn",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://shipped.lovable.app",
      features: ["Tour booking", "Hotel reservation", "Travel guide"]
    },
    {
      title: "E-commerce Store",
      industry: "Thương mại điện tử",
      description: "Website bán hàng online với hệ thống quản lý đơn hàng",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://meal-muse-journal.lovable.app",
      features: ["Product management", "Order tracking", "Customer service"]
    },
    {
      title: "Retail Store",
      industry: "Bán lẻ",
      description: "Website cửa hàng bán lẻ với inventory management",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://mobiledevs.lovable.app",
      features: ["Inventory system", "POS integration", "Customer loyalty"]
    },
    
    // Các ngành khác
    {
      title: "Solar Energy Solutions",
      industry: "Năng lượng",
      description: "Website năng lượng mặt trời với công cụ tính toán và simulation",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://solar-sim-showcase.lovable.app",
      features: ["Solar calculator", "Energy simulation", "Installation guide"]
    },
    {
      title: "Project Management Tool",
      industry: "Quản lý dự án",
      description: "Ứng dụng quản lý dự án với todo list và tracking",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://preview--project-planner-sunny.lovable.app",
      features: ["Task management", "Team collaboration", "Progress tracking"]
    },
    {
      title: "Daily Todo App",
      industry: "Productivity",
      description: "Ứng dụng quản lý công việc hàng ngày",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://preview--easy-daily-todo.lovable.app",
      features: ["Task scheduling", "Reminder system", "Progress tracking"]
    },
    {
      title: "AI Finance Automation",
      industry: "Tài chính",
      description: "Nền tảng tự động hóa tài chính với AI",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://finance-ai-automations-lab.lovable.app",
      features: ["AI automation", "Financial analysis", "Process optimization"]
    },
    {
      title: "Social Media Caption AI",
      industry: "Marketing",
      description: "Công cụ tạo caption tự động cho social media",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://reach-boost-captions-craft.lovable.app",
      features: ["AI caption generation", "SEO optimization", "Multi-platform support"]
    },
    {
      title: "Medical Compliance Platform",
      industry: "Y tế",
      description: "Nền tảng tuân thủ y tế cho thiết bị y tế",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://vivacomply.lovable.app",
      features: ["Compliance tracking", "Medical device management", "Regulatory reports"]
    },
    {
      title: "Chat Community Platform",
      industry: "Cộng đồng",
      description: "Nền tảng chat cộng đồng với water cooler chat",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://water-cooler-chat-club.lovable.app",
      features: ["Community chat", "Group discussions", "Member management"]
    },
    {
      title: "Customer Experience Analytics",
      industry: "Phân tích",
      description: "Công cụ phân tích trải nghiệm khách hàng",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://cx-truth-teller-app.lovable.app",
      features: ["CX analytics", "Customer insights", "Feedback tracking"]
    },
    {
      title: "Manga Creation Studio",
      industry: "Sáng tạo",
      description: "Studio tạo webtoon và manga với AI",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://manga-craft-boost.lovable.app",
      features: ["AI-powered creation", "Webtoon tools", "Creative workflow"]
    },
    {
      title: "Real Estate Platform",
      industry: "Bất động sản",
      description: "Website bất động sản với tìm kiếm và virtual tour",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://solar-sim-showcase.lovable.app",
      features: ["Property search", "Virtual tours", "Agent profiles"]
    },
    {
      title: "Education Platform",
      industry: "Giáo dục",
      description: "Nền tảng học tập online với course management",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://shipped.lovable.app",
      features: ["Course catalog", "Online learning", "Student portal"]
    },
    {
      title: "Photography Portfolio",
      industry: "Nhiếp ảnh",
      description: "Website portfolio cho photographer và creative",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://preview--vintage-smile-capture.lovable.app",
      features: ["Gallery showcase", "Client booking", "Portfolio management"]
    },
    {
      title: "Fitness & Gym",
      industry: "Thể dục",
      description: "Website phòng gym với class booking và membership",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://mobiledevs.lovable.app",
      features: ["Class schedules", "Membership plans", "Trainer profiles"]
    },
    {
      title: "Beauty & Spa",
      industry: "Làm đẹp",
      description: "Website spa và salon với appointment booking",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://water-cooler-chat-club.lovable.app",
      features: ["Service booking", "Staff profiles", "Treatment packages"]
    },
    {
      title: "Law Firm",
      industry: "Luật sư",
      description: "Website văn phòng luật với consultation booking",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop&crop=center",
      demoUrl: "https://cx-truth-teller-app.lovable.app",
      features: ["Legal services", "Case studies", "Attorney profiles"]
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform: Tăng 300% online sales",
      metrics: "300% sales growth",
      description: "Website bán hàng online với tích hợp thanh toán, quản lý đơn hàng và CRM tự động",
      results: ["300% tăng doanh số", "85% conversion rate", "50% giảm bounce rate"]
    },
    {
      title: "Corporate Website: 400% traffic increase",
      metrics: "400% more traffic",
      description: "Website doanh nghiệp với SEO optimization và content marketing integration",
      results: ["400% tăng traffic", "Top 3 Google rankings", "90% faster load time"]
    },
    {
      title: "SaaS Platform: 250% user engagement",
      metrics: "250% engagement",
      description: "Nền tảng SaaS với dashboard analytics và user management system",
      results: ["250% user engagement", "99.9% uptime", "60% faster performance"]
    }
  ];

  const pricing = [
    {
      name: "LANDING PAGE",
      price: "15M",
      period: "",
      description: "Website 1 trang, tối ưu conversion",
      features: [
        "Thiết kế responsive",
        "Tối ưu SEO",
        "Tích hợp form liên hệ",
        "Google Analytics",
        "Chứng chỉ SSL",
        "3 tháng hỗ trợ"
      ],
      popular: false
    },
    {
      name: "BUSINESS WEBSITE",
      price: "35M",
      period: "",
      description: "Website đa trang với CMS",
      features: [
        "Website 5-10 trang",
        "Tích hợp CMS",
        "Hệ thống blog",
        "SEO nâng cao",
        "Tích hợp social media",
        "6 tháng hỗ trợ",
        "Tối ưu hiệu suất"
      ],
      popular: true
    },
    {
      name: "E-COMMERCE",
      price: "Custom",
      period: "",
      description: "Website bán hàng online",
      features: [
        "Danh mục sản phẩm",
        "Giỏ hàng & thanh toán",
        "Tích hợp payment",
        "Quản lý đơn hàng",
        "Dashboard khách hàng",
        "Hệ thống inventory",
        "12 tháng hỗ trợ"
      ],
      popular: false
    }
  ];

  const workflow = [
    {
      step: "1",
      title: "Khám Phá & Lập Kế Hoạch",
      description: "Phân tích yêu cầu và lập kế hoạch dự án",
      duration: "2-3 ngày"
    },
    {
      step: "2", 
      title: "Thiết Kế & Prototype",
      description: "Thiết kế UI/UX và tạo prototype",
      duration: "5-7 ngày"
    },
    {
      step: "3",
      title: "Phát Triển & Testing",
      description: "Phát triển website và test toàn diện",
      duration: "10-15 ngày"
    },
    {
      step: "4",
      title: "Launch & Hỗ Trợ",
      description: "Go-live và hỗ trợ vận hành",
      duration: "ongoing"
    }
  ];

  const faqs = [
    {
      question: "Thời gian phát triển website mất bao lâu?",
      answer: "Tùy thuộc độ phức tạp: Landing page 1-2 tuần, Business website 3-4 tuần, E-commerce 6-8 tuần."
    },
    {
      question: "Website có responsive trên mobile không?",
      answer: "Tất cả website của chúng tôi đều responsive, tối ưu hoàn hảo trên mọi thiết bị từ mobile đến desktop."
    },
    {
      question: "Có tích hợp SEO từ đầu không?",
      answer: "Có, chúng tôi tích hợp SEO on-page, tối ưu tốc độ tải, meta tags và cấu trúc URL thân thiện với search engine."
    },
    {
      question: "Có thể tự quản lý nội dung không?",
      answer: "Có, chúng tôi tích hợp CMS để bạn có thể dễ dàng cập nhật nội dung, hình ảnh và sản phẩm."
    },
    {
      question: "Chi phí hosting và domain như thế nào?",
      answer: "Chi phí hosting 2-5M/năm tùy package, domain .com khoảng 500K/năm. Chúng tôi hỗ trợ setup ban đầu."
    },
    {
      question: "Có hỗ trợ sau khi bàn giao không?",
      answer: "Có, chúng tôi cung cấp 3-12 tháng support tùy package, bao gồm bug fixes và hướng dẫn sử dụng."
    },
    {
      question: "Website có tích hợp thanh toán online không?",
      answer: "Có, chúng tôi tích hợp các cổng thanh toán phổ biến như VNPay, MoMo, ZaloPay và thẻ tín dụng."
    },
    {
      question: "Có được source code không?",
      answer: "Có, sau khi hoàn thành dự án, bạn sẽ được bàn giao toàn bộ source code và quyền sở hữu website."
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
                <span className="text-primary">Website Development</span>
                <br />
                <span className="text-foreground">Hiện Đại & Tối Ưu Conversion</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Phát triển website responsive với UI/UX đẹp mắt, tối ưu SEO, tích hợp CMS và 
                các tính năng automation. Tăng 300% conversion rate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="shadow-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Nhận Báo Giá Miễn Phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Xem Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">300+</div>
                  <div className="text-sm text-muted-foreground">projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3s</div>
                  <div className="text-sm text-muted-foreground">load time</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="gradient-card p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Website Performance</h3>
                  <div className="text-sm text-muted-foreground">Real-time metrics</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">98</div>
                    <div className="text-xs">PageSpeed Score</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">100%</div>
                    <div className="text-xs">Mobile Responsive</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">A+</div>
                    <div className="text-xs">Security Rating</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">SEO</div>
                    <div className="text-xs">Optimized</div>
                  </div>
                </div>
                
                <div className="h-32 rounded-lg bg-muted/30 flex items-center justify-center">
                  <div className="text-center text-sm text-muted-foreground">
                    🚀 High Performance Website
                    <br />
                    Modern tech stack & optimization
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
            Tại Sao Chọn <span className="text-primary">Website Development</span> D2 GROUP?
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

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Công Nghệ <span className="text-primary">Hiện Đại</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Card 
                  key={index}
                  className="gradient-card p-6 text-center hover:shadow-elevation transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <IconComponent className="h-8 w-8 mx-auto text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Websites Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Website <span className="text-primary">Demo</span> Theo Từng Ngành
          </h2>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {demoWebsites.map((demo, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <Card className="gradient-card h-full hover:shadow-elevation transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={demo.image} 
                        alt={demo.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {demo.industry}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                      <p className="text-muted-foreground mb-4">{demo.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {demo.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open(demo.demoUrl, '_blank')}
                      >
                        Xem Demo Live
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          <div className="text-center mt-8">
            <Button 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Yêu Cầu Demo Tùy Chỉnh
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
                      <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quy Trình <span className="text-primary">Phát Triển</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <Card 
                key={index}
                className="gradient-card p-6 text-center hover:shadow-elevation transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-3">{step.description}</p>
                <div className="text-sm font-medium text-primary">{step.duration}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Bảng Giá <span className="text-primary">Minh Bạch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className={`gradient-card p-6 hover:shadow-elevation transition-all duration-300 animate-scale-in ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Phổ Biến Nhất
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => window.location.href = '/contact'}
                >
                  Chọn Gói Này
                </Button>
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
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="gradient-card px-6 border-0 rounded-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Sẵn Sàng Xây Dựng <span className="text-primary">Website Tuyệt Vời</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết cho dự án website của bạn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="shadow-glow"
              onClick={() => window.location.href = '/contact'}
            >
              Nhận Tư Vấn Miễn Phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Gọi Ngay: 0901 234 567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteService;