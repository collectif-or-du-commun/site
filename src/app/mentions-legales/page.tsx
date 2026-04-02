import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du Collectif Or du Commun, tiers-lieu associatif à Andolsheim (Haut-Rhin).",
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-white">
      <section className="bg-bleu-dark py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <h1 className="font-playfair text-3xl font-bold text-white md:text-4xl">
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[800px] px-6 space-y-10 text-gris leading-relaxed">

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Éditeur du site</h2>
            <p>
              <strong className="text-bleu-dark">Collectif Or du Commun</strong><br />
              Association loi 1901<br />
              4 Grand&apos;Rue, 68280 Andolsheim<br />
              Téléphone : 07 55 53 08 57<br />
              Email : contact@collectiforducommun.org
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Hébergement</h2>
            <p>
              Ce site est hébergé par <strong className="text-bleu-dark">Cloudflare, Inc.</strong><br />
              101 Townsend St, San Francisco, CA 94107, États-Unis<br />
              <a href="https://www.cloudflare.com" className="text-bleu underline hover:text-or transition-colors" target="_blank" rel="noopener noreferrer">www.cloudflare.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, graphismes) sont la propriété exclusive du Collectif Or du Commun ou de leurs auteurs respectifs. Toute reproduction, représentation ou diffusion, intégrale ou partielle, sans autorisation écrite préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Données personnelles</h2>
            <p>
              Ce site ne collecte aucune donnée personnelle sans votre consentement explicite. Le formulaire de contact est utilisé uniquement pour traiter vos demandes. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à contact@collectiforducommun.org.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies de tracking ou de publicité. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Liens externes</h2>
            <p>
              Ce site contient des liens vers des sites tiers. Le Collectif Or du Commun n&apos;est pas responsable du contenu de ces sites externes et ne saurait être tenu responsable des dommages résultant de leur utilisation.
            </p>
          </div>

          <p className="text-sm text-gris/70 pt-4 border-t border-gray-100">
            Dernière mise à jour : avril 2026
          </p>
        </div>
      </section>
    </main>
  );
}
