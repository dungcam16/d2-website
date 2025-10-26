import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Team() {
  const team = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      bio: "10+ years in automation and AI. Previously led engineering at tech unicorn.",
      skills: ["n8n Expert", "AI Integration", "Strategy"],
      linkedin: "#"
    },
    {
      name: "Jane Smith",
      role: "Head of Automation",
      bio: "Workflow automation specialist with 500+ projects delivered.",
      skills: ["n8n", "Zapier", "Make"],
      linkedin: "#"
    },
    {
      name: "Mike Johnson",
      role: "AI Integration Lead",
      bio: "AI/ML engineer building intelligent automation systems.",
      skills: ["OpenAI", "Claude", "RAG Systems"],
      linkedin: "#"
    },
    {
      name: "Sarah Williams",
      role: "Solutions Architect",
      bio: "Designs scalable automation infrastructure for enterprises.",
      skills: ["System Design", "APIs", "DevOps"],
      linkedin: "#"
    }
  ];

  return (
    <>
      <SEO
        title="Meet Our Team - D2 Group Automation Experts"
        description="Meet the automation experts behind D2 Group. Our team specializes in n8n, AI integration, and workflow optimization for businesses worldwide."
        keywords="automation team, n8n experts, AI integration specialists, workflow automation professionals"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Meet The Automation Experts
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our team of automation specialists, AI engineers, and workflow architects are 
              dedicated to helping businesses scale through intelligent automation.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
                  <p className="text-sm text-primary mb-3 text-center">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" /> Connect
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented automation specialists, AI engineers, and problem solvers 
              who are passionate about helping businesses scale.
            </p>
            <Button size="lg" asChild>
              <Link to="/company/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
