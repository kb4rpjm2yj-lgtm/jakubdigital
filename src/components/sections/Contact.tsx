import ContactForm from "@/components/ContactForm";
import { CONTACT_HEADING, CONTACT_TEXT } from "@/data/content";

export default function Contact() {
  return (
    <section id="kontakt" className="reveal scroll-mt-16 py-24 md:py-32 bg-graphite">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-signal-orange mb-4">
              KONTAKT
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-4">
              {CONTACT_HEADING}
            </h2>
            <p className="text-warm-white/60 text-sm leading-relaxed mb-6">
              {CONTACT_TEXT}
            </p>
            <a
              href="mailto:jakub@jakubdigital.cz"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-signal-orange hover:text-signal-orange/70 transition-colors"
            >
              <span>├─</span>
              <span>jakub@jakubdigital.cz</span>
              <span>─┤</span>
            </a>
            <p className="font-mono text-[10px] text-callout/50 mt-4">
              Odpověď do jednoho pracovního dne.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
