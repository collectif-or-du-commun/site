import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Coup de pouce",
  description:
    "Accompagnement individualisé pour les porteurs de projets fragiles à Andolsheim, Alsace. Soutien humain et bienveillant.",
};

const aspects = [
  {
    icon: Heart,
    title: "Un accompagnement humain",
    description:
      "On part de là où vous en êtes — sans jugement, sans cadre rigide. L'objectif est de retrouver de l'élan.",
  },
  {
    icon: Shield,
    title: "Un filet de sécurité",
    description:
      "Des rendez-vous réguliers pour éviter l'isolement et garder le cap quand les doutes s'accumulent.",
  },
  {
    icon: Target,
    title: "Des micro-objectifs concrets",
    description:
      "Pas de grands plans sur la comète — des petits pas vérifiables qui remettent le projet en mouvement.",
  },
];

export default function CoupDePoucePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-orange py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            Accompagnement individualisé
          </span>
          <h1 className="font-playfair text-5xl font-bold text-white">
            Coup de pouce
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Un soutien sur mesure pour les porteurs de projets qui avancent dans
            des conditions difficiles.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-bleu">
                Pour qui ?
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {["🤝 Suivi individuel", "📅 Durée adaptable", "📍 Andolsheim"].map(
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
                Coup de pouce s&apos;adresse aux personnes qui ont un projet — une idée,
                une envie de changer de voie, une activité à lancer — mais dont la
                situation personnelle, financière ou sociale rend le parcours plus
                complexe que la moyenne.
              </p>
              <p className="mt-4 leading-relaxed text-gris">
                L&apos;accompagnement est individualisé, adapté au rythme et aux
                contraintes de chaque personne. Il n&apos;y a pas de programme
                standard : on construit ensemble ce qui fait sens pour vous.
              </p>
            </div>
            <div>
              <Image
                src="/images/formation-coaching.jpg"
                alt="Accompagnement Coup de pouce"
                width={500}
                height={380}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aspects */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              Comment ça fonctionne
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {aspects.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10">
                  <Icon className="h-6 w-6 text-orange" />
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
