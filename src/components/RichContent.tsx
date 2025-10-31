import React from "react";
import DOMPurify from "dompurify";

interface RichContentProps {
  content: string;
  className?: string;
}

/**
 * Component to render rich HTML content with proper styling
 * Uses Tailwind Typography for beautiful formatting
 */
const RichContent: React.FC<RichContentProps> = ({ content, className = "" }) => {
  // Sanitize HTML to prevent XSS attacks
  // Only allow iframes from trusted video platforms (YouTube, Vimeo)
  const sanitizedContent = DOMPurify.sanitize(content, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling", "src"],
    ALLOWED_URI_REGEXP: /^https:\/\/(www\.youtube\.com|player\.vimeo\.com|youtu\.be)/,
  });

  return (
    <div
      className={`prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-heading prose-headings:font-bold
        prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
        prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-6
        prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-5
        prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground prose-strong:font-semibold
        prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
        prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
        prose-li:text-foreground prose-li:mb-2
        prose-blockquote:border-l-4 prose-blockquote:border-primary
        prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
        prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
        prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
        prose-hr:border-border prose-hr:my-8
        prose-table:border-collapse prose-table:w-full
        prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold
        prose-td:border prose-td:border-border prose-td:p-3
        ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default RichContent;
