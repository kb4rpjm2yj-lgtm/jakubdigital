"use client";

import { useEffect, useRef } from "react";

/**
 * Mosazná barva jisker se čte z CSS proměnné --color-brass (definovaná
 * v globals.css, hodnota = token antique-brass), aby se hex hodnota
 * neopakovala v JS kódu.
 */
function hexToRgb(hex: string): [number, number, number] {
  let value = hex.replace("#", "").trim();
  if (value.length === 3) {
    value = value
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const parsed = parseInt(value, 16);
  if (value.length !== 6 || Number.isNaN(parsed)) return [184, 131, 74];
  return [(parsed >> 16) & 0xff, (parsed >> 8) & 0xff, parsed & 0xff];
}

export default function SparkParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const [brassR, brassG, brassB] = hexToRgb(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-brass")
        .trim() || "#B8834A",
    );
    const brass = (alpha: number) =>
      `rgba(${brassR}, ${brassG}, ${brassB}, ${alpha})`;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number; y: number; vx: number; vy: number; size: number;
      opacity: number; life: number; maxLife: number;
    }[] = [];

    const MAX_PARTICLES = 15;

    function spawnParticle() {
      if (particles.length >= MAX_PARTICLES) return;
      if (!canvas) return;
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.4 + 0.2),
        size: Math.random() * 3 + 2,
        opacity: 0,
        life: 0,
        maxLife: 150 + Math.random() * 100,
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < MAX_PARTICLES && Math.random() < 0.1) {
        spawnParticle();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Mouse attraction - subtle
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += dx * 0.0001;
          p.vy += dy * 0.0001;
        }

        // Opacity fade in/out
        if (p.life < 30) p.opacity = p.life / 30 * 0.35;
        else if (p.life > p.maxLife - 30) p.opacity = (p.maxLife - p.life) / 30 * 0.35;
        else p.opacity = 0.35;

        // Float horizontally
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy -= 0.002; // gentle upward drift

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.life > p.maxLife || p.y < -20) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = brass(p.opacity);
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = brass(p.opacity * 0.15);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouse);

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
