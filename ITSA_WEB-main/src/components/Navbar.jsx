import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenMetaSummit }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky shadow
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean navigation list: HOME, ABOUT, TEAM, EVENTS, META SUMMIT, GALLERY
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'events', label: 'Events' },
    { id: 'meta-summit', label: 'META SUMMIT', isSpecial: true },
    { id: 'gallery', label: 'Gallery' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar at Very Top */}
      <div className="fixed top-0 inset-x-0 h-[2.5px] bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#C99A2E] via-[#E5B842] to-[#7D1730] transition-all duration-150 ease-out shadow-gold-glow"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Top Institutional Notification Banner */}
      <div className="bg-[#071A3A] text-[#FAF7F0]/85 text-[11px] sm:text-xs py-1.5 px-4 tracking-wide font-medium border-b border-[#C99A2E]/30 select-none z-40 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C99A2E] animate-pulse"></span>
            <span className="font-semibold text-white">Department of Information Technology</span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-white/80">Shree L. R. Tiwari College of Engineering (Autonomous)</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[11px] text-[#E5B842]/90 font-mono">
            <span>AICTE Approved</span>
            <span className="text-white/30">•</span>
            <span>NAAC & NBA Accredited</span>
            <span className="text-white/30">•</span>
            <span>Mumbai University</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F0E3]/95 backdrop-blur-md shadow-tech-card py-2.5 border-b border-[#E5DDCB]'
            : 'bg-[#F5F0E3] py-3.5 border-b border-[#E5DDCB]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity: SLRTCE Seal + ITSA Logo Lockup */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            {/* ITSA Official Gold Logo */}
            <div className="relative flex items-center justify-center p-1 rounded-full bg-white/80 border border-[#C8A962]/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logos/itsa-logo.png"
                alt="ITSA Official Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              />
            </div>

            {/* Separator Line */}
            <div className="h-7 w-px bg-[#071A3A]/20"></div>

            {/* SLRTCE College Official Logo */}
            <div className="relative flex items-center justify-center">
              <img
                src="/assets/logos/slrtce-logo.png"
                alt="SLRTCE College Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text Lockup */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-[#071A3A]">
                  ITSA SLRTCE
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#5A6B85] hidden sm:block tracking-tight font-medium">
                Information Technology Students Association
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Clean 7 items) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              if (link.isSpecial) {
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`btn-tech relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-[#7D1730] text-white shadow-sm'
                        : 'bg-[#FAF4E6] text-[#7D1730] hover:bg-[#7D1730] hover:text-white border border-[#C8A962]/40'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C99A2E]" />
                    <span>{link.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-ping"></span>
                  </button>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center justify-center ${
                    isActive
                      ? 'text-[#071A3A] font-bold bg-[#FAF4E6] border border-[#C8A962]/30 shadow-sm'
                      : 'text-[#5A6B85] hover:text-[#071A3A] hover:bg-[#FAF7F0]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#C99A2E] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick('meta-summit')}
              className="px-3 py-1.5 rounded-full bg-[#071A3A] text-white border border-[#C8A962]/40 text-xs font-bold flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-[#C99A2E]" />
              <span>Summit</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#071A3A] hover:bg-[#FAF7F0] border border-[#E5DDCB] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-50 bg-[#F5F0E3] lg:hidden flex flex-col p-6 animate-fade-in overflow-y-auto border-t border-[#E5DDCB]">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl text-left font-heading text-base font-bold transition-all ${
                    link.isSpecial
                      ? 'bg-[#FAF4E6] text-[#7D1730] border border-[#C8A962]/50'
                      : isActive
                      ? 'bg-[#071A3A] text-white'
                      : 'text-[#071A3A] hover:bg-[#FAF7F0]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {link.isSpecial && <Sparkles className="w-4 h-4 text-[#C99A2E]" />}
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#C99A2E]' : 'text-[#808782]'}`} />
                </button>
              );
            })}
          </div>

          {/* Mobile Bottom Info Card */}
          <div className="mt-8 p-4 rounded-2xl bg-white border border-[#E5DDCB] flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-2">
              <img src="/assets/logos/slrtce-logo.png" alt="SLRTCE" className="w-5 h-5 object-contain" />
              <span className="text-xs font-bold text-[#071A3A]">Department of Information Technology</span>
            </div>
            <p className="text-[11px] text-[#5A6B85]">
              Shree L. R. Tiwari Educational Campus, Mira Road–East, Thane. Affiliated to Mumbai University.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
