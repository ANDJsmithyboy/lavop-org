# Dockerfile pour LA VOP - Site Web ONG
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le code source
COPY . .

# Construire l'application
RUN npm run build

# Stage de production
FROM nginx:alpine

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers construits
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier les assets statiques
COPY --from=builder /app/public /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]