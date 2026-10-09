import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { teamMembers, facultyAdvisors } from '../data/teamData';
import VolumetricStudio from '../components/ui/volumetric-studio';

export default function TeamPage({ onSelectMember, onSelectFaculty }) {
  return (
    <div className="flex flex-col min-h-screen selection:bg-[#D4AF37] selection:text-[#0B132B]">
      
      {/* ========================================================================= */}
      {/* 1. TOP SPOTLIGHT SECTION (Midnight Dark: bg-[#070B18] text-white)         */}
      {/*    Volumetric Studio with animated "MEET OUR CORE TEAM FOR 2026-27" title */}
      {/* ========================================================================= */}
      <section className="relative bg-[#070B18] text-white overflow-hidden border-b border-[#D4AF37]/30">
        <VolumetricStudio className="min-h-[560px] md:min-h-[620px] flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative z-10 flex flex-col items-center justify-center min-h-[500px]">
            
            {/* Telemetry Tracking Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C2541]/90 border border-[#D4AF37]/50 text-xs font-mono font-bold text-[#FFD700] mb-6 shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
              <span>STUDENT EXECUTIVE COMMITTEE • 2026-27</span>
            </motion.div>

            {/* Inside the light beam area: Animated Title in all-caps, faded elegant typography */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-[0.16em] sm:tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2B2] via-[#FFD700] to-[#9E741B] drop-shadow-[0_15px_30px_rgba(212,175,55,0.45)] leading-tight mb-5 uppercase"
            >
              MEET OUR CORE TEAM FOR 2026-27
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-6"
            >
              The visionary student engineers, architects, and community organizers steering ITSA operations, hackathon architecture, Meta Summit logistics, and peer outreach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xs font-mono text-[#D4AF37] flex items-center gap-2"
            >
              <span>Scroll down to meet the council</span>
              <span className="animate-bounce">↓</span>
            </motion.div>

          </div>
        </VolumetricStudio>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE TEAM SECTION (Ivory Light: bg-[#FDFBF7] text-slate-900)          */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] text-slate-900 border-b border-[#E5DDCB] relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#071A3A08_1px,transparent_1px),linear-gradient(to_bottom,#071A3A08_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#9E741B] uppercase tracking-widest bg-[#FAF4E6] px-4 py-1.5 rounded-full border border-[#C8A962]/40 shadow-sm inline-block mb-3">
              Executive Committee Structure
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#071A3A] tracking-tight">
              Core Student Leadership
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B85] mt-3">
              Click any profile card to view detailed portfolios, technical focus areas, and institutional credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectMember && onSelectMember(member)}
                className="rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E] p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 group relative overflow-hidden"
              >
                {/* Corner Tech Notches */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C99A2E]/50 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C99A2E]/50 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C99A2E]/50 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C99A2E]/50 pointer-events-none" />

                <div>
                  {/* Top Status & Index */}
                  <div className="flex items-center justify-between pb-3 text-[10px] font-mono text-[#5A6B85]">
                    <span className="font-bold text-[#071A3A]">{member.index}</span>
                    <span className="text-[#9E741B] font-bold bg-[#FAF4E6] px-2.5 py-0.5 rounded border border-[#C8A962]/30">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
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

                  {/* Golden Node Divider Line */}
                  <div className="my-4 flex items-center justify-center text-[#C99A2E]">
                    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#E5DDCB] to-[#C99A2E]/60" />
                    <div className="mx-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full border border-current bg-white" />
                      <span className="w-2 h-2 rounded-full bg-current" />
                      <span className="w-1.5 h-1.5 rounded-full border border-current bg-white" />
                    </div>
                    <div className="flex-grow h-px bg-gradient-to-l from-transparent via-[#E5DDCB] to-[#C99A2E]/60" />
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-1 text-xs font-mono">
                  <div className="flex items-center gap-3 text-[#5A6B85] font-bold">
                    <span className="hover:text-[#071A3A]">X</span>
                    <span>•</span>
                    <span className="hover:text-[#071A3A]">in</span>
                    <span>•</span>
                    <span className="hover:text-[#071A3A]">@</span>
                  </div>
                  <span className="text-xs font-bold text-[#071A3A] group-hover:text-[#C99A2E] group-hover:translate-x-1 transition-all flex items-center gap-1">
                    <span>Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FACULTY ADVISORS SECTION (Midnight Dark: bg-[#070B18] text-white)      */}
      {/*    Directly under the Core Team on this page!                             */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#070B18] text-white border-b border-[#D4AF37]/30 relative overflow-hidden">
        {/* Subtle background circuitry lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2541] border border-[#D4AF37]/50 text-xs font-mono font-bold text-[#FFD700] uppercase tracking-wider mb-3 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>Institutional Mentorship</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                Faculty Advisors & Executive Mentors
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-md font-sans">
              The academic guardians of ITSA. Guided by 20+ dedicated faculty mentors across specialized domains delivering NBA-accredited excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyAdvisors.map((adv, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectFaculty && onSelectFaculty(adv)}
                className="rounded-3xl bg-[#0B132B] text-white p-6 border-2 border-[#C99A2E]/40 shadow-navy-card flex flex-col items-center text-center group transition-all duration-300 hover:border-[#FFD700] cursor-pointer"
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
                <h4 className="font-heading font-extrabold text-base sm:text-lg text-white group-hover:text-[#FFD700] transition-colors">
                  {adv.name}
                </h4>
                <span className="text-xs font-bold text-[#E5B842] mt-0.5">
                  {adv.role}
                </span>
                <span className="text-[11px] text-white/70 font-mono mt-1">
                  {adv.designation}
                </span>

                <div className="mt-4 pt-3 border-t border-white/10 w-full text-[10px] font-mono text-[#D4AF37] flex items-center justify-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Department Faculty Footnote */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0B132B]/80 border border-[#D4AF37]/30 text-center backdrop-blur-sm">
            <p className="text-xs sm:text-sm text-white/70 font-sans">
              Supported by the entire academic faculty of the Department of Information Technology at Shree L. R. Tiwari College of Engineering (Autonomous).
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
