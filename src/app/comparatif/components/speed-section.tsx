import { CwvBar } from "./score-bar";

// Mesures réseau réelles, curl --compressed, 3 échantillons par site, 2 juin 2026.
const realMetrics = [
  {
    label: "Temps de réponse serveur (TTFB)",
    oldVal: 1914,
    newVal: 369,
    unit: " ms",
    thresholds: [800, 1800] as [number, number],
    note: "Délai avant la première réponse du serveur",
  },
  {
    label: "Chargement HTML complet",
    oldVal: 2261,
    newVal: 369,
    unit: " ms",
    thresholds: [1000, 2500] as [number, number],
    note: "Temps de téléchargement de la page d'accueil",
  },
  {
    label: "Poids HTML transféré (gzip)",
    oldVal: 45.6,
    newVal: 18.2,
    unit: " Ko",
    thresholds: [30, 60] as [number, number],
    note: "Données envoyées pour afficher l'accueil",
  },
];

export function SpeedSection() {
  return (
    <section id="vitesse" className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#015E7C] mb-3">
            Vitesse mesurée
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A3F52]">
            Temps de réponse &amp; poids des pages
          </h2>
          <p className="mt-3 text-[#666666] max-w-2xl mx-auto">
            Mesures réelles faites en direct le 2 juin 2026 (3 relevés par site). La vitesse de réponse est un
            critère de classement Google et le premier facteur d&apos;abandon des visiteurs.
          </p>
        </div>

        {/* Comparatif serveurs */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase text-red-700 mb-1">Ancien site</p>
            <p className="text-[#0A3F52] font-semibold">Apache · PHP 8.0 · sans CDN</p>
            <p className="text-sm text-[#666666] mt-2">
              Chaque page est recalculée par le serveur à chaque visite, depuis un seul emplacement.
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase text-emerald-700 mb-1">Nouveau site</p>
            <p className="text-[#0A3F52] font-semibold">Cloudflare (CDN) devant Vercel</p>
            <p className="text-sm text-[#666666] mt-2">
              Pages pré-générées et servies depuis le réseau mondial Cloudflare, au plus près du visiteur.
            </p>
          </div>
        </div>

        {/* Mesures réelles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {realMetrics.map((m) => (
            <CwvBar
              key={m.label}
              label={m.label}
              oldVal={m.oldVal}
              newVal={m.newVal}
              unit={m.unit}
              thresholds={m.thresholds}
            />
          ))}
        </div>

        {/* Callout */}
        <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex gap-4 items-start">
          <span className="text-2xl">⚡</span>
          <div>
            <p className="font-semibold text-emerald-800">Réponse serveur : de 1,91 s à 0,37 s, soit environ 5 fois plus rapide</p>
            <p className="text-sm text-emerald-700 mt-1">
              L&apos;ancien serveur WordPress mettait près de 2 secondes avant d&apos;envoyer sa première réponse.
              Le nouveau site répond en 0,37 seconde. Google pénalise les pages lentes, et la moitié des visiteurs
              quittent un site qui met plus de 3 secondes à s&apos;afficher.
            </p>
          </div>
        </div>

        {/* Note honnête sur Lighthouse */}
        <div className="mt-6 bg-[#F5F7FA] border border-gray-200 rounded-xl p-5">
          <p className="text-sm text-[#666666]">
            <strong className="text-[#0A3F52]">Méthode :</strong> ces chiffres sont des mesures réseau directes
            (commande curl, 3 relevés par site), pas des estimations. Les scores Lighthouse sur 100 (Performance,
            Core Web Vitals officiels) ne figurent pas ici : l&apos;API publique Google PageSpeed a renvoyé un quota
            dépassé au moment de l&apos;analyse. Aucun score n&apos;a été inventé pour combler ce manque.
          </p>
        </div>
      </div>
    </section>
  );
}
