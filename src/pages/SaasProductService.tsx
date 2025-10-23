import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Code, Cloud, Rocket } from "lucide-react";

const SaasProductService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SaaS Product Development | D2 Group"
        description="Full-stack SaaS applications with React, Node.js, Supabase, and AI capabilities. Expert SaaS development for remote teams."
        keywords="SaaS development, React, Node.js, Supabase, full-stack development"
        canonicalUrl="/services/saas-product"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
              <BarChart3 className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SaaS Product Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Full-stack SaaS applications with React, Node.js, Supabase, and AI capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => window.location.href = "/contact"}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "/portfolio"}>
                View Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What We Build</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Full-Stack Development",
                  description: "Modern SaaS applications built with React, Node.js, and cutting-edge technologies."
                },
                {
                  icon: Cloud,
                  title: "Cloud Infrastructure",
                  description: "Scalable backend with Supabase, PostgreSQL, and serverless architecture."
                },
                {
                  icon: Rocket,
                  title: "AI-Powered Features",
                  description: "Integrate AI capabilities to make your SaaS product stand out from competition."
                }
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your SaaS Product?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's turn your idea into a successful SaaS business.
            </p>
            <Button size="lg" onClick={() => window.location.href = "/contact"}>
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SaasProductService;
