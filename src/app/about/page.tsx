'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { Award, ArrowRight, Phone } from 'lucide-react';

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#fafaf9] overflow-x-hidden">
      <TopBar />
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero: Brand Story + Full-Frame Logo */}
      <section className="w-full flex-1 flex items-center py-12 sm:py-20 lg:py-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: About Us Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-bold tracking-widest uppercase">
                <Award className="w-3.5 h-3.5 text-emerald-700" />
                <span>Started in 2025 • Uranhall, Anantnag</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Started in 2025, <br />
                <span className="font-serif italic font-normal text-emerald-800">
                  Built for Kashmir Homes.
                </span>
              </h1>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light max-w-xl">
                <p>
                  Windows King was started in 2025 at Old National Highway, Uranhall, Anantnag with
                  a simple goal: give families across Kashmir strong, warm, and quiet uPVC windows
                  and doors that last for years without warping or heavy upkeep.
                </p>
                <p>
                  Even in a short time, we have worked on a wide range of residential and commercial
                  projects across Anantnag, Srinagar, and nearby districts — from new family homes
                  and villas to shops and office spaces, delivered with clean fitting and dependable
                  local support.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-[#062c21] hover:bg-[#0c4333] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:+916005714181"
                  className="px-5 py-3 rounded-full border border-slate-200 hover:border-emerald-600 bg-white text-slate-800 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>+91-6005714181</span>
                </motion.a>
                <Link
                  href="/gallery"
                  className="text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 px-3 py-3 flex items-center gap-1.5"
                >
                  <span>Browse Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Full-Frame Logo Only (No Text) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white border border-[#041a14] shadow-xl p-6 sm:p-10 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Windows King Logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-6 sm:p-10"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </main>
  );
}
