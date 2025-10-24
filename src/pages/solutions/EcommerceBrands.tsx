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

export default function EcommerceBrands() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <Section id="hero-section" className="bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-ecommerce.jpg')" }}>
        <Container>
          <Hero>
            <Title className="text-white">For E-commerce Brands</Title>
            <Subtitle className="text-white">Automate orders, support & marketing</Subtitle>
            <CtaButton href="#book-audit" variant="primary">Book E-commerce Automation Audit</CtaButton>
          </Hero>
        </Container>
      </Section>

      {/* SECTION 2: Pain Points */}
      <Section id="pain-points-section">
        <Container>
          <Title className="text-center mb-12">Common Pain Points for E-commerce Brands</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Block id="pain-point-1">
              <Icon name="ProblemIcon1" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Manual Order Processing</Title>
              <TextBlock>Spending too much time manually processing orders, leading to delays and errors.</TextBlock>
            </Block>
            <Block id="pain-point-2">
              <Icon name="ProblemIcon2" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Inefficient Customer Support</Title>
              <TextBlock>Struggling to manage customer inquiries across multiple channels, impacting satisfaction.</TextBlock>
            </Block>
            <Block id="pain-point-3">
              <Icon name="ProblemIcon3" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Disjointed Marketing Efforts</Title>
              <TextBlock>Difficulty in personalizing marketing campaigns and tracking performance due to siloed data.</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: Our Solutions */}
      <Section id="solutions-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">Our Automation Solutions for E-commerce</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Block id="solution-1-workflow">
              <Icon name="WorkflowIcon1" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Automated Order Fulfillment</Title>
              <TextBlock>Automate order capture, processing, and shipping label generation.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 50% Reduction in Processing Time</TextBlock>
            </Block>
            <Block id="solution-2-workflow">
              <Icon name="WorkflowIcon2" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">AI-Powered Customer Support</Title>
              <TextBlock>Deploy chatbots to handle routine inquiries and escalate complex issues.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 24/7 Support with 30% Cost Savings</TextBlock>
            </Block>
            <Block id="solution-3-workflow">
              <Icon name="WorkflowIcon3" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Personalized Marketing Campaigns</Title>
              <TextBlock>Automate segmentation and targeted email/SMS campaigns based on customer behavior.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 20% Increase in Conversion Rates</TextBlock>
            </Block>
            <Block id="solution-4-workflow">
              <Icon name="WorkflowIcon4" className="text-primary-500 text-4xl mb-4" />
              <Title level="h3">Inventory Management Automation</Title>
              <TextBlock>Sync inventory across platforms and automate reorder alerts.</TextBlock>
              <TextBlock className="font-bold mt-2">Expected Result: 99% Inventory Accuracy</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 4: Automation Roadmap */}
      <Section id="roadmap-section">
        <Container>
          <Title className="text-center mb-12">E-commerce Automation Roadmap</Title>
          <ImageBlock src="/roadmap-placeholder.png" alt="Automation Roadmap" className="w-full" />
          <TextBlock className="text-center mt-4">Timeline showing Month 1-4 progression, what gets automated each month, and expected ROI for e-commerce.</TextBlock>
        </Container>
      </Section>

      {/* SECTION 5: Tech Stack Integration */}
      <Section id="tech-stack-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">Integrates with Your E-commerce Tech Stack</Title>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Block id="ecommerce-platform-logos">
              <Title level="h3" className="text-center mb-4">E-commerce Platforms</Title>
              <ImageBlock src="/shopify-magento-logos.png" alt="E-commerce Platform Logos" />
            </Block>
            <Block id="marketing-automation-logos">
              <Title level="h3" className="text-center mb-4">Marketing Automation</Title>
              <ImageBlock src="/klaviyo-mailchimp-logos.png" alt="Marketing Automation Logos" />
            </Block>
            <Block id="shipping-logos">
              <Title level="h3" className="text-center mb-4">Shipping & Logistics</Title>
              <ImageBlock src="/fedex-ups-logos.png" alt="Shipping Logos" />
            </Block>
            <Block id="customer-support-logos">
              <Title level="h3" className="text-center mb-4">Customer Support</Title>
              <ImageBlock src="/zendesk-intercom-logos.png" alt="Customer Support Logos" />
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 6: Industry Case Studies */}
      <Section id="case-studies-section">
        <Container>
          <Title className="text-center mb-12">E-commerce Case Studies</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card id="case-study-1">
              <Title level="h3">E-commerce Brand A: [Case Study Title]</Title>
              <TextBlock>Brief overview of e-commerce case study 1.</TextBlock>
              <CtaButton href="/portfolio/ecommerce-case-study-1" variant="link">Read Full Case Study →</CtaButton>
            </Card>
            <Card id="case-study-2">
              <Title level="h3">E-commerce Brand B: [Case Study Title]</Title>
              <TextBlock>Brief overview of e-commerce case study 2.</TextBlock>
              <CtaButton href="/portfolio/ecommerce-case-study-2" variant="link">Read Full Case Study →</CtaButton>
            </Card>
          </div>
          <TextBlock className="text-center mt-8">
            <CtaButton href="/portfolio?industry=ecommerce" variant="secondary">View All E-commerce Case Studies</CtaButton>
          </TextBlock>
        </Container>
      </Section>

      {/* SECTION 7: Pricing for This Industry */}
      <Section id="pricing-section" className="bg-gray-100">
        <Container>
          <Title className="text-center mb-12">E-commerce-Specific Automation Pricing</Title>
          <TextBlock className="text-center">Industry-specific pricing tiers or link to main pricing with industry context for e-commerce.</TextBlock>
          <CtaButton href="/pricing" variant="primary" className="mx-auto mt-8">View Pricing Plans</CtaButton>
        </Container>
      </Section>

      {/* SECTION 8: FAQ */}
      <Section id="faq-section">
        <Container>
          <Title className="text-center mb-12">Frequently Asked Questions for E-commerce Brands</Title>
          <div className="space-y-4">
            <Block id="faq-1">
              <Title level="h3">FAQ Question 1 for E-commerce?</Title>
              <TextBlock>Answer to FAQ question 1 for e-commerce.</TextBlock>
            </Block>
            <Block id="faq-2">
              <Title level="h3">FAQ Question 2 for E-commerce?</Title>
              <TextBlock>Answer to FAQ question 2 for e-commerce.</TextBlock>
            </Block>
          </div>
        </Container>
      </Section>

      {/* SECTION 9: Bottom CTA */}
      <Section id="bottom-cta-section" className="bg-primary-600 text-white">
        <Container className="text-center">
          <Title className="text-white">Ready to Boost Your E-commerce Sales?</Title>
          <CtaButton href="#book-audit" variant="light">Book Your Free E-commerce Automation Audit</CtaButton>
        </Container>
      </Section>
    </>
  );
}
