-- Script SQL Simplifié pour VOP AI
-- Exécutez ce script dans Supabase SQL Editor

-- 1. Créer les tables VOP AI (si elles n'existent pas)
CREATE TABLE IF NOT EXISTS ai_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id INTEGER,
  session_id VARCHAR(255) NOT NULL,
  user_message TEXT NOT NULL,
  ai_response TEXT NOT NULL,
  context JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_knowledge (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category VARCHAR(100) NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  keywords TEXT[],
  priority INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id INTEGER,
  session_token VARCHAR(255) UNIQUE NOT NULL,
  context JSONB,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID,
  user_id INTEGER,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  feedback_text TEXT,
  is_helpful BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Activer RLS (Row Level Security)
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_feedback ENABLE ROW LEVEL SECURITY;

-- 3. Créer des politiques simples (sans référence aux utilisateurs pour éviter les erreurs)
CREATE POLICY "Allow all for ai_knowledge" ON ai_knowledge
  FOR ALL USING (true);

CREATE POLICY "Allow all for ai_conversations" ON ai_conversations
  FOR ALL USING (true);

CREATE POLICY "Allow all for ai_sessions" ON ai_sessions
  FOR ALL USING (true);

CREATE POLICY "Allow all for ai_feedback" ON ai_feedback
  FOR ALL USING (true);

-- 4. Insérer des données de test
INSERT INTO ai_knowledge (category, question, answer, keywords, priority) VALUES
('general', 'Qu''est-ce que LA VOP ?', 'LA VOP (L''Amour de Dieu en Action) est une ONG internationale qui aide les orphelins, les veuves et les pauvres.', ARRAY['vop', 'ong', 'mission'], 5),
('donations', 'Comment faire un don ?', 'Vous pouvez faire un don via notre page de don en ligne ou nous contacter directement.', ARRAY['don', 'soutien'], 5),
('contact', 'Comment vous contacter ?', 'Email : contact@lavop.org, Téléphone : +241 07 47 91 530, WhatsApp : +241 65 51 58 77', ARRAY['contact', 'email'], 4)
ON CONFLICT DO NOTHING;

-- 5. Créer des index pour les performances
CREATE INDEX IF NOT EXISTS idx_ai_knowledge_category ON ai_knowledge(category);
CREATE INDEX IF NOT EXISTS idx_ai_knowledge_keywords ON ai_knowledge USING GIN(keywords);
CREATE INDEX IF NOT EXISTS idx_ai_conversations_session_id ON ai_conversations(session_id);
