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

// ═══════════════════════════════════════════════════════
// AVIS GOOGLE — À mettre à jour chaque semaine
// Règles de priorité (priority) :
//   10 = mots-clés top : coworking, formation, tiers-lieu, Potenti'Elles,
//                        ORizon LAB, CPF, reconversion, accompagnement
//    8 = location de salle, atelier, Before-Week, communauté, Andolsheim
//    6 = avis positif générique sans mots-clés stratégiques
//    4 = avis 4 étoiles ou contenant des réserves
// Mettre à jour : GOOGLE_RATING, GOOGLE_REVIEW_COUNT, et le tableau GOOGLE_REVIEWS.
// Les 6 premiers par ordre de priority décroissante sont affichés.
// ═══════════════════════════════════════════════════════

export interface GoogleReview {
  name: string;
  avatar: string;
  avatarColor: string;
  rating: number;
  date: string;
  text: string;
  priority: number; // plus élevé = affiché en premier
}

export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 129;

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Vincent Vauthier",
    avatar: "VV",
    avatarColor: "bg-bleu text-white",
    rating: 5,
    date: "il y a 2 ans",
    text: "Or Du Commun est un espace de coworking. Un accueil chaleureux où l'écoute, l'entraide et la bienveillance sont des valeurs présentes dans ce lieu. On s'y sent bien et serein dès qu'on arrive. On y est fort bien accueilli. Un espace où on se sent chez soi, et en même temps ouvert sur de multiples champs des possibles ! On y rencontre des personnes aux profils très différents et disposées à l'échange et l'entraide. Un lieu dynamique, visionnaire et inspirant ouvert aux idées nouvelles.",
    priority: 10,
  },
  {
    name: "Sylvie Colin",
    avatar: "SC",
    avatarColor: "bg-or text-bleu-dark",
    rating: 5,
    date: "il y a 2 ans",
    text: "Collectif que j'ai découvert grâce à mon amie Marine. Ravie de ce qu'il s'y passe, des interactions diverses et variées. On se sent moins seule quand on est dans une phase entrepreneuriale. J'encourage vivement toutes les personnes qui créent leur entreprise à venir y trouver un lieu chaleureux. Espace de coworking et de formation, d'échange et d'écoute de bonnes pratiques.",
    priority: 10,
  },
  {
    name: "Olivier Garrabé",
    avatar: "OG",
    avatarColor: "bg-bleu-dark text-white",
    rating: 5,
    date: "il y a un an",
    text: "Je fréquente le collectif Or du Commun depuis quelques mois et je dois dire que je m'y sens accueilli par une équipe chaleureuse et professionnelle. Je me rends régulièrement aux Before Week du lundi matin, qui se trouve être un moment de rencontre, d'échange et d'animations thématiques, riches et ancrés dans les préoccupations actuelles. J'ai récemment utilisé les espaces de co-working : disponibles, fonctionnels et chaleureusement disposés. Sans oublier l'espace café, lieu de rencontre informel.",
    priority: 10,
  },
  {
    name: "Nathalie Bottemer",
    avatar: "NB",
    avatarColor: "bg-orange text-white",
    rating: 5,
    date: "il y a 2 ans",
    text: "Je suis maintenant une habituée de ce magnifique lieu et surtout des superbes actions qui y sont proposées dans une ambiance bienveillante et chaleureuse. Une fois de plus cet après-midi a été très enrichissante grâce au \"guichet ouvert\", une nouveauté qui permet de rencontrer les acteurs de la création d'entreprise dans un cadre presque intimiste et rassurant, et permet d'échanger en toute sérénité. C'est toujours un plaisir de venir !",
    priority: 10,
  },
  {
    name: "Anne Schmitt Bourgeois",
    avatar: "AS",
    avatarColor: "bg-bleu text-white",
    rating: 5,
    date: "il y a 2 ans",
    text: "Faire connaissance avec les personnes qui animent ou se retrouvent à Or du Commun m'apporte beaucoup de joie, de connaissances, de confiance, d'inspiration pour développer mon activité ! Je suis heureuse d'avoir osé découvrir ce lieu fabuleux et ressens une profonde gratitude envers chacune des belles âmes qui y partagent le meilleur d'elles-mêmes. On y trouve autant de compétences que de chaleur humaine authentique : c'est ça qui vaut de l'or à mes yeux.",
    priority: 9,
  },
];
