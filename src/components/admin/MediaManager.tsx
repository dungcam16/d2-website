import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon } from "lucide-react";

export function MediaManager() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Quản lý Media</h2>
        <p className="text-muted-foreground mt-1">Tải lên và quản lý hình ảnh, video</p>
      </div>

      <Card className="p-12 text-center border-dashed">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-secondary">
            <ImageIcon className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tính năng đang phát triển</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Chức năng quản lý media sẽ được cập nhật sớm. Hiện tại bạn có thể sử dụng URL trực tiếp
              từ các dịch vụ lưu trữ như Cloudinary, ImgBB, hoặc Supabase Storage.
            </p>
          </div>
          <Upload className="h-12 w-12 text-muted-foreground opacity-50" />
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-3">Hướng dẫn sử dụng</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Tải ảnh lên Supabase Storage và sao chép URL</li>
          <li>• Sử dụng dịch vụ miễn phí như ImgBB.com</li>
          <li>• Dán URL vào các trường hình ảnh khi tạo nội dung</li>
        </ul>
      </Card>
    </div>
  );
}