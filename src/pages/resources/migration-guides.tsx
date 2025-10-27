import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, TrendingUp, Zap } from "lucide-react";

const MigrationGuides = () => {
  const guides = [
    {
      title: "Zapier to n8n Migration",
      from: "Zapier",
      to: "n8n",
      difficulty: "Intermediate",
      time: "2-4 weeks",
      description: "Complete guide to migrating your automation workflows from Zapier to n8n with minimal downtime",
    },
    {
      title: "Make to n8n Migration",
      from: "Make",
      to: "n8n",
      difficulty: "Beginner",
      time: "1-2 weeks",
      description: "Step-by-step process to transition from Make (Integromat) to n8n automation platform",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Migration Guides | D2 Group"
        description="Expert guides for migrating your workflows to n8n automation platform"
        keywords="migration guide, zapier to n8n, make to n8n, workflow migration"
        canonicalUrl="/resources/migration-guides"
      />
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-foreground">Migration </span>
              <span className="text-primary">Guides</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert guides to help you migrate your workflows to powerful automation platforms
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {guides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl">{guide.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <span className="font-medium">{guide.from}</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-medium text-primary">{guide.to}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {guide.difficulty}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {guide.time}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    View Guide
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-primary p-8">
              <Zap className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Need Custom Migration Support?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Our team can handle your entire migration process with zero downtime
              </p>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MigrationGuides;
