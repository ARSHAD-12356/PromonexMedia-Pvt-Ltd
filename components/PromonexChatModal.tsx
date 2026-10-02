"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, X, Send, Sparkles, MessageCircle, Phone } from "lucide-react";
import { getBotResponse, INITIAL_SUGGESTIONS, BotReply } from "@/lib/promonexKnowledgeBase";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  suggestions?: string[];
  cta?: {
    label: string;
    action: "whatsapp" | "contact" | "call";
    url?: string;
  };
}

interface PromonexChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOP_SUGGESTIONS = [
  "🎯 Services",
  "💰 Pricing & Packages",
  "🚀 Free Growth Audit",
  "📍 Office Location",
  "📈 Results & ROI",
  "📞 WhatsApp / Contact",
];

const INITIAL_MESSAGE: ChatMessage = {
  id: "msg_init",
  sender: "bot",
  text: `👋 **Hello! Welcome to Promonex Media.**

I am **Promonex Ai**, your 24/7 digital growth assistant. How can I help you scale your business today?

Ask me about our **Performance Ads**, **SEO**, **Website Development**, **Pricing**, or claim your **Free Growth Audit**!`,
  time: "Just now",
  suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
  cta: {
    label: "Chat with Us on WhatsApp",
    action: "whatsapp",
    url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20have%20an%20inquiry.",
  },
};

function formatMessageText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, idx) => {
    // Process **bold** text
    const parts = line.split(/(\*\*.*?\*\*)/g);
    const formattedLine = parts.map((part, pIdx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={pIdx} className="font-semibold text-white drop-shadow-sm">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
      return (
        <li key={idx} className="ml-4 list-disc text-slate-200 my-0.5 leading-relaxed">
          {formattedLine}
        </li>
      );
    }

    if (line.trim() === "") {
      return <div key={idx} className="h-1.5" />;
    }

    return (
      <p key={idx} className="my-0.5 leading-relaxed text-slate-200">
        {formattedLine}
      </p>
    );
  });
}

