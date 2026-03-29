import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/fade-in";
import { ProgramCard } from "@/components/program-card";

const programs = [
  {
    title: "Les Potenti'Elles",
    badge: "Femmes",
    badgeColor: "bg-orange/15 text-orange",
    description:
      "Formation numérique 360° pour femmes en reconversion ou recherche d'emploi. 12 semaines, 108h, accompagnement individuel inclus.",
    href: "/formations/potentielles",
  },
  {
    title: "ORizon LAB",
    badge: "Numérique",
    badgeColor: "bg-bleu/15 text-bleu",
    description:
      "Programme d'accompagnement professionnel pour les 20-28 ans. 7 semaines, 3 jours par semaine, 100€ reste à charge.",
    href: "/formations/orizon-lab",
  },
  {
    title: "L'Campus",
    badge: "Apprentissage",
    badgeColor: "bg-or/20 text-bleu-dark",
    description:
      "Parcours de montée en compétences pour porteurs de projet et créateurs d'activité.",
    href: "/formations/lcampus",
  },
  {
    title: "S'entrApprendre",
    badge: "Communauté",
    badgeColor: "bg-bleu-dark/10 text-bleu-dark",
    description:
      "Ateliers de co-apprentissage entre pairs. Développer ses compétences grâce à l'intelligence collective du groupe.",
    href: "/formations/sentrapprendre",
  },
  {
    title: "Coup de pouce",
    badge: "Accompagnement",
    badgeColor: "bg-orange/15 text-orange",
    description:
      "Accompagnement court et ciblé pour les personnes qui ont besoin d'un soutien ponctuel dans leur parcours professionnel.",
    href: "/formations/coup-de-pouce",
  },
  {
    title: "Ateliers adhérents",
    badge: "Membres",
    badgeColor: "bg-bleu/15 text-bleu",
    description:
      "Sessions thématiques réservées aux membres Or du Commun. Pratiques, courtes, directement applicables.",
    href: "/formations/ateliers-adherents",
  },
];

export function FormationsSection() {
  return (
    <section className="bg-fond py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle
          title="Nos programmes de formation"
          subtitle="Des formations pensées pour les indépendants, les créateurs d'entreprise et les personnes en transition."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <FadeIn key={program.title} delay={i * 0.1}>
              <ProgramCard {...program} />
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/formations"
            className="border-2 border-bleu text-bleu hover:bg-bleu hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
          >
            Voir toutes les formations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
