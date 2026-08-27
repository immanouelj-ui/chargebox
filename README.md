# ⚡ Chargebox — Plateforme E-Commerce de Bornes de Recharge Électriques & IRVE

> Boutique en ligne professionnelle complète pour la vente de bornes de recharge pour véhicules électriques et accessoires certifiés IRVE.
> Mise en avant principale de **Teltonika Energy**, ainsi que Wallbox, V2C Trydan, Schneider Electric, Hager Witty et Legrand.

---

## 🚀 1. Prérequis

- **Node.js** : version `v18.18+` ou `v20+` / `v24+` (recommandé)
- **Gestionnaire de paquets** : `npm`, `pnpm` ou `yarn`
- **Base de données** : PostgreSQL (ou SQLite local pour test immédiat zéro config)
- **Compte Stripe** (facultatif en dev, clés de test incluses)

---

## 📦 2. Installation Rapide

```bash
# 1. Cloner ou accéder au répertoire du projet
cd chargebox

# 2. Installer les dépendances
npm install
```

---

## 🗄️ 3. Configuration de la Base de Données

Le projet est configuré par défaut avec Prisma ORM.

### Option A : Test Local Immédiat (Zéro config avec SQLite)
Le fichier `.env` fourni contient par défaut :
```env
DATABASE_URL="file:./dev.db"
```

### Option B : PostgreSQL (Recommandé pour la Production)
Dans le fichier `.env` et dans `prisma/schema.prisma` :
1. Remplacez le provider par `postgresql` dans `prisma/schema.prisma` :
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. Définissez votre chaîne de connexion PostgreSQL dans `.env` :
   ```env
   DATABASE_URL="postgresql://postgres:votre_mot_de_passe@localhost:5432/chargebox_db?schema=public"
   ```

---

## 🔑 4. Variables d'Environnement (`.env`)

Créez un fichier `.env` à la racine à partir de `.env.example` :

```env
# Base de données
DATABASE_URL="file:./dev.db"

# Authentification JWT sécurisée
NEXTAUTH_SECRET="chargebox-super-secret-jwt-key-2026-production-ev-secure"
NEXTAUTH_URL="http://localhost:3000"

# Clés Stripe (Test / Live)
STRIPE_SECRET_KEY="sk_test_51MockStripeSecretKeyChargeboxEV2026"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_51MockStripePubKeyChargeboxEV2026"
STRIPE_WEBHOOK_SECRET="whsec_mock_chargebox_webhook_secret"

# Site & Société
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_COMPANY_NAME="Chargebox SAS"
NEXT_PUBLIC_CONTACT_EMAIL="contact@chargebox.fr"
NEXT_PUBLIC_CONTACT_PHONE="+33 (0)1 89 71 45 20"
```

---

## ⚡ 5. Initialisation & Seed de la Base de Données

Exécutez les commandes suivantes pour générer le client Prisma, synchroniser le schéma et peupler le catalogue de bornes réalistes :

```bash
# Générer le client Prisma
npm run prisma:generate

# Synchroniser la base de données
npm run prisma:push

# Exécuter le seed avec les marques Teltonika, Wallbox, V2C, etc.
npm run seed
```

---

## 💻 6. Lancement du Serveur de Développement

```bash
npm run dev
```

L'application sera accessible sur : **`http://localhost:3000`**

---

## 👑 7. Comptes de Démonstration

Le script de seed initialise automatiquement les comptes suivants :

| Rôle | Email | Mot de passe | Accès |
| :--- | :--- | :--- | :--- |
| **Administrateur** | `admin@chargebox.fr` | `AdminChargebox2026!` | Back-office complet `/admin` |
| **Client Démo (B2C)** | `client.demo@chargebox.fr` | `Chargebox2026!` | Espace client `/mon-compte` |
| **Professionnel (B2B)** | `flotte@transport-pro.fr` | `Chargebox2026!` | Espace pro avec SIRET & TVA |

---

## 💳 8. Configuration de Stripe

1. Créez un compte sur [stripe.com](https://stripe.com).
2. Récupérez vos clés d'API (Publiable `pk_test_...` et Secrète `sk_test_...`) dans le tableau de bord Stripe développeurs.
3. Renseignez-les dans votre `.env`.
4. Pour écouter les webhooks en local :
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

---

## 🌐 9. Déploiement en Production (Vercel / Serveur VPS)

1. **Vercel** :
   - Connectez votre dépôt Git à Vercel.
   - Ajoutez les variables d'environnement dans les paramètres Vercel.
   - Définissez la commande de build : `npm run build`.

2. **Serveur VPS / Docker** :
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 10. Arborescence du Projet

```text
chargebox/
├── app/
│   ├── layout.tsx (Root Layout avec TopBanner, Header, Footer, CartDrawer)
│   ├── page.tsx (Page d'accueil avec Hero, Teltonika Spotlight, Marques, Produits)
│   ├── globals.css (Tailwind & custom styling)
│   ├── sitemap.ts & robots.ts (SEO Google)
│   ├── (shop)/
│   │   ├── produits/page.tsx (Catalogue avec filtres facettes & tri)
│   │   ├── produits/[slug]/page.tsx (Fiche Produit avec JSON-LD Schema.org)
│   │   ├── marques/page.tsx (Index des constructeurs partenaires)
│   │   ├── categories/page.tsx (Index des catégories de recharge)
│   │   ├── simulateur-borne/page.tsx (Simulateur interactif selon véhicule & logement)
│   │   ├── panier/page.tsx (Panier d'achat avec calculs TVA, codes promo & seuil gratuit)
│   │   └── checkout/ (Tunnel de commande B2C/B2B & confirmation)
│   ├── (client)/mon-compte/ (Espace client : commandes, factures, adresses, profil)
│   ├── (admin)/admin/ (Back-office : dashboard KPI, CRUD produits, gestion commandes)
│   ├── (legal)/ (Mentions légales, CGV, Confidentialité, Livraison, Retours, Contact)
│   └── api/ (Endpoints auth, checkout, products, webhooks, admin)
├── components/ (Composants modulaires et réutilisables UI / Layout / Home / Catalog / Product / Cart)
├── lib/ (Prisma singleton, Auth JWT/Bcrypt, Stripe, Store Zustand, Validations Zod, Utils)
├── prisma/ (Schéma complet & Seed réaliste)
├── public/ (Logo officiel SVG Chargebox, logos marques, visuels produits)
├── types/ (Interfaces TypeScript complètes)
└── package.json
```
