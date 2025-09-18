import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shikiphotography.com';
  const languages = ['en', 'ja'];
  
  const routes = [
    '',
    '/vacation',
    '/couple',
    '/prewedding',
    '/destinations',
    '/gallery',
    '/pricing',
    '/booking',
    '/about',
    '/faq',
    '/contact',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add routes for each language
  languages.forEach((lang) => {
    routes.forEach((route) => {
      const url = lang === 'en' ? `${baseUrl}${route}` : `${baseUrl}/${lang}${route}`;
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}${route}`,
            ja: `${baseUrl}/ja${route}`,
          },
        },
      });
    });
  });

  return sitemap;
}
