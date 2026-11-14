'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Check,
  Shield,
  Layers,
  Sparkles,
  ChevronRight,
  X,
  ExternalLink,
  MessageCircle,
  Phone,
} from 'lucide-react';

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: { [key: string]: string };
}

export const productsData: Product[] = [
  {
    id: 'casement',
    slug: 'casement-windows',
    name: 'Casement Windows',
    tagline: 'Secure, versatile and energy efficient.',
    description:
      'Engineered for maximum acoustic and thermal performance. Casement windows open outward with heavy-duty friction stays and multi-point security hardware.',
    image: '/images/casement-hires.jpg',
    features: [
      'Multi-point locking mechanism with mushroom cams',
      'Double or triple glazing options (up to 36mm)',
      'Dual weather-seal EPDM airtight gaskets',
      'Available with top-hung or side-hung sash',
    ],
    specs: {
      'Profile Depth': '60mm / 70mm',
      'Glazing Thickness': 'Up to 36mm',
      'U-Value': '1.3 W/m²K',
      'Acoustic Rating': 'Up to 42 dB',
    },
  },
  {
    id: 'sliding',
    slug: 'sliding-windows',
    name: 'Sliding Windows',
    tagline: 'Space-saving with smooth operation.',
    description:
      'Sleek multi-track sliding windows designed for expansive daylight and smooth silent gliding. Ideal for balconies, patios, and modern living spaces.',
    image: '/images/sliding-hires.jpg',
    features: [
      'Smooth nylon-coated stainless steel rollers',
      '2-track, 3-track, and 4-track options',
      'Integrated fly-mesh sliding panel',
      'Interlocking weather fins against high winds',
    ],
    specs: {
      'Track Options': '2 / 3 / 4 Track',
      'Max Panel Width': '1500mm',
      'Max Panel Height': '2400mm',
      'Locking': 'Touch-lock & multi-point',
    },
  },
  {
    id: 'bifold',
    slug: 'bifold-patio-doors',
    name: 'Bi-Fold Patio Doors',
    tagline: 'Wide openings for seamless living.',
    description:
      'Transform entire wall spans into seamless open-air living spaces. Multi-panel folding concertina doors glide effortlessly and fold neatly against wall edges.',
    image: '/images/bifold-hires.jpg',
    features: [
      'Fold inwards or outwards to suit space',
      'Low-threshold flush floor track',
      'Up to 7 panels in a continuous run',
      'Heavy-duty bogie wheel bearing guides',
    ],
    specs: {
      'Max Opening Width': 'Up to 6.5 meters',
      'Panel Count': '3 to 7 Panels',
      'Hardware': 'Heavy-duty German-engineered',
      'Glazing': 'Toughened / laminated double glazing',
    },
  },
  {
    id: 'french',
    slug: 'french-doors',
    name: 'French Doors',
    tagline: 'Elegant, durable and modern.',
    description:
      'Timeless double-leaf doors delivering architectural charm, unobstructed clear entryway width, and robust modern insulation.',
    image: '/images/french-hires.jpg',
    features: [
      'Master & slave door configuration with shootbolts',
      'Full glass or mid-rail Georgian style',
      'Reinforced galvanized steel core',
      'Multipoint hook bolts on master door',
    ],
    specs: {
      'Door Type': 'Double Open-out / Open-in',
      'Threshold': 'Standard or Low-profile aluminium',
      'Hinges': '3D adjustable heavy-duty hinges',
      'Finish': 'Pure White, Anthracite Grey, Golden Oak',
    },
  },
  {
    id: 'fixed',
    slug: 'fixed-windows',
    name: 'Fixed Windows',
    tagline: 'Maximum light with unobstructed views.',
    description:
      'Expansive picture windows framing panoramic valley and mountain landscapes with unmatched thermal retention and weather resistance.',
    image: '/images/fixed-hires.jpg',
    features: [
      'No sash profile for maximum glass area',
      'Superb airtightness & storm resistance',
      'Ideal for double-height architectural facades',
      'Can be paired seamlessly with operable casements',
    ],
    specs: {
      'Glass Type': 'Laminated / Low-E / Acoustic Glazing',
      'Max Single Span': 'Up to 3m x 2.4m',
      'Wind Load Resistance': 'Class 4 (C5)',
      'Water Tightness': 'Class 9A (600 Pa)',
    },
  },
];

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
}

export default function ProductsSection({ onSelectProduct }: ProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="w-full py-12 sm:py-16 lg:py-20 bg-[#f8faf9] border-b border-slate-200/60 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12"
        >
          <div>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-emerald-700 block mb-2">
              OUR PRODUCTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Explore Our uPVC <br />
              <span className="text-emerald-900">Doors & Windows</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              A complete range of high-performance, low-maintenance uPVC
              solutions for modern homes and commercial spaces.
            </p>

            {/* Navigation Link to Dedicated Products Page */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 decoration-emerald-500"
              >
                <span>Full Catalog</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  href="/products"
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-emerald-50 hover:border-emerald-500 text-slate-700 hover:text-emerald-800 flex items-center justify-center transition-all shadow-xs active:scale-90"
                  aria-label="Previous product"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="w-10 h-10 rounded-full bg-[#062c21] hover:bg-[#0c4434] text-white flex items-center justify-center transition-all shadow-md active:scale-90"
                  aria-label="Next product"
                >
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5 Product Cards Grid (Spans full width edge-to-edge evenly across 5 columns in Full HD quality!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 w-full">
          {productsData.map((product, idx) => {
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProduct(product)}
                className="group relative w-full bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Full HD 1200x896 Card Image */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-3.5 shadow-xs">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-1.5 rounded-full backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="px-0.5">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-emerald-800 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Icon & View link */}
                <div className="pt-3 px-0.5 flex items-center justify-between border-t border-slate-100 mt-3">
                  <span className="text-[11px] font-semibold text-emerald-700 group-hover:text-emerald-900">
                    View Specs
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 group-hover:bg-[#062c21] group-hover:border-[#062c21] group-hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Simple 3D Design & Drawing Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs"
        >
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 text-center md:text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0 hidden sm:inline-block" />
            <span>Need 3D designs, window drawings, or ideas for your home?</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto shrink-0">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+918899919860"
              className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>+91-8899919860</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/918899919860?text=Hi%2C%20I%20need%203D%20designs%20and%20drawings%20for%20my%20windows%20and%20doors."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#062c21] hover:bg-[#0c4434] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp for 3D &amp; Drawings</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-60 sm:h-76 w-full bg-slate-900">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                    ARCHITECTURAL SYSTEMS CATALOG
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-7 space-y-5">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Specifications */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">
                        {key}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Engineering Highlights */}
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Engineering Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedProduct.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 bg-emerald-50/50 p-2 rounded-lg">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warranty Assurance */}
                <div className="flex items-center gap-2.5 bg-emerald-50/80 border border-emerald-200/70 p-3 rounded-xl text-xs text-emerald-950">
                  <Shield className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    Protected by our <strong>20-Year Product Warranty</strong> &amp; <strong>10-Year Hardware Warranty</strong>.
                  </span>
                </div>

                {/* Modal Bottom Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                  <Link
                    href={`/products#${selectedProduct.id}`}
                    onClick={() => setSelectedProduct(null)}
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5"
                  >
                    <span>View Dedicated Product Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="px-4 py-2 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Close
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        const prod = selectedProduct;
                        setSelectedProduct(null);
                        onSelectProduct(prod);
                      }}
                      className="bg-[#062c21] hover:bg-[#0c4434] text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>Request Quote For This</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
