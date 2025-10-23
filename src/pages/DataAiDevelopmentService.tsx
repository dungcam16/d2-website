import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Sparkles,
  Zap,
  FileText,
  PlayCircle,
  Download,
  BarChart3,
  TrendingUp,
  Settings,
  MessageCircle,
  AlertTriangle,
  Target,
  Clock,
  DollarSign,
  Users,
  Shield,
  Wrench,
  Layers,
  Database,
  GitBranch,
  Activity,
  ChevronDown,
  ChevronUp,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const DataAiDevelopmentService = () => {
  const [showTechnicalDeepDive, setShowTechnicalDeepDive] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data & AI Development - Predictive Models, ML, NLP, Computer Vision",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Build machine learning models, predictive analytics, and intelligent data pipelines that unlock hidden patterns in your business data—turning information overload into actionable intelligence.",
    areaServed: "Vietnam",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://d2group.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://d2group.co/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Data & AI Development",
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does implementation actually take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical 12-16 weeks depending on complexity. Simple forecasting models can go live in 8 weeks; complex multi-model systems take 16-20 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate will our model be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depends on your data & problem. Retail forecasting: 80-90%. Financial time-series: 70-80%. Healthcare outcomes: 75-85%.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Data & AI Development - Predictive ML Models & Analytics | D2 Group"
        description="Build machine learning models, predictive analytics, and intelligent data pipelines that unlock hidden patterns in your business data—turning information overload into actionable intelligence."
        keywords="machine learning model development, predictive analytics platform, data pipeline automation, custom ML solutions, ensemble machine learning, real-time forecasting, data science outsourcing, AI development services"
        canonicalUrl="/services/data-ai-development"
        structuredData={[structuredData, breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Turn Raw Data Into Competitive Intelligence.{" "}
              <span className="text-primary">3x Faster Insights</span> With Predictive AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Build machine learning models, predictive analytics, and intelligent data pipelines that unlock hidden
              patterns in your business data—turning information overload into actionable intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule AI Strategy Session
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                Download: ML Use Case Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, value: "3x", label: "Faster Analytics", desc: "Raw data → Instant insights" },
              { icon: Target, value: "85%", label: "Prediction Accuracy", desc: "vs. 45% manual methods" },
              { icon: DollarSign, value: "$2M+", label: "Revenue Unlocked", desc: "New AI-driven products" },
              { icon: Clock, value: "24 hrs", label: "Model to Production", desc: "From development to live" },
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

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around flex-wrap gap-4">
            {[
              "/images/logos/trust/logo-aws.svg",
              "/images/logos/trust/logo-google.svg",
              "/images/logos/trust/logo-microsoft.svg",
              "/images/logos/trust/logo-nvidia.svg",
              "/images/logos/trust/logo-snowflake.svg",
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-12 object-contain grayscale opacity-75 hover:opacity-100 transition-opacity duration-200"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 animate-fade-in">
            AI Solutions That Scale: From Startup to Enterprise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
            We partner with ambitious companies to build and deploy AI solutions that drive measurable business impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "E-Commerce", icon: Sparkles, description: "Personalized recommendations that boost sales." },
              { name: "Finance", icon: TrendingUp, description: "Risk models that cut losses by 40%." },
              { name: "Healthcare", icon: Shield, description: "Diagnostic tools for faster, more accurate results." },
              { name: "Manufacturing", icon: Wrench, description: "Predictive maintenance that eliminates downtime." },
            ].map((client, index) => {
              const IconComponent = client.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold font-heading mb-4">The Challenge: Data Overload, Insight Drought</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Most companies are drowning in data but starving for insights. Legacy systems and manual processes
                can’t keep up with the volume, velocity, and variety of modern data.
              </p>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Siloed data sources prevent a unified view</li>
                <li>Lack of skilled data scientists and AI engineers</li>
                <li>Difficulty deploying models into production</li>
                <li>Inability to adapt to changing market conditions</li>
              </ul>
            </div>
            <div className="animate-fade-in">
              <img
                src="/images/illustrations/challenge.svg"
                alt="Data Challenge"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <img
                src="/images/illustrations/solution.svg"
                alt="AI Solution"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold font-heading mb-4">The Solution: AI-Powered Insights at Scale</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We build custom AI solutions that transform your data into actionable intelligence. Our team of experts
                works with you to identify the right use cases, build and deploy models, and integrate them into your
                existing workflows.
              </p>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>End-to-end data pipeline automation</li>
                <li>Custom machine learning model development</li>
                <li>Real-time predictive analytics dashboards</li>
                <li>Seamless integration with your existing systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Our Proven Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1. Discovery",
                description: "We work with you to understand your business goals and identify the right AI use cases.",
                icon: MessageCircle,
              },
              {
                step: "2. Development",
                description: "Our team of experts builds custom machine learning models tailored to your specific needs.",
                icon: Settings,
              },
              {
                step: "3. Deployment",
                description: "We seamlessly integrate our solutions into your existing workflows and provide ongoing support.",
                icon: Zap,
              },
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{process.step}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Tangible Results, Real-World Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "30% Increase in Sales",
                description: "Personalized recommendations drive higher conversion rates and average order values.",
                icon: TrendingUp,
              },
              {
                title: "40% Reduction in Costs",
                description: "Predictive maintenance eliminates downtime and optimizes resource allocation.",
                icon: DollarSign,
              },
              {
                title: "90% Customer Satisfaction",
                description: "AI-powered chatbots provide instant support and resolve issues faster.",
                icon: Users,
              },
            ].map((result, index) => {
              const IconComponent = result.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{result.title}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-heading mb-4 animate-fade-in">Technical Deep Dive</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Explore the technical details of our AI solutions and how they can be applied to your business.
            </p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => setShowTechnicalDeepDive(!showTechnicalDeepDive)}
            >
              {showTechnicalDeepDive ? (
                <>
                  Hide Details <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show Details <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {showTechnicalDeepDive && (
            <div className="mt-8 animate-fade-in">
              <Accordion type="single" collapsible>
                <AccordionItem value="data-pipeline">
                  <AccordionTrigger>Data Pipeline Automation</AccordionTrigger>
                  <AccordionContent>
                    We automate the entire data pipeline, from ingestion to transformation to storage. Our solutions
                    support a wide range of data sources, including databases, cloud storage, and streaming platforms.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="model-development">
                  <AccordionTrigger>Custom Model Development</AccordionTrigger>
                  <AccordionContent>
                    Our team of experts builds custom machine learning models tailored to your specific needs. We
                    specialize in a variety of techniques, including supervised learning, unsupervised learning, and
                    reinforcement learning.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="deployment">
                  <AccordionTrigger>Seamless Deployment</AccordionTrigger>
                  <AccordionContent>
                    We seamlessly integrate our solutions into your existing workflows and provide ongoing support. Our
                    deployment options include cloud-based deployment, on-premise deployment, and hybrid deployment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "D2 Group helped us transform our data into actionable intelligence. Their AI solutions have had a significant impact on our bottom line.",
                author: "John Smith, CEO of Acme Corp",
              },
              {
                quote:
                  "We were drowning in data before we partnered with D2 Group. Their team of experts helped us build custom machine learning models that have revolutionized our business.",
                author: "Jane Doe, CTO of Beta Inc",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <blockquote className="text-lg text-muted-foreground italic mb-4">{testimonial.quote}</blockquote>
                <cite className="font-semibold">{testimonial.author}</cite>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Explore Related Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Predictive Maintenance",
                description: "Eliminate downtime and optimize resource allocation with predictive maintenance.",
                icon: Wrench,
                link: "/services/predictive-maintenance",
              },
              {
                title: "Fraud Detection",
                description: "Detect and prevent fraudulent transactions in real-time with AI-powered fraud detection.",
                icon: AlertTriangle,
                link: "/services/fraud-detection",
              },
              {
                title: "Personalized Recommendations",
                description: "Drive higher conversion rates and average order values with personalized recommendations.",
                icon: Sparkles,
                link: "/services/personalized-recommendations",
              },
            ].map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  <Button variant="link" className="mt-2" onClick={() => (window.location.href = useCase.link)}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-8 animate-pulse">
            Ready to Transform Your Data into Actionable Intelligence?
          </h2>
          <p className="text-xl mb-12 animate-fade-in">
            Schedule a free consultation with our AI experts to discuss your specific needs and how we can help you
            achieve your business goals.
          </p>
          <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
            Schedule AI Strategy Session
            <PlayCircle className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="implementation-time">
              <AccordionTrigger>How long does implementation actually take?</AccordionTrigger>
              <AccordionContent>
                Typical 12-16 weeks depending on complexity. Simple forecasting models can go live in 8 weeks; complex
                multi-model systems take 16-20 weeks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="model-accuracy">
              <AccordionTrigger>How accurate will our model be?</AccordionTrigger>
              <AccordionContent>
                Depends on your data & problem. Retail forecasting: 80-90%. Financial time-series: 70-80%. Healthcare
                outcomes: 75-85%.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="data-security">
              <AccordionTrigger>How secure is our data?</AccordionTrigger>
              <AccordionContent>
                We use state-of-the-art security measures to protect your data. Our solutions are compliant with all
                major industry regulations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAiDevelopmentService;
