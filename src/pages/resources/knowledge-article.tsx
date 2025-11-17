import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Clock, Eye } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface KBArticle {
  id: string;
  category: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  keywords: string[];
  view_count: number;
  updated_at: string;
}

export default function KnowledgeArticle() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<KBArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState<KBArticle[]>([]);

  useEffect(() => {
    if (slug) {
      loadArticle();
    }
  }, [slug]);

  const loadArticle = async () => {
    try {
      setLoading(true);

      // Load article
      const { data: articleData, error: articleError } = await supabase
        .from('knowledge_base')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (articleError) throw articleError;
      setArticle(articleData);

      // Increment view count
      await supabase.rpc('increment_kb_views', { article_slug: slug });

      // Load related articles from same category
      const { data: relatedData } = await supabase
        .from('knowledge_base')
        .select('id, category, title, slug, content, excerpt, keywords, view_count, updated_at')
        .eq('category', articleData.category)
        .eq('is_published', true)
        .neq('id', articleData.id)
        .limit(3);

      setRelatedArticles(relatedData || []);
    } catch (error) {
      console.error('Error loading article:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="h-96 w-full" />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <SEO 
          title="Article Not Found - D2 Group" 
          description="The article you're looking for doesn't exist or has been removed."
        />
        <Header />
        <main className="min-h-screen bg-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/resources/knowledge">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Knowledge Base
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${article.title} - D2 Group Knowledge Base`}
        description={article.excerpt}
        keywords={article.keywords.join(', ')}
      />
      <Header />

      <main className="min-h-screen bg-background">
        <article className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <Link to="/resources/knowledge">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Knowledge Base
              </Button>
            </Link>

            {/* Article Header */}
            <header className="mb-12 space-y-4">
              <Badge variant="secondary" className="mb-4">
                {article.category.replace('_', ' ').toUpperCase()}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {article.title}
              </h1>
              {article.excerpt && (
                <p className="text-xl text-muted-foreground">{article.excerpt}</p>
              )}

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    Updated {new Date(article.updated_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{article.view_count} views</span>
                </div>
              </div>

              {/* Keywords */}
              {article.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4">
                  {article.keywords.map((keyword) => (
                    <Badge key={keyword} variant="outline">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-16 pt-16 border-t">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      to={`/resources/knowledge/${related.slug}`}
                      className="group"
                    >
                      <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow h-full">
                        <Badge variant="secondary" className="mb-3">
                          {related.category.replace('_', ' ')}
                        </Badge>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can help with your automation and AI needs
            </p>
            <Link to="/company/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
