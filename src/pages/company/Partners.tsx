"use client";
import React from "react";
import { Block } from "@lovable/blocks";
import { Section, Container } from "@lovable/config";

export default function Partners() {
  return (
    <Section>
      <Container>
        {/* Hero */}
        <Block id="hero-1" data={{ title: "Partner with D2 Group", subtitle: "Join our network and grow together." }} />

        {/* Partnership types */}
        <Block id="feature-list-1" data={{
          title: "Types of Partnerships",
          features: [
            { icon: "Share2Icon", title: "Technology Partners", description: "Collaborate on integrating our AI solutions with your platforms." },
            { icon: "UsersIcon", title: "Referral Partners", description: "Earn commissions by referring clients to D2 Group." },
            { icon: "MegaphoneIcon", title: "Strategic Alliances", description: "Form deep integrations and co-marketing initiatives to expand market reach." }
          ]
        }} />

        {/* Partner logos (categorized) */}
        <Block id="logo-cloud-1" data={{
          title: "Our Valued Partners",
          logos: [
            { src: "/images/partner-logo-a.png", alt: "Partner A" },
            { src: "/images/partner-logo-b.png", alt: "Partner B" },
            { src: "/images/partner-logo-c.png", alt: "Partner C" }
          ]
        }} />

        {/* Benefits of partnering */}
        <Block id="feature-list-2" data={{
          title: "Benefits of Partnering with D2 Group",
          features: [
            { icon: "TrendingUpIcon", title: "Expand Your Offerings", description: "Enhance your portfolio with our cutting-edge AI and automation solutions." },
            { icon: "DollarSignIcon", title: "Increase Revenue Streams", description: "Unlock new revenue opportunities through competitive commissions and joint ventures." },
            { icon: "NetworkIcon", title: "Access Expert Support", description: "Benefit from our dedicated partner support, training, and resources." },
            { icon: "LeafIcon", title: "Innovate Together", description: "Collaborate on groundbreaking projects and stay ahead in the market." }
          ]
        }} />

        {/* Partner application form */}
        <Block id="contact-form-1" data={{
          title: "Become a Partner",
          description: "Interested in joining our partner program? Fill out the application form below.",
          fields: [
            { name: "companyName", label: "Company Name", type: "text" },
            { name: "contactPerson", label: "Contact Person", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "partnershipType", label: "Preferred Partnership Type", type: "select", options: ["Technology", "Referral", "Strategic Alliance", "Other"] },
            { name: "message", label: "Tell us about your company and interest", type: "textarea" }
          ],
          buttonText: "Submit Application"
        }} />

        {/* CTA */}
        <Block id="cta-1" data={{ title: "Ready to Partner?", description: "Let's explore how we can achieve mutual success. Contact us today.", buttonText: "Contact Our Partnership Team", buttonLink: "mailto:partnerships@d2group.com" }} />
      </Container>
    </Section>
  );
}