import React, { useState } from 'react';
import { 
  ArrowRight, Search, TrendingUp, Target, Shield, CheckCircle, Star, BarChart3, Zap, Globe,
  Award, Clock, Users, Monitor, Database, Settings, Link, FileText, AlertTriangle,
  Smartphone, Gauge, MapPin, Brain, Eye, Filter, Download, Lightbulb, Trophy,
  Building, ShoppingCart, Heart, Code, Home, Briefcase, PlayCircle, Calculator,
  GitBranch, Server, Workflow
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AutomationService = () => {
  const [roiInputs, setRoiInputs] = useState({
    employees: 100,
    hourlyCost: 50,
    hoursPerWeek: 10
  });

  const calculateROI = () => {
    const annualSavings = roiInputs.employees * roiInputs.hourlyCost * roiInputs.hoursPerWeek * 52;
    const implementationCost = 150000; // Average implementation cost in USD
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = (implementationCost / (annualSavings / 12)).toFixed(1);
    
    return {
      annualSavings: annualSavings.toLocaleString(),
      roi: roi.toFixed(0),
      paybackMonths
    };
  };

  const challenges = [
    {
      icon: GitBranch,
      title: "Công cụ rời rạc không tích hợp",
      description: "Dữ liệu phân tán khắp các hệ thống khác nhau"
    },
    {
      icon: Clock,
      title: "Quy trình thủ công tốn thời gian",
      description: "90% công việc lặp lại có thể tự động hóa"
    },
    {
      icon: Database,
      title: "Dữ liệu riêng lẻ giữa các phòng ban",
      description: "Thiếu thông tin thời gian thực để ra quyết định"
    },
    {
      icon: Shield,
      title: "Tuân thủ và bảo mật",
      description: "Khó kiểm soát quyền truy cập và dấu vết kiểm toán"
    },
    {
      icon: TrendingUp,
      title: "Hạn chế khả năng mở rộng",
      description: "Hệ thống hiện tại không theo kịp tăng trưởng"
    },
    {
      icon: Code,
      title: "Hạn chế nguồn lực phát triển",
      description: "Đội kỹ thuật quá tải với công việc tích hợp"
    }
  ];

  const solutions = [
    {
      icon: Server,
      title: "Kiểm soát tự lưu trữ",
      description: "Triển khai tại chỗ hoặc đám mây riêng. Kiểm soát hoàn toàn dữ liệu và hạ tầng."
    },
    {
      icon: Workflow,
      title: "800+ Tích hợp có sẵn",
      description: "APIs, cơ sở dữ liệu, công cụ SaaS. Kết nối mọi thứ trong hệ sinh thái doanh nghiệp."
    },
    {
      icon: Monitor,
      title: "Công cụ xây dựng luồng trực quan",
      description: "Không cần code cho người dùng phi kỹ thuật. Giao diện kéo thả để xây dựng tự động hóa."
    },
    {
      icon: Shield,
      title: "Bảo mật doanh nghiệp",
      description: "SSO, RBAC, nhật ký kiểm toán. Đáp ứng các tiêu chuẩn bảo mật cao nhất."
    },
    {
      icon: Zap,
      title: "Thực thi không giới hạn",
      description: "Không giới hạn sử dụng như Zapier. Mở rộng mà không lo lắng về gói giá."
    },
    {
      icon: Settings,
      title: "Tích hợp tùy chỉnh",
      description: "Xây dựng kết nối độc quyền. Hỗ trợ hệ thống cũ và APIs tùy chỉnh."
    }
  ];

  const departments = [
    {
      name: "Vận hành CNTT",
      useCases: ["Giám sát máy chủ", "Cung cấp tự động", "Phản ứng sự cố", "Tự động sao lưu"]
    },
    {
      name: "Bán hàng",
      useCases: ["Định tuyến khách hàng tiềm năng", "Cập nhật CRM", "Tạo đề xuất", "Quản lý đường ống"]
    },
    {
      name: "Marketing",
      useCases: ["Tự động chiến dịch", "Chấm điểm khách hàng tiềm năng", "Phân phối nội dung", "Theo dõi hiệu suất"]
    },
    {
      name: "Nhân sự",
      useCases: ["Quy trình chào đón", "Phê duyệt nghỉ phép", "Đánh giá hiệu suất", "Tự động tuyển dụng"]
    },
    {
      name: "Tài chính",
      useCases: ["Xử lý hóa đơn", "Phê duyệt chi phí", "Theo dõi ngân sách", "Báo cáo tuân thủ"]
    },
    {
      name: "Thành công khách hàng",
      useCases: ["Định tuyến vé", "Khảo sát hài lòng", "Quy trình gia hạn", "Nâng cấp hỗ trợ"]
    }
  ];

  const integrationCategories = [
    { name: "CRM", tools: ["Salesforce", "HubSpot", "Pipedrive"] },
    { name: "ERP", tools: ["SAP", "Oracle", "Microsoft Dynamics"] },
    { name: "Cloud", tools: ["AWS", "GCP", "Azure services"] },
    { name: "Databases", tools: ["PostgreSQL", "MySQL", "MongoDB"] },
    { name: "Communication", tools: ["Slack", "Teams", "Discord"] },
    { name: "Development", tools: ["GitHub", "GitLab", "Jira"] }
  ];

  const enterpriseFeatures = [
    { feature: "User Management", standard: "Limited users", enterprise: "Unlimited users, RBAC" },
    { feature: "Execution Limits", standard: "Usage restrictions", enterprise: "Unlimited executions" },
    { feature: "Data Retention", standard: "30 days", enterprise: "Unlimited retention" },
    { feature: "Support", standard: "Community", enterprise: "24/7 dedicated support" },
    { feature: "SLA", standard: "Best effort", enterprise: "99.9% uptime guarantee" },
    { feature: "Compliance", standard: "Basic", enterprise: "SOC2, GDPR, HIPAA ready" }
  ];

  const implementationPhases = [
    {
      phase: "Discovery & Planning",
      duration: "2 weeks",
      description: "Requirements gathering, architecture design, security planning"
    },
    {
      phase: "Setup & Configuration", 
      duration: "2 weeks",
      description: "Infrastructure setup, security implementation, initial configuration"
    },
    {
      phase: "Migration & Testing",
      duration: "3 weeks", 
      description: "Legacy workflow migration, comprehensive testing, performance optimization"
    },
    {
      phase: "Training & Go-live",
      duration: "1 week",
      description: "User training, documentation handover, production deployment"
    }
  ];

  const pricingModels = [
    {
      name: "Per User/Month",
      price: "$50",
      description: "Ideal cho teams với defined user count"
    },
    {
      name: "Site License", 
      price: "Fixed Price",
      description: "Unlimited users, perfect cho large organizations"
    },
    {
      name: "Usage-based",
      price: "Per Execution",
      description: "Pay theo actual workflow execution volume"
    },
    {
      name: "Custom Enterprise",
      price: "Tailored",
      description: "Flexible pricing dựa trên specific requirements"
    }
  ];

  const securityFeatures = [
    { name: "Data Encryption", description: "AES-256 encryption at rest và in transit" },
    { name: "Access Controls", description: "SSO, MFA, role-based access control" },
    { name: "Audit Logs", description: "Complete activity tracking và compliance reporting" },
    { name: "Compliance", description: "SOC2 Type II, ISO 27001, HIPAA ready" },
    { name: "Network Security", description: "VPN support, firewall rules, IP whitelisting" },
    { name: "Data Residency", description: "Choose data storage location theo regulatory requirements" }
  ];

  const roiResults = calculateROI();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                <span className="text-primary">N8N Enterprise Automation</span>
                <br />
                <span className="text-foreground">Workflow Automation Cho Tổ Chức Lớn</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                800+ integrations, visual workflow builder, enterprise security. Giảm 90% manual tasks, 
                tăng 60% productivity cho technical teams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="shadow-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Technical Demo
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Download Architecture Guide
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">800+</div>
                  <div className="text-sm text-muted-foreground">Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">90%</div>
                  <div className="text-sm text-muted-foreground">Tasks Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Operation</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="gradient-card p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">N8N Enterprise Dashboard</h3>
                  <div className="text-sm text-muted-foreground">Live workflow metrics</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">98.5%</div>
                    <div className="text-xs">Uptime</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">60%</div>
                    <div className="text-xs">Productivity Gain</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">90%</div>
                    <div className="text-xs">Task Automation</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">24/7</div>
                    <div className="text-xs">Operation</div>
                  </div>
                </div>
                
                <div className="h-32 rounded-lg bg-muted/30 flex items-center justify-center">
                  <div className="text-center text-sm text-muted-foreground">
                    📊 Enterprise Workflow Dashboard
                    <br />
                    Real-time automation monitoring
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Challenges Mà <span className="text-primary">Enterprise</span> Đang Gặp Phải
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card 
                  key={index}
                  className="gradient-card p-6 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                      <p className="text-muted-foreground text-sm">{challenge.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* N8N Enterprise Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại Sao <span className="text-primary">N8N</span> Là Lựa Chọn #1 Cho Enterprise?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card 
                  key={index}
                  className="gradient-card p-6 hover:shadow-elevation transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="mb-4">
                      <IconComponent className="h-12 w-12 mx-auto text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases by Department */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Automation Use Cases Theo <span className="text-primary">Từng Department</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card 
                key={index}
                className="gradient-card p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{dept.name}</h3>
                <ul className="space-y-2">
                  {dept.useCases.map((useCase, ucIndex) => (
                    <li key={ucIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kết Nối Với <span className="text-primary">Hệ Sinh Thái Công Nghệ</span> Của Bạn
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => (
              <Card 
                key={index}
                className="gradient-card p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tính Năng Dành Riêng Cho <span className="text-primary">Enterprise</span>
          </h2>
          
          <Card className="gradient-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4">Feature</th>
                    <th className="text-left p-4 text-muted-foreground">Standard</th>
                    <th className="text-left p-4 text-primary">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {enterpriseFeatures.map((item, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4 font-medium">{item.feature}</td>
                      <td className="p-4 text-muted-foreground">{item.standard}</td>
                      <td className="p-4 text-primary font-medium">{item.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <Calculator className="inline-block mr-3 h-8 w-8 text-primary" />
            ROI Calculator
          </h2>
          
          <Card className="gradient-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Input Your Data</h3>
                <div className="space-y-4">
                  <div>
                    <Label>Number of Employees</Label>
                    <Input
                      type="number"
                      value={roiInputs.employees}
                      onChange={(e) => setRoiInputs({...roiInputs, employees: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <Label>Average Hourly Cost ($)</Label>
                    <Input
                      type="number"
                      value={roiInputs.hourlyCost}
                      onChange={(e) => setRoiInputs({...roiInputs, hourlyCost: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <Label>Hours Saved Per Week</Label>
                    <Input
                      type="number"
                      value={roiInputs.hoursPerWeek}
                      onChange={(e) => setRoiInputs({...roiInputs, hoursPerWeek: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Projected Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">${roiResults.annualSavings}</div>
                    <div className="text-muted-foreground">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{roiResults.roi}%</div>
                    <div className="text-muted-foreground">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{roiResults.paybackMonths}</div>
                    <div className="text-muted-foreground">Payback (Months)</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Implementation Process & <span className="text-primary">Support</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationPhases.map((phase, index) => (
              <Card 
                key={index}
                className="gradient-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold mb-4 text-primary">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.phase}</h3>
                <div className="text-sm mb-3 text-primary">{phase.duration}</div>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Enterprise <span className="text-primary">Pricing Models</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingModels.map((model, index) => (
              <Card 
                key={index}
                className="gradient-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Target className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <div className="text-2xl font-bold mb-4 text-primary">{model.price}</div>
                <p className="text-muted-foreground text-sm">{model.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Enterprise <span className="text-primary">Security</span> & Compliance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="gradient-card p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Demo CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">
                Xem <span className="text-primary">N8N Enterprise</span> Hoạt Động Với Data Thực Của Bạn
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule technical demo với enterprise architects. Free POC setup cho qualified leads.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Free POC setup cho qualified leads</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Technical consultation included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Enterprise architecture review</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="shadow-glow"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Technical Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomationService;