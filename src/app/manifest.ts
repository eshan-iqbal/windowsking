import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Windows King — Premium uPVC Doors & Windows',
    short_name: 'Windows King',
    description: siteConfig.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#041a14',
    theme_color: '#041a14',
    lang: 'en-IN',
    categories: ['business', 'shopping', 'home'],
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
