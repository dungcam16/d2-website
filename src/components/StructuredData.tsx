import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: object | object[];
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {jsonLd.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

// Common structured data schemas
export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'D2 Group',
  url: 'https://d2group.co',
  logo: 'https://storage.googleapis.com/gpt-engineer-file-uploads/GfwJGgB5PVUTbVt9ullbKBHrjTg2/uploads/1758965954495-logo d2 group.png',
  description: 'Enterprise-grade automation without enterprise-level costs',
  foundingDate: '2020',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@d2group.co',
    availableLanguage: ['en', 'vi'],
  },
  sameAs: [
    'https://www.linkedin.com/company/d2group',
    'https://www.facebook.com/d2group',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '156',
    bestRating: '5',
    worstRating: '1',
  },
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://d2group.co${item.url}`,
  })),
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
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
});

export const createServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  image: string;
  price?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  provider: {
    '@type': 'Organization',
    name: 'D2 Group',
    url: 'https://d2group.co',
  },
  description: service.description,
  url: `https://d2group.co${service.url}`,
  image: service.image,
  ...(service.price && {
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
    },
  }),
});

export const createArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    '@type': 'Person',
    name: article.author,
  },
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
    '@id': `https://d2group.co${article.url}`,
  },
});

export const createLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://d2group.co/#organization',
  name: 'D2 Group',
  url: 'https://d2group.co',
  logo: 'https://storage.googleapis.com/gpt-engineer-file-uploads/GfwJGgB5PVUTbVt9ullbKBHrjTg2/uploads/1758965954495-logo d2 group.png',
  description: 'Enterprise-grade automation without enterprise-level costs. Specializing in n8n workflow automation, AI chatbots, and business process automation.',
  priceRange: '$$',
  telephone: '+84-xxx-xxx-xxx',
  email: 'contact@d2group.co',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'VN',
    addressLocality: 'Ho Chi Minh City',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.8231,
    longitude: 106.6297,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/d2group',
    'https://www.facebook.com/d2group',
    'https://twitter.com/d2group',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '156',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Vietnam',
  },
  knowsAbout: [
    'Workflow Automation',
    'n8n Automation',
    'AI Chatbots',
    'Business Process Automation',
    'Zapier Migration',
    'Marketing Automation',
  ],
});

// AggregateRating Schema for Reviews/Testimonials
export const createAggregateRatingSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  company?: string;
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'D2 Group',
  url: 'https://d2group.co',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
    reviewCount: reviews.length.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.reviewBody,
    ...(review.company && {
      itemReviewed: {
        '@type': 'Organization',
        name: review.company,
      },
    }),
  })),
});

// HowTo Schema for Migration Guides and Tutorials
export const createHowToSchema = (howTo: {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  steps: Array<{
    name: string;
    text: string;
    url?: string;
    image?: string;
  }>;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  description: howTo.description,
  ...(howTo.totalTime && { totalTime: howTo.totalTime }),
  ...(howTo.estimatedCost && {
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: howTo.estimatedCost.currency,
      value: howTo.estimatedCost.value,
    },
  }),
  step: howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    ...(step.url && { url: step.url }),
    ...(step.image && { image: step.image }),
  })),
});
