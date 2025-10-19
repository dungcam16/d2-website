import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroAiImage from "@/assets/hero-ai-automation.jpg";

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
                AI Automation Agency
                <br />
                <span className="text-primary">for Remote Teams</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                We build AI-powered workflows, RAG systems, and SaaS products for companies in the US, Australia, and Europe.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Specializing in n8n automation, LLM integration (GPT-4, Claude), and full-stack development with React & Node.js.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white group" asChild>
                <a href="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <a href="/contact">Schedule a Call</a>
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-video max-w-2xl mx-auto">
              <img 
                src={heroAiImage} 
                alt="AI Automation Workspace with Neural Networks and Workflows" 
                className="rounded-2xl border border-primary/30 shadow-2xl"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl -z-10" />
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Example: Document Processing → AI Analysis → Structured Output
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
