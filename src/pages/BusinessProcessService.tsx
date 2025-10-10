import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Shield,
  BarChart3,
  Workflow,
  Clock,
  Users,
  FileText,
  PlayCircle,
  Download,
  GitBranch,
  Settings,
  Brain,
  Zap,
  AlertCircle,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const BusinessProcessService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Process Automation - Consulting & Process Optimization",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Consulting and operational process optimization services. AS-IS/TO-BE analysis, KPI/SLA definition, data flow mapping, and comprehensive automation blueprint design.",
    areaServed: "Vietnam",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://d2group.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://d2group.co/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Business Process Optimization",
      },
    ],
  };

  const features = [
    {
      icon: FileText,
      title: "Current State Process Analysis",
      description:
        "Comprehensive assessment of existing processes (AS-IS) to identify bottlenecks and improvement opportunities.",
    },
    {
      icon: GitBranch,
      title: "TO-BE Flowchart Design",
      description: "Design optimized future-state process flowcharts with automation, eliminating redundant steps.",
    },
    {
      icon: Target,
      title: "KPI & SLA Definition",
      description: "Establish clear Key Performance Indicators and Service Level Agreements to measure success.",
    },
    {
      icon: Workflow,
      title: "Data Flow Mapping",
      description: "Map data flows between systems to ensure seamless and reliable integration.",
    },
    {
      icon: Shield,
      title: "Master Automation Blueprint",
      description: "Design a comprehensive automation architecture for your entire business process landscape.",
    },
    {
      icon: BarChart3,
      title: "ROI & Business Case",
      description: "Calculate the return on investment and build a compelling business case for automation.",
    },
  ];

  const analysisFramework = [
    {
      phase: "Current State Analysis (AS-IS)",
      activities: [
        "Process mapping workshops",
        "Stakeholder interviews",
        "Pain point identification",
        "Bottleneck analysis",
        "Time & cost assessment",
      ],
    },
    {
      phase: "Future State Design (TO-BE)",
      activities: [
        "Process redesign workshops",
        "Automation opportunity identification",
        "Workflow optimization",
        "Technology selection",
        "Integration architecture",
      ],
    },
    {
      phase: "Gap Analysis & Roadmap",
      activities: [
        "Gap identification",
        "Prioritization matrix",
        "Implementation roadmap",
        "Resource planning",
        "Risk assessment",
      ],
    },
    {
      phase: "KPI & Measurement Framework",
      activities: [
        "KPI definition",
        "SLA establishment",
        "Dashboard design",
        "Monitoring setup",
        "Continuous improvement plan",
      ],
    },
  ];

  const processAreas = [
    {
      area: "Sales Process",
      improvements: ["Lead routing automation", "Proposal generation", "Contract workflow", "Pipeline tracking"],
      impact: "60% faster deal closure",
    },
    {
      area: "Customer Service",
      improvements: ["Ticket routing", "SLA monitoring", "Escalation workflows", "Customer feedback loop"],
      impact: "40% reduction in response time",
    },
    {
      area: "Finance & Accounting",
      improvements: ["Invoice processing", "Expense approval", "Budget tracking", "Financial reporting"],
      impact: "70% reduction in processing time",
    },
    {
      area: "HR & Recruitment",
      improvements: ["Candidate screening", "Onboarding workflows", "Leave management", "Performance reviews"],
      impact: "50% faster onboarding",
    },
    {
      area: "Supply Chain",
      improvements: ["Procurement automation", "Inventory management", "Order fulfillment", "Supplier coordination"],
      impact: "80% inventory accuracy",
    },
    {
      area: "IT Operations",
      improvements: ["Incident management", "Change requests", "Asset tracking", "User provisioning"],
      impact: "90% faster resolution",
    },
  ];

  const methodologies = [
    { name: "Lean Six Sigma", description: "Eliminate waste and reduce process variation." },
    { name: "Business Process Reengineering", description: "Fundamentally redesign processes from the ground up." },
    { name: "Agile Process Improvement", description: "Iterative improvements in short sprints." },
    { name: "Value Stream Mapping", description: "Analyze the end-to-end value delivery chain." },
  ];

  const deliverables = [
    "AS-IS Process Documentation",
    "TO-BE Process Flowcharts",
    "Gap Analysis Report",
    "KPI & SLA Framework",
    "Data Flow Diagrams",
    "Automation Blueprint",
    "Implementation Roadmap",
    "ROI Calculator",
    "Change Management Plan",
    "Training Materials",
  ];

  const pricingOptions = [
    {
      name: "Single Process",
      price: "25,000,000đ",
      description: "For 1 core process",
      features: ["AS-IS & TO-BE analysis", "KPI framework", "Basic blueprint", "2-3 weeks of consulting"],
    },
    {
      name: "Department-Wide",
      price: "60,000,000đ",
      description: "For an entire department",
      features: ["Multiple process analysis", "Comprehensive KPIs", "Detailed blueprint", "4-6 weeks of consulting"],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "For the whole organization",
      features: ["End-to-end analysis", "Organization-wide KPIs", "Master blueprint", "Flexible timeline"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Business Process Automation - Consulting & Business Process Optimization"
        description="Professional business process consulting services. AS-IS/TO-BE analysis, flowchart design, KPI/SLA definition, data flow mapping, and automation blueprint construction."
        keywords="business process consulting, business process automation, AS-IS TO-BE analysis, flowchart design, KPI SLA definition, data flow mapping, automation blueprint"
        canonicalUrl="/services/business-process"
        structuredData={[structuredData, breadcrumbStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                <span className="text-primary">Business Process Automation</span>
                <br />
                <span className="text-foreground">Consulting & Operational Process Optimization</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive current-state analysis, optimal process design (AS-IS/TO-BE), KPI & SLA definition, and
                data flow mapping between systems. We build a master blueprint to ensure effective and sustainable
                automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                  Consult on a Process
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                  Download Framework
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Processes Optimized</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">70%</div>
                  <div className="text-sm text-muted-foreground">Average Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3x</div>
                  <div className="text-sm text-muted-foreground">Average ROI</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="gradient-card p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Process Maturity Model</h3>
                <div className="space-y-4">
                  {[
                    { level: "Initial (Ad-hoc)", score: 25 },
                    { level: "Managed (Documented)", score: 50 },
                    { level: "Defined (Standardized)", score: 75 },
                    { level: "Optimized (Automated)", score: 95 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.level}</span>
                        <span className="text-primary font-bold">{item.score}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${item.score}%` }}
                        />
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
            Our <span className="text-primary">Process Consulting</span> Methodology
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

      {/* Analysis Framework */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our 4-Step <span className="text-primary">Analysis Framework</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analysisFramework.map((phase, index) => (
              <Card key={index} className="gradient-card p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold">{phase.phase}</h3>
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

      {/* Process Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Process Areas</span> We Optimize
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processAreas.map((area, index) => (
              <Card
                key={index}
                className="gradient-card p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{area.area}</h3>
                <ul className="space-y-2 mb-4">
                  {area.improvements.map((improvement, impIndex) => (
                    <li key={impIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-semibold">{area.impact}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Process Improvement <span className="text-primary">Methodologies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <Card key={index} className="gradient-card p-6 text-center">
                <h3 className="text-lg font-bold mb-2">{method.name}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key <span className="text-primary">Deliverables</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((deliverable, index) => (
              <Card key={index} className="gradient-card p-4">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span className="font-medium">{deliverable}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Process Consulting <span className="text-primary">Packages</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card key={index} className={`gradient-card p-8 ${index === 1 ? "border-primary border-2" : ""}`}>
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
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact for Consultation
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Optimize <span className="text-primary">Your Processes?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free workshop to analyze your company's current business processes.
          </p>
          <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
            Schedule a Workshop
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessProcessService;
