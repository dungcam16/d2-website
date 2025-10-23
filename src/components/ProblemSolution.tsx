import { AlertCircle, CheckCircle2, ArrowRight, Zap } from "lucide-react";

const ProblemSolution = () => {
  const painPoints = [
    "Manual processes slowing down your team's productivity",
    "Disconnected tools requiring constant context switching",
    "Repetitive tasks consuming valuable engineering time",
  ];

  const solutions = [
    "Automated workflows that run 24/7 without intervention",
    "Unified systems with seamless data flow across platforms",
    "AI-powered solutions that handle complex decision-making",
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Scale Your Operations with AI & Automation
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Zap className="w-5 h-5 text-primary" />
            <p className="text-lg">Transform manual work into automated workflows</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Connection arrow */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <ArrowRight className="w-12 h-12 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
            </div>
          </div>

          {/* Pain Points */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-destructive/30 rounded" />
              <h3 className="text-2xl font-bold text-destructive">The Problem</h3>
            </div>
            
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="workflow-node border-destructive/30 bg-destructive/5 hover:border-destructive/50 animate-node-appear"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                  </div>
                  <p className="text-foreground flex-1 leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                The Solution
              </h3>
            </div>
            
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="workflow-node animate-node-appear group"
                style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg animate-node-pulse">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-foreground flex-1 leading-relaxed">{solution}</p>
                </div>
                
                {/* Active indicator */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
