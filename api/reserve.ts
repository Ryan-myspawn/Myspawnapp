// Founding Thousand reservations.
// GET  -> { claimed: number, cap: number }
// POST { email, name? } -> { number, email, name, reservedAt } (idempotent per email)
//
// Storage: Upstash Redis REST (Vercel KV). Requires KV_REST_API_URL and
// KV_REST_API_TOKEN in the hosting environment.

export const config = { runtime: "edge" };

const CAP = 1000;
const COUNTER_KEY = "spawn:counter";
const EMAILS_KEY = "spawn:emails"; // hash: email -> reservation JSON

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

async function redis(...command: (string | number)[]): Promise<unknown> {
  const res = await fetch(`${KV_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  if (!res.ok) throw new Error(`KV error ${res.status}`);
  const data = (await res.json()) as { result: unknown };
  return data.result;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (!KV_URL || !KV_TOKEN) {
    return json(
      { error: "Reservations are not configured yet (missing KV_REST_API_URL / KV_REST_API_TOKEN)." },
      503,
    );
  }

  if (req.method === "GET") {
    const raw = await redis("GET", COUNTER_KEY);
    const claimed = Math.min(Number(raw ?? 0), CAP);
    return json({ claimed, cap: CAP });
  }

  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let body: { email?: string; name?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const name = (body.name ?? "").trim().slice(0, 80);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ error: "Enter a valid email address." }, 400);
  }

  // Idempotent: an email that already reserved gets its existing record back.
  const existing = (await redis("HGET", EMAILS_KEY, email)) as string | null;
  if (existing) return json({ ...JSON.parse(existing), existing: true });

  const number = Number(await redis("INCR", COUNTER_KEY));
  if (number > CAP) {
    await redis("DECR", COUNTER_KEY);
    return json({ error: "The Founding Thousand is fully claimed." }, 409);
  }

  const record = {
    number,
    email,
    name,
    reservedAt: new Date().toISOString(),
  };
  await redis("HSET", EMAILS_KEY, email, JSON.stringify(record));

  return json(record, 201);
}
