import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  Zap, 
  CheckCircle,
  DollarSign,
  Shield,
  Download,
  PlayCircle,
  FileText,
  Target,
  Activity,
  Users,
  BarChart3,
  AlertTriangle,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const MigrationGuides = () => {
  const guides = [
    {
      title: "Zapier to n8n Migration",
      from: "Zapier",
      to: "n8n",
      difficulty: "Intermediate",
      time: "2-4 weeks",
      description: "Complete guide to migrating your automation workflows from Zapier to n8n with minimal downtime. Save 70% on automation costs.",
      benefits: [
        "Reduce costs by 70-90%",
        "Unlimited workflows & executions",
        "Self-hosted option available",
        "Advanced custom code support"
      ],
      savings: "$6,000-$12,000/year",
      icon: Zap,
      popular: true
    },
    {
      title: "Make to n8n Migration",
      from: "Make (Integromat)",
      to: "n8n",
      difficulty: "Beginner",
      time: "1-2 weeks",
      description: "Step-by-step process to transition from Make (Integromat) to n8n automation platform. Maintain workflow complexity with better pricing.",
      benefits: [
        "Similar visual interface",
        "More affordable pricing",
        "Better error handling",
        "Improved execution speed"
      ],
      savings: "$3,000-$8,000/year",
      icon: Activity,
      popular: false
    },
    {
      title: "IFTTT to n8n Migration",
      from: "IFTTT",
      to: "n8n",
      difficulty: "Beginner",
      time: "1 week",
      description: "Upgrade from simple IFTTT applets to powerful n8n workflows. Unlock advanced automation capabilities.",
      benefits: [
        "Much more powerful workflows",
        "Professional features",
        "Better integrations",
        "Self-hosted control"
      ],
      savings: "$1,500-$4,000/year",
      icon: Target,
      popular: false
    },
    {
      title: "Legacy Systems to Modern APIs",
      from: "Legacy/Manual",
      to: "Modern Automation",
      difficulty: "Advanced",
      time: "4-8 weeks",
      description: "Modernize your legacy systems and manual processes with automated workflows. Bridge old and new technologies.",
      benefits: [
        "Eliminate manual processes",
        "Integrate legacy systems",
        "Real-time data sync",
        "Audit trail & compliance"
      ],
      savings: "$20,000-$100,000/year",
      icon: Shield,
      popular: false
    }
  ];

  const migrationProcess = [
    {
      step: "1",
      title: "Assessment & Planning",
      description: "We audit your current automation setup, identify all workflows, and create a detailed migration plan.",
      duration: "Week 1"
    },
    {
      step: "2",
      title: "Design & Mapping",
      description: "Map each workflow to equivalent n8n nodes, optimize logic, and design improved automation architecture.",
      duration: "Week 2"
    },
    {
      step: "3",
      title: "Migration & Testing",
      description: "Migrate workflows in batches, test thoroughly, and run parallel to ensure accuracy before cutover.",
      duration: "Week 3-4"
    },
    {
      step: "4",
      title: "Training & Support",
      description: "Train your team on n8n platform, provide documentation, and offer 30-day post-migration support.",
      duration: "Ongoing"
    }
  ];

  const whyMigrate = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Save 70-90% on automation costs by moving to flat-rate or self-hosted platforms",
      impact: "Average: $6,000-$12,000/year"
    },
    {
      icon: Sparkles,
      title: "Unlimited Execution",
      description: "No more task limits or overage charges. Run unlimited workflows at the same price",
      impact: "Scale without worry"
    },
    {
      icon: Shield,
      title: "Data Control",
      description: "Self-host option means your data never leaves your infrastructure",
      impact: "Perfect for compliance"
    },
    {
      icon: Zap,
      title: "Advanced Features",
      description: "Custom code, complex branching, loops, and error handling that premium platforms lack",
      impact: "Build anything"
    }
  ];

  const stats = [
    { number: "200+", label: "Successful Migrations" },
    { number: "99.9%", label: "Workflow Preservation" },
    { number: "0", label: "Downtime Required" },
    { number: "$500K+", label: "Total Client Savings" }
  ];

  const testimonials = [
    {
      quote: "D2 Group migrated our 87 Zapier workflows to n8n in 3 weeks. Zero downtime. We're saving $8,400/year.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "TechStart SaaS"
    },
    {
      quote: "The migration process was seamless. Our workflows run faster and we have more control. Best decision we made.",
      author: "Marcus Rodriguez",
      role: "Founder",
      company: "GrowthAgency"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Migration Guides - Zapier, Make, IFTTT to n8n | D2 Group"
        description="Expert guides for migrating your workflows to n8n automation platform. Save 70-90% on automation costs. Zero downtime migration with 99.9% workflow preservation."
        keywords="migration guide, zapier to n8n, make to n8n, workflow migration, automation migration, ifttt to n8n"
        canonicalUrl="/resources/migration-guides"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              ✅ 200+ Successful Migrations • 99.9% Workflow Preservation • Zero Downtime
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Migration </span>
              <span className="text-primary">Guides</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert guides to help you migrate your workflows to powerful automation platforms. 
              Save 70-90% on costs while gaining more control and flexibility.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Migrate Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-primary">Migrate</span> to n8n?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop paying per task. Get more features. Keep your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMigrate.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{reason.description}</p>
                  <div className="bg-primary/10 p-2 rounded-md">
                    <p className="text-xs font-semibold text-primary">{reason.impact}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Guides Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Migration</span> Guides
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your migration path
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {guides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <Card key={index} className={`group hover:shadow-glow transition-all ${guide.popular ? 'border-primary border-2' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="h-8 w-8 text-primary" />
                      {guide.popular && (
                        <Badge className="bg-primary">Most Popular</Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{guide.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span className="font-medium">{guide.from}</span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="font-medium text-primary">{guide.to}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{guide.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {guide.difficulty}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {guide.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {guide.savings}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2">Key Benefits:</p>
                      <ul className="space-y-1">
                        {guide.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      variant={guide.popular ? "default" : "outline"} 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <Link to={`/services/${guide.from.toLowerCase().replace(/\s+/g, '-')}-migration`}>
                        View Guide
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Migration Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Proven methodology for zero-downtime migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationProcess.map((process, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{process.description}</p>
                <div className="bg-primary/10 p-2 rounded-md">
                  <p className="text-xs font-semibold text-primary">{process.duration}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <blockquote className="text-lg mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Migration <span className="text-primary">Resources</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Migration Checklist</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete checklist to ensure smooth migration
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/resources/migration-checklist">
                  Download
                  <Download className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">ROI Calculator</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Calculate your potential cost savings
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/resources/roi-calculator">
                  Calculate
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <PlayCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Step-by-step migration video guides
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/resources/tutorials">
                  Watch
                  <PlayCircle className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-white">
            <div className="text-center">
              <Zap className="w-16 h-16 mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need Custom Migration Support?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our team can handle your entire migration process with zero downtime. 
                We'll audit, migrate, test, and train your team—all in 2-4 weeks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="shadow-glow" asChild>
                  <Link to="/contact">
                    Get Free Migration Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white" asChild>
                  <Link to="/services/zapier-migration">
                    Learn More
                    <PlayCircle className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-3xl mx-auto">
                {[
                  "Zero downtime guaranteed",
                  "99.9% workflow preservation",
                  "30-day post-migration support",
                  "Save 70-90% on costs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MigrationGuides;
