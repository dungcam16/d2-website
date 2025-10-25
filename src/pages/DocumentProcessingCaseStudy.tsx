import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileStack, Workflow, Zap, CheckCircle, Clock, DollarSign, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import caseImage from "@/assets/case-document-processing-automation.jpg";

const DocumentProcessingCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "headline": "Document Processing Automation: 75% Cost Reduction",
    "description": "How we automated document workflow processing, saving 150 hours monthly and reducing costs by 75%",
    "image": caseImage,
    "author": {
      "@type": "Organization",
      "name": "D2 Group"
    }
  };

  return (
    <>
      <SEO 
        title="Document Processing Automation | 75% Cost Reduction Case Study"
        description="Discover how automated document processing workflows reduced operational costs by 75% while processing 5,000+ documents monthly"
        canonicalUrl="/portfolio/document-processing-automation"
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
                  <span className="text-primary font-semibold">Process Automation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Document Processing: 75% Cost Reduction
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transforming manual document workflows into intelligent automated processes
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">75%</div>
                      <div className="text-sm text-muted-foreground">Cost Saved</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">5K+</div>
                      <div className="text-sm text-muted-foreground">Docs/Month</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">150h</div>
                      <div className="text-sm text-muted-foreground">Time Saved</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="animate-scale-in">
                    <Link to="/contact">Automate Your Documents</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="animate-scale-in">
                    <Link to="/services/workflow-automation">Automation Services</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
                <img 
                  src={caseImage} 
                  alt="Document Processing Automation System"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
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
                    An insurance company was drowning in paperwork, manually processing thousands of claims, applications, and policy documents each month with high error rates and processing delays.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>5,000+ documents processed manually each month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Average processing time: 45 minutes per document</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>12% error rate in data entry and routing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Customer complaints about slow turnaround times</span>
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
              <h2 className="text-3xl font-bold mb-8">Automated Document Pipeline</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <FileStack className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Smart Classification</h3>
                    <p className="text-muted-foreground">
                      AI automatically identifies document types and routes to correct workflows
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <Workflow className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Intelligent Routing</h3>
                    <p className="text-muted-foreground">
                      Automated workflow routing based on document content and business rules
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Data Extraction</h3>
                    <p className="text-muted-foreground">
                      Automatic extraction and validation of key information from documents
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">System Integration</h3>
                    <p className="text-muted-foreground">
                      Seamless integration with CRM, ERP, and document management systems
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
              <h2 className="text-3xl font-bold mb-8 text-center">Transformative Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">75%</div>
                    <div className="text-muted-foreground">Cost Reduction</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">150h</div>
                    <div className="text-muted-foreground">Hours Saved Monthly</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">90%</div>
                    <div className="text-muted-foreground">Faster Processing</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Processing time reduced from 45 minutes to 5 minutes per document</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Error rate decreased from 12% to under 2%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Customer satisfaction improved by 45%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>ROI achieved within 3 months of implementation</span>
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
              Let's eliminate manual document processing and boost efficiency
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

export default DocumentProcessingCaseStudy;