import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/galleryData';
import { CircuitCorner } from '../components/TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function GalleryPage({ onOpenLightbox }) {
  const containerRef = useScrollReveal();
  const [selectedCat, setSelectedCat] = useState('All');

  const filteredItems = selectedCat === 'All'
    ? galleryImages
    : galleryImages.filter((item) => item.category === selectedCat);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#F5F0E3]">
      
      {/* Gallery Hero Header */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-[#FAF7F0] border-b border-[#E5DDCB] relative overflow-hidden">
        <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none"></div>
        
        <div className="absolute top-4 left-4 z-0">
          <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-left" />
        </div>
        <div className="absolute top-4 right-4 z-0">
          <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-right" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl reveal-init">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider mb-4 shadow-sm">
              <span>08 / VISUAL ARCHIVES & CHRONICLES</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#071A3A] tracking-tight leading-[1.08] mb-6">
              MEMORIES, LABS & <br />
              <span className="text-[#C99A2E]">COMMUNITY MOMENTS</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#323F52] leading-relaxed font-normal">
              A curated photographic chronicle of student life, symposium deliberations, technical builds, and collegiate milestones at SLRTCE Information Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills Strip */}
      <section className="py-6 bg-[#FAF7F0] border-b border-[#E5DDCB] sticky top-[72px] z-30 backdrop-blur-md bg-[#FAF7F0]/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`btn-tech px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${
                selectedCat === cat
                  ? 'bg-[#071A3A] text-white border border-[#C99A2E]/50 shadow-sm'
                  : 'bg-white text-[#5A6B85] hover:bg-[#FAF4E6] border border-[#E5DDCB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Asymmetric Grid Stage */}
      <section className="py-14 md:py-20 bg-[#F5F0E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox && onOpenLightbox(item, idx)}
                className="h-80 sm:h-96 rounded-3xl overflow-hidden relative group cursor-pointer border-2 border-[#E5DDCB] hover:border-[#C99A2E] shadow-tech-card hover:shadow-tech-card-hover bg-[#071A3A] transition-all duration-300 reveal-init hover:-translate-y-1"
                style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A] via-[#071A3A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FAF4E6] text-[#071A3A] px-3 py-1 rounded-full border border-[#C8A962] shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-xl bg-white/20 text-white backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[10px] font-mono text-[#E5B842] uppercase tracking-wider block mb-1">
                    {item.date}
                  </span>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg leading-snug mb-1">
                    {item.caption}
                  </h3>
                  <p className="text-xs text-white/75 line-clamp-2">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

