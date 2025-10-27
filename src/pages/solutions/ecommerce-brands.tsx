import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  ShoppingCart,
  Package,
  Mail,
  BarChart,
  CheckCircle,
  Star,
  Clock,
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Shield,
  PlayCircle,
  Download,
  Settings,
  RefreshCw,
  Target,
  Award,
  MessageSquare,
  Truck,
  RotateCcw,
  Activity,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function EcommerceBrands() {
  const [orderVolume, setOrderVolume] = useState(100);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Commerce Automation Solutions",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
    },
    description: "Automate order processing, inventory sync, customer notifications, and fulfillment. Scale to 10x order volume without hiring.",
    areaServed: ["US", "EU"],
  };

  // Pain Points
  const painPoints = [
    {
      icon: Clock,
      title: "Manual Order Processing Drowning Your Team",
      problem: "Every order requires manual data entry. Customer order arrives → Someone manually enters into fulfillment system → Someone manually updates inventory → Someone manually sends confirmation email → Someone manually checks payment. This repeats 100+ times per day.",
      impact: "2-3 hours per day on order entry alone. 8% error rate (wrong product, wrong address, missed orders). Angry customers waiting for confirmation. Orders slip through cracks.",
      cost: "At $20/hour, that's $40-60/day on order entry. Per year? $14,600-$21,900. Plus lost sales from errors and delays."
    },
    {
      icon: Package,
      title: "Inventory Chaos Across Multiple Channels",
      problem: "You sell on Shopify, Amazon, and your own website. Each has its own inventory system. You oversell products that are actually out of stock. You undersell products that have plenty of inventory.",
      impact: "Angry customers with cancelled orders. Opportunity cost from underselling. Returns and chargebacks from oversells. Inventory data never matches reality.",
      cost: "Overselling alone: If you sell $50/item and oversell 2% of orders (typical), that's 1,000 extra units per year. Value: $50K lost revenue. Plus chargebacks, returns, customer refunds."
    },
    {
      icon: MessageSquare,
      title: "Customer Communication Breakdown",
      problem: "Customer buys → Silence. Customer waits 4 hours for order confirmation. Customer waits 2 days for shipping notification. Customer calls asking 'Where's my order?' Your CS team is drowning in repetitive emails.",
      impact: "Poor customer experience. Support team overwhelmed. Negative reviews ('No updates, poor communication'). Repeat customers become one-time buyers.",
      cost: "Each missed communication: 15% chance customer doesn't return. If you have 1,000 customers/month, that's 150 lost customers/month. Lifetime value: $300/customer. Loss: $45K/month in potential revenue."
    },
    {
      icon: Truck,
      title: "Fulfillment Center Can't Keep Up",
      problem: "Orders pile up at fulfillment center. Fulfillment center doesn't know which orders are paid, which are waiting for payment, which need special handling. Manual picking lists. Manual shipping label generation.",
      impact: "Fulfillment center = bottleneck. Slow order processing. Can't scale volume. Forced to hire more warehouse staff.",
      cost: "Each fulfillment hire: $18K/year salary, training, benefits. To handle 2x order volume, need 2x staff. That's $36K+/year extra cost. But with automation? Same staff, 2x volume. Savings: $36K/year minimum."
    },
    {
      icon: DollarSign,
      title: "Financial Visibility is Impossible",
      problem: "You don't know true order profitability. Marketing spend: unclear ROI. Fulfillment costs: unclear per-order. Customer acquisition cost: guesswork. Margins: estimated, not calculated.",
      impact: "Budget allocation is blind. Can't optimize marketing spend. Pricing decisions based on hope, not data. Money leaking everywhere.",
      cost: "If you're losing 20% of margin due to poor visibility, that's serious. $100K/month revenue × 20% = $20K/month lost profit. Per year: $240K in lost profit from bad decisions."
    }
  ];

  // Solutions
  const solutions = [
    {
      icon: ShoppingCart,
      title: "Order Automation",
      tagline: "From Click to Ship in 2 Minutes",
      description: "Auto-receive orders from Shopify, WooCommerce, Amazon. Auto-verify payment. Auto-create fulfillment orders. Auto-send confirmation email. Done before customer refreshes page.",
      results: [
        "90% faster order processing (2 min vs 15 min)",
        "98% accuracy (vs 92% manual)",
        "$40K-60K/year time savings"
      ]
    },
    {
      icon: Package,
      title: "Inventory Sync",
      tagline: "One Inventory. All Channels. Real-Time.",
      description: "Real-time sync between Shopify, WooCommerce, Amazon. Prevent overselling. Auto-fulfill from right warehouse. Auto-adjust stock levels. Dashboard showing all channels at once.",
      results: [
        "Zero oversells (was 2-3%)",
        "40% reduction in returns/chargebacks",
        "$50K-100K/year prevented losses"
      ]
    },
    {
      icon: Mail,
      title: "Customer Notifications",
      tagline: "Keep Customers Updated Automatically",
      description: "Auto-send order confirmation (within 2 min). Auto-send payment confirmation. Auto-send shipping notification with tracking. Auto-send delivery confirmation. Auto-send follow-up (review request, upsell).",
      results: [
        "45% reduction in 'Where's my order?' emails",
        "60% of CS time saved on order status inquiries",
        "25% increase in repeat purchases (better experience)"
      ]
    },
    {
      icon: Truck,
      title: "Fulfillment Optimization",
      tagline: "Fulfillment Center Runs Itself",
      description: "Auto-prioritize orders by fulfillment location. Auto-generate picking lists. Auto-create shipping labels. Auto-notify fulfillment team. Auto-track fulfillment progress.",
      results: [
        "50% faster fulfillment (3 hours → 1.5 hours)",
        "Scale 2x volume without hiring",
        "$36K-60K/year labor cost savings"
      ]
    },
    {
      icon: RotateCcw,
      title: "Returns Automation",
      tagline: "Returns Shouldn't Be a Headache",
      description: "Auto-approve/reject returns based on rules. Auto-generate return shipping labels. Auto-track return in transit. Auto-process refund when received. Auto-update inventory. Auto-analyze return patterns.",
      results: [
        "Returns processed in 2 days (was 7-14 days)",
        "70% reduction in return-related CS emails",
        "Return data shows improvement opportunities"
      ]
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      tagline: "See Your Real Numbers",
      description: "Real-time dashboard of all metrics. Daily/weekly automated reports. ROI by marketing channel. Profitability by product/category. Customer acquisition cost tracking. Fulfillment cost per order.",
      results: [
        "100% visibility into e-commerce metrics",
        "Data-driven pricing/budget decisions",
        "$50K-200K/year from optimization insights"
      ]
    }
  ];

  // Success Stories
  const successStories = [
    {
      company: "StyleHub",
      type: "Fashion E-Commerce",
      revenue: "$3M/year",
      challenge: "200+ orders/day processed manually. 3 different warehouses, inventory chaos. Customers getting angry at slow shipping/poor communication.",
      results: [
        "Order processing: 40 min → 2 min (-95%)",
        "Manual work: 40 hrs/week → 5 hrs/week (-88%)",
        "Inventory accuracy: 78% → 99.5% (+27%)",
        "Oversells: 8/week → 0/week (-100%)",
        "Customer satisfaction: 3.4 → 4.8 (+41%)",
        "Repeat rate: 22% → 38% (+73%)"
      ],
      quote: "I went from being operations manager to CEO. The automation freed me to focus on growth - marketing, partnerships, product. Revenue grew 40% with NO additional FTE cost."
    },
    {
      company: "RetailPro",
      type: "Multi-Channel E-Commerce",
      revenue: "$8M/year",
      challenge: "500+ orders/day across 3 channels. Overselling: 20+ orders/day. Chargebacks: $5-8K/month. Manual inventory updates: 4 hours/day.",
      results: [
        "Oversell rate: 2.8% → 0.02% (-99%)",
        "Monthly chargebacks: $7,000 → $50 (-99%)",
        "Inventory accuracy: 82% → 99.8% (+22%)",
        "Fulfillment time: 3 days → 1.2 days (-60%)",
        "Manual work: 30 hrs/week → 2 hrs/week (-93%)",
        "Annual revenue: $8M → $9.2M (+15%)"
      ],
      quote: "The chargebacks alone were killing us. $84K/year in preventable losses. With automation, that's now less than $1K/year. Plus we process 60% more orders with the same team."
    },
    {
      company: "TrendDrops",
      type: "Dropshipping Startup",
      revenue: "Growing",
      challenge: "200+ orders/day. 20 minutes per order to process manually. Needed to hire 2 more people.",
      results: [
        "Manual time per order: 20 min → 1 min (-95%)",
        "Orders processed: 200 → 1,000 (+400%, same team!)",
        "Team size: 5 → 3 (-40%)",
        "Salary saved: $120K/year (no hiring)",
        "Processing errors: 15% → 1% (-93%)",
        "Monthly revenue: $80K → $280K (+250%)"
      ],
      quote: "Automation allowed us to scale 4x without adding headcount. I was ready to hire 2 people. Instead, I automated everything. It's like having 20 virtual employees."
    }
  ];

  // Pricing
  const pricingTiers = [
    {
      name: "Startup",
      setup: "Contact Us",
      monthly: "Contact Us",
      ideal: "Early-stage e-commerce (< $500K/year, <100 orders/day)",
      features: [
        "Order automation (single channel)",
        "Basic inventory sync",
        "Customer notifications (emails)",
        "Payment verification",
        "Basic fulfillment routing",
        "5-10 custom workflows",
        "Weekly support calls",
        "30 days training"
      ],
      roi: "200-300% Year 1",
      popular: false
    },
    {
      name: "Growth",
      setup: "Contact Us",
      monthly: "Contact Us",
      ideal: "Growing e-commerce ($500K-$5M/year, 100-1,000 orders/day)",
      features: [
        "Multi-channel order automation",
        "Real-time inventory sync",
        "Advanced notifications (email + SMS)",
        "Fulfillment optimization (multi-warehouse)",
        "Returns automation (partial)",
        "Basic analytics & reporting",
        "20-30 custom workflows",
        "Bi-weekly support calls",
        "60 days training",
        "Quarterly optimization reviews"
      ],
      roi: "400-500% Year 1",
      popular: true
    },
    {
      name: "Scale",
      setup: "Contact Us",
      monthly: "Contact Us",
      ideal: "Established e-commerce ($5M+/year, 1,000+ orders/day)",
      features: [
        "Unlimited channel support",
        "Advanced inventory (multi-warehouse, suppliers)",
        "Full customer journey automation",
        "Intelligent fulfillment routing",
        "Full returns automation",
        "Advanced analytics & reporting",
        "Predictive inventory (AI)",
        "50+ custom workflows",
        "Weekly strategy calls",
        "Dedicated success manager",
        "Priority support (4-hour response)",
        "Monthly optimization reviews"
      ],
      roi: "500-700% Year 1",
      popular: false
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How long until we see results?",
      answer: "Most e-commerce clients see measurable results in 2-3 weeks: Week 1-2: Time savings obvious (order processing faster). Week 3-4: Error rate drops (fewer customer issues). Month 2: Financial impact clear (less chargebacks, smoother operations). Month 3-4: Full ROI realized (all systems optimized). Average payback period: 2-3 months."
    },
    {
      question: "We use Shopify + custom systems. Can you automate that?",
      answer: "Yes. We handle: ✅ Shopify (native integration), ✅ Custom fulfillment systems (via API), ✅ Legacy inventory systems (via data import), ✅ Multiple payment processors, ✅ Custom databases and spreadsheets. If it has an API, webhook, or CSV export → We can connect it."
    },
    {
      question: "Does this handle international/multi-currency orders?",
      answer: "Yes. Features include: ✅ Multi-currency pricing and conversion, ✅ Regional tax calculation (US states, EU VAT, UK VAT, etc.), ✅ Shipping routing by country, ✅ Customs documentation (for international), ✅ Local payment methods per region, ✅ Multi-language customer notifications. We handle complex international e-commerce."
    },
    {
      question: "What happens if automation breaks?",
      answer: "We monitor 24/7 and: ✅ Detect issues within 1 hour (automated alerts), ✅ Fix most issues automatically (failovers), ✅ Notify you if manual action needed, ✅ Have backup processes for critical workflows, ✅ Escalation if needed. 99.9% uptime SLA for Professional+ plans."
    },
    {
      question: "Can automation handle Black Friday / Cyber Monday spikes?",
      answer: "Absolutely. Built for peak volume: ✅ Tested up to 50,000 orders/day, ✅ Auto-scales with order volume, ✅ No manual intervention needed, ✅ Batch processing optimized, ✅ We monitor 24/7 during peak events. We've handled $10M+ in daily volume during peak seasons."
    },
    {
      question: "What about data privacy and compliance (GDPR, CCPA)?",
      answer: "We're serious about compliance: ✅ SOC 2 Type II certified, ✅ GDPR compliant, ✅ CCPA compliant, ✅ PCI DSS compliance (for payment data), ✅ Data encryption (in transit & at rest), ✅ Automatic data retention policies. Your customer data is handled securely. We don't access it unless necessary."
    },
    {
      question: "What's the typical ROI timeline?",
      answer: "E-commerce ROI breakdown: Month 1: 150-200% ROI (time savings alone). Month 3: 300-400% ROI (+ error reduction + repeat customers). Year 1: 400-500% ROI (full optimization + growth). Translation: $2,500/month investment → $10-12K/month in value."
    }
  ];

  // Calculate manual cost
  const calculateCost = () => {
    const manualTimePerOrder = 15; // minutes
    const manualHoursPerDay = (orderVolume * manualTimePerOrder) / 60;
    const manualCostPerDay = manualHoursPerDay * 20; // $20/hour
    const errorRate = 0.08;
    const avgOrderValue = 100;
    const errorCostPerDay = orderVolume * errorRate * avgOrderValue * 0.1; // 10% of order value
    
    const automatedTime = orderVolume * 0.5 / 60; // 0.5 min per order
    const automatedCost = automatedTime * 20;
    
    const dailySavings = (manualCostPerDay + errorCostPerDay) - automatedCost;
    const annualSavings = dailySavings * 365;
    
    return {
      manualCostPerDay: Math.round(manualCostPerDay + errorCostPerDay),
      automatedCost: Math.round(automatedCost),
      dailySavings: Math.round(dailySavings),
      annualSavings: Math.round(annualSavings)
    };
  };

  const costs = calculateCost();

  return (
    <>
      <SEO
        title="E-Commerce Automation - Order, Inventory, Fulfillment | D2 Group"
        description="Automate order processing, inventory sync, customer notifications, and fulfillment. Scale to 10x order volume without hiring. Free audit for e-commerce. Save $10-30K/month."
        keywords="ecommerce automation, shopify automation, order fulfillment automation, inventory sync, abandoned cart recovery, multi-channel selling"
        canonicalUrl="/solutions/ecommerce-brands"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                ✅ 200+ E-commerce Workflows Deployed • 97% Customer Satisfaction
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                E-Commerce Automation That <span className="text-primary">Scales With Your Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Automate order processing, inventory sync, customer notifications, and fulfillment. Scale to 10x 
                order volume without hiring. Free audit to show your e-commerce ROI.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mb-8">
                <Button size="lg" asChild className="shadow-glow">
                  <Link to="/contact">
                    Get Free E-Commerce Audit
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#solutions">See How It Works</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto text-sm">
                {[
                  { icon: ShoppingCart, text: "200+ workflows automated" },
                  { icon: Clock, text: "15 min → 2 min processing" },
                  { icon: Users, text: "40+ hours/week saved" },
                  { icon: Target, text: "98% accuracy rate" },
                  { icon: Star, text: "5,000 orders/day capacity" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center justify-center gap-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <IconComponent className="h-4 w-4 text-primary" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Calculator */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🎯 Quick Math: The <span className="text-primary">True Cost</span> of Manual E-Commerce
              </h2>
            </div>

            <Card className="p-8">
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-4">
                  How many orders do you process daily? {orderVolume}
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={orderVolume}
                  onChange={(e) => setOrderVolume(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-destructive/10 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-destructive">❌ Manual Processing</h3>
                  <div className="space-y-2 text-sm">
                    <p>• 15 min per order = {Math.round((orderVolume * 15) / 60)} hours/day</p>
                    <p>• Labor cost = ${costs.manualCostPerDay}/day</p>
                    <p>• Error rate (8%) costs extra</p>
                    <p>• Manual inventory updates</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-destructive">
                    <p className="text-2xl font-bold text-destructive">${costs.manualCostPerDay}/day</p>
                    <p className="text-xs">Annual: ${costs.manualCostPerDay * 365}/year</p>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-primary">✅ With Automation</h3>
                  <div className="space-y-2 text-sm">
                    <p>• 0.5 min per order (automated)</p>
                    <p>• 10 min/day (monitoring only)</p>
                    <p>• 0.2% error rate</p>
                    <p>• Real-time inventory sync</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-primary">
                    <p className="text-2xl font-bold text-primary">${costs.automatedCost}/day</p>
                    <p className="text-xs">Annual: ${costs.automatedCost * 365}/year</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <p className="text-lg mb-2">💹 <strong>Daily Savings:</strong> <span className="text-2xl font-bold text-primary">${costs.dailySavings}</span></p>
                <p className="text-2xl font-bold text-primary">💹 Annual Savings: ${costs.annualSavings.toLocaleString()}/year</p>
                <p className="text-sm text-muted-foreground mt-4">That's not a nice-to-have. That's your profit margin.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                E-Commerce Challenges That <span className="text-primary">Keep You Awake at Night</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.slice(0, 3).map((pain, index) => {
                const IconComponent = pain.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-destructive mb-4" />
                    <h3 className="text-lg font-bold mb-3">{pain.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-destructive mb-1">Problem:</p>
                        <p className="text-sm text-muted-foreground">{pain.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1">Impact:</p>
                        <p className="text-sm text-muted-foreground">{pain.impact}</p>
                      </div>
                      <div className="bg-destructive/10 p-3 rounded-md">
                        <p className="text-xs font-semibold text-destructive">Cost: {pain.cost}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <p className="text-xl font-semibold text-primary mb-4">
                These aren't small problems. They're systemic inefficiencies costing you hundreds of thousands in lost revenue, wasted time, and customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                What if everything worked together automatically?
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Automated <span className="text-primary">E-Commerce Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground">Pick your starting point - or automate everything</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-sm font-semibold text-primary mb-3">{solution.tagline}</p>
                    <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                    <div className="bg-primary/10 p-3 rounded-md">
                      <p className="text-xs font-semibold mb-2">Key Results:</p>
                      <ul className="space-y-1">
                        {solution.results.map((result, idx) => (
                          <li key={idx} className="text-xs flex items-start">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                E-Commerce <span className="text-primary">Success Stories</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{story.company}</h3>
                    <p className="text-sm text-muted-foreground">{story.type} • {story.revenue}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold mb-1">Challenge:</p>
                      <p className="text-sm text-muted-foreground">{story.challenge}</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold mb-2">Results:</p>
                      <ul className="space-y-1">
                        {story.results.map((result, idx) => (
                          <li key={idx} className="text-xs flex items-start">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary pl-3 mt-4">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">E-Commerce Pricing</span> - Transparent, No Surprises
              </h2>
              <p className="text-lg text-muted-foreground">
                All plans include: Unlimited users, unlimited automations, onboarding, optimization, and dedicated automation manager.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`p-8 hover:shadow-xl transition-all ${tier.popular ? 'border-primary border-2' : ''}`}>
                  {tier.popular && (
                    <Badge className="mb-4 bg-primary">⭐ Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.ideal}</p>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground">Setup</p>
                    <p className="text-3xl font-bold text-primary mb-2">{tier.setup}</p>
                    <p className="text-sm text-muted-foreground">Monthly</p>
                    <p className="text-2xl font-semibold mb-3">{tier.monthly}</p>
                    <p className="text-xs font-semibold text-primary">{tier.roi}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">
                      {tier.name === "Scale" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">🛡️ 30-Day Money-Back Guarantee</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                If after 30 days you're not seeing value, we refund your setup fee in full. You only pay for service 
                used (prorated). No questions asked, no hassle. We stand behind our work.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                E-Commerce Automation <span className="text-primary">Questions</span> (Answered)
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">
              Stop Letting Manual Processes Cost You Thousands Every Month
            </h2>
            <p className="text-xl mb-8">
              Every day your operations run manually: ✗ Customers wait for confirmations (losing patience, loyalty) ✗ Your team wastes hours on data entry (burning out) ✗ Mistakes slip through (chargebacks, angry customers, lost repeat sales) ✗ You miss scaling opportunities (can't handle more volume)
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
              <p className="text-lg font-semibold mb-4">Within 4 weeks, imagine:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {[
                  "Orders process automatically (2 min, zero manual work)",
                  "Inventory syncs in real-time (zero oversells)",
                  "Customers get updates automatically (better experience)",
                  "Fulfillment runs smoothly (faster delivery)",
                  "Your team focuses on growth (not operations)",
                  "$10-30K/month in measurable value"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                <Link to="/contact">
                  Get Free E-Commerce Audit
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30" asChild>
                <Link to="/contact">
                  Schedule Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="text-sm">
              Try for 30 days risk-free with our money-back guarantee. If you don't see improvement, get 100% refund. 
              No questions asked.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
