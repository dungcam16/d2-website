import { BlogPostsManager } from "@/components/admin/BlogPostsManager";
import { Card } from "@/components/ui/card";

const AdminBlog = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Quản lý Blog Posts</h1>
        <p className="text-muted-foreground">Tạo, chỉnh sửa và xóa các bài viết blog</p>
      </div>
      <Card className="p-6">
        <BlogPostsManager />
      </Card>
    </div>
  );
};

export default AdminBlog;
