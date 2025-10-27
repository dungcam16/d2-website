import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, DollarSign, Shield, Zap, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function ZapierMigration() {
  const reasons = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Reduce Costs by 70%",
      description: "Self-hosted n8n eliminates per-task pricing. Save thousands monthly on automation costs."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Full Data Control",
      description: "Keep sensitive data on your own infrastructure. Perfect for compliance requirements."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Advanced Workflows",
      description: "Build complex automations with branching, loops, and custom code execution."
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "No Usage Limits",
      description: "Run unlimited workflows without worrying about task limits or overage charges."
    }
  ];

  const migrationSteps = [
    "Audit your current Zapier workflows",
    "Map equivalent n8n nodes and logic",
    "Set up self-hosted n8n instance",
    "Migrate workflows in batches",
    "Test and validate automations",
    "Train your team on n8n"
  ];

  return (
    <>
      <SEO
        title="Zapier to n8n Migration Services - Save 70% on Automation Costs | D2 Group"
        description="Migrate from Zapier to n8n and reduce automation costs by 70%. Professional migration service with zero downtime. Self-hosted, unlimited workflows."
        keywords="Zapier migration, n8n migration, Zapier alternative, automation migration, reduce automation costs"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Zapier Migration Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Migrate from Zapier to n8n
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Cut your automation costs by 70% while gaining more control and flexibility. 
              We handle the entire migration process so you can switch without disruption.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">Get Migration Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources/migration-guides">Migration Guide</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Migrate from Zapier to n8n?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Cost Comparison</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Zapier</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>💰 $299-599/month for business plans</p>
                  <p>📊 Limited to 10,000-50,000 tasks</p>
                  <p>🔒 Data flows through third-party servers</p>
                  <p>⚠️ Additional costs for premium apps</p>
                  <p>📈 Costs increase with usage</p>
                </div>
              </Card>
              <Card className="p-8 border-primary border-2">
                <h3 className="text-2xl font-bold mb-4 text-primary">n8n</h3>
                <div className="space-y-3">
                  <p>✅ $20-100/month for hosting</p>
                  <p>✅ Unlimited workflows & executions</p>
                  <p>✅ Self-hosted, full data control</p>
                  <p>✅ All integrations included</p>
                  <p>✅ Fixed costs regardless of scale</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Seamless Migration Process</h2>
                <p className="text-muted-foreground mb-6">
                  Our proven migration methodology ensures zero downtime and complete workflow continuity. 
                  We handle everything from infrastructure setup to team training.
                </p>
                <ul className="space-y-3">
                  {migrationSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complete workflow audit & documentation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>n8n infrastructure setup & configuration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>1-to-1 workflow migration & optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Testing & validation of all automations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Team training & documentation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>30-day post-migration support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Cut Your Automation Costs?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free migration assessment and see how much you can save
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Request Free Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
