import React, { useState } from 'react';
import { 
  ArrowRight, BarChart3, Target, Users, CheckCircle, Star, TrendingUp, FileText, 
  Search, Lightbulb, Calculator, Globe, Edit, Video, Mail, Presentation,
  Clock, Award, Zap, Brain, Monitor, Database, LineChart, AlertCircle,
  PlayCircle, Download, PieChart, Activity, Layers, Workflow
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContentService = () => {
  const [auditForm, setAuditForm] = useState({
    website: '',
    industry: '',
    currentTraffic: '',
    goals: ''
  });

  const [calculatorInputs, setCalculatorInputs] = useState({
    monthlyTraffic: 10000,
    conversionRate: 2,
    averageOrderValue: 100
  });

  const calculateContentROI = () => {
    const currentRevenue = calculatorInputs.monthlyTraffic * (calculatorInputs.conversionRate / 100) * calculatorInputs.averageOrderValue;
    const projectedTraffic = calculatorInputs.monthlyTraffic * 4; // 400% increase
    const projectedConversion = calculatorInputs.conversionRate * 2.5; // 250% increase
    const projectedRevenue = projectedTraffic * (projectedConversion / 100) * calculatorInputs.averageOrderValue;
    const monthlyGain = projectedRevenue - currentRevenue;
    
    return {
      currentRevenue: currentRevenue.toLocaleString(),
      projectedRevenue: projectedRevenue.toLocaleString(),
      monthlyGain: monthlyGain.toLocaleString(),
      annualGain: (monthlyGain * 12).toLocaleString()
    };
  };

  const contentProblems = [
    {
      icon: AlertCircle,
      title: "Viết nội dung theo cảm tính",
      description: "Không có dữ liệu để hỗ trợ quyết định nội dung"
    },
    {
      icon: BarChart3,
      title: "Không theo dõi chỉ số hiệu suất",
      description: "Không biết nội dung nào hiệu quả, nội dung nào không"
    },
    {
      icon: Search,
      title: "SEO và trải nghiệm người dùng xung đột",
      description: "Nội dung tối ưu cho công cụ tìm kiếm nhưng không thân thiện với người dùng"
    },
    {
      icon: Target,
      title: "Nội dung không phù hợp với phễu bán hàng",
      description: "Thiếu nội dung cho từng giai đoạn của hành trình khách hàng"
    },
    {
      icon: Layers,
      title: "Thiếu chiến lược tái sử dụng",
      description: "Lãng phí tài nguyên vì không tái sử dụng nội dung hiệu quả"
    },
    {
      icon: Calculator,
      title: "ROI không đo được",
      description: "Không gán doanh thu trở lại cho nỗ lực nội dung"
    }
  ];

  const methodology = [
    {
      icon: Database,
      title: "Nghiên Cứu & Phân Tích",
      description: "Nghiên cứu từ khóa, phân tích đối thủ, hiểu rõ khán giả",
      details: ["Phân tích khoảng trống nội dung đối thủ", "Lập bản đồ ý định tìm kiếm", "Phát triển persona khán giả", "Xác định cơ hội nội dung"]
    },
    {
      icon: Brain,
      title: "Lập Kế Hoạch Chiến Lược", 
      description: "Lịch nội dung, lập bản đồ phễu, cụm chủ đề",
      details: ["Phát triển trụ cột nội dung", "Lập kế hoạch lịch biên tập", "Lập bản đồ giai đoạn phễu", "Kiến trúc cụm chủ đề"]
    },
    {
      icon: Edit,
      title: "Tạo Nội Dung",
      description: "Viết tối ưu SEO, tập trung chuyển đổi",
      details: ["Viết bản sao tối ưu SEO", "Tạo nội dung hình ảnh", "Thích ứng đa định dạng", "Tính nhất quán giọng điệu thương hiệu"]
    },
    {
      icon: LineChart,
      title: "Tối Ưu Hiệu Suất",
      description: "Kiểm tra A/B, cải tiến liên tục",
      details: ["Kiểm tra A/B tiêu đề", "Phân tích hiệu suất nội dung", "Tối ưu liên tục", "Theo dõi gán ROI"]
    }
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: "Bài Viết Blog",
      description: "Tối ưu SEO, 2000+ từ, tư duy lãnh đạo",
      metrics: "Trung bình tăng 300% lưu lượng"
    },
    {
      icon: Award,
      title: "Nghiên Cứu Điển Hình", 
      description: "Kể chuyện tập trung kết quả, câu chuyện thành công khách hàng",
      metrics: "85% tỷ lệ chất lượng khách hàng tiềm năng"
    },
    {
      icon: Presentation,
      title: "Báo Cáo Trắng",
      description: "Nghiên cứu sâu, nam châm khách hàng tiềm năng, xây dựng uy tín", 
      metrics: "40% chuyển đổi đăng ký email"
    },
    {
      icon: Target,
      title: "Trang Đích",
      description: "Bản sao tối ưu chuyển đổi, tiêu đề kiểm tra A/B",
      metrics: "Cải thiện 250% tỷ lệ chuyển đổi"
    },
    {
      icon: Globe,
      title: "Nội Dung Mạng Xã Hội",
      description: "Đặc thù nền tảng, thúc đẩy tương tác",
      metrics: "Tăng 400% tương tác"
    },
    {
      icon: Mail,
      title: "Chuỗi Email",
      description: "Chiến dịch nuôi dưỡng, sẵn sàng tự động",
      metrics: "Trung bình 60% tỷ lệ mở"
    },
    {
      icon: Video,
      title: "Kịch Bản Video",
      description: "YouTube, webinar, demo sản phẩm",
      metrics: "80% tỷ lệ hoàn thành"
    },
    {
      icon: Presentation,
      title: "Tài Liệu Bán Hàng",
      description: "Thuyết trình, tài liệu một trang, đề xuất",
      metrics: "Cải thiện 45% tỷ lệ đóng"
    }
  ];

  const performanceMetrics = [
    { metric: "+400%", label: "Organic Traffic Growth", description: "trong 6 tháng", color: "#7c3aed" },
    { metric: "+250%", label: "Lead Generation", description: "qualified leads", color: "#059669" },
    { metric: "85%", label: "Engagement Rate", description: "time on page", color: "#dc2626" },
    { metric: "8.5%", label: "Conversion Rate", description: "content to lead", color: "#7c3aed" },
    { metric: "65%", label: "Brand Awareness", description: "share of voice", color: "#059669" },
    { metric: "420%", label: "ROI Attribution", description: "revenue traced", color: "#dc2626" }
  ];

  const industries = [
    {
      name: "SaaS/Tech",
      description: "Product content, technical blogs, developer resources",
      specialties: ["API Documentation", "Product Tours", "Technical Whitepapers", "Developer Guides"]
    },
    {
      name: "E-commerce",
      description: "Product descriptions, buying guides, reviews",
      specialties: ["Product Descriptions", "Buying Guides", "Customer Reviews", "Category Pages"]
    },
    {
      name: "B2B Services",
      description: "Thought leadership, case studies, white papers",
      specialties: ["Industry Reports", "Case Studies", "Solution Guides", "Executive Content"]
    },
    {
      name: "Healthcare",
      description: "Compliance-ready, educational content",
      specialties: ["Medical Content", "Patient Education", "Compliance Documentation", "Health Guides"]
    },
    {
      name: "Finance",
      description: "Regulatory-compliant, trust-building content", 
      specialties: ["Financial Planning", "Investment Guides", "Regulatory Content", "Market Analysis"]
    },
    {
      name: "Education",
      description: "Course content, student resources",
      specialties: ["Course Materials", "Student Guides", "Educational Videos", "Learning Resources"]
    }
  ];

  const workflow = [
    { step: 1, title: "Content Strategy & Planning", duration: "Week 1", description: "Competitor analysis, audience research, content pillars" },
    { step: 2, title: "Keyword Research & Topic Ideation", duration: "Week 1", description: "Search intent analysis, content gap identification" },
    { step: 3, title: "Content Brief Creation", duration: "Week 2", description: "Detailed outlines, SEO requirements, brand guidelines" },
    { step: 4, title: "Writing & Creation", duration: "Week 2-3", description: "Content production, visual design, multimedia integration" },
    { step: 5, title: "SEO Optimization", duration: "Week 3", description: "Technical SEO, meta optimization, schema markup" },
    { step: 6, title: "Review & Approval", duration: "Week 4", description: "Quality assurance, brand compliance, stakeholder approval" },
    { step: 7, title: "Publishing & Promotion", duration: "Week 4", description: "Multi-channel distribution, social amplification" },
    { step: 8, title: "Performance Tracking", duration: "Ongoing", description: "Analytics monitoring, performance optimization" }
  ];

  const tools = [
    { category: "Research", tools: ["SEMrush", "Ahrefs", "Google Analytics"], color: "#7c3aed" },
    { category: "Planning", tools: ["ContentKing", "CoSchedule", "Asana"], color: "#059669" },
    { category: "Creation", tools: ["Grammarly", "Hemingway", "Canva Pro"], color: "#dc2626" },
    { category: "SEO", tools: ["Yoast", "Schema markup", "Core Web Vitals"], color: "#7c3aed" },
    { category: "Analytics", tools: ["Google Analytics 4", "Search Console", "Hotjar"], color: "#059669" },
    { category: "Automation", tools: ["Buffer", "Hootsuite", "Zapier"], color: "#dc2626" }
  ];

  const caseStudies = [
    {
      title: "SaaS Startup: 0 to 50K Monthly Traffic",
      duration: "8 tháng",
      results: ["50K organic monthly visitors", "300% increase in trial signups", "85% qualified lead rate"],
      strategy: "Technical content, SEO optimization, developer-focused resources"
    },
    {
      title: "E-commerce: 300% Product Page Conversions", 
      duration: "6 tháng",
      results: ["300% conversion improvement", "250% increase in average order value", "40% reduction in bounce rate"],
      strategy: "Product content optimization, buying guides, customer reviews"
    },
    {
      title: "B2B Agency: 5X Lead Generation",
      duration: "12 tháng", 
      results: ["500% lead generation increase", "Thought leader positioning", "3x speaking opportunities"],
      strategy: "Thought leadership content, industry reports, executive positioning"
    }
  ];

  const packages = [
    {
      name: "STARTER",
      price: "8M",
      period: "/tháng",
      description: "Perfect cho SME bắt đầu content journey",
      features: [
        "4 blog posts SEO-optimized",
        "Basic content strategy",
        "Monthly performance report", 
        "Social media adaptation",
        "Email support"
      ],
      popular: false
    },
    {
      name: "GROWTH", 
      price: "15M",
      period: "/tháng",
      description: "Comprehensive solution cho growing businesses",
      features: [
        "8 blog posts + advanced SEO",
        "Social content calendar",
        "Email sequence templates",
        "Bi-weekly performance reviews",
        "Video script writing",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "SCALE",
      price: "25M", 
      period: "/tháng",
      description: "Full-scale content operations",
      features: [
        "12 long-form articles",
        "Video content scripts",
        "Email automation sequences", 
        "Landing page copy",
        "Weekly strategy calls",
        "A/B testing & optimization"
      ],
      popular: false
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: "",
      description: "Dedicated content team cho large organizations",
      features: [
        "Unlimited content production",
        "Dedicated content manager",
        "Multi-language support",
        "Custom content types",
        "Real-time performance dashboard",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const roiResults = calculateContentROI();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                <span className="text-primary">Hiệu Suất Nội Dung</span>
                <br />
                Nội Dung Không Chỉ Đẹp, Còn Phải <span className="text-primary">Bán</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Chiến lược nội dung dựa trên dữ liệu giúp 200+ thương hiệu tăng 400% lưu lượng tự nhiên, 250% tạo khách hàng tiềm năng. 
                Mỗi nội dung đều được đo lường và tối ưu hóa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="shadow-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Nhận Kiểm Toán Nội Dung Miễn Phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="tech-border"
                  onClick={() => window.location.href = '/contact'}
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Xem Demo Bảng Điều Khiển
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">400%</div>
                  <div className="text-sm text-muted-foreground">Tăng trưởng lưu lượng</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">250%</div>
                  <div className="text-sm text-muted-foreground">Tạo khách hàng tiềm năng</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Thương hiệu phục vụ</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="p-6 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-2">Bảng điều khiển hiệu suất trực tiếp</h3>
                    <div className="text-sm text-muted-foreground">Chỉ số khách hàng thực tế</div>
                  </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 rounded-lg bg-card">
                      <div className="text-lg font-bold text-primary">127%</div>
                      <div className="text-xs text-muted-foreground">Tăng trưởng lưu lượng</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-card">
                      <div className="text-lg font-bold text-primary">85%</div>
                      <div className="text-xs text-muted-foreground">Tỷ lệ chuyển đổi</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-card">
                      <div className="text-lg font-bold text-primary">340%</div>
                      <div className="text-xs text-muted-foreground">Chất lượng khách hàng tiềm năng</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-card">
                      <div className="text-lg font-bold text-primary">420%</div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                </div>
                
                <div className="h-32 rounded-lg bg-muted/50">
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    📈 Interactive Analytics Dashboard
                    <br />
                    Real-time performance tracking
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Problems Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại Sao <span className="text-primary">Content Của Bạn</span> Không Chuyển Đổi?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentProblems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                      <p className="text-muted-foreground text-sm">{problem.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Phương pháp: <span className="text-primary">Chiến lược nội dung dựa trên dữ liệu</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-4 text-primary">
                    <IconComponent className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  
                  <ul className="text-left text-sm space-y-1">
                    {method.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0 text-accent" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            <span className="text-accent">Full-Stack</span> Content Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="mb-4 text-primary">
                      <IconComponent className="h-8 w-8 mx-auto" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                    <div className="text-xs font-medium p-2 rounded bg-accent/10 text-accent">
                      {type.metrics}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            <span className="text-primary">Metrics</span> We Track & Optimize
          </h2>
          
          <Card className="p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performanceMetrics.map((metric, index) => (
                <div 
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold mb-2 text-primary">
                    {metric.metric}
                  </div>
                  <div className="text-lg font-semibold mb-1 text-foreground">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center">
            <Card className="p-6 max-w-lg mx-auto">
              <h3 className="text-lg font-bold mb-4">Benchmark Data</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <div>📊 Average client sees 400% traffic increase in 6 months</div>
                <div>🎯 85% of content pieces hit target KPIs</div>
                <div>💰 Average ROI: 420% in first year</div>
                <div>⏰ 90% of deadlines met or exceeded</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            <Calculator className="inline-block mr-3 h-8 w-8 text-primary" />
            Content Performance Calculator
          </h2>
          
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-foreground">Current Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <Label>Monthly Website Traffic</Label>
                    <Input
                      type="number"
                      value={calculatorInputs.monthlyTraffic}
                      onChange={(e) => setCalculatorInputs({...calculatorInputs, monthlyTraffic: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <Label>Conversion Rate (%)</Label>
                    <Input
                      type="number"
                      value={calculatorInputs.conversionRate}
                      onChange={(e) => setCalculatorInputs({...calculatorInputs, conversionRate: parseFloat(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <Label>Average Order Value ($)</Label>
                    <Input
                      type="number"
                      value={calculatorInputs.averageOrderValue}
                      onChange={(e) => setCalculatorInputs({...calculatorInputs, averageOrderValue: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 text-foreground">Projected Results</h3>
                <div className="space-y-6">
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#f0f9ff' }}>
                    <div className="text-2xl font-bold" style={{ color: '#7c3aed' }}>${roiResults.currentRevenue}</div>
                    <div className="text-sm text-muted-foreground">Current Monthly Revenue</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#f0fdf4' }}>
                    <div className="text-2xl font-bold" style={{ color: '#059669' }}>${roiResults.projectedRevenue}</div>
                    <div className="text-sm text-muted-foreground">Projected Monthly Revenue</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#fef2f2' }}>
                    <div className="text-2xl font-bold" style={{ color: '#dc2626' }}>${roiResults.annualGain}</div>
                    <div className="text-sm text-muted-foreground">Annual Revenue Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Chuyên Môn Sâu <span className="text-primary">Theo Ngành</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#7c3aed' }}>{industry.name}</h3>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                
                <div className="space-y-2">
                  {industry.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" style={{ color: '#059669' }} />
                      <span>{specialty}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Câu Chuyện Thành Công: <span className="text-primary">Con Số Không Nói Dối</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="text-sm font-medium mb-2" style={{ color: '#7c3aed' }}>{study.duration}</div>
                  <h3 className="text-lg font-bold mb-3">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{study.strategy}</p>
                </div>
                
                <div className="space-y-3">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#059669' }} />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6 tech-border"
                  onClick={() => window.location.href = '/contact'}
                >
                  Xem Nghiên Cứu Điển Hình Đầy Đủ
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Gói Dịch Vụ <span className="text-primary">Content Performance</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`p-6 relative ${pkg.popular ? 'border-purple-500 shadow-lg' : ''} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground">
                      Phổ Biến Nhất
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-2 text-foreground">
                    {pkg.price}
                    <span className="text-lg font-normal text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                     <li key={idx} className="flex items-center text-sm">
                       <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-accent" />
                       <span className="text-muted-foreground">{feature}</span>
                     </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => window.location.href = '/contact'}
                >
                  {pkg.price === "Custom" ? "Liên Hệ Bán Hàng" : "Bắt Đầu Ngay"}
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
            Sẵn Sàng Tăng <span className="text-primary">400% Lưu Lượng</span> Với Nội Dung Chất Lượng?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Đặt lịch tư vấn miễn phí để khám phá cách chiến lược nội dung có thể biến đổi doanh nghiệp của bạn.
            Nhận kiểm toán nội dung miễn phí trị giá 5 triệu đồng.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Kiểm toán SEO và nội dung miễn phí</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Kế hoạch hành động 90 ngày chi tiết</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Tư vấn chiến lược từ chuyên gia</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="shadow-glow"
            onClick={() => window.location.href = '/contact'}
          >
            Đặt Lịch Tư Vấn Miễn Phí
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentService;