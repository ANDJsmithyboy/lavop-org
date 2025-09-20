# Guide Complet de la Boutique VOP

## 🛒 **Structure de la Boutique VOP**

### **Tous les produits sont sur Contrado/Chariow :**
- ✅ **T-shirts** - Collection VOPyouth, VOPsong, VOP Principal
- ✅ **Livres** - Le Coaching Ultime, L'Algorithme du Ciel, La Prophétie du Bitcoin
- ✅ **Dons** - Programmes par catégorie
- ✅ **Liens externes** - Livres chrétiens (Es-tu un Lion ou une Brebis ?)

## 📊 **Tables de la Base de Données**

### **1. Table `products`** - Tous les produits
- `name` - Nom du produit
- `type` - 'tshirt', 'livre', 'don', 'accessoire'
- `category` - 'vopyouth', 'vopsong', 'vop-principal', 'spirituel'
- `price` - Prix actuel
- `original_price` - Prix original (pour les promotions)
- `contrado_product_id` - ID du produit Contrado
- `contrado_url` - URL directe vers Contrado
- `external_url` - URL externe (pour livres chrétiens)
- `sizes` - Tailles disponibles
- `colors` - Couleurs disponibles
- `features` - Caractéristiques
- `author` - Auteur (pour les livres)
- `rating` - Note du produit
- `reviews_count` - Nombre d'avis

### **2. Table `external_links`** - Liens externes
- `title` - Titre du livre/ressource
- `url` - URL externe
- `type` - 'livre', 'ressource', 'partenaire', 'ministère'
- `author` - Auteur
- `publisher` - Éditeur
- `price` - Prix
- `featured` - Mise en avant

### **3. Table `programs`** - Programmes de don
- `name` - Nom du programme
- `contrado_url` - URL du don Contrado
- `target_amount` - Objectif de collecte
- `current_amount` - Montant collecté

## 🎯 **Produits Configurés**

### **T-shirts Contrado**
1. **T-shirt VOPyouth** - 38,95€
   - URL: `https://www.contrado.fr/stores/vop-shop/tshirt-vopyouth`
   - Tailles: S, M, L, XL, XXL
   - Couleurs: Blanc, Noir, Bleu

2. **T-shirt VOPsong** - 38,95€
   - URL: `https://www.contrado.fr/stores/vop-shop/tshirt-vopsong`
   - Tailles: S, M, L, XL, XXL
   - Couleurs: Blanc, Noir, Rouge

3. **T-shirt VOP Principal** - 38,95€
   - URL: `https://www.contrado.fr/stores/vop-shop/tshirt-vop-principal`
   - Tailles: S, M, L, XL, XXL
   - Couleurs: Blanc, Noir, Bleu marine

### **Livres Contrado**
1. **Le Coaching Ultime** - 10€ (promo de 25€)
   - URL: `https://www.contrado.fr/stores/vop-shop/le-coaching-ultime`
   - Auteur: ANDJ Daniel Jonathan
   - Format: PDF + ePub

2. **L'Algorithme du Ciel** - 40€ (À paraître)
   - URL: `https://www.contrado.fr/stores/vop-shop/l-algorithme-du-ciel`
   - Auteur: ANDJ Daniel Jonathan
   - Format: PDF + ePub

3. **La Prophétie du Bitcoin** - 45€ (À paraître)
   - URL: `https://www.contrado.fr/stores/vop-shop/la-prophetie-du-bitcoin`
   - Auteur: ANDJ Daniel Jonathan
   - Format: PDF + ePub

### **Liens Externes Chrétiens**
1. **Es-tu un Lion ou une Brebis ?** - 15€
   - URL: `https://example-christian-bookstore.com/es-tu-un-lion-ou-une-brebis`
   - Auteur: Auteur Chrétien
   - Éditeur: Éditions Chrétiennes

### **Programmes de Don Contrado**
1. **Don Libre** - Montant libre
   - URL: `https://www.contrado.fr/stores/vop-shop/don-libre`

2. **Don Programme Veuves** - Montant libre
   - URL: `https://www.contrado.fr/stores/vop-shop/don-programme-veuves`

3. **Don Programme Orphelins** - Montant libre
   - URL: `https://www.contrado.fr/stores/vop-shop/don-programme-orphelins`

4. **Don Programme Éducation** - Montant libre
   - URL: `https://www.contrado.fr/stores/vop-shop/don-programme-education`

## 🔧 **Configuration Technique**

