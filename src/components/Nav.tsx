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
        <a href="#" className="flex items-center gap-2 group">
          <span className="dim-node group-hover:bg-signal-orange transition-colors" />
          <span className="font-mono text-xs tracking-[0.15em] text-signal-orange group-hover:text-signal-orange/80 transition-colors font-medium">
            JAKUB DIGITAL
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-5">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] text-callout/55 hover:text-signal-orange transition-colors font-medium"
            >
              <span className="text-callout/25">0{i + 1}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-callout/55 hover:text-signal-orange transition-colors"
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
        <nav className="md:hidden bg-graphite border-t border-grid-blue/20 px-6 pb-6 pt-2 space-y-2">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-callout/55 hover:text-signal-orange transition-colors py-1.5 font-medium"
            >
              <span className="text-callout/35">0{i + 1}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
