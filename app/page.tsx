import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NCDE — Nederlands Collectief Duurzame Energie",
  description:
    "Stichting NCDE informeert Nederlandse huishoudens over duurzame energie, de salderingsregeling en energieoplossingen.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 min-h-[85vh] flex items-center">
        {/* Background image */}
        <Image
          src="/hero-home.jpg"
          alt="Nederlandse woning met zonnepanelen"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              De toekomst van energie begint met{" "}
              <span className="text-accent-gold italic">kennis</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              Belangrijke veranderingen voor Nederlandse huishoudens in de
              transitie naar duurzame energie. Wij bieden objectieve kaders voor
              een bestendig energienetwerk.
            </p>
            <Link
              href="/salderingsregeling"
              className="inline-block bg-accent-gold text-charcoal px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-accent-gold/20 transition-all active:scale-95"
            >
              Ontdek wat er verandert
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-4xl font-black text-accent-gold">
                5.000+
              </span>
              <span className="text-white font-medium opacity-80 uppercase tracking-wide text-xs">
                Aangesloten huishoudens
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 border-charcoal/20 md:border-x px-8">
              <span className="text-4xl font-black text-accent-gold">12</span>
              <span className="text-white font-medium opacity-80 uppercase tracking-wide text-xs">
                Gecertificeerde partners
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-4xl font-black text-accent-gold">
                100%
              </span>
              <span className="text-white font-medium opacity-80 uppercase tracking-wide text-xs">
                Onafhankelijk advies
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Salderingsregeling 2027 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold mb-4">
                Salderingsregeling 2027
              </h2>
              <p className="text-charcoal/60">
                Een overzicht van de wetgevende transities voor eigenaren van
                zonnepanelen. NCDE monitort de voortgang en adviseert over
                marktvoorwaarden.
              </p>
            </div>
            <Link
              href="/salderingsregeling"
              className="text-accent-gold font-bold flex items-center gap-2"
            >
              <span className="material-symbols-outlined">description</span>
              Wetsvoorstel inzien
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-accent-gold bg-background-light rounded-r-xl">
              <span className="text-sm font-bold text-accent-gold block mb-2">
                FASE 01 — 2024
              </span>
              <h3 className="text-xl font-bold mb-4">Huidige Situatie</h3>
              <p className="text-sm leading-relaxed opacity-70">
                100% salderen blijft de norm voor het huidige kalenderjaar. Alle
                opgewekte stroom wordt weggestreept tegen verbruik.
              </p>
            </div>
            <div className="p-8 border-l-4 border-accent-gold/40 bg-background-light rounded-r-xl opacity-80">
              <span className="text-sm font-bold text-accent-gold block mb-2">
                FASE 02 — 2025/2026
              </span>
              <h3 className="text-xl font-bold mb-4">Overgangsperiode</h3>
              <p className="text-sm leading-relaxed opacity-70">
                Geleidelijke afbouw van de fiscale voordelen en introductie van
                nieuwe terugleverkosten door netbeheerders.
              </p>
            </div>
            <div className="p-8 border-l-4 border-accent-gold bg-charcoal text-white rounded-r-xl">
              <span className="text-sm font-bold text-accent-gold block mb-2">
                FASE 03 — 2027
              </span>
              <h3 className="text-xl font-bold mb-4">
                Nieuwe Marktvoorwaarden
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                Volledige beëindiging van de huidige saldering. Focus verschuift
                naar directe consumptie en lokale opslag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Noodvoorziening */}
      <section className="py-24 bg-charcoal text-background-light relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg className="h-full w-full fill-current" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              fill="none"
              r="40"
              stroke="white"
              strokeWidth="0.5"
            />
            <path
              d="M50 10 L50 90 M10 50 L90 50"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6">
                Noodvoorziening &amp; Resilience
              </h2>
              <p className="text-lg opacity-70 mb-10 leading-relaxed">
                In een toenemend gedecentraliseerd netwerk is voorbereiding
                essentieel. NCDE adviseert over de richtlijnen van de overheid
                voor energie-autonomie bij calamiteiten.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-accent-gold">
                    bolt
                  </span>
                  <div>
                    <h4 className="font-bold">Protocol Stroomuitval</h4>
                    <p className="text-sm opacity-60">
                      Standaardprocedures voor kritieke infrastructuur in
                      woningen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-accent-gold">
                    inventory_2
                  </span>
                  <div>
                    <h4 className="font-bold">Noodpakket Richtlijnen</h4>
                    <p className="text-sm opacity-60">
                      Gecertificeerde hardware voor off-grid
                      basisvoorzieningen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-accent-gold">
                    gavel
                  </span>
                  <div>
                    <h4 className="font-bold">Overheidskaders</h4>
                    <p className="text-sm opacity-60">
                      Toepassing van de Wet Beveiliging Netwerk- en
                      Informatiesystemen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent-gold">
                    security
                  </span>
                </div>
                <h3 className="text-xl font-bold">Resilience Check</h3>
              </div>
              <p className="text-sm opacity-70 mb-8 leading-relaxed">
                Heeft uw woning de juiste configuratie om essentieel verbruik
                door te zetten bij netwerkinstabiliteit? Wij toetsen uw situatie
                aan de hand van de laatste netbeheer-normen.
              </p>
              <Link
                href="/noodpakket"
                className="block w-full text-center border-2 border-accent-gold text-accent-gold py-3 rounded-lg font-bold hover:bg-accent-gold hover:text-charcoal transition-all"
              >
                Bekijk Richtlijnen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Duurzame Oplossingen */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-extrabold mb-4">
              Onze Expertisegebieden
            </h2>
            <p className="text-charcoal/60">
              Objectieve informatie over technologieën die de kern vormen van de
              energietransitie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-14 h-14 bg-white shadow-sm border border-charcoal/5 rounded-xl flex items-center justify-center mb-6 group-hover:border-accent-gold transition-colors">
                <span className="material-symbols-outlined text-charcoal group-hover:text-accent-gold transition-colors">
                  solar_power
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Zonnepanelen (PV)</h3>
              <p className="text-sm leading-relaxed opacity-70 mb-4">
                Focus op rendement bij indirect licht en de integratie met slimme
                omvormers voor netbalans.
              </p>
              <Link
                href="/oplossingen/zonnepanelen"
                className="text-accent-gold text-sm font-bold flex items-center gap-1 hover:translate-x-1 transition-transform"
              >
                Lees meer{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="group">
              <div className="w-14 h-14 bg-white shadow-sm border border-charcoal/5 rounded-xl flex items-center justify-center mb-6 group-hover:border-accent-gold transition-colors">
                <span className="material-symbols-outlined text-charcoal group-hover:text-accent-gold transition-colors">
                  battery_charging_full
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Thuisbatterijen</h3>
              <p className="text-sm leading-relaxed opacity-70 mb-4">
                Advies over opslagcapaciteit, veiligheidsklassen en de
                economische haalbaarheid post-saldering.
              </p>
              <Link
                href="/oplossingen/thuisbatterijen"
                className="text-accent-gold text-sm font-bold flex items-center gap-1 hover:translate-x-1 transition-transform"
              >
                Lees meer{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="group">
              <div className="w-14 h-14 bg-white shadow-sm border border-charcoal/5 rounded-xl flex items-center justify-center mb-6 group-hover:border-accent-gold transition-colors">
                <span className="material-symbols-outlined text-charcoal group-hover:text-accent-gold transition-colors">
                  smart_toy
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Slimme Energie</h3>
              <p className="text-sm leading-relaxed opacity-70 mb-4">
                Automatisering van verbruikspieken op basis van dynamische
                uurtarieven en netbelasting.
              </p>
              <Link
                href="/oplossingen/slimme-energie"
                className="text-accent-gold text-sm font-bold flex items-center gap-1 hover:translate-x-1 transition-transform"
              >
                Lees meer{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logo Marquee */}
      <section className="py-16 border-y border-charcoal/10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40">
            Onze informatie wordt ondersteund door expertise van
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="flex animate-marquee w-max">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 px-8">
                <Image src="/partners/liander.png" alt="Liander" width={120} height={48} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/partners/stedin.png" alt="Stedin" width={120} height={48} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/partners/enexis.png" alt="Enexis" width={120} height={48} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/partners/alliander.png" alt="Alliander" width={120} height={48} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/partners/tennet.png" alt="TenneT" width={120} height={48} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/partners/netbeheernl.png" alt="Netbeheer NL" width={120} height={48} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/partners/rijksoverheid.png" alt="Rijksoverheid" width={120} height={48} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/partners/rvo.png" alt="RVO" width={120} height={48} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/partners/alterion.png" alt="Alterion" width={120} height={48} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 text-accent-gold text-sm font-bold hover:translate-x-1 transition-transform"
          >
            Bekijk al onze partners
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            Heeft u vragen over uw energiesituatie?
          </h2>
          <p className="text-charcoal/60 mb-10 max-w-xl mx-auto">
            Onze adviseurs staan klaar om de complexiteit van de nieuwe
            wetgeving te vertalen naar uw persoonlijke situatie.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-gold text-charcoal px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-accent-gold/20 transition-all mb-8 active:scale-95"
          >
            Neem contact op
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-charcoal/40 italic">
            Een van onze gecertificeerde partners neemt contact met u op voor
            persoonlijk advies.
          </p>
        </div>
      </section>
    </>
  );
}
