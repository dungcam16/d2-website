import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Scale, AlertTriangle, Users, CheckCircle, XCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <FileText className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Điều Khoản Dịch Vụ
            </h1>
            <p className="text-xl text-muted-foreground">
              Quy định sử dụng dịch vụ của D2 Group
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
                <Scale className="h-6 w-6 text-primary mr-2" />
                Điều Khoản Chung
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bằng việc sử dụng dịch vụ của D2 Group, bạn đồng ý tuân thủ các điều khoản và 
                điều kiện được quy định dưới đây. Vui lòng đọc kỹ trước khi sử dụng dịch vụ.
              </p>
            </section>

            {/* Service Description */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary mr-2" />
                Dịch Vụ Cung Cấp
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>D2 Group cung cấp các dịch vụ automation marketing bao gồm:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Phát triển và triển khai Chatbot đa nền tảng</li>
                  <li>Giải pháp Zalo Official Account</li>
                  <li>Tự động hóa quy trình với N8N</li>
                  <li>Tối ưu hóa SEO và Content Marketing</li>
                  <li>Tư vấn và tối ưu quy trình kinh doanh</li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-primary mr-2" />
                Trách Nhiệm Của Khách Hàng
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cung cấp thông tin chính xác và đầy đủ</li>
                <li>Sử dụng dịch vụ cho mục đích hợp pháp</li>
                <li>Thanh toán đúng hạn theo thỏa thuận</li>
                <li>Bảo mật thông tin đăng nhập và tài khoản</li>
                <li>Tuân thủ các quy định về quyền sở hữu trí tuệ</li>
                <li>Không sử dụng dịch vụ để spam hoặc gửi nội dung không phù hợp</li>
              </ul>
            </section>

            {/* Prohibited Activities */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <XCircle className="h-6 w-6 text-primary mr-2" />
                Hành Vi Bị Cấm
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Sử dụng dịch vụ cho mục đích bất hợp pháp</li>
                <li>Phát tán virus, malware hoặc mã độc hại</li>
                <li>Tấn công hoặc gây gián đoạn hệ thống</li>
                <li>Sao chép, phân phối trái phép nội dung của D2 Group</li>
                <li>Thu thập thông tin cá nhân trái phép</li>
                <li>Gửi spam hoặc nội dung quảng cáo không mong muốn</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Điều Khoản Thanh Toán</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>Phương thức thanh toán:</strong> Chuyển khoản ngân hàng, thẻ tín dụng</p>
                <p><strong>Thời hạn thanh toán:</strong> Theo thỏa thuận trong hợp đồng</p>
                <p><strong>Chính sách hoàn tiền:</strong> Áp dụng theo từng loại dịch vụ cụ thể</p>
                <p><strong>Phí phạt:</strong> 2%/tháng cho thanh toán chậm trễ</p>
              </div>
            </section>

            {/* Liability */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-primary mr-2" />
                Giới Hạn Trách Nhiệm
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>D2 Group cam kết cung cấp dịch vụ chất lượng cao, tuy nhiên:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Không chịu trách nhiệm cho thiệt hại gián tiếp</li>
                  <li>Trách nhiệm tối đa không vượt quá giá trị hợp đồng</li>
                  <li>Không đảm bảo dịch vụ hoạt động 100% không gián đoạn</li>
                  <li>Khách hàng chịu trách nhiệm về nội dung và dữ liệu của mình</li>
                </ul>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-card/50 rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Chấm Dứt Dịch Vụ</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Dịch vụ có thể bị chấm dứt trong các trường hợp:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Vi phạm điều khoản sử dụng</li>
                  <li>Không thanh toán đúng hạn</li>
                  <li>Yêu cầu chấm dứt từ một trong hai bên</li>
                  <li>Thay đổi chính sách dịch vụ</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Liên Hệ</h2>
              <p className="text-muted-foreground mb-4">
                Mọi thắc mắc về điều khoản dịch vụ, vui lòng liên hệ:
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

export default TermsOfService;