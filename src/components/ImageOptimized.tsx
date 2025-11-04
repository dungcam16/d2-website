import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
  sizes?: string;
  priority?: boolean;
}

export const ImageOptimized = ({
  src,
  alt,
  className,
  blurDataURL,
  sizes = "100vw",
  priority = false,
}: ImageOptimizedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP URL if original is JPG/PNG
  const getWebPUrl = (url: string) => {
    if (url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".png")) {
      return url.replace(/\.(jpg|jpeg|png)$/, ".webp");
    }
    return url;
  };

  const webpSrc = getWebPUrl(src);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Blur placeholder */}
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm",
            hasError && "hidden"
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
        />
      </picture>

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground text-sm">
            <p>Image unavailable</p>
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {!isLoaded && !blurDataURL && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse" />
      )}
    </div>
  );
};
