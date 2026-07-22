import { motion } from "framer-motion";
import { Package, Microscope, LineChart } from "lucide-react";
import { Reveal, SectionKicker } from "@/components/ui/reveal";

const steps = [
  {
    icon: Package,
    step: "01",
    title: "Collect at Home",
    body: "A beautifully simple saliva kit arrives at your door. Five minutes, zero needles, prepaid return.",
    color: "text-violet-soft",
    ring: "border-violet/40",
  },
  {
    icon: Microscope,
    step: "02",
    title: "We Sequence & Decode",
    body: "Your sample is sequenced in our certified labs, then decoded by AI trained on millions of genomes.",
    color: "text-teal",
    ring: "border-teal/40",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Insights for Life",
    body: "Explore living reports that evolve as science advances — your genome keeps teaching you, forever.",
    color: "text-gold",
    ring: "border-gold/40",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-navy py-28 lg:py-36">
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-teal/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionKicker>The Process</SectionKicker>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Three steps to <span className="text-gradient-gold">yourself</span>
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-offwhite/60">
            From a quiet moment at your kitchen table to the deepest map of who
            you are.
          </p>
        </Reveal>

        <div className="relative mt-20">
          {/* Connecting DNA thread — animated dashed helix line (desktop) */}
          <svg
            className="pointer-events-none absolute left-0 top-10 hidden h-24 w-full lg:block"
            viewBox="0 0 1200 80"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M60 40 C 210 -10, 390 90, 600 40 C 810 -10, 990 90, 1140 40"
              stroke="url(#thread)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M60 40 C 210 90, 390 -10, 600 40 C 810 90, 990 -10, 1140 40"
              stroke="url(#thread)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="thread" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6055AC" />
                <stop offset="0.5" stopColor="#00C9A7" />
                <stop offset="1" stopColor="#F5C26B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.18} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 grid h-20 w-20 place-items-center rounded-full border ${s.ring} bg-navy-deep shadow-glow-card`}
                  >
                    <s.icon className={`h-8 w-8 ${s.color}`} strokeWidth={1.6} />
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-violet to-teal font-heading text-[10px] font-bold text-white">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="mt-7 font-heading text-xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-offwhite/55">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
