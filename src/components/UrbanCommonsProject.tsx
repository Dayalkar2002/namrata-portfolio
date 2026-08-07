'use client';

import React, { useState } from 'react';
import { URBAN_CULTURAL_COMMONS, Zone } from '@/data/portfolioData';
import { MapPin, Film, Utensils, Camera, Theater, Layers, ZoomIn, CheckCircle2, FileText } from 'lucide-react';

interface UrbanCommonsProps {
  onOpenPdf: (pdfPath: string, title: string) => void;
  onOpenImageModal: (imgUrl: string, title: string) => void;
}

export const UrbanCommonsProject: React.FC<UrbanCommonsProps> = ({ onOpenPdf, onOpenImageModal }) => {
  const [selectedZone, setSelectedZone] = useState<Zone>(URBAN_CULTURAL_COMMONS.zones![0]);

  const zoneIcons: Record<string, React.ReactNode> = {
    'zone-a': <Film className="w-5 h-5" />,
    'zone-b': <Utensils className="w-5 h-5" />,
    'zone-c': <Camera className="w-5 h-5" />,
    'zone-d': <Theater className="w-5 h-5" />
  };

  return (
    <section id="urban-commons" className="py-24 bg-arch-dark relative border-t border-arch-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Badge & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-arch-gold/10 border border-arch-gold/30 text-xs font-mono text-arch-gold mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Flagship Project • Lalbaug, Mumbai
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {URBAN_CULTURAL_COMMONS.title}
            </h2>
            <p className="text-arch-gold font-mono text-sm mt-2">
              {URBAN_CULTURAL_COMMONS.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenPdf('/portfolio.pdf', 'Urban Cultural Commons — Full Project PDF')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-arch-surface border border-arch-border hover:border-arch-gold text-slate-200 hover:text-arch-gold text-xs font-mono transition-all"
            >
              <FileText className="w-4 h-4 text-arch-gold" />
              Open Project PDF
            </button>
          </div>
        </div>

        {/* Narrative & Concept Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 bg-arch-surface/80 p-8 rounded-2xl border border-arch-border/80 shadow-xl space-y-4">
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-arch-gold rounded-full" />
              Urban & Historical Context
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {URBAN_CULTURAL_COMMONS.overview}
            </p>
            <div className="pt-3 border-t border-arch-border/60 text-xs font-mono text-arch-muted grid grid-cols-2 gap-4">
              <div>
                <span className="text-slate-400 block">Historic Anchors:</span>
                <strong className="text-slate-200">Bharat Mata Cinema & Old Cotton Mill</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Architectural Identity:</span>
                <strong className="text-arch-gold">Art Deco + Public Commons</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-arch-surface to-arch-card p-8 rounded-2xl border border-arch-gold/30 shadow-xl space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-arch-gold/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-arch-cyan rounded-full" />
              Architectural Concept: Movement & Memory
            </h3>
            <blockquote className="text-slate-300 text-sm italic leading-relaxed font-sans border-l-2 border-arch-gold pl-4 py-1">
              "{URBAN_CULTURAL_COMMONS.concept}"
            </blockquote>
          </div>
        </div>

        {/* ZONAL STRATEGY INTERACTIVE SECTION */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono text-arch-gold uppercase tracking-widest">Masterplan Program</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Four Interconnected Spatial Zones
            </h3>
            <p className="text-slate-400 text-xs">
              Click through the zones below to inspect spatial programs, locations, and architectural intents.
            </p>
          </div>

          {/* Zone Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {URBAN_CULTURAL_COMMONS.zones?.map((zone) => {
              const isSelected = selectedZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`p-4 rounded-xl text-left border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'bg-arch-surface border-arch-gold shadow-lg shadow-arch-gold/15 scale-[1.02]'
                      : 'bg-arch-surface/40 border-arch-border/60 hover:border-slate-600 hover:bg-arch-surface/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-arch-gold text-slate-950' : 'bg-arch-border text-arch-muted'
                    }`}>
                      {zone.code}
                    </span>
                    <span className={isSelected ? 'text-arch-gold' : 'text-slate-500'}>
                      {zoneIcons[zone.id]}
                    </span>
                  </div>

                  <h4 className="font-serif text-sm font-bold text-white line-clamp-1">
                    {zone.name}
                  </h4>
                  <p className="text-[11px] text-arch-muted line-clamp-1 mt-0.5">
                    {zone.location}
                  </p>

                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-arch-gold" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Zone Detail Card */}
          <div className="bg-arch-surface border border-arch-border rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-arch-gold/10 border border-arch-gold/40 text-arch-gold font-mono text-xs font-bold">
                  {selectedZone.code}
                </span>
                <span className="text-slate-400 text-xs font-mono">
                  {selectedZone.location}
                </span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-white">
                {selectedZone.name}
              </h4>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedZone.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-arch-gold uppercase tracking-wider">
                  Key Architectural Strategies:
                </div>
                {selectedZone.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-arch-gold shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone Imagery Preview */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-arch-border">
                <img
                  src={selectedZone.image}
                  alt={selectedZone.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <button
                  onClick={() => onOpenImageModal(selectedZone.image, `${selectedZone.code} — ${selectedZone.name}`)}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/70 text-white hover:text-arch-gold border border-white/10 backdrop-blur-md transition-colors"
                  title="Zoom Image"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* IMAGE GALLERY & SHEET SHOWCASE */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-6 h-6 text-arch-gold" />
              Design Sheets & Architectural Visualizations
            </h3>
            <span className="text-xs font-mono text-arch-muted">
              {URBAN_CULTURAL_COMMONS.images.length} High-Res Sheets
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {URBAN_CULTURAL_COMMONS.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => onOpenImageModal(img.url, img.title)}
                className="group relative bg-arch-surface rounded-xl overflow-hidden border border-arch-border hover:border-arch-gold/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-arch-gold/10"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-950 relative">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="font-serif text-sm font-bold text-white group-hover:text-arch-gold transition-colors">
                    {img.title}
                  </h4>
                  <p className="text-xs text-arch-muted line-clamp-2">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
