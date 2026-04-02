import { CwvBar, ScoreBar } from "./score-bar";

const mobileScores = [
  { label: "Performance", old: 20, new: 74 },
  { label: "Accessibilité", old: 74, new: 88 },
  { label: "Bonnes pratiques", old: 73, new: 92 },
  { label: "SEO", old: 84, new: 91 },
];

const desktopScores = [
  { label: "Performance", old: 35, new: 88 },
  { label: "Accessibilité", old: 74, new: 91 },
  { label: "Bonnes pratiques", old: 73, new: 96 },
  { label: "SEO", old: 87, new: 88 },
];

const cwvMobile = [
  { label: "LCP — Largest Contentful Paint", oldVal: 7.0, newVal: 2.1, unit: "s", thresholds: [2.5, 4.0] as [number, number] },
  { label: "TBT — Total Blocking Time", oldVal: 3200, newVal: 85, unit: "ms", thresholds: [200, 500] as [number, number] },
  { label: "CLS — Cumulative Layout Shift", oldVal: 0.12, newVal: 0.04, unit: "", thresholds: [0.1, 0.25] as [number, number] },
  { label: "FCP — First Contentful Paint", oldVal: 4.5, newVal: 1.4, unit: "s", thresholds: [1.8, 3.0] as [number, number] },
  { label: "TTFB — Time To First Byte", oldVal: 1434, newVal: 85, unit: "ms", thresholds: [800, 1800] as [number, number] },
];

export function SpeedSection() {
  return (
    <section id="vitesse" className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#015E7C] mb-3">
            PageSpeed Insights
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A3F52]">
            Vitesse & Core Web Vitals
          </h2>
          <p className="mt-3 text-[#666666] max-w-xl mx-auto">
            Google mesure 4 catégories sur 100. Un score sous 50 en performance pénalise directement le classement dans les résultats de recherche.
          </p>
        </div>

        {/* Explain */}
        <div className="bg-[#F5F7FA] rounded-xl p-5 mb-10 grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs font-bold uppercase text-[#0A3F52] mb-1">Performance</p>
            <p className="text-sm text-[#666666]">Mesure la vitesse d'affichage. Un score bas ralentit votre classement Google.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-[#0A3F52] mb-1">Core Web Vitals</p>
            <p className="text-sm text-[#666666]">Les 5 métriques officielles de Google. LCP = affichage principal, TBT = blocage JS, CLS = stabilité visuelle.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-[#0A3F52] mb-1">TTFB</p>
            <p className="text-sm text-[#666666]">Temps de réponse du serveur. L'ancien site mettait 2 secondes avant d'envoyer la première réponse.</p>
          </div>
        </div>

        {/* Scores Google — Mobile + Desktop */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mobile */}
          <div className="bg-[#F5F7FA] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">📱</span>
              <h3 className="font-semibold text-[#0A3F52]">Scores Mobile</h3>
            </div>
            <div className="space-y-4">
              {mobileScores.map((s) => (
                <ScoreBar key={s.label} label={s.label} old={s.old} new={s.new} />
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="bg-[#F5F7FA] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">🖥️</span>
              <h3 className="font-semibold text-[#0A3F52]">Scores Desktop</h3>
            </div>
            <div className="space-y-4">
              {desktopScores.map((s) => (
                <ScoreBar key={s.label} label={s.label} old={s.old} new={s.new} />
              ))}
            </div>
          </div>
        </div>

        {/* Core Web Vitals */}
        <h3 className="font-playfair text-xl font-bold text-[#0A3F52] mb-6">
          Core Web Vitals — mesures Mobile
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cwvMobile.map((cwv) => (
            <CwvBar key={cwv.label} {...cwv} />
          ))}
        </div>

        {/* TTFB callout */}
        <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex gap-4 items-start">
          <span className="text-2xl">⚡</span>
          <div>
            <p className="font-semibold text-emerald-800">TTFB : de 1 980 ms à 85 ms</p>
            <p className="text-sm text-emerald-700 mt-1">
              L'ancien serveur WordPress mettait 1,4 seconde à répondre (sans CDN, Apache PHP). Le nouveau site sur Cloudflare répond en 85 ms, soit 17 fois plus vite. Google prend en compte ce délai pour le classement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
