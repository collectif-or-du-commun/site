import type { Metadata } from "next";
import { StickyNav } from "./components/sticky-nav";
import { Hero } from "./components/hero";
import { BeforeAfter } from "./components/before-after";
import { SpeedSection } from "./components/speed-section";
import { GoogleSection } from "./components/google-section";
import { ActionPlan } from "./components/action-plan";

export const metadata: Metadata = {
  title: "Rapport SEO | Collectif Or du Commun",
  description: "Comparaison SEO entre l'ancien site WordPress et le nouveau site Next.js du Collectif Or du Commun.",
  robots: { index: false, follow: false },
};

export default function ComparatifPage() {
  return (
    <main className="min-h-screen bg-white">
      <StickyNav />
      <Hero />
      <BeforeAfter />
      <SpeedSection />
      <GoogleSection />

      {/* Content analysis inline */}
      <section id="contenu" className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#015E7C] mb-3">
              Analyse on-page
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A3F52]">
              Contenu & maillage
            </h2>
            <p className="mt-3 text-[#666666] max-w-xl mx-auto">
              Ce que Google lit sur vos pages : mots-clés, longueur de contenu, liens internes et mots-clés ciblés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Stats comparison */}
            <div className="bg-[#F5F7FA] rounded-2xl p-6 space-y-5">
              <h3 className="font-semibold text-[#0A3F52] text-sm uppercase tracking-wide">Pages & contenu</h3>
              {[
                { label: "Pages totales", old: "15", new: "21" },
                { label: "Pages indexables", old: "11", new: "19" },
                { label: "Longueur moyenne du contenu", old: "358 mots", new: "680 mots" },
                { label: "Pages avec moins de 300 mots", old: "7 pages", new: "2 pages" },
                { label: "Liens internes totaux", old: "62", new: "180" },
                { label: "Liens internes par page", old: "4,4", new: "8,6" },
                { label: "Pages orphelines", old: "3", new: "0" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-[#666666]">{row.label}</span>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm font-medium text-red-500 line-through">{row.old}</span>
                    <span className="text-sm font-bold text-emerald-600">{row.new}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Keywords */}
            <div className="bg-[#F5F7FA] rounded-2xl p-6">
              <h3 className="font-semibold text-[#0A3F52] text-sm uppercase tracking-wide mb-5">Mots-clés principaux — Nouveau site</h3>
              <div className="space-y-3">
                {[
                  { kw: "collectif or du commun", count: 42, pages: 18 },
                  { kw: "tiers-lieu alsace", count: 22, pages: 12 },
                  { kw: "coworking andolsheim", count: 18, pages: 9 },
                  { kw: "formation qualiopi", count: 16, pages: 8 },
                  { kw: "location salle colmar", count: 12, pages: 6 },
                ].map((kw) => (
                  <div key={kw.kw} className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-[#0A3F52]">{kw.kw}</span>
                      <span className="text-xs text-[#666666]">{kw.count}× · {kw.pages} pages</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#015E7C] rounded-full"
                        style={{ width: `${Math.round((kw.count / 42) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#666666] mt-4">
                Comparaison : l'ancien site avait 0 meta description sur 15 pages et 39 images sans attribut alt.
              </p>
            </div>
          </div>

          {/* Content explain */}
          <div className="bg-[#015E7C]/10 border border-[#015E7C]/20 rounded-xl p-5">
            <p className="text-sm text-[#0A3F52]">
              <strong>Maillage interne :</strong> 180 liens internes contre 62 auparavant. Un bon maillage aide Google à découvrir toutes les pages, et distribue l'autorité SEO vers les pages importantes. Les 3 pages orphelines de l'ancien site étaient invisibles pour Google — elles n'existent plus sur le nouveau site.
            </p>
          </div>
        </div>
      </section>

      <ActionPlan />
    </main>
  );
}
