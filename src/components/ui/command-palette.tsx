"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CommandItem {
  id: string;
  label: string;
  description: string;
  action: () => void;
  category: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const items: CommandItem[] = [
    { id: "home", label: "Home", description: "Go to the homepage", action: () => router.push("/"), category: "Navigation" },
    { id: "about", label: "About the CEO", description: "Learn about Michael Olowoselu", action: () => router.push("/about"), category: "Navigation" },
    { id: "services", label: "Our Services", description: "View all services we offer", action: () => router.push("/#services"), category: "Navigation" },
    { id: "contact", label: "Contact Us", description: "Get in touch with our team", action: () => router.push("/#contact"), category: "Navigation" },
    { id: "brand", label: "Brand Guidelines", description: "View our brand identity", action: () => router.push("/brand"), category: "Navigation" },
    { id: "ai", label: "AI Automation", description: "Intelligent automation solutions", action: () => router.push("/#services"), category: "Services" },
    { id: "cyber", label: "Cybersecurity", description: "Digital infrastructure protection", action: () => router.push("/#services"), category: "Services" },
    { id: "software", label: "Software Development", description: "Custom software solutions", action: () => router.push("/#services"), category: "Services" },
    { id: "web", label: "Web Development", description: "Modern web applications", action: () => router.push("/#services"), category: "Services" },
    { id: "cloud", label: "Cloud Solutions", description: "Scalable cloud architecture", action: () => router.push("/#services"), category: "Services" },
    { id: "privacy", label: "Privacy Policy", description: "Our data privacy policy", action: () => router.push("/legal/privacy"), category: "Legal" },
    { id: "terms", label: "Terms & Conditions", description: "Our terms of service", action: () => router.push("/legal/terms"), category: "Legal" },
    { id: "email", label: "Email Us", description: "contact@corenovatechnology.com", action: () => window.open("mailto:contact@corenovatechnology.com"), category: "Quick Actions" },
    { id: "call", label: "Call Us", description: "+234 913 181 5101", action: () => window.open("tel:+2349131815101"), category: "Quick Actions" },
    { id: "twitter", label: "Twitter / X", description: "@corenovaltd", action: () => window.open("https://x.com/corenovaltd", "_blank"), category: "Social" },
    { id: "instagram", label: "Instagram", description: "@corenovaltd", action: () => window.open("https://www.instagram.com/corenovaltd", "_blank"), category: "Social" },
    { id: "tiktok", label: "TikTok", description: "@corenovaltd", action: () => window.open("https://www.tiktok.com/@corenovaltd", "_blank"), category: "Social" },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  const handleSelect = useCallback((item: CommandItem) => {
    item.action();
    setIsOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/10 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/20 transition-all"
      >
        <Search size={14} />
        <span>Search...</span>
        <kbd className="ml-2 px-1.5 py-0.5 rounded bg-background border border-border text-[10px] font-mono">
          ⌘K
        </kbd>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
              onClick={() => { setIsOpen(false); setQuery(""); }}
            />

            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90vw] max-w-lg z-[201] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-border/50">
                <Search size={18} className="text-muted-foreground shrink-0" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search pages, services, actions..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
                />
                <button onClick={() => { setIsOpen(false); setQuery(""); }} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={16} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto p-2">
                {Object.keys(groupedItems).length === 0 ? (
                  <div className="p-8 text-center text-sm text-muted-foreground">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : (
                  Object.entries(groupedItems).map(([category, categoryItems]) => (
                    <div key={category} className="mb-2">
                      <p className="px-3 py-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                        {category}
                      </p>
                      {categoryItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item)}
                          className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-secondary/10 transition-colors group"
                        >
                          <div className="flex flex-col items-start">
                            <span className="font-medium">{item.label}</span>
                            <span className="text-xs text-muted-foreground">{item.description}</span>
                          </div>
                          <ArrowRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-border/50 text-[10px] text-muted-foreground">
                <span>Navigate with ↑↓ • Select with ↵</span>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
