# Guide de Développement - Site LA VOP

## 🚀 Commandes de Développement

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5173`

### Build de Production
```bash
npm run build
```

### Preview du Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Structure du Projet

```
src/
├── components/           # Composants React
│   ├── HeroSection.tsx      # Section d'accueil
│   ├── AboutSection.tsx     # À propos
│   ├── PillarsSection.tsx   # 3 piliers
│   ├── ActionsSection.tsx   # Actions générales
│   ├── ProgramsSection.tsx  # Programmes détaillés
│   ├── StoreSection.tsx     # Boutique
│   ├── DonationSection.tsx  # Section dons
│   ├── BlogSection.tsx      # Blog/Actualités
│   ├── TransparencySection.tsx # Transparence
│   ├── ContactSection.tsx   # Contact
│   ├── Header.tsx           # Navigation
│   ├── Footer.tsx           # Pied de page
│   ├── ThankYouPage.tsx     # Page de remerciement
│   └── ChariowRedirect.tsx  # Redirection Chariow
├── config/              # Configuration
│   ├── chariowLinks.ts      # Liens Chariow centralisés
│   └── theme.ts            # Thème et couleurs
├── assets/              # Images et ressources
└── App.tsx              # Composant principal
```

## 🎨 Personnalisation

### Couleurs
Modifiez `src/config/theme.ts` pour changer les couleurs :
```typescript
export const THEME = {
  colors: {
    primary: '#003399',    // Bleu VOP
    secondary: '#00B0F0',  // Bleu clair
    accent: '#CC3366',     // Rose
    gold: '#FFD700'        // Or
  }
};
```

### Liens Chariow
Mettez à jour `src/config/chariowLinks.ts` avec vos vrais liens :
```typescript
export const CHARIOW_LINKS = {
  DON_LIBRE: 'https://chariow.com/store/votre-boutique/don-libre',
  // ... autres liens
};
```

## 🔧 Fonctionnalités

### Navigation
- Header sticky avec menu mobile
- Navigation par ancres (#section)
- CTA "Faire un don" visible partout

### Sections
1. **Hero** - Mission + CTA principal
2. **À Propos** - Fondateur, histoire, vision
3. **Piliers** - 3 fondements d'action
4. **Actions** - Présentation générale
5. **Programmes** - 4 programmes avec dons dédiés
6. **Boutique** - Livres et produits
7. **Dons** - Section dédiée
8. **Blog** - Actualités
9. **Transparence** - Rapports et gouvernance
10. **Contact** - Formulaire

### Tracking UTM
Tous les liens incluent des paramètres UTM :
- `utm_source=site`
- `utm_medium=hero|header|programme|etc`
- `utm_campaign=don_principal|veuve|etc`

## 📱 Responsive Design

### Breakpoints
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

### Optimisations Mobile
- Navigation hamburger
- Boutons tactiles optimisés
- Images responsives
- Texte lisible

## 🚀 Déploiement

### Variables d'Environnement
Créez `.env` :
```env
VITE_CHARIOW_BASE_URL=https://chariow.com/store/votre-boutique
VITE_SITE_URL=https://lavop.org
```

### Build Optimisé
```bash
npm run build
```
Le build sera dans `dist/`

### Serveur Web
- Redirection 404 vers `/` pour SPA
- Headers de sécurité
- Compression gzip
- Cache statique

## 🔍 SEO et Performance

### Meta Tags
- Title dynamique par section
- Description optimisée
- Open Graph pour réseaux sociaux
- Twitter Cards

### Performance
- Images optimisées
- Lazy loading
- Code splitting
- Bundle analysis

### Analytics
- Google Analytics 4
- Tracking des conversions
- Événements personnalisés

## 🛠️ Maintenance

### Mises à Jour
- Actualités du blog
- Nouveaux programmes
- Témoignages
- Photos d'actions

### Monitoring
- Uptime du site
- Performance des dons
- Erreurs JavaScript
- Analytics

## 📞 Support

### Documentation
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chariow](https://help.chariow.com/)

### Problèmes Courants
1. **Erreurs de build** : Vérifiez les imports
2. **Images manquantes** : Vérifiez les chemins
3. **Liens Chariow** : Mettez à jour la config
4. **Styles** : Vérifiez les classes Tailwind

---

**Note** : Testez toujours en local avant de déployer en production.
