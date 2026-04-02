// ═══════════════════════════════════════════════════════
// FICHIER DE CONFIGURATION DU CONTENU
// Modifiez ce fichier pour mettre à jour :
//  - Le bandeau défilant (MARQUEE_ITEMS)
//  - Les événements de l'agenda (EVENTS)
// ═══════════════════════════════════════════════════════

export const MARQUEE_ITEMS = [
  "🎓 Certifié Qualiopi · Financement CPF et Pôle Emploi possible",
  "🗓 Before-Week : tous les lundis 9h–11h, accès libre et gratuit",
  "🌟 ORizon LAB · 20-28 ans · Prochaine session nov-déc 2026",
  "📍 4 Grand'Rue, 68280 Andolsheim — à 10 min de Colmar",
  "📞 07 55 53 08 57 · contact@collectiforducommun.org",
];

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

// Génère les Before-Week automatiquement depuis aujourd'hui
export function generateBeforeWeekEvents(count = 10): Event[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cursor = new Date(today);
  const dow = cursor.getDay(); // 0=dim, 1=lun...
  if (dow !== 1) {
    cursor.setDate(cursor.getDate() + (dow === 0 ? 1 : 8 - dow));
  }

  const events: Event[] = [];
  for (let i = 0; i < count; i++) {
    const y = cursor.getFullYear();
    const m = String(cursor.getMonth() + 1).padStart(2, "0");
    const d = String(cursor.getDate()).padStart(2, "0");
    const dateStr = `${y}-${m}-${d}`;
    const label = `${cursor.getDate()} ${MONTHS_FR[cursor.getMonth()]}`;
    events.push({
      id: `before-week-${dateStr}`,
      title: `Before-Week — ${label}`,
      date: dateStr,
      time: "9h–11h",
      location: "4 Grand'Rue, 68280 Andolsheim",
      category: "before-week",
      description: "Chaque lundi de 9h à 11h, venez travailler gratuitement et rencontrer la communauté. Accès libre, sans inscription.",
    });
    cursor.setDate(cursor.getDate() + 7);
  }
  return events;
}

// Événements statiques (hors Before-Week)
const STATIC_EVENTS: Event[] = [
  {
    id: "potentielles-2026-04",
    title: "Les Potenti'Elles — Session de printemps",
    date: "2026-04-14",
    time: "14h–17h",
    location: "Salle de formation, Andolsheim",
    category: "formation",
    description: "Programme d'accompagnement entrepreneurial au féminin. Réunion d'information pour la prochaine cohorte.",
    registrationUrl: "/contact",
    spots: 12,
  },
  {
    id: "fresque-energies-2026-04",
    title: "Atelier Fresque des Énergies",
    date: "2026-04-22",
    time: "9h–12h30",
    location: "Grande salle, Andolsheim",
    category: "atelier",
    description: "Atelier collaboratif pour comprendre les enjeux énergétiques de manière ludique et collective.",
    registrationUrl: "/contact",
    spots: 15,
  },
  {
    id: "orizon-lab-info-2026-05",
    title: "ORizon LAB — Réunion d'info",
    date: "2026-05-12",
    time: "18h–19h30",
    location: "Collectif Or du Commun, Andolsheim",
    category: "formation",
    description: "Présentation du programme ORizon LAB pour les 20–28 ans en projet professionnel.",
    registrationUrl: "/contact",
    spots: 20,
  },
  {
    id: "fete-communaute-2026-06",
    title: "Fête de la communauté — Été 2026",
    date: "2026-06-20",
    time: "17h–22h",
    location: "Jardin du Collectif, Andolsheim",
    category: "evenement",
    description: "La grande fête annuelle du Collectif ! Barbecue, musique live, et plein de surprises pour les membres et leurs familles.",
    spots: 100,
  },
];

// Exporte EVENTS pour compatibilité (= statiques seuls, sans Before-Week)
export const EVENTS = STATIC_EVENTS;

// Fusion statiques + Before-Week auto, triés par date
export function getAllEvents(): Event[] {
  return [...STATIC_EVENTS, ...generateBeforeWeekEvents(10)].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

// Helpers
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
  "before-week": "Before-Week",
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
