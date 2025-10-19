import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Shield, UserX, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type UserRole = {
  id: string;
  user_id: string;
  role: string;
  created_at: string;
};

type UserWithEmail = {
  user_id: string;
  email: string;
  role: string;
  created_at: string;
};

export function UsersManager() {
  const [users, setUsers] = useState<UserWithEmail[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<"admin" | "moderator" | "user">("user");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      // Get all user roles
      const { data: roles, error } = await supabase
        .from("user_roles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Get user details from auth.users  
      const userIds = roles?.map(r => r.user_id) || [];
      const { data, error: authError } = await supabase.auth.admin.listUsers();
      
      if (authError) throw authError;

      // Combine data
      const usersWithEmail = (roles || []).map(role => {
        const authUser = data.users?.find((u: any) => u.id === role.user_id);
        return {
          user_id: role.user_id,
          email: authUser?.email || "Unknown",
          role: role.role,
          created_at: role.created_at,
        };
      });

      setUsers(usersWithEmail);
    } catch (error) {
      console.error("Error loading users:", error);
      toast.error("Không thể tải danh sách người dùng");
    } finally {
      setLoading(false);
    }
  };

  const handleAddRole = async () => {
    if (!newUserEmail.trim()) {
      toast.error("Vui lòng nhập email");
      return;
    }

    setLoading(true);
    try {
      // Get user by email
      const { data, error: searchError } = await supabase.auth.admin.listUsers();
      
      if (searchError) throw searchError;

      const user = data.users?.find((u: any) => u.email === newUserEmail);
      
      if (!user) {
        toast.error("Không tìm thấy người dùng với email này");
        setLoading(false);
        return;
      }

      // Add role
      const { error } = await supabase
        .from("user_roles")
        .insert([{ user_id: user.id, role: selectedRole }]);

      if (error) throw error;

      toast.success(`Đã thêm quyền ${selectedRole} cho ${newUserEmail}`);
      setNewUserEmail("");
      loadUsers();
    } catch (error: any) {
      console.error("Error adding role:", error);
      if (error.code === "23505") {
        toast.error("Người dùng này đã có quyền trong hệ thống");
      } else {
        toast.error("Có lỗi xảy ra khi thêm quyền");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveRole = async (userId: string, role: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa quyền ${role} của người dùng này?`)) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("user_roles")
        .delete()
        .eq("user_id", userId)
        .eq("role", role as any);

      if (error) throw error;

      toast.success("Đã xóa quyền thành công");
      loadUsers();
    } catch (error) {
      console.error("Error removing role:", error);
      toast.error("Có lỗi xảy ra khi xóa quyền");
    } finally {
      setLoading(false);
    }
  };

  if (loading && users.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Quản lý Người dùng & Phân quyền</h2>
        <p className="text-muted-foreground mt-1">Thêm hoặc xóa quyền truy cập của người dùng</p>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Thêm quyền cho người dùng</h3>
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Email của người dùng"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
            />
          </div>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as "admin" | "moderator" | "user")}
            className="px-3 py-2 border rounded-md bg-background"
          >
            <option value="user">User</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
          <Button onClick={handleAddRole} disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Shield className="h-4 w-4 mr-2" />}
            Thêm quyền
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Lưu ý: Người dùng phải đã đăng ký tài khoản trước khi được phân quyền
        </p>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Danh sách người dùng ({users.length})</h3>
        {users.map((user) => (
          <Card key={`${user.user_id}-${user.role}`} className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{user.email}</span>
                  <Badge variant={
                    user.role === "admin" ? "default" : 
                    user.role === "moderator" ? "secondary" : 
                    "outline"
                  }>
                    {user.role}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Được thêm: {new Date(user.created_at).toLocaleDateString("vi-VN")}
                </p>
              </div>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleRemoveRole(user.user_id, user.role)}
                disabled={loading}
              >
                <UserX className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}

        {users.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">Chưa có người dùng nào trong hệ thống</p>
          </Card>
        )}
      </div>
    </div>
  );
}