import React from 'react';
import { Shield, Clock, Trophy, HeadphonesIcon, Rocket, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Chuyên gia hàng đầu",
      description: "Đội ngũ kỹ sư với 5+ năm kinh nghiệm automation và digital marketing"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Bảo mật tuyệt đối",
      description: "Tuân thủ tiêu chuẩn bảo mật quốc tế, đảm bảo dữ liệu khách hàng an toàn"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Triển khai nhanh",
      description: "Thời gian setup và go-live nhanh nhất thị trường - chỉ từ 1-2 tuần"
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ support chuyên nghiệp sẵn sàng hỗ trợ mọi lúc, mọi nơi"
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Công nghệ tiên tiến",
      description: "Sử dụng những công nghệ mới nhất: N8N, AI, Machine Learning"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "ROI đảm bảo",
      description: "Cam kết tăng ROI tối thiểu 300% sau 6 tháng triển khai"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-foreground">Tại sao chọn </span>
            <span className="text-primary">D2 Group?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chúng tôi không chỉ cung cấp giải pháp, mà còn là đối tác đồng hành 
            trong hành trình chuyển đổi số của doanh nghiệp bạn.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group glass-effect tech-border hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-background rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Sẵn sàng bắt đầu hành trình automation?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho doanh nghiệp của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary/10 px-4 py-2 rounded-lg">
                <span className="text-primary font-semibold">📞 Hotline: 0977 027 634</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-lg">
                <span className="text-primary font-semibold">📧 Email: info@d2group.co</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;