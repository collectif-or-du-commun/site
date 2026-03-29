"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";

const cards = [
  {
    icon: "🗓",
    title: "Tous les lundis, 9h–11h",
    desc: "Venez quand vous voulez, sans rendez-vous. Le Before-Week a lieu chaque lundi matin en accès libre.",
    accent: "from-or/10 to-transparent",
    border: "hover:border-or/50",
  },
  {
    icon: "🆓",
    title: "Totalement gratuit",
    desc: "Aucune inscription, aucun engagement. Prenez un café et installez-vous le temps d'une matinée.",
    accent: "from-bleu/8 to-transparent",
    border: "hover:border-bleu/30",
  },
  {
    icon: "👥",
    title: "Rencontrez la communauté",
    desc: "Échangez avec des freelances, entrepreneurs et porteurs de projets de toute l'Alsace.",
    accent: "from-orange/10 to-transparent",
    border: "hover:border-orange/40",
  },
];

export function BeforeWeekSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle
          title="Le Before-Week"
          subtitle="Chaque lundi matin de 9h à 11h, venez travailler gratuitement et rencontrer la communauté. Sans inscription, sans engagement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-fond p-8 transition-shadow duration-300 hover:shadow-xl ${card.border}`}
            >
              {/* Gradient reveal on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-or/15 text-2xl"
                >
                  {card.icon}
                </motion.div>

                <h3 className="font-playfair font-bold text-lg text-bleu mb-2 transition-colors duration-300 group-hover:text-bleu-dark">
                  {card.title}
                </h3>
                <p className="text-sm text-gris leading-relaxed">{card.desc}</p>

                {/* Expanding bar */}
                <motion.div
                  className="mt-5 h-0.5 rounded-full bg-or"
                  initial={{ width: 32 }}
                  whileHover={{ width: 64 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Bottom slide bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-or"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.35 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link
            href="/espaces/before-week"
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-or text-bleu-dark px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,202,0,0.45)]"
          >
            <span className="relative z-10">En savoir plus sur le Before-Week</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
