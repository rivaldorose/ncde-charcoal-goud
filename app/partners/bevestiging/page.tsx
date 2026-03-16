import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aanvraag Bevestiging — NCDE",
  description:
    "Uw partnerregistratie bij NCDE is succesvol ontvangen.",
};

export default function BevestigingPage() {
  return (
    <main className="flex flex-1 justify-center py-12 px-6">
      <div className="max-w-[800px] w-full flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-accent-gold/20 blur-3xl rounded-full"></div>
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-accent-gold text-white shadow-xl shadow-accent-gold/20">
            <span className="material-symbols-outlined text-5xl">
              check_circle
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-charcoal text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4">
            Aanvraag succesvol ontvangen
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Bedankt voor uw registratie als partner bij NCDE. We hebben uw
            gegevens in goede orde ontvangen en gaan direct aan de slag.
          </p>
        </div>

        {/* Status Card */}
        <div className="w-full bg-white border border-charcoal/5 rounded-2xl shadow-sm p-8 lg:p-12 mb-10 text-left">
          <h2 className="text-charcoal text-2xl font-bold mb-8">
            Wat kunt u verwachten?
          </h2>
          <div className="space-y-0">
            {/* Step 1 */}
            <div className="grid grid-cols-[48px_1fr] gap-x-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-white">
                  <span className="material-symbols-outlined text-2xl">
                    description
                  </span>
                </div>
                <div className="w-0.5 bg-charcoal/10 h-16 my-1"></div>
              </div>
              <div className="flex flex-col pt-1 pb-8">
                <p className="text-charcoal text-lg font-bold">
                  Documentatie ontvangen
                </p>
                <p className="text-charcoal/50">
                  Uw aanvraag is veilig opgeslagen in ons systeem. U ontvangt
                  binnen enkele minuten een bevestigingsmail.
                </p>
                <p className="text-accent-gold font-semibold mt-1 text-sm uppercase tracking-wider">
                  Vandaag
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-[48px_1fr] gap-x-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                  <span className="material-symbols-outlined text-2xl">
                    clinical_notes
                  </span>
                </div>
                <div className="w-0.5 bg-charcoal/10 h-16 my-1"></div>
              </div>
              <div className="flex flex-col pt-1 pb-8">
                <p className="text-charcoal text-lg font-bold">
                  Beoordeling door ons team
                </p>
                <p className="text-charcoal/50">
                  Onze specialisten controleren de ingediende documenten op
                  volledigheid en compliance richtlijnen.
                </p>
                <p className="text-charcoal/40 font-semibold mt-1 text-sm uppercase tracking-wider">
                  Binnen 5 werkdagen
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-[48px_1fr] gap-x-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background-light text-charcoal/40 border border-charcoal/10">
                  <span className="material-symbols-outlined text-2xl">
                    verified
                  </span>
                </div>
              </div>
              <div className="flex flex-col pt-1">
                <p className="text-charcoal text-lg font-bold">
                  Definitieve bevestiging
                </p>
                <p className="text-charcoal/50">
                  Zodra de audit is voltooid, activeren wij uw partnerportaal en
                  kunt u direct van start gaan.
                </p>
                <p className="text-charcoal/40 font-semibold mt-1 text-sm uppercase tracking-wider">
                  Na goedkeuring
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/partners"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-charcoal text-white font-bold text-base hover:bg-charcoal/90 transition-all shadow-lg shadow-charcoal/10"
          >
            Terug naar Partners
          </Link>
          <Link
            href="/juridisch"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border border-charcoal/10 text-charcoal font-bold text-base hover:bg-background-light transition-all"
          >
            Documentatie Bekijken
          </Link>
        </div>

        {/* Help */}
        <p className="mt-12 text-charcoal/40 text-sm">
          Heeft u vragen over uw aanvraag?{" "}
          <Link
            href="/contact"
            className="text-accent-gold underline underline-offset-4 hover:text-accent-gold/80"
          >
            Neem contact op met support
          </Link>
        </p>
      </div>
    </main>
  );
}
