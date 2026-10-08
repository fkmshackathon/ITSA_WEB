import React from 'react';
import { Mail, Phone, MapPin, Sparkles, Building2, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteData';

function GithubIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#071A3A] text-white pt-16 pb-12 border-t-2 border-[#C99A2E]/50 relative overflow-hidden">
      
      {/* Background Navy Grid & Circuit Glows */}
      <div className="absolute inset-0 bg-navy-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#C99A2E]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Star/Spark Graphic on the Right */}
      <div className="absolute bottom-16 right-10 opacity-20 pointer-events-none select-none hidden lg:block">
        <svg className="w-24 h-24 text-[#C99A2E]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Center: Official ITSA Gold Plinth & Emblem */}
        <div className="flex flex-col items-center justify-center text-center pb-12 border-b border-white/10">
          
          {/* Official ITSA Logo Plinth */}
          <div className="relative mb-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-2 bg-gradient-to-tr from-[#C99A2E] via-[#E5B842] to-[#7D1730] shadow-gold-glow flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#FAF7F0] p-2 flex items-center justify-center border-2 border-[#C99A2E]">
                <img
                  src="/assets/logos/itsa-logo.png"
                  alt="ITSA Official Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
            </div>
            <span className="absolute -bottom-2 inset-x-0 mx-auto w-max text-[9px] font-mono font-bold uppercase bg-[#FAF4E6] text-[#071A3A] px-2.5 py-0.5 rounded-full border border-[#C99A2E]">
              EST. 2010
            </span>
          </div>

          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-2">
            ITSA SLRTCE
          </h3>
          <p className="text-xs sm:text-sm text-[#E5B842] font-mono mt-1">
            Information Technology Students Association • Department of Information Technology
          </p>
          <p className="text-xs text-white/60 font-sans mt-0.5">
            Shree L. R. Tiwari College of Engineering (Autonomous), Mumbai
          </p>

          {/* Clean Horizontal Link Bar (No Contact, No Get Involved) */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-white/80 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-[#E5B842] transition-colors">
              Home
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('about')} className="hover:text-[#E5B842] transition-colors">
              About
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('team')} className="hover:text-[#E5B842] transition-colors">
              Team
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('faculty')} className="hover:text-[#E5B842] transition-colors">
              Faculty
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('events')} className="hover:text-[#E5B842] transition-colors">
              Events
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('meta-summit')} className="text-[#E5B842] font-bold hover:underline flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>META SUMMIT</span>
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('gallery')} className="hover:text-[#E5B842] transition-colors">
              Gallery
            </button>
          </div>

          {/* Social Channels Pill */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href={siteConfig.contact.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-[#C99A2E] hover:text-[#071A3A] text-white transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-[#C99A2E] hover:text-[#071A3A] text-white transition-all shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={siteConfig.contact.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-[#C99A2E] hover:text-[#071A3A] text-white transition-all shadow-sm"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>

        </div>

        {/* Institutional Accreditation Footnote */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-white/60 text-center">
          <span>• Autonomous Institute</span>
          <span>• Affiliated to Mumbai University</span>
          <span>• Approved by AICTE & DTE Maharashtra</span>
          <span>• NAAC & NBA Accredited IT Program</span>
          <span>• ISO 9001:2015</span>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-3">
          <div>
            Made with 💻 by ITSA Undergrads
          </div>
          <div className="text-center sm:text-right font-mono text-[11px]">
            Copyright © 2026 ITSA SLRTCE. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
