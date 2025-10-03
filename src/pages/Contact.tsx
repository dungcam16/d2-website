import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const services = [
    'Automation Service - Tự động hóa quy trình',
    'Chatbot Service - Chatbot thông minh',
    'Content Service - Sáng tạo nội dung',
    'SEO Service - Tối ưu hóa tìm kiếm',
    'Zalo Service - Marketing Zalo'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://n8n.d2group.co/webhook/website_d2group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          note: formData.message
        }),
      });

      if (response.ok) {
        toast({
          title: "Gửi thành công!",
          description: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Gửi form thất bại');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau hoặc liên hệ trực tiếp qua hotline.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Văn phòng Việt Nam",
      description: "Số 3, Nguyễn Cơ Thạch, Phường An Khánh, Thành phố Hồ Chí Minh, Việt Nam",
      color: "text-muted-foreground"
    },
    {
      icon: Phone,
      title: "Điện thoại",
      description: "+84 977 027 634",
      color: "text-muted-foreground"
    },
    {
      icon: Mail,
      title: "Email",
      description: "info@d2group.co",
      color: "text-muted-foreground"
    },
    {
      icon: MessageSquare,
      title: "Liên hệ nhanh",
      description: "Zalo",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
                Bắt Đầu <span className="text-primary">Hành Trình Automation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sẵn sàng chuyển đổi doanh nghiệp với automation thông minh? 
                Hãy thảo luận cách giải pháp của chúng tôi có thể cách mạng hóa hoạt động của bạn.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="gradient-card border-border tech-border p-8 animate-scale-in">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold font-heading mb-4">Nhận Tư Vấn Miễn Phí</h2>
                  <p className="text-muted-foreground">
                    Chia sẻ nhu cầu automation và chúng tôi sẽ tạo giải pháp tùy chỉnh cho doanh nghiệp của bạn.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Họ và tên</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Họ và tên của bạn"
                        className="bg-card/50 border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@cuaban.com"
                        className="bg-card/50 border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Số điện thoại</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0xxx xxx xxx"
                      className="bg-card/50 border-border focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Công ty</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tên công ty của bạn"
                      className="bg-card/50 border-border focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Dịch vụ cần tư vấn</label>
                    <Select value={formData.service} onValueChange={handleServiceChange} required>
                      <SelectTrigger className="bg-card/50 border-border focus:border-primary transition-colors">
                        <SelectValue placeholder="Chọn dịch vụ bạn quan tâm" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Tin nhắn</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Chia sẻ nhu cầu automation của bạn..."
                      className="bg-card/50 border-border focus:border-primary transition-colors min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full shadow-glow group">
                    Gửi tin nhắn
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="animate-slide-up">
                  <h3 className="text-2xl font-bold font-heading mb-8">Thông Tin Liên Hệ</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      
                      return (
                        <Card 
                          key={info.title}
                          className="gradient-card border-border tech-border p-6 group hover:shadow-glow transition-all duration-300 animate-scale-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`inline-flex p-3 rounded-lg bg-card/50 ${info.color} mb-4 group-hover:scale-110 transition-transform`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Hành Động Nhanh</h4>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start tech-border group"
                    asChild
                  >
                    <a href="https://wa.me/84909099421" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-3 h-5 w-5 text-green-500" />
                      Nhắn tin WhatsApp
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start tech-border group"
                    asChild
                  >
                    <a href="https://zalo.me/d2group" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-3 h-5 w-5 text-blue-500" />
                      Nhắn tin Zalo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start tech-border group"
                    asChild
                  >
                    <a href="https://m.me/d2groupmarketing" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-3 h-5 w-5 text-blue-600" />
                      Nhắn tin Messenger
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start tech-border group"
                    asChild
                  >
                    <a href="https://t.me/d2group" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-3 h-5 w-5 text-sky-500" />
                      Nhắn tin Telegram
                    </a>
                  </Button>
                  
                </div>

                {/* Support Information */}
                <Card className="gradient-card border-border tech-border p-6 text-center animate-scale-in" style={{ animationDelay: '0.7s' }}>
                  <h4 className="text-xl font-bold text-foreground mb-2">Hỗ Trợ 24/7</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn trong mọi thắc mắc về dịch vụ.
                  </p>
                  <p className="text-primary font-semibold">
                    Phản hồi trong vòng 1 giờ
                  </p>
                </Card>
              </div>
            </div>
          </div>

          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;