"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";

export function VideoSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <SectionTitle title="Découvrez nos espaces" centered={true} />
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-8"
        >
          {/* Decorative frame */}
          <div className="pointer-events-none absolute -right-3 -bottom-3 -z-10 h-16 w-16 rounded-2xl border-2 border-or/30" />
          <div className="pointer-events-none absolute -left-3 -top-3 -z-10 h-16 w-16 rounded-2xl border-2 border-bleu/10" />

          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
            <iframe
              src="https://www.youtube.com/embed/STkYRmIXJ78?rel=0"
              className="absolute inset-0 w-full h-full"
              title="Présentation du Collectif Or du Commun"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
