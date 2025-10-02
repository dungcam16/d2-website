import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Building2,
  CheckCircle2,
  ArrowLeft,
  Code,
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  Phone,
  Target,
} from "lucide-react";

const CaseStudyCrmAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: "CRM Lead Management Automation - D2 Group",
    description: "Tăng 40% conversion rate, giảm 75% thời gian xử lý lead với n8n automation",
  };

  return (
    <>
      <SEO
        title="CRM Lead Management Automation - Case Study"
        description="Case study: Tự động hóa quy trình quản lý lead, tăng conversion rate 40% và tiết kiệm 75% thời gian"
        keywords="crm automation, lead management, n8n workflow, sales automation"
        canonicalUrl="/case-study/crm-automation"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại Hồ sơ năng lực
              </Link>
            </Button>

            <div className="space-y-6">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                <Building2 className="w-4 h-4 mr-2 inline" />
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                CRM Lead Management Automation
              </h1>
              <p className="text-xl text-muted-foreground">
                Công ty bất động sản với 50+ nhân viên sales
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">40%</div>
                  <div className="text-xs text-muted-foreground">Tăng conversion</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">75%</div>
                  <div className="text-xs text-muted-foreground">Giảm thời gian xử lý</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">90%</div>
                  <div className="text-xs text-muted-foreground">Accuracy scoring</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">$15K</div>
                  <div className="text-xs text-muted-foreground">Tăng revenue/tháng</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Workflow Image */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop"
                alt="CRM Automation Workflow"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-2">
                  <span className="text-destructive">Thách thức</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Lead data phân tán trên nhiều platform</h3>
                    <p className="text-muted-foreground">
                      Leads đến từ website, Facebook Ads, Google Ads, landing pages, và walk-ins được lưu ở các
                      hệ thống khác nhau. Team sales phải manually check nhiều nơi để không bỏ sót khách hàng
                      tiềm năng.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Lead scoring và assignment thủ công</h3>
                    <p className="text-muted-foreground">
                      Không có tiêu chí rõ ràng để đánh giá chất lượng lead. Sales manager phải manually phân
                      công leads cho từng sales, dẫn đến không đồng đều và thiếu công bằng. Hot leads thường bị
                      assign chậm.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Follow-up chậm và không nhất quán</h3>
                    <p className="text-muted-foreground">
                      Thiếu automation trong follow-up sequence. Sales phải nhớ và manually gọi điện, gửi email,
                      nhắn tin cho từng lead. Dẫn đến nhiều leads bị bỏ quên hoặc follow-up không đúng thời
                      điểm.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-2">
                  <span className="text-primary">Giải pháp</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Centralized Lead Management System
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Xây dựng hub trung tâm kết nối tất cả nguồn lead và tự động hóa toàn bộ flow từ capture đến
                    conversion:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Multi-source lead capture:</strong> Webhooks tự động nhận leads từ website
                        forms, Facebook Lead Ads, Google Forms, Zapier, và sync vào HubSpot CRM
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Data enrichment:</strong> Tự động enrich lead data bằng cách tra cứu từ Google
                        Maps API (địa chỉ công ty), Clearbit (thông tin công ty), và social profiles
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Duplicate detection:</strong> Algorithm kiểm tra duplicate leads dựa trên email,
                        phone, và fuzzy matching name để merge và update data
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Real-time sync:</strong> Bi-directional sync giữa n8n, HubSpot, Google Sheets,
                        và Slack để team luôn có thông tin mới nhất
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Intelligent Lead Scoring & Assignment</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Behavioral Scoring Algorithm
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Tự động tính điểm lead dựa trên: source quality (40 points), budget range (30 points),
                        urgency/timeline (20 points), và engagement level (10 points). Leads trên 70 điểm là "Hot
                        Leads" được ưu tiên cao nhất.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Smart Assignment Logic
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Round-robin assignment theo workload hiện tại của sales, skill match (ví dụ luxury
                        property experts), và geographic territory. Hot leads được assign ngay lập tức, warm
                        leads trong vòng 2 giờ.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Escalation Rules
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Nếu sales không response trong 30 phút (hot leads) hoặc 4 giờ (warm leads), workflow tự
                        động escalate lên team leader qua Slack và SMS. Sau 24 giờ không contact, re-assign cho
                        sales khác.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Multi-Channel Follow-up Automation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Email sequences:</strong> Personalized email drip campaigns theo từng segment
                        (first-time buyer, investor, upgrader) với dynamic content
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>SMS reminders:</strong> Tự động gửi SMS reminder cho viewing appointments, payment
                        deadlines, và follow-up tasks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>WhatsApp integration:</strong> Rich media messages qua WhatsApp Business API với
                        property images, brochures, và video tours
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Call scheduling:</strong> Tự động book calls vào Google Calendar và gửi reminder
                        cho cả sales và customers trước 1 giờ
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Tech Stack & Tools</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    "n8n Workflow Engine",
                    "HubSpot CRM",
                    "Facebook Lead Ads API",
                    "Google Sheets API",
                    "Slack API",
                    "WhatsApp Business API",
                    "Twilio SMS",
                    "Google Analytics",
                    "Clearbit Enrichment",
                    "Zapier",
                    "PostgreSQL",
                  ].map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Tác động & Kết quả</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Sales Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Conversion rate</span>
                    <span className="font-bold">12% → 17%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Response time</span>
                    <span className="font-bold">4 giờ → 15 phút</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lead-to-deal rate</span>
                    <span className="font-bold">8% → 14%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Business Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Revenue increase</span>
                    <span className="font-bold">$15,000/tháng</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time saved/sales</span>
                    <span className="font-bold">10 giờ/tuần</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ROI sau 6 tháng</span>
                    <span className="font-bold">380%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Operational Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      90% accuracy trong lead scoring, giảm misfires và tăng focus vào quality leads
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Zero leads bị miss nhờ centralized system và real-time notifications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Sales team satisfaction tăng 45% do giảm manual work và có data insights tốt hơn
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Manager có dashboard real-time để track performance và optimize strategies
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Tối ưu hóa quy trình CRM của bạn ngay hôm nay</h2>
            <p className="text-xl text-muted-foreground mb-8">
              D2 Group giúp bạn xây dựng hệ thống CRM automation để tăng conversion và revenue
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Tư vấn miễn phí
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Xem thêm case studies
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudyCrmAutomation;
