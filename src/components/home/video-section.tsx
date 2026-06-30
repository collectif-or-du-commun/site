"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export function VideoSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
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
              Visite en vidéo
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[44px] font-bold text-bleu leading-tight">
              Découvrez nos espaces
            </h2>
            <p className="mt-4 text-lg text-gris leading-relaxed">
              Postes de coworking, salles de formation modulables, espace commun et jardin. Une visite
              des locaux du Collectif, sans bouger de chez vous.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/espaces"
                className="inline-flex items-center gap-2 rounded-lg bg-or px-7 py-3.5 text-sm font-semibold text-bleu-dark hover:-translate-y-0.5 transition-all"
              >
                Voir nos espaces <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-bleu/20 px-7 py-3.5 text-sm font-semibold text-bleu hover:bg-fond transition-all"
              >
                <MapPin className="h-4 w-4" /> Venir nous voir
              </Link>
            </div>
          </motion.div>

          {/* Vidéo verticale */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[340px]"
          >
            {/* Cadres décoratifs */}
            <div className="pointer-events-none absolute -right-3 -bottom-3 -z-10 h-20 w-20 rounded-2xl border-2 border-or/30" />
            <div className="pointer-events-none absolute -left-3 -top-3 -z-10 h-20 w-20 rounded-2xl border-2 border-bleu/10" />

            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-100 bg-black aspect-[9/16]">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/images/visite-salle-poster.jpg"
              >
                <source src="/videos/visite-salle.mp4" type="video/mp4" />
                Votre navigateur ne peut pas lire cette vidéo.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
