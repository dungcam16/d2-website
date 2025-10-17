import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Eye, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  client: string | null;
  image_url: string | null;
  excerpt: string | null;
  content: string | null;
  icon_name: string;
  is_published: boolean;
  views: number;
  order_index: number;
  created_at: string;
  updated_at: string;
}

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!slug) return;

      try {
        const { data, error } = await supabase
          .from("case_studies")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          setError(true);
          return;
        }

        setCaseStudy(data as any);

        // Increment view count
        await supabase
          .from("case_studies")
          .update({ views: (data.views || 0) + 1 })
          .eq("id", data.id);
      } catch (err) {
        console.error("Error fetching case study:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-1/4"></div>
              <div className="h-64 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !caseStudy) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-20">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The case study you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/portfolio">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const caseStudyStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.excerpt || caseStudy.title,
    image: caseStudy.image_url,
    datePublished: caseStudy.created_at,
    dateModified: caseStudy.updated_at,
    author: {
      "@type": "Organization",
      name: "D2 Group",
    },
  };

  return (
    <>
      <SEO
        title={`${caseStudy.title} - Portfolio | D2 Group`}
        description={caseStudy.excerpt || caseStudy.title}
        keywords={`portfolio, case study, ${caseStudy.category || 'AI Automation'}`}
        ogImage={caseStudy.image_url || undefined}
        canonicalUrl={`https://d2group.co/portfolio/${caseStudy.slug}`}
        structuredData={caseStudyStructuredData}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-20">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/portfolio">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>

          {caseStudy.image_url && (
            <img
              src={caseStudy.image_url}
              alt={caseStudy.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}

          <div className="mb-8">
            {caseStudy.category && (
              <Badge className="mb-4">{caseStudy.category}</Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {caseStudy.title}
            </h1>
            {caseStudy.excerpt && (
              <p className="text-xl text-muted-foreground mb-6">
                {caseStudy.excerpt}
              </p>
            )}
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {caseStudy.client && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{caseStudy.client}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={caseStudy.created_at}>
                  {new Date(caseStudy.created_at).toLocaleDateString()}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{caseStudy.views} views</span>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {caseStudy.content && (
            <div className="prose dark:prose-invert prose-lg max-w-none">
              <div 
                className="text-foreground leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: caseStudy.content }} 
              />
            </div>
          )}

          <Separator className="my-12" />

          <Card className="p-8 text-center bg-primary/5">
            <h2 className="text-2xl font-bold mb-4">
              Interested in Similar Solutions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help automate your business processes.
            </p>
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </Card>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudyDetail;
