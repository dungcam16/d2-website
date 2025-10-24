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

export default function SaaSCompanies() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <Section id="hero-section" className="bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-saas.jpg')" }}>
        <Container>
          <Hero>
            <Title className="text-white">For SaaS Companies</Title>
            <Subtitle className="text-white">Scale without scaling headcount</Subtitle>
            <CtaButton href="#book-audit" variant="primary">Book SaaS Automation Audit</CtaButton>
          </Hero>
        </Container>
      </Section>

      {/* SECTION 2: Pain Points */}
      <Section id="pain-points-section">
        <Container>
          <Title className="text-center mb-12">Common Pain Points for SaaS</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Block id="pain-point-1">
              <Icon name="ProblemIcon1" className="text-primary-500 text-4xl mb-4" /> {/* Placeholder icon */}
              <Title level="h3">Inefficient Lead Qualification</Title>
              <TextBlock>Manually qualifying leads consumes valuable sales time and can lead to missed opportunities.</TextBlock>
            </Block>
            <Block id="pain-point-2">
              <Icon name="ProblemIcon2" className="text-primary-500 text-4xl mb-4" /> {/* Placeholder icon */}
              <Title level="h3">High Customer Onboarding Friction</Title>
              <TextBlock>Complex and manual onboarding processes result in poor user experience and increased time-to-value.</TextBlock>
            </Block>
            <Block id="pain-point-3">
              <Icon name="ProblemIcon3" className="text-primary-500 text-4xl mb-4" /> {/* Placeholder icon */}
              <Title level="h3">Customer Churn Risk</Title>
              <TextBlock>Difficulty identifying at-risk customers and implementing proactive retention strategies.</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: Our Solutions */}
      <Section id="solutions-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">Our Automation Solutions for SaaS</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Block id="solution-1-workflow">
              <Icon name="WorkflowIcon1" className="text-primary-500 text-4xl mb-4" /> {/* Placeholder icon */}
              <Title level="h3">Automated Lead Scoring & Nurturing</Title>
              <TextBlock>Qualify leads faster and nurture them through the sales funnel with personalized communication.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: [30% Increase in Qualified Leads]</TextBlock>
            </Block>
            <Block id="solution-2-workflow">
              <Icon name="WorkflowIcon2" className="text-primary-500 text-4xl mb-4" /> {/* Placeholder icon */}
              <Title level="h3">Seamless Customer Onboarding</Title>
              <TextBlock>Automate welcome sequences, product tours, and data synchronization to your CRM.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: [40% Faster Customer Activation]</TextBlock>
            </Block>
            <Block id="solution-3-workflow">
              <Icon name="WorkflowIcon3" className="text-primary-500 text-4xl mb-4" /> {/* Placeholder icon */}
              <Title level="h3">Proactive Churn Prevention</Title>
              <TextBlock>Monitor usage patterns, identify at-risk customers, and trigger re-engagement campaigns.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: [15% Reduction in Voluntary Churn]</TextBlock>
            </Block>
            <Block id="solution-4-workflow">
              <Icon name="WorkflowIcon4" className="text-primary-500 text-4xl mb-4" /> {/* Placeholder icon */}
              <Title level="h3">Automated Reporting & Analytics</Title>
              <TextBlock>Generate daily/weekly reports on key SaaS metrics (MRR, Churn, LTV) and visualize data.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: [80% Time Savings on Reporting]</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 4: Automation Roadmap */}
      <Section id="roadmap-section">
        <Container>
          <Title className="text-center mb-12">SaaS Automation Roadmap</Title>
          <ImageBlock src="/roadmap-placeholder.png" alt="Automation Roadmap" className="w-full" />
          <TextBlock className="text-center mt-4">Timeline showing Month 1-4 progression, what gets automated each month, and expected ROI for SaaS.</TextBlock>
        </Container>
      </Section>

      {/* SECTION 5: Tech Stack Integration */}
      <Section id="tech-stack-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">Integrates with Your SaaS Tech Stack</Title>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Block id="crm-logos">
              <Title level="h3" className="text-center mb-4">CRM</Title>
              <ImageBlock src="/crm-logos.png" alt="CRM Logos" />
            </Block>
            <Block id="email-logos">
              <Title level="h3" className="text-center mb-4">Email Marketing</Title>
              <ImageBlock src="/email-logos.png" alt="Email Logos" />
            </Block>
            <Block id="analytics-logos">
              <Title level="h3" className="text-center mb-4">Analytics</Title>
              <ImageBlock src="/analytics-logos.png" alt="Analytics Logos" />
            </Block>
            <Block id="other-logos">
              <Title level="h3" className="text-center mb-4">Other</Title>
              <ImageBlock src="/other-logos.png" alt="Other Logos" />
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 6: Industry Case Studies */}
      <Section id="case-studies-section">
        <Container>
          <Title className="text-center mb-12">SaaS Case Studies</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card id="case-study-1">
              <Title level="h3">SaaS Client A: [Case Study Title]</Title>
              <TextBlock>Brief overview of case study 1.</TextBlock>
              <CtaButton href="/portfolio/saas-case-study-1" variant="link">Read Full Case Study &rarr;</CtaButton>
            </Card>
            <Card id="case-study-2">
              <Title level="h3">SaaS Client B: [Case Study Title]</Title>
              <TextBlock>Brief overview of case study 2.</TextBlock>
              <CtaButton href="/portfolio/saas-case-study-2" variant="link">Read Full Case Study &rarr;</CtaButton>
            </Card>
          </div>
          <TextBlock className="text-center mt-8">
            <CtaButton href="/portfolio?industry=saas" variant="secondary">View All SaaS Case Studies</CtaButton>
          </TextBlock>
        </Container>
      </Section>

      {/* SECTION 7: Pricing for This Industry */}
      <Section id="pricing-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">SaaS-Specific Automation Pricing</Title>
          <TextBlock className="text-center">Industry-specific pricing tiers or link to main pricing with industry context for SaaS.</TextBlock>
          <CtaButton href="/pricing" variant="primary" className="mx-auto mt-8">View Pricing Plans</CtaButton>
        </Container>
      </Section>

      {/* SECTION 8: FAQ */}
      <Section id="faq-section">
        <Container>
          <Title className="text-center mb-12">Frequently Asked Questions for SaaS</Title>
          <div className="space-y-4">
            <Block id="faq-1">
              <Title level="h3">FAQ Question 1 for SaaS?</Title>
              <TextBlock>Answer to FAQ question 1 for SaaS.</TextBlock>
            </Block>
            <Block id="faq-2">
              <Title level="h3">FAQ Question 2 for SaaS?</Title>
              <TextBlock>Answer to FAQ question 2 for SaaS.</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 9: Bottom CTA */}
      <Section id="bottom-cta-section" className="bg-primary-600 text-white">
        <Container className="text-center">
          <Title className="text-white">Ready to Scale Your SaaS Operations?</Title>
          <CtaButton href="#book-audit" variant="light">Book Your Free SaaS Automation Audit</CtaButton>
        </Container>
      </Section>
    </>
  );
}