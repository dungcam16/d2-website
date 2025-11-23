import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Eye, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ScrollReveal } from "@/components/ScrollReveal";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  author: string;
  image_url: string | null;
  tags: string[] | null;
  views: number | null;
  read_time: number | null;
  published_at: string;
}

interface FeaturedBlogPostsProps {
  limit?: number;
  excludeSlug?: string;
}

export const FeaturedBlogPosts = ({ limit = 3, excludeSlug }: FeaturedBlogPostsProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedPosts();
  }, [excludeSlug]);

  const fetchFeaturedPosts = async () => {
    try {
      let query = supabase
        .from("blog_posts")
        .select("*")
        .eq("is_published", true)
        .limit(limit);

      if (excludeSlug) {
        query = query.neq("slug", excludeSlug);
      }

      const { data, error } = await query.order("views", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching featured posts:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || posts.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <ScrollReveal key={post.id} delay={index * 100} direction="up">
            <Link to={`/resources/blog/${post.slug}`}>
              <Card className="gradient-card overflow-hidden hover-lift transition-all duration-300 flex flex-col h-full">
                <div className="h-48 bg-muted flex-shrink-0">
                  <img
                    src={post.image_url || "/placeholder.svg"}
                    alt={`Featured image for ${post.title} - ${post.excerpt?.substring(0, 50) || 'D2 Group blog article'}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {(post.tags || []).slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold mb-3 hover:text-primary transition-colors line-clamp-2 flex-grow">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{post.excerpt || ""}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.read_time || 5} min</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.views || 0}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/resources/blog">
          <button className="text-primary hover:underline inline-flex items-center gap-2">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </section>
  );
};
