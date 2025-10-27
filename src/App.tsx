import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/company/contact";
import Portfolio from "./pages/resources/portfolio";
import Blog from "./pages/resources/blog";
import BlogPost from "./pages/resources/blog-post";
import PrivacyPolicy from "./pages/legal/privacy-policy";
import TermsOfService from "./pages/legal/terms-of-service";
import NotFound from "./pages/not-found";
import Templates from "./pages/resources/templates";
import TemplateDetail from "./pages/resources/template-detail";
import Admin from "./pages/admin";
import Pricing from "./pages/company/pricing";
import MigrationGuides from "./pages/resources/migration-guides";
import RoiCalculator from "./pages/resources/roi-calculator";
import CaseStudiesPage from "./pages/resources/case-studies";

// Services
import N8nAutomation from "./pages/services/n8n-automation";
import AiChatbots from "./pages/services/ai-chatbots";
import ZapierMigration from "./pages/services/zapier-migration";
import NoCodeLowCode from "./pages/services/nocode-lowcode";
import MarketingAutomation from "./pages/services/marketing-automation";

// Solutions
import SaasCompanies from "./pages/solutions/saas-companies";
import EcommerceBrands from "./pages/solutions/ecommerce-brands";
import DigitalAgencies from "./pages/solutions/digital-agencies";
import FintechCompanies from "./pages/solutions/fintech-companies";

// Company
import About from "./pages/company/about";
import Team from "./pages/company/team";
import Partners from "./pages/company/partners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

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
          <Route path="/portfolio/:slug" element={<Portfolio />} />

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
