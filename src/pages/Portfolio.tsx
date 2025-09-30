import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Workflow,
  Zap,
  Target,
  TrendingUp,
  CheckCircle2,
  Users,
  Clock,
  DollarSign,
  Youtube,
  ShoppingCart,
  Building2,
  Code,
  Database,
  Cloud,
  MessageSquare,
  BarChart3,
  Sparkles,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Portfolio = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "D2 Group - Agency Automation Marketing",
    description: "Chuyên gia tự động hóa quy trình kinh doanh với n8n, giúp doanh nghiệp tiết kiệm 90% thời gian xử lý",
    url: "https://d2group.co/portfolio",
  };

  const stats = [
    { icon: CheckCircle2, value: "50+", label: "Dự án thành công" },
    { icon: Workflow, value: "200+", label: "Workflow triển khai" },
    { icon: Clock, value: "90%", label: "Giảm thời gian xử lý" },
    { icon: Users, value: "95%", label: "Khách hàng hài lòng" },
  ];

  const services = [
    {
      icon: Workflow,
      title: "N8N Workflow Automation",
      description: "Thiết kế và triển khai quy trình tự động hóa phức tạp",
      features: [
        "Tự động hóa quy trình marketing & sales",
        "Tích hợp đa nền tảng (CRM, Email, Social Media)",
        "Xử lý dữ liệu và báo cáo tự động",
        "Giám sát và tối ưu hóa liên tục",
      ],
    },
    {
      icon: Code,
      title: "API Integration Services",
      description: "Kết nối hệ thống một cách liền mạch",
      features: [
        "RESTful API development",
        "Third-party API integration",
        "Webhook configuration",
        "Real-time data synchronization",
      ],
    },
    {
      icon: BarChart3,
      title: "Business Process Consulting",
      description: "Tư vấn tối ưu hóa quy trình kinh doanh",
      features: [
        "Phân tích quy trình hiện tại",
        "Thiết kế blueprint automation",
        "Change management support",
        "ROI measurement & tracking",
      ],
    },
    {
      icon: Sparkles,
      title: "Custom Automation Solutions",
      description: "Giải pháp tự động hóa theo yêu cầu riêng",
      features: [
        "YouTube content automation",
        "E-commerce workflow optimization",
        "Social media management automation",
        "Lead generation & nurturing systems",
      ],
    },
  ];

  const caseStudies = [
    {
      icon: Youtube,
      title: "YouTube Content Automation System",
      client: "Kênh YouTube với 100K+ subscribers",
      challenge: [
        "Upload thủ công 10+ video/ngày tốn 4 giờ",
        "Lỗi metadata và thiếu consistency trong branding",
        "Không có hệ thống backup và monitoring",
      ],
      solution: [
        "Thiết kế workflow n8n tự động upload video",
        "Tích hợp API YouTube, Google Sheets, và Suno AI",
        "Xử lý audio với FFmpeg cho crossfading",
        "Tạo thumbnail tự động với ImageMagick",
      ],
      results: [
        { label: "Giảm thời gian xử lý", value: "95%" },
        { label: "Zero errors trong", value: "6 tháng" },
        { label: "Tiết kiệm chi phí", value: "$2,000/tháng" },
        { label: "Tăng productivity", value: "3x" },
      ],
      tech: "n8n, YouTube API v3, FFmpeg, Google Cloud APIs, Docker",
    },
    {
      icon: Building2,
      title: "CRM Lead Management Automation",
      client: "Công ty bất động sản 50+ nhân viên",
      challenge: [
        "Lead data scattered across multiple platforms",
        "Manual lead scoring và assignment",
        "Chậm trễ trong follow-up customers",
      ],
      solution: [
        "Centralized lead management với n8n",
        "Tự động lead scoring dựa trên behavior",
        "Smart lead assignment algorithm",
        "Multi-channel follow-up automation",
      ],
      results: [
        { label: "Tăng conversion rate", value: "40%" },
        { label: "Giảm thời gian xử lý lead", value: "75%" },
        { label: "Accuracy trong lead scoring", value: "90%" },
        { label: "Tăng revenue", value: "$15,000/tháng" },
      ],
      tech: "n8n, HubSpot API, Zapier, Google Analytics, Slack",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Inventory Automation",
      client: "Online store với 1000+ sản phẩm",
      challenge: [
        "Manual inventory tracking",
        "Stockout frequency cao",
        "Inefficient supplier communication",
      ],
      solution: [
        "Real-time inventory monitoring",
        "Automated reorder workflows",
        "Supplier notification system",
        "Multi-channel stock synchronization",
      ],
      results: [
        { label: "Giảm stockouts", value: "90%" },
        { label: "Giảm holding costs", value: "30%" },
        { label: "Accuracy trong stock levels", value: "100%" },
        { label: "Monitoring & alerts", value: "24/7" },
      ],
      tech: "n8n, WooCommerce API, PostgreSQL, Telegram Bot",
    },
  ];

  const techStack = [
    {
      category: "Core Technologies",
      items: [
        "n8n Platform: Expert level (2+ years, 200+ workflows)",
        "JavaScript/Node.js: Advanced scripting & custom nodes",
        "Python: Data processing & API development",
        "Docker: Containerization & deployment",
        "Git/GitHub: Version control & collaboration",
      ],
    },
    {
      category: "Integration Expertise",
      items: [
        "APIs: RESTful, GraphQL, Webhook handling",
        "Databases: PostgreSQL, MySQL, MongoDB, NocoDB",
        "Cloud Platforms: AWS, Google Cloud, Digital Ocean",
        "Messaging: Telegram, Slack, Discord, Email systems",
        "Media Processing: FFmpeg, ImageMagick, Video/Audio APIs",
      ],
    },
    {
      category: "Business Platforms",
      items: [
        "CRM Systems: HubSpot, Pipedrive, Salesforce",
        "E-commerce: WooCommerce, Shopify, BigCommerce",
        "Social Media: YouTube, Facebook, Instagram, TikTok",
        "Marketing Tools: Google Analytics, Facebook Ads, Email platforms",
        "Communication: Zalo OA, WhatsApp Business, ChatGPT",
      ],
    },
  ];

  const pricing = [
    {
      name: "Startup",
      price: "$800 - $1,500",
      period: "/tháng",
      features: ["Basic automation", "Support cơ bản", "2-3 workflows", "Email support"],
      highlight: false,
    },
    {
      name: "Growth",
      price: "$1,500 - $3,500",
      period: "/tháng",
      features: ["Advanced workflows", "Optimization liên tục", "5-10 workflows", "Priority support", "Monthly review"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$3,500 - $8,000",
      period: "/tháng",
      features: [
        "Full automation",
        "Dedicated support",
        "Unlimited workflows",
        "24/7 monitoring",
        "Custom solutions",
        "Quarterly strategy review",
      ],
      highlight: false,
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      points: ["3+ năm kinh nghiệm automation", "50+ dự án hoàn thành thành công", "95% khách hàng hài lòng"],
    },
    {
      icon: Code,
      title: "Technical Excellence",
      points: ["n8n Expert với deep knowledge", "Multi-platform integration experience", "Enterprise-grade solutions"],
    },
    {
      icon: TrendingUp,
      title: "Business Focus",
      points: ["ROI-driven approach", "Measurable results tracking", "Long-term partnership mindset"],
    },
    {
      icon: Zap,
      title: "Support & Maintenance",
      points: ["24/7 monitoring hệ thống", "Quick response khi có issue", "Continuous optimization workflows"],
    },
  ];

  return (
    <>
      <SEO
        title="Hồ Sơ Năng Lực - Automation Agency"
        description="D2 Group - Chuyên gia tự động hóa quy trình kinh doanh với n8n. 50+ dự án thành công, 90% giảm thời gian xử lý thủ công."
        keywords="automation agency, n8n automation, workflow automation, marketing automation, business process automation"
        canonicalUrl="/portfolio"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Workflow className="w-4 h-4 mr-2 inline" />
                Chuyên gia Automation Marketing
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                D2 Group - Automation Excellence
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Chuyên gia tự động hóa quy trình kinh doanh với n8n, giúp doanh nghiệp tiết kiệm thời gian và tăng hiệu
                suất thông qua các giải pháp automation tiên tiến
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Tư vấn miễn phí
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/automation-service">
                    <Target className="w-4 h-4 mr-2" />
                    Xem dịch vụ
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Target className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-2xl">Tầm Nhìn</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  Trở thành đối tác tin cậy hàng đầu về automation cho doanh nghiệp Việt Nam
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-2xl">Sứ Mệnh</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  Giúp doanh nghiệp tự động hóa 80% công việc lặp lại, tập trung vào phát triển chiến lược
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Dịch Vụ Chuyên Nghiệp</h2>
              <p className="text-xl text-muted-foreground">
                Giải pháp automation toàn diện cho mọi nhu cầu của doanh nghiệp
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-3" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Case Studies Thành Công</h2>
              <p className="text-xl text-muted-foreground">Những dự án triển khai thực tế với kết quả ấn tượng</p>
            </div>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                    <div className="flex items-center gap-4 mb-2">
                      <study.icon className="w-10 h-10 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{study.client}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <span className="text-destructive">Challenge:</span>
                        </h4>
                        <ul className="space-y-2">
                          {study.challenge.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <span className="text-primary">Solution:</span>
                        </h4>
                        <ul className="space-y-2">
                          {study.solution.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div>
                      <h4 className="font-semibold text-lg mb-4">Results:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center p-4 bg-primary/5 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <Code className="w-3 h-3 mr-1" />
                        {study.tech}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Chuyên Môn Kỹ Thuật</h2>
              <p className="text-xl text-muted-foreground">Công nghệ và nền tảng chúng tôi thành thạo</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {index === 0 && <Database className="w-6 h-6 text-primary" />}
                      {index === 1 && <Cloud className="w-6 h-6 text-primary" />}
                      {index === 2 && <MessageSquare className="w-6 h-6 text-primary" />}
                      {stack.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {stack.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Cấu Trúc Giá Dịch Vụ</h2>
              <p className="text-xl text-muted-foreground">Linh hoạt theo nhu cầu và quy mô doanh nghiệp</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.highlight ? "border-2 border-primary shadow-xl scale-105" : ""}`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-6 py-1">Phổ biến nhất</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">
                      {plan.price}
                      <span className="text-lg text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.highlight ? "default" : "outline"} asChild>
                      <Link to="/contact">Liên hệ tư vấn</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Pricing Options */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-primary" />
                    Project-Based Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Simple Workflows (1-2 tuần)</span>
                    <span className="font-semibold">$1,000 - $3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medium Integration (3-4 tuần)</span>
                    <span className="font-semibold">$3,000 - $8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complex Systems (1-3 tháng)</span>
                    <span className="font-semibold">$8,000 - $20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enterprise Solutions (3-6 tháng)</span>
                    <span className="font-semibold">$20,000+</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    Consultation & Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Strategy Consultation</span>
                    <span className="font-semibold">$150/giờ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technical Consulting</span>
                    <span className="font-semibold">$120/giờ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Training</span>
                    <span className="font-semibold">$200/giờ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Workshop Sessions</span>
                    <span className="font-semibold">$1,500/ngày</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Tại Sao Chọn D2 Group?</h2>
              <p className="text-xl text-muted-foreground">Những giá trị cốt lõi làm nên sự khác biệt</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <item.icon className="w-12 h-12 mx-auto text-primary mb-3" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-left">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Bắt Đầu Hợp Tác Ngay Hôm Nay</h2>
            <p className="text-xl mb-8 opacity-90">
              Liên hệ để nhận tư vấn miễn phí và khám phá cách automation có thể thay đổi doanh nghiệp của bạn
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Email</div>
                  <div className="font-semibold">contact@d2group.co</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Hotline</div>
                  <div className="font-semibold">+84 xxx xxx xxx</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Địa chỉ</div>
                  <div className="font-semibold">HCM City, Vietnam</div>
                </div>
              </div>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Đặt lịch tư vấn miễn phí
              </Link>
            </Button>

            {/* Consultation Process */}
            <div className="mt-12 pt-12 border-t border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-6">Quy Trình Tư Vấn Miễn Phí</h3>
              <div className="grid md:grid-cols-5 gap-4 text-left">
                {[
                  { step: "1", title: "Discovery Call", desc: "30 phút - Hiểu nhu cầu" },
                  { step: "2", title: "Process Analysis", desc: "Phân tích quy trình" },
                  { step: "3", title: "Proposal", desc: "Đề xuất giải pháp" },
                  { step: "4", title: "Pilot Project", desc: "Triển khai thử nghiệm" },
                  { step: "5", title: "Implementation", desc: "Triển khai toàn diện" },
                ].map((item) => (
                  <div key={item.step} className="bg-primary-foreground/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2 opacity-80">{item.step}</div>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <div className="text-sm opacity-80">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <blockquote className="text-2xl font-semibold italic text-muted-foreground">
              "Tự động hóa không chỉ là công nghệ, mà là nghệ thuật biến ý tưởng thành hành động"
            </blockquote>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
