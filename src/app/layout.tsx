import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Collectif Or du Commun | Tiers-lieu Andolsheim, Alsace",
    template: "%s | Collectif Or du Commun",
  },
  description:
    "Tiers-lieu associatif a Andolsheim (68). Coworking, formations, evenements et accompagnement pour entrepreneurs et independants en Alsace.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://collectiforducommun.org",
    siteName: "Collectif Or du Commun",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
