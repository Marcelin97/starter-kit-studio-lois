# 🍾 Starter Kit

Ce projet est un **Starter Kit** conçu par Studio Lois. Il sert de base solide et standardisée pour le développement de projets clients, intégrant les meilleures pratiques modernes et une stack technique robuste.

Ceci est un projet [Next.js](https://nextjs.org) boostrapé avec [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Démarrage Rapide

### Configuration Locale

1. **Installer les dépendances :**
   ```bash
   pnpm install
   ```

2. **Configurer les variables d'environnement :**
   Copiez le fichier `.env.development` (ou créez un fichier `.env.local`) et ajustez-le si nécessaire.

3. **Préparer la base de données :**
   ```bash
   pnpm exec prisma db push
   pnpm exec prisma db seed
   ```

4. **Lancer le serveur de développement :**
   ```bash
   pnpm dev
   ```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

---

## 🐳 Développement avec Docker

Le projet propose des configurations Docker pour différents environnements via des scripts pnpm.

### Environnement de Développement (Hot Reload)
```bash
# Lancer l'environnement
pnpm docker:up

# Voir les logs
pnpm docker:logs

# Arrêter les conteneurs
pnpm docker:down
```

### Environnement de Staging
```bash
pnpm docker:up:staging
```

### Environnement de Production
```bash
pnpm docker:up:prod
```

---

## 🗄️ Base de données (Prisma)

Le projet utilise Prisma comme ORM. Voici les commandes essentielles :

- **Synchroniser le schéma** (sans migration) : `pnpm exec prisma db push`
- **Peupler la base de données** : `pnpm exec prisma db seed`
- **Ouvrir l'interface Prisma Studio** : `pnpm db:studio`
- **Générer le client Prisma** : `pnpm exec prisma generate`

---

## 🔄 CI/CD

Le projet intègre un pipeline CI/CD complet via **GitHub Actions** pour garantir la qualité et automatiser les déploiements :

- **Build** : Vérification de la compilation Next.js.
- **Analyse de Qualité** : 
  - **ESLint** pour le linting.
  - **Prettier** pour le formatage.
  - **TypeScript** pour la vérification des types.
  - **Jest** pour les tests unitaires.
  - **SonarCloud** pour l'analyse statique du code (sécurité, bugs, maintainabilité).
- **Déploiement** : Déploiement automatisé selon les branches (Develop, Staging, Master).

---

## 🌿 Flux de Travail Git (Branches)

Nous suivons un modèle de gestion de branches structuré :

- **`master`** : Branche de production. Reflète l'état actuel en production. Seuls les merges de `staging` ou les hotfix y sont autorisés.
- **`staging`** : Branche de pré-production. Utilisée pour les tests finaux avant déploiement.
- **`develop`** : Branche principale de développement. Toutes les nouvelles fonctionnalités y sont fusionnées.
- **`feature/*`** : Branches de fonctionnalités. Créées à partir de `develop` (ex: `feature/user-auth`). Une fois terminée, une PR est ouverte vers `develop`.

---

## 🛠️ Autres commandes utiles

- **Linting** : `pnpm lint`
- **Formatage** : `pnpm format` (Prettier)
- **Tests** : `pnpm test`
- **Nettoyage Docker** :
  ```bash
  # Nettoyer les volumes et images inutilisés
  docker system prune -af --volumes
  ```
