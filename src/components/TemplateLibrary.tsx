import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Users, FileText, MessageSquare, AlertCircle, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const TemplateLibrary = () => {
  const templates = [
    {
      icon: Bot,
      title: "AI Lead Nurture Engine",
      tags: ["Marketing", "Sales", "GPT"],
      description: "Qualify leads with GPT, update CRM, and alert your sales team in real-time.",
      slug: "ai-lead-nurture",
    },
    {
      icon: Users,
      title: "Client Onboarding Flow",
      tags: ["Operations", "Service"],
      description: "Automatically create tasks, folders, and welcome emails upon new client signup.",
      slug: "client-onboarding",
    },
    {
      icon: FileText,
      title: "AI Content Repurposing System",
      tags: ["Marketing", "Content", "AI"],
      description: "Transform blog posts into ready-to-publish social content automatically.",
      slug: "ai-content-repurposing",
    },
    {
      icon: MessageSquare,
      title: "Slack AI Daily Assistant",
      tags: ["Analytics", "AI"],
      description: "Summarize daily KPIs and updates using GPT, posted directly to Slack.",
      slug: "slack-ai-assistant",
    },
    {
      icon: AlertCircle,
      title: "AI Ticket Triage",
      tags: ["Customer Support", "AI"],
      description: "Auto-classify and prioritize support tickets based on urgency and sentiment.",
      slug: "ai-ticket-triage",
    },
    {
      icon: CreditCard,
      title: "Invoice & Payment Sync",
      tags: ["Finance", "Billing"],
      description: "Auto-generate, email, and archive invoices when payments are made.",
      slug: "invoice-payment-sync",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Production-ready Workflows
          </h2>
          <p className="text-xl text-muted-foreground">
            Deploy and customize high-performance automations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                  <template.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3">{template.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">{template.description}</p>
                
                <div className="flex gap-2">
                  <Link to={`/portfolio/${template.slug}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      View Demo
                    </Button>
                  </Link>
                  <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90" onClick={() => window.location.href = "/contact"}>
                    Request Setup
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              Browse Full Template Library
            </Button>
          </Link>
          <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => window.location.href = "/contact"}>
            Book Custom Workflow
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateLibrary;
