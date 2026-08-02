"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { href: "#sluzby", label: "Služby" },
  { href: "#prace", label: "Práce" },
  { href: "#proces", label: "Proces" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-sm border-b border-ink/10 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display text-lg text-ink font-semibold group-hover:text-accent transition-colors">
            Jakub Digital
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/70 hover:text-accent transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink/75 hover:text-accent transition-colors"
          aria-label="Menu"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <rect y="0" width="18" height="1.5" rx="0.5" fill="currentColor" />
            <rect y="5" width="18" height="1.5" rx="0.5" fill="currentColor" />
            <rect y="10" width="18" height="1.5" rx="0.5" fill="currentColor" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-paper border-t border-ink/10 px-6 pb-6 pt-2 space-y-2 shadow-card">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-ink/75 hover:text-accent transition-colors py-1.5 font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
