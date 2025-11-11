import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { trackEvent } from '@/components/analytics/AnalyticsTracker';

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'initial' | 'form' | 'thanks'>('initial');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleOpen = () => {
    setIsOpen(true);
    trackEvent('live_chat_opened');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://dbukhytdpvzncgwdkjip.supabase.co/functions/v1/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: 'N/A',
          source: 'live_chat',
        }),
      });

      if (response.ok) {
        setStep('thanks');
        trackEvent('live_chat_submitted');
        
        // Auto-close after 3 seconds
        setTimeout(() => {
          setIsOpen(false);
          setStep('initial');
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      }
    } catch (error) {
      console.error('Live chat submission error:', error);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={handleOpen}
          size="lg"
          className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 shadow-2xl">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">D2 Group Support</h3>
              <p className="text-sm opacity-90">We typically reply in 5 minutes</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 bg-background">
            {step === 'initial' && (
              <div className="space-y-4">
                <p className="text-sm">
                  👋 Hi! How can we help you today?
                </p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => setStep('form')}
                  >
                    💬 Send us a message
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/resources/roi-calculator'}
                  >
                    📊 Calculate ROI
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/company/contact'}
                  >
                    📅 Book a demo
                  </Button>
                </div>
              </div>
            )}

            {step === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                />
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}

            {step === 'thanks' && (
              <div className="text-center space-y-2 py-4">
                <div className="text-4xl mb-2">🎉</div>
                <h4 className="font-bold">Thanks for reaching out!</h4>
                <p className="text-sm text-muted-foreground">
                  We'll get back to you within 5 minutes via email.
                </p>
              </div>
            )}
          </div>
        </Card>
      )}
    </>
  );
};
