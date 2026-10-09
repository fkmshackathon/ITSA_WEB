import React from 'react';
import { Sparkles, ArrowRight, Calendar, MapPin, Cpu, ShieldCheck, Globe, Cloud } from 'lucide-react';
import { metaSummitConfig } from '../data/metaSummitData';
import { CircuitCorner } from './TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MetaSummitTeaser({ onExploreSummit }) {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-gradient-to-br from-[#071A3A] via-[#051329] to-[#7D1730] text-white relative overflow-hidden border-b border-[#C99A2E]/40">
      
      {/* Background Graphic Lines & Circuit Grid */}
      <div className="absolute inset-0 bg-navy-grid opacity-30 pointer-events-none"></div>
      
      {/* Corner Circuits */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-24 h-24 text-[#C99A2E]/30" position="top-left" />
      </div>
      <div className="absolute bottom-4 right-4 z-0">
        <CircuitCorner className="w-24 h-24 text-[#C99A2E]/30" position="bottom-right" />
      </div>

      {/* Ambient Gold & Wine Radial Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99A2E]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7D1730]/40 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Flagship Banner Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-white/10 pb-12 reveal-init">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C99A2E]/50 text-xs font-mono font-bold text-[#E5B842] uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A2E]" />
              <span>06 / ITSA FLAGSHIP ANNUAL CONVERGENCE</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#C99A2E] uppercase mb-2">
                ITSA PRESENTS
              </span>
              <h2 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-[#FAF7F0] leading-none mb-4">
                META <span className="text-[#E5B842]">SUMMIT</span> <span className="text-xs sm:text-sm font-mono font-normal tracking-widest bg-white/10 px-3 py-1 rounded-md align-middle border border-white/20">2026</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/85 font-medium leading-relaxed max-w-2xl">
              {metaSummitConfig.theme}. The definitive 2-day technology convergence uniting engineering cohorts, faculty researchers, and industry pioneers.
            </p>
          </div>

          {/* Right Date & Action Card */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <div className="bg-[#071A3A]/80 backdrop-blur-md p-5 rounded-2xl border border-[#C99A2E]/40 shadow-navy-card flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E5B842] font-bold">
                <Calendar className="w-4 h-4 text-[#C99A2E]" />
                <span>{metaSummitConfig.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <MapPin className="w-4 h-4 text-white/60" />
                <span>SLRTCE Main Auditorium</span>
              </div>
            </div>

            <button
              onClick={onExploreSummit}
              className="btn-tech group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-[#C99A2E] to-[#E5B842] text-[#071A3A] font-heading font-extrabold text-sm hover:brightness-110 shadow-gold-glow"
            >
              <span>Explore Full Summit Microsite</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

        {/* 4 Core Technology Tracks Grid */}
        <div>
          <div className="flex items-center justify-between mb-8 reveal-init">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
              Featured 2026 Technology Tracks
            </h3>
            <span className="text-xs font-mono text-[#E5B842] bg-white/10 px-3 py-1 rounded-full border border-white/15">
              4 Parallel Arenas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metaSummitConfig.tracks.map((track, idx) => (
              <div
                key={track.id}
                className="p-6 rounded-3xl bg-[#071A3A]/70 hover:bg-[#071A3A]/90 backdrop-blur-md border border-[#C99A2E]/30 hover:border-[#C99A2E] transition-all duration-300 flex flex-col justify-between group shadow-navy-card reveal-init hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold text-[#E5B842] bg-white/10 px-2.5 py-0.5 rounded border border-white/10">
                      {track.code}
                    </span>
                    <div className="p-2 rounded-xl bg-white/10 text-[#E5B842] group-hover:bg-[#C99A2E] group-hover:text-[#071A3A] transition-colors">
                      {track.id === 'track-ai' && <Cpu className="w-4 h-4" />}
                      {track.id === 'track-cloud' && <Cloud className="w-4 h-4" />}
                      {track.id === 'track-sec' && <ShieldCheck className="w-4 h-4" />}
                      {track.id === 'track-web' && <Globe className="w-4 h-4" />}
                    </div>
                  </div>

                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-white mb-2 leading-snug">
                    {track.name}
                  </h4>
                  <p className="text-xs text-white/75 mb-4 leading-relaxed">
                    {track.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono font-bold text-[#E5B842] flex items-center gap-1 group-hover:underline">
                    <span>Explore Track Agenda</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

