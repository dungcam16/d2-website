"use client";
import React from "react";
import { Block } from "@lovable/blocks";
import { Section, Container } from "@lovable/config";

export default function AboutUs() {
  return (
    <Section>
      <Container>
        {/* Hero with company tagline */}
        <Block id="hero-1" data={{ title: "About D2 Group", subtitle: "Innovating for a Smarter Future", description: "At D2 Group, we empower businesses with cutting-edge AI and automation solutions to drive efficiency, foster innovation, and achieve sustainable growth." }} />

        {/* Mission & Values (3 cards) */}
        <Block id="feature-list-1" data={{
          title: "Our Mission & Values",
          features: [
            { icon: "RocketIcon", title: "Mission", description: "To deliver transformative AI and automation solutions that solve complex business challenges and create lasting value for our clients." },
            { icon: "LightbulbIcon", title: "Vision", description: "To be a leading innovator in AI and automation, recognized for our expertise, integrity, and commitment to client success." },
            { icon: "HeartHandshakeIcon", title: "Values", description: "Innovation, Integrity, Collaboration, Excellence, Customer Focus." }
          ]
        }} />

        {/* Company story (timeline or narrative) */}
        <Block id="text-block-1" data={{
          title: "Our Story",
          content: `
            <p>Founded in [Year] by a team of visionary technologists, D2 Group embarked on a journey to revolutionize how businesses operate. We started with a simple belief: that intelligent automation and AI could unlock unprecedented levels of efficiency and innovation. Over the years, we've grown from a passionate startup into a trusted partner for businesses across various industries, consistently pushing the boundaries of what's possible with AI.</p>
            <p>Our milestones include: [Add specific milestones like "Launching our flagship AI platform in 20XX", "Expanding into new markets in 20XX", "Achieving X industry certifications"].</p>
          `
        }} />

        {/* Why D2 Group (differentiation) */}
        <Block id="feature-list-2" data={{
          title: "Why Choose D2 Group?",
          features: [
            { icon: "BrainIcon", title: "Expertise", description: "Our team comprises industry-leading AI and automation specialists with deep technical knowledge and practical experience." },
            { icon: "StarsIcon", title: "Innovation", description: "We are at the forefront of technological advancements, continuously researching and implementing the latest AI methodologies." },
            { icon: "HandshakeIcon", title: "Partnership", description: "We believe in collaborative partnerships, working closely with our clients to understand their unique needs and deliver tailored solutions." },
            { icon: "AwardIcon", title: "Proven Results", description: "Our solutions consistently deliver measurable results, improving efficiency, reducing costs, and driving growth for our clients." }
          ]
        }} />

        {/* Stats counter (clients, projects, savings, satisfaction) */}
        <Block id="stats-1" data={{
          stats: [
            { number: "250+", label: "Happy Clients" },
            { number: "500+", label: "Projects Completed" },
            { number: "30%", label: "Average Cost Savings" },
            { number: "98%", label: "Client Satisfaction Rate" }
          ]
        }} />

        {/* Partnerships & certifications */}
        <Block id="logo-cloud-1" data={{
          title: "Our Esteemed Partners & Certifications",
          logos: [
            { src: "/images/partner1.png", alt: "Partner 1" },
            { src: "/images/partner2.png", alt: "Partner 2" },
            { src: "/images/certification1.png", alt: "Certification 1" },
            { src: "/images/certification2.png", alt: "Certification 2" }
          ]
        }} />

        {/* CTA */}
        <Block id="cta-1" data={{ title: "Ready to Transform Your Business?", description: "Contact us today to discuss how our AI and automation solutions can propel your company forward.", buttonText: "Get in Touch", buttonLink: "/company/contact" }} />
      </Container>
    </Section>
  );
}