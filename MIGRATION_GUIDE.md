# Guide de Migration - localStorage vers Supabase

## 🔄 Migration des Données

### 1. **Exécuter le Script SQL**
```bash
# 1. Aller sur https://supabase.com/dashboard
# 2. Sélectionner votre projet
# 3. Aller dans SQL Editor
# 4. Copier et exécuter le contenu de database/schema.sql
```

### 2. **Tester la Connexion**
```bash
# Exécuter le script de test
node scripts/setup-database.js
```

### 3. **Migrer les Données Existantes**

#### Articles
```javascript
// Dans la console du navigateur (admin dashboard)
const articles = JSON.parse(localStorage.getItem('vop_articles') || '[]');
articles.forEach(async (article) => {
  await supabase.from('articles').insert(article);
});
```

#### Utilisateurs
```javascript
const users = JSON.parse(localStorage.getItem('vop_users') || '[]');
users.forEach(async (user) => {
  await supabase.from('users').insert(user);
});
```

#### Contacts
```javascript
const contacts = JSON.parse(localStorage.getItem('vop_contacts') || '[]');
contacts.forEach(async (contact) => {
  await supabase.from('contacts').insert(contact);
});
```

## 🔧 Configuration du Dashboard Admin

### 1. **Remplacer useDatabase par useSupabase**
```typescript
// Dans AdminDashboard.tsx
import { useSupabase } from '../hooks/useSupabase';

const {
  getArticles,
  addArticle,
  updateArticle,
  deleteArticle,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  getContacts,
  addContact,
  updateContact,
  getNotifications,
  addNotification,
  getAnalytics,
  updateAnalytics
} = useSupabase();
```

### 2. **Adapter les Fonctions**
```typescript
// Exemple pour les articles
const handleSaveArticle = async () => {
  if (editingArticle) {
    await updateArticle(editingArticle.id, newArticle);
  } else {
    await addArticle({
      ...newArticle,
      views: 0,
      likes: 0,
      comments: 0,
      date: new Date().toISOString().split('T')[0]
    });
  }
  setIsEditing(false);
  setEditingArticle(null);
  setNewArticle({ title: '', excerpt: '', content: '', author: 'ANDJ Daniel Jonathan', category: '', image: '', published: false, featured: false });
};
```

## 📱 Test de l'Application

### 1. **Démarrer l'Application**
```bash
npm run dev
```

### 2. **Tester le Dashboard Admin**
- Aller sur http://localhost:5173/admin
- Se connecter avec les identifiants par défaut
- Tester la création/modification d'articles
- Vérifier la réception des contacts

### 3. **Tester la Responsivité Mobile**
- Utiliser les outils de développement
- Tester sur différentes tailles d'écran
- Vérifier la navigation tactile

## 🚀 Déploiement

### 1. **Build de Production**
```bash
npm run build
```

### 2. **Test Local**
```bash
npm run start
```

### 3. **Déploiement sur Vercel**
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

## 🔒 Sécurité

### 1. **Politiques RLS**
Les politiques sont déjà configurées dans le script SQL :
- Articles : Lecture publique, écriture pour admins/éditeurs
- Utilisateurs : Lecture pour admins uniquement
- Contacts : Lecture pour admins, insertion publique
- Notifications : Lecture pour admins uniquement

### 2. **Variables d'Environnement**
```env
VITE_SUPABASE_URL=https://zfekgfupuzpnuixaqrsd.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 📊 Monitoring

### 1. **Supabase Dashboard**
- Surveiller les requêtes
- Vérifier les logs
- Analyser les performances

### 2. **Vercel Analytics**
- Suivre les visites
- Analyser les erreurs
- Optimiser les performances

## 🆘 Dépannage

### Problèmes Courants

1. **Erreur de connexion Supabase**
   - Vérifier les clés API
   - Vérifier les politiques RLS
   - Tester la connexion

2. **Erreur de build**
   - Vérifier les variables d'environnement
   - Nettoyer le cache : `npm run build -- --force`
   - Vérifier les imports

3. **Problème de déploiement**
   - Vérifier les variables d'environnement sur Vercel
   - Vérifier les logs de déploiement
   - Tester localement

## ✅ Checklist de Migration

- [ ] Exécuter le script SQL dans Supabase
- [ ] Tester la connexion à la base de données
- [ ] Migrer les données existantes
- [ ] Adapter le code pour utiliser Supabase
- [ ] Tester toutes les fonctionnalités
- [ ] Vérifier la responsivité mobile
- [ ] Déployer en production
- [ ] Configurer le monitoring
- [ ] Tester en production
- [ ] Documenter les changements
