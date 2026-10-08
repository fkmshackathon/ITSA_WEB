import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, Award } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import { CircuitCorner } from './TechnicalDecoration';

export default function TeamStrip({ onSelectMember, onNavigateTeam }) {
  const president = teamMembers[0]; // Aryan Sharma - President
  const vicePresident = teamMembers[1]; // Ananya Deshmukh - Vice President
  const coreLeads = teamMembers.slice(2, 6); // Technical Head, General Secretary, Events Lead, Creative Lead

  return (
    <section className="py-24 md:py-32 bg-[#FAF7F0] border-b border-[#E5DDCB] relative overflow-hidden select-none">
      
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
        
        {/* Section Header with Editorial Storytelling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-semibold text-[#9E741B] uppercase tracking-wider mb-3.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-pulse"></span>
              <span>06 / STUDENT LEADERSHIP</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A3A] tracking-tight">
              The People Behind ITSA
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B85] mt-2.5 max-w-2xl font-normal">
              Built, managed, and driven by undergraduates. Meet the student leaders and innovators shaping hackathons, workshops, and technical initiatives across campus.
            </p>
          </div>

          {onNavigateTeam && (
            <button
              onClick={onNavigateTeam}
              className="btn-tech inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#071A3A] text-white text-xs font-bold hover:bg-[#0B1E40] border border-[#C99A2E]/50 shadow-tech-card self-start md:self-auto"
            >
              <span>View Full Council Directory</span>
              <ArrowRight className="w-4 h-4 text-[#E5B842]" />
            </button>
          )}
        </div>

        {/* Featured Visual Hierarchy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* 1. President Spotlight Card (7 cols) */}
          {president && (
            <div
              onClick={() => onSelectMember && onSelectMember(president)}
              className="lg:col-span-7 rounded-3xl bg-[#071A3A] text-white p-7 sm:p-9 border-2 border-[#C99A2E]/60 shadow-navy-card hover:shadow-navy-card-glow hover:border-[#E5B842] flex flex-col sm:flex-row gap-8 items-center cursor-pointer transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-1.5"
            >
              {/* Gold Top Ambient Glow */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#C99A2E]/15 to-transparent pointer-events-none"></div>

              {/* Large Portrait */}
              <div className="w-48 h-56 sm:w-52 sm:h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-[#0B1E40] border-2 border-[#C99A2E]/60 shadow-gold-glow relative">
                <img
                  src={president.avatar}
                  alt={president.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/60 via-transparent to-transparent"></div>
              </div>

              {/* Information & Leadership Details */}
              <div className="flex flex-col justify-between flex-grow text-center sm:text-left">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF4E6] text-[#071A3A] text-xs font-bold uppercase tracking-wide border border-[#C8A962] mb-3">
                    <Sparkles className="w-3 h-3 text-[#C99A2E]" />
                    <span>{president.badge}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#E5B842] transition-colors leading-tight mb-1">
                    {president.name}
                  </h3>
                  
                  <div className="text-sm font-semibold text-[#E5B842] mb-3">
                    {president.role}
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-5">
                    {president.shortRole}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className="text-white/60">{president.department.split('—')[0]}</span>
                  <span className="text-[#E5B842] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                    <span>View Dossier</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 2. Vice President Spotlight Card (5 cols) */}
          {vicePresident && (
            <div
              onClick={() => onSelectMember && onSelectMember(vicePresident)}
              className="lg:col-span-5 rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E] p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#FAF4E6] text-[#9E741B] px-3 py-1 rounded-full border border-[#C8A962]/40">
                    {vicePresident.badge}
                  </span>
                  <span className="text-xs font-bold text-[#5A6B85]">Leadership</span>
                </div>

                <div className="flex items-center gap-5 mb-5">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-[#FAF7F0] border-2 border-[#E5DDCB] shadow-sm">
                    <img
                      src={vicePresident.avatar}
                      alt={vicePresident.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#071A3A] group-hover:text-[#9E741B] transition-colors leading-tight mb-1">
                      {vicePresident.name}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-[#9E741B]">
                      {vicePresident.role}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5A6B85] leading-relaxed font-normal mb-4">
                  {vicePresident.shortRole}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-semibold text-[#071A3A]">
                <span className="text-[#5A6B85]">{vicePresident.department.split('—')[0]}</span>
                <span className="text-[#071A3A] group-hover:text-[#C99A2E] group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold">
                  <span>Profile</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          )}

        </div>

        {/* 3. Core Domain Leads (4 Column Editorial Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreLeads.map((member) => (
            <div
              key={member.id}
              onClick={() => onSelectMember && onSelectMember(member)}
              className="rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E] p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-1.5"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-[#FAF4E6] text-[#9E741B] px-2.5 py-0.5 rounded-lg border border-[#C8A962]/30">
                    {member.badge}
                  </span>
                </div>

                {/* Portrait */}
                <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-[#FAF7F0] border border-[#E5DDCB] mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/40 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity"></div>
                </div>

                {/* Name & Role */}
                <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#071A3A] group-hover:text-[#9E741B] transition-colors leading-tight mb-1">
                  {member.name}
                </h4>
                <div className="text-xs font-semibold text-[#9E741B] mb-3">
                  {member.role}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-semibold text-[#071A3A]">
                <span className="text-[11px] text-[#5A6B85]">{member.department.split('—')[0]}</span>
                <span className="text-xs font-bold text-[#071A3A] group-hover:text-[#C99A2E] group-hover:translate-x-1 transition-all flex items-center gap-0.5">
                  <span>Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
