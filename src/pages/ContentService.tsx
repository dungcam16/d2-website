import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Target,
  Users,
  CheckCircle,
  Star,
  TrendingUp,
  FileText,
  Search,
  Lightbulb,
  Calculator,
  Globe,
  Edit,
  Video,
  Mail,
  Presentation,
  Clock,
  Award,
  Zap,
  Brain,
  Monitor,
  Database,
  LineChart,
  AlertCircle,
  PlayCircle,
  Download,
  PieChart,
  Activity,
  Layers,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ContentService = () => {
  const [auditForm, setAuditForm] = useState({
    website: "",
    industry: "",
    currentTraffic: "",
    goals: "",
  });

  const [calculatorInputs, setCalculatorInputs] = useState({
    monthlyTraffic: 10000,
    conversionRate: 2,
    averageOrderValue: 100,
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content Marketing Services",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Professional content marketing services, leading content marketing agency. Content writing services, content creation outsourcing, and comprehensive content marketing solutions for businesses.",
    offers: {
      "@type": "Offer",
      price: "12000000",
      priceCurrency: "VND",
    },
  };

  const calculateContentROI = () => {
    const currentRevenue =
      calculatorInputs.monthlyTraffic * (calculatorInputs.conversionRate / 100) * calculatorInputs.averageOrderValue;
    const projectedTraffic = calculatorInputs.monthlyTraffic * 4; // 400% increase
    const projectedConversion = calculatorInputs.conversionRate * 2.5; // 250% increase
    const projectedRevenue = projectedTraffic * (projectedConversion / 100) * calculatorInputs.averageOrderValue;
    const monthlyGain = projectedRevenue - currentRevenue;

    return {
      currentRevenue: currentRevenue.toLocaleString(),
      projectedRevenue: projectedRevenue.toLocaleString(),
      monthlyGain: monthlyGain.toLocaleString(),
      annualGain: (monthlyGain * 12).toLocaleString(),
    };
  };

  const contentProblems = [
    {
      icon: AlertCircle,
      title: "Content Creation Based on Guesswork",
      description: "No data-driven insights to support content decisions",
    },
    {
      icon: BarChart3,
      title: "No Performance Metrics Tracking",
      description: "Unable to identify what content works and what doesn't",
    },
    {
      icon: Search,
      title: "SEO vs. User Experience Conflict",
      description: "Content optimized for search engines but not user-friendly",
    },
    {
      icon: Target,
      title: "Content Misaligned with Sales Funnel",
      description: "Missing content for each stage of the customer journey",
    },
    {
      icon: Layers,
      title: "Lack of Content Repurposing Strategy",
      description: "Wasted resources from ineffective content reuse",
    },
    {
      icon: Calculator,
      title: "Unmeasurable ROI",
      description: "Unable to attribute revenue to content efforts",
    },
  ];

  const methodology = [
    {
      icon: Database,
      title: "Research & Analysis",
      description: "Keyword research, competitor analysis, audience insights",
      details: [
        "Competitive Content Gap Analysis",
        "Search Intent Mapping",
        "Audience Persona Development",
        "Content Opportunity Identification",
      ],
    },
    {
      icon: Brain,
      title: "Strategic Planning",
      description: "Content calendar, funnel mapping, topic clustering",
      details: [
        "Content Pillar Development",
        "Editorial Calendar Planning",
        "Funnel Stage Mapping",
        "Topic Cluster Architecture",
      ],
    },
    {
      icon: Edit,
      title: "Content Creation",
      description: "SEO-optimized writing, conversion-focused approach",
      details: [
        "SEO-Optimized Copywriting",
        "Visual Content Creation",
        "Multi-Format Adaptation",
        "Brand Voice Consistency",
      ],
    },
    {
      icon: LineChart,
      title: "Performance Optimization",
      description: "A/B testing, continuous improvement",
      details: [
        "Headline A/B Testing",
        "Content Performance Analysis",
        "Continuous Optimization",
        "ROI Attribution Tracking",
      ],
    },
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: "Blog Articles",
      description: "SEO-optimized, 2000+ words, thought leadership",
      metrics: "Average 300% traffic increase",
    },
    {
      icon: Award,
      title: "Case Studies",
      description: "Results-focused storytelling, customer success stories",
      metrics: "85% lead quality rate",
    },
    {
      icon: Presentation,
      title: "White Papers",
      description: "In-depth research, lead magnets, authority building",
      metrics: "40% email signup conversion",
    },
    {
      icon: Target,
      title: "Landing Pages",
      description: "Conversion-optimized copy, A/B tested headlines",
      metrics: "250% conversion rate improvement",
    },
    {
      icon: Globe,
      title: "Social Media Content",
      description: "Platform-specific, engagement-driven",
      metrics: "400% engagement increase",
    },
    {
      icon: Mail,
      title: "Email Sequences",
      description: "Nurture campaigns, automation-ready",
      metrics: "Average 60% open rate",
    },
    {
      icon: Video,
      title: "Video Scripts",
      description: "YouTube, webinars, product demos",
      metrics: "80% completion rate",
    },
    {
      icon: Presentation,
      title: "Sales Collateral",
      description: "Pitch decks, one-pagers, proposals",
      metrics: "45% close rate improvement",
    },
  ];

  const performanceMetrics = [
    { metric: "+400%", label: "Organic Traffic Growth", description: "within 6 months", color: "text-foreground" },
    { metric: "+250%", label: "Lead Generation", description: "qualified leads", color: "text-foreground" },
    { metric: "85%", label: "Engagement Rate", description: "time on page", color: "text-foreground" },
    { metric: "8.5%", label: "Conversion Rate", description: "content to leads", color: "text-foreground" },
    { metric: "65%", label: "Brand Awareness", description: "share of voice", color: "text-foreground" },
    { metric: "420%", label: "ROI Attribution", description: "tracked revenue", color: "text-foreground" },
  ];

  const industries = [
    {
      name: "SaaS/Technology",
      description: "Product content, technical blogs, developer resources",
      specialties: ["API Documentation", "Product Tours", "Technical Reports", "Developer Guides"],
    },
    {
      name: "E-commerce",
      description: "Product descriptions, buying guides, reviews",
      specialties: ["Product Descriptions", "Buying Guides", "Customer Reviews", "Category Pages"],
    },
    {
      name: "B2B Services",
      description: "Thought leadership, case studies, white papers",
      specialties: ["Industry Reports", "Case Studies", "Solution Guides", "Leadership Content"],
    },
    {
      name: "Healthcare",
      description: "Compliance-ready, educational content",
      specialties: ["Medical Content", "Patient Education", "Compliance Documentation", "Health Guides"],
    },
    {
      name: "Finance",
      description: "Regulatory compliance, trust-building",
      specialties: ["Financial Planning", "Investment Guides", "Regulatory Content", "Market Analysis"],
    },
    {
      name: "Education",
      description: "Course content, student resources",
      specialties: ["Course Materials", "Student Guides", "Educational Videos", "Learning Resources"],
    },
  ];

  const workflow = [
    {
      step: 1,
      title: "Content Strategy & Planning",
      duration: "Week 1",
      description: "Competitor analysis, audience research, content pillars",
    },
    {
      step: 2,
      title: "Keyword Research & Topic Ideation",
      duration: "Week 1",
      description: "Search intent analysis, content gap identification",
    },
    {
      step: 3,
      title: "Content Brief Creation",
      duration: "Week 2",
      description: "Detailed outlines, SEO requirements, brand guidelines",
    },
    {
      step: 4,
      title: "Writing & Production",
      duration: "Week 2-3",
      description: "Content production, visual design, multimedia integration",
    },
    {
      step: 5,
      title: "SEO Optimization",
      duration: "Week 3",
      description: "Technical SEO, meta optimization, schema markup",
    },
    {
      step: 6,
      title: "Review & Approval",
      duration: "Week 4",
      description: "Quality assurance, brand compliance, stakeholder approval",
    },
    {
      step: 7,
      title: "Publication & Promotion",
      duration: "Week 4",
      description: "Multi-channel distribution, social amplification",
    },
    {
      step: 8,
      title: "Performance Monitoring",
      duration: "Ongoing",
      description: "Analytics monitoring, performance optimization",
    },
  ];

  const tools = [
    { category: "Research", tools: ["SEMrush", "Ahrefs", "Google Analytics"], color: "text-foreground" },
    { category: "Planning", tools: ["ContentKing", "CoSchedule", "Asana"], color: "text-foreground" },
    { category: "Creation", tools: ["Grammarly", "Hemingway", "Canva Pro"], color: "text-foreground" },
    { category: "SEO", tools: ["Yoast", "Schema markup", "Core Web Vitals"], color: "text-foreground" },
    { category: "Analytics", tools: ["Google Analytics 4", "Search Console", "Hotjar"], color: "text-foreground" },
    { category: "Automation", tools: ["Buffer", "Hootsuite", "Zapier"], color: "text-foreground" },
  ];

  const caseStudies = [
    {
      title: "SaaS Startup: From 0 to 50K Monthly Traffic",
      duration: "8 months",
      results: ["50K monthly organic visitors", "300% trial signup increase", "85% lead quality rate"],
      strategy: "Technical content, SEO optimization, developer-focused resources",
    },
    {
      title: "E-commerce: 300% Product Page Conversions",
      duration: "6 months",
      results: ["300% conversion improvement", "250% average order value increase", "40% bounce rate reduction"],
      strategy: "Product content optimization, buying guides, customer reviews",
    },
    {
      title: "B2B Agency: 5X Lead Generation",
      duration: "12 months",
      results: ["500% lead generation increase", "Thought leadership positioning", "3x speaking opportunities"],
      strategy: "Thought leadership content, industry reports, executive positioning",
    },
  ];

  const packages = [
    {
      name: "STARTER",
      price: "8M",
      period: "/month",
      description: "Perfect for SMBs starting their content journey",
      features: [
        "4 SEO-optimized blog posts",
        "Basic content strategy",
        "Monthly performance reports",
        "Social media adaptation",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "GROWTH",
      price: "15M",
      period: "/month",
      description: "Comprehensive solution for growing businesses",
      features: [
        "8 blog posts + advanced SEO",
        "Social media content calendar",
        "Email sequence templates",
        "Bi-weekly performance reviews",
        "Video script writing",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "SCALE",
      price: "25M",
      period: "/month",
      description: "Enterprise-level content operations",
      features: [
        "12 long-form articles",
        "Video content scripts",
        "Automated email sequences",
        "Landing page copy",
        "Weekly strategy calls",
        "A/B testing & optimization",
      ],
      popular: false,
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: "",
      description: "Dedicated content team for large organizations",
      features: [
        "Unlimited content production",
        "Dedicated content manager",
        "Multi-language support",
        "Custom content types",
        "Real-time performance dashboard",
        "24/7 support",
      ],
      popular: false,
    },
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
                <span className="text-primary">Performance Content</span>
                <br />
                Content That Doesn't Just Look Good, It <span className="text-primary">Sells</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Data-driven content strategy that helped 200+ brands achieve 400% organic traffic growth and 250% lead
                generation. Every piece of content is measured and optimized.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                  Get Free Content Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="tech-border"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  View Dashboard Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">400%</div>
                  <div className="text-sm text-muted-foreground">Traffic growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">250%</div>
                  <div className="text-sm text-muted-foreground">Lead generation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Brands served</div>
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
                    <div className="text-xs text-muted-foreground">Traffic growth</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-card">
                    <div className="text-lg font-bold text-primary">85%</div>
                    <div className="text-xs text-muted-foreground">Conversion rate</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-card">
                    <div className="text-lg font-bold text-primary">340%</div>
                    <div className="text-xs text-muted-foreground">Lead quality</div>
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
            Why Your <span className="text-primary">Content</span> Isn't Converting?
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive <span className="text-primary">Content Services</span>
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
                    <div className="text-xs font-medium p-2 rounded bg-muted text-foreground">{type.metrics}</div>
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
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl font-bold mb-2 text-primary">{metric.metric}</div>
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
                      onChange={(e) =>
                        setCalculatorInputs({ ...calculatorInputs, monthlyTraffic: parseInt(e.target.value) || 0 })
                      }
                    />
                  </div>
                  <div>
                    <Label>Conversion Rate (%)</Label>
                    <Input
                      type="number"
                      value={calculatorInputs.conversionRate}
                      onChange={(e) =>
                        setCalculatorInputs({ ...calculatorInputs, conversionRate: parseFloat(e.target.value) || 0 })
                      }
                    />
                  </div>
                  <div>
                    <Label>Average Order Value ($)</Label>
                    <Input
                      type="number"
                      value={calculatorInputs.averageOrderValue}
                      onChange={(e) =>
                        setCalculatorInputs({ ...calculatorInputs, averageOrderValue: parseInt(e.target.value) || 0 })
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-foreground">Projected Results</h3>
                <div className="space-y-6">
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#f0f9ff" }}>
                    <div className="text-2xl font-bold" style={{ color: "#7c3aed" }}>
                      ${roiResults.currentRevenue}
                    </div>
                    <div className="text-sm text-muted-foreground">Current Monthly Revenue</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#f0fdf4" }}>
                    <div className="text-2xl font-bold" style={{ color: "#059669" }}>
                      ${roiResults.projectedRevenue}
                    </div>
                    <div className="text-sm text-muted-foreground">Projected Monthly Revenue</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#fef2f2" }}>
                    <div className="text-2xl font-bold" style={{ color: "#dc2626" }}>
                      ${roiResults.annualGain}
                    </div>
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
            Deep <span className="text-primary">Industry Expertise</span>
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
            Success Stories: <span className="text-primary">Numbers Don't Lie</span>
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
                  onClick={() => (window.location.href = "/contact")}
                >
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
            <span className="text-primary">Content Performance</span> Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-6 relative ${pkg.popular ? "border-purple-500 shadow-lg" : ""} animate-scale-in`}
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
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => (window.location.href = "/contact")}
                >
                  {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Drive <span className="text-primary">400% Traffic Growth</span> with Quality Content?
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free consultation to discover how content strategy can transform your business. Receive a
            complimentary content audit worth $500.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Free SEO & content audit</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Detailed 90-day action plan</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Strategy consultation with experts</span>
            </div>
          </div>

          <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentService;
