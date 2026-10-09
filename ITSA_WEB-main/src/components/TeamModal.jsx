import React from 'react';
import { X, Mail, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#FCFAF6] w-full max-w-2xl rounded-3xl border-2 border-[#E5DDCB] shadow-navy-card-glow overflow-hidden flex flex-col md:flex-row relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/90 text-[#071A3A] hover:bg-[#071A3A] hover:text-white transition-colors border border-[#E5DDCB] shadow-sm"
          aria-label="Close Member Profile"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Portrait Image */}
        <div className="md:w-5/12 h-64 md:h-auto relative bg-[#071A3A]">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/80 via-transparent to-transparent md:hidden"></div>
          <div className="absolute bottom-3 left-4 text-white md:hidden">
            <span className="text-[10px] font-mono uppercase bg-[#FAF4E6] text-[#071A3A] px-2.5 py-0.5 rounded font-bold border border-[#C8A962]">
              {member.role}
            </span>
            <h3 className="font-heading font-extrabold text-lg mt-1">{member.name}</h3>
          </div>
        </div>

        {/* Right: Detailed Content */}
        <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
          <div>
            <div className="hidden md:flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-[#9E741B] bg-[#FAF4E6] px-2.5 py-0.5 rounded border border-[#C8A962]/40 uppercase">
                {member.badge}
              </span>
              <span className="text-xs font-mono text-[#5A6B85]">ID: {member.index}</span>
            </div>

            <h3 className="hidden md:block font-heading font-extrabold text-2xl text-[#071A3A] tracking-tight mb-1">
              {member.name}
            </h3>

            <div className="text-sm font-bold text-[#071A3A] mb-2 font-mono">
              {member.role}
            </div>

            <p className="text-xs font-medium text-[#5A6B85] mb-4 pb-3 border-b border-[#E5DDCB]">
              {member.department}
            </p>

            {/* Comprehensive Bio */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#071A3A] uppercase tracking-wider font-mono mb-1.5">
                Executive Profile
              </h4>
              <p className="text-xs text-[#5A6B85] leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Focus Areas */}
            {member.focusAreas && (
              <div className="mb-5">
                <h4 className="text-xs font-bold text-[#071A3A] uppercase tracking-wider font-mono mb-2">
                  Key Focus Areas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {member.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-[#FAF7F0] text-[#071A3A] px-2.5 py-1 rounded-full border border-[#E5DDCB]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social / Email Links */}
          <div className="pt-4 border-t border-[#E5DDCB] flex items-center justify-between">
            <a
              href={`mailto:${member.email}`}
              className="text-xs font-semibold text-[#071A3A] hover:text-[#C99A2E] flex items-center gap-1.5 font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-[#C99A2E]" />
              <span>{member.email}</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white text-[#071A3A] hover:bg-[#071A3A] hover:text-white transition-colors border border-[#E5DDCB] shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white text-[#071A3A] hover:bg-[#071A3A] hover:text-white transition-colors border border-[#E5DDCB] shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
