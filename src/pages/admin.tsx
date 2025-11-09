import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { BlogPostsManager } from "@/components/admin/BlogPostsManager";
import { WorkflowTemplatesManager } from "@/components/admin/WorkflowTemplatesManager";
import { CaseStudiesManager } from "@/components/admin/CaseStudiesManager";
import { MigrationGuidesManager } from "@/components/admin/MigrationGuidesManager";
import { UsersManager } from "@/components/admin/UsersManager";
import { SettingsManager } from "@/components/admin/SettingsManager";
import { MediaManager } from "@/components/admin/MediaManager";
import { AnalyticsManager } from "@/components/admin/AnalyticsManager";
import { Dashboard } from "@/components/admin/Dashboard";
import { AdminLayout } from "@/components/admin/AdminLayout";
import ContactSubmissionsManager from "@/components/admin/ContactSubmissionsManager";
import NewsletterSubscribersManager from "@/components/admin/NewsletterSubscribersManager";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Admin() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentSection = location.hash.replace("#", "") || "dashboard";

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    try {
      // Get current session first
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !session) {
        console.log("No active session");
        setShowLogin(true);
        setLoading(false);
        return;
      }

      console.log("Session found, verifying admin status via Edge Function");

      // Use Edge Function for server-side admin verification
      const { data, error } = await supabase.functions.invoke('verify-admin');

      if (error) {
        console.error("Error verifying admin status:", error);
        toast.error("Error verifying admin access. Please try again.");
        setShowLogin(true);
        setLoading(false);
        return;
      }

      if (data?.isAdmin) {
        console.log("Admin role confirmed");
        setIsAdmin(true);
      } else {
        console.log("User is not an admin");
        toast.error("You do not have permission to access this page.");
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error in checkAdminStatus:", error);
      toast.error("An error occurred while verifying your permissions.");
      setShowLogin(true);
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`,
          },
        });

        if (error) throw error;

        toast.success("Sign up successful! Please contact an administrator to grant you permissions.");
        setIsSignUp(false);
        setLoading(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        await checkAdminStatus();
      }
    } catch (error: any) {
      toast.error(error.message || (isSignUp ? "Sign up failed" : "Login failed"));
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully.");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (showLogin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold mb-2">Admin CMS</h1>
            <p className="text-muted-foreground">
              {isSignUp ? "Create a new account" : "Log in to access the management system"}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
                minLength={6}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {isSignUp ? "Sign Up" : "Log In"}
            </Button>

            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
            </button>
          </form>
        </Card>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      {currentSection === "dashboard" && <Dashboard />}
      {currentSection === "blog" && <BlogPostsManager />}
      {currentSection === "templates" && <WorkflowTemplatesManager />}
      {currentSection === "case-studies" && <CaseStudiesManager />}
      {currentSection === "migration-guides" && <MigrationGuidesManager />}
      {currentSection === "contact-submissions" && <ContactSubmissionsManager />}
      {currentSection === "newsletter-subscribers" && <NewsletterSubscribersManager />}
      {currentSection === "users" && <UsersManager />}
      {currentSection === "media" && <MediaManager />}
      {currentSection === "analytics" && <AnalyticsManager />}
      {currentSection === "settings" && <SettingsManager />}
    </AdminLayout>
  );
}
