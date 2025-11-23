import React, { useState, useEffect } from "react";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Tag,
  Filter,
  Eye,
  BookOpen,
  Share2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { ScrollReveal } from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

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

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("is_published", true)
          .order("published_at", { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const postExcerpt = post.excerpt || "";
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      postExcerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "" || (post.tags && post.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('newsletter-subscribe', {
        body: {
          email,
          website: "", // Honeypot field (empty)
        },
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Success!",
          description: "You have successfully subscribed to our newsletter.",
        });
        setEmail("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    { name: "SEO", count: 12 },
    { name: "Content Marketing", count: 8 },
    { name: "Automation", count: 6 },
    { name: "Zalo Marketing", count: 10 },
    { name: "Lead Generation", count: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            <span className="text-primary">D2 GROUP</span>
            <br />
            <span className="text-foreground">Marketing Blog</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Insights, strategies, and case studies from leading marketing experts. Stay updated with the latest trends
            in digital marketing.
          </p>

          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <SkeletonLoader variant="blog" count={6} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <ScrollReveal key={post.id} delay={index * 50} direction="up">
                  <Card
                    className="gradient-card overflow-hidden hover-lift transition-all duration-300 flex flex-col"
                  >
                    <div className="h-48 bg-muted flex-shrink-0">
                      <img
                        src={post.image_url || "/placeholder.svg"}
                        alt={`${post.title} - ${post.excerpt?.substring(0, 60) || 'D2 Group blog article about automation and AI'}`}
                        className="w-full h-full object-cover"
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

                      <h2 className="text-lg font-bold mb-3 hover:text-primary transition-colors line-clamp-2 flex-grow">
                        <Link to={`/resources/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{post.excerpt || ""}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.read_time || 5} min read</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views || 0}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link to={`/resources/blog/${post.slug}`} className="w-full">
                          <Button variant="outline" size="sm" className="text-xs w-full">
                            <BookOpen className="h-3 w-3 mr-1" />
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              {/* Categories */}
              <Card className="gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors"
                      >
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags Filter */}
              <Card className="gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Filter by Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedTag === "" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTag("")}
                    >
                      All
                    </Button>
                    {allTags.map((tag) => (
                      <Button
                        key={tag}
                        variant={selectedTag === tag ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Subscribe to Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Get the latest marketing insights from D2 GROUP.</p>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <Input
                      placeholder="Your email address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Subscribe Now"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="gradient-card bg-background border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-foreground">Need marketing advice?</h3>
                  <p className="text-sm mb-4 text-muted-foreground">
                    Contact a D2 GROUP expert for a free consultation.
                  </p>
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Get a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
