import React from 'react';
import { Camera, ArrowRight, Expand, Sparkles } from 'lucide-react';
import { galleryImages } from '../data/galleryData';
import { CircuitCorner } from './TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function GalleryPreview({ onOpenLightbox, onNavigateGallery }) {
  const containerRef = useScrollReveal();
  const previewItems = galleryImages.slice(0, 5);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#FAF7F0] border-b border-[#E5DDCB] relative overflow-hidden">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none"></div>

      {/* Decorative Corner Circuits */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-left" />
      </div>
      <div className="absolute bottom-4 right-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="bottom-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-init">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-semibold text-[#9E741B] uppercase tracking-wider mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-pulse"></span>
              <span>08 / VISUAL ARCHIVE</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A3A] tracking-tight">
              Life at ITSA & Department
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B85] mt-2">
              Captured moments across hackathons, symposiums, research laboratories, and campus celebrations.
            </p>
          </div>

          {onNavigateGallery && (
            <button
              onClick={onNavigateGallery}
              className="btn-tech inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#071A3A] text-white text-xs font-bold hover:bg-[#0B1E40] border border-[#C99A2E]/50 shadow-tech-card self-start md:self-auto"
            >
              <span>View Full Visual Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#E5B842]" />
            </button>
          )}
        </div>

        {/* Asymmetric Reference Visual Gallery Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Main Large Hero Image (7 cols) */}
          {previewItems[0] && (
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(previewItems[0], 0)}
              className="md:col-span-7 relative h-80 sm:h-[420px] rounded-3xl overflow-hidden border-2 border-[#E5DDCB] hover:border-[#C99A2E] shadow-tech-card hover:shadow-tech-card-hover group cursor-pointer transition-all duration-300 bg-[#071A3A] reveal-init hover:-translate-y-1"
            >
              <img
                src={previewItems[0].src}
                alt={previewItems[0].caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A] via-[#071A3A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute top-4 left-4 z-20">
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#FAF4E6] text-[#071A3A] px-3 py-1 rounded-full border border-[#C8A962]">
                  {previewItems[0].category}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-xl bg-white/20 backdrop-blur-md text-white">
                <Expand className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 z-20 text-white">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-1.5 leading-snug">
                  {previewItems[0].caption}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 max-w-lg font-normal">
                  {previewItems[0].details}
                </p>
              </div>
            </div>
          )}

          {/* 2 Smaller Images (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 sm:gap-6">
            {previewItems.slice(1, 3).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox && onOpenLightbox(item, idx + 1)}
                className="relative h-52 sm:h-[198px] rounded-3xl overflow-hidden border-2 border-[#E5DDCB] hover:border-[#C99A2E] shadow-tech-card hover:shadow-tech-card-hover group cursor-pointer transition-all duration-300 bg-[#071A3A] reveal-init hover:-translate-y-1"
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A] via-[#071A3A]/40 to-transparent opacity-75 group-hover:opacity-85 transition-opacity"></div>
                
                <div className="absolute top-3 left-3 z-20">
                  <span className="text-[11px] font-semibold uppercase tracking-wider bg-[#FAF4E6] text-[#071A3A] px-2.5 py-0.5 rounded-lg border border-[#C8A962]">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 z-20 text-white">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white line-clamp-1">
                    {item.caption}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

