import type { Metadata, Viewport } from 'next';
import './globals.css';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import {
  siteConfig,
  localBusinessSchema,
  webSiteSchema,
} from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: 'Home & Construction',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Windows King — Premium uPVC Doors & Windows in Kashmir',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  manifest: '/manifest.webmanifest',
  other: {
    'geo.region': 'IN-JK',
    'geo.placename': 'Anantnag, Jammu & Kashmir',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#041a14',
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        {/* Global structured data: LocalBusiness + WebSite */}
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={webSiteSchema()} />
      </head>
      <body className="antialiased font-sans text-slate-800 bg-white selection:bg-brand-500 selection:text-white">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
