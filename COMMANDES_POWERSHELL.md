# Commandes PowerShell pour LA VOP

## 🚀 Commandes de Développement

### 1. Installation des Dépendances
```powershell
npm install
```

### 2. Lancement du Serveur de Développement
```powershell
npm run dev
```
**Résultat** : Le site sera accessible sur `http://localhost:5173`

### 3. Build de Production
```powershell
npm run build
```

### 4. Preview du Build
```powershell
npm run preview
```

### 5. Vérification du Code (Linting)
```powershell
npm run lint
```

## 🔧 Commandes de Maintenance

### Nettoyage du Cache
```powershell
npm run clean
# ou
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

### Mise à Jour des Dépendances
```powershell
npm update
```

### Vérification des Vulnérabilités
```powershell
npm audit
```

## 📁 Commandes de Fichiers

### Créer un Nouveau Composant
```powershell
New-Item -Path "src/components/NouveauComposant.tsx" -ItemType File
```

### Lister les Fichiers Modifiés
```powershell
git status
```

### Voir les Différences
```powershell
git diff
```

## 🌐 Commandes de Déploiement

### Build pour Production
```powershell
npm run build
```

### Vérifier la Taille du Build
```powershell
Get-ChildItem -Path "dist" -Recurse | Measure-Object -Property Length -Sum
```

### Compresser le Build
```powershell
Compress-Archive -Path "dist\*" -DestinationPath "lavop-build.zip"
```

## 🔍 Commandes de Debug

### Voir les Logs
```powershell
npm run dev -- --debug
```

### Analyser le Bundle
```powershell
npm run build -- --analyze
```

### Vérifier les Erreurs TypeScript
```powershell
npx tsc --noEmit
```

## 📊 Commandes d'Analyse

### Voir les Statistiques du Projet
```powershell
Get-ChildItem -Path "src" -Recurse -File | Group-Object Extension | Sort-Object Count -Descending
```

### Compter les Lignes de Code
```powershell
(Get-ChildItem -Path "src" -Recurse -Include "*.tsx","*.ts" | Get-Content | Measure-Object -Line).Lines
```

### Voir la Taille des Images
```powershell
Get-ChildItem -Path "src/assets" -Recurse -Include "*.jpg","*.png","*.webp" | Select-Object Name, @{Name="Size(KB)";Expression={[math]::Round($_.Length/1KB,2)}}
```

## 🚨 Commandes d'Urgence

### Arrêter le Serveur
```powershell
# Ctrl+C dans le terminal où tourne npm run dev
# ou
Get-Process -Name "node" | Stop-Process -Force
```

### Nettoyer et Redémarrer
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
npm run dev
```

### Vérifier les Ports Utilisés
```powershell
netstat -ano | findstr :5173
```

## 📝 Commandes Git (Optionnel)

### Initialiser Git
```powershell
git init
```

### Ajouter tous les Fichiers
```powershell
git add .
```

### Commit
```powershell
git commit -m "Message de commit"
```

### Voir l'Historique
```powershell
git log --oneline
```

## 🎯 Workflow Recommandé

### 1. Démarrage Quotidien
```powershell
# Ouvrir PowerShell en tant qu'administrateur
cd "C:\Users\AP JONATHAN\Documents\vrai lavoporg\lavop.org_avec_mes_vrai_infos"
npm run dev
```

### 2. Avant de Modifier le Code
```powershell
git status
git add .
git commit -m "Sauvegarde avant modifications"
```

### 3. Après Modifications
```powershell
npm run lint
npm run build
git add .
git commit -m "Description des modifications"
```

### 4. Avant Déploiement
```powershell
npm run build
npm run preview
# Tester sur http://localhost:4173
```

## 🔧 Configuration PowerShell

### Exécution de Scripts
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Alias Utiles
```powershell
# Ajouter à votre profil PowerShell
Set-Alias -Name "dev" -Value "npm run dev"
Set-Alias -Name "build" -Value "npm run build"
Set-Alias -Name "lint" -Value "npm run lint"
```

---

**Note** : Exécutez ces commandes dans l'ordre indiqué pour un workflow optimal.
