-- Schema pour VOP AI - Assistant IA 24/7
-- Création des tables pour l'assistant IA

-- Table des conversations IA
CREATE TABLE IF NOT EXISTS ai_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  session_id VARCHAR(255) NOT NULL,
  user_message TEXT NOT NULL,
  ai_response TEXT NOT NULL,
  context JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des connaissances IA
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

-- Table des sessions IA
CREATE TABLE IF NOT EXISTS ai_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  session_token VARCHAR(255) UNIQUE NOT NULL,
  context JSONB,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des feedbacks IA
CREATE TABLE IF NOT EXISTS ai_feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES ai_conversations(id),
  user_id INTEGER REFERENCES users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  feedback_text TEXT,
  is_helpful BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour optimiser les performances
CREATE INDEX IF NOT EXISTS idx_ai_conversations_user_id ON ai_conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_conversations_session_id ON ai_conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_ai_conversations_created_at ON ai_conversations(created_at);
CREATE INDEX IF NOT EXISTS idx_ai_knowledge_category ON ai_knowledge(category);
CREATE INDEX IF NOT EXISTS idx_ai_knowledge_keywords ON ai_knowledge USING GIN(keywords);
CREATE INDEX IF NOT EXISTS idx_ai_knowledge_is_active ON ai_knowledge(is_active);
CREATE INDEX IF NOT EXISTS idx_ai_sessions_user_id ON ai_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_sessions_is_active ON ai_sessions(is_active);
CREATE INDEX IF NOT EXISTS idx_ai_feedback_conversation_id ON ai_feedback(conversation_id);

-- RLS Policies pour la sécurité
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_feedback ENABLE ROW LEVEL SECURITY;

-- Politiques pour ai_conversations
DROP POLICY IF EXISTS "Users can view their own conversations" ON ai_conversations;
CREATE POLICY "Users can view their own conversations" ON ai_conversations
  FOR SELECT USING (user_id = (SELECT id FROM users WHERE email = auth.jwt() ->> 'email'));

DROP POLICY IF EXISTS "Users can insert their own conversations" ON ai_conversations;
CREATE POLICY "Users can insert their own conversations" ON ai_conversations
  FOR INSERT WITH CHECK (user_id = (SELECT id FROM users WHERE email = auth.jwt() ->> 'email'));

DROP POLICY IF EXISTS "Admins can view all conversations" ON ai_conversations;
CREATE POLICY "Admins can view all conversations" ON ai_conversations
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.email = auth.jwt() ->> 'email'
      AND users.role = 'Admin'
    )
  );

-- Politiques pour ai_knowledge
DROP POLICY IF EXISTS "Everyone can view active knowledge" ON ai_knowledge;
CREATE POLICY "Everyone can view active knowledge" ON ai_knowledge
  FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Admins can manage knowledge" ON ai_knowledge;
CREATE POLICY "Admins can manage knowledge" ON ai_knowledge
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.email = auth.jwt() ->> 'email'
      AND users.role = 'Admin'
    )
  );

-- Politiques pour ai_sessions
DROP POLICY IF EXISTS "Users can manage their own sessions" ON ai_sessions;
CREATE POLICY "Users can manage their own sessions" ON ai_sessions
  FOR ALL USING (user_id = (SELECT id FROM users WHERE email = auth.jwt() ->> 'email'));

DROP POLICY IF EXISTS "Admins can view all sessions" ON ai_sessions;
CREATE POLICY "Admins can view all sessions" ON ai_sessions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.email = auth.jwt() ->> 'email'
      AND users.role = 'Admin'
    )
  );

-- Politiques pour ai_feedback
DROP POLICY IF EXISTS "Users can insert feedback" ON ai_feedback;
CREATE POLICY "Users can insert feedback" ON ai_feedback
  FOR INSERT WITH CHECK (user_id = (SELECT id FROM users WHERE email = auth.jwt() ->> 'email'));

DROP POLICY IF EXISTS "Admins can view all feedback" ON ai_feedback;
CREATE POLICY "Admins can view all feedback" ON ai_feedback
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.email = auth.jwt() ->> 'email'
      AND users.role = 'Admin'
    )
  );

