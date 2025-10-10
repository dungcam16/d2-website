import React from "react";
import { Shield, Clock, Trophy, HeadphonesIcon, Rocket, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Leading Experts",
      description: "Our engineering team has 5+ years of experience in automation and digital marketing.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Robust Security",
      description: "We comply with international security standards to ensure your customer data is always safe.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Rapid Deployment",
      description: "The fastest setup and go-live time on the market - from just 1-2 weeks.",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Our professional support team is ready to assist you anytime, anywhere.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Cutting-Edge Technology",
      description: "Utilizing the latest technologies: N8N, AI, and Machine Learning.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Guaranteed ROI",
      description: "We guarantee a minimum 300% ROI increase after 6 months of implementation.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-foreground">Why Choose </span>
            <span className="text-primary">D2 Group?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just provide solutions; we are a dedicated partner on your business's digital transformation
            journey.
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
                <h3 className="text-xl font-semibold text-foreground mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
