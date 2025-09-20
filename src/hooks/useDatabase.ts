import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';

// Types
interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  image: string;
  published: boolean;
  featured: boolean;
  views: number;
  likes: number;
  comments: number;
  created_at: string;
  updated_at: string;
}

interface User {
  id: number;
  email: string;
  role: string;
  created_at: string;
  last_login: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  read: boolean;
  created_at: string;
}

interface Analytics {
  totalViews: number;
  totalUsers: number;
  totalArticles: number;
  totalContacts: number;
}

// Hook principal
export const useDashboard = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [analytics, setAnalytics] = useState<Analytics>({
    totalViews: 0,
    totalUsers: 0,
    totalArticles: 0,
    totalContacts: 0
  });
  const [loading, setLoading] = useState(true);

  // Charger les données
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Charger les articles
      const { data: articlesData, error: articlesError } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (articlesError) throw articlesError;
      setArticles(articlesData || []);

      // Charger les utilisateurs
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });

      if (usersError) throw usersError;
      setUsers(usersData || []);

      // Charger les contacts
      const { data: contactsData, error: contactsError } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (contactsError) throw contactsError;
      setContacts(contactsData || []);

      // Charger les notifications
      const { data: notificationsData, error: notificationsError } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false });

      if (notificationsError) throw notificationsError;
      setNotifications(notificationsData || []);

      // Calculer les analytics
      setAnalytics({
        totalViews: articlesData?.reduce((sum, article) => sum + (article.views || 0), 0) || 0,
        totalUsers: usersData?.length || 0,
        totalArticles: articlesData?.length || 0,
        totalContacts: contactsData?.length || 0
      });

    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fonctions pour les articles
  const addArticle = async (article: Omit<Article, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .insert([article])
        .select()
        .single();

      if (error) throw error;
      
      setArticles(prev => [data, ...prev]);
      return data;
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'article:', error);
      throw error;
    }
  };

  const updateArticle = async (id: number, article: Partial<Article>) => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .update(article)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      
      setArticles(prev => prev.map(a => a.id === id ? data : a));
      return data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'article:', error);
      throw error;
    }
  };

  const deleteArticle = async (id: number) => {
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setArticles(prev => prev.filter(a => a.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'article:', error);
      throw error;
    }
  };

  // Fonctions pour les utilisateurs
  const addUser = async (user: Omit<User, 'id' | 'created_at' | 'last_login'>) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert([user])
        .select()
        .single();

      if (error) throw error;
      
      setUsers(prev => [data, ...prev]);
      return data;
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
      throw error;
    }
  };

  const updateUser = async (id: number, user: Partial<User>) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(user)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      
      setUsers(prev => prev.map(u => u.id === id ? data : u));
      return data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      throw error;
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setUsers(prev => prev.filter(u => u.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      throw error;
    }
  };

  // Fonctions pour les contacts
  const updateContact = async (id: number, contact: Partial<Contact>) => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .update(contact)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      
      setContacts(prev => prev.map(c => c.id === id ? data : c));
      return data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du contact:', error);
      throw error;
    }
  };

  const deleteContact = async (id: number) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setContacts(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du contact:', error);
      throw error;
    }
  };

  return {
    // Données
    articles: { articles, loading },
    users: { users, loading },
    contacts: { contacts, loading },
    notifications: { notifications, loading },
    analytics: { analytics, loading },
    
    // Fonctions articles
    addArticle,
    updateArticle,
    deleteArticle,
    
    // Fonctions utilisateurs
    addUser,
    updateUser,
    deleteUser,
    
    // Fonctions contacts
    updateContact,
    deleteContact,
    
    // Utilitaires
    loadData
  };
};