"use client";

import Link from "next/link";
import { useState } from "react";

const steps = [
  { number: "01", label: "Bedrijfsgegevens", active: false },
  { number: "02", label: "Compliance", active: true },
  { number: "03", label: "Contactpersoon", active: false },
  { number: "04", label: "Verificatie", active: false },
];

export default function PartnerRegistratiePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    kvkNumber: "",
    contactName: "",
    contactEmail: "",
    certifications: [] as string[],
  });

  const toggleCertification = (cert: string) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }));
  };

  return (
    <>
      {/* Progress Header */}
      <section className="bg-white border-b border-charcoal/10 px-6 md:px-20 py-4">
        <div className="max-w-[800px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-accent-gold font-bold text-lg">NCDE</span>
            <span className="text-charcoal/40 font-bold text-lg">PARTNER</span>
          </div>
          <span className="hidden md:block text-charcoal/60 text-sm font-medium">
            Voortgang: 40%
          </span>
        </div>
      </section>

      <main className="flex flex-1 justify-center py-10 px-4">
        <div className="flex flex-col max-w-[800px] w-full">
          {/* Progress Steps */}
          <div className="flex items-center justify-between border-b border-charcoal/5 mb-8 overflow-x-auto whitespace-nowrap">
            <div className="flex gap-8 px-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`pb-4 text-sm font-bold tracking-wider uppercase flex items-center gap-2 ${
                    step.active
                      ? "text-accent-gold border-b-2 border-accent-gold"
                      : "text-charcoal/40"
                  }`}
                >
                  <span
                    className={`size-6 rounded-full flex items-center justify-center text-xs ${
                      step.active
                        ? "bg-accent-gold text-white"
                        : "border border-charcoal/20"
                    }`}
                  >
                    {step.number}
                  </span>
                  {step.label}
                </div>
              ))}
            </div>
          </div>

          {/* Header */}
          <div className="px-4 py-6">
            <h1 className="text-charcoal text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2">
              Partner Registratie
            </h1>
            <p className="text-charcoal/60 text-lg">
              Word onderdeel van het NCDE installatienetwerk. Vul uw
              compliance-gegevens in.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-8 flex flex-col gap-10">
            {/* Company Identity */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-accent-gold">
                  domain
                </span>
                <h2 className="text-charcoal text-xl font-bold">
                  Bedrijfsgegevens
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-charcoal text-sm font-bold uppercase tracking-wider">
                    Officiële Bedrijfsnaam
                  </span>
                  <input
                    type="text"
                    placeholder="bijv. Installatiebedrijf De Vries B.V."
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="w-full rounded-lg border border-charcoal/10 bg-background-light/50 focus:border-accent-gold focus:ring-accent-gold h-12 px-4 text-charcoal"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-charcoal text-sm font-bold uppercase tracking-wider">
                    KVK Nummer
                  </span>
                  <input
                    type="text"
                    placeholder="8-cijferig registratienummer"
                    value={formData.kvkNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, kvkNumber: e.target.value })
                    }
                    className="w-full rounded-lg border border-charcoal/10 bg-background-light/50 focus:border-accent-gold focus:ring-accent-gold h-12 px-4 text-charcoal"
                  />
                </label>
              </div>
            </div>

            <hr className="border-charcoal/5" />

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-accent-gold">
                  verified
                </span>
                <h2 className="text-charcoal text-xl font-bold">
                  Technische Certificeringen
                </h2>
              </div>
              <p className="text-charcoal/50 text-sm mb-6">
                Selecteer alle certificeringen die uw organisatie momenteel
                bezit.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "VCA** (Veiligheids Checklist)",
                  "ISO 9001:2015",
                  "ISO 14001 (Milieu)",
                  "NEN 3140 Certificering",
                ].map((cert) => (
                  <label
                    key={cert}
                    className="flex items-center gap-3 p-4 border border-charcoal/10 rounded-lg hover:border-accent-gold/50 cursor-pointer transition-colors bg-background-light/20"
                  >
                    <input
                      type="checkbox"
                      checked={formData.certifications.includes(cert)}
                      onChange={() => toggleCertification(cert)}
                      className="rounded text-accent-gold focus:ring-accent-gold border-charcoal/20 size-5"
                    />
                    <span className="text-charcoal font-medium">{cert}</span>
                  </label>
                ))}
              </div>
            </div>

            <hr className="border-charcoal/5" />

            {/* Primary Contact */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-accent-gold">
                  person_pin
                </span>
                <h2 className="text-charcoal text-xl font-bold">
                  Contactpersoon
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-charcoal text-sm font-bold uppercase tracking-wider">
                    Volledige Naam
                  </span>
                  <input
                    type="text"
                    placeholder="Bevoegd vertegenwoordiger"
                    value={formData.contactName}
                    onChange={(e) =>
                      setFormData({ ...formData, contactName: e.target.value })
                    }
                    className="w-full rounded-lg border border-charcoal/10 bg-background-light/50 focus:border-accent-gold focus:ring-accent-gold h-12 px-4 text-charcoal"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-charcoal text-sm font-bold uppercase tracking-wider">
                    Zakelijk E-mailadres
                  </span>
                  <input
                    type="email"
                    placeholder="naam@bedrijf.nl"
                    value={formData.contactEmail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactEmail: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-charcoal/10 bg-background-light/50 focus:border-accent-gold focus:ring-accent-gold h-12 px-4 text-charcoal"
                  />
                </label>
              </div>
            </div>

            <hr className="border-charcoal/5" />

            {/* Document Upload */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-accent-gold">
                  upload_file
                </span>
                <h2 className="text-charcoal text-xl font-bold">
                  Ondersteunende Documentatie
                </h2>
              </div>
              <div className="border-2 border-dashed border-charcoal/10 rounded-xl p-10 flex flex-col items-center justify-center bg-background-light/30">
                <div className="size-16 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold mb-4">
                  <span className="material-symbols-outlined text-4xl">
                    cloud_upload
                  </span>
                </div>
                <p className="text-charcoal font-bold text-lg">
                  Sleep uw bestanden hierheen
                </p>
                <p className="text-charcoal/50 text-sm mb-6 text-center">
                  Upload PDF- of JPG-kopieën van uw certificeringen en
                  KVK-uittreksel (max. 10MB per bestand)
                </p>
                <button className="px-6 py-2 bg-charcoal text-white rounded-lg font-bold hover:bg-charcoal/90 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    attach_file
                  </span>
                  Bestanden Kiezen
                </button>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
              <Link
                href="/partners"
                className="w-full sm:w-auto px-8 py-3 rounded-lg text-charcoal font-bold border border-charcoal/10 hover:bg-charcoal/5 transition-all text-center"
              >
                Terug
              </Link>
              <button className="w-full sm:w-auto px-10 py-3 rounded-lg bg-accent-gold text-charcoal font-black tracking-widest uppercase hover:scale-[1.02] transition-all shadow-lg shadow-accent-gold/20">
                Opslaan en Doorgaan
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
