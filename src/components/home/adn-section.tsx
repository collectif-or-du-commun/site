"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";

const cards = [
  {
    icon: "🤝",
    title: "Communauté",
    desc: "Une communauté soudée de freelances, créateurs et entrepreneurs qui s'entraident au quotidien.",
    color: "from-or/10 to-transparent",
    border: "hover:border-or",
  },
  {
    icon: "🌱",
    title: "Engagement",
    desc: "Un tiers-lieu ancré dans les valeurs de l'économie sociale et solidaire, ouvert à tous.",
    color: "from-bleu/5 to-transparent",
    border: "hover:border-bleu/40",
  },
  {
    icon: "🚀",
    title: "Émancipation",
    desc: "Des programmes concrets pour faire avancer vos projets personnels et professionnels.",
    color: "from-orange/10 to-transparent",
    border: "hover:border-orange/40",
  },
];

export function ADNSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle
          title="Bien plus qu'un espace de travail"
          subtitle="Le Collectif Or du Commun est un espace de vie où convergent travail, apprentissage et lien social."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl ${card.border}`}
            >
              {/* Gradient fond hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-or/10 text-2xl"
                >
                  {card.icon}
                </motion.div>
                <h3 className="mb-2 font-playfair text-xl font-bold text-bleu">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gris">{card.desc}</p>

                {/* Trait décoratif qui s'étend au hover */}
                <motion.div
                  className="mt-5 h-0.5 w-8 rounded-full bg-or"
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
