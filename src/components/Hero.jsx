import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, ShieldCheck, BookOpen } from 'lucide-react';
import { CircuitCorner, HeroTechVisual } from './TechnicalDecoration';

export default function Hero({ onExploreAbout, onExploreEvents, onExploreSummit }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      const progress = Math.min(1, Math.max(0, scrollY / heroHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F5F0E3] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E5DDCB]">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-70 pointer-events-none"></div>

      {/* Decorative SVG Circuit Traces in Section Corners */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-24 h-24 text-[#071A3A]/20" position="top-left" />
      </div>
      <div className="absolute top-4 right-4 z-0">
        <CircuitCorner className="w-24 h-24 text-[#071A3A]/20" position="top-right" />
      </div>
      <div className="absolute bottom-4 left-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="bottom-left" />
      </div>
      <div className="absolute bottom-4 right-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="bottom-right" />
      </div>

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C99A2E]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#071A3A]/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Hierarchy (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Step 1: Clean Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-semibold text-[#9E741B] shadow-sm mb-6 animate-fade-in-up" style={{ animationDelay: '50ms' }}>
              <span className="w-2 h-2 rounded-full bg-[#C99A2E] animate-pulse"></span>
              <span className="tracking-wide uppercase">Department of Information Technology</span>
            </div>

            {/* Step 2: Main Headline */}
            <h1 
              className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl tracking-tight text-[#071A3A] leading-[1.08] mb-6 animate-fade-in-up"
              style={{ animationDelay: '150ms' }}
            >
              Empowering <br />
              Next-Gen <br />
              <span className="text-[#C99A2E] relative inline-block">
                IT Leaders
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#C99A2E]/40" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Step 3: Description */}
            <p 
              className="text-base sm:text-lg text-[#323F52] font-normal leading-relaxed max-w-xl mb-8 animate-fade-in-up"
              style={{ animationDelay: '250ms' }}
            >
              Information Technology Student Association at SLRTCE. Make IT Happen. Uniting rigorous engineering pedagogy, competitive hackathons, and undergraduate technical leadership.
            </p>

            {/* Step 4: Two Action Buttons with Micro-Animations */}
            <div 
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10 animate-fade-in-up"
              style={{ animationDelay: '350ms' }}
            >
              <button
                onClick={onExploreEvents}
                className="btn-tech w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#071A3A] text-white text-sm font-bold border border-[#C99A2E]/50 shadow-tech-card hover:bg-[#0B1E40] hover:shadow-tech-card-hover"
              >
                <span>Explore Events</span>
                <ArrowRight className="w-4 h-4 text-[#E5B842]" />
              </button>

              <button
                onClick={onExploreAbout}
                className="btn-tech w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FAF7F0] text-[#071A3A] text-sm font-bold border-2 border-[#071A3A] hover:bg-white shadow-sm"
              >
                <span>Learn More</span>
              </button>
            </div>

            {/* Step 5: Clean Institutional Metadata (Clean Typography, No Monospace Noise) */}
            <div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E5DDCB] w-full animate-fade-in-up"
              style={{ animationDelay: '450ms' }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#FAF4E6] text-[#9E741B] border border-[#C8A962]/40">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#071A3A]">NBA Accredited</span>
                  <span className="text-[11px] text-[#5A6B85] font-medium">B.E. IT Program</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white text-[#071A3A] border border-[#E5DDCB]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#071A3A]">Autonomous</span>
                  <span className="text-[11px] text-[#5A6B85] font-medium">Mumbai University</span>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-xl bg-[#FAF4E6] text-[#9E741B] border border-[#C8A962]/40">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#071A3A]">Est. 2010</span>
                  <span className="text-[11px] text-[#5A6B85] font-medium">11 Batches Graduated</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Unified Hero Emblem Visual Centerpiece (6 cols) */}
          <div 
            className="lg:col-span-6 flex items-center justify-center relative animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <HeroTechVisual scrollProgress={scrollProgress} />
          </div>

        </div>
      </div>
    </section>
  );
}
