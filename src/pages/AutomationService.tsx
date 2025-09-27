import React, { useState } from 'react';
import { 
  Server, Shield, Users, Database, GitBranch, Workflow, 
  CheckCircle, ArrowRight, Download, Play, Calculator,
  Zap, Settings, Clock, TrendingUp, Lock, Globe,
  Code, Monitor, BarChart3, Target, CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
      title: "Scattered tools không integrate",
      description: "Dữ liệu phân tán khắp các hệ thống khác nhau"
    },
    {
      icon: Clock,
      title: "Manual processes tốn thời gian",
      description: "90% công việc lặp lại có thể tự động hóa"
    },
    {
      icon: Database,
      title: "Data silos giữa các departments",
      description: "Thiếu thông tin real-time để ra quyết định"
    },
    {
      icon: Shield,
      title: "Compliance và security concerns",
      description: "Khó kiểm soát access và audit trails"
    },
    {
      icon: TrendingUp,
      title: "Scalability limitations",
      description: "Hệ thống hiện tại không theo kịp growth"
    },
    {
      icon: Code,
      title: "Developer resource constraints",
      description: "Team kỹ thuật quá tải với integration tasks"
    }
  ];

  const solutions = [
    {
      icon: Server,
      title: "Self-hosted Control",
      description: "Deploy on premise hoặc private cloud. Kiểm soát hoàn toàn data và infrastructure."
    },
    {
      icon: Workflow,
      title: "800+ Pre-built Integrations",
      description: "APIs, databases, SaaS tools. Kết nối mọi thứ trong enterprise ecosystem."
    },
    {
      icon: Monitor,
      title: "Visual Workflow Builder",
      description: "No-code cho non-technical users. Drag & drop interface để build automation."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SSO, RBAC, audit logs. Đáp ứng các tiêu chuẩn security cao nhất."
    },
    {
      icon: Zap,
      title: "Unlimited Executions",
      description: "No usage limits như Zapier. Scale without worrying về pricing tiers."
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Build proprietary connectors. Support cho legacy systems và custom APIs."
    }
  ];

  const departments = [
    {
      name: "IT Operations",
      useCases: ["Server monitoring", "Automated provisioning", "Incident response", "Backup automation"]
    },
    {
      name: "Sales",
      useCases: ["Lead routing", "CRM updates", "Proposal generation", "Pipeline management"]
    },
    {
      name: "Marketing",
      useCases: ["Campaign automation", "Lead scoring", "Content distribution", "Performance tracking"]
    },
    {
      name: "HR",
      useCases: ["Onboarding workflows", "Leave approvals", "Performance reviews", "Recruitment automation"]
    },
    {
      name: "Finance",
      useCases: ["Invoice processing", "Expense approvals", "Budget tracking", "Compliance reporting"]
    },
    {
      name: "Customer Success",
      useCases: ["Ticket routing", "Satisfaction surveys", "Renewal workflows", "Support escalation"]
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
    <div className="min-h-screen" style={{ backgroundColor: '#1a1a1a', color: '#f8fafc' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              N8N Enterprise Automation
              <br />
              <span style={{ color: '#6366f1' }}>Workflow Automation Cho Tổ Chức Lớn</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              800+ integrations, visual workflow builder, enterprise security. Giảm 90% manual tasks, 
              tăng 60% productivity cho technical teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                style={{ backgroundColor: '#6366f1', color: 'white' }}
                className="hover:opacity-90"
              >
                Schedule Technical Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                style={{ borderColor: '#6366f1', color: '#6366f1' }}
                className="hover:bg-blue-600/10"
              >
                Download Architecture Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#10b981' }}>800+</div>
                <div className="text-sm text-gray-400">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#f97316' }}>90%</div>
                <div className="text-sm text-gray-400">Tasks Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#6366f1' }}>24/7</div>
                <div className="text-sm text-gray-400">Operation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#262626' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Challenges Mà <span style={{ color: '#f97316' }}>Enterprise</span> Đang Gặp Phải
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 animate-scale-in border-gray-700"
                  style={{ backgroundColor: '#1a1a1a', borderColor: '#374151', animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div style={{ color: '#f97316' }}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{challenge.title}</h3>
                      <p className="text-gray-400 text-sm">{challenge.description}</p>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Tại Sao <span style={{ color: '#6366f1' }}>N8N</span> Là Lựa Chọn #1 Cho Enterprise?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in border-gray-700"
                  style={{ backgroundColor: '#262626', borderColor: '#374151', animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="mb-4" style={{ color: '#10b981' }}>
                      <IconComponent className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{solution.title}</h3>
                    <p className="text-gray-400">{solution.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases by Department */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#262626' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Automation Use Cases Theo <span style={{ color: '#6366f1' }}>Từng Department</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card 
                key={index}
                className="p-6 animate-scale-in border-gray-700"
                style={{ backgroundColor: '#1a1a1a', borderColor: '#374151', animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: '#6366f1' }}>{dept.name}</h3>
                <ul className="space-y-2">
                  {dept.useCases.map((useCase, ucIndex) => (
                    <li key={ucIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#10b981' }} />
                      <span className="text-gray-300">{useCase}</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Kết Nối Với <span style={{ color: '#10b981' }}>Hệ Sinh Thái Công Nghệ</span> Của Bạn
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 animate-scale-in border-gray-700"
                style={{ backgroundColor: '#262626', borderColor: '#374151', animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: '#f97316' }}>{category.name}</h3>
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#10b981' }} />
                      <span className="text-gray-300 text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#262626' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Tính Năng Dành Riêng Cho <span style={{ color: '#6366f1' }}>Enterprise</span>
          </h2>
          
          <Card className="overflow-hidden border-gray-700" style={{ backgroundColor: '#1a1a1a', borderColor: '#374151' }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead style={{ backgroundColor: '#262626' }}>
                  <tr>
                    <th className="text-left p-4 text-white">Feature</th>
                    <th className="text-left p-4 text-gray-400">Standard</th>
                    <th className="text-left p-4" style={{ color: '#6366f1' }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {enterpriseFeatures.map((item, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="p-4 text-white font-medium">{item.feature}</td>
                      <td className="p-4 text-gray-400">{item.standard}</td>
                      <td className="p-4 text-green-400">{item.enterprise}</td>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            <Calculator className="inline-block mr-3 h-8 w-8" style={{ color: '#10b981' }} />
            ROI Calculator
          </h2>
          
          <Card className="p-8 border-gray-700" style={{ backgroundColor: '#262626', borderColor: '#374151' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">Input Your Data</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-gray-300">Number of Employees</Label>
                    <Input
                      type="number"
                      value={roiInputs.employees}
                      onChange={(e) => setRoiInputs({...roiInputs, employees: parseInt(e.target.value) || 0})}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Average Hourly Cost ($)</Label>
                    <Input
                      type="number"
                      value={roiInputs.hourlyCost}
                      onChange={(e) => setRoiInputs({...roiInputs, hourlyCost: parseInt(e.target.value) || 0})}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Hours Saved Per Week</Label>
                    <Input
                      type="number"
                      value={roiInputs.hoursPerWeek}
                      onChange={(e) => setRoiInputs({...roiInputs, hoursPerWeek: parseInt(e.target.value) || 0})}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">Projected Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: '#10b981' }}>${roiResults.annualSavings}</div>
                    <div className="text-gray-400">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: '#6366f1' }}>{roiResults.roi}%</div>
                    <div className="text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: '#f97316' }}>{roiResults.paybackMonths}</div>
                    <div className="text-gray-400">Payback (Months)</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#262626' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Implementation Process & <span style={{ color: '#10b981' }}>Support</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationPhases.map((phase, index) => (
              <Card 
                key={index}
                className="p-6 text-center animate-scale-in border-gray-700"
                style={{ backgroundColor: '#1a1a1a', borderColor: '#374151', animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold mb-4" style={{ color: '#6366f1' }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{phase.phase}</h3>
                <div className="text-sm mb-3" style={{ color: '#f97316' }}>{phase.duration}</div>
                <p className="text-gray-400 text-sm">{phase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Enterprise <span style={{ color: '#10b981' }}>Pricing Models</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingModels.map((model, index) => (
              <Card 
                key={index}
                className="p-6 text-center animate-scale-in border-gray-700"
                style={{ backgroundColor: '#262626', borderColor: '#374151', animationDelay: `${index * 0.1}s` }}
              >
                <CreditCard className="h-8 w-8 mx-auto mb-4" style={{ color: '#6366f1' }} />
                <h3 className="text-xl font-bold mb-2 text-white">{model.name}</h3>
                <div className="text-2xl font-bold mb-4" style={{ color: '#10b981' }}>{model.price}</div>
                <p className="text-gray-400 text-sm">{model.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#262626' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Enterprise <span style={{ color: '#f97316' }}>Security</span> & Compliance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 animate-scale-in border-gray-700"
                style={{ backgroundColor: '#1a1a1a', borderColor: '#374151', animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#f97316' }} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{feature.name}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Demo CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 border-gray-700" style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #1a1a1a 100%)', borderColor: '#374151' }}>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Xem <span style={{ color: '#6366f1' }}>N8N Enterprise</span> Hoạt Động Với Data Thực Của Bạn
            </h2>
            <p className="text-gray-300 mb-8">
              Schedule technical demo với enterprise architects. Free POC setup cho qualified leads.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Input placeholder="Company Name" className="bg-gray-800 border-gray-600 text-white mb-3" />
                <Input placeholder="Your Role" className="bg-gray-800 border-gray-600 text-white mb-3" />
                <Input placeholder="Primary Use Case" className="bg-gray-800 border-gray-600 text-white" />
              </div>
              <div>
                <Input placeholder="Current Tools" className="bg-gray-800 border-gray-600 text-white mb-3" />
                <Input placeholder="Team Size" className="bg-gray-800 border-gray-600 text-white mb-3" />
                <Input placeholder="Email" className="bg-gray-800 border-gray-600 text-white" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                style={{ backgroundColor: '#6366f1', color: 'white' }}
                className="hover:opacity-90"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Technical Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                style={{ borderColor: '#10b981', color: '#10b981' }}
                className="hover:bg-green-600/10"
              >
                Request Free POC
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              ✓ Free POC setup cho qualified leads ✓ Technical consultation included
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomationService;