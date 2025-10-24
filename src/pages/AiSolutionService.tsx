import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Brain,
  Zap,
  Shield,
  Package,
  Code,
  PlayCircle,
  Download,
  ChevronDown,
  ChevronUp,
  Users,
  DollarSign,
  Clock,
  Award,
  Target,
  Activity,
  MessageSquare,
  Bot,
  AlertCircle,
  BarChart3,
  TrendingUp,
  Lock,
  Globe,
  Heart,
  GitBranch,
  FileText,
  Database,
  RefreshCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const AiSolutionService = () => {
  const [showTechnicalDeepDive, setShowTechnicalDeepDive] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom AI Solutions - Chatbots, Recommendation Engines, Anomaly Detection",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "End-to-end AI solutions: chatbots powered by Google Gemini, recommendation engines using vector search, and anomaly detection. 70% automation gain, 25% sales lift, 90% anomaly detection.",
    areaServed: "Global",
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
        name: "Custom AI Solutions",
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does implementation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical implementation is 8 weeks: Discovery & Design (Weeks 1-2) ➡️ Development & Pilot (Weeks 3-5) ➡️ " +
            "Full Deployment & Monitoring (Weeks 6-8). Fast-track: 4-6 weeks for simpler use cases.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical cost and ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Implementation cost: $75K-$100K. Annual savings: $150K+ (support costs + revenue uplift + risk mitigation). " +
            "Break-even: 5-6 months. 12-month ROI: 180%+.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Custom AI Solutions - Chatbots, Recommendations & Anomaly Detection | D2 Group"
        description="70% chat automation, 25% sales lift, 90% anomaly detection. Custom AI solutions with Google Gemini, Supabase vector search, and intelligent workflows."
        keywords="AI chatbot development, recommendation engine, anomaly detection, custom AI solutions, Google Gemini, vector search, AI automation"
        canonicalUrl="/services/ai-chatbots"
        structuredData={[structuredData, breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-primary">How InnovTech Labs Automated 70% of Customer Interactions</span>
              <br />
              <span className="text-foreground">And Boosted Sales 25% with Custom AI Solutions</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Discover how our AI-powered chatbots, recommendation engines, and anomaly detection platform transformed 
              business efficiency and customer satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule Your Free AI Demo
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                View Technical Architecture
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              icon: Zap,
              value: "70%",
              label: "Chat Automation",
              desc: "Manual to AI-driven interactions"
            },
            {
              icon: TrendingUp,
              value: "25%",
              label: "Sales Conversion",
              desc: "Through personalized recommendations"
            },
            {
              icon: Shield,
              value: "90%",
              label: "Anomalies Detected",
              desc: "Proactive alerts and monitoring"
            },
            {
              icon: Star,
              value: "4.7/5",
              label: "Customer Satisfaction",
              desc: "Up from 3.2/5"
            },
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{
              icon: Award,
              value: "10+",
              label: "AI Projects Delivered",
              desc: "Across industries"
            },
            {
              icon: Star,
              value: "4.8/5",
              label: "Client Satisfaction",
              desc: "Verified feedback"
            },
            {
              icon: Brain,
              value: "Google Gemini",
              label: "AI Partner",
            },
            {
              icon: BarChart3,
              value: "180%",
              label: "Average ROI",
              desc: "Within 12 months"
            },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Client Success Story: InnovTech Labs
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Industry:</strong> SaaS/Tech<br />
              <strong>Size:</strong> 200 employees, $40M ARR
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                InnovTech Labs is a fast-growing SaaS company with 200 employees serving enterprise clients. As they 
                scaled from startup to $40M ARR, their customer support became overwhelmed with repetitive inquiries, 
                their sales team struggled with generic product recommendations, and critical system anomalies went 
                undetected until customers complained. The trigger: a major client threatened to leave due to poor 
                support response times, prompting urgent need for AI-driven automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Challenge: Scaling Without Sacrificing Quality
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Manual processes don't scale. As InnovTech Labs grew 3x in 18 months, their support team couldn't keep 
              pace, sales conversion stagnated, and operational risks multiplied. They needed intelligent automation 
              that learns, adapts, and improves—not just replaces humans with scripts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
              icon: MessageSquare,
              title: "Customer Support Overload",
              description: "Support team drowning in 800+ daily inquiries, 70% repetitive (password resets, billing questions, feature explanations). Response time: 4-8 hours. Customer satisfaction dropping.",
              impact: "$200K/year in support costs; 3.2/5 CSAT; major client churn risk"
            },
            {
              icon: Target,
              title: "Poor Conversion from Generic Recommendations",
              description: "Sales team manually recommending products based on gut feel, not data. No personalization. Leads receiving irrelevant product suggestions, resulting in low engagement.",
              impact: "18% conversion rate vs. 25% industry benchmark; $500K+ annual revenue loss"
            },
            {
              icon: AlertCircle,
              title: "Undetected Operational Anomalies",
              description: "Critical issues (server spikes, payment failures, security breaches) discovered reactively through customer complaints, not proactive monitoring.",
              impact: "$150K revenue loss from downtime; compliance risk; reputational damage"
            },
            {
              icon: Users,
              title: "No Scalability Path",
              description: "Traditional solution: hire 10 more support agents ($600K/year). But hiring doesn't solve the knowledge transfer problem or improve response quality.",
              impact: "Unsustainable growth trajectory; hiring lag time 3-4 months"
            },
            {
              icon: Brain,
              title: "Lack of Intelligence Layer",
              description: "Existing systems reactive, rule-based, brittle. No learning from interactions, no context awareness, no ability to handle edge cases gracefully.",
              impact: "10-15% requests escalated to humans unnecessarily; poor user experience"
            },
            ].map((pain, index) => {
              const IconComponent = pain.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="font-semibold text-lg mb-3">{pain.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{pain.description}</p>
                  <div className="bg-destructive/10 p-3 rounded-md">
                    <p className="text-xs font-semibold text-destructive">Impact: {pain.impact}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md animate-fade-in">
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
              "We were at a crossroads. Hire 10 more people and delay scaling, or bet on AI automation. The numbers 
              didn't lie—we needed intelligence, not just manpower. D2 Group showed us how AI could handle 70% of 
              our support load while actually improving customer satisfaction. That's when we knew this was the path forward."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Alex Chen, CTO, InnovTech Labs</cite>
          </div>
        </div>
      </section>

      {/* The Solution - Condensed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: End-to-End Custom AI Platform
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              D2 Group designed and deployed a comprehensive AI platform combining three intelligent systems: 
              (1) <strong>AI Chatbots</strong> powered by Google Gemini LLMs for natural language understanding and 
              context-aware responses; (2) <strong>Recommendation Engine</strong> using Supabase vector database for 
              semantic similarity and personalized product suggestions; (3) <strong>Anomaly Detection</strong> with 
              custom algorithms monitoring operational metrics and alerting teams before issues escalate.
            </p>
          </div>

          {/* System Architecture */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">System Architecture: How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                layer: "1",
                title: "Chat Interface & NLP",
                description: "Customer interactions captured via web chat, Slack, email. Google Gemini LLM processes natural language, understands intent, extracts context.",
                icon: MessageSquare
              },
              {
                layer: "2",
                title: "Recommendation Engine",
                description: "User behavior, purchase history, preferences stored as vectors in Supabase. Cohere rerank fine-tunes for precision. Top recommendations delivered in real-time.",
                icon: Target
              },
              {
                layer: "3",
                title: "Anomaly Detection",
                description: "System metrics (latency, error rates, payment failures) continuously monitored. Custom algorithms detect deviations. Alerts sent to Slack/PagerDuty.",
                icon: AlertCircle
              },
              {
                layer: "4",
                title: "Workflow Orchestration",
                description: "n8n coordinates all systems. Triggers workflows based on events. Routes data between chatbot, recommendations, anomaly detection. Logs everything for audit.",
                icon: GitBranch
              },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                        {item.layer}
                      </div>
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-md mb-3">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Features - Condensed */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Key Platform Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                icon: Bot,
                title: "Intelligent AI Chatbots",
                description: "Context-aware conversations powered by Google Gemini. Handles 70% of inquiries without human intervention. Multilingual support.",
                example: "Customer: 'I forgot my password' ➡️ Bot: instantly sends reset link + verifies identity"
              },
              {
                icon: Target,
                title: "Personalized Recommendations",
                description: "Vector-based similarity search matches users with relevant products. Cohere rerank ensures precision. Real-time adaptation.",
                example: "User views 'Enterprise Plan' ➡️ System recommends 'API Add-on' (25% conversion lift)"
              },
              {
                icon: Shield,
                title: "Proactive Anomaly Detection",
                description: "Monitors 50+ operational metrics. Detects abnormal patterns before customer impact. Auto-escalates critical issues.",
                example: "Payment gateway latency spikes ➡️ Alert sent to engineering within 60 seconds"
              },
              {
                icon: Globe,
                title: "Multilingual & Context-Aware",
                description: "Supports multiple languages natively. Understands context from previous interactions. No repetitive questions.",
                example: "Customer asked about billing last week ➡️ Bot remembers, references conversation"
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Live metrics on chat resolution, recommendation performance, anomaly trends. Insights for optimization.",
                example: "Dashboard shows 72% auto-resolution, 18% conversion uplift, 0.3% false positives"
              },
              {
                icon: Activity,
                title: "Intelligent Escalation",
                description: "When bot confidence drops, seamlessly hands off to human agent with full context. No information loss.",
                example: "Complex refund request ➡️ Bot gathers details, escalates with summary"
              },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h4 className="font-semibold text-md mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-xs italic">{feature.example}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Journey - Condensed */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Implementation Journey: 8-Week Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              phase: "Discovery & Design",
              duration: "Week 1-2",
              activities: [
                "Map customer support patterns",
                "Analyze user behavior data",
                "Define anomaly metrics",
                "Design system architecture"
              ],
              insight: "80% of support inquiries fit into 12 categories—perfect for AI automation.",
              icon: FileText
            },
            {
              phase: "Development & Pilot",
              duration: "Week 3-5",
              activities: [
                "Build chatbot with top flows",
                "Implement recommendation engine",
                "Deploy anomaly detection",
                "Integrate with existing systems"
              ],
              insight: "Pilot with 10% traffic showed 65% auto-resolution. Confidence grew rapidly.",
              icon: Code
            },
            {
              phase: "Full Deployment",
              duration: "Week 6-8",
              activities: [
                "Scale to 100% traffic",
                "Expand recommendations",
                "Fine-tune anomaly thresholds",
                "Train support team"
              ],
              insight: "First week: 70% auto-resolution, 25% conversion lift, 90% anomaly accuracy.",
              icon: TrendingUp
            },
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-fade-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-4">
                    <IconComponent className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-1">{phase.phase}</h3>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Activities:</h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0 text-primary mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-md">
                    <p className="text-xs"><strong>Key Learning:</strong> {phase.insight}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results - Showing key metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">
            Results & Impact: Transformation at Scale
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            Within 8 weeks, InnovTech Labs achieved what would have required 10+ new hires—intelligent automation 
            that learns and improves continuously.
          </p>

          {/* ROI Card */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 animate-fade-in mb-12">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">💰 ROI Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Implementation Cost</p>
                <p className="text-3xl font-bold text-primary">$85,000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
                <p className="text-3xl font-bold text-primary">$650,000+</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Break-Even</p>
                <p className="text-3xl font-bold text-primary">1.6 months</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">12-Month ROI</p>
                <p className="text-3xl font-bold text-primary">665%</p>
              </div>
            </div>
          </Card>

          {/* Impact Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              title: "Customer Support",
              icon: Users,
              impacts: [
                "70% inquiries handled automatically",
                "Response time: 4-8 hours ➡️ <5 minutes",
                "CSAT improved: 3.2/5 ➡️ 4.7/5"
              ]
            },
            {
              title: "Sales & Revenue",
              icon: DollarSign,
              impacts: [
                "25% conversion rate increase",
                "$500K+ additional annual revenue",
                "Personalized recommendations drive engagement"
              ]
            },
            {
              title: "Operations & Risk",
              icon: Shield,
              impacts: [
                "90% anomalies detected proactively",
                "Revenue protection from downtime prevention",
                "Compliance improved through monitoring"
              ]
            },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-semibold text-lg mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.impacts.map((impact, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              quote: "The AI chatbot doesn't feel like a bot—it understands context, remembers conversations, and actually solves problems. Our customer satisfaction went from 3.2 to 4.7 out of 5. That's transformational.",
              author: "Alex Chen",
              role: "CTO, InnovTech Labs"
            },
            {
              quote: "We were skeptical that AI recommendations could beat our sales team's gut feel. Turns out, data wins. 25% conversion lift in 8 weeks.",
              author: "Sarah Kim",
              role: "VP Sales, InnovTech Labs"
            },
            {
              quote: "Anomaly detection saved us from a $500K revenue loss. Payment gateway started failing, we knew within 5 minutes. That's proactive AI.",
              author: "Marcus Wu",
              role: "VP Operations, InnovTech Labs"
            },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <blockquote className="text-sm text-muted-foreground italic mb-4">{testimonial.quote}</blockquote>
                <div className="border-t pt-4">
                  <cite className="font-semibold not-italic block">{testimonial.author}</cite>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-8 animate-pulse">
            Ready to Transform with AI?
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            InnovTech Labs achieved 70% automation, 25% sales lift, and $650K annual value. 
            <strong>Your business can achieve similar results.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
              Schedule Your Free AI Demo
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" onClick={() => (window.location.href = "/contact")}>
              Download Technical Architecture
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ - Condensed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="timeline">
              <AccordionTrigger>How long does implementation take?</AccordionTrigger>
              <AccordionContent>
                Typical implementation is 8 weeks: Discovery & Design (Weeks 1-2) ➡️ Development & Pilot (Weeks 3-5) ➡️ 
                Full Deployment & Monitoring (Weeks 6-8). Fast-track: 4-6 weeks for simpler use cases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>What is the typical cost and ROI?</AccordionTrigger>
              <AccordionContent>
                Implementation cost: $75K-$100K. Annual savings: $150K+ (support costs + revenue uplift + risk mitigation). 
                Break-even: 5-6 months. 12-month ROI: 180%+.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="languages">
              <AccordionTrigger>Do you support multiple languages?</AccordionTrigger>
              <AccordionContent>
                Yes. Google Gemini supports 100+ languages natively. We've deployed chatbots in English, Vietnamese, 
                Spanish, French, German, Japanese, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integration">
              <AccordionTrigger>Can you integrate with our existing systems?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We integrate with CRM (Salesforce, HubSpot), support platforms (Zendesk, Intercom), 
                e-commerce (Shopify, WooCommerce), and custom APIs. n8n orchestration connects everything seamlessly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hallucination">
              <AccordionTrigger>How do you prevent AI hallucinations?</AccordionTrigger>
              <AccordionContent>
                RAG (Retrieval-Augmented Generation) grounds responses in your knowledge base. LLM only generates answers 
                citing retrieved sources. Confidence scoring escalates low-confidence queries. Result: 0.2% hallucination 
                rate vs. 8-12% without RAG.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customization">
              <AccordionTrigger>Can the system be customized for our industry?</AccordionTrigger>
              <AccordionContent>
                Yes, that's our differentiator. Unlike off-the-shelf solutions, we build custom AI tailored to YOUR 
                business logic, terminology, workflows, compliance requirements. Deployed across e-commerce, healthcare, 
                finance, SaaS—each highly customized.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold font-heading text-center mb-12">Why Trust D2 Group</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[{
              icon: Award,
              stat: "10+",
              label: "AI projects delivered"
            },
            {
              icon: Star,
              stat: "4.8/5",
              label: "Client satisfaction"
            },
            {
              icon: Brain,
              stat: "Google Gemini",
              label: "AI Partner"
            },
            {
              icon: BarChart3,
              stat: "180%",
              label: "Average ROI"
            },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiSolutionService;
