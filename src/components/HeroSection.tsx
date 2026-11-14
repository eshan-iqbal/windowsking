'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Zap,
  Volume2,
  CloudSnow,
  CheckCircle2,
  Infinity as InfinityIcon,
  TrendingUp,
  Building2,
  Factory,
  ShieldCheck,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onOpenTour?: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-slate-900 overflow-x-hidden">
      {/* Hero Banner Area */}
      <div className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Image (Scoped overflow-hidden so it never clips external content) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Luxury architectural villa with uPVC sliding and bi-fold glass doors"
            fill
            className="object-cover object-center sm:object-[center_right] lg:object-center"
            priority
          />
          {/* Atmospheric Gradient Overlays for optimal text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/40" />
        </div>

        {/* Content Container (Full Width Edge-to-Edge) */}
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-16 pb-24 sm:pb-32 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="max-w-2xl">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-emerald-300 mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PREMIUM uPVC SOLUTIONS</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-3 sm:mb-5">
              Windows That <br />
              <span className="font-serif italic font-normal text-emerald-300">
                Define Your Space.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-200/90 max-w-lg font-light leading-relaxed mb-6 sm:mb-8">
              High-performance uPVC doors and windows manufactured for comfort,
              durability and modern architectural living.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button
                onClick={onOpenQuote}
                className="bg-[#0b4838] hover:bg-[#10624d] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 hover:gap-3 transition-all active:scale-95"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>

              <a
                href="#products"
                className="bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full text-center shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                Explore Products
              </a>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-[10px] sm:text-xs text-slate-200">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10">
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Energy Efficient</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10">
                <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Sound Insulation</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10">
                <CloudSnow className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Weather Resistant</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Low Maintenance</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10">
                <InfinityIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Long Lasting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 4-Metric Statistics Banner (Pulls up seamlessly into the hero bottom, never clipped!) */}
      <div className="relative z-30 w-full px-4 sm:px-8 lg:px-12 xl:px-16 -mt-12 sm:-mt-16 pb-6">
        <div className="w-full bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-900/15 border border-slate-100 p-4 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:divide-x divide-slate-100">
          {/* Stat 1 */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 lg:px-4">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                1+
              </div>
              <div className="text-[11px] sm:text-sm text-slate-500 font-medium leading-snug">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 lg:px-4">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                500+
              </div>
              <div className="text-[11px] sm:text-sm text-slate-500 font-medium leading-snug">
                Projects Completed
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 lg:px-4">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Factory className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                In-House
              </div>
              <div className="text-[11px] sm:text-sm text-slate-500 font-medium leading-snug">
                Manufacturing Facility
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 lg:px-4">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                20-Year
              </div>
              <div className="text-[11px] sm:text-sm text-slate-500 font-medium leading-snug">
                Product Warranty
                <span className="block text-[10px] sm:text-xs text-emerald-700 font-semibold">
                  10-Yr Hardware Warranty
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
