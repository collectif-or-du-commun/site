import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Le Before-Week",
  description:
    "Une semaine gratuite pour decouvrir le coworking et rencontrer la communaute du Collectif.",
};

const IMAGE_BASE = "https://collectiforducommun.org/wp-content/uploads/2026/03/";

const steps = [
  {
    n: 1,
    title: "Inscrivez-vous",
    desc: "Contactez-nous ou remplissez le formulaire en ligne. C'est gratuit et sans engagement.",
  },
  {
    n: 2,
    title: "Venez quand vous voulez",
    desc: "Pendant une semaine complète, accédez librement à tous nos espaces aux horaires d'ouverture.",
  },
  {
    n: 3,
    title: "Rejoignez la communauté",
    desc: "Participez aux temps collectifs, rencontrez les membres, et décidez en toute liberté.",
  },
];

const avantages = [
  {
    icon: "🆓",
    title: "100% gratuit",
    desc: "Aucun frais pour la semaine d'essai.",
  },
  {
    icon: "☕",
    title: "Café offert",
    desc: "On prend soin de vous dès votre arrivée.",
  },
  {
    icon: "🤝",
    title: "Communauté",
    desc: "Rencontrez des gens qui vous ressemblent.",
  },
  {
    icon: "📍",
    title: "Andolsheim",
    desc: "À 10 min de Colmar, parking gratuit.",
  },
];

export default function BeforeWeekPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-or py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-or to-or/80 opacity-80" />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          <span className="bg-bleu-dark/10 text-bleu-dark rounded-full px-4 py-2 text-sm font-semibold inline-block mb-6">
            Gratuit &amp; sans engagement
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bleu-dark">
            Le Before-Week
          </h1>
          <p className="mt-4 text-lg text-bleu-dark/70 max-w-xl mx-auto">
            Chaque mois, une semaine pour tester, rencontrer et décider.
          </p>
        </div>
      </section>

      {/* Image full */}
      <div className="relative w-full h-[400px]">
        <Image
          src={`${IMAGE_BASE}odc-before-week.jpg`}
          alt="Before-Week au Collectif Or du Commun"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Comment ça marche */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Comment ça marche" />
          <div className="space-y-10 max-w-2xl mx-auto">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-6 items-start">
                <div className="h-10 w-10 rounded-full bg-or flex items-center justify-center font-bold text-bleu-dark text-lg shrink-0">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-bleu font-bold">
                    {step.title}
                  </h3>
                  <p className="text-gris mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-fond py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle title="Pourquoi essayer ?" />
          <div className="grid lg:grid-cols-4 gap-6">
            {avantages.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6 text-center"
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-playfair text-lg text-bleu font-bold">
                  {a.title}
                </h3>
                <p className="text-sm text-gris mt-2">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bleu-dark py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl text-white font-bold">
            Prêt(e) à essayer ?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-or text-bleu-dark rounded-lg px-8 py-3.5 font-semibold hover:-translate-y-0.5 transition-all duration-200"
            >
              Je m&apos;inscris <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
