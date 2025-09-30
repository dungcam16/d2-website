import React from 'react';
import { 
  ArrowRight, CheckCircle, Star, Zap, Code, GitBranch, Settings, 
  Monitor, Database, PlayCircle, Download, Workflow, Clock, Shield,
  BarChart3, Brain, FileText, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const N8nWorkflowService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dịch vụ N8N Workflow Development - Thiết kế và Triển khai Workflow",
    "provider": {
      "@type": "Organization", 
      "name": "D2 Group",
      "url": "https://d2group.co"
    },
    "description": "Dịch vụ thiết kế và triển khai N8N workflows chuyên nghiệp. Xây dựng trigger, nodes, error handling, sub-workflows với JavaScript/TypeScript.",
    "areaServed": "Vietnam"
  };

  const features = [
    {
      icon: GitBranch,
      title: "Thiết Kế Workflow Phức Tạp",
      description: "Xây dựng workflows đa tầng với trigger thông minh, nodes tối ưu và logic phân nhánh phức tạp"
    },
    {
      icon: Code,
      title: "Scripting JavaScript/TypeScript",
      description: "Viết custom code trong Function nodes để xử lý logic nghiệp vụ phức tạp và biến đổi dữ liệu"
    },
    {
      icon: AlertCircle,
      title: "Error Handling Chuyên Nghiệp",
      description: "Thiết lập cơ chế xử lý lỗi toàn diện, retry logic thông minh và fallback strategies"
    },
    {
      icon: Workflow,
      title: "Sub-Workflows & Reusability",
      description: "Tạo sub-workflows có thể tái sử dụng để tối ưu maintainability và scalability"
    },
    {
      icon: Monitor,
      title: "Monitoring & Logging",
      description: "Thiết lập hệ thống giám sát real-time và logging chi tiết cho mọi workflow execution"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Tối ưu hiệu suất workflows với parallel processing, caching và resource management"
    }
  ];

  const workflowTypes = [
    {
      name: "Data Sync Workflows",
      description: "Đồng bộ dữ liệu giữa các hệ thống CRM, ERP, Database",
      examples: ["Salesforce → PostgreSQL", "API → Google Sheets", "Multi-system sync"]
    },
    {
      name: "Notification Workflows",
      description: "Tự động gửi thông báo qua email, Slack, SMS, webhook",
      examples: ["Alert automation", "Scheduled reports", "Event-based notifications"]
    },
    {
      name: "Data Processing Workflows",
      description: "Xử lý, transform và enrich data từ nhiều nguồn",
      examples: ["ETL pipelines", "Data validation", "Format conversion"]
    },
    {
      name: "Integration Workflows",
      description: "Kết nối và tích hợp các ứng dụng và services",
      examples: ["API orchestration", "Webhook handling", "Multi-app workflows"]
    }
  ];

  const technicalCapabilities = [
    { capability: "Custom Triggers", description: "Webhook, Schedule, Polling, Event-based triggers" },
    { capability: "Data Transformation", description: "JSON parsing, XML handling, Data mapping" },
    { capability: "Error Recovery", description: "Automatic retry, Manual intervention, Fallback flows" },
    { capability: "Conditional Logic", description: "IF/Switch nodes, Expression evaluation, Dynamic routing" },
    { capability: "Loop Processing", description: "Batch processing, Item-level loops, Async operations" },
    { capability: "Version Control", description: "Workflow versioning, Rollback capability, Change tracking" }
  ];

  const developmentProcess = [
    {
      phase: "Discovery & Design",
      duration: "3-5 ngày",
      activities: ["Phân tích yêu cầu", "Thiết kế workflow diagram", "Xác định triggers & nodes", "Review kỹ thuật"]
    },
    {
      phase: "Development",
      duration: "5-10 ngày",
      activities: ["Xây dựng workflow", "Custom scripting", "Error handling setup", "Testing & debugging"]
    },
    {
      phase: "Testing & QA",
      duration: "3-5 ngày",
      activities: ["Unit testing", "Integration testing", "Performance testing", "Edge case validation"]
    },
    {
      phase: "Deployment & Monitoring",
      duration: "2-3 ngày",
      activities: ["Production deployment", "Monitoring setup", "Documentation", "Team handover"]
    }
  ];

  const pricingOptions = [
    {
      name: "Simple Workflow",
      price: "15.000.000đ",
      description: "5-10 nodes, basic logic",
      features: ["Single trigger", "Basic error handling", "Standard integrations", "1 tuần triển khai"]
    },
    {
      name: "Complex Workflow",
      price: "35.000.000đ",
      description: "20-50 nodes, advanced logic",
      features: ["Multiple triggers", "Advanced error handling", "Custom scripting", "2-3 tuần triển khai"]
    },
    {
      name: "Enterprise Workflow",
      price: "Liên hệ",
      description: "50+ nodes, mission-critical",
      features: ["Complex architecture", "High availability", "Custom monitoring", "Timeline linh hoạt"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="N8N Workflow Development - Thiết kế và Triển khai Workflow Chuyên Nghiệp"
        description="Dịch vụ thiết kế và triển khai N8N workflows. Xây dựng trigger, nodes, error handling, sub-workflows với JavaScript/TypeScript. Custom scripting và tối ưu hiệu suất."
        keywords="n8n workflow development, thiết kế workflow n8n, triển khai n8n workflow, n8n custom scripting, n8n function nodes, n8n error handling, n8n sub-workflows"
        canonicalUrl="/services/n8n-workflow"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                <span className="text-primary">N8N Workflow Development</span>
                <br />
                <span className="text-foreground">Thiết Kế & Triển Khai Workflows Chuyên Nghiệp</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Xây dựng workflows tự động hóa phức tạp trên nền tảng N8N với trigger thông minh, 
                error handling toàn diện, và custom scripting JavaScript/TypeScript. Tối ưu quy trình 
                và nâng cao hiệu suất vận hành doanh nghiệp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="shadow-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Tư Vấn Workflow
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Tải Case Studies
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Workflows</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="gradient-card p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Workflow Architecture</h3>
                <div className="space-y-4">
                  {['Trigger Setup', 'Data Processing', 'Error Handling', 'Output & Logging'].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{step}</div>
                        <div className="h-2 bg-muted rounded-full mt-1">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${100 - (index * 15)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Khả Năng <span className="text-primary">Workflow Development</span>
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
                  <div className="mb-4">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Các Loại <span className="text-primary">Workflows</span> Chúng Tôi Triển Khai
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowTypes.map((type, index) => (
              <Card 
                key={index}
                className="gradient-card p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{type.name}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <div className="space-y-2">
                  {type.examples.map((example, exIndex) => (
                    <div key={exIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Khả Năng <span className="text-primary">Kỹ Thuật</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCapabilities.map((item, index) => (
              <Card 
                key={index}
                className="gradient-card p-6"
              >
                <h3 className="text-lg font-bold mb-2">{item.capability}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quy Trình <span className="text-primary">Phát Triển</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((phase, index) => (
              <Card 
                key={index}
                className="gradient-card p-6"
              >
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold">{phase.phase}</h3>
                  <div className="text-sm text-muted-foreground">{phase.duration}</div>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Bảng Giá <span className="text-primary">Workflow Development</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index}
                className={`gradient-card p-8 ${index === 1 ? 'border-primary border-2' : ''}`}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{option.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{option.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">{option.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full"
                  variant={index === 1 ? "default" : "outline"}
                  onClick={() => window.location.href = '/contact'}
                >
                  Liên Hệ Tư Vấn
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Sẵn Sàng Xây Dựng <span className="text-primary">Workflows Của Bạn?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Đặt lịch tư vấn miễn phí để thảo luận về nhu cầu workflow của bạn
          </p>
          <Button 
            size="lg" 
            className="shadow-glow"
            onClick={() => window.location.href = '/contact'}
          >
            Tư Vấn Miễn Phí
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default N8nWorkflowService;
