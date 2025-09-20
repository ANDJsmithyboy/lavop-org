# Guide de Résolution des Erreurs - La VOP

## 🚨 Erreur SQL: "policy already exists"

### Problème
```
ERROR: 42710: policy "Articles are viewable by everyone" for table "articles" already exists
```

### Solution
Exécutez le script `database/schema-update.sql` qui gère les politiques existantes :

1. **Aller sur Supabase Dashboard**
   - https://supabase.com/dashboard
   - Sélectionner votre projet
   - Aller dans SQL Editor

2. **Exécuter le script de mise à jour**
   - Copier le contenu de `database/schema-update.sql`
   - Coller dans SQL Editor
   - Cliquer sur "Run"

3. **Vérifier que tout fonctionne**
   - Exécuter `database/check-database.sql`
   - Vérifier que toutes les politiques sont créées

## 🔧 Autres Erreurs Courantes

### 1. **Erreur de Connexion Supabase**
```
Error: Invalid API key
```

**Solution :**
- Vérifier les clés dans `src/config/supabase.ts`
- Vérifier que le projet Supabase est actif
- Tester avec `node scripts/test-connection.js`

### 2. **Erreur de Permissions RLS**
```
Error: new row violates row-level security policy
```

**Solution :**
- Vérifier que l'utilisateur a le bon rôle
- Vérifier les politiques RLS
- Tester avec un utilisateur admin

### 3. **Erreur de Build**
```
Error: terser not found
```

**Solution :**
```bash
npm install --save-dev terser
npm run build
```

### 4. **Erreur de Variables d'Environnement**
```
Error: VITE_SUPABASE_URL is not defined
```

**Solution :**
- Créer le fichier `.env` à la racine
- Ajouter les variables d'environnement
- Redémarrer l'application

## 🧪 Tests de Validation

### 1. **Test de Connexion**
```bash
node scripts/test-connection.js
```

### 2. **Test de l'Application**
```bash
npm run dev
# Aller sur http://localhost:5173
# Tester le dashboard admin
```

### 3. **Test de Build**
```bash
npm run build
npm run start
```

## 📋 Checklist de Résolution

- [ ] Exécuter `database/schema-update.sql`
- [ ] Vérifier avec `database/check-database.sql`
- [ ] Tester la connexion avec `scripts/test-connection.js`
- [ ] Vérifier les variables d'environnement
- [ ] Tester l'application locale
- [ ] Tester le build de production
- [ ] Vérifier les permissions utilisateur

## 🆘 Support

Si les erreurs persistent :

1. **Vérifier les logs Supabase**
   - Dashboard > Logs
   - Identifier l'erreur exacte

2. **Tester avec un utilisateur admin**
   - Se connecter avec `jonathanakarentoutoume@gmail.com`
   - Vérifier les permissions

3. **Contacter le support**
   - Email : jonathanakarentoutoume@gmail.com
   - WhatsApp : +241 07 47 91 530

## 🔄 Scripts de Réparation

### Réinitialiser les Politiques
```sql
-- Exécuter dans Supabase SQL Editor
DROP POLICY IF EXISTS "Articles are viewable by everyone" ON articles;
-- ... (voir database/schema-update.sql)
```

### Réinitialiser les Données
```sql
-- ATTENTION: Supprime toutes les données
TRUNCATE TABLE articles, users, contacts, notifications, analytics;
-- Puis réexécuter les INSERT du script principal
```

### Vérifier l'État
```sql
-- Vérifier les tables et politiques
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
SELECT policyname FROM pg_policies WHERE schemaname = 'public';
```
