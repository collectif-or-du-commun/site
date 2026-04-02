import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Users, MapPin, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Les Potenti'Elles — Formation femmes en transition",
  description:
    "Formation de 6 semaines (150h + 35h immersion) pour femmes en transition professionnelle. 6 participantes max. 385€ TTC reste à charge. Certifié Qualiopi. Andolsheim.",
  alternates: {
    canonical: "/formations/potentielles",
  },
};

const pilliers = [
  {
    num: "01",
    title: "Formation numérique",
    description:
      "Maîtrise des outils bureautiques, des réseaux professionnels et des usages numériques indispensables au marché du travail actuel.",
  },
  {
    num: "02",
    title: "Accompagnement individuel",
    description:
      "Coaching personnalisé tout au long du parcours pour lever les freins, consolider la confiance et définir un projet professionnel solide.",
  },
  {
    num: "03",
    title: "Dynamique collective",
    description:
      "Travail en groupe, facilitation et intelligence collective. La force du programme vient aussi de la communauté de promotion créée.",
  },
];

export default function PotentiellesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#E57A44] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-5 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
                Formation Femmes · Transition professionnelle · 6 semaines
              </span>
              <h1 className="font-playfair text-4xl font-bold text-white md:text-5xl">
                Les Potenti&apos;Elles, bâtir un nouveau projet professionnel
              </h1>
              <p className="mt-5 max-w-lg text-lg text-white/80 leading-relaxed">
                Formation intensive de 6 semaines (150h + 35h d&apos;immersion en entreprise) pensée
                pour les femmes en transition professionnelle. 6 participantes max. Reste à charge
                385€ TTC.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "6 semaines · 185h",
                  "6 participantes max",
                  "385 € TTC",
                  "Qualiopi · Financement possible",
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
                src="/images/potentielles-groupe.jpg"
                alt="Participantes du programme Les Potenti'Elles — remise de certificats"
                width={580}
                height={420}
                className="rounded-2xl shadow-xl w-full object-cover"
                priority
              />
              <span className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-bleu-dark shadow">
                150h + 35h immersion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Les 3 piliers */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-or mb-3">
              Programme
            </span>
            <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">
              Les 3 piliers du parcours
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pilliers.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl bg-white p-8 border border-gray-100 shadow-sm"
              >
                <span className="font-playfair text-4xl font-bold text-or/40">
                  {p.num}
                </span>
                <h3 className="mt-3 font-playfair text-xl font-bold text-bleu">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-gris leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="font-playfair text-xl italic text-bleu leading-relaxed">
              &ldquo;autant de compétences que de chaleur humaine authentique : c&apos;est ça qui vaut de l&apos;or&rdquo;
            </blockquote>
            <footer className="mt-5 text-sm font-semibold text-gris">
              Anne SCHMITT BOURGEOIS, Participante · Avis Google ★★★★★
            </footer>
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="bg-fond py-20">
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
            <div className="rounded-2xl bg-white p-8 border border-gray-100 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 shrink-0 text-or mt-0.5" />
                <div>
                  <p className="font-semibold text-bleu-dark">Durée</p>
                  <p className="text-sm text-gris mt-0.5">6 semaines · 150h formation + 35h immersion en entreprise</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-5 w-5 shrink-0 text-or mt-0.5" />
                <div>
                  <p className="font-semibold text-bleu-dark">Public</p>
                  <p className="text-sm text-gris mt-0.5">Femmes en transition professionnelle · 2 ans d&apos;expérience min. · 6 participantes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-or mt-0.5" />
                <div>
                  <p className="font-semibold text-bleu-dark">Lieu</p>
                  <p className="text-sm text-gris mt-0.5">Or du Commun · Andolsheim</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CreditCard className="h-5 w-5 shrink-0 text-or mt-0.5" />
                <div>
                  <p className="font-semibold text-bleu-dark">Certification</p>
                  <p className="text-sm text-gris mt-0.5">Qualiopi · Éligible CPF et aides publiques</p>
                </div>
              </div>
            </div>
            {/* Colonne droite */}
            <div className="rounded-2xl bg-white p-8 border border-gray-100 shadow-sm space-y-5">
              <div>
                <p className="font-semibold text-bleu-dark">Contenu</p>
                <p className="text-sm text-gris mt-0.5">Numérique · Accompagnement · Coaching · Animation</p>
              </div>
              <div>
                <p className="font-semibold text-bleu-dark">Financement</p>
                <p className="text-sm text-gris mt-0.5">CPF · Pôle Emploi · OPCO · Autres dispositifs</p>
              </div>
              <div>
                <p className="font-semibold text-bleu-dark">Tarif</p>
                <p className="text-sm text-gris mt-0.5">385 € TTC reste à charge · Financement public et privé</p>
              </div>
              <div>
                <p className="font-semibold text-bleu-dark">Prochaine session</p>
                <p className="text-sm text-gris mt-0.5">2 mars – 13 avril 2026</p>
              </div>
              <div>
                <p className="font-semibold text-bleu-dark">Candidature</p>
                <Link href="/contact" className="text-sm text-bleu hover:text-or transition-colors font-medium">
                  Formulaire de contact →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-bleu-dark">
            Candidater à la formation
          </h2>
          <p className="mt-3 text-bleu-dark/70 max-w-md mx-auto">
            Prochaine session : 2 mars – 13 avril 2026. 6 places. Entretien individuel requis.
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
