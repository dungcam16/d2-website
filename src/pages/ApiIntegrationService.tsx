import React, { useState } from "react";
import {
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  Shield,
  CheckCircle,
  Star,
  BarChart3,
  Zap,
  Globe,
  Award,
  Clock,
  Users,
  Monitor,
  Database,
  Settings,
  Link,
  FileText,
  AlertTriangle,
  Smartphone,
  Gauge,
  MapPin,
  Brain,
  Eye,
  Filter,
  Download,
  Lightbulb,
  Trophy,
  Building,
  ShoppingCart,
  Heart,
  Code,
  Home,
  Briefcase,
  PlayCircle,
  Calculator,
  GitBranch,
  Server,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ApiIntegrationService = () => {
  const [roiInputs, setRoiInputs] = useState({
    employees: 100,
    hourlyCost: 50,
    hoursPerWeek: 10,
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "N8N Automation Services - Business Process Automation",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Professional N8N services and enterprise N8N implementation. Vietnam's leading N8N automation agency offering process automation solutions and N8N workflow development.",
    offers: {
      "@type": "Offer",
      price: "150000000",
      priceCurrency: "VND",
    },
    areaServed: "Vietnam",
  };

  const calculateROI = () => {
    const annualSavings = roiInputs.employees * roiInputs.hourlyCost * roiInputs.hoursPerWeek * 52;
    const implementationCost = 150000; // Average implementation cost in USD
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = (implementationCost / (annualSavings / 12)).toFixed(1);

    return {
      annualSavings: annualSavings.toLocaleString(),
      roi: roi.toFixed(0),
      paybackMonths,
    };
  };

  const challenges = [
    {
      icon: GitBranch,
      title: "Siloed & Disconnected Tools",
      description: "Data is scattered across various disparate systems.",
    },
    {
      icon: Clock,
      title: "Time-Consuming Manual Processes",
      description: "90% of repetitive tasks can be automated.",
    },
    {
      icon: Database,
      title: "Departmental Data Silos",
      description: "Lack of real-time information for decision-making.",
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Difficulty controlling access and maintaining audit trails.",
    },
    {
      icon: TrendingUp,
      title: "Limited Scalability",
      description: "Current systems cannot keep up with business growth.",
    },
    {
      icon: Code,
      title: "Strained Developer Resources",
      description: "Engineering teams are overloaded with integration tasks.",
    },
  ];

  const solutions = [
    {
      icon: Server,
      title: "Self-Hosted Control",
      description: "Deploy on-premise or in your private cloud. Full control over data and infrastructure.",
    },
    {
      icon: Workflow,
      title: "800+ Native Integrations",
      description: "APIs, databases, SaaS tools. Connect everything in your business ecosystem.",
    },
    {
      icon: Monitor,
      title: "Visual Workflow Builder",
      description: "No-code for non-technical users. Drag-and-drop interface to build automations.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SSO, RBAC, audit logs. Meet the highest security standards.",
    },
    {
      icon: Zap,
      title: "Unlimited Executions",
      description: "No usage limits like Zapier. Scale without worrying about pricing tiers.",
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Build proprietary connectors. Support for legacy systems and custom APIs.",
    },
  ];

  const departments = [
    {
      name: "IT Operations",
      useCases: ["Server Monitoring", "Automated Provisioning", "Incident Response", "Automated Backups"],
    },
    {
      name: "Sales",
      useCases: ["Lead Routing", "CRM Updates", "Proposal Generation", "Pipeline Management"],
    },
    {
      name: "Marketing",
      useCases: ["Campaign Automation", "Lead Scoring", "Content Distribution", "Performance Tracking"],
    },
    {
      name: "Human Resources",
      useCases: ["Onboarding Workflows", "Leave Approvals", "Performance Reviews", "Recruitment Automation"],
    },
    {
      name: "Finance",
      useCases: ["Invoice Processing", "Expense Approvals", "Budget Tracking", "Compliance Reporting"],
    },
    {
      name: "Customer Success",
      useCases: ["Ticket Routing", "Satisfaction Surveys", "Renewal Processes", "Support Escalation"],
    },
  ];

  const integrationCategories = [
    { name: "CRM", tools: ["Salesforce", "HubSpot", "Pipedrive"] },
    { name: "ERP", tools: ["SAP", "Oracle", "Microsoft Dynamics"] },
    { name: "Cloud", tools: ["AWS", "GCP", "Azure services"] },
    { name: "Databases", tools: ["PostgreSQL", "MySQL", "MongoDB"] },
    { name: "Communication", tools: ["Slack", "Teams", "Discord"] },
    { name: "Development", tools: ["GitHub", "GitLab", "Jira"] },
  ];

  const enterpriseFeatures = [
    { feature: "User Management", standard: "Limited users", enterprise: "Unlimited Users, RBAC" },
    { feature: "Execution Limits", standard: "Usage caps", enterprise: "Unlimited Executions" },
    { feature: "Data Retention", standard: "30 days", enterprise: "Unlimited Retention" },
    { feature: "Support", standard: "Community", enterprise: "24/7 Dedicated Support" },
    { feature: "SLA", standard: "Best effort", enterprise: "99.9% Uptime Guarantee" },
    { feature: "Compliance", standard: "Basic", enterprise: "SOC2, GDPR, HIPAA ready" },
  ];

  const implementationPhases = [
    {
      phase: "Discovery & Planning",
      duration: "2 Weeks",
      description: "Requirements gathering, architecture design, security planning.",
    },
    {
      phase: "Setup & Configuration",
      duration: "2 Weeks",
      description: "Infrastructure setup, security implementation, initial configuration.",
    },
    {
      phase: "Migration & Testing",
      duration: "3 Weeks",
      description: "Legacy workflow migration, end-to-end testing, performance tuning.",
    },
    {
      phase: "Training & Go-Live",
      duration: "1 Week",
      description: "User training, documentation handover, production deployment.",
    },
  ];

  const pricingModels = [
    {
      name: "Per User/Month",
      price: "$50",
      description: "Ideal for teams with a defined number of users.",
    },
    {
      name: "Site-Wide License",
      price: "Fixed Price",
      description: "Unlimited users, perfect for large organizations.",
    },
    {
      name: "Usage-Based",
      price: "Per Execution",
      description: "Pay based on actual workflow execution volume.",
    },
    {
      name: "Custom Enterprise",
      price: "Tailored",
      description: "Flexible pricing based on specific requirements.",
    },
  ];

  const securityFeatures = [
    { name: "Data Encryption", description: "AES-256 encryption at rest and in transit." },
    { name: "Access Control", description: "SSO, MFA, and role-based access controls." },
    { name: "Audit Logs", description: "Complete activity tracking and compliance reporting." },
    { name: "Compliance", description: "SOC2 Type II, ISO 27001, and HIPAA-ready." },
    { name: "Network Security", description: "VPN support, firewall rules, and IP whitelisting." },
    { name: "Data Residency", description: "Choose data storage location for regulatory needs." },
  ];

  const roiResults = calculateROI();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Professional N8N Services - Enterprise N8N Implementation"
        description="Vietnam's leading N8N automation agency. Professional N8N services, enterprise N8N implementation, process automation with N8N, workflow building, and system integration."
        keywords="n8n services, n8n for enterprise, process automation with n8n, n8n consulting company, n8n automation agency, build n8n workflow, self-hosted n8n services, n8n automation solutions, system integration with n8n"
        canonicalUrl="/services/api-integration"
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                <span className="text-primary">Professional N8N Services</span>
                <br />
                <span className="text-foreground">Enterprise N8N Implementation & Process Automation</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Vietnam's leading N8N automation agency. Professional N8N consulting with 800+ integrations, N8N
                workflow development, and self-hosted N8N solutions. Reduce 90% of manual work, and boost engineering
                productivity by 60%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                  Book a Free N8N Consultation
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                  Download N8N Architecture Guide
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
                  <div className="text-sm text-muted-foreground">Operations</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="gradient-card p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Automation Dashboard</h3>
                  <div className="text-sm text-muted-foreground">Real-time workflow metrics</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">98.5%</div>
                    <div className="text-xs">Uptime</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">60%</div>
                    <div className="text-xs">Productivity Boost</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">90%</div>
                    <div className="text-xs">Automation Rate</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold text-primary">24/7</div>
                    <div className="text-xs">Operation</div>
                  </div>
                </div>

                <div className="h-32 rounded-lg bg-muted/30 flex items-center justify-center">
                  <div className="text-center text-sm text-muted-foreground">
                    📊 Business Process Dashboard
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
            Challenges Facing <span className="text-primary">Enterprises</span> Today
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
            Why <span className="text-primary">N8N</span> is the #1 Choice for Enterprises
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
            Automation Use Cases By <span className="text-primary">Department</span>
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
            Connect With Your <span className="text-primary">Tech Ecosystem</span>
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
            Features Tailored for <span className="text-primary">Enterprise</span>
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
                <h3 className="text-xl font-bold mb-6">Enter Your Data</h3>
                <div className="space-y-4">
                  <div>
                    <Label>Number of Employees</Label>
                    <Input
                      type="number"
                      value={roiInputs.employees}
                      onChange={(e) => setRoiInputs({ ...roiInputs, employees: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <Label>Average Hourly Cost ($)</Label>
                    <Input
                      type="number"
                      value={roiInputs.hourlyCost}
                      onChange={(e) => setRoiInputs({ ...roiInputs, hourlyCost: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <Label>Hours Saved Per Week</Label>
                    <Input
                      type="number"
                      value={roiInputs.hoursPerWeek}
                      onChange={(e) => setRoiInputs({ ...roiInputs, hoursPerWeek: parseInt(e.target.value) || 0 })}
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
            Implementation & <span className="text-primary">Support</span> Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationPhases.map((phase, index) => (
              <Card
                key={index}
                className="gradient-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold mb-4 text-primary">{String(index + 1).padStart(2, "0")}</div>
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
            <span className="text-primary">Enterprise Security</span> & Compliance
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
                See the <span className="text-primary">Automation Solution</span> in Action with Your Real Data
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a technical consultation with an enterprise architect. Free Proof of Concept (POC) for
                qualified prospects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Free POC for qualified prospects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Includes technical consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Enterprise architecture review</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule a Technical Consultation
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

export default ApiIntegrationService;
