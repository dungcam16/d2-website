import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroNew = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Automate the Boring.
                <br />
                <span className="text-primary">Scale What Matters.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                We build AI-powered n8n workflows that eliminate repetitive tasks, accelerate growth, and keep your operations lean.
              </p>
              
              <p className="text-lg text-muted-foreground">
                From lead qualification to reporting — we create systems that work while you sleep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white group">
                Book 30-min Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Explore Templates
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Placeholder for Lottie animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Play className="h-16 w-16 mx-auto text-primary" />
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">n8n Workflow Demo</p>
                    <p className="text-xs text-muted-foreground">
                      Form → GPT → CRM → Slack
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl -z-10" />
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Live Demo: Lead Capture → AI Qualification → CRM Update
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