-- Insertion des connaissances de base pour VOP AI
INSERT INTO ai_knowledge (category, question, answer, keywords, priority) VALUES
('general', 'Qu''est-ce que LA VOP ?', 'LA VOP (L''Amour de Dieu en Action) est une ONG internationale qui aide les orphelins, les veuves et les pauvres. Nous intervenons dans plus de 12 pays avec des programmes d''éducation, de santé et de développement communautaire.', ARRAY['vop', 'ong', 'mission', 'aide'], 5),

('donations', 'Comment faire un don ?', 'Vous pouvez faire un don via notre page de don en ligne, acheter nos produits dans la boutique, ou nous contacter directement. Chaque don contribue directement à nos programmes d''aide.', ARRAY['don', 'soutien', 'contribution', 'aide'], 5),

('programs', 'Quels sont vos programmes ?', 'Nous avons plusieurs programmes : éducation des orphelins, soutien aux veuves, développement communautaire, formation professionnelle, et aide d''urgence. Chaque programme est adapté aux besoins locaux.', ARRAY['programmes', 'éducation', 'orphelins', 'veuves'], 4),

('contact', 'Comment vous contacter ?', 'Vous pouvez nous contacter via : Email : contact@lavop.org, Téléphone : +241 07 47 91 530, WhatsApp : +241 65 51 58 77, ou via notre formulaire de contact sur le site.', ARRAY['contact', 'email', 'téléphone', 'whatsapp'], 4),

('coaching', 'Comment obtenir un coaching ?', 'Daniel Jonathan propose des sessions de coaching personnalisées. Contactez-le directement via WhatsApp au +241 65 51 58 77 ou par email à jonathanakarentoutoume@gmail.com pour réserver votre session.', ARRAY['coaching', 'daniel', 'jonathan', 'formation'], 4),

('books', 'Quels livres proposez-vous ?', 'Nous proposons plusieurs livres : "Le Coaching Ultime", "Les maths de Dieu", "Chrétien es-tu un Lion ou une Brebis ?", et bientôt "L''Algorithme du Ciel" et "La Prophétie de Bitcoin".', ARRAY['livres', 'publications', 'coaching', 'spirituel'], 3),

('boutique', 'Où acheter vos produits ?', 'Notre boutique propose des livres spirituels, des vêtements VOP et des produits numériques. Les T-shirts sont disponibles sur Contrado, les livres sur Chariow, et certains livres via des liens externes.', ARRAY['boutique', 'achat', 'produits', 'vêtements'], 3),

('transparency', 'Comment assurez-vous la transparence ?', 'Nous publions nos rapports financiers annuels, effectuons des audits externes, et maintenons une transparence totale sur l''utilisation des fonds. 80% des dons vont directement aux programmes.', ARRAY['transparence', 'rapports', 'audit', 'finances'], 3),

('volunteer', 'Comment devenir bénévole ?', 'Pour devenir bénévole, contactez-nous via notre formulaire de contact ou par email. Nous avons des opportunités locales et internationales selon vos compétences et disponibilités.', ARRAY['bénévole', 'volontaire', 'engagement', 'aide'], 2),

('partnership', 'Comment devenir partenaire ?', 'Nous cherchons des partenaires pour nos programmes. Contactez-nous pour discuter des opportunités de partenariat, que ce soit financier, technique ou opérationnel.', ARRAY['partenaire', 'partenariat', 'collaboration', 'soutien'], 2);

-- Fonction pour nettoyer les anciennes sessions
CREATE OR REPLACE FUNCTION cleanup_old_ai_sessions()
RETURNS void AS $$
BEGIN
  DELETE FROM ai_sessions 
  WHERE last_activity < NOW() - INTERVAL '7 days' 
  AND is_active = false;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour obtenir les statistiques IA
CREATE OR REPLACE FUNCTION get_ai_stats()
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'total_conversations', COUNT(*),
    'active_sessions', (SELECT COUNT(*) FROM ai_sessions WHERE is_active = true),
    'avg_rating', (SELECT AVG(rating) FROM ai_feedback WHERE rating IS NOT NULL),
    'helpful_feedback', (SELECT COUNT(*) FROM ai_feedback WHERE is_helpful = true)
  ) INTO result
  FROM ai_conversations;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour last_activity
CREATE OR REPLACE FUNCTION update_ai_session_activity()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE ai_sessions 
  SET last_activity = NOW() 
  WHERE session_id = NEW.session_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_ai_session_activity
  AFTER INSERT ON ai_conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_ai_session_activity();
