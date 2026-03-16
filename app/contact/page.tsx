import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — NCDE",
  description:
    "Neem contact op met NCDE of laat uw gegevens achter voor persoonlijk advies over duurzame energie.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-black tracking-tight text-charcoal sm:text-6xl mb-6">
              Samen de{" "}
              <span className="text-accent-gold">energietransitie</span>{" "}
              vormgeven.
            </h2>
            <p className="text-lg leading-relaxed text-charcoal/60">
              Of u nu vragen heeft over de salderingsregeling, informatie zoekt
              over duurzame oplossingen of persoonlijk advies wilt — wij staan
              voor u klaar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-charcoal/5">
            <h3 className="text-2xl font-bold text-charcoal mb-8">
              Stuur een bericht
            </h3>
            <form action="#" className="space-y-6" method="POST">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-medium text-charcoal/70 mb-2"
                    htmlFor="first-name"
                  >
                    Voornaam
                  </label>
                  <input
                    className="w-full rounded-lg border border-charcoal/10 bg-background-light p-3 text-sm focus:border-accent-gold focus:ring-accent-gold focus:outline-none"
                    id="first-name"
                    name="first-name"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-charcoal/70 mb-2"
                    htmlFor="last-name"
                  >
                    Achternaam
                  </label>
                  <input
                    className="w-full rounded-lg border border-charcoal/10 bg-background-light p-3 text-sm focus:border-accent-gold focus:ring-accent-gold focus:outline-none"
                    id="last-name"
                    name="last-name"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-charcoal/70 mb-2"
                  htmlFor="email"
                >
                  E-mailadres
                </label>
                <input
                  className="w-full rounded-lg border border-charcoal/10 bg-background-light p-3 text-sm focus:border-accent-gold focus:ring-accent-gold focus:outline-none"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-charcoal/70 mb-2"
                  htmlFor="inquiry-type"
                >
                  Type vraag
                </label>
                <select
                  className="w-full rounded-lg border border-charcoal/10 bg-background-light p-3 text-sm focus:border-accent-gold focus:ring-accent-gold focus:outline-none"
                  id="inquiry-type"
                  name="inquiry-type"
                >
                  <option>Algemene vraag</option>
                  <option>Salderingsregeling</option>
                  <option>Zonnepanelen &amp; thuisbatterijen</option>
                  <option>Noodvoorziening</option>
                  <option>Samenwerking / partnerschap</option>
                  <option>Pers &amp; media</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-charcoal/70 mb-2"
                  htmlFor="message"
                >
                  Bericht
                </label>
                <textarea
                  className="w-full rounded-lg border border-charcoal/10 bg-background-light p-3 text-sm focus:border-accent-gold focus:ring-accent-gold focus:outline-none"
                  id="message"
                  name="message"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full rounded-lg bg-accent-gold py-4 text-sm font-bold text-charcoal transition-all hover:bg-accent-gold/90 active:scale-[0.98]"
                type="submit"
              >
                Verstuur bericht
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal/40">
                    Adres
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-charcoal leading-tight">
                    Nederland
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal/40">
                    Telefoon
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-charcoal">
                    088-XXXXXXX
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal/40">
                    E-mail
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-charcoal">
                    <a
                      href="mailto:info@ncde.nl"
                      className="hover:text-accent-gold transition-colors"
                    >
                      info@ncde.nl
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal/40">
                    Website
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-charcoal">
                    <a
                      href="https://www.ncde.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-gold transition-colors"
                    >
                      www.ncde.nl
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                  <span className="material-symbols-outlined">
                    corporate_fare
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal/40">
                    KVK-nummer
                  </h4>
                  <p className="mt-1 text-lg font-semibold text-charcoal">
                    12345678
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer card */}
            <div className="rounded-2xl bg-charcoal p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-accent-gold">
                  info
                </span>
                <h4 className="text-white font-bold">Persoonlijk advies</h4>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Alterion, gecertificeerd installatiepartner, neemt contact met u
                op voor persoonlijk advies. Uw gegevens worden uitsluitend
                gebruikt voor het beantwoorden van uw vraag conform ons{" "}
                <a
                  href="/privacy"
                  className="text-accent-gold underline hover:text-accent-gold/80"
                >
                  privacybeleid
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
