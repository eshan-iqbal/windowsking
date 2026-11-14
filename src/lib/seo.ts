/**
 * Central SEO / business configuration for Windows King.
 * Update values here once — every metadata export, sitemap,
 * robots.txt, manifest and JSON-LD schema reads from this file.
 */

export const SITE_URL = 'https://www.windows-king.com';

export const siteConfig = {
  name: 'Windows King',
  legalName: 'Windows King uPVC Doors & Windows',
  url: SITE_URL,
  title: 'WINDOWS KING | Premium uPVC Doors & Windows | Srinagar & Jammu',
  description:
    'High-performance uPVC doors and windows manufactured for comfort, durability and modern architectural living. Casement windows, sliding windows, bi-fold doors, french doors, and fixed panoramic windows.',
  shortDescription:
    'Premium uPVC doors & windows manufacturer in Jammu & Kashmir.',
  keywords: [
    'uPVC doors',
    'uPVC windows',
    'uPVC windows Srinagar',
    'uPVC windows Kashmir',
    'uPVC doors Anantnag',
    'uPVC windows Jammu',
    'uPVC windows kulgam',
    'casement windows',
    'sliding windows',
    'bi-fold doors',
    'french doors',
    'double glazing',
    'energy efficient windows',
    'sound insulation windows',
    'window manufacturer Kashmir',
    'Windows King',
    'windows and doors in Kashmir',
  ],
  locale: 'en_IN',
  ogImage: '/images/og-image.jpg',
  logo: '/images/logo.png',
  logoMark: '/images/logo-mark.png',
  phones: ['+91-6005714181', '+91-8899919860'],
  phonePrimary: '+916005714181',
  email: 'info@windows-king.com',
  address: {
    streetAddress: 'Old National Highway, Uranhall',
    addressLocality: 'Anantnag',
    addressRegion: 'Jammu & Kashmir',
    postalCode: '192101',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 33.7311,
    longitude: 75.1506,
  },
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
  ],
  foundingYear: '2025',
  priceRange: '₹₹',
} as const;

/** All indexable routes of the site, with per-route SEO copy. */
export const routes = [
  {
    path: '/',
    title: 'Home',
    description: siteConfig.description,
    priority: 1.0,
    changeFrequency: 'weekly' as const,
  },
  {
    path: '/products',
    title: 'Product Catalog — Casement, Sliding, Bi-Fold, French & Fixed uPVC Systems',
    description:
      'Browse the full range of Windows King uPVC systems: casement windows, multi-track sliding windows, bi-fold patio doors, french double doors and fixed architectural glass — with full technical specifications.',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
  {
    path: '/gallery',
    title: 'Architectural Gallery — Installed uPVC Projects in Kashmir',
    description:
      'See real Windows King installations across Kashmir: villas, residences and commercial spaces fitted with premium uPVC windows and doors.',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/about',
    title: 'About Windows King — Our Story, Team & Mission',
    description:
      'Started in 2025 at Uranhall, Anantnag — Windows King gives families across Kashmir strong, warm and quiet uPVC windows and doors backed by dependable local support.',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/projects',
    title: 'Featured Projects — Residential & Commercial Installations',
    description:
      'Featured Windows King projects: residential villas in Srinagar, commercial complexes in Jammu and modern residences in Anantnag.',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description:
      'How Windows King collects, uses and protects the personal information you share through our website quote forms and contact channels.',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    description:
      'Terms and conditions governing the use of the Windows King website, quotations, orders and installation services.',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
  {
    path: '/warranty',
    title: 'Warranty Terms',
    description:
      'Windows King 20-year product warranty and 10-year hardware warranty terms: coverage for uPVC profiles, hardware, glazing and installation workmanship, and claim procedure.',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
] as const;

/** Absolute URL for a given route path. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

/** Breadcrumb list JSON-LD helper. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Organization + LocalBusiness JSON-LD (rendered globally in the root layout). */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: SITE_URL,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    foundingDate: siteConfig.foundingYear,
    email: siteConfig.email,
    telephone: siteConfig.phones,
    priceRange: siteConfig.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Srinagar' },
      { '@type': 'City', name: 'Anantnag' },
      { '@type': 'City', name: 'Jammu' },
      { '@type': 'AdministrativeArea', name: 'Jammu & Kashmir' },
    ],
    openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
    })),
    contactPoint: siteConfig.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Urdu', 'Kashmiri', 'Hindi'],
    })),
    sameAs: [] as string[],
  };
}

/** WebSite JSON-LD (rendered globally in the root layout). */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };
}

/** Service JSON-LD for pages describing uPVC supply & installation. */
export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'uPVC Doors & Windows Manufacturing, Supply and Installation',
    serviceType: 'uPVC windows and doors manufacturing and installation',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'State', name: 'Jammu & Kashmir' },
    description:
      'European-grade multi-chamber uPVC doors and windows: manufacturing, supply and professional installation for homes and commercial spaces across Kashmir and Jammu.',
  };
}

/** Standard metadata builder so every route shares identical OG/Twitter/canonical behavior. */
export function buildMetadata(options: {
  title: string;
  description: string;
  path: string;
  keywords?: string | string[];
}): import('next').Metadata {
  const { title, description, path, keywords } = options;
  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
