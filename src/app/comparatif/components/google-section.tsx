const snippetOld = {
  title: "Or du Commun – Andolsheim",
  url: "collectiforducommun.org",
  desc: "Or du Commun, tiers-lieu à Andolsheim. Coworking, formations, ateliers.",
};

const snippetNew = {
  title: "Collectif Or du Commun | Tiers-lieu Andolsheim, Alsace",
  url: "odc.vjacquet.fr",
  desc: "Tiers-lieu associatif à Andolsheim (68). Coworking, formations Qualiopi, location de salles et événements. À 20 min de Colmar, en Alsace.",
};

const seoDetails = [
  {
    category: "Technique",
    old: 38,
    new: 78,
    oldLabel: "Critique",
    newLabel: "Bon",
    desc: "HTTPS, redirections, vitesse serveur, canonicals",
  },
  {
    category: "Contenu",
    old: 52,
    new: 74,
    oldLabel: "Moyen",
    newLabel: "Bon",
    desc: "Qualité des textes, longueur, mots-clés, E-E-A-T",
  },
  {
    category: "Images",
    old: 22,
    new: 82,
    oldLabel: "Critique",
    newLabel: "Excellent",
    desc: "Attributs alt, formats modernes, compression",
  },
  {
    category: "Sitemap",
    old: 55,
    new: 95,
    oldLabel: "Partiel",
    newLabel: "Complet",
    desc: "Plan du site XML soumis à Google",
  },
  {
    category: "GEO / IA",
    old: 10,
    new: 45,
    oldLabel: "Absent",
    newLabel: "En cours",
    desc: "Visibilité dans ChatGPT, Perplexity, Google AI",
  },
];

function ScorePill({ score, label }: { score: number; label: string }) {
  const color =
    score >= 70
      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
      : score >= 50
      ? "bg-amber-100 text-amber-700 border-amber-200"
      : "bg-red-100 text-red-700 border-red-200";
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${color}`}>
      {score}/100 · {label}
    </span>
  );
}

export function GoogleSection() {
  return (
    <section id="google" className="bg-[#F5F7FA] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#015E7C] mb-3">
            Référencement Google
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A3F52]">
            Ce que Google voit
          </h2>
          <p className="mt-3 text-[#666666] max-w-xl mx-auto">
            Le titre et la description dans Google, les données structurées, et les scores SEO détaillés par catégorie.
          </p>
        </div>

        {/* Snippet comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Old snippet */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs font-bold uppercase text-[#666666] mb-4">Résultat Google — Ancien site</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-green-700">{snippetOld.url}</p>
              <p className="text-lg font-medium text-blue-700 leading-tight mt-0.5">{snippetOld.title}</p>
              <p className="text-sm text-[#4d4d4d] mt-1 line-clamp-2">{snippetOld.desc}</p>
            </div>
            <ul className="mt-4 space-y-1.5">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-red-500 mt-0.5">✗</span>
                <span className="text-[#666666]">Titre trop court (30 car.), pas de localisation</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-red-500 mt-0.5">✗</span>
                <span className="text-[#666666]">Description vague, pas de mot-clé ciblé</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-red-500 mt-0.5">✗</span>
                <span className="text-[#666666]">Aucune donnée enrichie (horaires, adresse, avis)</span>
              </li>
            </ul>
          </div>

          {/* New snippet */}
          <div className="bg-white rounded-2xl border border-[#FFCA00]/40 shadow-sm p-6">
            <p className="text-xs font-bold uppercase text-[#666666] mb-4">Résultat Google — Nouveau site</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-green-700">{snippetNew.url}</p>
              <p className="text-lg font-medium text-blue-700 leading-tight mt-0.5">{snippetNew.title}</p>
              <p className="text-sm text-[#4d4d4d] mt-1 line-clamp-2">{snippetNew.desc}</p>
            </div>
            <ul className="mt-4 space-y-1.5">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span className="text-[#666666]">Titre optimisé (52 car.), localisation Andolsheim/Alsace</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span className="text-[#666666]">Description avec mots-clés : Qualiopi, coworking, Colmar</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span className="text-[#666666]">Schéma LocalBusiness avec adresse, téléphone, horaires</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO scores breakdown */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#0A3F52] px-6 py-4">
            <h3 className="text-white font-semibold">Scores SEO par catégorie</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {seoDetails.map((item) => (
              <div key={item.category} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1">
                  <p className="font-semibold text-[#0A3F52] text-sm">{item.category}</p>
                  <p className="text-xs text-[#666666] mt-0.5">{item.desc}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <ScorePill score={item.old} label={item.oldLabel} />
                  <span className="text-gray-300 text-sm">→</span>
                  <ScorePill score={item.new} label={item.newLabel} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rich results */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="font-semibold text-red-800 text-sm mb-1">Ancien site — Données enrichies</p>
            <p className="text-red-700 text-2xl font-black mb-2">0 résultat enrichi</p>
            <p className="text-sm text-red-600">3 erreurs critiques, 5 avertissements. Google ne peut pas afficher l'adresse, les horaires ni les avis dans les résultats.</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="font-semibold text-emerald-800 text-sm mb-1">Nouveau site — Données enrichies</p>
            <p className="text-emerald-700 text-2xl font-black mb-2">1 résultat enrichi ✓</p>
            <p className="text-sm text-emerald-600">Schéma LocalBusiness valide. Google peut afficher l'adresse, les horaires et le numéro de téléphone directement dans les résultats.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
