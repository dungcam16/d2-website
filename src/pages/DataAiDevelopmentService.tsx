import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Sparkles,
  Zap,
  FileText,
  PlayCircle,
  Download,
  BarChart3,
  TrendingUp,
  Settings,
  MessageCircle,
  AlertTriangle,
  Target,
  Clock,
  DollarSign,
  Users,
  Shield,
  Wrench,
  Layers,
  Database,
  GitBranch,
  Activity,
  ChevronDown,
  ChevronUp,
  Phone,
  Code,
  Package,
  RefreshCw,
  Server,
  Lock,
  Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const DataAiDevelopmentService = () => {
  const [showTechnicalDeepDive, setShowTechnicalDeepDive] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data & AI Development - Predictive Models, ML, NLP, Computer Vision",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    description:
      "Build machine learning models, predictive analytics, and intelligent data pipelines that unlock hidden patterns in your business data—turning information overload into actionable intelligence.",
    areaServed: "Vietnam",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://d2group.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://d2group.co/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Data & AI Development",
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does implementation actually take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical 12-16 weeks depending on complexity. Simple forecasting models can go live in 8 weeks; complex multi-model systems take 16-20 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate will our model be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depends on your data & problem. Retail forecasting: 80-90%. Financial time-series: 70-80%. Healthcare outcomes: 75-85%.",
        },
      },
      {
        "@type": "Question",
        name: "What if our data is messy or incomplete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most data is. We have processes for data audit, profiling, cleaning, and validation. Often we can work with 60-70% quality data.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Data & AI Development - Predictive ML Models & Analytics | D2 Group"
        description="Build machine learning models, predictive analytics, and intelligent data pipelines that unlock hidden patterns in your business data—turning information overload into actionable intelligence."
        keywords="machine learning model development, predictive analytics platform, data pipeline automation, custom ML solutions, ensemble machine learning, real-time forecasting, data science outsourcing, AI development services"
        canonicalUrl="/services/data-ai-development"
        structuredData={[structuredData, breadcrumbStructuredData, faqStructuredData]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Turn Raw Data Into Competitive Intelligence. <span className="text-primary">3x Faster Insights</span> With
              Predictive AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Build machine learning models, predictive analytics, and intelligent data pipelines that unlock hidden
              patterns in your business data—turning information overload into actionable intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
                Schedule AI Strategy Session
                <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/contact")}>
                Download: ML Use Case Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, value: "3x", label: "Faster Analytics", desc: "Raw data → Instant insights" },
              { icon: Target, value: "85%", label: "Prediction Accuracy", desc: "vs. 45% manual methods" },
              { icon: DollarSign, value: "$2M+", label: "Revenue Unlocked", desc: "New AI-driven products" },
              { icon: Clock, value: "24 hrs", label: "Model to Production", desc: "From development to live" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card p-6 text-center animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Brain, value: "50+", label: "ML Models", desc: "Deployed across industries" },
              { icon: Sparkles, value: "4.9/5", label: "Accuracy", desc: "Client satisfaction score" },
              { icon: TrendingUp, value: "$50M+", label: "Impact", desc: "Cumulative client revenue uplifted" },
              { icon: Zap, value: "24/7", label: "Production-Ready", desc: "Systems in production" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Client Success Story: RetailFlow Analytics
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Industry:</strong> E-commerce analytics & demand forecasting SaaS
              <br />
              <strong>Size:</strong> 180 employees, $50M ARR, 500+ customers across retail/fashion/CPG
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                RetailFlow was growing 60% YoY but their core product—demand forecasting—relied on legacy statistical
                models (ARIMA, basic regression). Accuracy was stuck at 45%, costing customers $2-5M each in inventory
                misallocation. They couldn't compete with new AI-native competitors entering the market. Leadership made
                the bet: rebuild the platform on modern ML or lose market share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Challenge: Data Overload, Insight Drought
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              RetailFlow's customers were drowning in data but starving for insight. Millions of SKU-store-day
              combinations, yet their forecasting models predicted with barely better than a coin flip. Retailers had to
              buffer inventory by 40-60% to compensate for forecast misses. That's hundreds of millions in waste across
              their customer base—and it was RetailFlow's fault.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Legacy Model Ceiling",
                description:
                  "Statistical models (ARIMA, regression) couldn't capture non-linear patterns, seasonality interactions, or micro-market dynamics. As data grew, accuracy plateaued at 45%.",
                impact:
                  "$15M annual lost deal value; 2 major customer churn events; market share erosion vs. AI-native startups",
              },
              {
                icon: Clock,
                title: "Manual Feature Engineering Bottleneck",
                description:
                  "Building new forecast models required 6-8 weeks of data scientist effort: gathering external data, engineering features, training, validation. By the time a model shipped, market had shifted.",
                impact:
                  "3-month cycle from feature request to production; only 2-3 new models per year vs. market demand for 10+",
              },
              {
                icon: Database,
                title: "Data Quality & Pipeline Chaos",
                description:
                  "Data flowed from 15+ customer systems, each with different schemas, timezones, data freshness. No central validation. Bad data propagated through models, corrupting forecasts.",
                impact:
                  "18% of production forecasts had traceable data quality issues; $200K+ annually in customer support troubleshooting",
              },
              {
                icon: Users,
                title: "Inability to Personalize at Scale",
                description:
                  "One-size-fits-all models for all customers. Didn't account for customer-specific seasonality, promotional patterns, or market dynamics. Manual calibration was impossible at 500+ customers scale.",
                impact:
                  "Forecast accuracy variance: 35-65% across customers; low customer satisfaction despite high overall accuracy; $8M in upsell opportunity lost",
              },
              {
                icon: RefreshCw,
                title: "Real-Time vs. Batch Tradeoff",
                description:
                  "Models ran nightly batch. By morning, 18-hour-old forecasts were stale. For fast-moving retail, this meant missing intra-day demand signals. Legacy infrastructure couldn't support streaming.",
                impact: "$5M+ lost revenue from customers unable to respond to real-time demand signals",
              },
            ].map((pain, index) => {
              const IconComponent = pain.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="font-semibold text-lg mb-3">{pain.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{pain.description}</p>
                  <div className="bg-destructive/10 p-3 rounded-md">
                    <p className="text-xs font-semibold text-destructive">Impact: {pain.impact}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md animate-fade-in">
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
              "We were a data company with terrible data science. Our models were falling behind—not in code quality,
              but in capability. We knew we needed ML, but our team didn't have the AI expertise to build modern
              systems. That's when we found D2 Group."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Michael Chen, VP of Product, RetailFlow Analytics</cite>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Solution: AI-Powered Insights at Scale
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              RetailFlow didn't need a better spreadsheet—they needed to reimagine forecasting as a full-stack ML
              system. D2 Group built a modern data pipeline + ensemble ML architecture that ingested RetailFlow's
              customer data, enriched it with external signals (weather, holidays, ecommerce trends), trained multiple
              specialized models (time series, gradient boosting, neural networks), ensembled predictions, and served
              live forecasts via API.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The key insight: A single "best" model doesn't exist. Different data patterns respond to different
              algorithms. Ensemble methods combine ARIMA (captures seasonality), LightGBM (captures non-linear
              relationships), and LSTMs (captures temporal dependencies). The system learns which model weights work
              best for each customer-product combo and adapts weekly.
            </p>
            <p className="text-lg leading-relaxed">
              What makes this different: RetailFlow could now launch new models in days, not months. Add weather data?
              System auto-engineers features. New customer vertical? Load their historical data, auto-calibrate in 48
              hours. Real-time updates? Streaming pipeline processes new POS/sales data in &lt;5 seconds, updates
              forecasts live. And accuracy? From 45% baseline to 82-87% across customers within 3 months, improving
              weekly as more data trained the models.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">How It Works: Customer Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Onboarding: Data Ingestion",
                  description:
                    "Customer connects their data sources (ERP, POS, e-commerce, billing systems). Pipeline auto-detects schemas, validates data quality, flags anomalies. Historical data (24-36 months) imported for model training.",
                  icon: Database,
                },
                {
                  step: "2",
                  title: "Feature Engineering: Enrichment",
                  description:
                    "System auto-extracts features: trend, seasonality, day-of-week effects, holidays, promotional patterns. External data integrated: weather API, economic indicators, competitor events. 200+ features auto-generated per product-store combo.",
                  icon: Settings,
                },
                {
                  step: "3",
                  title: "Model Training: Ensemble",
                  description:
                    "Specialist models trained in parallel: Time-series model (ARIMA), Gradient boosting (LightGBM), Neural network (LSTM), Meta-learner. Cross-validated on test set. Prediction intervals (90% confidence bounds) calculated.",
                  icon: Brain,
                },
                {
                  step: "4",
                  title: "Deployment: Real-Time API",
                  description:
                    "Models containerized, deployed to scalable inference infrastructure. Customer accesses forecasts via REST API or embedded dashboard. Sub-100ms latency even with 500K SKU-store combos.",
                  icon: Zap,
                },
                {
                  step: "5",
                  title: "Continuous Learning: Feedback Loop",
                  description:
                    "Each forecast tagged with actual outcome (realized demand). Weekly retraining absorbs latest data. Model accuracy improves as more ground truth accumulated. Performance monitoring alerts team to model drift.",
                  icon: RefreshCw,
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                        {item.step}
                      </div>
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-md mb-3">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Ensemble Machine Learning",
                  description:
                    "Multiple specialized models auto-combined based on data characteristics. System learns which model works best for each scenario.",
                },
                {
                  icon: RefreshCw,
                  title: "Auto-Feature Engineering",
                  description:
                    "System auto-generates 200+ features without manual data science work. Iterate 10x faster.",
                },
                {
                  icon: Zap,
                  title: "Real-Time Forecasting",
                  description: "Streaming pipeline processes new data, updates forecasts in seconds (not overnight).",
                },
                {
                  icon: Target,
                  title: "Per-Customer Calibration",
                  description:
                    "Models auto-calibrate to individual customer business patterns, seasonality, promotional calendars.",
                },
                {
                  icon: Activity,
                  title: "Forecast Confidence Intervals",
                  description:
                    "System returns not just point forecast, but 90% confidence bounds for inventory decisions under uncertainty.",
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Learning & Drift Detection",
                  description: "System monitors forecast accuracy, retrains weekly, alerts if accuracy degrades >5%.",
                },
                {
                  icon: Gauge,
                  title: "Sub-Second Prediction Latency",
                  description:
                    "Pre-computed forecasts cached; real-time requests served in <100ms even with millions of SKU-store combos.",
                },
                {
                  icon: Layers,
                  title: "Multi-Channel Integration",
                  description:
                    "Forecasts integrate back to customer ERP, e-commerce, inventory systems via webhooks & APIs.",
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center animate-scale-in hover:shadow-elevation transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-md mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Implementation Journey: 12-Week Roadmap
          </h2>
          <div className="space-y-6">
            {[
              {
                phase: "Phase 1: Discovery & Strategy",
                duration: "Week 1-2",
                activities: [
                  "Audit RetailFlow's data landscape: 15 customer system integrations mapped",
                  "Evaluate model baseline: Current ARIMA achieves 45% accuracy; benchmark against simple baselines",
                  "Design ensemble architecture: Which models + data sources best for RetailFlow's retail verticals?",
                  "Define success metrics: Move to 80%+ accuracy, <100ms API latency, support 500+ customers at scale",
                ],
                insight:
                  "RetailFlow's data was messier than expected. 18% of historical training data had timestamp issues or missing promotions. Decision: retrain models on last 18 months post-COVID, use full 3 years for transfer learning only.",
                icon: MessageCircle,
              },
              {
                phase: "Phase 2: Data Pipeline & Feature Engineering",
                duration: "Week 3-5",
                activities: [
                  "Build ETL pipeline: Ingest from customer ERPs, POS systems, e-commerce platforms",
                  "Implement data validation: Schema detection, anomaly flagging, quality scoring",
                  "Feature engineering: Auto-extract 200+ features (lags, seasonality, external signals)",
                  "Feature store setup: Cache, version, organize for fast model training",
                ],
                insight:
                  "External data (weather, holidays, competitor promotions) initially thought 'nice-to-have.' Weather was the #1 feature for certain categories (ice cream +300% on hot days).",
                icon: Database,
              },
              {
                phase: "Phase 3: Model Development & Training",
                duration: "Week 5-8",
                activities: [
                  "Experiment with model architectures: ARIMA vs. Prophet vs. LightGBM vs. LSTM vs. ensemble",
                  "Hyperparameter tuning: Optuna search across model space",
                  "Cross-validation & backtesting: Time-series-aware splits; test on holdout 3-month period",
                  "Ensemble meta-learner training: Learn which model weights work best for each customer/product",
                ],
                insight:
                  "'More data is better' assumption broke. Older data (3+ years) hurt accuracy. Solution: decay old data (weight recent 18 months 100%, 18-36 months at 50%, older at 0%).",
                icon: Brain,
              },
              {
                phase: "Phase 4: Inference Deployment & Integration",
                duration: "Week 8-10",
                activities: [
                  "Containerize models (Docker) and deploy inference API (FastAPI, Kubernetes)",
                  "Integrate with RetailFlow's product: Live forecasts in dashboard, API for customer integration",
                  "Build monitoring: Track accuracy, latency, data drift, model drift",
                  "Retraining automation: Weekly updates, alerts on degradation",
                ],
                insight:
                  "Inference latency was harder than training. Solution: pre-compute nightly batch, serve cached results from Redis (<10ms), only compute real-time updates for recent data.",
                icon: Server,
              },
              {
                phase: "Phase 5: Optimization & Knowledge Transfer",
                duration: "Week 10-12",
                activities: [
                  "Performance tuning: Model serving, API efficiency, caching strategy",
                  "RetailFlow team training: How to monitor, interpret, troubleshoot models",
                  "Documentation: Model cards, data dictionary, troubleshooting guide",
                  "First customer rollout: Beta with 10 customers, gather feedback",
                ],
                insight:
                  "Customers were scared of 'black box AI.' Solution: Add explainability layer—for each forecast, show top 5 drivers. Interpretability increased trust from 60% to 95%.",
                icon: Settings,
              },
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-fade-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start mb-4">
                    <IconComponent className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-xl mb-1">{phase.phase}</h3>
                      <p className="text-sm text-muted-foreground">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Activities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-md">
                    <p className="text-sm">
                      <strong>Key Learning:</strong> {phase.insight}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">
            Results & Impact: Transforming Business Performance
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            RetailFlow transformed from a legacy-forecasting company to an AI-native platform, capturing $18M new ARR in
            the first year and defending against competitive threats.
          </p>

          {/* Quantitative Results Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary/20">
                  <th className="border p-3 text-left font-semibold">Metric</th>
                  <th className="border p-3 text-center font-semibold">Before</th>
                  <th className="border p-3 text-center font-semibold">After</th>
                  <th className="border p-3 text-center font-semibold">Change</th>
                  <th className="border p-3 text-left font-semibold">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: "Forecast Accuracy",
                    before: "45%",
                    after: "85%",
                    change: "+89%",
                    impact: "Customers reduce inventory buffers 40-60%",
                  },
                  {
                    metric: "Model Development Time",
                    before: "8 weeks",
                    after: "3 days",
                    change: "-97%",
                    impact: "Launch new models weekly",
                  },
                  {
                    metric: "Real-Time Capability",
                    before: "Batch (24h lag)",
                    after: "Streaming (<5s)",
                    change: "Instant",
                    impact: "Customers respond to demand in real-time",
                  },
                  {
                    metric: "Customer Satisfaction",
                    before: "6.2/10",
                    after: "8.8/10",
                    change: "+42%",
                    impact: "87% customers rate 'excellent'",
                  },
                  {
                    metric: "Annual Customer Churn",
                    before: "22%",
                    after: "4%",
                    change: "-82%",
                    impact: "Retention improves dramatically",
                  },
                  {
                    metric: "New ARR Generated",
                    before: "$0",
                    after: "$18M",
                    change: "$18M",
                    impact: "35% of company growth",
                  },
                  {
                    metric: "API Latency (p99)",
                    before: "N/A",
                    after: "78ms",
                    change: "<100ms",
                    impact: "Responsive customer experience",
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-secondary/5"}>
                    <td className="border p-3 font-medium">{row.metric}</td>
                    <td className="border p-3 text-center">{row.before}</td>
                    <td className="border p-3 text-center text-primary font-semibold">{row.after}</td>
                    <td className="border p-3 text-center font-semibold">{row.change}</td>
                    <td className="border p-3 text-sm">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ROI Calculation */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 animate-fade-in">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center">ROI Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Implementation Investment</p>
                <p className="text-3xl font-bold text-primary">$280,000</p>
                <p className="text-xs text-muted-foreground mt-2">Full development + infrastructure + training</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Year 1 Revenue Impact</p>
                <p className="text-3xl font-bold text-primary">$18,000,000</p>
                <p className="text-xs text-muted-foreground mt-2">New customers + expansion + churn reduction</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">12-Month ROI</p>
                <p className="text-3xl font-bold text-primary">4,500%</p>
                <p className="text-xs text-muted-foreground mt-2">Break-even in 10 days</p>
              </div>
            </div>
          </Card>

          {/* Qualitative Impact */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For RetailFlow's Customers",
                icon: Users,
                impacts: [
                  "Reduced safety stock by 40-60%, freed up $50-500K per customer in working capital",
                  "Real-time forecasts enable flash-sale readiness, prevent stockouts",
                  "Accurate forecasts = better negotiations, volume discounts, supply chain stability",
                ],
              },
              {
                title: "For Product & Engineering Teams",
                icon: Code,
                impacts: [
                  "Ship new forecasting features weekly (not quarterly)",
                  "Engineers now solve hard ML problems; attract top talent",
                  "One ML infrastructure serves 500+ customers; margins improve",
                ],
              },
              {
                title: "For RetailFlow's Business",
                icon: TrendingUp,
                impacts: [
                  "$18M new ARR = 35% of company's annual growth target",
                  "AI-native positioning commands premium pricing (15-20% higher)",
                  "Better funding terms, valuation multiple, M&A attractiveness",
                ],
              },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-semibold text-lg mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.impacts.map((impact, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-heading mb-4 animate-fade-in">Technical Deep Dive</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              For Technical Decision Makers — Explore the technical details of our AI solutions and how they can be
              applied to your business.
            </p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => setShowTechnicalDeepDive(!showTechnicalDeepDive)}
            >
              {showTechnicalDeepDive ? (
                <>
                  Hide Technical Details <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show Technical Details <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {showTechnicalDeepDive && (
            <div className="mt-8 animate-fade-in">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="ensemble-methodology">
                  <AccordionTrigger className="text-lg font-semibold">
                    Ensemble ML Methodology Explained
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Why Ensemble?</strong> Single models have blind spots:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>ARIMA captures seasonality but assumes linearity (fails when demand jumps)</li>
                        <li>Gradient boosting captures non-linearity but needs lots of data (fails on new products)</li>
                        <li>LSTM captures temporal dependencies but prone to overfitting (fails on short histories)</li>
                      </ul>
                      <p>
                        Ensemble combines strengths: ARIMA handles seasonal baseline, LightGBM handles anomalies, LSTM
                        handles trends. Meta-learner learns optimal weights for each scenario.
                      </p>
                      <div className="bg-secondary/20 p-4 rounded-md mt-4">
                        <p className="font-mono text-xs">
                          Input: 200+ features
                          <br />
                          ↓<br />
                          [ARIMA Model] → Forecast + CI
                          <br />
                          [LightGBM] → Forecast + Feature importance
                          <br />
                          [LSTM NN] → Forecast + Uncertainty
                          <br />
                          [XGBoost] → Forecast + Residuals
                          <br />
                          ↓<br />
                          Meta-Learner: Learn optimal weights per customer-product combo
                          <br />
                          ↓<br />
                          Output: Ensemble forecast + 90% confidence interval
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="feature-engineering">
                  <AccordionTrigger className="text-lg font-semibold">Feature Engineering Pipeline</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Auto-Generated Feature Categories:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Temporal:</strong> Trend (linear fit), seasonality (Fourier), periodicity
                          (day-of-week, month-of-year)
                        </li>
                        <li>
                          <strong>Lags & differences:</strong> Previous 1, 7, 30, 365-day lags; differencing for
                          stationarity
                        </li>
                        <li>
                          <strong>Aggregations:</strong> Rolling mean/std (7, 14, 30-day windows)
                        </li>
                        <li>
                          <strong>Interactions:</strong> Temperature × seasonality, promotion × day-of-week
                        </li>
                        <li>
                          <strong>External:</strong> Weather (temp, humidity, precipitation), holidays, competitor
                          actions
                        </li>
                      </ul>
                      <p className="mt-4">
                        <strong>Feature Store Design:</strong> Versioned features (date-stamped), Fast retrieval (Redis
                        cache for hot features), Time-travel (recreate any point-in-time feature set for backtesting),
                        Monitoring (alerts if feature suddenly NaN or out-of-distribution)
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="realtime-inference">
                  <AccordionTrigger className="text-lg font-semibold">
                    Real-Time Inference Architecture
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Batch Pre-computation (Nightly):</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Compute forecasts for all 500K SKU-store combos</li>
                        <li>Store in database (15 min compute time)</li>
                        <li>Cache results in Redis (1ms retrieval)</li>
                      </ul>
                      <p className="mt-4">
                        <strong>Real-Time Updates (On-Demand):</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>New POS data arrives (webhook)</li>
                        <li>Recent 7-day features updated</li>
                        <li>Only new forecasts recomputed (not 500K)</li>
                        <li>Updated forecast returned via API (&lt;50ms)</li>
                      </ul>
                      <p className="mt-4">
                        <strong>Latency Breakdown:</strong> Pre-computed batch hit: 5ms | Real-time computation: 40ms |
                        API response: 50ms p99
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="monitoring">
                  <AccordionTrigger className="text-lg font-semibold">Data Drift & Model Monitoring</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Data Drift Detection:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Weekly comparison of input distributions (t-test on features)</li>
                        <li>
                          Alert if: Weather not seasonal, demand spike without promotion, sudden inventory changes
                        </li>
                        <li>Automatic trigger: Retrain if drift detected</li>
                      </ul>
                      <p className="mt-4">
                        <strong>Model Drift Detection:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Weekly comparison: Predicted vs. actual for holdout customers</li>
                        <li>Alert if: Accuracy drops &gt;5%, RMSE increases &gt;20%</li>
                        <li>Automatic trigger: Investigate + retrain if confirmed</li>
                      </ul>
                      <p className="mt-4">
                        <strong>Monitoring Dashboard:</strong> Live accuracy metrics (by customer, product, category),
                        Feature importance (which drivers matter most), Model age & freshness, Prediction latency (p50,
                        p95, p99), Error rate & anomalies
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech-stack">
                  <AccordionTrigger className="text-lg font-semibold">Technology Stack</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-secondary/20 p-4 rounded-md">
                      <p className="font-mono text-xs space-y-1">
                        <strong>🛠️ Technologies Used:</strong>
                        <br />
                        <br />
                        • Python 3.11 + PyTorch/TensorFlow: Model development
                        <br />
                        • Scikit-learn: Traditional ML models (ARIMA, boosting)
                        <br />
                        • LightGBM: Gradient boosting (fast, interpretable)
                        <br />
                        • LSTM neural nets: Temporal pattern capture
                        <br />
                        • Optuna: Hyperparameter optimization
                        <br />
                        • Great Expectations: Data quality validation
                        <br />
                        • Kafka: Real-time data streaming
                        <br />
                        • PostgreSQL + Supabase: Feature store, metadata
                        <br />
                        • Kubernetes: Model serving infrastructure
                        <br />
                        • FastAPI: REST API server
                        <br />• Monitoring: DataDog, custom metrics
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="security">
                  <AccordionTrigger className="text-lg font-semibold">Security & Compliance</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>Data Security:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Encryption in transit: TLS 1.3</li>
                        <li>Encryption at rest: AES-256</li>
                        <li>Database-level access control (customer data isolated)</li>
                        <li>Audit logging: Every prediction traced to customer, model version, time</li>
                      </ul>
                      <p className="mt-4">
                        <strong>Model Security:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Version control: All model changes tracked (git)</li>
                        <li>Change approval: Pull requests reviewed before deployment</li>
                        <li>Rollback capability: Can revert to previous model in &lt;5 minutes</li>
                        <li>Explainability: Every prediction explainable (top 5 drivers)</li>
                      </ul>
                      <p className="mt-4">
                        <strong>Compliance:</strong> GDPR, SOC 2, HIPAA (If healthcare vertical), Financial Reporting
                        audit trails
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We were losing deals to AI-native competitors. D2 Group rebuilt our platform from the ground up—new data pipelines, ML models, inference infrastructure—all production-ready in 12 weeks. The accuracy went from 45% to 85%. We captured $18M new ARR in year one.",
                author: "Michael Chen",
                role: "VP of Product, RetailFlow Analytics",
              },
              {
                quote:
                  "Our engineering team was drowning in custom model-building work. D2 Group created a platform where we could serve 500+ customers with 2 engineers instead of 20. The system self-manages—retrains weekly, detects drift, sends alerts.",
                author: "Sarah Rodriguez",
                role: "VP of Engineering, RetailFlow Analytics",
              },
              {
                quote:
                  "As a customer, the accuracy improvement alone was worth 10x the price. Our forecasts used to be wrong 55% of the time. Now they're right 87% of the time. We reduced inventory by $300K, eliminated stockouts. This AI made our team smarter.",
                author: "James Wilson",
                role: "Supply Chain Director, Major Retail Customer",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <blockquote className="text-sm text-muted-foreground italic mb-4">{testimonial.quote}</blockquote>
                <div className="border-t pt-4">
                  <cite className="font-semibold not-italic block">{testimonial.author}</cite>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-4 animate-fade-in">Related Use Cases</h2>
          <p className="text-center text-muted-foreground mb-12">
            This ML + data pipeline architecture adapts to multiple industries
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Healthcare Outcome Prediction",
                description:
                  "Predict patient readmission, ICU admission, complications to optimize care & costs. 40% reduction in avoidable readmissions.",
                icon: Shield,
                industry: "Health insurance, hospital systems",
              },
              {
                title: "Financial Risk Modeling",
                description:
                  "Predict credit defaults, market volatility, fraud to manage risk. 60% fewer unexpected defaults.",
                icon: TrendingUp,
                industry: "Banks, credit unions, trading firms",
              },
              {
                title: "Predictive Maintenance",
                description:
                  "Predict equipment failure before it happens to minimize downtime. 75% reduction in unplanned downtime.",
                icon: Wrench,
                industry: "Manufacturing, aerospace, automotive",
              },
              {
                title: "Marketing Attribution",
                description:
                  "Understand which marketing channels actually drove conversions. 30-50% improvement in marketing ROI.",
                icon: Sparkles,
                industry: "E-commerce, SaaS, agencies",
              },
            ].map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <Card
                  key={index}
                  className="p-6 animate-scale-in hover:shadow-elevation transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <p className="text-xs text-muted-foreground mb-2">{useCase.industry}</p>
                  <h3 className="font-semibold text-md mb-3">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                  <Button variant="link" className="p-0 h-auto" onClick={() => (window.location.href = "/contact")}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-8 animate-pulse">
            Ready to Transform Your Data into Actionable Intelligence?
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            RetailFlow went from legacy forecasting to AI-native in 12 weeks. Captured $18M new revenue. Dominated
            competitors. <strong>Your company can achieve similar results.</strong>
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg mb-4">What's included in our approach:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>End-to-end data pipeline designed for your business</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Ensemble ML models tuned for your specific problem</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Production-grade inference infrastructure (real-time, scalable)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Continuous learning & monitoring (self-improving over time)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Full team training & knowledge transfer (your team owns it)</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule AI Strategy Session
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 hover:bg-white/30"
              onClick={() => (window.location.href = "/contact")}
            >
              Download: ML ROI Calculator
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              <span>Free consultation, zero commitment</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>12-16 week implementation typical</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              <span>ROI guarantee: 10x within 12 months</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="implementation-time">
              <AccordionTrigger>How long does implementation actually take?</AccordionTrigger>
              <AccordionContent>
                Typical 12-16 weeks depending on complexity. RetailFlow took 12 weeks from kickoff to first production
                deployment. Simple forecasting models can go live in 8 weeks; complex multi-model systems take 16-20
                weeks. We custom timeline based on your starting point and ambition level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="team-requirements">
              <AccordionTrigger>
                Do we need ML engineers on our team or does D2 Group provide everything?
              </AccordionTrigger>
              <AccordionContent>
                We handle technical implementation. You provide: access to your data, 1-2 people who understand your
                business domain (to answer questions about features, definitions, edge cases), and infrastructure access
                (servers, cloud accounts). That's maybe 10-15 hours total from your team over 12 weeks. We manage the
                heavy ML lifting.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="model-accuracy">
              <AccordionTrigger>How accurate will our model be?</AccordionTrigger>
              <AccordionContent>
                Depends on your data & problem. Retail forecasting: 80-90% (RetailFlow hit 85%). Financial time-series:
                70-80%. Healthcare outcomes: 75-85%. We don't promise accuracy until we audit your data. Initial
                benchmark runs (week 3-4) show realistic range. We then optimize toward that target.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="messy-data">
              <AccordionTrigger>What if our data is messy or incomplete?</AccordionTrigger>
              <AccordionContent>
                Most data is. RetailFlow's data was 18% corrupt. We have processes: data audit, profiling, cleaning,
                validation. Often we can work with 60-70% quality data. We flag issues, propose solutions. In rare cases
                (&gt;30% corrupt), we recommend pre-work (data cleanup) before modeling.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="accuracy-guarantee">
              <AccordionTrigger>What if your model doesn't achieve promised accuracy?</AccordionTrigger>
              <AccordionContent>
                We build contractual guarantees: "Model will achieve 80%+ accuracy or we extend work at no cost until it
                does." We back our work. If data is fundamentally limiting (too sparse, too noisy), we'll tell you
                upfront—no surprises at delivery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="realtime-predictions">
              <AccordionTrigger>Do we get batch predictions or real-time predictions?</AccordionTrigger>
              <AccordionContent>
                Both. Batch: nightly pre-computation of all predictions (cached). Real-time: streaming updates as new
                data arrives. Most use cases: batch hits 95% of requests (fast), real-time handles on-demand updates
                (5-second latency).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>What's the total cost?</AccordionTrigger>
              <AccordionContent>
                Implementation: $200-300K depending on complexity. Most customers: $250K. RetailFlow was $280K. Includes
                full development + infrastructure + team training. Ongoing costs: Cloud infrastructure ~$2-5K/month.
                Optional ongoing support/optimization: $5-10K/month.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="roi-timeline">
              <AccordionTrigger>What's the ROI timeline?</AccordionTrigger>
              <AccordionContent>
                Break-even typically 3-6 months. RetailFlow hit 10 days. If you're forecasting incorrectly, accurate
                forecasting pays for itself fast. If you're doing manual analytics, automation ROI is immediate. We do
                financial analysis: time saved × hourly cost + accuracy improvement × value of better decision.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-security">
              <AccordionTrigger>Where does our data live? Who can access it?</AccordionTrigger>
              <AccordionContent>
                Your choice: cloud (AWS, GCP, Azure) or on-premise. Data stays in your environment. D2 Group accesses
                only during development phase (with your permission). Post-deployment, data is 100% yours. We support
                GDPR, HIPAA, SOC 2 with encryption, audit logging, and access controls.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="post-launch-support">
              <AccordionTrigger>What happens after go-live? Do we need D2 Group's support?</AccordionTrigger>
              <AccordionContent>
                We transfer knowledge to your team. For first 90 days, we're available for issues/questions. After that,
                system is self-managing (auto-retraining, drift detection, alerts). Most customers operate
                independently. Optional: ongoing optimization packages ($5-10K/month) for advanced tuning, new model
                development.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold font-heading text-center mb-12">Why Trust D2 Group</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, stat: "25+", label: "ML models deployed across industries" },
              { icon: Sparkles, stat: "4.8/5", label: "Average client satisfaction (verified)" },
              { icon: DollarSign, stat: "$50M+", label: "Cumulative client impact" },
              { icon: Shield, stat: "12+", label: "Fortune 500 customers" },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">Certifications & Partnerships</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 text-primary mr-2" />
                  <span>ISO 27001 Information Security</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>SOC 2 Type II Compliance</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  <span>AWS Advanced Partner</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="h-4 w-4 text-primary mr-2" />
                  <span>Google Cloud Partner</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">Our Guarantees</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>30-day satisfaction guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Free revisions during implementation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>24/7 emergency support (first 90 days)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>10x ROI guarantee within 12 months</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAiDevelopmentService;
