'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Compass, Menu, X } from 'lucide-react';
import { DESIGNER_INFO } from '@/data/portfolioData';

interface NavbarProps {
  onOpenPdf: (pdfPath: string, title: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPdf }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Urban Commons', href: '#urban-commons' },
    { name: 'Vertical Paradigm', href: '#vertical-paradigm' },
    { name: 'Masterplan', href: '#masterplan' },
    { name: 'Philosophy & Skills', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a0f]/85 backdrop-blur-md border-b border-arch-border/60 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-arch-gold to-amber-600 flex items-center justify-center font-serif font-bold text-lg text-slate-950 shadow-lg shadow-arch-gold/20 group-hover:scale-105 transition-transform">
            ND
          </div>
          <div>
            <span className="block font-serif text-lg font-bold tracking-wider text-white group-hover:text-arch-gold transition-colors">
              {DESIGNER_INFO.name}
            </span>
            <span className="block text-[11px] font-mono tracking-widest text-arch-muted uppercase">
              Architecture & Urban Design
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-arch-surface/80 border border-arch-border/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-arch-gold transition-colors rounded-full hover:bg-arch-border/40"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenPdf('/portfolio.pdf', 'Architecture Portfolio — Namrata Devalekar')}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold text-arch-gold border border-arch-gold/40 rounded-lg hover:bg-arch-gold/10 hover:border-arch-gold transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            PDF Portfolio
          </button>
          
          <button
            onClick={() => onOpenPdf('/The_Vertical_Paradigm_Sem7_AD_2026-27.pdf', 'The Vertical Paradigm (Sem 7 AD)')}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold text-arch-cyan border border-arch-cyan/40 rounded-lg hover:bg-arch-cyan/10 hover:border-arch-cyan transition-all"
          >
            <Compass className="w-3.5 h-3.5" />
            Vertical Paradigm PDF
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-arch-surface text-slate-300 hover:text-white border border-arch-border"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17] border-b border-arch-border px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-arch-gold hover:bg-arch-surface rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-arch-border/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdf('/portfolio.pdf', 'Architecture Portfolio — Namrata Devalekar');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-arch-gold border border-arch-gold/40 rounded-lg bg-arch-gold/5"
            >
              <FileText className="w-4 h-4" />
              View Portfolio PDF
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdf('/The_Vertical_Paradigm_Sem7_AD_2026-27.pdf', 'The Vertical Paradigm (Sem 7 AD)');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-arch-cyan border border-arch-cyan/40 rounded-lg bg-arch-cyan/5"
            >
              <Compass className="w-4 h-4" />
              View Vertical Paradigm PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
