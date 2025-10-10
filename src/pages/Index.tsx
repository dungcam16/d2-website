import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Partners from "@/components/Partners";
import Customers from "@/components/Customers";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "D2 Group - B2B Marketing Agency",
    image:
      "https://storage.googleapis.com/gpt-engineer-file-uploads/GfwJGgB5PVUTbVt9ullbKBHrjTg2/social-images/social-1758965925583-514270009_692154340477059_2925918850980454621_n (1).jpg",
    description:
      "Leading B2B marketing agency in Vietnam specializing in comprehensive marketing services, digital marketing solutions and strategic marketing consulting for businesses",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Le Loi",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    telephone: "+84-123-456-789",
    url: "https://d2group.co",
    sameAs: ["https://facebook.com/d2group", "https://linkedin.com/company/d2group"],
    serviceArea: "Vietnam",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "B2B Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chatbot Services",
            url: "https://d2group.co/services/chatbot",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zalo OA Services",
            url: "https://d2group.co/services/zalo",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "N8N Automation Services",
            url: "https://d2group.co/services/automation",
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Comprehensive B2B Marketing Services - Leading B2B Marketing Agency"
        description="D2 Group - Vietnam's leading B2B marketing company. Specializing in business marketing solutions, strategic marketing consulting and professional digital marketing agency services."
        keywords="comprehensive B2B marketing services, B2B marketing agency, B2B marketing company, business marketing solutions, strategic marketing consulting, digital marketing agency"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Partners />
      <WhyChooseUs />
      <Testimonials />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
