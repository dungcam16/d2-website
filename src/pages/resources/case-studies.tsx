import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image_url: string;
  views: number;
}

const CaseStudiesPage = () => {
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
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCaseStudies((data as any) || []);
    } catch (error) {
      console.error("Error loading case studies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies | D2 Group"
        description="Real-world automation success stories and client results"
        keywords="automation case studies, n8n success stories, workflow automation examples"
        canonicalUrl="/resources/casestudies"
      />
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-foreground">Case </span>
              <span className="text-primary">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world success stories from our automation projects
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <Card key={study.id} className="group hover:shadow-glow transition-all">
                  {study.image_url && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={study.image_url}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    {study.category && (
                      <div className="text-sm text-primary font-medium mb-2">{study.category}</div>
                    )}
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4" />
                      {study.views} views
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{study.excerpt}</p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                      onClick={() => (window.location.href = `/resources/casestudies/${study.slug}`)}
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!loading && caseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No case studies available yet.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
