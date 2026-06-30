"use client";

import { useEffect, useRef, useState } from "react";

// ── Données Semrush réelles, base FR, relevé du 2 juin 2026 ──
// Ancien site (collectiforducommun.org) : domain_rank + backlinks_overview
// Nouveau site (odc.vjacquet.fr) : "NOTHING FOUND" (domaine neuf, pas encore crawlé)
const metrics = [
  { label: "Authority Score", old: "15", neu: "non noté", note: "domaine neuf" },
  { label: "Domaines référents", old: "134", neu: "0", note: "à construire" },
  { label: "Backlinks", old: "254", neu: "0", note: "à construire" },
  { label: "Mots-clés positionnés", old: "10", neu: "0", note: "pas encore indexé" },
  { label: "Trafic organique estimé", old: "131 / mois", neu: "—", note: "en cours d'indexation" },
];

// Les 10 mots-clés réels de l'ancien site : tous des variantes de marque
const brandKeywords = [
  { kw: "or du commun", pos: 2, vol: 390 },
  { kw: "collectif or du commun", pos: 1, vol: 50 },
  { kw: "l or du commun", pos: 10, vol: 390 },
];

// Mots-clés de besoin non captés (volumes Semrush réels, base FR)
const opportunities = [
  { kw: "coworking colmar", vol: 70, diff: "faible" },
  { kw: "location salle réunion colmar", vol: 10, diff: "faible" },
  { kw: "coworking andolsheim", vol: "< 10", diff: "très faible" },
  { kw: "tiers-lieu alsace", vol: "< 10", diff: "très faible" },
  { kw: "formation entrepreneur alsace", vol: "< 10", diff: "très faible" },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
}

export function SemrushSection() {
  return (
    <section id="referencement" className="bg-[#F5F7FA] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#015E7C] mb-3">
            Référencement Google · données Semrush
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A3F52]">
            Ce que Google voit du Collectif
          </h2>
          <p className="mt-3 text-[#666666] max-w-2xl mx-auto">
            Semrush mesure l&apos;empreinte SEO accumulée d&apos;un site : son autorité, ses liens entrants et les
            recherches sur lesquelles il apparaît. Relevé réel du 2 juin 2026, base France.
          </p>
        </div>

        {/* Tableau de métriques */}
        <Reveal>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] text-sm">
              <div className="bg-[#0A3F52] text-white font-semibold px-5 py-4">Métrique Semrush</div>
              <div className="bg-[#0A3F52] text-white/90 font-semibold px-5 py-4 text-center">Ancien site</div>
              <div className="bg-[#0A3F52] text-white font-semibold px-5 py-4 text-center">Nouveau site</div>
              {metrics.map((m, i) => (
                <div key={m.label} className="contents">
                  <div className={`px-5 py-4 text-[#0A3F52] font-medium ${i % 2 ? "bg-[#F5F7FA]" : "bg-white"}`}>
                    {m.label}
                  </div>
                  <div className={`px-5 py-4 text-center text-[#666666] ${i % 2 ? "bg-[#F5F7FA]" : "bg-white"}`}>
                    {m.old}
                  </div>
                  <div className={`px-5 py-4 text-center ${i % 2 ? "bg-[#F5F7FA]" : "bg-white"}`}>
                    <span className="font-bold text-[#0A3F52]">{m.neu}</span>
                    <span className="block text-xs text-[#666666] mt-0.5">{m.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Le constat clé */}
        <Reveal delay={100}>
          <div className="mt-8 rounded-2xl bg-white border-l-4 border-[#FFCA00] shadow-sm p-7">
            <h3 className="font-playfair text-xl font-bold text-[#0A3F52]">
              Le constat : l&apos;ancien site ne ressort que sur son propre nom
            </h3>
            <p className="mt-3 text-[#666666] leading-relaxed">
              Les 10 mots-clés sur lesquels l&apos;ancien site apparaît sont tous des variantes de « or du commun ».
              Autrement dit, on ne le trouve que si on connaît déjà son nom. Aucune recherche de besoin (coworking,
              tiers-lieu, location de salle, formation, Andolsheim, Colmar) ne mène à lui.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {brandKeywords.map((k) => (
                <span key={k.kw} className="inline-flex items-center gap-2 bg-[#F5F7FA] rounded-full px-3 py-1.5 text-sm text-[#0A3F52]">
                  <span className="font-medium">{k.kw}</span>
                  <span className="text-xs text-[#666666]">pos. {k.pos} · {k.vol}/mois</span>
                </span>
              ))}
              <span className="inline-flex items-center bg-red-50 text-red-500 rounded-full px-3 py-1.5 text-sm font-medium">
                0 mot-clé thématique ou local
              </span>
            </div>
          </div>
        </Reveal>

        {/* Opportunités */}
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <Reveal delay={150}>
            <div className="h-full rounded-2xl bg-white border border-gray-100 shadow-sm p-7">
              <h3 className="font-semibold text-[#0A3F52] uppercase text-sm tracking-wide mb-4">
                Recherches locales à capter
              </h3>
              <div className="space-y-3">
                {opportunities.map((o) => (
                  <div key={o.kw} className="flex items-center justify-between gap-3 border-b border-gray-100 pb-2.5 last:border-0">
                    <span className="text-sm text-[#0A3F52]">{o.kw}</span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-sm font-bold text-[#015E7C]">{o.vol}/mois</span>
                      <span className="text-xs text-[#666666] w-20 text-right">diff. {o.diff}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#666666] leading-relaxed">
                Marché local volontairement étroit (Andolsheim, sud Colmar). Faibles volumes, mais faible
                concurrence : des pages bien structurées peuvent ressortir vite.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="h-full rounded-2xl bg-[#0A3F52] text-white shadow-sm p-7 flex flex-col">
              <h3 className="font-playfair text-xl font-bold">Page blanche, pas recul</h3>
              <p className="mt-3 text-white/80 leading-relaxed text-sm">
                Le nouveau site n&apos;a encore aucune donnée Semrush : le domaine est neuf et n&apos;a pas fini
                d&apos;être indexé. Ce n&apos;est pas une perte. C&apos;est un redémarrage sur des fondations saines
                (structure claire, données Schema.org, vitesse, balises propres) que l&apos;ancien site n&apos;avait
                pas, et qui sont précisément ce qui permet de capter les recherches de besoin.
              </p>
              <div className="mt-5 rounded-xl bg-white/10 p-4">
                <p className="text-sm font-semibold text-[#FFCA00]">À faire lors de la bascule</p>
                <p className="mt-1 text-sm text-white/80 leading-relaxed">
                  Rediriger (301) les anciennes URL vers les nouvelles pour récupérer les 134 domaines référents et
                  l&apos;autorité déjà acquise. Sans cette étape, on repart vraiment de zéro.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 text-center text-xs text-[#666666]">
          Source : Semrush, base France, relevé du 2 juin 2026. Le nouveau domaine (odc.vjacquet.fr) renvoie
          « aucune donnée » dans Semrush à cette date, signe d&apos;une indexation encore en cours.
        </p>
      </div>
    </section>
  );
}
