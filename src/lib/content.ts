// ═══════════════════════════════════════════════════════
// COUCHE DE CONTENU
// Le contenu vit désormais dans des fichiers éditables par CMS (dossier /content) :
//  - /content/site.json        → bandeau défilant + coordonnées
//  - /content/agenda.json      → événements ponctuels de l'agenda
//  - /content/before-week.json → réglage du Before-week récurrent
//  - /content/reviews.json     → avis Google
// Ce fichier ne fait que lire ces données et exposer l'API utilisée par les pages.
// Ne pas remettre de contenu en dur ici : éditer les fichiers /content.
// ═══════════════════════════════════════════════════════

import site from "../../content/site.json";
import agenda from "../../content/agenda.json";
import beforeWeek from "../../content/before-week.json";
import reviews from "../../content/reviews.json";

export const MARQUEE_ITEMS: string[] = site.marquee;

export interface ContactInfo {
  adresse: string;
  email: string;
  telephone: string;
  horaires: string;
}
export const CONTACT: ContactInfo = site.contact;

export type EventCategory = "before-week" | "formation" | "evenement" | "atelier";

export interface Event {
  id: string;
  title: string;
  date: string; // format "YYYY-MM-DD"
  time?: string; // ex: "9h–11h"
  location: string;
  category: EventCategory;
  description: string;
  registrationUrl?: string; // lien inscription, laisser vide si pas encore ouvert
  spots?: number; // places disponibles, laisser vide si illimité
}

const MONTHS_FR = [
  "janvier","février","mars","avril","mai","juin",
  "juillet","août","septembre","octobre","novembre","décembre",
];

// Génère les Before-week à partir du réglage /content/before-week.json :
// tous les lundis, en sautant les dates de fermeture, si le réglage est actif.
export function generateBeforeWeekEvents(count = 10): Event[] {
  if (!beforeWeek.actif) return [];

  const closed = new Set<string>(beforeWeek.fermetures ?? []);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cursor = new Date(today);
  const dow = cursor.getDay(); // 0=dim, 1=lun...
  if (dow !== 1) {
    cursor.setDate(cursor.getDate() + (dow === 0 ? 1 : 8 - dow));
  }

  const events: Event[] = [];
  let guard = 0;
  while (events.length < count && guard < count * 4) {
    guard++;
    const y = cursor.getFullYear();
    const m = String(cursor.getMonth() + 1).padStart(2, "0");
    const d = String(cursor.getDate()).padStart(2, "0");
    const dateStr = `${y}-${m}-${d}`;
    cursor.setDate(cursor.getDate() + 7);
    if (closed.has(dateStr)) continue; // semaine de fermeture (vacances)
    const label = `${parseInt(d, 10)} ${MONTHS_FR[parseInt(m, 10) - 1]}`;
    events.push({
      id: `before-week-${dateStr}`,
      title: `Before-week — ${label}`,
      date: dateStr,
      time: beforeWeek.heure,
      location: beforeWeek.lieu,
      category: "before-week",
      description: beforeWeek.description,
    });
  }
  return events;
}

const STATIC_EVENTS = agenda.events as Event[];

export const EVENTS: Event[] = STATIC_EVENTS;

export function getAllEvents(): Event[] {
  return [...STATIC_EVENTS, ...generateBeforeWeekEvents(10)].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
}

export const CATEGORY_LABELS: Record<EventCategory, string> = {
  "before-week": "Before-week",
  "formation": "Formation",
  "evenement": "Événement",
  "atelier": "Atelier",
};

export const CATEGORY_COLORS: Record<EventCategory, string> = {
  "before-week": "bg-or/15 text-bleu-dark",
  "formation": "bg-bleu/10 text-bleu",
  "evenement": "bg-orange/15 text-orange",
  "atelier": "bg-bleu-dark/10 text-bleu-dark",
};

export interface GoogleReview {
  name: string;
  avatar: string;
  avatarColor: string;
  rating: number;
  date: string;
  text: string;
  priority: number; // plus élevé = affiché en premier
}

export const GOOGLE_RATING: number = reviews.rating;
export const GOOGLE_REVIEW_COUNT: number = reviews.count;
export const GOOGLE_REVIEWS: GoogleReview[] = reviews.items as GoogleReview[];
