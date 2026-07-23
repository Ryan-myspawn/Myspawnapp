import { motion, type HTMLMotionProps } from "framer-motion";

export const EASE = [0.21, 0.47, 0.32, 0.98] as const;

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
}

/**
 * Fade-up + slight blur reveal used across sections on scroll.
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

/**
 * Masked line reveal — text slides up from behind an overflow mask.
 * The signature "expensive" headline entrance.
 */
export function LineReveal({
  children,
  delay = 0,
  className,
  onMount = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Animate on mount instead of on scroll — required above the fold. */
  onMount?: boolean;
}) {
  // The trigger must be the un-translated outer mask: the inner span starts
  // fully clipped by overflow-hidden, so observing it directly never fires.
  const variants = {
    hidden: { y: "115%" },
    show: { y: 0, transition: { duration: 1.1, delay, ease: EASE } },
  };
  return (
    <motion.span
      className={`-mb-[0.12em] block overflow-hidden pb-[0.12em] ${className ?? ""}`}
      initial="hidden"
      {...(onMount
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.4 } })}
    >
      <motion.span className="block" variants={variants}>
        {children}
      </motion.span>
    </motion.span>
  );
}

/**
 * Editorial section header — index number, kicker, title left; note right.
 */
export function SectionHeader({
  index,
  kicker,
  title,
  note,
}: {
  index: string;
  kicker: string;
  title: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="pb-8 lg:pb-10">
      <Reveal className="flex items-baseline gap-4">
        <span className="font-heading text-sm tracking-[0.25em] text-offwhite/30">
          ( {index} )
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-teal">
          {kicker}
        </span>
      </Reveal>
      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-3xl font-heading text-4xl font-bold leading-[1.04] tracking-tightest text-white sm:text-5xl lg:text-6xl">
          <LineReveal delay={0.08}>{title}</LineReveal>
        </h2>
        {note && (
          <Reveal delay={0.2} className="lg:pb-2">
            <p className="max-w-sm text-base font-light leading-relaxed text-offwhite/50 lg:text-right">
              {note}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
