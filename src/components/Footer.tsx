import React from 'react';
import { Zap, Facebook, MessageCircle, Instagram, AtSign, Phone, Send, Mail, MapPin, Shield } from 'lucide-react';

const Footer = () => {
  const services = [
    'Chatbot Đa Nền Tảng',
    'Giải Pháp Zalo OA', 
    'N8N Automation',
    'Tối Ưu SEO',
    'Content Marketing',
    'Website Development'
  ];

  const company = [
    'Về Chúng Tôi',
    'Đội Ngũ',
    'Case Studies',
    'Tuyển Dụng',
    'Đối Tác'
  ];

  const resources = [
    'Blog',
    'Tài Liệu',
    'Hỗ Trợ',
    'Chính Sách Bảo Mật',
    'Điều Khoản Dịch Vụ'
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="h-8 w-8 text-primary animate-pulse-glow" />
              </div>
            <span className="text-2xl font-bold font-heading text-foreground">
              D2 <span className="text-primary">GROUP</span>
            </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Agency automation marketing hàng đầu Việt Nam, chuyển đổi doanh nghiệp thông qua 
              tự động hóa quy trình thông minh và giải pháp tương tác khách hàng đa nền tảng.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Số 3, Nguyễn Cơ Thạch, Phường An Khánh, Thành phố Hồ Chí Minh, Việt Nam
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                +84 977 027 634
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                info@d2group.co
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                MST: 3603788837
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Dịch Vụ</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Công Ty</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Tài Nguyên</h3>
            <ul className="space-y-2">
              {resources.map((resource) => {
                let href = "#";
                if (resource === "Blog") href = "/blog";
                if (resource === "Tài Liệu" || resource === "Hỗ Trợ") href = "/contact";
                if (resource === "Chính Sách Bảo Mật") href = "/privacy-policy";
                if (resource === "Điều Khoản Dịch Vụ") href = "/terms-of-service";
                
                return (
                  <li key={resource}>
                    <a 
                      href={href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {resource}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 D2 Group. Tất cả quyền được bảo lưu. Cách mạng hóa doanh nghiệp Việt Nam thông qua Automation thông minh.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center flex-wrap gap-2">
              <a 
                href="https://facebook.com/d2groupmarketing" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                title="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://m.me/d2groupmarketing" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                title="Messenger"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/d2group.co" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.threads.com/@d2group.co" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                title="Threads"
              >
                <AtSign className="h-4 w-4" />
              </a>
              <a 
                href="https://wa.me/84909099421" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                title="WhatsApp"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a 
                href="https://t.me/d2group" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                title="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
              <a 
                href="https://zalo.me/d2group" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                title="Zalo"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-48 bg-blue-primary/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;