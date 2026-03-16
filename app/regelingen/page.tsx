import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regelingen — NCDE",
  description:
    "Een overzicht van de beschikbare subsidies en regelingen voor duurzame energie in Nederland. Informeer u over de mogelijkheden voor uw woning of onderneming.",
};

const subsidies = [
  {
    icon: "solar_power",
    title: "ISDE",
    subtitle: "Investeringssubsidie Duurzame Energie",
    status: "Actief",
    statusColor: "bg-accent-gold text-charcoal",
    description:
      "Subsidie voor de aanschaf van warmtepompen, zonneboilers, isolatiemaatregelen en aansluiting op een warmtenet. Particulieren en zakelijke gebruikers komen in aanmerking.",
    bedrag: "Tot € 3.675",
    deadline: "31 december 2025",
    link: "https://www.rvo.nl/subsidies-financiering/isde",
  },
  {
    icon: "bolt",
    title: "SDE++",
    subtitle: "Stimulering Duurzame Energieproductie",
    status: "Actief",
    statusColor: "bg-accent-gold text-charcoal",
    description:
      "Exploitatiesubsidie voor grootschalige duurzame energieproductie en CO₂-reductie. Gericht op bedrijven en (non-)profitinstellingen met projecten voor hernieuwbare energie.",
    bedrag: "Variabel per project",
    deadline: "Openstellingsronde 2025",
    link: "https://www.rvo.nl/subsidies-financiering/sde",
  },
  {
    icon: "swap_vert",
    title: "Salderingsregeling",
    subtitle: "Teruglevering zonnepanelen",
    status: "Verlengd",
    statusColor: "bg-charcoal/10 text-charcoal",
    description:
      "De regeling waarmee huishoudens opgewekte zonne-energie mogen wegstrepen tegen verbruik. Verlengd tot 2027, waarna een geleidelijke afbouw volgt.",
    bedrag: "Besparing op energierekening",
    deadline: "Afbouw vanaf 2027",
    link: "/salderingsregeling",
  },
  {
    icon: "home",
    title: "Nationaal Isolatieprogramma",
    subtitle: "Woningisolatie subsidie",
    status: "Actief",
    statusColor: "bg-accent-gold text-charcoal",
    description:
      "Subsidie voor het isoleren van vloeren, daken, gevels en het plaatsen van hoogrendementsglas. Speciaal gericht op woningeigenaren met een slecht energielabel.",
    bedrag: "Tot € 5.250",
    deadline: "Doorlopend",
    link: "https://www.rvo.nl/subsidies-financiering/nationaal-isolatieprogramma",
  },
  {
    icon: "electric_car",
    title: "SEEH",
    subtitle: "Subsidie Energiebesparing Eigen Huis",
    status: "Actief",
    statusColor: "bg-accent-gold text-charcoal",
    description:
      "Subsidie voor particuliere woningeigenaren die minimaal twee energiebesparende maatregelen nemen, zoals isolatie gecombineerd met een warmtepomp.",
    bedrag: "Tot € 4.050",
    deadline: "Zolang budget beschikbaar",
    link: "https://www.rvo.nl/subsidies-financiering/seeh",
  },
  {
    icon: "battery_charging_full",
    title: "EIA",
    subtitle: "Energie-investeringsaftrek",
    status: "Actief",
    statusColor: "bg-accent-gold text-charcoal",
    description:
      "Fiscaal voordeel voor ondernemers die investeren in energiezuinige technieken en duurzame energie. Tot 45,5% van de investeringskosten aftrekbaar van de fiscale winst.",
    bedrag: "45,5% fiscale aftrek",
    deadline: "Doorlopend",
    link: "https://www.rvo.nl/subsidies-financiering/eia",
  },
];

export default function RegelingenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray mb-10">
            <Link href="/" className="hover:text-accent-gold transition-colors">
              Home
            </Link>
            <span className="material-symbols-outlined text-[12px]">
              chevron_right
            </span>
            <span className="text-accent-gold">Regelingen</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Regelingen
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Een overzicht van de beschikbare subsidies en regelingen voor
              duurzame energie in Nederland. Informeer u over de mogelijkheden
              voor uw woning of onderneming.
            </p>
          </div>
        </div>
      </section>

      {/* Subsidies & Regelingen */}
      <section className="py-24 px-6 lg:px-20 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Subsidies &amp; Regelingen
            </h2>
            <p className="text-gray max-w-2xl mx-auto text-lg">
              De Nederlandse overheid biedt diverse financiële regelingen om de
              energietransitie te versnellen. Hieronder vindt u de belangrijkste
              subsidies op een rij.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidies.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-charcoal/5 p-8 hover:shadow-lg hover:border-accent-gold/30 transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent-gold text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-accent-gold font-semibold mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm text-gray leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <div className="border-t border-charcoal/5 pt-5 space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-accent-gold text-base">
                      payments
                    </span>
                    <span className="font-semibold text-charcoal">
                      {item.bedrag}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-accent-gold text-base">
                      schedule
                    </span>
                    <span className="text-gray">{item.deadline}</span>
                  </div>
                </div>
                {item.link.startsWith("/") ? (
                  <Link
                    href={item.link}
                    className="flex items-center justify-center gap-2 w-full py-3 border-2 border-charcoal/10 rounded-lg text-sm font-bold text-charcoal hover:border-accent-gold hover:text-accent-gold transition-colors group-hover:border-accent-gold"
                  >
                    Meer informatie
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border-2 border-charcoal/10 rounded-lg text-sm font-bold text-charcoal hover:border-accent-gold hover:text-accent-gold transition-colors group-hover:border-accent-gold"
                  >
                    Meer informatie
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 px-6 lg:px-20 bg-white border-t border-charcoal/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-accent-gold">
              info
            </span>
            <h3 className="font-bold text-charcoal">Belangrijke informatie</h3>
          </div>
          <p className="text-sm text-gray leading-relaxed max-w-2xl mx-auto">
            De informatie op deze pagina is met zorg samengesteld maar kan
            wijzigingen ondergaan. Raadpleeg altijd de officiële bronnen (RVO,
            Rijksoverheid) voor de meest actuele voorwaarden en bedragen. NCDE
            is een informatief platform en verstrekt geen subsidies.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto bg-charcoal text-white p-12 lg:p-20 rounded-2xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-6">
              Hulp nodig bij uw aanvraag?
            </h2>
            <p className="text-xl text-gray mb-10 max-w-2xl mx-auto">
              Onze adviseurs helpen u graag bij het vinden van de juiste
              regeling voor uw situatie en begeleiden u door het aanvraagproces.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent-gold text-charcoal px-10 py-4 font-black uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
            >
              Neem contact op
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
    </>
  );
}
