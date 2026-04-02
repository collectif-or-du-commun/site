import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wifi,
  Monitor,
  Car,
  Coffee,
  Utensils,
  Users,
  Sun,
  Package,
  ArrowRight,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Nos locaux",
  description:
    "Découvrez les espaces du Collectif Or du Commun à Andolsheim : coworking, salles de formation, espace commun et jardin.",
};

const salles = [
  {
    title: "Salle A",
    capacity: "20 personnes",
    desc: "Configuration cours, réunion ou atelier",
  },
  {
    title: "Salle B",
    capacity: "8 personnes",
    desc: "Réunion, coworking ou bureau partagé",
  },
  {
    title: "Espace commun",
    capacity: "Ouvert",
    desc: "Zone de travail libre, cuisine, jardin",
  },
];

const equipements = [
  { icon: Wifi, label: "WiFi fibre" },
  { icon: Monitor, label: "Vidéoprojecteur" },
  { icon: Car, label: "Parking gratuit" },
  { icon: Coffee, label: "Cuisine équipée" },
  { icon: Utensils, label: "Jardin" },
  { icon: Users, label: "Salles modulables" },
  { icon: Sun, label: "Lumière naturelle" },
  { icon: Package, label: "Stockage" },
];

export default function NosLocauxPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bleu-dark py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bleu-dark to-bleu opacity-80" />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Nos Locaux
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Des espaces pensés pour travailler, se former et se retrouver.
          </p>
        </div>
      </section>

      {/* Photo gallery */}
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {/* Big image — spans 2 cols and 2 rows */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/before-week-duo.jpg"
                alt="Espace coworking"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/cafe-commun.jpg"
                alt="Espace commun"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/atelier-jardinage.jpg"
                alt="Salle de formation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="col-span-2 rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/fete-communaute.jpg"
                alt="Événement communauté"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Capacités */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Capacités" />
          <div className="grid lg:grid-cols-3 gap-6">
            {salles.map((salle) => (
              <div
                key={salle.title}
                className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6 text-center"
              >
                <h3 className="font-playfair text-xl text-bleu font-bold">
                  {salle.title}
                </h3>
                <p className="text-or font-semibold text-2xl mt-2">
                  {salle.capacity}
                </p>
                <p className="text-sm text-gris mt-2">{salle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipements */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Équipements" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {equipements.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-5 flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-full bg-or/10 flex items-center justify-center shrink-0">
                  <Icon className="text-or" size={18} />
                </div>
                <span className="text-bleu font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nous trouver */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Nous trouver" />
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — address & hours */}
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-xl text-bleu font-bold mb-2">
                  Adresse
                </h3>
                <p className="text-gris leading-relaxed">
                  Collectif Or du Commun
                  <br />
                  Andolsheim, 68280
                  <br />
                  Haut-Rhin, Alsace
                </p>
                <a
                  href="https://maps.google.com/?q=Andolsheim+68280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-bleu font-semibold text-sm mt-3 hover:text-or transition-colors"
                >
                  Ouvrir dans Google Maps <ArrowRight size={14} />
                </a>
              </div>

              <div>
                <h3 className="font-playfair text-xl text-bleu font-bold mb-2">
                  Horaires
                </h3>
                <ul className="text-gris space-y-1 text-sm">
                  <li className="flex justify-between max-w-xs">
                    <span>Lundi – Vendredi</span>
                    <span className="font-medium text-bleu">9h – 18h</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Samedi</span>
                    <span className="font-medium text-bleu">Sur RDV</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Dimanche</span>
                    <span className="font-medium text-gris">Fermé</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-playfair text-xl text-bleu font-bold mb-2">
                  Accès
                </h3>
                <p className="text-gris text-sm leading-relaxed">
                  À 10 minutes de Colmar. Parking gratuit sur place.
                  Accessible en voiture depuis la D415.
                </p>
              </div>
            </div>

            {/* Right — Google Maps embed */}
            <div className="rounded-2xl overflow-hidden h-80 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.5!2d7.4167!3d48.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916c0000000001%3A0x0!2sAndolsheim%2C+68280!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Andolsheim"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl text-bleu-dark font-bold">
            Réservez votre espace
          </h2>
          <p className="mt-3 text-bleu-dark/70 max-w-md mx-auto">
            Salle de réunion, poste coworking ou atelier — on s&apos;organise
            selon vos besoins.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bleu-dark text-white rounded-lg px-8 py-3.5 font-semibold hover:-translate-y-0.5 transition-all duration-200"
            >
              Nous contacter <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
