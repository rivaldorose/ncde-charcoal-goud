"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  { id: "privacy", label: "Privacybeleid" },
  { id: "voorwaarden", label: "Algemene Voorwaarden" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "cookies", label: "Cookiebeleid" },
];

const tocItems: Record<string, { id: string; label: string }[]> = {
  privacy: [
    { id: "inleiding", label: "1. Inleiding" },
    { id: "gegevens", label: "2. Welke gegevens" },
    { id: "doeleinden", label: "3. Doeleinden" },
    { id: "bewaartermijn", label: "4. Bewaartermijn" },
    { id: "rechten", label: "5. Uw rechten" },
    { id: "contact-privacy", label: "6. Contact" },
  ],
  voorwaarden: [
    { id: "definities", label: "1. Definities" },
    { id: "toepasselijkheid", label: "2. Toepasselijkheid" },
    { id: "dienstverlening", label: "3. Dienstverlening" },
    { id: "aansprakelijkheid", label: "4. Aansprakelijkheid" },
    { id: "betaling", label: "5. Betalingsvoorwaarden" },
  ],
  disclaimer: [
    { id: "algemeen", label: "1. Algemeen" },
    { id: "informatie", label: "2. Informatie" },
    { id: "links", label: "3. Externe links" },
    { id: "wijzigingen", label: "4. Wijzigingen" },
  ],
  cookies: [
    { id: "wat-zijn-cookies", label: "1. Wat zijn cookies" },
    { id: "welke-cookies", label: "2. Welke cookies" },
    { id: "beheren", label: "3. Cookies beheren" },
  ],
};

