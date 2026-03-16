import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<
  string,
  {
    title: string;
    icon: string;
    image: string;
    intro: string;
    sections: { title: string; content: string }[];
    specs: { label: string; value: string }[];
  }
> = {
  zonnepanelen: {
    title: "Zonnepanelen",
    icon: "solar_power",
    image: "/hero-home.jpg",
    intro:
      "Zonnepanelen zijn de hoeksteen van de energietransitie. Met moderne fotovoltaïsche technologie kunt u uw eigen elektriciteit opwekken, uw energierekening verlagen en bijdragen aan een duurzamer Nederland.",
    sections: [
      {
        title: "Hoe werken zonnepanelen?",
        content:
          "Zonnepanelen zetten zonlicht om in elektrische energie via fotovoltaïsche cellen. Moderne panelen werken ook bij bewolkt weer en indirect zonlicht, waardoor ze het hele jaar door energie produceren. Een omvormer zet de opgewekte gelijkstroom om naar wisselstroom die u in uw woning kunt gebruiken.",
      },
      {
        title: "Rendement en opbrengst",
        content:
          "Een gemiddeld Nederlands huishouden met 10 panelen wekt jaarlijks circa 3.500 kWh op. Dit dekt doorgaans 60-80% van het jaarlijkse verbruik. Het rendement is afhankelijk van de oriëntatie, hellingshoek en eventuele schaduw. NCDE adviseert u over de optimale configuratie.",
      },
      {
        title: "Terugverdientijd",
        content:
          "Met de huidige energieprijzen en de nog geldende salderingsregeling bedraagt de gemiddelde terugverdientijd 5-7 jaar. De levensduur van moderne panelen is 25-30 jaar, waardoor u na de terugverdienperiode jarenlang profiteert van gratis stroom.",
      },
      {
        title: "Toekomstbestendigheid",
        content:
          "Met het oog op de afbouw van de salderingsregeling in 2027 adviseert NCDE om uw zonnepanelen te combineren met een thuisbatterij en slim energiemanagementsysteem. Zo maximaliseert u het eigen verbruik en blijft uw investering rendabel.",
      },
    ],
    specs: [
      { label: "Gemiddeld vermogen", value: "400-450 Wp per paneel" },
      { label: "Levensduur", value: "25-30 jaar" },
      { label: "Terugverdientijd", value: "5-7 jaar" },
      { label: "CO₂-besparing", value: "~1.500 kg/jaar" },
    ],
  },
  warmtepompen: {
    title: "Warmtepompen",
    icon: "heat_pump",
    image: "/warmte pomp.jpg",
    intro:
      "Warmtepompen zijn de sleutel tot een gasloze woning. Door warmte uit de buitenlucht, bodem of grondwater te onttrekken, verwarmen ze uw huis op een efficiënte en duurzame manier — zelfs bij lage buitentemperaturen.",
    sections: [
      {
        title: "Hoe werkt een warmtepomp?",
        content:
          "Een warmtepomp werkt op basis van het thermodynamisch principe: het onttrekt warmte uit een bron (lucht, bodem of water) en brengt deze naar een hoger temperatuurniveau. Met 1 kWh elektriciteit produceert een moderne warmtepomp 3-5 kWh warmte, wat het uiterst efficiënt maakt.",
      },
      {
        title: "Typen warmtepompen",
        content:
          "Er zijn drie hoofdtypen: lucht-water warmtepompen (meest gangbaar, eenvoudige installatie), bodem-water warmtepompen (hogere investering maar stabieler rendement) en hybride warmtepompen (combinatie met bestaande cv-ketel). NCDE helpt u bij het kiezen van het juiste type voor uw woning.",
      },
      {
        title: "Isolatie als voorwaarde",
        content:
          "Voor een optimale werking van een warmtepomp is goede isolatie essentieel. NCDE adviseert om eerst uw woning te isoleren (minimaal energielabel C) voordat u overgaat op een volledig elektrische warmtepomp. Bij een hybride systeem zijn de eisen minder streng.",
      },
      {
        title: "Subsidie en kosten",
        content:
          "Via de ISDE-regeling kunt u subsidie ontvangen tot € 3.675 voor de aanschaf van een warmtepomp. De totale investering varieert van € 4.000 voor een hybride tot € 15.000 voor een volledig elektrisch systeem. De terugverdientijd bedraagt gemiddeld 7-10 jaar.",
      },
    ],
    specs: [
      { label: "COP-waarde", value: "3.0 - 5.0" },
      { label: "Levensduur", value: "15-20 jaar" },
      { label: "ISDE subsidie", value: "Tot € 3.675" },
      { label: "Gasbesparing", value: "Tot 100%" },
    ],
  },
  thuisbatterijen: {
    title: "Thuisbatterijen",
    icon: "battery_charging_full",
    image: "/6a2fe05d-3e79-487b-857b-02a335bf404d.jpg",
    intro:
      "Thuisbatterijen worden steeds belangrijker in het post-salderingstijdperk. Door overtollige zonne-energie op te slaan voor later gebruik, maximaliseert u uw zelfconsumptie en wordt u minder afhankelijk van het stroomnet.",
    sections: [
      {
        title: "Waarom een thuisbatterij?",
        content:
          "Met de afbouw van de salderingsregeling in 2027 wordt de terugleververgoeding lager dan de afnameprijs. Een thuisbatterij slaat uw overtollige zonne-energie op voor gebruik in de avonduren, wanneer uw verbruik het hoogst is. Zo verbruikt u meer van uw eigen opgewekte stroom.",
      },
      {
        title: "Technologie en capaciteit",
        content:
          "Moderne lithium-ijzerfosfaat (LFP) batterijen zijn veilig, duurzaam en behouden na 6.000 cycli nog 80% van hun capaciteit. Voor een gemiddeld huishouden is een capaciteit van 5-10 kWh voldoende om de avondpiek op te vangen.",
      },
      {
        title: "Noodstroom functie",
        content:
          "Veel thuisbatterijen bieden een noodstroomfunctie: bij netuitval schakelt het systeem automatisch over op batterijstroom. Zo blijven essentiële apparaten zoals uw koelkast, verlichting en communicatie werkend.",
      },
      {
        title: "Economische overwegingen",
        content:
          "De prijzen van thuisbatterijen dalen gestaag. Een 10 kWh systeem kost momenteel € 5.000-8.000. In combinatie met dynamische energiecontracten kunt u ook profiteren van lage daluren-tarieven. NCDE adviseert over het optimale moment van aanschaf.",
      },
    ],
    specs: [
      { label: "Capaciteit", value: "5-15 kWh" },
      { label: "Levensduur", value: "10-15 jaar (6.000+ cycli)" },
      { label: "Technologie", value: "LFP (Lithium-ijzerfosfaat)" },
      { label: "Noodstroom", value: "Ja, bij de meeste systemen" },
    ],
  },
  "slimme-energie": {
    title: "Slimme Energie",
    icon: "settings_suggest",
    image: "/noodplan.jpg",
    intro:
      "Slimme energiesystemen vormen het brein van uw duurzame woning. Door real-time monitoring, automatische sturing en dynamische tarieven te combineren, optimaliseert u uw energieverbruik en maximaliseert u uw besparing.",
    sections: [
      {
        title: "Energiemanagementsysteem (EMS)",
        content:
          "Een EMS monitort uw opwek, verbruik en opslag in real-time en stuurt apparaten automatisch aan. Zo wordt uw wasmachine, warmtepomp of EV-lader ingeschakeld wanneer de zon schijnt en de stroom het goedkoopst is.",
      },
      {
        title: "Dynamische energiecontracten",
        content:
          "Met een dynamisch contract betaalt u de actuele marktprijs per uur. In combinatie met een slim systeem kunt u automatisch inkopen wanneer de prijs laag (of negatief) is en terugleveren wanneer de prijs hoog is. Dit kan tot 30% extra besparing opleveren.",
      },
      {
        title: "Vehicle-to-Grid (V2G)",
        content:
          "De nieuwste ontwikkeling is Vehicle-to-Grid technologie: uw elektrische auto fungeert als extra batterij voor uw woning. Overdag laadt uw auto op zonne-energie, 's avonds levert de auto stroom terug aan uw woning.",
      },
      {
        title: "Toekomstperspectief",
        content:
          "De combinatie van zonnepanelen, thuisbatterij, warmtepomp en slim energiemanagement maakt een woning vrijwel energieautonoom. NCDE begeleidt u bij het stapsgewijs opbouwen van dit complete systeem.",
      },
    ],
    specs: [
      { label: "Besparing", value: "20-30% extra" },
      { label: "Monitoring", value: "Real-time dashboard" },
      { label: "Compatibiliteit", value: "Alle merken" },
      { label: "V2G-ready", value: "Toekomstbestendig" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Niet gevonden — NCDE" };
  return {
    title: `${article.title} — NCDE`,
    description: article.intro,
  };
}

export default async function OplossingSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const otherSolutions = Object.entries(articles)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-end">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/20"></div>
        <div className="relative z-10 w-full px-6 lg:px-20 py-12 max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 mb-6">
            <Link
              href="/"
              className="hover:text-accent-gold transition-colors"
            >
              Home
            </Link>
            <span className="material-symbols-outlined text-[12px]">
              chevron_right
            </span>
            <Link
              href="/oplossingen"
              className="hover:text-accent-gold transition-colors"
            >
              Oplossingen
            </Link>
            <span className="material-symbols-outlined text-[12px]">
              chevron_right
            </span>
            <span className="text-accent-gold">{article.title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-accent-gold/20 rounded-xl flex items-center justify-center backdrop-blur">
              <span className="material-symbols-outlined text-accent-gold text-3xl">
                {article.icon}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              {article.title}
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-3xl font-light leading-relaxed">
            {article.intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Specs bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-background-light rounded-2xl border border-charcoal/5">
            {article.specs.map((spec) => (
              <div key={spec.label}>
                <p className="text-xs font-bold text-accent-gold uppercase tracking-widest mb-1">
                  {spec.label}
                </p>
                <p className="text-lg font-bold text-charcoal">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Sections */}
          {article.sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <span className="text-accent-gold font-black text-lg">
                  0{i + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-gray text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          {/* Disclaimer */}
          <div className="mt-16 p-6 bg-accent-gold/10 rounded-xl border border-accent-gold/20">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent-gold mt-0.5">
                info
              </span>
              <div>
                <p className="font-bold text-charcoal mb-1">
                  Onafhankelijk advies
                </p>
                <p className="text-sm text-gray leading-relaxed">
                  NCDE is een stichting zonder winstoogmerk. De informatie op
                  deze pagina is objectief en onafhankelijk samengesteld. Wij
                  verkopen geen producten — wij adviseren en informeren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related solutions */}
      <section className="py-16 px-6 lg:px-20 bg-background-light border-t border-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-charcoal mb-8">
            Andere oplossingen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherSolutions.map(([key, sol]) => (
              <Link
                key={key}
                href={`/oplossingen/${key}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-charcoal/5 bg-white p-2 transition-all hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur">
                    <span className="material-symbols-outlined text-charcoal">
                      {sol.icon}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-charcoal">
                    {sol.title}
                  </h4>
                  <span className="mt-3 flex items-center gap-2 text-sm font-bold text-accent-gold group-hover:translate-x-1 transition-transform">
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

      {/* CTA */}
      <section className="py-20 px-6 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-charcoal p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Persoonlijk advies over {article.title.toLowerCase()}?
            </h2>
            <p className="text-gray mb-10 max-w-2xl mx-auto font-light">
              Onze onafhankelijke adviseurs helpen u graag bij het maken van de
              juiste keuze voor uw specifieke situatie.
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
