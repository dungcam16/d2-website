import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Eye, Grid3x3, Calendar, User, Tag, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RichContent from "@/components/RichContent";
import { WorkflowCanvas } from "@/components/WorkflowCanvas";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Separator } from "@/components/ui/separator";
import { RelatedTemplates } from "@/components/RelatedTemplates";
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
      await supabase
        .from("workflow_templates")
        .update({ downloads: (template.downloads || 0) + 1 })
        .eq("id", template.id);

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
              <SkeletonLoader variant="workflow" />
            </div>
            <div>
              <SkeletonLoader variant="card" />
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
          <Link to="/resources/templates">
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
        <Link
          to="/resources/templates"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Templates
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {template.difficulty_level && (
              <Badge className={getDifficultyColor(template.difficulty_level)}>{template.difficulty_level}</Badge>
            )}
            {template.category && <Badge variant="outline">{template.category}</Badge>}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{template.title}</h1>
          {template.description && <p className="text-xl text-muted-foreground mb-6">{template.description}</p>}

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
          <div className="lg:col-span-2 space-y-8">
            {/* N8N Workflow Canvas */}
            <ScrollReveal direction="up">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <WorkflowCanvas 
                  workflowData={template.workflow_json}
                />
              </CardContent>
            </Card>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={100}>
            {template.thumbnail_url && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Workflow Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <img
                      src={template.thumbnail_url}
                      alt={`${template.title} - Workflow Preview`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
            <Card>
              <CardHeader>
                <CardTitle>Workflow Details</CardTitle>
              </CardHeader>
              <CardContent>
                <RichContent content={template.content} />
              </CardContent>
            </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
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
            </ScrollReveal>
          </div>

          <aside className="lg:col-span-1 space-y-6">
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

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Need Implementation Support?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  D2 Group's expert team is ready to help you deploy and customize workflows tailored to your needs
                </p>
                <Link to="/company/contact">
                  <Button variant="default" className="w-full">
                    Contact for Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Related Templates */}
        <RelatedTemplates 
          currentTemplateId={template.id}
          category={template.category}
          limit={3}
        />
      </article>

      <Footer />
    </div>
  );
};

export default TemplateDetail;
