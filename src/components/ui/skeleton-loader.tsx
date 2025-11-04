import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  variant?: "card" | "text" | "image" | "workflow" | "blog";
  count?: number;
  className?: string;
}

export const SkeletonLoader = ({ variant = "card", count = 1, className }: SkeletonLoaderProps) => {
  const renderSkeleton = () => {
    switch (variant) {
      case "card":
        return (
          <div className={cn("rounded-xl border border-border bg-card p-6 space-y-4", className)}>
            <div className="h-6 w-3/4 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-8 w-20 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
              <div className="h-8 w-20 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
            </div>
          </div>
        );

      case "text":
        return (
          <div className={cn("space-y-2", className)}>
            <div className="h-4 w-full bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
          </div>
        );

      case "image":
        return (
          <div className={cn("aspect-video rounded-xl overflow-hidden", className)}>
            <div className="w-full h-full bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse" />
          </div>
        );

      case "workflow":
        return (
          <div className={cn("rounded-xl border-2 border-border overflow-hidden", className)}>
            <div className="w-full h-[400px] bg-gradient-to-br from-muted via-muted/30 to-muted relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 animate-pulse" />
                  <div className="h-4 w-32 bg-muted-foreground/20 rounded mx-auto animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        );

      case "blog":
        return (
          <div className={cn("rounded-xl border border-border bg-card overflow-hidden hover-lift", className)}>
            <div className="aspect-video bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse" />
            <div className="p-6 space-y-3">
              <div className="flex gap-2">
                <div className="h-5 w-16 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
                <div className="h-5 w-20 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
              </div>
              <div className="h-6 w-full bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
                <div className="h-4 w-24 bg-gradient-to-r from-muted via-muted/50 to-muted rounded animate-pulse" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};
