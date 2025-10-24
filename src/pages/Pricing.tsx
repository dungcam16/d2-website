"use client";
import React from "react";
import { Block } from "lovable/blocks";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  const features = {
    starter: [
      "Basic automation workflows",
      "Up to 10 active workflows",
      "Email support",
      "Standard integrations",
      "Monthly performance reports",
      "User access control",
      "Data export functionality",
      "Regular security updates",
      "Knowledge base access",
      "Community forum support",
    ],
    professional: [
      "Advanced automation workflows",
      "Up to 50 active workflows",
      "Priority email & chat support",
      "Premium integrations",
      "Dedicated account manager",
      "Customizable dashboards",
      "SLA up-time guarantee",
      "Advanced user roles & permissions",
      "API access",
      "Audit logs",
      "Workflow optimization sessions",
      "Technical consultations",
      "Beta feature access",
      "Webhooks",
      "On-demand training",
    ],
    enterprise: [
      "Unlimited advanced workflows",
      "Dedicated infrastructure",
      "24/7 premium support",
      "Custom integrations & development",
      "Strategic partnership & consulting",
      "On-premise deployment options",
      "Full white-glove service",
      "Dedicated success manager",
      "Advanced security & compliance",
      "Custom analytics & reporting",
      "Disaster recovery planning",
      "Single Sign-On (SSO)",
      "Compliance certifications (HIPAA, GDPR)",
      "Custom SLA",
      "Dedicated training workshops",
      "Executive business reviews",
      "Priority access to new features",
      "Unlimited API calls",
      "Custom AI model fine-tuning",
      "Dedicated solution architect",
    ],
  };

  const addOns = [
    { name: "Extra Workflow Pack (10 workflows)", price: "$200/month" },
    { name: "Custom Chatbot Development", price: "$1,500/one-time" },
    { name: "Additional Support Hours (5 hours)", price: "$400" },
    { name: "Advanced Data Transformation", price: "$300/month" },
    { name: "On-site Training Session", price: "$2,500/day" },
  ];

  const pricingTiers = [
    {
      name: "STARTER",
      setup: "$5,000",
      monthly: "$500",
      description: "Best for: Small teams",
      features: features.starter,
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "PROFESSIONAL",
      setup: "$12,000",
      monthly: "$1,500",
      description: "Best for: Growing companies",
      features: features.professional,
      cta: "Schedule Demo",
      highlight: true,
    },
    {
      name: "ENTERPRISE",
      setup: "Custom",
      monthly: "Custom",
      description: "Best for: Large organizations",
      features: features.enterprise,
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Block id="hero-pricing-1719532588">
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Transparent Pricing. No Hidden Fees.</h1>
          <p className="text-xl text-gray-300 mb-8">Choose your automation package</p>
          <div className="flex justify-center items-center mb-12">
            <span className="mr-3">Monthly</span>
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  id="toggle"
                  type="checkbox"
                  className="sr-only"
                  checked={isAnnual}
                  onChange={() => setIsAnnual(!isAnnual)}
                />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                    isAnnual ? "translate-x-full bg-green-500" : ""
                  }`}
                ></div>
              </div>
            </label>
            <span className="ml-3">Annual (save 20%)</span>
          </div>
        </section>
      </Block>

      <Block id="pricing-tiers-1719532588">
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-gray-800 p-8 rounded-lg shadow-lg ${
                  tier.highlight ? "border-2 border-green-500 transform scale-105" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-4 text-center">{tier.name}</h2>
                {tier.highlight && (
                  <p className="text-sm text-green-500 font-semibold text-center mb-4">
                    Most Popular
                  </p>
                )}
                <p className="text-center text-4xl font-extrabold mb-2">
                  {tier.setup === "Custom" ? tier.setup : tier.setup}
                </p>
                <p className="text-center text-gray-400 mb-6">
                  {tier.monthly === "Custom"
                    ? "Custom Pricing"
                    : `${
                        isAnnual
                          ? `$${parseInt(tier.monthly.replace("$", "")) * 12 * 0.8}`
                          : tier.monthly
                      }/month`}
                </p>
                <p className="text-center text-gray-300 text-sm mb-8">{tier.description}</p>
                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </section>
      </Block>

      <Block id="add-ons-1719532588">
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Optional Add-Ons</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {addOns.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-200">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-lg text-gray-200">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Block>

      <Block id="comparison-table-1719532588">
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="sticky top-0 bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Features
                  </th>
                  {pricingTiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {/* Example features, expand this list */}
                {[
                  "Active Workflows",
                  "Support Level",
                  "Integrations",
                  "Account Management",
                  "Custom Dashboards",
                  "API Access",
                  "SLA Guarantee",
                  "White-Glove Service",
                  "Dedicated Infrastructure",
                ].map((feature, fIndex) => (
                  <tr key={fIndex}>
                    <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-200">
                      {feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {fIndex === 0 && (
                        <>
                          <span className="text-green-500">10</span>
                        </>
                      )}
                      {fIndex === 1 && (
                        <>
                          <svg
                            className="w-5 h-5 text-green-500 inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </>
                      )}
                      {fIndex === 2 && (
                        <>
                          <svg
                            className="w-5 h-5 text-green-500 inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </>
                      )}
                      {fIndex > 2 && (
                        <>
                          <svg
                            className="w-5 h-5 text-red-500 inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {fIndex === 0 && (
                        <>
                          <span className="text-green-500">50</span>
                        </>
                      )}
                      {fIndex < 6 && (
                        <>
                          <svg
                            className="w-5 h-5 text-green-500 inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </>
                      )}
                      {fIndex > 5 && (
                        <>
                          <svg
                            className="w-5 h-5 text-red-500 inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {fIndex === 0 && (
                        <>
                          <span className="text-green-500">Unlimited</span>
                        </>
                      )}
                      {fIndex < 9 && (
                        <>
                          <svg
                            className="w-5 h-5 text-green-500 inline-block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Block>

      <Block id="tco-calculator-1719532588">
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center">TCO Calculator</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <p className="text-xl text-gray-300">
              Interactive comparison: Zapier vs Make vs D2+n8n (Placeholder)
            </p>
            {/* Implement interactive calculator here */}
          </div>
        </section>
      </Block>

      <Block id="faq-pricing-1719532588">
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* Example FAQ items */}
            {[
              {
                question: "What is the difference between monthly and annual billing?",
                answer:
                  "Annual billing offers a 20% discount compared to monthly billing, providing significant savings for long-term commitments.",
              },
              {
                question: "Can I change my plan later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated.",
              },
              {
                question: "Are there any hidden fees?",
                answer:
                  "No, our pricing is transparent. All costs are clearly outlined in your chosen plan and any add-ons.",
              },
              {
                question: "What kind of support is included?",
                answer:
                  "Support levels vary by plan, from email support for Starter to 24/7 premium support for Enterprise.",
              },
              {
                question: "Do you offer a free trial?",
                answer:
                  "We do not offer a free trial, but we can arrange a demo to showcase our platform's capabilities.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept major credit cards and bank transfers.",
              },
            ].map((faq, index) => (
              <details key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-200">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-gray-400 transform -rotate-90 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </summary>
                <p className="mt-4 text-gray-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Block>

      <Block id="bottom-cta-pricing-1719532588">
        <section className="bg-green-700 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Not sure which plan?</h2>
          <p className="text-xl text-white mb-8">Let's find the perfect solution for your business.</p>
          <button className="bg-white text-green-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transition duration-300">
            Schedule a pricing call
          </button>
        </section>
      </Block>
    </div>
  );
}