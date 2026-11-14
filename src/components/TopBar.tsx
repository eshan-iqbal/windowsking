'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-[#05261e] text-slate-200 text-xs py-2 px-4 sm:px-8 lg:px-12 border-b border-[#0b382c]/80">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Contact Links on Left */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Old National Highway, Uranhall, Anantnag</span>
          </div>
          <span className="hidden sm:inline text-emerald-800">|</span>
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <a
              href="tel:+916005714181"
              className="hover:text-emerald-300 transition-colors"
            >
              +91-6005714181
            </a>
            <span className="text-emerald-700">/</span>
            <a
              href="tel:+918899919860"
              className="hover:text-emerald-300 transition-colors"
            >
              +91-8899919860
            </a>
          </div>
          <span className="hidden md:inline text-emerald-800">|</span>
          <a
            href="mailto:info@windows-king.com"
            className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>info@windows-king.com</span>
          </a>
        </div>

        {/* Manufacturing / Supply / Installation Badge on Right */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] sm:text-xs font-medium text-emerald-300/90 tracking-wide">
          <span>Manufacturing</span>
          <span className="text-emerald-700">|</span>
          <span>Supply</span>
          <span className="text-emerald-700">|</span>
          <span>Installation</span>
        </div>
      </div>
    </div>
  );
}
