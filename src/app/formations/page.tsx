import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, Award, HelpCircle } from "lucide-react";
import { ProgramCard } from "@/components/program-card";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Nos formations",
  description:
    "Certifié Qualiopi, labellisé Tiers-lieux Grand Est. Formations pour personnes en transition professionnelle à Andolsheim, Alsace. Financement CPF, Pôle Emploi, OPCO.",
  alternates: {
    canonical: "/formations",
  },
};

const programs = [
  {
    title: "Les Potenti'Elles",
    badge: "Femmes",
    badgeColor: "bg-orange/15 text-orange",
    description:
      "Programme d'accompagnement entrepreneurial de 6 semaines (150h + 35h immersion) pour femmes en transition professionnelle. 6 participantes max, 385 € TTC reste à charge.",
    href: "/formations/potentielles",
  },
  {
    title: "ORizon LAB",
    badge: "Numérique",
    badgeColor: "bg-bleu/15 text-bleu",
    description:
      "7 semaines d'accompagnement pour les jeunes de 20 à 28 ans : connaissance de soi, exploration de métiers et immersion en entreprise. 100 € reste à charge.",
    href: "/formations/orizon-lab",
  },
  {
    title: "L'Campus",
    badge: "Leadership",
    badgeColor: "bg-or/20 text-bleu-dark",
    description:
      "16 semaines de développement du leadership pour femmes entrepreneures. 7 master-classes, 8 séances de codéveloppement, mentorat individuel. 600 € reste à charge.",
    href: "/formations/lcampus",
  },
  {
    title: "S'entrApprendre",
    badge: "Formateurs",
    badgeColor: "bg-bleu-dark/10 text-bleu-dark",
    description:
      "92h de formation pour devenir formateur-entrepreneur. 6 binômes de 2 jours sur 4 mois. Pour consultants, coaches et experts avec 5 ans d'expérience minimum.",
    href: "/formations/sentrapprendre",
  },
  {
    title: "Coup de pouce",
    badge: "Accompagnement",
    badgeColor: "bg-orange/15 text-orange",
    description:
      "Soutien individualisé pour les porteurs de projets en situation fragile. Suivi sur mesure, micro-objectifs concrets, rendez-vous réguliers. Durée adaptée à chaque situation.",
    href: "/formations/coup-de-pouce",
  },
  {
    title: "Ateliers adhérents",
    badge: "Membres",
    badgeColor: "bg-bleu/15 text-bleu",
    description:
      "Ateliers pratiques animés par et pour les membres du collectif. Partage de compétences, découverte d'outils, co-apprentissage entre professionnels.",
    href: "/formations/ateliers-adherents",
  },
];

const faq = [
  {
    q: "Peut-on financer une formation via le CPF ?",
    a: "Oui. L'ensemble de nos formations est éligible aux financements publics grâce à notre certification Qualiopi. CPF, Pôle Emploi, OPCO et certains dispositifs régionaux peuvent prendre en charge tout ou partie du coût. Contactez-nous pour un diagnostic personnalisé.",
  },
  {
    q: "Faut-il être demandeur d'emploi pour s'inscrire ?",
    a: "Non. Nos formations s'adressent aussi bien aux salariés en reconversion, aux indépendants, aux dirigeants d'entreprise qu'aux demandeurs d'emploi. Les critères d'accès varient selon le programme.",
  },
  {
    q: "Les formations sont-elles accessibles aux personnes en situation de handicap ?",
    a: "Nos locaux sont accessibles PMR et nous adaptons les modalités pédagogiques sur demande. Signalez votre situation lors de votre candidature pour que nous puissions préparer les aménagements nécessaires.",
  },
  {
    q: "Comment se déroule l'inscription ?",
    a: "Chaque programme fonctionne sur candidature : vous remplissez un formulaire ou nous appelez, puis nous organisons un entretien individuel. Les places sont limitées pour garantir un suivi de qualité.",
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
            depuis novembre 2023. Or du Commun propose des programmes pour les personnes
            en transition professionnelle à Andolsheim, Alsace.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Certifié Qualiopi", "Labellisé Tiers-lieux Grand Est", "Depuis 2018", "Financement CPF & OPCO"].map((badge) => (
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
                Nos programmes sont construits avec des professionnels du terrain, co-construits avec les apprenants et reconnus par les organismes nationaux. La certification Qualiopi garantit l&apos;éligibilité aux financements publics et l&apos;exigence de nos processus pédagogiques.
              </p>
              <p className="mt-3 text-gris leading-relaxed">
                Depuis 2018, le Collectif Or du Commun accompagne des personnes en transition professionnelle en Alsace. Nos programmes s&apos;adaptent à la réalité du terrain : rythme de vie, contraintes familiales, besoin de sens.
              </p>
              <div className="mt-6 rounded-xl bg-fond p-6 flex items-center gap-4">
                <Star className="h-8 w-8 shrink-0 text-or" />
                <div>
                  <p className="font-semibold text-bleu-dark">
                    Certifié Qualiopi · Organisme de formation reconnu
                  </p>
                  <p className="text-sm text-gris mt-0.5">
                    Certification nationale garantissant la qualité des processus de formation. Éligibilité CPF, Pôle Emploi et OPCO.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Formatrices et formateurs issus du terrain",
                "Pédagogie active, participative et bienveillante",
                "Suivi individualisé tout au long du parcours",
                "Groupes restreints pour plus d'impact",
                "Locaux accessibles PMR à Andolsheim (Haut-Rhin)",
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
                  Nos formations sont certifiées Qualiopi, ce qui garantit leur éligibilité aux financements publics (CPF, Pôle Emploi, OPCO). Un organisme certifié est audité régulièrement sur ses process et résultats.
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
                  Labellisés Tiers-lieux Compétences et Formation en Grand Est depuis novembre 2023, en reconnaissance de notre approche pédagogique ancrée dans la communauté et le territoire alsacien.
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
            subtitle="Chaque programme répond à un besoin précis. Explorez celui qui correspond à votre situation, ou contactez-nous pour être orienté."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.href} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ financement */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-or mb-3">
              Questions fréquentes
            </span>
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              Financement et inscription
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faq.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 shrink-0 text-or mt-0.5" />
                  <h3 className="font-semibold text-bleu-dark text-sm">{q}</h3>
                </div>
                <p className="mt-3 text-sm text-gris leading-relaxed pl-8">{a}</p>
              </div>
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
            Notre équipe vous répond et vous oriente vers le programme adapté à votre situation.
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
