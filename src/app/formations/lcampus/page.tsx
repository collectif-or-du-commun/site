import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown, Users, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "L'Campus — Leadership au féminin",
  description:
    "Programme de développement du leadership pour femmes entrepreneures. 7 master-classes, mentorat individuel, équicoaching. 600€. Andolsheim.",
};


const modules = [
  {
    icon: Crown,
    title: "7 master-classes thématiques",
    description:
      "Chaque vendredi matin (8h45–13h30, toutes les 3 semaines), une dirigeante ou experte partage son parcours et ses méthodes.",
  },
  {
    icon: Users,
    title: "8 séances de codéveloppement",
    description:
      "Chaque mardi midi (12h–15h, toutes les 3 semaines), le groupe résout ensemble des situations réelles apportées par les participantes.",
  },
  {
    icon: Heart,
    title: "Mentorat individuel",
    description:
      "Chaque participante est accompagnée en tête-à-tête par une dirigeante d'entreprise tout au long du programme.",
  },
  {
    icon: Zap,
    title: "Expériences hors cadre",
    description:
      "Équicoaching avec des chevaux, arts martiaux, escape game entrepreneurial — des formats inhabituels pour révéler autrement.",
  },
];

export default function LCampusPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bleu py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
            Leadership · Femmes entrepreneures
          </span>
          <h1 className="font-playfair text-4xl font-bold text-white lg:text-5xl">
            L&apos;Campus
          </h1>
          <p className="mt-2 text-lg font-semibold text-or">
            L comme Leadership
          </p>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Un programme pour révéler votre potentiel entrepreneurial et agir pour la société.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "📅 19 mars – 2 juil. 2026",
              "👩 Femmes entrepreneures",
              "💶 600 €",
              "📍 Andolsheim",
            ].map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-bleu">
                Un programme taillé pour les entrepreneures
              </h2>
              <p className="mt-6 leading-relaxed text-gris">
                L&apos;Campus accompagne les femmes qui entreprennent — ou qui y pensent sérieusement.
                Sur 16 semaines, le programme combine master-classes avec des dirigeantes, séances
                de codéveloppement en groupe restreint, mentorat individuel et des expériences
                décalées pensées pour bousculer les postures.
              </p>
              <p className="mt-4 leading-relaxed text-gris">
                Compatible avec une activité entrepreneuriale ou salariée. Le financement est
                possible via les organismes de formation partenaires — le reste à charge est de
                600 € par participante.
              </p>
              <div className="mt-8 rounded-xl bg-fond p-5">
                <p className="text-sm font-semibold text-bleu-dark">Calendrier</p>
                <ul className="mt-3 space-y-2 text-sm text-gris">
                  <li>
                    <span className="font-medium text-bleu-dark">Master-classes</span> — vendredis 8h45–13h30, toutes les 3 semaines
                  </li>
                  <li>
                    <span className="font-medium text-bleu-dark">Codéveloppement</span> — mardis 12h–15h, toutes les 3 semaines
                  </li>
                  <li>
                    <span className="font-medium text-bleu-dark">Durée</span> — 19 mars au 2 juillet 2026
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/images/formation-binome.jpg"
                alt="L'Campus — programme leadership au féminin"
                width={500}
                height={380}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-fond py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              Ce que comprend le programme
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map(({ icon: Icon, title, description }) => (
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

      {/* Infos pratiques */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-fond p-6">
              <p className="text-2xl font-bold text-bleu">600 €</p>
              <p className="mt-1 text-sm text-gris">
                Reste à charge par participante. Financement possible via OPCO et organismes partenaires.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-fond p-6">
              <p className="text-2xl font-bold text-bleu">16 semaines</p>
              <p className="mt-1 text-sm text-gris">
                Du 19 mars au 2 juillet 2026. Compatible avec une activité professionnelle en cours.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-fond p-6">
              <p className="text-2xl font-bold text-bleu">Groupe restreint</p>
              <p className="mt-1 text-sm text-gris">
                Places limitées. Accès sur candidature — entretien individuel avec l&apos;équipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-bleu-dark">
            Prête à révéler votre potentiel ?
          </h2>
          <p className="mt-3 text-bleu-dark/70">
            Prochaine session : 19 mars 2026. Places limitées.
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
