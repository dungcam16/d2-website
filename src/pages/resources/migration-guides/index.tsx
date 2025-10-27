import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Download, Clock, CheckCircle, FileText, Zap } from "lucide-react";

const MigrationGuides = () => {
  const guides = [
    {
      title: "Zapier to n8n Migration Guide",
      description: "Complete step-by-step guide to migrate your Zapier workflows to n8n with zero downtime",
      difficulty: "Intermediate",
      duration: "2-4 weeks",
      savings: "Save up to 80% on automation costs",
      icon: Zap,
      topics: [
        "Workflow mapping and analysis",
        "Data migration strategies",
        "API endpoint conversion",
        "Testing and validation",
        "Gradual rollout plan"
      ]
    },
    {
      title: "Make.com to n8n Migration",
      description: "Migrate from Make.com (Integromat) to n8n while maintaining business continuity",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      savings: "Reduce costs by 70%",
      icon: Zap,
      topics: [
        "Scenario to workflow conversion",
        "Module mapping guide",
        "Webhook migration",
        "Error handling setup",
        "Performance optimization"
      ]
    },
    {
      title: "Custom API to n8n Integration",
      description: "Build robust n8n workflows connecting your custom APIs and internal systems",
      difficulty: "Advanced",
      duration: "3-6 weeks",
      savings: "Eliminate manual processes",
      icon: FileText,
      topics: [
        "API authentication setup",
        "Custom node development",
        "Error handling patterns",
        "Rate limiting strategies",
        "Monitoring and logging"
      ]
    },
    {
      title: "Legacy System Modernization",
      description: "Connect legacy systems with modern cloud services using n8n automation",
      difficulty: "Advanced",
      duration: "4-8 weeks",
      savings: "Increase efficiency by 300%",
      icon: FileText,
      topics: [
        "Legacy API wrapper creation",
        "Data transformation pipelines",
        "Security considerations",
        "Hybrid deployment strategies",
        "Change management"
      ]
    }
  ];

  const migrationSteps = [
    {
      step: 1,
      title: "Assessment & Planning",
      description: "Analyze current automation setup, identify dependencies, and create migration roadmap"
    },
    {
      step: 2,
      title: "Environment Setup",
      description: "Configure n8n infrastructure, security, and development/staging environments"
    },
    {
      step: 3,
      title: "Workflow Migration",
      description: "Systematically rebuild workflows in n8n with improvements and optimizations"
    },
    {
      step: 4,
      title: "Testing & Validation",
      description: "Comprehensive testing of all workflows, data validation, and error scenarios"
    },
    {
      step: 5,
      title: "Deployment & Monitoring",
      description: "Gradual rollout with monitoring, support, and performance optimization"
    }
  ];

  return (
    <>
      <SEO 
        title="Migration Guides - Move to n8n from Zapier, Make.com & More | D2 Group"
        description="Expert migration guides to move from Zapier, Make.com, and other platforms to n8n. Step-by-step instructions, best practices, and cost savings up to 80%."
        keywords="n8n migration, Zapier to n8n, Make.com migration, automation migration guide, workflow migration"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Badge className="mb-4">Migration Resources</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                n8n Migration Guides
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive guides to migrate from Zapier, Make.com, and other platforms to n8n. 
                Save up to 80% on automation costs while improving performance and control.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Download All Guides <Download className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Schedule Migration Consultation <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Proven Migration Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach ensuring zero downtime and improved automation
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              {migrationSteps.map((item) => (
                <Card key={item.step} className="relative">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Guides Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Platform-Specific Guides
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Detailed migration guides tailored to your current automation platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <guide.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{guide.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{guide.title}</CardTitle>
                    <CardDescription className="text-base">{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>Timeline: {guide.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <CheckCircle className="w-4 h-4" />
                        <span>{guide.savings}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's Covered:</h4>
                      <ul className="space-y-2">
                        {guide.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full gap-2">
                      Download Guide <Download className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help with Your Migration?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our migration experts can handle the entire process for you. Get a custom migration plan and cost estimate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                Schedule Free Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Migration Case Studies
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MigrationGuides;