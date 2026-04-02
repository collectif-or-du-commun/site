import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marie-Laure B.",
    avatar: "ML",
    color: "bg-bleu text-white",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Un lieu vraiment humain. J'y ai suivi la formation Potenti'Elles et c'est l'une des meilleures décisions que j'ai prises pour ma reconversion. L'équipe est bienveillante et les autres participantes sont devenues des collègues.",
  },
  {
    name: "Thomas K.",
    avatar: "TK",
    color: "bg-orange text-white",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Coworking au top : fibre rapide, calme, café inclus et parking facile. Ce qui fait la différence c'est l'ambiance — on se retrouve à discuter avec des profils très variés. Impossible de se sentir isolé ici.",
  },
  {
    name: "Céline R.",
    avatar: "CR",
    color: "bg-or text-bleu-dark",
    rating: 5,
    date: "Il y a 6 semaines",
    text: "Nous avons loué la grande salle pour une formation d'équipe. Organisation impeccable, matériel en bon état, accueil chaleureux. Le jardin pour les pauses est un vrai plus. On reviendra sans hésiter.",
  },
  {
    name: "Julien M.",
    avatar: "JM",
    color: "bg-bleu-dark text-white",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Le programme ORizon LAB m'a aidé à clarifier mon projet professionnel à un moment où j'étais perdu. Pedagogy très bien pensée, formatrice à l'écoute. Je recommande à tous les jeunes qui cherchent leur voie.",
  },
  {
    name: "Aurélie W.",
    avatar: "AW",
    color: "bg-orange text-white",
    rating: 4,
    date: "Il y a 3 mois",
    text: "Tiers-lieu agréable et bien situé à 10 min de Colmar. La communauté est active, les événements réguliers. J'aurais aimé des horaires un peu plus étendus le soir mais pour le reste c'est vraiment bien.",
  },
  {
    name: "Franck D.",
    avatar: "FD",
    color: "bg-bleu text-white",
    rating: 5,
    date: "Il y a 4 mois",
    text: "Animateur de la Fresque des Énergies, j'ai utilisé les salles pour plusieurs sessions. Logistique parfaite, espace modulable, ambiance propice aux échanges. Idéal pour les ateliers participatifs.",
  },
];

function StarRating({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= count ? "fill-[#FBBC04] text-[#FBBC04]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-fond py-20 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header + badge Google */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-or mb-3">
              Avis vérifiés
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bleu">
              Ce que disent nos membres
            </h2>
          </div>

          {/* Badge Google */}
          <div className="flex-shrink-0">
            <a
              href="https://g.co/kgs/collectif-or-du-commun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir les avis Google"
              className="inline-flex items-center gap-4 rounded-2xl bg-white border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md transition-shadow"
            >
              {/* Logo Google */}
              <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#4285F4" d="M47.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h13.1c-.6 3-2.3 5.5-4.8 7.2v6h7.8c4.6-4.2 7.4-10.5 7.4-17.5z"/>
                <path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.8l-7.8-6c-2.2 1.5-5 2.3-8.2 2.3-6.3 0-11.6-4.2-13.5-10H2.5v6.2C6.5 42.7 14.7 48 24 48z"/>
                <path fill="#FBBC05" d="M10.5 28.5c-.5-1.5-.8-3-.8-4.5s.3-3 .8-4.5V13.3H2.5C.9 16.5 0 20.1 0 24s.9 7.5 2.5 10.7l8-6.2z"/>
                <path fill="#EA4335" d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.8-6.8C35.9 2.4 30.4 0 24 0 14.7 0 6.5 5.3 2.5 13.3l8 6.2C12.4 13.7 17.7 9.5 24 9.5z"/>
              </svg>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-playfair text-2xl font-bold text-bleu-dark leading-none">4,9</span>
                  <StarRating count={5} size={13} />
                </div>
                <div className="text-xs text-gris mt-0.5">43 avis Google</div>
              </div>
            </a>
          </div>
        </div>

        {/* Grille d'avis */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              {/* Header avis */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${review.color}`}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-bleu-dark text-sm">{review.name}</div>
                    <div className="text-xs text-gris">{review.date}</div>
                  </div>
                </div>
                <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true" className="opacity-70">
                  <path fill="#4285F4" d="M47.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h13.1c-.6 3-2.3 5.5-4.8 7.2v6h7.8c4.6-4.2 7.4-10.5 7.4-17.5z"/>
                  <path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.8l-7.8-6c-2.2 1.5-5 2.3-8.2 2.3-6.3 0-11.6-4.2-13.5-10H2.5v6.2C6.5 42.7 14.7 48 24 48z"/>
                  <path fill="#FBBC05" d="M10.5 28.5c-.5-1.5-.8-3-.8-4.5s.3-3 .8-4.5V13.3H2.5C.9 16.5 0 20.1 0 24s.9 7.5 2.5 10.7l8-6.2z"/>
                  <path fill="#EA4335" d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.8-6.8C35.9 2.4 30.4 0 24 0 14.7 0 6.5 5.3 2.5 13.3l8 6.2C12.4 13.7 17.7 9.5 24 9.5z"/>
                </svg>
              </div>

              <StarRating count={review.rating} />

              <p className="text-sm text-gris leading-relaxed flex-1">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA voir tous les avis */}
        <div className="mt-10 text-center">
          <a
            href="https://g.co/kgs/collectif-or-du-commun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bleu hover:text-or transition-colors"
          >
            Voir tous les avis sur Google
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
