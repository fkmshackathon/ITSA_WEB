import React, { useState, useEffect, useRef } from 'react';
import { Award, Cpu, BookOpen, Layers, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import { CircuitCorner } from './TechnicalDecoration';

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  // Factual, verified milestones from official SLRTCE IT & ITSA documentation
  const milestones = [
    {
      year: "2010",
      title: "Establishment of IT Department",
      tagline: "Academic Inception & Computational Infrastructure",
      description: "Department of Information Technology founded under University of Mumbai with 6 specialized computing laboratories, high-speed networking, and outcome-based engineering pedagogy.",
      icon: BookOpen,
      metrics: "6 Specialized Labs • Mumbai University"
    },
    {
      year: "2015",
      title: "Inauguration of ITSA Chapter",
      tagline: "Student Leadership & Technical Empowerment",
      description: "Official formation of the Information Technology Students Association (ITSA) as the premier student-governed body to spearhead hackathons, workshops, and peer mentorship.",
      icon: Terminal,
      metrics: "Student Leadership Council Established"
    },
    {
      year: "2019",
      title: "Advanced Research & AI Initiatives",
      tagline: "Applied Research & Industry Integration",
      description: "Expansion of computational facilities with dedicated Artificial Intelligence, IoT Systems, and Cloud Security infrastructure, driving publication of 40+ departmental research papers.",
      icon: Cpu,
      metrics: "40+ Research Papers • AI & IoT Labs"
    },
    {
      year: "2023",
      title: "NBA Accreditation & Autonomy",
      tagline: "Institutional Excellence Recognized",
      description: "Department awarded prestigious National Board of Accreditation (NBA) tier status and Autonomous governance for benchmarked academic rigor and 90%+ placement track record.",
      icon: Award,
      metrics: "NBA Accredited • Autonomous Status"
    },
    {
      year: "2025",
      title: "Idea Lab & Prayas Incubation",
      tagline: "Product Engineering & Startup Prototyping",
      description: "Launch of the state-of-the-art Idea Lab prototyping center and Prayas incubation ecosystem, supporting multidisciplinary hardware-software research and national hackathon victories.",
      icon: Layers,
      metrics: "240 Intake Capacity • Innovation Hub"
    },
    {
      year: "2026",
      title: "META SUMMIT Flagship Era",
      tagline: "National Technical Convergence",
      description: "ITSA launches META SUMMIT 2026 — the premier 2-day hybrid technology convergence uniting 350+ student engineers, researchers, and tech pioneers across four dedicated tracks.",
      icon: Sparkles,
      metrics: "350+ Delegates • 4 Core Tracks",
      isHighlight: true
    }
  ];

  // Precision scroll tracking within the timeline container
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = rect.top - windowHeight * 0.65;
      const total = rect.height - windowHeight * 0.35;
      
      if (total <= 0) return;
      
      const current = -start;
      const rawProgress = current / total;
      const progress = Math.max(0, Math.min(1, rawProgress));
      
      setScrollProgress(progress);

      const index = Math.min(
        milestones.length - 1,
        Math.floor(progress * milestones.length)
      );
      setActiveMilestoneIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [milestones.length]);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 bg-[#FAF7F0] border-b border-[#E5DDCB] relative overflow-hidden select-none"
    >
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-60 pointer-events-none"></div>

      {/* Decorative Corner Circuits */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-24 h-24 text-[#071A3A]/15" position="top-left" />
      </div>
      <div className="absolute top-4 right-4 z-0">
        <CircuitCorner className="w-24 h-24 text-[#071A3A]/15" position="top-right" />
      </div>
      <div className="absolute bottom-4 right-4 z-0">
        <CircuitCorner className="w-24 h-24 text-[#071A3A]/15" position="bottom-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-semibold text-[#9E741B] uppercase tracking-wider mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C99A2E] animate-pulse"></span>
              <span>05 / THE ITSA JOURNEY</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A3A] tracking-tight leading-tight">
              The Evolution of ITSA
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B85] mt-2.5 max-w-2xl font-normal">
              A decade-long journey tracing the trajectory of student leadership, academic milestones, and technological milestones at SLRTCE.
            </p>
          </div>

          {/* Clean Quiet Journey Milestone Indicator */}
          <div className="hidden lg:flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-[#E5DDCB] shadow-sm text-xs font-semibold text-[#071A3A]">
            <span className={scrollProgress >= 0.05 ? 'text-[#C99A2E] font-bold' : 'text-[#5A6B85]'}>2010</span>
            <div className="w-16 h-1 bg-[#E5DDCB] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#C99A2E] transition-all duration-300"
                style={{ width: `${Math.min(100, scrollProgress * 200)}%` }}
              ></div>
            </div>
            <span className={scrollProgress >= 0.5 ? 'text-[#C99A2E] font-bold' : 'text-[#5A6B85]'}>2019</span>
            <div className="w-16 h-1 bg-[#E5DDCB] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#C99A2E] transition-all duration-300"
                style={{ width: `${Math.max(0, Math.min(100, (scrollProgress - 0.5) * 200))}%` }}
              ></div>
            </div>
            <span className={scrollProgress >= 0.9 ? 'text-[#C99A2E] font-bold' : 'text-[#5A6B85]'}>2026</span>
          </div>
        </div>

        {/* Interactive Data-Stream Timeline Container */}
        <div className="relative py-8">
          
          {/* Central Connecting Flowing Data Path (Desktop Curved SVG Spine) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-24 pointer-events-none z-0">
            {/* Base Inactive Track */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-1 bg-[#E5DDCB] rounded-full"></div>
            
            {/* Dynamic Gold Active Growing Stream */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 top-6 w-1 bg-gradient-to-b from-[#C99A2E] via-[#E5B842] to-[#7D1730] rounded-full transition-all duration-200 shadow-gold-glow"
              style={{
                height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%`
              }}
            >
              {/* Traveling Golden Signal Pulse Packet */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E5B842] shadow-gold-glow animate-pulse">
                <span className="absolute -inset-1 rounded-full border border-[#C99A2E] animate-ping opacity-75"></span>
              </div>
            </div>
          </div>

          {/* Mobile Left Data Line */}
          <div className="lg:hidden absolute left-6 top-4 bottom-4 w-1 bg-[#E5DDCB] rounded-full pointer-events-none z-0">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#C99A2E] via-[#E5B842] to-[#7D1730] rounded-full transition-all duration-200 shadow-gold-glow"
              style={{
                height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%`
              }}
            ></div>
          </div>

          {/* Milestone Nodes & Interactive Cards */}
          <div className="space-y-14 sm:space-y-20 lg:space-y-28 relative z-10">
            {milestones.map((milestone, idx) => {
              const milestoneThreshold = idx / (milestones.length - 1);
              const isPassed = scrollProgress >= milestoneThreshold - 0.08;
              const isCurrent = activeMilestoneIndex === idx;
              const IconComponent = milestone.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={milestone.year}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isPassed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-35 translate-y-6 scale-[0.97]'
                  }`}
                >
                  {/* Left Column (Desktop: Card for even milestones, or Year label for odd) */}
                  <div className={`lg:col-span-5 pl-14 lg:pl-0 ${isEven ? 'lg:order-1' : 'lg:order-3 lg:text-left'}`}>
                    {isEven ? (
                      /* Left Card on Even Index */
                      <div className={`rounded-3xl p-6 sm:p-8 border-2 transition-all duration-500 relative group overflow-hidden ${
                        milestone.isHighlight
                          ? 'bg-[#071A3A] text-white border-[#C99A2E] shadow-navy-card-glow'
                          : isCurrent
                          ? 'bg-white border-[#C99A2E] shadow-tech-card-hover'
                          : 'bg-white/95 border-[#E5DDCB] shadow-tech-card hover:border-[#C99A2E]/60'
                      }`}>
                        {/* Title & Tagline */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-bold uppercase tracking-wider ${
                            milestone.isHighlight ? 'text-[#E5B842]' : 'text-[#9E741B]'
                          }`}>
                            Milestone {idx + 1}
                          </span>
                        </div>

                        <h3 className={`font-heading font-extrabold text-xl sm:text-2xl mb-1.5 leading-snug ${
                          milestone.isHighlight ? 'text-white' : 'text-[#071A3A]'
                        }`}>
                          {milestone.title}
                        </h3>
                        
                        <div className={`text-xs font-medium mb-3.5 ${
                          milestone.isHighlight ? 'text-[#E5B842]' : 'text-[#9E741B]'
                        }`}>
                          {milestone.tagline}
                        </div>

                        {/* Description */}
                        <p className={`text-xs sm:text-sm leading-relaxed mb-5 font-normal ${
                          milestone.isHighlight ? 'text-white/80' : 'text-[#5A6B85]'
                        }`}>
                          {milestone.description}
                        </p>

                        {/* Bottom Verified Metric */}
                        <div className={`pt-3.5 border-t flex items-center justify-between text-xs font-medium ${
                          milestone.isHighlight ? 'border-white/10 text-white/70' : 'border-[#E5DDCB]/60 text-[#5A6B85]'
                        }`}>
                          <span>{milestone.metrics}</span>
                          <span className="flex items-center gap-1 font-bold text-[#C99A2E]">
                            <span>Verified</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Left Year Header on Odd Index (Activates with illumination on scroll) */
                      <div className="hidden lg:flex flex-col items-end text-right pr-8 transition-all duration-500">
                        <span 
                          className={`font-heading font-extrabold tracking-tighter transition-all duration-500 ${
                            isPassed 
                              ? 'text-6xl xl:text-7xl text-[#071A3A] scale-105' 
                              : 'text-5xl xl:text-6xl text-[#071A3A]/20'
                          }`}
                        >
                          {milestone.year}
                        </span>
                        <span className={`text-xs font-bold mt-1 tracking-wider uppercase transition-colors duration-500 ${
                          isPassed ? 'text-[#9E741B]' : 'text-[#5A6B85]/40'
                        }`}>
                          {milestone.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center Column: Interactive Illuminated Node */}
                  <div className="lg:col-span-2 lg:order-2 flex justify-start lg:justify-center relative z-20 pl-2 sm:pl-3 lg:pl-0">
                    <div 
                      className={`relative w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isPassed
                          ? 'bg-[#071A3A] text-[#E5B842] border-2 border-[#C99A2E] shadow-gold-glow scale-110'
                          : 'bg-white text-[#5A6B85] border-2 border-[#E5DDCB]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      
                      {/* Active Node Pulse Ring */}
                      {isPassed && (
                        <span className="absolute -inset-1.5 rounded-2xl border border-[#C99A2E] animate-ping opacity-50 pointer-events-none"></span>
                      )}

                      {/* Floating Year Tag on mobile view */}
                      <span className={`lg:hidden absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-md ${
                        isPassed ? 'bg-[#071A3A] text-[#E5B842]' : 'bg-[#E5DDCB] text-[#5A6B85]'
                      }`}>
                        {milestone.year}
                      </span>
                    </div>
                  </div>

                  {/* Right Column (Desktop: Card for odd milestones, or Year label for even) */}
                  <div className={`lg:col-span-5 pl-14 lg:pl-0 ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                    {!isEven ? (
                      /* Right Card on Odd Index */
                      <div className={`rounded-3xl p-6 sm:p-8 border-2 transition-all duration-500 relative group overflow-hidden ${
                        milestone.isHighlight
                          ? 'bg-[#071A3A] text-white border-[#C99A2E] shadow-navy-card-glow'
                          : isCurrent
                          ? 'bg-white border-[#C99A2E] shadow-tech-card-hover'
                          : 'bg-white/95 border-[#E5DDCB] shadow-tech-card hover:border-[#C99A2E]/60'
                      }`}>
                        {/* Title & Tagline */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-bold uppercase tracking-wider ${
                            milestone.isHighlight ? 'text-[#E5B842]' : 'text-[#9E741B]'
                          }`}>
                            Milestone {idx + 1}
                          </span>
                        </div>

                        <h3 className={`font-heading font-extrabold text-xl sm:text-2xl mb-1.5 leading-snug ${
                          milestone.isHighlight ? 'text-white' : 'text-[#071A3A]'
                        }`}>
                          {milestone.title}
                        </h3>
                        
                        <div className={`text-xs font-medium mb-3.5 ${
                          milestone.isHighlight ? 'text-[#E5B842]' : 'text-[#9E741B]'
                        }`}>
                          {milestone.tagline}
                        </div>

                        {/* Description */}
                        <p className={`text-xs sm:text-sm leading-relaxed mb-5 font-normal ${
                          milestone.isHighlight ? 'text-white/80' : 'text-[#5A6B85]'
                        }`}>
                          {milestone.description}
                        </p>

                        {/* Bottom Verified Metric */}
                        <div className={`pt-3.5 border-t flex items-center justify-between text-xs font-medium ${
                          milestone.isHighlight ? 'border-white/10 text-white/70' : 'border-[#E5DDCB]/60 text-[#5A6B85]'
                        }`}>
                          <span>{milestone.metrics}</span>
                          <span className="flex items-center gap-1 font-bold text-[#C99A2E]">
                            <span>Verified</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Right Year Header on Even Index */
                      <div className="hidden lg:flex flex-col items-start pl-8 transition-all duration-500">
                        <span 
                          className={`font-heading font-extrabold tracking-tighter transition-all duration-500 ${
                            isPassed 
                              ? 'text-6xl xl:text-7xl text-[#071A3A] scale-105' 
                              : 'text-5xl xl:text-6xl text-[#071A3A]/20'
                          }`}
                        >
                          {milestone.year}
                        </span>
                        <span className={`text-xs font-bold mt-1 tracking-wider uppercase transition-colors duration-500 ${
                          isPassed ? 'text-[#9E741B]' : 'text-[#5A6B85]/40'
                        }`}>
                          {milestone.title}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
