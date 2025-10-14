import React from "react";
import { Shield, Clock, Trophy, HeadphonesIcon, Rocket, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();
  
  const reasons = [
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      titleKey: "why.experts.title",
      descKey: "why.experts.desc",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      titleKey: "why.security.title",
      descKey: "why.security.desc",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      titleKey: "why.deployment.title",
      descKey: "why.deployment.desc",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      titleKey: "why.support.fullTitle",
      descKey: "why.support.fullDesc",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      titleKey: "why.technology.title",
      descKey: "why.technology.desc",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      titleKey: "why.roi.title",
      descKey: "why.roi.desc",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-foreground">{t('why.title').split('D2 Group')[0]}</span>
            <span className="text-primary">D2 Group?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group glass-effect tech-border hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{t(reason.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(reason.descKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
