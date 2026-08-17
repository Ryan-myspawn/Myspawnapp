// A Letter to 2126 — free time-locked letters.
// POST {to, from, body} -> {id, opensAt}         (stores the letter, sealed)
// GET  ?id=<id>         -> sealed metadata only; body is withheld until 2126-01-01
// GET  (no id)          -> {count} total letters sealed
//
// Storage: Upstash Redis REST (Vercel KV): KV_REST_API_URL, KV_REST_API_TOKEN.

export const config = { runtime: "edge" };

const OPENS_AT = "2126-01-01T00:00:00Z";
const COUNT_KEY = "spawn:letters:count";

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

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
    headers: { ...CORS_HEADERS, "Content-Type": "application/json", "Cache-Control": "no-cache" },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (!KV_URL || !KV_TOKEN) {
    return json({ error: "Letter sealing is not configured yet." }, 503);
  }

  if (req.method === "GET") {
    const id = new URL(req.url).searchParams.get("id");
    if (!id) {
      const count = Number((await redis("GET", COUNT_KEY)) ?? 0);
      return json({ count, opensAt: OPENS_AT });
    }
    if (!/^[a-z0-9-]{8,64}$/.test(id)) return json({ error: "Invalid letter id." }, 400);
    const raw = (await redis("GET", `letter:${id}`)) as string | null;
    if (!raw) return json({ error: "No letter found at this link." }, 404);
    const letter = JSON.parse(raw) as {
      to: string; from: string; body: string; sealedAt: string;
    };
    const unlocked = Date.now() >= Date.parse(OPENS_AT);
    return json({
      to: letter.to,
      from: letter.from,
      sealedAt: letter.sealedAt,
      opensAt: OPENS_AT,
      locked: !unlocked,
      // The letter body does not leave the server until 2126-01-01.
      ...(unlocked ? { body: letter.body } : {}),
    });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
  }

  let payload: { to?: string; from?: string; body?: string };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const to = (payload.to ?? "").trim().slice(0, 120);
  const from = (payload.from ?? "").trim().slice(0, 120);
  const body = (payload.body ?? "").trim();
  if (body.length < 1) return json({ error: "The letter is empty." }, 400);
  if (body.length > 6000) return json({ error: "Letters are limited to 6,000 characters." }, 400);

  const id = crypto.randomUUID();
  const record = {
    to: to || "To whoever finds this in 2126",
    from: from || "Someone from 2026",
    body,
    sealedAt: new Date().toISOString(),
  };
  await redis("SET", `letter:${id}`, JSON.stringify(record));
  const count = Number(await redis("INCR", COUNT_KEY));

  return json({ id, opensAt: OPENS_AT, sealedAt: record.sealedAt, count }, 201);
}
