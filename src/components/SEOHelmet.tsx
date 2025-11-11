import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export const SEOHelmet = ({
  title = 'D2 Group - AI & Automation Solutions',
  description = 'Transform your business with D2 Group\'s AI automation, n8n workflows, and enterprise chatbot solutions.',
  keywords = 'AI automation, n8n, workflow automation, chatbots',
  canonicalUrl,
  ogImage = 'https://dbukhytdpvzncgwdkjip.supabase.co/storage/v1/object/public/media/d2-group-og-image.jpg',
  ogType = 'website',
  structuredData,
}: SEOHelmetProps) => {
  const fullUrl = canonicalUrl ? `https://d2group.co${canonicalUrl}` : 'https://d2group.co';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="D2 Group" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="D2 Group" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "D2 Group",
          "url": "https://d2group.co",
          "logo": "https://d2group.co/logo.png",
          "description": description,
          "sameAs": [
            "https://www.linkedin.com/company/d2group",
            "https://github.com/d2group"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84-xxx-xxx-xxx",
            "contactType": "Sales",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Vietnamese"]
          }
        })}
      </script>
    </Helmet>
  );
};
