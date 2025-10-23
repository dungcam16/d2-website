import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { 
  Zap, 
  Workflow, 
  Database, 
  Bot, 
  Code, 
  FileText,
  TrendingUp,
  Eye,
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";

// Icon mapping for dynamic rendering
const iconMap: { [key: string]: React.ElementType } = {
  Zap,
  Workflow,
  Database,
  Bot,
  Code,
  FileText,
};

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  client: string;
  image_url: string;
  views: number;
  is_published: boolean;
  created_at: string;
}

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const { data, error } = await supabase
          .from("case_studies")
          .select("*")
          .eq("is_published", true)
          .order("sort", { ascending: true });

        if (error) throw error;

        setCaseStudies(data || []);
      } catch (error) {
        console.error("Error fetching case studies:", error);
        toast.error("Failed to load case studies");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies - D2 Group AI Automation",
    description: "Explore our portfolio of successful AI automation and n8n workflow projects delivered for clients worldwide.",
    url: "https://d2.group/casestudies",
  };

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(caseStudies.map(cs => cs.category).filter(Boolean)))];

  // Filter case studies by category
  const filteredCaseStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <>
      <SEO
        title="Case Studies - AI Automation Success Stories | D2 Group"
        description="Discover how we've helped businesses automate workflows with n8n, integrate AI systems, and scale operations. Real results from real projects."
        keywords="case studies, ai automation, n8n projects, workflow automation, client success stories"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Client Success Stories</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Case Studies
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Real projects, real results. Explore how we've helped businesses automate workflows, 
                integrate AI systems, and scale operations using n8n and modern automation tools.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
                {[
                  { value: caseStudies.length + "+", label: "Projects Delivered" },
                  { value: "50+", label: "Clients Worldwide" },
                  { value: "95%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="workflow-node animate-node-appear p-6 text-center"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="workflow-node animate-pulse">
                    <div className="aspect-video bg-muted rounded-lg mb-4" />
                    <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-3 bg-muted rounded w-full" />
                  </div>
                ))}
              </div>
            ) : filteredCaseStudies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((caseStudy, index) => (
                  <Link
                    key={caseStudy.id}
                    to={`/portfolio/${caseStudy.slug}`}
                    className="workflow-node animate-node-appear group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <img
                        src={caseStudy.image_url}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
                        <span className="text-xs font-medium text-primary-foreground">
                          {caseStudy.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {caseStudy.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {caseStudy.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{caseStudy.views || 0} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(caseStudy.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4 animate-data-flow" />
                      </div>
                    </div>

                    {/* Active Indicator */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span>Published</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="workflow-node inline-block p-8">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">No Case Studies Found</h3>
                  <p className="text-muted-foreground">
                    {selectedCategory === "All" 
                      ? "Check back soon for new case studies."
                      : `No case studies found in "${selectedCategory}" category.`
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="workflow-node p-12 animate-node-appear">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help automate your workflows and scale your business with AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-glow hover:shadow-glow-lg transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Get Started
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary/50 text-foreground font-semibold hover:bg-primary/10 transition-all"
                >
                  View Featured Projects
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
