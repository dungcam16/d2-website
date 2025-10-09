import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Plus, Pencil, Trash2 } from "lucide-react";

type WorkflowTemplate = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  thumbnail_url: string | null;
  category: string | null;
  tags: string[];
  difficulty_level: string | null;
  integrations: string[];
  workflow_json: any;
  node_count: number;
  is_published: boolean;
  downloads: number;
  views: number;
  published_at: string;
};

export function WorkflowTemplatesManager() {
  const [templates, setTemplates] = useState<WorkflowTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTemplate, setEditingTemplate] = useState<Partial<WorkflowTemplate> | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    try {
      const { data, error } = await supabase
        .from("workflow_templates")
        .select("*")
        .order("published_at", { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
    } catch (error) {
      console.error("Error loading templates:", error);
      toast.error("Không thể tải danh sách templates");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editingTemplate?.title || !editingTemplate?.slug || !editingTemplate?.content) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    setLoading(true);
    try {
      if (editingTemplate.id) {
        const { error } = await supabase
          .from("workflow_templates")
          .update(editingTemplate)
          .eq("id", editingTemplate.id);

        if (error) throw error;
        toast.success("Cập nhật template thành công");
      } else {
        const { error } = await supabase
          .from("workflow_templates")
          .insert([editingTemplate as any]);

        if (error) throw error;
        toast.success("Tạo template thành công");
      }

      setIsEditing(false);
      setEditingTemplate(null);
      loadTemplates();
    } catch (error) {
      console.error("Error saving template:", error);
      toast.error("Có lỗi xảy ra khi lưu template");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa template này?")) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("workflow_templates")
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast.success("Xóa template thành công");
      loadTemplates();
    } catch (error) {
      console.error("Error deleting template:", error);
      toast.error("Có lỗi xảy ra khi xóa template");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !isEditing) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isEditing) {
    return (
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">
          {editingTemplate?.id ? "Chỉnh sửa template" : "Tạo template mới"}
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Tiêu đề</label>
            <Input
              value={editingTemplate?.title || ""}
              onChange={(e) => setEditingTemplate({ ...editingTemplate, title: e.target.value })}
              placeholder="Nhập tiêu đề template"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Slug (URL)</label>
            <Input
              value={editingTemplate?.slug || ""}
              onChange={(e) => setEditingTemplate({ ...editingTemplate, slug: e.target.value })}
              placeholder="ten-template"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mô tả</label>
            <Textarea
              value={editingTemplate?.description || ""}
              onChange={(e) => setEditingTemplate({ ...editingTemplate, description: e.target.value })}
              placeholder="Nhập mô tả template"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Nội dung</label>
            <Textarea
              value={editingTemplate?.content || ""}
              onChange={(e) => setEditingTemplate({ ...editingTemplate, content: e.target.value })}
              placeholder="Nhập nội dung template"
              rows={10}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Workflow JSON</label>
            <Textarea
              value={typeof editingTemplate?.workflow_json === 'string' ? editingTemplate.workflow_json : JSON.stringify(editingTemplate?.workflow_json || {}, null, 2)}
              onChange={(e) => {
                try {
                  const json = JSON.parse(e.target.value);
                  setEditingTemplate({ ...editingTemplate, workflow_json: json });
                } catch {
                  // Keep the string value if it's not valid JSON yet
                  setEditingTemplate({ ...editingTemplate, workflow_json: e.target.value });
                }
              }}
              placeholder='{"nodes": [], "connections": {}}'
              rows={8}
              className="font-mono text-xs"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">URL hình thu nhỏ</label>
            <Input
              value={editingTemplate?.thumbnail_url || ""}
              onChange={(e) => setEditingTemplate({ ...editingTemplate, thumbnail_url: e.target.value })}
              placeholder="https://example.com/thumbnail.jpg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Danh mục</label>
              <Input
                value={editingTemplate?.category || ""}
                onChange={(e) => setEditingTemplate({ ...editingTemplate, category: e.target.value })}
                placeholder="Automation"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Độ khó</label>
              <Input
                value={editingTemplate?.difficulty_level || ""}
                onChange={(e) => setEditingTemplate({ ...editingTemplate, difficulty_level: e.target.value })}
                placeholder="Beginner, Intermediate, Advanced"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tags (phân cách bằng dấu phẩy)</label>
            <Input
              value={editingTemplate?.tags?.join(", ") || ""}
              onChange={(e) => setEditingTemplate({ ...editingTemplate, tags: e.target.value.split(",").map(t => t.trim()) })}
              placeholder="automation, n8n, workflow"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Integrations (phân cách bằng dấu phẩy)</label>
            <Input
              value={editingTemplate?.integrations?.join(", ") || ""}
              onChange={(e) => setEditingTemplate({ ...editingTemplate, integrations: e.target.value.split(",").map(t => t.trim()) })}
              placeholder="Gmail, Slack, Google Sheets"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_published"
              checked={editingTemplate?.is_published || false}
              onChange={(e) => setEditingTemplate({ ...editingTemplate, is_published: e.target.checked })}
              className="rounded"
            />
            <label htmlFor="is_published" className="text-sm font-medium">
              Công khai template
            </label>
          </div>

          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Lưu
            </Button>
            <Button
              onClick={() => {
                setIsEditing(false);
                setEditingTemplate(null);
              }}
              variant="outline"
            >
              Hủy
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quản lý Workflow Templates</h2>
        <Button
          onClick={() => {
            setEditingTemplate({
              title: "",
              slug: "",
              description: "",
              content: "",
              author: "D2 Group",
              tags: [],
              integrations: [],
              is_published: false,
              node_count: 0,
              downloads: 0,
              views: 0,
              workflow_json: {},
            });
            setIsEditing(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Tạo template mới
        </Button>
      </div>

      <div className="grid gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{template.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                <div className="flex gap-2 mt-2">
                  {template.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                  <span>👁 {template.views} lượt xem</span>
                  <span>⬇️ {template.downloads} tải xuống</span>
                  <span>🔧 {template.node_count} nodes</span>
                  <span>{template.is_published ? "✅ Công khai" : "❌ Nháp"}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditingTemplate(template);
                    setIsEditing(true);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(template.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
