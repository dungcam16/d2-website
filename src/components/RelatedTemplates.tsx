import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Template {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  difficulty_level: string | null;
  views: number | null;
  downloads: number | null;
}

interface RelatedTemplatesProps {
  currentTemplateId: string;
  category?: string | null;
  limit?: number;
}

export const RelatedTemplates = ({ currentTemplateId, category, limit = 3 }: RelatedTemplatesProps) => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRelatedTemplates();
  }, [currentTemplateId, category]);

  const fetchRelatedTemplates = async () => {
    try {
      let query = supabase
        .from("workflow_templates")
        .select("id, title, slug, category, difficulty_level, views, downloads")
        .eq("is_published", true)
        .neq("id", currentTemplateId)
        .limit(limit);

      if (category) {
        query = query.eq("category", category);
      }

      const { data, error } = await query.order("views", { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
    } catch (error) {
      console.error("Error fetching related templates:", error);
    } finally {
      setLoading(false);
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

  if (loading || templates.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h2 className="text-3xl font-bold mb-8">Related Workflow Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <ScrollReveal key={template.id} delay={index * 100} direction="up">
            <Link to={`/resources/templates/${template.slug}`}>
              <Card className="h-full hover-lift transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {template.title}
                    </h3>
                    {template.difficulty_level && (
                      <Badge className={getDifficultyColor(template.difficulty_level)}>
                        {template.difficulty_level}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {template.views || 0}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {template.downloads || 0}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/resources/templates">
          <button className="text-primary hover:underline inline-flex items-center gap-2">
            View All Templates
            <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </section>
  );
};
