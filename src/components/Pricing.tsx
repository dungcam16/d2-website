import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      description: "Audit + 1 custom workflow",
      features: [
        "30-min consultation",
        "1 custom workflow",
        "Documentation",
        "Setup support",
      ],
    },
    {
      name: "Growth",
      description: "3–5 workflows + ongoing support",
      features: [
        "Everything in Starter",
        "3-5 custom workflows",
        "30 days of support",
        "Priority response",
        "Monthly optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Full system automation + AI integration",
      features: [
        "Everything in Growth",
        "Unlimited workflows",
        "AI integration (GPT, RAG)",
        "Dedicated support",
        "Custom SLAs",
        "Team training",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible Plans, Measurable ROI
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative ${
                tier.popular
                  ? "border-primary/50 shadow-lg shadow-primary/20"
                  : "border-border"
              } bg-card/50 backdrop-blur-sm`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-accent hover:bg-accent/90"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
