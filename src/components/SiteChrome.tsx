'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

interface SiteChromeProps {
  children: React.ReactNode;
}

/**
 * Client shell for server-component pages (legal pages, 404, etc.).
 * Renders the standard TopBar / Navbar / Footer plus the quote modal,
 * so static pages keep full interactive chrome without prop drilling.
 */
export default function SiteChrome({ children }: SiteChromeProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#fafaf9]">
      <TopBar />
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

      <div className="flex-1">{children}</div>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct="Casement Windows"
      />
    </main>
  );
}
