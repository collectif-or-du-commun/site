import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Clock, MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "ORizon LAB — Orientation professionnelle 20-28 ans",
  description:
    "Programme d'accompagnement de 7 semaines pour les jeunes de 20 à 28 ans. Connaissance de soi, exploration métiers, immersion entreprise. 100€ reste à charge.",
  alternates: {
    canonical: "/formations/orizon-lab",
  },
};

const modules = [
  {
    num: 1,
    title: "Connaissance de soi",
    description:
      "Identifier tes talents, tes valeurs et ce qui te motive vraiment. Le point de départ pour faire des choix qui te ressemblent.",
  },
  {
    num: 2,
    title: "Exploration des métiers",
    description:
      "Rencontrer des pros, visiter des entreprises, poser des questions. Sortir des idées reçues pour découvrir des pistes concrètes.",
  },
  {
    num: 3,
    title: "Communication et pitch",
    description:
      "Apprendre à parler de soi, de son projet, de ses envies. Travailler son identité numérique et ses réseaux sociaux professionnels.",
  },
  {
    num: 4,
    title: "Immersion professionnelle",
    description:
      "35 heures en entreprise pour tester un métier, un environnement, une équipe. Plus une mission collective pour apprendre à travailler ensemble.",
  },
  {
    num: 5,
    title: "Simulation d'entretien",
    description:
      "Se préparer aux entretiens d'embauche avec des mises en situation réelles. Travailler sa posture, ses réponses et sa confiance.",
  },
  {
    num: 6,
    title: "Mentorat",
    description:
      "Être accompagné par un mentor tout au long du parcours. Quelqu'un qui connaît le terrain et qui est là pour toi.",
  },
];

export default function OrizonLabPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bleu-dark py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-5 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
                Orientation · 20-28 ans · 7 semaines
              </span>
              <h1 className="font-playfair text-4xl font-bold text-white md:text-5xl">
                ORizon LAB, expérimente ton avenir
              </h1>
              <p className="mt-5 max-w-lg text-lg text-white/70 leading-relaxed">
                Un accompagnement de 7 semaines pour les jeunes de 20 à 28 ans qui veulent
                y voir plus clair. Connaissance de soi, exploration des métiers, immersion
                en entreprise et construction d&apos;un vrai plan d&apos;action.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "7 semaines · 3j/semaine",
                  "20 à 28 ans",
                  "100€ reste à charge",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/formation-binome.jpg"
                alt="Séance ORizon LAB — orientation des jeunes 20-28 ans"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full object-cover"
                priority
              />
              <span className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-bleu-dark shadow">
                35h d&apos;immersion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Programme — 6 modules */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-or mb-3">
              Programme
            </span>
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              6 modules pour avancer concrètement
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className="rounded-2xl bg-white p-7 border border-gray-100 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bleu-dark text-sm font-bold text-white mb-4">
                  {mod.num}
                </span>
                <h3 className="font-playfair text-lg font-bold text-bleu">
                  {mod.title}
                </h3>
                <p className="mt-2 text-sm text-gris leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-or mb-3">
              Informations pratiques
            </span>
            <h2 className="font-playfair text-3xl font-bold text-bleu">
              Tout ce qu&apos;il faut savoir
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Colonne gauche */}
            <div className="rounded-2xl bg-fond p-8 space-y-5">
              <div className="flex items-start gap-4">
                <Users className="h-5 w-5 shrink-0 text-or mt-0.5" />
                <div>
                  <p className="font-semibold text-bleu-dark">Public</p>
                  <p className="text-sm text-gris mt-0.5">Jeunes de 20 à 28 ans, aucun diplôme requis</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 shrink-0 text-or mt-0.5" />
                <div>
                  <p className="font-semibold text-bleu-dark">Dates</p>
                  <p className="text-sm text-gris mt-0.5">Du 9 novembre au 10 décembre 2026</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-bleu-dark">Rythme</p>
                <p className="text-sm text-gris mt-0.5">3 jours/semaine (lundi, mardi, jeudi) · 8h50 à 16h</p>
              </div>
              <div>
                <p className="font-semibold text-bleu-dark">Groupe</p>
                <p className="text-sm text-gris mt-0.5">6 à 10 participants</p>
              </div>
            </div>
            {/* Colonne droite */}
            <div className="rounded-2xl bg-fond p-8 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-or mt-0.5" />
                <div>
                  <p className="font-semibold text-bleu-dark">Lieu</p>
                  <p className="text-sm text-gris mt-0.5">Andolsheim (Haut-Rhin)</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-bleu-dark">Coût</p>
                <p className="text-sm text-gris mt-0.5">100€ reste à charge + 45€ adhésion/an</p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 shrink-0 text-or mt-0.5" />
                <div>
                  <p className="font-semibold text-bleu-dark">Contact</p>
                  <p className="text-sm text-gris mt-0.5">formation@collectiforducommun.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 shrink-0 text-or mt-0.5" />
                <div>
                  <p className="font-semibold text-bleu-dark">Téléphone</p>
                  <p className="text-sm text-gris mt-0.5">07 55 53 08 57</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-bleu-dark">
            Aucun diplôme requis.
          </h2>
          <p className="mt-3 text-bleu-dark/70 max-w-md mx-auto">
            Ta participation est confirmée après un entretien individuel.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-bleu-dark px-8 py-3.5 font-semibold text-white hover:-translate-y-0.5 transition-all"
          >
            Candidater <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
