import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

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
    name: "Nguyễn Văn A",
    position: "CEO",
    company: "TechCorp Vietnam",
    content: "D2 Group đã giúp chúng tôi tự động hóa 90% quy trình thủ công, tiết kiệm hơn 40 giờ làm việc mỗi tuần. ROI đạt được chỉ sau 3 tháng triển khai.",
    rating: 5
  },
  {
    name: "Trần Thị B",
    position: "Marketing Director",
    company: "E-commerce Plus",
    content: "Chiến lược content marketing của D2 Group đã giúp chúng tôi tăng 300% lưu lượng tự nhiên và tăng 250% tỷ lệ chuyển đổi trong 6 tháng.",
    rating: 5
  },
  {
    name: "Lê Minh C",
    position: "CTO",
    company: "FinTech Solutions",
    content: "Giải pháp N8N automation của D2 Group rất chuyên nghiệp. Đội ngũ hỗ trợ tận tình, triển khai đúng tiến độ và hiệu quả vượt mong đợi.",
    rating: 5
  },
  {
    name: "Phạm Thu D",
    position: "Operations Manager",
    company: "Logistics Pro",
    content: "Chatbot AI của D2 Group xử lý 85% yêu cầu khách hàng tự động, giảm thời gian phản hồi từ 2 giờ xuống còn 2 phút. Khách hàng rất hài lòng.",
    rating: 5
  },
  {
    name: "Hoàng Minh E",
    position: "Founder",
    company: "SaaS Startup",
    content: "Dịch vụ SEO technical của D2 Group đã đưa website chúng tôi lên top 3 cho 15 từ khóa quan trọng. Traffic tăng 400% chỉ trong 4 tháng.",
    rating: 5
  },
  {
    name: "Đặng Thị F",
    position: "Business Development",
    company: "Manufacturing Corp",
    content: "D2 Group không chỉ cung cấp giải pháp mà còn là đối tác chiến lược. Họ hiểu rõ ngành của chúng tôi và đưa ra các giải pháp phù hợp nhất.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Khách Hàng Nói Gì Về <span className="text-primary">D2 Group</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hơn 200+ doanh nghiệp B2B tin tưởng và đồng hành cùng D2 Group
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

                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
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
