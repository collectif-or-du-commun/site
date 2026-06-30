// Données mesurées le 2 juin 2026 : crawl des deux sitemaps (22 pages ancien, 20 nouveau)
// + mesures réseau curl (3 échantillons) + données Semrush.
const criteria = [
  {
    icon: "📝",
    label: "Meta descriptions",
    old: { value: "0 / 22", color: "text-red-500", note: "Aucune page" },
    new: { value: "20 / 20", color: "text-emerald-600", note: "100% des pages" },
  },
  {
    icon: "📊",
    label: "Données structurées (JSON-LD)",
    old: { value: "0 page", color: "text-red-500", note: "Aucun schéma" },
    new: { value: "20 pages", color: "text-emerald-600", note: "LocalBusiness, Geo, horaires" },
  },
  {
    icon: "🤖",
    label: "Open Graph (partage réseaux sociaux)",
    old: { value: "0 / 22", color: "text-red-500", note: "Aucun tag social" },
    new: { value: "20 / 20", color: "text-emerald-600", note: "100% des pages" },
  },
  {
    icon: "🖼️",
    label: "Images avec attribut alt",
    old: { value: "28 / 51", color: "text-amber-500", note: "55%, 23 images muettes" },
    new: { value: "30 / 30", color: "text-emerald-600", note: "100%" },
  },
  {
    icon: "⚡",
    label: "Temps de réponse serveur (TTFB)",
    old: { value: "1,91 s", color: "text-red-500", note: "Apache/PHP, sans CDN" },
    new: { value: "0,37 s", color: "text-emerald-600", note: "Cloudflare + Vercel, ~5x plus rapide" },
  },
  {
    icon: "📦",
    label: "Poids HTML transféré (accueil)",
    old: { value: "45,6 Ko", color: "text-amber-500", note: "gzip" },
    new: { value: "18,2 Ko", color: "text-emerald-600", note: "gzip, ~2,5x plus léger" },
  },
  {
    icon: "🔎",
    label: "Mots-clés Google (Semrush)",
    old: { value: "10", color: "text-amber-500", note: "uniquement le nom « or du commun »" },
    new: { value: "fondations posées", color: "text-emerald-600", note: "structure pour capter les recherches de besoin" },
  },
  {
    icon: "🏷️",
    label: "Titres de page uniques",
    old: { value: "22 / 22", color: "text-emerald-600", note: "déjà OK" },
    new: { value: "20 / 20", color: "text-emerald-600", note: "OK" },
  },
  {
    icon: "🔒",
    label: "HTTPS, sitemap, robots.txt",
    old: { value: "Présents", color: "text-emerald-600", note: "déjà en place" },
    new: { value: "Présents", color: "text-emerald-600", note: "conservés" },
  },
];

function Row({ icon, label, old: oldVal, new: newVal }: (typeof criteria)[number]) {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] gap-0 border-b border-gray-100 last:border-0">
      <div className="py-4 px-5 flex items-center gap-2.5">
        <span className="text-base">{icon}</span>
        <span className="text-sm font-semibold text-[#0A3F52]">{label}</span>
      </div>
      <div className="py-4 px-5 bg-red-50/50 border-l border-gray-100 flex flex-col justify-center">
        <span className={`text-sm font-bold ${oldVal.color}`}>{oldVal.value}</span>
        <span className="text-xs text-[#666666] mt-0.5">{oldVal.note}</span>
      </div>
      <div className="py-4 px-5 bg-emerald-50/50 border-l border-gray-100 flex flex-col justify-center">
        <span className={`text-sm font-bold ${newVal.color}`}>{newVal.value}</span>
        <span className="text-xs text-[#666666] mt-0.5">{newVal.note}</span>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="avant-apres" className="bg-[#F5F7FA] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#015E7C] mb-3">
            Comparaison détaillée
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A3F52]">
            Avant / Après
          </h2>
          <p className="mt-3 text-[#666666] max-w-xl mx-auto">
            Chaque critère mesure un aspect de la visibilité sur Google. Les scores verts sont dans les normes de l'industrie.
          </p>
        </div>

        {/* Explain card */}
        <div className="bg-[#015E7C]/10 border border-[#015E7C]/20 rounded-xl p-5 mb-6">
          <p className="text-sm text-[#0A3F52]">
            <strong>Comment lire ce tableau :</strong> chaque ligne compare un critère SEO entre l'ancien site WordPress et le nouveau site. Rouge = problème pénalisant. Orange = à améliorer. Vert = conforme aux standards Google.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-0 bg-[#0A3F52]">
            <div className="py-3.5 px-5 text-sm font-semibold text-white/70">Critère</div>
            <div className="py-3.5 px-5 border-l border-white/10">
              <span className="text-sm font-bold text-white">Ancien site</span>
              <span className="ml-2 text-xs text-white/60">collectiforducommun.org</span>
            </div>
            <div className="py-3.5 px-5 border-l border-white/10">
              <span className="text-sm font-bold text-[#FFCA00]">Nouveau site</span>
              <span className="ml-2 text-xs text-white/60">odc.vjacquet.fr</span>
            </div>
          </div>

          {criteria.map((c) => (
            <Row key={c.label} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
