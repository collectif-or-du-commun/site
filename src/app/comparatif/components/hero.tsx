"use client";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0;
          const step = target / 60;
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setValue(target);
              clearInterval(interval);
            } else {
              setValue(Math.round(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function ScoreCard({
  label,
  old: oldVal,
  new: newVal,
  unit = "",
  invert = false,
}: {
  label: string;
  old: number;
  new: number;
  unit?: string;
  invert?: boolean;
}) {
  const improved = invert ? newVal < oldVal : newVal > oldVal;
  const delta = invert ? oldVal - newVal : newVal - oldVal;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#666666]">{label}</p>
      <div className="flex items-end gap-3">
        <span className="text-2xl font-bold text-gray-300 line-through">
          {oldVal}{unit}
        </span>
        <span className="text-4xl font-black text-[#0A3F52]">
          <AnimatedNumber target={newVal} suffix={unit} />
        </span>
      </div>
      <div className={`inline-flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-full w-fit ${improved ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
        {improved ? "+" : "-"}{Math.abs(delta)}{unit}
        <span className="ml-1">{improved ? "▲" : "▼"}</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="intro" className="bg-[#0A3F52] pt-16 pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="bg-[#FFCA00] text-[#0A3F52] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
            Rapport SEO
          </span>
          <span className="text-white/50 text-sm">Collectif Or du Commun · 2 avril 2026</span>
        </div>

        {/* Title */}
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
          Avant le nouveau site,{" "}
          <span className="text-[#FFCA00]">Google ne vous trouvait pas.</span>
        </h1>
        <p className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">
          Comparaison entre collectiforducommun.org (ancien WordPress) et odc.vjacquet.fr (nouveau site Next.js). Données issues d'une analyse Lighthouse + audit statique réalisée le 2 avril 2026.
        </p>

        {/* Verdict badge */}
        <div className="mt-8 inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full px-5 py-2.5 font-semibold">
          <span className="text-emerald-400">✓</span>
          Le nouveau site est meilleur sur tous les points mesurés.
        </div>

        {/* Score cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <ScoreCard label="Score SEO global" old={44} new={76} unit="/100" />
          <ScoreCard label="Performance mobile" old={18} new={74} unit="/100" />
          <ScoreCard label="Performance desktop" old={38} new={88} unit="/100" />
          <ScoreCard label="Vitesse de réponse" old={1434} new={85} unit="ms" invert />
        </div>
      </div>
    </section>
  );
}
