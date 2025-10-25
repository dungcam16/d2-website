
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Services
import N8nAutomation from "./pages/services/N8nAutomation";
import AiChatbots from "./pages/services/AiChatbots";
import ZapierMigration from "./pages/services/ZapierMigration";
import NocodeLowcode from "./pages/services/NocodeLowcode";
import MarketingAutomation from "./pages/services/MarketingAutomation";

// Solutions
import SaasCompanies from "./pages/solutions/SaasCompanies";
import EcommerceBrands from "./pages/solutions/EcommerceBrands";
import DigitalAgencies from "./pages/solutions/DigitalAgencies";
import FintechCompanies from "./pages/solutions/FintechCompanies";

// Portfolio
import Portfolio from "./pages/portfolio/Portfolio";
import CaseStudy from "./pages/portfolio/CaseStudy";

// Resources
import Blog from "./pages/resources/Blog";
import Templates from "./pages/resources/Templates";
import MigrationGuides from "./pages/resources/MigrationGuides";
import RoiCalculator from "./pages/resources/RoiCalculator";
import Webinars from "./pages/resources/Webinars";

// Company
import About from "./pages/company/About";
import Team from "./pages/company/Team";
import Contact from "./pages/company/Contact";
import Partners from "./pages/company/Partners";

// Pricing
import Pricing from "./pages/Pricing";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Services */}
            <Route path="/services/n8n-automation" element={<N8nAutomation />} />
            <Route path="/services/ai-chatbots" element={<AiChatbots />} />
            <Route path="/services/zapier-migration" element={<ZapierMigration />} />
            <Route path="/services/nocode-lowcode" element={<NocodeLowcode />} />
            <Route path="/services/marketing-automation" element={<MarketingAutomation />} />

            {/* Solutions */}
            <Route path="/solutions/saas-companies" element={<SaasCompanies />} />
            <Route path="/solutions/ecommerce-brands" element={<EcommerceBrands />} />
            <Route path="/solutions/digital-agencies" element={<DigitalAgencies />} />
            <Route path="/solutions/fintech-companies" element={<FintechCompanies />} />

            {/* Portfolio */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<CaseStudy />} />

            {/* Resources */}
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/templates" element={<Templates />} />
            <Route path="/resources/migration-guides" element={<MigrationGuides />} />
            <Route path="/resources/roi-calculator" element={<RoiCalculator />} />
            <Route path="/resources/webinars" element={<Webinars />} />

            {/* Company */}
            <Route path="/company/about" element={<About />} />
            <Route path="/company/team" element={<Team />} />
            <Route path="/company/contact" element={<Contact />} />
            <Route path="/company/partners" element={<Partners />} />
            
            {/* Pricing */}
            <Route path="/pricing" element={<Pricing />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
