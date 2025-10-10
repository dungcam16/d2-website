import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChatbotService from "./pages/ChatbotService";
import ZaloService from "./pages/ZaloService";
import N8nWorkflowService from "./pages/N8nWorkflowService";
import AutomationService from "./pages/AutomationService";
import BusinessProcessService from "./pages/BusinessProcessService";
import AiIntegrationService from "./pages/AiIntegrationService";
import ContentService from "./pages/ContentService";
import SeoService from "./pages/SeoService";
import WebsiteService from "./pages/WebsiteService";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/AboutUs";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import CaseStudyYoutubeAutomation from "./pages/CaseStudyYoutubeAutomation";
import CaseStudyCrmAutomation from "./pages/CaseStudyCrmAutomation";
import CaseStudyEcommerceAutomation from "./pages/CaseStudyEcommerceAutomation";
import CaseStudySlackNotion from "./pages/CaseStudySlackNotion";
import CaseStudyCrmPipeline from "./pages/CaseStudyCrmPipeline";
import CaseStudyShopifyTracking from "./pages/CaseStudyShopifyTracking";
import CaseStudyAiContent from "./pages/CaseStudyAiContent";
import CaseStudyTelegramAlert from "./pages/CaseStudyTelegramAlert";
import CaseStudyDataDashboard from "./pages/CaseStudyDataDashboard";
import Templates from "./pages/Templates";
import TemplateDetail from "./pages/TemplateDetail";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/chatbot" element={<ChatbotService />} />
          <Route path="/services/zalo" element={<ZaloService />} />
          <Route path="/services/automation" element={<AutomationService />} />
          <Route path="/services/n8n-workflow" element={<N8nWorkflowService />} />
          <Route path="/services/business-process" element={<BusinessProcessService />} />
          <Route path="/services/ai-integration" element={<AiIntegrationService />} />
          <Route path="/services/content" element={<ContentService />} />
          <Route path="/services/seo" element={<SeoService />} />
          <Route path="/services/website" element={<WebsiteService />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:slug" element={<TemplateDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/case-study/youtube-automation" element={<CaseStudyYoutubeAutomation />} />
          <Route path="/case-study/crm-automation" element={<CaseStudyCrmAutomation />} />
          <Route path="/case-study/ecommerce-automation" element={<CaseStudyEcommerceAutomation />} />
          <Route path="/case-study/slack-notion-bot" element={<CaseStudySlackNotion />} />
          <Route path="/case-study/crm-pipeline-builder" element={<CaseStudyCrmPipeline />} />
          <Route path="/case-study/shopify-tracking-sync" element={<CaseStudyShopifyTracking />} />
          <Route path="/case-study/ai-content-workflow" element={<CaseStudyAiContent />} />
          <Route path="/case-study/telegram-alert-system" element={<CaseStudyTelegramAlert />} />
          <Route path="/case-study/data-report-dashboard" element={<CaseStudyDataDashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
