-- Script Simple pour Corriger RLS VOP AI
-- Exécutez ce script dans Supabase SQL Editor

-- 1. Désactiver RLS temporairement
ALTER TABLE ai_conversations DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_knowledge DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_feedback DISABLE ROW LEVEL SECURITY;

-- 2. Vérifier que les données sont accessibles
SELECT 'ai_knowledge' as table_name, COUNT(*) as count FROM ai_knowledge
UNION ALL
SELECT 'ai_conversations' as table_name, COUNT(*) as count FROM ai_conversations
UNION ALL
SELECT 'ai_sessions' as table_name, COUNT(*) as count FROM ai_sessions
UNION ALL
SELECT 'ai_feedback' as table_name, COUNT(*) as count FROM ai_feedback;

-- 3. Réactiver RLS avec des politiques simples
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_feedback ENABLE ROW LEVEL SECURITY;

-- 4. Créer une seule politique par table (supprimer d'abord les anciennes)
DO $$
BEGIN
    -- Supprimer toutes les politiques existantes
    DROP POLICY IF EXISTS "Allow all for ai_knowledge" ON ai_knowledge;
    DROP POLICY IF EXISTS "Allow all for ai_conversations" ON ai_conversations;
    DROP POLICY IF EXISTS "Allow all for ai_sessions" ON ai_sessions;
    DROP POLICY IF EXISTS "Allow all for ai_feedback" ON ai_feedback;
    
    -- Créer de nouvelles politiques
    EXECUTE 'CREATE POLICY "open_access_knowledge" ON ai_knowledge FOR ALL USING (true)';
    EXECUTE 'CREATE POLICY "open_access_conversations" ON ai_conversations FOR ALL USING (true)';
    EXECUTE 'CREATE POLICY "open_access_sessions" ON ai_sessions FOR ALL USING (true)';
    EXECUTE 'CREATE POLICY "open_access_feedback" ON ai_feedback FOR ALL USING (true)';
END $$;

-- 5. Test final
SELECT 'VOP AI est maintenant accessible!' as status;
