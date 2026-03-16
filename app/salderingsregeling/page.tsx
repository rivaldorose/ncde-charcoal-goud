import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salderingsregeling — NCDE",
  description:
    "Wat verandert er aan de salderingsregeling? NCDE legt uit wat dit betekent voor uw zonnepanelen en energierekening.",
};

export default function SalderingsregelingPage() {
  return (
    <>
      {/* Chapter Navigation Bar */}
      <div className="sticky top-[81px] z-40 bg-white/80 backdrop-blur-sm border-b border-charcoal/5 py-3 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-8">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <a
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-charcoal"
              href="#intro"
            >
              <span className="size-6 rounded-full bg-charcoal text-accent-gold flex items-center justify-center text-[10px]">
                00
              </span>
              <span>Introductie</span>
            </a>
            <div className="h-px w-8 bg-charcoal/10"></div>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <a
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray hover:text-charcoal transition-colors"
              href="#huidige"
            >
              <span className="size-6 rounded-full border-2 border-charcoal/10 flex items-center justify-center text-[10px]">
                01
              </span>
              <span>Huidige Situatie</span>
            </a>
            <div className="h-px w-8 bg-charcoal/10"></div>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <a
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray hover:text-charcoal transition-colors"
              href="#overgang"
            >
              <span className="size-6 rounded-full border-2 border-charcoal/10 flex items-center justify-center text-[10px]">
                02
              </span>
              <span>Transitie</span>
            </a>
            <div className="h-px w-8 bg-charcoal/10"></div>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <a
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray hover:text-charcoal transition-colors"
              href="#nieuwe"
            >
              <span className="size-6 rounded-full border-2 border-charcoal/10 flex items-center justify-center text-[10px]">
                03
              </span>
              <span>Nieuwe Regels</span>
            </a>
            <div className="h-px w-8 bg-charcoal/10"></div>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <a
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray hover:text-charcoal transition-colors"
              href="#faq"
            >
              <span className="size-6 rounded-full border-2 border-charcoal/10 flex items-center justify-center text-[10px]">
                04
              </span>
              <span>Vragen</span>
            </a>
          </div>
        </div>
      </div>

      {/* Section 00: Intro */}
      <section
        className="relative min-h-[calc(100vh-160px)] flex flex-col justify-center py-20 px-6 md:px-20 overflow-hidden bg-background-light"
        id="intro"
      >
        <div className="absolute inset-0 geometric-bg -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 mb-8 text-gray text-sm font-medium">
            <Link href="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-charcoal">Salderingsregeling</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
            Salderingsregeling 2027:
            <br />
            <span className="text-accent-gold underline decoration-4 underline-offset-8">
              De Volledige Gids
            </span>
          </h1>
          <p className="text-xl text-gray leading-relaxed max-w-2xl mx-auto mb-12">
            De wetgeving rondom zonne-energie ondergaat een fundamentele
            transitie. Volg deze begeleide tour om exact te begrijpen wat er
            verandert en hoe u uw rendement veiligstelt.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a
              className="inline-flex items-center gap-3 bg-charcoal text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl shadow-charcoal/20"
              href="#huidige"
            >
              Start de tour
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
            <p className="text-xs font-bold text-gray uppercase tracking-widest">
              Geschatte leestijd: 6 minuten
            </p>
          </div>
        </div>
      </section>

      {/* Section 01: Huidige Situatie */}
      <section
        className="min-h-[calc(100vh-160px)] flex flex-col justify-center border-t border-charcoal/5 py-24 px-6 md:px-20 bg-white"
        id="huidige"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-accent-gold font-black text-6xl block mb-4">
              01
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Huidige Situatie (2024)
            </h2>
            <div className="h-1.5 w-24 bg-accent-gold mb-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-gray leading-relaxed">
              <p className="text-xl font-medium text-charcoal mb-6">
                Tot en met eind 2024 profiteert u van de maximale voordelen van
                de huidige salderingsregeling.
              </p>
              <p className="mb-6 text-lg">
                Dit houdt in dat u de stroom die u opwekt en teruglevert aan het
                net, mag wegstrepen tegen de stroom die u verbruikt op momenten
                dat de zon niet schijnt. Voor elke kWh die u teruglevert, krijgt
                u dezelfde prijs als die u betaalt voor de stroom die u afneemt,
                inclusief belastingen.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-charcoal p-8 rounded-2xl text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-7xl">
                    account_balance_wallet
                  </span>
                </div>
                <h4 className="text-accent-gold font-bold text-xl mb-4">
                  100% Salderen
                </h4>
                <p className="text-sm opacity-80 leading-relaxed">
                  Geen verlies van waarde bij teruglevering. Uw meter loopt
                  feitelijk achteruit bij overproductie, waardoor de
                  netbeheerder uw gratis batterij is.
                </p>
              </div>
              <div className="border-2 border-charcoal/10 p-8 rounded-2xl relative overflow-hidden">
                <h4 className="text-charcoal font-bold text-xl mb-4">
                  Belastingvoordeel
                </h4>
                <p className="text-sm text-gray leading-relaxed">
                  U betaalt geen energiebelasting of btw over de gesaldeerde
                  stroomhoeveelheid. Dit is de kern van het huidige rendement.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-12 border-t border-charcoal/5 flex flex-col items-center">
            <p className="text-gray font-medium mb-6">
              Begrijpt u de huidige basis? Ontdek dan de naderende veranderingen.
            </p>
            <a
              className="group flex items-center gap-4 bg-background-light border-2 border-charcoal px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-charcoal hover:text-white transition-all"
              href="#overgang"
            >
              Volgende: De Overgangsperiode
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                arrow_downward
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 02: Overgangsperiode */}
      <section
        className="min-h-[calc(100vh-160px)] flex flex-col justify-center border-t border-charcoal/5 py-24 px-6 md:px-20 bg-background-light"
        id="overgang"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-accent-gold font-black text-6xl block mb-4">
              02
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              De Overgangsperiode (2025-2026)
            </h2>
            <div className="h-1.5 w-24 bg-accent-gold mb-8"></div>
          </div>
          <div className="relative pl-12 border-l-4 border-charcoal/10 space-y-16 py-8">
            <div className="relative">
              <div className="absolute -left-[62px] top-0 size-8 rounded-full bg-charcoal border-4 border-background-light shadow-lg"></div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-charcoal/5">
                <span className="inline-block px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-black uppercase tracking-widest rounded-full mb-4">
                  Fase 1
                </span>
                <h4 className="text-2xl font-bold mb-4">Januari 2025</h4>
                <p className="text-gray text-lg leading-relaxed">
                  Aankondiging van definitieve afbouwpercentages.
                  Energieleveranciers introduceren variabele terugleverkosten om
                  de druk op het landelijke stroomnet te beheren. Dit is het
                  moment om uw systeem &quot;smart-ready&quot; te maken.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[62px] top-0 size-8 rounded-full bg-accent-gold border-4 border-background-light shadow-lg"></div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-charcoal/5">
                <span className="inline-block px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-black uppercase tracking-widest rounded-full mb-4">
                  Fase 2
                </span>
                <h4 className="text-2xl font-bold mb-4">Mid-2026</h4>
                <p className="text-gray text-lg leading-relaxed">
                  De laatste fase van de volledige saldering. Consumenten worden
                  door NCDE actief aangemoedigd om te investeren in
                  energiemanagementsystemen (EMS) om de overgang naar 2027
                  soepel te laten verlopen.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-12 border-t border-charcoal/5 flex flex-col items-center">
            <p className="text-gray font-medium mb-6">
              De transitie is onvermijdelijk. Bekijk de nieuwe regels voor 2027.
            </p>
            <a
              className="group flex items-center gap-4 bg-charcoal text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-charcoal/90 transition-all"
              href="#nieuwe"
            >
              Volgende: De Nieuwe Werkelijkheid
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                arrow_downward
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 03: Nieuwe Voorwaarden */}
      <section
        className="min-h-[calc(100vh-160px)] flex flex-col justify-center border-t border-charcoal/5 py-24 px-6 md:px-20 bg-white"
        id="nieuwe"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-accent-gold font-black text-6xl block mb-4">
              03
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Nieuwe Voorwaarden (2027+)
            </h2>
            <div className="h-1.5 w-24 bg-accent-gold mb-8"></div>
          </div>
          <div className="bg-charcoal/5 p-8 md:p-12 border border-charcoal/5 rounded-3xl relative overflow-hidden">
            <p className="mb-12 text-2xl text-charcoal font-medium italic leading-relaxed">
              &quot;Vanaf 2027 verschuift de focus van kwantiteit naar
              synchronisatie: directe consumptie en lokale opslag worden de
              nieuwe standaard voor financieel succes.&quot;
            </p>
            <div className="space-y-10 max-w-3xl">
              <div>
                <div className="flex justify-between text-xs font-black uppercase tracking-wider mb-3">
                  <span>Huidige Directe Consumptie</span>
                  <span className="text-accent-gold">Doel: &gt;60%</span>
                </div>
                <div className="h-4 bg-charcoal/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent-gold rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-gray mt-2">
                  Gemiddeld huishouden zonder optimalisatie
                </p>
              </div>
              <div>
                <div className="flex justify-between text-xs font-black uppercase tracking-wider mb-3">
                  <span>Benodigde Lokale Batterij Opslag</span>
                  <span className="text-accent-gold">Cruciaal</span>
                </div>
                <div className="h-4 bg-charcoal/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-charcoal rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-gray mt-2">
                  Noodzakelijk voor maximaal rendement vanaf 2027
                </p>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h5 className="font-bold text-lg flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-accent-gold bg-accent-gold/10 p-2 rounded-lg">
                    battery_charging_full
                  </span>
                  Thuisbatterijen
                </h5>
                <p className="text-sm text-gray leading-relaxed">
                  Het opslaan van overtollige zonne-energie voor gebruik tijdens
                  de piekuren in de avond wordt essentieel voor het behoud van uw
                  rendement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h5 className="font-bold text-lg flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-accent-gold bg-accent-gold/10 p-2 rounded-lg">
                    smart_display
                  </span>
                  Slimme Sturing
                </h5>
                <p className="text-sm text-gray leading-relaxed">
                  Warmtepompen en EV-laders moeten automatisch schakelen op
                  basis van realtime opbrengst en de op dat moment geldende
                  markttarieven.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-12 border-t border-charcoal/5 flex flex-col items-center">
            <p className="text-gray font-medium mb-6">
              Hebt u nog onduidelijkheden? Wij beantwoorden de meest prangende
              vragen.
            </p>
            <a
              className="group flex items-center gap-4 bg-accent-gold text-charcoal px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all"
              href="#faq"
            >
              Laatste Stap: FAQ &amp; Advies
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                arrow_downward
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 04: FAQ */}
      <section
        className="min-h-[calc(100vh-160px)] flex flex-col justify-center border-t border-charcoal/5 py-24 px-6 md:px-20 bg-background-light"
        id="faq"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-accent-gold font-black text-6xl block mb-4">
              04
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Veelgestelde Vragen
            </h2>
            <div className="h-1.5 w-24 bg-accent-gold mx-auto mb-8"></div>
          </div>
          <div className="divide-y divide-charcoal/10 max-w-4xl mx-auto mb-20">
            <details className="group py-8" open>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-xl font-bold text-charcoal">
                  Blijven zonnepanelen rendabel na 2027?
                </h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-accent-gold">
                  expand_more
                </span>
              </summary>
              <div className="mt-6 text-gray text-lg leading-relaxed">
                <p>
                  Ja, maar de manier waarop u ze gebruikt verandert. Zonder
                  saldering is de terugleververgoeding lager, maar bespaart u
                  nog steeds op elke kWh die u direct verbruikt. Met slimme
                  sturing en eventueel opslag blijft de terugverdientijd
                  aantrekkelijk, doorgaans tussen de 7 en 9 jaar.
                </p>
              </div>
            </details>
            <details className="group py-8">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-xl font-bold text-charcoal">
                  Moet ik nu al een batterij kopen?
                </h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-accent-gold">
                  expand_more
                </span>
              </summary>
              <div className="mt-6 text-gray text-lg leading-relaxed">
                <p>
                  Dit hangt af van uw specifieke verbruiksprofiel. Voor
                  grootverbruikers kan het nu al interessant zijn, voor
                  gemiddelde huishoudens adviseren wij vaak om de
                  marktontwikkelingen tot 2025 af te wachten terwijl de systemen
                  wel &quot;battery-ready&quot; worden gemaakt.
                </p>
              </div>
            </details>
            <details className="group py-8">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-xl font-bold text-charcoal">
                  Wat doet NCDE voor mij in dit proces?
                </h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-accent-gold">
                  expand_more
                </span>
              </summary>
              <div className="mt-6 text-gray text-lg leading-relaxed">
                <p>
                  Wij fungeren als uw onafhankelijk adviseur. Wij analyseren uw
                  data, adviseren over de beste hardware-keuzes en bieden
                  collectieve inkoopvoordelen voor geavanceerde
                  energie-oplossingen.
                </p>
              </div>
            </details>
          </div>

          {/* CTA */}
          <div className="bg-charcoal rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 geometric-bg opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Klaar voor uw persoonlijke transitie?
              </h2>
              <p className="text-xl text-white/70 mb-12">
                U heeft het hele traject doorlopen. Neem nu de volgende stap voor
                een diepgaande analyse van uw financiële toekomst.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-accent-gold text-charcoal px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl shadow-accent-gold/20"
                >
                  <span className="material-symbols-outlined">mail</span>
                  Adviesgesprek Plannen
                </Link>
                <Link
                  href="/oplossingen"
                  className="bg-white text-charcoal px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-background-light transition-all"
                >
                  Bekijk Oplossingen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
