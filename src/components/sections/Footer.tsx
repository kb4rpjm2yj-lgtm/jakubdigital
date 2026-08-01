import Link from "next/link";
import { FOOTER_TEXT } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-graphite border-t border-grid-blue/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-0">
          {/* Logo */}
          <p className="font-mono text-sm tracking-[0.15em] text-signal-orange">
            JAKUB DIGITAL
          </p>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono tracking-[0.1em] text-callout/50">
            <Link
              href="/gdpr"
              className="hover:text-callout transition-colors"
            >
              OCHRANA OSOBNÍCH ÚDAJŮ
            </Link>
            <span className="text-callout/20">│</span>
            <span>&copy; {year} JAKUB MÁLEK</span>
          </div>

          {/* Tagline */}
          <p className="text-warm-white/40 text-xs max-w-xs md:text-right leading-relaxed">
            {FOOTER_TEXT}
          </p>
        </div>
      </div>
    </footer>
  );
}
