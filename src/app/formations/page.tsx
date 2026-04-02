import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, Award } from "lucide-react";
import { ProgramCard } from "@/components/program-card";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Nos formations",
  description:
    "Certifié Qualiopi, labellisé Tiers-lieux Grand Est. Formations pour personnes en transition professionnelle à Andolsheim.",
};

const programs = [
  {
    title: "Les Potenti'Elles",
    badge: "Femmes",
    badgeColor: "bg-orange/15 text-orange",
    description:
      "Programme d'accompagnement entrepreneurial au feminin.",
    href: "/formations/potentielles",
  },
  {
    title: "ORizon LAB",
    badge: "Numerique",
    badgeColor: "bg-bleu/15 text-bleu",
    description:
      "Formation aux outils numeriques et a la transformation digitale.",
    href: "/formations/orizon-lab",
  },
  {
    title: "L'Campus",
    badge: "Apprentissage",
    badgeColor: "bg-or/20 text-bleu-dark",
    description:
      "Espace d'apprentissage collaboratif pour jeunes adultes.",
    href: "/formations/lcampus",
  },
  {
    title: "S'entrApprendre",
    badge: "Communaute",
    badgeColor: "bg-bleu-dark/10 text-bleu-dark",
    description:
      "Apprenez les uns des autres grace a l'intelligence collective.",
    href: "/formations/sentrapprendre",
  },
  {
    title: "Coup de pouce",
    badge: "Accompagnement",
    badgeColor: "bg-orange/15 text-orange",
    description:
      "Un soutien individualise pour les porteurs de projets fragiles.",
    href: "/formations/coup-de-pouce",
  },
  {
    title: "Ateliers adherents",
    badge: "Membres",
    badgeColor: "bg-bleu/15 text-bleu",
    description:
      "Ateliers pratiques animes par et pour les membres du collectif.",
    href: "/formations/ateliers-adherents",
  },
];

export default function FormationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bleu-dark py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-playfair text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Des formations qui changent les trajectoires
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl">
            Certifié Qualiopi, labellisé Tiers-lieux Compétences et Formation en Grand Est
            depuis novembre 2023. Or du Commun propose des formations conçues pour les
            personnes en transition professionnelle.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Certifié Qualiopi", "Labellisé Tiers-lieux Grand Est", "Depuis 2018"].map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mt-10 h-[480px] w-full overflow-hidden">
          <Image
            src="/images/formation-salle.jpg"
            alt="Salle de formation du Collectif Or du Commun"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Qualité & certification */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-bleu">
                Des formations certifiées et reconnues
              </h2>
              <p className="mt-4 text-gris leading-relaxed">
                Nos programmes sont construits avec des professionnels du
                terrain, validés par des apprenants, et reconnus par les
                organismes nationaux de certification.
              </p>
              <div className="mt-6 rounded-xl bg-fond p-6 flex items-center gap-4">
                <Star className="h-8 w-8 shrink-0 text-or" />
                <div>
                  <p className="font-semibold text-bleu-dark">
                    Certifié Qualiopi · Organisme de formation reconnu
                  </p>
                  <p className="text-sm text-gris mt-0.5">
                    Certification nationale garantissant la qualité des processus
                    de formation.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Formatrices et formateurs issus du terrain",
                "Pédagogie active et participative",
                "Suivi individualisé et bienveillant",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-or mt-0.5" />
                  <p className="text-bleu-dark font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Or du Commun */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-or mb-3">
              Nos engagements
            </span>
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              Pourquoi choisir Or du Commun
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 border border-gray-100 shadow-sm flex items-start gap-5">
              <Star className="h-8 w-8 shrink-0 text-or mt-1" />
              <div>
                <h3 className="font-playfair text-xl font-bold text-bleu">
                  Certification Qualiopi
                </h3>
                <p className="mt-2 text-sm text-gris leading-relaxed">
                  Nos formations sont certifiées Qualiopi, ce qui garantit leur éligibilité
                  aux financements publics (CPF, Pôle Emploi, OPCO).
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 border border-gray-100 shadow-sm flex items-start gap-5">
              <Award className="h-8 w-8 shrink-0 text-or mt-1" />
              <div>
                <h3 className="font-playfair text-xl font-bold text-bleu">
                  Label Tiers-lieux Grand Est
                </h3>
                <p className="mt-2 text-sm text-gris leading-relaxed">
                  Labellisés Tiers-lieux Compétences et Formation en Grand Est depuis novembre 2023,
                  en reconnaissance de notre approche pédagogique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos 6 programmes */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle
            label="Programmes"
            title="Nos 6 programmes"
            subtitle="Chaque programme répond à un besoin spécifique — explorez celui qui correspond à votre situation."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.href} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-bleu-dark">
            Une question sur nos formations ?
          </h2>
          <p className="mt-3 text-bleu-dark/70">
            Notre équipe vous répond et vous oriente vers le programme adapté.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-bleu-dark px-8 py-3.5 font-semibold text-white hover:-translate-y-0.5 transition-all"
          >
            Contactez-nous →
          </Link>
        </div>
      </section>
    </main>
  );
}
