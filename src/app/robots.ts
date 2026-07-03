import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin-blogs-local/'],
    },
    sitemap: 'https://manasbhatia.me/sitemap.xml',
  };
}
