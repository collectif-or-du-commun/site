import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Coffee,
  Users,
  MapPin,
  Gift,
  Lightbulb,
  Sparkles,
  MessagesSquare,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { NextBeforeWeeks } from "@/components/before-week-dates";

export const metadata: Metadata = {
  title: "Le Before-week",
  description:
    "Le café-réseau pro du Collectif Or du commun. Tous les lundis de 9h à 11h à Andolsheim, venez rencontrer la communauté, vous ressourcer et commencer la semaine de bonne humeur. Accès libre, gratuit, sans inscription.",
  alternates: {
    canonical: "/espaces/before-week",
  },
};

const steps = [
  {
    n: 1,
    title: "Notez un lundi matin",
    desc: "Le Before-week a lieu tous les lundis de 9h à 11h, toute l'année. Pas besoin de réserver, c'est en accès libre.",
  },
  {
    n: 2,
    title: "Poussez la porte",
    desc: "Présentez-vous au 4 Grand'Rue à Andolsheim. On vous accueille avec un café et on vous fait visiter le lieu.",
  },
  {
    n: 3,
    title: "Rejoignez la communauté",
    desc: "Rencontrez les freelances, entrepreneurs et porteurs de projets qui font vivre le tiers-lieu, et décidez en toute liberté.",
  },
];

const programme = [
  {
    icon: Lightbulb,
    title: "Une compétence partagée",
    desc: "Un membre transmet un savoir-faire concret, directement utile dans votre activité.",
  },
  {
    icon: Sparkles,
    title: "Un parcours inspirant",
    desc: "Une rencontre avec quelqu'un qui raconte son histoire, ses choix et ses apprentissages.",
  },
  {
    icon: MessagesSquare,
    title: "Une animation collective",
    desc: "Un temps d'échange ou un atelier pour se ressourcer, tester et avancer ensemble.",
  },
  {
    icon: Coffee,
    title: "Café et échanges libres",
    desc: "Et surtout un moment convivial pour créer de nouveaux liens, en toute confiance.",
  },
];

const avantages = [
  {
    icon: CalendarClock,
    title: "Tous les lundis",
    desc: "De 9h à 11h, chaque semaine. Venez quand vous voulez, sans rendez-vous.",
  },
  {
    icon: Gift,
    title: "100% gratuit",
    desc: "Aucun frais, aucune inscription, aucun engagement.",
  },
  {
    icon: Coffee,
    title: "Café offert",
    desc: "On prend soin de vous dès votre arrivée.",
  },
  {
    icon: Users,
    title: "La communauté",
    desc: "Rencontrez des gens qui vous ressemblent.",
  },
];

export default function BeforeWeekPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-or py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-or to-or/80 opacity-80" />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          <span className="bg-bleu-dark/10 text-bleu-dark rounded-full px-4 py-2 text-sm font-semibold inline-block mb-6">
            Le café-réseau pro du Collectif
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bleu-dark">
            Le Before-week
          </h1>
          <p className="mt-4 text-lg text-bleu-dark/70 max-w-xl mx-auto">
            Chaque lundi matin, un moment pour se ressourcer, rencontrer et commencer la semaine de
            bonne humeur.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 bg-bleu-dark text-white rounded-full px-4 py-2 text-sm font-semibold">
              <CalendarClock size={16} /> Tous les lundis
            </span>
            <span className="inline-flex items-center gap-2 bg-bleu-dark/15 text-bleu-dark rounded-full px-4 py-2 text-sm font-semibold">
              9h – 11h
            </span>
            <span className="inline-flex items-center gap-2 bg-bleu-dark/15 text-bleu-dark rounded-full px-4 py-2 text-sm font-semibold">
              <MapPin size={16} /> Andolsheim
            </span>
          </div>
        </div>
      </section>

      {/* Image full */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/before-week-hero.jpg"
          alt="Événement communauté au Collectif Or du commun"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Intro café-réseau */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-or mb-3">
            Le rendez-vous de la semaine
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bleu leading-tight">
            Un café-réseau pro, chaque lundi
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gris">
            Le Before-week réunit une communauté autour d&apos;une compétence, d&apos;un parcours
            inspirant ou d&apos;une animation collective. Des temps collectifs ouverts à toutes et tous
            pour se ressourcer, rencontrer, apprendre, tester et partager. Une manière conviviale de
            créer de nouveaux liens professionnels, en toute confiance.
          </p>
        </div>
      </section>

      {/* Au programme */}
      <section className="bg-fond py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Au programme" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programme.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-or/15 text-bleu">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-playfair text-lg text-bleu font-bold">{p.title}</h3>
                  <p className="text-sm text-gris mt-2 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Comment ça marche" />
          <div className="space-y-10 max-w-2xl mx-auto">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-6 items-start">
                <div className="h-10 w-10 rounded-full bg-or flex items-center justify-center font-bold text-bleu-dark text-lg shrink-0">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-bleu font-bold">{step.title}</h3>
                  <p className="text-gris mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prochaines dates */}
      <section className="bg-fond py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle
            title="Les prochaines dates"
            subtitle="Le Before-week fait relâche le 2e lundi des vacances scolaires."
          />
          <NextBeforeWeeks />
        </div>
      </section>

      {/* Témoignage */}
      <section className="bg-bleu-dark py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="font-playfair text-2xl italic text-white leading-relaxed">
            &ldquo;Je me rends régulièrement aux Before-week du lundi matin. Une équipe chaleureuse et
            professionnelle.&rdquo;
          </p>
          <p className="mt-5 text-sm font-semibold text-or">
            Olivier Garrabé · Avis Google ★★★★★
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Pourquoi essayer ?" />
          <div className="grid lg:grid-cols-4 gap-6">
            {avantages.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-or/15 text-bleu">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-playfair text-lg text-bleu font-bold">{a.title}</h3>
                  <p className="text-sm text-gris mt-2">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl text-bleu-dark font-bold">
            On vous garde un café ?
          </h2>
          <p className="mt-4 text-bleu-dark/70 max-w-lg mx-auto">
            Rendez-vous un lundi de 9h à 11h, ou écrivez-nous si vous avez une question.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 bg-bleu-dark text-white rounded-lg px-8 py-3.5 font-semibold hover:-translate-y-0.5 transition-all duration-200"
            >
              Voir les prochaines dates <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-bleu-dark/30 text-bleu-dark rounded-lg px-8 py-3.5 font-semibold hover:bg-bleu-dark/10 transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
