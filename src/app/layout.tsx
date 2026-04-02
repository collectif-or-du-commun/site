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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Collectif Or du Commun",
  "description": "Tiers-lieu associatif à Andolsheim (68). Coworking, formations, événements et accompagnement pour entrepreneurs et indépendants en Alsace.",
  "url": "https://collectiforducommun.org",
  "telephone": "+33755530857",
  "email": "contact@collectiforducommun.org",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4 Grand'Rue",
    "addressLocality": "Andolsheim",
    "postalCode": "68280",
    "addressCountry": "FR",
    "addressRegion": "Alsace"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.0418,
    "longitude": 7.3776
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/Collectiforducommun",
    "https://fr.linkedin.com/company/collectif-or-du-commun"
  ],
  "image": "https://odc.vjacquet.fr/images/jardin-odc.jpg",
  "priceRange": "€",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 48.0418,
      "longitude": 7.3776
    },
    "geoRadius": "30000"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON.stringify produit du JSON statique hardcodé — aucun input utilisateur, pas de risque XSS
  const ldJson = JSON.stringify(jsonLd);
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson }} />
      </head>
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
