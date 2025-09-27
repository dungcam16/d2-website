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
import ContactForm from '@/components/ContactForm';
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
      title: "Viết content theo cảm tính",
      description: "Không có data để back up content decisions"
    },
    {
      icon: BarChart3,
      title: "Không track performance metrics",
      description: "Không biết content nào work, content nào không"
    },
    {
      icon: Search,
      title: "SEO và user experience conflict",
      description: "Content tối ưu cho search engine nhưng không friendly cho users"
    },
    {
      icon: Target,
      title: "Content không align với sales funnel",
      description: "Thiếu content cho từng stage của customer journey"
    },
    {
      icon: Layers,
      title: "Thiếu repurposing strategy",
      description: "Waste resource vì không tái sử dụng content hiệu quả"
    },
    {
      icon: Calculator,
      title: "ROI không đo được",
      description: "Không attribute revenue back to content efforts"
    }
  ];

  const methodology = [
    {
      icon: Database,
      title: "Research & Analytics",
      description: "Keyword research, competitor analysis, audience insights",
      details: ["Competitor content gap analysis", "Search intent mapping", "Audience persona development", "Content opportunity identification"]
    },
    {
      icon: Brain,
      title: "Strategic Planning", 
      description: "Content calendar, funnel mapping, topic clusters",
      details: ["Content pillar development", "Editorial calendar planning", "Funnel stage mapping", "Topic cluster architecture"]
    },
    {
      icon: Edit,
      title: "Content Creation",
      description: "SEO-optimized, conversion-focused writing",
      details: ["SEO-optimized copywriting", "Visual content creation", "Multi-format adaptation", "Brand voice consistency"]
    },
    {
      icon: LineChart,
      title: "Performance Optimization",
      description: "A/B testing, continuous improvement",
      details: ["A/B testing headlines", "Content performance analysis", "Continuous optimization", "ROI attribution tracking"]
    }
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: "Blog Articles",
      description: "SEO-optimized, 2000+ words, thought leadership",
      metrics: "Average 300% traffic increase"
    },
    {
      icon: Award,
      title: "Case Studies", 
      description: "Results-focused storytelling, client success stories",
      metrics: "85% lead qualification rate"
    },
    {
      icon: Presentation,
      title: "White Papers",
      description: "In-depth research, lead magnets, authority building", 
      metrics: "40% email signup conversion"
    },
    {
      icon: Target,
      title: "Landing Pages",
      description: "Conversion-optimized copy, A/B tested headlines",
      metrics: "250% conversion rate improvement"
    },
    {
      icon: Globe,
      title: "Social Content",
      description: "Platform-specific, engagement-driven",
      metrics: "400% engagement increase"
    },
    {
      icon: Mail,
      title: "Email Sequences",
      description: "Nurture campaigns, automation-ready",
      metrics: "60% open rate average"
    },
    {
      icon: Video,
      title: "Video Scripts",
      description: "YouTube, webinars, product demos",
      metrics: "80% completion rate"
    },
    {
      icon: Presentation,
      title: "Sales Collaterals",
      description: "Presentations, one-pagers, proposals",
      metrics: "45% close rate improvement"
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
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground">
                <span className="text-primary">Content Performance</span>
                <br />
                Content Không Chỉ Đẹp, Còn Phải <span className="text-accent">Bán</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Data-driven content strategy giúp 200+ brands tăng 400% organic traffic, 250% lead generation. 
                Every content piece được measure & optimize.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow">
                  Nhận Content Audit Miễn Phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="tech-border">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Xem Demo Dashboard
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">400%</div>
                  <div className="text-sm text-muted-foreground">Traffic Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">250%</div>
                  <div className="text-sm text-muted-foreground">Lead Generation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Brands Served</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Live Performance Dashboard</h3>
                  <div className="text-sm text-muted-foreground">Real client metrics</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-card">
                    <div className="text-lg font-bold text-primary">127%</div>
                    <div className="text-xs text-muted-foreground">Traffic Growth</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-card">
                    <div className="text-lg font-bold text-accent">85%</div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-card">
                    <div className="text-lg font-bold text-primary">340%</div>
                    <div className="text-xs text-muted-foreground">Lead Quality</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-card">
                    <div className="text-lg font-bold text-accent">420%</div>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Tại Sao <span className="text-destructive">Content Của Bạn</span> Không Convert?
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
                    <div className="text-destructive">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{problem.title}</h3>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Methodology: <span className="text-primary">Data-Driven Content Strategy</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Chuyên Môn Sâu <span className="text-accent">Theo Ngành</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Success Stories: <span className="text-destructive">Numbers Don't Lie</span>
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
                
                <Button variant="outline" className="w-full mt-6 tech-border">
                  View Full Case Study
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
                      Most Popular
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
                  {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Audit Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            <span className="text-destructive">Miễn Phí:</span> Content Performance Audit Cho Website Của Bạn
          </h2>
          
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-foreground">Audit Includes:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Search className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">SEO Analysis</div>
                      <div className="text-sm text-muted-foreground">Keyword gaps, technical issues</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                    <div>
                      <div className="font-semibold text-foreground">Content Gap Analysis</div>
                      <div className="text-sm text-muted-foreground">Missing topics, competitor comparison</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 mt-1 flex-shrink-0 text-destructive" />
                    <div>
                      <div className="font-semibold text-foreground">Performance Review</div>
                      <div className="text-sm text-muted-foreground">Traffic, engagement, conversion metrics</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Strategy Recommendations</div>
                      <div className="text-sm text-muted-foreground">90-day action plan</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Get Your Free Audit</h3>
                <div className="space-y-4">
                  <div>
                    <Label>Website URL</Label>
                    <Input
                      placeholder="https://yourwebsite.com"
                      value={auditForm.website}
                      onChange={(e) => setAuditForm({...auditForm, website: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>Industry</Label>
                    <Select value={auditForm.industry} onValueChange={(value) => setAuditForm({...auditForm, industry: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saas">SaaS/Tech</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="b2b">B2B Services</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Current Monthly Traffic</Label>
                    <Input
                      placeholder="e.g., 10,000"
                      value={auditForm.currentTraffic}
                      onChange={(e) => setAuditForm({...auditForm, currentTraffic: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>Primary Goals</Label>
                    <Input
                      placeholder="e.g., increase leads, improve SEO"
                      value={auditForm.goals}
                      onChange={(e) => setAuditForm({...auditForm, goals: e.target.value})}
                    />
                  </div>
                  
                  <ContactForm 
                    service="content"
                    title="Nhận Content Audit Miễn Phí"
                    description="Chia sẻ website và mục tiêu content, chúng tôi sẽ audit toàn diện và đưa ra strategy trong 48h."
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentService;