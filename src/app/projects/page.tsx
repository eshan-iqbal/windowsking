'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import SearchModal from '@/components/SearchModal';
import {
  MapPin,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Building2,
  Home as HomeIcon,
  Mountain,
  X,
  Filter,
  Phone,
  ThermometerSnowflake,
  Volume2,
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  location: string;
  area: string;
  category: 'residential' | 'commercial' | 'alpine';
  categoryLabel: string;
  image: string;
  system: string;
  glazing: string;
  finish: string;
  thermalMetric: string;
  acousticMetric: string;
  shortDesc: string;
  fullStory: string;
  architecturalHighlights: string[];
  specs: { [key: string]: string };
}

export default function ProjectsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const projectsData: ProjectItem[] = [
    {
      id: 'lakefront-villa-srinagar',
      title: 'Luxury Lakefront Villa',
      location: 'Nishat Boulevard, Srinagar',
      area: '6,500 sq.ft Residence',
      category: 'residential',
      categoryLabel: 'Luxury Residential',
      image: '/images/project-villa-hires.jpg',
      system: 'Multi-Track Sliding Patio Doors & Panoramic Fixed Glass',
      glazing: '32mm Triple Glazed Low-E with Argon Gas',
      finish: 'Anthracite Grey (RAL 7016)',
      thermalMetric: 'U-Value 1.1 W/m²K',
      acousticMetric: '38 dB Sound Reduction',
      shortDesc:
        'Complete architectural fenestration for a private estate overlooking Dal Lake with zero winter condensation.',
      fullStory:
        'Nestled against the foothills of Zabarwan mountains with panoramic views of Dal Lake, this modern villa required expansive glass facades that could withstand bitter -12°C Himalayan winter freezes without incurring massive heating heat loss. Windows King engineered custom anthracite grey multi-track sliding patio doors and corner-meeting panoramic glass walls with warm-edge composite spacers and 90% argon gas fill. Even during continuous multi-day blizzards, the interior surfaces remain warm to the touch with zero frost buildup.',
      architecturalHighlights: [
        'Floor-to-ceiling 3-meter tall sliding glass panels with concealed recessed floor tracks',
        'Triple-glazed Low-E coating reflecting interior heating back into living spaces',
        'Zero condensation fogging during harsh Chilai Kalan cold spells',
        'High-security 6-point German espagnolette mushroom cam locking hardware',
      ],
      specs: {
        'Profile Depth': '70mm Multi-Chamber',
        'Wall Thickness': 'Class-A 3.0mm',
        'Glass Makeup': '6mm Toughened Low-E + 12mm Argon + 4mm Float + 12mm Argon + 6mm Clear',
        'Wind Load': 'Class C5 (2400 Pa)',
        'Water Tightness': 'Class 9A (600 Pa)',
        'Installation Year': '2024',
      },
    },
    {
      id: 'corporate-complex-jammu',
      title: 'Corporate Headquarters Facade',
      location: 'Bahu Plaza Corridor, Jammu',
      area: '22,000 sq.ft Commercial',
      category: 'commercial',
      categoryLabel: 'Commercial Complexes',
      image: '/images/project-commercial-hires.jpg',
      system: 'Structural Curtain Wall & Heavy-Duty Casement Systems',
      glazing: '28mm Acoustic Double Glazed Solar-Reflective',
      finish: 'Architectural Slate Grey',
      thermalMetric: 'SHGC 0.28 (Solar Control)',
      acousticMetric: '42 dB Acoustic Dampening',
      shortDesc:
        'Acoustic noise cancellation and high-performance solar heat reflection along a busy metropolitan transit corridor.',
      fullStory:
        'Facing Jammu’s primary transit corridor with heavy vehicle traffic and scorching 44°C summer heatwaves, the building owners required a modern glass façade that reduced street noise while keeping cooling air conditioning bills under control. Windows King fabricated structural uPVC casement and top-hung friction vent systems with asymmetric laminated acoustic glass. Traffic roar was reduced by 42 decibels, creating pin-drop quiet executive boardrooms.',
      architecturalHighlights: [
        'Solar-reflective spectrally selective glass cutting interior heat gain by 68%',
        'Asymmetric glass thickness (6mm + 8.38mm acoustic PVB laminated) deadening highway noise',
        'Heavy-duty galvanized steel channel reinforcement preventing structural wind flutter',
        'Motorized high-level smoke and natural ventilation sashes',
      ],
      specs: {
        'Profile Depth': '74mm Commercial Core',
        'Reinforcement': '2.0mm Hot-Dip Galvanized',
        'Glass Makeup': '6mm Solar Neutral + 16mm Warm Spacer + 8.38mm Acoustic Lami',
        'Acoustic Attenuation': 'Rw 42 dB Certified',
        'Air Permeability': 'Class 4 (Airtight)',
        'Installation Year': '2023',
      },
    },
    {
      id: 'contemporary-residence-anantnag',
      title: 'Contemporary Orchard Residence',
      location: 'KP Road, Anantnag',
      area: '4,800 sq.ft Residence',
      category: 'residential',
      categoryLabel: 'Luxury Residential',
      image: '/images/project-residence-hires.jpg',
      system: 'Bi-Fold Patio Doors & Mitered Corner Glass',
      glazing: '28mm Double Glazed Argon Filled',
      finish: 'Golden Oak Woodgrain Architectural Foil',
      thermalMetric: 'U-Value 1.3 W/m²K',
      acousticMetric: '36 dB Sound Dampening',
      shortDesc:
        '6-meter wide bi-folding glass wall connecting interior lounge directly to landscaped apple gardens.',
      fullStory:
        'The homeowners wanted the classic aesthetic warmth of Kashmiri timber woodwork without the rot, termite vulnerability, and seasonal warpage associated with traditional wood. Windows King installed Golden Oak embossed uPVC bi-folding patio doors that fold effortlessly to the sides, seamlessly opening the ground floor living room to the lush garden terrace during pleasant summer afternoons while sealing tightly against snow in winter.',
      architecturalHighlights: [
        'Seamless concertina folding system with bottom-rolling stainless steel ball bearings',
        'Textured woodgrain foil embossed directly during extrusion - 100% UV-stable',
        'Low-threshold flush floor saddle allowing barrier-free wheelchair and family transit',
        'Dual continuous perimeter EPDM weather seals eliminating whistling mountain drafts',
      ],
      specs: {
        'Profile Depth': '60mm 4-Chamber System',
        'Door Clear Opening': '5,800 mm Total Span',
        'Glass Makeup': '5mm Toughened + 16mm Argon Spacer + 5mm Low-E Toughened',
        'Operating Weight': 'Up to 120 kg per sash',
        'Weather Tightness': 'Grade A Watertight',
        'Installation Year': '2024',
      },
    },
    {
      id: 'alpine-chalet-gulmarg',
      title: 'High-Altitude Alpine Chalet',
      location: 'Gulmarg Ski Resort Valley',
      area: '5,200 sq.ft Luxury Chalet',
      category: 'alpine',
      categoryLabel: 'Alpine & Mountain Retreats',
      image: '/images/hero.jpg',
      system: 'Severe-Climate Tilt-and-Turn Casement Systems',
      glazing: '36mm Heavy Triple Glazed Alpine Shield',
      finish: 'Anthracite Grey (RAL 7016)',
      thermalMetric: 'U-Value 0.95 W/m²K',
      acousticMetric: '40 dB Wind Howl Dampening',
      shortDesc:
        'Engineered for 8,500 ft elevation, 6 feet of annual snow accumulation, and sub-zero -25°C blizzard conditions.',
      fullStory:
        'Located in the heart of Gulmarg’s high-altitude snow belt, this luxury chalet is subjected to intense freeze-thaw cycles, sub-zero -25°C temperatures, and 80 km/h blizzard winds. Standard windows crack and leak cold drafts. Windows King installed heavy-gauge Class-A virgin uPVC tilt-and-turn windows with 36mm triple-glazed insulated units and argon gas. The tilt mode allows safe indoor ventilation during winter without letting snow into the rooms.',
      architecturalHighlights: [
        'Class-A Severe Climate uPVC compounding with high Titanium Dioxide against intense alpine UV',
        'Tilt-and-turn multi-action dual mode: 15° top ventilation or 90° full inward swing',
        'Deep slope drainage channel preventing ice dams from freezing the bottom sash',
        'High-density 1.8mm galvanized core preventing frame contraction in sub-zero cold',
      ],
      specs: {
        'Profile Depth': '82mm 6-Chamber Passive-House Grade',
        'Elevation': '8,500 ft Above Sea Level',
        'Glass Makeup': '6mm Toughened Low-E + 14mm Argon + 4mm + 14mm Argon + 6mm Low-E',
        'Impact Resilience': 'Class II High Velocity Hailstone Resistant',
        'Thermal Barrier': 'Warm-edge composite non-conductive spacer',
        'Installation Year': '2023',
      },
    },
    {
      id: 'boutique-hotel-pahalgam',
      title: 'Boutique Riverside Hotel',
      location: 'Lidder Valley, Pahalgam',
      area: '18,500 sq.ft Hospitality',
      category: 'alpine',
      categoryLabel: 'Alpine & Mountain Retreats',
      image: '/images/bifold-hires.jpg',
      system: 'Sound-Dampened Panorama Doors & French Balcony Windows',
      glazing: '30mm Double Glazed Acoustic Laminate',
      finish: 'Dark Walnut Woodgrain Foil',
      thermalMetric: 'U-Value 1.25 W/m²K',
      acousticMetric: '41 dB River Roar Dampening',
      shortDesc:
        'Riverfront boutique hotel providing guests with breathtaking water views with silent acoustic isolation at night.',
      fullStory:
        'While daytime river views of the Lidder are mesmerizing, the continuous roar of torrential glacial water makes nighttime sleep difficult for hotel guests without superior soundproofing. Windows King engineered custom dark walnut French balcony doors and panoramic folding walls fitted with acoustic laminated PVB interlayers. Guests enjoy complete, tranquil silence whenever the doors are latched.',
      architecturalHighlights: [
        'Acoustic laminated glass disrupts resonance vibrations from turbulent mountain river rapids',
        'Commercial multipoint compression latches pulling sashes against dual EPDM gaskets',
        'Zero-maintenance Dark Walnut timber foil resistant to damp river mist and river humidity',
        'Heavy-duty stainless steel security hinges rated for high hospitality cycle frequency',
      ],
      specs: {
        'Profile Depth': '70mm 5-Chamber System',
        'Total Doors Built': '48 Balcony Units',
        'Glass Makeup': '8.76mm Acoustic Laminated + 15mm Warm Spacer + 6mm Toughened',
        'Hardware Class': 'Commercial Hospitality Duty',
        'Warranty': '20-Yr Product / 10-Yr Hardware',
        'Installation Year': '2022',
      },
    },
    {
      id: 'heritage-manor-baramulla',
      title: 'Executive Heritage Manor',
      location: 'Delina Ridge, Baramulla',
      area: '7,200 sq.ft Residence',
      category: 'residential',
      categoryLabel: 'Luxury Residential',
      image: '/images/fixed-hires.jpg',
      system: 'Double-Height Atrium Fixed Windows & Sliding Systems',
      glazing: '32mm Toughened Architectural Glass',
      finish: 'Alpine White Gloss',
      thermalMetric: 'U-Value 1.15 W/m²K',
      acousticMetric: '37 dB Acoustic Shield',
      shortDesc:
        'Monumental double-height central atrium glass filling the entire estate with sunlight while keeping warmth trapped inside.',
      fullStory:
        'A grand residential landmark with 18-foot ceiling heights in the main reception hall. Traditional windows would result in severe cold air drafts dropping to the floor and astronomical heating fuel bills. Windows King fabricated steel-reinforced monumental fixed windows that illuminate the cathedral atrium with natural light while providing uncompromising thermal retention.',
      architecturalHighlights: [
        'Single-span glass units up to 3.2 meters without structural distortion',
        'Internal glass beading allowing exterior glass cleaning safely from indoor galleries',
        'Heavy-duty structural Mullion connectors anchored into RCC building framework',
        'High-gloss alpine white finish that never needs repainting or sanding',
      ],
      specs: {
        'Profile Depth': '70mm Structural Mullion',
        'Glazing Thickness': 'Up to 32mm Insulated Unit',
        'Glass Type': 'Saint-Gobain Low-E Planitherm',
        'Solar Factor': 'High Daylight Transmittance (72%)',
        'Safety': 'Fully Toughened Grade-A Glass',
        'Installation Year': '2024',
      },
    },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* 1. Hero Section */}
      <section className="relative w-full bg-slate-950 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-35">
          <Image
            src="/images/project-villa-hires.jpg"
            alt="Windows King Completed Architectural Installations"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-4 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>500+ COMPLETED INSTALLATIONS ACROSS JAMMU & KASHMIR</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Architectural Showcases <br />
            <span className="font-serif italic font-normal text-emerald-300">
              That Define Valley Living.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-2xl mb-8">
            Explore our curated portfolio of private mountain villas, commercial headquarters, and
            luxury alpine hotels. Every project is custom engineered at our Srinagar fabrication plant
            to conquer extreme Himalayan weather with unmatched architectural elegance.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              <div className="text-emerald-400 font-black text-xl sm:text-2xl">500+</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Homes Installed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              <div className="text-emerald-400 font-black text-xl sm:text-2xl">50+</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Commercial Facades</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              <div className="text-emerald-400 font-black text-xl sm:text-2xl">10+</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Years in Kashmir</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              <div className="text-emerald-400 font-black text-xl sm:text-2xl">98%</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Client Satisfaction</div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'all'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>All Projects ({projectsData.length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('residential')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'residential'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Luxury Residential</span>
            </button>
            <button
              onClick={() => setSelectedCategory('commercial')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'commercial'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Retail</span>
            </button>
            <button
              onClick={() => setSelectedCategory('alpine')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'alpine'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Mountain className="w-3.5 h-3.5" />
              <span>Alpine & Mountain Retreats</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Projects Grid */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                CURATED ARCHITECTURAL GALLERY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Installations & Case Studies
              </h2>
            </div>
            <div className="text-xs text-slate-500">
              Showing {filteredProjects.length} of {projectsData.length} installations
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-300 text-[11px] font-semibold border border-white/10">
                      {project.categoryLabel}
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{project.location}</span>
                    </div>

                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {project.area} • Installed by Windows King
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>

                    {/* Quick Specs Pill Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                      <div className="bg-emerald-50/70 text-emerald-950 p-2 rounded-xl border border-emerald-100 flex items-center gap-1.5">
                        <ThermometerSnowflake className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-semibold truncate">{project.thermalMetric}</span>
                      </div>
                      <div className="bg-emerald-50/70 text-emerald-950 p-2 rounded-xl border border-emerald-100 flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-semibold truncate">{project.acousticMetric}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>Inspect Engineering Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Project Inspection Lightbox Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  {activeModalProject.categoryLabel}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeModalProject.location}
                </span>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* High-Resolution Showcase Photo */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-slate-900">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                  Architecture Photo
                </div>
              </div>

              {/* Title & Key Systems */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeModalProject.title}
                </h2>
                <div className="text-sm font-semibold text-emerald-700 mt-1">
                  Installed System: {activeModalProject.system}
                </div>
              </div>

              {/* Detailed Architectural Story */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Client Brief & Engineering Execution
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeModalProject.fullStory}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                  Engineering Innovations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeModalProject.architecturalHighlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 bg-emerald-50/70 p-3 rounded-xl border border-emerald-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Window Schedule Specifications Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                  Window Schedule Specifications
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {Object.entries(activeModalProject.specs).map(([key, val]) => (
                    <div key={key} className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        {key}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                Want a similar custom window solution for your property?
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full sm:w-auto bg-[#062c21] hover:bg-[#0c4434] text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Request Quote For This Design</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Bottom Project Inquiries Card */}
      <section className="w-full py-16 bg-[#041a14] text-white border-t border-emerald-950">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            START YOUR CUSTOM ARCHITECTURAL PROJECT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Have an Architectural Drawing or Site Plan?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Send us your window schedule or floor plan. Our structural fenestration engineers will
            provide an exact itemized quotation with U-value heat loss calculations within 24 hours.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold px-7 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all"
            >
              <span>Submit Window Schedule for Free Estimate</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
            <a
              href="tel:+916005714181"
              className="border border-white/20 hover:border-emerald-400 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Senior Consultant: +91-6005714181</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectAction={() => {}}
      />
    </main>
  );
}

