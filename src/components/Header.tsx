import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import logoD2Group from "@/assets/logo_d2_group.png";
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
    { name: "Templates", href: "/templates" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const servicesByCategory = {
    automation: {
      title: "Business Automation",
      description: "Solutions to optimize processes and boost productivity",
      services: [
        {
          name: "N8N Workflow Automation",
          href: "/services/automation",
          description: "Automate business processes with N8N",
        },
        {
          name: "Business Process Automation",
          href: "/services/business-process",
          description: "Comprehensive process optimization",
        },
        {
          name: "AI Integration",
          href: "/services/ai-integration",
          description: "Integrate AI into your business workflows",
        },
      ],
    },
    growth: {
      title: "Customer Growth",
      description: "Marketing and customer conversion strategies",
      services: [
        { name: "Content Marketing", href: "/services/content", description: "Quality content to increase traffic" },
        { name: "Technical SEO", href: "/services/seo", description: "In-depth SEO optimization" },
        { name: "Chatbot & Conversational AI", href: "/services/chatbot", description: "24/7 intelligent chatbot" },
        { name: "Zalo OA Marketing", href: "/services/zalo", description: "Marketing via Zalo OA" },
      ],
    },
    platform: {
      title: "Website Platform",
      description: "Modern websites ready for automation",
      services: [
        {
          name: "Automation-Ready Website",
          href: "/services/website",
          description: "Website with automation integration",
        },
      ],
    },
  };

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
            <img src={logoD2Group} alt="D2 Group Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold font-heading text-foreground">D2 GROUP MARKETING</span>
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

            {/* Services Dropdown - Mega Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth relative group">
                {t('nav.services')}
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[700px] bg-card border-border p-6 z-50">
                <div className="grid grid-cols-3 gap-6">
                  {/* Automation Column */}
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">{servicesByCategory.automation.title}</div>
                    <p className="text-xs text-muted-foreground mb-3">{servicesByCategory.automation.description}</p>
                    <div className="space-y-1">
                      {servicesByCategory.automation.services.map((service) => (
                        <DropdownMenuItem key={service.href} asChild>
                          <a href={service.href} className="cursor-pointer block py-2 px-2 rounded hover:bg-muted">
                            <div className="font-medium text-sm">{service.name}</div>
                            <div className="text-xs text-muted-foreground">{service.description}</div>
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>

                  {/* Growth Column */}
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">{servicesByCategory.growth.title}</div>
                    <p className="text-xs text-muted-foreground mb-3">{servicesByCategory.growth.description}</p>
                    <div className="space-y-1">
                      {servicesByCategory.growth.services.map((service) => (
                        <DropdownMenuItem key={service.href} asChild>
                          <a href={service.href} className="cursor-pointer block py-2 px-2 rounded hover:bg-muted">
                            <div className="font-medium text-sm">{service.name}</div>
                            <div className="text-xs text-muted-foreground">{service.description}</div>
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>

                  {/* Platform Column */}
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">{servicesByCategory.platform.title}</div>
                    <p className="text-xs text-muted-foreground mb-3">{servicesByCategory.platform.description}</p>
                    <div className="space-y-1">
                      {servicesByCategory.platform.services.map((service) => (
                        <DropdownMenuItem key={service.href} asChild>
                          <a href={service.href} className="cursor-pointer block py-2 px-2 rounded hover:bg-muted">
                            <div className="font-medium text-sm">{service.name}</div>
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

            {/* Templates */}
            <a href="/templates" className="text-foreground hover:text-primary transition-smooth relative group">
              Templates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Contact */}
            <a href="/contact" className="text-foreground hover:text-primary transition-smooth relative group">
              {t('nav.contact')}
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

              {/* Mobile Services Menu */}
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  🎯 {servicesByCategory.automation.title}
                </div>
                {servicesByCategory.automation.services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-foreground hover:text-primary transition-smooth py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium">{service.name}</div>
                    <div className="text-xs text-muted-foreground">{service.description}</div>
                  </a>
                ))}

                <div className="text-xs font-semibold text-primary uppercase tracking-wider mt-4 mb-2">
                  💼 {servicesByCategory.growth.title}
                </div>
                {servicesByCategory.growth.services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-foreground hover:text-primary transition-smooth py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium">{service.name}</div>
                    <div className="text-xs text-muted-foreground">{service.description}</div>
                  </a>
                ))}

                <div className="text-xs font-semibold text-primary uppercase tracking-wider mt-4 mb-2">
                  🌐 {servicesByCategory.platform.title}
                </div>
                {servicesByCategory.platform.services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-foreground hover:text-primary transition-smooth py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium">{service.name}</div>
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
