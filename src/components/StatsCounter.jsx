import React from 'react';
import { Calendar, Users, Award, BookOpen, Layers, MonitorCheck, TrendingUp } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { CircuitDivider } from './TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function StatsCounter() {
  const containerRef = useScrollReveal();

  const statIcons = [
    <Calendar className="w-4 h-4 text-[#C99A2E]" />,
    <Users className="w-4 h-4 text-[#C99A2E]" />,
    <Award className="w-4 h-4 text-[#C99A2E]" />,
    <BookOpen className="w-4 h-4 text-[#C99A2E]" />,
    <Layers className="w-4 h-4 text-[#C99A2E]" />,
    <MonitorCheck className="w-4 h-4 text-[#C99A2E]" />
  ];

  return (
    <section ref={containerRef} className="py-16 bg-[#FAF7F0] border-b border-[#E5DDCB] relative overflow-hidden">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E5DDCB] gap-4 reveal-init">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#9E741B] uppercase">
              02 / DEPARTMENT METRICS
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#071A3A] tracking-tight mt-1">
              Verified Department Figures
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#5A6B85] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Source: SLRTCE Department of IT</span>
          </div>
        </div>

        {/* 6 Key Verified Editorial Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {siteConfig.stats.slice(0, 6).map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E]/60 transition-all duration-300 flex flex-col justify-between group reveal-init hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-1.5 rounded-lg bg-[#FAF4E6] border border-[#C8A962]/40 group-hover:scale-105 transition-transform">
                  {statIcons[idx]}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#5A6B85]">
                  0{idx + 1}
                </span>
              </div>
              
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#071A3A] group-hover:text-[#9E741B] transition-colors tracking-tight">
                  {item.value}{item.suffix}
                </div>
                <div className="text-xs font-bold text-[#071A3A] mt-1 leading-snug">
                  {item.label}
                </div>
              </div>
              
              <div className="text-[10px] sm:text-[11px] text-[#5A6B85] mt-3 pt-2.5 border-t border-[#E5DDCB]/60 line-clamp-2">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Placement & Academic Highlights Strip */}
        <div className="mt-8 p-5 rounded-2xl bg-[#071A3A] text-white border border-[#C99A2E]/40 shadow-navy-card flex flex-col sm:flex-row items-center justify-between gap-4 reveal-init">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#0B1E40] text-[#E5B842] border border-[#C99A2E]/40">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#E5B842] uppercase font-mono tracking-wider">
                Excellence Track Record
              </span>
              <p className="text-xs text-[#FAF7F0]/90 font-medium mt-0.5">
                Consistent B.E. University examination pass rate above <strong>95%</strong> and Department placement rate exceeding <strong>90%</strong> across premier tech firms.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-[#071A3A] whitespace-nowrap bg-[#FAF4E6] px-3.5 py-1.5 rounded-lg border border-[#C8A962]/50 shadow-sm">
            AICTE & NBA Aligned
          </span>
        </div>

      </div>
    </section>
  );
}

