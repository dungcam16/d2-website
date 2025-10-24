"use client";
import React from "react";
import { Block } from "@lovable/blocks"; // Assuming Block is available if needed, though not explicitly asked for.

export default function Resources() {
  return (
    <div>
      <Block id="hero-section">
        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Automation Resources & Tools</h1>
            <p className="text-xl">Everything you need to succeed with automation.</p>
          </div>
        </div>
      </Block>

      <Block id="resources-cards">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog & Insights Card */}
            <a href="/resources/blog" className="block p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">Blog & Insights</h2>
              <p className="text-gray-600">Discover articles, tutorials, and industry insights. (<span className="font-bold">120</span> posts)</p>
            </a>
            {/* n8n Templates Card */}
            <a href="/resources/templates" className="block p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">n8n Templates</h2>
              <p className="text-gray-600">Ready-to-use workflows to automate your tasks. (<span className="font-bold">50</span> templates)</p>
            </a>
            {/* Migration Guides Card */}
            <a href="/resources/migration-guides" className="block p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">Migration Guides</h2>
              <p className="text-gray-600">Seamlessly move your automations to n8n.</p>
            </a>
            {/* ROI Calculator Card */}
            <a href="/resources/roi-calculator" className="block p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">ROI Calculator</h2>
              <p className="text-gray-600">Calculate the return on investment for your automation efforts.</p>
            </a>
            {/* Webinars Card */}
            <a href="/resources/webinars" className="block p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">Webinars</h2>
              <p className="text-gray-600">Join our upcoming webinars or watch past sessions.</p>
            </a>
            {/* Ebooks & Guides Card */}
            <a href="/resources/ebooks-guides" className="block p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">Ebooks & Guides</h2>
              <p className="text-gray-600">Deep dive into specific topics with our comprehensive guides.</p>
            </a>
          </div>
        </div>
      </Block>

      <Block id="featured-resources">
        <div className="container mx-auto py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Featured & Popular Resources</h2>
          {/* Placeholder for featured resources */}
          <div className="p-8 border rounded-lg bg-gray-50">
            <p className="text-gray-700">Content for featured resources will go here.</p>
            <p className="text-gray-500 text-sm mt-2">Example: Latest blog post, most downloaded template, etc.</p>
          </div>
        </div>
      </Block>

      <Block id="newsletter-signup">
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Up-to-Date!</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for the latest automation insights and resources.</p>
            <form className="max-w-md mx-auto">
              <div className="flex items-center justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 rounded-l-lg border-none focus:outline-none text-gray-900 w-full"
                />
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-r-lg"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </Block>
    </div>
  );
}