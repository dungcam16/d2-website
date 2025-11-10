import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { 
  Loader2, 
  Calendar,
  Mail, 
  Phone, 
  Building2, 
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  Download
} from "lucide-react";
import { format } from "date-fns";

type DemoBooking = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  company_size: string | null;
  use_case: string | null;
  preferred_date: string | null;
  preferred_time: string | null;
  notes: string | null;
  status: string;
  created_at: string;
};

export function DemoBookingsManager() {
  const [bookings, setBookings] = useState<DemoBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('demo_bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading bookings",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('demo_bookings')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status updated",
        description: "Demo booking status has been updated successfully.",
      });

      loadBookings();
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Company Size", "Use Case", "Preferred Date", "Status"];
    const csvData = bookings.map(booking => [
      booking.name,
      booking.email,
      booking.phone || "",
      booking.company || "",
      booking.company_size || "",
      booking.use_case || "",
      booking.preferred_date ? format(new Date(booking.preferred_date), "yyyy-MM-dd") : "",
      booking.status
    ]);

    const csv = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `demo-bookings-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; icon: any }> = {
      scheduled: { variant: "default", icon: Calendar },
      completed: { variant: "default", icon: CheckCircle2 },
      cancelled: { variant: "destructive", icon: XCircle },
      no_show: { variant: "secondary", icon: AlertCircle },
    };

    const config = variants[status] || variants.scheduled;
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {status.replace('_', ' ')}
      </Badge>
    );
  };

  const filteredBookings = filterStatus === "all" 
    ? bookings 
    : bookings.filter(b => b.status === filterStatus);

  const stats = {
    total: bookings.length,
    scheduled: bookings.filter(b => b.status === 'scheduled').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Demo Bookings</h2>
          <p className="text-muted-foreground mt-1">
            Manage demo requests and calendar
          </p>
        </div>
        <Button onClick={exportToCSV} variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Total</div>
          <div className="text-2xl font-bold">{stats.total}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Scheduled</div>
          <div className="text-2xl font-bold text-primary">{stats.scheduled}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Completed</div>
          <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Cancelled</div>
          <div className="text-2xl font-bold text-red-600">{stats.cancelled}</div>
        </Card>
      </div>

      {/* Filter */}
      <div className="flex gap-4 items-center">
        <span className="text-sm font-medium">Filter by status:</span>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
            <SelectItem value="no_show">No Show</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No demo bookings found</p>
          </Card>
        ) : (
          filteredBookings.map((booking) => (
            <Card key={booking.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{booking.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Booked {format(new Date(booking.created_at), "PPpp")}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  {getStatusBadge(booking.status)}
                  <Select
                    value={booking.status}
                    onValueChange={(value) => updateStatus(booking.id, value)}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="no_show">No Show</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${booking.email}`} className="hover:underline">
                    {booking.email}
                  </a>
                </div>
                {booking.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${booking.phone}`} className="hover:underline">
                      {booking.phone}
                    </a>
                  </div>
                )}
                {booking.company && (
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    {booking.company} {booking.company_size && `(${booking.company_size})`}
                  </div>
                )}
                {booking.preferred_date && (
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    {format(new Date(booking.preferred_date), "PPP")} {booking.preferred_time && `at ${booking.preferred_time}`}
                  </div>
                )}
              </div>

              {booking.use_case && (
                <div className="bg-muted/30 p-4 rounded-md mb-2">
                  <p className="text-sm font-medium mb-1">Use Case:</p>
                  <p className="text-sm whitespace-pre-wrap">{booking.use_case}</p>
                </div>
              )}

              {booking.notes && (
                <div className="bg-muted/30 p-4 rounded-md">
                  <p className="text-sm font-medium mb-1">Notes:</p>
                  <p className="text-sm whitespace-pre-wrap">{booking.notes}</p>
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
}