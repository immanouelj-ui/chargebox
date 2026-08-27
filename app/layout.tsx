import type { Metadata } from "next";
import "./globals.css";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { getCurrentUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Chargebox | Bornes de Recharge Véhicules Électriques & Accessoires IRVE",
  description:
    "Boutique e-commerce experte en bornes de recharge pour véhicules électriques et hybrides. Découvrez la gamme Teltonika Energy, Wallbox, V2C, Schneider, Hager et Legrand. Éligibilité crédit d'impôt 500 € et réseau de poseurs IRVE.",
  keywords: [
    "borne de recharge",
    "Teltonika TeltoCharge",
    "Wallbox Pulsar Max",
    "V2C Trydan",
    "borne recharge voiture électrique",
    "borne 7.4 kW",
    "borne 22 kW triphasé",
    "crédit d'impôt borne de recharge",
    "installation IRVE",
    "câble type 2",
    "protection différentiel type F",
  ],
  authors: [{ name: "Chargebox SAS" }],
  openGraph: {
    title: "Chargebox | Bornes de Recharge Électriques & Solutions IRVE",
    description:
      "Vente et installation de bornes de recharge de qualité industrielle : Teltonika, Wallbox, V2C, Schneider, Hager, Legrand.",
    url: "https://chargebox.fr",
    siteName: "Chargebox",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/images/chargebox-icon.svg",
    shortcut: "/images/chargebox-icon.svg",
    apple: "/images/chargebox-icon.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900">
        <TopBanner />
        <Header user={user} />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
