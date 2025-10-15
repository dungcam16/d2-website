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
    name: "D2 Group - AI & Automation Agency",
    description: "We build AI-powered n8n workflows that eliminate repetitive tasks, accelerate growth, and keep your operations lean.",
    url: "https://d2group.co",
    sameAs: ["https://facebook.com/d2group", "https://linkedin.com/company/d2group"],
    serviceArea: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Automation & AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Automation (n8n, Make)",
            description: "Streamline any process across apps and teams",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integration (GPT, RAG, LangChain)",
            description: "Add intelligence to your automations with LLMs",
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="D2 Group — AI & No-code Automation Agency | n8n + GPT Experts"
        description="We build intelligent automation systems using n8n, GPT, and RAG — helping agencies and startups save time, reduce errors, and scale globally."
        keywords="n8n automation, AI workflow, GPT integration, no-code automation, business process automation, RAG systems, workflow templates"
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
