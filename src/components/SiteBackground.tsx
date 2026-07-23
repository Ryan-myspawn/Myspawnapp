import { useEffect, useRef } from "react";
import dnaHero from "@/assets/dna-hero.jpg";

/* ------------------------------------------------------------------ */
/*  Fixed cinematic page backdrop: DNA artwork + rising air bubbles    */
/* ------------------------------------------------------------------ */
export default function SiteBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type Bubble = {
      x: number;
      y: number;
      r: number;
      sp: number;
      sway: number;
      ph: number;
      op: number;
    };
    const spawn = (seed: boolean): Bubble => ({
      x: Math.random() * w,
      y: seed ? Math.random() * h : h + 30,
      r: 3 + Math.random() * 13,
      sp: 10 + Math.random() * 26, // px / s upward
      sway: 8 + Math.random() * 26,
      ph: Math.random() * Math.PI * 2,
      op: 0.05 + Math.random() * 0.13,
    });
    const N = reduce ? 10 : 34;
    const bubbles = Array.from({ length: N }, () => spawn(true));

    let raf = 0;
    let last = performance.now();
    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      ctx.clearRect(0, 0, w, h);
      for (const b of bubbles) {
        b.y -= b.sp * dt;
        b.ph += dt * 0.6;
        const x = b.x + Math.sin(b.ph) * b.sway;

        const g = ctx.createRadialGradient(x, b.y, 0, x, b.y, b.r);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(0.7, `rgba(255,255,255,${b.op * 0.45})`);
        g.addColorStop(0.9, `rgba(255,224,190,${b.op})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();

        // specular pin-light
        ctx.fillStyle = `rgba(255,255,255,${b.op * 1.5})`;
        ctx.beginPath();
        ctx.arc(x - b.r * 0.3, b.y - b.r * 0.3, Math.max(0.6, b.r * 0.16), 0, Math.PI * 2);
        ctx.fill();

        if (b.y < -30) Object.assign(b, spawn(false));
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Cinematic artwork, slowly turning + breathing */}
      <img
        src={dnaHero}
        alt=""
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center blur-[2px] motion-safe:animate-kenburns"
        draggable={false}
      />
      {/* Readability scrim — keeps foreground text legible over the photo */}
      <div className="absolute inset-0 bg-navy-deeper/62" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/40 via-transparent to-navy-deeper/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 105% at 50% 36%, transparent 34%, rgba(15,23,34,0.78) 100%)",
        }}
      />
      {/* Rising air bubbles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
