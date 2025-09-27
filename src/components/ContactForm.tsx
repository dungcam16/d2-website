import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

interface ContactFormProps {
  service?: string;
  title?: string;
  description?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  service = "general",
  title = "Nhận Tư Vấn Miễn Phí",
  description = "Chia sẻ nhu cầu automation và chúng tôi sẽ tạo giải pháp tùy chỉnh cho doanh nghiệp của bạn."
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

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
          service: service,
          note: formData.message
        }),
      });

      if (response.ok) {
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Gửi form thất bại');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="gradient-card border-border tech-border p-8 animate-scale-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">{title}</h2>
        <p className="text-muted-foreground">
          {description}
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
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Tin nhắn</label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={`Chia sẻ nhu cầu ${service} của bạn...`}
            className="bg-card/50 border-border focus:border-primary transition-colors min-h-[120px]"
            required
          />
        </div>

        <Button type="submit" className="w-full shadow-glow group">
          <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
          Gửi thông tin liên hệ
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;