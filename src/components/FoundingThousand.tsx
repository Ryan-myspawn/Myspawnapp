import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, LineReveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

type Reservation = {
  number: number;
  email: string;
  name: string;
  reservedAt: string;
  existing?: boolean;
};

export default function FoundingThousand() {
  const [claimed, setClaimed] = useState<number | null>(null);
  const [cap, setCap] = useState(1000);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [reservation, setReservation] = useState<Reservation | null>(null);

  useEffect(() => {
    fetch("/api/reserve")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && typeof d.claimed === "number") {
          setClaimed(d.claimed);
          setCap(d.cap ?? 1000);
        }
      })
      .catch(() => {});
  }, []);

  async function reserve(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
      } else {
        setReservation(data as Reservation);
        setClaimed((c) => (c === null ? c : Math.max(c, (data as Reservation).number)));
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }

  const pct = claimed === null ? 0 : Math.min(100, (claimed / cap) * 100);

  return (
    <section id="founding-thousand" className="relative overflow-hidden bg-navy-deeper py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal className="mb-10 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-offwhite/45">
            Only 1,000 numbers exist
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
        </Reveal>

        <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl">
          <LineReveal>The Founding</LineReveal>
          <LineReveal delay={0.12}>
            <span className="font-serif font-normal italic text-gold">Thousand.</span>
          </LineReveal>
        </h2>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-offwhite/55">
            Reserve a numbered place in the first generation of designed
            descendants. Free to claim. Yours forever. Redeemable upon legality.
          </p>
        </Reveal>

        {/* Live counter */}
        <Reveal delay={0.35} className="mx-auto mt-10 max-w-md">
          <div className="flex items-end justify-between text-sm">
            <span className="font-heading font-semibold text-gold">
              {claimed === null ? "—" : claimed.toLocaleString()} claimed
            </span>
            <span className="text-offwhite/40">of {cap.toLocaleString()}</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-gold/60 to-gold"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </Reveal>

        {reservation ? (
          /* Certificate */
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mt-12 max-w-sm rounded-2xl border border-gold/40 bg-navy p-8 text-center shadow-[0_0_60px_rgba(245,194,107,0.12)]"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-offwhite/40">
              MySpawn · Descendant Reservation
            </p>
            <p className="mt-6 font-heading text-5xl font-bold text-gold">
              #{String(reservation.number).padStart(3, "0")}
            </p>
            {reservation.name && (
              <p className="mt-4 font-serif text-lg italic text-offwhite/80">
                {reservation.name}
              </p>
            )}
            <p className="mt-1 text-xs text-offwhite/40">
              {new Date(reservation.reservedAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="mx-auto mt-6 h-px w-16 bg-gold/40" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-offwhite/50">
              Redeemable upon legality
            </p>
            {reservation.existing && (
              <p className="mt-4 text-xs text-teal/80">
                This email already holds this number.
              </p>
            )}
          </motion.div>
        ) : (
          /* Reservation form */
          <Reveal delay={0.45} className="mx-auto mt-12 max-w-md">
            <form onSubmit={reserve} className="flex flex-col gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (goes on the certificate)"
                className="rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-offwhite outline-none placeholder:text-offwhite/30 focus:border-gold/40"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-offwhite outline-none placeholder:text-offwhite/30 focus:border-gold/40"
              />
              <Button size="lg" type="submit" disabled={busy}>
                {busy ? "Reserving…" : "Reserve my number"}
                <ArrowRight className="h-4 w-4" />
              </Button>
              {error && <p className="text-sm text-ember">{error}</p>}
              <p className="text-[11px] text-offwhite/30">
                No payment. No commitment. Just a number with your name on it.
              </p>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
