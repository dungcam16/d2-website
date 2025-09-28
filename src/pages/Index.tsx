import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import WhyChooseUs from '@/components/WhyChooseUs';
import Partners from '@/components/Partners';
import Customers from '@/components/Customers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D2 Group - Agency Marketing B2B",
    "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/GfwJGgB5PVUTbVt9ullbKBHrjTg2/social-images/social-1758965925583-514270009_692154340477059_2925918850980454621_n (1).jpg",
    "description": "Agency marketing B2B hàng đầu Việt Nam chuyên cung cấp dịch vụ marketing tổng thể, giải pháp digital marketing và tư vấn chiến lược marketing cho doanh nghiệp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Lê Lợi",
      "addressLocality": "Hồ Chí Minh",
      "addressCountry": "VN"
    },
    "telephone": "+84-123-456-789",
    "url": "https://d2group.co",
    "sameAs": [
      "https://facebook.com/d2group",
      "https://linkedin.com/company/d2group"
    ],
    "serviceArea": "Vietnam",
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dịch vụ Marketing B2B",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dịch vụ Chatbot",
            "url": "https://d2group.co/services/chatbot"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dịch vụ Zalo OA",
            "url": "https://d2group.co/services/zalo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dịch vụ Tự động hóa N8N",
            "url": "https://d2group.co/services/automation"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Dịch vụ Marketing Tổng thể cho B2B - Agency Marketing B2B Hàng Đầu"
        description="D2 Group - Công ty marketing B2B hàng đầu Việt Nam. Chuyên cung cấp giải pháp marketing cho doanh nghiệp, tư vấn chiến lược marketing và digital marketing agency chuyên nghiệp."
        keywords="dịch vụ marketing tổng thể cho B2B, agency marketing B2B, công ty marketing B2B, giải pháp marketing cho doanh nghiệp, tư vấn chiến lược marketing, digital marketing agency"
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
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
