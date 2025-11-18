import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";
import { SocialProof } from "@/components/conversion/SocialProof";
import { LiveChat } from "@/components/conversion/LiveChat";
import Home from "./pages/home";

// Lazy load non-critical pages
const Contact = lazy(() => import("./pages/company/contact"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const Blog = lazy(() => import("./pages/resources/blog"));
const BlogPost = lazy(() => import("./pages/resources/blog-post"));
const PrivacyPolicy = lazy(() => import("./pages/legal/privacy-policy"));
const TermsOfService = lazy(() => import("./pages/legal/terms-of-service"));
const GDPRCompliance = lazy(() => import("./pages/legal/gdpr-compliance"));
const CookiePolicy = lazy(() => import("./pages/legal/cookie-policy"));
const NotFound = lazy(() => import("./pages/not-found"));
const Templates = lazy(() => import("./pages/resources/templates"));
const TemplateDetail = lazy(() => import("./pages/resources/template-detail"));
const Admin = lazy(() => import("./pages/admin"));
const Pricing = lazy(() => import("./pages/pricing"));
const MigrationGuides = lazy(() => import("./pages/resources/migration-guides"));
const MigrationGuideDetail = lazy(() => import("./pages/resources/migration-guide-detail"));
const RoiCalculator = lazy(() => import("./pages/resources/roi-calculator"));
const CaseStudiesPage = lazy(() => import("./pages/resources/case-studies"));
const CaseStudyDetail = lazy(() => import("./pages/resources/case-study-detail"));
const LeadMagnets = lazy(() => import("./pages/resources/lead-magnets"));

// Services - lazy loaded
const N8nAutomation = lazy(() => import("./pages/services/n8n-automation"));
const AiChatbots = lazy(() => import("./pages/services/ai-chatbots"));
const ZapierMigration = lazy(() => import("./pages/services/zapier-migration"));
const NoCodeLowCode = lazy(() => import("./pages/services/nocode-lowcode"));
const MarketingAutomation = lazy(() => import("./pages/services/marketing-automation"));

// Solutions - lazy loaded
const SaasCompanies = lazy(() => import("./pages/solutions/saas-companies"));
const EcommerceBrands = lazy(() => import("./pages/solutions/ecommerce-brands"));
const DigitalAgencies = lazy(() => import("./pages/solutions/digital-agencies"));
const FintechCompanies = lazy(() => import("./pages/solutions/fintech-companies"));

// Company - lazy loaded
const About = lazy(() => import("./pages/company/about"));
const Team = lazy(() => import("./pages/company/team"));
const Partners = lazy(() => import("./pages/company/partners"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Optimized QueryClient with retry logic
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <SocialProof />
          <LiveChat />
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/resources/casestudies/:slug" element={<CaseStudyDetail />} />
              <Route path="/resources/migration-guides" element={<MigrationGuides />} />
              <Route path="/resources/migration-guides/:slug" element={<MigrationGuideDetail />} />
              <Route path="/resources/roi-calculator" element={<RoiCalculator />} />
              <Route path="/resources/lead-magnets" element={<LeadMagnets />} />

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
              
              {/* Legal Routes */}
              <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms-of-service" element={<TermsOfService />} />
              <Route path="/legal/gdpr-compliance" element={<GDPRCompliance />} />
              <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
              
              {/* Legacy legal routes for backward compatibility */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              
              <Route path="/admin" element={<Admin />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
