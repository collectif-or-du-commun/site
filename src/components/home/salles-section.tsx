"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Users, Projector, Car } from "lucide-react";
import { motion } from "framer-motion";

const salles = [
  { nom: "Grande salle", surface: "65 m²", capacite: "jusqu'à 50 pers.", prix: "dès 200 €" },
  { nom: "Salle de réunion", surface: "30 m²", capacite: "8 à 10 pers.", prix: "dès 150 €" },
  { nom: "Bureau individuel", surface: "10 m²", capacite: "1 à 2 pers.", prix: "dès 20 €/h" },
];

const atouts = [
  { icon: Projector, label: "Salles équipées et modulables" },
  { icon: Users, label: "Cuisine partagée et espaces communs" },
  { icon: Car, label: "Parking gratuit, à 10 min de Colmar" },
];

export function SallesSection() {
  return (
    <section className="bg-bleu-dark py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-or mb-3">
              Réunion · Formation · Événement
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight">
              Louez nos salles à Andolsheim
            </h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Une grande salle modulable jusqu&apos;à 50 personnes, une salle de réunion et un bureau
              privatisable. Pour vos formations, réunions, ateliers ou événements, à 10 minutes de Colmar.
            </p>

            <ul className="mt-6 space-y-3">
              {atouts.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-white/80">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-4 w-4 text-or" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/location-salles"
                className="inline-flex items-center gap-2 rounded-lg bg-or px-7 py-3.5 text-sm font-semibold text-bleu-dark hover:-translate-y-0.5 transition-all"
              >
                Voir la location <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0755530857"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
              >
                <Phone className="h-4 w-4" /> 07 55 53 08 57
              </a>
            </div>
          </motion.div>

          {/* Cartes tarifs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <div className="relative h-44 overflow-hidden rounded-2xl">
              <Image
                src="/images/grande-salle.jpg"
                alt="Grande salle de formation modulable du Collectif Or du commun"
                fill
                className="object-cover object-top"
              />
            </div>
            {salles.map((s) => (
              <div
                key={s.nom}
                className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4"
              >
                <div>
                  <p className="font-semibold text-white">{s.nom}</p>
                  <p className="text-sm text-white/60">{s.surface} · {s.capacite}</p>
                </div>
                <p className="font-playfair text-lg font-bold text-or shrink-0">{s.prix}</p>
              </div>
            ))}
            <p className="text-xs text-white/50 text-center">
              Tarifs adhérents réduits · demi-journée ou journée · devis sur mesure
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
