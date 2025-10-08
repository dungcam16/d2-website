import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Workflow, Eye, Download } from "lucide-react";

export const DashboardStats = () => {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalTemplates: 0,
    totalViews: 0,
    totalDownloads: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Get blog posts count
      const { count: blogsCount } = await supabase
        .from("blog_posts")
        .select("*", { count: "exact", head: true });

      // Get templates count
      const { count: templatesCount } = await supabase
        .from("workflow_templates")
        .select("*", { count: "exact", head: true });

      // Get total views from templates
      const { data: templatesData } = await supabase
        .from("workflow_templates")
        .select("views, downloads");

      const totalViews = templatesData?.reduce((sum, t) => sum + (t.views || 0), 0) || 0;
      const totalDownloads = templatesData?.reduce((sum, t) => sum + (t.downloads || 0), 0) || 0;

      setStats({
        totalBlogs: blogsCount || 0,
        totalTemplates: templatesCount || 0,
        totalViews,
        totalDownloads,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const statCards = [
    {
      title: "Blog Posts",
      value: stats.totalBlogs,
      icon: FileText,
      description: "Tổng số bài viết",
    },
    {
      title: "Workflow Templates",
      value: stats.totalTemplates,
      icon: Workflow,
      description: "Tổng số templates",
    },
    {
      title: "Lượt xem",
      value: stats.totalViews,
      icon: Eye,
      description: "Tổng lượt xem templates",
    },
    {
      title: "Lượt tải",
      value: stats.totalDownloads,
      icon: Download,
      description: "Tổng lượt tải templates",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
