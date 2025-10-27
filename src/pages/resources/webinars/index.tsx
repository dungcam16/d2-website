import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Calendar, Clock, Users, Video, PlayCircle, Download } from "lucide-react";

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: "n8n for Beginners: Building Your First Workflow",
      description: "Learn the fundamentals of n8n automation and build your first workflow from scratch",
      date: "March 15, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      spots: "45 spots left",
      level: "Beginner",
      instructor: "John Doe, Senior Automation Engineer"
    },
    {
      title: "Advanced AI Agent Development with n8n & GPT-4",
      description: "Build sophisticated AI agents that can handle complex business workflows",
      date: "March 22, 2025",
      time: "3:00 PM EST",
      duration: "90 minutes",
      spots: "32 spots left",
      level: "Advanced",
      instructor: "Jane Smith, AI Solutions Architect"
    },
    {
      title: "Migrating from Zapier to n8n: A Complete Guide",
      description: "Step-by-step process to migrate your Zapier workflows to n8n without downtime",
      date: "March 29, 2025",
      time: "1:00 PM EST",
      duration: "75 minutes",
      spots: "28 spots left",
      level: "Intermediate",
      instructor: "Mike Johnson, Migration Specialist"
    }
  ];

  const recordedWebinars = [
    {
      title: "Building a Complete CRM Automation System",
      description: "Watch how we built a full CRM automation connecting HubSpot, Slack, and Google Sheets",
      views: "2.3K views",
      duration: "82 minutes",
      date: "February 2025",
      thumbnail: "🎯"
    },
    {
      title: "E-commerce Order Processing Automation",
      description: "Automate order fulfillment, inventory sync, and customer notifications",
      views: "1.8K views",
      duration: "65 minutes",
      date: "January 2025",
      thumbnail: "🛒"
    },
    {
      title: "Financial Reporting Automation with n8n",
      description: "Build automated financial reports pulling data from multiple sources",
      views: "1.5K views",
      duration: "70 minutes",
      date: "January 2025",
      thumbnail: "📊"
    },
    {
      title: "AI-Powered Customer Support Automation",
      description: "Create intelligent support ticket routing with GPT-4 integration",
      views: "3.1K views",
      duration: "95 minutes",
      date: "December 2024",
      thumbnail: "🤖"
    }
  ];

  return (
    <>
      <SEO 
        title="Free n8n Automation Webinars & Training | D2 Group"
        description="Join free live webinars on n8n automation, AI agents, workflow migration, and more. Watch recorded sessions on-demand. Expert-led training for all skill levels."
        keywords="n8n webinar, automation training, n8n tutorial, workflow automation webinar, AI automation training"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Badge className="mb-4">Free Training</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Automation Webinars & Training
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join live expert-led webinars or watch on-demand sessions. 
                Learn n8n automation, AI agents, workflow migration, and advanced integration techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Upcoming Live Webinars
                </h2>
                <p className="text-lg text-muted-foreground">
                  Register now to secure your spot
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingWebinars.map((webinar, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{webinar.level}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{webinar.spots}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{webinar.title}</CardTitle>
                    <CardDescription>{webinar.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{webinar.date} at {webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs">{webinar.instructor}</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recorded Webinars */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Watch On-Demand
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access our library of recorded webinars anytime
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {recordedWebinars.map((webinar, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                        {webinar.thumbnail}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl mb-2">{webinar.title}</CardTitle>
                        <CardDescription>{webinar.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        <span>{webinar.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 gap-2">
                        <PlayCircle className="w-4 h-4" />
                        Watch Now
                      </Button>
                      <Button variant="outline" size="icon">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
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
              Want a Custom Training Session?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We offer private training sessions tailored to your team's needs and workflows.
            </p>
            <Button size="lg" variant="secondary">
              Contact Us for Private Training
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Webinars;