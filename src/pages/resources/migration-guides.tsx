"use client";
import React from "react";
import { Block } from "@lovable/blocks";

export default function MigrationGuides() {
  // Placeholder for migration guide data
  const guides = [
    {
      id: 1,
      title: "Migrate from Zapier to n8n",
      description: "A comprehensive guide to effortlessly move your existing automations from Zapier to n8n.",
      time: "Estimated: 2-4 hours",
      pdfLink: "#",
      onlineLink: "#",
      caseStudies: ["Customer X improved workflow by 30%", "Company Y reduced costs by 15%"],
    },
    {
      id: 2,
      title: "Migrate from Make.com to n8n",
      description: "Learn how to transition your Make.com (formerly Integromat) scenarios to n8n with this detailed guide.",
      time: "Estimated: 3-5 hours",
      pdfLink: "#",
      onlineLink: "#",
      caseStudies: ["Startup A scaled operations faster", "Enterprise B gained more control"],
    },
    {
      id: 3,
      title: "Custom Automation Migration",
      description: "Need to migrate from a custom-built solution or another platform? This guide outlines the steps.",
      time: "Estimated: Varies",
      pdfLink: "#",
      onlineLink: "#",
      caseStudies: ["Large Corp Z integrated legacy systems", "Small Business W streamlined unique processes"],
    },
  ];

  return (
    <div>
      <Block id="migration-hero">
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Automation Migration Guides</h1>
            <p className="text-lg">Smoothly transition your workflows to n8n from other platforms.</p>
          </div>
        </div>
      </Block>

      <div className="container mx-auto py-12">
        <Block id="guide-list">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div key={guide.id} className="border rounded-lg shadow-md overflow-hidden bg-white p-6">
                <h3 className="text-2xl font-semibold mb-3">{guide.title}</h3>
                <p className="text-gray-700 mb-4">{guide.description}</p>
                <p className="text-gray-600 text-sm mb-4">Migration Time: <span className="font-medium">{guide.time}</span></p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <a href={guide.pdfLink} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" download>
                    Download PDF
                  </a>
                  <a href={guide.onlineLink} className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    View Online
                  </a>
                </div>
                {guide.caseStudies.length > 0 && (
                  <div>
                    <h4 className="text-md font-semibold mt-4 mb-2">Related Case Studies:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {guide.caseStudies.map((cs, index) => (
                        <li key={index} className="mb-1">{cs}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Block>
      </div>
    </div>
  );
}