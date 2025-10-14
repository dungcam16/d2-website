import React from "react";
import {
  MessageCircle,
  Zap,
  Workflow,
  ArrowRight,
  Bot,
  Globe,
  Settings,
  TrendingUp,
  Search,
  Code,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
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
      href: "/services/business-process",
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

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
            {t('services.core.title').split(' ')[0]} <span className="text-primary">{t('services.core.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.core.subtitle')}
          </p>
        </div>

        {/* Automation Services - Featured */}
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
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div
                          className={`inline-flex p-4 rounded-xl bg-card/50 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                        {t(service.titleKey)}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{t(service.descKey)}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.featureKeys.map((featureKey, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-glow transition-all"></div>
                            {t(featureKey)}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
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

        {/* Digital Services - Supporting */}
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
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div
                          className={`inline-flex p-4 rounded-xl bg-card/50 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                        {t(service.titleKey)}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{t(service.descKey)}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.featureKeys.map((featureKey, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-glow transition-all"></div>
                            {t(featureKey)}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
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

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-light/3 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  );
};

export default Services;
