import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Registratie — NCDE",
  description:
    "Registreer als partner bij NCDE en word onderdeel van ons gecertificeerde installatienetwerk voor duurzame energie.",
};

export default function RegistratieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
