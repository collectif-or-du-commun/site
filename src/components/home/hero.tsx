"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [4, -4]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-4, 4]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section className="relative overflow-hidden bg-[#FAFCFE] pt-20 pb-12 lg:pt-28 lg:pb-20">
      {/* Blobs animés */}
      <motion.div
        className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-or/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-bleu/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Colonne gauche */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block rounded-full bg-or/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bleu">
                Andolsheim · Alsace · Grand Est
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-playfair text-[2.4rem] font-bold leading-tight text-bleu md:text-5xl lg:text-[58px]"
            >
              Un tiers-lieu à{" "}
              <span className="relative inline-block">
                taille humaine
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 rounded-full bg-or"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-gris"
            >
              Rejoignez une communauté de porteurs de projets, travailleurs indépendants et entrepreneurs. Un espace de vie, de travail et d&apos;apprentissage au cœur de l&apos;Alsace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/espaces"
                className="group relative overflow-hidden inline-flex items-center gap-2 rounded-lg bg-or px-7 py-3.5 font-semibold text-bleu-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,202,0,0.4)]"
              >
                <span className="relative z-10">Découvrir l&apos;espace</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/formations"
                className="group rounded-lg border-2 border-bleu px-7 py-3.5 font-semibold text-bleu transition-all duration-300 hover:bg-bleu hover:text-white hover:-translate-y-0.5"
              >
                Voir les formations
              </Link>
            </motion.div>
          </div>

          {/* Colonne droite — tilt 3D au survol */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-default"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/before-week-event.jpg"
                alt="Communauté du Collectif Or du commun"
                width={600}
                height={450}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bleu/10 to-transparent" />
            </div>

            {/* Badge flottant bas-gauche */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-or/15 text-xl">🤝</div>
              <div>
                <div className="text-sm font-bold text-bleu-dark">140 membres</div>
                <div className="text-xs text-gris">communauté active</div>
              </div>
            </motion.div>

            {/* Badge flottant haut-droite */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-2 top-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-or text-xl">⭐</div>
              <div>
                <div className="text-sm font-bold text-bleu-dark">Depuis 2018</div>
                <div className="text-xs text-gris">tiers-lieu de référence</div>
              </div>
            </motion.div>

            {/* Cadres décoratifs */}
            <div className="pointer-events-none absolute -right-3 -bottom-3 -z-10 h-16 w-16 rounded-2xl border-2 border-or/30" />
            <div className="pointer-events-none absolute -left-3 -top-3 -z-10 h-16 w-16 rounded-2xl border-2 border-bleu/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
