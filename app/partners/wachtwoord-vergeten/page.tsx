import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wachtwoord Vergeten — NCDE",
  description:
    "Reset uw wachtwoord voor het NCDE partnerportaal.",
};

export default function WachtwoordVergetenPage() {
  return (
    <main className="flex-1 flex items-center justify-center p-6 min-h-[80vh]">
      <div className="w-full max-w-[480px] space-y-8">
        {/* Intro */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/10 mb-2">
            <span className="material-symbols-outlined text-accent-gold text-3xl">
              key_visualizer
            </span>
          </div>
          <h1 className="text-charcoal text-4xl font-black leading-tight tracking-tight">
            Wachtwoord herstellen
          </h1>
          <p className="text-charcoal/50 text-base max-w-sm mx-auto">
            Vul uw zakelijke e-mailadres in en we sturen u een beveiligde link
            om uw wachtwoord opnieuw in te stellen.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-charcoal/5 rounded-2xl p-8 shadow-sm">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-charcoal text-sm font-bold uppercase tracking-wider">
                Zakelijk E-mailadres
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 group-focus-within:text-accent-gold transition-colors">
                  mail
                </span>
                <input
                  type="email"
                  placeholder="naam@bedrijf.nl"
                  required
                  className="flex w-full pl-12 pr-4 rounded-xl text-charcoal focus:outline-0 focus:ring-2 focus:ring-accent-gold/20 border border-charcoal/10 bg-background-light/50 focus:border-accent-gold h-14 placeholder:text-charcoal/40 text-base transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex cursor-pointer items-center justify-center rounded-xl h-14 px-5 bg-accent-gold text-charcoal text-base font-bold tracking-tight shadow-lg shadow-accent-gold/20 hover:bg-accent-gold/90 transition-all"
            >
              <span>Herstelcode Versturen</span>
              <span className="material-symbols-outlined ml-2 text-xl">
                arrow_forward
              </span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-charcoal/5 flex flex-col items-center gap-4">
            <Link
              href="/partners"
              className="flex items-center justify-center rounded-lg h-10 px-4 text-charcoal text-sm font-semibold hover:bg-charcoal/5 transition-colors"
            >
              <span className="material-symbols-outlined mr-2 text-lg">
                arrow_back
              </span>
              Terug naar Partners
            </Link>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex items-center gap-2 text-charcoal/40">
            <span className="material-symbols-outlined text-sm">
              verified_user
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Versleutelde Beveiliging
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/juridisch"
              className="text-xs text-charcoal/40 hover:text-accent-gold transition-colors"
            >
              Privacybeleid
            </Link>
            <Link
              href="/juridisch"
              className="text-xs text-charcoal/40 hover:text-accent-gold transition-colors"
            >
              Gebruiksvoorwaarden
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
