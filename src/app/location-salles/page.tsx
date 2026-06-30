import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Wifi,
  Monitor,
  Car,
  Coffee,
  Users,
  Sun,
  CheckCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Location de salles",
  description:
    "Louez nos salles à Andolsheim : salle de réunion (8 pers), grande salle (50 pers), espace coworking. Équipé, parking gratuit, à 10 min de Colmar.",
  alternates: {
    canonical: "/location-salles",
  },
};

// ─── Tarifs issus du flyer officiel 2026 ────────────────────────────────────
const espaces = [
  {
    id: "salle-65",
    name: "Grande salle",
    subtitle: "65 m² · modulable",
    capacity: "Jusqu'à 50 personnes",
    image: "/images/grande-salle.jpg",
    alt: "Grande salle de formation Or du commun",
    description:
      "Une grande salle de formation modulable et entièrement équipée. Configuration adaptable : cours, îlots, U ou théâtre. Parfaite pour formations, conférences et ateliers collectifs.",
    tarifs: [
      { label: "Demi-journée", prix: "200 €", note: "adhérents : 90 €" },
      { label: "Journée complète", prix: "350 €", note: "adhérents : 150 €" },
    ],
    equipements: ["Vidéoprojecteur", "Tables modulables", "Configuration U / théâtre"],
    color: "bg-bleu-dark",
  },
  {
    id: "salle-30",
    name: "Salle de réunion",
    subtitle: "30 m² · lumière naturelle",
    capacity: "Jusqu'à 8–10 personnes",
    image: "/images/espace-cuisine.jpg",
    alt: "Salle de réunion Or du commun",
    description:
      "Idéale pour les réunions, entretiens, workshops en petit groupe ou formations restreintes. Modulable, lumière naturelle, entièrement équipée.",
    tarifs: [
      { label: "Demi-journée", prix: "150 €", note: "adhérents : 50 €" },
      { label: "Journée complète", prix: "250 €", note: "adhérents : 80 €" },
    ],
    equipements: ["Vidéoprojecteur", "Tableau blanc", "Lumière naturelle"],
    color: "bg-bleu",
  },
  {
    id: "bureau",
    name: "Bureau individuel",
    subtitle: "10 m² · privatisable",
    capacity: "1 à 2 personnes",
    image: "/images/coworking-membre.jpg",
    alt: "Bureau individuel Or du commun",
    description:
      "Un bureau privatisable pour travailler au calme, recevoir un client ou tenir un entretien. Accès à la cuisine partagée et au jardin. Idéal pour les indépendants.",
    tarifs: [
      { label: "À l'heure", prix: "20 €", note: "adhérents : 10 €" },
      { label: "Journée complète", prix: "130 €", note: "" },
    ],
    equipements: ["Cuisine partagée", "Jardin", "Au calme"],
    color: "bg-orange",
  },
];
// ────────────────────────────────────────────────────────────────────────────

const inclus = [
  { icon: Wifi, label: "Wi-Fi inclus" },
  { icon: Monitor, label: "Impressions" },
  { icon: Coffee, label: "Thé & café" },
  { icon: Car, label: "Parking gratuit" },
  { icon: Users, label: "Cuisine partagée" },
  { icon: Sun, label: "Jardin" },
];

const coworkingTarifs = [
  { offre: "Carnet de 10 demi-journées", prix: "85 €" },
  { offre: "Carnet de 10 journées", prix: "145 €" },
  { offre: "Télé-salariés", prix: "Sur devis" },
];

