import React, { useEffect, useState } from 'react';

export default function BrandedLoader({ onComplete }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        onComplete();
      }, 300);
    }, 700);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F0E3] transition-opacity duration-300 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center gap-4">
        {/* Animated Gold ITSA Seal */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#C99A2E]/40 animate-ping"></div>
          <img
            src="/assets/logos/itsa-logo.png"
            alt="ITSA Emblem"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Minimal Typography */}
        <div className="flex flex-col items-center text-center">
          <span className="font-heading font-extrabold tracking-widest text-[#071A3A] text-sm uppercase">
            ITSA SLRTCE
          </span>
          <span className="text-[10px] text-[#5A6B85] tracking-wider uppercase font-mono mt-0.5">
            Department of Information Technology
          </span>
        </div>

        {/* Progress Line */}
        <div className="w-36 h-0.5 bg-[#E5DDCB] rounded-full overflow-hidden mt-1">
          <div className="h-full bg-[#C99A2E] rounded-full animate-[marquee_1s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
