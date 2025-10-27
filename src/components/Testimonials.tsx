import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import johnNguyen from "@/assets/testimonial-john-nguyen.jpg";
import janeTran from "@/assets/testimonial-jane-tran.jpg";
import michaelLe from "@/assets/testimonial-michael-le.jpg";
import dianaPham from "@/assets/testimonial-diana-pham.jpg";
import davidHoang from "@/assets/testimonial-david-hoang.jpg";
import sarahDang from "@/assets/testimonial-sarah-dang.jpg";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "John Nguyen",
    position: "CEO",
    company: "TechCorp Vietnam",
    image: johnNguyen,
    content:
      "D2 Group helped us automate 90% of our manual processes, saving over 40 work hours per week. We achieved a positive ROI in just 3 months of implementation.",
    rating: 5,
  },
  {
    name: "Jane Tran",
    position: "Marketing Director",
    company: "E-commerce Plus",
    image: janeTran,
    content:
      "D2 Group's content marketing strategy helped us increase organic traffic by 300% and boost our conversion rate by 250% within 6 months.",
    rating: 5,
  },
  {
    name: "Michael Le",
    position: "CTO",
    company: "FinTech Solutions",
    image: michaelLe,
    content:
      "The N8N automation solution from D2 Group is highly professional. Their support team is dedicated, the implementation was on schedule, and the results exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Diana Pham",
    position: "Operations Manager",
    company: "Logistics Pro",
    image: dianaPham,
    content:
      "D2 Group's AI Chatbot handles 85% of customer inquiries automatically, reducing our response time from 2 hours to just 2 minutes. Our customers are very satisfied.",
    rating: 5,
  },
  {
    name: "David Hoang",
    position: "Founder",
    company: "SaaS Startup",
    image: davidHoang,
    content:
      "D2 Group's technical SEO service brought our website to the top 3 for 15 important keywords. Our traffic increased by 400% in just 4 months.",
    rating: 5,
  },
  {
    name: "Sarah Dang",
    position: "Business Development",
    company: "Manufacturing Corp",
    image: sarahDang,
    content:
      "D2 Group is more than just a solution provider; they are a strategic partner. They deeply understand our industry and offer the most suitable solutions.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonials.title')} <span className="text-primary">D2 Group</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="gradient-card relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
