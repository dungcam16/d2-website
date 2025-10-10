import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertTriangle, Users, CheckCircle, XCircle } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <Header />

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <FileText className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">Service usage regulations of D2 Group</p>
            <div className="mt-4 text-sm text-muted-foreground">Last updated: September 27, 2024</div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Scale className="h-6 w-6 text-primary mr-2" />
                General Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By using D2 Group's services, you agree to comply with the terms and conditions outlined below. Please
                read carefully before using our services.
              </p>
            </section>

            {/* Service Description */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary mr-2" />
                Services Provided
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>D2 Group provides automation marketing services including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Multi-platform Chatbot development and deployment</li>
                  <li>Zalo Official Account solutions</li>
                  <li>Process automation with N8N</li>
                  <li>SEO optimization and Content Marketing</li>
                  <li>Business process consulting and optimization</li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-primary mr-2" />
                Customer Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Use services for lawful purposes only</li>
                <li>Make payments on time as agreed</li>
                <li>Maintain confidentiality of login credentials and account</li>
                <li>Comply with intellectual property regulations</li>
                <li>Not use services for spam or inappropriate content distribution</li>
              </ul>
            </section>

            {/* Prohibited Activities */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <XCircle className="h-6 w-6 text-primary mr-2" />
                Prohibited Conduct
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use services for illegal purposes</li>
                <li>Distribute viruses, malware, or malicious code</li>
                <li>Attack or disrupt system operations</li>
                <li>Unauthorized copying or distribution of D2 Group's content</li>
                <li>Unauthorized collection of personal information</li>
                <li>Sending spam or unwanted advertising content</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Payment methods:</strong> Bank transfer, credit card
                </p>
                <p>
                  <strong>Payment deadline:</strong> As agreed in contract
                </p>
                <p>
                  <strong>Refund policy:</strong> Applies according to specific service type
                </p>
                <p>
                  <strong>Late payment fee:</strong> 2% per month for delayed payments
                </p>
              </div>
            </section>

            {/* Liability */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-primary mr-2" />
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>D2 Group is committed to providing high-quality services, however:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Not liable for indirect damages</li>
                  <li>Maximum liability does not exceed contract value</li>
                  <li>No guarantee of 100% uninterrupted service operation</li>
                  <li>Customers are responsible for their own content and data</li>
                </ul>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Services may be terminated in the following cases:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Violation of terms of use</li>
                  <li>Failure to pay on time</li>
                  <li>Termination request from either party</li>
                  <li>Changes in service policy</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For any questions about our terms of service, please contact:
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

export default TermsOfService;
