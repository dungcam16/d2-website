import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Brain, Zap, TrendingUp, CheckCircle, Clock, DollarSign, Users, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import caseImage from "@/assets/case-ai-data-extraction.jpg";

const AiDataExtractionCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "headline": "AI-Powered Data Extraction: 95% Accuracy in Document Processing",
    "description": "How we helped a logistics company automate invoice and shipping document processing with AI, reducing manual data entry by 90%",
    "image": caseImage,
    "author": {
      "@type": "Organization",
      "name": "D2 Group"
    }
  };

  return (
    <>
      <SEO
        title="AI Data Extraction Case Study | 95% Accuracy in Document Processing"
        description="Discover how AI-powered data extraction reduced manual processing by 90% with 95% accuracy for a logistics company handling 10,000+ documents monthly"
        canonicalUrl="/portfolio/ai-data-extraction"
        ogImage={caseImage}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <Link to="/portfolio" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-semibold">AI & Automation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI-Powered Data Extraction: 95% Accuracy Achievement
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transforming manual document processing into intelligent automation for a major logistics provider
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">90%</div>
                      <div className="text-sm text-muted-foreground">Time Saved</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                      <div className="text-sm text-muted-foreground">Docs/Month</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild className="animate-scale-in">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="animate-scale-in">
                    <Link to="/services/ai-chatbots">Our AI Services</Link>
                  </Button>
                </div>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
                <img
                  src={caseImage}
                  alt="AI Data Extraction System"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Client Overview */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Client Overview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Industry</h3>
                    <p className="text-muted-foreground">Logistics & Supply Chain</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Target className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Company Size</h3>
                    <p className="text-muted-foreground">500+ employees, multinational operations</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
              <Card className="bg-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    The logistics company was processing over 10,000 invoices, shipping documents, and customs forms monthly. Their team spent 200+ hours manually entering data from various document formats.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Multiple document formats (PDF, scanned images, emails)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>High error rate from manual data entry (15-20%)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Processing delays impacting customer satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Staff burnout from repetitive data entry tasks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Our AI Solution</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <Brain className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Intelligent OCR</h3>
                    <p className="text-muted-foreground">
                      Advanced AI models trained to recognize and extract data from any document format with 95% accuracy
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Auto-Validation</h3>
                    <p className="text-muted-foreground">
                      Built-in validation rules and confidence scoring to flag uncertain extractions for review
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <FileText className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Multi-Format Support</h3>
                    <p className="text-muted-foreground">
                      Handles PDFs, scanned images, photos, and email attachments seamlessly
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">ERP Integration</h3>
                    <p className="text-muted-foreground">
                      Direct integration with existing ERP system for automated data flow
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Measurable Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">180+</div>
                    <div className="text-muted-foreground">Hours Saved Monthly</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">$85K</div>
                    <div className="text-muted-foreground">Annual Cost Savings</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div classNameName="text-4xl font-bold text-primary mb-2">95%</div>
                    <div className="text-muted-foreground">Extraction Accuracy</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Processing time reduced from 48 hours to 4 hours per batch</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Error rate dropped from 15-20% to under 5%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Staff redirected to higher-value customer service tasks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>ROI achieved within 4 months of deployment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Document Processing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how AI-powered extraction can transform your operations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiDataExtractionCaseStudy;
