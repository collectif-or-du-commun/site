// Contenu des formations, externalisé dans /content/formations.json (éditable / CMS-ready).
// Synthétisé fidèlement depuis les templates de la cliente + le site d'origine + le flyer.
import data from "../../content/formations.json";

export interface PourQui {
  titre: string;
  desc: string;
}
export interface ProgrammeItem {
  titre: string;
  desc: string;
}
export interface Resultat {
  stat: string;
  label: string;
}
export interface InfoPratique {
  label: string;
  valeur: string;
}
export interface Temoignage {
  citation: string;
  auteur: string;
}
export interface FormationCta {
  titre: string;
  texte: string;
}
export interface FormationHero {
  eyebrow: string;
  titre: string;
  accroche: string;
  faits: string[];
}
export interface Formation {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroColor: string;
  heroImage: string;
  hero: FormationHero;
  pourQui: PourQui[];
  programme: ProgrammeItem[];
  resultats: Resultat[];
  infos: InfoPratique[];
  temoignage: Temoignage;
  cta: FormationCta;
}

export const FORMATIONS = data as Formation[];

export function getFormation(slug: string): Formation {
  const f = FORMATIONS.find((x) => x.slug === slug);
  if (!f) throw new Error(`Formation introuvable : ${slug}`);
  return f;
}
