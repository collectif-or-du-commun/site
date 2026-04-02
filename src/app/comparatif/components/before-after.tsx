const criteria = [
  {
    icon: "🔍",
    label: "Score SEO global",
    old: { value: "44/100", color: "text-red-500", note: "Critique" },
    new: { value: "76/100", color: "text-emerald-600", note: "Bon" },
  },
  {
    icon: "📄",
    label: "Pages indexables",
    old: { value: "11 / 15", color: "text-amber-500", note: "3 pages bloquées" },
    new: { value: "19 / 21", color: "text-emerald-600", note: "Couverture complète" },
  },
  {
    icon: "🏷️",
    label: "Titres uniques (title tag)",
    old: { value: "9 / 15", color: "text-amber-500", note: "Doublons présents" },
    new: { value: "21 / 21", color: "text-emerald-600", note: "100% uniques" },
  },
  {
    icon: "📝",
    label: "Meta descriptions",
    old: { value: "0 / 15", color: "text-red-500", note: "Aucune meta description" },
    new: { value: "21 / 21", color: "text-emerald-600", note: "100% de couverture" },
  },
  {
    icon: "🖼️",
    label: "Images avec attribut alt",
    old: { value: "0 / 39", color: "text-red-500", note: "39 images muettes" },
    new: { value: "19 / 19", color: "text-emerald-600", note: "Toutes renseignées" },
  },
  {
    icon: "🔗",
    label: "Maillage interne",
    old: { value: "62 liens", color: "text-amber-500", note: "3 pages orphelines" },
    new: { value: "180 liens", color: "text-emerald-600", note: "0 page orpheline" },
  },
  {
    icon: "🗺️",
    label: "Sitemap XML",
    old: { value: "Partiel", color: "text-amber-500", note: "Score 55/100" },
    new: { value: "Complet", color: "text-emerald-600", note: "Score 95/100" },
  },
  {
    icon: "📊",
    label: "Données structurées",
    old: { value: "1 schéma", color: "text-amber-500", note: "WebSite générique" },
    new: { value: "1 schéma", color: "text-emerald-600", note: "LocalBusiness ciblé" },
  },
  {
    icon: "🤖",
    label: "Open Graph (réseaux sociaux)",
    old: { value: "0 / 15", color: "text-red-500", note: "Aucun tag social" },
    new: { value: "21 / 21", color: "text-emerald-600", note: "100% de couverture" },
  },
  {
    icon: "📍",
    label: "Visibilité locale (GEO)",
    old: { value: "10/100", color: "text-red-500", note: "Non optimisé" },
    new: { value: "45/100", color: "text-amber-500", note: "En progression" },
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
