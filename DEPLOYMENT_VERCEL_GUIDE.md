# 🚀 Guide de Déploiement Vercel - LA VOP

## ✅ Prérequis

1. **Compte Vercel** : Créez un compte sur [vercel.com](https://vercel.com)
2. **Vercel CLI** : Installez avec `npm install -g vercel`
3. **GitHub** : Connectez votre repository GitHub à Vercel

## 🔧 Configuration

### 1. Variables d'Environnement

Dans Vercel Dashboard, ajoutez ces variables :

```
VITE_SUPABASE_URL=https://zfekgfupuzpnuixaqrsd.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZWtnZnVwdXpwbnVpeGFxcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMjQ1NDksImV4cCI6MjA3MzkwMDU0OX0.UF06Fiz4pw5N8MEnOlzrZynzyuwQTMMNLckwDBkgr3k
VITE_APP_NAME=LA VOP
VITE_APP_URL=https://lavop.org
VITE_WHATSAPP_NUMBER=+24165515877
```

### 2. Configuration Build

- **Framework Preset** : Vite
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

## 🚀 Déploiement

### Option 1 : Via Vercel CLI

```bash
# 1. Build local
npm run build

# 2. Déploiement
vercel --prod

# 3. Suivre les instructions
```

### Option 2 : Via GitHub

1. **Connecter le repository** à Vercel
2. **Configurer les variables** d'environnement
3. **Déployer automatiquement** à chaque push

## 🔐 Sécurité

### Variables Sensibles (NE PAS PARTAGER)

Ces variables ne doivent JAMAIS être dans le code public :

```
# Admin credentials (gardés dans auth.ts)
ADMIN_EMAIL=jonathanakarentoutoume@gmail.com
ADMIN_PASSWORD=ANDJ&laVOP171222$
MODERATOR_EMAIL=ludmilla@lavop.org
MODERATOR_PASSWORD=sagesse2025
```

### Protection des Données

- ✅ Clés Supabase dans les variables d'environnement
- ✅ Mots de passe admin dans le code (auth.ts)
- ✅ Pas de .env dans le repository public
- ✅ Headers de sécurité configurés

## 📊 Monitoring

### Vercel Analytics

1. **Activer Vercel Analytics** dans le dashboard
2. **Surveiller les performances** et erreurs
3. **Configurer les alertes** si nécessaire

### Supabase Monitoring

1. **Dashboard Supabase** pour les requêtes
2. **Logs d'erreurs** dans la console
3. **Métriques de performance** des tables

## 🔄 Mise à Jour

### Processus de Mise à Jour

1. **Modifier le code** localement
2. **Tester** avec `npm run dev`
3. **Push** vers GitHub
4. **Vercel déploie automatiquement**

### Rollback

Si problème après déploiement :

1. **Vercel Dashboard** → Deployments
2. **Sélectionner** la version précédente
3. **Promouvoir** en production

## 🌐 Domaines

### Configuration DNS

1. **Ajouter le domaine** dans Vercel
2. **Configurer les DNS** :
   - A record → 76.76.19.61
   - CNAME www → cname.vercel-dns.com

### SSL/HTTPS

- ✅ **Automatique** avec Vercel
- ✅ **Renouvellement automatique**
- ✅ **A+ Rating** de sécurité

## 📱 PWA Configuration

### Service Worker

- ✅ **Caching** des assets statiques
- ✅ **Offline support** basique
- ✅ **Update notifications**

### Manifest

- ✅ **App name** : LA VOP
- ✅ **Icons** : Logo VOP
- ✅ **Theme** : Couleurs VOP

## 🚨 Troubleshooting

### Erreurs Communes

1. **Build Failed** : Vérifier les variables d'environnement
2. **404 Errors** : Vérifier les routes dans vercel.json
3. **Database Errors** : Vérifier les clés Supabase

### Support

- **Vercel Docs** : [vercel.com/docs](https://vercel.com/docs)
- **Supabase Docs** : [supabase.com/docs](https://supabase.com/docs)
- **LA VOP Support** : contact@lavop.org

## ✅ Checklist de Déploiement

- [ ] Variables d'environnement configurées
- [ ] Build local réussi
- [ ] Tests VOP AI fonctionnels
- [ ] Admin dashboard accessible
- [ ] Site principal responsive
- [ ] PWA installable
- [ ] SSL/HTTPS actif
- [ ] Monitoring configuré
- [ ] Backup des données
- [ ] Documentation mise à jour

---

**🎉 Félicitations ! LA VOP est maintenant en production sur Vercel !**
