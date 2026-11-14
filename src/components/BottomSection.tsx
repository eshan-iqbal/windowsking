'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

interface BottomSectionProps {
  onOpenConsultation: () => void;
}

export default function BottomSection({ onOpenConsultation }: BottomSectionProps) {
  return (
    <section className="w-full py-14 sm:py-20 bg-[#fafaf9] border-b border-slate-200/80 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Architectural Consultation CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-[#062c21] via-[#083528] to-[#041a14] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-emerald-500/20 relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-3 text-emerald-300 text-xs font-bold tracking-wider uppercase">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>ARCHITECTURAL CONSULTATION</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Need a Custom{' '}
              <span className="font-serif italic font-normal text-emerald-300">
                Window Schedule?
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mt-2.5">
              Get complimentary laser measurements and exact U-value thermal estimates for your villa,
              renovation, or commercial project anywhere in Kashmir.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenConsultation}
              className="w-full md:w-auto bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full flex items-center justify-center gap-2 shadow-lg transition-all hover:gap-3 cursor-pointer"
            >
              <span>Request Free Site Estimate</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