### **1. Exécuter le Script SQL**
```sql
-- Utiliser database/schema-vop-complete.sql
-- Crée toutes les tables avec les produits VOP
```

### **2. Mettre à Jour les Liens**
```typescript
// Dans src/config/chariowLinks.ts
export const CHARIOW_LINKS = {
  BOUTIQUE_OFFICIELLE: 'https://www.contrado.fr/stores/vop-shop',
  
  // T-shirts
  TSHIRT_VOPYOUTH: 'https://www.contrado.fr/stores/vop-shop/tshirt-vopyouth',
  TSHIRT_VOPSONG: 'https://www.contrado.fr/stores/vop-shop/tshirt-vopsong',
  TSHIRT_VOP_PRINCIPAL: 'https://www.contrado.fr/stores/vop-shop/tshirt-vop-principal',
  
  // Livres
  LIVRE_COACHING_ULTIME: 'https://www.contrado.fr/stores/vop-shop/le-coaching-ultime',
  LIVRE_ALGORITHME_CIEL: 'https://www.contrado.fr/stores/vop-shop/l-algorithme-du-ciel',
  LIVRE_PROPHETIE_BITCOIN: 'https://www.contrado.fr/stores/vop-shop/la-prophetie-du-bitcoin',
  
  // Dons
  DON_LIBRE: 'https://www.contrado.fr/stores/vop-shop/don-libre',
  DON_VEUVES: 'https://www.contrado.fr/stores/vop-shop/don-programme-veuves',
  DON_ORPHELINS: 'https://www.contrado.fr/stores/vop-shop/don-programme-orphelins',
  DON_EDUCATION: 'https://www.contrado.fr/stores/vop-shop/don-programme-education',
  
  // Liens externes
  LIVRE_LION_BREBIS: 'https://example-christian-bookstore.com/es-tu-un-lion-ou-une-brebis'
};
```

## 📱 **Interface Admin Dashboard**

### **Section Boutique**
- 📦 **Gestion des produits** - T-shirts, livres, accessoires
- 🔗 **Liens externes** - Livres chrétiens, ressources
- 📊 **Statistiques de vente** - Suivi des commandes Contrado
- 🎯 **Programmes de don** - Suivi des collectes

### **Fonctionnalités Admin**
- ✅ **Ajouter des produits** - Nouveaux T-shirts, livres
- ✅ **Modifier les prix** - Promotions, réductions
- ✅ **Gérer les stocks** - Disponibilité, tailles
- ✅ **Suivre les ventes** - Rapports Contrado
- ✅ **Gérer les liens externes** - Livres chrétiens

## 🚀 **Avantages de l'Intégration Contrado**

### **Pour les T-shirts**
- ✅ **Impression à la demande** - Pas de stock
- ✅ **Personnalisation** - Logos, designs
- ✅ **Expédition mondiale** - Contrado gère tout
- ✅ **Qualité garantie** - Matériaux premium

### **Pour les Livres**
- ✅ **Format numérique** - PDF, ePub
- ✅ **Distribution instantanée** - Téléchargement immédiat
- ✅ **Protection DRM** - Sécurité des droits
- ✅ **Mise à jour facile** - Versions corrigées

### **Pour les Dons**
- ✅ **Paiement sécurisé** - Contrado gère les transactions
- ✅ **Suivi des collectes** - Montants par programme
- ✅ **Reçus automatiques** - Pour les donateurs
- ✅ **Rapports détaillés** - Analytics des dons

## 📊 **Rapports et Analytics**

### **Dashboard Admin**
- 📈 **Ventes par produit** - T-shirts, livres
- 💰 **Revenus totaux** - Dons + boutique
- 🎯 **Objectifs de collecte** - Programmes
- 👥 **Top produits** - Meilleures ventes

### **Rapports Contrado**
- 📋 **Commandes** - Liste des commandes
- 📊 **Statistiques** - Ventes, revenus
- 🚚 **Expédition** - Suivi des envois
- 💳 **Paiements** - Transactions

## ✅ **Checklist de Déploiement**

- [ ] Exécuter `database/schema-vop-complete.sql`
- [ ] Configurer les produits dans Contrado
- [ ] Tester tous les liens de la boutique
- [ ] Vérifier les prix et promotions
- [ ] Tester les commandes de test
- [ ] Configurer les rapports
- [ ] Former l'équipe admin
- [ ] Lancer la boutique

## 📞 **Support**

Pour toute question sur la boutique VOP :
- Email : jonathanakarentoutoume@gmail.com
- WhatsApp : +241 07 47 91 530
