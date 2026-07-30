import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, PRICE } from "@/lib/config";
import { cn } from "@/lib/utils";

/**
 * Persistent purchase bar (mobile + desktop). Slides up once the visitor has
 * scrolled past the hero, and hides while the Pricing card is on screen so the
 * two CTAs never stack.
 */
export default function StickyBuyBar() {
  const [pastHero, setPastHero] = useState(false);
  const [pricingVisible, setPricingVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setPastHero(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("pricing");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setPricingVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const visible = pastHero && !pricingVisible;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-navy-deeper/85 px-4 py-3 shadow-glow-card backdrop-blur-xl sm:px-6 sm:py-3.5">
          <div className="min-w-0">
            <p className="truncate font-heading text-sm font-bold tracking-tight text-white">
              MySpawn DNA Kit
            </p>
            <p className="truncate text-[12px] font-light text-offwhite/55">
              <span className="font-medium text-white/90">{PRICE}</span> one-time
              <span className="hidden sm:inline"> · Free shipping · 60-day guarantee</span>
            </p>
          </div>
          <Button
            href={CHECKOUT_URL}
            size="default"
            className="shrink-0"
            aria-label={`Order the MySpawn DNA kit for ${PRICE}`}
          >
            Order Kit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
