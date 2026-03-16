import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Werkwijze — NCDE",
  description:
    "Van eerste scan tot volledige realisatie: NCDE begeleidt u stap voor stap naar een toekomstbestendige en energie-onafhankelijke woning.",
};

const steps = [
  {
    number: 1,
    icon: "phone_in_talk",
    title: "Vrijblijvende Intake",
    description:
      "Tijdens een kort telefonisch gesprek of bezoek brengen we uw huidige woonsituatie en energie-ambities in kaart. Geen jargon, gewoon duidelijke taal.",
  },
  {
    number: 2,
    icon: "analytics",
    title: "Data-analyse & Woning Scan",
    description:
      "Onze experts gebruiken geavanceerde meetinstrumenten en historische verbruiksdata om de thermische schil van uw woning objectief te beoordelen.",
  },
  {
    number: 3,
    icon: "description",
    title: "Persoonlijk Energieplan",
    description:
      "U ontvangt een gedetailleerd rapport met concrete maatregelen, de verwachte investering, terugverdientijd en beschikbare subsidies.",
  },
  {
    number: 4,
    icon: "construction",
    title: "Gecoördineerde Uitvoering",
    description:
      "Wij selecteren gecertificeerde installateurs en bewaken de kwaliteit tijdens de uitvoering. Wij zijn uw enige aanspreekpunt voor alle werkzaamheden.",
  },
  {
    number: 5,
    icon: "verified_user",
    title: "Monitoring & Nazorg",
    description:
      "Na oplevering controleren we of de installaties naar behoren werken en of de besparingen worden gerealiseerd zoals beloofd in het energieplan.",
  },
];

const faqs = [
  {
    question: "Hoe lang duurt het traject van intake tot oplevering?",
    answer:
      "Gemiddeld duurt een volledig traject tussen de 3 en 6 maanden, afhankelijk van de complexiteit van de maatregelen en de beschikbaarheid van materiaal.",
  },
  {
    question: "Zijn de kosten van het energieplan aftrekbaar?",
    answer:
      "In veel gemeenten zijn er specifieke subsidies voor advieskosten. Daarnaast kunnen deze kosten vaak meegefinancierd worden in een energiebespaarlening.",
  },
  {
    question: "Werken jullie met onafhankelijke installateurs?",
    answer:
      "Ja, NCDE is een onafhankelijke stichting. Wij selecteren uitvoerders puur op basis van kwaliteit, certificering en prijs-kwaliteitverhouding.",
  },
];

export default function WerkwijzePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white px-6 md:px-20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent-gold font-bold tracking-widest uppercase text-xs mb-4 block">
            Methodologie
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Onze Werkwijze
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Van eerste scan tot volledige realisatie: NCDE begeleidt u stap voor
            stap naar een toekomstbestendige en energie-onafhankelijke woning.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 md:px-20 py-20 bg-background-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
            In 5 stappen naar een lagere energierekening
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="size-12 rounded-full border-2 border-accent-gold flex items-center justify-center text-charcoal font-bold text-lg bg-white shrink-0">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-full bg-charcoal/10 my-2"></div>
                  )}
                </div>
                <div className={i < steps.length - 1 ? "pb-12 pt-1" : "pt-1"}>
                  <h3 className="text-xl font-bold text-charcoal mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-gold">
                      {step.icon}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-charcoal/60 text-base leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-charcoal/5 px-6 md:px-20 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">
            Veelgestelde Vragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white p-6 rounded-xl border border-charcoal/5 shadow-sm group"
              >
                <summary className="flex justify-between items-center w-full cursor-pointer list-none font-bold text-charcoal">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-accent-gold group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="mt-4 text-charcoal/70 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto bg-charcoal rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om te beginnen?
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto font-medium">
              Plan een gratis intakegesprek in met een van onze
              energie-adviseurs en ontdek de mogelijkheden voor uw woning.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent-gold text-charcoal px-8 py-3 rounded-lg font-bold hover:bg-white transition-all"
              >
                Direct een afspraak maken
              </Link>
              <Link
                href="/oplossingen"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                Bekijk oplossingen
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
    </>
  );
}
