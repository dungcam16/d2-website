import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, TrendingUp } from "lucide-react";

const TestimonialsNew = () => {
  const testimonials = [
    {
      quote: "D2 Group turned our fragmented stack into a single automated system. We save 10+ hours weekly — and sleep better.",
      author: "Head of Operations",
      company: "SaaS Startup",
    },
    {
      quote: "They think in systems. Not just workflows. That's rare.",
      author: "CTO",
      company: "Creative Agency (UK)",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="workflow-node animate-node-appear group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon with glow */}
              <div className="relative inline-flex mb-6">
                <Quote className="h-12 w-12 text-primary/30 relative z-10" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse-glow" />
              </div>
              
              {/* Quote text */}
              <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="flex-1">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {testimonial.company}
                  </p>
                </div>
                
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>

              {/* Active indicator */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;
