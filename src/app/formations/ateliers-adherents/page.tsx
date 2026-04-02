import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Mic, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Ateliers adhérents",
  description:
    "Ateliers pratiques animes par et pour les membres du Collectif Or du Commun.",
  alternates: {
    canonical: "/formations/ateliers-adherents",
  },
};

const formats = [
  {
    icon: Mic,
    title: "Partages d'expertise",
    description:
      "Un adhérent partage ce qu'il maîtrise — comptabilité freelance, communication visuelle, gestion de l'énergie. Les autres posent leurs questions.",
  },
  {
    icon: Wrench,
    title: "Ateliers pratiques",
    description:
      "On travaille ensemble sur un outil ou une méthode : construire une offre, relire un contrat, préparer un entretien.",
  },
  {
    icon: Calendar,
    title: "Sessions mensuelles",
    description:
      "Un rendez-vous régulier qui rythme la vie du collectif et maintient le lien entre les membres.",
  },
];

export default function AteliersAdherentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bleu py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
            Membres du collectif
          </span>
          <h1 className="font-playfair text-5xl font-bold text-white">
            Ateliers adhérents
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Des ateliers animés par les membres, pour les membres. Le savoir
            collectif mis en commun.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-bleu">
                Le principe
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {["📅 Mensuel", "📍 Andolsheim", "🔓 Réservé aux adhérents"].map(
                  (pill) => (
                    <span
                      key={pill}
                      className="rounded-full bg-fond px-4 py-2 text-sm font-medium text-bleu-dark"
                    >
                      {pill}
                    </span>
                  )
                )}
              </div>
              <p className="mt-6 leading-relaxed text-gris">
                Les Ateliers adhérents sont nés d&apos;un constat simple : les membres
                du collectif ont des compétences et des expériences variées.
                Autant créer un espace pour les partager librement, sans les
                hiérarchiser.
              </p>
              <p className="mt-4 leading-relaxed text-gris">
                Chaque séance est co-construite : un membre propose un thème,
                facilite l&apos;atelier et le groupe s&apos;en empare. Le rôle d&apos;animateur
                tourne — ce qui permet à chacun de développer aussi ses capacités
                de transmission.
              </p>
            </div>

            <div className="rounded-2xl bg-bleu p-8 text-white">
              <h3 className="font-playfair text-xl font-bold mb-4">
                Thèmes abordés récemment
              </h3>
              <ul className="space-y-3 text-white/80 text-sm leading-relaxed">
                {[
                  "Fixer ses tarifs quand on est freelance",
                  "Comprendre la micro-entreprise en 45 minutes",
                  "Créer ses visuels avec Canva sans se perdre",
                  "Gestion du temps et charge mentale",
                  "Pitcher son projet en 3 minutes",
                ].map((theme) => (
                  <li key={theme} className="flex items-start gap-2">
                    <span className="text-or mt-0.5">→</span>
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              3 formats d&apos;ateliers
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {formats.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bleu/10">
                  <Icon className="h-6 w-6 text-bleu" />
                </div>
                <h3 className="font-semibold text-bleu-dark">{title}</h3>
                <p className="mt-2 text-sm text-gris leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-bleu-dark">
            Intéressé(e) par ce programme ?
          </h2>
          <p className="mt-3 text-bleu-dark/70">
            Places limitées — contactez-nous pour candidater.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-bleu-dark px-8 py-3.5 font-semibold text-white hover:-translate-y-0.5 transition-all"
          >
            Je candidate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
