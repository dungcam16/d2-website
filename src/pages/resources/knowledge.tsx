import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, BookOpen, ArrowRight, MessageCircle } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface KBArticle {
  id: string;
  category: string;
  title: string;
  slug: string;
  excerpt: string;
  keywords: string[];
  view_count: number;
  updated_at: string;
}

const CATEGORIES = [
  { value: 'all', label: 'All Topics' },
  { value: 'services', label: 'Services' },
  { value: 'team', label: 'Team' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'case_studies', label: 'Case Studies' },
  { value: 'tech_stack', label: 'Tech Stack' },
  { value: 'company_info', label: 'Company Info' },
  { value: 'solutions', label: 'Solutions' },
  { value: 'faq', label: 'FAQ' },
  { value: 'security', label: 'Security' },
  { value: 'integrations', label: 'Integrations' },
];

export default function KnowledgeBase() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState<KBArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('knowledge_base')
        .select('id, category, title, slug, excerpt, keywords, view_count, updated_at')
        .eq('is_published', true)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = category === 'all' || article.category === category;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }
    setSearchParams(params);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    const params = new URLSearchParams(searchParams);
    if (value !== 'all') {
      params.set('category', value);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  return (
    <>
      <SEO
        title="Knowledge Base - D2 Group Automation & AI Resources"
        description="Explore D2 Group's comprehensive knowledge base covering automation services, AI integration, technical documentation, case studies, and best practices."
        keywords="automation knowledge base, AI documentation, n8n guides, workflow automation resources, technical documentation"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 border-b bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Knowledge Base</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Everything You Need to Know About{' '}
                <span className="text-primary">Automation & AI</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive resources covering our services, technical capabilities, case studies, and best practices
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search knowledge base..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 h-14 text-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex justify-center">
                <Select value={category} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-[250px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2 mt-2" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-20 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or category filter
                </p>
                <Button onClick={() => { setSearchTerm(''); setCategory('all'); }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <Card key={article.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="space-y-3">
                          <Badge variant="secondary">{article.category.replace('_', ' ')}</Badge>
                          <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {article.excerpt}
                        </p>
                        {article.keywords.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {article.keywords.slice(0, 3).map((keyword) => (
                              <Badge key={keyword} variant="outline" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <Link to={`/resources/knowledge/${article.slug}`}>
                          <Button variant="ghost" className="w-full group">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our AI chatbot can help answer your questions, or you can contact us directly
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/company/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Button size="lg" variant="outline">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ask AI Assistant
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
