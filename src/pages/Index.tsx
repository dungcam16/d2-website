import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Workflow, 
  Zap, 
  Brain, 
  Database, 
  MessageSquare, 
  Globe, 
  ArrowRight,
  Layers,
  GitBranch,
  Play,
  CheckCircle2
} from "lucide-react";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "D2 Group - AI Automation Agency",
    description: "We build AI-powered workflows, RAG systems, and SaaS products for remote teams in the US, Australia, and Europe. Specializing in n8n automation and LLM integration.",
    url: "https://d2group.co",
    sameAs: ["https://facebook.com/d2group", "https://linkedin.com/company/d2group"],
    serviceArea: {
      "@type": "Place",
      name: "Global - US, Australia, Europe"
    },
  };

  const workflowCategories = [
    {
      id: "automation",
      label: "Automation Workflows",
      icon: Workflow,
      description: "Pre-built automation workflows ready to deploy",
      workflows: [
        {
          title: "Sales Pipeline Automation",
          description: "Automatically sync leads from forms → CRM → Email sequences",
          nodes: ["Form Trigger", "Data Validation", "CRM Integration", "Email Automation"],
          tags: ["Sales", "CRM", "Email"],
        },
        {
          title: "Customer Support Bot",
          description: "AI-powered chatbot with ticket creation and routing",
          nodes: ["Chat Interface", "AI Agent", "Ticket System", "Team Routing"],
          tags: ["Support", "AI", "Chatbot"],
        },
        {
          title: "Social Media Publisher",
          description: "Schedule and publish content across multiple platforms",
          nodes: ["Content Queue", "Image Processor", "Multi-Platform API", "Analytics"],
          tags: ["Marketing", "Social Media"],
        },
      ],
    },
    {
      id: "ai-workflows",
      label: "AI Workflows",
      icon: Brain,
      description: "Advanced AI-powered automation workflows",
      workflows: [
        {
          title: "Document Intelligence",
          description: "Extract, analyze, and categorize documents using AI",
          nodes: ["Document Upload", "OCR Processing", "AI Analysis", "Data Export"],
          tags: ["AI", "Documents", "RAG"],
        },
        {
          title: "Content Generator",
          description: "Generate blog posts, social content, and marketing copy",
          nodes: ["Topic Input", "AI Generation", "Content Review", "Multi-Channel Publishing"],
          tags: ["AI", "Content", "Marketing"],
        },
        {
          title: "Data Enrichment",
          description: "Enrich customer data with AI-powered insights",
          nodes: ["Data Import", "AI Enrichment", "Validation", "CRM Sync"],
          tags: ["AI", "Data", "CRM"],
        },
      ],
    },
    {
      id: "integrations",
      label: "Integrations",
      icon: GitBranch,
      description: "Connect your tools and platforms seamlessly",
      workflows: [
        {
          title: "E-commerce Sync",
          description: "Sync orders, inventory, and customers across platforms",
          nodes: ["Store Webhook", "Data Transform", "Multi-Store Sync", "Inventory Update"],
          tags: ["E-commerce", "Sync", "Inventory"],
        },
        {
          title: "Payment Processing",
          description: "Handle payments, invoices, and subscription management",
          nodes: ["Payment Gateway", "Invoice Generator", "Subscription Manager", "Accounting Sync"],
          tags: ["Payments", "Billing", "Accounting"],
        },
        {
          title: "Analytics Dashboard",
          description: "Aggregate data from multiple sources into reports",
          nodes: ["Data Sources", "ETL Processing", "Analytics Engine", "Dashboard"],
          tags: ["Analytics", "Reporting", "Data"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="D2 Group — AI Automation Agency for Remote Teams | n8n, RAG, SaaS Development"
        description="Professional AI automation agency serving US, Australia, and Europe. Expert in n8n workflows, GPT-4/Claude integration, RAG systems, and full-stack SaaS development with React & Node.js."
        keywords="AI automation agency, n8n developer, RAG systems, GPT-4 integration, remote team automation, SaaS development, full-stack developer, API integration, workflow automation, AI consultant"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Workflow Automation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              Flexible automation workflows
              <br />
              <span className="text-primary">for technical teams</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build with the precision of code or the speed of drag-n-drop. We give you more freedom 
              to implement multi-step AI agents and integrate apps than any other tool.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                Get started for free
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Categories Tabs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What can you automate?</h2>
            <p className="text-muted-foreground text-lg">
              Choose from our pre-built workflow templates or build custom solutions
            </p>
          </div>

          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
              {workflowCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="gap-2">
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {workflowCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-4">
                <div className="text-center mb-8">
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.workflows.map((workflow, idx) => (
                    <Card key={idx} className="group hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Layers className="w-8 h-8 text-primary" />
                          <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-4 h-4 mr-1" />
                            View Demo
                          </Button>
                        </div>
                        <CardTitle className="text-lg">{workflow.title}</CardTitle>
                        <CardDescription>{workflow.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Workflow Nodes Visualization */}
                        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                          {workflow.nodes.map((node, nodeIdx) => (
                            <div key={nodeIdx} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              <span className="text-sm text-muted-foreground">{node}</span>
                              {nodeIdx < workflow.nodes.length - 1 && (
                                <ArrowRight className="w-3 h-3 text-muted-foreground ml-auto" />
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {workflow.tags.map((tag, tagIdx) => (
                            <Badge key={tagIdx} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button variant="outline" className="w-full gap-2">
                          Request Setup
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center pt-8">
                  <Button variant="outline" size="lg">
                    Browse all {category.label.toLowerCase()}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Teams that trust D2 Group</h2>
            <p className="text-muted-foreground text-lg">
              From startups to enterprises, we power automation for technical teams
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Workflow, title: "IT Ops", desc: "Automate deployment & monitoring" },
              { icon: Brain, title: "Sec Ops", desc: "Security incident automation" },
              { icon: GitBranch, title: "Dev Ops", desc: "CI/CD pipeline integration" },
              { icon: MessageSquare, title: "Sales", desc: "Lead generation & nurturing" },
            ].map((useCase, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Why choose D2 Group?
              </h2>
              <div className="space-y-4">
                {[
                  "Advanced n8n workflow development",
                  "Custom AI & RAG system integration",
                  "Full-stack SaaS product development",
                  "Enterprise-grade security & scalability",
                  "Dedicated technical support",
                  "Flexible deployment options",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="gap-2">
                Get started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Trigger: New Form Submit</div>
                      <div className="text-xs text-muted-foreground">Webhook received</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">AI Agent Process</div>
                      <div className="text-xs text-muted-foreground">Analyzing data...</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Save to Database</div>
                      <div className="text-xs text-muted-foreground">Record created</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="p-12 bg-gradient-to-br from-primary to-accent text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to automate your workflows?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join remote teams across US, Australia, and Europe who trust D2 Group
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Book a demo
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                View pricing
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
