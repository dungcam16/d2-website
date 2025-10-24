"use client";
import React from "react";
import { Block } from "@lovable/blocks";

export default function Templates() {
  // Placeholder for template data
  const templates = [
    {
      id: 1,
      name: "Automate Lead Qualification",
      description: "Automatically qualify leads from CRM and send to sales team.",
      tools: ["Salesforce", "Slack", "Email"],
      timeSaved: "2 hours/week",
      category: "Sales",
    },
    {
      id: 2,
      name: "Schedule Social Media Posts",
      description: "Connect your content calendar to social media platforms.",
      tools: ["Google Sheets", "Twitter", "Facebook"],
      timeSaved: "3 hours/week",
      category: "Marketing",
    },
    {
      id: 3,
      name: "Customer Support Ticket Routing",
      description: "Route support tickets to the correct department based on keywords.",
      tools: ["Zendesk", "Slack", "Email"],
      timeSaved: "1 hour/day",
      category: "Support",
    },
    {
      id: 4,
      name: "E-commerce Order Fulfillment",
      description: "Automate order processing from storefront to shipping provider.",
      tools: ["Shopify", "ShipStation", "Email"],
      timeSaved: "4 hours/week",
      category: "E-commerce",
    },
    {
      id: 5,
      name: "Daily Marketing Report",
      description: "Generate and send daily marketing performance reports.",
      tools: ["Google Analytics", "Google Sheets", "Email"],
      timeSaved: "1 hour/day",
      category: "Marketing",
    },
  ];

  return (
    <div>
      <Block id="templates-hero">
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">n8n Templates</h1>
            <p className="text-lg">Browse our library of ready-to-use automation workflows.</p>
          </div>
        </div>
      </Block>

      <div className="container mx-auto py-12">
        {/* Filters */}
        <Block id="template-filters">
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm">All</button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">Sales</button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">Marketing</button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">Support</button>
            <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">E-commerce</button>
          </div>
        </Block>

        {/* Template Cards Grid */}
        <Block id="template-cards">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="border rounded-lg shadow-md overflow-hidden bg-white">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                  <p className="text-gray-700 mb-4">{template.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Time Saved: <span className="font-medium">{template.timeSaved}</span></p>
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                      Preview
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Block>
      </div>
    </div>
  );
}