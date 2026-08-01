import Link from "next/link";
import { FOOTER_TEXT } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-12 bg-midnight-teal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-steel-grey-light text-sm">
            Máte otázku? Napište mi na{" "}
            <a href="mailto:jakub@jakubdigital.cz" className="text-antique-brass hover:text-antique-brass/80 transition-colors duration-300">
              jakub@jakubdigital.cz
            </a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-antique-brass/10">
          <p className="text-white text-lg font-display tracking-tight">
            <span className="text-antique-brass">Jakub</span>{" "}
            <span className="font-light">Digital</span>
          </p>
          <p className="text-steel-grey-light text-xs flex flex-col items-center gap-1.5">
            <span>
              &copy; {new Date().getFullYear()} Jakub Digital. Všechna práva vyhrazena.
            </span>
            <Link
              href="/gdpr"
              className="hover:text-antique-brass transition-colors duration-300 underline underline-offset-2"
            >
              Ochrana osobních údajů
            </Link>
          </p>
          <p className="text-steel-grey-light text-xs max-w-xs text-center md:text-right">{FOOTER_TEXT}</p>
        </div>
      </div>
    </footer>
  );
}
