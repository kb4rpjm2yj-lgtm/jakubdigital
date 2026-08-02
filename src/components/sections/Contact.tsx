import ContactForm from "@/components/ContactForm";
import { CONTACT_HEADING, CONTACT_TEXT } from "@/data/content";

export default function Contact() {
  return (
    <section id="kontakt" className="reveal scroll-mt-16 py-24 md:py-32 blueprint-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-accent font-medium tracking-wide text-sm mb-4">
              Kontakt
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-warm-white mb-4">
              {CONTACT_HEADING}
            </h2>
            <p className="text-warm-white/60 text-base leading-relaxed mb-8">
              {CONTACT_TEXT}
            </p>
            <a
              href="mailto:jakub@jakubdigital.cz"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg font-medium"
            >
              jakub@jakubdigital.cz
            </a>
            <p className="text-warm-white/45 text-sm mt-4">
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
