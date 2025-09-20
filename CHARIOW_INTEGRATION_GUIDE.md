# Guide d'Intégration Chariow - La VOP

## 🎯 Configuration Chariow pour les Dons

### ❌ **Pas de Stripe/PayPal**
Votre site utilise **Chariow** pour tous les dons et achats, pas de paiement direct.

### ✅ **Structure des Dons Chariow**

#### 1. **Table `programs`** (Programmes de dons)
- `chariow_product_id` - ID du produit Chariow
- `chariow_url` - URL directe vers le produit Chariow
- `target_amount` - Objectif de collecte
- `current_amount` - Montant collecté

#### 2. **Table `chariow_orders`** (Suivi des commandes)
- `order_id` - ID de la commande Chariow
- `product_name` - Nom du produit/don
- `product_type` - 'don', 'boutique', 'livre'
- `amount` - Montant de la commande
- `program_id` - Lien vers le programme

## 🔗 Configuration des Liens Chariow

### **Produits de Don à Créer dans Chariow**

1. **Don Libre** - `https://www.contrado.fr/stores/vop-shop/don-libre`
2. **Don Programme Veuves** - `https://www.contrado.fr/stores/vop-shop/don-programme-veuves`
3. **Don Programme Orphelins** - `https://www.contrado.fr/stores/vop-shop/don-programme-orphelins`
4. **Don Programme Éducation** - `https://www.contrado.fr/stores/vop-shop/don-programme-education`

### **Produits Boutique**
1. **T-shirt VOPyouth** - `https://www.contrado.fr/stores/vop-shop/tshirt-vopyouth`
2. **T-shirt VOPsong** - `https://www.contrado.fr/stores/vop-shop/tshirt-vopsong`
3. **T-shirt VOP Principal** - `https://www.contrado.fr/stores/vop-shop/tshirt-vop-principal`

### **Livres**
1. **Le Coaching Ultime** - `https://www.contrado.fr/stores/vop-shop/le-coaching-ultime`
2. **L'Algorithme du Ciel** - `https://www.contrado.fr/stores/vop-shop/l-algorithme-du-ciel`
3. **La Prophétie du Bitcoin** - `https://www.contrado.fr/stores/vop-shop/la-prophetie-du-bitcoin`

## 📊 Gestion des Dons dans l'Admin

### **Dashboard Admin - Section Dons**
- Voir les commandes Chariow
- Suivre les montants collectés par programme
- Gérer les remerciements
- Exporter les rapports

### **Fonctionnalités Admin**
- 📈 **Analytics des dons** - Montants par programme
- 📋 **Liste des commandes** - Toutes les commandes Chariow
- 🎯 **Objectifs de collecte** - Suivi des programmes
- 📊 **Rapports financiers** - Export des données

## 🔧 Configuration Technique

### **1. Exécuter le Script SQL**
```sql
-- Utiliser database/schema-chariow-ong.sql
-- Crée toutes les tables sans erreur "donations"
```

### **2. Mettre à Jour les Liens**
```typescript
// Dans src/config/chariowLinks.ts
export const CHARIOW_LINKS = {
  BOUTIQUE_OFFICIELLE: 'https://www.contrado.fr/stores/vop-shop',
  DON_LIBRE: 'https://www.contrado.fr/stores/vop-shop/don-libre',
  DON_VEUVES: 'https://www.contrado.fr/stores/vop-shop/don-programme-veuves',
  DON_ORPHELINS: 'https://www.contrado.fr/stores/vop-shop/don-programme-orphelins',
  DON_EDUCATION: 'https://www.contrado.fr/stores/vop-shop/don-programme-education',
  TSHIRT_VOPYOUTH: 'https://www.contrado.fr/stores/vop-shop/tshirt-vopyouth',
  TSHIRT_VOPSONG: 'https://www.contrado.fr/stores/vop-shop/tshirt-vopsong',
  TSHIRT_VOP_PRINCIPAL: 'https://www.contrado.fr/stores/vop-shop/tshirt-vop-principal',
  LIVRE_COACHING_ULTIME: 'https://www.contrado.fr/stores/vop-shop/le-coaching-ultime',
  LIVRE_ALGORITHME_CIEL: 'https://www.contrado.fr/stores/vop-shop/l-algorithme-du-ciel',
  LIVRE_PROPHETIE_BITCOIN: 'https://www.contrado.fr/stores/vop-shop/la-prophetie-du-bitcoin'
};
```

### **3. Webhook Chariow (Optionnel)**
```javascript
// Pour recevoir les notifications de commandes
app.post('/webhook/chariow', (req, res) => {
  const order = req.body;
  // Sauvegarder dans chariow_orders
  // Mettre à jour les montants des programmes
});
```

## 📱 Interface Utilisateur

### **Section Dons sur le Site**
- Boutons de don vers Chariow
- Affichage des montants collectés
- Progression des objectifs
- Témoignages des donateurs

### **Boutique**
- Produits Chariow intégrés
- Liens directs vers les commandes
- Suivi des ventes

## ✅ Avantages de l'Intégration Chariow

1. **Pas de frais de transaction** - Chariow gère tout
2. **Gestion des stocks** - Automatique
3. **Expédition** - Gérée par Chariow
4. **Support client** - Chariow s'en occupe
5. **Rapports** - Disponibles dans Chariow
6. **Sécurité** - Chariow gère les paiements

## 🚀 Déploiement

### **1. Exécuter le Script SQL**
```bash
# Dans Supabase SQL Editor
# Copier et exécuter database/schema-chariow-ong.sql
```

### **2. Tester la Connexion**
```bash
# Ouvrir test-app-connection.html
# Vérifier que toutes les tables sont créées
```

### **3. Tester l'Application**
```bash
npm run dev
# Aller sur http://localhost:5173
# Tester les liens Chariow
```

## 📞 Support

Pour toute question sur l'intégration Chariow :
- Email : jonathanakarentoutoume@gmail.com
- WhatsApp : +241 07 47 91 530
