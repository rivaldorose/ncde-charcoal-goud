import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Organisatie */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-accent-gold text-2xl">
                account_balance
              </span>
              <span className="text-xl font-extrabold tracking-tighter text-white uppercase">
                NCDE
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Nederlands Collectief Duurzame Energie.
              <br />
              Stichting ter bevordering van objectieve kennisdeling in de
              energietransitie.
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-bold mb-6 text-accent-gold">Snel naar</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link
                  href="/salderingsregeling"
                  className="hover:text-white transition-colors"
                >
                  Salderingsregeling
                </Link>
              </li>
              <li>
                <Link
                  href="/oplossingen"
                  className="hover:text-white transition-colors"
                >
                  Thuisbatterijen
                </Link>
              </li>
              <li>
                <Link
                  href="/noodpakket"
                  className="hover:text-white transition-colors"
                >
                  Noodvoorziening
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="hover:text-white transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-accent-gold">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-xs">call</span>
                088-XXXXXXX
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-xs">mail</span>
                <a
                  href="mailto:info@ncde.nl"
                  className="hover:text-white transition-colors"
                >
                  info@ncde.nl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-xs">
                  language
                </span>
                <a
                  href="https://www.ncde.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.ncde.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Certificering */}
          <div>
            <h4 className="font-bold mb-6 text-accent-gold">Certificering</h4>
            <div className="flex gap-4 opacity-50">
              <span className="material-symbols-outlined text-4xl">
                verified_user
              </span>
              <span className="material-symbols-outlined text-4xl">gavel</span>
            </div>
          </div>
        </div>

        {/* Disclaimer & bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 italic mb-4">
            Alterion, gecertificeerd installatiepartner, neemt contact met u op
            voor persoonlijk advies.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <div>
              &copy; {new Date().getFullYear()} Stichting NCDE — KVK 12345678
            </div>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacybeleid
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
