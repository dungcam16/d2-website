import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Mail, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function MarketingAutomation() {
  const features = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Automation",
      description: "Personalized email campaigns triggered by user behavior and lifecycle stage"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Lead Scoring",
      description: "Automatically prioritize leads based on engagement and fit"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Campaign Analytics",
      description: "Track ROI and optimize campaigns with real-time analytics"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Audience Segmentation",
      description: "Dynamic segments that update automatically based on criteria"
    }
  ];

  const automations = [
    "Welcome sequences for new subscribers",
    "Abandoned cart recovery campaigns",
    "Re-engagement workflows for inactive users",
    "Lead nurturing drip campaigns",
    "Event-triggered personalization",
    "Multi-channel campaign orchestration"
  ];

  return (
    <>
      <SEO
        title="Marketing Automation Services - Email, Campaigns & Lead Nurturing | D2 Group"
        description="Professional marketing automation services. Build automated email campaigns, lead nurturing workflows, and multi-channel marketing systems that drive growth."
        keywords="marketing automation, email automation, lead nurturing, campaign automation, marketing workflows"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Marketing Automation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Scale Your Marketing with Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Build automated marketing systems that nurture leads, increase conversions, and grow revenue. 
              From email campaigns to multi-channel orchestration, we automate your entire marketing funnel.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">Automate Your Marketing <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources/roi-calculator">Calculate ROI</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Marketing Automation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Automations Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Marketing Workflows We Build</h2>
                <p className="text-muted-foreground mb-6">
                  We design and implement marketing automation workflows that work across all channels. 
                  Our automations are data-driven, personalized, and optimized for conversion.
                </p>
                <ul className="space-y-3">
                  {automations.map((automation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{automation}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Integration Partners</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Email Platforms</h4>
                    <p className="text-sm text-muted-foreground">Mailchimp, SendGrid, ConvertKit, ActiveCampaign</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">CRM Systems</h4>
                    <p className="text-sm text-muted-foreground">HubSpot, Salesforce, Pipedrive, Zoho</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Analytics</h4>
                    <p className="text-sm text-muted-foreground">Google Analytics, Mixpanel, Segment</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Ad Platforms</h4>
                    <p className="text-sm text-muted-foreground">Google Ads, Facebook Ads, LinkedIn Ads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Marketing?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build marketing automation that drives real growth
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Campaign <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
