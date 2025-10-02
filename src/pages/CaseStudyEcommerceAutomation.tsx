import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  ShoppingCart,
  CheckCircle2,
  ArrowLeft,
  Code,
  TrendingUp,
  Package,
  DollarSign,
  Zap,
  Phone,
  Clock,
} from "lucide-react";

const CaseStudyEcommerceAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: "E-commerce Inventory Automation - D2 Group",
    description: "Giảm 90% stockouts, tăng accuracy 100% với n8n automation",
  };

  return (
    <>
      <SEO
        title="E-commerce Inventory Automation - Case Study"
        description="Case study: Tự động hóa quản lý tồn kho và đơn hàng cho e-commerce, giảm 90% stockouts"
        keywords="ecommerce automation, inventory management, n8n workflow, stock automation"
        canonicalUrl="/case-study/ecommerce-automation"
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
                <ShoppingCart className="w-4 h-4 mr-2 inline" />
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                E-commerce Inventory Automation
              </h1>
              <p className="text-xl text-muted-foreground">
                Online store với 1000+ sản phẩm đa kênh
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">90%</div>
                  <div className="text-xs text-muted-foreground">Giảm stockouts</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">30%</div>
                  <div className="text-xs text-muted-foreground">Giảm holding costs</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Stock accuracy</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Monitoring</div>
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop"
                alt="E-commerce Automation Workflow"
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
                  <Package className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Manual inventory tracking không kịp thời</h3>
                    <p className="text-muted-foreground">
                      Với 1000+ SKUs bán trên website, Shopee, Lazada, TikTok Shop, việc cập nhật tồn kho thủ
                      công qua Excel sheets dẫn đến data luôn outdated. Staff phải export reports từ nhiều
                      platform và manually reconcile, tốn 3-4 giờ mỗi ngày.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Stockout frequency cao, mất doanh thu</h3>
                    <p className="text-muted-foreground">
                      20-30% sản phẩm best-sellers bị out of stock mỗi tuần vì không theo dõi được stock levels
                      real-time. Khách đặt hàng nhưng phải cancel vì hết hàng, ảnh hưởng đến customer
                      satisfaction và brand reputation.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Supplier communication không hiệu quả</h3>
                    <p className="text-muted-foreground">
                      Purchasing team phải manually kiểm tra stock levels và email suppliers để reorder. Không
                      có standardized process, dẫn đến delays trong reordering, overstocking một số items và
                      understocking items khác.
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
                    Real-time Inventory Monitoring System
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Xây dựng central inventory hub tự động sync data từ tất cả sales channels và warehouses:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Multi-channel integration:</strong> n8n workflow kết nối WooCommerce (main
                        website), Shopee API, Lazada API, TikTok Shop API để pull inventory data mỗi 15 phút
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Centralized database:</strong> PostgreSQL database làm single source of truth cho
                        tất cả stock levels, với history tracking và audit logs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Real-time sync:</strong> Khi có order mới từ bất kỳ channel nào, workflow tự động
                        deduct stock và sync lại stock levels lên tất cả platforms trong vòng 1 phút
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Dashboard visualization:</strong> Google Sheets dashboard tự động update với
                        charts, low stock alerts, và sales velocity metrics
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Automated Reorder Workflows</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Smart Threshold Algorithm
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Tính toán reorder points dựa trên historical sales velocity (30 ngày), lead time từ
                        suppliers, và seasonal trends. Fast-moving items có lower threshold, slow-moving có higher
                        threshold để optimize capital.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Automatic Purchase Orders
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Khi stock level đạt reorder point, workflow tự động generate PO với optimal quantity (EOQ
                        model), gửi email cho supplier kèm theo specs và delivery requirements. Supplier chỉ cần
                        confirm.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mb-2">
                        Supplier Communication Hub
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Tích hợp email automation, Telegram bot cho suppliers để confirm orders, update shipping
                        status, và upload invoices. Tất cả communications được log vào database để tracking.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-xl mb-3">Monitoring & Alert System</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Low stock alerts:</strong> Telegram notifications khi stock level dưới threshold,
                        với details về product, current stock, và estimated runout date
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Overstock warnings:</strong> Alerts khi items không bán được trong 60 ngày, suggest
                        promotions hoặc bundle deals để clear inventory
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Discrepancy detection:</strong> Tự động compare stock levels giữa platforms và
                        database, alert khi có mismatch để investigate
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Daily reports:</strong> Automated daily reports về top-selling products, stock
                        turns, pending POs, và inventory value gửi qua email mỗi sáng
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
                    "WooCommerce API",
                    "Shopee Open Platform",
                    "Lazada Open Platform",
                    "TikTok Shop API",
                    "PostgreSQL",
                    "Google Sheets API",
                    "Telegram Bot API",
                    "Email SMTP",
                    "Cron Scheduler",
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
                    <Package className="w-5 h-5 text-primary" />
                    Inventory Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Stockout frequency</span>
                    <span className="font-bold">25% → 2.5%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Stock accuracy</span>
                    <span className="font-bold">85% → 99.5%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Inventory turnover</span>
                    <span className="font-bold">4x → 6.5x/năm</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Financial Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Holding cost reduction</span>
                    <span className="font-bold">30%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lost sales prevention</span>
                    <span className="font-bold">$8,000/tháng</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time saved</span>
                    <span className="font-bold">20 giờ/tuần</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Operational Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      100% stock accuracy across all channels, zero overselling incidents
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      24/7 automated monitoring, team chỉ cần respond to alerts thay vì manual checks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Supplier relationship cải thiện nhờ standardized communication và faster payments
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Data-driven decisions với real-time dashboards và predictive analytics
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
            <h2 className="text-3xl font-bold mb-4">Tối ưu hóa quản lý tồn kho cho e-commerce của bạn</h2>
            <p className="text-xl text-muted-foreground mb-8">
              D2 Group giúp bạn xây dựng hệ thống inventory automation để giảm stockouts và tối ưu vốn
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

export default CaseStudyEcommerceAutomation;
