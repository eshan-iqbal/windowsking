'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

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
          <motion.div
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Category Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-emerald-300 mb-4 sm:mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PREMIUM uPVC SOLUTIONS</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-3 sm:mb-5"
            >
              Windows That <br />
              <span className="font-serif italic font-normal text-emerald-300">
                Define Your Space.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm lg:text-base text-slate-200/90 max-w-lg font-light leading-relaxed mb-6 sm:mb-8"
            >
              High-performance uPVC doors and windows manufactured for comfort,
              durability and modern architectural living.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <motion.button
                onClick={onOpenQuote}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#0b4838] hover:bg-[#10624d] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 hover:gap-3 transition-all cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </motion.button>

              <motion.a
                href="#products"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full text-center shadow-md hover:shadow-lg transition-all"
              >
                Explore Products
              </motion.a>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-[10px] sm:text-xs text-slate-200"
            >
              <motion.div
                variants={pillVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10"
              >
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Energy Efficient</span>
              </motion.div>
              <motion.div
                variants={pillVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10"
              >
                <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Sound Insulation</span>
              </motion.div>
              <motion.div
                variants={pillVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10"
              >
                <CloudSnow className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Weather Resistant</span>
              </motion.div>
              <motion.div
                variants={pillVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10"
              >
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Low Maintenance</span>
              </motion.div>
              <motion.div
                variants={pillVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10"
              >
                <InfinityIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>Long Lasting</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating 4-Metric Statistics Banner (Pulls up seamlessly into the hero bottom, never clipped!) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 w-full px-4 sm:px-8 lg:px-12 xl:px-16 -mt-12 sm:-mt-16 pb-6"
      >
        <div className="w-full bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-900/15 border border-slate-100 p-4 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:divide-x divide-slate-100">
          {/* Stat 1 */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 sm:gap-3.5 lg:px-4"
          >
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
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 sm:gap-3.5 lg:px-4"
          >
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
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 sm:gap-3.5 lg:px-4"
          >
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
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 sm:gap-3.5 lg:px-4"
          >
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
