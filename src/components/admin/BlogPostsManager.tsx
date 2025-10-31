import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Plus, Pencil, Trash2 } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  image_url: string | null;
  tags: string[];
  is_published: boolean;
  views: number;
  read_time: number;
  published_at: string;
};

export function BlogPostsManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error loading posts:", error);
      toast.error("Không thể tải danh sách bài viết");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editingPost?.title || !editingPost?.slug || !editingPost?.content) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    setLoading(true);
    try {
      if (editingPost.id) {
        const { error } = await supabase
          .from("blog_posts")
          .update(editingPost)
          .eq("id", editingPost.id);

        if (error) throw error;
        toast.success("Cập nhật bài viết thành công");
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert([editingPost as any]);

        if (error) throw error;
        toast.success("Tạo bài viết thành công");
      }

      setIsEditing(false);
      setEditingPost(null);
      loadPosts();
    } catch (error) {
      console.error("Error saving post:", error);
      toast.error("Có lỗi xảy ra khi lưu bài viết");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa bài viết này?")) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast.success("Xóa bài viết thành công");
      loadPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Có lỗi xảy ra khi xóa bài viết");
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
          {editingPost?.id ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Tiêu đề</label>
            <Input
              value={editingPost?.title || ""}
              onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
              placeholder="Nhập tiêu đề bài viết"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Slug (URL)</label>
            <Input
              value={editingPost?.slug || ""}
              onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
              placeholder="ten-bai-viet"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tóm tắt</label>
            <Textarea
              value={editingPost?.excerpt || ""}
              onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
              placeholder="Nhập tóm tắt bài viết"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Nội dung (HTML)</label>
            <Textarea
              value={editingPost?.content || ""}
              onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
              placeholder="Nhập nội dung bài viết (có thể sử dụng HTML)"
              rows={15}
              className="font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Hỗ trợ HTML tags: h1-h6, p, strong, em, ul, ol, li, a, img, blockquote, code, pre
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">URL hình ảnh</label>
            <Input
              value={editingPost?.image_url || ""}
              onChange={(e) => setEditingPost({ ...editingPost, image_url: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tags (phân cách bằng dấu phẩy)</label>
            <Input
              value={editingPost?.tags?.join(", ") || ""}
              onChange={(e) => setEditingPost({ ...editingPost, tags: e.target.value.split(",").map(t => t.trim()) })}
              placeholder="automation, ai, workflow"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_published"
              checked={editingPost?.is_published || false}
              onChange={(e) => setEditingPost({ ...editingPost, is_published: e.target.checked })}
              className="rounded"
            />
            <label htmlFor="is_published" className="text-sm font-medium">
              Công khai bài viết
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
                setEditingPost(null);
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
        <h2 className="text-2xl font-bold">Quản lý bài viết Blog</h2>
        <Button
          onClick={() => {
            setEditingPost({
              title: "",
              slug: "",
              excerpt: "",
              content: "",
              author: "D2 Group",
              tags: [],
              is_published: false,
              read_time: 5,
              views: 0,
            });
            setIsEditing(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Tạo bài viết mới
        </Button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
                <div className="flex gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                  <span>👁 {post.views} lượt xem</span>
                  <span>📖 {post.read_time} phút đọc</span>
                  <span>{post.is_published ? "✅ Công khai" : "❌ Nháp"}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditingPost(post);
                    setIsEditing(true);
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(post.id)}
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
