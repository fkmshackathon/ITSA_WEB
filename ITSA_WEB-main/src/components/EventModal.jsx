import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, Tag, Sparkles, CheckCircle2, Send } from 'lucide-react';

export default function EventModal({ event, onClose }) {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', rollNo: '', year: 'SE' });

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#FAF7F0] w-full max-w-2xl rounded-3xl border-2 border-[#E5DDCB] shadow-navy-card-glow overflow-hidden flex flex-col relative animate-slide-up max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Event Header Banner in Deep Navy */}
        <div className="relative h-48 sm:h-56 w-full bg-[#071A3A] flex-shrink-0">
          <img
            src={event.banner}
            alt={event.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A] via-[#071A3A]/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-[#071A3A] text-white transition-colors border border-white/20"
            aria-label="Close Event"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[10px] font-mono uppercase bg-[#FAF4E6] text-[#071A3A] px-2.5 py-0.5 rounded font-bold mb-1.5 inline-block border border-[#C8A962]">
              {event.tag}
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight leading-tight">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-[#E5DDCB] text-xs shadow-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C99A2E]" />
              <div>
                <div className="text-[10px] font-mono text-[#5A6B85] uppercase">Date</div>
                <div className="font-bold text-[#071A3A]">{event.date}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C99A2E]" />
              <div>
                <div className="text-[10px] font-mono text-[#5A6B85] uppercase">Duration</div>
                <div className="font-bold text-[#071A3A]">{event.duration}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <MapPin className="w-4 h-4 text-[#C99A2E]" />
              <div>
                <div className="text-[10px] font-mono text-[#5A6B85] uppercase">Venue</div>
                <div className="font-bold text-[#071A3A] truncate">{event.venue}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider mb-2">
              Program Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#5A6B85] leading-relaxed bg-white p-4 rounded-2xl border border-[#E5DDCB] shadow-sm">
              {event.longDesc || event.shortDesc}
            </p>
          </div>

          {/* Highlights */}
          {event.highlights && (
            <div>
              <h4 className="text-xs font-mono font-bold text-[#071A3A] uppercase tracking-wider mb-2.5">
                Key Agenda Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {event.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#071A3A] bg-white p-3 rounded-xl border border-[#E5DDCB] shadow-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C99A2E] flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Registration Section */}
          {event.registrationOpen ? (
            <div className="pt-4 border-t border-[#E5DDCB]">
              {registered ? (
                <div className="bg-[#FAF4E6] border-2 border-[#C8A962] p-5 rounded-2xl text-center">
                  <CheckCircle2 className="w-8 h-8 text-[#9E741B] mx-auto mb-2" />
                  <h5 className="font-heading font-bold text-sm text-[#071A3A]">
                    Registration Verified & Recorded!
                  </h5>
                  <p className="text-xs text-[#5A6B85] mt-1">
                    Your delegate pass confirmation has been sent to {formData.email || 'your registered student email'}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border-2 border-[#E5DDCB] p-5 rounded-2xl shadow-tech-card">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-[#C99A2E]" />
                    <h5 className="font-heading font-bold text-sm text-[#071A3A]">
                      Student Delegate Registration (Open)
                    </h5>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DDCB] text-[#071A3A] focus:outline-none focus:border-[#071A3A]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Student College Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DDCB] text-[#071A3A] focus:outline-none focus:border-[#071A3A]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Roll No / PRN"
                      value={formData.rollNo}
                      onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DDCB] text-[#071A3A] focus:outline-none focus:border-[#071A3A]"
                    />
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DDCB] text-[#071A3A] focus:outline-none focus:border-[#071A3A]"
                    >
                      <option value="FE">First Year (FE)</option>
                      <option value="SE">Second Year (SE)</option>
                      <option value="TE">Third Year (TE)</option>
                      <option value="BE">Final Year (BE)</option>
                      <option value="Faculty">Faculty / Research Scholar</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#071A3A] text-white text-xs font-bold hover:bg-[#0B1E40] border border-[#C99A2E]/50 transition-all flex items-center justify-center gap-2 shadow-tech-card"
                  >
                    <Send className="w-3.5 h-3.5 text-[#E5B842]" />
                    <span>Submit Free Delegate Registration</span>
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="pt-4 border-t border-[#E5DDCB] flex items-center justify-between text-xs text-[#5A6B85] font-mono bg-white p-3 rounded-xl border border-[#E5DDCB]">
              <span>Status: Successfully Completed Activity</span>
              <span className="font-bold text-[#071A3A]">SLRTCE IT Archive</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