export default function LocationSallesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bleu-dark py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
                Réunion · Formation · Événement
              </span>
              <h1 className="font-playfair text-4xl font-bold text-white lg:text-5xl">
                Location de salles
              </h1>
              <p className="mt-5 max-w-lg text-lg text-white/70 leading-relaxed">
                Deux salles modulables (65 m² et 30 m²), un bureau privatisable et des
                postes de coworking. 4 Grand'rue, Andolsheim, à 10 min de Colmar.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {["📍 4 Grand'rue, Andolsheim", "🚗 Parking gratuit", "👥 1 à 50 personnes"].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-or px-7 py-3.5 text-sm font-semibold text-bleu-dark hover:-translate-y-0.5 transition-all"
                >
                  Réserver <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:0755530857"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  07 55 53 08 57
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/images/coaching-trio.jpg"
                alt="Salles Or du commun Andolsheim"
                width={580}
                height={400}
                className="rounded-2xl shadow-2xl object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Espaces + tarifs */}
      <section className="bg-fond py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              Nos espaces
            </h2>
            <p className="mt-3 text-gris">
              Tarifs HT · TVA 20% applicable selon statut · Devis sur mesure possible
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {espaces.map((espace, i) => (
              <div
                key={espace.id}
                className={`grid items-center gap-8 rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-64 lg:h-full min-h-[280px]">
                  <Image
                    src={espace.image}
                    alt={espace.alt}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className={`absolute bottom-4 left-4 rounded-xl ${espace.color} px-4 py-2 text-sm font-bold text-white`}>
                    {espace.capacity}
                  </span>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-or mb-1">
                    {espace.subtitle}
                  </p>
                  <h3 className="font-playfair text-2xl font-bold text-bleu">
                    {espace.name}
                  </h3>
                  <p className="mt-3 text-sm text-gris leading-relaxed">
                    {espace.description}
                  </p>

                  {/* Équipements inclus */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {espace.equipements.map((eq) => (
                      <span
                        key={eq}
                        className="flex items-center gap-1 rounded-full bg-fond px-3 py-1 text-xs font-medium text-bleu-dark"
                      >
                        <CheckCircle className="h-3 w-3 text-or" />
                        {eq}
                      </span>
                    ))}
                  </div>

                  {/* Grille tarifaire */}
                  <div className="mt-6 rounded-xl bg-fond p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gris">
                        Tarifs hors adhésion
                      </p>
                      <p className="text-xs text-or font-medium">Tarif adhérent*</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {espace.tarifs.map((t) => (
                        <div
                          key={t.label}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-gris">{t.label}</span>
                          <div className="flex items-center gap-3">
                            {t.note && (
                              <span className="text-xs text-or font-medium">{t.note}</span>
                            )}
                            <span className="font-bold text-bleu">{t.prix}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bleu hover:text-or transition-colors"
                  >
                    Réserver cet espace <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coworking */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-or">
                Espace de coworking
              </span>
              <h2 className="font-playfair text-3xl font-bold text-bleu">
                Postes de coworking
              </h2>
              <p className="mt-4 text-gris leading-relaxed">
                Des postes de travail dans une ambiance conviviale. Wi-Fi, impressions,
                thé et café inclus. Réservés aux indépendants et TPE — tarifs adhérents.
              </p>
              <p className="mt-3 text-sm text-gris">
                Adhésion individuelle au collectif : <span className="font-semibold text-bleu-dark">45 € / an</span>
              </p>

              <div className="mt-6 rounded-xl border border-gray-100 bg-fond overflow-hidden">
                <div className="grid grid-cols-2 gap-0 text-xs font-semibold uppercase tracking-wider text-gris bg-white border-b border-gray-100 px-5 py-3">
                  <span>Offre (carnet de 10)</span>
                  <span className="text-right">Tarif adhérent</span>
                </div>
                {coworkingTarifs.map((t) => (
                  <div key={t.offre} className="grid grid-cols-2 px-5 py-3.5 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gris">{t.offre}</span>
                    <span className="text-right font-bold text-bleu">{t.prix}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-gris">
                * Tarification réservée aux indépendants et TPE.
              </p>
            </div>
            <div>
              <Image
                src="/images/evenement-odc.jpg"
                alt="Espace coworking Or du commun Andolsheim"
                width={560}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 text-center">
            <h2 className="font-playfair text-3xl font-bold text-bleu">
              Tout est inclus
            </h2>
            <p className="mt-3 text-gris">Pas de surprises sur la facture.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {inclus.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-fond border border-gray-100 p-5 text-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-or/15">
                  <Icon className="h-5 w-5 text-bleu-dark" />
                </div>
                <span className="text-xs font-medium text-bleu-dark leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="bg-fond py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 text-center">
            <h2 className="font-playfair text-3xl font-bold text-bleu">
              Les espaces en images
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 auto-rows-[180px]">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative">
              <Image src="/images/galerie-atelier.jpg" alt="Salle de réunion" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative">
              <Image src="/images/galerie-coeur.jpg" alt="Grande salle" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden relative">
              <Image src="/images/equipe-exterieur.jpg" alt="Espace commun" fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden relative">
              <Image src="/images/galerie-soiree.jpg" alt="Événement" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-bleu-dark">
                Une question ? Un devis ?
              </h2>
              <p className="mt-3 text-bleu-dark/70">
                Demi-journée, journée, soirée, semaine récurrente — on s&apos;adapte.
                Tarifs préférentiels pour les associations et les membres du collectif.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-bleu-dark px-7 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-all"
              >
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0755530857"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-bleu-dark px-7 py-3.5 text-sm font-semibold text-bleu-dark hover:bg-bleu-dark/5 transition-all"
              >
                <Phone className="h-4 w-4" />
                07 55 53 08 57
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
