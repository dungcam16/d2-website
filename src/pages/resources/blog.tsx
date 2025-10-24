"use client";
import React from "react";
import { Block } from "@lovable/blocks";

export default function Blog() {
  return (
    <div>
      <Block id="blog-hero">
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Blog & Insights</h1>
            <p className="text-lg">Stay updated with the latest in automation, tutorials, and case studies.</p>
          </div>
        </div>
      </Block>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm">All</button>
                <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">n8n</button>
                <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">AI</button>
                <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">Zapier</button>
                <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">Tutorials</button>
                <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">Case Studies</button>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="p-2 border rounded-full w-full md:w-auto"
              />
            </div>

            {/* Featured Post */}
            <Block id="featured-post">
              <div className="mb-12 p-8 border rounded-lg shadow-lg bg-white flex flex-col md:flex-row items-center gap-6">
                <img src="https://via.placeholder.com/400x250" alt="Featured Post" className="rounded-lg w-full md:w-1/2 object-cover" />
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-3">Featured Post Title: Automating Your Marketing Funnel</h2>
                  <p className="text-gray-700 mb-4">A deep dive into how n8n can transform your marketing automation strategy and boost your conversion rates.</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Read More</button>
                </div>
              </div>
            </Block>

            {/* Grid of Posts */}
            <Block id="blog-posts-grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="border rounded-lg shadow-md overflow-hidden bg-white">
                    <img src={`https://via.placeholder.com/300x200?text=Blog+Post+${i}`} alt={`Blog Post ${i}`} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">Blog Post Title {i}</h3>
                      <p className="text-gray-600 text-sm">Category</p>
                      <p className="text-gray-700 mt-2">Short description of the blog post content...</p>
                      <a href="#" className="text-blue-600 hover:underline mt-3 block">Read More</a>
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            {/* Pagination */}
            <Block id="blog-pagination">
              <div className="flex justify-center items-center gap-4">
                <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">Previous</button>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</span>
                <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">2</button>
                <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">3</button>
                <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">Next</button>
              </div>
            </Block>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1">
            <Block id="blog-sidebar">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold mb-4">Popular Posts</h3>
                <ul>
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="mb-3">
                      <a href="#" className="text-blue-600 hover:underline">Popular Post Title {i}</a>
                      <p className="text-gray-500 text-sm">Date</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold mb-4">Categories</h3>
                <ul>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">n8n (25)</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">AI (15)</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Zapier (10)</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Tutorials (30)</a></li>
                  <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Case Studies (8)</a></li>
                </ul>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
                <p className="mb-4">Get the latest articles directly in your inbox.</p>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="p-2 rounded-lg w-full text-gray-900 mb-3"
                  />
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg w-full"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}