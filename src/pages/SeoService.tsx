import React, { useState } from 'react';
import { 
  ArrowRight, Search, TrendingUp, Target, Shield, CheckCircle, Star, BarChart3, Zap, Globe,
  Award, Clock, Users, Monitor, Database, Settings, Link, FileText, AlertTriangle,
  Smartphone, Gauge, MapPin, Brain, Eye, Filter, Download, Lightbulb, Trophy,
  Building, ShoppingCart, Heart, Code, Home, Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SeoService = () => {
  const [auditForm, setAuditForm] = useState({
    website: '',
    industry: '',
    currentRankings: '',
    mainCompetitors: ''
  });

  const guaranteeDetails = [
    {
      icon: Trophy,
      title: "Kết Quả Top 3",
      description: "Từ khóa chính trong top 3 Google VN",
      guarantee: "Vị trí 1-3"
    },
    {
      icon: Clock,
      title: "Thời Gian 6 Tháng",
      description: "Kết quả rõ ràng trong 6 tháng",
      guarantee: "Thời gian cố định"
    },
    {
      icon: Shield,
      title: "Đảm Bảo Hoàn Tiền",
      description: "100% hoàn tiền nếu không đạt",
      guarantee: "Hoàn tiền đầy đủ"
    },
    {
      icon: TrendingUp,
      title: "Tăng Trưởng Lưu Lượng",
      description: "Tối thiểu 200% tăng lưu lượng tự nhiên",
      guarantee: "Kết quả đo được"
    },
    {
      icon: Target,
      title: "Chất Lượng Khách Hàng Tiềm Năng",
      description: "Lưu lượng chất lượng, không chỉ là con số",
      guarantee: "Tập trung chất lượng"
    }
  ];

  const vietnamExpertise = [
    {
      icon: Globe,
      title: "SEO Tiếng Việt",
      description: "Tối ưu tiếng Việt bản địa với hiểu biết sâu về ngữ cảnh và hành vi tìm kiếm"
    },
    {
      icon: MapPin,
      title: "Tối Ưu Tìm Kiếm Địa Phương",
      description: "Google My Business, trích dẫn địa phương, và định vị địa lý cho thị trường Việt Nam"
    },
    {
      icon: Users,
      title: "Hiểu Biết Thị Trường Việt Nam",
      description: "Hành vi người tiêu dùng, mô hình tìm kiếm và sở thích của người Việt"
    },
    {
      icon: Eye,
      title: "Bối Cảnh Đối Thủ",
      description: "Kiến thức sâu về đối thủ VN và chiến lược đang thành công"
    },
    {
      icon: Brain,
      title: "Thuật Toán Google VN",
      description: "Cập nhật và thay đổi cụ thể cho thị trường VN, yếu tố xếp hạng địa phương"
    }
  ];

  const seoServices = [
    {
      icon: Settings,
      title: "SEO Kỹ Thuật",
      description: "Tốc độ site, mobile, Core Web Vitals, lập chỉ mục",
      details: ["Tối ưu tốc độ trang", "Lập chỉ mục mobile-first", "Core Web Vitals", "Tối ưu crawl"]
    },
    {
      icon: FileText,
      title: "Tối Ưu On-Page",
      description: "Tối ưu nội dung, liên kết nội bộ",
      details: ["Tối ưu title & meta", "Cấu trúc header", "Liên kết nội bộ", "Tối ưu nội dung"]
    },
    {
      icon: Link,
      title: "SEO Off-Page",
      description: "Xây dựng liên kết, trích dẫn, đề cập thương hiệu",
      details: ["Backlink chất lượng cao", "Trích dẫn địa phương", "Đề cập thương hiệu", "Xây dựng uy tín"]
    },
    {
      icon: MapPin,
      title: "SEO Địa Phương",
      description: "Tối ưu GMB, thư mục địa phương",
      details: ["Google My Business", "Trích dẫn địa phương", "Quản lý đánh giá", "Nội dung địa phương"]
    },
    {
      icon: Search,
      title: "SEO Nội Dung",
      description: "Chiến lược từ khóa, cụm chủ đề, khoảng trống nội dung",
      details: ["Nghiên cứu từ khóa", "Chiến lược nội dung", "Cụm chủ đề", "Khoảng trống nội dung"]
    },
    {
      icon: BarChart3,
      title: "Phân Tích SEO",
      description: "Theo dõi hiệu suất, giám sát đối thủ",
      details: ["Theo dõi xếp hạng", "Phân tích lưu lượng", "Giám sát đối thủ", "Báo cáo ROI"]
    }
  ];

  const technicalChecklist = [
    {
      icon: Gauge,
      title: "Tối Ưu Tốc Độ Site",
      description: "Đảm bảo thời gian tải <3s",
      metric: "Điểm Core Web Vitals: 90+"
    },
    {
      icon: Smartphone,
      title: "Lập Chỉ Mục Mobile-First",
      description: "Trải nghiệm mobile hoàn hảo",
      metric: "Điểm thân thiện mobile: 100%"
    },
    {
      icon: Monitor,
      title: "Core Web Vitals",
      description: "Tối ưu LCP, FID, CLS",
      metric: "Tất cả chỉ số trong vùng xanh"
    },
    {
      icon: Code,
      title: "Schema Markup",
      description: "Triển khai rich snippets",
      metric: "Phủ sóng dữ liệu có cấu trúc: 95%"
    },
    {
      icon: Database,
      title: "Sơ Đồ Site XML",
      description: "Cấu trúc lập chỉ mục phù hợp",
      metric: "100% trang được lập chỉ mục"
    },
    {
      icon: Shield,
      title: "SSL & Bảo Mật",
      description: "HTTPS, header bảo mật",
      metric: "Điểm bảo mật: A+"
    }
  ];

  const linkBuildingStrategy = [
    {
      title: "Tên Miền Uy Tín Cao",
      description: "Website DA 70+ với lưu lượng cao",
      metric: "DA trung bình: 75+"
    },
    {
      title: "Thích Hợp Ngành",
      description: "Backlink cụ thể ngành từ site liên quan",
      metric: "Liên quan ngành: 95%"
    },
    {
      title: "Liên Kết Dựa Nội Dung",
      description: "Bài viết khách, trang tài nguyên, đối tác nội dung",
      metric: "Liên kết biên tập: 80%"
    },
    {
      title: "Trích Dẫn Địa Phương",
      description: "Thư mục doanh nghiệp Việt Nam và nền tảng địa phương",
      metric: "Trích dẫn địa phương: 50+"
    },
    {
      title: "Đề Cập Thương Hiệu",
      description: "Chuyển đổi đề cập không liên kết thành backlink",
      metric: "Chuyển đổi đề cập: 60%"
    },
    {
      title: "Phân Tích Đối Thủ",
      description: "Kỹ thuật đảo ngược chiến lược liên kết đối thủ",
      metric: "Phủ sóng khoảng trống: 85%"
    }
  ];

  const auditCategories = [
    {
      icon: Settings,
      title: "Technical Issues",
      description: "Crawl errors, indexing problems",
      checks: "35+ technical factors"
    },
    {
      icon: FileText,
      title: "On-Page Analysis",
      description: "Title tags, meta descriptions, headers",
      checks: "25+ on-page elements"
    },
    {
      icon: Search,
      title: "Content Analysis",
      description: "Keyword optimization, content gaps",
      checks: "20+ content factors"
    },
    {
      icon: Link,
      title: "Backlink Profile",
      description: "Link quality, toxic links audit",
      checks: "15+ link metrics"
    },
    {
      icon: Target,
      title: "Competitor Analysis",
      description: "Gap analysis vs top competitors",
      checks: "30+ competitive factors"
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "GMB, citations, local rankings",
      checks: "20+ local factors"
    }
  ];

  const industries = [
    {
      icon: ShoppingCart,
      name: "E-commerce SEO",
      description: "Product optimization, category pages",
      specialties: ["Product page SEO", "Category optimization", "Shopping feed", "Review schemas"]
    },
    {
      icon: Building,
      name: "Local Business",
      description: "GMB, local citations, review management",
      specialties: ["Google My Business", "Local citations", "Review management", "Local content"]
    },
    {
      icon: Briefcase,
      name: "B2B Services",
      description: "Lead generation, thought leadership content",
      specialties: ["Service page SEO", "Case studies", "Industry content", "Lead magnets"]
    },
    {
      icon: Code,
      name: "SaaS/Tech",
      description: "Technical content, developer resources",
      specialties: ["Technical content", "API documentation", "Product pages", "Developer SEO"]
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Compliance, local health search",
      specialties: ["Medical content", "Local health SEO", "Compliance", "Patient resources"]
    },
    {
      icon: Home,
      name: "Real Estate",
      description: "Local property search, MLS optimization",
      specialties: ["Property listings", "Local area content", "MLS optimization", "Market reports"]
    }
  ];

  const seoTools = [
    {
      category: "Nghiên Cứu",
      tools: ["SEMrush Enterprise", "Ahrefs", "Screaming Frog"],
      color: "text-foreground"
    },
    {
      category: "Phân Tích",
      tools: ["Google Analytics 4", "Search Console", "Data Studio"],
      color: "text-foreground"
    },
    {
      category: "Kỹ Thuật",
      tools: ["PageSpeed Insights", "GTmetrix", "Lighthouse"],
      color: "text-foreground"
    },
    {
      category: "Giám Sát",
      tools: ["Theo dõi xếp hạng", "Giám sát SERP", "Hệ thống cảnh báo"],
      color: "text-foreground"
    },
    {
      category: "Báo Cáo",
      tools: ["Bảng điều khiển tùy chỉnh", "Báo cáo tự động", "Theo dõi ROI"],
      color: "text-foreground"
    }
  ];

  const packages = [
    {
      name: "LOCAL SEO",
      price: "5M",
      period: "/tháng",
      description: "Perfect cho local business và SME",
      features: [
        "Google My Business optimization",
        "10 local keywords",
        "Local citations building",
        "Review management",
        "Local content creation",
        "Monthly local ranking reports"
      ],
      guarantee: "Top 3 local results",
      popular: false
    },
    {
      name: "NATIONAL SEO",
      price: "12M",
      period: "/tháng",
      description: "Comprehensive SEO cho national market",
      features: [
        "25 target keywords",
        "Technical SEO optimization",
        "Content strategy & creation",
        "Link building campaign",
        "Competitor analysis",
        "Weekly performance reports"
      ],
      guarantee: "Top 3 national results",
      popular: true
    },
    {
      name: "COMPETITIVE SEO",
      price: "20M",
      period: "/tháng",
      description: "Advanced SEO cho high-competition markets",
      features: [
        "50+ competitive keywords",
        "Advanced technical optimization",
        "Premium content creation",
        "Authority link building",
        "Advanced competitor tracking",
        "Custom reporting dashboard"
      ],
      guarantee: "Top 3 competitive results",
      popular: false
    },
    {
      name: "ENTERPRISE SEO",
      price: "Custom",
      period: "",
      description: "Tailored solution cho large organizations",
      features: [
        "Unlimited keywords",
        "Multi-site SEO management",
        "Dedicated SEO team",
        "Custom development",
        "24/7 monitoring",
        "Executive reporting"
      ],
      guarantee: "Custom KPIs",
      popular: false
    }
  ];

  const resultsShowcase = [
    {
      client: "E-commerce Fashion",
      industry: "Retail",
      before: "Position 50+",
      after: "Position 2",
      traffic: "+750% organic traffic",
      revenue: "+400% revenue from SEO"
    },
    {
      client: "SaaS Platform",
      industry: "Technology",
      before: "500 monthly visitors",
      after: "25,000 monthly visitors",
      traffic: "+4900% traffic growth",
      revenue: "+300% qualified leads"
    },
    {
      client: "Local Restaurant Chain",
      industry: "Food & Beverage",
      before: "10 locations visible",
      after: "50 locations top 3",
      traffic: "+200% local traffic",
      revenue: "+150% foot traffic"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">SEO Boost</span>
                <br />
                Top 3 Google Hoặc <span className="text-primary">Hoàn Tiền 100%</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Cam kết results rõ ràng: Top 3 trong 6 tháng cho từ khóa chính, hoặc hoàn lại 100% chi phí. 
                300+ websites đã tăng trưởng 500% organic traffic.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="shadow-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Nhận SEO Audit Miễn Phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="tech-border"
                  onClick={() => window.location.href = '/contact'}
                >
                  Xem Results Showcase
                </Button>
              </div>

              <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border-2 border-primary">
                <Shield className="h-6 w-6 mr-3 text-primary" />
                <span className="font-bold text-primary">Top 3 hoặc hoàn tiền 100%</span>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Kết Quả Tìm Kiếm Trực Tiếp</h3>
                  <div className="text-sm text-muted-foreground">Website khách hàng đang xếp hạng</div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { site: "client-ecommerce.com", position: "#1", traffic: "↗ 500%" },
                    { site: "saas-platform.vn", position: "#2", traffic: "↗ 750%" },
                    { site: "local-business.com", position: "#3", traffic: "↗ 300%" }
                  ].map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div>
                        <div className="font-medium text-sm">{result.site}</div>
                        <div className="text-xs text-muted-foreground">Kết Quả Tìm Kiếm Google</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">{result.position}</div>
                        <div className="text-xs text-foreground">{result.traffic}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Guarantee Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cam Kết Kết Quả Rõ Ràng - <span className="text-primary">Không Lời Hứa Suông</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {guaranteeDetails.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 text-primary">
                    <IconComponent className="h-10 w-10 mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{detail.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{detail.description}</p>
                  <div className="text-xs font-medium px-3 py-1 rounded bg-primary/10 text-primary">
                    {detail.guarantee}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vietnam SEO Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Chuyên Gia SEO <span style={{ color: '#2563eb' }}>#1 Thị Trường Việt Nam</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vietnamExpertise.map((expertise, index) => {
              const IconComponent = expertise.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div style={{ color: '#2563eb' }}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{expertise.title}</h3>
                      <p className="text-muted-foreground text-sm">{expertise.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fafafa' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            SEO Toàn Diện - <span style={{ color: '#16a34a' }}>Technical</span> đến <span style={{ color: '#2563eb' }}>Content</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="mb-4" style={{ color: '#16a34a' }}>
                      <IconComponent className="h-10 w-10 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 text-left">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical SEO Deep Dive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical SEO - <span style={{ color: '#f59e0b' }}>Foundation</span> Vững Chắc Cho Rankings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalChecklist.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div style={{ color: '#f59e0b' }}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <div className="text-xs font-medium px-3 py-1 rounded" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        {item.metric}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Link Building Strategy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fafafa' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            White-Hat Link Building - <span style={{ color: '#2563eb' }}>Authority Thật</span>, Không Spam
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {linkBuildingStrategy.map((strategy, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: '#2563eb' }}>{strategy.title}</h3>
                <p className="text-muted-foreground mb-4">{strategy.description}</p>
                <div className="text-sm font-medium px-3 py-2 rounded" style={{ backgroundColor: '#dbeafe', color: '#2563eb' }}>
                  {strategy.metric}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Audit Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            SEO Audit Chuyên Sâu <span style={{ color: '#16a34a' }}>150+ Điểm Kiểm Tra</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="mb-4" style={{ color: '#16a34a' }}>
                      <IconComponent className="h-10 w-10 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="text-sm font-medium px-3 py-2 rounded" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>
                      {category.checks}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry-Specific SEO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fafafa' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            SEO Strategies <span style={{ color: '#2563eb' }}>Theo Từng Ngành</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div style={{ color: '#2563eb' }}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                      <p className="text-muted-foreground text-sm">{industry.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {industry.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Tools & Technology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional <span style={{ color: '#f59e0b' }}>SEO Tool Stack</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {seoTools.map((toolCategory, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: toolCategory.color }}>{toolCategory.category}</h3>
                <div className="space-y-2">
                  {toolCategory.tools.map((tool, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground p-2 rounded" style={{ backgroundColor: '#f8fafc' }}>
                      {tool}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fafafa' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            SEO Packages Với <span style={{ color: '#16a34a' }}>Guarantee</span> Rõ Ràng
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`p-6 relative ${pkg.popular ? 'border-green-500 shadow-lg' : ''} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#16a34a' }}>
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#2563eb' }}>{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-2">
                    {pkg.price}
                    <span className="text-lg font-normal text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{pkg.description}</p>
                  <div className="text-xs font-medium px-3 py-1 rounded" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>
                    {pkg.guarantee}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  style={pkg.popular ? { backgroundColor: '#16a34a', color: 'white' } : { borderColor: '#16a34a', color: '#16a34a' }}
                  onClick={() => window.location.href = '/contact'}
                >
                  {pkg.price === "Custom" ? "Contact Sales" : "Chọn Package"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kết Quả Thực Tế Từ <span style={{ color: '#2563eb' }}>300+ Dự Án</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resultsShowcase.map((result, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold mb-1">{result.client}</h3>
                  <div className="text-sm text-muted-foreground">{result.industry}</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Trước:</span>
                    <span className="text-sm text-red-600">{result.before}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Sau:</span>
                    <span className="text-sm text-primary">{result.after}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="text-center">
                      <div className="text-sm font-bold text-foreground">{result.traffic}</div>
                      <div className="text-xs text-muted-foreground">{result.revenue}</div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Tải Nghiên Cứu Điển Hình
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Replace Audit Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Sẵn Sàng Lên <span className="text-primary">Top 3 Google</span> Trong 6 Tháng?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Đặt lịch tư vấn miễn phí để khám phá cách SEO có thể đưa website của bạn lên vị trí top.
            Nhận kiểm toán SEO miễn phí trị giá 10 triệu đồng.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Phân tích kỹ thuật toàn diện 50+ yếu tố</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Phân tích khoảng trống từ khóa với đối thủ</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Kế hoạch hành động ưu tiên 90 ngày</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Đảm bảo top 3 hoặc hoàn tiền 100%</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="shadow-glow"
            onClick={() => window.location.href = '/contact'}
          >
            Nhận Kiểm Toán SEO Miễn Phí
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoService;