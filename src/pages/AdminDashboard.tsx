import { DashboardStats } from "@/components/admin/DashboardStats";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Chào mừng đến với hệ thống quản trị nội dung D2 Group</p>
      </div>

      <DashboardStats />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
            <CardDescription>Các thay đổi mới nhất trên website</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Chưa có hoạt động nào</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hướng dẫn nhanh</CardTitle>
            <CardDescription>Các tính năng chính của CMS</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <p className="font-medium">Blog Posts</p>
              <p className="text-muted-foreground">Quản lý bài viết, tạo mới, chỉnh sửa và xóa</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Workflow Templates</p>
              <p className="text-muted-foreground">Quản lý N8N workflow templates với JSON editor</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
