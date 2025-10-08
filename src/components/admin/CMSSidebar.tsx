import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FileText, 
  Workflow, 
  Image as ImageIcon,
  Settings,
  LogOut,
  Users,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    title: "Blog Posts",
    icon: FileText,
    path: "/admin/blog",
  },
  {
    title: "Workflow Templates",
    icon: Workflow,
    path: "/admin/templates",
  },
  {
    title: "Liên hệ",
    icon: MessageSquare,
    path: "/admin/contacts",
  },
];

export const CMSSidebar = () => {
  const location = useLocation();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Lỗi",
        description: "Không thể đăng xuất",
        variant: "destructive",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="text-xl font-bold">D2 Group CMS</span>
        </Link>
      </div>
      
      <Separator />
      
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-2",
                    isActive && "bg-secondary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            );
          })}
        </div>
      </ScrollArea>

      <Separator />
      
      <div className="p-3">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-destructive hover:text-destructive"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Đăng xuất
        </Button>
      </div>
    </div>
  );
};
