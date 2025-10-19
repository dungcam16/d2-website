import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";
import caseStudyImg from "@/assets/case-study-document-processing.jpg";

const CaseStudySpotlight = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Card className="bg-gradient-to-br from-card to-secondary border-primary/30">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-semibold mb-2">Featured Project</p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    AI-Powered Document Processing
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Automated document analysis for a US-based legal tech startup
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground">
                    Built a RAG system with GPT-4 that processes 1000+ legal documents daily, extracting key clauses and generating summaries.
                  </p>
                  <p className="text-foreground font-semibold">
                    Result: 90% reduction in processing time, 95% accuracy, $50K+ annual savings.
                  </p>
                </div>

                <Button className="bg-accent hover:bg-accent/90 group" asChild>
                  <a href="/portfolio">
                    View Full Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Right: Case Study Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border group cursor-pointer">
                <img 
                  src={caseStudyImg} 
                  alt="AI-Powered Legal Document Processing System" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudySpotlight;
