import React from "react";
import { 
  ArrowRight, Play, Zap, Bot, Workflow, MessageCircle, 
  Settings, TrendingUp, Search, Code, Target, Globe,
  BarChart3, Users, MessageSquare, Brain, Database, Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import heroImage from "@/assets/hero-automation-light.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "D2 Group - AI Automation Agency",
    description: "We build AI-powered workflows, RAG systems, and SaaS products for remote teams in the US, Australia, and Europe. Specializing in n8n automation and LLM integration.",
    url: "https://d2group.co",
    sameAs: ["https://facebook.com/d2group", "https://linkedin.com/company/d2group"],
    serviceArea: {
      "@type": "Place",
      name: "Global - US, Australia, Europe"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation & Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "n8n Workflow Automation",
            description: "Complex multi-step workflows with error handling and API integrations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & RAG Systems",
            description: "Custom LLM integrations with GPT-4, Claude, and vector databases",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Product Development",
            description: "Full-stack SaaS applications with React, Node.js, and Supabase",
          },
        },
      ],
    },
  };

  // 5 Core Services matching actual pages
  const coreServices = [
    {
      icon: Workflow,
      title: "n8n Workflow Automation",
      desc: "Build powerful automation workflows with n8n. Connect 300+ apps and automate complex business processes.",
      features: [
        "Visual workflow builder",
        "300+ app integrations",
        "Custom code execution",
        "Self-hosted & secure"
      ],
      color: "text-blue-500",
      delay: "0s",
      href: "/services/n8n-automation",
    },
    {
      icon: Bot,
      title: "AI Chatbot Development",
      desc: "Intelligent AI chatbots powered by GPT-4, Claude, and Gemini for customer support and sales automation.",
      features: [
        "GPT-4/Claude integration",
        "Multi-channel deployment",
        "RAG implementation",
        "24/7 availability"
      ],
      color: "text-purple-500",
      delay: "0.1s",
      href: "/services/ai-chatbots",
    },
    {
      icon: Zap,
      title: "Zapier to n8n Migration",
      desc: "Migrate from Zapier to n8n for better control, security, and cost savings. Zero downtime migration.",
      features: [
        "Zero downtime migration",
        "Cost optimization",
        "Enhanced security",
        "Custom workflows"
      ],
      color: "text-orange-500",
      delay: "0.2s",
      href: "/services/zapier-migration",
    },
    {
      icon: Code,
      title: "No-Code/Low-Code Solutions",
      desc: "Build powerful applications without coding. Leverage modern no-code tools for rapid development.",
      features: [
        "Rapid prototyping",
        "Custom integrations",
        "Scalable architecture",
        "Easy maintenance"
      ],
      color: "text-green-500",
      delay: "0.3s",
      href: "/services/nocode-lowcode",
    },
    {
      icon: TrendingUp,
      title: "Marketing Automation",
      desc: "Automate email campaigns, lead nurturing, and multi-channel marketing to drive growth.",
      features: [
        "Email automation",
        "Lead scoring",
        "Campaign analytics",
        "Multi-channel orchestration"
      ],
      color: "text-pink-500",
      delay: "0.4s",
      href: "/services/marketing-automation",
    },
  ];

  // 4 Industry Solutions
  const solutions = [
    {
      icon: Users,
      title: "Digital Agencies",
      desc: "Scale your agency operations with automation workflows that handle client projects efficiently.",
      href: "/solutions/digital-agencies",
      delay: "0s",
    },
    {
      icon: Target,
      title: "E-commerce Brands",
      desc: "Automate inventory, orders, and customer communication for seamless e-commerce operations.",
      href: "/solutions/ecommerce-brands",
      delay: "0.1s",
    },
    {
      icon: TrendingUp,
      title: "Fintech Companies",
      desc: "Secure automation for financial operations, compliance, and customer onboarding.",
      href: "/solutions/fintech-companies",
      delay: "0.2s",
    },
    {
      icon: Cpu,
      title: "SaaS Companies",
      desc: "Automate onboarding, billing, support, and analytics for your SaaS product.",
      href: "/solutions/saas-companies",
      delay: "0.3s",
    },
  ];

  const aboutFeatures = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Digital Performance Marketing",
      description: "Optimize advertising and marketing campaign performance with real-time data",
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI-Powered Automation",
      description: "Automate business processes with advanced AI and machine learning technology",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Multi-Platform Chatbots",
      description: "Intelligent chatbots across all platforms: Facebook, Instagram, Zalo, Website",
    },
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      title: "Business Process Optimization",
      description: "Optimize entire operational workflows with N8N workflow automation",
    },
  ];

  const stats = [
    { number: "200+", label: "Trusted Businesses", delay: "0.1s" },
    { number: "500+", label: "Automation Workflows", delay: "0.2s" },
    { number: "15x", label: "Average ROI Growth", delay: "0.3s" },
    { number: "99.9%", label: "Guaranteed Uptime", delay: "0.4s" },
  ];

  const technologies = [
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      name: "N8N",
      descKey: "tech.n8n",
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      name: "Make (Integromat)",
      descKey: "tech.make",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      name: "Zapier",
      descKey: "tech.zapier",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      name: "AI Chatbots",
      descKey: "tech.chatbots",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      name: "Large Language Models",
      descKey: "tech.llm",
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      name: "Machine Learning",
      descKey: "tech.ml",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      name: "Vector Databases",
      descKey: "tech.vector",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      name: "Edge Computing",
      descKey: "tech.edge",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="D2 Group — AI Automation Agency for Remote Teams | n8n, RAG, SaaS Development"
        description="Professional AI automation agency serving US, Australia, and Europe. Expert in n8n workflows, GPT-4/Claude integration, RAG systems, and full-stack SaaS development with React & Node.js."
        keywords="AI automation agency, n8n developer, RAG systems, GPT-4 integration, remote team automation, SaaS development, full-stack developer, API integration, workflow automation, AI consultant"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Automation Technology Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <Bot className="h-12 w-12 text-primary opacity-50" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
            <Workflow className="h-16 w-16 text-primary opacity-30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }}>
            <Zap className="h-10 w-10 text-primary opacity-40" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
              <span className="block text-foreground">{t('hero.title1')}</span>
              <span className="block text-primary font-bold">{t('hero.title2')}</span>
              <span className="block text-foreground">{t('hero.title3')}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('hero.description')}{" "}
              <span className="text-primary font-semibold">{t('hero.description.highlight1')}</span>, {t('hero.description.text')}{" "}
              <span className="text-primary font-semibold">{t('hero.description.highlight2')}</span>{" "}
              {t('hero.description.end')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="shadow-glow group text-lg px-8 py-4" onClick={() => window.location.href = '/contact'}>
                {t('hero.cta.consultation')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg" className="tech-border group text-lg px-8 py-4" onClick={() => window.location.href = '/contact'}>
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('hero.cta.services')}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="glass-effect rounded-lg p-6 tech-border animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">{t('hero.stats.automations')}</div>
              </div>

              <div className="glass-effect rounded-lg p-6 tech-border animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10x</div>
                <div className="text-muted-foreground">{t('hero.stats.roi')}</div>
              </div>

              <div className="glass-effect rounded-lg p-6 tech-border animate-scale-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">{t('hero.stats.engagement')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Our <span className="text-primary">Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete automation solutions designed to transform your business through intelligent technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: service.delay }}
                >
                  <div className="shimmer-effect">
                    <div className="p-8 relative z-10">
                      <div className="relative mb-6">
                        <div className={`inline-flex p-4 rounded-xl bg-card/50 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-glow transition-all"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="outline"
                        className="w-full tech-border group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        onClick={() => (window.location.href = service.href)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }}></div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              <span className="text-primary">Solutions</span> by Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored automation strategies for your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in cursor-pointer"
                  style={{ animationDelay: solution.delay }}
                  onClick={() => (window.location.href = solution.href)}
                >
                  <div className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">{solution.desc}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:text-primary transition-colors"
                    >
                      Explore Solutions
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 animate-float opacity-20">
            <Target className="h-20 w-20 text-primary" />
          </div>
          <div className="absolute bottom-20 left-10 animate-float opacity-20" style={{ animationDelay: "3s" }}>
            <TrendingUp className="h-16 w-16 text-primary" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              <span className="text-foreground">Leading </span>
              <span className="text-primary">Automation & Digital Performance</span>
              <span className="text-foreground"> Agency</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              D2 Group is the trusted partner for over 200 Vietnamese businesses in digital transformation, process
              automation, and marketing performance optimization. We combine advanced AI technology with a deep
              understanding of the Vietnamese market.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: stat.delay }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aboutFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group glass-effect tech-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center animate-scale-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex justify-center mb-6">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
              We are committed to helping Vietnamese businesses achieve sustainable growth by applying automation
              technology and digital performance marketing. Each solution is custom-designed to fit the culture and market
              of Vietnam.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              <span className="text-foreground">{t('tech.title')} </span>
              <span className="text-primary">{t('tech.subtitle')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('tech.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="group glass-effect tech-border hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{t(tech.descKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
