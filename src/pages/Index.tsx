import React from "react";
// import Image from "next/image"; // ĐÃ XÓA DÒNG NÀY
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Thêm tất cả import bị thiếu
import {
  CheckCircle2,
  ArrowRight,
  Play,
  XCircle,
  Code2,
  Server,
  Sparkles,
  Cloud,
  Shield,
  CreditCard,
  Database,
  Brain,
  LayoutDashboard,
  Mail,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

//
// Di chuyển TẤT CẢ component con lên TRÊN `SaaSProductPage`
//

// 1. HeroSaaS Component
const HeroSaaS = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Value Proposition */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              🚀 Full-Stack SaaS Development
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Build Your SaaS Product From <span className="text-primary">Idea to Scale</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Launch production-ready SaaS applications with React, Node.js, Supabase, and AI capabilities. From MVP in
              4 weeks to enterprise-scale products.
            </p>
            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Authentication & Billing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Real-time Features</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>AI Integration</span>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            {/* Social Proof */}
            <p className="text-sm text-muted-foreground pt-4">
              ✓ No credit card required • 14-day free consultation • Launch in 4-8 weeks
            </p>
          </div>
          {/* Right: Product Visual/Demo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              {/* SỬA LỖI: Quay lại dùng <img> */}
              <img src="/saas-dashboard-mockup.png" alt="SaaS Product Dashboard" className="w-full" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">⚡ Deploy in 4 weeks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. TrustBarSaaS Component
const TrustBarSaaS = () => {
  const techLogos = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Supabase", logo: "/logos/supabase.svg" },
    { name: "OpenAI", logo: "/logos/openai.svg" },
    { name: "Stripe", logo: "/logos/stripe.svg" },
  ];
  return (
    <section className="py-16 border-y border-border bg-accent/5">
      <div className="container mx-auto max-w-7xl px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Built with cutting-edge technologies trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {techLogos.map((tech) => (
            // SỬA LỖI: Quay lại dùng <img>
            <img
              key={tech.name}
              src={tech.logo}
              alt={tech.name}
              className="h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. ProblemSolutionSaaS Component
const ProblemSolutionSaaS = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Problem */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Building a SaaS Product Shouldn't Take 12+ Months
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Most startups waste months on technical debt, scalability issues, and rebuilding features that should work
            from day one.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200">
              <XCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Slow Development</h3>
              <p className="text-muted-foreground">
                Building auth, payments, and infrastructure from scratch takes 3-6 months
              </p>
            </div>
            <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200">
              <XCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Technical Debt</h3>
              <p className="text-muted-foreground">
                Poor architecture decisions early on require costly rewrites later
              </p>
            </div>
            <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200">
              <XCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Scaling Issues</h3>
              <p className="text-muted-foreground">Applications break under load because they weren't built to scale</p>
            </div>
          </div>
        </div>
        {/* Solution */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Launch Production-Ready SaaS in 4-8 Weeks</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We build scalable, secure SaaS applications with proven architecture and all essential features included
            from day one.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200">
              <CheckCircle2 className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Rapid Launch</h3>
              <p className="text-muted-foreground">
                MVP in 4 weeks with authentication, payments, and core features ready
              </p>
            </div>
            <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200">
              <CheckCircle2 className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Battle-Tested Stack</h3>
              <p className="text-muted-foreground">
                Modern architecture with React, Node.js, and Supabase proven at scale
              </p>
            </div>
            <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200">
              <CheckCircle2 className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Built to Scale</h3>
              <p className="text-muted-foreground">
                Handle 100K+ users with optimized database, caching, and CDN setup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. TechStackShowcase Component
const TechStackShowcase = () => {
  const stack = [
    {
      category: "Frontend",
      icon: <Code2 />,
      technologies: [
        { name: "React 18", description: "Modern UI with hooks and server components" },
        { name: "Next.js 14", description: "SEO-optimized with App Router and Server Actions" },
        { name: "TailwindCSS", description: "Utility-first styling with custom design system" },
        { name: "Shadcn/ui", description: "Accessible component library" },
      ],
    },
    {
      category: "Backend",
      icon: <Server />,
      technologies: [
        { name: "Node.js + Express", description: "RESTful APIs with middleware architecture" },
        { name: "Supabase", description: "Postgres database with instant APIs and real-time" },
        { name: "Edge Functions", description: "Serverless functions at the edge" },
        { name: "Row Level Security", description: "Database-level authorization" },
      ],
    },
    {
      category: "AI & Features",
      icon: <Sparkles />,
      technologies: [
        { name: "OpenAI GPT-4", description: "Natural language processing and generation" },
        { name: "Claude 3.5", description: "Advanced reasoning and code generation" },
        { name: "Vector Embeddings", description: "Semantic search with pgvector" },
        { name: "RAG Systems", description: "Context-aware AI responses" },
      ],
    },
    {
      category: "Infrastructure",
      icon: <Cloud />,
      technologies: [
        { name: "Vercel/Railway", description: "Zero-config deployment with global CDN" },
        { name: "Stripe Integration", description: "Subscription billing and payments" },
        { name: "Auth System", description: "Email, OAuth, magic links with Supabase Auth" },
        { name: "Real-time Sync", description: "WebSocket connections for live updates" },
      ],
    },
  ];
  return (
    <section className="py-24 px-4 bg-accent/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Modern Tech Stack for Scalable SaaS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use production-proven technologies that reduce development time by 60% while ensuring enterprise-grade
            performance and security.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {stack.map((item) => (
            <div key={item.category} className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">{item.icon}</div>
                <h3 className="text-2xl font-bold">{item.category}</h3>
              </div>
              <div className="space-y-4">
                {item.technologies.map((tech) => (
                  <div key={tech.name} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. FeaturesBreakdown Component
const FeaturesBreakdown = () => {
  const features = [
    {
      title: "User Authentication & Management",
      description: "Complete auth system with email, OAuth providers, magic links, and user management dashboard.",
      benefits: [
        "Email/password with verification",
        "Google, GitHub, LinkedIn OAuth",
        "Magic link passwordless login",
        "User roles and permissions",
        "Session management",
        "Password reset flow",
      ],
      image: "/features/auth-dashboard.png",
      icon: <Shield />,
    },
    {
      title: "Subscription & Billing",
      description: "Integrated Stripe payment system with subscription management, invoicing, and billing portal.",
      benefits: [
        "Multiple pricing tiers",
        "Free trial management",
        "Automatic invoicing",
        "Customer billing portal",
        "Usage-based pricing",
        "Webhook handling",
      ],
      image: "/features/billing-system.png",
      icon: <CreditCard />,
    },
    {
      title: "Real-time Database & APIs",
      description: "Supabase Postgres database with instant RESTful APIs, real-time subscriptions, and RLS security.",
      benefits: [
        "Auto-generated REST APIs",
        "Real-time data sync",
        "Database migrations",
        "Row-level security policies",
        "Full-text search",
        "Database functions",
      ],
      image: "/features/database-schema.png",
      icon: <Database />,
    },
    {
      title: "AI Integration & RAG",
      description:
        "Integrate GPT-4, Claude, and custom AI models with vector search and retrieval-augmented generation.",
      benefits: [
        "LLM API integration",
        "Vector embeddings storage",
        "Semantic search",
        "Context-aware responses",
        "Custom AI workflows",
        "Token usage tracking",
      ],
      image: "/features/ai-integration.png",
      icon: <Brain />,
    },
    {
      title: "Admin Dashboard",
      description: "Comprehensive admin panel for managing users, content, analytics, and system settings.",
      benefits: [
        "User management",
        "Analytics dashboard",
        "Content moderation",
        "System logs",
        "Performance metrics",
        "Email templates",
      ],
      image: "/features/admin-panel.png",
      icon: <LayoutDashboard />,
    },
    {
      title: "Email & Notifications",
      description: "Transactional emails, notification system, and communication workflows built-in.",
      benefits: [
        "Transactional emails",
        "In-app notifications",
        "Email templates",
        "Push notifications",
        "SMS integration ready",
        "Notification preferences",
      ],
      image: "/features/notification-system.png",
      icon: <Mail />,
    },
  ];
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Everything Your SaaS Needs, Built-In</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All essential SaaS features included from day one. No need to build authentication, payments, or
            infrastructure from scratch.
          </p>
        </div>
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 p-3 bg-primary/10 rounded-lg text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {feature.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                  {/* SỬA LỖI: Quay lại dùng <img> */}
                  <img src={feature.image} alt={feature.title} className="w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. DevelopmentProcess Component
const DevelopmentProcess = () => {
  const phases = [
    {
      week: "Week 1",
      title: "Discovery & Planning",
      tasks: [
        "Requirements gathering",
        "User flow mapping",
        "Tech stack finalization",
        "Database schema design",
        "UI/UX wireframes",
      ],
    },
    {
      week: "Week 2-3",
      title: "Core Development",
      tasks: [
        "Authentication system",
        "Database setup & APIs",
        "Frontend components",
        "User dashboard",
        "Admin panel basics",
      ],
    },
    {
      week: "Week 4-5",
      title: "Features & Integration",
      tasks: [
        "Payment integration",
        "Email system",
        "AI features implementation",
        "Real-time functionality",
        "Third-party integrations",
      ],
    },
    {
      week: "Week 6-7",
      title: "Testing & Polish",
      tasks: [
        "Quality assurance testing",
        "Performance optimization",
        "Security audit",
        "Bug fixes",
        "Mobile responsiveness",
      ],
    },
    {
      week: "Week 8",
      title: "Launch & Handoff",
      tasks: ["Production deployment", "Documentation", "Team training", "Monitoring setup", "Post-launch support"],
    },
  ];
  return (
    <section className="py-24 px-4 bg-accent/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">From Idea to Launch in 8 Weeks</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven development process ensures on-time delivery with full transparency at every stage.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={phase.week}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-background" />
                {/* Content */}
                <div className={index % 2 === 0 ? "lg:text-right" : "lg:col-start-2"}>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-2">
                    {phase.week}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                  <ul className={`space-y-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-center gap-2">
                        {index % 2 === 0 && <span className="hidden lg:block flex-1" />}
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{task}</span>
                        {index % 2 === 1 && <span className="hidden lg:block flex-1" />}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Visual placeholder */}
                <div className={index % 2 === 0 ? "lg:col-start-2" : ""}>
                  <div className="p-8 bg-background rounded-2xl border border-border shadow-sm">
                    <div className="aspect-video bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-4xl">📋</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. PricingPackages Component
const PricingPackages = () => {
  const packages = [
    {
      name: "MVP Launch",
      price: "$15,000",
      duration: "4-6 weeks",
      description: "Perfect for validating your idea with early users",
      features: [
        "User authentication (email + OAuth)",
        "Basic user dashboard",
        "Admin panel",
        "Database setup & APIs",
        "Responsive design",
        "Email notifications",
        "Basic analytics",
        "2 weeks post-launch support",
      ],
      cta: "Start MVP Project",
      popular: false,
    },
    {
      name: "Full SaaS Product",
      price: "$35,000",
      duration: "8-10 weeks",
      description: "Complete SaaS application ready to scale",
      features: [
        "Everything in MVP, plus:",
        "Stripe subscription billing",
        "Advanced user roles & permissions",
        "Real-time features",
        "AI integration (GPT-4/Claude)",
        "Advanced analytics dashboard",
        "Email sequences & automation",
        "API documentation",
        "1 month post-launch support",
        "Performance optimization",
      ],
      cta: "Build Full Product",
      popular: true,
    },
    {
      name: "Enterprise Scale",
      price: "Custom",
      duration: "12+ weeks",
      description: "Advanced features and dedicated support",
      features: [
        "Everything in Full Product, plus:",
        "Custom AI/RAG systems",
        "Multi-tenancy architecture",
        "Advanced integrations",
        "White-label options",
        "Custom reporting & analytics",
        "Dedicated DevOps setup",
        "Team training",
        "3 months priority support",
        "Ongoing maintenance options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transparent Pricing, Predictable Results</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fixed-price packages with clear deliverables. No hidden costs, no scope creep, no surprises.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border-2 ${
                pkg.popular ? "border-primary shadow-xl scale-105" : "border-border"
              } bg-background`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  {pkg.price !== "Custom" && <span className="text-muted-foreground">one-time</span>}
                </div>
                <p className="text-sm text-primary font-semibold">{pkg.duration}</p>
                <p className="text-muted-foreground mt-2">{pkg.description}</p>
              </div>

              {/* Sửa lại logic gán variant cho Button (đã đúng từ trước) */}
              <Button className="w-full mb-6" variant={pkg.popular ? "default" : "outline"} size="lg">
                {pkg.cta}
              </Button>

              <div className="space-y-3">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All packages include source code ownership, deployment assistance, and documentation.
          </p>
          <Button variant="link" className="text-primary">
            Compare all features →
          </Button>
        </div>
      </div>
    </section>
  );
};

// 8. FAQSection Component
const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to build a SaaS MVP?",
      answer:
        "A typical MVP with core features (auth, database, basic UI) takes 4-6 weeks. A full-featured SaaS product with payments, AI integration, and advanced features takes 8-12 weeks. Timeline depends on feature complexity and your specific requirements.",
    },
    {
      question: "What technologies do you use for SaaS development?",
      answer:
        "We use React/Next.js for frontend, Node.js for backend APIs, Supabase (Postgres) for database, and modern tools like Stripe for payments, OpenAI/Claude for AI features. This stack is proven to scale to millions of users while keeping costs low.",
    },
    {
      question: "Can you integrate AI features like ChatGPT into my SaaS?",
      answer:
        "Yes! We specialize in AI integration including GPT-4, Claude, custom LLMs, RAG systems with vector databases, and semantic search. We can build chatbots, content generation, AI assistants, and more into your SaaS product.",
    },
    {
      question: "Do I own the source code?",
      answer:
        "Absolutely. You get full ownership of all source code, designs, documentation, and intellectual property. No licensing fees, no vendor lock-in. The code is yours to modify, scale, or hand off to your team.",
    },
    {
      question: "What happens after launch?",
      answer:
        "We provide post-launch support (duration depends on package), bug fixes, and monitoring setup. We can also provide ongoing maintenance, feature development, and scaling support on a monthly retainer basis.",
    },
    {
      question: "Can you scale my existing SaaS product?",
      answer:
        "Yes! We can audit your current application, optimize performance, add new features, migrate to modern tech stack, or rebuild problematic components. We've helped scale SaaS products from 100 to 100K+ users.",
    },
    {
      question: "How do you handle payments and billing?",
      answer:
        "We integrate Stripe for subscription management, one-time payments, free trials, usage-based billing, and customer portals. The system handles automatic invoicing, failed payments, plan upgrades/downgrades, and tax compliance.",
    },
    {
      question: "What's included in the price?",
      answer:
        "Everything listed in the package features: development, design, testing, deployment setup, documentation, and post-launch support. No hidden costs. Additional features or extended timelines are discussed and quoted separately.",
    },
  ];
  return (
    <section className="py-24 px-4 bg-accent/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our SaaS development services
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              // Sửa dấu nháy đơn thành backticks (đã đúng từ trước)
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// 9. CTASection Component
const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-12 lg:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Build Your SaaS Product?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your idea and create a detailed project roadmap. Free consultation, no commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule Free Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">4-8 weeks</div>
                <div className="text-sm opacity-80">Average Launch Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">25+</div>
                <div className="text-sm opacity-80">SaaS Products Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-80">Code Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//
// Component `SaaSProductPage` chính
//
const SaaSProductPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SaaS Product Development Services",
    description:
      "Professional full-stack SaaS application development with React, Node.js, Supabase, and AI capabilities. From MVP to scale for startups and enterprises.",
    provider: {
      "@type": "Organization",
      name: "D2 Group",
      url: "https://d2group.co",
    },
    areaServed: {
      "@type": "Place",
      name: "Global - US, Australia, Europe, Asia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SaaS Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MVP Development",
            description: "Launch your SaaS product in 4-8 weeks with core features and user authentication",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Development",
            description: "Complete SaaS application with React frontend, Node.js backend, and Supabase database",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integration",
            description: "Integrate GPT-4, Claude, vector databases, and RAG systems into your SaaS product",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Product Scaling",
            description: "Optimize performance, add features, and scale infrastructure for growing user base",
          },
        },
      ],
    },
    audience: {
      "@type": "Audience",
      audienceType: "Startup founders, product managers, enterprises looking for custom SaaS solutions",
    },
  };

  // Các component này được import từ file khác, nên không cần định nghĩa lại
  // (Trừ khi bạn muốn tôi tạo code mẫu cho chúng)
  // const TrustBarSaaS = () => <div>{/* Placeholder for TrustBarSaaS */}</div>;
  const ProductDemoSection = () => <div>{/* Placeholder for ProductDemoSection */}</div>;
  const CaseStudySaaS = () => <div>{/* Placeholder for CaseStudySaaS */}</div>;
  const TestimonialsSaaS = () => <div>{/* Placeholder for TestimonialsSaaS */}</div>;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SaaS Product Development | Full-Stack React, Node.js & AI — D2 Group"
        description="Build scalable SaaS applications with React, Node.js, Supabase, and AI. Expert full-stack development from MVP to enterprise scale. Authentication, payments, real-time features & AI integration included."
        keywords="SaaS product development, full-stack developer, React development, Node.js backend, Supabase database, AI SaaS, MVP development, startup SaaS, scalable web application, subscription SaaS, SaaS with AI, real-time SaaS, authentication system, payment integration"
        canonicalUrl="/services/saas-development"
        structuredData={structuredData}
      />

      <Header />

      {/* Giờ đây các component này đã được định nghĩa ở trên */}
      <HeroSaaS />
      <TrustBarSaaS />
      <ProblemSolutionSaaS />
      <TechStackShowcase />
      <FeaturesBreakdown />
      <ProductDemoSection />
      <DevelopmentProcess />
      <CaseStudySaaS />
      <TestimonialsSaaS />
      <PricingPackages />
      <FAQSection />
      <CTASection />

      <Footer />
    </div>
  );
};

export default SaaSProductPage;
