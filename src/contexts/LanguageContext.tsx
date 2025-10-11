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
    // ===== NAVIGATION & HEADER =====
    "nav.home": "Trang chủ",
    "nav.services": "Dịch vụ",
    "nav.portfolio": "Portfolio",
    "nav.about": "Về chúng tôi",
    "nav.blog": "Blog",
    "nav.contact": "Liên hệ",
    "nav.getStarted": "Bắt đầu ngay",
    "nav.language": "Ngôn ngữ",

    // ===== HERO SECTION =====
    "hero.title1": "Giải Pháp Tự Động Hóa",
    "hero.title2": "Cho Doanh Nghiệp B2B",
    "hero.title3": "Tại Việt Nam",
    "hero.subtitle": "Chuyên gia về n8n workflow, API integration và business process automation",
    "hero.description":
      "Chúng tôi giúp doanh nghiệp tiết kiệm thời gian, giảm chi phí và tăng hiệu suất thông qua các giải pháp tự động hóa thông minh",
    "hero.cta.primary": "Nhận Tư Vấn Miễn Phí",
    "hero.cta.secondary": "Xem Dịch Vụ",
    "hero.stats.projects": "Dự án thành công",
    "hero.stats.clients": "Khách hàng hài lòng",
    "hero.stats.experience": "Năm kinh nghiệm",
    "hero.stats.countries": "Quốc gia phục vụ",

    // ===== SERVICES SECTION =====
    "services.title": "Dịch Vụ Của Chúng Tôi",
    "services.subtitle": "Giải pháp tự động hóa toàn diện cho mọi nhu cầu",

    "services.n8n.title": "N8N Workflow Development",
    "services.n8n.desc": "Xây dựng quy trình tự động hóa tùy chỉnh với n8n",
    "services.n8n.feature1": "Thiết kế trigger",
    "services.n8n.feature2": "Xử lý lỗi",
    "services.n8n.feature3": "Sub-workflows",
    "services.n8n.feature4": "Tối ưu hiệu suất",

    "services.api.title": "API Integration",
    "services.api.desc": "Kết nối liền mạch giữa các công cụ kinh doanh",
    "services.api.feature1": "REST APIs",
    "services.api.feature2": "Webhooks",
    "services.api.feature3": "OAuth",
    "services.api.feature4": "GraphQL",

    "services.cloud.title": "Cloud Infrastructure",
    "services.cloud.desc": "Triển khai và hosting có khả năng mở rộng",
    "services.cloud.feature1": "Docker",
    "services.cloud.feature2": "AWS/GCP",
    "services.cloud.feature3": "CI/CD",
    "services.cloud.feature4": "Monitoring",

    "services.optimization.title": "Process Optimization",
    "services.optimization.desc": "Phân tích và cải thiện quy trình hiện tại",
    "services.optimization.feature1": "Đánh giá workflow",
    "services.optimization.feature2": "Phân tích bottleneck",
    "services.optimization.feature3": "Theo dõi KPI",
    "services.optimization.feature4": "Đo lường ROI",

    "services.chatbot.title": "Chatbot AI & Zalo OA",
    "services.chatbot.desc": "Tự động hóa chăm sóc khách hàng 24/7",
    "services.chatbot.feature1": "AI-powered responses",
    "services.chatbot.feature2": "Multi-channel support",
    "services.chatbot.feature3": "CRM integration",
    "services.chatbot.feature4": "Analytics dashboard",

    "services.automation.title": "Business Process Automation",
    "services.automation.desc": "Tối ưu hóa quy trình làm việc toàn diện",
    "services.automation.feature1": "Document processing",
    "services.automation.feature2": "Email automation",
    "services.automation.feature3": "Data synchronization",
    "services.automation.feature4": "Reporting automation",

    "services.viewAll": "Xem Tất Cả Dịch Vụ",
    "services.learnMore": "Tìm hiểu thêm",

    // ===== PORTFOLIO SECTION =====
    "portfolio.title": "Dự Án Tiêu Biểu",
    "portfolio.subtitle": "Khám phá các giải pháp tự động hóa chúng tôi đã triển khai thành công",
    "portfolio.category.all": "Tất cả",
    "portfolio.category.automation": "Tự động hóa",
    "portfolio.category.integration": "Tích hợp",
    "portfolio.category.chatbot": "Chatbot",
    "portfolio.category.ecommerce": "E-commerce",
    "portfolio.category.crm": "CRM",
    "portfolio.viewMore": "Xem Thêm Dự Án",
    "portfolio.viewDetails": "Xem Chi Tiết",
    "portfolio.challenge": "Thách thức:",
    "portfolio.solution": "Giải pháp:",
    "portfolio.results": "Kết quả:",
    "portfolio.technologies": "Công nghệ:",
    "portfolio.client": "Khách hàng:",
    "portfolio.duration": "Thời gian:",
    "portfolio.industry": "Ngành:",

    // ===== CASE STUDY SECTION =====
    "caseStudy.title": "Case Study",
    "caseStudy.overview": "Tổng quan",
    "caseStudy.challenge": "Thách thức",
    "caseStudy.solution": "Giải pháp",
    "caseStudy.implementation": "Triển khai",
    "caseStudy.results": "Kết quả",
    "caseStudy.testimonial": "Đánh giá khách hàng",
    "caseStudy.techStack": "Tech Stack",
    "caseStudy.timeline": "Timeline",
    "caseStudy.team": "Đội ngũ",
    "caseStudy.relatedProjects": "Dự án liên quan",
    "caseStudy.downloadPDF": "Tải PDF",
    "caseStudy.shareProject": "Chia sẻ dự án",

    // ===== ABOUT SECTION =====
    "about.title": "Về D2 Group",
    "about.subtitle": "Đối tác tin cậy cho chuyển đổi số của bạn",
    "about.mission.title": "Sứ mệnh",
    "about.mission.text": "Giúp doanh nghiệp Việt Nam tự động hóa và tối ưu quy trình kinh doanh",
    "about.vision.title": "Tầm nhìn",
    "about.vision.text": "Trở thành công ty automation hàng đầu khu vực Đông Nam Á",
    "about.values.title": "Giá trị cốt lõi",
    "about.values.innovation": "Đổi mới",
    "about.values.quality": "Chất lượng",
    "about.values.transparency": "Minh bạch",
    "about.values.partnership": "Đối tác",

    "about.whyChoose.title": "Tại Sao Chọn D2 Group?",
    "about.experience.title": "Kinh Nghiệm Thực Chiến",
    "about.experience.desc": "Hơn 3 năm trong lĩnh vực tự động hóa và marketing B2B",
    "about.expertise.title": "Chuyên Môn Đa Dạng",
    "about.expertise.desc": "Đội ngũ chuyên gia về AI, automation, marketing và công nghệ",
    "about.results.title": "Kết Quả Đo Lường",
    "about.results.desc": "Cam kết ROI rõ ràng và báo cáo minh bạch",
    "about.support.title": "Hỗ Trợ 24/7",
    "about.support.desc": "Đồng hành cùng bạn trong suốt hành trình chuyển đổi số",

    "about.team.title": "Đội Ngũ Chuyên Gia",
    "about.team.subtitle": "Những con người tạo nên sự khác biệt",
    "about.certifications": "Chứng chỉ & Đối tác",

    // ===== PROCESS / METHODOLOGY =====
    "process.title": "Quy Trình Làm Việc",
    "process.subtitle": "Phương pháp đã được chứng minh cho các dự án automation thành công",

    "process.discovery.title": "Discovery",
    "process.discovery.duration": "Tuần 1",
    "process.discovery.desc": "Thu thập yêu cầu và phân tích khả thi",
    "process.discovery.step1": "Thu thập yêu cầu",
    "process.discovery.step2": "Lập bản đồ quy trình",
    "process.discovery.step3": "Phân tích khả thi",
    "process.discovery.step4": "Thiết kế giải pháp",

    "process.development.title": "Development",
    "process.development.duration": "Tuần 2-3",
    "process.development.desc": "Xây dựng và tích hợp workflow",
    "process.development.step1": "Xây dựng workflow",
    "process.development.step2": "Tích hợp API",
    "process.development.step3": "Testing & QA",
    "process.development.step4": "Tài liệu hóa",

    "process.deployment.title": "Deployment",
    "process.deployment.duration": "Tuần 4",
    "process.deployment.desc": "Triển khai production và đào tạo",
    "process.deployment.step1": "Cài đặt production",
    "process.deployment.step2": "Đào tạo người dùng",
    "process.deployment.step3": "Thiết lập monitoring",
    "process.deployment.step4": "Bàn giao",

    "process.support.title": "Support",
    "process.support.duration": "Liên tục",
    "process.support.desc": "Hỗ trợ và tối ưu liên tục",
    "process.support.step1": "Giám sát 24/7",
    "process.support.step2": "Sửa lỗi",
    "process.support.step3": "Tối ưu hóa",
    "process.support.step4": "Cập nhật tính năng",

    // ===== TESTIMONIALS =====
    "testimonials.title": "Khách Hàng Nói Gì",
    "testimonials.subtitle": "Được tin tưởng bởi các doanh nghiệp trên toàn thế giới",
    "testimonials.readMore": "Đọc thêm",
    "testimonials.viewAll": "Xem tất cả đánh giá",

    // ===== PRICING =====
    "pricing.title": "Bảng Giá",
    "pricing.subtitle": "Chọn gói phù hợp với nhu cầu của bạn",
    "pricing.monthly": "Hàng tháng",
    "pricing.yearly": "Hàng năm",
    "pricing.save": "Tiết kiệm",
    "pricing.perMonth": "/tháng",
    "pricing.perYear": "/năm",
    "pricing.getStarted": "Bắt đầu",
    "pricing.contactUs": "Liên hệ",
    "pricing.popular": "Phổ biến",
    "pricing.enterprise": "Enterprise",

    "pricing.starter.name": "Starter",
    "pricing.starter.desc": "Cho doanh nghiệp nhỏ bắt đầu tự động hóa",
    "pricing.starter.price": "9,900,000",

    "pricing.professional.name": "Professional",
    "pricing.professional.desc": "Cho doanh nghiệp đang phát triển",
    "pricing.professional.price": "24,900,000",

    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.desc": "Giải pháp tùy chỉnh cho doanh nghiệp lớn",
    "pricing.enterprise.price": "Liên hệ",

    "pricing.features.workflows": "workflows",
    "pricing.features.integrations": "tích hợp",
    "pricing.features.support": "Hỗ trợ",
    "pricing.features.users": "người dùng",
    "pricing.features.customDomain": "Custom domain",
    "pricing.features.priority": "Ưu tiên",
    "pricing.features.dedicated": "Chuyên biệt",
    "pricing.features.unlimited": "Không giới hạn",

    // ===== BLOG =====
    "blog.title": "Blog & Tin Tức",
    "blog.subtitle": "Cập nhật kiến thức về automation và công nghệ",
    "blog.readMore": "Đọc thêm",
    "blog.readTime": "phút đọc",
    "blog.author": "Tác giả",
    "blog.publishedOn": "Đăng ngày",
    "blog.category": "Danh mục",
    "blog.tags": "Tags",
    "blog.share": "Chia sẻ",
    "blog.relatedPosts": "Bài viết liên quan",
    "blog.viewAll": "Xem tất cả bài viết",
    "blog.search": "Tìm kiếm...",
    "blog.latestPosts": "Bài viết mới nhất",
    "blog.popularPosts": "Bài viết phổ biến",
    "blog.categories": "Danh mục",

    "blog.category.automation": "Tự động hóa",
    "blog.category.ai": "Trí tuệ nhân tạo",
    "blog.category.tutorial": "Hướng dẫn",
    "blog.category.caseStudy": "Case Study",
    "blog.category.news": "Tin tức",
    "blog.category.tips": "Tips & Tricks",

    // ===== CONTACT =====
    "contact.title": "Liên Hệ Với Chúng Tôi",
    "contact.subtitle": "Sẵn sàng chuyển đổi số cùng D2 Group",
    "contact.getInTouch": "Liên hệ ngay",

    "contact.form.name": "Họ và tên",
    "contact.form.email": "Email",
    "contact.form.phone": "Số điện thoại",
    "contact.form.company": "Công ty",
    "contact.form.subject": "Chủ đề",
    "contact.form.message": "Tin nhắn",
    "contact.form.send": "Gửi Tin Nhắn",
    "contact.form.sending": "Đang gửi...",
    "contact.form.success": "Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.",
    "contact.form.error": "Có lỗi xảy ra. Vui lòng thử lại.",

    "contact.form.namePlaceholder": "Nguyễn Văn A",
    "contact.form.emailPlaceholder": "email@company.com",
    "contact.form.phonePlaceholder": "+84 xxx xxx xxx",
    "contact.form.companyPlaceholder": "Tên công ty",
    "contact.form.subjectPlaceholder": "Tôi muốn tư vấn về...",
    "contact.form.messagePlaceholder": "Chi tiết yêu cầu của bạn...",

    "contact.info.address": "Địa chỉ",
    "contact.info.email": "Email",
    "contact.info.phone": "Điện thoại",
    "contact.info.workingHours": "Giờ làm việc",
    "contact.info.workingTime": "Thứ 2 - Thứ 6: 9:00 - 18:00",
    "contact.info.saturday": "Thứ 7: 9:00 - 12:00",

    "contact.address.line1": "123 Đường ABC",
    "contact.address.line2": "Quận 1, TP. Hồ Chí Minh",
    "contact.address.line3": "Việt Nam",

    "contact.social": "Mạng xã hội",
    "contact.followUs": "Theo dõi chúng tôi",

    // ===== FOOTER =====
    "footer.about": "Về D2 Group",
    "footer.aboutText":
      "Chúng tôi chuyên cung cấp giải pháp tự động hóa và marketing cho doanh nghiệp B2B tại Việt Nam.",
    "footer.quickLinks": "Liên Kết Nhanh",
    "footer.services": "Dịch Vụ",
    "footer.resources": "Tài nguyên",
    "footer.company": "Công ty",
    "footer.legal": "Pháp Lý",
    "footer.privacy": "Chính Sách Bảo Mật",
    "footer.terms": "Điều Khoản Sử Dụng",
    "footer.cookies": "Chính Sách Cookie",
    "footer.contact": "Liên Hệ",
    "footer.subscribe": "Đăng ký nhận tin",
    "footer.subscribePlaceholder": "Nhập email của bạn",
    "footer.subscribeButton": "Đăng ký",
    "footer.subscribeSuccess": "Đăng ký thành công!",
    "footer.rights": "© 2025 D2 Group. Tất cả quyền được bảo lưu.",
    "footer.madeWith": "Được tạo với",
    "footer.in": "tại",
    "footer.vietnam": "Việt Nam",

    // ===== COMMON / GLOBAL =====
    "common.learnMore": "Tìm Hiểu Thêm",
    "common.getStarted": "Bắt Đầu Ngay",
    "common.readMore": "Đọc Thêm",
    "common.viewDetails": "Xem Chi Tiết",
    "common.viewAll": "Xem Tất Cả",
    "common.backToHome": "Quay Lại Trang Chủ",
    "common.back": "Quay lại",
    "common.next": "Tiếp theo",
    "common.previous": "Trước",
    "common.loading": "Đang tải...",
    "common.error": "Đã có lỗi xảy ra",
    "common.tryAgain": "Thử lại",
    "common.close": "Đóng",
    "common.open": "Mở",
    "common.yes": "Có",
    "common.no": "Không",
    "common.ok": "OK",
    "common.cancel": "Hủy",
    "common.save": "Lưu",
    "common.edit": "Sửa",
    "common.delete": "Xóa",
    "common.search": "Tìm kiếm",
    "common.filter": "Lọc",
    "common.sort": "Sắp xếp",
    "common.download": "Tải xuống",
    "common.upload": "Tải lên",
    "common.share": "Chia sẻ",
    "common.copy": "Sao chép",
    "common.copied": "Đã sao chép",
    "common.all": "Tất cả",
    "common.none": "Không có",
    "common.required": "Bắt buộc",
    "common.optional": "Tùy chọn",
    "common.select": "Chọn",
    "common.selected": "Đã chọn",
    "common.notFound": "Không tìm thấy",
    "common.comingSoon": "Sắp ra mắt",
    "common.viewMore": "Xem thêm",
    "common.showLess": "Thu gọn",

    // ===== CTA BUTTONS =====
    "cta.consultation": "Nhận Tư Vấn Miễn Phí",
    "cta.demo": "Xem Demo",
    "cta.trial": "Dùng thử miễn phí",
    "cta.contact": "Liên hệ ngay",
    "cta.schedule": "Đặt lịch tư vấn",
    "cta.quote": "Nhận báo giá",
    "cta.download": "Tải xuống",
    "cta.subscribe": "Đăng ký",
    "cta.register": "Đăng ký ngay",
    "cta.apply": "Ứng tuyển",

    // ===== FAQ =====
    "faq.title": "Câu Hỏi Thường Gặp",
    "faq.subtitle": "Giải đáp thắc mắc của bạn",
    "faq.askQuestion": "Đặt câu hỏi",
    "faq.stillHaveQuestions": "Vẫn còn thắc mắc?",
    "faq.contactSupport": "Liên hệ hỗ trợ",

    // ===== ERROR PAGES =====
    "error.404.title": "404 - Không Tìm Thấy Trang",
    "error.404.message": "Trang bạn đang tìm kiếm không tồn tại.",
    "error.500.title": "500 - Lỗi Server",
    "error.500.message": "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
    "error.offline.title": "Không có kết nối",
    "error.offline.message": "Vui lòng kiểm tra kết nối internet.",

    // ===== CUSTOMERS / CLIENTS =====
    "customers.title": "Khách Hàng Tin Tưởng",
    "customers.subtitle": "Hơn 200 doanh nghiệp đã tin tưởng và sử dụng dịch vụ của chúng tôi",
    "customers.stat1": "Khách hàng",
    "customers.stat2": "Dự án hoàn thành",
    "customers.stat3": "Hài lòng",
    "customers.stat4": "Hỗ trợ",

    // ===== SUCCESS METRICS =====
    "metrics.timeSaved": "Tiết kiệm thời gian",
    "metrics.costReduction": "Giảm chi phí",
    "metrics.efficiency": "Tăng hiệu suất",
    "metrics.roi": "ROI",
    "metrics.accuracy": "Độ chính xác",
    "metrics.uptime": "Thời gian hoạt động",
  },
  en: {
    // ===== NAVIGATION & HEADER =====
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    "nav.language": "Language",

    // ===== HERO SECTION =====
    "hero.title1": "Automation Solutions",
    "hero.title2": "For B2B Businesses",
    "hero.title3": "In Vietnam",
    "hero.subtitle": "Expert in n8n workflow, API integration and business process automation",
    "hero.description":
      "We help businesses save time, reduce costs and increase efficiency through intelligent automation solutions",
    "hero.cta.primary": "Get Free Consultation",
    "hero.cta.secondary": "View Services",
    "hero.stats.projects": "Successful Projects",
    "hero.stats.clients": "Happy Clients",
    "hero.stats.experience": "Years Experience",
    "hero.stats.countries": "Countries Served",

    // ===== SERVICES SECTION =====
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive automation solutions for all your needs",

    "services.n8n.title": "N8N Workflow Development",
    "services.n8n.desc": "Build custom automation workflows with n8n",
    "services.n8n.feature1": "Trigger design",
    "services.n8n.feature2": "Error handling",
    "services.n8n.feature3": "Sub-workflows",
    "services.n8n.feature4": "Performance optimization",

    "services.api.title": "API Integration",
    "services.api.desc": "Seamless connection between business tools",
    "services.api.feature1": "REST APIs",
    "services.api.feature2": "Webhooks",
    "services.api.feature3": "OAuth",
    "services.api.feature4": "GraphQL",

    "services.cloud.title": "Cloud Infrastructure",
    "services.cloud.desc": "Scalable deployment and hosting",
    "services.cloud.feature1": "Docker",
    "services.cloud.feature2": "AWS/GCP",
    "services.cloud.feature3": "CI/CD",
    "services.cloud.feature4": "Monitoring",

    "services.optimization.title": "Process Optimization",
    "services.optimization.desc": "Analyze and improve current processes",
    "services.optimization.feature1": "Workflow audit",
    "services.optimization.feature2": "Bottleneck analysis",
    "services.optimization.feature3": "KPI tracking",
    "services.optimization.feature4": "ROI measurement",

    "services.chatbot.title": "AI Chatbot & Zalo OA",
    "services.chatbot.desc": "Automate customer service 24/7",
    "services.chatbot.feature1": "AI-powered responses",
    "services.chatbot.feature2": "Multi-channel support",
    "services.chatbot.feature3": "CRM integration",
    "services.chatbot.feature4": "Analytics dashboard",

    "services.automation.title": "Business Process Automation",
    "services.automation.desc": "Comprehensive workflow optimization",
    "services.automation.feature1": "Document processing",
    "services.automation.feature2": "Email automation",
    "services.automation.feature3": "Data synchronization",
    "services.automation.feature4": "Reporting automation",

    "services.viewAll": "View All Services",
    "services.learnMore": "Learn more",

    // ===== PORTFOLIO SECTION =====
    "portfolio.title": "Featured Projects",
    "portfolio.subtitle": "Explore automation solutions we have successfully implemented",
    "portfolio.category.all": "All",
    "portfolio.category.automation": "Automation",
    "portfolio.category.integration": "Integration",
    "portfolio.category.chatbot": "Chatbot",
    "portfolio.category.ecommerce": "E-commerce",
    "portfolio.category.crm": "CRM",
    "portfolio.viewMore": "View More Projects",
    "portfolio.viewDetails": "View Details",
    "portfolio.challenge": "Challenge:",
    "portfolio.solution": "Solution:",
    "portfolio.results": "Results:",
    "portfolio.technologies": "Technologies:",
    "portfolio.client": "Client:",
    "portfolio.duration": "Duration:",
    "portfolio.industry": "Industry:",

    // ===== CASE STUDY SECTION =====
    "caseStudy.title": "Case Study",
    "caseStudy.overview": "Overview",
    "caseStudy.challenge": "Challenge",
    "caseStudy.solution": "Solution",
    "caseStudy.implementation": "Implementation",
    "caseStudy.results": "Results",
    "caseStudy.testimonial": "Client Testimonial",
    "caseStudy.techStack": "Tech Stack",
    "caseStudy.timeline": "Timeline",
    "caseStudy.team": "Team",
    "caseStudy.relatedProjects": "Related Projects",
    "caseStudy.downloadPDF": "Download PDF",
    "caseStudy.shareProject": "Share Project",

    // ===== ABOUT SECTION =====
    "about.title": "About D2 Group",
    "about.subtitle": "Your trusted partner for digital transformation",
    "about.mission.title": "Mission",
    "about.mission.text": "Help Vietnamese businesses automate and optimize business processes",
    "about.vision.title": "Vision",
    "about.vision.text": "Become the leading automation company in Southeast Asia",
    "about.values.title": "Core Values",
    "about.values.innovation": "Innovation",
    "about.values.quality": "Quality",
    "about.values.transparency": "Transparency",
    "about.values.partnership": "Partnership",

    "about.whyChoose.title": "Why Choose D2 Group?",
    "about.experience.title": "Practical Experience",
    "about.experience.desc": "Over 3 years in automation and B2B marketing",
    "about.expertise.title": "Diverse Expertise",
    "about.expertise.desc": "Expert team in AI, automation, marketing and technology",
    "about.results.title": "Measurable Results",
    "about.results.desc": "Clear ROI commitment and transparent reporting",
    "about.support.title": "24/7 Support",
    "about.support.desc": "Partnering with you throughout your digital transformation journey",

    "about.team.title": "Expert Team",
    "about.team.subtitle": "The people who make the difference",
    "about.certifications": "Certifications & Partners",

    // ===== PROCESS / METHODOLOGY =====
    "process.title": "Our Process",
    "process.subtitle": "Proven methodology for successful automation projects",

    "process.discovery.title": "Discovery",
    "process.discovery.duration": "Week 1",
    "process.discovery.desc": "Requirements gathering and feasibility analysis",
    "process.discovery.step1": "Requirements gathering",
    "process.discovery.step2": "Process mapping",
    "process.discovery.step3": "Feasibility analysis",
    "process.discovery.step4": "Solution design",

    "process.development.title": "Development",
    "process.development.duration": "Week 2-3",
    "process.development.desc": "Build and integrate workflows",
    "process.development.step1": "Workflow building",
    "process.development.step2": "API integration",
    "process.development.step3": "Testing & QA",
    "process.development.step4": "Documentation",

    "process.deployment.title": "Deployment",
    "process.deployment.duration": "Week 4",
    "process.deployment.desc": "Production deployment and training",
    "process.deployment.step1": "Production setup",
    "process.deployment.step2": "User training",
    "process.deployment.step3": "Monitoring setup",
    "process.deployment.step4": "Handover",

    "process.support.title": "Support",
    "process.support.duration": "Ongoing",
    "process.support.desc": "Continuous support and optimization",
    "process.support.step1": "24/7 monitoring",
    "process.support.step2": "Bug fixes",
    "process.support.step3": "Optimization",
    "process.support.step4": "Feature updates",

    // ===== TESTIMONIALS =====
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Trusted by businesses worldwide",
    "testimonials.readMore": "Read more",
    "testimonials.viewAll": "View all reviews",

    // ===== PRICING =====
    "pricing.title": "Pricing",
    "pricing.subtitle": "Choose the plan that fits your needs",
    "pricing.monthly": "Monthly",
    "pricing.yearly": "Yearly",
    "pricing.save": "Save",
    "pricing.perMonth": "/month",
    "pricing.perYear": "/year",
    "pricing.getStarted": "Get Started",
    "pricing.contactUs": "Contact Us",
    "pricing.popular": "Popular",
    "pricing.enterprise": "Enterprise",

    "pricing.starter.name": "Starter",
    "pricing.starter.desc": "For small businesses starting automation",
    "pricing.starter.price": "$399",

    "pricing.professional.name": "Professional",
    "pricing.professional.desc": "For growing businesses",
    "pricing.professional.price": "$999",

    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.desc": "Custom solutions for large enterprises",
    "pricing.enterprise.price": "Contact",

    "pricing.features.workflows": "workflows",
    "pricing.features.integrations": "integrations",
    "pricing.features.support": "Support",
    "pricing.features.users": "users",
    "pricing.features.customDomain": "Custom domain",
    "pricing.features.priority": "Priority",
    "pricing.features.dedicated": "Dedicated",
    "pricing.features.unlimited": "Unlimited",

    // ===== BLOG =====
    "blog.title": "Blog & News",
    "blog.subtitle": "Stay updated on automation and technology",
    "blog.readMore": "Read more",
    "blog.readTime": "min read",
    "blog.author": "Author",
    "blog.publishedOn": "Published on",
    "blog.category": "Category",
    "blog.tags": "Tags",
    "blog.share": "Share",
    "blog.relatedPosts": "Related Posts",
    "blog.viewAll": "View all posts",
    "blog.search": "Search...",
    "blog.latestPosts": "Latest Posts",
    "blog.popularPosts": "Popular Posts",
    "blog.categories": "Categories",

    "blog.category.automation": "Automation",
    "blog.category.ai": "Artificial Intelligence",
    "blog.category.tutorial": "Tutorial",
    "blog.category.caseStudy": "Case Study",
    "blog.category.news": "News",
    "blog.category.tips": "Tips & Tricks",

    // ===== CONTACT =====
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to transform with D2 Group",
    "contact.getInTouch": "Get in touch",

    "contact.form.name": "Full name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone number",
    "contact.form.company": "Company",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Thank you! We'll contact you soon.",
    "contact.form.error": "An error occurred. Please try again.",

    "contact.form.namePlaceholder": "John Doe",
    "contact.form.emailPlaceholder": "email@company.com",
    "contact.form.phonePlaceholder": "+84 xxx xxx xxx",
    "contact.form.companyPlaceholder": "Company name",
    "contact.form.subjectPlaceholder": "I need consultation about...",
    "contact.form.messagePlaceholder": "Your request details...",

    "contact.info.address": "Address",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.workingHours": "Working Hours",
    "contact.info.workingTime": "Monday - Friday: 9:00 AM - 6:00 PM",
    "contact.info.saturday": "Saturday: 9:00 AM - 12:00 PM",

    "contact.address.line1": "123 ABC Street",
    "contact.address.line2": "District 1, Ho Chi Minh City",
    "contact.address.line3": "Vietnam",

    "contact.social": "Social Media",
    "contact.followUs": "Follow us",

    // ===== FOOTER =====
    "footer.about": "About D2 Group",
    "footer.aboutText": "We specialize in providing automation and marketing solutions for B2B businesses in Vietnam.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.resources": "Resources",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.contact": "Contact",
    "footer.subscribe": "Subscribe to newsletter",
    "footer.subscribePlaceholder": "Enter your email",
    "footer.subscribeButton": "Subscribe",
    "footer.subscribeSuccess": "Successfully subscribed!",
    "footer.rights": "© 2025 D2 Group. All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.in": "in",
    "footer.vietnam": "Vietnam",

    // ===== COMMON / GLOBAL =====
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.readMore": "Read More",
    "common.viewDetails": "View Details",
    "common.viewAll": "View All",
    "common.backToHome": "Back to Home",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.tryAgain": "Try again",
    "common.close": "Close",
    "common.open": "Open",
    "common.yes": "Yes",
    "common.no": "No",
    "common.ok": "OK",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.sort": "Sort",
    "common.download": "Download",
    "common.upload": "Upload",
    "common.share": "Share",
    "common.copy": "Copy",
    "common.copied": "Copied",
    "common.all": "All",
    "common.none": "None",
    "common.required": "Required",
    "common.optional": "Optional",
    "common.select": "Select",
    "common.selected": "Selected",
    "common.notFound": "Not found",
    "common.comingSoon": "Coming soon",
    "common.viewMore": "View more",
    "common.showLess": "Show less",

    // ===== CTA BUTTONS =====
    "cta.consultation": "Get Free Consultation",
    "cta.demo": "View Demo",
    "cta.trial": "Start Free Trial",
    "cta.contact": "Contact Now",
    "cta.schedule": "Schedule Consultation",
    "cta.quote": "Get Quote",
    "cta.download": "Download",
    "cta.subscribe": "Subscribe",
    "cta.register": "Register Now",
    "cta.apply": "Apply",

    // ===== FAQ =====
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Get answers to your questions",
    "faq.askQuestion": "Ask a question",
    "faq.stillHaveQuestions": "Still have questions?",
    "faq.contactSupport": "Contact support",

    // ===== ERROR PAGES =====
    "error.404.title": "404 - Page Not Found",
    "error.404.message": "The page you're looking for doesn't exist.",
    "error.500.title": "500 - Server Error",
    "error.500.message": "An error occurred. Please try again later.",
    "error.offline.title": "No Connection",
    "error.offline.message": "Please check your internet connection.",

    // ===== CUSTOMERS / CLIENTS =====
    "customers.title": "Trusted by Leading Companies",
    "customers.subtitle": "Over 200 businesses trust our services",
    "customers.stat1": "Customers",
    "customers.stat2": "Completed Projects",
    "customers.stat3": "Satisfaction",
    "customers.stat4": "Support",

    // ===== SUCCESS METRICS =====
    "metrics.timeSaved": "Time Saved",
    "metrics.costReduction": "Cost Reduction",
    "metrics.efficiency": "Efficiency Increase",
    "metrics.roi": "ROI",
    "metrics.accuracy": "Accuracy",
    "metrics.uptime": "Uptime",
  },
};
