import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos prestations",
  description:
    "Ateliers et prestations du Collectif Or du Commun : Fresque des Energies, Voyage d'un heros.",
};

const IMAGE_BASE = "https://collectiforducommun.org/wp-content/uploads/2026/03/";

export default function PrestationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bleu-dark py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Nos prestations
          </h1>
          <p className="text-white/70 text-lg md:text-xl">
            Des ateliers et accompagnements pour vos équipes et organisations.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-gris text-lg text-center leading-relaxed">
            Nous proposons des interventions sur mesure pour les organisations, les équipes et les collectivités qui souhaitent explorer les transitions professionnelles, énergétiques et humaines.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-fond py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1 — Fresque des Énergies */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-56 w-full">
                <Image
                  src={`${IMAGE_BASE}odc-fresque-energies-1-scaled.jpg`}
                  alt="Atelier Fresque des Énergies"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="inline-block bg-orange/15 text-orange rounded-full px-3 py-1 text-xs font-semibold">
                  Atelier collectif
                </span>
                <h2 className="font-playfair text-2xl text-bleu font-bold mt-3">
                  La Fresque des Énergies
                </h2>
                <p className="text-gris text-sm mt-2 leading-relaxed">
                  Un atelier collaboratif de 3h pour comprendre les enjeux énergétiques de manière ludique. Pour entreprises, associations, collectivités.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">⏱ 3h</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">👥 6-25 personnes</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">📍 Andolsheim ou vos locaux</span>
                </div>
                <Link
                  href="/prestations/fresque-energies"
                  className="bg-or text-bleu-dark rounded-lg px-6 py-3 font-semibold mt-6 inline-flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>

            {/* Card 2 — Voyage d'un héros */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-56 w-full">
                <Image
                  src={`${IMAGE_BASE}odc-voyage-heros.jpg`}
                  alt="Accompagnement Voyage d'un héros"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="inline-block bg-bleu/10 text-bleu rounded-full px-3 py-1 text-xs font-semibold">
                  Accompagnement
                </span>
                <h2 className="font-playfair text-2xl text-bleu font-bold mt-3">
                  Voyage d'un héros
                </h2>
                <p className="text-gris text-sm mt-2 leading-relaxed">
                  Un accompagnement narratif et transformateur pour explorer son parcours professionnel et identifier ses prochaines étapes avec clarté.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">📅 Demi-journée</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">👤 Individuel ou groupe</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">🎯 Transition pro</span>
                </div>
                <Link
                  href="/prestations/voyage-heros"
                  className="bg-bleu text-white rounded-lg px-6 py-3 font-semibold mt-6 inline-flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl text-bleu-dark font-bold mb-6">
            Vous souhaitez une intervention sur mesure ?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-bleu-dark text-white rounded-lg px-8 py-4 font-semibold hover:-translate-y-0.5 transition-all"
          >
            Nous contacter →
          </Link>
        </div>
      </section>
    </>
  );
}
