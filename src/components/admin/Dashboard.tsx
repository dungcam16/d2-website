import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Workflow, FolderKanban, Users, Eye, TrendingUp } from "lucide-react";
import { Loader2 } from "lucide-react";

export function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    blogPosts: 0,
    workflowTemplates: 0,
    caseStudies: 0,
    users: 0,
    totalBlogViews: 0,
    totalWorkflowViews: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [blogRes, templatesRes, caseStudiesRes, usersRes] = await Promise.all([
        supabase.from("blog_posts").select("views", { count: "exact" }),
        supabase.from("workflow_templates").select("views", { count: "exact" }),
        supabase.from("case_studies").select("*", { count: "exact" }),
        supabase.from("user_roles").select("*", { count: "exact" }),
      ]);

      const totalBlogViews = blogRes.data?.reduce((sum, post) => sum + (post.views || 0), 0) || 0;
      const totalWorkflowViews = templatesRes.data?.reduce((sum, temp) => sum + (temp.views || 0), 0) || 0;

      setStats({
        blogPosts: blogRes.count || 0,
        workflowTemplates: templatesRes.count || 0,
        caseStudies: caseStudiesRes.count || 0,
        users: usersRes.count || 0,
        totalBlogViews,
        totalWorkflowViews,
      });
    } catch (error) {
      console.error("Error loading stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground mt-1">Tổng quan hệ thống quản trị website</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.blogPosts}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <Eye className="h-3 w-3" />
              {stats.totalBlogViews.toLocaleString()} lượt xem
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workflow Templates</CardTitle>
            <Workflow className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.workflowTemplates}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <Eye className="h-3 w-3" />
              {stats.totalWorkflowViews.toLocaleString()} lượt xem
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Case Studies</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.caseStudies}</div>
            <p className="text-xs text-muted-foreground">Dự án đã hoàn thành</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.users}</div>
            <p className="text-xs text-muted-foreground">Người dùng trong hệ thống</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(stats.totalBlogViews + stats.totalWorkflowViews).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Tổng lượt xem nội dung</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hoạt động gần đây</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Tính năng theo dõi hoạt động sẽ được cập nhật sớm...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}