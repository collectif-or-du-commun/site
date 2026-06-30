# Contenu éditable & TinaCMS

Le contenu qui bouge vit dans des fichiers du dossier `content/`. Le site lit ces
fichiers via `src/lib/content.ts`. TinaCMS (à activer) pose une interface no-code
par-dessus ces mêmes fichiers, sans toucher au code.

## Ce qui est éditable aujourd'hui

| Fichier | Contenu | Vu où |
|---|---|---|
| `content/site.json` | Bandeau défilant + coordonnées (adresse, tél, email, horaires) | Haut de page + footer |
| `content/agenda.json` | Événements ponctuels (formations, ateliers, fête) | Page Agenda |
| `content/before-week.json` | Réglage du Before-Week récurrent + dates de fermeture | Agenda + page Before-Week |
| `content/reviews.json` | Avis Google + note moyenne | Accueil |

Les Before-Week ne se saisissent pas un par un : ils sont générés automatiquement
tous les lundis à partir de `before-week.json`. Pour fermer une semaine (vacances),
ajouter la date du lundi dans `fermetures` (format `AAAA-MM-JJ`).

## Activer Tina (une seule fois)

```bash
npm install tinacms @tinacms/cli
```

1. Créer un compte sur https://tina.io, connecter le dépôt GitHub **du compte de la cliente**.
2. Récupérer `NEXT_PUBLIC_TINA_CLIENT_ID` et `TINA_TOKEN`.
3. Les coller dans les variables d'environnement **Cloudflare Pages**.
4. Mettre à jour `package.json` :
   ```json
   "dev":   "tinacms dev -c \"next dev\"",
   "build": "tinacms build && next build"
   ```
5. Ajouter `tina/__generated__` au `.gitignore`.

La cliente édite ensuite sur `<site>/admin`. Quand elle enregistre, Tina commit
sur GitHub, Cloudflare reconstruit et publie en 1 à 2 minutes.

La config des formulaires est déjà écrite dans `tina/config.ts`.

## Important

- Tant que Tina n'est pas activé, le site fonctionne normalement : il lit les
  fichiers `content/` directement. Le build reste vert sans Tina.
- Pour modifier un texte sans Tina : éditer le `.json` correspondant, commit, push.
- Le déploiement Cloudflare doit être **connecté au dépôt GitHub** (build auto sur
  push) pour que les modifs Tina partent en ligne toutes seules. Le mode `wrangler
  pages deploy` manuel actuel ne déclenche rien sur un commit Tina.
