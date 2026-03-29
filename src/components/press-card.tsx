"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface PressCardProps {
  source: string;
  date: string;
  title: string;
  url: string;
  icon: string;
}

export function PressCard({ source, date, title, url, icon }: PressCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group"
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative overflow-hidden flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:border-or/30">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-or/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fond text-2xl transition-colors duration-300 group-hover:bg-or/15"
          >
            {icon}
          </motion.div>

          <div className="relative flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-semibold text-bleu transition-colors duration-300 group-hover:text-bleu-dark">
                {source}
              </span>
              <span className="text-xs text-gris uppercase tracking-wide">{date}</span>
            </div>
            <p className="text-sm text-bleu-dark leading-relaxed line-clamp-2">{title}</p>
            <motion.span
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-bleu transition-colors duration-300 group-hover:text-or"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              Lire l&apos;article
              <ExternalLink className="h-3 w-3" />
            </motion.span>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-or"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.35 }}
          />
        </div>
      </a>
    </motion.div>
  );
}
