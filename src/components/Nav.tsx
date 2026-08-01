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
          ? "bg-graphite/95 backdrop-blur-sm border-b border-grid-blue/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm tracking-[0.15em] text-signal-orange hover:text-signal-orange/80 transition-colors"
        >
          JAKUB DIGITAL
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] tracking-[0.15em] text-warm-white/60 hover:text-signal-orange transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-warm-white/60 hover:text-signal-orange transition-colors"
          aria-label="Menu"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <rect y="0" width="20" height="2" rx="1" fill="currentColor" />
            <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
            <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-graphite border-t border-grid-blue/20 px-6 pb-6 pt-2 space-y-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-mono text-[11px] tracking-[0.15em] text-warm-white/60 hover:text-signal-orange transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
