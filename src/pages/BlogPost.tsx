import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2, MessageCircle, Eye, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { supabase } from "../integrations/supabase/client";
import DOMPurify from "dompurify";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  author: string;
  published_at: string;
  tags: string[];
  image_url?: string | null;
  views: number | null;
  read_time: number | null;
  slug: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError("Blog post slug not found.");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          setError("Blog post not found.");
        } else {
          setPost(data);
          // Increment view count without waiting for it to finish
          supabase
            .from("blog_posts")
            .update({ views: (data.views || 0) + 1 })
            .eq("id", data.id)
            .then(({ error }) => {
              if (error) {
                console.error("Error updating view count:", error);
              }
            });
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("An error occurred while loading the post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
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

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">{error}</p>
            <Button onClick={() => navigate("/blog")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Create structured data for blog post
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image:
      post.image_url ||
      "https://storage.googleapis.com/gpt-engineer-file-uploads/GfwJGgB5PVUTbVt9ullbKBHrjTg2/social-images/social-1758965925583-514270009_692154340477059_2925918850980454621_n (1).jpg",
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "D2 Group",
      logo: {
        "@type": "ImageObject",
        url: "https://d2group.co/logo_d2_group.png",
      },
    },
    datePublished: post.published_at,
    dateModified: post.published_at,
    description: post.excerpt || post.title,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://d2group.co/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.title}
        description={
          post.excerpt || `Read the article ${post.title} from D2 Group - Vietnam's leading B2B Marketing Agency`
        }
        keywords={post.tags?.join(", ")}
        ogImage={post.image_url || undefined}
        canonicalUrl={`/blog/${post.slug}`}
        structuredData={articleStructuredData}
      />
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <Button variant="ghost" onClick={() => navigate("/blog")} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article>
          {post.image_url && (
            <div className="mb-8">
              <img
                src={post.image_url}
                alt={`Feature image for the article ${post.title} - D2 Group`}
                className="w-full h-64 sm:h-96 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          )}

          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">{post.title}</h1>

            {post.excerpt && <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>}

            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.read_time || 5} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{(post.views || 0) + 1}</span>
                </div>
              </div>

              <div className="hidden sm:flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Comment
                </Button>
              </div>
            </div>
          </header>

          <div className="prose dark:prose-invert prose-lg max-w-none mt-8">
            <div className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need marketing support for your business?</h3>
            <p className="text-muted-foreground mb-6">
              Contact D2 GROUP for a free consultation and get the best marketing strategy.
            </p>
            <Button size="lg" onClick={() => navigate("/contact")}>
              Get a Free Consultation Now
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
