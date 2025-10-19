import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Upload, Image as ImageIcon, Copy, Trash2, Loader2 } from "lucide-react";

type MediaFile = {
  name: string;
  url: string;
  created_at: string;
  size: number;
};

export function MediaManager() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const { data, error } = await supabase.storage.from("media").list();
      
      if (error) throw error;

      const mediaFiles: MediaFile[] = await Promise.all(
        (data || []).map(async (file) => {
          const { data: { publicUrl } } = supabase.storage
            .from("media")
            .getPublicUrl(file.name);
          
          return {
            name: file.name,
            url: publicUrl,
            created_at: file.created_at,
            size: file.metadata?.size || 0,
          };
        })
      );

      setFiles(mediaFiles.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ));
    } catch (error) {
      console.error("Error loading media:", error);
      toast.error("Không thể tải danh sách media");
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Chỉ chấp nhận file ảnh");
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Kích thước file không được vượt quá 5MB");
      return;
    }

    setUploading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error } = await supabase.storage
        .from("media")
        .upload(fileName, file);

      if (error) throw error;

      toast.success("Upload ảnh thành công");
      loadMedia();
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Không thể upload file");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDelete = async (fileName: string) => {
    if (!confirm("Bạn có chắc muốn xóa ảnh này?")) return;

    try {
      const { error } = await supabase.storage
        .from("media")
        .remove([fileName]);

      if (error) throw error;

      toast.success("Đã xóa ảnh");
      loadMedia();
    } catch (error) {
      console.error("Error deleting file:", error);
      toast.error("Không thể xóa file");
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("Đã copy URL");
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
          <h2 className="text-2xl font-bold">Quản lý Media</h2>
          <p className="text-muted-foreground mt-1">Tải lên và quản lý hình ảnh</p>
        </div>
        <Button onClick={() => fileInputRef.current?.click()} disabled={uploading}>
          {uploading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Upload className="h-4 w-4 mr-2" />
          )}
          Upload Ảnh
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
      </div>

      {files.length === 0 ? (
        <Card className="p-12 text-center border-dashed">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-secondary">
              <ImageIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Chưa có media nào</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Nhấn nút "Upload Ảnh" để tải ảnh lên. Kích thước tối đa 5MB.
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {files.map((file) => (
            <Card key={file.name} className="overflow-hidden group">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(file.created_at).toLocaleDateString("vi-VN")}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => copyUrl(file.url)}
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Copy URL
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(file.name)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}