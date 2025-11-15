import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Plus, Edit, Trash2, Eye, Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface KnowledgeBaseArticle {
  id: string;
  category: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  keywords: string[];
  is_published: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
}

const CATEGORIES = [
  'services',
  'team',
  'pricing',
  'case_studies',
  'tech_stack',
  'company_info',
  'solutions',
  'faq',
  'security',
  'integrations'
];

export function KnowledgeBaseManager() {
  const { toast } = useToast();
  const [articles, setArticles] = useState<KnowledgeBaseArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<KnowledgeBaseArticle | null>(null);
  const [generatingEmbedding, setGeneratingEmbedding] = useState(false);

  const [formData, setFormData] = useState({
    category: '',
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    keywords: '',
    is_published: true,
  });

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('knowledge_base')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error loading articles:', error);
      toast({
        title: 'Error',
        description: 'Failed to load knowledge base articles',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const generateEmbedding = async (text: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('generate-embedding', {
        body: { text },
      });

      if (error) throw error;
      return data.embedding;
    } catch (error) {
      console.error('Error generating embedding:', error);
      throw error;
    }
  };

  const handleSave = async () => {
    try {
      if (!formData.title || !formData.content || !formData.category) {
        toast({
          title: 'Validation Error',
          description: 'Title, content, and category are required',
          variant: 'destructive',
        });
        return;
      }

      setGeneratingEmbedding(true);

      // Generate slug if not provided
      const slug = formData.slug || generateSlug(formData.title);

      // Generate embedding for content
      const embedding = await generateEmbedding(
        `${formData.title} ${formData.excerpt} ${formData.content}`
      );

      const articleData = {
        ...formData,
        slug,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(Boolean),
        embedding,
      };

      let error;
      if (editingArticle) {
        const { error: updateError } = await supabase
          .from('knowledge_base')
          .update(articleData)
          .eq('id', editingArticle.id);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('knowledge_base')
          .insert([articleData]);
        error = insertError;
      }

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Article ${editingArticle ? 'updated' : 'created'} successfully`,
      });

      setIsDialogOpen(false);
      resetForm();
      loadArticles();
    } catch (error) {
      console.error('Error saving article:', error);
      toast({
        title: 'Error',
        description: 'Failed to save article',
        variant: 'destructive',
      });
    } finally {
      setGeneratingEmbedding(false);
    }
  };

  const handleEdit = (article: KnowledgeBaseArticle) => {
    setEditingArticle(article);
    setFormData({
      category: article.category,
      title: article.title,
      slug: article.slug,
      content: article.content,
      excerpt: article.excerpt,
      keywords: article.keywords.join(', '),
      is_published: article.is_published,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;

    try {
      const { error } = await supabase
        .from('knowledge_base')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Article deleted successfully',
      });

      loadArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete article',
        variant: 'destructive',
      });
    }
  };

  const resetForm = () => {
    setFormData({
      category: '',
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      keywords: '',
      is_published: true,
    });
    setEditingArticle(null);
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Knowledge Base Manager</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" />
              Add Article
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingArticle ? 'Edit Article' : 'Create New Article'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat.replace('_', ' ').toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Published</Label>
                  <Select
                    value={formData.is_published ? 'true' : 'false'}
                    onValueChange={(value) => 
                      setFormData({ ...formData, is_published: value === 'true' })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Published</SelectItem>
                      <SelectItem value="false">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Title</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Article title"
                />
              </div>

              <div>
                <Label>Slug (auto-generated if empty)</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="article-slug"
                />
              </div>

              <div>
                <Label>Excerpt</Label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief summary"
                  rows={2}
                />
              </div>

              <div>
                <Label>Content (Markdown supported)</Label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Full article content in markdown"
                  rows={12}
                  className="font-mono text-sm"
                />
              </div>

              <div>
                <Label>Keywords (comma-separated)</Label>
                <Input
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="automation, ai, n8n"
                />
              </div>

              <Button 
                onClick={handleSave} 
                disabled={generatingEmbedding}
                className="w-full"
              >
                {generatingEmbedding ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating AI Embedding...
                  </>
                ) : (
                  'Save Article'
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat.replace('_', ' ').toUpperCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredArticles.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No articles found</p>
              </CardContent>
            </Card>
          ) : (
            filteredArticles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <CardTitle>{article.title}</CardTitle>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary">{article.category}</Badge>
                        <Badge variant={article.is_published ? 'default' : 'outline'}>
                          {article.is_published ? 'Published' : 'Draft'}
                        </Badge>
                        <Badge variant="outline">
                          <Eye className="mr-1 h-3 w-3" />
                          {article.view_count} views
                        </Badge>
                      </div>
                      {article.keywords.length > 0 && (
                        <div className="flex gap-1 flex-wrap">
                          {article.keywords.map((keyword) => (
                            <Badge key={keyword} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(article)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(article.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt || article.content.substring(0, 200)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Updated: {new Date(article.updated_at).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
}
