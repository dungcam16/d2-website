import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Plus, Pencil, Trash2 } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  client: string | null;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  views: number;
  is_published: boolean;
  order_index: number;
};

export function CaseStudiesManager() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<Partial<CaseStudy> | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error) {
      console.error("Error loading case studies:", error);
      toast.error("Không thể tải danh sách case studies");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editingItem?.title || !editingItem?.slug) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    setLoading(true);
    try {
      if (editingItem.id) {
        const { error } = await supabase
          .from("case_studies")
          .update(editingItem)
          .eq("id", editingItem.id);

        if (error) throw error;
        toast.success("Cập nhật case study thành công");
      } else {
        const { error } = await supabase
          .from("case_studies")
          .insert([editingItem as any]);

        if (error) throw error;
        toast.success("Tạo case study thành công");
      }

      setIsEditing(false);
      setEditingItem(null);
      loadCaseStudies();
    } catch (error) {
      console.error("Error saving case study:", error);
      toast.error("Có lỗi xảy ra khi lưu case study");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa case study này?")) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("case_studies")
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast.success("Xóa case study thành công");
      loadCaseStudies();
    } catch (error) {
      console.error("Error deleting case study:", error);
      toast.error("Có lỗi xảy ra khi xóa case study");
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
          {editingItem?.id ? "Chỉnh sửa Case Study" : "Tạo Case Study mới"}
        </h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Tiêu đề</label>
              <Input
                value={editingItem?.title || ""}
                onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                placeholder="Nhập tiêu đề"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Slug (URL)</label>
              <Input
                value={editingItem?.slug || ""}
                onChange={(e) => setEditingItem({ ...editingItem, slug: e.target.value })}
                placeholder="ten-case-study"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <Input
                value={editingItem?.category || ""}
                onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                placeholder="Automation, AI, etc"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Client</label>
              <Input
                value={editingItem?.client || ""}
                onChange={(e) => setEditingItem({ ...editingItem, client: e.target.value })}
                placeholder="Tên khách hàng"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tóm tắt</label>
            <Textarea
              value={editingItem?.excerpt || ""}
              onChange={(e) => setEditingItem({ ...editingItem, excerpt: e.target.value })}
              placeholder="Nhập tóm tắt"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Nội dung</label>
            <div className="bg-background rounded-md border border-input">
              <ReactQuill
                value={editingItem?.content || ""}
                onChange={(value) => setEditingItem({ ...editingItem, content: value })}
                placeholder="Nhập nội dung case study"
                modules={{
                  toolbar: [
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'align': [] }],
                    ['link', 'image', 'video'],
                    ['blockquote', 'code-block'],
                    ['clean']
                  ]
                }}
                style={{ minHeight: "300px" }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">URL hình ảnh</label>
            <Input
              value={editingItem?.image_url || ""}
              onChange={(e) => setEditingItem({ ...editingItem, image_url: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_published"
              checked={editingItem?.is_published || false}
              onChange={(e) => setEditingItem({ ...editingItem, is_published: e.target.checked })}
              className="rounded"
            />
            <label htmlFor="is_published" className="text-sm font-medium">
              Công khai case study
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
                setEditingItem(null);
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
        <div>
          <h2 className="text-2xl font-bold">Quản lý Case Studies</h2>
          <p className="text-muted-foreground mt-1">Quản lý các dự án đã hoàn thành</p>
        </div>
        <Button
          onClick={() => {
            setEditingItem({
              title: "",
              slug: "",
              category: "",
              client: "",
              excerpt: "",
              content: "",
              image_url: "",
              is_published: false,
              views: 0,
              order_index: caseStudies.length,
            });
            setIsEditing(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Tạo Case Study mới
        </Button>
      </div>

      <div className="grid gap-4">
        {caseStudies.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.excerpt}</p>
                {item.category && (
                  <span className="text-xs bg-secondary px-2 py-1 rounded mt-2 inline-block">
                    {item.category}
                  </span>
                )}
                <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                  <span>👁 {item.views} lượt xem</span>
                  {item.client && <span>👤 {item.client}</span>}
                  <span>{item.is_published ? "✅ Công khai" : "❌ Nháp"}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditingItem(item);
                    setIsEditing(true);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(item.id)}
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