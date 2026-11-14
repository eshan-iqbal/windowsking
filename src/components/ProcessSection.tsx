'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Factory,
  ShieldCheck,
  Layers,
  Scissors,
  Flame,
  Wrench,
  Truck,
  type LucideIcon,
} from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
}

const processSteps: ProcessStep[] = [
  { step: '01', title: 'Profile Selection' },
  { step: '02', title: 'Precision Cutting' },
  { step: '03', title: 'Welding & Fabrication' },
  { step: '04', title: 'Hardware & Gaskets' },
  { step: '05', title: 'Quality Inspection' },
  { step: '06', title: 'Packaging & Delivery' },
];

const stepIcons: LucideIcon[] = [Layers, Scissors, Flame, Wrench, ShieldCheck, Truck];

const STEP_DURATION_MS = 2000;

interface ProcessSectionProps {
  onViewFactory?: () => void;
}

export default function ProcessSection(_props: ProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, STEP_DURATION_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="manufacturing" className="w-full py-14 sm:py-20 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-bold tracking-widest uppercase mb-3">
            <Factory className="w-3.5 h-3.5 text-emerald-700" />
            <span>PRECISION FABRICATION PIPELINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From Raw Profile to <br />
            <span className="font-serif italic font-normal text-emerald-800">
              Perfect Installation.
            </span>
          </h2>
        </motion.div>

        {/* Auto-Animated Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="flow-grid-bg rounded-3xl border border-slate-200/90 bg-[#f8faf9] p-4 sm:p-6 lg:p-8 shadow-xs"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-0 sm:gap-3.5 lg:gap-4 relative">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i];
              const isActive = i === activeIndex;
              const hasNext = i < processSteps.length - 1;

              return (
                <div key={step.step} className="relative flex flex-col">
                  {/* Desktop horizontal connector (lg+) */}
                  {hasNext && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex pointer-events-none absolute top-1/2 left-[calc(100%-4px)] w-[calc(16px+8px)] -translate-y-1/2 z-0 items-center"
                    >
                      <div className="relative w-full border-t-2 border-dashed border-emerald-700/20">
                        {isActive && (
                          <span
                            key={`dot-x-${activeIndex}`}
                            className="flow-dot-active-x absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.85)]"
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Stage Card */}
                  <motion.button
                    type="button"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={isActive}
                    aria-label={`Stage ${step.step}: ${step.title}`}
                    className={`group relative z-10 w-full flex sm:flex-col items-center sm:justify-center gap-3.5 sm:gap-0 text-left sm:text-center rounded-2xl px-4 py-3.5 sm:p-4 lg:p-4 border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 cursor-pointer ${
                      isActive
                        ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20 sm:-translate-y-1'
                        : 'bg-white/75 border-slate-200/80 hover:bg-white hover:border-emerald-300'
                    }`}
                  >
                    {/* Icon Node */}
                    <div className="relative shrink-0 sm:mb-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? 'bg-emerald-700 border-emerald-700 text-white shadow-sm scale-105'
                            : 'bg-emerald-50/70 border-slate-200 text-emerald-700 group-hover:border-emerald-400 group-hover:bg-emerald-50'
                        }`}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span
                        className={`absolute -right-1.5 -top-1 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[9px] font-bold transition-colors duration-300 ${
                          isActive
                            ? 'bg-slate-900 text-emerald-300'
                            : 'bg-slate-800 text-white/90 group-hover:bg-slate-900'
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Stage Title */}
                    <span
                      className={`text-xs sm:text-[13px] font-bold leading-snug transition-colors duration-300 ${
                        isActive ? 'text-emerald-950' : 'text-slate-700 group-hover:text-emerald-900'
                      }`}
                    >
                      {step.title}
                    </span>
                  </motion.button>

                  {/* Mobile vertical connector (< sm) */}
                  {hasNext && (
                    <div
                      aria-hidden="true"
                      className="flex sm:hidden justify-start pl-[36px] h-5"
                    >
                      <div className="relative h-full border-l-2 border-dashed border-emerald-700/20">
                        {isActive && (
                          <span
                            key={`dot-y-${activeIndex}`}
                            className="flow-dot-active-y absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.85)]"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
