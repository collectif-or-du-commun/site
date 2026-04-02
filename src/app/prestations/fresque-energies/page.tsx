import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "La Fresque des Énergies",
  description:
    "Atelier collaboratif pour comprendre les enjeux énergétiques de manière ludique. Pour entreprises et associations à Andolsheim, Alsace.",
};

const infoRows = [
  { label: "Durée", value: "3h" },
  { label: "Public", value: "6–25 personnes" },
  { label: "Format", value: "Présentiel (Andolsheim ou vos locaux)" },
  { label: "Tarif", value: "Sur devis" },
];

const steps = [
  {
    number: 1,
    title: "Découverte",
    description:
      "Introduction ludique aux concepts énergétiques fondamentaux grâce à des cartes illustrées.",
  },
  {
    number: 2,
    title: "Exploration",
    description:
      "Assemblage collectif du système énergétique actuel. Chacun contribue à la compréhension globale.",
  },
  {
    number: 3,
    title: "Prise de conscience",
    description:
      "Identification des enjeux, des limites et des opportunités de la transition énergétique.",
  },
  {
    number: 4,
    title: "Plan d'action",
    description:
      "Co-construction d'engagements concrets adaptés à votre contexte.",
  },
];

const audiences = [
  { label: "Entreprises", icon: "🏢" },
  { label: "Associations & collectivités", icon: "🤝" },
  { label: "Groupes et équipes", icon: "👥" },
];

export default function FresqueEnergiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#E57A44] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/20 text-white rounded-full px-4 py-2 text-sm mb-4">
            Atelier collaboratif
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            La Fresque des Énergies
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
            Comprendre les enjeux énergétiques de manière ludique et collective.
          </p>
        </div>
      </section>

      {/* Info + Image */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: info block */}
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
            <p className="text-gris leading-relaxed">
              La Fresque des Énergies est un atelier participatif qui permet à toute équipe de comprendre collectivement les systèmes énergétiques actuels, les enjeux de la transition, et de co-construire des actions concrètes.
            </p>
          </div>

          {/* Right: image */}
          <div className="relative w-full h-80 lg:h-[380px]">
            <Image
              src="/images/atelier-couleurs.jpg"
              alt="Atelier Fresque des Énergies en action"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-fond py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-bleu-dark font-bold text-center mb-12">
            Comment ça se passe
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-orange/15 text-orange rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-playfair text-lg font-bold text-bleu-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-gris text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-bleu-dark font-bold text-center mb-10">
            Pour qui ?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="bg-fond rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="text-4xl mb-3">{a.icon}</div>
                <p className="font-semibold text-bleu-dark">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E57A44] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl text-white font-bold mb-6">
            Organiser un atelier
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#E57A44] rounded-lg px-8 py-4 font-semibold hover:-translate-y-0.5 transition-all"
          >
            Nous contacter →
          </Link>
        </div>
      </section>
    </>
  );
}
