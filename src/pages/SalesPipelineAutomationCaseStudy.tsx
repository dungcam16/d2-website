import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, TrendingUp, Users, CheckCircle, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import caseImage from "@/assets/case-sales-pipeline-automation.jpg";

const SalesPipelineAutomationCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "headline": "Sales Pipeline Automation: 40% More Conversions",
    "description": "How we automated lead nurturing and follow-ups, increasing conversion rates by 40% and saving 30 hours weekly",
    "image": caseImage,
    "author": {
      "@type": "Organization",
      "name": "D2 Group"
    }
  };

  return (
    <>
      <SEO 
        title="Sales Pipeline Automation | 40% More Conversions Case Study"
        description="Discover how automated sales pipeline management increased conversions by 40% while saving sales teams 30+ hours weekly"
        canonicalUrl="/portfolio/sales-pipeline-automation"
        ogImage={caseImage}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <Link to="/portfolio" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-semibold">Sales Automation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Sales Pipeline: 40% Conversion Boost
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Intelligent automation of lead nurturing, follow-ups, and sales workflows
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">40%</div>
                      <div className="text-sm text-muted-foreground">More Conversions</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">30h</div>
                      <div className="text-sm text-muted-foreground">Saved Weekly</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">2.5x</div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="animate-scale-in">
                    <Link to="/contact">Automate Your Sales</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="animate-scale-in">
                    <Link to="/services/workflow-automation">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
                <img 
                  src={caseImage} 
                  alt="Sales Pipeline Automation Dashboard"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
              <Card className="bg-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    A B2B SaaS company with a 15-person sales team was losing deals due to inconsistent follow-ups, manual data entry, and lack of lead prioritization. Their sales cycle was too long and conversion rates were below industry average.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>30% of leads never received timely follow-up</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Sales reps spending 40% of time on administrative tasks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>No systematic lead scoring or prioritization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Average sales cycle: 90 days</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Intelligent Sales Automation</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Smart Lead Scoring</h3>
                    <p className="text-muted-foreground">
                      AI-powered lead scoring based on behavior, engagement, and fit
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Automated Nurturing</h3>
                    <p className="text-muted-foreground">
                      Personalized email sequences triggered by lead behavior
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Follow-up Automation</h3>
                    <p className="text-muted-foreground">
                      Automatic reminders and task creation for sales reps
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <CheckCircle className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">CRM Integration</h3>
                    <p className="text-muted-foreground">
                      Seamless data sync with Salesforce and HubSpot
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Impressive Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">40%</div>
                    <div className="text-muted-foreground">Conversion Increase</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">30h</div>
                    <div className="text-muted-foreground">Saved Per Week</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">2.5x</div>
                    <div className="text-muted-foreground">Return on Investment</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Conversion rate increased from 15% to 21%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Sales cycle shortened from 90 to 60 days</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>100% of qualified leads now receive timely follow-up</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Sales team productivity increased by 60%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Supercharge Your Sales Pipeline?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's automate your sales processes and boost conversions
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

export default SalesPipelineAutomationCaseStudy;