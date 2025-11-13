import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export interface VisitorIntent {
  scrollDepth: number;
  timeOnPage: number;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  isReturning: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  pageViews: number;
}

export function useVisitorIntent(): VisitorIntent {
  const location = useLocation();
  const [scrollDepth, setScrollDepth] = useState(0);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [intent, setIntent] = useState<VisitorIntent>(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionData = sessionStorage.getItem('visitor_intent');
    const parsed = sessionData ? JSON.parse(sessionData) : {};

    return {
      scrollDepth: 0,
      timeOnPage: 0,
      utmSource: params.get('utm_source') || parsed.utmSource,
      utmMedium: params.get('utm_medium') || parsed.utmMedium,
      utmCampaign: params.get('utm_campaign') || parsed.utmCampaign,
      isReturning: localStorage.getItem('has_visited') === 'true',
      deviceType: getDeviceType(),
      pageViews: parseInt(sessionStorage.getItem('page_views') || '0') + 1,
    };
  });

  useEffect(() => {
    localStorage.setItem('has_visited', 'true');
    sessionStorage.setItem('page_views', String(intent.pageViews));
    sessionStorage.setItem('visitor_intent', JSON.stringify(intent));
  }, [intent]);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;

    const updateScrollDepth = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const depth = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
      
      setScrollDepth(Math.min(depth, 100));
      setIntent(prev => ({ ...prev, scrollDepth: Math.min(depth, 100) }));
    };

    const updateTimeOnPage = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTimeOnPage(elapsed);
      setIntent(prev => ({ ...prev, timeOnPage: elapsed }));
      animationFrame = requestAnimationFrame(updateTimeOnPage);
    };

    window.addEventListener('scroll', updateScrollDepth, { passive: true });
    updateScrollDepth();
    updateTimeOnPage();

    return () => {
      window.removeEventListener('scroll', updateScrollDepth);
      cancelAnimationFrame(animationFrame);
    };
  }, [location.pathname]);

  return intent;
}

function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

export function getIntentScore(intent: VisitorIntent): number {
  let score = 0;

  // Scroll depth scoring
  if (intent.scrollDepth > 75) score += 30;
  else if (intent.scrollDepth > 50) score += 20;
  else if (intent.scrollDepth > 25) score += 10;

  // Time on page scoring
  if (intent.timeOnPage > 120) score += 25;
  else if (intent.timeOnPage > 60) score += 15;
  else if (intent.timeOnPage > 30) score += 10;

  // Traffic source scoring
  if (intent.utmSource === 'google' || intent.utmSource === 'linkedin') score += 15;
  if (intent.utmMedium === 'cpc' || intent.utmMedium === 'paid') score += 10;

  // Returning visitor bonus
  if (intent.isReturning) score += 15;

  // Page views bonus
  if (intent.pageViews > 5) score += 10;
  else if (intent.pageViews > 3) score += 5;

  return Math.min(score, 100);
}
