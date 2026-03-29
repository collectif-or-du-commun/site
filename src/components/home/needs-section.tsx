"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";

const needs = [
  { icon: "💻", label: "Un espace de coworking", href: "/espaces" },
  { icon: "📚", label: "Me former ou monter en compétences", href: "/formations" },
  { icon: "☕", label: "Rencontrer d'autres entrepreneurs", href: "/espaces/before-week" },
  { icon: "🏢", label: "Louer une salle pour un événement", href: "/espaces/nos-locaux" },
  { icon: "🎯", label: "Être accompagné dans mon projet", href: "/espaces/guichet-ouvert" },
  { icon: "📅", label: "Voir les prochains événements", href: "/agenda" },
];

export function NeedsSection() {
  return (
    <section className="bg-fond py-14 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle title="J'ai besoin de..." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {needs.map((need, i) => (
            <motion.div
              key={need.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link href={need.href} className="group block">
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(1,94,124,0.12)" }}
                  transition={{ duration: 0.2 }}
                  className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-colors duration-300 group-hover:border-or/50"
                >
                  {/* Fond coloré qui slide au hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-or/5 to-bleu/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-or/10 text-xl"
                    >
                      {need.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold leading-snug text-bleu-dark transition-colors duration-300 group-hover:text-bleu">
                        {need.label}
                      </h3>
                      {/* Arrow animée */}
                      <motion.div
                        initial={{ opacity: 0, x: -6 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-or opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        En savoir plus <ArrowRight className="h-3 w-3" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Trait or en bas au hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-or"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
