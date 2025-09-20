-- Script pour corriger les politiques RLS VOP AI
-- Exécutez ce script dans Supabase SQL Editor

-- 1. Désactiver temporairement RLS pour tester
ALTER TABLE ai_conversations DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_knowledge DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_feedback DISABLE ROW LEVEL SECURITY;

-- 2. Supprimer toutes les politiques existantes
DROP POLICY IF EXISTS "Users can view their own conversations" ON ai_conversations;
DROP POLICY IF EXISTS "Users can insert their own conversations" ON ai_conversations;
DROP POLICY IF EXISTS "Admins can view all conversations" ON ai_conversations;
DROP POLICY IF EXISTS "Everyone can view active knowledge" ON ai_knowledge;
DROP POLICY IF EXISTS "Admins can manage knowledge" ON ai_knowledge;
DROP POLICY IF EXISTS "Users can manage their own sessions" ON ai_sessions;
DROP POLICY IF EXISTS "Admins can view all sessions" ON ai_sessions;
DROP POLICY IF EXISTS "Users can insert feedback" ON ai_feedback;
DROP POLICY IF EXISTS "Admins can view all feedback" ON ai_feedback;

-- 3. Réactiver RLS
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_feedback ENABLE ROW LEVEL SECURITY;

-- 4. Créer des politiques simples qui permettent l'accès (si elles n'existent pas)
DROP POLICY IF EXISTS "Allow all for ai_knowledge" ON ai_knowledge;
CREATE POLICY "Allow all for ai_knowledge" ON ai_knowledge
  FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow all for ai_conversations" ON ai_conversations;
CREATE POLICY "Allow all for ai_conversations" ON ai_conversations
  FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow all for ai_sessions" ON ai_sessions;
CREATE POLICY "Allow all for ai_sessions" ON ai_sessions
  FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow all for ai_feedback" ON ai_feedback;
CREATE POLICY "Allow all for ai_feedback" ON ai_feedback
  FOR ALL USING (true);

-- 5. Vérifier que les données sont bien insérées
SELECT COUNT(*) as total_knowledge FROM ai_knowledge;
SELECT COUNT(*) as total_conversations FROM ai_conversations;
SELECT COUNT(*) as total_sessions FROM ai_sessions;
SELECT COUNT(*) as total_feedback FROM ai_feedback;
