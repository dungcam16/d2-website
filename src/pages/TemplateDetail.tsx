import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Eye, Grid3x3, Calendar, User, Tag, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface WorkflowTemplate {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string;
  workflow_json: any;
  author: string;
  thumbnail_url: string | null;
  category: string | null;
  tags: string[] | null;
  difficulty_level: string | null;
  node_count: number | null;
  integrations: string[] | null;
  views: number | null;
  downloads: number | null;
  published_at: string;
  created_at: string;
  updated_at: string;
}

const TemplateDetail = () => {
  const { slug } = useParams();
  const [template, setTemplate] = useState<WorkflowTemplate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      fetchTemplate();
    }
  }, [slug]);

  const fetchTemplate = async () => {
    try {
      const { data, error } = await supabase
        .from("workflow_templates")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (error) throw error;

      if (data) {
        setTemplate(data);
        // Increment view count
        await supabase
          .from("workflow_templates")
          .update({ views: (data.views || 0) + 1 })
          .eq("id", data.id);
      }
    } catch (err) {
      console.error("Error fetching template:", err);
      setError("Workflow template not found");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!template) return;

    try {
      // Increment download count
      await supabase
        .from("workflow_templates")
        .update({ downloads: (template.downloads || 0) + 1 })
        .eq("id", template.id);

      // Download workflow JSON
      if (template.workflow_json) {
        const dataStr = JSON.stringify(template.workflow_json, null, 2);
        const dataBlob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${template.slug}.json`;
        link.click();
        URL.revokeObjectURL(url);

        toast({
          title: "Download Successful",
          description: "Workflow template has been downloaded to your device",
        });
      }
    } catch (error) {
      console.error("Error downloading template:", error);
      toast({
        title: "Error",
        description: "Unable to download workflow template",
        variant: "destructive",
      });
    }
  };

  const getDifficultyColor = (level: string | null) => {
    switch (level) {
      case "beginner":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "intermediate":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400";
      case "advanced":
        return "bg-red-500/10 text-red-700 dark:text-red-400";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-2/3 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-96 w-full" />
            </div>
            <div>
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !template) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Workflow Template Not Found</h1>
          <p className="text-muted-foreground mb-8">{error}</p>
          <Link to="/templates">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Templates
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const templateStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: template.title,
    description: template.description,
    author: {
      "@type": "Organization",
      name: template.author,
    },
    datePublished: template.published_at,
    programmingLanguage: "JSON",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${template.title} - N8N Workflow Template`}
        description={template.description || ""}
        keywords={template.tags?.join(", ") || ""}
        ogImage={template.thumbnail_url || undefined}
        structuredData={templateStructuredData}
      />
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Back Button */}
        <Link
          to="/templates"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Templates
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {template.difficulty_level && (
              <Badge className={getDifficultyColor(template.difficulty_level)}>{template.difficulty_level}</Badge>
            )}
            {template.category && <Badge variant="outline">{template.category}</Badge>}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{template.title}</h1>

          {template.description && <p className="text-xl text-muted-foreground mb-6">{template.description}</p>}

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{template.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(template.published_at).toLocaleDateString("en-US")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{template.views || 0} views</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>{template.downloads || 0} downloads</span>
            </div>
            {template.node_count && (
              <div className="flex items-center gap-2">
                <Grid3x3 className="h-4 w-4" />
                <span>{template.node_count} nodes</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* n8n Workflow Visual Preview */}
            {template.workflow_json && (
              <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-4 border border-border/50">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-xl">n8n</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{template.workflow_json.name || template.title}</h3>
                        <p className="text-sm text-muted-foreground">Workflow Preview</p>
                      </div>
                    </div>
                    <a
                      href="https://n8n.d2group.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm flex items-center gap-1"
                    >
                      Open in n8n <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Workflow Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {template.workflow_json.nodes?.length || 0}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Nodes</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                        {template.workflow_json.connections
                          ? Object.keys(template.workflow_json.connections).length
                          : 0}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Connections</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        {template.integrations?.length || 0}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Integrations</div>
                    </div>
                  </div>

                  {/* Workflow Nodes Flow */}
                  {template.workflow_json.nodes && template.workflow_json.nodes.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground mb-3">Workflow Steps</h4>
                      <div className="relative">
                        {template.workflow_json.nodes.map((node: any, idx: number) => (
                          <div key={idx} className="relative">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                                {idx + 1}
                              </div>
                              <div className="flex-1 p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg border border-border hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <div className="font-semibold text-foreground">{node.name}</div>
                                    <div className="text-sm text-muted-foreground mt-1">{node.type}</div>
                                  </div>
                                  <Badge variant="outline" className="ml-2">
                                    {node.type.split(".")[0]}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            {idx < template.workflow_json.nodes.length - 1 && (
                              <div className="ml-5 h-6 w-0.5 bg-gradient-to-b from-blue-400 to-blue-200 mb-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Import to n8n Button */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex gap-3">
                      <Button onClick={handleDownload} variant="outline" className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Download JSON
                      </Button>
                      <Button
                        asChild
                        className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                      >
                        <a href="https://n8n.d2group.co" target="_blank" rel="noopener noreferrer">
                          Open in n8n
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Fallback Thumbnail - Only show if no workflow_json */}
            {!template.workflow_json && template.thumbnail_url && (
              <div className="rounded-lg overflow-hidden border">
                <img src={template.thumbnail_url} alt={template.title} className="w-full h-auto" />
              </div>
            )}

            {/* Content */}
            <Card>
              <CardHeader>
                <CardTitle>Workflow Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-gray dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: template.content }}
                />
              </CardContent>
            </Card>

            {/* Integrations */}
            {template.integrations && template.integrations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Integrations Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {template.integrations.map((integration, idx) => (
                      <Badge key={idx} variant="secondary">
                        {integration}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Download Card */}
            <Card>
              <CardContent className="pt-6">
                <Button onClick={handleDownload} className="w-full mb-4" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Workflow
                </Button>
                <Separator className="my-4" />
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    Download the JSON file and import it into your N8N instance to use this workflow
                  </p>
                  <Link to="/services/n8n-workflow" className="flex items-center gap-2 text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" />
                    Learn about N8N services
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            {template.tags && template.tags.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Need Implementation Support?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  D2 Group's expert team is ready to help you deploy and customize workflows tailored to your needs
                </p>
                <Link to="/contact">
                  <Button variant="default" className="w-full">
                    Contact for Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default TemplateDetail;
