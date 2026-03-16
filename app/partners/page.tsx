import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners — NCDE",
  description:
    "Onze gecertificeerde partners voor duurzame energie-installaties in Nederland.",
};

const netbeheerders = [
  { name: "Liander", logo: "/partners/liander.png" },
  { name: "Stedin", logo: "/partners/stedin.png" },
  { name: "Enexis", logo: "/partners/enexis.png" },
];

const partners = [
  { name: "Alliander", logo: "/partners/alliander.png" },
  { name: "TenneT", logo: "/partners/tennet.png" },
  { name: "Netbeheer NL", logo: "/partners/netbeheernl.png" },
  { name: "Rijksoverheid", logo: "/partners/rijksoverheid.png" },
  { name: "RVO", logo: "/partners/rvo.png" },
  { name: "Alterion", logo: "/partners/alterion.png" },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl mx-4 md:mx-10 mt-8">
        <div className="relative min-h-[400px] bg-charcoal flex flex-col justify-end rounded-xl overflow-hidden">
          <Image
            src="/instalateru.jpg"
            alt="Installateur plaatst zonnepanelen op dak"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/20"></div>
          <div className="relative z-10 p-8 md:p-12">
            <span className="inline-block px-3 py-1 bg-accent-gold text-charcoal text-xs font-bold uppercase tracking-widest rounded mb-4">
              Samenwerking
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
              Onze Partners &amp; Samenwerkingen
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Samen bouwen we aan de energietransitie. Door krachten te bundelen
              met de beste in de sector, garanderen wij de continuïteit en
              veiligheid van het Nederlandse energienet.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[800px] mx-auto px-6 py-16 text-center">
        <h2 className="text-charcoal text-3xl font-bold mb-6">
          Expertise door Collectief
        </h2>
        <p className="text-charcoal/70 text-lg leading-relaxed">
          NCDE werkt nauw samen met toonaangevende netbeheerders en
          gecertificeerde partners om de hoogste kwaliteit en veiligheid in elk
          project te waarborgen. Onze collectieve expertise vormt de ruggengraat
          van een betrouwbaar energienetwerk. Wij geloven in langdurige relaties
          gebaseerd op vertrouwen, technische uitmuntendheid en een gedeelde
          visie op een duurzame toekomst.
        </p>
      </section>

      {/* Netbeheerders */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px grow bg-charcoal/10"></div>
          <h3 className="text-charcoal text-2xl font-bold tracking-tight">
            Netbeheerders
          </h3>
          <div className="h-px grow bg-charcoal/10"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {netbeheerders.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-sm border border-charcoal/5 hover:border-accent-gold/30 transition-all"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={64}
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <p className="text-xs font-semibold text-charcoal/40 uppercase tracking-widest">
                Gecertificeerd Partner
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gecertificeerde Partners */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-12 mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px grow bg-charcoal/10"></div>
          <h3 className="text-charcoal text-2xl font-bold tracking-tight">
            Gecertificeerde Partners
          </h3>
          <div className="h-px grow bg-charcoal/10"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center aspect-video bg-white/50 rounded-lg border border-charcoal/5 hover:bg-white hover:border-accent-gold/30 transition-all p-6"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={56}
                className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-16 mb-16">
        <div className="bg-charcoal rounded-2xl py-16 px-8 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ook partner worden?
          </h2>
          <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto">
            Wij zijn altijd op zoek naar deskundige partners die onze passie
            voor innovatie en kwaliteit delen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partners/registratie"
              className="inline-block bg-accent-gold text-charcoal font-bold py-4 px-10 rounded-lg hover:scale-105 transition-transform active:scale-95"
            >
              Partner Registratie Aanvragen
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white/30 text-white font-bold py-4 px-10 rounded-lg hover:bg-white/10 transition-all"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
