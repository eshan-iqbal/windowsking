import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { routes, buildMetadata } from '@/lib/seo';

const route = routes.find((r) => r.path === '/projects')!;

export const metadata: Metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
