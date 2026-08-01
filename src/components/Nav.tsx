"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Služby", href: "/#sluzby" },
  { label: "Pro koho", href: "/#pro-koho" },
  { label: "Jak pracuji", href: "/#jak-pracuji" },
  { label: "Reference", href: "/#reference" },
  { label: "Kdo jsem", href: "/#kdo-jsem" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-midnight-teal/95 backdrop-blur-sm border-b border-antique-brass/10"
      aria-label="Hlavní navigace"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white text-lg font-display tracking-tight">
          <span className="text-antique-brass">Jakub</span>{" "}
          <span className="font-light">Digital</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-steel-grey-light hover:text-antique-brass transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            className="text-sm px-4 py-2 bg-antique-brass text-white rounded-lg hover:bg-antique-brass/90 transition-colors duration-300"
          >
            Domluvit konzultaci
          </Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 text-white"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-5 h-px bg-current transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current mt-[5px] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current mt-[5px] transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-2 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="text-sm text-steel-grey-light hover:text-antique-brass transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            onClick={close}
            className="inline-flex items-center justify-center px-4 py-3 bg-antique-brass text-white text-sm font-medium tracking-wide uppercase rounded-lg hover:bg-antique-brass/90 transition-colors duration-300"
          >
            Domluvit konzultaci
          </Link>
        </div>
      </div>
    </nav>
  );
}
