"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PaperPlaneIcon,
  LockClosedIcon,
  LockOpen1Icon,
} from "@radix-ui/react-icons";
import Cal, { getCalApi } from "@calcom/embed-react";

/* ── Types ── */
interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
}

/* ── Constants ── */
const WORD_THRESHOLD = 300;
const VIP_KEYWORDS = ["enterprise", "urgent"];

const BOT_INTRO: Message[] = [
  {
    id: "bot-welcome",
    role: "bot",
    text: "Welcome to Manasflow.",
  },
  {
    id: "bot-prompt",
    role: "bot",
    text: "Before we schedule your consultation, walk us through the repetitive work that's consuming your team's time. The more detail you share, the more prepared we arrive.",
  },
];

/* ── Tiered follow-up logic ── */
const TIER_THRESHOLDS = [50, 150, 250] as const;

const TIER_RESPONSES: Record<number, string> = {
  0: "Good start. How many people are involved in this workflow, and roughly how many hours per week does it consume?",
  1: "That's helpful. What tools or systems are your team currently using to manage this?",
  2: "Almost there. What does success look like — any specific metrics or outcomes you're targeting?",
};

const UNLOCK_RESPONSE =
  "We have what we need. Book your consultation below — our team will come prepared.";

/* ── Utilities ── */
function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function containsVipKeyword(text: string): boolean {
  const lower = text.toLowerCase();
  return VIP_KEYWORDS.some((kw) => lower.includes(kw));
}

/* ── Animation variants ── */
const messageFade = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 28, stiffness: 220 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const tagReveal = {
  initial: { opacity: 0, x: 12 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 20, stiffness: 300 },
  },
};

/* ── Component ── */
export default function LeadChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [totalWords, setTotalWords] = useState(0);
  const [isVip, setIsVip] = useState(false);
  const [highestTier, setHighestTier] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isUnlocked = totalWords >= WORD_THRESHOLD || isVip;
  const progress = Math.min((totalWords / WORD_THRESHOLD) * 100, 100);

  /* Staggered intro messages */
  useEffect(() => {
    const timers = BOT_INTRO.map((msg, i) =>
      setTimeout(() => setMessages((prev) => [...prev, msg]), (i + 1) * 700)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  /* Auto-scroll on new messages */
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  /* Determine which tier a word count falls into */
  const getTier = useCallback((words: number): number => {
    for (let i = TIER_THRESHOLDS.length - 1; i >= 0; i--) {
      if (words >= TIER_THRESHOLDS[i]) return i;
    }
    return -1;
  }, []);

  /* Send handler */
  const handleSend = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newWords = countWords(trimmed);
    const newTotal = totalWords + newWords;
    const vipHit = containsVipKeyword(trimmed);

    /* Add user message */
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setTotalWords(newTotal);
    setInput("");

    if (vipHit) setIsVip(true);

    /* Auto-resize textarea back */
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    /* Bot follow-up after a pause */
    const currentTier = getTier(newTotal);

    setTimeout(() => {
      if (newTotal >= WORD_THRESHOLD || vipHit) {
        setMessages((prev) => [
          ...prev,
          { id: `bot-unlock-${Date.now()}`, role: "bot", text: UNLOCK_RESPONSE },
        ]);
      } else if (currentTier > highestTier && TIER_RESPONSES[currentTier]) {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-tier-${currentTier}-${Date.now()}`,
            role: "bot",
            text: TIER_RESPONSES[currentTier],
          },
        ]);
        setHighestTier(currentTier);
      }
    }, 900);
  }, [input, totalWords, highestTier, getTier]);

  /* Auto-grow textarea */
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  return (
    <section className="py-24 lg:py-30 px-6 sm:px-10 lg:px-20 bg-background">
      <div className="max-w-[1440px] mx-auto">
        {/* ── Section header ── */}
        <div className="mb-16 lg:mb-20 max-w-xl">
          <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            Start here
          </p>
          <h2
            className="font-heading font-bold text-primary leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Describe your challenge.
            <br />
            We prepare before we meet.
          </h2>
        </div>

        {/* ── Chat panel ── */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-border bg-on-primary overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                aria-hidden="true"
                className="flex-shrink-0"
              >
                <circle cx="4" cy="4" r="4" fill="var(--color-accent)" />
              </svg>
              <span className="font-sans text-sm font-medium text-primary">
                Manasflow
              </span>

              <AnimatePresence>
                {isVip && (
                  <motion.span
                    key="vip-tag"
                    {...tagReveal}
                    className="ml-auto font-sans text-[11px] font-semibold tracking-[0.15em] uppercase border border-accent text-accent px-3 py-1"
                  >
                    Priority Executive
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Messages area */}
            <div
              ref={scrollRef}
              className="h-[380px] sm:h-[420px] overflow-y-auto px-6 py-6"
            >
              <div className="flex flex-col gap-4">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      layout="position"
                      {...messageFade}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[75%] px-5 py-3.5 font-sans text-[14px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-accent text-on-primary"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Input area */}
            <div className="border-t border-border px-6 py-4">
              <div className="flex items-end gap-3">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={handleTextareaChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Describe your repetitive workflow..."
                  rows={1}
                  className="flex-1 resize-none bg-transparent font-sans text-sm text-foreground placeholder:text-secondary focus:outline-none py-1"
                  aria-label="Describe your workflow"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="flex-shrink-0 p-2 text-accent transition-colors duration-200 disabled:text-border disabled:cursor-not-allowed hover:text-primary cursor-pointer"
                  aria-label="Send message"
                >
                  <PaperPlaneIcon className="w-[18px] h-[18px]" />
                </button>
              </div>

              {/* Progress track */}
              <div className="mt-4 flex items-center gap-4">
                <div className="flex-1 h-[2px] bg-border overflow-hidden">
                  <motion.div
                    className="h-full bg-accent origin-left"
                    animate={{ scaleX: progress / 100 }}
                    transition={{
                      type: "spring" as const,
                      damping: 30,
                      stiffness: 180,
                    }}
                  />
                </div>
                <span className="font-sans text-[11px] font-medium text-secondary tabular-nums whitespace-nowrap tracking-wide">
                  {totalWords} / {WORD_THRESHOLD}
                </span>
              </div>
            </div>

            {/* CTA bar */}
            <div className="px-6 pb-6 pt-2">
              <AnimatePresence mode="wait">
                {isUnlocked ? (
                  <motion.div
                    key="cal-embed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full h-[400px] border border-border bg-background mt-4 overflow-hidden"
                  >
                    <Cal
                      calLink="rick/get-rick-rolled"
                      style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    />
                  </motion.div>
                ) : (
                  <motion.button
                    key="locked-btn"
                    type="button"
                    disabled={true}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full flex items-center justify-center gap-3 font-sans font-medium text-sm tracking-wide px-8 py-4 transition-colors duration-300 bg-muted text-secondary cursor-not-allowed"
                    aria-label={`Share ${WORD_THRESHOLD - totalWords} more words to unlock booking`}
                  >
                    <LockClosedIcon className="w-4 h-4" />
                    {`${WORD_THRESHOLD - totalWords} words to unlock`}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
