import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, SearchX, Phone } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteChrome>
      <section className="w-full flex-1 flex items-center py-16 sm:py-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100/70 border border-emerald-200">
              <SearchX className="w-8 h-8 text-emerald-700" />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold tracking-widest uppercase text-emerald-800/70">
                Error 404
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                This page seems to be{' '}
                <span className="font-serif italic font-normal text-emerald-800">
                  off its hinges.
                </span>
              </h1>
              <p className="text-sm text-slate-600 font-light leading-relaxed max-w-lg mx-auto">
                The page you are looking for doesn&apos;t exist or may have been
                moved. Let&apos;s get you back to something useful.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/"
                className="bg-[#062c21] hover:bg-[#0c4333] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all"
              >
                <span>Back to Home</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
              <Link
                href="/products"
                className="px-5 py-3 rounded-full border border-slate-200 hover:border-emerald-600 bg-white text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
              >
                Browse Products
              </Link>
              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="px-5 py-3 rounded-full border border-slate-200 hover:border-emerald-600 bg-white text-slate-800 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>+91-6005714181</span>
              </a>
            </div>

            <div className="relative w-24 h-24 mx-auto pt-6 opacity-60">
              <Image
                src="/images/logo-mark.png"
                alt="Windows King"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
