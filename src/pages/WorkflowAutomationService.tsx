import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Workflow, Zap, Clock, Shield } from "lucide-react";

const WorkflowAutomationService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="n8n Workflow Automation Services | D2 Group"
        description="Complex multi-step workflows with error handling, scheduling, and API integrations. Expert n8n automation for remote teams."
        keywords="n8n automation, workflow automation, business automation, n8n developer"
        canonicalUrl="/services/workflow-automation"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
              <Workflow className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              n8n Workflow Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complex multi-step workflows with error handling, scheduling, and API integrations.
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
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Complex Multi-Step Workflows",
                  description: "Design and implement sophisticated automation workflows with multiple triggers, conditions, and actions."
                },
                {
                  icon: Clock,
                  title: "Scheduling & Error Handling",
                  description: "Automated scheduling with robust error handling and retry mechanisms for reliable operations."
                },
                {
                  icon: Shield,
                  title: "API Integrations",
                  description: "Seamless integration with hundreds of APIs and custom webhook implementations."
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
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can streamline your business processes.
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

export default WorkflowAutomationService;
