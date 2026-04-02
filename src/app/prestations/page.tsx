import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos prestations",
  description:
    "Ateliers et accompagnements du Collectif Or du Commun : Fresque des Énergies (3h, 6-25 personnes) et Voyage d'un héros (demi-journée). Andolsheim, Alsace.",
  alternates: {
    canonical: "/prestations",
  },
};

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
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gris text-lg text-center leading-relaxed">
            Nous proposons des interventions sur mesure pour les organisations, les équipes et les collectivités qui souhaitent explorer les transitions professionnelles, énergétiques et humaines.
          </p>
          <p className="text-gris mt-4 text-base text-center leading-relaxed">
            Nos prestations se déroulent dans vos locaux ou à Andolsheim. Elles mobilisent des méthodes participatives éprouvées, adaptées à chaque contexte. Un entretien de cadrage préalable est systématiquement réalisé pour personnaliser l&apos;intervention.
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
                  src="/images/atelier-couleurs.jpg"
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
                  Un atelier collaboratif de 3 heures pour comprendre les enjeux énergétiques de manière ludique et concrète. Les participants construisent ensemble une vision systémique de la production, de la consommation et des transitions énergétiques.
                </p>
                <p className="text-gris text-sm mt-2 leading-relaxed">
                  Idéal pour sensibiliser les équipes aux enjeux de la transition énergétique sans jargon technique. La méthode, inspirée de la Fresque du Climat, favorise le dialogue et l&apos;engagement collectif. Aucun prérequis nécessaire.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">3 heures</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">6 à 25 personnes</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">Andolsheim ou vos locaux</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">Devis sur demande</span>
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
                  src="/images/coaching-trio.jpg"
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
                  Voyage d&apos;un héros
                </h2>
                <p className="text-gris text-sm mt-2 leading-relaxed">
                  Un accompagnement narratif et transformateur inspiré du monomythe de Joseph Campbell. En demi-journée, chaque participant explore son parcours professionnel comme une histoire, identifie ses ressources et clarifie ses prochaines étapes.
                </p>
                <p className="text-gris text-sm mt-2 leading-relaxed">
                  Utilisé pour les bilans de compétences, les transitions professionnelles et les moments de réorientation. Peut se décliner en format individuel ou en groupe restreint (6 personnes maximum).
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">Demi-journée</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">Individuel ou groupe (6 max)</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">Transition professionnelle</span>
                  <span className="bg-fond text-gris text-xs px-3 py-1.5 rounded-full">Devis sur demande</span>
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

      {/* Pour qui */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl font-bold text-bleu text-center mb-8">
            Pour qui sont ces prestations ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Entreprises et PME",
                desc: "Sensibilisation des équipes aux transitions, team building et cohésion autour d'enjeux communs.",
              },
              {
                title: "Associations et collectivités",
                desc: "Ateliers de sensibilisation ouverts au grand public ou réservés aux bénévoles et agents.",
              },
              {
                title: "Particuliers en transition",
                desc: "Accompagnement individuel ou en petit groupe pour clarifier un projet de reconversion professionnelle.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-fond border border-gray-100 p-6">
                <h3 className="font-semibold text-bleu-dark mb-2">{title}</h3>
                <p className="text-sm text-gris leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl text-bleu-dark font-bold mb-4">
            Vous souhaitez une intervention sur mesure ?
          </h2>
          <p className="text-bleu-dark/70 mb-8">
            Décrivez-nous votre contexte et vos objectifs. Nous vous proposons un devis personnalisé sous 48h.
          </p>
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
