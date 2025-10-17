import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const templates = [
  {
    id: "classic",
    name: "Classic Professional",
    description: "Timeless design perfect for corporate roles",
    color: "from-blue-500 to-blue-600",
    popular: true
  },
  {
    id: "modern",
    name: "Modern Minimalist",
    description: "Clean and contemporary for tech professionals",
    color: "from-purple-500 to-pink-600",
    popular: false
  },
  {
    id: "creative",
    name: "Creative Bold",
    description: "Stand out with vibrant design for creative fields",
    color: "from-orange-500 to-red-600",
    popular: false
  }
];

const ResumeTemplateGallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Choose Your <span className="text-primary">Perfect Template</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from professionally designed templates that showcase your skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <Card 
              key={template.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {template.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent">
                    Most Popular
                  </Badge>
                )}
                <div className={`h-64 bg-gradient-to-br ${template.color} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  <div className="relative z-10 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm" />
                    <div className="space-y-2">
                      <div className="h-3 bg-white/40 rounded w-3/4" />
                      <div className="h-2 bg-white/30 rounded w-1/2" />
                    </div>
                    <div className="pt-4 space-y-2">
                      <div className="h-2 bg-white/30 rounded w-full" />
                      <div className="h-2 bg-white/30 rounded w-5/6" />
                      <div className="h-2 bg-white/30 rounded w-4/6" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{template.name}</h3>
                <p className="text-muted-foreground">{template.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary pt-2">
                  <Check className="w-4 h-4" />
                  <span>ATS-Friendly</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeTemplateGallery;
