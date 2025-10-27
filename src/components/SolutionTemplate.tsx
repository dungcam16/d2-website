"use client";
import React from "react";

interface SolutionTemplateProps {
  industryName: string;
  heroSubtitle: string;
  heroCta: string;
  heroImage: string;
  painPoints: { icon: string; title: string; description: string; }[];
  solutions: { icon: string; title: string; description: string; result: string; }[];
  roadmap: { month: string; automation: string; roi: string; }[];
  techStack: { category: string; logos: string[]; }[];
  caseStudies: { title: string; link: string; }[];
  pricing: string;
  faq: { question: string; answer: string; }[];
  bottomCta: string;
}

export default function SolutionTemplate({
  industryName,
  heroSubtitle,
  heroCta,
  heroImage,
  painPoints,
  solutions,
  roadmap,
  techStack,
  caseStudies,
  pricing,
  faq,
  bottomCta,
}: SolutionTemplateProps) {
  return (
    <div className="solution-template">
      {/* SECTION 1: Hero */}
      <section
        className="hero bg-cover bg-center text-white py-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">For {industryName}</h1>
          <p className="text-xl mb-8">{heroSubtitle}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
            {heroCta}
          </button>
        </div>
      </section>

      {/* SECTION 2: Pain Points */}
      <section className="pain-points py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Pain Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Solutions */}
      <section className="our-solutions py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <p className="font-semibold text-blue-600">{solution.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Automation Roadmap */}
      <section className="roadmap py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Automation Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Month {item.month}</h3>
                <p className="text-gray-600 mb-2">{item.automation}</p>
                <p className="font-semibold text-green-600">{item.roi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Tech Stack Integration */}
      <section className="tech-stack py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Tech Stack Integration</h2>
          <div className="space-y-8">
            {techStack.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-4">
                  {category.logos.map((logo, idx) => (
                    <img key={idx} src={logo} alt="Tech Logo" className="h-12 w-auto" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Industry Case Studies */}
      <section className="case-studies py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Industry Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                <a href={study.link} className="text-blue-600 hover:underline">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Pricing for This Industry */}
      <section className="pricing py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Pricing for {industryName}</h2>
          <p className="text-xl mb-8">{pricing}</p>
          <a href="/company/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">Contact Us</a>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="faq py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Bottom CTA */}
      <section className="bottom-cta py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">{bottomCta}</h2>
          <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full">
            Book Free Audit
          </button>
        </div>
      </section>
    </div>
  );
}
