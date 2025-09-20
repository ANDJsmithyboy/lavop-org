-- Script SQL pour insérer les données VOP
-- À exécuter APRÈS database/schema-tables-only.sql
-- Ajoute toutes les données de la boutique VOP

-- ========================================
-- INSERTION DES DONNÉES PAR DÉFAUT
-- ========================================

-- Insérer les utilisateurs par défaut
INSERT INTO users (name, email, role, status, permissions) VALUES
('ANDJ Daniel Jonathan', 'jonathanakarentoutoume@gmail.com', 'Admin', 'active', ARRAY['all']),
('Ludmilla Jaël', 'ludmillantoutoume@gmail.com', 'Editor', 'active', ARRAY['articles', 'media'])
ON CONFLICT (email) DO NOTHING;

-- Insérer les données analytics par défaut
INSERT INTO analytics (total_views, total_likes, total_comments, total_articles, total_users, total_donations, monthly_growth, top_articles, recent_activity) VALUES
(1250, 89, 23, 12, 156, 45000, 15.5, 
'[{"title": "Sortie VOP Youth 2023", "views": 245, "growth": 12}, {"title": "Visite Veuve Soutien", "views": 189, "growth": 8}]',
'[{"action": "Nouvel article publié", "user": "ANDJ Daniel Jonathan", "time": "Il y a 2h"}, {"action": "Nouveau contact reçu", "user": "Système", "time": "Il y a 4h"}]')
ON CONFLICT DO NOTHING;

-- Insérer quelques notifications par défaut
INSERT INTO notifications (type, message, time) VALUES
('success', 'Nouvel article publié avec succès', 'Il y a 2h'),
('info', 'Nouveau message de contact reçu', 'Il y a 4h'),
('warning', 'Stock de produits bas', 'Il y a 6h');

-- Insérer les programmes avec VRAIS liens Chariow (tous redirigent vers don-montant-libre)
INSERT INTO programs (name, description, category, status, target_amount, current_amount, contrado_product_id, contrado_url) VALUES
('Programme Veuves', 'Soutien aux veuves et familles vulnérables', 'Aide sociale', 'active', 50000.00, 25000.00, 'don-montant-libre', 'https://obsxsyzu.mychariow.store/don-montant-libre'),
('Programme Orphelins', 'Protection et éducation des enfants', 'Éducation', 'active', 75000.00, 40000.00, 'don-montant-libre', 'https://obsxsyzu.mychariow.store/don-montant-libre'),
('Programme Éducation', 'Formation et développement des compétences', 'Éducation', 'active', 100000.00, 60000.00, 'don-montant-libre', 'https://obsxsyzu.mychariow.store/don-montant-libre'),
('Don Libre', 'Don libre pour soutenir la mission VOP', 'Général', 'active', 200000.00, 120000.00, 'don-montant-libre', 'https://obsxsyzu.mychariow.store/don-montant-libre')
ON CONFLICT DO NOTHING;

-- Insérer les produits T-shirts avec VRAIS liens Contrado
INSERT INTO products (name, description, type, category, price, original_price, status, contrado_product_id, contrado_url, image, sizes, colors, features, rating, reviews_count) VALUES
('T-shirt VOP Principal', 'T-shirt officiel VOP avec logo principal', 'tshirt', 'vop-principal', 38.95, 45.00, 'available', 'vop-t-shirt-2586577', 'https://www.contrado.fr/stores/vop-shop/vop-t-shirt-2586577', '/src/assets/images/boutique/tshirt-vop-principal.jpg', ARRAY['S', 'M', 'L', 'XL', 'XXL'], ARRAY['Blanc', 'Noir', 'Bleu marine'], ARRAY['100% Coton', 'Logo officiel', 'Design classique'], 5.0, 15),
('T-shirt VOPyouth', 'Collection jeunesse avec logo VOPyouth', 'tshirt', 'vopyouth', 38.95, 45.00, 'available', 'vopyouth-t-shirt-2586607', 'https://www.contrado.fr/stores/vop-shop/vopyouth-t-shirt-2586607', '/src/assets/images/boutique/tshirt-vopyouth.jpg', ARRAY['S', 'M', 'L', 'XL', 'XXL'], ARRAY['Blanc', 'Noir', 'Bleu'], ARRAY['100% Coton', 'Logo brodé', 'Design moderne'], 5.0, 12),
('T-shirt VOPsong', 'Collection musicale VOPsong', 'tshirt', 'vopsong', 38.95, 45.00, 'available', 'vopsongmusic-t-shirt-2586610', 'https://www.contrado.fr/stores/vop-shop/vopsongmusic-t-shirt-2586610', '/src/assets/images/boutique/tshirt-vopsong.jpg', ARRAY['S', 'M', 'L', 'XL', 'XXL'], ARRAY['Blanc', 'Noir', 'Rouge'], ARRAY['100% Coton', 'Design musical', 'Qualité premium'], 5.0, 8)
ON CONFLICT DO NOTHING;

