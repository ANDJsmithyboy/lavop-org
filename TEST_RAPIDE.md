# 🚀 Test Rapide - LA VOP Mobile

## ✅ Application Lancée
L'application est accessible sur : **http://localhost:5173**

## 📱 Test Mobile Immédiat

### 1. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

### 2. **Activer le mode mobile (Chrome/Edge)**
1. Appuyez sur `F12` (DevTools)
2. Cliquez sur l'icône mobile 📱 (ou `Ctrl+Shift+M`)
3. Sélectionnez "iPhone 12 Pro" (390x844)

### 3. **Tester les pages principales**

#### 🏠 Page d'Accueil
- [ ] Navigation hamburger visible
- [ ] Hero section adaptée
- [ ] Boutons "Faire un don" accessibles
- [ ] Cartes de statistiques empilées

#### 👨‍💼 Page Fondateur
- [ ] Aller sur `/a-propos-fondateur`
- [ ] Biographie lisible
- [ ] Cartes de réalisations adaptées
- [ ] Projets technologiques visibles

#### 📊 Dashboard Admin
- [ ] Aller sur `/admin`
- [ ] Se connecter avec : `jonathanakarentoutoume@gmail.com`
- [ ] Navigation mobile 2x2 visible
- [ ] Cartes de stats adaptées

#### 🛒 Page Boutique
- [ ] Aller sur `/boutique`
- [ ] Images de t-shirts visibles
- [ ] Boutons d'achat tactiles

### 4. **Test automatique dans la console**
1. Ouvrez la console (`F12` > Console)
2. Copiez-collez le contenu de `test-mobile.js`
3. Appuyez sur Entrée
4. Vérifiez les résultats

### 5. **Résolutions à tester**
- **iPhone SE** : 375x667
- **iPhone 12 Pro** : 390x844
- **Samsung Galaxy** : 360x800
- **iPad** : 768x1024
- **Desktop** : 1920x1080

## 🔧 Commandes utiles

```bash
# Lancer l'app
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 📱 Test sur vrai téléphone

1. Trouvez votre IP : `ipconfig` (Windows)
2. Sur votre téléphone, allez sur : `http://[VOTRE_IP]:5173`
3. Testez la navigation tactile

## ✅ Checklist rapide

- [ ] Site se charge rapidement
- [ ] Navigation mobile fonctionne
- [ ] Texte lisible sans zoom
- [ ] Boutons tactiles (44px+)
- [ ] Images responsive
- [ ] Formulaires utilisables
- [ ] Performance acceptable

## 🚨 Problèmes courants

1. **Images qui débordent** → Vérifier les classes Tailwind
2. **Boutons trop petits** → Ajouter `min-h-[44px]`
3. **Texte illisible** → Vérifier les tailles de police
4. **Navigation cassée** → Vérifier le menu hamburger

---

**💡 Conseil** : Testez sur plusieurs résolutions pour garantir une expérience optimale !
