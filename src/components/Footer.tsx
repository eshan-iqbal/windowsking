'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="w-full bg-[#041a14] text-slate-300 pt-16 pb-10 border-t border-[#0a3d2e]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-emerald-950/80">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center p-1">
                <Image
                  src="/images/logo.png"
                  alt="Windows King Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-black text-base sm:text-lg tracking-tight text-white uppercase block leading-none">
                  WINDOWS KING
                </span>
                <span className="text-[11px] text-emerald-400 font-medium tracking-wider">
                  uPVC Doors & Windows
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The premier manufacturer and installer of European-grade,
              multi-chamber uPVC doors and windows in Jammu & Kashmir. Engineered
              for harsh sub-zero Himalayan winters and modern luxury living.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-emerald-400 transition-colors">
                  Architectural Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Windows King
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Range */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/products#casement" className="hover:text-emerald-400 transition-colors">
                  Casement Windows
                </Link>
              </li>
              <li>
                <Link href="/products#sliding" className="hover:text-emerald-400 transition-colors">
                  Multi-Track Sliding Windows
                </Link>
              </li>
              <li>
                <Link href="/products#bifold" className="hover:text-emerald-400 transition-colors">
                  Bi-Fold Patio Doors
                </Link>
              </li>
              <li>
                <Link href="/products#french" className="hover:text-emerald-400 transition-colors">
                  French Double Doors
                </Link>
              </li>
              <li>
                <Link href="/products#fixed" className="hover:text-emerald-400 transition-colors">
                  Fixed Architectural Glass
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Works */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Works & Showroom
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Old National Highway, Uranhall, Anantnag, Jammu & Kashmir
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+916005714181" className="hover:text-emerald-400">
                    +91-6005714181
                  </a>
                  <a href="tel:+918899919860" className="hover:text-emerald-400">
                    +91-8899919860
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="mailto:info@windowsking.in" className="hover:text-emerald-400">
                  info@windowsking.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Windows King uPVC Doors & Windows. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/warranty" className="hover:text-emerald-400 transition-colors">
              Warranty Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
