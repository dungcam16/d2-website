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
            {/* n8n Workflow Interactive Preview */}
            {template.workflow_json && (
              <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-3 border border-border/50 overflow-hidden">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full border-0"
                      srcDoc={`
                        <!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <style>
                              * { margin: 0; padding: 0; box-sizing: border-box; }
                              body {
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                padding: 20px;
                                min-height: 100vh;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                              }
                              .container {
                                background: white;
                                border-radius: 20px;
                                padding: 40px;
                                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                                max-width: 1000px;
                                width: 100%;
                              }
                              .header {
                                display: flex;
                                align-items: center;
                                gap: 16px;
                                margin-bottom: 32px;
                                padding-bottom: 20px;
                                border-bottom: 3px solid #e5e7eb;
                              }
                              .logo {
                                width: 48px;
                                height: 48px;
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                border-radius: 12px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: white;
                                font-weight: 800;
                                font-size: 24px;
                                box-shadow: 0 4px 6px -1px rgba(102, 126, 234, 0.3);
                              }
                              .title {
                                font-size: 28px;
                                font-weight: 800;
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                              }
                              .workflow-name {
                                font-size: 20px;
                                font-weight: 700;
                                color: #1f2937;
                                margin-bottom: 20px;
                                display: flex;
                                align-items: center;
                                gap: 8px;
                              }
                              .stats {
                                display: grid;
                                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                                gap: 16px;
                                margin: 24px 0;
                              }
                              .stat {
                                background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
                                padding: 20px;
                                border-radius: 12px;
                                text-align: center;
                                border: 2px solid #e5e7eb;
                                transition: all 0.3s ease;
                              }
                              .stat:hover {
                                transform: translateY(-2px);
                                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                                border-color: #667eea;
                              }
                              .stat-value {
                                font-size: 32px;
                                font-weight: 800;
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                                margin-bottom: 4px;
                              }
                              .stat-label {
                                font-size: 13px;
                                color: #6b7280;
                                font-weight: 600;
                                text-transform: uppercase;
                                letter-spacing: 0.5px;
                              }
                              .nodes-section {
                                margin-top: 28px;
                              }
                              .section-title {
                                font-size: 18px;
                                font-weight: 700;
                                color: #1f2937;
                                margin-bottom: 16px;
                                display: flex;
                                align-items: center;
                                gap: 8px;
                              }
                              .nodes-grid {
                                display: grid;
                                grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                                gap: 12px;
                              }
                              .node {
                                background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                                border: 2px solid #e2e8f0;
                                border-radius: 12px;
                                padding: 16px;
                                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: pointer;
                              }
                              .node:hover {
                                transform: translateY(-4px) scale(1.02);
                                box-shadow: 0 12px 24px -6px rgba(102, 126, 234, 0.2);
                                border-color: #667eea;
                              }
                              .node-name {
                                font-weight: 700;
                                color: #2563eb;
                                font-size: 15px;
                                margin-bottom: 6px;
                                display: flex;
                                align-items: center;
                                gap: 6px;
                              }
                              .node-type {
                                font-size: 13px;
                                color: #64748b;
                                font-weight: 500;
                              }
                              .badge {
                                display: inline-block;
                                padding: 4px 12px;
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                color: white;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 600;
                                margin-left: auto;
                              }
                              @media (max-width: 640px) {
                                body { padding: 12px; }
                                .container { padding: 24px; }
                                .title { font-size: 20px; }
                                .nodes-grid { grid-template-columns: 1fr; }
                              }
                            </style>
                          </head>
                          <body>
                            <div class="container">
                              <div class="header">
                                <div class="logo">n8n</div>
                                <div class="title">Workflow Preview</div>
                              </div>
                              
                              <div class="workflow-name">
                                <span>📊</span>
                                <span>${template.workflow_json.name || template.title}</span>
                              </div>

                              <div class="stats">
                                <div class="stat">
                                  <div class="stat-value">${template.workflow_json.nodes?.length || 0}</div>
                                  <div class="stat-label">Nodes</div>
                                </div>
                                <div class="stat">
                                  <div class="stat-value">${
                                    template.workflow_json.connections
                                      ? Object.keys(template.workflow_json.connections).length
                                      : 0
                                  }</div>
                                  <div class="stat-label">Connections</div>
                                </div>
                                <div class="stat">
                                  <div class="stat-value">${template.integrations?.length || 0}</div>
                                  <div class="stat-label">Integrations</div>
                                </div>
                              </div>

                              ${
                                template.workflow_json.nodes
                                  ? `
                                <div class="nodes-section">
                                  <div class="section-title">
                                    <span>⚙️</span>
                                    <span>Workflow Nodes</span>
                                    <span class="badge">${template.workflow_json.nodes.length}</span>
                                  </div>
                                  <div class="nodes-grid">
                                    ${template.workflow_json.nodes
                                      .map(
                                        (node: any, idx: number) => `
                                      <div class="node">
                                        <div class="node-name">
                                          <span>${idx + 1}.</span>
                                          <span>${node.name}</span>
                                        </div>
                                        <div class="node-type">${node.type}</div>
                                      </div>
                                    `,
                                      )
                                      .join("")}
                                  </div>
                                </div>
                              `
                                  : ""
                              }
                            </div>
                          </body>
                        </html>
                      `}
                      title={`${template.title} - Interactive Workflow Preview`}
                      sandbox="allow-same-origin"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Fallback Thumbnail - Only if no workflow_json */}
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
