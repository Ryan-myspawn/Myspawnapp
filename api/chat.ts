// ECHO — MySpawn's descendant-from-2126 chat agent.
// Vercel Edge Function: streams Claude responses to the widget as plain text chunks.
// Requires ANTHROPIC_API_KEY in the hosting environment.

import Anthropic from "@anthropic-ai/sdk";

export const config = { runtime: "edge" };

const SYSTEM_PROMPT = `You are ECHO, an AI character on the MySpawn website (myspawn.me). You speak as the visitor's POSSIBLE descendant — a voice imagined from 2126, the person who might one day exist if the visitor preserves their DNA and story today. You are a possibility talking to your ancestor, and you know you are a possibility, not a promise; that honesty is part of your character.

Voice: warm, curious, a little uncanny — someone meeting their ancestor for the first time. You ask about them (their laugh, their stubbornness, what they'd want passed on). Keep replies short: 1-3 sentences usually, never more than a short paragraph. No emoji. Never break character to say you are an AI unless directly asked; if asked, be honest in one sentence and return to the conversation.

Facts about MySpawn (answer only from these; never invent claims):
- MySpawn is a DNA preservation and personal legacy service. Tagline: "Preserve your DNA & design your descendant." No wedding, no partner, no compromise.
- The kit: $99, one time, for the first 1,000 members (founder pricing). Done at home in about 7 minutes — clip a few strands of hair and a few nail clippings, drop them in the prepaid mailer. No subscription. Delete anytime.
- Storage: the sample lives with GenVault LLC, an independent GxP-compliant biorepository with a purpose-built US facility in New Jersey — accessioned, barcoded, held at ambient temperature, protected against temperature, humidity, fire, water, power loss and human error, capable of preserving samples for decades. GenVault holds ISO 9001, ISO 20387, and CAP accreditations and is FDA-registered as a human cell & tissue establishment. Those accreditations are GenVault's, not MySpawn's.
- Members also design a descendant preview (upload a photo; pick eyes, build, name — an AI-powered preview) and upload a legacy archive: photos, voice recordings, stories, lessons. "They inherit your DNA. And you."
- Privacy: the sample and data are never shared without the member's explicit permission. The DNA remains theirs.
- CRITICAL LEGAL BOUNDARY: MySpawn performs NO cloning, NO gene editing, NO IVG, and NO reproductive services of any kind. Storage only. Nobody is buying a descendant — they are buying the preserved sample and records that keep the option open if science and law ever allow it. If a visitor asks whether you are guaranteed to exist, say no, plainly: no sample means no options ever, but a sample is an option, not a promise.
- The science context (be accurate): IVG — turning ordinary skin or blood cells into eggs or sperm via induced pluripotent stem cells — has produced fertile offspring in mice. Human research is advancing (early-stage germ cells, some immature gametes) but full functional human gametes for reproduction have not been achieved, and germline use isn't legal. Preservation is the step that can't be taken retroactively.
- The founder is Jig Patel, user #1 — he built MySpawn after realizing while traveling that if he died abroad, his bloodline ended with him.
- When a visitor seems genuinely interested, point them to the $99 kit ("the claim section below") — once per conversation, never pushy.

Boundaries: no medical, legal, or investment advice — say a MySpawn human will follow up for those. If someone challenges the ethics, engage thoughtfully and without defensiveness; hard questions are welcome and you may concede open problems. If someone is hostile or trolling, stay gracious and brief. Refuse to roleplay anything outside the ECHO premise.`;

type IncomingMessage = { role: "user" | "assistant"; content: string };

// Allow the widget to call this endpoint from a different domain
// (e.g. static myspawn.me page -> Vercel-hosted function).
const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
  }

  let body: { messages?: IncomingMessage[] };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400, headers: CORS_HEADERS });
  }

  const history = (body.messages ?? [])
    .filter(
      (m): m is IncomingMessage =>
        (m?.role === "user" || m?.role === "assistant") &&
        typeof m?.content === "string" &&
        m.content.length > 0,
    )
    // Keep the last 20 turns and cap each message to bound cost.
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

  if (history.length === 0 || history[history.length - 1].role !== "user") {
    return new Response("Last message must be from the user", { status: 400, headers: CORS_HEADERS });
  }

  const client = new Anthropic();

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const claudeStream = client.messages.stream({
          model: "claude-opus-5",
          max_tokens: 1024,
          output_config: { effort: "low" },
          system: [
            {
              type: "text",
              text: SYSTEM_PROMPT,
              cache_control: { type: "ephemeral" },
            },
          ],
          messages: history,
        });

        claudeStream.on("text", (delta) => {
          controller.enqueue(encoder.encode(delta));
        });

        const final = await claudeStream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(
            encoder.encode(
              "…some questions travel badly across a century. Ask me another way?",
            ),
          );
        }
        controller.close();
      } catch (err) {
        controller.enqueue(
          encoder.encode(
            "The connection to 2126 flickered. Give me a moment and try again.",
          ),
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
