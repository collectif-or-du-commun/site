const actions = [
  {
    priority: "Fait",
    priorityColor: "bg-emerald-100 text-emerald-700",
    action: "Migration vers Next.js sur Cloudflare",
    impact: "Très fort",
    impactColor: "text-emerald-600",
    detail: "Performance mobile x4, TTFB 23x plus rapide",
  },
  {
    priority: "Fait",
    priorityColor: "bg-emerald-100 text-emerald-700",
    action: "Optimisation complète des meta tags",
    impact: "Fort",
    impactColor: "text-emerald-600",
    detail: "100% des pages avec title unique et meta description",
  },
  {
    priority: "Fait",
    priorityColor: "bg-emerald-100 text-emerald-700",
    action: "Attributs alt sur toutes les images",
    impact: "Moyen",
    impactColor: "text-amber-600",
    detail: "De 6/18 à 19/19 images avec description textuelle",
  },
  {
    priority: "Fait",
    priorityColor: "bg-emerald-100 text-emerald-700",
    action: "Sitemap XML + robots.txt",
    impact: "Fort",
    impactColor: "text-emerald-600",
    detail: "21 URLs indexées, crawlers IA bloqués si souhaité",
  },
  {
    priority: "Fait",
    priorityColor: "bg-emerald-100 text-emerald-700",
    action: "Schéma LocalBusiness JSON-LD",
    impact: "Fort",
    impactColor: "text-emerald-600",
    detail: "Adresse, téléphone, horaires lisibles par Google",
  },
  {
    priority: "Fait",
    priorityColor: "bg-emerald-100 text-emerald-700",
    action: "Open Graph sur toutes les pages",
    impact: "Moyen",
    impactColor: "text-amber-600",
    detail: "Partage sur les réseaux sociaux avec aperçu correct",
  },
  {
    priority: "En cours",
    priorityColor: "bg-amber-100 text-amber-700",
    action: "Optimisation GEO / visibilité IA",
    impact: "Fort",
    impactColor: "text-emerald-600",
    detail: "Score 45/100. Objectif : atteindre 70+ avec llms.txt et content signals",
  },
  {
    priority: "À faire",
    priorityColor: "bg-blue-100 text-blue-700",
    action: "Contenu long sur les pages cibles",
    impact: "Fort",
    impactColor: "text-emerald-600",
    detail: "Viser 600+ mots sur les pages formations et location",
  },
  {
    priority: "À faire",
    priorityColor: "bg-blue-100 text-blue-700",
    action: "Google Business Profile à jour",
    impact: "Fort",
    impactColor: "text-emerald-600",
    detail: "Photos, horaires, réponses aux avis, catégorie principale",
  },
  {
    priority: "À faire",
    priorityColor: "bg-blue-100 text-blue-700",
    action: "Backlinks locaux (mairie, CPME, Grand Est)",
    impact: "Moyen",
    impactColor: "text-amber-600",
    detail: "Des liens depuis des sites locaux augmentent l'autorité de domaine",
  },
];

export function ActionPlan() {
  return (
    <section id="plan" className="bg-[#0A3F52] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#FFCA00] mb-3">
            Roadmap
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
            Plan d'action SEO
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            Les 10 actions prioritaires pour continuer à progresser dans Google. Les actions "Fait" sont déjà intégrées dans le nouveau site.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-white/10 rounded-xl p-5 text-center">
            <p className="text-3xl font-black text-emerald-400">6</p>
            <p className="text-sm text-white/70 mt-1">Actions réalisées</p>
          </div>
          <div className="bg-white/10 rounded-xl p-5 text-center">
            <p className="text-3xl font-black text-[#FFCA00]">1</p>
            <p className="text-sm text-white/70 mt-1">En cours</p>
          </div>
          <div className="bg-white/10 rounded-xl p-5 text-center">
            <p className="text-3xl font-black text-blue-300">3</p>
            <p className="text-sm text-white/70 mt-1">À planifier</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="hidden md:grid grid-cols-[120px_1fr_100px_1fr] gap-0 bg-[#F5F7FA] border-b border-gray-200">
            <div className="py-3 px-4 text-xs font-bold uppercase text-[#666666]">Statut</div>
            <div className="py-3 px-4 text-xs font-bold uppercase text-[#666666]">Action</div>
            <div className="py-3 px-4 text-xs font-bold uppercase text-[#666666]">Impact</div>
            <div className="py-3 px-4 text-xs font-bold uppercase text-[#666666]">Détail</div>
          </div>
          <div className="divide-y divide-gray-100">
            {actions.map((a, i) => (
              <div key={i} className="grid md:grid-cols-[120px_1fr_100px_1fr] gap-0 hover:bg-[#F5F7FA]/50 transition-colors">
                <div className="pt-4 pb-2 md:py-4 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${a.priorityColor}`}>
                    {a.priority}
                  </span>
                </div>
                <div className="pb-4 md:py-4 px-4">
                  <p className="font-semibold text-[#0A3F52] text-sm">{a.action}</p>
                </div>
                <div className="hidden md:flex md:py-4 px-4 items-center">
                  <span className={`text-sm font-bold ${a.impactColor}`}>{a.impact}</span>
                </div>
                <div className="hidden md:flex md:py-4 px-4 items-center">
                  <p className="text-sm text-[#666666]">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-white/70 mb-4">Questions sur ces résultats ou sur la suite ?</p>
          <a
            href="mailto:contact@vjacquet.fr"
            className="inline-flex items-center gap-2 bg-[#FFCA00] text-[#0A3F52] rounded-lg px-8 py-3.5 font-bold hover:-translate-y-0.5 transition-all duration-200"
          >
            Contactez Vincent →
          </a>
        </div>
      </div>
    </section>
  );
}
