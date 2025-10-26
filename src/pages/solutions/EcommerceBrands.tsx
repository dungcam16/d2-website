import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ShoppingCart, Package, Mail, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function EcommerceBrands() {
  const challenges = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Order Management",
      description: "Automate order processing, fulfillment, and customer notifications"
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Inventory Sync",
      description: "Real-time stock updates across multiple sales channels"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Marketing Campaigns",
      description: "Triggered emails, abandoned cart recovery, and personalization"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Consolidated sales data and automated performance reports"
    }
  ];

  const solutions = [
    "Multi-channel inventory synchronization",
    "Automated order fulfillment workflows",
    "Abandoned cart recovery campaigns",
    "Customer segmentation & personalization",
    "Post-purchase automation & reviews",
    "Dynamic pricing & promotion management"
  ];

  return (
    <>
      <SEO
        title="E-commerce Automation Solutions | D2 Group"
        description="Scale your online store with powerful e-commerce automation. Streamline order processing, inventory management, marketing campaigns, and customer experience."
        keywords="ecommerce automation, shopify automation, order fulfillment automation, inventory sync, abandoned cart recovery"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              E-commerce Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automate Your E-commerce Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sell more, stress less. Automate inventory, orders, marketing, and customer service 
              so you can focus on growing your brand and delighting customers.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link to="/company/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View E-commerce Cases</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">E-commerce Challenges We Automate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Complete E-commerce Automation</h2>
                <p className="text-muted-foreground mb-6">
                  From order processing to customer retention, we automate every aspect of your 
                  e-commerce operations. Work with Shopify, WooCommerce, Magento, and more.
                </p>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our E-commerce Expertise</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Shopify & Shopify Plus</h4>
                    <p className="text-sm text-muted-foreground">Deep integration expertise with custom workflows</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Multi-Channel Selling</h4>
                    <p className="text-sm text-muted-foreground">Amazon, eBay, Etsy, and marketplace integrations</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">3PL & Fulfillment</h4>
                    <p className="text-sm text-muted-foreground">ShipStation, ShipBob, and logistics automation</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">Marketing Platforms</h4>
                    <p className="text-sm text-muted-foreground">Klaviyo, Mailchimp, and email automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Store?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how automation can transform your e-commerce business
            </p>
            <Button size="lg" asChild>
              <Link to="/company/contact">Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
