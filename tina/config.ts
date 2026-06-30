// ─────────────────────────────────────────────────────────────
// Configuration TinaCMS — PRÊTE À ACTIVER (pas encore branchée)
//
// Pour activer (à faire une fois) :
//   1. npm install tinacms @tinacms/cli
//   2. Créer un compte sur https://tina.io, connecter le dépôt GitHub,
//      récupérer NEXT_PUBLIC_TINA_CLIENT_ID et TINA_TOKEN
//   3. Mettre ces 2 clés dans les variables d'environnement Cloudflare Pages
//   4. Scripts package.json :
//        "dev":   "tinacms dev -c \"next dev\""
//        "build": "tinacms build && next build"
//   5. La cliente édite sur  <site>/admin
//
// Tina édite directement les fichiers du dossier /content. Le site, lui,
// lit ces mêmes fichiers via src/lib/content.ts. Les deux sont découplés :
// le build reste vert même sans Tina, Tina ne fait qu'ajouter l'interface.
// ─────────────────────────────────────────────────────────────
import { defineConfig } from "tinacms";

export default defineConfig({
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH ||
    process.env.CF_PAGES_BRANCH ||
    "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "images", publicFolder: "public" } },
  schema: {
    collections: [
      {
        name: "site",
        label: "Réglages du site",
        path: "content",
        format: "json",
        match: { include: "site" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "marquee",
            label: "Bandeau défilant",
            description: "Une ligne par message qui défile en haut du site.",
            list: true,
          },
          {
            type: "object",
            name: "contact",
            label: "Coordonnées",
            fields: [
              { type: "string", name: "adresse", label: "Adresse" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "telephone", label: "Téléphone" },
              { type: "string", name: "horaires", label: "Horaires d'ouverture" },
            ],
          },
        ],
      },
      {
        name: "agenda",
        label: "Agenda — Événements",
        path: "content",
        format: "json",
        match: { include: "agenda" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "events",
            label: "Événements",
            list: true,
            ui: {
              itemProps: (item: { title?: string }) => ({ label: item?.title || "Nouvel événement" }),
              defaultItem: { category: "evenement" },
            },
            fields: [
              { type: "string", name: "id", label: "Identifiant technique", description: "Sans espaces, ex: fete-ete-2026" },
              { type: "string", name: "title", label: "Titre", required: true },
              { type: "datetime", name: "date", label: "Date", required: true, ui: { dateFormat: "YYYY-MM-DD" } },
              { type: "string", name: "time", label: "Horaire", description: "ex: 14h–17h" },
              { type: "string", name: "location", label: "Lieu" },
              { type: "string", name: "category", label: "Catégorie", options: ["formation", "evenement", "atelier"] },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "registrationUrl", label: "Lien d'inscription", description: "Laisser vide si pas d'inscription" },
              { type: "number", name: "spots", label: "Places disponibles" },
            ],
          },
        ],
      },
      {
        name: "beforeWeek",
        label: "Réglage Before-Week",
        path: "content",
        format: "json",
        match: { include: "before-week" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "boolean", name: "actif", label: "Before-Week actif" },
          { type: "string", name: "heure", label: "Horaire", description: "ex: 9h–11h" },
          { type: "string", name: "lieu", label: "Lieu" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          {
            type: "string",
            name: "fermetures",
            label: "Dates de fermeture",
            description: "Format AAAA-MM-JJ. Les lundis listés ici n'apparaîtront pas dans l'agenda (vacances).",
            list: true,
          },
        ],
      },
      {
        name: "reviews",
        label: "Avis Google",
        path: "content",
        format: "json",
        match: { include: "reviews" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "number", name: "rating", label: "Note moyenne (sur 5)" },
          { type: "number", name: "count", label: "Nombre total d'avis Google" },
          {
            type: "object",
            name: "items",
            label: "Avis affichés",
            list: true,
            ui: { itemProps: (item: { name?: string }) => ({ label: item?.name || "Avis" }) },
            fields: [
              { type: "string", name: "name", label: "Nom" },
              { type: "string", name: "avatar", label: "Initiales", description: "ex: VV" },
              { type: "string", name: "avatarColor", label: "Couleur (classe CSS)" },
              { type: "number", name: "rating", label: "Note (1 à 5)" },
              { type: "string", name: "date", label: "Date affichée", description: "ex: il y a 2 ans" },
              { type: "string", name: "text", label: "Texte de l'avis", ui: { component: "textarea" } },
              { type: "number", name: "priority", label: "Priorité d'affichage", description: "Plus élevé = affiché en premier" },
            ],
          },
        ],
      },
    ],
  },
});
