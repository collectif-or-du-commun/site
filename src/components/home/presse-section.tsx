"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { PressCard } from "@/components/press-card";

const articles = [
  {
    source: "Le Periscope",
    date: "Déc. 2024",
    title: "Un tiers-lieu à Andolsheim, Or du Commun souffle sa 6ème bougie",
    url: "https://le-periscope.info/actualites/economie/2024/12/un-tiers-lieu-a-andolsheim-or-du-commun-souffle-sa-6eme-bougie/",
    icon: "📰",
  },
  {
    source: "Podcast Theodora",
    date: "2024",
    title: "Le Collectif Or du Commun en podcast",
    url: "https://smartlink.ausha.co/theodora",
    icon: "🎙️",
  },
  {
    source: "Journal des Entreprises",
    date: "Oct. 2023",
    title: "Le Collectif Or du Commun se réinvente à Andolsheim",
    url: "https://www.lejournaldesentreprises.com/alsace/article/le-collectif-or-du-commun-se-reinvente-a-andolsheim-735312",
    icon: "📰",
  },
  {
    source: "Tchapp Alsace",
    date: "Mai 2021",
    title: "Collectif Or du Commun Andolsheim",
    url: "https://tchapp.fr/collectif-or-du-commun-andolsheim/",
    icon: "🌐",
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