-- Insérer les livres avec VRAIS liens Chariow
INSERT INTO products (name, description, type, category, price, original_price, status, contrado_product_id, contrado_url, image, author, features, rating, reviews_count) VALUES
('Comment investir dans ces temps de la fin ?', 'Le Coaching Ultime - Système de coaching interactif pour bâtir votre avenir', 'livre', 'spirituel', 10.00, 25.00, 'available', 'andjguidepratique', 'https://njunarse.mychariow.store/andjguidepratique', '/src/assets/images/boutique/le-coaching-ultime.jpg', 'ANDJ Daniel Jonathan', ARRAY['12 chapitres', 'Workbook actif', 'Secrets bibliques', 'PDF + ePub'], 5.0, 25),
('La Prophétie du Bitcoin', 'Guide complet de la crypto-monnaie', 'livre', 'spirituel', 45.00, 60.00, 'coming_soon', 'prophetie-bitcoin', 'https://njunarse.mychariow.store/prophetie-bitcoin', '/src/assets/images/boutique/la-prophetie-du-bitcoin.jpg', 'ANDJ Daniel Jonathan', ARRAY['À paraître', 'Stratégies d''investissement', 'Analyse technique', 'Prédictions de marché'], 0.0, 0),
('L''Algorithme du Ciel', 'Code divin pour la vie moderne', 'livre', 'spirituel', 40.00, 50.00, 'coming_soon', 'l-algorithme-du-ciel', 'https://njunarse.mychariow.store/l-algorithme-du-ciel', '/src/assets/images/boutique/l-algorithme-du-ciel.jpg', 'ANDJ Daniel Jonathan', ARRAY['À paraître', 'PDF + ePub', 'Principes spirituels', 'Application pratique'], 0.0, 0)
ON CONFLICT DO NOTHING;

-- Insérer les liens externes (livres chrétiens) avec VRAIS liens
INSERT INTO external_links (title, description, url, type, category, image, author, publisher, price, featured, order_index) VALUES
('Chrétien, es-tu un Lion ou une Brebis ?', 'Manuel pour découvrir votre identité réelle en Christ. Un livre qui révolutionnera votre compréhension de l''amour de Dieu et de votre identité en tant qu''enfant de Dieu.', 'https://www.decitre.fr/ebooks/chretien-es-tu-un-lion-ou-une-brebis-9782379797323_9782379797323_1.html', 'livre', 'spirituel', '/src/assets/images/boutique/chretien_est_tu_un_lion_ou_une_brebis_styve.webp', 'Évangéliste Styve Ntoutoume', 'Iggybook', 7.99, true, 1),
('Ressources Spirituelles', 'Collection de livres chrétiens recommandés', 'https://example-christian-bookstore.com/ressources', 'ressource', 'spirituel', '/src/assets/images/boutique/ressources-spirituelles.jpg', 'Divers Auteurs', 'Éditions Chrétiennes', 0.00, false, 2)
ON CONFLICT DO NOTHING;

-- Insérer les paramètres par défaut
INSERT INTO settings (key, value, type, description) VALUES
('site_name', 'La VOP', 'text', 'Nom du site'),
('site_description', 'Christ pour la Veuve, l''Orphelin, le Pauvre', 'text', 'Description du site'),
('contact_email', 'contact@lavop.org', 'text', 'Email de contact'),
('contact_phone', '+241 07 47 91 530', 'text', 'Téléphone de contact'),
('whatsapp_number', '+241074791530', 'text', 'Numéro WhatsApp'),
('donation_goal', '100000', 'number', 'Objectif de dons annuel'),
('contrado_store_url', 'https://www.contrado.fr/stores/vop-shop', 'text', 'URL de la boutique Contrado'),
('boutique_officielle_url', 'https://www.contrado.fr/stores/vop-shop', 'text', 'URL de la boutique officielle'),
('social_links', '{"facebook": "https://facebook.com/christpourlavop", "instagram": "https://instagram.com/christpourlavop", "youtube": "https://youtube.com/@christpourlavop", "tiktok": "https://tiktok.com/@christpourlavop"}', 'json', 'Liens des réseaux sociaux')
ON CONFLICT (key) DO NOTHING;

-- Vérifier que les données ont été insérées
SELECT 'Données VOP insérées avec succès!' as status;
