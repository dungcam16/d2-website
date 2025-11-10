import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Eye, Mail, Calendar, ArrowUp, ArrowDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { format, subDays } from "date-fns";

export function AnalyticsManager() {
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState({
    totalContacts: 0,
    contactsThisWeek: 0,
    contactsLastWeek: 0,
    totalNewsletterSubs: 0,
    subsThisWeek: 0,
    subsLastWeek: 0,
    conversionRate: 0,
    avgLeadScore: 0,
    topSources: [] as { source: string; count: number }[],
    topServices: [] as { service: string; count: number }[],
  });

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      const now = new Date();
      const weekAgo = subDays(now, 7);
      const twoWeeksAgo = subDays(now, 14);

      // Get contact submissions stats
      const { data: allContacts } = await supabase
        .from('contact_submissions')
        .select('*');

      const { data: contactsThisWeek } = await supabase
        .from('contact_submissions')
        .select('*')
        .gte('submitted_at', weekAgo.toISOString());

      const { data: contactsLastWeek } = await supabase
        .from('contact_submissions')
        .select('*')
        .gte('submitted_at', twoWeeksAgo.toISOString())
        .lt('submitted_at', weekAgo.toISOString());

      // Get newsletter stats
      const { data: allSubs } = await supabase
        .from('newsletter_subscribers')
        .select('*');

      const { data: subsThisWeek } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .gte('created_at', weekAgo.toISOString());

      const { data: subsLastWeek } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .gte('created_at', twoWeeksAgo.toISOString())
        .lt('created_at', weekAgo.toISOString());

      // Calculate stats
      const totalContacts = allContacts?.length || 0;
      const converted = allContacts?.filter(c => c.status === 'converted').length || 0;
      const avgScore = allContacts?.length 
        ? allContacts.reduce((sum, c) => sum + (c.lead_score || 0), 0) / allContacts.length
        : 0;

      // Top sources
      const sourceCounts: Record<string, number> = {};
      allContacts?.forEach(c => {
        const source = c.utm_source || c.source || 'direct';
        sourceCounts[source] = (sourceCounts[source] || 0) + 1;
      });
      const topSources = Object.entries(sourceCounts)
        .map(([source, count]) => ({ source, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Top services
      const serviceCounts: Record<string, number> = {};
      allContacts?.forEach(c => {
        if (c.service) {
          serviceCounts[c.service] = (serviceCounts[c.service] || 0) + 1;
        }
      });
      const topServices = Object.entries(serviceCounts)
        .map(([service, count]) => ({ service, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setAnalytics({
        totalContacts,
        contactsThisWeek: contactsThisWeek?.length || 0,
        contactsLastWeek: contactsLastWeek?.length || 0,
        totalNewsletterSubs: allSubs?.length || 0,
        subsThisWeek: subsThisWeek?.length || 0,
        subsLastWeek: subsLastWeek?.length || 0,
        conversionRate: totalContacts > 0 ? (converted / totalContacts) * 100 : 0,
        avgLeadScore: avgScore,
        topSources,
        topServices,
      });
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateGrowth = (current: number, previous: number) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous) * 100;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const contactGrowth = calculateGrowth(analytics.contactsThisWeek, analytics.contactsLastWeek);
  const subsGrowth = calculateGrowth(analytics.subsThisWeek, analytics.subsLastWeek);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Analytics & Theo dõi</h2>
        <p className="text-muted-foreground mt-1">Phân tích traffic và hành vi người dùng từ {format(subDays(new Date(), 7), "dd/MM/yyyy")}</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalContacts}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              {contactGrowth >= 0 ? (
                <ArrowUp className="h-3 w-3 text-green-600" />
              ) : (
                <ArrowDown className="h-3 w-3 text-red-600" />
              )}
              <span className={contactGrowth >= 0 ? "text-green-600" : "text-red-600"}>
                {Math.abs(contactGrowth).toFixed(1)}%
              </span>
              from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Newsletter Subs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalNewsletterSubs}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              {subsGrowth >= 0 ? (
                <ArrowUp className="h-3 w-3 text-green-600" />
              ) : (
                <ArrowDown className="h-3 w-3 text-red-600" />
              )}
              <span className={subsGrowth >= 0 ? "text-green-600" : "text-red-600"}>
                {Math.abs(subsGrowth).toFixed(1)}%
              </span>
              from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.conversionRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Contacts → Customers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Lead Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.avgLeadScore.toFixed(0)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Out of 100
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Top Sources & Services */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analytics.topSources.length > 0 ? (
                analytics.topSources.map((source, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{source.source}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{source.count} contacts</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No data yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Services Requested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analytics.topServices.length > 0 ? (
                analytics.topServices.map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm font-medium">{service.service}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{service.count} requests</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No data yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* External Tools */}
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