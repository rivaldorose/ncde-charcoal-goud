"use client";

import Link from "next/link";
import { useState } from "react";

export default function WachtwoordInstellenPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 min-h-[80vh]">
      <div className="w-full max-w-[520px] bg-white border border-charcoal/5 p-8 rounded-xl shadow-sm">
        {/* Title */}
        <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
          <h1 className="text-charcoal text-3xl font-black tracking-tight leading-tight">
            Wachtwoord instellen
          </h1>
          <p className="text-charcoal/50 text-base">
            Beveilig uw account met een uniek en sterk wachtwoord.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* New Password */}
          <div className="flex flex-col gap-2">
            <label className="text-charcoal text-sm font-semibold">
              Nieuw wachtwoord
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Minimaal 12 tekens"
                className="w-full h-14 px-4 pr-12 rounded-lg border border-charcoal/10 bg-background-light/50 text-charcoal focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-charcoal/40 hover:text-charcoal/60"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          {/* Strength Meter */}
          <div className="p-4 rounded-lg bg-background-light/50 border border-charcoal/5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-charcoal text-sm font-medium">
                Wachtwoordsterkte:{" "}
                <span className="text-accent-gold">Sterk</span>
              </span>
              <span className="text-charcoal/40 text-xs font-bold uppercase tracking-widest">
                78%
              </span>
            </div>
            <div className="h-1.5 w-full bg-charcoal/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent-gold rounded-full"
                style={{ width: "78%" }}
              ></div>
            </div>
            <p className="text-charcoal/50 text-xs leading-relaxed">
              Tip: Gebruik een combinatie van hoofdletters, cijfers en speciale
              tekens voor maximale beveiliging.
            </p>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-charcoal text-sm font-semibold">
              Bevestig wachtwoord
            </label>
            <div className="relative flex items-center">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Herhaal uw wachtwoord"
                className="w-full h-14 px-4 pr-12 rounded-lg border border-charcoal/10 bg-background-light/50 text-charcoal focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 text-charcoal/40 hover:text-charcoal/60"
              >
                <span className="material-symbols-outlined">
                  {showConfirm ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          {/* Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {[
              { label: "Minimaal 12 tekens", done: true },
              { label: "Cijfers & symbolen", done: true },
              { label: "Hoofdletters", done: true },
              { label: "Geen persoonlijke info", done: false },
            ].map((req) => (
              <div
                key={req.label}
                className="flex items-center gap-2 text-xs text-charcoal/50"
              >
                <span
                  className={`material-symbols-outlined text-sm ${
                    req.done ? "text-accent-gold" : "text-charcoal/20"
                  }`}
                >
                  {req.done ? "check_circle" : "circle"}
                </span>
                <span>{req.label}</span>
              </div>
            ))}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full h-14 bg-accent-gold text-charcoal font-bold text-base rounded-lg hover:bg-accent-gold/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent-gold/10"
            >
              Wachtwoord instellen
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/partners/wachtwoord-vergeten"
            className="text-charcoal/50 text-sm hover:underline"
          >
            Hulp nodig bij inloggen?
          </Link>
        </div>
      </div>
    </main>
  );
}
