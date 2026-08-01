import ContactForm from "@/components/ContactForm";
import { CONTACT_HEADING, CONTACT_TEXT } from "@/data/content";

export default function Contact() {
  return (
    <section id="kontakt" className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-antique-brass text-sm tracking-[0.2em] uppercase mb-4 font-body">
              Kontakt
            </p>
            <h2 className="text-3xl md:text-4xl text-ink font-display leading-tight mb-6">
              {CONTACT_HEADING}
            </h2>
            <p className="text-steel-grey text-sm leading-relaxed mb-8">
              {CONTACT_TEXT}
            </p>
            <div className="space-y-4 text-sm">
              <a href="mailto:jakub@jakubdigital.cz" className="inline-flex items-center gap-3 text-ink hover:text-antique-brass transition-colors">
                <span className="text-antique-brass">→</span>
                <span>jakub@jakubdigital.cz</span>
              </a>
              <p className="flex items-center gap-3 text-steel-grey">
                <span className="text-antique-brass">→</span>
                Odpověď zpravidla do jednoho pracovního dne.
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
