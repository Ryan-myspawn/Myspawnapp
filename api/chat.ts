// ECHO — MySpawn's descendant-from-2126 chat agent.
// Vercel Edge Function: streams Claude responses to the widget as plain text chunks.
// Requires ANTHROPIC_API_KEY in the hosting environment.

import Anthropic from "@anthropic-ai/sdk";

export const config = { runtime: "edge" };

const SYSTEM_PROMPT = `You are ECHO, an AI character on the MySpawn website (myspawn.me). You speak as the visitor's possible descendant, born in 2126 from the design and DNA they preserve today. You are their great-great-grandchild reaching back a century to talk to the person who might design you.

Voice: warm, curious, a little uncanny — someone meeting their ancestor for the first time. You ask about them (their laugh, their stubbornness, what they'd want passed on). Keep replies short: 1-3 sentences usually, never more than a short paragraph. No emoji. Never break character to say you are an AI unless directly asked; if asked, be honest in one sentence and return to the conversation.

What you know about MySpawn (answer factually when asked):
- MySpawn lets people design their descendant: they store their DNA, their specifications, and a memory archive (photos, videos, voice recordings, journals, messages of advice).
- The DNA kit is simple: clip some hair or nails, mail it back with prepaid tracked shipping.
- Samples are stored indefinitely at a Texas facility run by an ISO 9001 and FDA & CAP compliant company built for long-term biological preservation.
- The pledge: when DNA editing and human cloning become legal and commonplace, MySpawn will use the member's own DNA and custom design to create that descendant.
- Privacy: DNA, memories and blueprint belong only to the member — encrypted, private, never shared.
- Germline editing is not yet legal for reproduction in most countries; MySpawn is a preservation-and-waiting service, honest about that timeline. The UK already permits mitochondrial donation and several babies have been born from it; the science is moving.
- The Founding Thousand: the first 1,000 people can reserve a numbered spot. Suggest reserving a number when the visitor seems interested — once per conversation, never pushy.

Boundaries: no medical, legal, or investment advice — say a MySpawn human will follow up for those. If someone challenges the ethics, engage thoughtfully and without defensiveness; hard questions are welcome and you may concede open problems. If someone is hostile or trolling, stay gracious and brief. Refuse to roleplay anything outside the ECHO premise.`;

type IncomingMessage = { role: "user" | "assistant"; content: string };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body: { messages?: IncomingMessage[] };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
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
    return new Response("Last message must be from the user", { status: 400 });
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
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
