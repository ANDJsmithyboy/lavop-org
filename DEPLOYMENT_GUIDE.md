# Guide de Déploiement VOP - Étape par Étape

## 🚨 **Solution à l'Erreur "relation 'programs' does not exist"**

### ❌ **Problème Identifié**
L'erreur vient du fait que le script essaie d'insérer des données dans des tables qui n'existent pas encore.

### ✅ **Solution en 2 Étapes**

## 📋 **Étape 1 : Créer les Tables**

### **1.1 Aller sur Supabase**
- Ouvrez https://supabase.com/dashboard
- Sélectionnez votre projet
- Allez dans **SQL Editor**

### **1.2 Exécuter le Script des Tables**
```sql
-- Copiez et exécutez database/schema-tables-only.sql
-- Ce script crée uniquement les tables sans les données
```

**Résultat attendu :** `Tables VOP créées avec succès!`

## 📋 **Étape 2 : Ajouter les Données**

### **2.1 Exécuter le Script des Données**
```sql
-- Copiez et exécutez database/insert-data.sql
-- Ce script ajoute toutes les données de la boutique VOP
```

**Résultat attendu :** `Données VOP insérées avec succès!`

## 🎯 **Tables Créées**

### **Tables Principales**
- ✅ `articles` - Articles du blog
- ✅ `users` - Utilisateurs admin
- ✅ `contacts` - Messages de contact
- ✅ `notifications` - Notifications admin
- ✅ `analytics` - Statistiques du site

### **Tables Boutique**
- ✅ `products` - T-shirts, livres, accessoires
- ✅ `external_links` - Livres chrétiens externes
- ✅ `programs` - Programmes de don Contrado

### **Tables ONG**
- ✅ `events` - Événements VOP
- ✅ `testimonials` - Témoignages
- ✅ `settings` - Paramètres du site
- ✅ `reports` - Rapports de transparence
- ✅ `volunteers` - Bénévoles

## 🛒 **Produits Configurés**

### **T-shirts Contrado**
1. **T-shirt VOPyouth** - 38,95€
2. **T-shirt VOPsong** - 38,95€
3. **T-shirt VOP Principal** - 38,95€

### **Livres Contrado**
1. **Le Coaching Ultime** - 10€ (promo de 25€)
2. **L'Algorithme du Ciel** - 40€ (À paraître)
3. **La Prophétie du Bitcoin** - 45€ (À paraître)

### **Liens Externes**
1. **Es-tu un Lion ou une Brebis ?** - 15€
2. **Ressources Spirituelles** - Gratuit

### **Programmes de Don**
1. **Don Libre** - Montant libre
2. **Don Programme Veuves** - Montant libre
3. **Don Programme Orphelins** - Montant libre
4. **Don Programme Éducation** - Montant libre

## 🔧 **Vérification**

### **3.1 Tester la Connexion**
- Ouvrez `test-vop-boutique.html` dans votre navigateur
- Vérifiez que toutes les tables sont créées
- Vérifiez que tous les produits sont listés

### **3.2 Tester l'Admin Dashboard**
- Allez sur `http://localhost:5173/admin`
- Connectez-vous avec :
  - Email : `jonathanakarentoutoume@gmail.com`
  - Mot de passe : `admin123`

## 🚀 **Déploiement en Production**

### **4.1 Variables d'Environnement**
```bash
# Dans .env
VITE_SUPABASE_URL=https://zfekgfupuzpnuixaqrsd.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZWtnZnVwdXpwbnVpeGFxcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMjQ1NDksImV4cCI6MjA3MzkwMDU0OX0.UF06Fiz4pw5N8MEnOlzrZynzyuwQTMMNLckwDBkgr3k
VITE_APP_NAME=La VOP
VITE_APP_URL=https://lavop.org
VITE_WHATSAPP_NUMBER=+241074791530
```

### **4.2 Build et Déploiement**
```bash
# Build de production
npm run build

# Test local
npm run start

# Déploiement Vercel
vercel --prod
```

## ✅ **Checklist de Déploiement**

- [ ] Exécuter `database/schema-tables-only.sql`
- [ ] Exécuter `database/insert-data.sql`
- [ ] Tester `test-vop-boutique.html`
- [ ] Tester l'admin dashboard
- [ ] Vérifier tous les liens Contrado
- [ ] Tester les formulaires de contact
- [ ] Vérifier la responsivité mobile
- [ ] Tester les dons et la boutique
- [ ] Configurer les variables d'environnement
- [ ] Déployer en production

## 🆘 **En Cas de Problème**

### **Erreur "relation does not exist"**
- Vérifiez que vous avez exécuté `schema-tables-only.sql` en premier
- Vérifiez que toutes les tables sont créées dans Supabase

### **Erreur de connexion**
- Vérifiez les clés API dans `.env`
- Vérifiez que le projet Supabase est actif

### **Produits non affichés**
- Vérifiez que `insert-data.sql` a été exécuté
- Vérifiez les données dans la table `products`

## 📞 **Support**

Pour toute question :
- Email : jonathanakarentoutoume@gmail.com
- WhatsApp : +241 07 47 91 530