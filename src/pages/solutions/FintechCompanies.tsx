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

export default function FintechCompanies() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <Section id="hero-section" className="bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-fintech.jpg')" }}>
        <Container>
          <Hero>
            <Title className="text-white">For FinTech Companies</Title>
            <Subtitle className="text-white">Secure, compliant financial automation</Subtitle>
            <CtaButton href="#book-audit" variant="primary">Book FinTech Automation Audit</CtaButton>
          </Hero>
        </Container>
      </Section>

      {/* SECTION 2: Pain Points */}
      <Section id="pain-points-section">
        <Container>
          <Title className="text-center mb-12">Common Pain Points for FinTech</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Block id="pain-point-1">
              <Icon name="ProblemIcon1" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Regulatory Compliance</Title>
              <TextBlock>Navigating complex and ever-changing financial regulations requires significant manual effort and risk.</TextBlock>
            </Block>
            <Block id="pain-point-2">
              <Icon name="ProblemIcon2" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Manual Data Processing</Title>
              <TextBlock>High volume of manual data entry and processing for transactions, onboarding, and reporting, leading to errors and delays.</TextBlock>
            </Block>
            <Block id="pain-point-3">
              <Icon name="ProblemIcon3" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Customer Onboarding Friction</Title>
              <TextBlock>Lengthy and cumbersome onboarding processes for new clients, impacting conversion and satisfaction.</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: Our Solutions */}
      <Section id="solutions-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">Our Automation Solutions for FinTech</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Block id="solution-1-workflow">
              <Icon name="WorkflowIcon1" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Automated Compliance & Reporting</Title>
              <TextBlock>Implement automated workflows for regulatory checks, audit trails, and financial reporting.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 80% Reduction in Compliance Overhead</TextBlock>
            </Block>
            <Block id="solution-2-workflow">
              <Icon name="WorkflowIcon2" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Intelligent Data Processing</Title>
              <TextBlock>Automate extraction, validation, and reconciliation of financial data from various sources.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 99% Data Accuracy & Faster Processing</TextBlock>
            </Block>
            <Block id="solution-3-workflow">
              <Icon name="WorkflowIcon3" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Seamless Customer Onboarding</Title>
              <TextBlock>Digitize and automate KYC/AML checks, document verification, and account setup.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 60% Faster Onboarding Time</TextBlock>
            </Block>
            <Block id="solution-4-workflow">
              <Icon name="WorkflowIcon4" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Fraud Detection & Prevention</Title>
              <TextBlock>Implement real-time monitoring and automated alerts for suspicious transactions.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 30% Decrease in Fraudulent Activities</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 4: Automation Roadmap */}
      <Section id="roadmap-section">
        <Container>
          <Title className="text-center mb-12">FinTech Automation Roadmap</Title>
          <ImageBlock src="/roadmap-placeholder.png" alt="Automation Roadmap" className="w-full" />
          <TextBlock className="text-center mt-4">Timeline showing Month 1-4 progression, what gets automated each month, and expected ROI for FinTech.</TextBlock>
        </Container>
      </Section>

      {/* SECTION 5: Tech Stack Integration */}
      <Section id="tech-stack-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">Integrates with Your FinTech Tech Stack</Title>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Block id="core-banking-logos">
              <Title level="h3" className="text-center mb-4">Core Banking & ERP</Title>
              <ImageBlock src="/sap-oracle-logos.png" alt="Core Banking & ERP Logos" />
            </Block>
            <Block id="compliance-risk-logos">
              <Title level="h3" className="text-center mb-4">Compliance & Risk</Title>
              <ImageBlock src="/refinitiv-thomsonreuters-logos.png" alt="Compliance & Risk Logos" />
            </Block>
            <Block id="payment-gateways-logos">
              <Title level="h3" className="text-center mb-4">Payment Gateways</Title>
              <ImageBlock src="/stripe-paypal-logos.png" alt="Payment Gateways Logos" />
            </Block>
            <Block id="data-analytics-logos">
              <Title level="h3" className="text-center mb-4">Data & Analytics</Title>
              <ImageBlock src="/tableau-powerbi-logos.png" alt="Data & Analytics Logos" />
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 6: Industry Case Studies */}
      <Section id="case-studies-section">
        <Container>
          <Title className="text-center mb-12">FinTech Case Studies</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card id="case-study-1">
              <Title level="h3">FinTech Company A: [Case Study Title]</Title>
              <TextBlock>Brief overview of FinTech case study 1.</TextBlock>
              <CtaButton href="/portfolio/fintech-case-study-1" variant="link">Read Full Case Study →</CtaButton>
            </Card>
            <Card id="case-study-2">
              <Title level="h3">FinTech Company B: [Case Study Title]</Title>
              <TextBlock>Brief overview of FinTech case study 2.</TextBlock>
              <CtaButton href="/portfolio/fintech-case-study-2" variant="link">Read Full Case Study →</CtaButton>
            </Card>
          </div>
          <TextBlock className="text-center mt-8">
            <CtaButton href="/portfolio?industry=fintech" variant="secondary">View All FinTech Case Studies</CtaButton>
          </TextBlock>
        </Container>
      </Section>

      {/* SECTION 7: Pricing for This Industry */}
      <Section id="pricing-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">FinTech-Specific Automation Pricing</Title>
          <TextBlock className="text-center">Industry-specific pricing tiers or link to main pricing with industry context for FinTech.</TextBlock>
          <CtaButton href="/pricing" variant="primary" className="mx-auto mt-8">View Pricing Plans</CtaButton>
        </Container>
      </Section>

      {/* SECTION 8: FAQ */}
      <Section id="faq-section">
        <Container>
          <Title className="text-center mb-12">Frequently Asked Questions for FinTech Companies</Title>
          <div className="space-y-4">
            <Block id="faq-1">
              <Title level="h3">FAQ Question 1 for FinTech?</Title>
              <TextBlock>Answer to FAQ question 1 for FinTech.</TextBlock>
            </Block>
            <Block id="faq-2">
              <Title level="h3">FAQ Question 2 for FinTech?</Title>
              <TextBlock>Answer to FAQ question 2 for FinTech.</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 9: Bottom CTA */}
      <Section id="bottom-cta-section" className="bg-primary-600 text-white">
        <Container className="text-center">
          <Title className="text-white">Ready to Secure & Scale Your FinTech Operations?</Title>
          <CtaButton href="#book-audit" variant="light">Book Your Free FinTech Automation Audit</CtaButton>
        </Container>
      </Section>
    </>
  );
}
