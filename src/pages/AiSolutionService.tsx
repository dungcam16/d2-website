import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Sparkles, CheckCircle, ArrowRight, Brain, Zap, Shield, Package, Code } from "lucide-react";

const AiSolutionService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Custom AI Solutions - Machine Learning & AI Development | D2 Group"
        description="Custom AI solutions tailored to your business needs. From chatbots to predictive analytics, computer vision to NLP - we build intelligent systems that deliver results."
        keywords="custom AI solutions, AI development, machine learning, chatbot development, computer vision, NLP, AI integration"
        canonicalUrl="/services/ai-solution"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Build Intelligent Systems. <span className="text-primary">Custom AI</span> For Your Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              From conversational AI to predictive analytics, computer vision to NLP - we create custom AI solutions that solve your specific business challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Discuss Your AI Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                View AI Capabilities
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, value: "50+", label: "AI Models", desc: "Deployed in production" },
              { icon: Zap, value: "92%", label: "Accuracy", desc: "Average model performance" },
              { icon: Shield, value: "24/7", label: "Monitoring", desc: "Continuous optimization" },
              { icon: Package, value: "100%", label: "Custom", desc: "Tailored solutions" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card p-6 text-center animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our AI Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI capabilities to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Conversational AI & Chatbots",
                description: "Intelligent assistants that understand context and intent",
                features: ["Natural language understanding", "Multi-language support", "Context awareness", "Integration with systems"],
              },
              {
                icon: Sparkles,
                title: "Predictive Analytics",
                description: "Forecast trends and make data-driven decisions",
                features: ["Time series forecasting", "Demand prediction", "Risk assessment", "Anomaly detection"],
              },
              {
                icon: Code,
                title: "Computer Vision",
                description: "Extract insights from images and videos",
                features: ["Object detection", "Image classification", "OCR & document processing", "Quality inspection"],
              },
              {
                icon: Zap,
                title: "Natural Language Processing",
                description: "Understand and generate human language",
                features: ["Sentiment analysis", "Text classification", "Entity extraction", "Content generation"],
              },
              {
                icon: Shield,
                title: "Recommendation Systems",
                description: "Personalized suggestions to boost engagement",
                features: ["Collaborative filtering", "Content-based recommendations", "Hybrid approaches", "Real-time updates"],
              },
              {
                icon: Package,
                title: "Custom ML Models",
                description: "Tailored solutions for unique challenges",
                features: ["Problem analysis", "Model selection", "Training & tuning", "Production deployment"],
              },
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Build Your AI Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how AI can transform your business operations
          </p>
          <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
            Start Your AI Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiSolutionService;
