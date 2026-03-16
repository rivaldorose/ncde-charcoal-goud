"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/salderingsregeling", label: "Salderingsregeling" },
  { href: "/noodpakket", label: "Noodvoorziening" },
  { href: "/oplossingen", label: "Oplossingen" },
  { href: "/partners", label: "Over ons" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background-light/90 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-charcoal p-1.5 rounded">
            <span className="material-symbols-outlined text-accent-gold text-2xl">
              account_balance
            </span>
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-charcoal uppercase">
            NCDE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold hover:text-accent-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-charcoal text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-charcoal/90 transition-all active:scale-95"
        >
          Neem contact op
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-charcoal hover:text-accent-gold"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu openen"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-6 border-t border-charcoal/10 bg-background-light/95 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-sm font-semibold hover:text-accent-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-2 text-center bg-charcoal text-white px-6 py-2.5 rounded-full text-sm font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Neem contact op
          </Link>
        </nav>
      )}
    </header>
  );
}
