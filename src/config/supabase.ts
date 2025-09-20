import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zfekgfupuzpnuixaqrsd.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZWtnZnVwdXpwbnVpeGFxcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMjQ1NDksImV4cCI6MjA3MzkwMDU0OX0.UF06Fiz4pw5N8MEnOlzrZynzyuwQTMMNLckwDBkgr3k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types pour Supabase
export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          id: number;
          title: string;
          excerpt: string;
          content: string;
          author: string;
          date: string;
          category: string;
          image: string;
          published: boolean;
          featured: boolean;
          views: number;
          likes: number;
          comments: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          title: string;
          excerpt: string;
          content: string;
          author: string;
          date: string;
          category: string;
          image: string;
          published?: boolean;
          featured?: boolean;
          views?: number;
          likes?: number;
          comments?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          title?: string;
          excerpt?: string;
          content?: string;
          author?: string;
          date?: string;
          category?: string;
          image?: string;
          published?: boolean;
          featured?: boolean;
          views?: number;
          likes?: number;
          comments?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      users: {
        Row: {
          id: number;
          name: string;
          email: string;
          role: 'Admin' | 'Editor' | 'Moderator' | 'Viewer';
          status: 'active' | 'inactive' | 'suspended';
          last_login: string;
          avatar?: string;
          permissions: string[];
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          role: 'Admin' | 'Editor' | 'Moderator' | 'Viewer';
          status?: 'active' | 'inactive' | 'suspended';
          last_login?: string;
          avatar?: string;
          permissions?: string[];
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          email?: string;
          role?: 'Admin' | 'Editor' | 'Moderator' | 'Viewer';
          status?: 'active' | 'inactive' | 'suspended';
          last_login?: string;
          avatar?: string;
          permissions?: string[];
          created_at?: string;
        };
      };
      media_files: {
        Row: {
          id: number;
          name: string;
          type: 'image' | 'video' | 'document';
          size: string;
          date: string;
          url: string;
          alt?: string;
          description?: string;
          tags: string[];
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          type: 'image' | 'video' | 'document';
          size: string;
          date: string;
          url: string;
          alt?: string;
          description?: string;
          tags?: string[];
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          type?: 'image' | 'video' | 'document';
          size?: string;
          date?: string;
          url?: string;
          alt?: string;
          description?: string;
          tags?: string[];
          created_at?: string;
        };
      };
      notifications: {
        Row: {
          id: number;
          type: 'success' | 'info' | 'warning' | 'error';
          message: string;
          time: string;
          read: boolean;
          created_at: string;
        };
        Insert: {
          id?: number;
          type: 'success' | 'info' | 'warning' | 'error';
          message: string;
          time: string;
          read?: boolean;
          created_at?: string;
        };
        Update: {
          id?: number;
          type?: 'success' | 'info' | 'warning' | 'error';
          message?: string;
          time?: string;
          read?: boolean;
          created_at?: string;
        };
      };
      contacts: {
        Row: {
          id: number;
          name: string;
          email: string;
          phone?: string;
          reason: string;
          message: string;
          status: 'nouveau' | 'lu' | 'repondu';
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          phone?: string;
          reason: string;
          message: string;
          status?: 'nouveau' | 'lu' | 'repondu';
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          email?: string;
          phone?: string;
          reason?: string;
          message?: string;
          status?: 'nouveau' | 'lu' | 'repondu';
          created_at?: string;
        };
      };
      analytics: {
        Row: {
          id: number;
          total_views: number;
          total_likes: number;
          total_comments: number;
          total_articles: number;
          total_users: number;
          total_donations: number;
          monthly_growth: number;
          top_articles: any;
          recent_activity: any;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          total_views?: number;
          total_likes?: number;
          total_comments?: number;
          total_articles?: number;
          total_users?: number;
          total_donations?: number;
          monthly_growth?: number;
          top_articles?: any;
          recent_activity?: any;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          total_views?: number;
          total_likes?: number;
          total_comments?: number;
          total_articles?: number;
          total_users?: number;
          total_donations?: number;
          monthly_growth?: number;
          top_articles?: any;
          recent_activity?: any;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
