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
  Mail, 
  Phone, 
  Building2, 
  MessageSquare,
  CheckCircle2,
  XCircle,
  Clock,
  Download
} from "lucide-react";
import { format } from "date-fns";

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  service: string | null;
  message: string;
  status: string;
  source: string;
  consent_marketing: boolean;
  ip_address: string | null;
  submitted_at: string;
  created_at: string;
};

const ContactSubmissionsManager = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading submissions",
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
        .from('contact_submissions')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status updated",
        description: "Contact submission status has been updated successfully.",
      });

      loadSubmissions();
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Service", "Message", "Status", "Submitted At"];
    const csvData = submissions.map(sub => [
      sub.name,
      sub.email,
      sub.phone,
      sub.company || "",
      sub.service || "",
      sub.message.replace(/\n/g, " "),
      sub.status,
      format(new Date(sub.submitted_at), "yyyy-MM-dd HH:mm:ss")
    ]);

    const csv = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contact-submissions-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; icon: any }> = {
      new: { variant: "default", icon: Clock },
      contacted: { variant: "secondary", icon: MessageSquare },
      converted: { variant: "default", icon: CheckCircle2 },
      lost: { variant: "destructive", icon: XCircle },
    };

    const config = variants[status] || variants.new;
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {status}
      </Badge>
    );
  };

  const filteredSubmissions = filterStatus === "all" 
    ? submissions 
    : submissions.filter(sub => sub.status === filterStatus);

  const stats = {
    total: submissions.length,
    new: submissions.filter(s => s.status === 'new').length,
    contacted: submissions.filter(s => s.status === 'contacted').length,
    converted: submissions.filter(s => s.status === 'converted').length,
    conversionRate: submissions.length > 0 
      ? ((submissions.filter(s => s.status === 'converted').length / submissions.length) * 100).toFixed(1)
      : 0,
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
          <h2 className="text-3xl font-bold">Contact Submissions</h2>
          <p className="text-muted-foreground mt-1">
            Manage and track customer inquiries
          </p>
        </div>
        <Button onClick={exportToCSV} variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Total</div>
          <div className="text-2xl font-bold">{stats.total}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">New</div>
          <div className="text-2xl font-bold text-primary">{stats.new}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Contacted</div>
          <div className="text-2xl font-bold">{stats.contacted}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Converted</div>
          <div className="text-2xl font-bold text-green-600">{stats.converted}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-medium text-muted-foreground">Conversion</div>
          <div className="text-2xl font-bold">{stats.conversionRate}%</div>
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
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="converted">Converted</SelectItem>
            <SelectItem value="lost">Lost</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Submissions List */}
      <div className="space-y-4">
        {filteredSubmissions.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No submissions found</p>
          </Card>
        ) : (
          filteredSubmissions.map((submission) => (
            <Card key={submission.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{submission.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Submitted {format(new Date(submission.submitted_at), "PPpp")}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  {getStatusBadge(submission.status)}
                  <Select
                    value={submission.status}
                    onValueChange={(value) => updateStatus(submission.id, value)}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${submission.email}`} className="hover:underline">
                    {submission.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${submission.phone}`} className="hover:underline">
                    {submission.phone}
                  </a>
                </div>
                {submission.company && (
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    {submission.company}
                  </div>
                )}
                {submission.service && (
                  <div className="flex items-center gap-2 text-sm col-span-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Service:</span> {submission.service}
                  </div>
                )}
              </div>

              <div className="bg-muted/30 p-4 rounded-md">
                <p className="text-sm whitespace-pre-wrap">{submission.message}</p>
              </div>

              <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
                <span>Source: {submission.source}</span>
                {submission.consent_marketing && (
                  <Badge variant="outline" className="text-xs">
                    Marketing Consent
                  </Badge>
                )}
                {submission.ip_address && (
                  <span>IP: {submission.ip_address}</span>
                )}
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactSubmissionsManager;
