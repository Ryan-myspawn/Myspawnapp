import { motion, type HTMLMotionProps } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
}

/**
 * Fade-up + slight blur reveal used by every section on scroll.
 */
export function Reveal({ delay = 0, y = 36, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Small kicker label above section headings. */
export function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-teal">
      <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-glow-teal" />
      {children}
    </span>
  );
}
