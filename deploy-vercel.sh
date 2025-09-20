#!/bin/bash

# Script de déploiement Vercel pour LA VOP
echo "🚀 Déploiement LA VOP sur Vercel..."

# Vérifier que Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI n'est pas installé. Installation..."
    npm install -g vercel
fi

# Build de l'application
echo "📦 Build de l'application..."
npm run build

# Vérifier que le build a réussi
if [ ! -d "dist" ]; then
    echo "❌ Erreur: Le dossier dist n'existe pas"
    exit 1
fi

# Déploiement sur Vercel
echo "🌐 Déploiement sur Vercel..."
vercel --prod

echo "✅ Déploiement terminé!"
echo "🔗 Votre site est maintenant en ligne sur Vercel"