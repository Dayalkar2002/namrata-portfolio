'use client';

import React from 'react';
import { X, Download, ExternalLink, FileText, Maximize2 } from 'lucide-react';

interface PdfViewerModalProps {
  isOpen: boolean;
  pdfPath: string;
  title: string;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  pdfPath,
  title,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="bg-arch-surface border border-arch-border rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-arch-border/80 flex items-center justify-between bg-[#070a0f]/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-arch-gold/10 text-arch-gold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-white line-clamp-1">
                {title}
              </h3>
              <p className="text-[11px] font-mono text-arch-muted">
                PDF Viewer • Namrata Devalekar Portfolio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfPath}
              download
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-arch-gold text-slate-950 hover:bg-amber-400 font-mono text-xs font-bold transition-all shadow"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
            
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-arch-surface text-slate-300 hover:text-white border border-arch-border transition-colors hidden sm:block"
              title="Open in new browser tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-arch-surface text-slate-300 hover:text-white border border-arch-border hover:bg-red-500/20 hover:border-red-500/50 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Container */}
        <div className="flex-1 bg-slate-950 relative">
          <iframe
            src={`${pdfPath}#toolbar=1`}
            className="w-full h-full border-none"
            title={title}
          />
        </div>

      </div>

    </div>
  );
};
