# Configuration Supabase - La VOP

## 🔑 Où Mettre Vos Vraies Clés Supabase

### 1. **Fichier .env** (Local)
Créez un fichier `.env` à la racine du projet avec vos vraies clés :

```env
# Configuration Supabase
VITE_SUPABASE_URL=https://zfekgfupuzpnuixaqrsd.supabase.co
VITE_SUPABASE_ANON_KEY=VOTRE_VRAIE_CLE_ANON_ICI

# Configuration de l'application
VITE_APP_NAME=La VOP
VITE_APP_URL=https://lavop.org

# Configuration WhatsApp
VITE_WHATSAPP_NUMBER=+241074791530
```

### 2. **Fichier src/config/supabase.ts** (Déjà configuré)
Le fichier utilise déjà les variables d'environnement :
```typescript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zfekgfupuzpnuixaqrsd.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'VOTRE_CLE_DE_FALLBACK';
```

### 3. **Vercel Dashboard** (Production)
1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet
3. Allez dans Settings > Environment Variables
4. Ajoutez :
   - `VITE_SUPABASE_URL` = `https://zfekgfupuzpnuixaqrsd.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `VOTRE_VRAIE_CLE_ANON`

## 📊 Tables SQL Complètes

Le script `database/schema.sql` contient **TOUTES** les tables nécessaires pour une ONG :

### Tables Principales
- ✅ **articles** - Articles du blog
- ✅ **users** - Utilisateurs (Admin, Editor, etc.)
- ✅ **contacts** - Messages de contact
- ✅ **notifications** - Notifications système
- ✅ **analytics** - Statistiques et métriques

### Tables ONG Spécifiques
- ✅ **donations** - Gestion des dons
- ✅ **programs** - Programmes d'aide
- ✅ **events** - Événements et sorties
- ✅ **testimonials** - Témoignages
- ✅ **media_files** - Fichiers média

## 🚀 Étapes de Configuration

### 1. **Créer le Projet Supabase**
```bash
# 1. Aller sur https://supabase.com
# 2. Créer un compte
# 3. Créer un nouveau projet
# 4. Noter l'URL et la clé anon
```

### 2. **Exécuter le Script SQL**
```bash
# 1. Aller dans Supabase Dashboard
# 2. SQL Editor
# 3. Copier tout le contenu de database/schema.sql
# 4. Exécuter le script
```

### 3. **Tester la Connexion**
```bash
# Exécuter le script de test
node scripts/setup-database.js
```

### 4. **Configurer les Variables d'Environnement**
```bash
# Créer le fichier .env
cp env.example .env
# Éditer .env avec vos vraies clés
```

## 🔒 Sécurité Configurée

### Politiques RLS (Row Level Security)
- ✅ **Articles** : Lecture publique, écriture pour admins/éditeurs
- ✅ **Utilisateurs** : Lecture pour admins uniquement
- ✅ **Contacts** : Lecture pour admins, insertion publique
- ✅ **Dons** : Lecture pour admins, insertion publique
- ✅ **Programmes** : Lecture publique, écriture pour admins
- ✅ **Événements** : Lecture publique, écriture pour admins
- ✅ **Témoignages** : Lecture publique (approuvés), insertion publique

### Utilisateurs par Défaut
- ✅ **ANDJ Daniel Jonathan** (Admin) - `jonathanakarentoutoume@gmail.com`
- ✅ **Ludmilla Jaël** (Editor) - `ludmillantoutoume@gmail.com`

## 📱 Test de l'Application

### 1. **Développement Local**
```bash
npm run dev
# Aller sur http://localhost:5173
# Dashboard admin sur http://localhost:5173/admin
```

### 2. **Build de Production**
```bash
npm run build
npm run start
# Aller sur http://localhost:3000
```

### 3. **Déploiement Vercel**
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

## 🆘 Dépannage

### Problèmes Courants

1. **Erreur de connexion Supabase**
   ```bash
   # Vérifier les clés dans .env
   # Vérifier que le projet Supabase est actif
   # Tester la connexion
   ```

2. **Erreur de permissions**
   ```bash
   # Vérifier les politiques RLS
   # Vérifier le rôle de l'utilisateur
   # Tester avec un utilisateur admin
   ```

3. **Erreur de build**
   ```bash
   # Vérifier les variables d'environnement
   # Nettoyer le cache : npm run build -- --force
   # Vérifier les imports
   ```

## ✅ Checklist Complète

- [ ] Créer le projet Supabase
- [ ] Exécuter le script SQL complet
- [ ] Configurer les variables d'environnement
- [ ] Tester la connexion
- [ ] Tester le dashboard admin
- [ ] Vérifier la responsivité mobile
- [ ] Déployer en production
- [ ] Configurer le monitoring
- [ ] Tester en production

## 📞 Support

Pour toute question :
- Email : jonathanakarentoutoume@gmail.com
- WhatsApp : +241 07 47 91 530
