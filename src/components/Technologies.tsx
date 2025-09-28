import React from 'react';
import { Bot, Workflow, Zap, MessageSquare, Brain, Database, Settings, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Technologies = () => {
  const technologies = [
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      name: "N8N",
      description: "Workflow automation platform"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      name: "Make (Integromat)",
      description: "Visual automation builder"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      name: "Zapier",
      description: "App integration platform"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      name: "AI Chatbots",
      description: "Intelligent conversation systems"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      name: "Large Language Models",
      description: "GPT-4, Claude, Gemini"
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      name: "Machine Learning",
      description: "Predictive analytics & AI"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      name: "Vector Databases",
      description: "AI-powered data retrieval"
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      name: "Edge Computing",
      description: "Real-time AI processing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-foreground">Được Hỗ Trợ Bởi </span>
            <span className="text-primary">Công Nghệ Tiên Tiến</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chúng tôi sử dụng những công nghệ AI và Automation mới nhất để mang lại 
            hiệu quả tối ưu cho doanh nghiệp của bạn.
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
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;