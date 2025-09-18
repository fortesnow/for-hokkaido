export const seoConfig = {
  defaultTitle: 'SHIKI Photography HOKKAIDO - Four Season Photography',
  titleTemplate: '%s | SHIKI Photography HOKKAIDO',
  defaultDescription: 'Professional photography services capturing the beauty of Hokkaido\'s four seasons. Vacation, couple, and pre-wedding photography in stunning locations.',
  siteUrl: 'https://shikiphotography.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shikiphotography.com',
    siteName: 'SHIKI Photography HOKKAIDO',
    images: [
      {
        url: 'https://shikiphotography.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SHIKI Photography HOKKAIDO - Four Season Photography',
      },
    ],
  },
  twitter: {
    handle: '@shikiphotography',
    site: '@shikiphotography',
    cardType: 'summary_large_image',
  },
};

export const organizationSchema = {
  name: 'SHIKI Photography HOKKAIDO',
  url: 'https://shikiphotography.com',
  logo: 'https://shikiphotography.com/logo.png',
  description: 'Professional photography services capturing the beauty of Hokkaido\'s four seasons',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: 'Hokkaido',
    addressLocality: 'Sapporo',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+81-XXX-XXXX-XXXX',
    contactType: 'customer service',
    availableLanguage: ['English', 'Japanese'],
  },
  sameAs: [
    'https://instagram.com/shikiphotography',
    'https://facebook.com/shikiphotography',
  ],
};

export const localBusinessSchema = {
  ...organizationSchema,
  '@type': 'LocalBusiness',
  priceRange: '¥25,000 - ¥95,000',
  openingHours: 'Mo-Su 09:00-18:00',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '43.0642',
    longitude: '141.3469',
  },
};

export const serviceSchema = {
  name: 'Photography Services',
  provider: organizationSchema,
  serviceType: 'Photography',
  areaServed: {
    '@type': 'State',
    name: 'Hokkaido, Japan',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Photography Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vacation Photography',
          description: 'Professional vacation photography for families and travelers',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Couple & Proposal Photography',
          description: 'Romantic photography sessions and proposal planning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pre-wedding Photography',
          description: 'Traditional and modern pre-wedding photography sessions',
        },
      },
    ],
  },
};
