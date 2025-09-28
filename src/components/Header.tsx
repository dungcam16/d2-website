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
    { name: 'Blog', href: '/blog' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  const serviceItems = [
    { name: 'Chatbot Đa Nền Tảng', href: '/services/chatbot' },
    { name: 'Giải Pháp Zalo OA', href: '/services/zalo' },
    { name: 'N8N Enterprise Automation', href: '/services/automation' },
    { name: 'Content Performance', href: '/services/content' },
    { name: 'SEO Boost', href: '/services/seo' },
    { name: 'Website Development', href: '/services/website' },
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
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth relative group">
                Dịch vụ
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border-border z-50">
                {serviceItems.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <a
                      href={service.href}
                      className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
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
              Tư vấn miễn phí
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
                <div className="text-sm font-medium text-muted-foreground mb-2">Dịch vụ</div>
                {serviceItems.map((service) => (
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