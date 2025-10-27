"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import logoD2Group from "@/assets/logo_d2_group_new.png";
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

    const services = [
    {
      name: "n8n Automation",
      href: "/services/n8n-automation",
      description: "Enterprise workflows with unlimited executions",
    },
    {
      name: "AI Agents & Chatbots",
      href: "/services/ai-chatbots",
      description: "GPT-4 powered automation for support & sales",
    },
    {
      name: "Zapier Migration",
      href: "/services/zapier-migration",
      description: "Switch from Zapier and save 90% on costs",
    },
    {
      name: "No-Code/Low-Code Development",
      href: "/services/nocode-lowcode",
      description: "Build apps with Webflow, Bubble, Retool",
    },
    {
      name: "Digital Marketing Automation",
      href: "/services/marketing-automation",
      description: "Connect your entire marketing tech stack",
    },
  ];

  const solutions = [
    {
      name: "For SaaS Companies",
      href: "/solutions/saas-companies",
      description: "Scale without scaling headcount",
    },
    {
      name: "For E-commerce Brands",
      href: "/solutions/ecommerce-brands",
      description: "Automate orders, support & marketing",
    },
    {
      name: "For Digital Agencies",
      href: "/solutions/digital-agencies",
      description: "Multi-client workflows & reporting",
    },
    {
      name: "For FinTech Companies",
      href: "/solutions/fintech-companies",
      description: "Secure, compliant financial automation",
    },
  ];

  const resources = [
    { name: "Blog & Insights", href: "/resources/blog" },
    { name: "n8n Templates (Free)", href: "/resources/templates" },
    { name: "Case Studies", href: "/resources/casestudies" },
    { name: "Migration Guides", href: "/resources/migration-guides" },
    { name: "ROI Calculator", href: "/resources/roi-calculator" },
  ];

  const company = [
    { name: "About Us", href: "/company/about" },
    { name: "Team", href: "/company/team" },
    { name: "Contact", href: "/company/contact" },
    { name: "Partners", href: "/company/partners" },
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
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logoD2Group} alt="D2 Group Logo" width="40" height="40" className="h-10 w-10" />
            <span className="text-xl font-bold font-heading text-foreground">D2 Group</span>
            <span className="text-xs text-muted-foreground font-normal">AI Automation Agency</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth relative group">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[300px] bg-card border-border p-4 z-50">
                <div className="space-y-2">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <a href={service.href} className="cursor-pointer block py-2 px-3 rounded hover:bg-muted">
                        <div className="font-medium text-sm mb-0.5">{service.name}</div>
                        <div className="text-xs text-muted-foreground">{service.description}</div>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth relative group">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[300px] bg-card border-border p-4 z-50">
                <div className="space-y-2">
                  {solutions.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <a href={item.href} className="cursor-pointer block py-2 px-3 rounded hover:bg-muted">
                        <div className="font-medium text-sm mb-0.5">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/portfolio" className="text-foreground hover:text-primary transition-smooth relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth relative group">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] bg-card border-border p-2 z-50">
                {resources.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <a href={item.href} className="cursor-pointer block py-2 px-3 rounded hover:bg-muted text-sm">
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/company/contact" className="text-foreground hover:text-primary transition-smooth relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth relative group">
                Company
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] bg-card border-border p-2 z-50">
                {company.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <a href={item.href} className="cursor-pointer block py-2 px-3 rounded hover:bg-muted text-sm">
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
                <DropdownMenuItem onClick={() => setLanguage("vi")} className="cursor-pointer">
                  🇻🇳 Tiếng Việt
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="default" className="shadow-glow" onClick={() => (window.location.href = "/contact")}>
              Book Free Audit
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
              
              {/* Mobile Services */}
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Services</div>
                {services.map((service) => (
                  <a key={service.name} href={service.href} className="block text-foreground hover:text-primary transition-smooth py-2 pl-4" onClick={() => setIsMenuOpen(false)}>
                    <div className="font-medium text-sm">{service.name}</div>
                    <div className="text-xs text-muted-foreground">{service.description}</div>
                  </a>
                ))}
              </div>

              {/* Mobile Solutions */}
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Solutions</div>
                {solutions.map((item) => (
                  <a key={item.name} href={item.href} className="block text-foreground hover:text-primary transition-smooth py-2 pl-4" onClick={() => setIsMenuOpen(false)}>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </a>
                ))}
              </div>

              <a href="/portfolio" className="block text-foreground hover:text-primary transition-smooth py-2" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </a>

              {/* Mobile Resources */}
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Resources</div>
                {resources.map((item) => (
                  <a key={item.name} href={item.href} className="block text-foreground hover:text-primary transition-smooth py-2 pl-4" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                ))}
              </div>

              <a href="/company/contact" className="block text-foreground hover:text-primary transition-smooth py-2" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </a>

              {/* Mobile Company */}
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Company</div>
                {company.map((item) => (
                  <a key={item.name} href={item.href} className="block text-foreground hover:text-primary transition-smooth py-2 pl-4" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
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
                    <DropdownMenuItem
                      onClick={() => {
                        setLanguage("vi");
                        setIsMenuOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      🇻🇳 Tiếng Việt
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setLanguage("en");
                        setIsMenuOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      🇬🇧 English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  variant="default"
                  className="w-full shadow-glow"
                  onClick={() => {
                    window.location.href = "/contact";
                    setIsMenuOpen(false);
                  }}
                >
                  Book Free Audit
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
