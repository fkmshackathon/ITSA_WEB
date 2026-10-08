import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, Clock, ArrowRight, ShieldCheck, Cpu, Cloud, Globe, CheckCircle2, ChevronDown, Send } from 'lucide-react';
import { metaSummitConfig } from '../data/metaSummitData';
import { CircuitCorner } from '../components/TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MetaSummitPage({ onNavigate }) {
  const containerRef = useScrollReveal();
  const [activeDay, setActiveDay] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', college: 'SLRTCE', track: 'Autonomous Systems & Applied AI', year: 'TE' });

  const handleRegister = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#F5F0E3]">
      
      {/* 1. Grand Summit Hero Banner */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#071A3A] via-[#051329] to-[#7D1730] text-white relative overflow-hidden border-b border-[#C99A2E]/40">
        <div className="absolute inset-0 bg-navy-grid opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C99A2E]/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="absolute top-4 left-4 z-0">
          <CircuitCorner className="w-24 h-24 text-[#C99A2E]/30" position="top-left" />
        </div>
        <div className="absolute bottom-4 right-4 z-0">
          <CircuitCorner className="w-24 h-24 text-[#C99A2E]/30" position="bottom-right" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl reveal-init">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C99A2E]/50 text-xs font-mono font-bold text-[#E5B842] uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#C99A2E]" />
              <span>Flagship Annual Technology Convergence • Edition {metaSummitConfig.edition}</span>
            </div>

            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#C99A2E] uppercase block mb-2">
                DEPARTMENT OF INFORMATION TECHNOLOGY PRESENTS
              </span>
              <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-[#FAF7F0] leading-none mb-6">
                META <span className="text-[#E5B842]">SUMMIT</span>
              </h1>
            </div>

            <div className="text-lg sm:text-2xl text-white/90 font-heading font-bold mb-6">
              {metaSummitConfig.theme}
            </div>

            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl mb-10">
              {metaSummitConfig.overview}
            </p>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mb-10">
              <div className="bg-[#071A3A]/90 backdrop-blur-md p-4 rounded-2xl border border-[#C99A2E]/40 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#E5B842]" />
                <div>
                  <div className="text-[10px] font-mono text-[#E5B842] uppercase">Dates</div>
                  <div className="text-xs font-bold text-white">{metaSummitConfig.date}</div>
                </div>
              </div>

              <div className="bg-[#071A3A]/90 backdrop-blur-md p-4 rounded-2xl border border-[#C99A2E]/40 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#E5B842]" />
                <div>
                  <div className="text-[10px] font-mono text-[#E5B842] uppercase">Venue</div>
                  <div className="text-xs font-bold text-white truncate">SLRTCE Main Auditorium</div>
                </div>
              </div>
            </div>

            <a
              href="#register"
              className="btn-tech inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C99A2E] to-[#E5B842] text-[#071A3A] font-heading font-extrabold text-sm hover:brightness-110 shadow-gold-glow"
            >
              <span>Register for Delegate Pass</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>
      </section>

      {/* 2. Key Numbers Strip */}
      <section className="py-10 bg-[#071A3A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {metaSummitConfig.stats.map((st, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#0B1E40] border border-[#C99A2E]/30 shadow-navy-card reveal-init" style={{ transitionDelay: `${idx * 80}ms` }}>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5B842]">
                  {st.value}
                </div>
                <div className="text-xs text-white/70 font-mono mt-1 uppercase tracking-wider">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The 4 Technology Tracks */}
      <section className="py-20 md:py-28 bg-[#F5F0E3] border-b border-[#E5DDCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-init">
            <span className="text-xs font-mono font-bold tracking-widest text-[#9E741B] uppercase bg-[#FAF4E6] px-3.5 py-1 rounded-full border border-[#C8A962]/40 shadow-sm">
              Symposium Arenas
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#071A3A] tracking-tight mt-3 mb-3">
              Four Specialized Technology Tracks
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B85]">
              Each track is structured with code demonstrations, keynote discourses from domain authorities, and competitive evaluation panels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {metaSummitConfig.tracks.map((track, idx) => (
              <div
                key={track.id}
                className="p-8 rounded-3xl bg-[#FAF7F0] border-2 border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E] flex flex-col justify-between transition-all duration-300 reveal-init hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#9E741B] bg-[#FAF4E6] px-3 py-1 rounded-full border border-[#C8A962]/40">
                      {track.code}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#071A3A] text-[#E5B842]">
                      {track.id === 'track-ai' && <Cpu className="w-5 h-5" />}
                      {track.id === 'track-cloud' && <Cloud className="w-5 h-5" />}
                      {track.id === 'track-sec' && <ShieldCheck className="w-5 h-5" />}
                      {track.id === 'track-web' && <Globe className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#071A3A] mb-2">
                    {track.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9E741B] font-bold mb-6">
                    {track.tagline}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#E5DDCB]">
                    <div className="text-[11px] font-mono font-bold text-[#5A6B85] uppercase mb-2">
                      Core Focus Modules
                    </div>
                    {track.topics.map((tp, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-[#071A3A] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#C99A2E] flex-shrink-0" />
                        <span>{tp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Complete 2-Day Timeline Schedule */}
      <section className="py-20 md:py-24 bg-[#FAF7F0] border-b border-[#E5DDCB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 reveal-init">
            <span className="text-xs font-mono font-bold tracking-widest text-[#9E741B] uppercase bg-[#FAF4E6] px-3.5 py-1 rounded-full border border-[#C8A962]/40 shadow-sm">
              Symposium Itinerary
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#071A3A] tracking-tight mt-3">
              Official Schedule & Timings
            </h2>
          </div>

          {/* Day Tabs */}
          <div className="flex items-center justify-center gap-3 mb-10 reveal-init">
            {metaSummitConfig.schedule.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDay(idx)}
                className={`btn-tech px-6 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm ${
                  activeDay === idx
                    ? 'bg-[#071A3A] text-white border border-[#C99A2E]/50 shadow-sm'
                    : 'bg-white text-[#5A6B85] hover:bg-[#FAF4E6] border border-[#E5DDCB]'
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-[#9E741B] uppercase mb-2 pb-2 border-b border-[#E5DDCB] reveal-init">
              Theme: {metaSummitConfig.schedule[activeDay].theme}
            </div>

            {metaSummitConfig.schedule[activeDay].items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E5DDCB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#C99A2E] transition-all shadow-tech-card reveal-init"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C99A2E] flex-shrink-0" />
                  <span className="text-xs font-mono font-bold text-[#071A3A] whitespace-nowrap">
                    {item.time}
                  </span>
                </div>

                <div className="flex-grow sm:px-4">
                  <h4 className="font-heading font-bold text-sm text-[#071A3A]">
                    {item.title}
                  </h4>
                </div>

                <span className="text-[10px] font-mono font-bold text-[#9E741B] bg-[#FAF4E6] px-3 py-1 rounded-full border border-[#C8A962]/40 w-max">
                  {item.type}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Delegate Registration Form */}
      <section id="register" className="py-20 md:py-28 bg-[#F5F0E3] border-b border-[#E5DDCB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#071A3A] text-white p-8 sm:p-12 rounded-3xl border-2 border-[#C99A2E]/50 shadow-navy-card-glow relative overflow-hidden reveal-init">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C99A2E]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="text-center mb-8 relative z-10">
              <span className="text-xs font-mono font-bold tracking-widest text-[#E5B842] uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                Official Delegate Desk
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mt-3">
                Register for META SUMMIT {metaSummitConfig.edition}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 mt-1">
                Free delegate entry for engineering students & faculty members. Limited auditorium seats.
              </p>
            </div>

            {registered ? (
              <div className="bg-[#0B1E40] border-2 border-[#C99A2E] p-6 rounded-2xl text-center relative z-10">
                <CheckCircle2 className="w-12 h-12 text-[#E5B842] mx-auto mb-3" />
                <h4 className="font-heading font-bold text-lg text-white">
                  Delegate Registration Confirmed!
                </h4>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your delegate badge for the <strong>{formData.track}</strong> arena has been confirmed. Please show your college ID at the registration desk on March 27.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-white block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-3.5 rounded-xl bg-[#0B1E40] border border-white/20 text-white focus:outline-none focus:border-[#C99A2E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white block mb-1">College Email ID</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. student@slrtce.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs p-3.5 rounded-xl bg-[#0B1E40] border border-white/20 text-white focus:outline-none focus:border-[#C99A2E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white block mb-1">Institution</label>
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full text-xs p-3.5 rounded-xl bg-[#0B1E40] border border-white/20 text-white focus:outline-none focus:border-[#C99A2E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white block mb-1">Academic Year</label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full text-xs p-3.5 rounded-xl bg-[#0B1E40] border border-white/20 text-white focus:outline-none focus:border-[#C99A2E]"
                    >
                      <option value="FE">FE (First Year)</option>
                      <option value="SE">SE (Second Year)</option>
                      <option value="TE">TE (Third Year)</option>
                      <option value="BE">BE (Final Year)</option>
                      <option value="Faculty">Faculty / Scholar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-white block mb-1">Primary Track Interest</label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full text-xs p-3.5 rounded-xl bg-[#0B1E40] border border-white/20 text-white focus:outline-none focus:border-[#C99A2E]"
                  >
                    <option value="Autonomous Systems & Applied AI">Track 01: Autonomous Systems & Applied AI</option>
                    <option value="Distributed Systems & Cloud Architecture">Track 02: Distributed Systems & Cloud Architecture</option>
                    <option value="Cyber Security & Infrastructure Defense">Track 03: Cyber Security & Infrastructure Defense</option>
                    <option value="Next-Gen Web & Open Innovation">Track 04: Next-Gen Web & Open Innovation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-tech w-full py-4 rounded-full bg-gradient-to-r from-[#C99A2E] to-[#E5B842] text-[#071A3A] text-sm font-heading font-extrabold hover:brightness-110 flex items-center justify-center gap-2 shadow-gold-glow mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Delegate Registration (Free)</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* 6. Frequently Asked Questions Accordion */}
      <section className="py-20 bg-[#FAF7F0] border-b border-[#E5DDCB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 reveal-init">
            <span className="text-xs font-mono font-bold tracking-widest text-[#9E741B] uppercase bg-[#FAF4E6] px-3.5 py-1 rounded-full border border-[#C8A962]/40 shadow-sm">
              Delegate Information
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#071A3A] tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {metaSummitConfig.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5DDCB] overflow-hidden transition-all shadow-tech-card reveal-init"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-heading font-bold text-sm sm:text-base text-[#071A3A] flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#C99A2E] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#5A6B85] leading-relaxed border-t border-[#E5DDCB]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

