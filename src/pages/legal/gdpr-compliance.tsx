import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, FileText, Database } from "lucide-react";

export default function GDPRCompliance() {
  const principles = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Lawfulness, Fairness and Transparency",
      description: "We process personal data lawfully, fairly, and in a transparent manner."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Purpose Limitation",
      description: "We collect data for specified, explicit, and legitimate purposes only."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Minimization",
      description: "We collect only data that is adequate, relevant, and limited to what is necessary."
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Accuracy",
      description: "We ensure personal data is accurate and kept up to date."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Storage Limitation",
      description: "We keep personal data only for as long as necessary."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity and Confidentiality",
      description: "We process data securely with appropriate technical and organizational measures."
    }
  ];

  const rights = [
    {
      title: "Right to Access",
      description: "You have the right to request access to your personal data and receive a copy."
    },
    {
      title: "Right to Rectification",
      description: "You can request correction of inaccurate or incomplete personal data."
    },
    {
      title: "Right to Erasure",
      description: "Also known as 'right to be forgotten', you can request deletion of your data."
    },
    {
      title: "Right to Restriction",
      description: "You can request restriction of processing of your personal data."
    },
    {
      title: "Right to Data Portability",
      description: "You can request transfer of your data to another service provider."
    },
    {
      title: "Right to Object",
      description: "You can object to processing of your personal data in certain circumstances."
    }
  ];

  return (
    <>
      <SEO
        title="GDPR Compliance - Data Protection & Privacy | D2 Group"
        description="Learn about D2 Group's GDPR compliance, data protection measures, and your rights under the General Data Protection Regulation."
        keywords="GDPR compliance, data protection, privacy rights, personal data, GDPR policy"
        canonicalUrl="/legal/gdpr-compliance"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-semibold">GDPR Compliance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              General Data Protection <span className="text-primary">Regulation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              D2 Group is committed to protecting your personal data and respecting your privacy rights in accordance with GDPR.
            </p>
            
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* GDPR Principles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
                Our GDPR <span className="text-primary">Principles</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We adhere to the six core principles of GDPR in all our data processing activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="text-primary mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm">{principle.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Data We Collect */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">
              Data We <span className="text-primary">Collect</span>
            </h2>
            
            <Card className="p-8 mb-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Personal Information</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Contact details (name, email, phone number, company name)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Account credentials and authentication data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Professional information (job title, industry)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 mb-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Technical Data</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>IP address, browser type, device information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Usage data, analytics, and interaction patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cookies and similar tracking technologies</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Communication Data</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Email correspondence and support tickets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Feedback, survey responses, and testimonials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Chat transcripts from our support channels</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">
              Your <span className="text-primary">Rights</span>
            </h2>
            
            <div className="space-y-4">
              {rights.map((right, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{right.title}</h3>
                  <p className="text-muted-foreground">{right.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">
              Legal <span className="text-primary">Basis</span> for Processing
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <Card className="p-8 mb-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Consent</h3>
                <p className="text-muted-foreground">
                  We process your data based on your explicit consent, which you can withdraw at any time by contacting us.
                </p>
              </Card>

              <Card className="p-8 mb-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Contract Performance</h3>
                <p className="text-muted-foreground">
                  Processing is necessary for the performance of our services and fulfillment of contractual obligations.
                </p>
              </Card>

              <Card className="p-8 mb-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Legitimate Interest</h3>
                <p className="text-muted-foreground">
                  We may process data for legitimate business interests, such as improving our services and preventing fraud.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">Legal Obligation</h3>
                <p className="text-muted-foreground">
                  Processing may be required to comply with legal obligations, such as tax and accounting requirements.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">
              Data <span className="text-primary">Security</span>
            </h2>
            
            <Card className="p-8">
              <div className="space-y-6 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Regular security assessments and penetration testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Access controls and authentication mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Employee training on data protection and security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Incident response and breach notification procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Regular backups and disaster recovery plans</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-heading mb-6 text-white">
              Questions About GDPR?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              For any questions about GDPR compliance or to exercise your rights, please contact our Data Protection Officer.
            </p>
            <div className="space-y-2 text-white/90">
              <p className="font-semibold">Email: <a href="mailto:privacy@d2group.co" className="underline">privacy@d2group.co</a></p>
              <p className="font-semibold">Address: D2 Group, Vietnam</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
