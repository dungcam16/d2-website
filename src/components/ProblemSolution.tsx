import { AlertCircle, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  const painPoints = [
    "Endless copy-paste and manual data entry",
    "Missed leads and inconsistent follow-ups",
    "Disconnected tools and scattered data",
  ];

  const solutions = [
    "Faster response, higher conversion",
    "Reliable workflows with full audit trail",
    "One unified data layer across all tools",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Manual processes slow you down.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Pain Points */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-muted-foreground mb-6">The Problem</h3>
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-destructive/10 border border-destructive/30"
              >
                <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-6">The Solution</h3>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-primary/10 border border-primary/30"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
