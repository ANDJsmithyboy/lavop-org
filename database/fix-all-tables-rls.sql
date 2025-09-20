-- Script pour corriger toutes les politiques RLS
-- Exécutez ce script dans Supabase SQL Editor

-- 1. Désactiver RLS temporairement sur toutes les tables
ALTER TABLE articles DISABLE ROW LEVEL SECURITY;
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE contacts DISABLE ROW LEVEL SECURITY;
ALTER TABLE notifications DISABLE ROW LEVEL SECURITY;
ALTER TABLE analytics DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_knowledge DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_feedback DISABLE ROW LEVEL SECURITY;

-- 2. Supprimer toutes les politiques existantes
DO $$
DECLARE
    table_name text;
    policy_name text;
BEGIN
    -- Liste des tables
    FOR table_name IN SELECT unnest(ARRAY[
        'articles', 'users', 'contacts', 'notifications', 'analytics',
        'ai_conversations', 'ai_knowledge', 'ai_sessions', 'ai_feedback'
    ]) LOOP
        -- Supprimer toutes les politiques de chaque table
        FOR policy_name IN 
            SELECT policyname FROM pg_policies WHERE tablename = table_name
        LOOP
            EXECUTE format('DROP POLICY IF EXISTS %I ON %I', policy_name, table_name);
        END LOOP;
    END LOOP;
END $$;

-- 3. Réactiver RLS sur toutes les tables
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_feedback ENABLE ROW LEVEL SECURITY;

-- 4. Créer des politiques simples qui permettent l'accès
CREATE POLICY "open_access_articles" ON articles FOR ALL USING (true);
CREATE POLICY "open_access_users" ON users FOR ALL USING (true);
CREATE POLICY "open_access_contacts" ON contacts FOR ALL USING (true);
CREATE POLICY "open_access_notifications" ON notifications FOR ALL USING (true);
CREATE POLICY "open_access_analytics" ON analytics FOR ALL USING (true);
CREATE POLICY "open_access_ai_conversations" ON ai_conversations FOR ALL USING (true);
CREATE POLICY "open_access_ai_knowledge" ON ai_knowledge FOR ALL USING (true);
CREATE POLICY "open_access_ai_sessions" ON ai_sessions FOR ALL USING (true);
CREATE POLICY "open_access_ai_feedback" ON ai_feedback FOR ALL USING (true);

-- 5. Vérifier que toutes les tables sont accessibles
SELECT 
    'articles' as table_name, 
    COUNT(*) as count 
FROM articles
UNION ALL
SELECT 
    'users' as table_name, 
    COUNT(*) as count 
FROM users
UNION ALL
SELECT 
    'contacts' as table_name, 
    COUNT(*) as count 
FROM contacts
UNION ALL
SELECT 
    'notifications' as table_name, 
    COUNT(*) as count 
FROM notifications
UNION ALL
SELECT 
    'analytics' as table_name, 
    COUNT(*) as count 
FROM analytics
UNION ALL
SELECT 
    'ai_knowledge' as table_name, 
    COUNT(*) as count 
FROM ai_knowledge;

-- 6. Message de confirmation
SELECT 'Toutes les tables sont maintenant accessibles!' as status;
