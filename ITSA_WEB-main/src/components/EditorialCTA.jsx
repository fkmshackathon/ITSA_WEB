import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Users, Compass } from 'lucide-react';
import { CircuitCorner } from './TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function EditorialCTA({ onExploreAbout, onExploreSummit, onExploreTeam }) {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#F5F0E3] relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Deep Navy Inner Tech Container */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#071A3A] via-[#051329] to-[#0B1E40] text-white p-8 sm:p-12 lg:p-16 border-2 border-[#C99A2E]/50 shadow-navy-card-glow overflow-hidden reveal-init">
          
          {/* Circuit Grid Inside */}
          <div className="absolute inset-0 bg-navy-grid opacity-30 pointer-events-none"></div>

          {/* Decorative Corner Circuits */}
          <div className="absolute top-4 left-4 z-0">
            <CircuitCorner className="w-24 h-24 text-[#C99A2E]/25" position="top-left" />
          </div>
          <div className="absolute bottom-4 right-4 z-0">
            <CircuitCorner className="w-24 h-24 text-[#C99A2E]/25" position="bottom-right" />
          </div>

          {/* Ambient Gold Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C99A2E]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C99A2E]/50 text-xs font-mono font-bold text-[#E5B842] uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A2E]" />
              <span>SHAPING FUTURE ENGINEERS</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#FAF7F0] leading-tight mb-5">
              Ready to Shape the Future of <br />
              <span className="text-[#E5B842]">Information Technology?</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mb-10 leading-relaxed font-normal">
              Whether you are an undergraduate engineer ready to participate in technical initiatives, an alumnus seeking to mentor junior cohorts, or an academic enthusiast — ITSA welcomes your engagement.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreSummit}
                className="btn-tech group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C99A2E] to-[#E5B842] text-[#071A3A] font-heading font-extrabold text-sm hover:brightness-110 shadow-gold-glow"
              >
                <span>Explore META SUMMIT 2026</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreAbout}
                className="btn-tech w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#071A3A] text-sm font-bold border border-white/20"
              >
                <Compass className="w-4 h-4 text-[#E5B842]" />
                <span>About Department & ITSA</span>
              </button>
            </div>

            {/* Micro Credibility Text */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 font-mono">
              <span>Department of Information Technology</span>
              <span>•</span>
              <span>SLRTCE Mira Road (E)</span>
              <span>•</span>
              <span className="text-[#E5B842]">"Make IT Happen"</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

