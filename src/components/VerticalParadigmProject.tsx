'use client';

import React, { useState } from 'react';
import { VERTICAL_PARADIGM_BOARDS, Board } from '@/data/portfolioData';
import { Compass, ZoomIn, FileText, ChevronLeft, ChevronRight, Layers, Maximize2 } from 'lucide-react';

interface VerticalParadigmProps {
  onOpenPdf: (pdfPath: string, title: string) => void;
  onOpenImageModal: (imgUrl: string, title: string) => void;
}

export const VerticalParadigmProject: React.FC<VerticalParadigmProps> = ({ onOpenPdf, onOpenImageModal }) => {
  const [activeBoardIndex, setActiveBoardIndex] = useState(0);
  const activeBoard = VERTICAL_PARADIGM_BOARDS[activeBoardIndex];

  const nextBoard = () => {
    setActiveBoardIndex((prev) => (prev + 1) % VERTICAL_PARADIGM_BOARDS.length);
  };

  const prevBoard = () => {
    setActiveBoardIndex((prev) => (prev - 1 + VERTICAL_PARADIGM_BOARDS.length) % VERTICAL_PARADIGM_BOARDS.length);
  };

  return (
    <section id="vertical-paradigm" className="py-24 bg-arch-surface/40 relative border-t border-arch-border/40 bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-arch-cyan/10 border border-arch-cyan/30 text-xs font-mono text-arch-cyan mb-3">
              <Compass className="w-3.5 h-3.5" />
              Academic Design Studio • Semester 7 AD (2026-27)
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              The Vertical Paradigm
            </h2>
            <p className="text-arch-cyan font-mono text-sm mt-2">
              High-Density Urbanism, Spatial Stratification & Vertical Public Realms
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenPdf('/The_Vertical_Paradigm_Sem7_AD_2026-27.pdf', 'The Vertical Paradigm — 13 Sheet Presentation PDF')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-arch-surface border border-arch-cyan/40 hover:border-arch-cyan text-arch-cyan text-xs font-mono transition-all"
            >
              <FileText className="w-4 h-4 text-arch-cyan" />
              View 13-Sheet PDF Document
            </button>
          </div>
        </div>

        {/* FEATURED BOARD VIEWER & INTERACTIVE CAROUSEL */}
        <div className="bg-arch-surface border border-arch-border rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
          
          {/* Main Board View Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Board Image Container */}
            <div className="lg:col-span-8 relative group">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-arch-border shadow-inner">
                <img
                  src={activeBoard.image}
                  alt={activeBoard.title}
                  className="w-full h-full object-contain object-center bg-black"
                />
                
                {/* Overlay Zoom Action */}
                <button
                  onClick={() => onOpenImageModal(activeBoard.image, `${activeBoard.title}`)}
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 text-white hover:text-arch-cyan border border-white/10 backdrop-blur-md text-xs font-mono transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Full Screen Board View
                </button>

                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={prevBoard}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:text-arch-cyan hover:bg-black/90 transition-all border border-white/10"
                  aria-label="Previous Sheet"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextBoard}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:text-arch-cyan hover:bg-black/90 transition-all border border-white/10"
                  aria-label="Next Sheet"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Board Information & Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-arch-cyan/10 border border-arch-cyan/30 text-arch-cyan font-mono text-xs font-bold">
                  Sheet {activeBoard.id < 10 ? `0${activeBoard.id}` : activeBoard.id} / 13
                </span>
                <span className="text-xs font-mono text-arch-muted">
                  Semester 7 AD
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {activeBoard.category}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeBoard.description}
                </p>
              </div>

              <div className="pt-4 border-t border-arch-border space-y-3 text-xs font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>Project Theme:</span>
                  <span className="text-white font-bold">Vertical Urban Realm</span>
                </div>
                <div className="flex justify-between">
                  <span>Structural Concept:</span>
                  <span className="text-white font-bold">Modular Steel & Core Skyways</span>
                </div>
                <div className="flex justify-between">
                  <span>Presentation Format:</span>
                  <span className="text-arch-cyan font-bold">A1 Presentation Sheet</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenImageModal(activeBoard.image, `${activeBoard.title}`)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-arch-cyan/10 border border-arch-cyan/40 text-arch-cyan hover:bg-arch-cyan hover:text-slate-950 font-mono text-xs font-bold transition-all"
                >
                  <ZoomIn className="w-4 h-4" />
                  Inspect High-Resolution Board
                </button>
              </div>
            </div>

          </div>

          {/* Thumbnail Selector Carousel */}
          <div className="pt-6 border-t border-arch-border/60">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-arch-muted uppercase tracking-wider">
                Select Sheet (1 to 13):
              </span>
              <span className="text-xs font-mono text-slate-400">
                Use arrows or click thumbnail
              </span>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {VERTICAL_PARADIGM_BOARDS.map((board, idx) => {
                const isActive = idx === activeBoardIndex;
                return (
                  <button
                    key={board.id}
                    onClick={() => setActiveBoardIndex(idx)}
                    className={`shrink-0 w-24 aspect-[16/9] rounded-lg overflow-hidden border relative transition-all ${
                      isActive
                        ? 'border-arch-cyan ring-2 ring-arch-cyan/30 scale-105'
                        : 'border-arch-border opacity-60 hover:opacity-100 hover:border-slate-500'
                    }`}
                  >
                    <img
                      src={board.image}
                      alt={board.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center font-mono text-[10px] font-bold text-white">
                      #{board.id}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
