# 🤖 AIBusiness - Plateforme de Vente de Produits IA

Une plateforme complète de e-commerce pour vendre des produits et services d'Intelligence Artificielle.

## ✨ Fonctionnalités

- 🌐 Site Web moderne et responsive
- 🤖 Chatbot IA intégré
- 💳 Paiement avec Stripe et PayPal
- 📦 Gestion de produits
- 🛒 Panier d'achat
- 📞 Formulaire de contact
- 🎨 Design professionnel avec Tailwind CSS

## 🛠️ Technologies utilisées

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Paiements**: Stripe, PayPal
- **Base de données**: PostgreSQL (optional)
- **IA**: OpenAI API (optional pour chatbot avancé)

## 📋 Installation

### 1. Cloner le repository
```bash
git clone https://github.com/kamounael817-code/AIBusiness.git
cd AIBusiness
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration des variables d'environnement

Créez un fichier `.env.local` et configurez :

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# PayPal
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=...
PAYPAL_SECRET=...

# OpenAI (pour chatbot avancé)
NEXT_PUBLIC_OPENAI_API_KEY=sk-...

# URL publique
NEXT_PUBLIC_URL=http://localhost:3000
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```

Ouvert http://localhost:3000 dans votre navigateur.

## 📁 Structure du projet

```
AIBusiness/
├── pages/
│   ├── api/
│   │   └── payment/       # APIs de paiement
│   │   └── chatbot.ts     # API Chatbot
│   ├── index.tsx          # Page d'accueil
│   ├── products.tsx       # Page produits
│   ├── cart.tsx           # Page panier
│   ├── contact.tsx        # Page contact
│   ├── _app.tsx           # App wrapper
│   └── _document.tsx      # Document HTML
├── styles/
│   └── globals.css        # Styles globaux
├── public/                # Fichiers statiques
├── package.json
└── tsconfig.json
```

## 🚀 Déploiement

### Déployer sur Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Déployer sur Netlify

```bash
npm run build
# Puis uploader le dossier .next sur Netlify
```

## 💳 Configuration Stripe

1. Créer un compte sur [stripe.com](https://stripe.com)
2. Copier les clés API
3. Les ajouter au fichier `.env.local`

## 💰 Configuration PayPal

1. Créer un compte sur [developer.paypal.com](https://developer.paypal.com)
2. Créer une application
3. Copier les credentials
4. Les ajouter au fichier `.env.local`

## 🤖 Configuration Chatbot IA

Pour activer un chatbot IA avancé :

1. Créer un compte sur [openai.com](https://openai.com)
2. Générer une API key
3. L'ajouter au fichier `.env.local`
4. Modifier `pages/api/chatbot.ts` pour utiliser OpenAI

## 📞 Support

Pour toute question ou problème, visitez notre page de contact.

## 📄 Licence

MIT

## 👨‍💻 Auteur

kamounael817-code

---

**Créé avec ❤️ pour votre business IA en ligne**