const content: Record<string, { title: string; date: string; sections: { id: string; title: string; paragraphs: string[] }[] }> = {
  privacy: {
    title: "Privacybeleid",
    date: "15 maart 2026",
    sections: [
      {
        id: "inleiding",
        title: "1. Inleiding",
        paragraphs: [
          "Stichting NCDE (Nederlands Collectief Duurzame Energie) hecht groot belang aan de bescherming van uw persoonsgegevens. In dit privacybeleid informeren wij u over hoe wij omgaan met uw persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).",
          "Dit privacybeleid is van toepassing op alle persoonsgegevens die NCDE verwerkt via de website www.ncde.nl en gerelateerde dienstverlening.",
        ],
      },
      {
        id: "gegevens",
        title: "2. Welke gegevens verzamelen wij",
        paragraphs: [
          "Wij verzamelen uitsluitend gegevens die u zelf aan ons verstrekt via het contactformulier op onze website. Dit betreft:",
          "• Voornaam en achternaam\n• E-mailadres\n• Type vraag of onderwerp van uw bericht\n• De inhoud van uw bericht",
          "NCDE verzamelt geen gegevens via tracking-cookies, maakt geen gebruik van advertentieprofielen en verkoopt uw gegevens niet aan derden.",
        ],
      },
      {
        id: "doeleinden",
        title: "3. Doeleinden van verwerking",
        paragraphs: [
          "Uw persoonsgegevens worden uitsluitend verwerkt voor het beantwoorden van uw vraag of verzoek. Indien u toestemming hebt gegeven, kan uw contactverzoek worden doorgestuurd naar Alterion, onze gecertificeerde installatiepartner, voor persoonlijk advies.",
          "Uw gegevens worden niet gebruikt voor commerciële doeleinden, nieuwsbrieven of marketingactiviteiten, tenzij u hier expliciet toestemming voor heeft gegeven.",
        ],
      },
      {
        id: "bewaartermijn",
        title: "4. Bewaartermijn",
        paragraphs: [
          "Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor zij zijn verzameld. Contactverzoeken worden maximaal 12 maanden bewaard, waarna zij automatisch worden verwijderd.",
        ],
      },
      {
        id: "rechten",
        title: "5. Uw rechten",
        paragraphs: [
          "Op grond van de AVG heeft u het recht om:",
          "• Uw persoonsgegevens in te zien\n• Uw persoonsgegevens te laten corrigeren\n• Uw persoonsgegevens te laten verwijderen\n• Bezwaar te maken tegen de verwerking\n• Uw gegevens over te laten dragen",
          "U kunt een verzoek indienen via info@ncde.nl. Wij reageren binnen 30 dagen op uw verzoek.",
        ],
      },
      {
        id: "contact-privacy",
        title: "6. Contact",
        paragraphs: [
          "Voor vragen over dit privacybeleid kunt u contact opnemen met:",
          "Stichting NCDE\nE-mail: info@ncde.nl\nTelefoon: 088-XXXXXXX\nWebsite: www.ncde.nl",
        ],
      },
    ],
  },
  voorwaarden: {
    title: "Algemene Voorwaarden",
    date: "15 maart 2026",
    sections: [
      {
        id: "definities",
        title: "1. Definities",
        paragraphs: [
          "In deze Algemene Voorwaarden wordt verstaan onder:",
          "• NCDE: Stichting Nederlands Collectief Duurzame Energie, ingeschreven bij de Kamer van Koophandel.\n• Gebruiker: De natuurlijke persoon die de website van NCDE bezoekt of gebruikmaakt van de diensten van NCDE.\n• Diensten: Alle informatievoorziening, advies en bemiddeling die door NCDE wordt aangeboden.",
        ],
      },
      {
        id: "toepasselijkheid",
        title: "2. Toepasselijkheid",
        paragraphs: [
          "Deze voorwaarden zijn van toepassing op alle aanbiedingen, dienstverlening en overeenkomsten van NCDE. Eventuele afwijkingen zijn slechts geldig indien schriftelijk overeengekomen.",
          "Door gebruik te maken van de website en diensten van NCDE gaat u akkoord met deze voorwaarden.",
        ],
      },
      {
        id: "dienstverlening",
        title: "3. Dienstverlening",
        paragraphs: [
          "NCDE is een stichting die objectieve informatie verstrekt over duurzame energie, de salderingsregeling en energieoplossingen. NCDE treedt op als informatief platform en bemiddelaar, niet als commerciële aanbieder.",
          "Alle informatie op de website is met zorg samengesteld, maar NCDE kan niet garanderen dat alle informatie te allen tijde volledig, juist en actueel is.",
        ],
      },
      {
        id: "aansprakelijkheid",
        title: "4. Aansprakelijkheid",
        paragraphs: [
          "NCDE is niet aansprakelijk voor schade die voortvloeit uit het gebruik van de informatie op de website. Het gebruik van de website en de daarop verstrekte informatie is voor eigen risico.",
          "NCDE is niet aansprakelijk voor diensten die worden geleverd door derden, waaronder gecertificeerde installatiepartners, die via NCDE worden doorverwezen.",
        ],
      },
      {
        id: "betaling",
        title: "5. Betalingsvoorwaarden",
        paragraphs: [
          "De dienstverlening van NCDE via de website is kosteloos voor gebruikers. NCDE is een stichting zonder winstoogmerk. Eventuele kosten die voortvloeien uit dienstverlening door derden (installatiepartners) vallen buiten de verantwoordelijkheid van NCDE en worden separaat overeengekomen tussen de gebruiker en de betreffende partij.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    date: "15 maart 2026",
    sections: [
      {
        id: "algemeen",
        title: "1. Algemeen",
        paragraphs: [
          "De informatie op de website van Stichting NCDE is bedoeld als algemene informatie over duurzame energie en gerelateerde onderwerpen. Aan de inhoud van deze website kunnen geen rechten worden ontleend.",
        ],
      },
      {
        id: "informatie",
        title: "2. Informatie",
        paragraphs: [
          "Hoewel NCDE de grootst mogelijke zorgvuldigheid betracht bij het samenstellen van de inhoud van deze website, is het mogelijk dat bepaalde informatie onvolledig, onjuist of niet actueel is. NCDE aanvaardt geen enkele aansprakelijkheid voor schade als gevolg van onjuistheden of onvolledigheden in de aangeboden informatie.",
          "De informatie op deze website vervangt geen professioneel advies. Raadpleeg altijd een erkende adviseur voor beslissingen over uw energiesituatie.",
        ],
      },
      {
        id: "links",
        title: "3. Externe links",
        paragraphs: [
          "De website van NCDE kan verwijzingen bevatten naar websites van derden. NCDE heeft geen invloed op de inhoud en het beleid van deze websites en is niet verantwoordelijk voor de inhoud of het privacybeleid van deze externe sites.",
        ],
      },
      {
        id: "wijzigingen",
        title: "4. Wijzigingen",
        paragraphs: [
          "NCDE behoudt zich het recht voor om de inhoud van deze website en deze disclaimer te allen tijde te wijzigen zonder voorafgaande kennisgeving. Op deze disclaimer is Nederlands recht van toepassing.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookiebeleid",
    date: "15 maart 2026",
    sections: [
      {
        id: "wat-zijn-cookies",
        title: "1. Wat zijn cookies",
        paragraphs: [
          "Cookies zijn kleine tekstbestanden die door uw webbrowser worden opgeslagen wanneer u een website bezoekt. Ze worden gebruikt om de website goed te laten functioneren en om informatie te verzamelen over het gebruik van de website.",
        ],
      },
      {
        id: "welke-cookies",
        title: "2. Welke cookies gebruiken wij",
        paragraphs: [
          "De website van NCDE maakt uitsluitend gebruik van functionele cookies die noodzakelijk zijn voor het correct functioneren van de website. Wij plaatsen geen tracking-cookies, analytische cookies of advertentiecookies.",
          "• Functionele cookies: Deze cookies zijn noodzakelijk om de website te laten werken en kunnen niet worden uitgeschakeld in onze systemen.",
        ],
      },
      {
        id: "beheren",
        title: "3. Cookies beheren",
        paragraphs: [
          "U kunt uw browserinstellingen aanpassen om cookies te weigeren of om een melding te ontvangen wanneer cookies worden geplaatst. Houd er rekening mee dat het uitschakelen van functionele cookies de werking van de website kan beïnvloeden.",
          "Voor meer informatie over het beheren van cookies verwijzen wij u naar de helpfunctie van uw browser.",
        ],
      },
    ],
  },
};

export default function LegalTabs() {
  const [activeTab, setActiveTab] = useState("privacy");
  const currentContent = content[activeTab];
  const currentToc = tocItems[activeTab];

  return (
    <main className="flex-1 flex justify-center py-10 px-6 md:px-0 bg-background-light">
      <div className="max-w-[1000px] w-full flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24">
            {/* Tabs */}
            <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-4 px-2">
              Juridisch
            </h4>
            <nav className="flex flex-col gap-1 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? "font-semibold text-accent-gold bg-accent-gold/10 border-l-2 border-accent-gold"
                      : "text-charcoal/60 hover:bg-charcoal/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Table of contents */}
            <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-4 px-2">
              Inhoud
            </h4>
            <nav className="flex flex-col gap-1">
              {currentToc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 py-2 text-sm font-medium rounded-lg text-charcoal/60 hover:bg-charcoal/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Help card */}
            <div className="mt-12 p-5 bg-white rounded-xl border border-charcoal/10 shadow-sm">
              <p className="text-sm font-bold mb-2">Hulp nodig?</p>
              <p className="text-xs text-charcoal/50 mb-4">
                Neem contact op voor vragen over onze juridische documenten.
              </p>
              <a
                href="mailto:info@ncde.nl"
                className="text-xs font-bold text-accent-gold underline"
              >
                info@ncde.nl
              </a>
            </div>
          </div>
        </aside>

        {/* Mobile tab selector */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-accent-gold text-charcoal"
                  : "bg-white text-charcoal/60 border border-charcoal/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Document body */}
        <article className="flex-1 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-charcoal/5">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8 text-sm text-charcoal/50 font-medium">
            <Link href="/" className="hover:text-charcoal">
              Home
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-charcoal">{currentContent.title}</span>
          </nav>

          {/* Title & Date */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight mb-4">
              {currentContent.title}
            </h1>
            <div className="flex items-center gap-2 text-charcoal/50 text-sm">
              <span className="material-symbols-outlined text-base">
                schedule
              </span>
              <span>Laatst bijgewerkt: {currentContent.date}</span>
            </div>
          </header>

          {/* Sections */}
          {currentContent.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-10">
              <h2 className="text-2xl font-bold text-charcoal border-b border-charcoal/10 pb-3 mb-4">
                {section.title}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-charcoal/70 leading-relaxed mb-4 whitespace-pre-line"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Bottom actions */}
          <div className="mt-20 pt-10 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-charcoal/50">
              Heeft u vragen over dit document?
            </p>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-accent-gold text-charcoal font-bold text-sm rounded-lg flex items-center gap-2 hover:bg-accent-gold/90 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              Neem contact op
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
