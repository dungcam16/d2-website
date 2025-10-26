import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Users, FileText, Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function DigitalAgencies() {
  const challenges = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Management",
      description: "Automate client onboarding, reporting, and communication workflows"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Content Operations",
      description: "Streamline content creation, approval, and publishing processes"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Project Tracking",
      description: "Automated task assignments, deadlines, and progress updates"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Billing & Invoicing",
      description: "Time tracking, invoice generation, and payment reminders"
    }
  ];

  const solutions = [
    "Automated client onboarding & offboarding",
    "Content approval & publishing workflows",
    "Campaign reporting & analytics dashboards",
    "Time tracking & billing automation",
    "Lead generation & qualification pipelines",
    "Social media scheduling & monitoring"
  ];

  return (
    <>
      <SEO
        title="Automation Solutions for Digital Agencies | D2 Group"
        description="Scale your agency with intelligent automation. Streamline client management, content operations, project tracking, and billing with custom workflows."
        keywords="agency automation, client management automation, content workflow automation, digital agency operations"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Agency Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automation for Digital Agencies
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Scale your agency without scaling overhead. Automate client management, content workflows, 
              and reporting so your team can focus on delivering exceptional results.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/company/contact">Transform Your Agency <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">See Agency Results</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Agency Challenges We Solve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Built for Agency Growth</h2>
                <p className="text-muted-foreground mb-6">
                  We understand agency operations inside out. Our automation solutions help you 
                  deliver more value to clients while improving team efficiency and profitability.
                </p>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Why Agencies Trust Us</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">White-Label Solutions</h4>
                    <p className="text-sm text-muted-foreground">Offer automation services under your brand</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Client-Ready Reports</h4>
                    <p className="text-sm text-muted-foreground">Automated dashboards and performance reports</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Tool Integration</h4>
                    <p className="text-sm text-muted-foreground">Connect your entire agency tech stack</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Scalable Workflows</h4>
                    <p className="text-sm text-muted-foreground">Handle 10x more clients with the same team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Agency?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build automation workflows that help you grow profitably
            </p>
            <Button size="lg" asChild>
              <Link to="/company/contact">Book Discovery Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
