'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Shield, Zap, Sparkles, Volume2 } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (anchor: string) => void;
}

const searchIndex = [
  {
    title: 'Casement Windows',
    category: 'Product',
    anchor: '#products',
    description: 'Outward swinging high-compression sash with multi-point espagnolette locking.',
  },
  {
    title: 'Sliding Windows & Balcony Doors',
    category: 'Product',
    anchor: '#products',
    description: 'Multi-track space-saving sliding windows with fly-mesh screen.',
  },
  {
    title: 'Bi-Fold Patio Doors',
    category: 'Product',
    anchor: '#products',
    description: 'Concertina folding doors that open wide for seamless indoor-outdoor living.',
  },
  {
    title: 'French Double Doors',
    category: 'Product',
    anchor: '#products',
    description: 'Classic double glass doors with master/slave shootbolts and Georgian bars.',
  },
  {
    title: 'Fixed Panoramic Windows',
    category: 'Product',
    anchor: '#products',
    description: 'Airtight floor-to-ceiling picture glass for unobstructed mountain views.',
  },
  {
    title: 'Thermal Insulation & Winter Heating',
    category: 'Solution',
    anchor: '#why-us',
    description: 'Double & triple glazing with argon gas retention for Kashmir sub-zero winters.',
  },
  {
    title: 'Sound Insulation & Acoustic Glass',
    category: 'Solution',
    anchor: '#why-us',
    description: 'Acoustic laminated glass reduces exterior noise by up to 42 dB.',
  },
  {
    title: 'In-House Manufacturing Plant',
    category: 'Process',
    anchor: '#manufacturing',
    description: 'Automated 4-point welding, double mitre cutting, and factory tour.',
  },
  {
    title: 'Completed Projects in Srinagar & Jammu',
    category: 'Portfolio',
    anchor: '#projects',
    description: 'Luxury villas, commercial offices, and private residential installations.',
  },
];

export default function SearchModal({
  isOpen,
  onClose,
  onSelectAction,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchIndex.slice(0, 5);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100"
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-slate-100 flex items-center gap-3">
              <Search className="w-5 h-5 text-emerald-600 shrink-0" />
              <input
                type="text"
                placeholder="Search products, thermal specs, projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Results List */}
            <div className="p-3 max-h-[360px] overflow-y-auto space-y-1">
              {filtered.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-400">
                  No matching products or specs found. Try &ldquo;casement&rdquo;, &ldquo;thermal&rdquo;, or &ldquo;bifold&rdquo;.
                </div>
              ) : (
                filtered.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onSelectAction(item.anchor);
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-emerald-50 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 group-hover:bg-emerald-200/60 text-slate-600 group-hover:text-emerald-900">
                          {item.category}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-950">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

