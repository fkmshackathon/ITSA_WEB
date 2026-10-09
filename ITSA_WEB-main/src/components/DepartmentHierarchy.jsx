import React from 'react';
import { Award, BookOpen, ShieldCheck, ChevronRight, Cpu } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function DepartmentHierarchy() {
  const containerRef = useScrollReveal();

  const steps = [
    {
      level: "01",
      tag: "Autonomous Engineering College",
      title: "Shree L. R. Tiwari College of Engineering",
      sub: "SLRTCE • Mira Road (E)",
      desc: "AICTE & DTE Approved, Autonomous Institution affiliated to University of Mumbai. NAAC Accredited & recognized center of engineering excellence.",
      badge: "Parent Institution",
      icon: <Award className="w-5 h-5 text-[#C99A2E]" />
    },
    {
      level: "02",
      tag: "Academic Department",
      title: "Department of Information Technology",
      sub: "Established 2010 • NBA Accredited Program",
      desc: "Delivering research-driven B.E. programs, state-of-the-art computing laboratories, and outcome-based technical education.",
      badge: "Academic Dept",
      icon: <BookOpen className="w-5 h-5 text-[#C99A2E]" />
    },
    {
      level: "03",
      tag: "Student Professional Body",
      title: "ITSA",
      sub: "Information Technology Students Association",
      desc: "The student-led technical engine organizing hackathons, skill-building workshops, industry summits, and the annual Meta Summit.",
      badge: "Student Wing",
      highlight: true,
      icon: <ShieldCheck className="w-5 h-5 text-[#E5B842]" />
    }
  ];

  return (
    <section ref={containerRef} className="py-16 bg-[#FAF7F0] border-b border-[#E5DDCB] relative overflow-hidden">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-init">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-[#9E741B] uppercase bg-[#FAF4E6] px-3.5 py-1 rounded-full border border-[#C8A962]/40 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#C99A2E]" />
            <span>INSTITUTIONAL LINEAGE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#071A3A] tracking-tight mt-3">
            Grounded in Academic Excellence
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6B85] mt-1.5">
            The structural relationship connecting our student association to institutional leadership.
          </p>
        </div>

        {/* 3-Step Linear Institutional Hierarchy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.level}
              className={`p-6 sm:p-7 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between relative group reveal-init ${
                step.highlight
                  ? 'bg-[#071A3A] text-white border-[#C99A2E] shadow-navy-card hover:border-[#E5B842]'
                  : 'bg-white text-[#071A3A] border-[#E5DDCB] shadow-tech-card hover:border-[#C99A2E]/60 hover:-translate-y-1'
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div>
                {/* Level + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${
                    step.highlight ? 'bg-[#0B1E40] border-[#C99A2E]/40' : 'bg-[#FAF4E6] border-[#C8A962]/30'
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-md ${
                    step.highlight
                      ? 'bg-[#FAF4E6] text-[#071A3A] border border-[#C8A962]'
                      : 'bg-[#FAF7F0] text-[#5A6B85] border border-[#E5DDCB]'
                  }`}>
                    {step.badge}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-bold text-[#9E741B] uppercase mb-1">
                  Level {step.level} • {step.tag}
                </div>

                <h4 className={`font-heading font-extrabold text-lg sm:text-xl mb-1.5 leading-snug ${
                  step.highlight ? 'text-white' : 'text-[#071A3A]'
                }`}>
                  {step.title}
                </h4>

                <div className={`text-xs font-semibold mb-3 ${
                  step.highlight ? 'text-[#E5B842]' : 'text-[#9E741B]'
                }`}>
                  {step.sub}
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  step.highlight ? 'text-white/80' : 'text-[#5A6B85]'
                }`}>
                  {step.desc}
                </p>
              </div>

              {/* Bottom Step Indicator */}
              <div className={`pt-4 mt-5 border-t flex items-center justify-between text-[11px] font-mono ${
                step.highlight ? 'border-white/15 text-[#E5B842]' : 'border-[#E5DDCB] text-[#5A6B85]'
              }`}>
                <span>Tier 0{idx + 1}</span>
                {idx < 2 && <ChevronRight className="w-4 h-4 text-[#C99A2E]" />}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

