"use client";

import { StatsCounter } from "@/components/stats-counter";

const stats = [
  { value: 200, suffix: "+", label: "Membres actifs" },
  { value: 2018, label: "Fondé en" },
  { value: 6, label: "Programmes de formation" },
  { value: 1, label: "Tiers-lieu, 100% Haut-Rhin" },
];

export function StatsSection() {
  return <StatsCounter stats={stats} />;
}
