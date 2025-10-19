import React from "react";
import Header from "@/components/Header";
import HeroNew from "@/components/HeroNew";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesNew from "@/components/ServicesNew";
import TemplateLibrary from "@/components/TemplateLibrary";
import CaseStudySpotlight from "@/components/CaseStudySpotlight";
import Process from "@/components/Process";
import TestimonialsNew from "@/components/TestimonialsNew";
import Pricing from "@/components/Pricing";
import BlogInsights from "@/components/BlogInsights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "D2 Group - AI Automation Agency",
    description: "We build AI-powered workflows, RAG systems, and SaaS products for remote teams in the US, Australia, and Europe. Specializing in n8n automation and LLM integration.",
    url: "https://d2group.co",
    sameAs: ["https://facebook.com/d2group", "https://linkedin.com/company/d2group"],
    serviceArea: {
      "@type": "Place",
      name: "Global - US, Australia, Europe"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation & Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "n8n Workflow Automation",
            description: "Complex multi-step workflows with error handling and API integrations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & RAG Systems",
            description: "Custom LLM integrations with GPT-4, Claude, and vector databases",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Product Development",
            description: "Full-stack SaaS applications with React, Node.js, and Supabase",
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="D2 Group — AI Automation Agency for Remote Teams | n8n, RAG, SaaS Development"
        description="Professional AI automation agency serving US, Australia, and Europe. Expert in n8n workflows, GPT-4/Claude integration, RAG systems, and full-stack SaaS development with React & Node.js."
        keywords="AI automation agency, n8n developer, RAG systems, GPT-4 integration, remote team automation, SaaS development, full-stack developer, API integration, workflow automation, AI consultant"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Header />
      <HeroNew />
      <TrustBar />
      <ProblemSolution />
      <ServicesNew />
      <TemplateLibrary />
      <CaseStudySpotlight />
      <Process />
      <TestimonialsNew />
      <Pricing />
      <BlogInsights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
