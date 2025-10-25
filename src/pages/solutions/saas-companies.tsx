import React from "react";
import SolutionTemplate from "@/components/SolutionTemplate";

export default function SaasCompanies() {
  const saasContent = {
    industryName: "SaaS Companies",
    heroSubtitle: "Scale without scaling headcount",
    heroCta: "Book SaaS Automation Audit",
    heroImage: "/images/saas-hero.jpg",
    painPoints: [
      {
        icon: "⚙️",
        title: "Manual Onboarding",
        description: "Repetitive tasks slow down customer activation.",
      },
      {
        icon: "📉",
        title: "High Churn Risk",
        description: "Lack of personalized engagement leads to customer attrition.",
      },
      {
        icon: "📊",
        title: "Inefficient Reporting",
        description: "Disparate data sources make accurate reporting a nightmare.",
      },
    ],
    solutions: [
      {
        icon: "🚀",
        title: "Automated Onboarding",
        description: "Streamline user setup, welcome emails, and product tours.",
        result: "→ 30% faster customer activation",
      },
      {
        icon: "💬",
        title: "Proactive Customer Support",
        description: "AI chatbots handle FAQs, escalate complex issues, and collect feedback.",
        result: "→ 20% reduction in support tickets",
      },
      {
        icon: "📈",
        title: "Sales Funnel Automation",
        description: "Automate lead scoring, follow-ups, and CRM updates.",
        result: "→ 15% increase in qualified leads",
      },
      {
        icon: "💸",
        title: "Subscription Management",
        description: "Automate billing, renewals, and dunning processes.",
        result: "→ 10% reduction in involuntary churn",
      },
    ],
    roadmap: [
      {
        month: "1",
        automation: "Customer Onboarding & Welcome Sequences",
        roi: "→ Improved activation rates",
      },
      {
        month: "2",
        automation: "Tier 1 Support with AI Chatbots",
        roi: "→ Reduced support load",
      },
      {
        month: "3",
        automation: "Sales Lead Qualification & Follow-ups",
        roi: "→ Higher sales conversion",
      },
      {
        month: "4",
        automation: "Automated Reporting & Analytics Dashboards",
        roi: "→ Data-driven decision making",
      },
    ],
    techStack: [
      {
        category: "CRM",
        logos: ["/logos/salesforce.png", "/logos/hubspot.png", "/logos/pipedrive.png"],
      },
      {
        category: "Customer Support",
        logos: ["/logos/zendesk.png", "/logos/intercom.png"],
      },
      {
        category: "Marketing Automation",
        logos: ["/logos/marketo.png", "/logos/braze.png"],
      },
      {
        category: "Billing & Payments",
        logos: ["/logos/stripe.png", "/logos/chargebee.png"],
      },
    ],
    caseStudies: [
      {
        title: "How a B2B SaaS Increased Trials by 50%",
        link: "/portfolio/saas-case-study-1",
      },
      {
        title: "Reducing Churn for a Subscription Software",
        link: "/portfolio/saas-case-study-2",
      },
    ],
    pricing: "Tailored automation packages designed to fit your SaaS growth stage and operational needs. Starting from $X,XXX/month.",
    faq: [
      {
        question: "What kind of SaaS companies do you work with?",
        answer: "We work with B2B and B2C SaaS companies across various industries, from early-stage startups to established enterprises.",
      },
      {
        question: "How long does it take to implement automation?",
        answer: "Implementation times vary based on complexity, but most projects see initial automations live within 4-8 weeks.",
      },
    ],
    bottomCta: "Ready to Scale Your SaaS Operation Efficiently?",
  };

  return <SolutionTemplate {...saasContent} />;
}
