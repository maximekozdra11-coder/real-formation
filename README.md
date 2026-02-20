# real-formation

Application PWA (Progressive Web App) – Real Formation.

## Prérequis

- [Node.js](https://nodejs.org/) v20.19.0 ou v22.12.0+
- npm v9 ou supérieur

## Installation

```bash
npm install
```

## Lancement en local

```bash
npm run dev
```

L'application est accessible sur [http://localhost:5173](http://localhost:5173).

## Build de production

```bash
npm run build
```

Les fichiers compilés sont générés dans le dossier `dist/`.

## Prévisualisation du build

```bash
npm run start
# ou
npm run preview
```

L'application est accessible sur [http://localhost:4173](http://localhost:4173).

## Variables d'environnement

Copier le fichier `.env.example` en `.env` et renseigner les valeurs si nécessaire :

```bash
cp .env.example .env
```

## Déploiement

### GitHub Pages

1. Construire l'application :
   ```bash
   npm run build
   ```
2. Déployer le contenu du dossier `dist/` sur GitHub Pages.
   Avec l'outil [gh-pages](https://www.npmjs.com/package/gh-pages) :
   ```bash
   npx gh-pages -d dist
   ```
   > **Note :** Si l'application n'est pas servie à la racine du domaine, configurer `base` dans `vite.config.js` :
   > ```js
   > export default { base: '/real-formation/' }
   > ```

### Autres plateformes

Le dossier `dist/` est un site statique déployable sur n'importe quelle plateforme (Netlify, Vercel, etc.) en pointant sur ce dossier comme répertoire de publication.