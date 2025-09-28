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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
