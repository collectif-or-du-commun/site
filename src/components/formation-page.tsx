import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import type { Formation } from "@/lib/formations";

function SectionHead({ eyebrow, titre }: { eyebrow: string; titre: string }) {
  return (
    <div className="mb-12 text-center">
      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-or mb-3">
        {eyebrow}
      </span>
      <h2 className="font-playfair text-3xl font-bold text-bleu md:text-4xl">{titre}</h2>
    </div>
  );
}

export function FormationPage({ f }: { f: Formation }) {
  const hasImage = Boolean(f.heroImage);

  return (
    <main>
      {/* Hero */}
      <section className={`${f.heroColor} py-20 lg:py-24`}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className={hasImage ? "grid items-center gap-12 lg:grid-cols-2" : "max-w-3xl"}>
            <div>
              <span className="mb-5 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
                {f.hero.eyebrow}
              </span>
              <h1 className="font-playfair text-4xl font-bold text-white md:text-5xl">
                {f.hero.titre}
              </h1>
              <p className="mt-5 max-w-lg text-lg text-white/80 leading-relaxed">
                {f.hero.accroche}
              </p>
              {f.hero.faits.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {f.hero.faits.map((fait) => (
                    <span
                      key={fait}
                      className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white"
                    >
                      {fait}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-or px-7 py-3.5 text-sm font-semibold text-bleu-dark hover:-translate-y-0.5 transition-all"
                >
                  Nous contacter <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:0755530857"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                >
                  <Phone className="h-4 w-4" /> 07 55 53 08 57
                </a>
              </div>
            </div>
            {hasImage && (
              <div className="relative">
                <Image
                  src={f.heroImage}
                  alt={f.hero.titre}
                  width={580}
                  height={440}
                  className="w-full rounded-2xl object-cover object-top shadow-xl"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      {f.pourQui.length > 0 && (
        <section className="bg-fond py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <SectionHead eyebrow="Pour qui ?" titre="À qui ça s'adresse" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {f.pourQui.map((p, i) => (
                <FadeIn key={p.titre} delay={i * 0.06}>
                  <div className="h-full rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-or/15 text-bleu">
                      <Check size={20} />
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-bleu">{p.titre}</h3>
                    <p className="mt-2 text-sm text-gris leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Programme */}
      {f.programme.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <SectionHead eyebrow="Le parcours" titre="Au programme" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {f.programme.map((p, i) => (
                <FadeIn key={p.titre} delay={(i % 3) * 0.06}>
                  <div className="h-full rounded-2xl bg-fond border border-gray-100 p-6">
                    <span className="font-playfair text-3xl font-bold text-or/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-playfair text-lg font-bold text-bleu">{p.titre}</h3>
                    <p className="mt-2 text-sm text-gris leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Résultats */}
      {f.resultats.length > 0 && (
        <section className="bg-bleu-dark py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto text-center">
              {f.resultats.map((r) => (
                <div key={r.label}>
                  <p className="font-playfair text-4xl lg:text-5xl font-bold text-or">{r.stat}</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Infos pratiques */}
      {f.infos.length > 0 && (
        <section className="bg-fond py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <SectionHead eyebrow="Informations pratiques" titre="Tout ce qu'il faut savoir" />
            <div className="mx-auto grid max-w-3xl gap-x-8 gap-y-5 sm:grid-cols-2">
              {f.infos.map((info) => (
                <div key={info.label} className="flex items-start gap-3 rounded-2xl bg-white border border-gray-100 p-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-or/15 text-bleu">
                    <Check size={15} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-bleu-dark">{info.label}</p>
                    <p className="mt-0.5 text-sm text-gris leading-relaxed">{info.valeur}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Témoignage */}
      {f.temoignage.citation && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <blockquote className="font-playfair text-xl md:text-2xl italic text-bleu leading-relaxed">
              &ldquo;{f.temoignage.citation}&rdquo;
            </blockquote>
            <footer className="mt-5 text-sm font-semibold text-gris">{f.temoignage.auteur}</footer>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-or py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-bleu-dark">{f.cta.titre}</h2>
          <p className="mt-4 mx-auto max-w-2xl text-bleu-dark/80 leading-relaxed">{f.cta.texte}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-bleu-dark px-8 py-3.5 font-semibold text-white hover:-translate-y-0.5 transition-all"
            >
              Nous contacter <ArrowRight size={16} />
            </Link>
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 rounded-lg border border-bleu-dark/30 px-8 py-3.5 font-semibold text-bleu-dark hover:bg-bleu-dark/10 transition-all"
            >
              Voir toutes les formations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
