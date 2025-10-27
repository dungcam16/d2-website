import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import Templates from "./pages/Templates";
import TemplateDetail from "./pages/TemplateDetail";
import Admin from "./pages/Admin";
import Pricing from "./pages/Pricing";
import MigrationGuides from "./pages/resources/migration-guides";
import RoiCalculator from "./pages/resources/roi-calculator";
import CaseStudiesPage from "./pages/resources/casestudies";
import AiSupportCaseStudy from "./pages/AiSupportCaseStudy";
import MultiPlatformDataIntegrationCaseStudy from "./pages/MultiPlatformDataIntegrationCaseStudy";
import RagChatbotCaseStudy from "./pages/RagChatbotCaseStudy";
import AiDataExtractionCaseStudy from "./pages/AiDataExtractionCaseStudy";
import AiResumeBuilderCaseStudy from "./pages/AiResumeBuilderCaseStudy";
import ContentSeoPipelineCaseStudy from "./pages/ContentSeoPipelineCaseStudy";
import DocumentProcessingCaseStudy from "./pages/DocumentProcessingCaseStudy";
import EcommerceOrderAutomationCaseStudy from "./pages/EcommerceOrderAutomationCaseStudy";
import SalesPipelineAutomationCaseStudy from "./pages/SalesPipelineAutomationCaseStudy";

// Services
import N8nAutomation from "./pages/services/N8nAutomation";
import AiChatbots from "./pages/services/AiChatbots";
import ZapierMigration from "./pages/services/ZapierMigration";
import NoCodeLowCode from "./pages/services/NoCodeLowCode";
import MarketingAutomation from "./pages/services/MarketingAutomation";

// Solutions
import SaasCompanies from "./pages/solutions/SaasCompanies";
import EcommerceBrands from "./pages/solutions/EcommerceBrands";
import DigitalAgencies from "./pages/solutions/DigitalAgencies";
import FintechCompanies from "./pages/solutions/FintechCompanies";

// Company
import About from "./pages/company/About";
import Team from "./pages/company/Team";
import Partners from "./pages/company/Partners";

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
          <Route path="/services/n8n-automation" element={<N8nAutomation />} />
          <Route path="/services/ai-chatbots" element={<AiChatbots />} />
          <Route path="/services/zapier-migration" element={<ZapierMigration />} />
          <Route path="/services/nocode-lowcode" element={<NoCodeLowCode />} />
          <Route path="/services/marketing-automation" element={<MarketingAutomation />} />

          {/* Solutions Routes */}
          <Route path="/solutions/saas-companies" element={<SaasCompanies />} />
          <Route path="/solutions/ecommerce-brands" element={<EcommerceBrands />} />
          <Route path="/solutions/digital-agencies" element={<DigitalAgencies />} />
          <Route path="/solutions/fintech-companies" element={<FintechCompanies />} />

          {/* Resources Routes */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/:slug" element={<BlogPost />} />
          <Route path="/resources/templates" element={<Templates />} />
          <Route path="/resources/templates/:slug" element={<TemplateDetail />} />
          <Route path="/resources/casestudies" element={<CaseStudiesPage />} />
          <Route path="/resources/migration-guides" element={<MigrationGuides />} />
          <Route path="/resources/roi-calculator" element={<RoiCalculator />} />

          {/* Portfolio Routes */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/ai-support-ticket-routing-n8n" element={<AiSupportCaseStudy />} />
          <Route path="/portfolio/multi-system-data-sync-n8n" element={<MultiPlatformDataIntegrationCaseStudy />} />
          <Route path="/portfolio/rag-powered-chatbot-pipelines" element={<RagChatbotCaseStudy />} />
          <Route path="/portfolio/ai-data-extraction" element={<AiDataExtractionCaseStudy />} />
          <Route path="/portfolio/ai-resume-builder" element={<AiResumeBuilderCaseStudy />} />
          <Route path="/portfolio/content-seo-pipeline" element={<ContentSeoPipelineCaseStudy />} />
          <Route path="/portfolio/document-processing-automation" element={<DocumentProcessingCaseStudy />} />
          <Route path="/portfolio/ecommerce-order-automation" element={<EcommerceOrderAutomationCaseStudy />} />
          <Route path="/portfolio/sales-pipeline-automation" element={<SalesPipelineAutomationCaseStudy />} />

          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/team" element={<Team />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/partners" element={<Partners />} />

          {/* Other Routes */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/admin" element={<Admin />} />

          {/* Legacy redirects for backward compatibility */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:slug" element={<TemplateDetail />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
