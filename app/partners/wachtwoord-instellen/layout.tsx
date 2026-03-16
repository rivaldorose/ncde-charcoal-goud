import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wachtwoord Instellen — NCDE",
  description: "Stel een nieuw wachtwoord in voor uw NCDE partneraccount.",
};

export default function WachtwoordInstellenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
