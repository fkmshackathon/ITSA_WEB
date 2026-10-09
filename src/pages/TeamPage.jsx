import React from 'react';
import { Mail, Sparkles, GraduationCap, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { teamMembers, facultyAdvisors } from '../data/teamData';
import { CircuitCorner } from '../components/TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function TeamPage({ onSelectMember, onNavigateFaculty }) {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#F5F0E3]">
      
      {/* Team Hero Header */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-[#FAF7F0] border-b border-[#E5DDCB] relative overflow-hidden">
        <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none"></div>
        
        <div className="absolute top-4 left-4 z-0">
          <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-left" />
        </div>
        <div className="absolute top-4 right-4 z-0">
          <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-right" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl reveal-init">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider mb-4 shadow-sm">
              <span>05 / STUDENT EXECUTIVE COMMITTEE</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#071A3A] tracking-tight leading-[1.08] mb-6">
              THE PEOPLE <br />
              <span className="text-[#C99A2E]">BUILDING ITSA</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#323F52] leading-relaxed font-normal">
              Meet the executive student committee driving chapter operations, hackathon architecture, Meta Summit logistics, design systems, and peer outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Core Committee Grid matching the Reference Student Card Design */}
      <section className="py-16 md:py-24 bg-[#F5F0E3] border-b border-[#E5DDCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 reveal-init">
            <span className="text-xs font-mono font-bold text-[#9E741B] uppercase tracking-widest bg-[#FAF4E6] px-3.5 py-1 rounded-full border border-[#C8A962]/40 shadow-sm">
              Executive Committee Structure
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#071A3A] tracking-tight mt-3">
              Core Student Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={member.id}
                onClick={() => onSelectMember && onSelectMember(member)}
                className="rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E] p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 group relative overflow-hidden reveal-init hover:-translate-y-1.5"
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

                  {/* Portrait Window Container */}
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

                {/* Social Links & Action */}
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

        </div>
      </section>

      {/* Faculty Advisory Board matching Dark Navy Tech Cards */}
      <section className="py-16 md:py-20 bg-[#FAF7F0] border-b border-[#E5DDCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal-init">
            <div>
              <span className="text-xs font-mono font-bold text-[#9E741B] uppercase tracking-widest bg-[#FAF4E6] px-3.5 py-1 rounded-full border border-[#C8A962]/40 shadow-sm">
                Institutional Mentorship
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#071A3A] tracking-tight mt-3">
                Faculty Advisors & Executive Mentors
              </h2>
            </div>

            {onNavigateFaculty && (
              <button
                onClick={onNavigateFaculty}
                className="btn-tech inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#071A3A] text-white text-xs font-bold hover:bg-[#0B1E40] border border-[#C99A2E]/50 shadow-sm self-start md:self-auto"
              >
                <span>Browse All Faculty Members</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E5B842]" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyAdvisors.map((adv, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#071A3A] text-white p-6 border-2 border-[#C99A2E]/40 shadow-navy-card flex flex-col items-center text-center group transition-all duration-300 hover:border-[#C99A2E] reveal-init"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#C99A2E] to-[#E5B842] shadow-gold-glow mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-[#0B1E40] border-2 border-[#071A3A]">
                    <img
                      src={adv.image}
                      alt={adv.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                  {adv.name}
                </h4>
                <span className="text-xs font-bold text-[#E5B842] mt-0.5">
                  {adv.role}
                </span>
                <span className="text-[11px] text-white/70 font-mono mt-1">
                  {adv.designation}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

