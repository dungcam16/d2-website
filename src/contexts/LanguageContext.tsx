import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "vi";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Header
    "nav.home": "Trang chủ",
    "nav.services": "Dịch vụ",
    "nav.portfolio": "Portfolio",
    "nav.about": "Về chúng tôi",
    "nav.blog": "Blog",
    "nav.contact": "Liên hệ",

    // Hero
    "hero.title1": "B2B Marketing Agency",
    "hero.title2": "Hàng Đầu Việt Nam",
    "hero.title3": "Dịch Vụ Marketing Toàn Diện",
    "hero.description": "Công ty marketing B2B chuyên cung cấp",
    "hero.description.highlight1": "giải pháp marketing cho doanh nghiệp",
    "hero.description.text": "tư vấn chiến lược marketing, và",
    "hero.description.highlight2": "dịch vụ marketing số toàn diện",
    "hero.description.end": "cho thị trường B2B Việt Nam.",
    "hero.cta.consultation": "Nhận Tư Vấn Marketing B2B Miễn Phí",
    "hero.cta.services": "Xem Dịch Vụ Marketing",
    "hero.stats.automations": "Tự Động Hóa Thành Công",
    "hero.stats.roi": "Tăng Trưởng ROI",
    "hero.stats.engagement": "Chăm Sóc Khách Hàng",

    // Services
    "services.title": "Dịch Vụ Của Chúng Tôi",
    "services.subtitle": "Giải pháp tự động hóa toàn diện cho doanh nghiệp",
    "services.chatbot.title": "Chatbot AI & Zalo OA",
    "services.chatbot.desc": "Tự động hóa chăm sóc khách hàng 24/7",
    "services.automation.title": "Tự Động Hóa Quy Trình",
    "services.automation.desc": "Tối ưu hóa quy trình làm việc và tăng hiệu suất",
    "services.n8n.title": "N8N Workflow",
    "services.n8n.desc": "Kết nối và tự động hóa ứng dụng",
    "services.ai.title": "Tích Hợp AI",
    "services.ai.desc": "Ứng dụng AI vào quy trình kinh doanh",
    "services.content.title": "Marketing Nội Dung",
    "services.content.desc": "Chiến lược và sản xuất nội dung chất lượng",
    "services.seo.title": "SEO & Digital Marketing",
    "services.seo.desc": "Tối ưu hóa và marketing trực tuyến",
    "services.viewAll": "Xem Tất Cả Dịch Vụ",

    // About
    "about.title": "Tại Sao Chọn D2 Group?",
    "about.experience.title": "Kinh Nghiệm Thực Chiến",
    "about.experience.desc": "Hơn 3 năm trong lĩnh vực tự động hóa và marketing B2B",
    "about.expertise.title": "Chuyên Môn Đa Dạng",
    "about.expertise.desc": "Đội ngũ chuyên gia về AI, automation, marketing và công nghệ",
    "about.results.title": "Kết Quả Đo Lường",
    "about.results.desc": "Cam kết ROI rõ ràng và báo cáo minh bạch",
    "about.support.title": "Hỗ Trợ 24/7",
    "about.support.desc": "Đồng hành cùng bạn trong suốt hành trình chuyển đổi số",

    // Portfolio
    "portfolio.title": "Dự Án Tiêu Biểu",
    "portfolio.subtitle": "Khám phá các giải pháp tự động hóa chúng tôi đã triển khai",
    "portfolio.viewMore": "Xem Thêm Dự Án",

    // Contact
    "contact.title": "Liên Hệ Với Chúng Tôi",
    "contact.subtitle": "Sẵn sàng chuyển đổi số cùng D2 Group",
    "contact.name": "Họ và tên",
    "contact.email": "Email",
    "contact.phone": "Số điện thoại",
    "contact.company": "Công ty",
    "contact.message": "Tin nhắn",
    "contact.send": "Gửi Tin Nhắn",
    "contact.address": "Địa chỉ",
    "contact.workingHours": "Giờ làm việc",
    "contact.workingTime": "Thứ 2 - Thứ 6: 9:00 - 18:00",

    // Footer
    "footer.about": "Về D2 Group",
    "footer.aboutText":
      "Chúng tôi chuyên cung cấp giải pháp tự động hóa và marketing cho doanh nghiệp B2B tại Việt Nam.",
    "footer.quickLinks": "Liên Kết Nhanh",
    "footer.services": "Dịch Vụ",
    "footer.legal": "Pháp Lý",
    "footer.privacy": "Chính Sách Bảo Mật",
    "footer.terms": "Điều Khoản Sử Dụng",
    "footer.contact": "Liên Hệ",
    "footer.rights": "Bản quyền thuộc về D2 Group. Tất cả quyền được bảo lưu.",

    // Common
    "common.learnMore": "Tìm Hiểu Thêm",
    "common.getStarted": "Bắt Đầu Ngay",
    "common.readMore": "Đọc Thêm",
    "common.viewDetails": "Xem Chi Tiết",
    "common.backToHome": "Quay Lại Trang Chủ",
    "common.loading": "Đang tải...",
    "common.error": "Đã có lỗi xảy ra",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // Hero
    "hero.title1": "B2B Marketing Agency",
    "hero.title2": "Leading in Vietnam",
    "hero.title3": "Comprehensive Marketing Services",
    "hero.description": "A B2B marketing company specializing in providing",
    "hero.description.highlight1": "marketing solutions for businesses",
    "hero.description.text": "marketing strategy consulting, and",
    "hero.description.highlight2": "comprehensive digital marketing services",
    "hero.description.end": "for the Vietnamese B2B market.",
    "hero.cta.consultation": "Get a Free B2B Marketing Consultation",
    "hero.cta.services": "View Marketing Services",
    "hero.stats.automations": "Successful Automations",
    "hero.stats.roi": "ROI Growth",
    "hero.stats.engagement": "Customer Engagement",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive automation solutions for businesses",
    "services.chatbot.title": "AI Chatbot & Zalo OA",
    "services.chatbot.desc": "Automate customer service 24/7",
    "services.automation.title": "Process Automation",
    "services.automation.desc": "Optimize workflows and boost productivity",
    "services.n8n.title": "N8N Workflow",
    "services.n8n.desc": "Connect and automate applications",
    "services.ai.title": "AI Integration",
    "services.ai.desc": "Apply AI to business processes",
    "services.content.title": "Content Marketing",
    "services.content.desc": "Quality content strategy and production",
    "services.seo.title": "SEO & Digital Marketing",
    "services.seo.desc": "Online optimization and marketing",
    "services.viewAll": "View All Services",

    // About
    "about.title": "Why Choose D2 Group?",
    "about.experience.title": "Practical Experience",
    "about.experience.desc": "Over 3 years in automation and B2B marketing",
    "about.expertise.title": "Diverse Expertise",
    "about.expertise.desc": "Expert team in AI, automation, marketing and technology",
    "about.results.title": "Measurable Results",
    "about.results.desc": "Clear ROI commitment and transparent reporting",
    "about.support.title": "24/7 Support",
    "about.support.desc": "Partnering with you throughout your digital transformation journey",

    // Portfolio
    "portfolio.title": "Featured Projects",
    "portfolio.subtitle": "Explore the automation solutions we have implemented",
    "portfolio.viewMore": "View More Projects",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to transform with D2 Group",
    "contact.name": "Full name",
    "contact.email": "Email",
    "contact.phone": "Phone number",
    "contact.company": "Company",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.address": "Address",
    "contact.workingHours": "Working Hours",
    "contact.workingTime": "Monday - Friday: 9:00 AM - 6:00 PM",

    // Footer
    "footer.about": "About D2 Group",
    "footer.aboutText": "We specialize in providing automation and marketing solutions for B2B businesses in Vietnam.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact",
    "footer.rights": "Copyright © D2 Group. All rights reserved.",

    // Common
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.readMore": "Read More",
    "common.viewDetails": "View Details",
    "common.backToHome": "Back to Home",
    "common.loading": "Loading...",
    "common.error": "An error occurred",
  },
};
