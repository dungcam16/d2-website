import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Youtube,
  CheckCircle2,
  ArrowLeft,
  Code,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  Phone,
} from "lucide-react";

const CaseStudyYoutubeAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: "YouTube Content Automation System - D2 Group",
    description: "Giảm 95% thời gian xử lý upload video, tiết kiệm $2,000/tháng với n8n automation",
  };

  return (
    <>
      <SEO
        title="YouTube Content Automation System - Case Study"
        description="Case study: Tự động hóa hoàn toàn quy trình upload và quản lý nội dung YouTube với n8n, giảm 95% thời gian xử lý"
        keywords="youtube automation, n8n workflow, content automation, video upload automation"
        canonicalUrl="/case-study/youtube-automation"
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
                <Youtube className="w-4 h-4 mr-2 inline" />
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                YouTube Content Automation System
              </h1>
              <p className="text-xl text-muted-foreground">
                Kênh YouTube với 100K+ subscribers
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-xs text-muted-foreground">Giảm thời gian</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">0</div>
                  <div className="text-xs text-muted-foreground">Errors trong 6 tháng</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">$2K</div>
                  <div className="text-xs text-muted-foreground">Tiết kiệm/tháng</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">3x</div>
                  <div className="text-xs text-muted-foreground">Tăng productivity</div>
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
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop"
                alt="YouTube Automation Workflow"
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
                  <Clock className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Upload thủ công mất quá nhiều thời gian</h3>
                    <p className="text-muted-foreground">
                      Kênh cần upload 10+ video mỗi ngày, mỗi video tốn 20-30 phút để upload, điền metadata,
                      tạo thumbnail và schedule. Tổng cộng 4 giờ/ngày chỉ để upload nội dung.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Lỗi metadata và thiếu consistency</h3>
                    <p className="text-muted-foreground">
                      Nhập metadata thủ công dẫn đến lỗi chính tả, tags không đồng nhất, descriptions không
                      theo template, ảnh hưởng đến SEO và branding của kênh.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Không có hệ thống backup và monitoring</h3>
                    <p className="text-muted-foreground">
                      Khi có lỗi upload hoặc video bị reject, không có cách nào để tự động retry hoặc thông
                      báo kịp thời, dẫn đến mất nội dung và giảm tần suất đăng bài.
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
                    Kiến trúc Workflow n8n
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thiết kế workflow automation hoàn chỉnh từ khâu chuẩn bị nội dung đến publish lên YouTube:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Trigger tự động:</strong> Webhook nhận thông tin video từ Google Sheets hoặc
                        CMS, kích hoạt workflow ngay lập tức
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Audio processing:</strong> Sử dụng FFmpeg để xử lý audio crossfading, chuẩn
                        hóa volume, và xuất file theo format tối ưu cho YouTube
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Thumbnail generation:</strong> ImageMagick tự động tạo thumbnail từ template,
                        thêm text overlay, watermark theo brand guidelines
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Metadata management:</strong> Template engine tự động generate title,
                        description, tags theo SEO best practices từ data source
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">API Integration & Data Flow</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        YouTube Data API v3
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Upload video, set metadata, manage playlists, và schedule publish time. Xử lý OAuth2
                        authentication và retry logic cho stable uploads.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Google Sheets API
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Đồng bộ content calendar, cập nhật status video, logging errors và tracking analytics.
                        Team có thể quản lý và monitor tất cả từ spreadsheet.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Suno AI Integration
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Tự động generate background music cho video, customize theo mood và duration, đảm bảo
                        content luôn có audio quality tốt.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Monitoring & Error Handling</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Real-time Telegram notifications cho mỗi step: upload started, processing, published,
                        hoặc failed
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Automatic retry mechanism với exponential backoff khi gặp API rate limits hoặc network
                        errors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Backup video files và metadata vào Google Drive trước khi upload để recovery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Health check endpoints và uptime monitoring để đảm bảo workflow luôn running 24/7
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
                    "YouTube Data API v3",
                    "FFmpeg",
                    "ImageMagick",
                    "Google Sheets API",
                    "Suno AI",
                    "Google Cloud APIs",
                    "Docker",
                    "Telegram Bot API",
                    "OAuth2",
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
                    <Clock className="w-5 h-5 text-primary" />
                    Hiệu quả vận hành
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Thời gian upload/video</span>
                    <span className="font-bold">25 phút → 1 phút</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tổng thời gian/ngày</span>
                    <span className="font-bold">4 giờ → 12 phút</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Error rate</span>
                    <span className="font-bold">15% → 0%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Lợi ích kinh tế
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tiết kiệm nhân sự</span>
                    <span className="font-bold">$2,000/tháng</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ROI sau 3 tháng</span>
                    <span className="font-bold">450%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tăng output</span>
                    <span className="font-bold">3x videos</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Cải thiện chất lượng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      100% consistency trong metadata, titles, tags theo SEO best practices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Thumbnails professional với branding đồng nhất, tăng 35% CTR
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Publish schedule ổn định, tăng engagement và subscriber retention
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Team có thể focus vào content creation thay vì technical uploads
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
            <h2 className="text-3xl font-bold mb-4">Bạn cũng muốn tự động hóa quy trình như vậy?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              D2 Group sẵn sàng tư vấn và triển khai giải pháp automation cho doanh nghiệp của bạn
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

export default CaseStudyYoutubeAutomation;
