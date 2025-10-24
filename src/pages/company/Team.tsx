"use client";
import React from "react";
import { Block } from "@lovable/blocks";
import { Section, Container } from "@lovable/config";

export default function Team() {
  return (
    <Section>
      <Container>
        {/* Hero: "Meet the Team" */}
        <Block id="hero-1" data={{ title: "Meet the D2 Group Team", subtitle: "Our passionate experts driving innovation" }} />

        {/* Team grid */}
        <Block id="team-1" data={{
          title: "Leadership",
          members: [
            { name: "John Doe", title: "CEO & Founder", bio: "John is a visionary leader with over 20 years of experience in AI and automation. He founded D2 Group with a mission to transform businesses through technology.", image: "/images/john_doe.jpg", linkedin: "#" },
            { name: "Jane Smith", title: "Chief Technology Officer", bio: "Jane leads our technological innovation and product development. Her expertise in machine learning and data science is unparalleled.", image: "/images/jane_smith.jpg", linkedin: "#" },
            { name: "Peter Jones", title: "Head of Operations", bio: "Peter ensures smooth execution of all projects and oversees operational excellence. His strategic approach keeps us ahead of the curve.", image: "/images/peter_jones.jpg", linkedin: "#" }
          ]
        }} />

        <Block id="team-2" data={{
          title: "Our Talented Team",
          members: [
            { name: "Alice Brown", title: "AI Engineer", bio: "Alice specializes in developing advanced AI models and integrating them into client systems.", image: "/images/alice_brown.jpg", linkedin: "#" },
            { name: "Bob White", title: "Automation Specialist", bio: "Bob is an expert in designing and implementing robust automation workflows that streamline business processes.", image: "/images/bob_white.jpg", linkedin: "#" },
            { name: "Charlie Green", title: "Data Scientist", bio: "Charlie's deep analytical skills help us extract valuable insights from complex datasets for our clients.", image: "/images/charlie_green.jpg", linkedin: "#" },
            { name: "Diana Black", title: "Project Manager", bio: "Diana ensures that all projects are delivered on time and within budget, exceeding client expectations.", image: "/images/diana_black.jpg", linkedin: "#" }
          ]
        }} />

        {/* CTA: "Join our team" if hiring */}
        <Block id="cta-1" data={{ title: "Join Our Growing Team!", description: "Are you passionate about AI and automation? Explore career opportunities with D2 Group and help us shape the future.", buttonText: "View Open Positions", buttonLink: "/careers" }} />
      </Container>
    </Section>
  );
}