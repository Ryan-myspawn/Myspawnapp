import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineReveal, EASE } from "@/components/ui/reveal";
import DnaImageAnnotated from "@/components/DnaImageAnnotated";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, delay, ease: EASE },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yDna = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Volumetric washes */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-50" />
      <div className="pointer-events-none absolute -top-48 right-[8%] h-[560px] w-[560px] rounded-full bg-ember/[0.13] blur-[150px] animate-shimmer" />
      <div className="pointer-events-none absolute right-[18%] top-[30%] h-72 w-72 rounded-full bg-ember-deep/[0.1] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[12%] left-[2%] h-80 w-80 rounded-full bg-teal/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-navy-deeper to-transparent" />

      {/* ------ Annotated DNA — rotating base-pair explainer ------ */}
      <motion.div
        style={{ y: yDna, opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
        className="absolute inset-x-0 top-14 h-[48vh] min-h-[340px] lg:inset-x-auto lg:right-0 lg:top-0 lg:h-full lg:w-[56%]"
      >
        <DnaImageAnnotated className="h-full w-full" />
      </motion.div>

      {/* ------ Copy ------ */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-[52vh] lg:justify-center lg:px-10 lg:pb-0 lg:pt-24">
        <motion.div style={{ y: yCopy, opacity: fade }} className="max-w-3xl">
          <motion.div {...fadeUp(0.15)} className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-teal to-transparent" />
            <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.28em] text-offwhite/50 sm:text-[11px] sm:tracking-[0.35em]">
              Precision Genomics · Est. 2021
            </span>
          </motion.div>

          <h1 className="font-heading text-[13.5vw] font-bold leading-[0.98] tracking-tightest text-white sm:text-7xl lg:text-8xl">
            <LineReveal onMount delay={0.25}>Unlock the</LineReveal>
            <LineReveal onMount delay={0.38}>
              <span className="font-serif font-normal italic tracking-tight text-gradient">
                Code of Life
              </span>
            </LineReveal>
          </h1>

          <motion.p
            {...fadeUp(0.6)}
            className="mt-8 max-w-md text-lg font-light leading-relaxed text-offwhite/60"
          >
            Precision genomics. Real-time insights. A new era of personalized
            medicine — sequenced once, understood for a lifetime.
          </motion.p>

          <motion.div
            {...fadeUp(0.75)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button size="lg">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
            <Button variant="ghost" size="lg">
              Explore Science
              <ArrowUpRight className="h-4 w-4 text-teal transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </motion.div>

          {/* Hairline stat strip */}
          <motion.div
            {...fadeUp(0.9)}
            className="mt-16 grid max-w-lg grid-cols-3 divide-x divide-white/[0.08] border-y border-white/[0.08]"
          >
            {[
              { value: "3.2B", label: "Base pairs read" },
              { value: "99.99%", label: "Accuracy" },
              { value: "48h", label: "To first insight" },
            ].map((s, i) => (
              <div key={s.label} className={i === 0 ? "py-5 pr-6" : "px-6 py-5"}>
                <div className="font-heading text-2xl font-bold tracking-tight text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-offwhite/35">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity: fade }}
        className="absolute bottom-8 right-10 hidden items-center gap-3 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-offwhite/35">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-teal to-transparent"
        />
      </motion.div>
    </section>
  );
}
