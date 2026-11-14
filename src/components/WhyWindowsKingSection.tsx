'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sliders,
} from 'lucide-react';

interface WhyWindowsKingSectionProps {
  onDiscoverBenefits: () => void;
}

export default function WhyWindowsKingSection({
  onDiscoverBenefits,
}: WhyWindowsKingSectionProps) {
  return (
    <section id="why-us" className="w-full py-16 sm:py-24 bg-[#fafaf9] border-b border-slate-200/80 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 3D Technical Profile Cutaway with 2 Clean Original Annotations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center">
              <Image
                src="/images/profile-hires.jpg"
                alt="Multi-chamber uPVC profile cutaway with argon double glazing"
                width={400}
                height={400}
                className="object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                priority
              />

              {/* Callout 1: Glazing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute top-6 left-2 sm:left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-md max-w-[170px] sm:max-w-[200px]"
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Double/Triple Glazing
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 leading-snug">
                  Better insulation & noise control
                </div>
              </motion.div>

              {/* Callout 2: uPVC Profile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute bottom-6 left-2 sm:left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-md max-w-[170px] sm:max-w-[200px]"
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    uPVC Profile
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 leading-snug">
                  Strong, durable & low-maintenance
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Paragraphs & Solutions Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-bold tracking-widest uppercase mb-3">
                <Sliders className="w-3.5 h-3.5 text-emerald-700" />
                <span>WHY WINDOWS KING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Built for Comfort, <br />
                <span className="font-serif italic font-normal text-emerald-800">
                  Safety and Longevity.
                </span>
              </h2>
            </div>

            {/* Editorial Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              <p>
                Standard windows quickly succumb to Kashmir&apos;s freezing winter temperatures,
                intense alpine UV radiation, and heavy seasonal snowfall. Traditional wooden and
                aluminum frames shrink, warp, and conduct cold directly into the house, causing
                drastic heat loss, rattling glass, and exorbitant heating fuel bills.
              </p>
              <p>
                Windows King uPVC systems are extruded with up to six internal honeycomb insulating
                air chambers that act as an unbroken thermal barrier. Paired with high-performance
                Low-E argon gas-filled double or triple glazing, our windows retain indoor warmth
                during severe sub-zero -25°C frosts, eliminate interior condensation fog, and reduce
                residential heating and HVAC expenses by up to 35%.
              </p>
              <p>
                To deliver comprehensive tranquility and peace of mind, our assemblies incorporate
                asymmetric acoustic laminated glass that cuts outside traffic and neighborhood noise
                by up to 42 decibels. Reinforced with heavy-duty galvanized cold-rolled steel channels
                and German multi-point espagnolette locking shootbolts, each installation is backed by
                our 20-year product warranty and 10-year hardware warranty, guaranteeing
                uncompromised structural rigidity, effortless daily operation, and a maintenance-free
                finish that never requires repainting, sanding, or varnishing for decades.
              </p>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onDiscoverBenefits}
                className="bg-[#062c21] hover:bg-[#0c4333] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 shadow-md transition-all hover:gap-3 cursor-pointer"
              >
                <span>Explore Full Engineering Solutions</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
