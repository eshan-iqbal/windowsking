'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import WhyWindowsKingSection from '@/components/WhyWindowsKingSection';
import ProcessSection from '@/components/ProcessSection';
import BottomSection from '@/components/BottomSection';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import TourModal from '@/components/TourModal';
import SearchModal from '@/components/SearchModal';

export default function Home() {
  const router = useRouter();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('Casement Windows');

  const handleOpenQuoteWithProduct = (product: { name: string }) => {
    setSelectedProductForQuote(product.name);
    setQuoteModalOpen(true);
  };

  const handleScrollToSection = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Bar: Phone, Email, Location & Services */}
      <TopBar />

      {/* 2. Main Navigation Bar with Logo and Action CTAs */}
      <Navbar
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* 3. Hero Section with Video Tour Trigger and Floating 4-Stat Card */}
      <HeroSection
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenTour={() => setTourModalOpen(true)}
      />

      {/* 4. Products Section (Casement, Sliding, Bi-Fold, French, Fixed) */}
      <ProductsSection onSelectProduct={handleOpenQuoteWithProduct} />

      {/* 5. Why Windows King: 3D Technical Cutaway & Thermal Features */}
      <WhyWindowsKingSection
        onDiscoverBenefits={() => router.push('/products')}
      />

      {/* 6. Manufacturing Process: 6 Precision In-House Fabrication Steps */}
      <ProcessSection />

      {/* 7. Bottom Trust Row: Client Testimonials, Certifications (ISO, RoHS, CE), Custom Solution CTA */}
      <BottomSection onOpenConsultation={() => setQuoteModalOpen(true)} />

      {/* 9. Full Luxury Architectural Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={selectedProductForQuote}
      />

      {/* Video Tour Modal */}
      <TourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectAction={handleScrollToSection}
      />
    </main>
  );
}


