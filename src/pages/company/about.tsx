import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  ArrowRight,
  Shield,
  Zap,
  Heart,
  TrendingUp,
  CheckCircle2,
  Star,
  Clock,
  Building2,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  Phone,
  Code,
  Sparkles
} from "lucide-react";

import teamNguyenDung from "@/assets/team-nguyen-dung.jpg";
import teamDanhDuyen from "@/assets/team-danh-duyen.png";
import teamTranMinh from "@/assets/team-tran-minh.jpg";
import teamLePhuong from "@/assets/team-le-phuong.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Client-First Approach",
      description: "Your success is our success. We measure our achievements by the ROI we deliver to your business, not just by lines of code written.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "ISO 27001 & SOC 2 certified processes. Your data security and privacy are non-negotiable priorities in everything we build.",
    },
    {
      icon: Zap,
      title: "Innovation-Driven",
      description: "We stay at the cutting edge of automation technology, from n8n to GPT-4, ensuring you benefit from the latest advancements.",
    },
    {
      icon: Heart,
      title: "Transparent Communication",
      description: "No jargon, no surprises. We provide clear updates, honest timelines, and straightforward pricing throughout your project.",
    },
  ];

  const team = [
    {
      name: "Nguyen Dung",
      role: "Founder & CEO",
      avatar: teamNguyenDung,
      bio: "10+ years in automation and AI development. Former tech lead at Fortune 500 companies.",
      linkedin: "#",
      expertise: ["Strategy", "AI/ML", "Enterprise Architecture"]
    },
    {
      name: "Danh Duyen",
      role: "Head Marketing of Automation",
      avatar: teamDanhDuyen,
      bio: "Marketing automation expert with 500+ workflows built. Specializes in complex integrations and growth strategies.",
      linkedin: "#",
      expertise: ["Marketing Automation", "Growth Strategy", "Campaign Design"]
    },
    {
      name: "Tran Minh",
      role: "Lead AI Engineer",
      avatar: teamTranMinh,
      bio: "AI specialist focused on RAG systems and LLM integration for business applications.",
      linkedin: "#",
      expertise: ["GPT-4", "RAG Systems", "NLP"]
    },
    {
      name: "Le Phuong",
      role: "Client Success Manager",
      avatar: teamLePhuong,
      bio: "Ensures every client achieves measurable ROI. 98% client satisfaction rate.",
      linkedin: "#",
      expertise: ["Project Management", "Client Relations", "Training"]
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Founded",
      description: "Started as a 2-person team focused on n8n automation consulting"
    },
    {
      year: "2021",
      title: "First Enterprise Client",
      description: "Landed first Fortune 500 client, scaling to 10+ team members"
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Expanded into AI/LLM integration with GPT-3 and custom models"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Serving clients across US, UK, EU, and APAC regions"
    },
    {
      year: "2024",
      title: "ISO Certification",
      description: "Achieved ISO 27001 and SOC 2 Type II certifications"
    },
    {
      year: "2025",
      title: "127+ Projects",
      description: "Trusted by 85+ companies with 98% client satisfaction"
    }
  ];

  const stats = [
    { 
      icon: Users, 
      value: "85+", 
      label: "Active Clients",
      description: "Global enterprises trusting us"
    },
    { 
      icon: Award, 
      value: "127+", 
      label: "Projects Delivered",
      description: "Since 2020"
    },
    { 
      icon: Clock, 
      value: "40+", 
      label: "Hours Saved",
      description: "Per client weekly (avg)"
    },
    { 
      icon: TrendingUp, 
      value: "98%", 
      label: "Client Satisfaction",
      description: "Based on project reviews"
    },
  ];

  const certifications = [
    { name: "ISO 27001 Certified", icon: Shield },
    { name: "SOC 2 Type II", icon: Shield },
    { name: "GDPR Compliant", icon: Shield },
    { name: "n8n Official Partner", icon: Zap }
  ];

  const workingWith = [
    "E-commerce & Retail companies",
    "SaaS & Technology startups",
    "Financial Services firms",
    "Marketing & Creative agencies",
    "Healthcare providers (HIPAA)",
    "Real Estate companies"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - Enterprise Automation Agency | D2 Group"
        description="Meet the team behind 127+ successful automation projects. ISO 27001 certified, serving 85+ clients globally. Expert n8n developers, AI integration specialists, and automation consultants."
        keywords="about d2 group, automation agency, ai development team, n8n experts, enterprise automation company"
        canonicalUrl="/company/about"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-3 h-3 mr-1" />
              Trusted by 85+ Companies Worldwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="text-primary">D2 Group</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're an enterprise automation agency specializing in n8n workflows, AI integration, 
              and custom SaaS development. <strong className="text-foreground">ISO 27001 & SOC 2 certified.</strong>
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all">
                    <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm font-medium">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h2 className="text-4xl font-bold mb-6">
                From 2-Person Startup to <span className="text-primary">Global Automation Partner</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Founded in 2020, D2 Group started with a simple mission: make enterprise-grade automation 
                  accessible to businesses of all sizes. What began as two developers building n8n workflows 
                  has grown into a specialized team serving Fortune 500 companies and fast-growing startups worldwide.
                </p>
                <p className="leading-relaxed">
                  Today, we're proud to be <strong className="text-foreground">ISO 27001 and SOC 2 certified</strong>, 
                  trusted by 85+ clients across 15+ countries, and recognized as an official n8n partner. 
                  Our team has delivered 127+ successful projects with an average ROI of 400% in the first year.
                </p>
                <p className="leading-relaxed">
                  We don't just build automations—we become strategic partners in your digital transformation journey.
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <Button asChild>
                  <Link to="/company/contact">
                    Work With Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Global Presence
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Headquarters</div>
                    <div className="text-muted-foreground">Ho Chi Minh City, Vietnam</div>
                  </div>
                  <div>
                    <div className="font-semibold">Time Zones</div>
                    <div className="text-muted-foreground">US, EU, APAC coverage</div>
                  </div>
                  <div>
                    <div className="font-semibold">Countries Served</div>
                    <div className="text-muted-foreground">15+ worldwide</div>
                  </div>
                  <div>
                    <div className="font-semibold">Remote Team</div>
                    <div className="text-muted-foreground">100% distributed</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Certifications
                </h3>
                <div className="space-y-2">
                  {certifications.map((cert, idx) => {
                    const IconComponent = cert.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="text-sm">{cert.name}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Core principles that guide every project, every client relationship, and every line of code we write
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all hover:border-primary">
                  <CardContent className="p-6">
                    <div className="mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h2 className="text-4xl font-bold mb-4">Meet the Experts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse team of automation specialists, AI engineers, and project managers 
              committed to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <Linkedin className="w-3 h-3" />
                    Connect on LinkedIn
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Want to Join Our Team?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We're always looking for talented automation engineers and AI specialists
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:careers@d2group.co">
                  <Mail className="w-4 h-4 mr-2" />
                  View Open Positions
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold mb-4">Growth Timeline</h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-grow hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="mb-4">Industries We Serve</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Trusted Across <span className="text-primary">Multiple Industries</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                From fast-growing startups to Fortune 500 enterprises, we've delivered 
                automation solutions across diverse sectors.
              </p>

              <ul className="space-y-3">
                {workingWith.map((industry, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-6">
                <Link to="/solutions/digital-agencies">
                  View Industry Solutions <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <Card className="p-8">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Why Companies Choose Us</h3>
              <div className="space-y-4">
                {[
                  { title: "Fast Delivery", desc: "Average project: 4-6 weeks" },
                  { title: "Transparent Pricing", desc: "No hidden fees, clear quotes" },
                  { title: "Proven ROI", desc: "Average 400% ROI in year 1" },
                  { title: "24/7 Support", desc: "Priority support for all clients" },
                  { title: "Security First", desc: "ISO 27001 & SOC 2 certified" },
                  { title: "Expert Team", desc: "10+ years combined experience" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 85+ companies that trust us with their automation and AI projects
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Phone, text: "+84 909 099 421" },
              { icon: Mail, text: "info@d2group.co" },
              { icon: MapPin, text: "Ho Chi Minh City, Vietnam" }
            ].map((contact, idx) => {
              const IconComponent = contact.icon;
              return (
                <div key={idx} className="flex items-center justify-center gap-2 bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm">{contact.text}</span>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/company/contact">
                Schedule Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
