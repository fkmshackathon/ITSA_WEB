import React from 'react';
import { ArrowRight, Target, Layers, Rocket, Building2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { CircuitCorner } from '../components/TechnicalDecoration';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen selection:bg-[#D4AF37] selection:text-[#0B132B]">
      
      {/* ========================================================================= */}
      {/* 1. ABOUT HERO HEADER (Midnight Dark: bg-[#070B18] text-white)             */}
      {/* ========================================================================= */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#070B18] text-white border-b border-[#D4AF37]/30 relative overflow-hidden">
        {/* Subtle background circuit overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="absolute top-4 left-4 z-0">
          <CircuitCorner className="w-20 h-20 text-[#D4AF37]/20" position="top-left" />
        </div>
        <div className="absolute top-4 right-4 z-0">
          <CircuitCorner className="w-20 h-20 text-[#D4AF37]/20" position="top-right" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2541] border border-[#D4AF37]/50 text-xs font-mono font-bold text-[#FFD700] uppercase tracking-wider mb-5 shadow-sm">
              <span>01 / CHAPTER CHARTER & HERITAGE</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-6">
              Engineering Excellence, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#FFD700] to-[#D4AF37]">
                Student-Led Innovation.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              The Information Technology Students Association (ITSA) represents the apex professional student chapter of the Department of Information Technology at Shree L. R. Tiwari College of Engineering (Autonomous).
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OFFICIAL VISION & MISSION (Ivory Light: bg-[#FDFBF7] text-slate-900)   */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] text-slate-900 border-b border-[#E5DDCB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Vision Column (5 cols) */}
            <div className="lg:col-span-5 bg-[#071A3A] text-white p-8 rounded-3xl border-2 border-[#C99A2E]/40 shadow-navy-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2.5 mb-4 relative z-10">
                <div className="p-2 rounded-xl bg-[#0B1E40] text-[#E5B842] border border-[#C99A2E]/40">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#E5B842] uppercase tracking-widest">
                  Department Vision
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight mb-4 relative z-10">
                Our Institutional North Star
              </h3>
              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed italic bg-[#051329] p-5 rounded-2xl border border-white/10 relative z-10">
                "{siteConfig.vision}"
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono relative z-10">
                <span>SLRTCE IT Curriculum</span>
                <span className="text-[#E5B842] font-bold">NBA Aligned</span>
              </div>
            </div>

            {/* Mission Statements (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-2">
                <span className="text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider bg-[#FAF4E6] px-3.5 py-1 rounded-full border border-[#C8A962]/40 shadow-sm">
                  Mission Statements
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#071A3A] tracking-tight mt-2">
                  Three Pillars of Educational Delivery
                </h3>
              </div>

              {siteConfig.missions.map((m) => (
                <div
                  key={m.code}
                  className="bg-[#FCFAF6] p-6 rounded-2xl border border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E]/60 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-extrabold text-white bg-[#071A3A] px-2.5 py-1 rounded-md border border-[#C99A2E]/40">
                      {m.code}
                    </span>
                    <div>
                      <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#071A3A] group-hover:text-[#9E741B] transition-colors mb-1">
                        {m.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5A6B85] leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PEDAGOGICAL INNOVATION FRAMEWORKS (Midnight Dark: bg-[#070B18] text-white) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#070B18] text-white border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FFD700] uppercase bg-[#1C2541] px-4 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-sm inline-block">
              Curriculum & Practical Learning
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-3 mb-3">
              Pedagogical Frameworks & Innovation Hubs
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              The department fosters participatory and experiential learning, aligned with AICTE examination reforms and Outcome-Based Education (OBE).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Disha */}
            <div className="bg-[#0B132B] p-7 rounded-3xl border border-[#D4AF37]/30 shadow-lg hover:border-[#FFD700] flex flex-col justify-between transition-all">
              <div>
                <div className="p-3 rounded-2xl bg-[#1C2541] border border-[#D4AF37]/40 w-max text-[#FFD700] mb-4">
                  <Layers className="w-5 h-5 text-[#FFD700]" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white mb-1">
                  Disha Framework
                </h3>
                <p className="text-xs font-bold text-[#FFD700] mb-3">
                  Student-Centric Outcome-Based Education
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Implements participatory learning, continuous formative assessments, industrial visit integration, and AICTE exam reform compliance for all IT cohorts.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-xs font-mono text-[#D4AF37]">
                • OBE & Bloom's Taxonomy
              </div>
            </div>

            {/* Prayas & Gyankund */}
            <div className="bg-[#0B132B] p-7 rounded-3xl border border-[#D4AF37]/30 shadow-lg hover:border-[#FFD700] flex flex-col justify-between transition-all">
              <div>
                <div className="p-3 rounded-2xl bg-[#1C2541] border border-[#D4AF37]/40 w-max text-[#FFD700] mb-4">
                  <Rocket className="w-5 h-5 text-[#FFD700]" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white mb-1">
                  Prayas & Gyankund
                </h3>
                <p className="text-xs font-bold text-[#FFD700] mb-3">
                  Interdisciplinary Project Platforms
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Platforms encouraging interdisciplinary exploration where students construct cross-domain hardware, AI models, and commercial-grade software prototypes.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-xs font-mono text-[#D4AF37]">
                • Industry Jury Evaluated
              </div>
            </div>

            {/* Idea Lab & Infrastructure */}
            <div className="bg-[#0B132B] p-7 rounded-3xl border border-[#D4AF37]/30 shadow-lg hover:border-[#FFD700] flex flex-col justify-between transition-all">
              <div>
                <div className="p-3 rounded-2xl bg-[#1C2541] border border-[#D4AF37]/40 w-max text-[#FFD700] mb-4">
                  <Building2 className="w-5 h-5 text-[#FFD700]" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white mb-1">
                  Idea Lab & 6 Research Labs
                </h3>
                <p className="text-xs font-bold text-[#FFD700] mb-3">
                  High-Performance Physical Infrastructure
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Equipped with 6 specialized computing laboratories, 5 smart classrooms, IoT sensor kits, GPU machines, and rapid hardware fabrication tools.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 text-xs font-mono text-[#D4AF37]">
                • 6 Labs • 5 Classrooms • 1 Tutorial
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LEADERSHIP CALLOUT (Ivory Light: bg-[#FDFBF7] text-slate-900)          */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FDFBF7] text-slate-900 border-b border-[#E5DDCB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#071A3A] mb-3">
            Discover the Committee & Mentors
          </h3>
          <p className="text-sm sm:text-base text-[#5A6B85] max-w-xl mx-auto mb-8">
            Explore our elected student executive body alongside the distinguished faculty advisors of the Department of IT.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('team')}
              className="px-8 py-3.5 rounded-full bg-[#071A3A] text-white text-xs font-bold shadow-tech-card hover:bg-[#0B1E40] border border-[#C99A2E]/50 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Student & Faculty Leadership</span>
              <ArrowRight className="w-4 h-4 text-[#E5B842]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
