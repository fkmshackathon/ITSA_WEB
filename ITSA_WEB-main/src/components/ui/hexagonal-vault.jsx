import React, { useRef, useEffect } from 'react';

/**
 * Hexagonal Vault Component
 * A high-tech hexagonal grid illuminated by a soft golden/midnight blue light that follows the cursor.
 */
export default function HexagonalVault({
  hexSize = 34,
  baseStrokeColor = 'rgba(28, 37, 65, 0.45)',
  highlightStrokeColor = 'rgba(212, 175, 55, 0.85)',
  glowColor = 'rgba(212, 175, 55, 0.16)',
  spotlightRadius = 260,
  ambientGlow = true,
  className = '',
  children
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;

    const handleResize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // Hexagon math
    const a = (2 * Math.PI) / 6;
    const r = hexSize;
    const hexHeight = r * Math.sqrt(3);
    const hexWidth = 2 * r;
    const horizDist = hexWidth * 0.75;
    const vertDist = hexHeight;

    let time = 0;

    const drawHexagon = (cx, cy, radius) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = a * i;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const render = () => {
      time += 0.015;

      // Smooth mouse easing
      if (!mouseRef.current.active) {
        // Subtle ambient drifting light when cursor is idle or off screen
        const ambientX = width * 0.5 + Math.cos(time * 0.8) * (width * 0.28);
        const ambientY = height * 0.45 + Math.sin(time * 0.6) * (height * 0.22);
        mouseRef.current.x += (ambientX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (ambientY - mouseRef.current.y) * 0.05;
      } else {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.15;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.15;
      }

      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // 1. Soft radial spotlight background
      const grad = ctx.createRadialGradient(mx, my, 10, mx, my, spotlightRadius * 1.3);
      grad.addColorStop(0, 'rgba(212, 175, 55, 0.18)');
      grad.addColorStop(0.35, 'rgba(11, 19, 43, 0.35)');
      grad.addColorStop(0.7, 'rgba(10, 15, 29, 0.75)');
      grad.addColorStop(1, 'rgba(10, 15, 29, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Render Hexagonal Lattice
      const cols = Math.ceil(width / horizDist) + 2;
      const rows = Math.ceil(height / vertDist) + 2;

      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const cx = col * horizDist;
          const cy = row * vertDist + ((col % 2) * vertDist) / 2;

          // Distance to mouse
          const dx = cx - mx;
          const dy = cy - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const intensity = Math.max(0, 1 - dist / spotlightRadius);

          if (intensity > 0) {
            // Illuminated cell fill
            drawHexagon(cx, cy, r * 0.94);
            const fillAlpha = intensity * 0.14;
            ctx.fillStyle = `rgba(212, 175, 55, ${fillAlpha})`;
            ctx.fill();

            // Glowing border
            ctx.lineWidth = 1 + intensity * 1.5;
            ctx.strokeStyle = `rgba(255, 215, 0, ${0.25 + intensity * 0.7})`;
            ctx.stroke();

            // Center circuit micro-dot on close nodes
            if (intensity > 0.45) {
              ctx.beginPath();
              ctx.arc(cx, cy, 1.8 * intensity, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 235, 150, ${intensity})`;
              ctx.shadowColor = '#FFD700';
              ctx.shadowBlur = 6 * intensity;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          } else {
            // Idle distant cell
            drawHexagon(cx, cy, r * 0.94);
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = baseStrokeColor;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [hexSize, baseStrokeColor, highlightStrokeColor, glowColor, spotlightRadius]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ display: 'block' }}
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
