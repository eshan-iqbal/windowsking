'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenSearch?: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
];

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-slate-200/70'
          : 'bg-white py-3.5 border-b border-slate-200/60'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200/70 overflow-hidden shadow-2xs group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo.png"
              alt="Windows King Logo"
              width={40}
              height={40}
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-base tracking-tight text-slate-900 uppercase leading-none">
              WINDOWS KING
            </span>
            <span className="text-[9px] sm:text-[11px] font-medium text-emerald-800/80 tracking-wider mt-0.5">
              uPVC Doors &amp; Windows
            </span>
          </div>
        </Link>

        {/* Simple Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  active
                    ? 'text-emerald-900 font-semibold'
                    : 'hover:text-slate-900'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-emerald-700" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenQuote}
            className="bg-[#062c21] hover:bg-[#0c4333] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-sm transition-all hover:gap-2.5 active:scale-95"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl px-4 py-5 flex flex-col gap-1.5 max-h-[calc(100vh-64px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'bg-emerald-50 text-emerald-950 font-bold'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+916005714181"
                className="border border-emerald-600/30 text-emerald-900 py-2.5 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 hover:bg-emerald-50"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>+91-6005714181</span>
              </a>
              <a
                href="tel:+918899919860"
                className="border border-emerald-600/30 text-emerald-900 py-2.5 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 hover:bg-emerald-50"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>+91-8899919860</span>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#062c21] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <span>Request Free Site Quote</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
