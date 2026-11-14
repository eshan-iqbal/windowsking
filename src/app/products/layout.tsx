import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { routes, buildMetadata } from '@/lib/seo';

/**
 * Segment-level layout providing static SEO metadata for the
 * (client-component) products page.
 */
const route = routes.find((r) => r.path === '/products')!;

export const metadata: Metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children;
}
