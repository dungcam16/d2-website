"use client";
import React from "react";
import {
  Section,
  Container,
  Block,
  Hero,
  Title,
  Subtitle,
  CtaButton,
  FeatureBlock,
  TextBlock,
  ImageBlock,
  Card,
  Icon
} from "@lovable/blocks";

export default function DigitalAgencies() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <Section id="hero-section" className="bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-agency.jpg')" }}>
        <Container>
          <Hero>
            <Title className="text-white">For Digital Agencies</Title>
            <Subtitle className="text-white">Multi-client workflows & reporting</Subtitle>
            <CtaButton href="#book-audit" variant="primary">Book Agency Automation Audit</CtaButton>
          </Hero>
        </Container>
      </Section>

      {/* SECTION 2: Pain Points */}
      <Section id="pain-points-section">
        <Container>
          <Title className="text-center mb-12">Common Pain Points for Digital Agencies</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Block id="pain-point-1">
              <Icon name="ProblemIcon1" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Repetitive Client Tasks</Title>
              <TextBlock>Spending excessive time on recurring tasks for multiple clients, reducing profitability.</TextBlock>
            </Block>
            <Block id="pain-point-2">
              <Icon name="ProblemIcon2" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Inconsistent Reporting</Title>
              <TextBlock>Struggling to generate consistent and timely reports for clients across different platforms.</TextBlock>
            </Block>
            <Block id="pain-point-3">
              <Icon name="ProblemIcon3" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Client Onboarding & Offboarding</Title>
              <TextBlock>Manual and time-consuming processes for onboarding new clients and offboarding old ones.</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: Our Solutions */}
      <Section id="solutions-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">Our Automation Solutions for Digital Agencies</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Block id="solution-1-workflow">
              <Icon name="WorkflowIcon1" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Multi-Client Campaign Management</Title>
              <TextBlock>Automate campaign setup, monitoring, and optimization across client accounts.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 40% Time Savings on Campaign Management</TextBlock>
            </Block>
            <Block id="solution-2-workflow">
              <Icon name="WorkflowIcon2" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Automated Client Reporting</Title>
              <TextBlock>Generate custom, branded reports automatically from various data sources.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 90% Reduction in Reporting Time</TextBlock>
            </Block>
            <Block id="solution-3-workflow">
              <Icon name="WorkflowIcon3" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Streamlined Onboarding & Offboarding</Title>
              <TextBlock>Automate client intake forms, access provisioning, and project setup.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 50% Faster Client Transitions</TextBlock>
            </Block>
            <Block id="solution-4-workflow">
              <Icon name="WorkflowIcon4" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Lead Management & Nurturing</Title>
              <TextBlock>Automate lead scoring, assignment, and nurturing sequences for new business.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 25% Increase in Qualified Leads</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 4: Automation Roadmap */}
      <Section id="roadmap-section">
        <Container>
          <Title className="text-center mb-12">Digital Agency Automation Roadmap</Title>
          <ImageBlock src="/roadmap-placeholder.png" alt="Automation Roadmap" className="w-full" />
          <TextBlock className="text-center mt-4">Timeline showing Month 1-4 progression, what gets automated each month, and expected ROI for digital agencies.</TextBlock>
        </Container>
      </Section>

      {/* SECTION 5: Tech Stack Integration */}
      <Section id="tech-stack-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">Integrates with Your Agency Tech Stack</Title>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Block id="crm-logos">
              <Title level="h3" className="text-center mb-4">CRM & Project Management</Title>
              <ImageBlock src="/hubspot-asana-logos.png" alt="CRM & Project Management Logos" />
            </Block>
            <Block id="marketing-platforms-logos">
              <Title level="h3" className="text-center mb-4">Marketing Platforms</Title>
              <ImageBlock src="/googleads-facebookads-logos.png" alt="Marketing Platforms Logos" />
            </Block>
            <Block id="reporting-logos">
              <Title level="h3" className="text-center mb-4">Reporting & Analytics</Title>
              <ImageBlock src="/datastudio-semrush-logos.png" alt="Reporting & Analytics Logos" />
            </Block>
            <Block id="collaboration-logos">
              <Title level="h3" className="text-center mb-4">Collaboration</Title>
              <ImageBlock src="/slack-gsuite-logos.png" alt="Collaboration Logos" />
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 6: Industry Case Studies */}
      <Section id="case-studies-section">
        <Container>
          <Title className="text-center mb-12">Digital Agency Case Studies</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card id="case-study-1">
              <Title level="h3">Digital Agency A: [Case Study Title]</Title>
              <TextBlock>Brief overview of agency case study 1.</TextBlock>
              <CtaButton href="/portfolio/agency-case-study-1" variant="link">Read Full Case Study →</CtaButton>
            </Card>
            <Card id="case-study-2">
              <Title level="h3">Digital Agency B: [Case Study Title]</Title>
              <TextBlock>Brief overview of agency case study 2.</TextBlock>
              <CtaButton href="/portfolio/agency-case-study-2" variant="link">Read Full Case Study →</CtaButton>
            </Card>
          </div>
          <TextBlock className="text-center mt-8">
            <CtaButton href="/portfolio?industry=digital-agency" variant="secondary">View All Agency Case Studies</CtaButton>
          </TextBlock>
        </Container>
      </Section>

      {/* SECTION 7: Pricing for This Industry */}
      <Section id="pricing-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">Digital Agency Automation Pricing</Title>
          <TextBlock className="text-center">Industry-specific pricing tiers or link to main pricing with industry context for digital agencies.</TextBlock>
          <CtaButton href="/pricing" variant="primary" className="mx-auto mt-8">View Pricing Plans</CtaButton>
        </Container>
      </Section>

      {/* SECTION 8: FAQ */}
      <Section id="faq-section">
        <Container>
          <Title className="text-center mb-12">Frequently Asked Questions for Digital Agencies</Title>
          <div className="space-y-4">
            <Block id="faq-1">
              <Title level="h3">FAQ Question 1 for Agencies?</Title>
              <TextBlock>Answer to FAQ question 1 for agencies.</TextBlock>
            </Block>
            <Block id="faq-2">
              <Title level="h3">FAQ Question 2 for Agencies?</Title>
              <TextBlock>Answer to FAQ question 2 for agencies.</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 9: Bottom CTA */}
      <Section id="bottom-cta-section" className="bg-primary-600 text-white">
        <Container className="text-center">
          <Title className="text-white">Ready to Scale Your Agency Operations?</Title>
          <CtaButton href="#book-audit" variant="light">Book Your Free Agency Automation Audit</CtaButton>
        </Container>
      </Section>
    </>
  );
}
