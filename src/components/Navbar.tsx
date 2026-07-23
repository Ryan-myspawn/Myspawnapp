import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dna, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/lib/config";
import { cn } from "@/lib/utils";

const links = [
  { label: "Science", href: "#science" },
  { label: "Platform", href: "#features" },
  { label: "Process", href: "#how-it-works" },
  { label: "Stories", href: "#generations" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-navy-deeper/75 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
            <Dna className="h-4.5 w-4.5 h-[18px] w-[18px] text-violet-pale" strokeWidth={2} />
          </span>
          <span className="font-heading text-[15px] font-bold tracking-[0.22em] text-white">
            {COMPANY_NAME}
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-offwhite/50 transition-colors duration-300 hover:text-white"
            >
              <span className="text-[9px] text-teal/70">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="ghost" size="sm">
            Start Journey
            <ArrowUpRight className="h-3.5 w-3.5 text-teal" />
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-offwhite lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/[0.06] bg-navy-deeper/95 px-6 pb-6 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-5 pt-2">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 text-sm font-medium uppercase tracking-[0.2em] text-offwhite/70 hover:text-white"
              >
                <span className="text-[10px] text-teal/70">0{i + 1}</span>
                {l.label}
              </a>
            ))}
            <Button className="mt-2 w-full">Start Your Journey</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
