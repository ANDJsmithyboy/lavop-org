import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import type { Database } from '../config/supabase';

type Tables = Database['public']['Tables'];

export const useSupabase = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Articles
  const getArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return [];
    }
  };

  const addArticle = async (article: Tables['articles']['Insert']) => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .insert(article)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return null;
    }
  };

  const updateArticle = async (id: number, updates: Tables['articles']['Update']) => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return null;
    }
  };

  const deleteArticle = async (id: number) => {
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return false;
    }
  };

  // Utilisateurs
  const getUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return [];
    }
  };

  const addUser = async (user: Tables['users']['Insert']) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert(user)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return null;
    }
  };

  const updateUser = async (id: number, updates: Tables['users']['Update']) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return null;
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return false;
    }
  };

  // Contacts
  const getContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return [];
    }
  };

  const addContact = async (contact: Tables['contacts']['Insert']) => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert(contact)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return null;
    }
  };

  const updateContact = async (id: number, updates: Tables['contacts']['Update']) => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return null;
    }
  };

  // Notifications
  const getNotifications = async () => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return [];
    }
  };

  const addNotification = async (notification: Tables['notifications']['Insert']) => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .insert(notification)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return null;
    }
  };

  // Analytics
  const getAnalytics = async () => {
    try {
      const { data, error } = await supabase
        .from('analytics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return null;
    }
  };

  const updateAnalytics = async (updates: Tables['analytics']['Update']) => {
    try {
      const { data, error } = await supabase
        .from('analytics')
        .update(updates)
        .eq('id', 1)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      return null;
    }
  };

  return {
    loading,
    error,
    // Articles
    getArticles,
    addArticle,
    updateArticle,
    deleteArticle,
    // Users
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    // Contacts
    getContacts,
    addContact,
    updateContact,
    // Notifications
    getNotifications,
    addNotification,
    // Analytics
    getAnalytics,
    updateAnalytics
  };
};
