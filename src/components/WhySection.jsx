import React from 'react';
import { Terminal, Code2, Network, Briefcase, Cpu, Rocket, ArrowRight } from 'lucide-react';
import { CircuitCorner, CircuitDivider } from './TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function WhySection() {
  const containerRef = useScrollReveal();

  const focusCards = [
    {
      id: "workshops",
      title: "Workshops & Tech Talks",
      subtitle: "Hands-on Architectures",
      desc: "Deep-dive technical sessions covering Full-Stack, Cloud Native, DevOps, AI/ML pipelines, and cybersecurity protocols led by industry veterans.",
      graphic: (
        <div className="w-full h-36 rounded-xl bg-[#051329] border border-[#C99A2E]/30 p-3 flex flex-col justify-between relative overflow-hidden font-mono text-[11px]">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-white/50 text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-white/70 ml-1">workshop_main.py</span>
            </div>
            <span className="text-[#E5B842]">v2.4</span>
          </div>
          <div className="space-y-1 text-white/85 text-[10px] leading-tight">
            <div><span className="text-[#C99A2E]">import</span> torch, transformers</div>
            <div><span className="text-sky-300">model</span> = AutoModel.from_pretrained()</div>
            <div><span className="text-emerald-300"># Production Inference Pipeline</span></div>
            <div><span className="text-[#C99A2E]">return</span> model.evaluate(live_stream)</div>
          </div>
          <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-[#E5B842]">
            <span>● CUDA ACTIVATED</span>
            <span>60 FPS</span>
          </div>
        </div>
      )
    },
    {
      id: "hackathons",
      title: "Hackathons & Coding Battles",
      subtitle: "Competitive Sprints",
      desc: "High-intensity 24-hour hackathons, algorithmic coding duels, and project sprint challenges testing speed, architecture, and team synergy.",
      graphic: (
        <div className="w-full h-36 rounded-xl bg-[#051329] border border-[#C99A2E]/30 p-4 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-navy-grid opacity-30"></div>
          
          {/* Glowing Code Brackets */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F2752] to-[#071A3A] border-2 border-[#C99A2E] flex items-center justify-center shadow-gold-glow">
              <span className="font-mono text-2xl font-black text-[#E5B842] tracking-tighter">
                {'</>'}
              </span>
            </div>
          </div>

          <div className="relative z-10 mt-2 text-[10px] font-mono text-[#FAF7F0] font-bold tracking-wider">
            COMPILE • EXECUTE • WIN
          </div>
        </div>
      )
    },
    {
      id: "community",
      title: "Community & Collaboration",
      subtitle: "Peer-to-Peer Synergy",
      desc: "Inclusive peer cohorts, senior mentorship circles, open-source project squads, and career incubation bridging academia to top tech firms.",
      graphic: (
        <div className="w-full h-36 rounded-xl bg-[#051329] border border-[#C99A2E]/30 p-3 flex items-center justify-center relative overflow-hidden">
          {/* SVG Network Graph */}
          <svg className="w-full h-full text-[#C99A2E]" viewBox="0 0 200 100" fill="none">
            {/* Connection Lines */}
            <line x1="100" y1="50" x2="50" y2="25" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 2" />
            <line x1="100" y1="50" x2="150" y2="25" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 2" />
            <line x1="100" y1="50" x2="40" y2="75" stroke="currentColor" strokeWidth="1.25" />
            <line x1="100" y1="50" x2="160" y2="75" stroke="currentColor" strokeWidth="1.25" />
            <line x1="50" y1="25" x2="150" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            
            {/* Center Node */}
            <circle cx="100" cy="50" r="12" fill="#071A3A" stroke="#C99A2E" strokeWidth="2" />
            <circle cx="100" cy="50" r="5" fill="#E5B842" />

            {/* Orbiting Nodes */}
            <circle cx="50" cy="25" r="7" fill="#0B1E40" stroke="#E5B842" strokeWidth="1.5" />
            <circle cx="150" cy="25" r="7" fill="#0B1E40" stroke="#E5B842" strokeWidth="1.5" />
            <circle cx="40" cy="75" r="6" fill="#0B1E40" stroke="#E5B842" strokeWidth="1.5" />
            <circle cx="160" cy="75" r="6" fill="#0B1E40" stroke="#E5B842" strokeWidth="1.5" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#F5F0E3] border-b border-[#E5DDCB] relative overflow-hidden">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none"></div>

      {/* Decorative Circuit Lines */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-left" />
      </div>
      <div className="absolute top-4 right-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-init">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider mb-3 shadow-sm">
            <span>03 / CORE INITIATIVES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A3A] tracking-tight mb-3">
            Our Focus
          </h2>
          <p className="text-sm sm:text-base text-[#5A6B85] font-normal leading-relaxed">
            Bridging the gap between code and community.
          </p>

          {/* Circuit Lines Branching Horizontally */}
          <div className="flex items-center justify-center mt-5 text-[#071A3A]/25">
            <div className="w-24 sm:w-36 h-px bg-gradient-to-r from-transparent to-current"></div>
            <div className="mx-3 flex items-center gap-1.5 text-[#C99A2E]">
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-current bg-[#F5F0E3]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            </div>
            <div className="w-24 sm:w-36 h-px bg-gradient-to-l from-transparent to-current"></div>
          </div>
        </div>

        {/* 3 Reference Dark Navy Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusCards.map((card, idx) => (
            <div
              key={card.id}
              className="rounded-3xl bg-[#071A3A] text-white p-6 sm:p-7 border-2 border-[#C99A2E]/40 shadow-navy-card hover:shadow-navy-card-glow hover:border-[#C99A2E] transition-all duration-300 flex flex-col justify-between group reveal-init hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                {/* Visual Technical Graphic Container */}
                <div className="mb-6 group-hover:scale-[1.02] transition-transform duration-300">
                  {card.graphic}
                </div>

                {/* Card Title & Subtitle */}
                <div className="text-xs font-mono font-bold text-[#E5B842] uppercase tracking-wider mb-1">
                  {card.subtitle}
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight mb-3 group-hover:text-[#FAF7F0]">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Card Accent */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#E5B842] font-mono">
                <span>ITSA SLRTCE</span>
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

