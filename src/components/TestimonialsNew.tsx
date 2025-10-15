import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/30 mb-6" />
                
                <p className="text-lg text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;
