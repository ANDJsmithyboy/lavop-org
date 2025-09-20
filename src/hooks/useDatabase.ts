import { useState, useEffect, useCallback } from 'react';
import Database, { Article, MediaFile, User, Analytics, Notification } from '../utils/database';

// Hook pour les articles
export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setArticles(Database.getArticles());
    setLoading(false);
  }, []);

  const addArticle = useCallback((article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newArticle = Database.addArticle(article);
    setArticles(prev => [...prev, newArticle]);
    return newArticle;
  }, []);

  const updateArticle = useCallback((id: number, updates: Partial<Article>) => {
    const updated = Database.updateArticle(id, updates);
    if (updated) {
      setArticles(prev => prev.map(article => 
        article.id === id ? updated : article
      ));
    }
    return updated;
  }, []);

  const deleteArticle = useCallback((id: number) => {
    const success = Database.deleteArticle(id);
    if (success) {
      setArticles(prev => prev.filter(article => article.id !== id));
    }
    return success;
  }, []);

  const searchArticles = useCallback((query: string) => {
    return Database.searchArticles(query);
  }, []);

  const filterArticles = useCallback((status: string) => {
    return Database.filterArticlesByStatus(status);
  }, []);

  return {
    articles,
    loading,
    addArticle,
    updateArticle,
    deleteArticle,
    searchArticles,
    filterArticles
  };
};

// Hook pour les médias
export const useMedia = () => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMediaFiles(Database.getMediaFiles());
    setLoading(false);
  }, []);

  const addMediaFile = useCallback((file: Omit<MediaFile, 'id' | 'createdAt'>) => {
    const newFile = Database.addMediaFile(file);
    setMediaFiles(prev => [...prev, newFile]);
    return newFile;
  }, []);

  const deleteMediaFile = useCallback((id: number) => {
    const success = Database.deleteMediaFile(id);
    if (success) {
      setMediaFiles(prev => prev.filter(file => file.id !== id));
    }
    return success;
  }, []);

  const searchMediaFiles = useCallback((query: string) => {
    return Database.searchMediaFiles(query);
  }, []);

  const filterMediaByType = useCallback((type: string) => {
    return Database.filterMediaByType(type);
  }, []);

  return {
    mediaFiles,
    loading,
    addMediaFile,
    deleteMediaFile,
    searchMediaFiles,
    filterMediaByType
  };
};

// Hook pour les utilisateurs
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUsers(Database.getUsers());
    setLoading(false);
  }, []);

  const addUser = useCallback((user: Omit<User, 'id' | 'createdAt'>) => {
    const newUser = Database.addUser(user);
    setUsers(prev => [...prev, newUser]);
    return newUser;
  }, []);

  const updateUser = useCallback((id: number, updates: Partial<User>) => {
    const updated = Database.updateUser(id, updates);
    if (updated) {
      setUsers(prev => prev.map(user => 
        user.id === id ? updated : user
      ));
    }
    return updated;
  }, []);

  const deleteUser = useCallback((id: number) => {
    const success = Database.deleteUser(id);
    if (success) {
      setUsers(prev => prev.filter(user => user.id !== id));
    }
    return success;
  }, []);

  return {
    users,
    loading,
    addUser,
    updateUser,
    deleteUser
  };
};

// Hook pour les analytics
export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<Analytics>(Database.getDefaultAnalytics());

  const updateAnalytics = useCallback((updates: Partial<Analytics>) => {
    Database.updateAnalytics(updates);
    setAnalytics(prev => ({ ...prev, ...updates }));
  }, []);

  const refreshAnalytics = useCallback(() => {
    setAnalytics(Database.getAnalytics());
  }, []);

  return {
    analytics,
    updateAnalytics,
    refreshAnalytics
  };
};

// Hook pour les notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNotifications(Database.getNotifications());
    setLoading(false);
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'createdAt'>) => {
    const newNotification = Database.addNotification(notification);
    setNotifications(prev => [newNotification, ...prev]);
    return newNotification;
  }, []);

  const markAsRead = useCallback((id: number) => {
    Database.markNotificationAsRead(id);
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  }, []);

  const deleteNotification = useCallback((id: number) => {
    Database.deleteNotification(id);
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return {
    notifications,
    loading,
    addNotification,
    markAsRead,
    deleteNotification,
    unreadCount
  };
};

// Hook principal pour le dashboard
export const useDashboard = () => {
  const articles = useArticles();
  const media = useMedia();
  const users = useUsers();
  const analytics = useAnalytics();
  const notifications = useNotifications();

  const exportData = useCallback(() => {
    return Database.exportData();
  }, []);

  const importData = useCallback((jsonData: string) => {
    return Database.importData(jsonData);
  }, []);

  const resetAll = useCallback(() => {
    Database.resetAll();
    // Recharger toutes les données
    window.location.reload();
  }, []);

  return {
    articles,
    media,
    users,
    analytics,
    notifications,
    exportData,
    importData,
    resetAll
  };
};
