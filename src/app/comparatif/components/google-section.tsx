const snippetOld = {
  title: "Or du commun – Andolsheim",
  url: "collectiforducommun.org",
  desc: "Or du commun, tiers-lieu à Andolsheim. Coworking, formations, ateliers.",
};

const snippetNew = {
  title: "Collectif Or du commun | Tiers-lieu Andolsheim, Alsace",
  url: "odc.vjacquet.fr",
  desc: "Tiers-lieu associatif à Andolsheim (68). Coworking, formations Qualiopi, location de salles et événements. À 20 min de Colmar, en Alsace.",
};

// Faits vérifiés par crawl des deux sites le 2 juin 2026 (22 pages ancien, 20 nouveau).
const seoDetails = [
  {
    category: "Meta descriptions",
    desc: "Le texte affiché sous le titre dans Google",
    old: "0 page sur 22",
    new: "20 pages sur 20",
    ok: true,
  },
  {
    category: "Données structurées (Schema.org)",
    desc: "Adresse, horaires, géolocalisation lisibles par Google",
    old: "Aucune",
    new: "LocalBusiness, Geo, horaires",
    ok: true,
  },
  {
    category: "Open Graph",
    desc: "Aperçu propre lors d'un partage sur les réseaux sociaux",
    old: "Aucun tag",
    new: "20 pages sur 20",
    ok: true,
  },
  {
    category: "Images avec attribut alt",
    desc: "Texte alternatif lu par Google et les lecteurs d'écran",
    old: "28 sur 51 (55%)",
    new: "30 sur 30 (100%)",
    ok: true,
  },
  {
    category: "HTTPS, sitemap, robots.txt",
    desc: "Fondations techniques d'indexation",
    old: "Présents",
    new: "Présents",
    ok: false,
  },
];

function FactPill({ value, good }: { value: string; good: boolean }) {
  const color = good
    ? "bg-emerald-100 text-emerald-700 border-emerald-200"
    : "bg-gray-100 text-gray-600 border-gray-200";
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${color}`}>
      {value}
    </span>
  );
}

export function GoogleSection() {
  return (
    <section id="google" className="bg-[#F5F7FA] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#015E7C] mb-3">
            Référencement Google
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A3F52]">
            Ce que Google lit sur vos pages
          </h2>
          <p className="mt-3 text-[#666666] max-w-xl mx-auto">
            Le titre et la description affichés dans Google, les données structurées, et les éléments techniques
            vérifiés page par page sur les deux sites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
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
                <span className="text-[#666666]">Titre court, sans localisation Andolsheim/Alsace</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-red-500 mt-0.5">✗</span>
                <span className="text-[#666666]">Aucune meta description : Google compose le texte au hasard</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-red-500 mt-0.5">✗</span>
                <span className="text-[#666666]">Aucune donnée enrichie (horaires, adresse)</span>
              </li>
            </ul>
          </div>

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
                <span className="text-[#666666]">Titre avec localisation Andolsheim/Alsace</span>
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

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#0A3F52] px-6 py-4">
            <h3 className="text-white font-semibold">Éléments vérifiés page par page</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {seoDetails.map((item) => (
              <div key={item.category} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1">
                  <p className="font-semibold text-[#0A3F52] text-sm">{item.category}</p>
                  <p className="text-xs text-[#666666] mt-0.5">{item.desc}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <FactPill value={item.old} good={false} />
                  <span className="text-gray-300 text-sm">→</span>
                  <FactPill value={item.new} good={item.ok} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="font-semibold text-red-800 text-sm mb-1">Ancien site — Données enrichies</p>
            <p className="text-red-700 text-2xl font-black mb-2">0 page avec schéma</p>
            <p className="text-sm text-red-600">Sans données structurées, Google ne peut pas afficher l&apos;adresse, les horaires ni le téléphone directement dans les résultats.</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="font-semibold text-emerald-800 text-sm mb-1">Nouveau site — Données enrichies</p>
            <p className="text-emerald-700 text-2xl font-black mb-2">20 pages avec schéma ✓</p>
            <p className="text-sm text-emerald-600">Schéma LocalBusiness valide sur toutes les pages : adresse, horaires et téléphone exploitables par Google.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
