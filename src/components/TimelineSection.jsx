import React, { useState, useEffect, useRef } from 'react';
import { Award, Cpu, BookOpen, Layers, Sparkles, Terminal, Activity, ArrowUpRight } from 'lucide-react';
import { CircuitCorner } from './TechnicalDecoration';

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  // Factual, verified milestones from SLRTCE IT & ITSA documentation
  const milestones = [
    {
      year: "2010",
      nodeId: "NODE-01",
      badge: "FOUNDATION",
      title: "Establishment of IT Department",
      tagline: "Academic Inception & Computational Infrastructure",
      description: "Department of Information Technology founded under Mumbai University with 6 high-performance computing laboratories and outcome-based engineering curriculum.",
      icon: BookOpen,
      metrics: "60 Initial Intake • 6 Specialized Labs"
    },
    {
      year: "2015",
      nodeId: "NODE-02",
      badge: "STUDENT CHAPTER",
      title: "Inauguration of ITSA Chapter",
      tagline: "Student Leadership & Technical Empowerment",
      description: "Official formation of the Information Technology Students Association (ITSA) as the premier student-governed body to spearhead hackathons, workshops, and peer mentorship.",
      icon: Terminal,
      metrics: "Annual Technical Symposiums Initiated"
    },
    {
      year: "2019",
      nodeId: "NODE-03",
      badge: "RESEARCH EXPANSION",
      title: "Advanced Tech Labs & AI Initiatives",
      tagline: "Applied Research & Industry Integration",
      description: "Expansion of computational facilities with dedicated Artificial Intelligence, IoT Systems, and Cloud Security infrastructure, driving publication of 40+ departmental research papers.",
      icon: Cpu,
      metrics: "40+ Research Papers • IoT & AI Labs"
    },
    {
      year: "2023",
      nodeId: "NODE-04",
      badge: "ACCREDITATION",
      title: "NBA Accreditation & Autonomy",
      tagline: "Institutional Excellence Recognized",
      description: "Department awarded prestigious National Board of Accreditation (NBA) tier status and Autonomous governance for benchmarked academic rigor and 90%+ placement track record.",
      icon: Award,
      metrics: "NBA Accredited • Autonomous Status"
    },
    {
      year: "2025",
      nodeId: "NODE-05",
      badge: "INNOVATION HUB",
      title: "Idea Lab & Prayas Incubation",
      tagline: "Product Engineering & Startup Prototyping",
      description: "Launch of the state-of-the-art Idea Lab prototyping center and Prayas incubation ecosystem, supporting multidisciplinary hardware-software research and national hackathon victories.",
      icon: Layers,
      metrics: "240 Intake Capacity • Innovation Hub"
    },
    {
      year: "2026",
      nodeId: "NODE-06",
      badge: "FLAGSHIP ERA",
      title: "META SUMMIT Flagship Era",
      tagline: "National Technical Convergence",
      description: "ITSA launches META SUMMIT 2026 — the premier 2-day hybrid technology convergence uniting 350+ student engineers, researchers, and tech pioneers across four cutting-edge tracks.",
      icon: Sparkles,
      metrics: "350+ Delegates • 4 Core Tracks",
      isHighlight: true
    }
  ];

  // Scroll tracking within the timeline container
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress when section enters viewport to when it leaves
      const start = rect.top - windowHeight * 0.7;
      const total = rect.height - windowHeight * 0.4;
      
      if (total <= 0) return;
      
      const current = -start;
      const rawProgress = current / total;
      const progress = Math.max(0, Math.min(1, rawProgress));
      
      setScrollProgress(progress);

      // Determine which milestone is active
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
            <div className="flex items-center gap-2 mb-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#C99A2E] animate-pulse"></span>
                <span>05 / ITSA DATA STREAM</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5DDCB] text-[10px] font-mono font-bold text-[#071A3A]">
                <Activity className="w-3 h-3 text-emerald-500" />
                <span>STREAM: {Math.round(scrollProgress * 100)}% SYNCED</span>
              </div>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A3A] tracking-tight leading-tight">
              The Evolution of ITSA
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B85] mt-2.5 max-w-2xl font-normal">
              A decade-long data stream tracing the trajectory of student innovation, academic milestones, and technological leadership at SLRTCE.
            </p>
          </div>

          {/* Real-time System Telemetry Chip */}
          <div className="hidden lg:flex flex-col items-end text-right font-mono text-xs text-[#5A6B85] bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E5DDCB] shadow-sm">
            <div className="flex items-center gap-2 text-[#071A3A] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#C99A2E] animate-ping"></span>
              <span>HISTORICAL NODES: 06 ACTIVE</span>
            </div>
            <span className="text-[11px] text-[#9E741B] mt-0.5">SLRTCE IT DEPT // 2010 – 2026</span>
          </div>
        </div>

        {/* Interactive Data-Stream Timeline Container */}
        <div className="relative py-8">
          
          {/* Central Connecting Data Path (Desktop SVG Circuit Spine) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 pointer-events-none z-0">
            {/* Base Inactive Gray Trace */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-[#E5DDCB] rounded-full"></div>
            
            {/* Dynamic Gold Active Growing Stream */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 top-4 w-1 bg-gradient-to-b from-[#C99A2E] via-[#E5B842] to-[#7D1730] rounded-full transition-all duration-300 shadow-gold-glow"
              style={{
                height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%`
              }}
            >
              {/* Pulsing leading signal packet */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E5B842] shadow-gold-glow animate-pulse"></div>
            </div>
          </div>

          {/* Mobile Left Data Line */}
          <div className="lg:hidden absolute left-6 top-4 bottom-4 w-1 bg-[#E5DDCB] rounded-full pointer-events-none z-0">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#C99A2E] via-[#E5B842] to-[#7D1730] rounded-full transition-all duration-300 shadow-gold-glow"
              style={{
                height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%`
              }}
            ></div>
          </div>

          {/* Milestone Nodes & Interactive Cards */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24 relative z-10">
            {milestones.map((milestone, idx) => {
              // Calculate if this milestone is reached based on scroll progress
              const milestoneThreshold = idx / (milestones.length - 1);
              const isPassed = scrollProgress >= milestoneThreshold - 0.08;
              const isCurrent = activeMilestoneIndex === idx;
              const IconComponent = milestone.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={milestone.nodeId}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center transition-all duration-500 ${
                    isPassed ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-3'
                  }`}
                >
                  {/* Left Column (Desktop: Card for even milestones, or Year label for odd) */}
                  <div className={`lg:col-span-5 pl-14 lg:pl-0 ${isEven ? 'lg:order-1' : 'lg:order-3 lg:text-left'}`}>
                    {isEven ? (
                      /* Left Card on Even Index */
                      <div className={`rounded-3xl p-6 sm:p-7 border-2 transition-all duration-500 relative group overflow-hidden ${
                        milestone.isHighlight
                          ? 'bg-[#071A3A] text-white border-[#C99A2E] shadow-navy-card-glow'
                          : isCurrent
                          ? 'bg-white border-[#C99A2E] shadow-tech-card-hover'
                          : 'bg-white/90 border-[#E5DDCB] shadow-tech-card hover:border-[#C99A2E]/60'
                      }`}>
                        {/* Top Meta Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-[#E5DDCB]/50 mb-3 text-xs font-mono">
                          <span className={`font-extrabold ${milestone.isHighlight ? 'text-[#E5B842]' : 'text-[#9E741B]'}`}>
                            {milestone.badge}
                          </span>
                          <span className={milestone.isHighlight ? 'text-white/60' : 'text-[#5A6B85]'}>
                            {milestone.nodeId}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className={`font-heading font-extrabold text-xl sm:text-2xl mb-1 ${
                          milestone.isHighlight ? 'text-white' : 'text-[#071A3A]'
                        }`}>
                          {milestone.title}
                        </h3>
                        <div className={`text-xs font-medium mb-3 ${
                          milestone.isHighlight ? 'text-[#E5B842]' : 'text-[#9E741B]'
                        }`}>
                          {milestone.tagline}
                        </div>

                        {/* Description */}
                        <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                          milestone.isHighlight ? 'text-white/80' : 'text-[#5A6B85]'
                        }`}>
                          {milestone.description}
                        </p>

                        {/* Bottom Metric Pill */}
                        <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                          milestone.isHighlight ? 'border-white/10 text-white/70' : 'border-[#E5DDCB]/50 text-[#071A3A]'
                        }`}>
                          <span className="font-semibold">{milestone.metrics}</span>
                          <span className="flex items-center gap-1 font-bold text-[#C99A2E]">
                            <span>VERIFIED</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Left Year Header on Odd Index */
                      <div className="hidden lg:flex flex-col items-end text-right pr-6">
                        <span className="text-5xl xl:text-6xl font-heading font-black text-[#071A3A]/20 tracking-tighter">
                          {milestone.year}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#9E741B] mt-1 uppercase tracking-wider">
                          {milestone.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center Column: Node Indicator (Desktop 2 cols) */}
                  <div className="lg:col-span-2 lg:order-2 flex justify-start lg:justify-center relative z-20 pl-2 sm:pl-3 lg:pl-0">
                    <div 
                      className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isPassed
                          ? 'bg-[#071A3A] text-[#E5B842] border-2 border-[#C99A2E] shadow-gold-glow scale-110'
                          : 'bg-white text-[#5A6B85] border-2 border-[#E5DDCB]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      
                      {/* Active Node Pulse Ring */}
                      {isPassed && (
                        <span className="absolute -inset-1 rounded-2xl border border-[#C99A2E] animate-ping opacity-60 pointer-events-none"></span>
                      )}

                      {/* Floating Year Tag on mobile or next to node */}
                      <span className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
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
                      <div className={`rounded-3xl p-6 sm:p-7 border-2 transition-all duration-500 relative group overflow-hidden ${
                        milestone.isHighlight
                          ? 'bg-[#071A3A] text-white border-[#C99A2E] shadow-navy-card-glow'
                          : isCurrent
                          ? 'bg-white border-[#C99A2E] shadow-tech-card-hover'
                          : 'bg-white/90 border-[#E5DDCB] shadow-tech-card hover:border-[#C99A2E]/60'
                      }`}>
                        {/* Top Meta Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-[#E5DDCB]/50 mb-3 text-xs font-mono">
                          <span className={`font-extrabold ${milestone.isHighlight ? 'text-[#E5B842]' : 'text-[#9E741B]'}`}>
                            {milestone.badge}
                          </span>
                          <span className={milestone.isHighlight ? 'text-white/60' : 'text-[#5A6B85]'}>
                            {milestone.nodeId}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className={`font-heading font-extrabold text-xl sm:text-2xl mb-1 ${
                          milestone.isHighlight ? 'text-white' : 'text-[#071A3A]'
                        }`}>
                          {milestone.title}
                        </h3>
                        <div className={`text-xs font-medium mb-3 ${
                          milestone.isHighlight ? 'text-[#E5B842]' : 'text-[#9E741B]'
                        }`}>
                          {milestone.tagline}
                        </div>

                        {/* Description */}
                        <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                          milestone.isHighlight ? 'text-white/80' : 'text-[#5A6B85]'
                        }`}>
                          {milestone.description}
                        </p>

                        {/* Bottom Metric Pill */}
                        <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                          milestone.isHighlight ? 'border-white/10 text-white/70' : 'border-[#E5DDCB]/50 text-[#071A3A]'
                        }`}>
                          <span className="font-semibold">{milestone.metrics}</span>
                          <span className="flex items-center gap-1 font-bold text-[#C99A2E]">
                            <span>VERIFIED</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Right Year Header on Even Index */
                      <div className="hidden lg:flex flex-col items-start pl-6">
                        <span className="text-5xl xl:text-6xl font-heading font-black text-[#071A3A]/20 tracking-tighter">
                          {milestone.year}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#9E741B] mt-1 uppercase tracking-wider">
                          {milestone.badge}
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
