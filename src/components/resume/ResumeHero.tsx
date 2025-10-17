import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Download, Zap } from "lucide-react";

interface ResumeHeroProps {
  onStartBuilding: () => void;
}

const ResumeHero = ({ onStartBuilding }: ResumeHeroProps) => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Resume Builder</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Create Your Perfect Resume in
              <span className="text-primary"> 3 Minutes</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Build stunning, ATS-friendly resumes with our AI-powered builder. 
              Choose from professional templates and get hired faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onStartBuilding}
                className="text-lg px-8 py-6 hover-scale"
              >
                <FileText className="w-5 h-5 mr-2" />
                Start Building Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                View Samples
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">3 Min</div>
                  <div className="text-sm text-muted-foreground">Average Time</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-muted-foreground">Resumes Created</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-md aspect-[3/4] bg-card border-2 border-primary/20 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="h-20 w-20 rounded-full bg-gradient-primary" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-primary rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-5/6" />
                    <div className="h-3 bg-muted rounded w-4/6" />
                  </div>
                  <div className="pt-4 space-y-3">
                    <div className="h-2 bg-muted rounded w-2/3" />
                    <div className="h-8 bg-gradient-card rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeHero;
