import React from 'react';
import { BookOpen, Award, ArrowRight, Mail, GraduationCap, ShieldCheck } from 'lucide-react';
import { facultyList } from '../data/facultyData';
import { CircuitCorner } from './TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function FacultySpotlight({ onSelectFaculty, onNavigateFaculty }) {
  const containerRef = useScrollReveal();

  // Primary leadership advisors extracted from verified document
  const advisors = [
    {
      id: "dr-vikas-kaul",
      name: "Dr. Vikas Kaul",
      designation: "Associate Professor & Head of Department",
      roleBadge: "HOD IT",
      experience: "31+ Years Exp",
      specialization: "Optical Networks, Cloud Systems, Wireless Networks",
      image: "/assets/faculty/dr-vikas-kaul.png",
      code: "FAC-01"
    },
    {
      id: "rupali-pashte",
      name: "Mrs. Rupali Pashte",
      designation: "Assistant Professor",
      roleBadge: "ITSA Coordinator",
      experience: "16+ Years Exp",
      specialization: "AI/ML, Deep Learning, Cloud Computing",
      image: "/assets/faculty/rupali-pashte.png",
      code: "FAC-02"
    },
    {
      id: "roopali-lolage",
      name: "Dr. Roopali Lolage",
      designation: "Assistant Professor",
      roleBadge: "ITSA Advisor",
      experience: "17+ Years Exp",
      specialization: "Data Science, Machine Learning, Predictive Analytics",
      image: "/assets/faculty/roopali-lolage.png",
      code: "FAC-03"
    },
    {
      id: "madhuri-gedam",
      name: "Dr. Madhuri Gedam",
      designation: "Assistant Professor",
      roleBadge: "ITSA Chairman",
      experience: "14+ Years Exp",
      specialization: "Information Security, Cryptography, Blockchain",
      image: "/assets/faculty/madhuri-gedam.png",
      code: "FAC-04"
    }
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#F5F0E3] border-b border-[#E5DDCB] relative overflow-hidden">
      
      {/* Background Code Watermark & Circuit Traces */}
      <div className="absolute inset-0 bg-cream-grid opacity-40 pointer-events-none"></div>

      {/* Decorative Corner Circuits */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-left" />
      </div>
      <div className="absolute top-4 right-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal-init">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider mb-3 shadow-sm">
              <span>04 / ACADEMIC LEADERSHIP</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A3A] tracking-tight">
              Our Faculty Advisors
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B85] mt-2 font-normal">
              The Guardians of ITSA. Guided by 20+ dedicated faculty mentors with advanced research pedagogies.
            </p>
          </div>

          {onNavigateFaculty && (
            <button
              onClick={onNavigateFaculty}
              className="btn-tech inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#071A3A] text-white text-xs font-bold hover:bg-[#0B1E40] border border-[#C99A2E]/50 shadow-tech-card self-start md:self-auto"
            >
              <span>View All 20+ Faculty Profiles</span>
              <ArrowRight className="w-4 h-4 text-[#E5B842]" />
            </button>
          )}
        </div>

        {/* 4 Reference Dark Navy Tech Identity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((faculty, idx) => (
            <div
              key={faculty.id}
              onClick={() => {
                const fullProfile = facultyList.find((f) => f.id === faculty.id) || faculty;
                onSelectFaculty && onSelectFaculty(fullProfile);
              }}
              className="rounded-3xl bg-[#071A3A] text-white p-6 border-2 border-[#C99A2E]/40 shadow-navy-card hover:shadow-navy-card-glow hover:border-[#C99A2E] flex flex-col justify-between cursor-pointer transition-all duration-300 group relative overflow-hidden reveal-init hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Gold Top Ambient Glow */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#C99A2E]/10 to-transparent pointer-events-none"></div>

              {/* Card Top: Status Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-[10px] font-mono text-white/60 relative z-10">
                <span className="text-[#E5B842] font-bold">{faculty.code}</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>ACTIVE</span>
                </span>
              </div>

              {/* Central Circular Portrait with Gold Border Frame */}
              <div className="my-6 flex flex-col items-center justify-center relative z-10">
                <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#C99A2E] via-[#E5B842] to-[#7D1730] shadow-gold-glow">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-[#0B1E40] border-2 border-[#071A3A]">
                    {faculty.image ? (
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#E5B842]">
                        <GraduationCap className="w-10 h-10 opacity-70" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Role Badge directly below photo */}
                <div className="mt-4 px-3.5 py-1 rounded-full bg-[#FAF4E6] text-[#071A3A] font-mono text-[11px] font-extrabold border border-[#C8A962] shadow-sm tracking-wide">
                  {faculty.roleBadge}
                </div>
              </div>

              {/* Faculty Name & Designation */}
              <div className="text-center relative z-10 mb-4">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-[#E5B842] transition-colors leading-tight mb-1">
                  {faculty.name}
                </h3>
                <p className="text-xs text-white/75 font-medium">
                  {faculty.designation}
                </p>
                <div className="text-[11px] font-mono text-[#E5B842] mt-1">
                  {faculty.experience}
                </div>
              </div>

              {/* Bottom Gold Shield Emblem / Action */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
                <div className="flex items-center gap-1 text-[#E5B842]">
                  <Award className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono">SLRTCE IT</span>
                </div>
                <span className="text-xs font-mono font-bold text-white group-hover:text-[#E5B842] transition-colors">
                  Dossier &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* HOD Quote Banner */}
        <div className="mt-12 bg-white rounded-3xl border-2 border-[#E5DDCB] p-6 sm:p-8 shadow-tech-card relative overflow-hidden reveal-init">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left border-b lg:border-b-0 lg:border-r border-[#E5DDCB] pb-4 lg:pb-0 lg:pr-6">
              <div className="relative p-1 rounded-full bg-[#C99A2E]/30 mb-3">
                <img
                  src="/assets/faculty/dr-vikas-kaul.png"
                  alt="Dr. Vikas Kaul - HOD"
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#071A3A]"
                />
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#071A3A]">
                Dr. Vikas Kaul
              </h4>
              <span className="text-xs text-[#9E741B] font-bold">
                Associate Professor & Head of Department
              </span>
              <span className="text-[11px] text-[#5A6B85] font-mono mt-0.5">
                31 Years Combined Experience
              </span>
            </div>

            <div className="lg:col-span-9 flex flex-col justify-center">
              <span className="text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider mb-2">
                Message from the Department Head
              </span>
              <p className="text-xs sm:text-sm text-[#071A3A] font-medium leading-relaxed italic mb-4">
                "In today's digital age, Information Technology plays a pivotal role in shaping industries. At SLRTCE Department of IT, we deliver high-quality, industry-relevant education with an unwavering focus on academic excellence, outcome-based Disha pedagogy, and student-driven innovation through ITSA."
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#5A6B85]">
                <span>• NBA-Accredited Curriculum</span>
                <span>• 95%+ Result Average</span>
                <span>• 40+ Research Papers</span>
                <a
                  href="mailto:hod.it@slrtce.in"
                  className="btn-tech ml-auto text-[#071A3A] font-bold hover:text-[#C99A2E] flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C99A2E]" />
                  <span>hod.it@slrtce.in</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

