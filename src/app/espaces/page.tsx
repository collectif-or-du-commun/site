import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Wifi, Coffee, Car, Users, Monitor, Sun } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Coworking et espaces à Andolsheim",
  description:
    "Espace de coworking, salles de formation et bureaux privatisables à Andolsheim (68). WiFi, parking gratuit, cuisine équipée. À 10 min de Colmar.",
  alternates: {
    canonical: "/espaces",
  },
};

const espaces = [
  {
    img: "/images/before-week-duo.jpg",
    alt: "Espace coworking Andolsheim",
    title: "Espace coworking",
    desc: "Postes individuels dans une atmosphère conviviale. WiFi fibre, impressions, thé et café inclus. Accès en carnet ou abonnement mensuel.",
    href: "/espaces/nos-locaux",
  },
  {
    img: "/images/cafe-commun.jpg",
    alt: "Espace commun et cuisine",
    title: "Espace commun",
    desc: "Cuisine équipée, espace détente et jardin. Un lieu de pauses et de rencontres entre membres de la communauté.",
    href: "/espaces/nos-locaux",
  },
  {
    img: "/images/lcampus-groupe.jpg",
    alt: "Salles de formation modulables",
    title: "Salles de formation",
    desc: "2 salles modulables de 30 m² et 65 m² pour ateliers, formations et réunions. Vidéoprojecteur, paperboard, mobilier adaptable.",
    href: "/location-salles",
  },
];

const equipements = [
  { icon: Wifi, label: "WiFi fibre inclus" },
  { icon: Monitor, label: "Vidéoprojecteur" },
  { icon: Car, label: "Parking gratuit" },
  { icon: Coffee, label: "Café & thé inclus" },
  { icon: Users, label: "Cuisine équipée" },
  { icon: Sun, label: "Jardin" },
];

export default function EspacesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bleu-dark py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bleu-dark to-bleu opacity-80" />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Coworking et espaces à Andolsheim
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl">
            Un tiers-lieu de 200 m² à 10 minutes de Colmar : postes de coworking, salles de formation modulables, bureaux privatisables et espaces communs. Ouvert du lundi au vendredi, 8h–18h.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["📍 4 Grand'Rue, Andolsheim", "🚗 Parking gratuit", "⏰ Lun–Ven 8h–18h", "🏆 Label Tiers-lieux Grand Est"].map((pill) => (
              <span key={pill} className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Espace vivant et humain */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl text-bleu font-bold">
                Un espace de travail vivant et humain
              </h2>
              <p className="text-gris mt-4 leading-relaxed">
                Le Collectif Or du commun est bien plus qu&apos;un espace de coworking. C&apos;est une communauté de freelances, entrepreneurs, porteurs de projets et formateurs qui partagent un lieu de travail, mais aussi une dynamique collective.
              </p>
              <p className="text-gris mt-3 leading-relaxed">
                Implanté à Andolsheim depuis 2018, à 10 minutes de Colmar et 30 minutes de Mulhouse, le tiers-lieu accueille plus de 140 membres. L&apos;adhésion individuelle est à 45 €/an et ouvre droit à des tarifs préférentiels sur tous les espaces.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Accès libre ou sur abonnement mensuel",
                  "Atmosphère bienveillante et stimulante",
                  "Communauté de 140 professionnels",
                  "Parking gratuit sur place",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-or shrink-0" size={20} />
                    <span className="text-gris">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src="/images/equipe-fenetre.jpg"
                alt="Membres du Collectif Or du commun"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Équipements */}
      <section className="bg-fond py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 text-center">
            <h2 className="font-playfair text-2xl font-bold text-bleu">Tout est inclus</h2>
            <p className="mt-2 text-gris text-sm">Pas de surprises sur la facture.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {equipements.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 p-5 text-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-or/15">
                  <Icon className="h-5 w-5 text-bleu-dark" />
                </div>
                <span className="text-xs font-medium text-bleu-dark leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos espaces */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Nos espaces" subtitle="Trois types d'espaces adaptés à vos besoins, disponibles à la demi-journée, à la journée ou en abonnement." />
          <div className="grid lg:grid-cols-3 gap-6">
            {espaces.map((espace) => (
              <div
                key={espace.title}
                className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={espace.img}
                    alt={espace.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-bleu font-bold">
                    {espace.title}
                  </h3>
                  <p className="text-sm text-gris mt-2 leading-relaxed">{espace.desc}</p>
                  <Link
                    href={espace.href}
                    className="text-bleu font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:text-or transition-colors"
                  >
                    Voir les détails <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs résumés */}
      <section className="bg-fond py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-or mb-2">Coworking</p>
              <p className="font-playfair text-2xl font-bold text-bleu">85 €</p>
              <p className="text-sm text-gris mt-1">Carnet 10 demi-journées. Adhésion requise (45 €/an).</p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-or mb-2">Salle de réunion 30 m²</p>
              <p className="font-playfair text-2xl font-bold text-bleu">150 €</p>
              <p className="text-sm text-gris mt-1">Demi-journée. Jusqu&apos;à 8–10 personnes. Adhérents : 50 €.</p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-or mb-2">Grande salle 65 m²</p>
              <p className="font-playfair text-2xl font-bold text-bleu">200 €</p>
              <p className="text-sm text-gris mt-1">Demi-journée. Jusqu&apos;à 50 personnes. Adhérents : 90 €.</p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-or mb-2">Bureau individuel 10 m²</p>
              <p className="font-playfair text-2xl font-bold text-bleu">20 €</p>
              <p className="text-sm text-gris mt-1">À l&apos;heure. 1 à 2 personnes. Journée : 130 €. Adhérents : 10 €/h.</p>
            </div>
          </div>
          <p className="text-center mt-6 text-xs text-gris">
            Tarifs HT. TVA 20% applicable selon statut. Devis sur mesure possible pour locations récurrentes.
          </p>
          <div className="text-center mt-6">
            <Link
              href="/location-salles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-bleu hover:text-or transition-colors"
            >
              Voir tous les tarifs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl text-bleu-dark font-bold">
            Venez découvrir nos espaces
          </h2>
          <p className="mt-3 text-bleu-dark/70 max-w-md mx-auto">
            Une visite de 30 minutes suffit pour se faire une idée. On vous accueille du lundi au vendredi.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bleu-dark text-white rounded-lg px-8 py-3.5 font-semibold hover:-translate-y-0.5 transition-all duration-200"
            >
              Prendre rendez-vous <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
