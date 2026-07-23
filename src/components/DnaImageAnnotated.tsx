import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dnaHero from "@/assets/dna-hero.jpg";

/* ------------------------------------------------------------------ */
/*  The four bases                                                     */
/* ------------------------------------------------------------------ */
type Base = "A" | "G" | "T" | "C";

const ORDER: Base[] = ["A", "G", "T", "C"];
const COMPLEMENT: Record<Base, Base> = { A: "T", T: "A", G: "C", C: "G" };
const COLOR: Record<Base, string> = {
  A: "#34D399", // adenine  — emerald
  T: "#FF8A5C", // thymine  — warm orange
  G: "#F5C26B", // guanine  — gold
  C: "#22D3EE", // cytosine — cyan
};
const INFO: Record<Base, { name: string; kind: string; blurb: string }> = {
  A: {
    name: "Adenine",
    kind: "Purine",
    blurb: "Pairs with thymine across two hydrogen bonds.",
  },
  G: {
    name: "Guanine",
    kind: "Purine",
    blurb: "Pairs with cytosine across three hydrogen bonds.",
  },
  T: {
    name: "Thymine",
    kind: "Pyrimidine",
    blurb: "Unique to DNA — the partner of adenine.",
  },
  C: {
    name: "Cytosine",
    kind: "Pyrimidine",
    blurb: "Pairs with guanine, lending the helix stability.",
  },
};

/* Anchor points that track down the helix in the artwork (percentages) */
const ANCHOR: Record<Base, { x: number; y: number }> = {
  A: { x: 55, y: 25 },
  G: { x: 51, y: 43 },
  T: { x: 48, y: 60 },
  C: { x: 46, y: 76 },
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* ------------------------------------------------------------------ */
/*  Cinematic DNA artwork with a live base-pair scanner overlay        */
/* ------------------------------------------------------------------ */
export default function DnaImageAnnotated({
  className,
}: {
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ORDER.length), 2800);
    return () => clearInterval(id);
  }, []);

  const featured = ORDER[i];
  const info = INFO[featured];
  const a = ANCHOR[featured];

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Artwork layer — desktop only. On mobile the hero shows the single
          page-wide backdrop directly (no second image = no seam). Feathered
          left edge melts it into that same backdrop on desktop. */}
      <div className="absolute inset-0 hidden lg:block lg:[mask-image:linear-gradient(to_right,transparent,black_52%)]">
        {/* Cinematic artwork — slow Ken Burns twist so it never sits static */}
        <img
          src={dnaHero}
          alt="Rotating DNA double helix"
          className="absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center will-change-transform motion-safe:animate-kenburns"
          draggable={false}
        />
        {/* Warmth + depth grading over the photo */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy-deeper/45 via-transparent to-ember/10" />
        {/* Travelling specular sweep — implies the helix turning in the light */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-y-1/2 left-0 w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent mix-blend-screen motion-safe:animate-sweep" />
        </div>
      </div>

      {/* Scanner: ring + arrow that hops down the strand through each base */}
      <motion.div
        className="absolute z-20"
        animate={{ left: `${a.x}%`, top: `${a.y}%` }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      >
        {/* pulsing focus ring */}
        <motion.span
          className="block h-11 w-11 rounded-full border-2"
          style={{ borderColor: COLOR[featured] }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.9, 0.5, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          className="absolute inset-0 m-auto h-11 w-11 rounded-full blur-md"
          style={{ backgroundColor: COLOR[featured], opacity: 0.25 }}
        />
        {/* letter badge + arrow, sitting to the left, pointing in */}
        <div className="absolute right-[calc(100%+10px)] top-1/2 flex -translate-y-1/2 items-center gap-1.5">
          <AnimatePresence mode="wait">
            <motion.span
              key={featured}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.35 }}
              className="grid h-7 w-7 place-items-center rounded-lg text-sm font-bold text-navy-deeper"
              style={{
                backgroundColor: COLOR[featured],
                boxShadow: `0 0 22px -4px ${COLOR[featured]}`,
              }}
            >
              {featured}
            </motion.span>
          </AnimatePresence>
          <svg width="34" height="12" viewBox="0 0 34 12" fill="none">
            <path
              d="M0 6H30M30 6L25 2M30 6L25 10"
              stroke={COLOR[featured]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* Legend chips */}
      <div className="pointer-events-none absolute right-4 top-4 z-20 flex flex-col gap-1.5 sm:right-6 sm:top-6">
        {ORDER.map((b) => (
          <div
            key={b}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-navy-deeper/50 px-2.5 py-1 backdrop-blur-sm transition-opacity duration-500"
            style={{ opacity: b === featured ? 1 : 0.4 }}
          >
            <span
              className="grid h-4 w-4 place-items-center rounded-full text-[9px] font-bold text-navy-deeper"
              style={{ backgroundColor: COLOR[b] }}
            >
              {b}
            </span>
            <span className="text-[10px] font-medium tracking-wide text-offwhite/70">
              {INFO[b].name}
            </span>
          </div>
        ))}
      </div>

      {/* Live explanation card — compact */}
      <div className="absolute bottom-4 left-4 z-20 max-w-[11.5rem] sm:bottom-6 sm:left-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={featured}
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -6, filter: "blur(5px)" }}
            transition={{ duration: 0.45, ease: EASE }}
            className="rounded-xl border border-white/10 bg-navy-deeper/70 p-2.5 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span
                className="grid h-6 w-6 shrink-0 place-items-center rounded-md text-xs font-bold text-navy-deeper"
                style={{
                  backgroundColor: COLOR[featured],
                  boxShadow: `0 0 16px -4px ${COLOR[featured]}`,
                }}
              >
                {featured}
              </span>
              <div className="leading-none">
                <div className="font-heading text-[13px] font-bold leading-tight text-white">
                  {info.name}
                </div>
                <div className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.16em] text-offwhite/40">
                  {info.kind} · pairs {COMPLEMENT[featured]}
                </div>
              </div>
            </div>
            <p className="mt-1.5 text-[10px] font-light leading-snug text-offwhite/55">
              {info.blurb}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
