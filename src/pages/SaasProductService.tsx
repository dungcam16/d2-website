import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Code,
  Cloud,
  Rocket,
  MessageSquare,
  Bot,
  Shield,
  Zap,
  TrendingUp,
  Target,
  Brain,
  Activity,
  Download,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  Users,
  DollarSign,
  Clock,
  Award,
  AlertCircle,
  Settings,
  Database,
  Lock,
  GitBranch,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SaasProductService = () => {
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
          text: "Typical implementation is 8 weeks: Discovery & Design (Weeks 1-2), Development & Pilot (Weeks 3-5), Full Deployment & Monitoring (Weeks 6-8).",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical cost and ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Implementation cost: $75K-$100K. Annual savings: $150K+. Break-even: 5-6 months. 12-month ROI: 180%+.",
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
        canonicalUrl="/services/saas-product"
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
            {[
              { icon: Zap, value: "70%", label: "Chat Automation", desc: "Manual to AI-driven interactions" },
              {
                icon: TrendingUp,
                value: "25%",
                label: "Sales Conversion",
                desc: "Through personalized recommendations",
              },
              { icon: Shield, value: "90%", label: "Anomalies Detected", desc: "Proactive alerts and monitoring" },
              { icon: Star, value: "4.7/5", label: "Customer Satisfaction", desc: "Up from 3.2/5" },
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
            {[
              { icon: Award, value: "10+", label: "AI Projects Delivered", desc: "Across industries" },
              { icon: Star, value: "4.8/5", label: "Client Satisfaction", desc: "Verified feedback" },
              { icon: Rocket, value: "180%", label: "Average ROI", desc: "Within 12 months" },
              { icon: Clock, value: "8 Weeks", label: "Average Deployment", desc: "From concept to production" },
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Client Success Story: InnovTech Labs</h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Industry:</strong> SaaS/Tech
              <br />
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
            {[
              {
                icon: MessageSquare,
                title: "Customer Support Overload",
                description:
                  "Support team drowning in 800+ daily inquiries, 70% repetitive (password resets, billing questions, feature explanations). Response time: 4-8 hours. Customer satisfaction dropping.",
                impact: "$200K/year in support costs; 3.2/5 CSAT; major client churn risk",
              },
              {
                icon: Target,
                title: "Poor Conversion from Generic Recommendations",
                description:
                  "Sales team manually recommending products based on gut feel, not data. No personalization. Leads receiving irrelevant product suggestions, resulting in low engagement.",
                impact: "18% conversion rate vs. 25% industry benchmark; $500K+ annual revenue loss",
              },
              {
                icon: AlertCircle,
                title: "Undetected Operational Anomalies",
                description:
                  "Critical issues (server spikes, payment failures, security breaches) discovered reactively through customer complaints, not proactive monitoring.",
                impact: "$150K revenue loss from downtime; compliance risk; reputational damage",
              },
              {
                icon: Users,
                title: "No Scalability Path",
                description:
                  "Traditional solution: hire 10 more support agents ($600K/year). But hiring doesn't solve the knowledge transfer problem or improve response quality.",
                impact: "Unsustainable growth trajectory; hiring lag time 3-4 months",
              },
              {
                icon: Brain,
                title: "Lack of Intelligence Layer",
                description:
                  "Existing systems reactive, rule-based, brittle. No learning from interactions, no context awareness, no ability to handle edge cases gracefully.",
                impact: "10-15% requests escalated to humans unnecessarily; poor user experience",
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
              didn't lie—we needed intelligence, not just manpower. D2 Group showed us how AI could handle 70% of our
              support load while actually improving customer satisfaction. That's when we knew this was the path
              forward."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Alex Chen, CTO, InnovTech Labs</cite>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: End-to-End Custom AI Platform
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              D2 Group designed and deployed a comprehensive AI platform combining three intelligent systems: (1){" "}
              <strong>AI Chatbots</strong> powered by Google Gemini LLMs for natural language understanding and
              context-aware responses; (2) <strong>Recommendation Engine</strong> using Supabase vector database for
              semantic similarity and personalized product suggestions; (3) <strong>Anomaly Detection</strong> with
              custom algorithms monitoring operational metrics and alerting teams before issues escalate.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The platform integrates seamlessly with InnovTech's existing systems through n8n workflow orchestration,
              enabling real-time data flow, automated decision-making, and continuous learning from user interactions.
              Unlike off-the-shelf solutions, this custom approach adapts to InnovTech's unique business logic,
              terminology, and workflows—delivering intelligent automation that feels native, not bolted-on.
            </p>
          </div>

          {/* System Architecture */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">System Architecture: How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  layer: "1",
                  title: "Chat Interface & NLP",
                  description:
                    "Customer interactions captured via web chat, Slack, email. Google Gemini LLM processes natural language, understands intent, extracts context.",
                  icon: MessageSquare,
                },
                {
                  layer: "2",
                  title: "Recommendation Engine",
                  description:
                    "User behavior, purchase history, preferences stored as vectors in Supabase. Cohere rerank fine-tunes for precision. Top recommendations delivered in real-time.",
                  icon: Target,
                },
                {
                  layer: "3",
                  title: "Anomaly Detection",
                  description:
                    "System metrics (latency, error rates, payment failures) continuously monitored. Custom algorithms detect deviations. Alerts sent to Slack/PagerDuty.",
                  icon: AlertCircle,
                },
                {
                  layer: "4",
                  title: "Workflow Orchestration",
                  description:
                    "n8n coordinates all systems. Triggers workflows based on events. Routes data between chatbot, recommendations, anomaly detection. Logs everything for audit.",
                  icon: GitBranch,
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

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Key Platform Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Bot,
                  title: "Intelligent AI Chatbots",
                  description:
                    "Context-aware conversations powered by Google Gemini. Handles 70% of inquiries without human intervention. Multilingual support (English, Vietnamese, Spanish).",
                  example:
                    "Customer: 'I forgot my password' → Bot: instantly sends reset link + verifies identity securely",
                },
                {
                  icon: Target,
                  title: "Personalized Recommendations",
                  description:
                    "Vector-based similarity search matches users with relevant products/content. Cohere rerank ensures precision. Real-time adaptation based on behavior.",
                  example:
                    "User views 'Enterprise Plan' → System recommends 'API Add-on' + 'Priority Support' (25% conversion lift)",
                },
                {
                  icon: Shield,
                  title: "Proactive Anomaly Detection",
                  description:
                    "Monitors 50+ operational metrics. Detects abnormal patterns before customer impact. Auto-escalates critical issues to on-call team.",
                  example:
                    "Payment gateway latency spikes 3σ above baseline → Alert sent to engineering team within 60 seconds",
                },
                {
                  icon: Globe,
                  title: "Multilingual & Context-Aware",
                  description:
                    "Supports multiple languages natively. Understands context from previous interactions, user profile, current page. No repetitive questions.",
                  example:
                    "Customer asked about billing last week → Bot remembers, references previous conversation naturally",
                },
                {
                  icon: BarChart3,
                  title: "Real-Time Analytics Dashboard",
                  description:
                    "Live metrics on chat resolution rate, recommendation performance, anomaly trends. Insights for continuous optimization.",
                  example:
                    "Dashboard shows 72% auto-resolution rate, 18% conversion uplift, 0.3% false positive anomaly rate",
                },
                {
                  icon: Activity,
                  title: "Intelligent Escalation",
                  description:
                    "When bot confidence drops below threshold, seamlessly hands off to human agent with full context. No information loss.",
                  example: "Complex refund request → Bot gathers details, escalates to agent with summary + context",
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

      {/* Implementation Journey */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Implementation Journey: 8-Week Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                phase: "Discovery & Design",
                duration: "Week 1-2",
                activities: [
                  "Map customer support patterns and FAQs",
                  "Analyze user behavior and conversion data",
                  "Define anomaly detection metrics",
                  "Design system architecture and data flows",
                ],
                insight:
                  "80% of support inquiries fit into 12 categories—perfect for AI automation. Identified quick wins for Week 3 deployment.",
                icon: FileText,
              },
              {
                phase: "Development & Pilot",
                duration: "Week 3-5",
                activities: [
                  "Build chatbot with top 12 conversation flows",
                  "Implement recommendation engine with pilot products",
                  "Deploy anomaly detection for critical metrics",
                  "Integrate with existing CRM and support systems",
                ],
                insight:
                  "Pilot phase with 10% traffic showed 65% auto-resolution rate. Confidence grew rapidly as team saw results.",
                icon: Code,
              },
              {
                phase: "Full Deployment & Monitoring",
                duration: "Week 6-8",
                activities: [
                  "Scale chatbot to 100% traffic",
                  "Expand recommendations across all products",
                  "Fine-tune anomaly detection thresholds",
                  "Train support team on AI-human handoff",
                ],
                insight:
                  "First week at full scale: 70% auto-resolution, 25% recommendation conversion lift, 90% anomaly detection accuracy. Team amazed.",
                icon: Rocket,
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
                    <p className="text-xs">
                      <strong>Key Learning:</strong> {phase.insight}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">
            Results & Impact: Transformation at Scale
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            Within 8 weeks, InnovTech Labs achieved what would have required 10+ new hires and months of training—
            intelligent automation that learns, adapts, and improves continuously.
          </p>

          {/* Quantitative Results Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary/20">
                  <th className="border p-3 text-left font-semibold">Metric</th>
                  <th className="border p-3 text-center font-semibold">Before</th>
                  <th className="border p-3 text-center font-semibold">After</th>
                  <th className="border p-3 text-center font-semibold">Change</th>
                  <th className="border p-3 text-left font-semibold">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: "Support Auto-Resolution Rate",
                    before: "0%",
                    after: "70%",
                    change: "+70%",
                    impact: "560 daily inquiries handled automatically vs. manually",
                  },
                  {
                    metric: "Average Response Time",
                    before: "4-8 hours",
                    after: "<5 minutes",
                    change: "95% faster",
                    impact: "Customer satisfaction improved from 3.2 to 4.7/5",
                  },
                  {
                    metric: "Sales Conversion Rate",
                    before: "18%",
                    after: "22.5%",
                    change: "+25%",
                    impact: "$500K+ additional annual revenue",
                  },
                  {
                    metric: "Annual Support Costs",
                    before: "$200K",
                    after: "$50K",
                    change: "-75%",
                    impact: "$150K savings without new hires",
                  },
                  {
                    metric: "Anomaly Detection Time",
                    before: "2-6 hours",
                    after: "<5 minutes",
                    change: "98% faster",
                    impact: "Revenue protection; customer trust preserved",
                  },
                  {
                    metric: "Support Agent Productivity",
                    before: "20 tickets/day",
                    after: "35 tickets/day",
                    change: "+75%",
                    impact: "Team focuses on complex, high-value issues",
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-secondary/5"}>
                    <td className="border p-3 font-medium">{row.metric}</td>
                    <td className="border p-3 text-center">{row.before}</td>
                    <td className="border p-3 text-center text-primary font-semibold">{row.after}</td>
                    <td className="border p-3 text-center font-semibold">{row.change}</td>
                    <td className="border p-3 text-sm">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ROI Calculation */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 animate-fade-in mb-12">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">ROI Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Implementation Cost</p>
                <p className="text-3xl font-bold text-primary">$85,000</p>
                <p className="text-xs text-muted-foreground mt-2">8-week build + training</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
                <p className="text-3xl font-bold text-primary">$650,000+</p>
                <p className="text-xs text-muted-foreground mt-2">Support costs + revenue uplift</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Break-Even</p>
                <p className="text-3xl font-bold text-primary">1.6 months</p>
                <p className="text-xs text-muted-foreground mt-2">Fast payback</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">12-Month ROI</p>
                <p className="text-3xl font-bold text-primary">665%</p>
                <p className="text-xs text-muted-foreground mt-2">$650K benefit / $85K cost</p>
              </div>
            </div>
          </Card>

          {/* Qualitative Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For Customer Support Team",
                icon: Users,
                impacts: [
                  "Freed from repetitive inquiries; focus on complex, rewarding cases",
                  "Morale improved; turnover dropped from 35% to 12%",
                  "Career development: learned to manage AI systems, not just answer tickets",
                ],
              },
              {
                title: "For Sales & Revenue",
                icon: DollarSign,
                impacts: [
                  "25% conversion lift = $500K additional annual revenue",
                  "Recommendations now data-driven, not gut-feel",
                  "Faster sales cycles; leads receive relevant info immediately",
                ],
              },
              {
                title: "For Operations & Risk",
                icon: Shield,
                impacts: [
                  "Anomalies detected before customer impact; trust preserved",
                  "Operational risk reduced 90%; compliance improved",
                  "Proactive monitoring replaces reactive firefighting",
                ],
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

      {/* Technical Deep Dive */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-heading mb-4 animate-fade-in">Technical Deep Dive</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              For Technical Decision Makers — See how we built enterprise-grade AI systems
            </p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => setShowTechnicalDeepDive(!showTechnicalDeepDive)}
            >
              {showTechnicalDeepDive ? (
                <>
                  Hide Technical Details <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show Technical Details <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {showTechnicalDeepDive && (
            <div className="mt-8 animate-fade-in">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="rag">
                  <AccordionTrigger className="text-lg font-semibold">RAG Architecture for Chatbots</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Retrieval-Augmented Generation (RAG)</strong> prevents hallucinations by grounding
                        responses in company knowledge base:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>User query embedded into vector using Google Gemini embeddings</li>
                        <li>Supabase vector search retrieves top 5 most relevant knowledge base articles</li>
                        <li>Retrieved context + user query sent to Gemini LLM</li>
                        <li>LLM generates response citing retrieved sources (not inventing information)</li>
                        <li>Confidence score calculated; if &lt;0.7, escalate to human</li>
                      </ol>
                      <p className="mt-4 font-semibold">Result: 0.2% hallucination rate vs. 8-12% without RAG</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vector-search">
                  <AccordionTrigger className="text-lg font-semibold">
                    Vector Search & Cohere Rerank for Recommendations
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Two-stage recommendation pipeline:</strong>
                      </p>
                      <div>
                        <p className="font-semibold mb-2">Stage 1: Vector Similarity (Supabase pgvector)</p>
                        <ul className="list-disc pl-5">
                          <li>User profile, behavior, preferences embedded into 768-dimensional vector</li>
                          <li>All products embedded similarly</li>
                          <li>Cosine similarity search returns top 50 candidates</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold mb-2">Stage 2: Cohere Rerank (Precision Tuning)</p>
                        <ul className="list-disc pl-5">
                          <li>Top 50 candidates re-ranked by Cohere model trained on InnovTech data</li>
                          <li>Considers business rules (margins, inventory, promotions)</li>
                          <li>Final top 5 recommendations returned</li>
                        </ul>
                      </div>
                      <p className="mt-4 font-semibold">Result: 25% conversion lift; 18% → 22.5% rate</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="anomaly">
                  <AccordionTrigger className="text-lg font-semibold">Anomaly Detection Algorithms</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Multi-method anomaly detection:</strong>
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          <strong>Statistical Baseline:</strong> Calculate mean, std dev for each metric over 30 days.
                          Alert if value &gt;3σ from mean.
                        </li>
                        <li>
                          <strong>Time-Series Forecasting:</strong> Prophet model predicts expected value. Compare
                          actual vs. predicted; flag large deviations.
                        </li>
                        <li>
                          <strong>Multi-Dimensional Clustering:</strong> Isolation Forest detects outliers in 20+
                          metrics simultaneously (catches correlated anomalies missed by single-metric thresholds).
                        </li>
                        <li>
                          <strong>Rate-of-Change Detection:</strong> Flag sudden spikes/drops (e.g., payment failures
                          jump from 2% to 15% in 10 minutes).
                        </li>
                      </ol>
                      <p className="mt-4 font-semibold">Result: 90% true positive rate; 0.3% false positive rate</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="orchestration">
                  <AccordionTrigger className="text-lg font-semibold">n8n Workflow Orchestration</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>n8n acts as central orchestration layer coordinating all AI systems:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Event Triggers:</strong> Webhook from chat → triggers chatbot workflow
                        </li>
                        <li>
                          <strong>Data Routing:</strong> User behavior events → recommendation engine → CRM update
                        </li>
                        <li>
                          <strong>Error Handling:</strong> Retry logic if API call fails; fallback to human escalation
                        </li>
                        <li>
                          <strong>Monitoring:</strong> Log every interaction, decision, confidence score for debugging
                        </li>
                        <li>
                          <strong>Continuous Learning:</strong> Feedback loop updates embeddings, retrains models
                          monthly
                        </li>
                      </ul>
                      <p className="font-semibold mt-4">
                        Why n8n: Visual workflow builder enables non-engineers to modify flows. Fast iteration (days,
                        not weeks).
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech-stack">
                  <AccordionTrigger className="text-lg font-semibold">Complete Technology Stack</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-secondary/20 p-4 rounded-md">
                      <p className="font-mono text-xs space-y-1">
                        <strong>🛠️ Technologies & Tools:</strong>
                        <br />
                        <br />• <strong>LLM & AI:</strong> Google Gemini (embeddings + chat), Cohere (rerank)
                        <br />• <strong>Vector Database:</strong> Supabase pgvector (embeddings storage + similarity
                        search)
                        <br />• <strong>Orchestration:</strong> n8n (workflow automation + event coordination)
                        <br />• <strong>Backend:</strong> Node.js + Express (API layer)
                        <br />• <strong>Database:</strong> PostgreSQL (structured data + audit logs)
                        <br />• <strong>Monitoring:</strong> Datadog (metrics + alerts), Sentry (error tracking)
                        <br />• <strong>Frontend:</strong> React + TypeScript (admin dashboard + chat UI)
                        <br />• <strong>Infrastructure:</strong> Google Cloud Platform (compute + storage)
                      </p>
                    </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The AI chatbot doesn't feel like a bot—it understands context, remembers conversations, and actually solves problems. Our customer satisfaction went from 3.2 to 4.7 out of 5. That's not incremental; that's transformational.",
                author: "Alex Chen",
                role: "CTO, InnovTech Labs",
              },
              {
                quote:
                  "We were skeptical that AI recommendations could beat our sales team's gut feel. Turns out, data wins. 25% conversion lift in 8 weeks. We're now exploring AI for lead scoring and forecasting too.",
                author: "Sarah Kim",
                role: "VP Sales, InnovTech Labs",
              },
              {
                quote:
                  "Anomaly detection saved us from what could have been a $500K revenue loss. Payment gateway started failing, and we knew within 5 minutes—not 4 hours later when customers complained. That's the value of proactive AI.",
                author: "Marcus Wu",
                role: "VP Operations, InnovTech Labs",
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

      {/* Related Use Cases */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">Related Use Cases</h2>
          <p className="text-center text-muted-foreground mb-12">Custom AI solutions adapt to any industry</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "E-Commerce Product Discovery",
                description:
                  "AI-powered search and recommendations improve product discovery. Vector similarity matches user intent with catalog.",
                results: "30% increase in average order value; 20% conversion lift",
                icon: Target,
                industry: "Retail",
              },
              {
                title: "Healthcare Patient Support",
                description:
                  "HIPAA-compliant chatbots answer patient questions, schedule appointments, triage symptoms before human review.",
                results: "60% reduction in call center volume; improved patient satisfaction",
                icon: Heart,
                industry: "Healthcare",
              },
              {
                title: "Financial Fraud Detection",
                description:
                  "Real-time anomaly detection flags suspicious transactions, prevents fraud before loss occurs.",
                results: "95% fraud detection rate; 0.1% false positive rate; $2M+ annual savings",
                icon: Shield,
                industry: "Finance",
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <useCase.icon className="h-10 w-10 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground mb-2">{useCase.industry}</p>
                </div>
                <h3 className="font-semibold text-lg mb-3">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                <div className="bg-primary/10 p-3 rounded-md">
                  <p className="text-xs font-semibold">Results: {useCase.results}</p>
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            InnovTech Labs achieved 70% automation, 25% sales lift, and $650K annual value.
            <strong> Your business can achieve similar results.</strong>
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg mb-4">What You Get:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Custom AI chatbots (context-aware, multilingual)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Intelligent recommendation engine (vector-based)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Proactive anomaly detection (real-time alerts)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>End-to-end orchestration (n8n workflows)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>8-week deployment (discovery to production)</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule Your Free AI Demo
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30"
              onClick={() => (window.location.href = "/contact")}
            >
              Download Technical Architecture
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              <span>Free consultation, zero commitment</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>8 weeks from concept to production</span>
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              <span>ROI guarantee: 180%+ within 12 months</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="timeline">
              <AccordionTrigger>How long does implementation take?</AccordionTrigger>
              <AccordionContent>
                Typical implementation is 8 weeks: Discovery & Design (Weeks 1-2) → Development & Pilot (Weeks 3-5) →
                Full Deployment & Monitoring (Weeks 6-8). Fast-track option: 4-6 weeks for simpler use cases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>What is the typical cost and ROI?</AccordionTrigger>
              <AccordionContent>
                Implementation cost: $75K-$100K depending on complexity. Annual savings: $150K+ (support costs + revenue
                uplift + risk mitigation). Break-even: 5-6 months. 12-month ROI: 180%+.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="languages">
              <AccordionTrigger>Do you support multiple languages?</AccordionTrigger>
              <AccordionContent>
                Yes. Google Gemini supports 100+ languages natively. We've deployed chatbots in English, Vietnamese,
                Spanish, French, German, Japanese, and more. Multilingual support is core to our platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integration">
              <AccordionTrigger>Can you integrate with our existing systems?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We integrate with CRM (Salesforce, HubSpot), support platforms (Zendesk, Intercom),
                e-commerce (Shopify, WooCommerce), analytics (Google Analytics, Mixpanel), and custom APIs. n8n
                orchestration connects everything seamlessly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hallucination">
              <AccordionTrigger>How do you prevent AI hallucinations?</AccordionTrigger>
              <AccordionContent>
                RAG (Retrieval-Augmented Generation) architecture grounds responses in your knowledge base. LLM only
                generates answers citing retrieved sources. Confidence scoring escalates low-confidence queries to
                humans. Result: 0.2% hallucination rate vs. 8-12% without RAG.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="training">
              <AccordionTrigger>Do we need to train the AI ourselves?</AccordionTrigger>
              <AccordionContent>
                No. We handle initial training using your knowledge base, FAQs, historical conversations. System learns
                continuously from interactions. You provide feedback on edge cases; we refine the model. Minimal ongoing
                effort required from your team.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-security">
              <AccordionTrigger>How do you handle data security and privacy?</AccordionTrigger>
              <AccordionContent>
                Data encrypted in-transit (TLS 1.3) and at-rest (AES-256). Access controls by role. PII handling
                compliant with GDPR, CCPA. Option to deploy on your infrastructure (private cloud) for maximum control.
                SOC 2 Type II audit trail available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="human-fallback">
              <AccordionTrigger>What happens when AI can't handle a query?</AccordionTrigger>
              <AccordionContent>
                Intelligent escalation. When confidence score &lt;0.7, bot seamlessly hands off to human agent with full
                context (conversation history, user profile, detected intent). No information loss. Agent picks up where
                bot left off.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ongoing-costs">
              <AccordionTrigger>What are ongoing costs after deployment?</AccordionTrigger>
              <AccordionContent>
                Monthly hosting + API costs: $2K-5K depending on volume. Optional support retainer: $3K-8K/month for
                monitoring, optimization, feature additions. Most clients break even within 6 months even with ongoing
                costs included.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customization">
              <AccordionTrigger>Can the system be customized for our industry?</AccordionTrigger>
              <AccordionContent>
                Yes, that's our differentiator. Unlike off-the-shelf solutions, we build custom AI tailored to YOUR
                business logic, terminology, workflows, compliance requirements. We've deployed across e-commerce,
                healthcare, finance, SaaS—each highly customized.
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
            {[
              { icon: Award, stat: "10+", label: "AI projects delivered successfully" },
              { icon: Star, stat: "4.8/5", label: "Client satisfaction (verified)" },
              { icon: Brain, stat: "Google", label: "Gemini AI Partner" },
              { icon: BarChart3, stat: "180%", label: "Average ROI within 12 months" },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">Our Guarantees</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>30-day satisfaction guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>8-week deployment timeline guaranteed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>180%+ ROI within 12 months or extended support free</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Full technical documentation & training included</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">What Makes Us Different</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Brain className="h-4 w-4 text-primary mr-2" />
                  <span>Custom AI (not off-the-shelf templates)</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>RAG architecture prevents hallucinations</span>
                </div>
                <div className="flex items-center">
                  <GitBranch className="h-4 w-4 text-primary mr-2" />
                  <span>End-to-end orchestration with n8n</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 text-primary mr-2" />
                  <span>Multilingual & context-aware by default</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaasProductService;
