import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Save } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Setting = {
  id: string;
  setting_key: string;
  setting_value: any; // Json type from Supabase
  description: string | null;
};

export function SettingsManager() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*");

      if (error) throw error;

      const settingsMap: Record<string, string> = {};
      (data || []).forEach((setting: any) => {
        settingsMap[setting.setting_key] = setting.setting_value?.value || "";
      });

      setSettings(settingsMap);
    } catch (error) {
      console.error("Error loading settings:", error);
      toast.error("Không thể tải cài đặt");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Update each setting
      const updates = Object.entries(settings).map(([key, value]) =>
        supabase
          .from("site_settings")
          .update({ setting_value: { value }, updated_at: new Date().toISOString() })
          .eq("setting_key", key)
      );

      const results = await Promise.all(updates);
      const hasError = results.some(r => r.error);

      if (hasError) throw new Error("Failed to update some settings");

      toast.success("Đã lưu cài đặt thành công");
    } catch (error) {
      console.error("Error saving settings:", error);
      toast.error("Có lỗi xảy ra khi lưu cài đặt");
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Cài đặt Website</h2>
          <p className="text-muted-foreground mt-1">Cấu hình thông tin và tính năng website</p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
          Lưu cài đặt
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">Chung</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="contact">Liên hệ</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Tên website</label>
              <Input
                value={settings.site_name || ""}
                onChange={(e) => updateSetting("site_name", e.target.value)}
                placeholder="D2 Group"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mô tả website</label>
              <Textarea
                value={settings.site_description || ""}
                onChange={(e) => updateSetting("site_description", e.target.value)}
                placeholder="AI Automation Agency for Remote Teams"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Ngôn ngữ mặc định</label>
              <select
                value={settings.language_default || "vi"}
                onChange={(e) => updateSetting("language_default", e.target.value)}
                className="w-full px-3 py-2 border rounded-md bg-background"
              >
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">SEO Title</label>
              <Input
                value={settings.seo_title || ""}
                onChange={(e) => updateSetting("seo_title", e.target.value)}
                placeholder="D2 Group — AI Automation Agency"
              />
              <p className="text-xs text-muted-foreground mt-1">Tiêu đề hiển thị trên Google (tối đa 60 ký tự)</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">SEO Description</label>
              <Textarea
                value={settings.seo_description || ""}
                onChange={(e) => updateSetting("seo_description", e.target.value)}
                placeholder="Professional AI automation agency serving remote teams"
                rows={3}
              />
              <p className="text-xs text-muted-foreground mt-1">Mô tả hiển thị trên Google (tối đa 160 ký tự)</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">SEO Keywords</label>
              <Input
                value={settings.seo_keywords || ""}
                onChange={(e) => updateSetting("seo_keywords", e.target.value)}
                placeholder="AI automation, n8n, RAG systems"
              />
              <p className="text-xs text-muted-foreground mt-1">Từ khóa SEO, phân cách bằng dấu phẩy</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Google Analytics ID</label>
              <Input
                value={settings.google_analytics_id || ""}
                onChange={(e) => updateSetting("google_analytics_id", e.target.value)}
                placeholder="G-XXXXXXXXXX"
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <Card className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Facebook Page URL</label>
              <Input
                value={settings.social_facebook || ""}
                onChange={(e) => updateSetting("social_facebook", e.target.value)}
                placeholder="https://facebook.com/yourpage"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn Company URL</label>
              <Input
                value={settings.social_linkedin || ""}
                onChange={(e) => updateSetting("social_linkedin", e.target.value)}
                placeholder="https://linkedin.com/company/yourcompany"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Twitter/X Profile URL</label>
              <Input
                value={settings.social_twitter || ""}
                onChange={(e) => updateSetting("social_twitter", e.target.value)}
                placeholder="https://twitter.com/yourhandle"
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email liên hệ</label>
              <Input
                type="email"
                value={settings.contact_email || ""}
                onChange={(e) => updateSetting("contact_email", e.target.value)}
                placeholder="contact@d2group.co"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Số điện thoại</label>
              <Input
                type="tel"
                value={settings.contact_phone || ""}
                onChange={(e) => updateSetting("contact_phone", e.target.value)}
                placeholder="+84 xxx xxx xxx"
              />
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}