"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarClock, ArrowRight } from "lucide-react";
import { generateBeforeWeekEvents, formatDate } from "@/lib/content";

// Calcul côté client (après montage) pour rester à jour sans rebuild et éviter
// toute différence d'hydratation entre le rendu statique et la date du visiteur.
export function NextBeforeWeeks() {
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    setDates(generateBeforeWeekEvents(4).map((e) => e.date));
  }, []);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm divide-y divide-gray-100">
        {dates.length === 0 ? (
          <div className="px-6 py-5 text-sm text-gris">Chargement des prochaines dates…</div>
        ) : (
          dates.map((d) => (
            <div key={d} className="flex items-center gap-4 px-6 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-or/15 text-bleu">
                <CalendarClock size={20} />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-bleu-dark capitalize">{formatDate(d)}</p>
                <p className="text-sm text-gris">9h – 11h · 4 Grand&apos;Rue, Andolsheim · accès libre</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/agenda"
          className="inline-flex items-center gap-2 text-bleu font-semibold hover:gap-3 transition-all"
        >
          Voir l&apos;agenda complet <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
