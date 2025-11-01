"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      return;
    }

    setIsSubmittingNewsletter(true);

    try {
      const { data, error } = await supabase.functions.invoke('newsletter-subscribe', {
        body: {
          email: newsletterEmail,
          website: honeypot, // Honeypot field
        },
      });

      if (error) throw error;

      if (data?.success) {
        setNewsletterEmail("");
        setHoneypot("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };
  const services = [
    { name: "n8n Automation", href: "/services/n8n-automation" },
    { name: "AI Agents & Chatbots", href: "/services/ai-chatbots" },
    { name: "Zapier Migration", href: "/services/zapier-migration" },
    { name: "No-Code/Low-Code", href: "/services/nocode-lowcode" },
    { name: "Marketing Automation", href: "/services/marketing-automation" },
  ];

  const solutions = [
    { name: "For SaaS Companies", href: "/solutions/saas-companies" },
    { name: "For E-commerce Brands", href: "/solutions/ecommerce-brands" },
    { name: "For Digital Agencies", href: "/solutions/digital-agencies" },
    { name: "For FinTech Companies", href: "/solutions/fintech-companies" },
  ];

  const resources = [
    { name: "Blog & Insights", href: "/resources/blog" },
    { name: "n8n Templates", href: "/resources/templates" },
    { name: "Case Studies", href: "/resources/casestudies" },
    { name: "Migration Guides", href: "/resources/migration-guides" },
    { name: "ROI Calculator", href: "/resources/roi-calculator" },
  ];

  const company = [
    { name: "About Us", href: "/company/about" },
    { name: "Team", href: "/company/team" },
    { name: "Partners", href: "/company/partners" },
    { name: "Contact", href: "/company/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms-of-service" },
    { name: "GDPR Compliance", href: "/legal/gdpr-compliance" },
    { name: "Cookie Policy", href: "/legal/cookie-policy" },
  ];
  
  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Github, href: "#", name: "GitHub" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  const renderLinks = (links: { name: string; href: string }[]) => (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Services</h3>
            {renderLinks(services)}
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Solutions</h3>
            {renderLinks(solutions)}
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Resources</h3>
            {renderLinks(resources)}
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Company</h3>
            {renderLinks(company)}
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Legal</h3>
            {renderLinks(legal)}
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            <div className="flex items-center gap-6 order-2 lg:order-1">
                <div className="flex space-x-4">
                    {socialLinks.map(social => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <span className="sr-only">{social.name}</span>
                            <social.icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
                <div className="flex items-center text-sm">
                    <button 
                      onClick={() => setLanguage('en')}
                      className={`font-semibold transition-colors ${language === 'en' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      EN
                    </button>
                    <span className="text-gray-600 mx-1">|</span>
                    <button 
                      onClick={() => setLanguage('vi')}
                      className={`font-semibold transition-colors ${language === 'vi' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      VN
                    </button>
                </div>
            </div>
            
            <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md order-1 lg:order-2" onSubmit={handleNewsletterSubmit}>
                <label htmlFor="email-newsletter" className="sr-only">Email for newsletter</label>
                <input 
                    id="email-newsletter"
                    type="email" 
                    placeholder="Subscribe to our newsletter" 
                    className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                />
                {/* Honeypot field - hidden from users */}
                <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                />
                <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors flex items-center justify-center w-full sm:w-auto shrink-0 disabled:opacity-50"
                    disabled={isSubmittingNewsletter}
                >
                    {isSubmittingNewsletter ? "Subscribing..." : "Subscribe"}
                </button>
            </form>
          </div>
            
          <div className="mt-8 text-center text-sm text-gray-500">
              <p>&copy; 2025 D2 Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;