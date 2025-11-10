import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Clock, TrendingUp, Eye, Calendar } from "lucide-react";
import DOMPurify from "dompurify";

interface MigrationGuide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  from_platform: string;
  to_platform: string;
  difficulty_level: string;
  estimated_time: string;
  thumbnail_url: string;
  author: string;
  views: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

const MigrationGuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [guide, setGuide] = useState<MigrationGuide | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedGuides, setRelatedGuides] = useState<MigrationGuide[]>([]);

  useEffect(() => {
    if (slug) {
      loadGuide();
      incrementViews();
    }
  }, [slug]);

  const loadGuide = async () => {
    try {
      const { data, error } = await supabase
        .from("migration_guides")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (error) throw error;
      setGuide(data);

      // Load related guides
      const { data: related } = await supabase
        .from("migration_guides")
        .select("*")
        .eq("is_published", true)
        .neq("slug", slug)
        .limit(3);

      setRelatedGuides(related || []);
    } catch (error) {
      console.error("Error loading migration guide:", error);
    } finally {
      setLoading(false);
    }
  };

  const incrementViews = async () => {
    try {
      await supabase.rpc("increment_migration_guide_views" as any, {
        guide_slug: slug,
      });
    } catch (error) {
      console.error("Error incrementing views:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">Loading...</div>
        <Footer />
      </div>
    );
  }

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Guide Not Found</h1>
          <Button asChild>
            <Link to="/resources/migration-guides">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Guides
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(guide.content, {
    ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'img', 'blockquote', 'code', 'pre', 'table', 'tr', 'th', 'td'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'target', 'rel'],
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${guide.title} | D2 Group Migration Guides`}
        description={guide.excerpt}
        keywords={`${guide.from_platform} to ${guide.to_platform}, migration guide, workflow migration, automation migration`}
        canonicalUrl={`/resources/migration-guides/${guide.slug}`}
        ogImage={guide.thumbnail_url}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/resources/migration-guides"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Migration Guides
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{guide.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{guide.excerpt}</p>

          <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>{guide.difficulty_level}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{guide.estimated_time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{guide.views} views</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>By {guide.author}</span>
            </div>
          </div>

          <Badge className="mb-6">
            {guide.from_platform} → {guide.to_platform}
          </Badge>

          {guide.thumbnail_url && (
            <img
              src={guide.thumbnail_url}
              alt={guide.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />

          {/* CTA */}
          <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Migrate?</h3>
            <p className="text-muted-foreground mb-6">
              Get a free migration assessment and cost-savings analysis from D2 Group.
            </p>
            <Button size="lg" asChild>
              <Link to="/company/contact">Contact Us for Migration Support</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedGuides.map((relatedGuide) => (
                <Card key={relatedGuide.id} className="p-6 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold mb-2">{relatedGuide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {relatedGuide.from_platform} → {relatedGuide.to_platform}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3 h-3" />
                    {relatedGuide.estimated_time}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/resources/migration-guides/${relatedGuide.slug}`}>
                      Read Guide
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default MigrationGuideDetail;
