import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Noodvoorziening — NCDE",
  description:
    "Objectieve informatie over de continuïteit van uw energievoorziening bij calamiteiten en netinstabiliteit.",
};

export default function NoodpakketPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(#2a2a2a 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray mb-12">
            <Link href="/" className="hover:text-accent-gold transition-colors">
              Home
            </Link>
            <span className="material-symbols-outlined text-[12px]">
              chevron_right
            </span>
            <span className="text-accent-gold">Noodvoorziening</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Noodvoorziening &amp; Energie-Resilience
            </h1>
            <p className="text-xl text-gray font-light leading-relaxed">
              Objectieve informatie over de continuïteit van uw
              energievoorziening bij calamiteiten en netinstabiliteit. Het NCDE
              fungeert als uw strategisch adviseur in een onzeker
              energielandschap.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Waarom Resilience */}
      <section className="py-24 px-6 lg:px-20 bg-background-light">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-accent-gold text-sm font-bold uppercase tracking-widest mb-4">
              Analyse &amp; Context
            </h2>
            <h3 className="text-4xl font-bold mb-6">Waarom Resilience?</h3>
            <div className="space-y-6 text-gray leading-relaxed">
              <p>
                De Nederlandse energie-infrastructuur ondergaat een fundamentele
                transitie. De verschuiving van centrale opwek naar decentrale
                hernieuwbare bronnen zoals wind en zon brengt nieuwe uitdagingen
                met zich mee voor de netstabiliteit.
              </p>
              <p>
                Met de toenemende belasting door elektrificatie van vervoer en
                industrie, stijgt het risicoprofiel voor zowel organisaties als
                huishoudens. Resilience gaat niet alleen over noodstroom, maar
                over het vermogen om operationeel te blijven tijdens
                systeemverstoringen.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-gold">
                    check_circle
                  </span>
                  <span>Beperk economische schade bij netuitval</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-gold">
                    check_circle
                  </span>
                  <span>Garandeer veiligheid van vitale processen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-gold">
                    check_circle
                  </span>
                  <span>Voldoe aan zorgplicht en wetgeving</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-xl border border-charcoal/5">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-gold">
                analytics
              </span>
              Resilience Score Matrix
            </h4>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-sm font-bold uppercase mb-2">
                  <span>Netstabiliteit Risico</span>
                  <span className="text-accent-gold">Hoog</span>
                </div>
                <div className="w-full bg-charcoal/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent-gold h-full w-[75%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold uppercase mb-2">
                  <span>Decentralisatie Graad</span>
                  <span className="text-accent-gold">Medium</span>
                </div>
                <div className="w-full bg-charcoal/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent-gold h-full w-[45%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold uppercase mb-2">
                  <span>Calamiteiten Paraatheid</span>
                  <span className="text-accent-gold">Kritiek</span>
                </div>
                <div className="w-full bg-charcoal/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent-gold h-full w-[90%]"></div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-charcoal/10">
                <p className="text-xs text-gray italic">
                  Deze visualisatie is gebaseerd op geaggregeerde data van
                  regionale netbeheerders en NCDE risico-analyses (Q3 2023).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Protocollen */}
      <section className="py-24 px-6 lg:px-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-accent-gold text-sm font-bold uppercase tracking-widest mb-4">
              Operationele Standaard
            </h2>
            <h3 className="text-4xl font-bold">
              Protocollen bij Stroomuitval
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-accent-gold transition-colors">
              <div className="text-accent-gold text-3xl font-black mb-6">
                01
              </div>
              <h4 className="text-xl font-bold mb-4">Directe Acties</h4>
              <p className="text-gray text-sm leading-relaxed">
                Schakel gevoelige elektronica uit om piekspanning bij herstel te
                voorkomen. Controleer de hoofdschakelaar en identificeer de
                reikwijdte van de storing.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-accent-gold transition-colors">
              <div className="text-accent-gold text-3xl font-black mb-6">
                02
              </div>
              <h4 className="text-xl font-bold mb-4">Communicatie</h4>
              <p className="text-gray text-sm leading-relaxed">
                Raadpleeg de landelijke storingskaart
                (gasenstroomstoringen.nl). Activeer uw
                nood-communicatieplan voor personeel of familieleden.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-accent-gold transition-colors">
              <div className="text-accent-gold text-3xl font-black mb-6">
                03
              </div>
              <h4 className="text-xl font-bold mb-4">Veiligheid</h4>
              <p className="text-gray text-sm leading-relaxed">
                Houd koelkasten en vriezers gesloten. Gebruik enkel veilige
                noodverlichting. Beoordeel de noodzaak van alternatieve
                verwarming bij langdurige uitval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Noodpakket Advies */}
      <section className="py-24 px-6 lg:px-20 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-accent-gold text-sm font-bold uppercase tracking-widest mb-4">
                Voorbereiding
              </h2>
              <h3 className="text-4xl font-bold mb-4">
                Het NCDE Noodpakket Advies
              </h3>
              <p className="text-gray leading-relaxed">
                Een samengestelde gids voor de essentiële benodigdheden om 72
                uur zelfvoorzienend te zijn. Dit advies is gebaseerd op
                richtlijnen van de Rijksoverheid en het Rode Kruis.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="bg-white p-6 rounded-lg text-center border border-charcoal/5 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">
                radio
              </span>
              <p className="font-bold text-sm">Noodradio</p>
              <p className="text-[10px] text-gray mt-1 uppercase">
                Op batterij/handzwengel
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-charcoal/5 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">
                flashlight_on
              </span>
              <p className="font-bold text-sm">Zaklamp</p>
              <p className="text-[10px] text-gray mt-1 uppercase">
                LED met reservebatterijen
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-charcoal/5 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">
                medical_services
              </span>
              <p className="font-bold text-sm">EHBO-kit</p>
              <p className="text-[10px] text-gray mt-1 uppercase">
                Inclusief dekens
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-charcoal/5 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">
                water_drop
              </span>
              <p className="font-bold text-sm">Drinkwater</p>
              <p className="text-[10px] text-gray mt-1 uppercase">
                3L per persoon p/dag
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-charcoal/5 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">
                battery_charging_full
              </span>
              <p className="font-bold text-sm">Powerbank</p>
              <p className="text-[10px] text-gray mt-1 uppercase">
                Hoge capaciteit
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-charcoal/5 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">
                restaurant
              </span>
              <p className="font-bold text-sm">Voedsel</p>
              <p className="text-[10px] text-gray mt-1 uppercase">
                Lange houdbaarheid
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Overheid & Richtlijnen */}
      <section className="py-24 px-6 lg:px-20 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">
            Overheid &amp; Richtlijnen
          </h3>
          <div className="space-y-6">
            <a
              className="group block p-8 bg-background-light hover:bg-white rounded-lg border border-transparent hover:border-accent-gold transition-all"
              href="https://wetten.overheid.nl/BWBR0041515/2024-07-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">
                    Wet Beveiliging Netwerk- en Informatiesystemen (Wbni)
                  </h4>
                  <p className="text-gray max-w-3xl">
                    Kader voor de beveiliging van vitale infrastructuur en
                    digitale diensten in Nederland.
                  </p>
                </div>
                <span className="material-symbols-outlined text-accent-gold group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
            <a
              className="group block p-8 bg-background-light hover:bg-white rounded-lg border border-transparent hover:border-accent-gold transition-all"
              href="https://www.rijksoverheid.nl/onderwerpen/crisis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">
                    Nationaal Handboek Crisisbeheersing
                  </h4>
                  <p className="text-gray max-w-3xl">
                    De officiële structuur voor opschaling en samenwerking
                    tijdens grootschalige stroomuitval.
                  </p>
                </div>
                <span className="material-symbols-outlined text-accent-gold group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto bg-charcoal text-white p-12 lg:p-20 rounded-2xl relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h3 className="text-4xl font-black mb-6">
              Bereid u voor op de transitie.
            </h3>
            <p className="text-xl text-gray mb-10 max-w-2xl mx-auto">
              Wilt u meer weten over de energie-resilience van uw woning? Onze
              experts bieden onafhankelijk strategisch advies.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent-gold text-charcoal px-10 py-4 font-black uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
            >
              Vraag adviesgesprek aan
            </Link>
          </div>
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
    </>
  );
}
