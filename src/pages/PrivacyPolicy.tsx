import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, Users, Database, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <Header />

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">Commitment to protecting customer personal information</p>
            <div className="mt-4 text-sm text-muted-foreground">Last updated: September 27, 2024</div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Eye className="h-6 w-6 text-primary mr-2" />
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                D2 Group is committed to protecting the privacy and personal information of our customers. This policy
                explains how we collect, use, store and protect your information when using our services.
              </p>
            </section>

            {/* Information Collection */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Database className="h-6 w-6 text-primary mr-2" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Personal information:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Full name, email, phone number</li>
                    <li>Company information and job position</li>
                    <li>Contact address</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Technical information:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP address, browser type</li>
                    <li>Cookies and session data</li>
                    <li>Website browsing history</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Usage */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary mr-2" />
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and improve automation marketing services</li>
                <li>Contact and support customers</li>
                <li>Send information about new products and services</li>
                <li>Analyze and optimize website performance</li>
                <li>Comply with legal requirements</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Lock className="h-6 w-6 text-primary mr-2" />
                Information Security
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We implement technical and organizational security measures to protect your information:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>SSL/TLS data encryption</li>
                  <li>Strict access control</li>
                  <li>Regular data backups</li>
                  <li>24/7 security monitoring</li>
                  <li>Staff security training</li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <UserCheck className="h-6 w-6 text-primary mr-2" />
                Customer Rights
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Right to access and edit personal information</li>
                <li>Right to request data deletion</li>
                <li>Right to opt-out of marketing communications</li>
                <li>Right to file complaints about data processing</li>
                <li>Right to data portability to other providers</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this privacy policy, please contact:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: info@d2group.co</p>
                <p>Phone: +84 977 027 634</p>
                <p>Address: No. 3, Nguyen Co Thach Street, An Khanh Ward, HCMC</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
