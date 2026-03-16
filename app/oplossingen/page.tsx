import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oplossingen — NCDE",
  description:
    "Een gecureerd overzicht van hoogwaardige energietechnologieën. Wij adviseren u bij de transitie naar een toekomstbestendige en autonome woonomgeving.",
};

const solutions = [
  {
    slug: "zonnepanelen",
    icon: "solar_power",
    title: "Zonnepanelen",
    image: "/hero-home.jpg",
    summary:
      "Hoog rendement fotovoltaïsche systemen voor eigen energieopwekking. Geselecteerd op duurzaamheid en esthetische integratie.",
  },
  {
    slug: "warmtepompen",
    icon: "heat_pump",
    title: "Warmtepompen",
    image: "/warmte pomp.jpg",
    summary:
      "Efficiënte verwarming en koeling door middel van thermodynamische overdracht. Een gasloze oplossing voor optimaal klimaatcomfort.",
  },
  {
    slug: "thuisbatterijen",
    icon: "battery_charging_full",
    title: "Thuisbatterijen",
    image: "/6a2fe05d-3e79-487b-857b-02a335bf404d.jpg",
    summary:
      "Geavanceerde opslagsystemen voor optimale benutting van eigen opgewekte zonne-energie en netonafhankelijkheid.",
  },
  {
    slug: "slimme-energie",
    icon: "settings_suggest",
    title: "Slimme Energie",
    image: "/noodplan.jpg",
    summary:
      "Intelligente managementsystemen voor autonoom energiebeheer, realtime monitoring en geoptimaliseerde consumptie.",
  },
];

export default function OplossingenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/instalateru.jpg"
              alt="Installateur plaatst zonnepanelen"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 z-20 p-8 lg:p-12 w-full max-w-3xl">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-charcoal uppercase bg-accent-gold rounded">
                Expertise &amp; Innovatie
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
                Oplossingen Overzicht
              </h1>
              <p className="text-lg text-white/80 max-w-2xl font-light leading-relaxed">
                Een gecureerd overzicht van hoogwaardige energietechnologieën.
                Wij adviseren u bij de transitie naar een toekomstbestendige en
                autonome woonomgeving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 py-12 lg:px-10 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal">
              Duurzame Energie Hub
            </h2>
            <div className="mt-4 h-1 w-20 bg-accent-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <Link
                key={item.slug}
                href={`/oplossingen/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-charcoal/5 bg-white p-2 transition-all hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors z-10"></div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur">
                    <span className="material-symbols-outlined text-charcoal">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray flex-1">
                    {item.summary}
                  </p>
                  <span className="mt-6 flex items-center gap-2 text-sm font-bold text-accent-gold group-hover:translate-x-1 transition-transform">
                    Lees meer
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-2xl bg-charcoal p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Klaar voor een onafhankelijk energiesysteem?
            </h2>
            <p className="text-gray mb-10 max-w-2xl mx-auto font-light">
              Onze adviseurs staan klaar om een op maat gemaakt plan te
              ontwikkelen dat aansluit bij uw specifieke woonsituatie en
              energiebehoeften.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-accent-gold px-8 py-3 text-sm font-bold text-charcoal transition-all hover:bg-white"
            >
              Vraag advies aan
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
    </>
  );
}
