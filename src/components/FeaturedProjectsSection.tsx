'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  MapPin,
  Maximize2,
  X,
  CheckCircle2,
  Building2,
  Home as HomeIcon,
  Sparkles,
  Award,
  Layers,
  ThermometerSnowflake,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  system: string;
  metric: string;
  description: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 'villa-srinagar',
    title: 'Luxury Lakefront Villa',
    location: 'Nishat, Srinagar',
    category: 'Private Residence',
    image: '/images/project-villa-hires.jpg',
    system: 'Panoramic Fixed & Sliding Glass',
    metric: 'U-Value 1.1 W/m²K',
    description:
      'Turnkey fenestration for a 6,500 sq.ft private luxury villa in Srinagar. Custom black-framed thermal-break uPVC sliding doors and oversized picture fixed windows designed to withstand heavy snowfall while delivering unobstructed views of Dal Lake and Zabarwan ranges.',
    highlights: [
      'Triple-glazed Low-E argon filled IGU',
      'Multi-track lift & slide patio doors',
      'Zero heat-loss thermal profile engineering',
    ],
  },
  {
    id: 'commercial-jammu',
    title: 'Corporate Headquarters',
    location: 'Bahu Plaza, Jammu',
    category: 'Commercial & Retail',
    image: '/images/project-commercial-hires.jpg',
    system: 'Structural Curtain Wall & Vents',
    metric: '42 dB Acoustic Dampening',
    description:
      'Modern 5-story corporate headquarters and retail facade in Jammu. Acoustic insulation and solar control reflective uPVC glazing providing optimum indoor working temperatures and energy efficiency along a busy highway.',
    highlights: [
      'Solar reflective anti-glare double glazing',
      'Structural heavy-duty windload reinforcement',
      'Integrated fire escape top-hung vents',
    ],
  },
  {
    id: 'modern-anantnag',
    title: 'Contemporary Orchard Residence',
    location: 'KP Road, Anantnag',
    category: 'Contemporary Villa',
    image: '/images/project-residence-hires.jpg',
    system: 'Bi-Fold Patio Doors & Bay Glass',
    metric: 'Golden Oak Woodgrain',
    description:
      'Architectural residence featuring 6-meter wide floor-to-ceiling bi-fold patio systems and soundproof casement windows with custom integrated mosquito mesh panels opening to an apple garden.',
    highlights: [
      'Bi-fold concertina 5-panel door opening',
      'High-security multi-point locking shootbolts',
      'EPDM all-weather airtight sealing gaskets',
    ],
  },
];

interface FeaturedProjectsSectionProps {
  onViewAllProjects: () => void;
}

export default function FeaturedProjectsSection({
  onViewAllProjects,
}: FeaturedProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full py-16 sm:py-24 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Dark Green Luxury Showcase Container */}
        <div className="bg-gradient-to-br from-[#041f17] via-[#052b20] to-[#021812] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-emerald-500/20 relative overflow-hidden">
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading & CTA */}
            <div className="lg:col-span-3 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold tracking-widest uppercase">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>ARCHITECTURAL GALLERY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Crafted for Kashmir <br />
                <span className="text-emerald-300 font-serif italic font-normal">
                  Homes & Facades
                </span>
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed font-light max-w-xs">
                A growing portfolio of residential villas, mountain chalets and commercial
                complexes across Jammu, Kashmir & Ladakh.
              </p>

              <div className="pt-2">
                <button
                  onClick={onViewAllProjects}
                  className="bg-white hover:bg-emerald-50 text-slate-950 text-xs font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:gap-3 transition-all active:scale-95"
                >
                  <span>Explore Full Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-800" />
                </button>
              </div>
            </div>

            {/* Middle Column: 3 Real High-Resolution Photoreal Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group relative bg-[#093629]/90 rounded-2xl border border-emerald-800/60 p-3 hover:border-emerald-400/80 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1.5"
                >
                  <div>
                    {/* Project Photo Container */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 mb-3 shadow-md">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3 h-3 text-emerald-300" />
                      </div>

                      <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                        <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{proj.location}</span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] text-emerald-200/80 mt-1 line-clamp-1">
                      {proj.system}
                    </p>
                  </div>

                  <div className="pt-2 mt-2 border-t border-emerald-900/60 flex items-center justify-between text-[10px] text-emerald-300">
                    <span className="font-mono">{proj.metric}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: 3 Sleek Frosted Glass Stat Cards */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center gap-3.5 hover:bg-white/15 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white leading-none">
                    500+
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium mt-1">
                    Luxury Installations
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center gap-3.5 hover:bg-white/15 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white leading-none">
                    50+
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium mt-1">
                    Commercial Facades
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center gap-3.5 hover:bg-white/15 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white leading-none">
                    98%
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium mt-1">
                    Verified Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full aspect-[16/9] bg-slate-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  System Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 bg-emerald-50/60 p-2.5 rounded-xl text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight text-[11px]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onViewAllProjects();
                  }}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5"
                >
                  <span>Open Full Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-full bg-[#062c21] hover:bg-[#0c4333] text-white text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
