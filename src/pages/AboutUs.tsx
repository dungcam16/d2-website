import React from 'react';
import { Award, Users, Target, TrendingUp, Star, CheckCircle, Zap, Shield, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const AboutUs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Về D2 Group - Agency Marketing B2B Hàng Đầu Việt Nam",
    "description": "D2 Group là agency marketing B2B hàng đầu với đội ngũ chuyên gia giàu kinh nghiệm, chuyên cung cấp giải pháp tự động hóa và marketing cho doanh nghiệp",
    "mainEntity": {
      "@type": "Organization",
      "name": "D2 Group",
      "url": "https://d2group.co",
      "foundingDate": "2020",
      "numberOfEmployees": "20-50",
      "slogan": "Tự Động Hóa Tương Lai, Tăng Trưởng Hôm Nay"
    }
  };

  const teamMembers = [
    {
      name: "Nguyễn Văn A",
      position: "CEO & Founder",
      expertise: "Digital Transformation, Business Strategy",
      experience: "15+ năm kinh nghiệm trong lĩnh vực công nghệ và marketing",
      avatar: "N"
    },
    {
      name: "Trần Thị B",
      position: "CTO",
      expertise: "AI, Automation, System Architecture",
      experience: "12+ năm phát triển hệ thống automation quy mô lớn",
      avatar: "T"
    },
    {
      name: "Lê Minh C",
      position: "Head of Marketing",
      expertise: "Content Strategy, SEO, Growth Hacking",
      experience: "10+ năm trong digital marketing và content strategy",
      avatar: "L"
    },
    {
      name: "Phạm Thu D",
      position: "Lead Developer",
      expertise: "N8N, API Integration, Custom Automation",
      experience: "8+ năm xây dựng giải pháp tự động hóa doanh nghiệp",
      avatar: "P"
    },
    {
      name: "Hoàng Minh E",
      position: "SEO Specialist",
      expertise: "Technical SEO, Analytics, Performance",
      experience: "7+ năm tối ưu SEO cho các website lớn",
      avatar: "H"
    },
    {
      name: "Đặng Thị F",
      position: "Customer Success Manager",
      expertise: "Client Relations, Project Management",
      experience: "9+ năm quản lý dự án và chăm sóc khách hàng",
      avatar: "Đ"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Kết Quả Đo Được",
      description: "Mọi chiến lược đều được đo lường bằng ROI cụ thể, không phỏng đoán"
    },
    {
      icon: Zap,
      title: "Tốc Độ Triển Khai",
      description: "Áp dụng phương pháp Agile để đưa giải pháp vào vận hành nhanh chóng"
    },
    {
      icon: Shield,
      title: "Bảo Mật & Tuân Thủ",
      description: "Cam kết bảo mật dữ liệu và tuân thủ các tiêu chuẩn quốc tế"
    },
    {
      icon: Users,
      title: "Đối Tác Chiến Lược",
      description: "Không chỉ cung cấp dịch vụ, chúng tôi là đồng minh trong hành trình phát triển"
    },
    {
      icon: Globe,
      title: "Công Nghệ Tiên Tiến",
      description: "Luôn cập nhật và áp dụng công nghệ mới nhất phục vụ khách hàng"
    },
    {
      icon: Heart,
      title: "Tận Tâm & Chuyên Nghiệp",
      description: "Đặt thành công của khách hàng lên hàng đầu trong mọi quyết định"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Thành Lập D2 Group",
      description: "Bắt đầu hành trình với sứ mệnh đưa tự động hóa đến mọi doanh nghiệp"
    },
    {
      year: "2021",
      title: "100+ Khách Hàng",
      description: "Phục vụ thành công hơn 100 doanh nghiệp B2B trong năm đầu tiên"
    },
    {
      year: "2022",
      title: "Mở Rộng Dịch Vụ",
      description: "Ra mắt các dịch vụ AI Integration và Content Marketing"
    },
    {
      year: "2023",
      title: "Đối Tác Chiến Lược",
      description: "Trở thành đối tác chính thức của N8N và các nền tảng công nghệ hàng đầu"
    },
    {
      year: "2024",
      title: "200+ Dự Án Thành Công",
      description: "Hoàn thành hơn 200 dự án với tỷ lệ hài lòng 98%"
    },
    {
      year: "2025",
      title: "Dẫn Đầu Thị Trường",
      description: "Trở thành agency automation #1 Việt Nam với 500+ khách hàng"
    }
  ];

  const stats = [
    { value: "200+", label: "Doanh Nghiệp Tin Tưởng" },
    { value: "500+", label: "Dự Án Hoàn Thành" },
    { value: "98%", label: "Tỷ Lệ Hài Lòng" },
    { value: "15+", label: "Năm Kinh Nghiệm" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Về Chúng Tôi - D2 Group Agency Marketing B2B Hàng Đầu"
        description="Tìm hiểu về D2 Group - Agency marketing B2B hàng đầu Việt Nam với đội ngũ chuyên gia giàu kinh nghiệm trong tự động hóa, AI và digital marketing"
        keywords="về d2 group, agency marketing B2B, đội ngũ chuyên gia marketing, công ty tự động hóa việt nam"
        canonicalUrl="/about"
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Về <span className="text-primary">D2 Group</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Agency marketing B2B hàng đầu Việt Nam, chuyên cung cấp giải pháp tự động hóa và marketing 
            cho doanh nghiệp với đội ngũ chuyên gia giàu kinh nghiệm
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="gradient-card p-8">
              <div className="text-primary mb-4">
                <Target className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Sứ Mệnh</h2>
              <p className="text-muted-foreground">
                Giúp các doanh nghiệp B2B tại Việt Nam chuyển đổi số thành công thông qua các giải pháp 
                tự động hóa và marketing thông minh, tiết kiệm chi phí và tăng năng suất vượt trội.
              </p>
            </Card>

            <Card className="gradient-card p-8">
              <div className="text-primary mb-4">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Tầm Nhìn</h2>
              <p className="text-muted-foreground">
                Trở thành đối tác tin cậy hàng đầu cho các doanh nghiệp B2B trong hành trình chuyển đổi số, 
                đưa Việt Nam thành trung tâm automation và AI cho khu vực Đông Nam Á.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Giá Trị Cốt Lõi Của <span className="text-primary">D2 Group</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index} 
                  className="gradient-card p-6 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-4">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Đội Ngũ <span className="text-primary">Chuyên Gia</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Các chuyên gia hàng đầu trong lĩnh vực automation, AI và digital marketing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="gradient-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-3xl">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-primary font-semibold mb-3">{member.position}</div>
                <div className="text-sm text-muted-foreground mb-3">{member.expertise}</div>
                <p className="text-xs text-muted-foreground italic">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Hành Trình <span className="text-primary">Phát Triển</span>
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="gradient-card p-6 inline-block max-w-md">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Sẵn Sàng Chuyển Đổi Số Cùng <span className="text-primary">D2 Group</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Hãy để đội ngũ chuyên gia của chúng tôi giúp bạn tối ưu hóa quy trình và tăng trưởng doanh thu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-glow" onClick={() => window.location.href = '/contact'}>
              Đặt Lịch Tư Vấn Miễn Phí
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '/portfolio'}>
              Xem Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
