"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minus, Maximize2 } from "lucide-react";

interface Message {
  type: "user" | "ai" | "system";
  text: string;
}

const AI_RESPONSES: Record<string, string> = {
  "help": "Available commands:\n• services — View our service offerings\n• about — Learn about Corenova Technology\n• contact — Get our contact information\n• ceo — Learn about our CEO\n• security — Our cybersecurity capabilities\n• ai — Our AI automation solutions\n• stack — Our technology stack\n• clear — Clear terminal",
  "services": "🚀 Corenova Technology Services:\n\n  1. AI Automation — Intelligent workflow automation\n  2. Cybersecurity — Penetration testing & infrastructure protection\n  3. Software Development — Custom enterprise applications\n  4. Web Development — High-performance web apps\n  5. Cloud Solutions — Architecture, migration & management\n  6. Technology Consulting — Strategic tech advisory",
  "about": "CORENOVA TECHNOLOGY LTD is a next-generation technology company based in Lagos, Nigeria. We help businesses transform through AI, Automation, Cybersecurity, Software Development, and Cloud Solutions.\n\nFounded in 2026 by Michael Olowoselu.",
  "contact": "📧 Email: contact@corenovatechnology.com\n📞 Phone: +234 913 181 5101\n📍 Location: Lagos, Nigeria\n\n🌐 Website: corenovatechnology.com\n🐦 Twitter: @corenovaltd\n📸 Instagram: @corenovaltd",
  "ceo": "👤 Michael Olowoselu\nFounder & Chief Executive Officer\n\nMichael is a visionary technology leader passionate about leveraging AI and cybersecurity to transform businesses across Africa and beyond.",
  "security": "🛡️ Cybersecurity Services:\n\n• Penetration Testing & Vulnerability Assessments\n• Security Architecture Design\n• Incident Response Planning\n• Compliance & Regulatory Support (NDPR, GDPR)\n• 24/7 Security Monitoring\n• Security Awareness Training",
  "ai": "🤖 AI & Automation Solutions:\n\n• Intelligent Process Automation (IPA)\n• Custom AI Model Development\n• Chatbot & Virtual Assistant Development\n• Predictive Analytics & Forecasting\n• Computer Vision Solutions\n• Natural Language Processing (NLP)",
  "stack": "⚡ Our Technology Stack:\n\n  Frontend: Next.js, React, TypeScript, Tailwind CSS\n  Backend: Node.js, Python, Go\n  Cloud: AWS, Azure, Google Cloud, Cloudflare\n  AI/ML: TensorFlow, PyTorch, OpenAI\n  Security: Sentry, Cloudflare WAF, Turnstile\n  Database: PostgreSQL, MongoDB, Redis",
};

function getAIResponse(input: string): string {
  const normalized = input.toLowerCase().trim();

  // Check for exact matches first
  if (AI_RESPONSES[normalized]) return AI_RESPONSES[normalized];

  // Check for partial matches
  for (const [key, value] of Object.entries(AI_RESPONSES)) {
    if (normalized.includes(key)) return value;
  }

  // Greeting responses
  if (normalized.match(/^(hi|hello|hey|yo|sup)/)) {
    return "Hello! 👋 Welcome to Corenova Technology.\nI'm an AI assistant here to help you learn about our services.\n\nType 'help' to see available commands.";
  }

  if (normalized.match(/^(who are you|what are you)/)) {
    return "I'm Corenova AI — a virtual assistant built to showcase our technology capabilities. I can tell you about our services, team, and tech stack.\n\nType 'help' to see what I can do.";
  }

  // Default response
  return `Command not recognized: "${input}"\n\nType 'help' to see available commands.`;
}

export function AiTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "system", text: "CORENOVA AI TERMINAL v1.0" },
    { type: "system", text: "Type 'help' for available commands.\n" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input.trim();

    if (userInput.toLowerCase() === "clear") {
      setMessages([
        { type: "system", text: "CORENOVA AI TERMINAL v1.0" },
        { type: "system", text: "Type 'help' for available commands.\n" },
      ]);
      setInput("");
      return;
    }

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: userInput }]);
    setInput("");
    setIsTyping(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    // Simulate AI typing delay safely
    timerRef.current = setTimeout(() => {
      const response = getAIResponse(userInput);
      setMessages((prev) => [...prev, { type: "ai", text: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow"
          >
            <Terminal size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-[90] w-[90vw] max-w-md h-[60vh] max-h-[500px] rounded-2xl bg-[#0a0e17] border border-border/50 shadow-2xl shadow-black/40 overflow-hidden flex flex-col"
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1220] border-b border-border/30">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-primary" />
                <span className="text-xs font-mono text-muted-foreground">corenova-ai</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Minus size={14} />
                </button>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-red-400 transition-colors">
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-2" onClick={() => inputRef.current?.focus()}>
              {messages.map((msg, idx) => (
                <div key={idx}>
                  {msg.type === "system" && (
                    <div className="text-primary/70 text-xs whitespace-pre-wrap">{msg.text}</div>
                  )}
                  {msg.type === "user" && (
                    <div className="text-foreground whitespace-pre-wrap">
                      <span className="text-secondary">❯</span> {msg.text}
                    </div>
                  )}
                  {msg.type === "ai" && (
                    <div className="text-muted-foreground whitespace-pre-wrap pl-2 border-l-2 border-primary/20 ml-1">
                      {msg.text}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="text-primary/60 text-xs animate-pulse pl-2">
                  ● ● ● thinking...
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-border/30 bg-[#0d1220]">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-secondary shrink-0">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a command..."
                  autoFocus
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
