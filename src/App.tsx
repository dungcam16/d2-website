import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChatbotService from "./pages/ChatbotService";
import ZaloService from "./pages/ZaloService";
import ContentService from "./pages/ContentService";
import SeoService from "./pages/SeoService";
import WebsiteService from "./pages/WebsiteService";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Templates from "./pages/Templates";
import TemplateDetail from "./pages/TemplateDetail";
import Admin from "./pages/Admin";
import WorkflowAutomationService from "./pages/WorkflowAutomationService";
import DataAiDevelopmentService from "./pages/DataAiDevelopmentService";
import AiSolutionService from "./pages/AISolutionService";
import ApiIntegrationService from "./pages/ApiIntegrationService";
import ConsultingStrategyService from "./pages/ConsultingStrategyService";
import SupportOptimizationService from "./pages/SupportOptimizationService";
import TrainingKnowledgeService from "./pages/TrainingKnowledgeService";
import EnterpriseInfrastructureService from "./pages/EnterpriseInfrastructureService";
import AiSupportCaseStudy from "./pages/AiSupportCaseStudy";
import MultiPlatformDataIntegrationCaseStudy from "./pages/MultiPlatformDataIntegrationCaseStudy";
import RagChatbotCaseStudy from "./pages/RagChatbotCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Service Routes */}
          <Route path="/services/workflow-automation" element={<WorkflowAutomationService />} />
          <Route path="/services/data-ai-development" element={<DataAiDevelopmentService />} />
          <Route path="/services/ai-solution" element={<AiSolutionService />} />
          <Route path="/services/api-integration" element={<ApiIntegrationService />} />
          <Route path="/services/consulting-strategy" element={<ConsultingStrategyService />} />
          <Route path="/services/support-optimization" element={<SupportOptimizationService />} />
          <Route path="/services/training-knowledge" element={<TrainingKnowledgeService />} />
          <Route path="/services/enterprise-infrastructure" element={<EnterpriseInfrastructureService />} />
          <Route path="/services/chatbot" element={<ChatbotService />} />
          <Route path="/services/zalo" element={<ZaloService />} />
          <Route path="/services/content" element={<ContentService />} />
          <Route path="/services/seo" element={<SeoService />} />
          <Route path="/services/website" element={<WebsiteService />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:slug" element={<TemplateDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/ai-support-ticket-routing-n8n" element={<AiSupportCaseStudy />} />
          <Route path="/portfolio/multi-system-data-sync-n8n" element={<MultiPlatformDataIntegrationCaseStudy />} />
          <Route path="/portfolio/rag-powered-chatbot-pipelines" element={<RagChatbotCaseStudy />} />
          <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/about" element={<AboutUs />} />
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
