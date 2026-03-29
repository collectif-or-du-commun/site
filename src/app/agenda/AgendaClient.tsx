"use client";

import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  EVENTS,
  formatDate,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
  EventCategory,
} from "@/lib/content";

type FilterCategory = "tous" | EventCategory;

const ALL_CATEGORIES: FilterCategory[] = [
  "tous",
  "before-week",
  "formation",
  "evenement",
  "atelier",
];

const STRIP_COLOR: Record<EventCategory, string> = {
  "before-week": "bg-or",
  formation: "bg-bleu",
  evenement: "bg-orange",
  atelier: "bg-orange",
};

export function AgendaClient() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("tous");

  const filtered =
    activeCategory === "tous"
      ? EVENTS
      : EVENTS.filter((e) => e.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-bleu-dark py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.h1
            className="font-playfair text-4xl md:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Agenda
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Decouvrez nos prochains rendez-vous
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-or text-bleu-dark shadow-sm"
                  : "bg-white text-bleu border border-gray-200 hover:border-or"
              }`}
            >
              {cat === "tous" ? "Tous" : CATEGORY_LABELS[cat as EventCategory]}
            </button>
          ))}
        </div>
      </div>

      {/* Events grid */}
      <div className="max-w-[1200px] mx-auto px-6 pb-16">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              className="text-center text-gris py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Aucun evenement dans cette categorie pour le moment.
            </motion.p>
          ) : (
            <motion.div
              key={activeCategory}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((event, i) => (
                <motion.article
                  key={event.id}
                  className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  {/* Top colored strip */}
                  <div className={`h-1 w-full ${STRIP_COLOR[event.category]}`} />

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category badge */}
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold w-fit ${CATEGORY_COLORS[event.category]}`}
                    >
                      {CATEGORY_LABELS[event.category]}
                    </span>

                    {/* Title */}
                    <h3 className="font-playfair font-bold text-xl text-bleu mt-2 leading-snug">
                      {event.title}
                    </h3>

                    {/* Date + time */}
                    <div className="flex items-start gap-2 mt-3 text-sm text-bleu-dark">
                      <Calendar className="w-4 h-4 text-or shrink-0 mt-0.5" />
                      <span>
                        {formatDate(event.date)}
                        {event.time && (
                          <span className="text-gris"> &middot; {event.time}</span>
                        )}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-2 mt-2 text-sm text-gris">
                      <MapPin className="w-4 h-4 text-gris shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gris text-sm mt-3 leading-relaxed flex-1">
                      {event.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
                      {event.spots != null ? (
                        <span className="rounded-full bg-orange/15 text-orange text-xs font-semibold px-3 py-1">
                          {event.spots} places disponibles
                        </span>
                      ) : (
                        <span />
                      )}

                      {event.registrationUrl && (
                        <Link
                          href={event.registrationUrl}
                          className="bg-or text-bleu-dark rounded-lg px-5 py-2.5 text-sm font-semibold hover:-translate-y-0.5 transition-all whitespace-nowrap"
                        >
                          S'inscrire &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
