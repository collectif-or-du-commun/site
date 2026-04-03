import { Star } from "lucide-react";
import { GOOGLE_REVIEWS, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/content";

// Trie par priorité décroissante, affiche les 6 premiers
const displayedReviews = [...GOOGLE_REVIEWS]
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 6);

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

const GoogleLogo = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#4285F4" d="M47.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h13.1c-.6 3-2.3 5.5-4.8 7.2v6h7.8c4.6-4.2 7.4-10.5 7.4-17.5z"/>
    <path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.8l-7.8-6c-2.2 1.5-5 2.3-8.2 2.3-6.3 0-11.6-4.2-13.5-10H2.5v6.2C6.5 42.7 14.7 48 24 48z"/>
    <path fill="#FBBC05" d="M10.5 28.5c-.5-1.5-.8-3-.8-4.5s.3-3 .8-4.5V13.3H2.5C.9 16.5 0 20.1 0 24s.9 7.5 2.5 10.7l8-6.2z"/>
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.8-6.8C35.9 2.4 30.4 0 24 0 14.7 0 6.5 5.3 2.5 13.3l8 6.2C12.4 13.7 17.7 9.5 24 9.5z"/>
  </svg>
);

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
              <GoogleLogo size={28} />
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-playfair text-2xl font-bold text-bleu-dark leading-none">
                    {GOOGLE_RATING.toFixed(1).replace(".", ",")}
                  </span>
                  <StarRating count={5} size={13} />
                </div>
                <div className="text-xs text-gris mt-0.5">{GOOGLE_REVIEW_COUNT} avis Google</div>
              </div>
            </a>
          </div>
        </div>

        {/* Grille d'avis */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayedReviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${review.avatarColor}`}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-bleu-dark text-sm">{review.name}</div>
                    <div className="text-xs text-gris">{review.date}</div>
                  </div>
                </div>
                <GoogleLogo size={18} />
              </div>

              <StarRating count={review.rating} />

              <p className="text-sm text-gris leading-relaxed flex-1">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://g.co/kgs/collectif-or-du-commun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bleu hover:text-or transition-colors"
          >
            Voir tous les avis sur Google
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
