import { Shield, Lock, Award, Users } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: 'GDPR Compliant',
      description: 'Your data is protected'
    },
    {
      icon: Lock,
      text: 'Secure & Encrypted',
      description: 'Bank-level security'
    },
    {
      icon: Award,
      text: '500+ Projects',
      description: 'Successfully delivered'
    },
    {
      icon: Users,
      text: '98% Satisfaction',
      description: 'Client success rate'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <Icon className="w-8 h-8 text-primary mb-2" />
            <p className="font-semibold text-sm">{badge.text}</p>
            <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
};
