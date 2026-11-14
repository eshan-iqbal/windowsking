import React from 'react';

interface LegalPageLayoutProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  updated: string;
  children: React.ReactNode;
}

/**
 * Shared layout for legal/static pages (Privacy Policy, Terms, Warranty).
 * Server component — safe to use inside pages that export metadata.
 */
export default function LegalPageLayout({
  eyebrow,
  title,
  subtitle,
  updated,
  children,
}: LegalPageLayoutProps) {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-bold tracking-widest uppercase">
            {eyebrow}
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            {title}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            {subtitle}
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Last updated: <span className="font-semibold text-slate-500">{updated}</span>
          </p>
        </div>

        {/* Content */}
        <article className="max-w-3xl space-y-10 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
          {children}
        </article>
      </div>
    </section>
  );
}

interface LegalSectionProps {
  heading: string;
  children: React.ReactNode;
}

export function LegalSection({ heading, children }: LegalSectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
        {heading}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function ContactNote() {
  return (
    <div className="mt-12 p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/70">
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        Questions about this policy? Contact us at{' '}
        <a
          href="mailto:info@windowsking.in"
          className="font-semibold text-emerald-800 hover:text-emerald-950"
        >
          info@windowsking.in
        </a>{' '}
        or call{' '}
        <a
          href="tel:+916005714181"
          className="font-semibold text-emerald-800 hover:text-emerald-950"
        >
          +91-6005714181
        </a>{' '}
        (Mon – Sat, 9:30 AM – 6:30 PM). You can also visit our works & showroom at
        Old National Highway, Uranhall, Anantnag, Jammu &amp; Kashmir.
      </p>
    </div>
  );
}
