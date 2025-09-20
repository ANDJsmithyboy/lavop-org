// import { User } from './database'; // Non utilisé pour le moment

// Interface pour l'utilisateur connecté
export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: string[];
  avatar?: string;
}

// Clé de stockage pour l'utilisateur connecté
const AUTH_KEY = 'vop_auth_user';

// Fonction de connexion
export const login = (email: string, password: string): AuthUser | null => {
  const users = [
    {
      id: 1,
      name: "ANDJ Daniel Jonathan",
      email: "jonathanakarentoutoume@gmail.com",
      password: "ANDJ&laVOP171222$",
      role: "Admin",
      permissions: ["read", "write", "delete", "admin", "moderate", "manage_users"],
      avatar: "/images/founder/photo_andj_ceo.jpg"
    },
    {
      id: 2,
      name: "Ludmilla Jaël",
      email: "ludmillantoutoume@gmail.com",
      password: "sagesse2025",
      role: "Moderator",
      permissions: ["read", "write_articles", "moderate", "manage_content"],
      avatar: undefined
    }
  ];

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    // Ne pas stocker le mot de passe dans localStorage
    const { password: _, ...userWithoutPassword } = user;
    localStorage.setItem(AUTH_KEY, JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  }
  return null;
};

// Fonction de déconnexion
export const logout = (): void => {
  localStorage.removeItem(AUTH_KEY);
};

// Obtenir l'utilisateur connecté
export const getCurrentUser = (): AuthUser | null => {
  const user = localStorage.getItem(AUTH_KEY);
  return user ? JSON.parse(user) : null;
};

// Vérifier si l'utilisateur est connecté
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

// Vérifier les permissions
export const hasPermission = (permission: string): boolean => {
  const user = getCurrentUser();
  if (!user) return false;
  return user.permissions.includes(permission);
};

// Vérifier le rôle
export const hasRole = (role: string): boolean => {
  const user = getCurrentUser();
  if (!user) return false;
  return user.role === role;
};

// Vérifier si l'utilisateur peut gérer les articles
export const canManageArticles = (): boolean => {
  return hasPermission('write_articles') || hasPermission('write') || hasRole('Admin');
};

// Vérifier si l'utilisateur peut gérer les utilisateurs
export const canManageUsers = (): boolean => {
  return hasPermission('manage_users') || hasRole('Admin');
};

// Vérifier si l'utilisateur peut supprimer
export const canDelete = (): boolean => {
  return hasPermission('delete') || hasRole('Admin');
};

// Vérifier si l'utilisateur est admin
export const isAdmin = (): boolean => {
  return hasRole('Admin');
};

// Obtenir les permissions de l'utilisateur
export const getUserPermissions = (): string[] => {
  const user = getCurrentUser();
  return user ? user.permissions : [];
};

// Obtenir le rôle de l'utilisateur
export const getUserRole = (): string => {
  const user = getCurrentUser();
  return user ? user.role : 'Guest';
};
