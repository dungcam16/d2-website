import React from 'react';
import { Workflow, Zap, Settings, BarChart3, CheckCircle, ArrowRight, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AutomationService = () => {
  const workflows = [
    {
      icon: Workflow,
      title: 'Lead Management Automation',
      description: 'Tự động phân loại, điểm lead và nurturing campaigns',
      processes: ['Lead scoring', 'Automatic routing', 'Follow-up sequences', 'CRM integration']
    },
    {
      icon: Settings,
      title: 'Customer Service Automation',
      description: 'Tự động hóa quy trình customer support và ticket management',
      processes: ['Ticket routing', 'Auto-responses', 'Escalation rules', 'SLA monitoring']
    },
    {
      icon: BarChart3,
      title: 'Marketing Automation',
      description: 'Campaigns tự động dựa trên hành vi và lifecycle khách hàng',
      processes: ['Behavioral triggers', 'Segmentation', 'Personalization', 'ROI tracking']
    },
    {
      icon: GitBranch,
      title: 'Sales Process Automation',
      description: 'Tối ưu hóa sales funnel và quản lý pipeline tự động',
      processes: ['Opportunity scoring', 'Quote generation', 'Contract workflows', 'Revenue tracking']
    }
  ];

  const integrations = [
    'CRM Systems (Salesforce, HubSpot)',
    'E-commerce (Shopify, WooCommerce)', 
    'Email Marketing (Mailchimp, SendGrid)',
    'Social Media (Facebook, Instagram)',
    'Analytics (Google Analytics, Mixpanel)',
    'Payment Gateways (Stripe, PayPal)',
    'Vietnamese Platforms (Zalo, ViettelPay)',
    'ERP Systems (SAP, Oracle)'
  ];

  const benefits = [
    { metric: '75%', label: 'Giảm thời gian xử lý manual' },
    { metric: '3x', label: 'Tăng productivity team' },
    { metric: '90%', label: 'Giảm human error' },
    { metric: '24/7', label: 'Hoạt động không gián đoạn' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-foreground">N8N Enterprise</span>
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">Automation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Tự động hóa hoàn toàn quy trình kinh doanh với N8N workflows. 
              Tối ưu hóa operations và tăng hiệu quả doanh nghiệp.
            </p>

            <Button size="lg" className="shadow-glow">
              Audit quy trình miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kết quả <span className="text-primary">automation</span> thực tế
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{benefit.metric}</div>
                <div className="text-muted-foreground">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Các loại <span className="text-primary">workflow</span> automation
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => {
              const IconComponent = workflow.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-card transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <IconComponent className="h-12 w-12" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">{workflow.title}</h3>
                      <p className="text-muted-foreground mb-6">{workflow.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {workflow.processes.map((process, processIndex) => (
                          <div key={processIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-sm">{process}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* N8N Platform */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tại sao chọn <span className="text-primary">N8N</span>?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Open Source & Flexible</h3>
                  <p className="text-muted-foreground">
                    Nền tảng mã nguồn mở với khả năng tùy biến cao, không bị vendor lock-in.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">500+ Pre-built Integrations</h3>
                  <p className="text-muted-foreground">
                    Kết nối với hầu hết các tools và platforms phổ biến mà không cần code.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visual Workflow Builder</h3>
                  <p className="text-muted-foreground">
                    Thiết kế workflows trực quan, dễ hiểu và maintain cho team.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise-Ready</h3>
                  <p className="text-muted-foreground">
                    Scalable, secure và có đầy đủ features cho doanh nghiệp lớn.
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Popular Integrations</h3>
              <div className="grid grid-cols-2 gap-3">
                {integrations.map((integration, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 text-sm animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{integration}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quy trình <span className="text-primary">implementation</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Process Audit', desc: 'Phân tích quy trình hiện tại' },
              { step: '02', title: 'Design Workflow', desc: 'Thiết kế automation workflow' },
              { step: '03', title: 'Development', desc: 'Build và test workflows' },
              { step: '04', title: 'Deploy & Monitor', desc: 'Triển khai và giám sát' }
            ].map((phase, index) => (
              <Card 
                key={index}
                className="p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-4">{phase.step}</div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 gradient-card">
            <h2 className="text-3xl font-bold mb-4">
              Sẵn sàng <span className="text-primary">tự động hóa</span> doanh nghiệp?
            </h2>
            <p className="text-muted-foreground mb-6">
              Bắt đầu với audit quy trình miễn phí và tư vấn N8N automation phù hợp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow">
                Đặt lịch audit miễn phí
              </Button>
              <Button variant="outline" size="lg">
                Xem demo workflow
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomationService;