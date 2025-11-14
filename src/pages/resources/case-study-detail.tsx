import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2, Eye, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RichContent from "@/components/RichContent";
import { supabase } from "@/integrations/supabase/client";

interface CaseStudy {
  id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  client: string | null;
  created_at: string;
  category: string | null;
  image_url: string | null;
  views: number | null;
  slug: string;
}

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!slug) {
        setError("Case study slug not found.");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("case_studies")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          setError("Case study not found.");
        } else {
          setCaseStudy(data);
          // Increment view count
          supabase
            .from("case_studies")
            .update({ views: (data.views || 0) + 1 })
            .eq("id", data.id)
            .then(({ error }) => {
              if (error) {
                console.error("Error updating view count:", error);
              }
            });
        }
      } catch (error) {
        console.error("Error fetching case study:", error);
        setError("An error occurred while loading the case study.");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <Card className="animate-pulse">
            <div className="h-64 bg-muted rounded-t-lg"></div>
            <CardContent className="p-8">
              <div className="h-8 bg-muted rounded w-3/4 mb-6"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">{error}</p>
            <Button onClick={() => navigate("/resources/casestudies")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const caseStudyStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    image: caseStudy.image_url || "https://storage.googleapis.com/gpt-engineer-file-uploads/GfwJGgB5PVUTbVt9ullbKBHrjTg2/uploads/1758965954495-logo d2 group.png",
    author: {
      "@type": "Organization",
      name: "D2 Group",
    },
    publisher: {
      "@type": "Organization",
      name: "D2 Group",
      logo: {
        "@type": "ImageObject",
        url: "https://storage.googleapis.com/gpt-engineer-file-uploads/GfwJGgB5PVUTbVt9ullbKBHrjTg2/uploads/1758965954495-logo d2 group.png",
      },
    },
    datePublished: caseStudy.created_at,
    dateModified: caseStudy.created_at,
    description: caseStudy.excerpt || caseStudy.title,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://d2group.co/resources/casestudies/${caseStudy.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={caseStudy.title}
        description={
          caseStudy.excerpt || `Read the case study ${caseStudy.title} from D2 Group - AI Automation Agency`
        }
        keywords={caseStudy.category || "automation case study"}
        ogImage={caseStudy.image_url || undefined}
        canonicalUrl={`/resources/casestudies/${caseStudy.slug}`}
        structuredData={caseStudyStructuredData}
      />
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <Button variant="ghost" onClick={() => navigate("/resources/casestudies")} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Button>

        <article>
          {caseStudy.image_url && (
            <div className="mb-8">
              <img
                src={caseStudy.image_url}
                alt={`Feature image for ${caseStudy.title} - D2 Group`}
                className="w-full h-64 sm:h-96 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          )}

          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.category && (
                <Badge variant="secondary" className="text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  {caseStudy.category}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">{caseStudy.title}</h1>

            {caseStudy.excerpt && <p className="text-xl text-muted-foreground mb-6">{caseStudy.excerpt}</p>}

            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                {caseStudy.client && (
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{caseStudy.client}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(caseStudy.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{(caseStudy.views || 0) + 1}</span>
                </div>
              </div>

              <div className="hidden sm:flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </header>

          <div className="mt-8">
            <RichContent content={caseStudy.content || ""} />
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need automation solutions for your business?</h3>
            <p className="text-muted-foreground mb-6">
              Contact D2 Group for a free consultation and get the best automation strategy.
            </p>
            <Button size="lg" onClick={() => navigate("/company/contact")}>
              Get a Free Consultation Now
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
