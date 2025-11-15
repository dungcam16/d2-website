// SEO utility functions for generating structured data and meta tags

export const generateImageAltText = (context: string, subject: string): string => {
  return `${subject} - ${context} by D2 Group`;
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string | string[];
  offers?: {
    price?: string;
    priceCurrency?: string;
  };
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider || 'D2 Group',
      url: 'https://d2group.co',
    },
    ...(service.areaServed && { areaServed: service.areaServed }),
    ...(service.offers && {
      offers: {
        '@type': 'Offer',
        ...service.offers,
      },
    }),
  };
};

export const generateBlogPostingSchema = (post: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    image: post.image,
    publisher: {
      '@type': 'Organization',
      name: 'D2 Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://storage.googleapis.com/gpt-engineer-file-uploads/GfwJGgB5PVUTbVt9ullbKBHrjTg2/uploads/1758965954495-logo d2 group.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://d2group.co${post.url}`,
    },
  };
};

export const checkH1Structure = (content: string): { count: number; text: string[] } => {
  const h1Regex = /<h1[^>]*>(.*?)<\/h1>/gi;
  const matches = content.match(h1Regex);
  
  if (!matches) {
    return { count: 0, text: [] };
  }
  
  const text = matches.map(match => {
    const textMatch = match.match(/<h1[^>]*>(.*?)<\/h1>/i);
    return textMatch ? textMatch[1].replace(/<[^>]*>/g, '') : '';
  });
  
  return { count: matches.length, text };
};

export const generateCanonicalURL = (path: string): string => {
  return `https://d2group.co${path}`;
};

export const generateMetaDescription = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
};
