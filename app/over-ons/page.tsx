import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons — NCDE",
  description:
    "Leer meer over Stichting NCDE, onze missie, geschiedenis en het bestuur achter het Nederlands Collectief Duurzame Energie.",
};

export default function OverOnsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 min-h-[70vh] flex items-center">
        <Image
          src="/instalateru.jpg"
          alt="Installateur plaatst zonnepanelen op dak"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/65"></div>
        <div className="relative z-10 px-6 lg:px-20 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Over het Nederlands Collectief Duurzame Energie
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
              Autoriteit in de <br />
              <span className="text-accent-gold italic">Energietransitie.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed font-light max-w-2xl">
              NCDE fungeert als de architect van een onafhankelijk en duurzaam
              Nederlands energielandschap. Wij combineren burgerlijk initiatief
              met professionele executie.
            </p>
          </div>
        </div>
      </section>

      {/* Missie & Visie */}
      <section className="bg-charcoal text-white py-24 lg:py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-accent-gold text-accent-gold rounded-full text-xs font-bold tracking-widest uppercase">
              Missie &amp; Visie
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Het fundament van een <br />
              duurzame samenleving.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Onze missie is het versnellen van de energietransitie door
              burgerparticipatie en professioneel beheer te verenigen. Wij
              geloven in een toekomst waar energie lokaal wordt opgewekt en
              eerlijk wordt verdeeld.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <div className="text-accent-gold text-3xl font-black mb-2">
                  100%
                </div>
                <div className="text-white/40 text-xs uppercase tracking-widest font-bold">
                  Lokaal Eigendom
                </div>
              </div>
              <div>
                <div className="text-accent-gold text-3xl font-black mb-2">
                  2030
                </div>
                <div className="text-white/40 text-xs uppercase tracking-widest font-bold">
                  Doelstelling
                </div>
              </div>
            </div>
          </div>
          <div className="relative group h-full min-h-[400px] flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
            <span className="material-symbols-outlined text-[120px] text-white/5 absolute select-none">
              architecture
            </span>
            <div className="p-12 relative z-10">
              <h4 className="text-accent-gold text-xl font-bold mb-4">
                Onze Strategie
              </h4>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-gold">
                    check_circle
                  </span>
                  <span>Opschalen van lokale energiecorporaties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-gold">
                    check_circle
                  </span>
                  <span>Juridische en financiële structurering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent-gold">
                    check_circle
                  </span>
                  <span>Lobby voor democratisch energiebeheer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geschiedenis */}
      <section className="px-6 lg:px-20 py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Onze <br />
              Geschiedenis
            </h2>
            <div className="w-20 h-1 bg-accent-gold mb-8"></div>
            <p className="text-charcoal/60 leading-relaxed italic">
              Van een idealistisch initiatief in de polder tot een landelijke
              autoriteit op het gebied van duurzame coöperaties.
            </p>
          </div>
          <div className="lg:w-2/3 space-y-16">
            <div className="border-l border-accent-gold pl-8 relative">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-accent-gold rounded-full"></div>
              <span className="text-accent-gold font-black text-xl mb-2 block">
                2012
              </span>
              <h3 className="text-xl font-bold mb-3 text-charcoal">
                De Oprichting
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                NCDE werd opgericht door een collectief van ingenieurs en
                economen die de noodzaak zagen voor een overkoepelend orgaan om
                lokale energie-initiatieven te professionaliseren.
              </p>
            </div>
            <div className="border-l border-accent-gold pl-8 relative">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-accent-gold rounded-full"></div>
              <span className="text-accent-gold font-black text-xl mb-2 block">
                2018
              </span>
              <h3 className="text-xl font-bold mb-3 text-charcoal">
                Landelijke Expansie
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                De lancering van het NCDE-fonds, waardoor meer dan 50 lokale
                projecten konden rekenen op structurele financiering en
                technische ondersteuning.
              </p>
            </div>
            <div className="border-l border-accent-gold pl-8 relative">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-accent-gold rounded-full"></div>
              <span className="text-accent-gold font-black text-xl mb-2 block">
                Vandaag
              </span>
              <h3 className="text-xl font-bold mb-3 text-charcoal">
                Kennispartner
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Inmiddels fungeert NCDE als dé gesprekspartner voor overheden en
                marktpartijen die streven naar een inclusieve energietransitie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Het Bestuur */}
      <section className="bg-charcoal/5 py-24 lg:py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-charcoal mb-4 uppercase tracking-tighter">
              Het Bestuur
            </h2>
            <p className="text-charcoal/60 font-medium tracking-widest uppercase text-xs">
              Integriteit en Expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-[4/5] relative bg-charcoal/5 mb-6 overflow-hidden rounded-lg border border-charcoal/10 transition-colors group-hover:border-accent-gold">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face"
                  alt="Drs. J. van den Berg"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-1">
                Drs. J. van den Berg
              </h3>
              <p className="text-accent-gold font-bold text-xs uppercase tracking-widest mb-4">
                Voorzitter
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Specialist in publiek-private samenwerkingen met meer dan 20
                jaar ervaring in de energiesector.
              </p>
            </div>
            <div className="group">
              <div className="aspect-[4/5] relative bg-charcoal/5 mb-6 overflow-hidden rounded-lg border border-charcoal/10 transition-colors group-hover:border-accent-gold">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&crop=face"
                  alt="Ir. M. de Vries"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-1">
                Ir. M. de Vries
              </h3>
              <p className="text-accent-gold font-bold text-xs uppercase tracking-widest mb-4">
                Technisch Directeur
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Voormalig adviseur bij het ministerie van EZK, expert op het
                gebied van grid-optimalisatie.
              </p>
            </div>
            <div className="group">
              <div className="aspect-[4/5] relative bg-charcoal/5 mb-6 overflow-hidden rounded-lg border border-charcoal/10 transition-colors group-hover:border-accent-gold">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                  alt="Mr. S. Bakker"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-1">
                Mr. S. Bakker
              </h3>
              <p className="text-accent-gold font-bold text-xs uppercase tracking-widest mb-4">
                Juridisch Bestuurder
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Gespecialiseerd in energierecht en corporatieve structuren binnen
                de Europese Unie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto bg-charcoal text-white p-12 lg:p-20 rounded-2xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-6">
              Samen bouwen aan de energietransitie.
            </h2>
            <p className="text-xl text-gray mb-10 max-w-2xl mx-auto">
              Wilt u meer weten over onze stichting of samenwerken? Neem contact
              op met ons team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-accent-gold text-charcoal px-10 py-4 font-black uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
              >
                Neem contact op
              </Link>
              <Link
                href="/werkwijze"
                className="inline-block border-2 border-white/30 text-white px-10 py-4 font-black uppercase tracking-widest rounded-lg hover:bg-white/10 transition-colors"
              >
                Bekijk onze werkwijze
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
