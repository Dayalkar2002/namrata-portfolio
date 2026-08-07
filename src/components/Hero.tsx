'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Building2 } from 'lucide-react';
import { DESIGNER_INFO } from '@/data/portfolioData';

interface HeroProps {
  onOpenPdf: (pdfPath: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPdf }) => {
  const heroImages = [
    { url: '/assets/portfolio/sheet_1.png', label: 'Urban Cultural Commons Masterplan' },
    { url: '/assets/portfolio/portfolio_p1_img1.jpeg', label: 'Lalbaug Cultural Plaza Render' },
    { url: '/assets/vertical/board_1.png', label: 'The Vertical Paradigm Board 01' },
    { url: '/assets/portfolio/sheet_6.png', label: 'Art Deco Interior Courtyard' }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-blueprint bg-radial-glow">
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-arch-gold/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-arch-cyan/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arch-surface/90 border border-arch-gold/30 text-xs font-mono text-arch-gold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-arch-gold animate-ping" />
              <span>Architectural Design Portfolio • 2026-2027</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Spatial Memory, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-arch-gold via-amber-400 to-amber-200">
                Art Deco Identity
              </span> <br />
              & High-Density Urbanism.
            </h1>

            {/* Sub-description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
              Presented by <strong className="text-white font-semibold">{DESIGNER_INFO.name}</strong>. Exploring inner-city revitalization in Mumbai—bridging historic mill worker culture, single-screen cinema heritage, and multi-layered vertical urban frameworks.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#urban-commons"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-arch-gold to-amber-600 font-semibold text-slate-950 text-sm shadow-xl shadow-arch-gold/25 hover:shadow-arch-gold/40 hover:scale-[1.02] transition-all"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenPdf('/portfolio.pdf', 'Architecture Portfolio — Namrata Devalekar')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-arch-surface border border-arch-border text-slate-200 font-mono text-xs hover:border-arch-gold hover:text-arch-gold hover:bg-arch-border/30 transition-all"
              >
                <FileText className="w-4 h-4 text-arch-gold" />
                View Full PDF (13.9 MB)
              </button>
            </div>

            {/* Key Metrics Counter Strip */}
            <div className="pt-8 border-t border-arch-border/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {DESIGNER_INFO.skills.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-arch-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-arch-border/80 to-arch-surface/80 border border-arch-border shadow-2xl backdrop-blur-xl group">
              
              {/* Decorative Corner Framing */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-arch-gold z-20 pointer-events-none" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-arch-gold z-20 pointer-events-none" />

              {/* Image Carousel Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                {heroImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.label}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    
                    {/* Caption Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-200">
                      <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-arch-gold">
                        {img.label}
                      </span>
                      <span className="text-slate-400">
                        {index + 1} / {heroImages.length}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Indicator Tabs */}
              <div className="flex items-center justify-center gap-2 py-3 bg-arch-surface/60 rounded-b-xl border-t border-arch-border/40">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeSlide ? 'w-8 bg-arch-gold' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-5 -left-5 bg-arch-surface/95 border border-arch-border p-3.5 rounded-xl shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-arch-gold/10 text-arch-gold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Urban Cultural Commons</div>
                  <div className="text-[10px] font-mono text-arch-muted">Lalbaug • Bharat Mata Context</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
