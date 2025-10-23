import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Code,
  GitBranch,
  Settings,
  Monitor,
  Database,
  PlayCircle,
  Download,
  Workflow,
  Clock,
  Shield,
  BarChart3,
  Brain,
  FileText,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WorkflowAutomationService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "N8N Workflow Development - Design and Deployment Services",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Professional N8N workflow design and deployment services. Build triggers, nodes, error handling, sub-workflows with JavaScript/TypeScript.",
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
        name: "N8N Workflow Development",
      },
    ],
  };

  const features = [
    {
      icon: GitBranch,
      title: "Complex Workflow Design",
      description:
        "Build multi-tier workflows with intelligent triggers, optimized nodes and sophisticated branching logic",
    },
    {
      icon: Code,
      title: "JavaScript/TypeScript Scripting",
      description: "Write custom code in Function nodes to handle complex business logic and data transformation",
    },
    {
      icon: AlertCircle,
      title: "Professional Error Handling",
      description: "Implement comprehensive error handling mechanisms, intelligent retry logic and fallback strategies",
    },
    {
      icon: Workflow,
      title: "Sub-Workflows & Reusability",
      description: "Create reusable sub-workflows to optimize maintainability and scalability",
    },
    {
      icon: Monitor,
      title: "Monitoring & Logging",
      description: "Set up real-time monitoring systems and detailed logging for all workflow executions",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize workflow performance with parallel processing, caching and resource management",
    },
  ];

  const workflowTypes = [
    {
      name: "Data Sync Workflows",
      description: "Synchronize data between CRM, ERP, Database systems",
      examples: ["Salesforce → PostgreSQL", "API → Google Sheets", "Multi-system sync"],
    },
    {
      name: "Notification Workflows",
      description: "Automatically send notifications via email, Slack, SMS, webhook",
      examples: ["Alert automation", "Scheduled reports", "Event-based notifications"],
    },
    {
      name: "Data Processing Workflows",
      description: "Process, transform and enrich data from multiple sources",
      examples: ["ETL pipelines", "Data validation", "Format conversion"],
    },
    {
      name: "Integration Workflows",
      description: "Connect and integrate applications and services",
      examples: ["API orchestration", "Webhook handling", "Multi-app workflows"],
    },
  ];

  const technicalCapabilities = [
    { capability: "Custom Triggers", description: "Webhook, Schedule, Polling, Event-based triggers" },
    { capability: "Data Transformation", description: "JSON parsing, XML handling, Data mapping" },
    { capability: "Error Recovery", description: "Automatic retry, Manual intervention, Fallback flows" },
    { capability: "Conditional Logic", description: "IF/Switch nodes, Expression evaluation, Dynamic routing" },
    { capability: "Loop Processing", description: "Batch processing, Item-level loops, Async operations" },
    { capability: "Version Control", description: "Workflow versioning, Rollback capability, Change tracking" },
  ];

  const developmentProcess = [
    {
      phase: "Discovery & Design",
      duration: "3-5 days",
      activities: [
        "Requirements analysis",
        "Workflow diagram design",
        "Triggers & nodes identification",
        "Technical review",
      ],
    },
    {
      phase: "Development",
      duration: "5-10 days",
      activities: ["Workflow construction", "Custom scripting", "Error handling setup", "Testing & debugging"],
    },
    {
      phase: "Testing & QA",
      duration: "3-5 days",
      activities: ["Unit testing", "Integration testing", "Performance testing", "Edge case validation"],
    },
    {
      phase: "Deployment & Monitoring",
      duration: "2-3 days",
      activities: ["Production deployment", "Monitoring setup", "Documentation", "Team handover"],
    },
  ];

  const pricingOptions = [
    {
      name: "Simple Workflow",
      price: "$600",
      description: "5-10 nodes, basic logic",
      features: ["Single trigger", "Basic error handling", "Standard integrations", "1 week deployment"],
    },
    {
      name: "Complex Workflow",
      price: "$1,400",
      description: "20-50 nodes, advanced logic",
      features: ["Multiple triggers", "Advanced error handling", "Custom scripting", "2-3 weeks deployment"],
    },
    {
      name: "Enterprise Workflow",
      price: "Custom",
      description: "50+ nodes, mission-critical",
      features: ["Complex architecture", "High availability", "Custom monitoring", "Flexible timeline"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="N8N Workflow Development - Professional Workflow Design and Deployment"
        description="Professional N8N workflow design and deployment services. Build triggers, nodes, error handling, sub-workflows with JavaScript/TypeScript. Custom scripting and performance optimization."
        keywords="n8n workflow development, n8n workflow design, n8n workflow deployment, n8n custom scripting, n8n function nodes, n8n error handling, n8n sub-workflows"
        canonicalUrl="/services/workflow-automation"
        structuredData={[structuredData, breadcrumbStructuredData]}
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
                <span className="text-foreground">Professional Workflow Design & Deployment</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Build complex automation workflows on the N8N platform with intelligent triggers, comprehensive error
                handling, and custom JavaScript/TypeScript scripting. Optimize processes and enhance business
                operational efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                  Workflow Consultation
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                  Download Case Studies
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
                  {["Trigger Setup", "Data Processing", "Error Handling", "Output & Logging"].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{step}</div>
                        <div className="h-2 bg-muted rounded-full mt-1">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${100 - index * 15}%` }} />
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
            <span className="text-primary">Workflow Development</span> Capabilities
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
            <span className="text-primary">Workflow Types</span> We Deploy
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
            <span className="text-primary">Technical</span> Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCapabilities.map((item, index) => (
              <Card key={index} className="gradient-card p-6">
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
            <span className="text-primary">Development</span> Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((phase, index) => (
              <Card key={index} className="gradient-card p-6">
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
            <span className="text-primary">Workflow Development</span> Pricing
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build <span className="text-primary">Your Workflows?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free consultation to discuss your workflow needs
          </p>
          <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
            Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkflowAutomationService;
