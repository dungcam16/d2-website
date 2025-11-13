import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useVisitorIntent, getIntentScore } from '@/hooks/useVisitorIntent';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '@/components/analytics/AnalyticsTracker';

interface SmartCTAProps {
  className?: string;
}

export function SmartCTA({ className }: SmartCTAProps) {
  const navigate = useNavigate();
  const intent = useVisitorIntent();
  const [ctaConfig, setCTAConfig] = useState<{
    text: string;
    action: string;
    variant: 'default' | 'outline' | 'secondary';
  }>({
    text: 'Get Started',
    action: '/company/contact',
    variant: 'default',
  });

  useEffect(() => {
    const score = getIntentScore(intent);

    // High intent visitors (score > 70)
    if (score > 70) {
      setCTAConfig({
        text: 'Book Your Free Demo',
        action: '/company/contact?demo=true',
        variant: 'default',
      });
    }
    // Medium intent (score 40-70)
    else if (score > 40) {
      if (intent.timeOnPage > 60) {
        setCTAConfig({
          text: 'See How It Works',
          action: '/resources/templates',
          variant: 'default',
        });
      } else {
        setCTAConfig({
          text: 'Explore Solutions',
          action: '/services/n8n-automation',
          variant: 'default',
        });
      }
    }
    // Low intent (score < 40)
    else {
      if (intent.scrollDepth < 25) {
        setCTAConfig({
          text: 'Learn More',
          action: '/resources/blog',
          variant: 'outline',
        });
      } else {
        setCTAConfig({
          text: 'Get Free Resources',
          action: '/resources/lead-magnets',
          variant: 'secondary',
        });
      }
    }
  }, [intent]);

  const handleClick = () => {
    trackEvent('smart_cta_click', {
      cta_text: ctaConfig.text,
      intent_score: getIntentScore(intent),
      scroll_depth: intent.scrollDepth,
      time_on_page: intent.timeOnPage,
    });

    navigate(ctaConfig.action);
  };

  return (
    <Button
      size="lg"
      variant={ctaConfig.variant}
      onClick={handleClick}
      className={className}
    >
      {ctaConfig.text}
    </Button>
  );
}
