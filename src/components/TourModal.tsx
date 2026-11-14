'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, CheckCircle2, Shield, Factory } from 'lucide-react';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export default function TourModal({ isOpen, onClose, onOpenQuote }: TourModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-800 text-white"
          >
            {/* Video Player Mockup / Preview */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center group">
              <Image
                src="/images/hero.jpg"
                alt="Windows King Factory Tour"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Central Play Trigger */}
              <div className="relative z-10 text-center space-y-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/50 cursor-pointer"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </motion.div>
                <div className="text-xs uppercase font-bold tracking-widest text-emerald-300">
                  HD Factory Walkthrough
                </div>
              </div>
            </div>

            {/* Plant Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <Factory className="w-4 h-4" />
                <span>Srinagar State-of-the-Art Fabrication Plant</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                German CNC Technology Meets Precision Craftsmanship
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Take a visual tour inside our dedicated uPVC manufacturing facility in
                Srinagar. From automated double-head profile mitre saws and 4-point
                molecular fusion corner welders to cleanroom insulated glass unit (IGU)
                assembly with argon gas injection.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>15,000 Sq.Ft Plant</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>500+ Windows/Month</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% In-House QC</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Close Window
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    onClose();
                    onOpenQuote();
                  }}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-full text-xs transition-colors cursor-pointer"
                >
                  Schedule an In-Person Plant Visit
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