export default function PromonexChatModal({ isOpen, onClose }: PromonexChatModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom("auto");
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages, isTyping]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setMessages([
        {
          ...INITIAL_MESSAGE,
          id: `msg_init_${Date.now()}`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
      setIsRefreshing(false);
    }, 280);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText("");
    setIsTyping(true);

    // Realistic brief AI delay (450ms)
    setTimeout(() => {
      const reply: BotReply = getBotResponse(text);
      const botMsg: ChatMessage = {
        id: `bot_${Date.now()}`,
        sender: "bot",
        text: reply.text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestions: reply.suggestions,
        cta: reply.cta,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 25 }}
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-w-[430px] h-[580px] max-h-[82vh] bg-[#020B35]/96 backdrop-blur-2xl border border-[#00D9FF]/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(0,217,255,0.25)] flex flex-col overflow-hidden select-none"
          role="dialog"
          aria-labelledby="promonex-ai-title"
        >
          {/* Subtle interior glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#00D9FF]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8257E8]/12 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* TOP HEADER: Promonex Ai name + Exactly TWO icons on top right (Refresh & Close) */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.09] bg-[#05113d]/90 shrink-0">
            {/* Left: Avatar & Title */}
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-br from-[#0C246E] to-[#020B35] border border-[#00D9FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.4)]">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF] animate-pulse" />
                <Sparkles size={16} className="text-[#00D9FF] absolute" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3
                    id="promonex-ai-title"
                    className="text-[17px] font-bold text-white tracking-wide flex items-center gap-1.5"
                  >
                    Promonex Ai
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30">
                    Bot
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Digital Growth Assistant</span>
                </div>
              </div>
            </div>

            {/* Right: Exactly TWO Icons (Refresh & Close X) */}
            <div className="flex items-center gap-2">
              {/* 1. Refresh Icon Button */}
              <button
                type="button"
                onClick={handleRefresh}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.08] active:scale-90 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#00D9FF]"
                aria-label="Refresh conversation"
                title="Restart Chat"
              >
                <RotateCcw
                  size={18}
                  className={`transition-transform duration-300 ${
                    isRefreshing ? "-rotate-180" : "hover:-rotate-45"
                  }`}
                />
              </button>

              {/* 2. Close Cross Icon Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.08] active:scale-90 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#00D9FF]"
                aria-label="Close Promonex Ai chat"
                title="Close"
              >
                <X size={20} className="stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* TOP QUICK SUGGESTION CHIPS */}
          <div className="px-4 py-2 border-b border-white/[0.06] bg-[#020B35]/60 overflow-x-auto no-scrollbar flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-medium text-slate-400 shrink-0">Quick Ask:</span>
            {TOP_SUGGESTIONS.map((sug) => (
              <button
                key={sug}
                type="button"
                onClick={() => handleSendMessage(sug)}
                className="text-[11px] font-medium text-slate-200 hover:text-[#00D9FF] bg-white/[0.05] hover:bg-[#00D9FF]/15 border border-white/[0.08] hover:border-[#00D9FF]/40 px-2.5 py-1 rounded-full whitespace-nowrap transition-all duration-200 active:scale-95 shrink-0"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* CHAT MESSAGES BODY */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                {/* Bubble Container */}
                <div
                  className={`max-w-[85%] rounded-2xl p-3 sm:p-3.5 text-xs sm:text-[13px] shadow-md select-text ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-[#00D9FF] to-[#0099FF] text-[#020B35] font-medium rounded-br-none"
                      : "bg-[#071647]/90 border border-white/[0.09] text-slate-100 rounded-bl-none shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  ) : (
                    <div className="leading-relaxed space-y-1">
                      {formatMessageText(msg.text)}
                    </div>
                  )}

                  {/* Direct Action CTA Button inside Bot Message */}
                  {msg.cta && (
                    <div className="mt-2.5 pt-2 border-t border-white/[0.08]">
                      {msg.cta.action === "whatsapp" && (
                        <a
                          href={msg.cta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#020B35] font-bold text-xs shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all duration-200 active:scale-95"
                        >
                          <MessageCircle size={14} className="fill-[#020B35]" />
                          <span>{msg.cta.label}</span>
                        </a>
                      )}
                      {msg.cta.action === "call" && (
                        <a
                          href="tel:+917061941818"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#00D9FF] hover:bg-[#00BFFF] text-[#020B35] font-bold text-xs shadow-[0_0_15px_rgba(0,217,255,0.4)] transition-all duration-200 active:scale-95"
                        >
                          <Phone size={14} />
                          <span>Call +91 70619 41818</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Follow-up suggestions */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.suggestions.map((sug) => (
                      <button
                        key={sug}
                        type="button"
                        onClick={() => handleSendMessage(sug)}
                        className="text-[11px] font-medium text-cyan-300 hover:text-white bg-[#00D9FF]/10 hover:bg-[#00D9FF]/20 border border-[#00D9FF]/30 px-2.5 py-1 rounded-xl transition-all duration-200 active:scale-95"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}

                {/* Timestamp */}
                <span className="text-[10px] text-slate-500 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-[#071647]/90 border border-white/[0.09] p-3 rounded-2xl rounded-bl-none w-20 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-bounce" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* BOTTOM INPUT BAR */}
          <div className="p-3 border-t border-white/[0.09] bg-[#05113d]/90 shrink-0">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Promonex Ai anything..."
                className="w-full h-11 pl-4 pr-12 rounded-2xl bg-white/[0.06] border border-white/[0.12] text-white placeholder:text-slate-400 text-xs sm:text-sm outline-none transition focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/20"
              />
              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="absolute right-1.5 w-8 h-8 rounded-xl flex items-center justify-center bg-[#00D9FF] hover:bg-[#00E5FF] text-[#020B35] disabled:opacity-40 disabled:hover:bg-[#00D9FF] active:scale-95 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed shadow-[0_0_12px_rgba(0,217,255,0.4)]"
                aria-label="Send message"
              >
                <Send size={15} className="ml-0.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
