import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Partners() {
  const partners = [
    {
      name: "n8n",
      type: "Certified Partner",
      description: "Official n8n implementation and consulting partner",
      benefits: ["Priority support", "Advanced training", "Beta access"]
    },
    {
      name: "Supabase",
      type: "Technology Partner",
      description: "Backend and database solutions for automation workflows",
      benefits: ["Infrastructure support", "Technical resources", "Co-marketing"]
    },
    {
      name: "OpenAI",
      type: "Integration Partner",
      description: "AI integration and GPT-powered automation solutions",
      benefits: ["API expertise", "Custom implementations", "Best practices"]
    },
    {
      name: "Anthropic",
      type: "Integration Partner",
      description: "Claude AI integration for enterprise automation",
      benefits: ["Claude expertise", "Enterprise solutions", "Security compliance"]
    }
  ];

  const benefits = [
    "Access to latest automation technologies",
    "Priority technical support from partners",
    "Early access to new features and tools",
    "Competitive pricing for enterprise licenses",
    "Co-marketing opportunities",
    "Training and certification programs"
  ];

  return (
    <>
      <SEO
        title="Our Partners - D2 Group Technology Partnerships"
        description="D2 Group partners with leading automation and AI platforms including n8n, Supabase, OpenAI, and Anthropic to deliver world-class solutions."
        keywords="n8n partner, automation partnerships, AI integration partners, technology partners"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Our Partners
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Trusted Technology Partners
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We partner with leading automation and AI platforms to deliver world-class solutions 
              with cutting-edge technology and enterprise-grade support.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Partners</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{partner.name}</h3>
                      <Badge variant="secondary">{partner.type}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Partnership Benefits</h2>
                <p className="text-muted-foreground mb-6">
                  Our strategic partnerships enable us to provide superior service, access to the 
                  latest technologies, and enterprise-grade solutions for our clients.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
                <p className="text-muted-foreground mb-6">
                  Interested in partnering with D2 Group? We're always looking for technology 
                  partners who share our vision of making automation accessible to all businesses.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Technology Partners</h4>
                    <p className="text-sm text-muted-foreground">Platform and tool integrations</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Referral Partners</h4>
                    <p className="text-sm text-muted-foreground">Agency and consulting partnerships</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Reseller Partners</h4>
                    <p className="text-sm text-muted-foreground">White-label automation solutions</p>
                  </div>
                </div>
                <Button className="w-full mt-6" asChild>
                  <Link to="/company/contact">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
