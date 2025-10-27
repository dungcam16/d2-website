import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Shield,
  AlertCircle,
  FileCheck,
  TrendingUp,
  CheckCircle,
  Star,
  Clock,
  Users,
  DollarSign,
  Lock,
  PlayCircle,
  Download,
  Settings,
  Target,
  Award,
  Activity,
  BarChart3,
  Database,
  FileText,
  GitBranch,
  Eye,
  Fingerprint,
  Scale,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function FintechCompanies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "FinTech Automation & Compliance",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      certifications: ["SOC 2 Type II", "GDPR", "CCPA", "PCI-DSS"],
    },
    description: "Enterprise automation for regulated financial services with built-in compliance and audit trails",
    targetIndustry: "FinTech, Financial Services, Payment Processing",
  };

  // Problems
  const problems = [
    {
      icon: Lock,
      title: "Compliance Complexity = Manual Processes",
      pain: "Every workflow touches regulated data. GDPR, CCPA, SOX, AML/KYC compliance requirements mean you can't just automate everything. Manual reviews, audit trails, data retention policies—they're built into your DNA.",
      reality: "So your team stays manual. They spend 60+ hours/week on compliance-critical processes. Approval chains. Data verification. Audit preparation.",
      consequence: "You can't scale without adding compliance staff. New hires spend 3-6 months training. You're trading growth for safety."
    },
    {
      icon: Database,
      title: "Legacy Systems + New Technology = Integration Nightmare",
      pain: "You're running on core banking systems built in the 2000s. But you need to integrate with modern APIs (Stripe, Plaid, Coinbase). Manual API data entry. Spreadsheet reconciliation. FTP file transfers.",
      reality: "Integration projects that should take 2 weeks take 3 months because of security reviews, compliance approvals, and legacy system limitations.",
      consequence: "New product launches are delayed. Time-to-market is measured in quarters, not months. Competitors move faster."
    },
    {
      icon: FileText,
      title: "Audit Readiness = Constant Firefighting",
      pain: "Regulators are coming. Every 18-24 months, you face audits from FDIC, OCC, or your designated regulator. Your team spends weeks pulling logs, recreating workflows, proving compliance.",
      reality: "Compliance officers live in fear. Every audit is a potential find. Every finding becomes an MOU. Every MOU is bad for your reputation.",
      consequence: "Preventative action is buried under reactive auditing. You're always preparing for the next audit."
    },
    {
      icon: Fingerprint,
      title: "KYC/AML Automation is Risky",
      pain: "Know Your Customer (KYC) and Anti-Money Laundering (AML) checks are manual. Your compliance team hand-reviews every customer. This is non-scalable.",
      reality: "You're rejecting good customers because processing takes too long. Bad customers slip through because your manual process is inconsistent.",
      consequence: "Revenue loss from customer friction. Regulatory risk from inconsistent screening. Catch-22."
    },
    {
      icon: AlertCircle,
      title: "Data Security + Automation = Trust Issues",
      pain: "Automation platforms seem convenient but feel risky. You're moving sensitive financial data through third-party systems. Your CTO says: 'We can't put financial data on someone else's infrastructure.'",
      reality: "So you're stuck between growth and security. You need automation but are afraid to trust it with sensitive workflows.",
      consequence: "You stay manual longer than you should, hurting competitiveness and team morale."
    }
  ];

  // Solutions
  const solutions = [
    {
      icon: Fingerprint,
      title: "KYC/AML Automation",
      tagline: "Automate Know Your Customer and Anti-Money Laundering Screening",
      description: "Automated KYC workflow: Customer signup → Auto-pull verification data → Auto-score risk → Auto-run sanctions check → Auto-escalate if needed. AML alert investigation: Suspicious transaction → Auto-gather data → Auto-prepare SAR draft → Auto-escalate.",
      features: [
        "Integration with IDology, Experian, LexisNexis, Thomson Reuters",
        "Real-time risk scoring (sub-second decisions)",
        "Automatic SAR workflow generation",
        "Regulatory hold automation",
        "100% audit trail for regulators"
      ],
      impact: [
        "Reduce KYC processing: 48 hours → 2 hours",
        "Process 10,000 customers/month without adding staff",
        "Consistent compliance - no customer slips through",
        "Complete audit trail ready for regulators"
      ]
    },
    {
      icon: DollarSign,
      title: "Payment Processing & Compliance",
      tagline: "Automate Payment Workflows with Built-In Compliance",
      description: "Payment workflow automation: New payment → Fraud detection → AML check → Compliance screening → Process payment → Auto-reconcile → Log everything. Includes fraud detection integration, compliance holds, refund automation, reconciliation.",
      features: [
        "Real-time fraud scoring",
        "Automatic payment hold on AML flags",
        "Multi-currency support with compliance",
        "Refund audit trails",
        "Reconciliation exception alerts"
      ],
      impact: [
        "Process payments in real-time (not daily batch)",
        "Automatic compliance gates in every payment",
        "Reduce fraud by 60%+ with real-time detection",
        "Daily reconciliation automated"
      ]
    },
    {
      icon: FileCheck,
      title: "Regulatory Reporting & Audit Automation",
      tagline: "Automate Regulatory Reporting - Always Audit-Ready",
      description: "Automated data collection in real-time. Multi-format report generation (FDIC forms, OCC reports, state-specific formats). Complete audit trail creation. Regulatory submission preparation. Exception handling alerts.",
      features: [
        "Auto-collects reportable data in real-time",
        "Generates FDIC, OCC, state reports automatically",
        "Formats SAR filings automatically",
        "Complete audit trail for regulatory review",
        "Alerts for submission deadlines"
      ],
      impact: [
        "Reduce audit prep: 4 weeks → 2 days",
        "100% accuracy in regulatory reporting",
        "Always audit-ready",
        "Complete, clean audit trails for regulators"
      ]
    },
    {
      icon: Database,
      title: "Legacy System Integration with Security",
      tagline: "Safely Integrate Legacy Banking Systems with Modern APIs",
      description: "Secure API bridges connecting legacy systems (COBOL mainframes, proprietary databases, FTP servers) to modern APIs. Batch processing automation. Data transformation. Error handling. Enterprise encryption throughout.",
      features: [
        "SFTP with encryption (not basic FTP)",
        "API gateway with rate limiting and security gates",
        "Automatic data transformation (legacy → modern formats)",
        "Real-time integration (not batch-only)",
        "Complete audit logs of all data transfers"
      ],
      impact: [
        "Real-time integration instead of daily batch",
        "Add new integrations without major infrastructure changes",
        "Enterprise encryption throughout",
        "Complete audit trail for every data transfer"
      ]
    }
  ];

  // Success Stories
  const successStories = [
    {
      company: "PayFlow",
      type: "B2B payment processor",
      volume: "$100M+ annual volume",
      challenge: "Processing $100M+ annually across 5,000+ transactions daily. Manual reconciliation taking 50+ hours/week. Payment exceptions being missed. Audit preparation was a nightmare.",
      results: [
        "Reconciliation time: 50 hrs/week → 5 hrs/week",
        "Missed payments: 2-3/week → 0/week",
        "Audit prep time: 3 weeks → 2 days",
        "Team overtime: 15 hrs/week → 0 hrs/week",
        "Regulatory findings: 4-6/audit → 0 findings last 2 audits"
      ],
      quote: "This wasn't just an automation project. It was a compliance transformation. Our regulatory relationship completely changed. We went from 'findings to address' to 'nothing to address.'"
    },
    {
      company: "CryptoVault",
      type: "Digital asset custody platform",
      stage: "Early-stage",
      challenge: "New platform needed to launch with enterprise security and compliance from day one. Building custom compliance workflows from scratch would take 6 months. They needed to launch in 3 months.",
      results: [
        "Time to launch: 3 months (vs 6 months)",
        "Compliance risk: Zero (battle-tested workflows)",
        "Team size: 8 people (vs needing 12+)",
        "Regulatory approval: First-time approval",
        "Customer onboarding: 2 hrs (vs 8 hrs industry standard)"
      ],
      quote: "Launching a regulated FinTech platform requires compliance sophistication. D2 Group helped us launch fast without cutting corners on security or compliance."
    },
    {
      company: "MidTown Bank",
      type: "Regional bank",
      assets: "$2B in assets",
      challenge: "Legacy banking system from 1995. Needed to integrate with modern APIs (Plaid for aggregation, Stripe for payments) without exposing sensitive data or violating compliance.",
      results: [
        "API integration: 3 weeks (vs 4 months custom)",
        "Security: Passed CISO review without modifications",
        "Compliance: Complete audit trail for every API call",
        "Customer experience: Real-time balance aggregation",
        "Time-to-market: New products in weeks vs months"
      ],
      quote: "We thought legacy systems and modern security/compliance were incompatible. D2 Group showed us how to bridge them safely."
    }
  ];

  // Pricing
  const pricingTiers = [
    {
      name: "Compliance Starter",
      setup: "$8,000",
      monthly: "$2,000",
      ideal: "New FinTech platforms, early-stage teams",
      transactions: "50,000/month",
      features: [
        "Up to 3 core compliance workflows",
        "Basic audit trail generation",
        "Security certification review",
        "Monthly compliance reporting",
        "Email support (24-hour response)",
        "Quarterly security updates"
      ],
      roi: "Launch in 8 weeks instead of 6 months. Avoid building compliance from scratch.",
      popular: false
    },
    {
      name: "Enterprise Compliance",
      setup: "$20,000",
      monthly: "$5,000",
      ideal: "Growing FinTech platforms, regional banks",
      transactions: "500,000/month",
      features: [
        "Up to 10 compliance workflows",
        "Advanced audit trail with regulatory-grade retention",
        "Enterprise security: SOC 2, GDPR, CCPA, PCI-DSS",
        "Real-time compliance monitoring dashboard",
        "Regulatory reporting automation",
        "Dedicated compliance consultant (quarterly)",
        "Priority support (4-hour response)",
        "Monthly security reviews"
      ],
      roi: "Scale 10x without scaling compliance team. Audit prep: 4 weeks → 2 days. Regulatory findings: 4-6 → 0.",
      popular: true
    },
    {
      name: "Enterprise Plus",
      setup: "$35,000+",
      monthly: "$10,000+",
      ideal: "Large FinTech platforms, banks, payment networks",
      transactions: "5,000,000+/month",
      features: [
        "Unlimited compliance workflows",
        "Custom compliance workflow development",
        "Legacy system integration (unlimited APIs)",
        "24/7 dedicated compliance team",
        "Real-time compliance monitoring with AI",
        "Automated regulatory reporting (all agencies)",
        "Custom audit trail retention (up to 20 years)",
        "Penetration testing (quarterly)",
        "24/7 premium support (30-minute response)"
      ],
      roi: "Enterprise-grade compliance at a fraction of building in-house. Regulatory peace of mind.",
      popular: false
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How do you ensure compliance in an automated workflow?",
      answer: "Compliance is built-in, not bolted-on: (1) By Design: Every workflow includes compliance gates (approval requirements, audit logs, data retention policies). (2) Real-Time Monitoring: Automated alerts if anything violates policy. (3) Audit Trail: Every decision is logged with complete context. (4) Human Review: Critical decisions (KYC holds, SAR filings) still require human approval. (5) Regular Audits: We audit our own systems quarterly + customer workflows monthly. This approach satisfies regulators."
    },
    {
      question: "Can you help us pass our SOX/FDIC audit?",
      answer: "Yes. We specifically build for audit readiness: Complete Audit Trail (every transaction, workflow step, decision is logged), Regulatory Reports (auto-generate FDIC forms, OCC reports, state-specific filings), Remediation (if auditors find issues, we help implement fixes), Prevention (quarterly audits of your workflows to catch issues before regulators do). Most of our clients have either passed their last audit with zero findings OR used us to remediate previous findings."
    },
    {
      question: "What about legacy system integration - is it secure?",
      answer: "Yes, with enterprise-grade security: Encryption (all data encrypted in transit TLS 1.3 and at rest AES-256), Access Control (multi-factor authentication, IP whitelisting, role-based permissions), Audit Trail (every API call logged with full context), Monitoring (real-time anomaly detection, automated alerts), Compliance (SOC 2, GDPR, CCPA certified). Your CISO will approve. No workarounds. No security corners cut."
    },
    {
      question: "How do you handle data residency requirements (GDPR, state regulations)?",
      answer: "Flexible data residency: EU Data (option to store in EU for GDPR requirement), US Data (option to store in US regions), Custom (can work with your data residency requirements), Encryption (customer-controlled keys available), Compliance (full compliance with GDPR, CCPA, state-specific regulations). We work with your legal/compliance team to meet all requirements."
    },
    {
      question: "How long does implementation take?",
      answer: "Typical timeline: 4-8 weeks. Week 1: Security & compliance assessment. Week 2-3: Workflow design (with compliance review). Week 4: Security testing & compliance validation. Week 5-6: Team training & pilot testing. Week 7-8: Production deployment. Faster if you're just automating existing workflows. Slower if you need custom compliance design. We keep implementation speed while maintaining security/compliance rigor."
    },
    {
      question: "Can you help us migrate from Zapier/Make (compliance issues)?",
      answer: "Yes, with full compliance migration: Assessment (review what you're currently automating, identify compliance gaps), Redesign (rebuild workflows with proper compliance gates), Compliance Review (our team reviews for regulatory acceptability), Migration (move existing data safely, maintain audit trail), Training (teach your team the compliant way to automate). Many clients switch from generic automation tools to us specifically for compliance reasons."
    },
    {
      question: "What compliance certifications do you have?",
      answer: "Full financial services compliance: SOC 2 Type II (audited by Big 4 firm), GDPR Compliant (data residency, right to access, right to be forgotten), CCPA Compliant (California privacy rights), PCI-DSS Compliant (payment card data), GLBA Compliant (Gramm-Leach-Bliley Act for financial services), HIPAA Compatible (for healthtech FinTech), Regular Penetration Testing (by certified security firms). Your CISO will feel comfortable with us."
    }
  ];

  return (
    <>
      <SEO
        title="Automate FinTech Operations Without Sacrificing Security or Compliance | D2 Group"
        description="Purpose-built automation for financial services. Real-time compliance workflows, enterprise security, complete audit trails. SOC 2, GDPR, CCPA certified. For KYC, AML, payment processing."
        keywords="fintech automation, KYC automation, compliance automation, AML automation, payment processing compliance, regulatory reporting, financial services automation"
        canonicalUrl="/solutions/fintech-companies"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                ✅ SOC 2 Type II • GDPR & CCPA Compliant • 256-bit AES Encryption • Real-time Audit Logs
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Automate FinTech Operations <span className="text-primary">Without Sacrificing</span>
                <br />
                Security or Compliance
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Purpose-built automation for financial services. Real-time compliance workflows, enterprise security, 
                and complete audit trails—all built-in.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mb-8">
                <Button size="lg" asChild className="shadow-glow">
                  <Link to="/contact">
                    Get FinTech Automation Strategy
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#solution-overview">See How It Works</Link>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm">
                {[
                  { text: "99.99% Uptime SLA" },
                  { text: "<500ms Execution Speed" },
                  { text: "100% Regulatory Compliance" },
                  { text: "Trusted by 50+ FinTech" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center gap-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The FinTech <span className="text-primary">Automation Paradox:</span>
                <br />
                You Need Automation, But Can't Risk Security or Compliance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-destructive mb-4" />
                    <h3 className="text-lg font-bold mb-3">{problem.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-destructive mb-1">The Pain:</p>
                        <p className="text-sm text-muted-foreground">{problem.pain}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1">The Reality:</p>
                        <p className="text-sm text-muted-foreground">{problem.reality}</p>
                      </div>
                      <div className="bg-destructive/10 p-3 rounded-md">
                        <p className="text-xs font-semibold text-destructive">Consequence: {problem.consequence}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <p className="text-xl font-semibold text-primary mb-4">
                "These aren't problems you can solve with generic automation tools. Generic tools weren't built for compliance. They weren't built for audit trails. They weren't built for financial services."
              </p>
              <p className="text-lg text-muted-foreground">
                But we were. Everything we've built is designed for FinTech—security-first, compliance-first, audit-first.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="solution-overview" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Purpose-Built for FinTech - <span className="text-primary">4-Step Implementation</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  icon: Shield,
                  title: "Security & Compliance Assessment",
                  duration: "Week 1",
                  desc: "Security team reviews your requirements. Compliance team maps regulatory requirements. Risk assessment for your use cases."
                },
                {
                  step: "2",
                  icon: Settings,
                  title: "Workflow Design with Compliance",
                  duration: "Week 2-3",
                  desc: "Design workflows specific to your FinTech business. Every workflow includes automatic audit logs, data retention, compliance checks."
                },
                {
                  step: "3",
                  icon: Lock,
                  title: "Enterprise Deployment & Testing",
                  duration: "Week 4-5",
                  desc: "Deploy to secure environment. Run security and compliance testing. Full team training. CISO and compliance officer sign off."
                },
                {
                  step: "4",
                  icon: Activity,
                  title: "Continuous Compliance",
                  duration: "Ongoing",
                  desc: "Real-time compliance monitoring. Quarterly regulatory updates. Proactive audit preparation. 24/7 incident response."
                }
              ].map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                        {step.step}
                      </div>
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.duration}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Deep Dive */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                FinTech Automation <span className="text-primary">Solutions</span> - Built for Your Specific Challenges
              </h2>
            </div>

            <div className="space-y-12">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-xl transition-all animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <IconComponent className="h-10 w-10 text-primary mr-3" />
                          <div>
                            <h3 className="text-2xl font-bold">{solution.title}</h3>
                            <p className="text-sm font-semibold text-primary">{solution.tagline}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6">{solution.description}</p>
                        <div>
                          <p className="font-semibold mb-3">Key Features:</p>
                          <ul className="space-y-2">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-primary/5 p-6 rounded-lg">
                        <p className="font-semibold mb-4">Business Impact:</p>
                        <ul className="space-y-2">
                          {solution.impact.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Success Stories - <span className="text-primary">FinTech Focus</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{story.company}</h3>
                    <p className="text-sm text-muted-foreground">{story.type}</p>
                    {story.volume && <p className="text-xs text-muted-foreground">{story.volume}</p>}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold mb-1">Challenge:</p>
                      <p className="text-sm text-muted-foreground">{story.challenge}</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold mb-2">Results:</p>
                      <ul className="space-y-1">
                        {story.results.map((result, idx) => (
                          <li key={idx} className="text-xs flex items-start">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary pl-3 mt-4">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">Enterprise Pricing</span> Designed for Financial Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`p-8 hover:shadow-xl transition-all ${tier.popular ? 'border-primary border-2' : ''}`}>
                  {tier.popular && (
                    <Badge className="mb-4 bg-primary">⭐ Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.ideal}</p>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground">Setup</p>
                    <p className="text-3xl font-bold text-primary mb-2">{tier.setup}</p>
                    <p className="text-sm text-muted-foreground">Monthly</p>
                    <p className="text-2xl font-semibold mb-2">{tier.monthly}</p>
                    <p className="text-xs text-muted-foreground mb-1">{tier.transactions} transactions</p>
                    <p className="text-xs font-semibold text-primary mt-2">{tier.roi}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">
                      {tier.name === "Enterprise Plus" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">🛡️ 90-Day Compliance Guarantee</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                If you're not compliant after 90 days, we'll provide free compliance consulting until you are. 
                We stand behind our compliance expertise.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About <span className="text-primary">FinTech Compliance Automation?</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">
              Ready to Transform Your FinTech Operations?
            </h2>
            <p className="text-xl mb-8">
              Compliance automation isn't a luxury feature. In FinTech, it's a necessity. You either build it right 
              or you face audit findings, regulatory issues, and operational chaos.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
              <p className="text-lg font-semibold mb-4">In 8 weeks, you could have:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {[
                  "Enterprise-grade compliance automation",
                  "Complete audit readiness",
                  "50%+ reduction in compliance team workload",
                  "Zero audit findings (or fix previous findings)",
                  "Regulatory peace of mind",
                  "Fraction of cost vs building in-house"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/contact">
                  Schedule Compliance Strategy Session
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" asChild>
                <Link to="/resources">
                  Download FinTech Compliance Checklist
                  <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="text-sm">
              ⏰ Note: We take on 1-2 new FinTech compliance clients per quarter. If you have an upcoming audit or 
              regulatory deadline, let's schedule a call this week.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
