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

  const automationServices = [
    {
      icon: Workflow,
      titleKey: "services.n8n.fullTitle",
      descKey: "services.n8n.fullDesc",
      featureKeys: [
        "services.n8n.feature1",
        "services.n8n.feature2",
        "services.n8n.feature3",
        "services.n8n.feature4",
      ],
      color: "text-blue-400",
      delay: "0s",
      href: "/services/n8n-workflow",
    },
    {
      icon: Settings,
      titleKey: "services.process.title",
      descKey: "services.process.desc",
      featureKeys: [
        "services.process.feature1",
        "services.process.feature2",
        "services.process.feature3",
        "services.process.feature4",
      ],
      color: "text-green-400",
      delay: "0.2s",
      href: "/services/consulting-strategy",
    },
    {
      icon: Bot,
      titleKey: "services.ai.fullTitle",
      descKey: "services.ai.fullDesc",
      featureKeys: [
        "services.ai.feature1",
        "services.ai.feature2",
        "services.ai.feature3",
        "services.ai.feature4",
      ],
      color: "text-purple-400",
      delay: "0.4s",
      href: "/services/ai-integration",
    },
  ];

  const digitalServices = [
    {
      icon: MessageCircle,
      titleKey: "services.chatbot.fullTitle",
      descKey: "services.chatbot.fullDesc",
      featureKeys: [
        "services.chatbot.feature1",
        "services.chatbot.feature2",
        "services.chatbot.feature3",
        "services.chatbot.feature4",
      ],
      color: "text-cyan-400",
      delay: "0.6s",
      href: "/services/chatbot",
    },
    {
      icon: Zap,
      titleKey: "services.zalo.fullTitle",
      descKey: "services.zalo.fullDesc",
      featureKeys: [
        "services.zalo.feature1",
        "services.zalo.feature2",
        "services.zalo.feature3",
        "services.zalo.feature4",
      ],
      color: "text-yellow-400",
      delay: "0.8s",
      href: "/services/zalo",
    },
    {
      icon: TrendingUp,
      titleKey: "services.content.fullTitle",
      descKey: "services.content.fullDesc",
      featureKeys: [
        "services.content.feature1",
        "services.content.feature2",
        "services.content.feature3",
        "services.content.feature4",
      ],
      color: "text-orange-400",
      delay: "1.0s",
      href: "/services/content",
    },
    {
      icon: Search,
      titleKey: "services.seo.fullTitle",
      descKey: "services.seo.fullDesc",
      featureKeys: [
        "services.seo.feature1",
        "services.seo.feature2",
        "services.seo.feature3",
        "services.seo.feature4",
      ],
      color: "text-pink-400",
      delay: "1.2s",
      href: "/services/seo",
    },
    {
      icon: Code,
      titleKey: "services.website.title",
      descKey: "services.website.desc",
      featureKeys: [
        "services.website.feature1",
        "services.website.feature2",
        "services.website.feature3",
        "services.website.feature4",
      ],
      color: "text-indigo-400",
      delay: "1.4s",
      href: "/services/website",
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              {t('services.core.title').split(' ')[0]} <span className="text-primary">{t('services.core.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.core.subtitle')}
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-foreground flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              🎯 {t('services.automation.sectionTitle')}
            </h3>
            <p className="text-muted-foreground mb-8">{t('services.automation.sectionDesc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => {
                const IconComponent = service.icon;

                return (
                  <Card
                    key={index}
                    className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in relative overflow-hidden"
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
                          {t(service.titleKey)}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">{t(service.descKey)}</p>

                        <ul className="space-y-3 mb-8">
                          {service.featureKeys.map((featureKey, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-glow transition-all"></div>
                              {t(featureKey)}
                            </li>
                          ))}
                        </ul>

                        <Button
                          variant="outline"
                          className="w-full tech-border group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                          onClick={() => (window.location.href = service.href)}
                        >
                          {t('common.learnMore')}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-foreground flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              💼 {t('services.digital.sectionTitle')}
            </h3>
            <p className="text-muted-foreground mb-8">{t('services.digital.sectionDesc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitalServices.map((service, index) => {
                const IconComponent = service.icon;

                return (
                  <Card
                    key={index}
                    className="gradient-card border-border tech-border group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in relative overflow-hidden"
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
                          {t(service.titleKey)}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">{t(service.descKey)}</p>

                        <ul className="space-y-3 mb-8">
                          {service.featureKeys.map((featureKey, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-glow transition-all"></div>
                              {t(featureKey)}
                            </li>
                          ))}
                        </ul>

                        <Button
                          variant="outline"
                          className="w-full tech-border group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                          onClick={() => (window.location.href = service.href)}
                        >
                          {t('common.learnMore')}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-light/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }}></div>
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
