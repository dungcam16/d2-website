import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, CheckCircle, FileText, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ResumePreviewProps {
  htmlContent: string;
  onCreateAnother: () => void;
}

const ResumePreview = ({ htmlContent, onCreateAnother }: ResumePreviewProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const payload = {
        flow: "download",
        resume_html: htmlContent,
        submitted_at: new Date().toISOString(),
      };

      console.log("Downloading resume...");

      const response = await fetch("https://n8n.d2group.co/webhook/resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `resume_${Date.now()}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Success!",
        description: "Your resume has been downloaded.",
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="p-8 text-center space-y-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center animate-scale-in">
            <CheckCircle className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Resume Generated Successfully!</h2>
          <p className="text-muted-foreground">
            Your professional resume is ready. Review it below and download when you're satisfied.
          </p>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Button
          size="lg"
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-gradient-primary"
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </>
          )}
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={onCreateAnother}
        >
          <FileText className="w-5 h-5 mr-2" />
          Create Another Resume
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="bg-muted/30 p-4 border-b">
          <h3 className="font-semibold flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Resume Preview
          </h3>
        </div>
        <div 
          className="p-8 bg-white"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </Card>
    </div>
  );
};

export default ResumePreview;
