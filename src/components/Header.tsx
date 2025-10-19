import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import logoD2Group from "@/assets/logo_d2_group_optimized.webp";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.portfolio'), href: "/portfolio" },
    { name: t('nav.blog'), href: "/blog" },
  ];

  const techAutomationServices = [
    {
      name: "n8n Workflow Automation",
      href: "/services/workflow-automation",
      description: "Complex multi-step workflows",
    },
    {
      name: "AI & RAG Systems",
      href: "/services/ai-rag",
      description: "Custom LLM integrations",
    },
    {
      name: "SaaS Product Development",
      href: "/services/saas-product",
      description: "Full-stack applications",
    },
    {
      name: "API Development",
      href: "/services/api-integration",
      description: "RESTful APIs & webhooks",
    },
    {
      name: "Business Process Automation",
      href: "/services/business-process",
      description: "AS-IS/TO-BE process analysis",
    },
  ];

  const digitalMarketingServices = [
    {
      name: "AI Chatbot",
      href: "/services/chatbot",
      description: "Intelligent chatbots",
    },
    {
      name: "Zalo OA Marketing",
      href: "/services/zalo",
      description: "Zalo business solutions",
    },
    {
      name: "SEO Services",
      href: "/services/seo",
      description: "Search engine optimization",
    },
    {
      name: "Content Marketing",
      href: "/services/content",
      description: "Content creation & strategy",
    },
    {
      name: "Website Development",
      href: "/services/website",
      description: "Professional websites",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-elevation" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoD2Group} alt="D2 Group Logo" width="40" height="40" className="h-10 w-10" />
            <span className="text-xl font-bold font-heading text-foreground">D2 Group</span>
            <span className="text-xs text-muted-foreground font-normal">AI Automation Agency</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <a href="/" className="text-foreground hover:text-primary transition-smooth relative group">
              {t('nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Portfolio */}
            <a href="/portfolio" className="text-foreground hover:text-primary transition-smooth relative group">
              {t('nav.portfolio')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Services Dropdown - 2 Columns */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth relative group">
                {t('nav.services')}
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[700px] bg-card border-border p-6 z-50">
                <div className="grid grid-cols-2 gap-6">
                  {/* Column 1: Tech & Automation */}
                  <div>
                    <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">Tech & Automation</div>
                    <div className="space-y-2">
                      {techAutomationServices.map((service) => (
                        <DropdownMenuItem key={service.href} asChild>
                          <a href={service.href} className="cursor-pointer block py-2 px-3 rounded hover:bg-muted">
                            <div className="font-medium text-sm mb-0.5">{service.name}</div>
                            <div className="text-xs text-muted-foreground">{service.description}</div>
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                  
                  {/* Column 2: Digital Marketing */}
                  <div>
                    <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">Digital Marketing</div>
                    <div className="space-y-2">
                      {digitalMarketingServices.map((service) => (
                        <DropdownMenuItem key={service.href} asChild>
                          <a href={service.href} className="cursor-pointer block py-2 px-3 rounded hover:bg-muted">
                            <div className="font-medium text-sm mb-0.5">{service.name}</div>
                            <div className="text-xs text-muted-foreground">{service.description}</div>
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Blog */}
            <a href="/blog" className="text-foreground hover:text-primary transition-smooth relative group">
              {t('nav.blog')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('vi')} className="cursor-pointer">
                  🇻🇳 Tiếng Việt
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="default" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-t border-border animate-slide-up z-50">
            <nav className="px-4 py-6 space-y-4">
              {mainNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Services Menu - 2 Columns */}
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  Tech & Automation
                </div>
                {techAutomationServices.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-foreground hover:text-primary transition-smooth py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium text-sm">{service.name}</div>
                    <div className="text-xs text-muted-foreground">{service.description}</div>
                  </a>
                ))}

                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 mt-4">
                  Digital Marketing
                </div>
                {digitalMarketingServices.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-foreground hover:text-primary transition-smooth py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium text-sm">{service.name}</div>
                    <div className="text-xs text-muted-foreground">{service.description}</div>
                  </a>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-border mt-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full gap-2">
                      <Globe className="h-4 w-4" />
                      <span className="uppercase">{language}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => { setLanguage('vi'); setIsMenuOpen(false); }} className="cursor-pointer">
                      🇻🇳 Tiếng Việt
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setLanguage('en'); setIsMenuOpen(false); }} className="cursor-pointer">
                      🇬🇧 English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  variant="default"
                  className="w-full shadow-glow"
                  onClick={() => (window.location.href = "/contact")}
                >
                  {t('nav.contact')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
