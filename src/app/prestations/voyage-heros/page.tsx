import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voyage d'un héros",
  description:
    "Accompagnement narratif pour explorer son parcours professionnel et identifier ses prochaines étapes. À Andolsheim, Alsace.",
  alternates: {
    canonical: "/prestations/voyage-heros",
  },
};

const infoRows = [
  { label: "Format", value: "Demi-journée" },
  { label: "Public", value: "Individuel ou groupe" },
  { label: "Thématique", value: "Transition professionnelle" },
  { label: "Tarif", value: "Sur devis" },
];

const phases = [
  {
    number: 1,
    title: "L'appel",
    description:
      "Identification du moment de bascule : ce qui pousse à bouger, ce qui résiste. Mise en mots de l'endroit où vous en êtes.",
  },
  {
    number: 2,
    title: "Les épreuves",
    description:
      "Exploration des obstacles rencontrés et des ressources mobilisées. Ce que chaque difficulté a appris.",
  },
  {
    number: 3,
    title: "La révélation",
    description:
      "Identification des forces, des valeurs et des désirs profonds qui guident la trajectoire.",
  },
  {
    number: 4,
    title: "Le retour transformé",
    description:
      "Co-construction d'un cap clair et d'actions concrètes pour les prochaines semaines.",
  },
];

export default function VoyageHerosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bleu py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/20 text-white rounded-full px-4 py-2 text-sm mb-4">
            Accompagnement narratif
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Voyage d'un héros
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
            Explorez votre parcours, clarifiez votre cap, passez à l'action.
          </p>
        </div>
      </section>

      {/* Description + Image */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-8">
              {infoRows.map((row, i) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between px-6 py-4">
                    <span className="font-semibold text-bleu-dark text-sm">{row.label}</span>
                    <span className="text-gris text-sm text-right">{row.value}</span>
                  </div>
                  {i < infoRows.length - 1 && (
                    <div className="border-t border-gray-100" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-gris leading-relaxed mb-4">
              Le Voyage d'un héros est un accompagnement inspiré du schéma narratif universel. Il permet à chacun de relire son parcours professionnel comme une histoire — avec ses bifurcations, ses apprentissages et ses ressources cachées.
            </p>
            <p className="text-gris leading-relaxed">
              En groupe ou en individuel, cet espace offre un cadre sécurisé pour prendre du recul, nommer ce qui compte vraiment et construire une suite qui fait sens.
            </p>
          </div>

          {/* Right: image */}
          <div className="relative w-full h-80 lg:h-[380px]">
            <Image
              src="/images/voyage-heros.jpg"
              alt="Accompagnement Voyage d'un héros"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-fond py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-bleu-dark font-bold text-center mb-12">
            Le déroulé
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.number} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-bleu/10 text-bleu rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {phase.number}
                </div>
                <h3 className="font-playfair text-lg font-bold text-bleu-dark mb-2">
                  {phase.title}
                </h3>
                <p className="text-gris text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bleu py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl text-white font-bold mb-6">
            En savoir plus
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-or text-bleu-dark rounded-lg px-8 py-4 font-semibold hover:-translate-y-0.5 transition-all"
          >
            Nous contacter →
          </Link>
        </div>
      </section>
    </>
  );
}
