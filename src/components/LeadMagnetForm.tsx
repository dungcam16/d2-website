import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Download, Loader2 } from 'lucide-react';
import { trackEvent } from '@/components/analytics/AnalyticsTracker';

const leadMagnetSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
});

type LeadMagnetFormData = z.infer<typeof leadMagnetSchema>;

interface LeadMagnetFormProps {
  magnetId: string;
  magnetTitle: string;
  magnetType: 'pdf' | 'excel' | 'template' | 'guide';
  onSuccess?: (downloadUrl: string) => void;
}

export function LeadMagnetForm({ magnetId, magnetTitle, magnetType, onSuccess }: LeadMagnetFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const form = useForm<LeadMagnetFormData>({
    resolver: zodResolver(leadMagnetSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
    },
  });

  const onSubmit = async (data: LeadMagnetFormData) => {
    setIsSubmitting(true);

    try {
      // Subscribe to newsletter
      const { error: subscribeError } = await supabase.functions.invoke('newsletter-subscribe', {
        body: { 
          email: data.email,
          source: `lead_magnet_${magnetId}`,
        },
      });

      if (subscribeError) {
        console.error('Newsletter subscription error:', subscribeError);
      }

      // Track lead magnet download
      trackEvent('lead_magnet_download', {
        magnet_id: magnetId,
        magnet_title: magnetTitle,
        magnet_type: magnetType,
        has_company: !!data.company,
      });

      // Generate download (mock for now - will implement edge function)
      const mockDownloadUrl = `/downloads/${magnetId}.${magnetType === 'excel' ? 'xlsx' : 'pdf'}`;
      setDownloadUrl(mockDownloadUrl);

      toast.success('Success! Your download is ready.', {
        description: 'Check your email for the download link.',
      });

      if (onSuccess) {
        onSuccess(mockDownloadUrl);
      }

      // Auto-download after 1 second
      setTimeout(() => {
        window.open(mockDownloadUrl, '_blank');
      }, 1000);

    } catch (error) {
      console.error('Lead magnet form error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (downloadUrl) {
    return (
      <div className="text-center space-y-4 p-6 bg-muted/50 rounded-lg border border-border">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
          <Download className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Download Ready!</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your download should start automatically. If not, click below.
          </p>
          <Button
            variant="default"
            onClick={() => window.open(downloadUrl, '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Acme Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Get Free {magnetType === 'excel' ? 'Template' : 'Guide'}
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By downloading, you agree to receive occasional emails from D2 Group.
          Unsubscribe anytime.
        </p>
      </form>
    </Form>
  );
}
