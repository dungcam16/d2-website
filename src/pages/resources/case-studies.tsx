import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye, Search, Tag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSearch =
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (study.excerpt && study.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || study.category === selectedCategory;
    const matchesTag = !selectedTag || study.category === selectedTag;
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const allCategories = Array.from(new Set(caseStudies.map((s) => s.category).filter(Boolean)));
  const allTags = Array.from(new Set(caseStudies.map((s) => s.category).filter(Boolean)));

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
            <div className="max-w-md mx-auto relative mt-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="space-y-6 sticky top-24">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        !selectedCategory ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                      }`}
                    >
                      All
                    </button>
                    {allCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Tag className="h-5 w-5" />
                      Tags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={selectedTag === tag ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Subscribe to Newsletter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest case studies from D2 GROUP.
                    </p>
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
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                </div>
              ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredCaseStudies.map((study) => (
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

              {!loading && filteredCaseStudies.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No case studies found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
