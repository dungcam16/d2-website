import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Workflow, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import WorkflowAnimation from "./WorkflowAnimation";

const HeroNew = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      
      {/* n8n-style grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full animate-node-pulse">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Enterprise AI Automation</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Build Intelligent
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
                  n8n Workflows
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  for Your Business
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
                Professional AI automation agency specializing in <span className="text-primary font-semibold">n8n workflow development</span>, RAG systems, and custom LLM integration for B2B companies in the US, Australia, and Europe.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-primary" />
                  <span>n8n Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span>GPT-4 & Claude</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span>RAG Systems</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-glow group relative overflow-hidden" asChild>
                <a href="/portfolio">
                  <span className="relative z-10 flex items-center">
                    View Portfolio
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all group" asChild>
                <a href="/contact">
                  <span>Schedule a Call</span>
                  <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: n8n-style Workflow Animation */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Workflow container */}
              <div className="relative bg-card/30 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-8 shadow-elevation">
                <WorkflowAnimation />
                
                {/* Glow effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-2xl -z-10 animate-pulse-glow" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
            </div>
            
            <div className="text-center mt-6 space-y-2">
              <p className="text-sm font-medium text-foreground">
                Real-time Workflow Automation
              </p>
              <p className="text-xs text-muted-foreground">
                Powered by n8n • GPT-4 • Claude • Custom Integrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
