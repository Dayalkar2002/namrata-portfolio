'use client';

import React, { useState } from 'react';
import { MapPin, Info, Compass } from 'lucide-react';

interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  x: number; // percentage
  y: number; // percentage
  description: string;
  program: string;
  image: string;
}

export const MasterplanInteractive: React.FC = () => {
  const hotspots: Hotspot[] = [
    {
      id: 'bharat-mata',
      title: 'Bharat Mata Cinema Landmark',
      subtitle: 'Historic Single-Screen Cinema Heritage',
      x: 18,
      y: 42,
      description: 'Historically significant single-screen cinema acting as the primary urban anchor for Marathi cinema and local identity.',
      program: 'Heritage Anchor & Cultural Portal',
      image: '/assets/portfolio/sheet_2.png'
    },
    {
      id: 'old-mill',
      title: 'Old Cotton Mill Context',
      subtitle: 'Industrial Working Class Heritage',
      x: 82,
      y: 35,
      description: 'The historic textile mill chimney and masonry structure representing Lalbaug mill worker culture (Girangaon).',
      program: 'Industrial Heritage Preservation',
      image: '/assets/portfolio/portfolio_p1_img1.jpeg'
    },
    {
      id: 'khanawal-street',
      title: 'Khanawal Food Street (Zone B)',
      subtitle: 'Public Culinary Gathering Plaza',
      x: 48,
      y: 72,
      description: 'Front-facing outdoor terrace seating and communal food halls celebrating regional Lalbaug culinary traditions.',
      program: 'Public Dining & Social Gathering',
      image: '/assets/portfolio/portfolio_p2_img5.png'
    },
    {
      id: 'camera-museum',
      title: 'Camera & Film Museum Spine (Zone C)',
      subtitle: 'Movement & Memory Transition Hub',
      x: 52,
      y: 45,
      description: 'Central 30% spatial core designed like cinematic frames with lightwells, celluloid archives, and open courtyards.',
      program: 'Exhibition & Spatial Journey',
      image: '/assets/portfolio/portfolio_p2_img6.jpeg'
    },
    {
      id: 'performing-theatre',
      title: 'Performing Drama Theatre (Zone D)',
      subtitle: 'Acoustic Climax & Auditorium',
      x: 75,
      y: 65,
      description: 'Rear controlled theatre hall designed for Marathi drama, performing arts, and cinematic screenings.',
      program: 'Auditorium & Main Stage',
      image: '/assets/portfolio/portfolio_p2_img7.jpeg'
    }
  ];

  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(hotspots[3]);

  return (
    <section id="masterplan" className="py-24 bg-arch-dark relative border-t border-arch-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-arch-gold/10 border border-arch-gold/30 text-xs font-mono text-arch-gold">
            <Compass className="w-3.5 h-3.5" />
            Interactive Site Explorer
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Site Context & Spatial Synthesis
          </h2>
          <p className="text-slate-400 text-sm font-sans">
            Hover or click on the interactive site pins to explore urban relationships between Bharat Mata Cinema, Old Mill lands, and the 4 functional zones.
          </p>
        </div>

        {/* Masterplan Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Plan Viewer */}
          <div className="lg:col-span-8 bg-arch-surface border border-arch-border rounded-2xl p-4 md:p-6 shadow-2xl relative">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-arch-border/80">
              <img
                src="/assets/portfolio/sheet_3.png"
                alt="Urban Cultural Commons Masterplan"
                className="w-full h-full object-contain bg-[#0a0f18]"
              />

              {hotspots.map((spot) => {
                const isActive = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    onMouseEnter={() => setActiveHotspot(spot)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 group z-30 ${
                      isActive
                        ? 'bg-arch-gold text-slate-950 scale-125 shadow-lg shadow-arch-gold/50 ring-4 ring-arch-gold/30'
                        : 'bg-arch-surface/90 text-arch-gold hover:bg-arch-gold hover:text-slate-950 border border-arch-gold/60'
                    }`}
                    title={spot.title}
                  >
                    <MapPin className="w-4 h-4" />
                    
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block whitespace-nowrap px-2.5 py-1 rounded bg-black/90 text-[10px] font-mono text-white border border-white/20 z-40">
                      {spot.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-mono text-arch-muted">
              <span>Site context: Lalbaug Inner City, Mumbai</span>
              <span className="flex items-center gap-1.5 text-arch-gold">
                <Info className="w-3.5 h-3.5" /> Click pins to view details
              </span>
            </div>
          </div>

          {/* Active Hotspot Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-arch-surface border border-arch-border rounded-2xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-arch-gold/15 border border-arch-gold/40 text-arch-gold font-mono text-xs font-bold">
                  {activeHotspot.program}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {activeHotspot.title}
                </h3>
                <p className="text-arch-gold text-xs font-mono mt-0.5">
                  {activeHotspot.subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                {activeHotspot.description}
              </p>

              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-arch-border bg-slate-950">
                <img
                  src={activeHotspot.image}
                  alt={activeHotspot.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
