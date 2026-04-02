"use client";

import { useState, useMemo } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  getAllEvents,
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

const MONTHS_FR: Record<string, string> = {
  "01": "Janv.", "02": "Févr.", "03": "Mars", "04": "Avr.",
  "05": "Mai",   "06": "Juin",  "07": "Juil.", "08": "Août",
  "09": "Sept.", "10": "Oct.",  "11": "Nov.",  "12": "Déc.",
};

export function AgendaClient() {
  const allEvents = useMemo(() => getAllEvents(), []);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("tous");
  // "all" | "15j" | "YYYY-MM"
  const [timePeriod, setTimePeriod] = useState<string>("all");

  // Mois disponibles parmi tous les évènements (indépendant du filtre catégorie)
  const availableMonths = useMemo(() => {
    const set = new Set(allEvents.map((e) => e.date.slice(0, 7)));
    return [...set].sort();
  }, [allEvents]);

  const filtered = useMemo(() => {
    let result = allEvents;

    if (activeCategory !== "tous") {
      result = result.filter((e) => e.category === activeCategory);
    }

    if (timePeriod === "15j") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const limit = new Date(today);
      limit.setDate(limit.getDate() + 15);
      result = result.filter((e) => {
        const d = new Date(e.date);
        return d >= today && d <= limit;
      });
    } else if (timePeriod !== "all") {
      result = result.filter((e) => e.date.startsWith(timePeriod));
    }

    return result;
  }, [allEvents, activeCategory, timePeriod]);

  function pillClass(active: boolean) {
    return `rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
      active
        ? "bg-or text-bleu-dark shadow-sm"
        : "bg-white text-bleu border border-gray-200 hover:border-or"
    }`;
  }

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
            Découvrez nos prochains rendez-vous
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-4 space-y-3">
        {/* Ligne 1 — Catégories */}
        <div className="flex flex-wrap gap-2">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={pillClass(activeCategory === cat)}
            >
              {cat === "tous" ? "Toutes catégories" : CATEGORY_LABELS[cat as EventCategory]}
            </button>
          ))}
        </div>

        {/* Ligne 2 — Période */}
        <div className="flex flex-wrap gap-2 items-center">
          <button
            onClick={() => setTimePeriod("all")}
            className={pillClass(timePeriod === "all")}
          >
            Tout l&apos;agenda
          </button>
          <button
            onClick={() => setTimePeriod("15j")}
            className={`${pillClass(timePeriod === "15j")} flex items-center gap-1.5`}
          >
            <Clock size={13} />
            15 prochains jours
          </button>

          {/* Séparateur */}
          <span className="text-gray-300 text-lg leading-none select-none">|</span>

          {/* Pills par mois */}
          {availableMonths.map((ym) => {
            const [year, month] = ym.split("-");
            const label = `${MONTHS_FR[month]} ${year}`;
            return (
              <button
                key={ym}
                onClick={() => setTimePeriod(ym)}
                className={pillClass(timePeriod === ym)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grille d'événements */}
      <div className="max-w-[1200px] mx-auto px-6 pb-16 pt-4">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              className="text-center text-gris py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Aucun événement pour cette sélection.
            </motion.p>
          ) : (
            <motion.div
              key={`${activeCategory}-${timePeriod}`}
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
                  <div className={`h-1 w-full ${STRIP_COLOR[event.category]}`} />

                  <div className="p-6 flex flex-col flex-1">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold w-fit ${CATEGORY_COLORS[event.category]}`}>
                      {CATEGORY_LABELS[event.category]}
                    </span>

                    <h3 className="font-playfair font-bold text-xl text-bleu mt-2 leading-snug">
                      {event.title}
                    </h3>

                    <div className="flex items-start gap-2 mt-3 text-sm text-bleu-dark">
                      <Calendar className="w-4 h-4 text-or shrink-0 mt-0.5" />
                      <span>
                        {formatDate(event.date)}
                        {event.time && (
                          <span className="text-gris"> &middot; {event.time}</span>
                        )}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 mt-2 text-sm text-gris">
                      <MapPin className="w-4 h-4 text-gris shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-gris text-sm mt-3 leading-relaxed flex-1">
                      {event.description}
                    </p>

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
                          S&apos;inscrire &rarr;
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
