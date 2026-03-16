import type { Metadata } from "next";
import LegalTabs from "@/components/LegalTabs";

export const metadata: Metadata = {
  title: "Juridisch — NCDE",
  description:
    "Privacybeleid, Algemene Voorwaarden, Disclaimer en Cookiebeleid van Stichting NCDE — Nederlands Collectief Duurzame Energie.",
};

export default function PrivacyPage() {
  return <LegalTabs />;
}
