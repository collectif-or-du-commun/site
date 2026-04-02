import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions générales d'utilisation du site du Collectif Or du Commun.",
};

export default function CguPage() {
  return (
    <main className="bg-white">
      <section className="bg-bleu-dark py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <h1 className="font-playfair text-3xl font-bold text-white md:text-4xl">
            Conditions générales d&apos;utilisation
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[800px] px-6 space-y-10 text-gris leading-relaxed">

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Objet</h2>
            <p>
              Les présentes conditions générales d&apos;utilisation régissent l&apos;accès et l&apos;utilisation du site internet du Collectif Or du Commun, accessible à l&apos;adresse <strong className="text-bleu-dark">odc.vjacquet.fr</strong>. En accédant à ce site, vous acceptez sans réserve les présentes CGU.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Accès au site</h2>
            <p>
              L&apos;accès au site est gratuit et ouvert à tout utilisateur disposant d&apos;un accès à internet. Le Collectif Or du Commun se réserve le droit de modifier, suspendre ou interrompre l&apos;accès au site à tout moment, sans préavis.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Utilisation du site</h2>
            <p>
              L&apos;utilisateur s&apos;engage à utiliser le site conformément aux lois en vigueur et aux présentes CGU. Il est notamment interdit de :
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Diffuser des contenus illicites, injurieux ou portant atteinte aux droits de tiers</li>
              <li>Tenter de perturber le fonctionnement du site ou de ses serveurs</li>
              <li>Collecter des données personnelles d&apos;autres utilisateurs sans leur consentement</li>
              <li>Reproduire tout ou partie du site sans autorisation préalable</li>
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Responsabilité</h2>
            <p>
              Le Collectif Or du Commun s&apos;efforce de maintenir les informations publiées sur le site aussi précises et à jour que possible. Cependant, il ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées. L&apos;utilisation des informations disponibles sur le site se fait sous la seule responsabilité de l&apos;utilisateur.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Droit applicable</h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux compétents du ressort de Colmar (Haut-Rhin) seront seuls compétents.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-bleu mb-4">Contact</h2>
            <p>
              Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l&apos;adresse : contact@collectiforducommun.org
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
