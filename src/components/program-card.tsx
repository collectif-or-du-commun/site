"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  badge: string;
  badgeColor?: string;
  description: string;
  href: string;
}

export function ProgramCard({
  title,
  badge,
  badgeColor = "bg-or/15 text-bleu-dark",
  description,
  href,
}: ProgramCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative h-full"
    >
      <Link href={href} className="block h-full">
        <div className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:border-or/30">
          {/* Gradient reveal */}
          <div className="absolute inset-0 bg-gradient-to-br from-or/5 to-bleu/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}>
              {badge}
            </span>

            <h3 className="mt-4 font-playfair font-bold text-xl text-bleu transition-colors duration-300 group-hover:text-bleu-dark">
              {title}
            </h3>
            <p className="mt-2 text-sm text-gris leading-relaxed">{description}</p>

            <motion.div
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-bleu"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="transition-colors duration-300 group-hover:text-or">
                En savoir plus
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-or" />
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-or"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.35 }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
