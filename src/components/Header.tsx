import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoD2Group from '@/assets/logo_d2_group.png';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Hồ sơ năng lực', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  const automationServices = [
    { name: 'N8N Workflow Development', href: '/services/n8n-workflow' },
    { name: 'Business Process Automation', href: '/services/business-process' },
    { name: 'AI Integration & Optimization', href: '/services/ai-integration' },
  ];

  const digitalServices = [
    { name: 'Chatbot & Conversational AI', href: '/services/chatbot' },
    { name: 'Zalo OA Management', href: '/services/zalo' },
    { name: 'Content Performance Marketing', href: '/services/content' },
    { name: 'Technical SEO Optimization', href: '/services/seo' },
    { name: 'Automation-Ready Website', href: '/services/website' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-elevation' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoD2Group} 
              alt="D2 Group Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold font-heading text-foreground">
              D2 GROUP MARKETING
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Trang chủ */}
            <a
              href="/"
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Trang chủ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Hồ sơ năng lực */}
            <a
              href="/portfolio"
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Hồ sơ năng lực
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth relative group">
                Dịch vụ
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-card border-border z-50">
                <div className="px-4 py-2">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">🎯 Automation Services</div>
                  {automationServices.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <a
                        href={service.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors rounded"
                      >
                        {service.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
                <div className="border-t border-border my-2"></div>
                <div className="px-4 py-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">💼 Digital Services</div>
                  {digitalServices.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <a
                        href={service.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors rounded"
                      >
                        {service.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Blog */}
            <a
              href="/blog"
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Contact */}
            <a
              href="/contact"
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Liên hệ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="shadow-glow" onClick={() => window.location.href = '/contact'}>
              Tư vấn triển khai
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
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">🎯 Automation Services</div>
                {automationServices.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-foreground hover:text-primary transition-smooth py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
                
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2">💼 Digital Services</div>
                {digitalServices.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-foreground hover:text-primary transition-smooth py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              
              <Button variant="default" className="w-full shadow-glow mt-4" onClick={() => window.location.href = '/contact'}>
                Tư vấn miễn phí
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;