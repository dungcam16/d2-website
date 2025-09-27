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
    { metric: "+400%", label: "Tăng Trưởng Lưu Lượng Tự Nhiên", description: "trong 6 tháng", color: "text-foreground" },
    { metric: "+250%", label: "Tạo Khách Hàng Tiềm Năng", description: "khách hàng tiềm năng chất lượng", color: "text-foreground" },
    { metric: "85%", label: "Tỷ Lệ Tương Tác", description: "thời gian trên trang", color: "text-foreground" },
    { metric: "8.5%", label: "Tỷ Lệ Chuyển Đổi", description: "nội dung thành khách hàng tiềm năng", color: "text-foreground" },
    { metric: "65%", label: "Nhận Biết Thương Hiệu", description: "chia sẻ tiếng nói", color: "text-foreground" },
    { metric: "420%", label: "Gán ROI", description: "doanh thu theo dõi", color: "text-foreground" }
  ];

  const industries = [
    {
      name: "SaaS/Công Nghệ",
      description: "Nội dung sản phẩm, blog kỹ thuật, tài nguyên phát triển",
      specialties: ["Tài Liệu API", "Tour Sản Phẩm", "Báo Cáo Kỹ Thuật", "Hướng Dẫn Phát Triển"]
    },
    {
      name: "Thương Mại Điện Tử",
      description: "Mô tả sản phẩm, hướng dẫn mua hàng, đánh giá",
      specialties: ["Mô Tả Sản Phẩm", "Hướng Dẫn Mua Hàng", "Đánh Giá Khách Hàng", "Trang Danh Mục"]
    },
    {
      name: "Dịch Vụ B2B",
      description: "Tư duy lãnh đạo, nghiên cứu điển hình, báo cáo trắng",
      specialties: ["Báo Cáo Ngành", "Nghiên Cứu Điển Hình", "Hướng Dẫn Giải Pháp", "Nội Dung Lãnh Đạo"]
    },
    {
      name: "Y Tế",
      description: "Sẵn sàng tuân thủ, nội dung giáo dục",
      specialties: ["Nội Dung Y Khoa", "Giáo Dục Bệnh Nhân", "Tài Liệu Tuân Thủ", "Hướng Dẫn Sức Khỏe"]
    },
    {
      name: "Tài Chính",
      description: "Tuân thủ quy định, xây dựng lòng tin", 
      specialties: ["Lập Kế Hoạch Tài Chính", "Hướng Dẫn Đầu Tư", "Nội Dung Quy Định", "Phân Tích Thị Trường"]
    },
    {
      name: "Giáo Dục",
      description: "Nội dung khóa học, tài nguyên sinh viên",
      specialties: ["Tài Liệu Khóa Học", "Hướng Dẫn Sinh Viên", "Video Giáo Dục", "Tài Nguyên Học Tập"]
    }
  ];

  const workflow = [
    { step: 1, title: "Chiến Lược & Lập Kế Hoạch Nội Dung", duration: "Tuần 1", description: "Phân tích đối thủ, nghiên cứu khán giả, trụ cột nội dung" },
    { step: 2, title: "Nghiên Cứu Từ Khóa & Ý Tưởng Chủ Đề", duration: "Tuần 1", description: "Phân tích ý định tìm kiếm, xác định khoảng trống nội dung" },
    { step: 3, title: "Tạo Bản Tóm Tắt Nội Dung", duration: "Tuần 2", description: "Đề cương chi tiết, yêu cầu SEO, hướng dẫn thương hiệu" },
    { step: 4, title: "Viết & Tạo", duration: "Tuần 2-3", description: "Sản xuất nội dung, thiết kế hình ảnh, tích hợp đa phương tiện" },
    { step: 5, title: "Tối Ưu SEO", duration: "Tuần 3", description: "SEO kỹ thuật, tối ưu meta, đánh dấu schema" },
    { step: 6, title: "Đánh Giá & Phê Duyệt", duration: "Tuần 4", description: "Đảm bảo chất lượng, tuân thủ thương hiệu, phê duyệt bên liên quan" },
    { step: 7, title: "Xuất Bản & Khuyến Mãi", duration: "Tuần 4", description: "Phân phối đa kênh, khuếch đại mạng xã hội" },
    { step: 8, title: "Theo Dõi Hiệu Suất", duration: "Liên tục", description: "Giám sát phân tích, tối ưu hiệu suất" }
  ];

  const tools = [
    { category: "Nghiên Cứu", tools: ["SEMrush", "Ahrefs", "Google Analytics"], color: "text-foreground" },
    { category: "Lập Kế Hoạch", tools: ["ContentKing", "CoSchedule", "Asana"], color: "text-foreground" },
    { category: "Tạo", tools: ["Grammarly", "Hemingway", "Canva Pro"], color: "text-foreground" },
    { category: "SEO", tools: ["Yoast", "Schema markup", "Core Web Vitals"], color: "text-foreground" },
    { category: "Phân Tích", tools: ["Google Analytics 4", "Search Console", "Hotjar"], color: "text-foreground" },
    { category: "Tự Động", tools: ["Buffer", "Hootsuite", "Zapier"], color: "text-foreground" }
  ];

  const caseStudies = [
    {
      title: "Startup SaaS: Từ 0 Đến 50K Lưu Lượng Hàng Tháng",
      duration: "8 tháng",
      results: ["50K khách truy cập tự nhiên hàng tháng", "Tăng 300% đăng ký dùng thử", "85% tỷ lệ khách hàng tiềm năng chất lượng"],
      strategy: "Nội dung kỹ thuật, tối ưu SEO, tài nguyên tập trung nhà phát triển"
    },
    {
      title: "Thương Mại Điện Tử: 300% Chuyển Đổi Trang Sản Phẩm", 
      duration: "6 tháng",
      results: ["Cải thiện 300% chuyển đổi", "Tăng 250% giá trị đơn hàng trung bình", "Giảm 40% tỷ lệ thoát"],
      strategy: "Tối ưu nội dung sản phẩm, hướng dẫn mua hàng, đánh giá khách hàng"
    },
    {
      title: "Đại Lý B2B: Tăng 5X Tạo Khách Hàng Tiềm Năng",
      duration: "12 tháng", 
      results: ["Tăng 500% tạo khách hàng tiềm năng", "Định vị tư duy lãnh đạo", "3x cơ hội phát biểu"],
      strategy: "Nội dung tư duy lãnh đạo, báo cáo ngành, định vị điều hành"
    }
  ];

  const packages = [
    {
      name: "KHỞI ĐẦU",
      price: "8M",
      period: "/tháng",
      description: "Hoàn hảo cho doanh nghiệp vừa và nhỏ bắt đầu hành trình nội dung",
      features: [
        "4 bài viết blog tối ưu SEO",
        "Chiến lược nội dung cơ bản",
        "Báo cáo hiệu suất hàng tháng", 
        "Thích ứng mạng xã hội",
        "Hỗ trợ qua email"
      ],
      popular: false
    },
    {
      name: "TĂNG TRƯỞNG", 
      price: "15M",
      period: "/tháng",
      description: "Giải pháp toàn diện cho doanh nghiệp đang phát triển",
      features: [
        "8 bài viết blog + SEO nâng cao",
        "Lịch nội dung mạng xã hội",
        "Mẫu chuỗi email",
        "Đánh giá hiệu suất hai tuần một lần",
        "Viết kịch bản video",
        "Hỗ trợ ưu tiên"
      ],
      popular: true
    },
    {
      name: "MỞ RỘNG",
      price: "25M", 
      period: "/tháng",
      description: "Vận hành nội dung quy mô lớn",
      features: [
        "12 bài viết dài",
        "Kịch bản nội dung video",
        "Chuỗi tự động email", 
        "Bản sao trang đích",
        "Cuộc gọi chiến lược hàng tuần",
        "Kiểm tra A/B & tối ưu"
      ],
      popular: false
    },
    {
      name: "DOANH NGHIỆP",
      price: "Tùy Chỉnh",
      period: "",
      description: "Đội ngũ nội dung chuyên dụng cho tổ chức lớn",
      features: [
        "Sản xuất nội dung không giới hạn",
        "Quản lý nội dung chuyên dụng",
        "Hỗ trợ đa ngôn ngữ",
        "Loại nội dung tùy chỉnh",
        "Bảng điều khiển hiệu suất thời gian thực",
        "Hỗ trợ 24/7"
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Dịch Vụ Nội Dung <span className="text-primary">Toàn Diện</span>
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
                    <div className="text-xs font-medium p-2 rounded bg-muted text-foreground">
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
                <h3 className="text-xl font-bold mb-3 text-foreground">{industry.name}</h3>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                
                <div className="space-y-2">
                  {industry.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0 text-primary" />
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
                  <div className="text-sm font-medium mb-2 text-primary">{study.duration}</div>
                  <h3 className="text-lg font-bold mb-3">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{study.strategy}</p>
                </div>
                
                <div className="space-y-3">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
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
                       <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
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