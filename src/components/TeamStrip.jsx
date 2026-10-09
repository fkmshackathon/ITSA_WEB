import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, User } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import { CircuitCorner } from './TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function TeamStrip({ onSelectMember, onNavigateTeam }) {
  const containerRef = useScrollReveal();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 360;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#FAF7F0] border-b border-[#E5DDCB] relative overflow-hidden">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none"></div>

      {/* Decorative Corner Circuits */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-left" />
      </div>
      <div className="absolute top-4 right-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-init">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider mb-3 shadow-sm">
              <span>05 / STUDENT COMMITTEE</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A3A] tracking-tight">
              Meet the Student Core Team
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B85] mt-2 font-normal">
              Built by Undergraduates. An energetic cohort of student leaders, engineers, and organizers.
            </p>
          </div>

          {/* Carousel & Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`btn-tech p-3 rounded-xl border border-[#E5DDCB] bg-white ${
                canScrollLeft
                  ? 'hover:bg-[#071A3A] hover:text-white hover:border-[#071A3A] shadow-sm text-[#071A3A]'
                  : 'opacity-40 cursor-not-allowed text-[#808782]'
              }`}
              aria-label="Previous Team Members"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`btn-tech p-3 rounded-xl border border-[#E5DDCB] bg-white ${
                canScrollRight
                  ? 'hover:bg-[#071A3A] hover:text-white hover:border-[#071A3A] shadow-sm text-[#071A3A]'
                  : 'opacity-40 cursor-not-allowed text-[#808782]'
              }`}
              aria-label="Next Team Members"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            {onNavigateTeam && (
              <button
                onClick={onNavigateTeam}
                className="btn-tech hidden sm:inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-[#E5DDCB] text-xs font-bold text-[#071A3A] hover:bg-[#FAF4E6] hover:border-[#C99A2E] shadow-sm"
              >
                <span>Full Hierarchy</span>
                <ChevronRight className="w-4 h-4 text-[#C99A2E]" />
              </button>
            )}
          </div>
        </div>

        {/* Reference-Accurate Cream Student Team Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              onClick={() => onSelectMember && onSelectMember(member)}
              className="flex-shrink-0 w-72 sm:w-80 rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E] p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 group snap-start relative overflow-hidden reveal-init hover:-translate-y-1"
              style={{ transitionDelay: `${(idx % 4) * 80}ms` }}
            >
              {/* Corner Notches */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C99A2E]/50 pointer-events-none"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C99A2E]/50 pointer-events-none"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C99A2E]/50 pointer-events-none"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C99A2E]/50 pointer-events-none"></div>

              <div>
                {/* Top Status & Index */}
                <div className="flex items-center justify-between pb-3 text-[10px] font-mono text-[#5A6B85]">
                  <span className="font-bold text-[#071A3A]">{member.index}</span>
                  <span className="text-[#9E741B] font-bold bg-[#FAF4E6] px-2 py-0.5 rounded border border-[#C8A962]/30">
                    {member.badge}
                  </span>
                </div>

                {/* Portrait Window Container with Rounded Corners */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#E5DDCB]/50 to-[#FAF7F0] border border-[#E5DDCB] mb-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>

                {/* Role in bold dark navy */}
                <div className="text-center">
                  <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#071A3A] tracking-tight">
                    {member.role}
                  </h4>
                  <div className="text-sm font-semibold text-[#5A6B85] mt-0.5">
                    {member.name}
                  </div>
                </div>

                {/* Golden Node Divider Line: ○─────●─────○ */}
                <div className="my-4 flex items-center justify-center text-[#C99A2E]">
                  <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#E5DDCB] to-[#C99A2E]/60"></div>
                  <div className="mx-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full border border-current bg-white"></span>
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    <span className="w-1.5 h-1.5 rounded-full border border-current bg-white"></span>
                  </div>
                  <div className="flex-grow h-px bg-gradient-to-l from-transparent via-[#E5DDCB] to-[#C99A2E]/60"></div>
                </div>
              </div>

              {/* Social Link Pill & Action */}
              <div className="flex items-center justify-between pt-1 text-xs font-mono">
                <div className="flex items-center gap-3 text-[#5A6B85] font-bold">
                  <span className="hover:text-[#071A3A]">X</span>
                  <span>•</span>
                  <span className="hover:text-[#071A3A]">in</span>
                  <span>•</span>
                  <span className="hover:text-[#071A3A]">@</span>
                </div>
                <span className="text-xs font-bold text-[#071A3A] group-hover:text-[#C99A2E] group-hover:translate-x-1 transition-all">
                  Profile &rarr;
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile View All CTA */}
        {onNavigateTeam && (
          <div className="mt-6 text-center sm:hidden">
            <button
              onClick={onNavigateTeam}
              className="btn-tech inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#071A3A] text-white text-xs font-bold shadow-tech-card"
            >
              <span>Explore All Committee Members</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E5B842]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

