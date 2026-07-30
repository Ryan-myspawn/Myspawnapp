/**
 * Brand + commerce configuration.
 *
 * ─── TO GO LIVE ─────────────────────────────────────────────────────────────
 * Replace CHECKOUT_URL below with your real checkout link (Stripe Checkout
 * link, Shopify product/permalink, etc). Every "Order / Claim Your Kit" button
 * on the site points at this one constant — swap it here and the whole
 * purchase flow is live.
 * ────────────────────────────────────────────────────────────────────────────
 */
export const COMPANY_NAME = "MYSPAWN";
export const COMPANY_TAGLINE =
  "Preserve what makes you, you. A simple DNA collection kit and a lifetime of secure, ambient storage.";

/** One-time founder price for the DNA preservation kit. */
export const PRICE = "$99";

/** Primary purchase CTA label, reused everywhere for consistency. */
export const PRIMARY_CTA = `Claim Your Founder Kit — ${PRICE}`;

/**
 * TODO: replace with your live checkout URL.
 * e.g. "https://buy.stripe.com/xxxx" or a Shopify permalink.
 */
export const CHECKOUT_URL = "https://checkout.myspawn.me/founder-kit";
