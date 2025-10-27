import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Cookie, Settings, Eye, TrendingUp, Shield } from "lucide-react";

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Strictly Necessary Cookies",
      description: "Essential for the website to function. Cannot be disabled.",
      examples: [
        "Authentication and security",
        "Session management",
        "Load balancing"
      ]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization.",
      examples: [
        "Language preferences",
        "Region settings",
        "User interface customization"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      examples: [
        "Google Analytics",
        "Page view tracking",
        "User behavior analysis"
      ]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Marketing Cookies",
      description: "Used to track visitors across websites for advertising purposes.",
      examples: [
        "Retargeting campaigns",
        "Social media integration",
        "Conversion tracking"
      ]
    }
  ];

  const specificCookies = [
    {
      name: "_ga",
      purpose: "Google Analytics - distinguish users",
      duration: "2 years",
      type: "Analytics"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - distinguish users",
      duration: "24 hours",
      type: "Analytics"
    },
    {
      name: "_gat",
      purpose: "Google Analytics - throttle request rate",
      duration: "1 minute",
      type: "Analytics"
    },
    {
      name: "session_id",
      purpose: "Maintain user session",
      duration: "Session",
      type: "Necessary"
    },
    {
      name: "auth_token",
      purpose: "Authentication and security",
      duration: "7 days",
      type: "Necessary"
    },
    {
      name: "lang_preference",
      purpose: "Remember language selection",
      duration: "1 year",
      type: "Functional"
    }
  ];

  return (
    <>
      <SEO
        title="Cookie Policy - How We Use Cookies | D2 Group"
        description="Learn about the cookies used on D2 Group's website, what they do, and how you can manage your cookie preferences."
        keywords="cookie policy, cookies, website tracking, privacy, data collection"
        canonicalUrl="/legal/cookie-policy"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Cookie className="h-5 w-5" />
              <span className="text-sm font-semibold">Cookie Policy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Cookie <span className="text-primary">Policy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This Cookie Policy explains how D2 Group uses cookies and similar technologies to recognize you when you visit our website.
            </p>
            
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">
              What Are <span className="text-primary">Cookies?</span>
            </h2>
            
            <Card className="p-8">
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-muted-foreground mb-4">
                Cookies can be "persistent" or "session" cookies:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Persistent cookies:</strong> Remain on your device until deleted or until they reach their expiration date</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
                Types of <span className="text-primary">Cookies We Use</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We use different types of cookies to enhance your experience on our website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieTypes.map((cookie, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="text-primary mb-4">{cookie.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{cookie.title}</h3>
                  <p className="text-muted-foreground mb-4">{cookie.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Examples:</p>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">→</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specific Cookies Table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">
              Specific <span className="text-primary">Cookies</span> We Use
            </h2>
            
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Duration</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {specificCookies.map((cookie, index) => (
                      <tr key={index} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-mono text-foreground">{cookie.name}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{cookie.duration}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            cookie.type === 'Necessary' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                            cookie.type === 'Functional' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                            'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">
              Third-Party <span className="text-primary">Cookies</span>
            </h2>
            
            <Card className="p-8 mb-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Google Analytics</h3>
              <p className="text-muted-foreground mb-4">
                We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies.
              </p>
              <p className="text-muted-foreground">
                Learn more: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a>
              </p>
            </Card>

            <Card className="p-8 mb-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Social Media Cookies</h3>
              <p className="text-muted-foreground mb-4">
                We use social media buttons and/or plugins that allow you to connect with social networks. These features may collect your IP address and set cookies.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Facebook: <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>LinkedIn: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Twitter: <a href="https://twitter.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a></span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">
              Managing Your <span className="text-primary">Cookie Preferences</span>
            </h2>
            
            <Card className="p-8 mb-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Browser Settings</h3>
              <p className="text-muted-foreground mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookie settings</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Firefox: <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookie settings</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookie settings</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookie settings</a></span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 mb-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Opt-Out Tools</h3>
              <p className="text-muted-foreground mb-4">
                You can opt out of certain third-party cookies using these tools:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opt-out Browser Add-on</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Network Advertising Initiative: <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opt-out Tool</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Digital Advertising Alliance: <a href="http://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opt-out Tool</a></span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Important:</strong> Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly.
              </p>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-heading mb-6 text-white">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <div className="space-y-2 text-white/90">
              <p className="font-semibold">Email: <a href="mailto:privacy@d2group.co" className="underline">privacy@d2group.co</a></p>
              <p className="font-semibold">Address: D2 Group, Vietnam</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
