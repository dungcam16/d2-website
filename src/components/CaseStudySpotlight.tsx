import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import caseStudyImg from "@/assets/case-study-document-processing.jpg";

const CaseStudySpotlight = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="b2b-card p-8 md:p-12 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">Featured Project</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    AI-Powered Document Processing
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Automated document analysis for a US-based legal tech startup
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Built a RAG system with GPT-4 that processes <span className="font-semibold text-primary">1000+ legal documents daily</span>, extracting key clauses and generating summaries.
                </p>
                
                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-2xl font-bold text-primary">90%</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <Zap className="w-5 h-5 text-accent mx-auto mb-1" />
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <Sparkles className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-2xl font-bold text-primary">$50K+</div>
                    <div className="text-xs text-muted-foreground">Annual Savings</div>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-glow group" asChild>
                <a href="/portfolio">
                  <span className="relative z-10 flex items-center">
                    View Full Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Button>
            </div>

            {/* Right: Case Study Image with workflow animation */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 group cursor-pointer shadow-elevation">
                <img 
                  src={caseStudyImg} 
                  alt="AI-Powered Legal Document Processing System" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center transition-transform group-hover:scale-110 shadow-glow animate-node-pulse">
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySpotlight;
