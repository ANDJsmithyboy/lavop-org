#!/bin/bash

# Script de déploiement pour LA VOP
# Usage: ./deploy.sh [environment]

set -e

ENVIRONMENT=${1:-production}
PROJECT_NAME="vop-ong"
DOCKER_IMAGE="vop-ong:latest"

echo "🚀 Déploiement de LA VOP en mode $ENVIRONMENT"

# Vérifier que Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier que Docker Compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

echo "📦 Construction de l'image Docker..."
docker build -t $DOCKER_IMAGE .

echo "🛑 Arrêt des conteneurs existants..."
docker-compose down

echo "🗑️ Nettoyage des images inutilisées..."
docker system prune -f

echo "🚀 Démarrage des services..."
docker-compose up -d

echo "⏳ Attente du démarrage des services..."
sleep 30

echo "🔍 Vérification du statut des services..."
docker-compose ps

echo "🌐 Test de l'application..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Application accessible sur http://localhost:3000"
else
    echo "❌ L'application n'est pas accessible"
    exit 1
fi

echo "📊 Statistiques des conteneurs:"
docker stats --no-stream

echo "🎉 Déploiement terminé avec succès!"
echo "🌐 Application: http://localhost:3000"
echo "📊 Monitoring: docker-compose logs -f"
echo "🛑 Arrêt: docker-compose down"