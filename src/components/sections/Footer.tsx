import Link from "next/link";
import { FOOTER_TEXT } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-night border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-display text-lg text-warm-white font-semibold">
            Jakub Digital
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-white/45">
            <Link href="/gdpr" className="hover:text-warm-white transition-colors">
              Ochrana osobních údajů
            </Link>
            <span className="text-warm-white/20">|</span>
            <span>&copy; {year} Jakub Málek</span>
          </div>

          <p className="text-warm-white/45 text-sm max-w-xs md:text-right leading-relaxed">
            {FOOTER_TEXT}
          </p>
        </div>
      </div>
    </footer>
  );
}
