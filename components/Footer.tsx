import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organisatie */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-white text-lg font-bold mb-3">
              NCDE
            </h3>
            <p className="text-sm leading-relaxed">
              Nederlands Collectief Duurzame Energie
            </p>
            <p className="text-sm mt-1">Stichting NCDE</p>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Pagina&apos;s
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/salderingsregeling" className="hover:text-gold transition-colors">
                  Salderingsregeling
                </Link>
              </li>
              <li>
                <Link href="/noodpakket" className="hover:text-gold transition-colors">
                  Noodvoorziening
                </Link>
              </li>
              <li>
                <Link href="/oplossingen" className="hover:text-gold transition-colors">
                  Oplossingen
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-gold transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacybeleid
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Telefoon: 088-XXXXXXX</li>
              <li>
                <a href="mailto:info@ncde.nl" className="hover:text-gold transition-colors">
                  info@ncde.nl
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncde.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  www.ncde.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed">
            Alterion, gecertificeerd installatiepartner, neemt contact met u op
            voor persoonlijk advies.
          </p>
          <p className="text-xs text-white/40 mt-2">
            &copy; {new Date().getFullYear()} Stichting NCDE — Nederlands
            Collectief Duurzame Energie. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
