import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Linkedin, 
  Bot, 
  Users, 
  Sparkles, 
  CheckCircle2,
  Zap,
  Mail,
  MessageSquare,
  BarChart3,
  Code,
  FileText,
  Headphones,
  PenTool,
  Globe,
  Shield,
  Clock,
  TrendingUp,
  Workflow,
  Brain,
  Target,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Team() {
  const humanLeadership = [
    {
      name: "Nguyen Dung",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      bio: "Strategic oversight, client relationships, and company vision",
      responsibilities: ["Strategy & Vision", "Client Partnerships", "Team Leadership"],
      linkedin: "#",
      type: "human"
    },
    {
      name: "Danh Duyen",
      role: "Head Marketing of Automation",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      bio: "Marketing automation strategy, growth initiatives, and market positioning",
      responsibilities: ["Marketing Automation", "Growth Strategy", "Campaign Design"],
      linkedin: "#",
      type: "human"
    },
    {
      name: "Tran Minh",
      role: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      bio: "Technical architecture, AI systems, and innovation",
      responsibilities: ["Tech Architecture", "AI Development", "Quality Assurance"],
      linkedin: "#",
      type: "human"
    },
    {
      name: "Le Phuong",
      role: "Head of Operations",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      bio: "Process optimization, client success, and delivery oversight",
      responsibilities: ["Operations", "Client Success", "Process Design"],
      linkedin: "#",
      type: "human"
    }
  ];

  const aiAgents = [
    {
      name: "Content AI Agent",
      icon: PenTool,
      role: "Content Creation & SEO",
      description: "Generates blog posts, case studies, and marketing content. Optimizes for SEO automatically.",
      capabilities: ["Blog Writing", "SEO Optimization", "Social Media Posts", "Email Campaigns"],
      supervizedBy: "Sarah Johnson",
      efficiency: "10x faster than manual",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Research AI Agent",
      icon: Brain,
      role: "Market Research & Analysis",
      description: "Analyzes market trends, competitor intelligence, and industry insights for strategic decisions.",
      capabilities: ["Market Analysis", "Competitor Research", "Trend Tracking", "Data Reports"],
      supervizedBy: "David Chen",
      efficiency: "24/7 monitoring",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Development AI Agent",
      icon: Code,
      role: "Code Generation & Testing",
      description: "Writes boilerplate code, creates documentation, and performs automated testing.",
      capabilities: ["Code Generation", "Unit Testing", "Documentation", "Bug Detection"],
      supervizedBy: "Michael Park",
      efficiency: "70% faster development",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Support AI Agent",
      icon: Headphones,
      role: "Customer Support & Onboarding",
      description: "Handles tier-1 support, client onboarding, and FAQs with 24/7 availability.",
      capabilities: ["Live Chat Support", "Email Responses", "Ticket Routing", "Onboarding"],
      supervizedBy: "Emily Roberts",
      efficiency: "85% resolution rate",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Analytics AI Agent",
      icon: BarChart3,
      role: "Data Analysis & Reporting",
      description: "Tracks KPIs, generates performance reports, and provides predictive insights.",
      capabilities: ["KPI Tracking", "Report Generation", "Predictive Analytics", "Dashboards"],
      supervizedBy: "Emily Roberts",
      efficiency: "Real-time insights",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Social Media AI Agent",
      icon: MessageSquare,
      role: "Social Media Management",
      description: "Schedules posts, engages with followers, and monitors brand mentions across platforms.",
      capabilities: ["Post Scheduling", "Engagement", "Brand Monitoring", "Analytics"],
      supervizedBy: "Sarah Johnson",
      efficiency: "Multi-platform automation",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Sales AI Agent",
      icon: Target,
      role: "Lead Qualification & Outreach",
      description: "Qualifies inbound leads, sends personalized outreach, and schedules consultations.",
      capabilities: ["Lead Scoring", "Email Outreach", "Follow-ups", "Meeting Scheduling"],
      supervizedBy: "David Chen",
      efficiency: "3x more qualified leads",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "QA AI Agent",
      icon: Shield,
      role: "Quality Assurance & Testing",
      description: "Performs automated testing, security audits, and quality checks across all deliverables.",
      capabilities: ["Automated Testing", "Security Audits", "Code Review", "Performance Testing"],
      supervizedBy: "Michael Park",
      efficiency: "99.9% coverage",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "AI Agents Execute",
      description: "AI agents handle 80-90% of operational tasks autonomously",
      icon: Bot
    },
    {
      step: "2",
      title: "Human Review",
      description: "Leadership reviews critical decisions and edge cases",
      icon: Eye
    },
    {
      step: "3",
      title: "Approve & Deploy",
      description: "Humans approve, refine, and deploy final outputs",
      icon: CheckCircle2
    },
    {
      step: "4",
      title: "Continuous Learning",
      description: "AI agents learn from feedback and improve over time",
      icon: TrendingUp
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "10x Productivity",
      description: "AI agents work 24/7, allowing our human team to focus on strategy and relationships"
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "Projects completed 3-5x faster with AI-assisted workflows"
    },
    {
      icon: TrendingUp,
      title: "Scalable Operations",
      description: "Scale capacity without proportionally increasing headcount"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Human oversight ensures every output meets our high standards"
    }
  ];

  return (
    <>
      <SEO
        title="Our AI-First Team: Human Leadership + AI Agents | D2 Group"
        description="Meet our innovative hybrid team structure: 4 strategic human leaders orchestrating 8+ specialized AI agents. Experience 10x productivity with human-in-the-loop quality control."
        keywords="AI-first team, human in the loop, AI agents workforce, hybrid team structure, automation agency team"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-First Organization
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">The Future of Work: </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Humans + AI Agents
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We practice what we preach: <strong className="text-foreground">4 strategic human leaders</strong> orchestrate{" "}
              <strong className="text-foreground">8+ specialized AI agents</strong> to deliver exceptional results 
              at unprecedented scale.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Human Leaders", value: "4", icon: Users },
                { label: "AI Agents", value: "8+", icon: Bot },
                { label: "Productivity Gain", value: "10x", icon: Zap },
                { label: "Human Oversight", value: "100%", icon: Eye }
              ].map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={idx} className="p-4 hover:shadow-lg transition-all">
                    <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Human Leadership Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Users className="w-3 h-3 mr-1" />
                Human Leadership Team
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Strategic <span className="text-primary">Human Oversight</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our lean leadership team focuses on strategy, client relationships, and quality control — 
                while AI agents handle execution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {humanLeadership.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="relative inline-block mb-4">
                      <Avatar className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 border-2 border-background">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-4">{member.bio}</p>

                    <Separator className="my-3" />

                    <div className="space-y-1 mb-3">
                      {member.responsibilities.map((resp, idx) => (
                        <div key={idx} className="text-xs flex items-center gap-1 justify-center">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3 w-3 mr-2" /> Connect
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Bot className="w-3 h-3 mr-1" />
                AI Agent Workforce
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Our <span className="text-primary">AI Agent Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized AI agents handle 80-90% of operational tasks — from content creation to 
                customer support — with human leaders providing strategic oversight
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiAgents.map((agent, index) => {
                const IconComponent = agent.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    
                    <CardContent className="p-6 relative">
                      <div className="mb-4">
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          <Bot className="w-3 h-3 mr-1" />
                          AI Agent
                        </Badge>
                      </div>

                      <h3 className="text-lg font-bold mb-1">{agent.name}</h3>
                      <p className="text-sm text-primary mb-3">{agent.role}</p>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        {agent.description}
                      </p>

                      <Separator className="my-3" />

                      <div className="space-y-2 mb-3">
                        <p className="text-xs font-semibold">Capabilities:</p>
                        {agent.capabilities.map((cap, idx) => (
                          <div key={idx} className="text-xs flex items-start gap-1">
                            <Zap className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-3" />

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <Eye className="w-3 h-3 text-primary" />
                          <span className="text-muted-foreground">Supervised by:</span>
                          <span className="font-semibold">{agent.supervizedBy}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="font-semibold text-green-600">{agent.efficiency}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <div className="text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">Why This Structure Works</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  By combining human strategic thinking with AI execution speed, we deliver enterprise-grade 
                  quality at startup speed — and pass those efficiency gains directly to our clients.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Workflow className="w-3 h-3 mr-1" />
                Human-in-the-Loop Process
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                How Our <span className="text-primary">Hybrid Team</span> Works
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                The Benefits of Our <span className="text-primary">AI-First Approach</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">We Build What We Use</h2>
            <p className="text-xl mb-8 opacity-90">
              This isn't theory — it's our daily reality. We've automated our own operations with AI agents, 
              and we can do the same for your business.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
              {[
                "✅ See our AI agents in action",
                "✅ Learn how we built our system",
                "✅ Get a custom AI roadmap"
              ].map((item, idx) => (
                <div key={idx} className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Book a Demo
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

        {/* Join Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Careers</Badge>
            <h2 className="text-3xl font-bold mb-6">Want to Work in an AI-First Organization?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're looking for strategic thinkers who want to lead AI agents, not compete with them. 
              If you're excited about the future of work, let's talk.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:careers@d2group.co">
                <Mail className="w-4 h-4 mr-2" />
                View Open Positions
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
