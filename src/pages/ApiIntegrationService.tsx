import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Network, Link, Webhook, Lock } from "lucide-react";

const ApiIntegrationService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="API Development & Integration | D2 Group"
        description="RESTful APIs, webhooks, OAuth flows, and third-party service integrations. Expert API development for remote teams."
        keywords="API development, REST API, webhooks, OAuth, API integration"
        canonicalUrl="/services/api-integration"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6">
              <Network className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API Development & Integration
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              RESTful APIs, webhooks, OAuth flows, and third-party service integrations.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our API Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Link,
                  title: "RESTful APIs",
                  description: "Design and build scalable RESTful APIs following industry best practices."
                },
                {
                  icon: Webhook,
                  title: "Webhooks & Real-time",
                  description: "Implement webhooks and real-time data synchronization between systems."
                },
                {
                  icon: Lock,
                  title: "OAuth & Security",
                  description: "Secure authentication flows with OAuth 2.0, JWT, and API key management."
                }
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                      <feature.icon className="h-6 w-6 text-accent" />
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
              Ready to Build Powerful APIs?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create robust and secure API solutions for your business.
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

export default ApiIntegrationService;
