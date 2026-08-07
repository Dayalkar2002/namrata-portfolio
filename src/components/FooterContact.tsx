'use client';

import React, { useState } from 'react';
import { DESIGNER_INFO } from '@/data/portfolioData';
import { Mail, MapPin, Send, Copy, Check, Linkedin, Instagram, ExternalLink, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FooterContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#38bdf8', '#fbbf24']
    });
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#04060a] pt-24 pb-12 border-t border-arch-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-arch-gold/10 border border-arch-gold/30 text-xs font-mono text-arch-gold">
              Get In Touch
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let's Collaborate On Architecture & Urbanism.
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Available for architectural design opportunities, urban design research, masterplanning inquiries, and design studio collaborations in Mumbai and internationally.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-arch-surface border border-arch-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-arch-gold/10 text-arch-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-arch-muted block">Direct Email</span>
                    <span className="text-sm font-mono font-bold text-white">{DESIGNER_INFO.email}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-arch-border/60 hover:bg-arch-gold hover:text-slate-950 text-slate-300 transition-colors"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Badge */}
              <div className="p-4 rounded-xl bg-arch-surface border border-arch-border flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-arch-cyan/10 text-arch-cyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-arch-muted block">Based In</span>
                  <span className="text-sm font-bold text-white">{DESIGNER_INFO.location}</span>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href={DESIGNER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-arch-surface border border-arch-border hover:border-arch-gold text-slate-300 hover:text-arch-gold transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={DESIGNER_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-arch-surface border border-arch-border hover:border-arch-gold text-slate-300 hover:text-arch-gold transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={DESIGNER_INFO.socials.issuu}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-arch-surface border border-arch-border hover:border-arch-gold text-slate-300 hover:text-arch-gold font-mono text-xs transition-colors flex items-center gap-2"
              >
                <span>Issuu Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-arch-surface border border-arch-border rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <h3 className="font-serif text-xl font-bold text-white mb-6">
                Send A Direct Message
              </h3>

              {formSent ? (
                <div className="p-8 text-center space-y-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 font-mono">
                    Thank you for reaching out. Namrata will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-arch-muted mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Architect Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-arch-dark border border-arch-border/80 text-white text-xs font-mono focus:border-arch-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-arch-muted mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@firm.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-arch-dark border border-arch-border/80 text-white text-xs font-mono focus:border-arch-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-arch-muted mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Collaboration / Studio Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-arch-dark border border-arch-border/80 text-white text-xs font-mono focus:border-arch-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-arch-muted mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or collaboration idea..."
                      className="w-full px-4 py-2.5 rounded-xl bg-arch-dark border border-arch-border/80 text-white text-xs font-mono focus:border-arch-gold focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-arch-gold to-amber-600 font-mono font-bold text-xs text-slate-950 hover:shadow-lg hover:shadow-arch-gold/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Footer Strip */}
        <div className="pt-8 border-t border-arch-border/40 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-arch-muted gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">{DESIGNER_INFO.name}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Urban Cultural Commons • The Vertical Paradigm</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-arch-surface border border-arch-border hover:border-arch-gold text-slate-300 hover:text-arch-gold transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
