import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Guichet Ouvert",
  description:
    "Service d'accompagnement gratuit pour les porteurs de projets et createurs d'entreprise.",
  alternates: {
    canonical: "/espaces/guichet-ouvert",
  },
};

const checkItems = [
  "Gratuit, sans RDV préalable obligatoire",
  "Adapté à votre situation et votre rythme",
  "Orienté vers des solutions concrètes",
];

const profiles = [
  {
    icon: "🚀",
    title: "Créateur d'entreprise",
    desc: "Vous avez un projet et voulez être accompagné dans les premières étapes.",
  },
  {
    icon: "🔄",
    title: "En reconversion",
    desc: "Vous changez de voie et cherchez des repères et du soutien.",
  },
  {
    icon: "🎯",
    title: "Porteur de projet",
    desc: "Vous avez une idée et voulez comprendre comment la concrétiser.",
  },
];

const etapes = [
  {
    n: 1,
    title: "Prenez contact",
    desc: "Par téléphone, email ou directement sur place. Pas de formulaire complexe.",
  },
  {
    n: 2,
    title: "Premier entretien",
    desc: "Un échange informel pour comprendre votre situation et vos besoins.",
  },
  {
    n: 3,
    title: "Plan d'action",
    desc: "On définit ensemble les prochaines étapes concrètes pour avancer.",
  },
  {
    n: 4,
    title: "Suivi & accompagnement",
    desc: "On reste disponibles pour vous aider à mesure que votre projet évolue.",
  },
];

export default function GuichetOuvertPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bleu py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bleu to-bleu-dark opacity-80" />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Le Guichet Ouvert
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Un service d&apos;accompagnement gratuit pour construire votre
            projet professionnel.
          </p>
        </div>
      </section>

      {/* Accompagnement humain */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <h2 className="font-playfair text-3xl text-bleu font-bold">
                Un accompagnement humain et gratuit
              </h2>
              <p className="text-gris mt-4 leading-relaxed">
                Le Guichet Ouvert, c&apos;est un espace de conseil et
                d&apos;écoute ouvert à toutes et tous. Que vous soyez en
                reconversion, porteur d&apos;un projet entrepreneurial ou
                simplement en questionnement : venez, on s&apos;adapte.
              </p>
              <ul className="mt-6 space-y-3">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-or shrink-0" size={20} />
                    <span className="text-gris">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — profile cards */}
            <div className="space-y-3">
              {profiles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl bg-fond p-5 flex gap-4 items-start"
                >
                  <span className="text-2xl shrink-0">{p.icon}</span>
                  <div>
                    <h3 className="font-playfair text-lg text-bleu font-bold">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gris mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Comment ça marche" />
          <div className="grid lg:grid-cols-4 gap-6">
            {etapes.map((e) => (
              <div
                key={e.n}
                className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6"
              >
                <div className="h-10 w-10 rounded-full bg-or flex items-center justify-center font-bold text-bleu-dark text-lg mb-4">
                  {e.n}
                </div>
                <h3 className="font-playfair text-lg text-bleu font-bold">
                  {e.title}
                </h3>
                <p className="text-sm text-gris mt-2 leading-relaxed">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl text-bleu-dark font-bold">
            Prenons rendez-vous
          </h2>
          <p className="mt-3 text-bleu-dark/70 max-w-md mx-auto">
            Un simple échange pour voir comment on peut vous aider.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bleu-dark text-white rounded-lg px-8 py-3.5 font-semibold hover:-translate-y-0.5 transition-all duration-200"
            >
              Nous contacter <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
