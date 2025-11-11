import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CheckCircle2 } from 'lucide-react';

interface Activity {
  name: string;
  action: string;
  location: string;
  timestamp: Date;
}

const activities: Activity[] = [
  { name: 'Sarah T.', action: 'booked a demo', location: 'Singapore', timestamp: new Date(Date.now() - 3 * 60 * 1000) },
  { name: 'John N.', action: 'started migration', location: 'Ho Chi Minh City', timestamp: new Date(Date.now() - 8 * 60 * 1000) },
  { name: 'Michael L.', action: 'downloaded ROI calculator', location: 'Hanoi', timestamp: new Date(Date.now() - 15 * 60 * 1000) },
  { name: 'Diana P.', action: 'contacted us', location: 'Bangkok', timestamp: new Date(Date.now() - 23 * 60 * 1000) },
  { name: 'David H.', action: 'booked a demo', location: 'Jakarta', timestamp: new Date(Date.now() - 35 * 60 * 1000) },
];

export const SocialProof = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Rotate through activities every 8 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const activity = activities[currentActivity];
  const timeAgo = Math.floor((Date.now() - activity.timestamp.getTime()) / (1000 * 60));

  if (!isVisible) return null;

  return (
    <Card className={`
      fixed bottom-6 left-6 z-50 p-4 
      shadow-lg border-primary/20
      animate-in slide-in-from-bottom-5 duration-500
      max-w-sm
    `}>
      <div className="flex items-start gap-3">
        <Avatar className="w-10 h-10 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary">
            {activity.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-semibold text-sm truncate">{activity.name}</p>
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
          </div>
          <p className="text-sm text-muted-foreground">
            {activity.action}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {activity.location} • {timeAgo} minutes ago
          </p>
        </div>
      </div>
    </Card>
  );
};
