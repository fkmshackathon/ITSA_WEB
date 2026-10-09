import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function Lightbox({ items, currentIndex, onClose, onNavigate }) {
  if (currentIndex === null || !items || !items[currentIndex]) return null;

  const current = items[currentIndex];
  const imgSrc = current.src || current.imageUrl;
  const imgTitle = current.caption || current.title;
  const imgDetails = current.details || current.caption;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onClose, onNavigate]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div className="absolute top-4 inset-x-4 max-w-7xl mx-auto flex items-center justify-between text-white z-30 pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold bg-[#FAF4E6] text-[#071A3A] px-3 py-1 rounded-full border border-[#C8A962]">
            {current.category}
          </span>
          <span className="text-xs font-mono text-[#E5B842]">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#071A3A] text-white transition-colors border border-white/20"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Prev / Next Nav Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-[#071A3A]/80 hover:bg-[#071A3A] text-[#E5B842] backdrop-blur-md transition-colors border border-[#C99A2E]/50 hidden sm:flex items-center justify-center shadow-gold-glow"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-[#071A3A]/80 hover:bg-[#071A3A] text-[#E5B842] backdrop-blur-md transition-colors border border-[#C99A2E]/50 hidden sm:flex items-center justify-center shadow-gold-glow"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Stage */}
      <div 
        className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imgSrc}
          alt={imgTitle}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border-2 border-[#C99A2E]/40"
        />

        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="font-heading font-extrabold text-lg text-white leading-tight">
            {imgTitle}
          </h3>
          <p className="text-xs text-white/75 mt-1">
            {imgDetails}
          </p>
        </div>
      </div>
    </div>
  );
}
