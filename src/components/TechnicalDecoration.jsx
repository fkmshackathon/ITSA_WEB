import React, { useState, useRef, useEffect } from 'react';

/**
 * Circuit Corner Decoration SVG
 */
export function CircuitCorner({ className = "w-16 h-16 text-[#071A3A]/25", position = "top-left" }) {
  const getTransform = () => {
    switch (position) {
      case "top-right":
        return "scale-x-[-1]";
      case "bottom-left":
        return "scale-y-[-1]";
      case "bottom-right":
        return "scale-[-1]";
      default:
        return "";
    }
  };

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none transition-transform duration-500 ${getTransform()} ${className}`}
    >
      {/* Outer corner trace */}
      <path
        d="M2 32V8C2 4.68629 4.68629 2 8 2H32"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {/* Branching circuit with node */}
      <path
        d="M12 48V20C12 15.5817 15.5817 12 20 12H48"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="48" cy="12" r="2.5" fill="#C99A2E" />
      <circle cx="12" cy="48" r="2.5" fill="#C99A2E" />
      <circle cx="2" cy="32" r="1.75" fill="currentColor" />
      <circle cx="32" cy="2" r="1.75" fill="currentColor" />
      <path d="M22 22L26 26" stroke="#C99A2E" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Horizontal Circuit Divider with gold center node
 */
export function CircuitDivider({ className = "my-6 text-[#071A3A]/20" }) {
  return (
    <div className={`relative flex items-center justify-center w-full ${className}`}>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-current to-transparent"></div>
      <div className="mx-4 flex items-center gap-1.5 text-[#C99A2E]">
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
        <span className="w-2.5 h-2.5 rounded-full border-2 border-current bg-[#F5F0E3]"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
      </div>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-current to-transparent"></div>
    </div>
  );
}

/**
 * Section Title Header with Reference Styling
 */
export function SectionHeader({
  badge,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  subtitle,
  centered = true,
  dark = false
}) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 md:mb-16 relative z-10`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3.5 bg-[#FAF4E6] text-[#9E741B] border border-[#C8A962]/40 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] ${
          dark ? 'text-white' : 'text-[#071A3A]'
        }`}
      >
        {titlePrefix}{' '}
        {titleHighlight && (
          <span className="text-[#C99A2E] relative inline-block">
            {titleHighlight}
          </span>
        )}{' '}
        {titleSuffix}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base mt-3.5 font-normal leading-relaxed ${
            dark ? 'text-white/75' : 'text-[#5A6B85]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * Unified Art-Directed Hero Technology Centerpiece ("The ITSA Core Emblem")
 * Single cohesive engineered object with multi-depth parallax, concentric precision orbital tracks,
 * gold architectural lighting, and scroll-responsive scaling.
 */
export function HeroTechVisual({ scrollProgress = 0 }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse move parallax handler
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Parallax offsets based on depth layers
  const baseOffset = { x: mousePos.x * 12, y: mousePos.y * 12 };
  const midOffset = { x: mousePos.x * 20, y: mousePos.y * 20 };
  const emblemOffset = { x: mousePos.x * 28, y: mousePos.y * 28 };
  const orbitOffset = { x: mousePos.x * -16, y: mousePos.y * -16 };

  // Scroll exit transformation values
  const scrollScale = Math.max(0.85, 1 - scrollProgress * 0.25);
  const scrollOpacity = Math.max(0.4, 1 - scrollProgress * 0.8);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto flex items-center justify-center select-none py-8 transition-transform duration-700 ease-out"
      style={{
        transform: `scale(${scrollScale})`,
        opacity: scrollOpacity
      }}
    >
      {/* 1. Ambient Warm Gold & Deep Navy Volumetric Glow */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-[#071A3A]/10 via-[#C99A2E]/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
          isHovered ? 'opacity-90 scale-110' : 'opacity-60 scale-100'
        }`}
      ></div>
      
      {/* 2. Precision Architectural Circuit Grid & Coordinate Lines */}
      <svg
        className="absolute inset-0 w-full h-full text-[#071A3A]/15 pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${baseOffset.x}px, ${baseOffset.y}px, 0)`
        }}
        viewBox="0 0 500 500"
        fill="none"
      >
        {/* Concentric Engineering Calibration Circles */}
        <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" opacity="0.6" />
        <circle cx="250" cy="250" r="190" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="250" cy="250" r="140" stroke="#C99A2E" strokeWidth="1.25" strokeDasharray="6 8" opacity="0.5" />
        
        {/* Subtle Cardinal Alignment Lines */}
        <line x1="20" y1="250" x2="100" y2="250" stroke="#C99A2E" strokeWidth="1.25" />
        <circle cx="20" cy="250" r="3" fill="#C99A2E" />
        <line x1="400" y1="250" x2="480" y2="250" stroke="#C99A2E" strokeWidth="1.25" />
        <circle cx="480" cy="250" r="3" fill="#C99A2E" />
        <line x1="250" y1="20" x2="250" y2="100" stroke="currentColor" strokeWidth="1.25" />
        <line x1="250" y1="400" x2="250" y2="480" stroke="currentColor" strokeWidth="1.25" />
        
        {/* Corner Precision Ticks */}
        <path d="M 80 80 L 100 80 L 100 100" stroke="currentColor" strokeWidth="1.25" fill="none" opacity="0.4" />
        <path d="M 420 80 L 400 80 L 400 100" stroke="currentColor" strokeWidth="1.25" fill="none" opacity="0.4" />
        <path d="M 80 420 L 100 420 L 100 400" stroke="currentColor" strokeWidth="1.25" fill="none" opacity="0.4" />
        <path d="M 420 420 L 400 420 L 400 400" stroke="currentColor" strokeWidth="1.25" fill="none" opacity="0.4" />
      </svg>

      {/* 3. Layered Isometric Pedestal & Rotating Orbital Rings */}
      <div 
        className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${midOffset.x}px, ${midOffset.y}px, 0)`
        }}
      >
        {/* Deep Navy Architectural Base Plinth */}
        <div className="absolute inset-x-6 bottom-4 h-48 bg-gradient-to-br from-[#0B1E40] via-[#071A3A] to-[#051329] rounded-[40px] border-2 border-[#C99A2E]/60 shadow-navy-card-glow transform rotate-[-4deg] skew-x-[-8deg] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rotate-[-2deg] group-hover:scale-105">
          {/* Internal Navy Blueprint Mesh */}
          <div className="absolute inset-0 bg-navy-grid opacity-70"></div>
          
          {/* Subtle Golden Core Chamber */}
          <div className="relative w-40 h-40 rounded-2xl bg-[#0F2752]/80 border border-[#C99A2E]/80 flex items-center justify-center shadow-gold-glow">
            <div className="absolute inset-2 rounded-xl border border-dashed border-[#E5B842]/40"></div>
            {/* Precision Micro Copper Bus Ticks */}
            <div className="absolute -top-2 inset-x-6 flex justify-between">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="w-1.5 h-2 bg-[#C99A2E] rounded-t-sm"></span>
              ))}
            </div>
            <div className="absolute -bottom-2 inset-x-6 flex justify-between">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="w-1.5 h-2 bg-[#C99A2E] rounded-b-sm"></span>
              ))}
            </div>
          </div>
        </div>

        {/* Outer Fine Gold Orbital Track */}
        <div 
          className="absolute w-72 h-72 rounded-full border border-[#C99A2E]/40 animate-spin-slow pointer-events-none"
          style={{
            transform: `translate3d(${orbitOffset.x}px, ${orbitOffset.y}px, 0)`
          }}
        >
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#E5B842] shadow-gold-glow"></span>
        </div>

        {/* Inner Counter-Rotating Hairline Track */}
        <div 
          className="absolute w-56 h-56 rounded-full border border-dashed border-[#071A3A]/30 animate-spin-reverse-slow pointer-events-none"
        >
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C99A2E]"></span>
        </div>

        {/* 4. Central Elevated Embossed ITSA Official Emblem */}
        <div 
          className="relative z-20 flex flex-col items-center justify-center transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${emblemOffset.x}px, ${emblemOffset.y}px, 0)`
          }}
        >
          {/* Emblem Medallion with Gold Bezel Frame */}
          <div className="relative p-5 sm:p-6 rounded-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#E5DDCB] border-4 border-[#C99A2E] shadow-2xl animate-logo-breathe transition-transform duration-500 group-hover:scale-105">
            <img
              src="/assets/logos/itsa-logo.png"
              alt="ITSA Official Emblem"
              className="w-32 h-32 sm:w-36 sm:h-36 object-contain filter drop-shadow-md"
            />
          </div>

          {/* Glowing Base Platform Shadow */}
          <div className="w-48 h-6 bg-[#C99A2E]/35 rounded-full blur-md -mt-2"></div>
        </div>

        {/* 5. Minimal Editorial Archival Marker (Bottom Right) */}
        <div className="absolute bottom-2 right-4 z-30 bg-[#FAF4E6] text-[#071A3A] px-3.5 py-1.5 rounded-xl border border-[#C8A962]/50 shadow-sm flex items-center gap-2 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7D1730]"></span>
          <span>EST. 2010</span>
        </div>

      </div>
    </div>
  );
}
