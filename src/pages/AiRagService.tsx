import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Database, Sparkles, MessageSquare } from "lucide-react";

const AiRagService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI & RAG Systems Development | D2 Group"
        description="Custom LLM integrations with GPT-4, Claude, vector databases, and retrieval systems. Expert AI development for remote teams."
        keywords="RAG systems, AI integration, GPT-4, Claude, vector database, LLM integration"
        canonicalUrl="/services/ai-rag"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6">
              <Brain className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI & RAG Systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Custom LLM integrations with GPT-4, Claude, vector databases, and retrieval systems.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our AI Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "LLM Integration",
                  description: "Seamless integration with GPT-4, Claude, and other leading AI models for intelligent automation."
                },
                {
                  icon: Database,
                  title: "Vector Databases",
                  description: "Implement efficient RAG systems with vector databases for context-aware AI applications."
                },
                {
                  icon: MessageSquare,
                  title: "Custom AI Solutions",
                  description: "Build custom chatbots, assistants, and AI-powered tools tailored to your business needs."
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
              Ready to Implement AI Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build intelligent systems that transform your business.
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

export default AiRagService;
