import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

export const ZaloPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    // Check if popup was already dismissed
    const isDismissed = localStorage.getItem('zalo-popup-dismissed');
    
    if (!isDismissed) {
      // Show icon after a short delay when component mounts
      const timer = setTimeout(() => {
        setShowIcon(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setShowIcon(false);
    // Save dismissed state to localStorage
    localStorage.setItem('zalo-popup-dismissed', 'true');
  };

  const handleIconClick = () => {
    setIsOpen(true);
  };

  if (!showIcon) return null;

  return (
    <>
      {/* Floating Icon */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleIconClick}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
            title="Khởi tạo Zalo OA chỉ 199K"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Full Popup Dialog */}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-white">
          <div className="relative">
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 hover:bg-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">
                  💙 ZALO OA – KÊNH CHĂM KHÁCH HÀNG RIÊNG CHO DOANH NGHIỆP
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Bạn có thể chạy ads ở khắp nơi, nhưng chỉ <strong>Zalo OA</strong> mới là nơi khách hàng thực sự "thuộc về bạn".
                </p>
                
                <p>
                  Từ lần đầu inbox đến đơn hàng lặp lại, tất cả đều cần một hệ thống chăm sóc riêng biệt – chủ động – cá nhân hoá.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-3">
                    👉 Khởi tạo Zalo OA chỉ 199K – full hỗ trợ A–Z
                  </p>
                  
                  <ul className="space-y-2 text-sm">
                    <li>✅ Đăng ký OA từ A–Z</li>
                    <li>✅ Tick vàng doanh nghiệp uy tín</li>
                    <li>✅ Hướng dẫn nuôi tệp – phân loại khách – gửi tin hiệu quả</li>
                    <li>✅ Bảo hành 1–1 khi gặp lỗi xác minh</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-800 mb-2">
                    💬 Đừng để OA chỉ để "đăng bài cho có"!
                  </p>
                  <p className="text-sm">
                    → Đây là nền tảng giúp bạn lưu giữ – chăm sóc – nuôi dưỡng khách hàng riêng
                  </p>
                  <p className="text-sm">
                    → Và khi khách đã ở lại, bạn có thể bán hàng nhiều lần… mà không tốn thêm 1 đồng quảng cáo.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    📩 Gửi ngay <strong>"TẠO OA 199K"</strong> để D2 GROUP hỗ trợ khởi tạo nhanh chóng, không phát sinh chi phí.
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    ⏳ Duyệt trong 1–3 ngày, phù hợp cho cả shop nhỏ, startup đến thương hiệu lớn.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
                    onClick={handleClose}
                  >
                    Liên hệ tư vấn ngay
                  </Button>
                </Link>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">#d2group #zalooa</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};