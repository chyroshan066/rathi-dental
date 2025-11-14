import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',  // '*' means all search engine bots (Googlebot, Bingbot, etc.)
      allow: '/',  // '/' means allow crawling of the entire root directory
      disallow: ['/_next/static/', '/_next/image/'], // "disallow" prevents search engines from wasting time on irrelevant pages.
    },
    sitemap: 'https://www.rathidentalclinic.com/sitemap.xml',
  };
}