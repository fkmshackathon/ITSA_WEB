import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * 3D Rotating ITSA Coin Component
 * Displays a realistic 3D metallic coin slowly rotating 360 degrees,
 * featuring the ITSA emblem, golden rim engraving, and depth ridges.
 */
export default function Coin3D({
  logoSrc = '/assets/logos/itsa-logo.png',
  size = 320,
  speed = 18,
  className = ''
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Generate cylindrical thickness layers for true 3D coin edge
  const edgeLayers = 14;
  const coinThickness = 16; // px total depth

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        perspective: '1200px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Surrounding Atmospheric Glowing Golden Nebula */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 via-[#FFD700]/15 to-[#0B132B]/40 blur-3xl pointer-events-none transition-all duration-700"
        style={{
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          opacity: isHovered ? 0.9 : 0.65
        }}
      />

      {/* 2. Concentric Gyroscopic Orbital Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full border border-[#D4AF37]/35 pointer-events-none"
        style={{ width: `${size * 1.28}px`, height: `${size * 1.28}px` }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFD700] shadow-[0_0_12px_#FFD700]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D4AF37]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full border border-dashed border-[#1C2541]/80 pointer-events-none"
        style={{ width: `${size * 1.15}px`, height: `${size * 1.15}px` }}
      >
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#E6C200] shadow-[0_0_8px_#E6C200]" />
      </motion.div>

      {/* 3. The 3D Rotating Coin Mesh */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          y: [-6, 6, -6],
          rotateX: [6, -6, 6]
        }}
        transition={{
          rotateY: { duration: isHovered ? speed * 0.6 : speed, repeat: Infinity, ease: 'linear' },
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="relative cursor-grab active:cursor-grabbing"
        style={{
          width: `${size * 0.82}px`,
          height: `${size * 0.82}px`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Cylindrical Depth Ridges (3D Edge) */}
        {Array.from({ length: edgeLayers }).map((_, idx) => {
          const zOffset = -coinThickness / 2 + (idx * coinThickness) / (edgeLayers - 1);
          return (
            <div
              key={idx}
              className="absolute inset-0 rounded-full border-2 pointer-events-none"
              style={{
                transform: `translateZ(${zOffset}px)`,
                borderColor: idx % 2 === 0 ? '#B8860B' : '#FFD700',
                background:
                  'radial-gradient(circle, rgba(11,19,43,0.85) 60%, rgba(212,175,55,0.7) 100%)',
                boxShadow:
                  idx === 0 || idx === edgeLayers - 1
                    ? '0 0 10px rgba(212, 175, 55, 0.4)'
                    : 'none'
              }}
            />
          );
        })}

        {/* FRONT FACE (Z = +coinThickness/2) */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden flex flex-col items-center justify-center p-3"
          style={{
            transform: `translateZ(${coinThickness / 2 + 1}px)`,
            backfaceVisibility: 'hidden',
            background:
              'radial-gradient(circle at 35% 30%, #FFF2B2 0%, #D4AF37 32%, #AA7C11 65%, #4A3305 100%)',
            boxShadow:
              'inset 0 0 0 5px #FFD700, inset 0 0 0 9px #7B5508, inset 0 0 20px rgba(0,0,0,0.65), 0 15px 35px rgba(0,0,0,0.7)'
          }}
        >
          {/* Inner Coin Recessed Ring */}
          <div
            className="w-full h-full rounded-full flex flex-col items-center justify-center relative overflow-hidden border-2 border-[#FFE885]/80"
            style={{
              background:
                'radial-gradient(circle at center, #0B132B 0%, #0A0F1D 70%, #1C2541 100%)'
            }}
          >
            {/* Fine Coin Guilloche / Circuit Texture */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(#D4AF37 1px, transparent 1px), radial-gradient(#FFD700 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                backgroundPosition: '0 0, 8px 8px'
              }}
            />

            {/* Circular Engraved Text SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none animate-spin"
              style={{ animationDuration: '45s' }}
              viewBox="0 0 200 200"
            >
              <path
                id="frontCoinPath"
                d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                fill="none"
              />
              <text
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                fill="#FFD700"
                letterSpacing="2.8"
              >
                <textPath href="#frontCoinPath" startOffset="0%">
                  ★ INFORMATION TECHNOLOGY STUDENTS ASSOCIATION • SLRTCE ★
                </textPath>
              </text>
            </svg>

            {/* Inner Gold Shield & ITSA Official Logo */}
            <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full p-2.5 bg-gradient-to-tr from-[#FFD700] via-[#FDFBF7] to-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#0B132B] p-2 flex items-center justify-center border-2 border-[#D4AF37]">
                <img
                  src={logoSrc}
                  alt="ITSA Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>

            {/* Micro Gold Nodes around edge */}
            <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shadow-[0_0_5px_#FFD700]" />
              <span className="text-[8px] font-mono font-bold tracking-widest text-[#FFD700]">
                EST. 2010
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shadow-[0_0_5px_#FFD700]" />
            </div>

            {/* Dynamic Specular Sheen (Shine reflection on front) */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%, rgba(255,215,0,0.4) 65%, rgba(0,0,0,0.5) 100%)'
              }}
            />
          </div>
        </div>

        {/* BACK FACE (Z = -coinThickness/2, rotated 180deg) */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden flex flex-col items-center justify-center p-3"
          style={{
            transform: `translateZ(-${coinThickness / 2 + 1}px) rotateY(180deg)`,
            backfaceVisibility: 'hidden',
            background:
              'radial-gradient(circle at 65% 70%, #FFF2B2 0%, #D4AF37 32%, #AA7C11 65%, #4A3305 100%)',
            boxShadow:
              'inset 0 0 0 5px #FFD700, inset 0 0 0 9px #7B5508, inset 0 0 20px rgba(0,0,0,0.65), 0 15px 35px rgba(0,0,0,0.7)'
          }}
        >
          {/* Inner Recessed Reverse Platform */}
          <div
            className="w-full h-full rounded-full flex flex-col items-center justify-center relative overflow-hidden border-2 border-[#FFE885]/80 p-4"
            style={{
              background:
                'radial-gradient(circle at center, #0B132B 0%, #0A0F1D 70%, #1C2541 100%)'
            }}
          >
            {/* Circular Engraved Reverse Text */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none animate-spin"
              style={{ animationDuration: '45s', animationDirection: 'reverse' }}
              viewBox="0 0 200 200"
            >
              <path
                id="backCoinPath"
                d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                fill="none"
              />
              <text
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                fill="#FFD700"
                letterSpacing="2.8"
              >
                <textPath href="#backCoinPath" startOffset="0%">
                  ⚡ MAKE IT HAPPEN • EXCELLENCE IN INNOVATION • 2026 ⚡
                </textPath>
              </text>
            </svg>

            {/* Back Face Monogram & Insignia */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#9E741B] flex items-center justify-center border-2 border-[#FFF2B2] shadow-[0_0_15px_rgba(255,215,0,0.5)] mb-2">
                <span className="text-xl font-mono font-black text-[#0B132B] tracking-tighter">
                  ITSA
                </span>
              </div>
              <span className="text-[11px] font-heading font-extrabold text-[#FDFBF7] tracking-wider uppercase">
                Department of IT
              </span>
              <span className="text-[8px] font-mono text-[#D4AF37] uppercase tracking-widest mt-0.5">
                SLRTCE Autonomous
              </span>
              <div className="mt-2 px-2.5 py-0.5 rounded-full bg-[#1C2541] border border-[#D4AF37]/50 text-[8px] font-mono text-[#FFF2B2]">
                NBA ACCREDITED
              </div>
            </div>

            {/* Dynamic Specular Sheen (Back) */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
              style={{
                background:
                  'linear-gradient(225deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%, rgba(255,215,0,0.4) 65%, rgba(0,0,0,0.5) 100%)'
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* 4. Bottom Dynamic Reflection Shadow */}
      <div
        className="absolute -bottom-6 w-48 h-8 rounded-full bg-[#D4AF37]/20 blur-xl pointer-events-none transition-all duration-500"
        style={{
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          opacity: isHovered ? 0.7 : 0.4
        }}
      />
    </div>
  );
}
