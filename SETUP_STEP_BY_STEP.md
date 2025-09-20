# Configuration Étape par Étape - La VOP

## 🚨 Erreur: "relation 'donations' does not exist"

### Problème
L'erreur indique que la table `donations` n'existe pas encore. Il faut d'abord créer toutes les tables avant de créer les politiques.

### Solution Complète

## 📋 Étape 1: Exécuter le Script Complet

1. **Aller sur Supabase Dashboard**
   - https://supabase.com/dashboard
   - Sélectionner votre projet
   - Aller dans SQL Editor

2. **Exécuter le script complet**
   - Copier tout le contenu de `database/schema-complete.sql`
   - Coller dans SQL Editor
   - Cliquer sur "Run"

3. **Vérifier que tout fonctionne**
   - Exécuter `database/verify-setup.sql`
   - Vérifier que toutes les tables et politiques sont créées

## 🔍 Étape 2: Vérification

### Vérifier les Tables
Le script `verify-setup.sql` vous montrera :
- ✅ Toutes les tables créées
- ✅ Toutes les politiques RLS
- ✅ Utilisateurs par défaut
- ✅ Données analytics
- ✅ Notifications
- ✅ Compteurs par table

### Vérifier la Connexion
1. Ouvrir `test-supabase.html` dans votre navigateur
2. Vérifier que la connexion fonctionne
3. Vérifier que les utilisateurs sont trouvés

## 🚀 Étape 3: Tester l'Application

### Développement Local
```bash
npm run dev
# Aller sur http://localhost:5173
# Dashboard admin sur http://localhost:5173/admin
```

### Test de Build
```bash
npm run build
npm run start
# Aller sur http://localhost:3000
```

## 📊 Étape 4: Vérifier le Dashboard Admin

1. **Se connecter**
   - Email: `jonathanakarentoutoume@gmail.com`
   - Mot de passe: (selon votre configuration)

2. **Tester les fonctionnalités**
   - Créer un article
   - Vérifier les contacts
   - Vérifier les analytics
   - Tester la responsivité mobile

## 🔧 Étape 5: Configuration des Variables d'Environnement

### Fichier .env (Local)
Créer un fichier `.env` à la racine :
```env
VITE_SUPABASE_URL=https://zfekgfupuzpnuixaqrsd.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZWtnZnVwdXpwbnVpeGFxcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMjQ1NDksImV4cCI6MjA3MzkwMDU0OX0.UF06Fiz4pw5N8MEnOlzrZynzyuwQTMMNLckwDBkgr3k
VITE_APP_NAME=La VOP
VITE_APP_URL=https://lavop.org
VITE_WHATSAPP_NUMBER=+241074791530
```

### Vercel (Production)
1. Aller sur https://vercel.com/dashboard
2. Sélectionner votre projet
3. Settings > Environment Variables
4. Ajouter les mêmes variables

## ✅ Checklist de Validation

- [ ] Exécuter `database/schema-complete.sql`
- [ ] Vérifier avec `database/verify-setup.sql`
- [ ] Tester la connexion avec `test-supabase.html`
- [ ] Créer le fichier `.env`
- [ ] Tester l'application locale
- [ ] Tester le dashboard admin
- [ ] Vérifier la responsivité mobile
- [ ] Tester le build de production
- [ ] Configurer les variables Vercel
- [ ] Déployer en production

## 🆘 Dépannage

### Si l'erreur persiste
1. **Vérifier les logs Supabase**
   - Dashboard > Logs
   - Identifier l'erreur exacte

2. **Réinitialiser complètement**
   ```sql
   -- ATTENTION: Supprime toutes les données
   DROP SCHEMA public CASCADE;
   CREATE SCHEMA public;
   -- Puis réexécuter schema-complete.sql
   ```

3. **Contacter le support**
   - Email: jonathanakarentoutoume@gmail.com
   - WhatsApp: +241 07 47 91 530

## 🎯 Résultat Attendu

Après ces étapes, vous devriez avoir :
- ✅ Base de données complète avec toutes les tables
- ✅ Politiques RLS configurées
- ✅ Utilisateurs par défaut créés
- ✅ Données de test insérées
- ✅ Application fonctionnelle
- ✅ Dashboard admin opérationnel
- ✅ Site prêt pour la production
