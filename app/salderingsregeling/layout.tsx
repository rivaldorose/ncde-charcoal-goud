import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salderingsregeling — NCDE",
  description:
    "Wat verandert er aan de salderingsregeling? NCDE legt uit wat dit betekent voor uw zonnepanelen en energierekening.",
};

export default function SalderingsregelingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
