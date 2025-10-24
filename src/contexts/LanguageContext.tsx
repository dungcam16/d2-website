import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Header
    'nav.home': 'Trang chủ',
    'nav.services': 'Giải pháp',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Về chúng tôi',
    'nav.blog': 'Blog',
    'nav.contact': 'Liên hệ',
    
    // Hero
    'hero.title1': 'B2B Marketing Agency',
    'hero.title2': 'Hàng Đầu Việt Nam',
    'hero.title3': 'Dịch Vụ Marketing Toàn Diện',
    'hero.description': 'Công ty marketing B2B chuyên cung cấp',
    'hero.description.highlight1': 'giải pháp marketing cho doanh nghiệp',
    'hero.description.text': 'tư vấn chiến lược marketing, và',
    'hero.description.highlight2': 'dịch vụ marketing số toàn diện',
    'hero.description.end': 'cho thị trường B2B Việt Nam.',
    'hero.cta.consultation': 'Nhận Tư Vấn Marketing B2B Miễn Phí',
    'hero.cta.services': 'Xem Dịch Vụ Marketing',
    'hero.stats.automations': 'Tự Động Hóa Thành Công',
    'hero.stats.roi': 'Tăng Trưởng ROI',
    'hero.stats.engagement': 'Chăm Sóc Khách Hàng',
    
    // Services
    'services.title': 'Dịch Vụ Của Chúng Tôi',
    'services.subtitle': 'Giải pháp tự động hóa toàn diện cho doanh nghiệp',
    'services.chatbot.title': 'Chatbot AI & Zalo OA',
    'services.chatbot.desc': 'Tự động hóa chăm sóc khách hàng 24/7',
    'services.automation.title': 'Tự Động Hóa Quy Trình',
    'services.automation.desc': 'Tối ưu hóa quy trình làm việc và tăng hiệu suất',
    'services.n8n.title': 'N8N Workflow',
    'services.n8n.desc': 'Kết nối và tự động hóa ứng dụng',
    'services.ai.title': 'Tích Hợp AI',
    'services.ai.desc': 'Ứng dụng AI vào quy trình kinh doanh',
    'services.content.title': 'Marketing Nội Dung',
    'services.content.desc': 'Chiến lược và sản xuất nội dung chất lượng',
    'services.seo.title': 'SEO & Digital Marketing',
    'services.seo.desc': 'Tối ưu hóa và marketing trực tuyến',
    'services.viewAll': 'Xem Tất Cả Dịch Vụ',
    
    // About
    'about.title': 'Tại Sao Chọn D2 Group?',
    'about.experience.title': 'Kinh Nghiệm Thực Chiến',
    'about.experience.desc': 'Hơn 3 năm trong lĩnh vực tự động hóa và marketing B2B',
    'about.expertise.title': 'Chuyên Môn Đa Dạng',
    'about.expertise.desc': 'Đội ngũ chuyên gia về AI, automation, marketing và công nghệ',
    'about.results.title': 'Kết Quả Đo Lường',
    'about.results.desc': 'Cam kết ROI rõ ràng và báo cáo minh bạch',
    'about.support.title': 'Hỗ Trợ 24/7',
    'about.support.desc': 'Đồng hành cùng bạn trong suốt hành trình chuyển đổi số',
    
    // Portfolio
    'portfolio.title': 'Dự Án Tiêu Biểu',
    'portfolio.subtitle': 'Khám phá các giải pháp tự động hóa chúng tôi đã triển khai',
    'portfolio.viewMore': 'Xem Thêm Dự Án',
    
    // Contact
    'contact.title': 'Liên Hệ Với Chúng Tôi',
    'contact.subtitle': 'Sẵn sàng chuyển đổi số cùng D2 Group',
    'contact.name': 'Họ và tên',
    'contact.email': 'Email',
    'contact.phone': 'Số điện thoại',
    'contact.company': 'Công ty',
    'contact.message': 'Tin nhắn',
    'contact.send': 'Gửi Tin Nhắn',
    'contact.address': 'Địa chỉ',
    'contact.workingHours': 'Giờ làm việc',
    'contact.workingTime': 'Thứ 2 - Thứ 6: 9:00 - 18:00',
    
    // Footer
    'footer.about': 'Về D2 Group',
    'footer.aboutText': 'Chúng tôi chuyên cung cấp giải pháp tự động hóa và marketing cho doanh nghiệp B2B tại Việt Nam.',
    'footer.quickLinks': 'Liên Kết Nhanh',
    'footer.services': 'Dịch Vụ',
    'footer.legal': 'Pháp Lý',
    'footer.privacy': 'Chính Sách Bảo Mật',
    'footer.terms': 'Điều Khoản Sử Dụng',
    'footer.contact': 'Liên Hệ',
    'footer.rights': 'Bản quyền thuộc về D2 Group. Tất cả quyền được bảo lưu.',
    
    // Common
    'common.learnMore': 'Tìm Hiểu Thêm',
    'common.getStarted': 'Bắt Đầu Ngay',
    'common.readMore': 'Đọc Thêm',
    'common.viewDetails': 'Xem Chi Tiết',
    'common.backToHome': 'Quay Lại Trang Chủ',
    'common.loading': 'Đang tải...',
    'common.error': 'Đã có lỗi xảy ra',
    
    // Services Page
    'services.core.title': 'Dịch Vụ Cốt Lõi',
    'services.core.subtitle': 'Giải pháp tự động hóa toàn diện được thiết kế để chuyển đổi doanh nghiệp Việt Nam thông qua công nghệ thông minh và phương pháp đã được chứng minh.',
    'services.automation.sectionTitle': 'DỊCH VỤ TỰ ĐỘNG HÓA',
    'services.automation.sectionDesc': 'Các dịch vụ tự động hóa chính của chúng tôi',
    'services.digital.sectionTitle': 'DỊCH VỤ SỐ',
    'services.digital.sectionDesc': 'Các dịch vụ bổ sung để thúc đẩy tăng trưởng của bạn',
    
    // N8N Workflow
    'services.n8n.fullTitle': 'Phát Triển N8N Workflow',
    'services.n8n.fullDesc': 'Thiết kế và triển khai quy trình tự động hóa trên nền tảng n8n với JavaScript/TypeScript scripting, xử lý lỗi và giám sát.',
    'services.n8n.feature1': 'Xây dựng triggers, nodes và sub-workflows',
    'services.n8n.feature2': 'JavaScript/TypeScript scripting',
    'services.n8n.feature3': 'Xử lý lỗi và retry logic',
    'services.n8n.feature4': 'Hệ thống giám sát và logging',
    
    // Business Process
    'services.process.title': 'Tự Động Hóa Quy Trình Kinh Doanh',
    'services.process.desc': 'Tư vấn và tối ưu hóa quy trình vận hành, phân tích AS-IS/TO-BE, và thiết kế blueprint toàn diện để đảm bảo tự động hóa hiệu quả.',
    'services.process.feature1': 'Phân tích quy trình hiện tại',
    'services.process.feature2': 'Thiết kế flowchart AS-IS/TO-BE',
    'services.process.feature3': 'Định nghĩa KPI và SLA',
    'services.process.feature4': 'Blueprint tự động hóa toàn diện',
    
    // AI Integration
    'services.ai.fullTitle': 'Tích Hợp AI & Tối ưu Hóa',
    'services.ai.fullDesc': 'Tích hợp AI (GPT-4, Claude) vào workflows để tự động phân loại, phân tích cảm xúc, phân tích tài liệu và phân tích dự đoán.',
    'services.ai.feature1': 'Tích hợp LLM (GPT-4, Claude)',
    'services.ai.feature2': 'Tự động phân loại và phân tích cảm xúc',
    'services.ai.feature3': 'Phân tích và trích xuất tài liệu',
    'services.ai.feature4': 'Phân tích dự đoán với ML',
    
    // Chatbot
    'services.chatbot.fullTitle': 'Chatbot & AI Đàm Thoại',
    'services.chatbot.fullDesc': 'AI đàm thoại thông minh trên Facebook Messenger, Instagram, WhatsApp, Telegram, Zalo và tích hợp Website.',
    'services.chatbot.feature1': 'Nhận tin đa nền tảng',
    'services.chatbot.feature2': 'Phản hồi AI thông minh',
    'services.chatbot.feature3': 'Chuyển đổi agent liền mạch',
    'services.chatbot.feature4': 'Phân tích và báo cáo',
    
    // Zalo
    'services.zalo.fullTitle': 'Quản Lý Zalo OA',
    'services.zalo.fullDesc': 'Quản lý Zalo Official Account toàn diện với tin nhắn ZNS và gói chatbot tích hợp cho thị trường Việt Nam.',
    'services.zalo.feature1': 'Thiết lập và quản lý Zalo OA',
    'services.zalo.feature2': 'Chiến dịch tin nhắn ZNS',
    'services.zalo.feature3': 'Luồng chatbot tích hợp',
    'services.zalo.feature4': 'Tối ưu cho thị trường Việt Nam',
    
    // Content Marketing
    'services.content.fullTitle': 'Marketing Nội Dung Hiệu Suất',
    'services.content.fullDesc': 'Chiến lược marketing nội dung toàn diện với tối ưu hóa SEO, phân tích và theo dõi hiệu suất cho tăng trưởng bền vững.',
    'services.content.feature1': 'Chiến lược và lập kế hoạch nội dung',
    'services.content.feature2': 'Tối ưu hóa nội dung SEO',
    'services.content.feature3': 'Phân tích hiệu suất',
    'services.content.feature4': 'Phân phối đa kênh',
    
    // SEO
    'services.seo.fullTitle': 'Tối ưu Hóa SEO Kỹ Thuật',
    'services.seo.fullDesc': 'Dịch vụ SEO chuyên nghiệp với cam kết top 3 Google, tăng 400% lưu lượng tự nhiên và ROI bền vững.',
    'services.seo.feature1': 'Kiểm tra SEO kỹ thuật',
    'services.seo.feature2': 'Chiến lược từ khóa và tối ưu hóa',
    'services.seo.feature3': 'Xây dựng nội dung và liên kết',
    'services.seo.feature4': 'Đảm bảo top 3 ranking',
    
    // Website
    'services.website.title': 'Phát Triển Website Tự Động Hóa',
    'services.website.desc': 'Phát triển website hiện đại, responsive với UI/UX tối ưu, được xây dựng sẵn sàng cho tự động hóa và tối ưu SEO từ đầu.',
    'services.website.feature1': 'Thiết kế responsive và mobile-first',
    'services.website.feature2': 'Trải nghiệm UI/UX hiện đại',
    'services.website.feature3': 'Tối ưu hóa SEO tích hợp',
    'services.website.feature4': 'Tích hợp CMS và tự động hóa',
    
    // Why Choose Us
    'why.title': 'Tại Sao Chọn D2 Group?',
    'why.subtitle': 'Chúng tôi không chỉ cung cấp giải pháp; chúng tôi là đối tác tận tâm trong hành trình chuyển đổi số của doanh nghiệp bạn.',
    'why.experts.title': 'Chuyên Gia Hàng Đầu',
    'why.experts.desc': 'Đội ngũ kỹ sư của chúng tôi có hơn 5 năm kinh nghiệm trong tự động hóa và marketing số.',
    'why.security.title': 'Bảo Mật Vững Chắc',
    'why.security.desc': 'Chúng tôi tuân thủ các tiêu chuẩn bảo mật quốc tế để đảm bảo dữ liệu khách hàng của bạn luôn an toàn.',
    'why.deployment.title': 'Triển Khai Nhanh Chóng',
    'why.deployment.desc': 'Thời gian thiết lập và đưa vào hoạt động nhanh nhất trên thị trường - chỉ từ 1-2 tuần.',
    'why.support.fullTitle': 'Hỗ Trợ 24/7',
    'why.support.fullDesc': 'Đội ngũ hỗ trợ chuyên nghiệp của chúng tôi sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.',
    'why.technology.title': 'Công Nghệ Tiên Tiến',
    'why.technology.desc': 'Sử dụng các công nghệ mới nhất: N8N, AI và Machine Learning.',
    'why.roi.title': 'Đảm Bảo ROI',
    'why.roi.desc': 'Chúng tôi đảm bảo tăng ROI tối thiểu 300% sau 6 tháng triển khai.',
    
    // Testimonials
    'testimonials.title': 'Khách Hàng Nói Gì Về',
    'testimonials.subtitle': 'Hơn 200+ doanh nghiệp B2B tin tưởng và hợp tác cùng D2 Group.',
    
    // Technologies
    'tech.title': 'Được Hỗ Trợ Bởi',
    'tech.subtitle': 'Công Nghệ Tiên Tiến',
    'tech.description': 'Chúng tôi sử dụng các công nghệ AI và Tự động hóa mới nhất để mang lại hiệu quả tối ưu cho doanh nghiệp của bạn.',
    'tech.n8n': 'Nền tảng tự động hóa workflow',
    'tech.make': 'Công cụ xây dựng tự động hóa trực quan',
    'tech.zapier': 'Nền tảng tích hợp ứng dụng',
    'tech.chatbots': 'Hệ thống đàm thoại thông minh',
    'tech.llm': 'GPT-4, Claude, Gemini',
    'tech.ml': 'Phân tích dự đoán và AI',
    'tech.vector': 'Truy xuất dữ liệu được hỗ trợ AI',
    'tech.edge': 'Xử lý AI thời gian thực',
    
    // Partners
    'partners.title': 'Công Nghệ',
    'partners.subtitle': 'Của Chúng Tôi',
    'partners.description': 'Chúng tôi tận dụng các nền tảng công nghệ từ các thương hiệu hàng đầu thế giới.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Solutions',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title1': 'B2B Marketing Agency',
    'hero.title2': 'Leading in Vietnam',
    'hero.title3': 'Comprehensive Marketing Services',
    'hero.description': 'A B2B marketing company specializing in providing',
    'hero.description.highlight1': 'marketing solutions for businesses',
    'hero.description.text': 'marketing strategy consulting, and',
    'hero.description.highlight2': 'comprehensive digital marketing services',
    'hero.description.end': 'for the Vietnamese B2B market.',
    'hero.cta.consultation': 'Get a Free B2B Marketing Consultation',
    'hero.cta.services': 'View Marketing Services',
    'hero.stats.automations': 'Successful Automations',
    'hero.stats.roi': 'ROI Growth',
    'hero.stats.engagement': 'Customer Engagement',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive automation solutions for businesses',
    'services.chatbot.title': 'AI Chatbot & Zalo OA',
    'services.chatbot.desc': 'Automate customer service 24/7',
    'services.automation.title': 'Process Automation',
    'services.automation.desc': 'Optimize workflows and boost productivity',
    'services.n8n.title': 'N8N Workflow',
    'services.n8n.desc': 'Connect and automate applications',
    'services.ai.title': 'AI Integration',
    'services.ai.desc': 'Apply AI to business processes',
    'services.content.title': 'Content Marketing',
    'services.content.desc': 'Quality content strategy and production',
    'services.seo.title': 'SEO & Digital Marketing',
    'services.seo.desc': 'Online optimization and marketing',
    'services.viewAll': 'View All Services',
    
    // About
    'about.title': 'Why Choose D2 Group?',
    'about.experience.title': 'Practical Experience',
    'about.experience.desc': 'Over 3 years in automation and B2B marketing',
    'about.expertise.title': 'Diverse Expertise',
    'about.expertise.desc': 'Expert team in AI, automation, marketing and technology',
    'about.results.title': 'Measurable Results',
    'about.results.desc': 'Clear ROI commitment and transparent reporting',
    'about.support.title': '24/7 Support',
    'about.support.desc': 'Partnering with you throughout your digital transformation journey',
    
    // Portfolio
    'portfolio.title': 'Featured Projects',
    'portfolio.subtitle': 'Explore the automation solutions we have implemented',
    'portfolio.viewMore': 'View More Projects',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to transform with D2 Group',
    'contact.name': 'Full name',
    'contact.email': 'Email',
    'contact.phone': 'Phone number',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.address': 'Address',
    'contact.workingHours': 'Working Hours',
    'contact.workingTime': 'Monday - Friday: 9:00 AM - 6:00 PM',
    
    // Footer
    'footer.about': 'About D2 Group',
    'footer.aboutText': 'We specialize in providing automation and marketing solutions for B2B businesses in Vietnam.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact',
    'footer.rights': 'Copyright © D2 Group. All rights reserved.',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.readMore': 'Read More',
    'common.viewDetails': 'View Details',
    'common.backToHome': 'Back to Home',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    
    // Services Page
    'services.core.title': 'Core Services',
    'services.core.subtitle': 'Comprehensive automation solutions designed to transform Vietnamese businesses through intelligent technology and proven methodologies.',
    'services.automation.sectionTitle': 'AUTOMATION SERVICES',
    'services.automation.sectionDesc': 'Our primary automation offerings',
    'services.digital.sectionTitle': 'DIGITAL SERVICES',
    'services.digital.sectionDesc': 'Additional services to fuel your growth',
    
    // N8N Workflow
    'services.n8n.fullTitle': 'N8N Workflow Development',
    'services.n8n.fullDesc': 'Design & implement automation workflows on the n8n platform with JavaScript/TypeScript scripting, error handling, and monitoring.',
    'services.n8n.feature1': 'Build triggers, nodes & sub-workflows',
    'services.n8n.feature2': 'JavaScript/TypeScript scripting',
    'services.n8n.feature3': 'Error handling & retry logic',
    'services.n8n.feature4': 'Monitoring & logging system',
    
    // Business Process
    'services.process.title': 'Business Process Automation',
    'services.process.desc': 'Consult & optimize operational processes, analyze AS-IS/TO-BE, and design a comprehensive blueprint to ensure effective automation.',
    'services.process.feature1': 'Current state process analysis',
    'services.process.feature2': 'AS-IS/TO-BE flowchart design',
    'services.process.feature3': 'KPI & SLA definition',
    'services.process.feature4': 'Comprehensive automation blueprint',
    
    // AI Integration
    'services.ai.fullTitle': 'AI Integration & Optimization',
    'services.ai.fullDesc': 'Integrate AI (GPT-4, Claude) into workflows for auto-classification, sentiment analysis, document parsing, and predictive analytics.',
    'services.ai.feature1': 'LLM Integration (GPT-4, Claude)',
    'services.ai.feature2': 'Auto-classification & sentiment analysis',
    'services.ai.feature3': 'Document parsing & extraction',
    'services.ai.feature4': 'Predictive analytics with ML',
    
    // Chatbot
    'services.chatbot.fullTitle': 'Chatbot & Conversational AI',
    'services.chatbot.fullDesc': 'Intelligent conversational AI on Facebook Messenger, Instagram, WhatsApp, Telegram, Zalo, and Website integration.',
    'services.chatbot.feature1': 'Multi-platform messaging',
    'services.chatbot.feature2': 'Intelligent AI responses',
    'services.chatbot.feature3': 'Seamless agent handover',
    'services.chatbot.feature4': 'Analytics & reporting',
    
    // Zalo
    'services.zalo.fullTitle': 'Zalo OA Management',
    'services.zalo.fullDesc': 'Complete Zalo Official Account management with ZNS messaging and integrated chatbot packages for the Vietnamese market.',
    'services.zalo.feature1': 'Zalo OA setup & management',
    'services.zalo.feature2': 'ZNS message campaigns',
    'services.zalo.feature3': 'Integrated chatbot flows',
    'services.zalo.feature4': 'Optimized for the Vietnam market',
    
    // Content Marketing
    'services.content.fullTitle': 'Content Performance Marketing',
    'services.content.fullDesc': 'Comprehensive content marketing strategy with SEO optimization, analytics, and performance tracking for sustainable growth.',
    'services.content.feature1': 'Content strategy & planning',
    'services.content.feature2': 'SEO content optimization',
    'services.content.feature3': 'Performance analytics',
    'services.content.feature4': 'Multi-channel distribution',
    
    // SEO
    'services.seo.fullTitle': 'Technical SEO Optimization',
    'services.seo.fullDesc': 'Professional SEO services with a top 3 Google ranking commitment, a 400% increase in organic traffic, and sustainable ROI.',
    'services.seo.feature1': 'Technical SEO audit',
    'services.seo.feature2': 'Keyword strategy & optimization',
    'services.seo.feature3': 'Content & link building',
    'services.seo.feature4': 'Top 3 ranking guarantee',
    
    // Website
    'services.website.title': 'Automation-Ready Website Development',
    'services.website.desc': 'Develop modern, responsive websites with optimal UI/UX, built to be automation-ready and SEO-optimized from the ground up.',
    'services.website.feature1': 'Responsive design & mobile-first',
    'services.website.feature2': 'Modern UI/UX experience',
    'services.website.feature3': 'Built-in SEO optimization',
    'services.website.feature4': 'CMS & automation integration',
    
    // Why Choose Us
    'why.title': 'Why Choose D2 Group?',
    'why.subtitle': 'We don\'t just provide solutions; we are a dedicated partner on your business\'s digital transformation journey.',
    'why.experts.title': 'Leading Experts',
    'why.experts.desc': 'Our engineering team has 5+ years of experience in automation and digital marketing.',
    'why.security.title': 'Robust Security',
    'why.security.desc': 'We comply with international security standards to ensure your customer data is always safe.',
    'why.deployment.title': 'Rapid Deployment',
    'why.deployment.desc': 'The fastest setup and go-live time on the market - from just 1-2 weeks.',
    'why.support.fullTitle': '24/7 Support',
    'why.support.fullDesc': 'Our professional support team is ready to assist you anytime, anywhere.',
    'why.technology.title': 'Cutting-Edge Technology',
    'why.technology.desc': 'Utilizing the latest technologies: N8N, AI, and Machine Learning.',
    'why.roi.title': 'Guaranteed ROI',
    'why.roi.desc': 'We guarantee a minimum 300% ROI increase after 6 months of implementation.',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say About',
    'testimonials.subtitle': 'Over 200+ B2B businesses trust and partner with D2 Group.',
    
    // Technologies
    'tech.title': 'Powered By',
    'tech.subtitle': 'Cutting-Edge Technology',
    'tech.description': 'We utilize the latest AI and Automation technologies to deliver optimal efficiency for your business.',
    'tech.n8n': 'Workflow automation platform',
    'tech.make': 'Visual automation builder',
    'tech.zapier': 'App integration platform',
    'tech.chatbots': 'Intelligent conversation systems',
    'tech.llm': 'GPT-4, Claude, Gemini',
    'tech.ml': 'Predictive analytics & AI',
    'tech.vector': 'AI-powered data retrieval',
    'tech.edge': 'Real-time AI processing',
    
    // Partners
    'partners.title': 'Our',
    'partners.subtitle': 'Technology Stack',
    'partners.description': 'We leverage technology platforms from the world\'s leading brands.',
  },
};
