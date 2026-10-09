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
 * Sophisticated Interactive Hero Technology Visual Centerpiece
 * Incorporates 8-layer animation system, interactive mouse parallax, and hover responsive states.
 */
export function HeroTechVisual() {
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
  const gridOffset = { x: mousePos.x * 10, y: mousePos.y * 10 };
  const circuitOffset = { x: mousePos.x * 16, y: mousePos.y * 16 };
  const panelOffset = { x: mousePos.x * 22, y: mousePos.y * 22 };
  const labelOffset1 = { x: mousePos.x * -24, y: mousePos.y * -24 };
  const labelOffset2 = { x: mousePos.x * 30, y: mousePos.y * 30 };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto flex items-center justify-center select-none py-6 transition-transform duration-500"
    >
      {/* Ambient Breathing Gold Glow */}
      <div 
        className={`absolute inset-0 bg-[#C99A2E]/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
          isHovered ? 'opacity-90 scale-110' : 'opacity-60 scale-100'
        }`}
      ></div>
      
      {/* LAYER 1 & 2: Background Circuit Traces with Interactive Parallax */}
      <svg
        className="absolute inset-0 w-full h-full text-[#071A3A]/20 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${gridOffset.x}px, ${gridOffset.y}px, 0)`
        }}
        viewBox="0 0 500 500"
        fill="none"
      >
        {/* Animated circuit lines */}
        <path
          d="M40 250 H150 L200 300 H270"
          stroke={isHovered ? "#C99A2E" : "currentColor"}
          strokeWidth="1.5"
          className="animate-circuit-signal"
        />
        <circle cx="40" cy="250" r="3.5" fill="#C99A2E" className="animate-pulse-node" />
        <path d="M70 160 H140 L190 210" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 2" />
        <circle cx="70" cy="160" r="3" fill="#071A3A" />
        
        {/* Right branch traces */}
        <path
          d="M460 250 H350 L300 190 H230"
          stroke={isHovered ? "#C99A2E" : "currentColor"}
          strokeWidth="1.5"
          className="animate-circuit-signal"
        />
        <circle cx="460" cy="250" r="3.5" fill="#C99A2E" className="animate-pulse-node" />
        <path d="M430 330 H360 L310 280" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 2" />
        <circle cx="430" cy="330" r="3" fill="#071A3A" />

        {/* Top/Bottom Bus lines */}
        <path d="M250 40 V120" stroke="#C99A2E" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="250" cy="40" r="4" fill="#C99A2E" className="animate-pulse-node" />
        <path d="M250 460 V380" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="250" cy="460" r="4" fill="#071A3A" />
      </svg>

      {/* Main Isometric & Layered Composition Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* LAYER 5: Floating Telemetry Chip 1 (Top-Right) */}
        <div
          className="absolute -top-3 -right-2 sm:right-2 z-30 bg-[#071A3A]/95 text-white p-3.5 rounded-2xl border border-[#C99A2E]/50 shadow-navy-card backdrop-blur-md max-w-[215px] transition-transform duration-300 ease-out cursor-default"
          style={{
            transform: `translate3d(${labelOffset1.x}px, ${labelOffset1.y}px, 0)`
          }}
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2 text-[10px] font-mono text-[#E5B842]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ITSA_CORE // ACTIVE</span>
            </span>
            <span className="text-white/40 font-bold">SLRTCE</span>
          </div>
          <div className="font-mono text-[10px] leading-relaxed space-y-1 text-white/85">
            <div><span className="text-[#C99A2E]">const</span> <span className="text-sky-300">chapter</span> = <span className="text-emerald-300">'ITSA-SLRTCE'</span>;</div>
            <div><span className="text-sky-300">itsa</span>.<span className="text-amber-200">empower</span>({'{'}</div>
            <div className="pl-2 text-white/60">nodes: <span className="text-emerald-300">'240_INTAKE'</span>,</div>
            <div className="pl-2 text-white/60">status: <span className="text-amber-300">true</span></div>
            <div>{'}'});</div>
          </div>
        </div>

        {/* LAYER 5: Floating Telemetry Chip 2 (Top-Left) */}
        <div
          className="absolute top-10 -left-2 sm:left-4 z-30 bg-white/95 text-[#071A3A] px-4 py-2.5 rounded-2xl border border-[#E5DDCB] shadow-tech-card flex items-center gap-2.5 transition-transform duration-300 ease-out cursor-default"
          style={{
            transform: `translate3d(${labelOffset2.x}px, ${labelOffset2.y}px, 0)`
          }}
        >
          <div className="w-7 h-7 rounded-xl bg-[#FAF4E6] flex items-center justify-center text-[#C99A2E] border border-[#C8A962]/40 shadow-sm">
            <span className="font-mono text-xs font-black">IT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-mono font-bold text-[#9E741B] uppercase">Department</span>
            <span className="text-xs font-extrabold text-[#071A3A] leading-tight">SLRTCE IT DEPT</span>
          </div>
        </div>

        {/* LAYER 3 & 4 & 6 & 7: Central Isometric Pedestal Container with Opposing Orbital Rings */}
        <div
          className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${panelOffset.x}px, ${panelOffset.y}px, 0)`
          }}
        >
          {/* Base Motherboard HUD Platform */}
          <div className="absolute inset-x-4 bottom-4 h-48 bg-gradient-to-br from-[#0B1E40] via-[#071A3A] to-[#051329] rounded-[36px] border-2 border-[#C99A2E]/50 shadow-navy-card-glow transform rotate-[-6deg] skew-x-[-12deg] flex items-center justify-center overflow-hidden">
            {/* Grid Texture */}
            <div className="absolute inset-0 bg-navy-grid opacity-60"></div>
            
            {/* Glowing Golden Microchip in Center */}
            <div className="relative w-36 h-36 rounded-2xl bg-[#0F2752] border border-[#C99A2E] flex items-center justify-center shadow-gold-glow">
              <div className="absolute inset-1.5 rounded-xl border border-dashed border-[#E5B842]/40"></div>
              {/* Copper Bus Pins */}
              <div className="absolute -top-2.5 inset-x-4 flex justify-between">
                {[...Array(7)].map((_, i) => (
                  <span key={i} className="w-1.5 h-2.5 bg-[#C99A2E] rounded-t-sm"></span>
                ))}
              </div>
              <div className="absolute -bottom-2.5 inset-x-4 flex justify-between">
                {[...Array(7)].map((_, i) => (
                  <span key={i} className="w-1.5 h-2.5 bg-[#C99A2E] rounded-b-sm"></span>
                ))}
              </div>
            </div>
          </div>

          {/* LAYER 4: Orbital Rings rotating slowly in opposing directions */}
          <div className="absolute w-72 h-72 rounded-full border border-[#C99A2E]/30 animate-spin-slow pointer-events-none">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#C99A2E] shadow-gold-glow"></span>
          </div>
          <div className="absolute w-56 h-56 rounded-full border border-dashed border-[#071A3A]/40 animate-spin-reverse-slow pointer-events-none">
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E5B842]"></span>
          </div>

          {/* LAYER 6: Central Elevated Breathing ITSA Seal */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            
            <div className="relative p-4 sm:p-5 rounded-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#E5DDCB] border-4 border-[#C99A2E] shadow-2xl animate-logo-breathe transition-transform duration-300">
              <img
                src="/assets/logos/itsa-logo.png"
                alt="ITSA Official Emblem"
                className="w-32 h-32 sm:w-36 sm:h-36 object-contain filter drop-shadow-md"
              />
            </div>

            {/* Glowing Base Platform Aura */}
            <div className="w-44 h-6 bg-[#C99A2E]/30 rounded-full blur-md -mt-2"></div>
          </div>

          {/* Bottom Left Connected Data Block */}
          <div className="absolute bottom-2 left-2 z-30 bg-[#071A3A] text-white px-3.5 py-2 rounded-2xl border border-[#C99A2E]/40 shadow-navy-card flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C99A2E] animate-ping"></span>
            <div className="text-[10px] font-mono leading-tight">
              <div className="text-white/60">NETWORK</div>
              <div className="text-[#E5B842] font-bold">240 INTAKE</div>
            </div>
          </div>

          {/* Bottom Right Verified Badge */}
          <div className="absolute bottom-6 right-2 z-30 bg-[#FAF4E6] text-[#071A3A] px-3.5 py-1.5 rounded-2xl border border-[#C8A962]/50 shadow-tech-card flex items-center gap-2 font-mono text-[10px] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#7D1730]"></span>
            <span>EST. 2010</span>
          </div>

        </div>

      </div>
    </div>
  );
}
