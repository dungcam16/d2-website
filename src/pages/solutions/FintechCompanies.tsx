import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Shield, AlertCircle, FileCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function FintechCompanies() {
  const challenges = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance & KYC",
      description: "Automate identity verification, compliance checks, and regulatory reporting"
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Fraud Detection",
      description: "Real-time transaction monitoring and automated fraud alerts"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Document Processing",
      description: "Extract and validate data from financial documents automatically"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Customer Lifecycle",
      description: "Onboarding, engagement, and retention automation workflows"
    }
  ];

  const solutions = [
    "Automated KYC & identity verification",
    "Transaction monitoring & fraud detection",
    "Regulatory reporting & compliance workflows",
    "Customer onboarding automation",
    "Payment processing & reconciliation",
    "Risk assessment & credit scoring pipelines"
  ];

  return (
    <>
      <SEO
        title="Fintech Automation Solutions | D2 Group"
        description="Secure, compliant automation for fintech companies. Streamline KYC, fraud detection, compliance reporting, and customer operations with intelligent workflows."
        keywords="fintech automation, KYC automation, compliance automation, fraud detection, payment processing automation"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Fintech Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Secure Automation for Fintech
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Build trust and scale efficiently. Automate compliance, fraud detection, and operations 
              while maintaining the highest security and regulatory standards.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/company/contact">Discuss Your Needs <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View Fintech Cases</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Fintech Challenges We Address</h2>
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
                <h2 className="text-3xl font-bold mb-6">Compliant Fintech Automation</h2>
                <p className="text-muted-foreground mb-6">
                  We specialize in building secure, compliant automation for fintech companies. 
                  From KYC to fraud detection, we help you scale operations without compromising security.
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
                <h3 className="text-2xl font-bold mb-4">Our Fintech Expertise</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Security First</h4>
                    <p className="text-sm text-muted-foreground">Bank-level encryption and security standards</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Regulatory Compliance</h4>
                    <p className="text-sm text-muted-foreground">GDPR, PCI-DSS, and industry-specific requirements</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Scalable Infrastructure</h4>
                    <p className="text-sm text-muted-foreground">Handle millions of transactions reliably</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Audit Trails</h4>
                    <p className="text-sm text-muted-foreground">Complete logging and traceability for compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Securely?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss compliant automation solutions for your fintech platform
            </p>
            <Button size="lg" asChild>
              <Link to="/company/contact">Schedule Secure Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
