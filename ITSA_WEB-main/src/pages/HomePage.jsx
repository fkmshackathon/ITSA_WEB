import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Globe2,
  Users2,
  Terminal,
  Layers,
  Trophy,
  Rocket,
  CheckCircle2,
  Sparkles,
  ChevronUp
} from 'lucide-react';

// Specialized UI Components
import Hero from '../components/Hero';
import FlipCard from '../components/ui/flip-card';
import HeroScrollAnimation from '../components/ui/hero-scroll-animation';
import VolumetricStudio from '../components/ui/volumetric-studio';

export default function HomePage({
  onNavigate,
  onSelectTeamMember,
  onSelectFaculty,
  onSelectEvent,
  onOpenLightbox
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#D4AF37] selection:text-[#0B132B]">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Midnight Dark: bg-[#070B18] text-white)                */}
      {/* ========================================================================= */}
      <div className="bg-[#070B18] text-white">
        <Hero
          onExploreAbout={() => onNavigate('about')}
          onExploreEvents={() => onNavigate('events')}
          onExploreSummit={() => onNavigate('meta-summit')}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. WHAT IS ITSA SECTION (Ivory Light: bg-[#FDFBF7] text-slate-900)       */}
      {/* ========================================================================= */}
      <section
        id="what-is-itsa"
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] text-slate-900 border-b border-[#E5DDCB] overflow-hidden"
      >
        {/* Subtle background engineering grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#071A3A08_1px,transparent_1px),linear-gradient(to_bottom,#071A3A08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E6] border border-[#C8A962]/50 text-xs font-mono font-bold text-[#9E741B] mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-pulse" />
              <span className="tracking-widest uppercase">THE ITSA CHARTER</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#071A3A] tracking-tight leading-tight">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E741B] via-[#C99A2E] to-[#E5B842]">ITSA?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#323F52] leading-relaxed font-normal">
              The Information Technology Student Association is the official student-governed body of the Department of IT at SLRTCE. We cultivate an ecosystem where academic rigor converges with industry-grade software craftsmanship.
            </p>
          </div>

          {/* 4 Pillars Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Pillar 1 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card flex flex-col justify-between group hover:border-[#C99A2E] transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] border border-[#C8A962]/40 flex items-center justify-center text-[#9E741B] mb-5 shadow-sm group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-[#071A3A] mb-2 group-hover:text-[#C99A2E] transition-colors">
                  Competitive Coding & Hackathons
                </h3>
                <p className="text-sm text-[#5A6B85] leading-relaxed">
                  Organizing high-velocity 24-hour hackathons, algorithmic sprints, and national coding challenges that simulate real industry pressure.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-mono text-[#9E741B] font-bold">
                <span>24HR SPRINTS</span>
                <span>01 //</span>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card flex flex-col justify-between group hover:border-[#C99A2E] transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] border border-[#C8A962]/40 flex items-center justify-center text-[#9E741B] mb-5 shadow-sm group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-[#071A3A] mb-2 group-hover:text-[#C99A2E] transition-colors">
                  Next-Gen Tech Bootcamps
                </h3>
                <p className="text-sm text-[#5A6B85] leading-relaxed">
                  Hands-on engineering tracks spanning Applied AI, Cloud Architecture, DevOps, and Cyber Defense taught by industry practitioners.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-mono text-[#9E741B] font-bold">
                <span>HANDS-ON LABS</span>
                <span>02 //</span>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card flex flex-col justify-between group hover:border-[#C99A2E] transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] border border-[#C8A962]/40 flex items-center justify-center text-[#9E741B] mb-5 shadow-sm group-hover:scale-110 transition-transform">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-[#071A3A] mb-2 group-hover:text-[#C99A2E] transition-colors">
                  Industrial Immersion
                </h3>
                <p className="text-sm text-[#5A6B85] leading-relaxed">
                  Direct engagement with premier enterprise technology hubs, Tier-1 data facilities, and executive keynote dialogues.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-mono text-[#9E741B] font-bold">
                <span>SITE VISITS</span>
                <span>03 //</span>
              </div>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card flex flex-col justify-between group hover:border-[#C99A2E] transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] border border-[#C8A962]/40 flex items-center justify-center text-[#9E741B] mb-5 shadow-sm group-hover:scale-110 transition-transform">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-[#071A3A] mb-2 group-hover:text-[#C99A2E] transition-colors">
                  Peer Mentorship & Network
                </h3>
                <p className="text-sm text-[#5A6B85] leading-relaxed">
                  Connecting freshmen and sophomores with elite senior leaders and alumni working at Google, Oracle, AWS, and leading startups.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-mono text-[#9E741B] font-bold">
                <span>ALUMNI CIRCLE</span>
                <span>04 //</span>
              </div>
            </motion.div>

          </div>

          {/* Live Telemetry HUD Bar */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#071A3A] text-white border-2 border-[#C99A2E]/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B1E40] border border-[#C99A2E] flex items-center justify-center text-[#E5B842]">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#E5B842]">
                    ITSA_NODE // ACTIVE TELEMETRY
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  SLRTCE Department of Information Technology Community
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-center">
                <span className="text-xs font-mono text-white/60 block">INTAKE</span>
                <span className="text-lg font-black text-[#E5B842] font-mono">240+</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-center">
                <span className="text-xs font-mono text-white/60 block">BATCHES</span>
                <span className="text-lg font-black text-[#E5B842] font-mono">11+</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-center">
                <span className="text-xs font-mono text-white/60 block">EVENTS</span>
                <span className="text-lg font-black text-[#E5B842] font-mono">50+</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-center">
                <span className="text-xs font-mono text-white/60 block">COMMUNITY</span>
                <span className="text-lg font-black text-emerald-400 font-mono">ACTIVE</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT DO WE ORGANIZE SECTION (Midnight Dark: bg-[#070B18] text-white)   */}
      {/* ========================================================================= */}
      <section
        id="what-we-organize"
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070B18] text-white border-b border-[#D4AF37]/25 overflow-hidden"
      >
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2541] border border-[#D4AF37]/50 text-xs font-mono font-bold text-[#FFD700] mb-4 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-[#FFD700]" />
              <span className="tracking-widest uppercase">FLAGSHIP CALENDAR</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              What Do We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#FFD700] to-[#D4AF37]">Organize?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Click or drag any card below to flip into program agendas, participant stats, and upcoming registration windows.
            </p>
          </div>

          {/* The 4 3D FlipCards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            
            {/* CARD 1: Hackathons & Coding Contests */}
            <FlipCard
              width={290}
              height={430}
              radius={24}
              background="#0B132B"
              color="#FDFBF7"
              axis="y"
              tilt
              glare
              front={
                <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0B132B] to-[#0A0F1D] border border-[#D4AF37]/40 rounded-[24px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#1C2541] text-[#FFD700] border border-[#D4AF37]/30 text-[10px] font-mono font-bold">
                        FLAGSHIP EVENT
                      </span>
                      <Trophy className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#1C2541] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFD700] mb-4 shadow-sm">
                      <Rocket className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-[#FDFBF7] mb-2 leading-tight">
                      Hackathons & 24hr Sprints
                    </h3>
                    <p className="text-xs text-[#F5F2EC]/70 leading-relaxed">
                      High-stakes overnight innovation sprints including META SUMMIT and CodeCrafters with real problem statements.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#FFD700] font-mono font-bold">₹1.5L+ Cash Prizes</span>
                    <span className="text-[#D4AF37] font-mono">FLIP ME ↻</span>
                  </div>
                </div>
              }
              back={
                <div className="w-full h-full p-6 flex flex-col justify-between bg-[#1C2541] border border-[#FFD700]/60 rounded-[24px] text-left">
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/15">
                      <span className="text-xs font-mono font-bold text-[#FFD700]">SPRINT DETAILS</span>
                      <span className="text-[10px] font-mono text-white/50">SLRTCE</span>
                    </div>
                    <h4 className="text-base font-extrabold text-[#FDFBF7] mb-3">
                      META SUMMIT & Sprints
                    </h4>
                    <ul className="space-y-2 text-xs text-[#F5F2EC]/80 font-sans">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>350+ Hackers per edition</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Judges from Google & AWS</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Full hardware & cloud credits</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Direct internship offers</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('meta-summit');
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-[#0A0F1D] text-xs font-bold hover:scale-102 transition-transform cursor-pointer"
                  >
                    View Meta Summit Page
                  </button>
                </div>
              }
            />

            {/* CARD 2: Technical Workshops & Bootcamps */}
            <FlipCard
              width={290}
              height={430}
              radius={24}
              background="#0B132B"
              color="#FDFBF7"
              axis="y"
              tilt
              glare
              front={
                <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0B132B] to-[#0A0F1D] border border-[#D4AF37]/40 rounded-[24px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#1C2541] text-[#FFD700] border border-[#D4AF37]/30 text-[10px] font-mono font-bold">
                        HANDS-ON
                      </span>
                      <Code2 className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#1C2541] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFD700] mb-4 shadow-sm">
                      <Cpu className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-[#FDFBF7] mb-2 leading-tight">
                      Technical Workshops & Bootcamps
                    </h3>
                    <p className="text-xs text-[#F5F2EC]/70 leading-relaxed">
                      Intensive code-along sessions covering Fullstack MERN, Generative AI, Cloud DevOps, and Blockchain.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#FFD700] font-mono font-bold">Verified Certificates</span>
                    <span className="text-[#D4AF37] font-mono">FLIP ME ↻</span>
                  </div>
                </div>
              }
              back={
                <div className="w-full h-full p-6 flex flex-col justify-between bg-[#1C2541] border border-[#FFD700]/60 rounded-[24px] text-left">
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/15">
                      <span className="text-xs font-mono font-bold text-[#FFD700]">CURRICULUM</span>
                      <span className="text-[10px] font-mono text-white/50">HANDS-ON</span>
                    </div>
                    <h4 className="text-base font-extrabold text-[#FDFBF7] mb-3">
                      Mastery Bootcamps
                    </h4>
                    <ul className="space-y-2 text-xs text-[#F5F2EC]/80 font-sans">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Production Git & Docker</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>LLM APIs & AI Agents</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Cloud Architecture & AWS</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Capstone GitHub Deployments</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('events');
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-[#0A0F1D] text-xs font-bold hover:scale-102 transition-transform cursor-pointer"
                  >
                    Explore Past Workshops
                  </button>
                </div>
              }
            />

            {/* CARD 3: Industrial Visits & Guest Talks */}
            <FlipCard
              width={290}
              height={430}
              radius={24}
              background="#0B132B"
              color="#FDFBF7"
              axis="y"
              tilt
              glare
              front={
                <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0B132B] to-[#0A0F1D] border border-[#D4AF37]/40 rounded-[24px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#1C2541] text-[#FFD700] border border-[#D4AF37]/30 text-[10px] font-mono font-bold">
                        CORPORATE
                      </span>
                      <Globe2 className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#1C2541] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFD700] mb-4 shadow-sm">
                      <Globe2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-[#FDFBF7] mb-2 leading-tight">
                      Industrial Visits & Tech Talks
                    </h3>
                    <p className="text-xs text-[#F5F2EC]/70 leading-relaxed">
                      On-site corporate visits to leading data centers, tech parks, and executive dialogues with engineering VPs.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#FFD700] font-mono font-bold">Tier-1 Data Hubs</span>
                    <span className="text-[#D4AF37] font-mono">FLIP ME ↻</span>
                  </div>
                </div>
              }
              back={
                <div className="w-full h-full p-6 flex flex-col justify-between bg-[#1C2541] border border-[#FFD700]/60 rounded-[24px] text-left">
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/15">
                      <span className="text-xs font-mono font-bold text-[#FFD700]">CORPORATE TIES</span>
                      <span className="text-[10px] font-mono text-white/50">ON-SITE</span>
                    </div>
                    <h4 className="text-base font-extrabold text-[#FDFBF7] mb-3">
                      Corporate Immersion
                    </h4>
                    <ul className="space-y-2 text-xs text-[#F5F2EC]/80 font-sans">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Data Center Tier-4 Architectures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>FinTech Infrastructure Tours</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Interactive Q&A with CTOs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Corporate Placement Pipelines</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('gallery');
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-[#0A0F1D] text-xs font-bold hover:scale-102 transition-transform cursor-pointer"
                  >
                    View Industrial Gallery
                  </button>
                </div>
              }
            />

            {/* CARD 4: Innovision & Annual Tech Fest */}
            <FlipCard
              width={290}
              height={430}
              radius={24}
              background="#0B132B"
              color="#FDFBF7"
              axis="y"
              tilt
              glare
              front={
                <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0B132B] to-[#0A0F1D] border border-[#D4AF37]/40 rounded-[24px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#1C2541] text-[#FFD700] border border-[#D4AF37]/30 text-[10px] font-mono font-bold">
                        COLLEGIATE FEST
                      </span>
                      <Sparkles className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#1C2541] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFD700] mb-4 shadow-sm">
                      <Trophy className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-[#FDFBF7] mb-2 leading-tight">
                      Tech Fest & Showcase
                    </h3>
                    <p className="text-xs text-[#F5F2EC]/70 leading-relaxed">
                      Annual inter-collegiate technical festival featuring project expos, esports arenas, and algorithmic challenges.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#FFD700] font-mono font-bold">1200+ Footfall</span>
                    <span className="text-[#D4AF37] font-mono">FLIP ME ↻</span>
                  </div>
                </div>
              }
              back={
                <div className="w-full h-full p-6 flex flex-col justify-between bg-[#1C2541] border border-[#FFD700]/60 rounded-[24px] text-left">
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/15">
                      <span className="text-xs font-mono font-bold text-[#FFD700]">FEST HIGHLIGHTS</span>
                      <span className="text-[10px] font-mono text-white/50">ANNUAL</span>
                    </div>
                    <h4 className="text-base font-extrabold text-[#FDFBF7] mb-3">
                      Innovision Showcase
                    </h4>
                    <ul className="space-y-2 text-xs text-[#F5F2EC]/80 font-sans">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Project Prototype Expos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Competitive Web & AI Duels</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>18+ Participating Colleges</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Annual Department Trophy</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('events');
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-[#0A0F1D] text-xs font-bold hover:scale-102 transition-transform cursor-pointer"
                  >
                    Explore Fest Archive
                  </button>
                </div>
              }
            />

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TESTIMONIALS SECTION (Ivory Light: bg-[#FDFBF7] text-slate-900)       */}
      {/* ========================================================================= */}
      <section className="relative bg-[#FDFBF7]">
        <HeroScrollAnimation />
      </section>

      {/* ========================================================================= */}
      {/* 5. VOLUMETRIC STUDIO FOOTER (Midnight Dark: bg-[#070B18] text-white)      */}
      {/* ========================================================================= */}
      <footer className="relative bg-[#070B18] text-white">
        <VolumetricStudio className="min-h-[700px] flex flex-col justify-between">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full flex flex-col items-center justify-between text-center min-h-[660px]">
            
            {/* Top Badge: Department Branding */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C2541]/90 border border-[#D4AF37]/50 text-xs font-mono font-bold text-[#FFD700] shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span>DEPARTMENT OF INFORMATION TECHNOLOGY • SLRTCE (AUTONOMOUS)</span>
            </div>

            {/* Massive Bold Metallic Gold Typography: ITSA */}
            <div className="my-8 select-none">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-7xl sm:text-9xl md:text-[140px] lg:text-[180px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2B2] via-[#FFD700] to-[#9E741B] drop-shadow-[0_20px_45px_rgba(212,175,55,0.5)]"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                ITSA
              </motion.h1>
              <p className="text-sm sm:text-base md:text-lg font-mono text-[#FFD700] tracking-widest uppercase mt-2 opacity-90">
                INFORMATION TECHNOLOGY STUDENT ASSOCIATION
              </p>
              <p className="text-xs sm:text-sm text-white/60 font-sans mt-1">
                Shree L. R. Tiwari College of Engineering (Autonomous), Mira Road, Mumbai
              </p>
            </div>

            {/* Clean Horizontal Quick Navigation (No Faculty) */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm text-white/80 font-medium mb-8">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-[#FFD700] transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>•</span>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-[#FFD700] transition-colors cursor-pointer"
              >
                About
              </button>
              <span>•</span>
              <button
                onClick={() => onNavigate('team')}
                className="hover:text-[#FFD700] transition-colors cursor-pointer"
              >
                Core Team & Faculty
              </button>
              <span>•</span>
              <button
                onClick={() => onNavigate('events')}
                className="hover:text-[#FFD700] transition-colors cursor-pointer"
              >
                Events
              </button>
              <span>•</span>
              <button
                onClick={() => onNavigate('meta-summit')}
                className="text-[#FFD700] font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>META SUMMIT</span>
              </button>
              <span>•</span>
              <button
                onClick={() => onNavigate('gallery')}
                className="hover:text-[#FFD700] transition-colors cursor-pointer"
              >
                Gallery
              </button>
            </div>

            {/* Social Media & Back To Top */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-[#1C2541]/80 hover:bg-[#FFD700] hover:text-[#0A0F1D] text-white border border-[#D4AF37]/30 transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <LinkedInSvg />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-[#1C2541]/80 hover:bg-[#FFD700] hover:text-[#0A0F1D] text-white border border-[#D4AF37]/30 transition-all shadow-md"
                aria-label="GitHub"
              >
                <GitHubSvg />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-[#1C2541]/80 hover:bg-[#FFD700] hover:text-[#0A0F1D] text-white border border-[#D4AF37]/30 transition-all shadow-md"
                aria-label="Instagram"
              >
                <InstagramSvg />
              </a>

              <button
                onClick={scrollToTop}
                className="px-4 py-2.5 rounded-2xl bg-[#1C2541]/80 hover:bg-[#FFD700] hover:text-[#0A0F1D] text-white text-xs font-mono font-bold border border-[#D4AF37]/40 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <ChevronUp className="w-4 h-4" />
                <span>BACK TO TOP</span>
              </button>
            </div>

            {/* Institutional Credentials Footnote */}
            <div className="py-4 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-white/50">
              <span>• Autonomous Institute</span>
              <span>• Affiliated to Mumbai University</span>
              <span>• Approved by AICTE & DTE</span>
              <span>• NAAC & NBA Accredited IT Department</span>
              <span>• ISO 9001:2015</span>
            </div>

            {/* Bottom Copyright */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 w-full gap-2">
              <div>
                Crafted with 💻 by ITSA Undergrads • SLRTCE
              </div>
              <div className="font-mono text-[11px]">
                Copyright © 2026 ITSA SLRTCE. All Rights Reserved.
              </div>
            </div>

          </div>
        </VolumetricStudio>
      </footer>

    </div>
  );
}

function LinkedInSvg() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function GitHubSvg() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function InstagramSvg() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}
