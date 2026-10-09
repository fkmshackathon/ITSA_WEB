import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Metal and Grain SVG textures for photorealistic lighting bounce
const METAL_NOISE =
  'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")';
const GRAIN_NOISE =
  'url("data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22g%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23g)%22/%3E%3C/svg%3E")';

function Room({
  backWall = {
    tl: [18, 8],
    tr: [82, 8],
    br: [82, 74],
    bl: [18, 74],
  },
  lightsOn = true,
  intensity = 1,
  lightColor = '255,215,0', // Royal Gold spotlight RGB
  spots = [20, 35, 50, 65, 80],
  vignette = 0.65,
  isFlickering = false,
  className = '',
}) {
  const { tl, tr, br, bl } = backWall;
  const poly = useMemo(
    () => (pts) => `polygon(${pts.map(([x, y]) => `${x}% ${y}%`).join(', ')})`,
    []
  );
  const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden bg-[#070B18] pointer-events-none ${className}`}
    >
      {/* 1. Back Wall Geometry */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([tl, tr, br, bl]),
          background:
            'linear-gradient(to bottom, rgba(14,21,43,1) 0%, rgba(7,11,24,1) 100%)',
        }}
      />

      {/* 2. Ceiling Geometry */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([[0, 0], [100, 0], tr, tl]),
          background:
            'linear-gradient(to bottom, rgba(3,5,12,1) 0%, rgba(10,15,30,0.9) 100%)',
        }}
      />

      {/* 3. Left Wall Geometry */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([[0, 0], tl, bl, [0, 100]]),
          background:
            'linear-gradient(to right, rgba(5,8,18,1) 0%, rgba(11,19,43,1) 75%, rgba(18,28,58,1) 100%)',
        }}
      />

      {/* 4. Right Wall Geometry */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([[100, 0], tr, br, [100, 100]]),
          background:
            'linear-gradient(to left, rgba(5,8,18,1) 0%, rgba(11,19,43,1) 75%, rgba(18,28,58,1) 100%)',
        }}
      />

      {/* 5. Floor Geometry */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: poly([[0, 100], [100, 100], br, bl]),
          background:
            'linear-gradient(to top, rgba(11,19,43,1) 0%, rgba(5,8,18,1) 100%)',
        }}
      />

      {/* SVG Perspective Seam Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
        <defs>
          <linearGradient id="goldBaseGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="30%" stopColor="#FFD700" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#FFD700" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldVGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1={`${bl[0]}%`}
          y1={`${bl[1]}%`}
          x2={`${br[0]}%`}
          y2={`${br[1]}%`}
          stroke="rgba(212,175,55,0.3)"
          strokeWidth="4"
          style={{ filter: 'blur(3px)' }}
        />
        <line
          x1={`${bl[0]}%`}
          y1={`${bl[1]}%`}
          x2={`${br[0]}%`}
          y2={`${br[1]}%`}
          stroke="url(#goldBaseGrad)"
          strokeWidth="1.2"
        />
        <line
          x1={`${tl[0]}%`}
          y1={`${tl[1]}%`}
          x2={`${bl[0]}%`}
          y2={`${bl[1]}%`}
          stroke="url(#goldVGrad)"
          strokeWidth="1"
        />
        <line
          x1={`${tr[0]}%`}
          y1={`${tr[1]}%`}
          x2={`${br[0]}%`}
          y2={`${br[1]}%`}
          stroke="url(#goldVGrad)"
          strokeWidth="1"
        />
      </svg>

      {/* 6. Dynamic Radial Light Projections on Walls and Floor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 15,
          opacity: lightsOn ? intensity : 0,
          transition: isFlickering ? 'none' : `opacity 700ms ${EASE}`,
          mixBlendMode: 'screen',
          willChange: 'opacity',
        }}
      >
        {/* Back wall beam spots */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: poly([tl, tr, br, bl]),
            background: spots
              .map(
                (x) =>
                  `radial-gradient(ellipse 30% 50% at ${x}% 65%, rgba(${lightColor},0.22) 0%, transparent 70%)`
              )
              .join(', '),
          }}
        />
        {/* Floor bounce spots */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: poly([[0, 100], [100, 100], br, bl]),
            background: spots
              .map(
                (x) =>
                  `radial-gradient(ellipse 42% 35% at ${x}% 82%, rgba(${lightColor},0.16) 0%, transparent 65%)`
              )
              .join(', '),
          }}
        />
      </div>

      {/* 7. Volumetric Light Cones / Beams (High-Performance Shader-like Rendering) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 16, mixBlendMode: 'screen' }}
      >
        {spots.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: lightsOn ? intensity : 0 }}
            transition={
              isFlickering
                ? { duration: 0 }
                : { delay: i * 0.12, duration: 0.8, ease: 'easeInOut' }
            }
            className="absolute -translate-x-1/2 pointer-events-none"
            style={{
              left: `${pos}%`,
              top: '4%',
              width: '320px',
              height: '85vh',
              background: `conic-gradient(from 170deg at 50% 0%, transparent 0deg, rgba(${lightColor},0.28) 10deg, rgba(${lightColor},0.42) 20deg, rgba(${lightColor},0.28) 30deg, transparent 40deg)`,
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 65%, transparent 100%)',
              filter: 'blur(4px)',
              mixBlendMode: 'screen',
              willChange: 'opacity',
            }}
          />
        ))}
      </div>

      {/* 8. Studio Overhead Physical Lamp Housings */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 31 }}
      >
        {spots.map((pos, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              left: `${pos}%`,
              top: '1.5%',
              transform: 'translate(-50%, -4px)',
            }}
          >
            {/* Ceiling Mounting Bracket */}
            <div
              className="w-[14px] h-[34px] rounded-sm border border-zinc-900 shadow-[0_5px_10px_rgba(0,0,0,0.9),inset_0_0_4px_rgba(255,255,255,0.5)] relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(to right, #444 0%, #D4AF37 35%, #888 60%, #222 100%)',
              }}
            >
              <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1)]" />
              <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-zinc-950 rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,1)]" />
            </div>

            {/* Pivot Swivel Neck */}
            <div className="w-[8px] h-[18px] bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-950 border-x border-black relative">
              <div
                className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border border-zinc-900 shadow-[0_4px_8px_rgba(0,0,0,1)]"
                style={{
                  background: 'radial-gradient(circle at top left, #D4AF37, #111)',
                }}
              />
            </div>

            {/* Industrial Spotlight Canister & Lens */}
            <div className="relative mt-[6px] w-[54px] h-[64px] flex justify-center">
              <div
                className="absolute inset-0 rounded-b-2xl rounded-t-sm border border-black shadow-[0_20px_30px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-evenly"
                style={{
                  background:
                    'linear-gradient(to right, #0B132B 0%, #1C2541 35%, #D4AF37 55%, #1C2541 75%, #000 100%)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none"
                  style={{ backgroundImage: METAL_NOISE }}
                />
                <div className="w-full h-[2px] bg-black/90 shadow-[0_1px_0_rgba(255,255,255,0.15)] z-10" />
                <div className="w-full h-[2px] bg-black/90 shadow-[0_1px_0_rgba(255,255,255,0.15)] z-10" />
                <div className="w-full h-[2px] bg-black/90 shadow-[0_1px_0_rgba(255,255,255,0.15)] z-10" />
              </div>

              {/* Glowing High-Power Xenon/Gold Lens Ring */}
              <div
                className="absolute bottom-[-6px] w-[58px] h-[18px] rounded-[50%] border-2 border-zinc-900 shadow-[0_10px_15px_rgba(0,0,0,1)] flex items-center justify-center z-10 overflow-hidden"
                style={{
                  background: 'radial-gradient(ellipse at center, #333, #000)',
                }}
              >
                <div
                  className="w-[34px] h-[10px] rounded-[50%] transition-all duration-700"
                  style={{
                    background: lightsOn ? '#FFF2B2' : '#222',
                    boxShadow: lightsOn
                      ? '0 0 24px 10px rgba(255,215,0,0.95), inset 0 0 8px #FFD700'
                      : 'inset 0 2px 5px rgba(0,0,0,0.9)',
                  }}
                />
              </div>

              {/* Barn Door Flaps */}
              <div
                className="absolute bottom-[-18px] w-[46px] h-[20px] border border-black shadow-[0_15px_15px_rgba(0,0,0,0.8)] origin-top z-20 flex justify-center"
                style={{
                  transform: 'rotateX(-45deg)',
                  background: 'linear-gradient(to bottom, #1C2541, #050505)',
                }}
              />
              <div
                className="absolute bottom-[-6px] left-[-6px] w-[14px] h-[22px] bg-zinc-900 border border-black origin-right z-10 shadow-[5px_0_10px_rgba(0,0,0,0.5)]"
                style={{ transform: 'rotateY(-55deg) skewY(15deg)' }}
              />
              <div
                className="absolute bottom-[-6px] right-[-6px] w-[14px] h-[22px] bg-zinc-900 border border-black origin-left z-10 shadow-[-5px_0_10px_rgba(0,0,0,0.5)]"
                style={{ transform: 'rotateY(55deg) skewY(-15deg)' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 9. Top Truss Shadow */}
      <div
        className="absolute pointer-events-none w-full h-[80px] bg-gradient-to-b from-black/80 to-transparent blur-xl"
        style={{ zIndex: 29, top: '2%', left: 0 }}
      />

      {/* 10. Vignette Edge Falloff */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 20,
          background: `radial-gradient(ellipse 90% 80% at 50% 45%,
            transparent 50%,
            rgba(5,8,18,${vignette}) 100%)`,
        }}
      />

      {/* 11. Subtle Cinematic Film Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 25,
          opacity: 0.05,
          mixBlendMode: 'screen',
          backgroundImage: GRAIN_NOISE,
          backgroundSize: '256px 256px',
        }}
      />
    </div>
  );
}

export const VolumetricStudio = ({
  className = '',
  children,
}) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [isFlickering, setIsFlickering] = useState(true);

  useEffect(() => {
    let mounted = true;
    const runFlicker = async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      await sleep(500);
      if (!mounted) return;
      setLightsOn(true);
      await sleep(100);
      setLightsOn(false);
      await sleep(250);
      setLightsOn(true);
      await sleep(60);
      setLightsOn(false);
      await sleep(150);
      setLightsOn(true);
      await sleep(40);
      setLightsOn(false);
      await sleep(60);
      setLightsOn(true);
      await sleep(40);
      setLightsOn(false);
      await sleep(350);
      if (!mounted) return;
      setIsFlickering(false);
      setLightsOn(true);
    };
    runFlicker();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      className={cn(
        'relative w-full min-h-[640px] bg-[#070B18] overflow-hidden font-sans border-t-2 border-[#D4AF37]/50',
        className
      )}
    >
      <Room
        lightsOn={lightsOn}
        intensity={1}
        lightColor="255,215,0"
        spots={[32, 50, 68]}
        isFlickering={isFlickering}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
};
export default VolumetricStudio;
