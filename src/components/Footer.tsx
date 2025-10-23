import React from "react";
import { Zap, Facebook, MessageCircle, Instagram, AtSign, Phone, Send, Mail, MapPin, Shield } from "lucide-react";
import logoD2Group from "@/assets/logo_d2_group_optimized.webp";

const Footer = () => {
  const services = [
    "Multi-Platform Chatbot",
    "Zalo OA Solutions",
    "N8N Automation",
    "SEO Optimization",
    "Content Marketing",
    "Website Development",
  ];

  const company = ["About Us", "Our Team", "Case Studies", "Careers", "Partners"];

  const resources = ["Blog", "Documentation", "Support", "Privacy Policy", "Terms of Service"];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoD2Group} alt="D2 Group Logo" width="40" height="40" className="h-10 w-10" />
              <span className="text-2xl font-bold font-heading text-foreground">D2 GROUP MARKETING</span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Vietnam's leading marketing automation agency, transforming businesses through intelligent process
              automation and multi-platform customer interaction solutions.
            </p>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2 text-primary" strokeWidth={2} />
                No. 3, Nguyen Co Thach, An Khanh Ward, Ho Chi Minh City, Vietnam
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
                Tax ID: 3603788837
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => {
                let href = "#";
                if (resource === "Blog") href = "/blog";
                if (resource === "Documentation" || resource === "Support") href = "/contact";
                if (resource === "Privacy Policy") href = "/privacy-policy";
                if (resource === "Terms of Service") href = "/terms-of-service";

                return (
                  <li key={resource}>
                    <a href={href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
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
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} D2 Group. All rights reserved. Revolutionizing Vietnamese businesses through
              intelligent Automation.
            </div>

            {/* Social Links */}
            <div className="flex items-center flex-wrap gap-2 justify-center">
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
