import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, MessageSquare, Brain, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function AiChatbots() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Intelligent Responses",
      description: "AI-powered chatbots that understand context and provide accurate answers"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock customer support without increasing headcount"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-language Support",
      description: "Serve global customers in their preferred language automatically"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Seamless Integration",
      description: "Works with your existing CRM, helpdesk, and communication tools"
    }
  ];

  const benefits = [
    "Custom-trained on your business data",
    "Integration with ChatGPT, Claude, Gemini",
    "RAG (Retrieval Augmented Generation) implementation",
    "Multi-channel deployment (web, WhatsApp, Slack)",
    "Analytics and conversation insights",
    "Handoff to human agents when needed"
  ];

  return (
    <>
      <SEO
        title="AI Chatbot Development Services - Custom AI Assistants | D2 Group"
        description="Build intelligent AI chatbots powered by GPT-4, Claude, and Gemini. Custom chatbot solutions for customer support, sales, and automation."
        keywords="AI chatbot, chatbot development, GPT-4 chatbot, AI assistant, conversational AI, custom chatbot"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              AI-Powered Chatbots
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Intelligent AI Chatbots That Actually Work
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Deploy custom AI chatbots powered by GPT-4, Claude, and Gemini. Automate customer support, 
              qualify leads, and provide instant answers 24/7 with enterprise-grade AI solutions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/contact">Build Your Chatbot <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">See Examples</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Enterprise-Grade AI Chatbot Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Custom AI Chatbot Solutions</h2>
                <p className="text-muted-foreground mb-6">
                  We build AI chatbots that understand your business, customers, and processes. 
                  Using the latest AI models and RAG technology, we create chatbots that deliver accurate, 
                  helpful responses every time.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Use Cases</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Customer Support</h4>
                    <p className="text-sm text-muted-foreground">Automate FAQs and tier-1 support inquiries</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Lead Qualification</h4>
                    <p className="text-sm text-muted-foreground">Engage and qualify leads automatically</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Internal Knowledge Base</h4>
                    <p className="text-sm text-muted-foreground">Help employees find information instantly</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Sales Assistant</h4>
                    <p className="text-sm text-muted-foreground">Guide customers through product selection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Deploy Your AI Chatbot?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build an AI assistant that transforms your customer experience
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
