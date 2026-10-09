import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, ShieldCheck, BookOpen, Sparkles, Activity } from 'lucide-react';
import { CircuitCorner } from './TechnicalDecoration';
import Coin3D from './ui/coin-3d';

export default function Hero({ onExploreAbout, onExploreEvents, onExploreSummit }) {
  const [activeFocusIdx, setActiveFocusIdx] = useState(0);
  const focusAreas = ['Applied AI & ML', 'Cloud Architecture', 'Cyber Defense', 'Distributed Web', 'IoT Systems'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFocusIdx((prev) => (prev + 1) % focusAreas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [focusAreas.length]);

  return (
    <section className="relative w-full min-h-screen bg-[#070B18] text-white overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16 flex items-center border-b border-[#D4AF37]/30">
      
      {/* 1. Large Faded Watermark in Background (Fixed absolute in all-caps reading "ITSA") */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.05] tracking-widest leading-none">
          ITSA
        </span>
      </div>

      {/* 2. Abstract IT Grid & Circuit Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF3708_1px,transparent_1px),linear-gradient(to_bottom,#D4AF3708_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />

      {/* Decorative SVG Circuit Traces in Section Corners */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-24 h-24 text-[#D4AF37]/20" position="top-left" />
      </div>
      <div className="absolute top-4 right-4 z-0">
        <CircuitCorner className="w-24 h-24 text-[#D4AF37]/20" position="top-right" />
      </div>
      <div className="absolute bottom-4 left-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#D4AF37]/15" position="bottom-left" />
      </div>
      <div className="absolute bottom-4 right-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#D4AF37]/15" position="bottom-right" />
      </div>

      {/* Ambient Radial Golden Nebulae */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1C2541]/40 rounded-full blur-3xl pointer-events-none" />

      {/* 3. Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-16 md:py-24">
        
        {/* Left Side: Left-Aligned Text */}
        <div className="flex-1 text-left items-start flex flex-col space-y-6">
          
          {/* Tracking Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-mono tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span>SLRTCE • DEPARTMENT OF INFORMATION TECHNOLOGY</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C2541]/80 border border-[#D4AF37]/40 text-[10px] font-mono font-bold text-[#FFD700]">
              <Activity className="w-3 h-3 text-[#FFD700] animate-pulse" />
              <span>FOCUS: {focusAreas[activeFocusIdx]}</span>
            </div>
          </div>

          {/* Big Bold Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] tracking-tight text-white leading-[1.06]">
            INFORMATION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#FFD700] to-[#D4AF37] drop-shadow-[0_4px_24px_rgba(212,175,55,0.35)]">
              TECHNOLOGY
            </span> <br />
            <span className="text-white/95 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal">
              STUDENT ASSOCIATION
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 max-w-xl text-base md:text-lg leading-relaxed font-normal">
            The apex student-led engineering forum at Shree L. R. Tiwari College of Engineering (Autonomous). Catalyzing competitive hackathons, industry mentorship, and high-performance computing initiatives.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreEvents}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFD700] via-[#E5B842] to-[#D4AF37] text-[#0A0F1D] font-extrabold text-sm shadow-[0_0_20px_rgba(255,215,0,0.35)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Events</span>
              <ArrowRight className="w-4 h-4 text-[#0A0F1D]" />
            </button>

            <button
              onClick={onExploreAbout}
              className="px-7 py-3.5 rounded-full bg-[#1C2541]/90 text-white font-bold text-sm border-2 border-[#D4AF37]/50 hover:bg-[#D4AF37]/20 hover:border-[#FFD700] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Learn More</span>
            </button>

            {onExploreSummit && (
              <button
                onClick={onExploreSummit}
                className="px-5 py-3 rounded-full bg-[#0B132B] text-[#FFF2B2] text-xs font-mono font-bold border border-[#D4AF37]/40 hover:border-[#FFD700] hover:bg-[#1C2541] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
                <span>META SUMMIT 2026</span>
              </button>
            )}
          </div>

          {/* Credibility Micro-Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#D4AF37]/25 w-full">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#1C2541] text-[#FFD700] border border-[#D4AF37]/40 shadow-sm">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">NBA Accredited</span>
                <span className="text-[10px] text-[#D4AF37] font-mono">B.E. IT Program</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#1C2541] text-[#FFD700] border border-[#D4AF37]/40 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Autonomous</span>
                <span className="text-[10px] text-[#D4AF37] font-mono">Mumbai University</span>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="p-2 rounded-xl bg-[#1C2541] text-[#FFD700] border border-[#D4AF37]/40 shadow-sm">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Est. 2010</span>
                <span className="text-[10px] text-[#D4AF37] font-mono">15+ Years Legacy</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Floating 3D Coin Element */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
          <Coin3D logoSrc="/assets/logos/itsa-logo.png" size={340} speed={20} />
        </div>

      </div>
    </section>
  );
}