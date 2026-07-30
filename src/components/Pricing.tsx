import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  Truck,
  ShieldCheck,
  Infinity as InfinityIcon,
} from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, PRICE, PRIMARY_CTA } from "@/lib/config";

const included = [
  "Hair & nail DNA collection kit",
  "Prepaid return mailer — nothing else to buy",
  "Lifetime ambient storage — no power, no decay",
  "Secure chain-of-custody, backed by GenVault",
  "Your DNA is never sold or shared",
];

const assurances = [
  { icon: Truck, label: "Free shipping" },
  { icon: InfinityIcon, label: "Lifetime storage" },
  { icon: ShieldCheck, label: "60-day guarantee" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-navy-deeper py-28 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-[-5%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet/[0.08] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="05"
          kicker="Founder Pricing"
          title={
            <>
              One kit.{" "}
              <span className="font-serif font-normal italic text-gradient">
                One price. For life.
              </span>
            </>
          }
          note="No subscriptions, ever. A single one-time payment preserves your DNA for generations."
        />

        <div className="mt-14 flex justify-center">
          <Reveal className="w-full max-w-md">
            {/* Gradient hairline border — the signature featured treatment */}
            <motion.div
              whileHover={{ y: -7 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              className="rounded-[1.75rem] bg-gradient-to-b from-violet/60 via-teal/40 to-transparent p-px shadow-glow-violet"
            >
              <div className="relative flex flex-col rounded-[calc(1.75rem-1px)] bg-gradient-to-b from-navy-deep to-navy-deeper p-9">
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-teal px-4 py-1.5 text-[11px] font-semibold tracking-wide text-white shadow-glow-violet">
                  <Sparkles className="h-3 w-3" />
                  Founding Edition
                </span>

                <div className="flex items-baseline justify-between">
                  <h3 className="font-heading text-lg font-bold tracking-tight text-white">
                    MySpawn DNA Kit
                  </h3>
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-offwhite/30">
                    One-time
                  </span>
                </div>
                <p className="mt-1 text-sm font-light text-offwhite/45">
                  Everything you need to collect, preserve, and safeguard your
                  DNA for a lifetime.
                </p>

                <div className="mt-8 flex items-baseline gap-3 border-b border-white/[0.07] pb-8">
                  <span className="font-heading text-6xl font-bold tracking-tightest text-white">
                    {PRICE}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-teal">
                    Founder price
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-4">
                  {included.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm font-light text-offwhite/65"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button href={CHECKOUT_URL} className="mt-10 w-full">
                  {PRIMARY_CTA}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>

                <div className="mt-6 grid grid-cols-3 divide-x divide-white/[0.07]">
                  {assurances.map((a, i) => (
                    <div
                      key={a.label}
                      className={`flex flex-col items-center gap-1.5 text-center ${
                        i === 0 ? "pr-3" : i === 2 ? "pl-3" : "px-3"
                      }`}
                    >
                      <a.icon className="h-4 w-4 text-violet-pale" strokeWidth={1.75} />
                      <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-offwhite/45">
                        {a.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <p className="mt-12 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-offwhite/30">
            Backed by GenVault · Private &amp; encrypted · 60-day money-back guarantee
          </p>
        </Reveal>
      </div>
    </section>
  );
}
