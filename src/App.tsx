import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ZaloPopup } from "@/components/ZaloPopup";
import Index from "./pages/Index";
import ChatbotService from "./pages/ChatbotService";
import ZaloService from "./pages/ZaloService";
import AutomationService from "./pages/AutomationService";
import ContentService from "./pages/ContentService";
import SeoService from "./pages/SeoService";
import WebsiteService from "./pages/WebsiteService";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ZaloPopup />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/chatbot" element={<ChatbotService />} />
          <Route path="/services/zalo" element={<ZaloService />} />
          <Route path="/services/automation" element={<AutomationService />} />
          <Route path="/services/content" element={<ContentService />} />
          <Route path="/services/seo" element={<SeoService />} />
          <Route path="/services/website" element={<WebsiteService />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
