import React from "react";
import { Bot, Workflow, Zap, MessageSquare, Brain, Database, Settings, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Technologies = () => {
  const { t } = useLanguage();
  
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
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-foreground">{t('tech.title')} </span>
            <span className="text-primary">{t('tech.subtitle')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('tech.description')}
          </p>
        </div>

        {/* Technologies Grid */}
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
  );
};

export default Technologies;
