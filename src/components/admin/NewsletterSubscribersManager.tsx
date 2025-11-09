import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Mail, 
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  Trash2
} from "lucide-react";
import { format } from "date-fns";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type NewsletterSubscriber = {
  id: string;
  email: string;
  status: string;
  source: string;
  consent_marketing: boolean;
  ip_address: string | null;
  subscribed_at: string | null;
  unsubscribed_at: string | null;
  created_at: string;
};

const NewsletterSubscribersManager = () => {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchEmail, setSearchEmail] = useState("");

  useEffect(() => {
    loadSubscribers();
  }, []);

  const loadSubscribers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading subscribers",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const updates: any = { status: newStatus };
      
      if (newStatus === 'unsubscribed') {
        updates.unsubscribed_at = new Date().toISOString();
      } else if (newStatus === 'active') {
        updates.subscribed_at = new Date().toISOString();
        updates.unsubscribed_at = null;
      }

      const { error } = await supabase
        .from('newsletter_subscribers')
        .update(updates)
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status updated",
        description: "Subscriber status has been updated successfully.",
      });

      loadSubscribers();
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteSubscriber = async (id: string) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Subscriber deleted",
        description: "Subscriber has been removed successfully.",
      });

      loadSubscribers();
    } catch (error: any) {
      toast({
        title: "Error deleting subscriber",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    const headers = ["Email", "Status", "Source", "Subscribed At", "Unsubscribed At"];
    const csvData = subscribers.map(sub => [
      sub.email,
      sub.status,
      sub.source,
      sub.subscribed_at ? format(new Date(sub.subscribed_at), "yyyy-MM-dd HH:mm:ss") : "",
      sub.unsubscribed_at ? format(new Date(sub.unsubscribed_at), "yyyy-MM-dd HH:mm:ss") : ""
    ]);

    const csv = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `newsletter-subscribers-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; icon: any }> = {
      pending: { variant: "secondary", icon: Clock },
      active: { variant: "default", icon: CheckCircle2 },
      unsubscribed: { variant: "destructive", icon: XCircle },
    };

    const config = variants[status] || variants.pending;
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {status}
      </Badge>
    );
  };

  const filteredSubscribers = subscribers.filter(sub => {
    const matchesStatus = filterStatus === "all" || sub.status === filterStatus;
    const matchesEmail = searchEmail === "" || sub.email.toLowerCase().includes(searchEmail.toLowerCase());
    return matchesStatus && matchesEmail;
  });

  const stats = {
    total: subscribers.length,
    active: subscribers.filter(s => s.status === 'active').length,
    pending: subscribers.filter(s => s.status === 'pending').length,
    unsubscribed: subscribers.filter(s => s.status === 'unsubscribed').length,
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
          <h2 className="text-3xl font-bold">Newsletter Subscribers</h2>
          <p className="text-muted-foreground mt-1">
            Manage your email subscribers and mailing list
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
          <div className="text-sm font-medium text-muted-foreground">Active</div>
          <div className="text-2xl font-bold text-green-600">{stats.active}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Pending</div>
          <div className="text-2xl font-bold text-primary">{stats.pending}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Unsubscribed</div>
          <div className="text-2xl font-bold text-destructive">{stats.unsubscribed}</div>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center flex-wrap">
        <Input
          placeholder="Search by email..."
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="max-w-xs"
        />
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Subscribers List */}
      <div className="space-y-4">
        {filteredSubscribers.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No subscribers found</p>
          </Card>
        ) : (
          filteredSubscribers.map((subscriber) => (
            <Card key={subscriber.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a 
                      href={`mailto:${subscriber.email}`} 
                      className="text-lg font-medium hover:underline"
                    >
                      {subscriber.email}
                    </a>
                    {getStatusBadge(subscriber.status)}
                  </div>

                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <span>Source: {subscriber.source}</span>
                    {subscriber.subscribed_at && (
                      <span>
                        Subscribed: {format(new Date(subscriber.subscribed_at), "PPp")}
                      </span>
                    )}
                    {subscriber.unsubscribed_at && (
                      <span>
                        Unsubscribed: {format(new Date(subscriber.unsubscribed_at), "PPp")}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {subscriber.consent_marketing && (
                      <Badge variant="outline" className="text-xs">
                        Marketing Consent
                      </Badge>
                    )}
                    {subscriber.ip_address && (
                      <Badge variant="outline" className="text-xs">
                        IP: {subscriber.ip_address}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <Select
                    value={subscriber.status}
                    onValueChange={(value) => updateStatus(subscriber.id, value)}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
                    </SelectContent>
                  </Select>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Subscriber</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to permanently delete this subscriber? 
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteSubscriber(subscriber.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscribersManager;
