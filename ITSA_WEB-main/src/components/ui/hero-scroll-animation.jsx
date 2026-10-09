import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Quote, Star, Sparkles, Award, ShieldCheck } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Aryan Sharma',
    role: 'Software Engineer @ Oracle',
    batch: 'Class of 2024 • Former President',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    quote:
      'Leading ITSA taught me how to architect production-grade software and mobilize 200+ developers during high-stakes hackathons. It was the defining catalyst for my engineering career.',
    tags: ['Distributed Systems', 'Leadership', 'Hackathons'],
    stars: 5
  },
  {
    name: 'Riya Desai',
    role: 'Cloud Architect Intern @ AWS',
    batch: 'Class of 2025 • Technical Lead',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
    quote:
      'From hosting Meta Summit to weekly architectural deep dives, ITSA transforms curious students into battle-tested engineers ready for top tech enterprises.',
    tags: ['AWS Cloud', 'DevOps', 'Meta Summit'],
    stars: 5
  },
  {
    name: 'Dr. Sunita Rawat',
    role: 'Faculty Advisor & Associate Professor',
    batch: 'SLRTCE Department of IT',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    quote:
      'The sheer dedication of ITSA student leaders to bridge textbook theory with industry excellence is remarkable. Their initiatives consistently produce department toppers.',
    tags: ['Pedagogy', 'Mentorship', 'Accreditation'],
    stars: 5
  },
  {
    name: 'Kunal Mehta',
    role: 'Full Stack Engineer @ FinTech Labs',
    batch: 'Class of 2026 • SIH Winner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    quote:
      'The 24-hour coding sprints and hands-on guidance from senior ITSA members provided the exact momentum our team needed to conquer national-level competitions.',
    tags: ['Full Stack', 'SIH 2025', 'Web3'],
    stars: 5
  }
];

function Section1({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 0.45], [1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 0.45], [0, -3]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.2]);

  return (
    <motion.section
      style={{ scale, rotate, opacity }}
      className="sticky top-0 h-screen bg-[#FDFBF7] text-slate-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden z-10 border-b border-[#E5DDCB]"
    >
      {/* Background cream grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#071A3A0d_1px,transparent_1px),linear-gradient(to_bottom,#071A3A0d_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Ambient gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF4E6] border border-[#C8A962]/50 text-xs font-mono font-bold text-[#9E741B] mb-6 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-[#C99A2E] animate-pulse" />
        <span className="tracking-widest uppercase">COMMUNITY & ALUMNI VOICES</span>
      </div>

      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-center tracking-tight leading-[1.1] mb-6 max-w-4xl text-[#071A3A]">
        Shaping Journeys. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E741B] via-[#C99A2E] to-[#E5B842]">
          Powering Futures.
        </span>
      </h2>

      <p className="text-base sm:text-lg text-[#323F52] max-w-2xl text-center mb-10 font-normal leading-relaxed">
        Discover how the Information Technology Student Association empowers engineers to lead top tech companies, win national hackathons, and build impactful systems.
      </p>

      {/* Metric Highlights Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full">
        <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E5DDCB] shadow-sm text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#071A3A] font-heading">500+</div>
          <div className="text-[11px] font-mono text-[#5A6B85] uppercase mt-0.5">Engineers Mentored</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E5DDCB] shadow-sm text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#071A3A] font-heading">15+</div>
          <div className="text-[11px] font-mono text-[#5A6B85] uppercase mt-0.5">Podium Trophies</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E5DDCB] shadow-sm text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#071A3A] font-heading">100%</div>
          <div className="text-[11px] font-mono text-[#5A6B85] uppercase mt-0.5">Student Driven</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E5DDCB] shadow-sm text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#C99A2E] font-heading">16 LPA+</div>
          <div className="text-[11px] font-mono text-[#5A6B85] uppercase mt-0.5">Top Placement</div>
        </div>
      </div>

      <div className="mt-8 text-xs font-mono text-[#9E741B] flex items-center gap-2 font-bold">
        <span>Scroll down to explore testimonials</span>
        <span className="animate-bounce">↓</span>
      </div>
    </motion.section>
  );
}

function Section2({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0.35, 1], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0.35, 1], [3, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative min-h-screen bg-[#FDFBF7] text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-20 border-b border-[#E5DDCB]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#071A3A08_1px,transparent_1px),linear-gradient(to_bottom,#071A3A08_1px,transparent_1px)] bg-[size:54px_54px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E5DDCB] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#9E741B] uppercase tracking-wider mb-2 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#C99A2E]" />
              <span>Verified Testimonials</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#071A3A] tracking-tight">
              What Our Community Says
            </h3>
          </div>
          <p className="text-sm text-[#5A6B85] max-w-md mt-4 md:mt-0 font-sans">
            Hear directly from graduates, interns, student leaders, and faculty who have experienced the transformative ecosystem of ITSA.
          </p>
        </div>

        {/* 4 Testimonials Grid in Ivory Light */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#FCFAF6] border-2 border-[#E5DDCB] shadow-tech-card hover:border-[#C99A2E] flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#C99A2E]">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C99A2E]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#071A3A]/20 group-hover:text-[#C99A2E]/60 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-[#323F52] font-normal leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info & Tags */}
              <div className="pt-6 border-t border-[#E5DDCB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C99A2E] shadow-sm"
                  />
                  <div>
                    <h4 className="text-base font-extrabold text-[#071A3A] group-hover:text-[#C99A2E] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs font-mono font-bold text-[#9E741B]">{item.role}</p>
                    <p className="text-[11px] text-[#5A6B85]">{item.batch}</p>
                  </div>
                </div>

                {/* Micro tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-[10px] font-mono font-bold text-[#9E741B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function HeroScrollAnimation() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className="relative bg-[#FDFBF7]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
}
