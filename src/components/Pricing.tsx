import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

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
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Flexible Plans, Measurable ROI
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the right automation level for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`workflow-node animate-node-appear ${
                tier.popular ? 'border-primary/50 shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-sm font-bold shadow-glow flex items-center gap-2 animate-node-pulse">
                  <Crown className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${
                      tier.popular 
                        ? 'bg-gradient-to-br from-primary/20 to-accent/20' 
                        : 'bg-primary/10'
                    }`}>
                      <Sparkles className={`w-5 h-5 ${tier.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`p-1 rounded ${
                        tier.popular ? 'bg-primary/20' : 'bg-muted'
                      }`}>
                        <Check className={`h-4 w-4 ${
                          tier.popular ? 'text-primary' : 'text-muted-foreground'
                        } flex-shrink-0`} />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-glow"
                      : "bg-secondary hover:bg-secondary/80 border border-border"
                  } group`}
                >
                  Request Quote
                  {tier.popular && <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </Button>
              </div>

              {/* Active indicator for popular */}
              {tier.popular && (
                <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
