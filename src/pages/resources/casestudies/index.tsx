import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Building2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  client: string;
  image_url: string;
  views: number;
}

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .eq("is_published", true)
        .order("order_index", { ascending: true });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error) {
      console.error("Error loading case studies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Case Studies - Real Automation Success Stories | D2 Group"
        description="Explore our portfolio of successful automation projects. See how we've helped businesses save time and money with n8n automation and AI solutions."
        keywords="automation case studies, n8n success stories, business automation examples, AI automation results"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Badge className="mb-4">Success Stories</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Real Results from Real Businesses
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how companies across industries are transforming their operations 
                with intelligent automation solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Workflows Automated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
                <div className="text-muted-foreground">Annual Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading case studies...</p>
              </div>
            ) : caseStudies.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No case studies available yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((caseStudy) => (
                  <Card key={caseStudy.id} className="hover:shadow-lg transition-shadow group">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={caseStudy.image_url} 
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{caseStudy.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <TrendingUp className="w-4 h-4" />
                          <span>{caseStudy.views} views</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </CardTitle>
                      <CardDescription>{caseStudy.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="w-4 h-4" />
                          <span>{caseStudy.client}</span>
                        </div>
                        <Link to={`/portfolio/${caseStudy.slug}`}>
                          <Button variant="ghost" size="sm" className="gap-2">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help transform your business with intelligent automation.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/company/contact">
                Start Your Project
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
