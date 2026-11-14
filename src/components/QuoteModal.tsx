'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Check,
  Send,
  User,
  Phone,
  MapPin,
  Loader2,
  MessageSquare,
  Navigation,
} from 'lucide-react';
import MapPickerModal, { PinnedLocation } from './MapPickerModal';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [pinnedLocation, setPinnedLocation] = useState<PinnedLocation | null>(null);
  const [mapOpen, setMapOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const resetAndClose = () => {
    setSubmitted(false);
    setError(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          address: address.trim(),
          notes: notes.trim(),
          location: pinnedLocation
            ? { lat: pinnedLocation.lat, lng: pinnedLocation.lng }
            : null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit your request.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
              onClick={resetAndClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200/80 my-6"
              onClick={(e) => e.stopPropagation()}
            >
              {submitted ? (
                <div className="p-8 text-center space-y-5 relative">
                  <button
                    onClick={resetAndClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Close quote modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-700">
                  REQUEST CONFIRMED
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Quote Request Sent!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed mt-2">
                  Thank you, <strong className="text-slate-900">{name}</strong>. We&apos;ve received
                  your details and will call you shortly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8faf9] border border-slate-200/80 text-left text-xs space-y-2">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Phone</span>
                  <span className="font-semibold text-slate-900">{phone}</span>
                </div>
                <div className="pt-2 border-t border-slate-200/70">
                  <span className="text-slate-500 block mb-0.5">Site Address</span>
                  <span className="font-medium text-slate-800 leading-relaxed">{address}</span>
                </div>
                {pinnedLocation && (
                  <div className="pt-2 border-t border-slate-200/70">
                    <span className="text-slate-500 block mb-0.5">Pinned Map Location</span>
                    <span className="font-medium text-emerald-800 leading-snug block">
                      {pinnedLocation.address}
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={resetAndClose}
                className="w-full bg-[#062c21] hover:bg-[#0c4434] text-white py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Top Emerald Header */}
              <div className="bg-gradient-to-br from-[#062c21] via-[#083528] to-[#041a14] px-6 sm:px-7 pt-6 pb-5 text-white relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />

                <button
                  onClick={resetAndClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close quote modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight pr-8">
                  Request a Custom Quote
                </h3>
                <p className="text-xs text-slate-300 mt-1 font-light">
                  Enter your contact details, address, and pin your exact site on the map.
                </p>
              </div>

              {/* Simple Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 text-xs">
                {/* Full Name */}
                <div>
                  <label className="font-semibold text-slate-700 block mb-1.5">
                    Full Name <span className="text-emerald-700">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Imran Dar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/15 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="font-semibold text-slate-700 block mb-1.5">
                    Phone Number <span className="text-emerald-700">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="+91-6005714181"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/15 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Full Site Address */}
                <div>
                  <label className="font-semibold text-slate-700 block mb-1.5">
                    Full Site Address <span className="text-emerald-700">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                    <textarea
                      rows={2}
                      placeholder="House / Plot No., Street, Locality, Landmark, City, PIN Code"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/15 transition-all resize-none"
                      required
                    />
                  </div>
                </div>

                {/* Map Pin Selector */}
                <div>
                  <label className="font-semibold text-slate-700 block mb-1.5">
                    Exact Map Location <span className="text-slate-400 font-normal">(Google Maps link)</span>
                  </label>
                  {pinnedLocation ? (
                    <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-bold text-emerald-950">
                            Location Pinned
                          </div>
                          <div className="text-[11px] text-emerald-800 truncate">
                            {pinnedLocation.address}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setMapOpen(true)}
                        className="px-3 py-1.5 rounded-lg bg-white border border-emerald-300 hover:bg-emerald-100/60 text-emerald-900 text-[11px] font-semibold shrink-0 transition-colors"
                      >
                        Change Pin
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setMapOpen(true)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-dashed border-emerald-600/40 bg-[#f8faf9] hover:bg-emerald-50/60 hover:border-emerald-600 text-slate-700 transition-all group"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                          <Navigation className="w-4 h-4" />
                        </span>
                        <span className="text-left">
                          <span className="block font-bold text-slate-900 text-xs">
                            Pin Location on Map
                          </span>
                          <span className="block text-[10px] text-slate-500">
                            Auto-fills your address using Google Maps
                          </span>
                        </span>
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700">Open Map</span>
                    </button>
                  )}
                </div>

                {/* Optional Notes */}
                <div>
                  <label className="font-semibold text-slate-700 block mb-1.5">
                    Message <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Any specific requirement or preferred call time"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/15 transition-all"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {error}
                  </div>
                )}

                {/* Submit CTA */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#062c21] hover:bg-[#0c4434] disabled:opacity-60 text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-emerald-300" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Small Map Picker Popup */}
      <MapPickerModal
        isOpen={mapOpen}
        initialLocation={pinnedLocation}
        onClose={() => setMapOpen(false)}
        onConfirm={(loc) => {
          setPinnedLocation(loc);
          if (loc.address) {
            setAddress(loc.address);
          }
          setMapOpen(false);
        }}
      />
    </>
  );
}
