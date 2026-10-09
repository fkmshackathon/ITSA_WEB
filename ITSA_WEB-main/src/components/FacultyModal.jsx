import React from 'react';
import { X, Mail, BookOpen, Briefcase, GraduationCap, ExternalLink, Award, Sparkles } from 'lucide-react';

export default function FacultyModal({ faculty, onClose }) {
  if (!faculty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#FAF7F0] w-full max-w-2xl rounded-3xl border-2 border-[#E5DDCB] shadow-navy-card-glow overflow-hidden flex flex-col relative animate-slide-up max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip in Deep Navy */}
        <div className="bg-[#071A3A] text-white p-6 relative flex items-start justify-between border-b border-[#C99A2E]/40">
          <div className="flex items-center gap-4">
            <div className="relative p-1 rounded-2xl bg-[#0B1E40] border border-[#C99A2E]/40 flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#071A3A]">
                {faculty.image ? (
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#E5B842]">
                    <GraduationCap className="w-8 h-8 opacity-80" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-[#FAF4E6] text-[#071A3A] px-2.5 py-0.5 rounded font-bold border border-[#C8A962]">
                {faculty.roleCategory}
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight mt-1">
                {faculty.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium">
                {faculty.designation}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Profile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Bio statement if available */}
          {faculty.bio && (
            <div className="bg-white p-4 rounded-2xl border border-[#E5DDCB] text-xs sm:text-sm text-[#5A6B85] leading-relaxed shadow-sm">
              {faculty.bio}
            </div>
          )}

          {/* Academic Qualifications */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#071A3A] uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4 text-[#C99A2E]" />
              <span>Academic Qualifications</span>
            </div>
            <p className="text-xs sm:text-sm text-[#071A3A] font-semibold bg-white p-3.5 rounded-2xl border border-[#E5DDCB] shadow-sm">
              {faculty.qualification}
            </p>
          </div>

          {/* Experience & Publications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-2xl bg-white border border-[#E5DDCB] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Experience Profile</span>
              </div>
              <div className="text-xs text-[#5A6B85] space-y-1">
                <div><span className="font-bold text-[#071A3A]">Teaching: </span>{faculty.experience.teaching}</div>
                {faculty.experience.industry !== "-" && (
                  <div><span className="font-bold text-[#071A3A]">Industry: </span>{faculty.experience.industry}</div>
                )}
                <div><span className="font-bold text-[#071A3A]">Total: </span>{faculty.experience.total}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E5DDCB] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#071A3A] uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4 text-[#C99A2E]" />
                <span>Research Publications</span>
              </div>
              <div className="text-xl font-heading font-extrabold text-[#071A3A]">
                {faculty.publications}
              </div>
              <p className="text-[11px] text-[#5A6B85] mt-1">
                Peer-reviewed journals, IEEE conferences, and Scopus publications.
              </p>
            </div>

          </div>

          {/* Area of Specialisation */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#071A3A] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-[#C99A2E]" />
              <span>Area of Specialisation & Research Domains</span>
            </div>
            <p className="text-xs sm:text-sm text-[#071A3A] font-medium leading-relaxed bg-white p-3.5 rounded-2xl border border-[#E5DDCB] mb-3 shadow-sm">
              {faculty.specialization}
            </p>
            {faculty.domainTags && (
              <div className="flex flex-wrap gap-2">
                {faculty.domainTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-[#FAF4E6] text-[#9E741B] px-3 py-1 rounded-full border border-[#C8A962]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Contact and Links */}
          <div className="pt-4 border-t border-[#E5DDCB] flex flex-wrap items-center justify-between gap-3">
            {faculty.email ? (
              <a
                href={`mailto:${faculty.email}`}
                className="text-xs font-bold text-[#071A3A] hover:text-[#C99A2E] flex items-center gap-1.5 font-mono bg-white px-3.5 py-2 rounded-full border border-[#E5DDCB] shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#C99A2E]" />
                <span>{faculty.email}</span>
              </a>
            ) : (
              <span className="text-xs text-[#5A6B85] font-mono">Department of IT, SLRTCE</span>
            )}

            {faculty.profileUrl && (
              <a
                href={faculty.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#071A3A] hover:text-[#C99A2E] flex items-center gap-1.5 bg-[#FAF4E6] px-4 py-2 rounded-full border border-[#C8A962]/40 shadow-sm"
              >
                <span>Institutional Google Site Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C99A2E]" />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
