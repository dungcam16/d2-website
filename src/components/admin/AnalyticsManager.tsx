import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";

export function AnalyticsManager() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Analytics & Theo dõi</h2>
        <p className="text-muted-foreground mt-1">Phân tích traffic và hành vi người dùng</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Google Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Thiết lập Google Analytics ID trong phần Settings để theo dõi traffic và hành vi người dùng.
            </p>
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Truy cập Google Analytics →
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Supabase Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Xem logs và analytics chi tiết từ Supabase Dashboard.
            </p>
            <a
              href={`https://supabase.com/dashboard/project/dbukhytdpvzncgwdkjip/logs/postgres-logs`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Xem Supabase Logs →
            </a>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Các metrics quan trọng</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Traffic Growth</p>
              <p className="text-sm text-muted-foreground">
                Theo dõi lượng truy cập website qua từng tháng
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">User Engagement</p>
              <p className="text-sm text-muted-foreground">
                Thời gian trung bình người dùng ở lại trang, bounce rate
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Eye className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Content Performance</p>
              <p className="text-sm text-muted-foreground">
                Bài viết và trang nào có lượt xem cao nhất
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 bg-secondary/20 border-dashed">
        <p className="text-sm text-center text-muted-foreground">
          💡 Tip: Kết hợp Google Analytics với Supabase Analytics để có cái nhìn toàn diện về hiệu suất website
        </p>
      </Card>
    </div>
  );
}