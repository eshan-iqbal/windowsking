'use client';

import React, { useEffect, useState } from 'react';
import { X, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '918899919860';

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const quickPrompts = [
  {
    label: 'Get 3D Designs',
    message: 'Hi, I would like to get 3D designs and drawings for my windows and doors.',
  },
  {
    label: 'Free Home Quote',
    message: 'Hi, I would like a free quote and site visit for uPVC windows and doors.',
  },
  {
    label: 'Talk to Team',
    message: 'Hi, I have a question about Windows King uPVC products.',
  },
];

function WhatsAppLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.004 3C8.832 3 3 8.832 3 16.004c0 2.578.754 4.982 2.054 7.007L3.707 28.5l5.636-1.478A12.94 12.94 0 0 0 16.004 29C23.176 29 29 23.176 29 16.004S23.176 3 16.004 3Zm0 23.62c-2.215 0-4.28-.66-6.01-1.79l-.43-.278-3.344.877.893-3.26-.29-.446A10.56 10.56 0 0 1 5.38 16.004C5.38 10.145 10.145 5.38 16.004 5.38c5.858 0 10.623 4.765 10.623 10.624 0 5.858-4.765 10.616-10.623 10.616Zm5.826-7.958c-.32-.16-1.89-.932-2.183-1.038-.293-.107-.506-.16-.72.16-.213.32-.826 1.038-1.012 1.252-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.588-.95-.847-1.592-1.893-1.778-2.213-.187-.32-.02-.493.14-.652.144-.144.32-.373.48-.56.16-.186.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.372-.26-.624-.524-.54-.72-.55-.186-.01-.4-.01-.613-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.665s1.146 3.092 1.306 3.305c.16.213 2.255 3.443 5.463 4.828.763.33 1.358.526 1.822.673.766.244 1.463.21 2.014.127.614-.092 1.89-.773 2.156-1.52.266-.746.266-1.386.186-1.52-.08-.133-.293-.213-.613-.373Z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      setTyping(true);
      return;
    }
    const timer = window.setTimeout(() => setTyping(false), 900);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Animated Mini Chat-Bot Card */}
      {isOpen && (
        <div className="w-[300px] sm:w-[330px] rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200/90 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#062c21] to-[#0a4a36] px-4 py-3.5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
                <WhatsAppLogo className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-300 ring-2 ring-[#062c21]" />
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">Windows King</div>
                <div className="text-[10px] text-emerald-200/90">
                  Typically replies in minutes
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#efeae2] space-y-3">
            {/* Bot Message Bubble */}
            <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 shadow-xs max-w-[90%] text-xs text-slate-800 leading-relaxed">
              {typing ? (
                <div className="flex items-center gap-1.5 py-1 px-1">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:300ms]" />
                </div>
              ) : (
                <div className="animate-in fade-in duration-200">
                  <p className="font-semibold text-slate-900 mb-1">
                    Asslamualikum 👋
                  </p>
                  <p className="text-slate-600 text-[11px]">
                    Need 3D designs, window drawings, or a free quote for your home? Tap below to
                    chat with us on WhatsApp.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Reply Chips */}
            {!typing && (
              <div className="flex flex-wrap gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
                {quickPrompts.map((item) => (
                  <a
                    key={item.label}
                    href={buildWhatsAppUrl(item.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 border border-emerald-600/30 text-emerald-900 text-[11px] font-semibold shadow-2xs transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer Redirect CTA */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={buildWhatsAppUrl(
                'Hi, I would like to talk about Windows King uPVC doors and windows.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
            >
              <WhatsAppLogo className="w-4 h-4" />
              <span>Start Chat on WhatsApp</span>
              <Send className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Animated WhatsApp Icon Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Talk on WhatsApp"
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-all duration-200 active:scale-95 ${
          isOpen ? '' : 'wa-float'
        }`}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        )}
        <span className="relative flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <WhatsAppLogo className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-[#25D366]" />
            </>
          )}
        </span>
      </button>
    </div>
  );
}
