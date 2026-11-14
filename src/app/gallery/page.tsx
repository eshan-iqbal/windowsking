'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import {
  Maximize2,
  X,
  Camera,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Play,
} from 'lucide-react';

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  category: 'windows' | 'doors' | 'videos';
  categoryLabel: string;
  src: string;
  gridClass: string;
  finish: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  // --- 4 Real Demonstration Video Reels (9:16 Vertical Video) ---
  {
    id: 'site-video-operation',
    type: 'video',
    title: 'Site Installation & Smooth Sash Operation',
    category: 'videos',
    categoryLabel: 'Live Site Reel',
    src: '/gallery/site-video-operation.mp4',
    gridClass: 'col-span-1 lg:col-span-3 aspect-[9/16]',
    finish: 'Smooth Sash Glide',
    description:
      'Live site footage demonstrating effortless sash gliding, precision handle actuation, and airtight acoustic compression gaskets in action.',
  },
  {
    id: 'site-video-multipoint-lock',
    type: 'video',
    title: 'Precision Multi-Point Security Locking',
    category: 'videos',
    categoryLabel: 'Live Site Reel',
    src: '/gallery/site-video-multipoint-lock.mp4',
    gridClass: 'col-span-1 lg:col-span-3 aspect-[9/16]',
    finish: 'Multi-Point Security',
    description:
      'Live demonstration of German-engineered espagnolette shootbolts engaging securely into reinforced frame keepers with one smooth turn.',
  },
  {
    id: 'site-video-pleated-mesh',
    type: 'video',
    title: 'Retractable Pleated Insect Mesh Demo',
    category: 'videos',
    categoryLabel: 'Live Site Reel',
    src: '/gallery/site-video-pleated-mesh.mp4',
    gridClass: 'col-span-1 lg:col-span-3 aspect-[9/16]',
    finish: 'Pleated Insect Screen',
    description:
      'Live demonstration showing the magnetic latching and effortless sliding glide of our integrated retractable pleated mosquito mesh screens.',
  },
  {
    id: 'site-video-factory-quality',
    type: 'video',
    title: 'Fusion Welding & Factory Quality Handover',
    category: 'videos',
    categoryLabel: 'Factory Reel',
    src: '/gallery/site-video-factory-quality.mp4',
    gridClass: 'col-span-1 lg:col-span-3 aspect-[9/16]',
    finish: 'In-House Quality Check',
    description:
      'In-house plant inspection showing seamless CNC fusion welds, structural frame squareness, and immaculate surface finish prior to dispatch.',
  },

  // --- Grand Architectural Facades & Entrance Suites ---
  {
    id: 'luxury-stone-villa-atrium',
    type: 'image',
    title: 'Luxury Stone Villa with Grand Arched Atrium',
    category: 'windows',
    categoryLabel: 'Windows & Facades',
    src: '/gallery/luxury-stone-villa-atrium.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Alpine White / Multi-Tier Arches',
    description:
      'Monumental double-height vertical fixed arched uPVC facade, balcony French doors, and matching casement windows on a luxury stone residence.',
  },
  {
    id: 'circular-emblem-villa-suite',
    type: 'image',
    title: 'Circular Emblem Grand Entrance Suite',
    category: 'doors',
    categoryLabel: 'Doors & Entrances',
    src: '/gallery/circular-emblem-villa-suite.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Beveled Glass & Sidelights',
    description:
      'Monumental double entrance door with circular geometric mullions, twin sidelight panels, and high-transom daylight glazing.',
  },
  {
    id: 'greek-key-entrance-door',
    type: 'image',
    title: 'Greek Key Architectural Entrance Door',
    category: 'doors',
    categoryLabel: 'Doors & Entrances',
    src: '/gallery/greek-key-entrance-door.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Pure White uPVC / Geometric Grill',
    description:
      'Double entryway door featuring vertical stainless pull handles and balanced geometric Greek key glazing bar accents.',
  },
  {
    id: 'contemporary-sliding-window',
    type: 'image',
    title: 'Contemporary Sliding Window with Geometric Mullions',
    category: 'windows',
    categoryLabel: 'Windows & Facades',
    src: '/gallery/contemporary-sliding-window.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Pure White uPVC / Marble Ledge',
    description:
      'Smooth double sliding uPVC window with horizontal geometric mullion accents, integrated recessed handles, and acoustic insulation.',
  },
  {
    id: 'diamond-motif-entrance-suite',
    type: 'image',
    title: 'Diamond Bevel Grand Foyer Suite',
    category: 'doors',
    categoryLabel: 'Doors & Entrances',
    src: '/gallery/diamond-motif-entrance-suite.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Frosted Glass & Diamond Grille',
    description:
      'High-security double entrance door suite with diamond beveled inserts, frosted acoustic glass, and matching side picture window.',
  },
  {
    id: 'classical-manor-casements',
    type: 'image',
    title: 'Classical Manor Multi-Pane Casement Suite',
    category: 'windows',
    categoryLabel: 'Windows & Facades',
    src: '/gallery/classical-manor-casements.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Diamond Grille Architectural Windows',
    description:
      'Custom multi-sash uPVC casement windows with decorative diamond glazing bars installed within arched exterior stone facade surrounds.',
  },
  {
    id: 'geometric-ring-foyer-doors',
    type: 'image',
    title: 'Geometric Ring Double Patio Doors',
    category: 'doors',
    categoryLabel: 'Doors & Entrances',
    src: '/gallery/geometric-ring-foyer-doors.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Clear Toughened Safety Glass',
    description:
      'High-transmittance double entrance doors with central interlocking circular mullions and full-height vertical pull hardware.',
  },
  {
    id: 'floral-filigree-designer-door',
    type: 'image',
    title: 'Floral Filigree Custom Designer Entrance Door',
    category: 'doors',
    categoryLabel: 'Doors & Entrances',
    src: '/gallery/floral-filigree-designer-door.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Duo-Tone Decorative Inlay',
    description:
      'Artisan entrance door suite featuring laser-cut floral filigree accents, geometric frame borders, and insulated multi-chamber core.',
  },
  {
    id: 'frosted-geometric-foyer-suite',
    type: 'image',
    title: 'Frosted Geometric Foyer Security Suite',
    category: 'doors',
    categoryLabel: 'Doors & Entrances',
    src: '/gallery/frosted-geometric-foyer-suite.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Frosted Acoustic Glass',
    description:
      'Dual entrance door suite with frosted privacy glass, central circular geometric grille, and multi-point perimeter security shootbolts.',
  },

  // --- Real On-Site & Showroom Installations ---
  {
    id: 'villa-atrium-facade',
    type: 'image',
    title: 'Double-Height Arched Atrium Windows',
    category: 'windows',
    categoryLabel: 'Windows & Systems',
    src: '/gallery/villa-atrium-facade.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Pure White uPVC',
    description:
      'Two-tier double-height vertical fixed arched uPVC facade units engineered for maximum natural daylight on an architectural Kashmir villa.',
  },
  {
    id: 'sliding-suite-showroom',
    type: 'image',
    title: 'Georgian Bar Sliding Patio Doors',
    category: 'doors',
    categoryLabel: 'Doors & Entrances',
    src: '/gallery/sliding-suite-showroom.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Pure White uPVC',
    description:
      'Showroom display showing our precision-fitted Georgian bar double sliding door system paired with a heavy-duty insulated entrance door.',
  },
  {
    id: 'french-balcony-doors',
    type: 'image',
    title: 'French Double Balcony Doors',
    category: 'doors',
    categoryLabel: 'Doors & Entrances',
    src: '/gallery/french-balcony-doors.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Pure White uPVC',
    description:
      'Heavy-duty master and slave French double balcony door installation with dual perimeter compression weather seals.',
  },
  {
    id: 'casement-pleated-mesh',
    type: 'image',
    title: 'Casement Window with Pleated Mesh',
    category: 'windows',
    categoryLabel: 'Windows & Systems',
    src: '/gallery/casement-pleated-mesh.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Pure White uPVC',
    description:
      'Outward-opening operable casement sash with custom integrated retractable pleated insect screen for bug-free alpine ventilation.',
  },
  {
    id: 'casement-bay-transom',
    type: 'image',
    title: 'Multi-Panel Casement Suite with Transom',
    category: 'windows',
    categoryLabel: 'Windows & Systems',
    src: '/gallery/casement-bay-transom.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Class-A White uPVC',
    description:
      'Three-bay custom fabricated window unit with dual opening sashes, heavy-duty friction stays, and top transom glass on site.',
  },
  {
    id: 'bedroom-casement-window',
    type: 'image',
    title: 'Precision Sealed Bedroom Casement',
    category: 'windows',
    categoryLabel: 'Windows & Systems',
    src: '/gallery/bedroom-casement-window.jpg',
    gridClass: 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Class-A White uPVC',
    description:
      'Two-lite residential casement assembly equipped with multi-point espagnolette locking shootbolts overlooking valley gardens.',
  },
  {
    id: 'slimline-vertical-window',
    type: 'image',
    title: 'Slimline Architectural Picture Window',
    category: 'windows',
    categoryLabel: 'Windows & Systems',
    src: '/gallery/slimline-vertical-window.jpg',
    gridClass: 'col-span-1 lg:col-span-3 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Pure White uPVC',
    description:
      'Vertical picture casement framing outdoor garden greenery with multi-chamber thermal and acoustic insulation.',
  },
  {
    id: 'exterior-casement-mesh',
    type: 'image',
    title: 'Exterior Multi-Sash Casement with Screens',
    category: 'windows',
    categoryLabel: 'Windows & Systems',
    src: '/gallery/exterior-casement-mesh.jpg',
    gridClass: 'col-span-1 lg:col-span-3 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'White uPVC / Screens',
    description:
      'On-site exterior facade view showing dual casement sashes swung open with protective pleated insect screens deployed.',
  },
  {
    id: 'georgian-privacy-door',
    type: 'image',
    title: 'Georgian Bar Frosted Privacy Door',
    category: 'doors',
    categoryLabel: 'Doors & Entrances',
    src: '/gallery/georgian-privacy-door.jpg',
    gridClass: 'col-span-1 lg:col-span-3 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'Class-A White uPVC',
    description:
      'Moisture-proof and warp-resistant interior bathroom & utility door with Georgian grille frosted glass and insulated lower panel.',
  },
  {
    id: 'georgian-sliding-window',
    type: 'image',
    title: 'Double-Track Georgian Sliding Window',
    category: 'windows',
    categoryLabel: 'Windows & Systems',
    src: '/gallery/georgian-sliding-window.jpg',
    gridClass: 'col-span-1 lg:col-span-3 aspect-[4/5] sm:aspect-[3/4]',
    finish: 'White uPVC Frame',
    description:
      'Two-track sliding window system with decorative internal Georgian glazing bars for classic architectural styling.',
  },
];

