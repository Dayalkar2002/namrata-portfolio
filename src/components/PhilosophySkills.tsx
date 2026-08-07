'use client';

import React from 'react';
import { DESIGNER_INFO } from '@/data/portfolioData';
import { Sparkles, Layers, Compass, BookOpen, CheckCircle, Wrench } from 'lucide-react';

export const PhilosophySkills: React.FC = () => {
  const philosophyPillars = [
    {
      title: "Spatial Memory & Cultural Revitalization",
      desc: "Architecture must not erase local history; it should amplify it. By synthesizing industrial mill context and cinema culture into public space, buildings retain their neighborhood soul.",
      icon: <BookOpen className="w-6 h-6 text-arch-gold" />
    },
    {
      title: "Art Deco Identity in Contemporary Form",
      desc: "Integrating classic Art Deco geometry, framed lightwells, and vertical proportion with modern concrete, steel, and ecological landscape systems.",
      icon: <Sparkles className="w-6 h-6 text-arch-gold" />
    },
    {
      title: "Vertical Urban Stratification",
      desc: "Addressing extreme inner-city density by elevating public realms into vertical sky gardens, interconnected podium streets, and modular core grids.",
      icon: <Layers className="w-6 h-6 text-arch-gold" />
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-arch-surface/30 relative border-t border-arch-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-arch-gold/10 border border-arch-gold/30 text-xs font-mono text-arch-gold">
            <Compass className="w-3.5 h-3.5" />
            Methodology & Technical Proficiency
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Design Philosophy & Toolkit
          </h2>
          <p className="text-slate-400 text-sm">
            Core principles guiding spatial conceptualization, historical synthesis, and software execution.
          </p>
        </div>

        {/* Philosophy Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {philosophyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-arch-surface border border-arch-border rounded-2xl p-8 shadow-xl hover:border-arch-gold/40 transition-all duration-300 space-y-4 group"
            >
              <div className="p-3 rounded-xl bg-arch-gold/10 w-fit group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-arch-gold transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Software & Technical Skills Grid */}
        <div className="bg-arch-surface border border-arch-border rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-arch-cyan">
                <Wrench className="w-4 h-4" /> Software & Digital Stack
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Technical Capabilities
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Proficient in BIM modeling, parametric 3D rendering, site drafting, environmental simulation, and visual graphics software.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {DESIGNER_INFO.skills.software.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-arch-dark/80 border border-arch-border/80 flex items-center gap-2.5 hover:border-arch-cyan/50 hover:bg-arch-dark transition-all"
                  >
                    <CheckCircle className="w-4 h-4 text-arch-cyan shrink-0" />
                    <span className="text-xs font-mono font-medium text-slate-200">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
