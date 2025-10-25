import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileUser, Sparkles, Users, CheckCircle, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import caseImage from "@/assets/case-ai-resume-builder.jpg";

const AiResumeBuilderCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "headline": "AI Resume Builder: 3x Faster Application Process",
    "description": "How we built an AI-powered resume builder that helps job seekers create professional resumes in minutes",
    "image": caseImage,
    "author": {
      "@type": "Organization",
      "name": "D2 Group"
    }
  };

  return (
    <>
      <SEO
        title="AI Resume Builder Case Study | 3x Faster Applications"
        description="Discover how our AI resume builder helped 50,000+ users create professional resumes 3x faster with personalized recommendations"
        canonicalUrl="/portfolio/ai-resume-builder"
        ogImage={caseImage}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <Link to="/portfolio" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-semibold">AI Application</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI Resume Builder: 3x Faster Job Applications
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Empowering 50,000+ job seekers with AI-powered resume creation and optimization
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">3x</div>
                      <div className="text-sm text-muted-foreground">Faster</div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">92%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild className="animate-scale-in">
                    <Link to="/contact">Start Your AI Project</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="animate-scale-in">
                    <Link to="/services/ai-chatbots">AI Solutions</Link>
                  </Button>
                </div>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
                <img
                  src={caseImage}
                  alt="AI Resume Builder Interface"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
              <Card className="bg-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    Job seekers struggle with creating professional resumes that stand out. Traditional resume builders offer templates but lack intelligent guidance, resulting in generic, ineffective resumes.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Average time to create a resume: 4-6 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Difficulty tailoring resumes for different job applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Lack of industry-specific best practices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <span>Poor ATS (Applicant Tracking System) compatibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Our AI-Powered Solution</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <Sparkles className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Smart Content Generation</h3>
                    <p className="text-muted-foreground">
                      AI analyzes job descriptions and suggests tailored bullet points based on user's experience
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <FileUser className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">ATS Optimization</h3>
                    <p className="text-muted-foreground">
                      Automatic keyword optimization and formatting for maximum ATS compatibility
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Industry Templates</h3>
                    <p className="text-muted-foreground">
                      20+ industry-specific templates designed by hiring experts
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Real-time Scoring</h3>
                    <p className="text-muted-foreground">
                      Instant feedback on resume strength with actionable improvement suggestions
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Impact & Results</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">20 min</div>
                    <div className="text-muted-foreground">Avg. Resume Creation Time</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-muted-foreground">Resumes Created</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover-scale">
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">92%</div>
                    <div className="text-muted-foreground">User Satisfaction</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>65% of users reported getting more interview callbacks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Average resume score improved by 40 points</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>98% ATS compatibility rate across all resumes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>4.8/5 star rating with 10,000+ reviews</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your AI Application?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create an AI solution that delivers real value to your users
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiResumeBuilderCaseStudy;
