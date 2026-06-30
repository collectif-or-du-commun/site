"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Collectif Or du commun est une dynamique associative située à Andolsheim, dans le Haut-Rhin. Où tout le monde est le bienvenu.",
  "Un lieu de rencontres et de culture partagée, c'est une famille professionnelle de 140 adhérents où on vient pour travailler en coworking, former dans des salles de formation, monter en compétences à travers une formation, développer son réseau relationnel et expérimenter la joie de faire ensemble. En toute convivialité !",
  "Tout y est mutualisé : les équipements, les savoirs, les bons plans à partager.",
  "Un lieu de confluences, d'expérimentation, de brassage. En somme, ce que l'on appelle un tiers-lieu !",
];

export function ADNSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[820px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-or mb-3">
            1 lieu, 1001 possibilités
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-[44px] font-bold text-bleu leading-tight">
            Un tiers-lieu humain au cœur du Haut-Rhin
          </h2>
        </motion.div>

        <div className="mt-8 space-y-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-lg leading-relaxed text-gris"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 rounded-2xl bg-fond border border-gray-100 p-6 text-center"
        >
          <p className="text-base text-bleu-dark leading-relaxed">
            Lieu d&apos;innovation dans les méthodes d&apos;apprentissage, le Collectif est{" "}
            <strong className="text-bleu">labellisé Tiers-lieux Compétences et formation en Grand Est</strong>{" "}
            depuis novembre 2023.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
