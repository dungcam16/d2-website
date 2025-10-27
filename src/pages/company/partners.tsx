import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Check, 
  Award,
  Handshake,
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  Shield,
  Globe,
  Star,
  CheckCircle2,
  ExternalLink,
  Workflow,
  Bot,
  Code,
  Database,
  Cloud,
  Sparkles,
  Building2,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Partners() {
  const strategicPartners = [
    {
      name: "n8n",
      logo: "https://n8n.io/logo.svg",
      type: "Official Certified Partner",
      tier: "Gold",
      description: "Official n8n implementation and consulting partner with advanced certification",
      benefits: [
        "Priority technical support",
        "Advanced training & certification",
        "Beta feature access",
        "Co-marketing opportunities",
        "Revenue sharing program"
      ],
      stats: [
        { label: "Projects Delivered", value: "127+" },
        { label: "Certified Experts", value: "4" },
        { label: "Client Success Rate", value: "98%" }
      ],
      caseStudy: "Helped 47 enterprises migrate from Zapier, saving $2.3M annually",
      website: "https://n8n.io",
      color: "from-rose-500 to-pink-500"
    },
    {
      name: "OpenAI",
      logo: null,
      type: "Integration Partner",
      tier: "Platinum",
      description: "Specialized in GPT-4, GPT-4o, and custom AI model integration for business automation",
      benefits: [
        "API expertise & optimization",
        "Custom fine-tuning support",
        "Enterprise implementation",
        "Cost optimization strategies",
        "Best practices consulting"
      ],
      stats: [
        { label: "AI Integrations", value: "85+" },
        { label: "Models Deployed", value: "12" },
        { label: "Avg Cost Savings", value: "45%" }
      ],
      caseStudy: "Built RAG systems processing 10K+ documents daily for Fortune 500 clients",
      website: "https://openai.com",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Anthropic",
      logo: null,
      type: "Integration Partner",
      tier: "Gold",
      description: "Claude AI integration for enterprise automation with focus on security and compliance",
      benefits: [
        "Claude API expertise",
        "Enterprise security compliance",
        "Custom prompt engineering",
        "Large context implementations",
        "Safety-first approach"
      ],
      stats: [
        { label: "Claude Projects", value: "42+" },
        { label: "Enterprise Clients", value: "18" },
        { label: "Uptime SLA", value: "99.9%" }
      ],
      caseStudy: "Implemented Claude for HIPAA-compliant medical automation system",
      website: "https://anthropic.com",
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "Make (Integromat)",
      logo: null,
      type: "Technology Partner",
      tier: "Silver",
      description: "Alternative automation platform for clients requiring visual workflow builders",
      benefits: [
        "Make implementation expertise",
        "Migration from/to other platforms",
        "Custom scenario development",
        "Training & documentation",
        "Ongoing support"
      ],
      stats: [
        { label: "Make Projects", value: "35+" },
        { label: "Scenarios Built", value: "200+" },
        { label: "Client Satisfaction", value: "96%" }
      ],
      caseStudy: "Automated marketing workflows for 23 agencies using Make",
      website: "https://make.com",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Supabase",
      logo: null,
      type: "Infrastructure Partner",
      tier: "Gold",
      description: "Backend and database solutions for automation workflows and custom applications",
      benefits: [
        "Database architecture design",
        "Real-time data synchronization",
        "Authentication integration",
        "Scalable infrastructure",
        "Performance optimization"
      ],
      stats: [
        { label: "Apps Deployed", value: "58+" },
        { label: "Database Uptime", value: "99.95%" },
        { label: "Avg Query Speed", value: "< 50ms" }
      ],
      caseStudy: "Built SaaS platform handling 1M+ API calls daily",
      website: "https://supabase.com",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "AWS",
      logo: null,
      type: "Cloud Partner",
      tier: "Silver",
      description: "Cloud infrastructure for enterprise automation deployments and hosting",
      benefits: [
        "AWS architecture consulting",
        "Cost optimization",
        "Security best practices",
        "Scalable deployments",
        "Managed services"
      ],
      stats: [
        { label: "Deployments", value: "93+" },
        { label: "Cost Savings", value: "40%" },
        { label: "Infrastructure Uptime", value: "99.99%" }
      ],
      caseStudy: "Deployed n8n clusters serving 50+ enterprise clients",
      website: "https://aws.amazon.com",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  const partnerPrograms = [
    {
      icon: Building2,
      title: "Technology Partners",
      description: "Platform and tool integrations for expanded capabilities",
      benefits: [
        "Co-marketing opportunities",
        "Technical collaboration",
        "Revenue sharing (20-30%)",
        "Joint case studies",
        "Beta access to new features"
      ],
      ideal: "SaaS platforms, API providers, tool developers",
      cta: "Apply Now"
    },
    {
      icon: Handshake,
      title: "Referral Partners",
      description: "Agency and consulting partnerships with attractive commissions",
      benefits: [
        "30% referral commission",
        "Recurring revenue share",
        "Co-branded materials",
        "Sales enablement training",
        "Dedicated partner manager"
      ],
      ideal: "Marketing agencies, consultants, web developers",
      cta: "Join Program"
    },
    {
      icon: Users,
      title: "Reseller Partners",
      description: "White-label automation solutions for your clients",
      benefits: [
        "White-label solutions",
        "Flexible pricing tiers",
        "Technical support included",
        "Marketing materials provided",
        "Quarterly business reviews"
      ],
      ideal: "IT service providers, MSPs, system integrators",
      cta: "Become Reseller"
    }
  ];

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Average partners see 40% revenue increase in first year",
      metric: "40%"
    },
    {
      icon: Shield,
      title: "Technical Support",
      description: "Priority access to our engineering team for partner projects",
      metric: "24/7"
    },
    {
      icon: Award,
      title: "Certification Program",
      description: "Comprehensive training and official certification",
      metric: "4 Levels"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to clients in 15+ countries worldwide",
      metric: "15+"
    }
  ];

  const successStories = [
    {
      partner: "Digital Marketing Agency",
      result: "$180K additional revenue in 12 months",
      description: "Referred 12 clients for automation projects",
      growth: "+180%"
    },
    {
      partner: "IT Consulting Firm",
      result: "Became our top reseller partner",
      description: "White-labeled our solutions for 23 enterprise clients",
      growth: "+450%"
    },
    {
      partner: "SaaS Integration Partner",
      result: "Joint product offering launched",
      description: "Co-developed native integration serving 5K+ users",
      growth: "+320%"
    }
  ];

  return (
    <>
      <SEO
        title="Technology Partners - Official n8n Partner | D2 Group"
        description="D2 Group partners with n8n, OpenAI, Anthropic, Make, Supabase, and AWS to deliver enterprise automation solutions. Official certified partner programs available."
        keywords="n8n partner, OpenAI integration partner, automation partnerships, AI partner program, reseller program, referral program"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Award className="w-3 h-3 mr-1" />
              Strategic Partnerships
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Trusted </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technology Partners
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We partner with leading automation and AI platforms to deliver world-class solutions 
              with cutting-edge technology and enterprise-grade support.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Strategic Partners", value: "6" },
                { label: "Joint Projects", value: "127+" },
                { label: "Partner Revenue", value: "$2.3M" },
                { label: "Success Rate", value: "98%" }
              ].map((stat, idx) => (
                <Card key={idx} className="p-4">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Official Partners</Badge>
              <h2 className="text-4xl font-bold mb-4">Strategic Technology Partners</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Certified partnerships with industry-leading platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategicPartners.map((partner, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${partner.color}`} />
                  
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold">{partner.name}</h3>
                          <Badge variant="secondary">{partner.tier}</Badge>
                        </div>
                        <Badge variant="outline" className="mb-2">{partner.type}</Badge>
                        <p className="text-sm text-muted-foreground mt-2">{partner.description}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {partner.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-2 bg-muted/50 rounded">
                          <div className="text-lg font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Benefits */}
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">PARTNERSHIP BENEFITS:</p>
                        <div className="space-y-2">
                          {partner.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Case Study */}
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <p className="text-xs font-semibold mb-2 flex items-center gap-1">
                          <Star className="w-3 h-3 text-primary" />
                          SUCCESS STORY:
                        </p>
                        <p className="text-sm text-muted-foreground">{partner.caseStudy}</p>
                      </div>

                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white" asChild>
                        <a href={partner.website} target="_blank" rel="noopener noreferrer">
                          Visit Partner Website <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Programs */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Join Us</Badge>
              <h2 className="text-4xl font-bold mb-4">Partner Programs</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the partnership model that fits your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnerPrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all flex flex-col">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow flex flex-col">
                      <div className="space-y-3 mb-4">
                        {program.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-4" />

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-muted-foreground mb-1">IDEAL FOR:</p>
                        <p className="text-sm">{program.ideal}</p>
                      </div>

                      <Button className="w-full mt-auto" asChild>
                        <Link to="/contact">
                          {program.cta} <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Partner With D2 Group?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                    <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Success Stories</Badge>
              <h2 className="text-4xl font-bold mb-4">Partner Success Stories</h2>
              <p className="text-xl text-muted-foreground">Real results from our partner ecosystem</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all">
                  <Badge variant="secondary" className="mb-4">{story.partner}</Badge>
                  <div className="text-4xl font-bold text-primary mb-2">{story.growth}</div>
                  <h3 className="text-lg font-bold mb-2">{story.result}</h3>
                  <p className="text-sm text-muted-foreground">{story.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our growing partner ecosystem and unlock new revenue opportunities
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
              {[
                "✅ Fast onboarding (< 1 week)",
                "✅ Dedicated partner manager",
                "✅ Attractive commission structure"
              ].map((item, idx) => (
                <div key={idx} className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Apply for Partnership
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="mailto:partners@d2group.co">
                  Email Partnership Team
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
