import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import DnaScene from "@/components/three/DnaScene";
import { COMPANY_TAGLINE } from "@/lib/config";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-navy">
      {/* Volumetric light washes */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-60" />
      {/* Warm gold rim on the horizon */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-navy-deeper via-navy-deeper/60 to-transparent" />
      <div className="pointer-events-none absolute -top-40 right-[10%] h-[520px] w-[520px] rounded-full bg-violet/20 blur-[140px] animate-shimmer" />
      <div className="pointer-events-none absolute bottom-[15%] left-[5%] h-72 w-72 rounded-full bg-teal/10 blur-[120px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-16 pt-28 lg:grid-cols-[1.05fr_1fr] lg:gap-0 lg:px-10 lg:pb-0 lg:pt-[72px]">
        {/* ------ Copy ------ */}
        <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
          <motion.div {...fadeUp(0.1)}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet/40 bg-violet/10 px-4 py-1.5 text-xs font-medium tracking-wide text-violet-soft backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Next-generation genomic intelligence
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.25)}
            className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl"
          >
            Unlock the <br className="hidden sm:block" />
            <span className="text-gradient">Code of Life</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="mx-auto mt-6 max-w-md text-lg font-light leading-relaxed text-offwhite/70 lg:mx-0"
          >
            {COMPANY_TAGLINE}
          </motion.p>

          <motion.div
            {...fadeUp(0.55)}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button size="lg" className="group w-full sm:w-auto">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" size="lg" className="group w-full sm:w-auto">
              <FlaskConical className="h-4 w-4 text-teal transition-transform duration-300 group-hover:-rotate-12" />
              Explore Science
            </Button>
          </motion.div>

          {/* Quiet proof points */}
          <motion.div
            {...fadeUp(0.7)}
            className="mt-14 flex items-center justify-center gap-10 lg:justify-start"
          >
            {[
              { value: "3.2B", label: "Base pairs read" },
              { value: "99.99%", label: "Sequencing accuracy" },
              { value: "48h", label: "To first insight" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-heading text-2xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-offwhite/40">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ------ 3D DNA — the museum piece ------ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
          className="relative order-1 h-[340px] w-full sm:h-[420px] lg:order-2 lg:h-[calc(100vh-72px)] lg:min-h-[560px]"
        >
          <DnaScene
            className="absolute inset-0 h-full w-full"
            scale={1}
            particleCount={520}
            interactive
            rotationSpeed={0.14}
          />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-teal"
          />
        </div>
      </motion.div>
    </section>
  );
}
