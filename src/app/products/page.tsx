'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { productsData } from '@/components/ProductsSection';
import {
  ArrowRight,
  CheckCircle2,
  Volume2,
  Check,
  Sparkles,
  Compass,
  ThermometerSnowflake,
  LayoutGrid,
  MessageCircle,
  Sun,
} from 'lucide-react';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'windows' | 'doors'>('all');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('Casement Windows');

  const filteredProducts = productsData.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'windows') return p.id === 'casement' || p.id === 'sliding' || p.id === 'fixed';
    if (activeTab === 'doors') return p.id === 'bifold' || p.id === 'french';
    return true;
  });

  const applications = [
    {
      title: 'Scenic Living Rooms',
      tag: 'Big Open Views',
      icon: <Compass className="w-5 h-5 text-emerald-700" />,
      desc: 'Wide glass panels that frame mountain and garden views while keeping your living room warm.',
    },
    {
      title: 'Cold & Snowy Areas',
      tag: 'All-Winter Warmth',
      icon: <ThermometerSnowflake className="w-5 h-5 text-emerald-700" />,
      desc: 'Tightly sealed frames that block freezing drafts, heavy rain, and snow.',
    },
    {
      title: 'Garden & Terrace Doors',
      tag: 'Indoor-Outdoor Flow',
      icon: <LayoutGrid className="w-5 h-5 text-emerald-700" />,
      desc: 'Smooth folding and sliding doors that open up your lounge to balconies and lawns.',
    },
    {
      title: 'Quiet Bedrooms',
      tag: 'Peaceful Sleep',
      icon: <Volume2 className="w-5 h-5 text-emerald-700" />,
      desc: 'Double-sealed glass that cuts down street traffic and outside noise.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#fafaf9]">
      <TopBar />
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* 1. Clean Editorial Hero */}
      <section className="relative w-full bg-gradient-to-b from-white via-[#f8faf9] to-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-20 overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-emerald-900 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Windows &amp; Doors Collection</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Windows &amp; Doors <br />
                <span className="text-emerald-800 font-serif italic font-normal">
                  Made for Warm, Quiet Homes.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light max-w-xl">
                Strong, weatherproof uPVC windows and doors custom-built for Kashmir&apos;s winters
                and summers — designed to keep your home cozy, quiet, and effortless to maintain.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveTab('all')}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === 'all'
                      ? 'bg-[#062c21] text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-400'
                  }`}
                >
                  All Products ({productsData.length})
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveTab('windows')}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === 'windows'
                      ? 'bg-[#062c21] text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-400'
                  }`}
                >
                  Windows
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveTab('doors')}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === 'doors'
                      ? 'bg-[#062c21] text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-400'
                  }`}
                >
                  Patio &amp; French Doors
                </motion.button>
              </div>

              {/* Simple Benefit Strip */}
              <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Keeps Winter Cold Out</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Blocks Street Noise</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero Maintenance</span>
                </div>
              </div>
            </div>

            {/* Right Visual Showcase Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#062c21] via-[#083528] to-[#041a14] rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden text-white">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />

                <div className="relative flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Inside Every Frame
                  </span>
                  <span className="text-[11px] bg-white/10 px-3 py-1 rounded-full border border-white/15 text-emerald-200 font-semibold">
                    All-Weather Seal
                  </span>
                </div>

                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white p-4 flex items-center justify-center shadow-inner">
                  <Image
                    src="/images/profile-hires.jpg"
                    alt="Multi-chamber insulated window frame"
                    width={340}
                    height={340}
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <div className="flex items-center gap-1.5 text-emerald-300 font-bold text-[11px] mb-0.5">
                      <Sun className="w-3.5 h-3.5" />
                      <span>Cozy Indoors</span>
                    </div>
                    <div className="text-slate-200 text-[11px] font-light">
                      Stops cold drafts &amp; heat loss
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <div className="flex items-center gap-1.5 text-emerald-300 font-bold text-[11px] mb-0.5">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Peace &amp; Quiet</span>
                    </div>
                    <div className="text-slate-200 text-[11px] font-light">
                      Cuts down outside noise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Showcase Cards */}
      <section className="w-full py-14 sm:py-20 overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8 sm:space-y-12">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Column */}
                <div
                  className={`lg:col-span-5 relative bg-slate-900 min-h-[260px] sm:min-h-[320px] overflow-hidden ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-200 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                        Custom Made to Fit
                      </span>
                      <div className="text-lg font-extrabold leading-tight">{product.name}</div>
                    </div>
                  </div>
                </div>

                {/* Simple Benefits & Action Column */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {product.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-emerald-800 font-semibold mt-1">
                      {product.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 max-w-2xl">
                      {product.description}
                    </p>
                  </div>

                  {/* Clean Feature Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                    {product.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 bg-[#f8faf9] border border-slate-200/70 px-3.5 py-2.5 rounded-xl"
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Strip */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-100">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setSelectedProductForQuote(product.name);
                        setQuoteModalOpen(true);
                      }}
                      className="bg-[#062c21] hover:bg-[#0c4333] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <span>Get a Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={`https://wa.me/918899919860?text=${encodeURIComponent(
                        `Hi, I would like to know more about ${product.name} and get 3D designs.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 text-slate-800 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-700" />
                      <span>WhatsApp for 3D Design</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Simple Home Guide */}
      <section className="w-full py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl mb-9">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              WHERE THEY FIT BEST
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Choosing the Right Fit for Your Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-[#fafaf9] p-6 rounded-2xl border border-slate-200/80 hover:bg-emerald-50/40 hover:border-emerald-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100/80 flex items-center justify-center mb-4">
                  {app.icon}
                </div>
                <div className="text-[11px] font-bold text-emerald-700 uppercase">{app.tag}</div>
                <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">{app.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={selectedProductForQuote}
      />
    </main>
  );
}
