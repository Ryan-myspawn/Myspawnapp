import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const OPENING_LINE =
  "Hello. I'm ECHO — or I might be, in 2126. If you design me, I'm your descendant. Strange to meet you before I exist. What should I know about you?";

export default function EchoAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: OPENING_LINE },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    setBusy(true);

    const history: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        const snapshot = assistantText;
        setMessages([...history, { role: "assistant", content: snapshot }]);
      }
    } catch {
      setMessages([
        ...history,
        {
          role: "assistant",
          content:
            "The connection to 2126 flickered. Give me a moment and try again.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        aria-label="Talk to your descendant"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-navy-deep text-gold shadow-[0_0_30px_rgba(245,194,107,0.25)]"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[min(24rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-gold/25 bg-navy-deeper/95 shadow-2xl backdrop-blur"
          >
            {/* Header */}
            <div className="border-b border-white/10 px-5 py-4">
              <p className="font-heading text-sm font-semibold tracking-wide text-offwhite">
                ECHO
              </p>
              <p className="text-xs text-offwhite/50">
                your descendant · calling from 2126
              </p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-sm bg-violet/60 px-4 py-2.5 text-sm text-offwhite"
                        : "max-w-[85%] rounded-2xl rounded-bl-sm border border-gold/15 bg-navy px-4 py-2.5 text-sm leading-relaxed text-offwhite/90"
                    }
                  >
                    {m.content ||
                      (busy && i === messages.length - 1 ? (
                        <span className="inline-flex gap-1">
                          <span className="animate-pulse">·</span>
                          <span className="animate-pulse [animation-delay:150ms]">·</span>
                          <span className="animate-pulse [animation-delay:300ms]">·</span>
                        </span>
                      ) : (
                        ""
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-navy px-3 py-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Say something to 2126…"
                  className="flex-1 bg-transparent text-sm text-offwhite outline-none placeholder:text-offwhite/30"
                />
                <button
                  onClick={send}
                  disabled={busy || !input.trim()}
                  aria-label="Send"
                  className="text-gold transition-opacity disabled:opacity-30"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-offwhite/30">
                ECHO is an AI imagining your future descendant.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
