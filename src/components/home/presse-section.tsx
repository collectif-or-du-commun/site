"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { PressCard } from "@/components/press-card";

const articles = [
  {
    source: "France Inter",
    date: "Avril 2024",
    title: "Le Collectif Or du commun dans « Carnets de campagne »",
    url: "https://www.radiofrance.fr/franceinter/podcasts/carnets-de-campagne/carnets-de-campagne-du-mardi-30-avril-2024-3175856",
    icon: "🎤",
  },
  {
    source: "Le Periscope",
    date: "Déc. 2024",
    title: "Un tiers-lieu à Andolsheim, Or du commun souffle sa 6ème bougie",
    url: "https://le-periscope.info/actualites/economie/2024/12/un-tiers-lieu-a-andolsheim-or-du-commun-souffle-sa-6eme-bougie/",
    icon: "📰",
  },
  {
    source: "Podcast Theodora",
    date: "2024",
    title: "Le Collectif Or du commun en podcast",
    url: "https://smartlink.ausha.co/theodora",
    icon: "🎙️",
  },
];

export function PresseSection() {
  return (
    <section className="bg-fond py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle title="Ils parlent de nous" />
        <div className="grid lg:grid-cols-2 gap-4">
          {articles.map((article, i) => (
            <motion.div
              key={article.url}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <PressCard {...article} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
