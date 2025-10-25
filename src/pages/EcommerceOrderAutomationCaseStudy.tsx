import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Workflow, CheckCircle, Clock, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import caseImage from "@/assets/case-ecommerce-order-automation.jpg";

const EcommerceOrderAutomationCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "headline": "E-commerce Order Automation: 95% Faster Processing",
    "description": "How we automated order fulfillment workflows, processing 10,000+ orders monthly with 99.9% accuracy",
    "image": caseImage,
    "author": {
      "@type": "Organization",
      "name": "D2 Group"
    }
  };

  return (
    <>
      <SEO 
        title="E-commerce Order Automation | 95% Faster Processing Case Study"
        description="Discover how automated order processing helped an e-commerce business handle 10,000+ orders monthly with 95% faster fulfillment"
        canonicalUrl="/portfolio/ecommerce-order-automation"
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
                  <span className="text-primary font-semibold">E-commerce Automation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Order Automation: 95% Faster Processing
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Complete automation of order fulfillment from purchase to delivery
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                      <div className="text-sm text-muted-foreground">Orders/Month</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">Faster</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="animate-scale-in">
                    <Link to="/contact">Automate Your Orders</Link>
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
                  alt="E-commerce Order Automation Dashboard"
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
                    A rapidly growing e-commerce retailer was struggling to keep up with order volume. Manual order processing, inventory checks, and shipping coordination were creating bottlenecks and customer dissatisfaction.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Processing 10,000+ orders monthly with manual workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Average order processing time: 24-48 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Frequent inventory sync issues across platforms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>High customer service load for order status inquiries</span>
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
              <h2 className="text-3xl font-bold mb-8">Complete Order Automation</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <ShoppingCart className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Instant Order Processing</h3>
                    <p className="text-muted-foreground">
                      Automatic order capture, validation, and payment confirmation
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <Workflow className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Smart Fulfillment</h3>
                    <p className="text-muted-foreground">
                      Automated warehouse routing and shipping label generation
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Inventory Sync</h3>
                    <p className="text-muted-foreground">
                      Real-time inventory updates across all sales channels
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <CheckCircle className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Customer Updates</h3>
                    <p className="text-muted-foreground">
                      Automated order confirmations and tracking notifications
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
              <h2 className="text-3xl font-bold mb-8 text-center">Outstanding Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">2h</div>
                    <div className="text-muted-foreground">Avg. Processing Time</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">$120K</div>
                    <div className="text-muted-foreground">Annual Savings</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-muted-foreground">Order Accuracy</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Order processing time reduced from 24-48 hours to 2 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Customer service inquiries reduced by 70%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Customer satisfaction score increased to 4.8/5</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Able to scale to 50,000+ orders without additional staff</span>
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
              Ready to Automate Your Order Processing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's streamline your e-commerce operations for maximum efficiency
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

export default EcommerceOrderAutomationCaseStudy;