import React from 'react';
import { ArrowRight, Lightbulb, Network, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { CircuitCorner } from './TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function AboutSection({ onNavigateAbout }) {
  const containerRef = useScrollReveal();

  const focusPills = [
    {
      id: "innovation",
      title: "Innovation",
      subtitle: "Prototyping & AI Initiatives",
      desc: "Student-driven incubation through AICTE Idea Lab, Prayas innovation cell, and competitive engineering builds.",
      icon: <Lightbulb className="w-5 h-5 text-[#E5B842]" />
    },
    {
      id: "networking",
      title: "Networking",
      subtitle: "Alumni & Industry Connect",
      desc: "Direct interactions with technical architects, senior alumni mentors, and corporate tech specialists.",
      icon: <Network className="w-5 h-5 text-[#E5B842]" />
    },
    {
      id: "tech-events",
      title: "Tech Events",
      subtitle: "Hackathons & Masterclasses",
      desc: "High-intensity hack sprints, technical workshops, and the flagship annual Meta Summit symposium.",
      icon: <Terminal className="w-5 h-5 text-[#E5B842]" />
    }
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#F5F0E3] border-b border-[#E5DDCB] relative overflow-hidden">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none"></div>

      {/* Decorative Circuit Corners */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-left" />
      </div>
      <div className="absolute bottom-4 right-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="bottom-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (6 cols): Who We Are + Stat Badges */}
          <div className="lg:col-span-6 flex flex-col items-start reveal-init">
            
            {/* Small Section Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-semibold text-[#9E741B] uppercase tracking-wider mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-pulse"></span>
              <span>02 / ABOUT ITSA</span>
            </div>

            {/* Large Section Heading */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A3A] tracking-tight leading-tight mb-5">
              Who We Are
            </h2>

            {/* Concise Description */}
            <p className="text-sm sm:text-base text-[#323F52] leading-relaxed mb-8 max-w-xl">
              The student-run IT community fostering engineering excellence and technological leadership at SLRTCE. Connecting undergraduate engineers, distinguished faculty, and industry practitioners through outcome-based learning and collaborative innovation.
            </p>

            {/* Two Reference Dark Navy Stat Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
              
              {/* Stat Badge 1 */}
              <div className="p-5 rounded-2xl bg-[#071A3A] text-white border border-[#C99A2E]/40 shadow-navy-card relative overflow-hidden group hover:border-[#C99A2E] transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C99A2E]/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5B842] tracking-tight mb-1">
                    240+
                  </div>
                  <div className="text-xs font-bold text-white/90 uppercase tracking-wide">
                    Annual Intake
                  </div>
                  <div className="text-[11px] text-white/60 mt-1">
                    Undergraduate Engineers
                  </div>
                </div>
              </div>

              {/* Stat Badge 2 */}
              <div className="p-5 rounded-2xl bg-[#071A3A] text-white border border-[#C99A2E]/40 shadow-navy-card relative overflow-hidden group hover:border-[#C99A2E] transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#7D1730]/20 rounded-full blur-xl pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5B842] tracking-tight mb-1">
                    15+
                  </div>
                  <div className="text-xs font-bold text-white/90 uppercase tracking-wide">
                    Tech Events
                  </div>
                  <div className="text-[11px] text-white/60 mt-1">
                    Symposia & Sprints
                  </div>
                </div>
              </div>

            </div>

            {/* Learn More Link */}
            {onNavigateAbout && (
              <button
                onClick={onNavigateAbout}
                className="btn-tech inline-flex items-center gap-2 text-xs font-bold text-[#071A3A] hover:text-[#C99A2E] group"
              >
                <span className="underline underline-offset-4">Explore Department History & Disha Framework</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#C99A2E]" />
              </button>
            )}

          </div>

          {/* Right Column (6 cols): 3 Rounded Horizontal Cream Focus Pills */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {focusPills.map((pill, idx) => (
              <div
                key={pill.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#FAF7F0] border-2 border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E]/60 transition-all duration-300 flex items-start gap-4 sm:gap-5 group reveal-init hover:-translate-y-0.5"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Dark Navy Square Icon Box on the Left */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#071A3A] flex items-center justify-center flex-shrink-0 border border-[#C99A2E]/40 shadow-sm group-hover:scale-105 transition-transform">
                  {pill.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#071A3A] group-hover:text-[#9E741B] transition-colors">
                      {pill.title}
                    </h3>
                    <span className="text-[11px] font-bold text-[#5A6B85] bg-white px-2 py-0.5 rounded border border-[#E5DDCB]">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#9E741B] mb-1.5">
                    {pill.subtitle}
                  </div>
                  <p className="text-xs text-[#5A6B85] leading-relaxed">
                    {pill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

