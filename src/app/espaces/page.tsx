import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Nous vous accueillons",
  description:
    "Découvrez les espaces du Collectif Or du Commun : coworking, salles de formation et guichet ouvert à Andolsheim.",
};

const espaces = [
  {
    img: "/images/before-week-duo.jpg",
    alt: "Espace coworking",
    title: "Espace coworking",
    desc: "Postes individuels, wifi haut débit, café. Travaillez dans un cadre professionnel et convivial.",
    href: "/espaces/nos-locaux",
  },
  {
    img: "/images/cafe-commun.jpg",
    alt: "Espace commun",
    title: "Espace commun",
    desc: "Cuisine équipée, espace détente, jardin. Le lieu idéal pour les pauses et les rencontres.",
    href: "/espaces/nos-locaux",
  },
  {
    img: "/images/formation-coaching.jpg",
    alt: "Salles de formation",
    title: "Salles de formation",
    desc: "2 salles modulables pour vos ateliers, formations et réunions.",
    href: "/espaces/nos-locaux",
  },
];

export default function EspacesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bleu-dark py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bleu-dark to-bleu opacity-80" />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Nous vous accueillons
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Un lieu pensé pour que chacun trouve sa place et ses ressources.
          </p>
        </div>
      </section>

      {/* Espace vivant et humain */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h2 className="font-playfair text-3xl text-bleu font-bold">
                Un espace vivant et humain
              </h2>
              <p className="text-gris mt-4 leading-relaxed">
                Le Collectif Or du Commun est bien plus qu&apos;un espace de
                coworking. C&apos;est une communauté vivante où se croisent
                freelances, entrepreneurs, porteurs de projets et formateurs.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Accès libre ou sur abonnement",
                  "Atmosphère bienveillante et stimulante",
                  "Soutien collectif au quotidien",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-or shrink-0" size={20} />
                    <span className="text-gris">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div>
              <Image
                src="/images/equipe-fenetre.jpg"
                alt="Equipe du Collectif"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos espaces */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Nos espaces" />
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
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-bleu font-bold">
                    {espace.title}
                  </h3>
                  <p className="text-sm text-gris mt-2">{espace.desc}</p>
                  <Link
                    href={espace.href}
                    className="text-bleu font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:text-or transition-colors"
                  >
                    Voir les locaux <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl text-bleu-dark font-bold">
            Venez découvrir nos espaces
          </h2>
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
