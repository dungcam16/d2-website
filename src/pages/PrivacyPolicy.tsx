import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Users, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Chính Sách Bảo Mật
            </h1>
            <p className="text-xl text-muted-foreground">
              Cam kết bảo vệ thông tin cá nhân của khách hàng
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Cập nhật lần cuối: 27 tháng 09, 2024
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Introduction */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Eye className="h-6 w-6 text-primary mr-2" />
                Giới Thiệu
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                D2 Group cam kết bảo vệ quyền riêng tư và thông tin cá nhân của khách hàng. 
                Chính sách này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ 
                thông tin của bạn khi sử dụng dịch vụ của chúng tôi.
              </p>
            </section>

            {/* Information Collection */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Database className="h-6 w-6 text-primary mr-2" />
                Thông Tin Chúng Tôi Thu Thập
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Thông tin cá nhân:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Họ tên, email, số điện thoại</li>
                    <li>Thông tin công ty và vị trí công việc</li>
                    <li>Địa chỉ liên hệ</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Thông tin kỹ thuật:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Địa chỉ IP, loại trình duyệt</li>
                    <li>Dữ liệu cookies và session</li>
                    <li>Lịch sử truy cập website</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Usage */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary mr-2" />
                Cách Chúng Tôi Sử Dụng Thông Tin
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cung cấp và cải thiện dịch vụ automation marketing</li>
                <li>Liên hệ và hỗ trợ khách hàng</li>
                <li>Gửi thông tin về sản phẩm và dịch vụ mới</li>
                <li>Phân tích và tối ưu hóa hiệu suất website</li>
                <li>Tuân thủ các yêu cầu pháp lý</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Lock className="h-6 w-6 text-primary mr-2" />
                Bảo Mật Thông Tin
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức để bảo vệ thông tin:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Mã hóa dữ liệu SSL/TLS</li>
                  <li>Kiểm soát truy cập nghiêm ngặt</li>
                  <li>Sao lưu dữ liệu định kỳ</li>
                  <li>Giám sát bảo mật 24/7</li>
                  <li>Đào tạo nhân viên về bảo mật</li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <UserCheck className="h-6 w-6 text-primary mr-2" />
                Quyền Của Khách Hàng
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Quyền truy cập và chỉnh sửa thông tin cá nhân</li>
                <li>Quyền yêu cầu xóa dữ liệu</li>
                <li>Quyền từ chối nhận thông tin marketing</li>
                <li>Quyền khiếu nại về việc xử lý dữ liệu</li>
                <li>Quyền chuyển dữ liệu sang nhà cung cấp khác</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Liên Hệ</h2>
              <p className="text-muted-foreground mb-4">
                Nếu bạn có câu hỏi về chính sách bảo mật này, vui lòng liên hệ:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: info@d2group.co</p>
                <p>Điện thoại: +84 977 027 634</p>
                <p>Địa chỉ: Số 3, Nguyễn Cơ Thạch, Phường An Khánh, TP.HCM</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;