const categories = [
  { id: 'all', label: `All Work (${galleryItems.length})` },
  { id: 'videos', label: `Live Video Demos (${galleryItems.filter((i) => i.type === 'video').length})` },
  { id: 'windows', label: `Windows (${galleryItems.filter((i) => i.category === 'windows').length})` },
  { id: 'doors', label: `Doors (${galleryItems.filter((i) => i.category === 'doors').length})` },
];

export default function GalleryPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) =>
    activeCategory === 'all'
      ? true
      : activeCategory === 'videos'
        ? item.type === 'video'
        : item.category === activeCategory
  );

  const activeItem = activeIndex !== null ? filteredItems[activeIndex] ?? null : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : prev === 0
              ? filteredItems.length - 1
              : prev - 1
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, filteredItems.length]);

  return (
    <main className="min-h-screen flex flex-col bg-[#041a13] text-white">
      <TopBar />
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* 1. Cinematic Gallery Header */}
      <section className="relative w-full pt-10 pb-8 sm:pt-16 sm:pb-12 border-b border-emerald-950/80 bg-gradient-to-b from-[#06241a] to-[#041a13] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>Factory &amp; Site Gallery</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
            Real Installations.{' '}
            <span className="font-serif italic font-normal text-emerald-300">
              Real Work.
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-xl mb-7">
            Authentic on-site photos and live operation video reels from our in-house manufacturing facility
            and client homes across Kashmir. Tap any item to inspect full screen.
          </p>

          {/* Category Filter Pills */}
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 w-max sm:w-full mx-auto px-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveIndex(null);
                    }}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-emerald-400 text-slate-950 shadow-lg'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Responsive Gallery Grid (Vertical 9:16 Video Reels & 3:4 Portrait Photos) */}
      <section className="w-full py-8 sm:py-14 bg-[#041a13]">
        <div className="w-full px-3 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-5">
            {filteredItems.map((item, idx) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.06 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveIndex(idx)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-emerald-900/60 hover:border-emerald-400/80 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeCategory === 'all'
                    ? item.gridClass
                    : activeCategory === 'videos'
                      ? 'col-span-1 lg:col-span-3 aspect-[9/16]'
                      : 'col-span-1 lg:col-span-4 aspect-[4/5] sm:aspect-[3/4]'
                }`}
              >
                {item.type === 'video' ? (
                  <div className="relative w-full h-full bg-black">
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Top Floating Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3.5 sm:left-3.5 sm:right-3.5 flex items-center justify-between z-10 pointer-events-none">
                        
                        
                     

                      {/* Top Expand Icon */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5 text-emerald-300" />
                      </div>
                    </div>

                    {/* Subtle Gradient Shadow */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                    {/* Bottom Title Info */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 text-left pointer-events-none z-10">
                      <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
                        {item.finish}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-black">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Top Expand Icon */}
                    <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-300" />
                    </div>

                    {/* Subtle Gradient Shadow */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                    {/* Bottom Title Info */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 text-left pointer-events-none">
                      <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
                        {item.finish}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Fullscreen Lightbox Modal (Adaptive Full-Height View) */}
      <AnimatePresence>
        {activeItem && activeIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveIndex(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-3xl max-h-[94vh] bg-slate-950 border border-emerald-900/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar (No Site Name, Clean Counter Pill & Close Button) */}
              <div className="px-4 sm:px-6 py-3.5 border-b border-slate-800/90 flex items-center justify-between gap-2 shrink-0">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30 shrink-0">
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(filteredItems.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
                {/* Media Container: Full Adaptive Height for 9:16 Vertical Content */}
                <div className="relative w-full h-[52vh] sm:h-[65vh] rounded-xl sm:rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                  {activeItem.type === 'video' ? (
                    <video
                      key={activeItem.src}
                      src={activeItem.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      disableRemotePlayback
                      className="max-h-full max-w-full object-contain pointer-events-none select-none"
                    />
                  ) : (
                    <Image
                      src={activeItem.src}
                      alt={activeItem.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  )}

                  {/* Prev / Next Buttons */}
                  {filteredItems.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === 0 ? filteredItems.length - 1 : activeIndex - 1
                          )
                        }
                        aria-label="Previous item"
                        className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-colors z-20 shadow-xl cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex((activeIndex + 1) % filteredItems.length)
                        }
                        aria-label="Next item"
                        className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-colors z-20 shadow-xl cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Item Details */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                      {activeItem.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1.5">
                      {activeItem.description}
                    </p>
                  </div>
                  <span className="self-start shrink-0 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-emerald-300 text-[11px] font-semibold">
                    {activeItem.finish}
                  </span>
                </div>

                {/* In-House Fabrication & Warranty Assurance */}
                <div className="bg-emerald-950/50 border border-emerald-800/50 p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs text-slate-300">
                      Custom-built at our plant on Old National Highway, Uranhall, Anantnag.
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-900/40 px-2.5 py-0.5 rounded-full border border-emerald-700/50 self-start sm:self-auto">
                    20-Yr Product • 10-Yr Hardware Warranty
                  </span>
                </div>
              </div>

              {/* Footer CTAs */}
              <div className="p-4 sm:px-6 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://wa.me/918899919860?text=${encodeURIComponent(
                    `Hi Windows King, I liked "${activeItem.title}" from your gallery and would like pricing and custom design details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-emerald-500/40 hover:bg-emerald-950 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp for Similar Design</span>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => {
                    setActiveIndex(null);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Bottom Custom Quote Strip */}
      <section className="w-full py-14 sm:py-16 bg-[#03150f] border-t border-emerald-950/80 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full px-4 sm:px-8 max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Bring These Designs to Your Home
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            Our team visits sites across Anantnag, Srinagar, Pulwama, Baramulla, Gulmarg, and Jammu
            for laser measurements, 3D designs, and technical consultations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setQuoteModalOpen(true)}
              className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm px-7 py-3 rounded-full inline-flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </main>
  );
}
