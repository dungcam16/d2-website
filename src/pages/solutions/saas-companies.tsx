"use client";
import React from "react";
import { Block } from "@lovable/blocks";

export default function SaasCompanies() {
  return (
    <>
      <Block id="hero-section">
        {/* SECTION 1: Hero */}
        <h1 className="text-4xl font-bold">For SaaS Companies</h1>
        <p className="mt-4 text-lg">Scale without scaling headcount</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md">Book SaaS Automation Audit</button>
      </Block>

      <Block id="pain-points-section">
        {/* SECTION 2: Pain Points (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 border rounded-md">
            <h3 className="font-bold text-xl">Problem 1: Manual Onboarding Overload</h3>
            <p className="mt-2">SaaS companies often struggle with manual new client onboarding, leading to delays, increased operational costs, and a poor initial customer experience. This can result in early churn and hinder rapid scaling.</p>
          </div>
          <div className="p-6 border rounded-md">
            <h3 className="font-bold text-xl">Problem 2: Disconnected Sales & Marketing Tools</h3>
            <p className="mt-2">A common challenge is the lack of seamless integration between CRM, marketing automation, and sales engagement platforms. This creates data silos, inconsistent customer journeys, and inefficient lead nurturing processes.</p>
          </div>
          <div className="p-6 border rounded-md">
            <h3 className="font-bold text-xl">Problem 3: Inefficient Customer Support Workflows</h3>
            <p className="mt-2">Handling high volumes of support requests manually can overwhelm teams, increase response times, and reduce customer satisfaction. Repetitive queries drain resources that could be better spent on complex issues or proactive support.</p>
          </div>
        </div>
      </Block>

      <Block id="our-solutions-section">
        {/* SECTION 3: Our Solutions (4 workflow types) */}
        <h2 className="text-3xl font-bold mt-16">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="p-6 border rounded-md">
            <h3 className="font-bold text-xl">Automated Client Onboarding</h3>
            <p className="mt-2">Streamline the entire onboarding process from contract signing to platform setup and initial training.</p>
            <p className="mt-2 text-green-600">Expected Result: 50% faster onboarding, 20% reduction in first-month churn.</p>
          </div>
          <div className="p-6 border rounded-md">
            <h3 className="font-bold text-xl">Integrated Sales & Marketing Funnels</h3>
            <p className="mt-2">Connect your CRM, marketing automation, and sales tools for a unified customer view and automated lead hand-off.</p>
            <p className="mt-2 text-green-600">Expected Result: 30% increase in qualified leads, 15% shorter sales cycles.</p>
          </div>
          <div className="p-6 border rounded-md">
            <h3 className="font-bold text-xl">Intelligent Customer Support Automation</h3>
            <p className="mt-2">Implement AI-powered chatbots for instant answers and automate ticket routing, escalation, and follow-ups.</p>
            <p className="mt-2 text-green-600">Expected Result: 40% reduction in support tickets, 25% improvement in customer satisfaction scores.</p>
          </div>
          <div className="p-6 border rounded-md">
            <h3 className="font-bold text-xl">Automated Billing & Subscription Management</h3>
            <p className="mt-2">Automate recurring billing, invoice generation, payment reminders, and subscription changes.</p>
            <p className="mt-2 text-green-600">Expected Result: 10% reduction in payment delays, 5% increase in subscription retention.</p>
          </div>
        </div>
      </Block>

      <Block id="automation-roadmap-section">
        {/* SECTION 4: Automation Roadmap */}
        <h2 className="text-3xl font-bold mt-16">Automation Roadmap</h2>
        <div className="mt-8 p-6 border rounded-md">
          <p className="font-bold">Month 1: Onboarding & CRM Integration</p>
          <p>Automate client welcome sequences, data entry into CRM, and initial product setup notifications. Integrate CRM with marketing platforms.</p>
          <p className="font-bold mt-4">Month 2: Sales Workflow Automation</p>
          <p>Implement automated lead scoring, sales team assignment, and follow-up sequences based on prospect engagement. Connect sales tools for seamless hand-offs.</p>
          <p className="font-bold mt-4">Month 3: Customer Support & Feedback Loops</p>
          <p>Deploy AI chatbots for FAQs, automate support ticket creation and routing, and set up automated customer feedback requests after issue resolution.</p>
          <p className="font-bold mt-4">Month 4: Billing & Analytics Automation</p>
          <p>Automate recurring invoice generation, payment reconciliation, and subscription renewal reminders. Set up automated reporting dashboards for key SaaS metrics.</p>
          <p className="mt-4 text-green-600 font-bold">Expected ROI: Achieve 2x operational efficiency, reduce customer churn by 10-15%, and increase lead conversion by 20% within 6 months.</p>
        </div>
      </Block>

      <Block id="tech-stack-integration-section">
        {/* SECTION 5: Tech Stack Integration */}
        <h2 className="text-3xl font-bold mt-16">Tech Stack Integration</h2>
        <div className="mt-8 p-6 border rounded-md">
          <h3 className="font-bold text-xl">CRM & Sales:</h3>
          <p className="mt-2">Salesforce, HubSpot, Pipedrive, Zoho CRM</p>
          <h3 className="font-bold text-xl mt-4">Marketing Automation:</h3>
          <p className="mt-2">Marketo, Pardot, ActiveCampaign, Mailchimp</p>
          <h3 className="font-bold text-xl mt-4">Customer Support:</h3>
          <p className="mt-2">Zendesk, Intercom, Freshdesk, Helpscout</p>
          <h3 className="font-bold text-xl mt-4">Billing & Payments:</h3>
          <p className="mt-2">Stripe, Chargebee, Recurly, Paddle</p>
          <h3 className="font-bold text-xl mt-4">Product Analytics:</h3>
          <p className="mt-2">Amplitude, Mixpanel, Heap, Google Analytics</p>
        </div>
      </Block>

      <Block id="industry-case-studies-section">
        {/* SECTION 6: Industry Case Studies */}
        <h2 className="text-3xl font-bold mt-16">Industry Case Studies</h2>
        <div className="mt-8 p-6 border rounded-md">
          <p>Coming Soon: Explore how we helped a fast-growing FinTech SaaS automate their compliance workflows.</p>
          <p>Coming Soon: Learn how a MarTech SaaS boosted customer retention by 15% with automated onboarding.</p>
          <p className="mt-4"><a href="/portfolio?industry=saas" className="text-blue-600 hover:underline">View All SaaS Case Studies</a></p>
        </div>
      </Block>

      <Block id="pricing-section">
        {/* SECTION 7: Pricing for This Industry */}
        <h2 className="text-3xl font-bold mt-16">Pricing for SaaS Companies</h2>
        <div className="mt-8 p-6 border rounded-md">
          <p>Our pricing is tailored to the complexity and scale of your SaaS operations. We offer flexible models, from project-based fees for specific workflow automation to retainer agreements for ongoing optimization and support.</p>
          <p className="mt-2">Starting at $X,XXX/month for core automation packages.</p>
          <p className="mt-4"><a href="/pricing" className="text-blue-600 hover:underline">Explore Our General Pricing & Packages</a></p>
        </div>
      </Block>

      <Block id="faq-section">
        {/* SECTION 8: FAQ */}
        <h2 className="text-3xl font-bold mt-16">Frequently Asked Questions for SaaS</h2>
        <div className="mt-8 p-6 border rounded-md">
          <h3 className="font-bold text-xl">Q: How quickly can we see results from automation?</h3>
          <p className="mt-2">A: Many clients see initial improvements within the first 4-6 weeks, with significant ROI typically realized within 3-6 months as more workflows are automated.</p>
          <h3 className="font-bold text-xl mt-4">Q: What kind of integrations do you support?</h3>
          <p className="mt-2">A: We integrate with hundreds of SaaS tools, including popular CRMs, marketing platforms, support systems, and payment gateways. We can also work with custom APIs.</p>
          <h3 className="font-bold text-xl mt-4">Q: Is our data secure with your automation solutions?</h3>
          <p className="mt-2">A: Absolutely. Data security and compliance are paramount. We follow best practices and utilize secure platforms like n8n, which can be self-hosted for maximum data control.</p>
        </div>
      </Block>

      <Block id="bottom-cta-section">
        {/* SECTION 9: Bottom CTA */}
        <div className="mt-16 p-8 bg-blue-100 text-center rounded-md">
          <h2 className="text-3xl font-bold">Ready to Scale Your SaaS Without Scaling Headcount?</h2>
          <p className="mt-4 text-lg">Discover how intelligent automation can transform your operations, sales, and customer experience.</p>
          <button className="mt-4 px-8 py-4 bg-blue-600 text-white rounded-md text-xl">Book Your Free SaaS Automation Audit</button>
        </div>
      </Block>
    </>
  );
}
