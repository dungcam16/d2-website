import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Workflow, 
  FolderKanban,
  Users, 
  Settings,
  Image,
  BarChart3,
  LogOut,
  BookOpen,
  Mail,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AdminLayoutProps {
  children: ReactNode;
  onLogout: () => void;
}

export function AdminLayout({ children, onLogout }: AdminLayoutProps) {
  const location = useLocation();
  const currentPath = location.hash.replace("#", "") || "dashboard";

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "blog", label: "Blog Posts", icon: FileText },
    { id: "templates", label: "Workflow Templates", icon: Workflow },
    { id: "case-studies", label: "Case Studies", icon: FolderKanban },
    { id: "migration-guides", label: "Migration Guides", icon: BookOpen },
    { id: "contact-submissions", label: "Contact Submissions", icon: Mail },
    { id: "demo-bookings", label: "Demo Bookings", icon: Calendar },
    { id: "newsletter-subscribers", label: "Newsletter", icon: Mail },
    { id: "users", label: "Users & Roles", icon: Users },
    { id: "media", label: "Media Library", icon: Image },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold">CMS Admin</h1>
          <p className="text-sm text-muted-foreground">D2 Group</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.id;
            
            return (
              <Link
                key={item.id}
                to={`/admin#${item.id}`}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Button onClick={onLogout} variant="outline" size="sm" className="w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}