'use client';

import React from 'react';
import { X, Download } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imgUrl: string;
  title: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imgUrl,
  title,
  onClose
}) => {
  if (!isOpen || !imgUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-arch-surface border border-arch-border rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-arch-border/80 flex items-center justify-between bg-[#070a0f]/90">
          <h3 className="font-serif text-base font-bold text-white line-clamp-1">
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <a
              href={imgUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-arch-surface text-arch-gold border border-arch-gold/40 hover:bg-arch-gold hover:text-slate-950 font-mono text-xs font-bold transition-all"
            >
              <Download className="w-4 h-4" />
              Download Image
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-arch-surface text-slate-300 hover:text-white border border-arch-border transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 bg-black overflow-auto flex items-center justify-center p-2">
          <img
            src={imgUrl}
            alt={title}
            className="max-w-full max-h-[80vh] object-contain mx-auto"
          />
        </div>

      </div>

    </div>
  );
};
