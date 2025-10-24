"use client";
import React from "react";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  const services = [
    "n8n Automation",
    "AI Agents & Chatbots",
    "Zapier Migration",
    "No-Code/Low-Code Dev",
    "Marketing Automation",
  ];

  const solutions = [
    "For SaaS Companies",
    "For E-commerce Brands",
    "For Digital Agencies",
    "For FinTech Companies",
  ];

  const resources = [
    "Blog & Insights",
    "n8n Templates",
    "Migration Guides",
    "ROI Calculator",
    "Webinars",
  ];

  const company = ["About Us", "Our Team", "Partners", "Contact"];

  const legal = [
    "Privacy Policy",
    "Terms of Service",
    "GDPR Compliance",
    "Cookie Policy",
  ];
  
  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Github, href: "#", name: "GitHub" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  const renderLinks = (links: string[]) => (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
            {link}
          </a>
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
                    <button className="text-white font-semibold">EN</button>
                    <span className="text-gray-600 mx-1">|</span>
                    <button className="text-gray-400 hover:text-white">VN</button>
                </div>
            </div>
            
            <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md order-1 lg:order-2">
                <label htmlFor="email-newsletter" className="sr-only">Email for newsletter</label>
                <input 
                    id="email-newsletter"
                    type="email" 
                    placeholder="Subscribe to our newsletter" 
                    className="bg-gray-800 border border--700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors flex items-center justify-center w-full sm:w-auto shrink-0">
                    Subscribe
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
