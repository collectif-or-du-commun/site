import type { Metadata } from "next";
import { StickyNav } from "./components/sticky-nav";
import { Hero } from "./components/hero";
import { BeforeAfter } from "./components/before-after";
import { SpeedSection } from "./components/speed-section";
import { GoogleSection } from "./components/google-section";
import { SemrushSection } from "./components/semrush-section";
import { ActionPlan } from "./components/action-plan";

export const metadata: Metadata = {
  title: "Rapport SEO | Collectif Or du commun",
  description: "Comparaison SEO entre l'ancien site WordPress et le nouveau site Next.js du Collectif Or du commun.",
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
      <SemrushSection />

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
              <h3 className="font-semibold text-[#0A3F52] text-sm uppercase tracking-wide">Relevé page par page</h3>
              {[
                { label: "Pages au sitemap", old: "22", new: "20" },
                { label: "Pages avec meta description", old: "0", new: "20" },
                { label: "Pages avec Open Graph", old: "0", new: "20" },
                { label: "Pages avec données structurées", old: "0", new: "20" },
                { label: "Images avec attribut alt", old: "55%", new: "100%" },
                { label: "Titres de page uniques", old: "100%", new: "100%" },
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

            {/* Keywords réels Semrush */}
            <div className="bg-[#F5F7FA] rounded-2xl p-6">
              <h3 className="font-semibold text-[#0A3F52] text-sm uppercase tracking-wide mb-5">Mots-clés captés par l&apos;ancien site (Semrush)</h3>
              <div className="space-y-3">
                {[
                  { kw: "or du commun", share: 39, pos: 2 },
                  { kw: "collectif or du commun", share: 31, pos: 1 },
                  { kw: "or du commun (page contact)", share: 6, pos: 6 },
                  { kw: "l or du commun", share: 1, pos: 10 },
                ].map((kw) => (
                  <div key={kw.kw} className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-[#0A3F52]">{kw.kw}</span>
                      <span className="text-xs text-[#666666]">{kw.share}% du trafic · pos. {kw.pos}</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#015E7C] rounded-full"
                        style={{ width: `${kw.share}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#666666] mt-4">
                Les 10 mots-clés de l&apos;ancien site sont tous des variantes de son nom. Aucune recherche de besoin
                (coworking, tiers-lieu, formation, Colmar) ne le fait remonter.
              </p>
            </div>
          </div>

          {/* Content explain */}
          <div className="bg-[#015E7C]/10 border border-[#015E7C]/20 rounded-xl p-5">
            <p className="text-sm text-[#0A3F52]">
              <strong>Pourquoi ça compte :</strong> sans meta description ni données structurées, Google compose lui-même le texte affiché et ne peut pas montrer l&apos;adresse ou les horaires. Le nouveau site renseigne ces éléments sur ses 20 pages, ce qui rend chaque page exploitable pour les recherches locales que l&apos;ancien site ne captait pas.
            </p>
          </div>
        </div>
      </section>

      <ActionPlan />
    </main>
  );
}
