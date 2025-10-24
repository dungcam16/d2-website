"use client";
import React from "react";
import { Block } from "@lovable/blocks";
import { Section, Container } from "@lovable/config";

export default function Contact() {
  return (
    <Section>
      <Container>
        {/* Hero */}
        <Block id="hero-1" data={{ title: "Get in Touch with D2 Group", subtitle: "We're here to help you innovate and succeed." }} />

        {/* Contact methods (3 columns) */}
        <Block id="feature-list-1" data={{
          title: "How Can We Help?",
          features: [
            { icon: "DollarSignIcon", title: "Sales Inquiries", description: "Interested in our services? Contact our sales team to discuss your needs.", link: "mailto:sales@d2group.com" },
            { icon: "LifeBuoyIcon", title: "Support", description: "Need assistance with an existing project? Our support team is ready to help.", link: "mailto:support@d2group.com" },
            { icon: "HandshakeIcon", title: "Partnerships", description: "Looking to partner with D2 Group? Let's explore collaboration opportunities.", link: "mailto:partnerships@d2group.com" }
          ]
        }} />

        {/* Contact form (left column) and Calendly embed (right column) */}
        <Block id="two-column-layout-1" data={{
          leftContent: <Block id="contact-form-1" data={{ title: "Send Us a Message", description: "Fill out the form below and we'll get back to you shortly.", fields: ["name", "email", "message"], buttonText: "Send Message" }} />,
          rightContent: <Block id="embed-1" data={{ title: "Book a Consultation", description: "Schedule a free consultation with our experts via Calendly.", embedCode: "<iframe src=\"https://calendly.com/d2group/30min\" width=\"100%\" height=\"700px\" frameborder=\"0\"></iframe>" }} />
        }} />

        {/* Office locations/info */}
        <Block id="location-1" data={{
          title: "Our Offices",
          locations: [
            { name: "Headquarters", address: "123 Innovation Drive, Tech City, TX 78701", phone: "+1 (555) 123-4567", email: "info@d2group.com" },
            { name: "Regional Office", address: "456 Automation Lane, Future Town, CA 90210", phone: "+1 (555) 987-6543", email: "info@d2group.com" }
          ]
        }} />

        {/* FAQ */}
        <Block id="faq-1" data={{
          title: "Frequently Asked Questions",
          faqs: [
            { question: "What services does D2 Group offer?", answer: "We offer a comprehensive suite of AI and automation services, including AI solution development, workflow automation, data integration, and consulting." },
            { question: "How can AI benefit my business?", answer: "AI can significantly improve efficiency, reduce operational costs, enhance decision-making, and create new opportunities for innovation and growth." },
            { question: "What is your process for new projects?", answer: "Our process typically involves discovery and consultation, solution design, development and implementation, and ongoing support and optimization." }
          ]
        }} />

        {/* Social links */}
        <Block id="social-links-1" data={{
          title: "Connect With Us",
          links: [
            { icon: "XIcon", href: "#", label: "Twitter" },
            { icon: "LinkedinIcon", href: "#", label: "LinkedIn" },
            { icon: "FacebookIcon", href: "#", label: "Facebook" }
          ]
        }} />
      </Container>
    </Section>
  );
}