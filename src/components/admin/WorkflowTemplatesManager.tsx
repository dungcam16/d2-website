import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface WorkflowTemplate {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  is_published: boolean;
  views: number | null;
  downloads: number | null;
  published_at: string;
}

export const WorkflowTemplatesManager = () => {
  const [templates, setTemplates] = useState<WorkflowTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTemplate, setEditingTemplate] = useState<WorkflowTemplate | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    workflow_json: "",
  });

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const { data, error } = await supabase
        .from("workflow_templates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
    } catch (error) {
      console.error("Error fetching templates:", error);
      toast({
        title: "Lỗi",
        description: "Không thể tải danh sách templates",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xóa template này?")) return;

    try {
      const { error } = await supabase
        .from("workflow_templates")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Thành công",
        description: "Đã xóa template",
      });
      fetchTemplates();
    } catch (error) {
      console.error("Error deleting template:", error);
      toast({
        title: "Lỗi",
        description: "Không thể xóa template",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let workflowJson = null;
      if (formData.workflow_json.trim()) {
        try {
          workflowJson = JSON.parse(formData.workflow_json);
        } catch {
          toast({
            title: "Lỗi",
            description: "Workflow JSON không hợp lệ",
            variant: "destructive",
          });
          return;
        }
      }

      const payload = {
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        content: formData.content,
        workflow_json: workflowJson,
      };

      if (editingTemplate) {
        const { error } = await supabase
          .from("workflow_templates")
          .update(payload)
          .eq("id", editingTemplate.id);

        if (error) throw error;

        toast({
          title: "Thành công",
          description: "Đã cập nhật template",
        });
      } else {
        const { error } = await supabase
          .from("workflow_templates")
          .insert([payload]);

        if (error) throw error;

        toast({
          title: "Thành công",
          description: "Đã tạo template mới",
        });
      }

      setIsDialogOpen(false);
      setEditingTemplate(null);
      setFormData({ title: "", slug: "", description: "", content: "", workflow_json: "" });
      fetchTemplates();
    } catch (error) {
      console.error("Error saving template:", error);
      toast({
        title: "Lỗi",
        description: "Không thể lưu template",
        variant: "destructive",
      });
    }
  };

  const openEditDialog = async (template: WorkflowTemplate) => {
    try {
      const { data, error } = await supabase
        .from("workflow_templates")
        .select("*")
        .eq("id", template.id)
        .single();

      if (error) throw error;

      setEditingTemplate(data);
      setFormData({
        title: data.title,
        slug: data.slug,
        description: data.description || "",
        content: data.content,
        workflow_json: data.workflow_json ? JSON.stringify(data.workflow_json, null, 2) : "",
      });
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error loading template:", error);
      toast({
        title: "Lỗi",
        description: "Không thể tải template",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Workflow Templates</CardTitle>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => {
              setEditingTemplate(null);
              setFormData({ title: "", slug: "", description: "", content: "", workflow_json: "" });
            }}>
              <Plus className="mr-2 h-4 w-4" />
              Thêm Template
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingTemplate ? "Chỉnh sửa Template" : "Tạo Template Mới"}
              </DialogTitle>
              <DialogDescription>
                Điền thông tin workflow template
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Tiêu đề</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Mô tả</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="content">Nội dung (HTML)</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={6}
                  required
                />
              </div>
              <div>
                <Label htmlFor="workflow_json">Workflow JSON</Label>
                <Textarea
                  id="workflow_json"
                  value={formData.workflow_json}
                  onChange={(e) => setFormData({ ...formData, workflow_json: e.target.value })}
                  rows={10}
                  placeholder='{"nodes": [], "connections": {}}'
                  className="font-mono text-sm"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Hủy
                </Button>
                <Button type="submit">
                  {editingTemplate ? "Cập nhật" : "Tạo mới"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tiêu đề</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Lượt xem</TableHead>
              <TableHead>Lượt tải</TableHead>
              <TableHead className="text-right">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {templates.map((template) => (
              <TableRow key={template.id}>
                <TableCell className="font-medium">{template.title}</TableCell>
                <TableCell className="font-mono text-sm">{template.slug}</TableCell>
                <TableCell>
                  <Badge variant={template.is_published ? "default" : "secondary"}>
                    {template.is_published ? "Đã xuất bản" : "Nháp"}
                  </Badge>
                </TableCell>
                <TableCell>{template.views || 0}</TableCell>
                <TableCell>{template.downloads || 0}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openEditDialog(template)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(template.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default WorkflowTemplatesManager;
