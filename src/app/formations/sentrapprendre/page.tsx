import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, TrendingUp, Users, Lightbulb, Briefcase, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "S'entrApprendre — Formation formateurs-entrepreneurs",
  description:
    "Devenez formateur-entrepreneur : 92h de formation d'octobre 2026 à février 2027. Pour consultants, coaches et experts. 3 800€ à 5 200€. Financement DEFFINO possible.",
};

const IMAGE_BASE = "https://collectiforducommun.org/wp-content/uploads/2026/03/";

const sessions = [
  { date: "16–17 oct. 2026", theme: "Construction de la prestation · Réconcilier sens, talent et revenu" },
  { date: "6–7 nov. 2026", theme: "Modèle économique · Prospection commerciale" },
  { date: "27–28 nov. 2026", theme: "Financement et alliances · Intelligence artificielle" },
  { date: "18–19 déc. 2026", theme: "Gamification · Démarche qualité" },
  { date: "15–16 jan. 2027", theme: "Communication efficace · Présence scénique" },
  { date: "5–6 fév. 2027", theme: "Gestion des comportements difficiles · Supervision entre pairs" },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Apprentissage par l'action",
    description:
      "Chaque session travaille sur des cas réels issus de votre activité — pas des exercices théoriques.",
  },
  {
    icon: Users,
    title: "Co-développement",
    description:
      "Des séances structurées pour résoudre ensemble les défis concrets que vous rencontrez en tant que formateur.",
  },
  {
    icon: TrendingUp,
    title: "Communauté de pairs",
    description:
      "Une promotion d'experts qui se soutiennent, échangent et créent des partenariats durables entre eux.",
  },
];

export default function SEntrApprendrePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bleu-dark py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
            Formateurs · Consultants · Experts
          </span>
          <h1 className="font-playfair text-4xl font-bold text-white lg:text-5xl">
            S&apos;entrApprendre
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Transformez votre expertise en activité de formation rentable, reconnue et épanouissante.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "📅 Oct. 2026 – Fév. 2027",
              "⏱ 92 heures",
              "💶 3 800 € à 5 200 €",
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
                Pour qui ?
              </h2>
              <p className="mt-6 leading-relaxed text-gris">
                S&apos;entrApprendre s&apos;adresse aux formateurs indépendants, consultants, coaches,
                entrepreneurs-salariés (CAE) et experts qui veulent structurer ou développer une
                activité de formation. Le programme exige au minimum 5 ans d&apos;expérience
                professionnelle — vous avez le bagage, il s&apos;agit de le monétiser et de le transmettre.
              </p>
              <p className="mt-4 leading-relaxed text-gris">
                L&apos;approche est pragmatique, collaborative et humaine. 6 binômes de deux jours
                consécutifs, sur 4 mois, avec des intersessions pour ancrer les apprentissages dans
                votre réalité.
              </p>
              <div className="mt-6 rounded-xl bg-fond p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-or" />
                  <p className="text-sm font-semibold text-bleu-dark">Financement DEFFINO</p>
                </div>
                <p className="text-sm text-gris">
                  Tarif de lancement possible grâce au soutien du programme régional DEFFINO.
                  Renseignez-vous sur votre éligibilité.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={`${IMAGE_BASE}odc-sentrapprendre.jpg`}
                alt="S'entrApprendre — formation formateurs-entrepreneurs"
                width={500}
                height={380}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programme détaillé */}
      <section className="bg-fond py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 text-center">
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              Les 12 journées de formation
            </h2>
            <p className="mt-3 text-gris">6 binômes · Oct. 2026 à Fév. 2027</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {sessions.map((s, i) => (
              <div
                key={s.date}
                className="flex gap-4 rounded-xl bg-white border border-gray-100 p-5 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bleu-dark text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-or">{s.date}</p>
                  <p className="mt-1 text-sm text-gris leading-relaxed">{s.theme}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piliers */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 text-center">
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              Notre approche
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-fond border border-gray-100 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-or/15">
                  <Icon className="h-6 w-6 text-bleu-dark" />
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
      <section className="bg-fond py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <Briefcase className="h-6 w-6 text-bleu mb-3" />
              <p className="font-semibold text-bleu-dark">Prérequis</p>
              <p className="mt-2 text-sm text-gris">
                5 ans minimum d&apos;expérience professionnelle. Accès sur entretien individuel avec l&apos;équipe.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <Lightbulb className="h-6 w-6 text-bleu mb-3" />
              <p className="font-semibold text-bleu-dark">Tarif</p>
              <p className="mt-2 text-sm text-gris">
                3 800 € à 5 200 €. Financement possible via DEFFINO (programme régional) ou OPCO.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <Users className="h-6 w-6 text-bleu mb-3" />
              <p className="font-semibold text-bleu-dark">Format</p>
              <p className="mt-2 text-sm text-gris">
                92 heures en 6 binômes de 2 jours. Intersessions pour ancrer les apprentissages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-bleu-dark">
            Prêt(e) à devenir formateur-entrepreneur ?
          </h2>
          <p className="mt-3 text-bleu-dark/70">
            Prochaine session : octobre 2026. Entretien individuel requis.
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
