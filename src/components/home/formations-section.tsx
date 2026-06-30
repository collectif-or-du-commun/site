import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/fade-in";
import { ProgramCard } from "@/components/program-card";

const programs = [
  {
    title: "Les Potenti'Elles",
    badge: "Reconversion",
    badgeColor: "bg-or/20 text-bleu-dark",
    description:
      "Pour les femmes en transition : se réinventer après un burn-out, une pause parentale, un arrêt long ou une fin de contrat. 85% d'insertion à 6 mois.",
    href: "/formations/potentielles",
  },
  {
    title: "ORizon LAB",
    badge: "20-28 ans",
    badgeColor: "bg-bleu/15 text-bleu",
    description:
      "Pour les jeunes de 20 à 28 ans : trouver sa voie, clarifier son projet et expérimenter en conditions réelles. Ateliers, défis et mentorat.",
    href: "/formations/orizon-lab",
  },
  {
    title: "L'Campus",
    badge: "Entrepreneuriat",
    badgeColor: "bg-or/20 text-bleu-dark",
    description:
      "Pour les femmes qui veulent explorer l'entrepreneuriat, renforcer leur leadership et oser passer à l'action. Codéveloppement et mentorat.",
    href: "/formations/lcampus",
  },
  {
    title: "S'entrApprendre",
    badge: "Formateurs",
    badgeColor: "bg-bleu-dark/10 text-bleu-dark",
    description:
      "Un parcours complet de 12 modules pour transformer votre expertise en activité de formation rentable, reconnue et épanouissante.",
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
      "Sessions thématiques réservées aux membres Or du commun. Pratiques, courtes, directement applicables.",
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
