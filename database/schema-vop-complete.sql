-- Script SQL complet pour La VOP avec intégration Contrado/Chariow
-- À exécuter dans Supabase SQL Editor
-- Gère tous les produits : T-shirts, livres, dons, et liens externes

-- Supprimer les politiques existantes si elles existent
DROP POLICY IF EXISTS "Articles are viewable by everyone" ON articles;
DROP POLICY IF EXISTS "Articles are editable by admins and editors" ON articles;
DROP POLICY IF EXISTS "Users are viewable by admins" ON users;
DROP POLICY IF EXISTS "Contacts are viewable by admins" ON contacts;
DROP POLICY IF EXISTS "Anyone can insert contacts" ON contacts;
DROP POLICY IF EXISTS "Notifications are viewable by admins" ON notifications;
DROP POLICY IF EXISTS "Analytics are viewable by admins" ON analytics;
DROP POLICY IF EXISTS "Programs are viewable by everyone" ON programs;
DROP POLICY IF EXISTS "Programs are editable by admins" ON programs;
DROP POLICY IF EXISTS "Events are viewable by everyone" ON events;
DROP POLICY IF EXISTS "Events are editable by admins" ON events;
DROP POLICY IF EXISTS "Approved testimonials are viewable by everyone" ON testimonials;
DROP POLICY IF EXISTS "Anyone can insert testimonials" ON testimonials;
DROP POLICY IF EXISTS "Testimonials are manageable by admins" ON testimonials;
DROP POLICY IF EXISTS "Settings are viewable by everyone" ON settings;
DROP POLICY IF EXISTS "Settings are editable by admins" ON settings;
DROP POLICY IF EXISTS "Reports are viewable by everyone" ON reports;
DROP POLICY IF EXISTS "Volunteers are viewable by admins" ON volunteers;
DROP POLICY IF EXISTS "Products are viewable by everyone" ON products;
DROP POLICY IF EXISTS "Products are editable by admins" ON products;
DROP POLICY IF EXISTS "External_links are viewable by everyone" ON external_links;
DROP POLICY IF EXISTS "External_links are editable by admins" ON external_links;

-- Table des articles
CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    category VARCHAR(50) NOT NULL,
    image VARCHAR(500),
    published BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    views INTEGER DEFAULT 0,
    likes INTEGER DEFAULT 0,
    comments INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des utilisateurs
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(20) CHECK (role IN ('Admin', 'Editor', 'Moderator', 'Viewer')) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('active', 'inactive', 'suspended')) DEFAULT 'active',
    last_login TIMESTAMP WITH TIME ZONE,
    avatar VARCHAR(500),
    permissions TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des fichiers média
CREATE TABLE IF NOT EXISTS media_files (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(20) CHECK (type IN ('image', 'video', 'document')) NOT NULL,
    size VARCHAR(20) NOT NULL,
    date DATE NOT NULL,
    url VARCHAR(500) NOT NULL,
    alt VARCHAR(255),
    description TEXT,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des notifications
CREATE TABLE IF NOT EXISTS notifications (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) CHECK (type IN ('success', 'info', 'warning', 'error')) NOT NULL,
    message TEXT NOT NULL,
    time VARCHAR(50) NOT NULL,
    read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des contacts
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    reason VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) CHECK (status IN ('nouveau', 'lu', 'repondu')) DEFAULT 'nouveau',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des analytics
CREATE TABLE IF NOT EXISTS analytics (
    id SERIAL PRIMARY KEY,
    total_views INTEGER DEFAULT 0,
    total_likes INTEGER DEFAULT 0,
    total_comments INTEGER DEFAULT 0,
    total_articles INTEGER DEFAULT 0,
    total_users INTEGER DEFAULT 0,
    total_donations INTEGER DEFAULT 0,
    monthly_growth DECIMAL(5,2) DEFAULT 0,
    top_articles JSONB DEFAULT '[]',
    recent_activity JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des programmes (pour les dons)
CREATE TABLE IF NOT EXISTS programs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('active', 'inactive', 'completed', 'planned')) DEFAULT 'active',
    start_date DATE,
    end_date DATE,
    target_amount DECIMAL(10,2),
    current_amount DECIMAL(10,2) DEFAULT 0,
    contrado_product_id VARCHAR(100), -- ID du produit Contrado
    contrado_url VARCHAR(500), -- URL du produit Contrado
    image VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des événements
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    location VARCHAR(255),
    category VARCHAR(50) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')) DEFAULT 'upcoming',
    max_participants INTEGER,
    current_participants INTEGER DEFAULT 0,
    image VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des témoignages
CREATE TABLE IF NOT EXISTS testimonials (
    id SERIAL PRIMARY KEY,
    author_name VARCHAR(100) NOT NULL,
    author_role VARCHAR(100),
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    image VARCHAR(500),
    status VARCHAR(20) CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des paramètres
CREATE TABLE IF NOT EXISTS settings (
    id SERIAL PRIMARY KEY,
    key VARCHAR(100) UNIQUE NOT NULL,
    value TEXT NOT NULL,
    type VARCHAR(20) CHECK (type IN ('text', 'number', 'boolean', 'json')) DEFAULT 'text',
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des rapports
CREATE TABLE IF NOT EXISTS reports (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    file_url VARCHAR(500) NOT NULL,
    year INTEGER NOT NULL,
    quarter INTEGER CHECK (quarter >= 1 AND quarter <= 4),
    status VARCHAR(20) CHECK (status IN ('draft', 'published', 'archived')) DEFAULT 'draft',
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des bénévoles
CREATE TABLE IF NOT EXISTS volunteers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    skills TEXT[] DEFAULT '{}',
    availability VARCHAR(100),
    status VARCHAR(20) CHECK (status IN ('active', 'inactive', 'pending')) DEFAULT 'pending',
    join_date DATE DEFAULT CURRENT_DATE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des produits (T-shirts, livres, etc.)
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'tshirt', 'livre', 'don', 'accessoire'
    category VARCHAR(50) NOT NULL, -- 'vopyouth', 'vopsong', 'vop-principal', 'spirituel', 'don'
    price DECIMAL(10,2),
    original_price DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'EUR',
    status VARCHAR(20) CHECK (status IN ('available', 'unavailable', 'coming_soon', 'sold_out')) DEFAULT 'available',
    contrado_product_id VARCHAR(100), -- ID du produit Contrado
    contrado_url VARCHAR(500), -- URL du produit Contrado
    external_url VARCHAR(500), -- URL externe (pour livres chrétiens)
    image VARCHAR(500),
    images TEXT[], -- Images multiples
    sizes TEXT[], -- Tailles disponibles
    colors TEXT[], -- Couleurs disponibles
    features TEXT[], -- Caractéristiques
    author VARCHAR(100), -- Pour les livres
    isbn VARCHAR(20), -- Pour les livres
    pages INTEGER, -- Pour les livres
    language VARCHAR(10) DEFAULT 'fr',
    rating DECIMAL(3,2) DEFAULT 0,
    reviews_count INTEGER DEFAULT 0,
    stock_quantity INTEGER DEFAULT 0,
    weight DECIMAL(5,2), -- Poids en kg
    dimensions VARCHAR(50), -- Dimensions
    tags TEXT[] DEFAULT '{}',
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des liens externes (livres chrétiens, etc.)
CREATE TABLE IF NOT EXISTS external_links (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    url VARCHAR(500) NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'livre', 'ressource', 'partenaire', 'ministère'
    category VARCHAR(50) NOT NULL,
    image VARCHAR(500),
    author VARCHAR(100),
    publisher VARCHAR(100),
    price DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'EUR',
    language VARCHAR(10) DEFAULT 'fr',
    status VARCHAR(20) CHECK (status IN ('active', 'inactive', 'pending')) DEFAULT 'active',
    featured BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

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

-- Insérer les programmes avec liens Contrado
INSERT INTO programs (name, description, category, status, target_amount, current_amount, contrado_product_id, contrado_url) VALUES
('Programme Veuves', 'Soutien aux veuves et familles vulnérables', 'Aide sociale', 'active', 50000.00, 25000.00, 'don-veuves', 'https://www.contrado.fr/stores/vop-shop/don-programme-veuves'),
('Programme Orphelins', 'Protection et éducation des enfants', 'Éducation', 'active', 75000.00, 40000.00, 'don-orphelins', 'https://www.contrado.fr/stores/vop-shop/don-programme-orphelins'),
('Programme Éducation', 'Formation et développement des compétences', 'Éducation', 'active', 100000.00, 60000.00, 'don-education', 'https://www.contrado.fr/stores/vop-shop/don-programme-education'),
('Don Libre', 'Don libre pour soutenir la mission VOP', 'Général', 'active', 200000.00, 120000.00, 'don-libre', 'https://www.contrado.fr/stores/vop-shop/don-libre')
ON CONFLICT DO NOTHING;

-- Insérer les produits T-shirts Contrado
INSERT INTO products (name, description, type, category, price, original_price, status, contrado_product_id, contrado_url, image, sizes, colors, features, rating, reviews_count) VALUES
('T-shirt VOPyouth', 'Collection jeunesse avec logo VOPyouth', 'tshirt', 'vopyouth', 38.95, 45.00, 'available', 'tshirt-vopyouth', 'https://www.contrado.fr/stores/vop-shop/tshirt-vopyouth', '/src/assets/images/boutique/tshirt-vopyouth.jpg', ARRAY['S', 'M', 'L', 'XL', 'XXL'], ARRAY['Blanc', 'Noir', 'Bleu'], ARRAY['100% Coton', 'Logo brodé', 'Design moderne'], 5.0, 12),
('T-shirt VOPsong', 'Collection musicale VOPsong', 'tshirt', 'vopsong', 38.95, 45.00, 'available', 'tshirt-vopsong', 'https://www.contrado.fr/stores/vop-shop/tshirt-vopsong', '/src/assets/images/boutique/tshirt-vopsong.jpg', ARRAY['S', 'M', 'L', 'XL', 'XXL'], ARRAY['Blanc', 'Noir', 'Rouge'], ARRAY['100% Coton', 'Design musical', 'Qualité premium'], 5.0, 8),
('T-shirt VOP Principal', 'T-shirt officiel VOP avec logo principal', 'tshirt', 'vop-principal', 38.95, 45.00, 'available', 'tshirt-vop-principal', 'https://www.contrado.fr/stores/vop-shop/tshirt-vop-principal', '/src/assets/images/boutique/tshirt-vop-principal.jpg', ARRAY['S', 'M', 'L', 'XL', 'XXL'], ARRAY['Blanc', 'Noir', 'Bleu marine'], ARRAY['100% Coton', 'Logo officiel', 'Design classique'], 5.0, 15)
ON CONFLICT DO NOTHING;

-- Insérer les livres Contrado
INSERT INTO products (name, description, type, category, price, original_price, status, contrado_product_id, contrado_url, image, author, features, rating, reviews_count) VALUES
('Le Coaching Ultime', 'Système de coaching interactif pour bâtir votre avenir', 'livre', 'spirituel', 10.00, 25.00, 'available', 'le-coaching-ultime', 'https://www.contrado.fr/stores/vop-shop/le-coaching-ultime', '/src/assets/images/boutique/le-coaching-ultime.jpg', 'ANDJ Daniel Jonathan', ARRAY['12 chapitres', 'Workbook actif', 'Secrets bibliques', 'PDF + ePub'], 5.0, 25),
('L''Algorithme du Ciel', 'Code divin pour la vie moderne', 'livre', 'spirituel', 40.00, 50.00, 'coming_soon', 'l-algorithme-du-ciel', 'https://www.contrado.fr/stores/vop-shop/l-algorithme-du-ciel', '/src/assets/images/boutique/l-algorithme-du-ciel.jpg', 'ANDJ Daniel Jonathan', ARRAY['À paraître', 'PDF + ePub', 'Principes spirituels', 'Application pratique'], 0.0, 0),
('La Prophétie du Bitcoin', 'Guide complet de la crypto-monnaie', 'livre', 'spirituel', 45.00, 60.00, 'coming_soon', 'la-prophetie-du-bitcoin', 'https://www.contrado.fr/stores/vop-shop/la-prophetie-du-bitcoin', '/src/assets/images/boutique/la-prophetie-du-bitcoin.jpg', 'ANDJ Daniel Jonathan', ARRAY['À paraître', 'Stratégies d''investissement', 'Analyse technique', 'Prédictions de marché'], 0.0, 0)
ON CONFLICT DO NOTHING;

-- Insérer les liens externes (livres chrétiens)
INSERT INTO external_links (title, description, url, type, category, image, author, publisher, price, featured, order_index) VALUES
('Es-tu un Lion ou une Brebis ?', 'Livre chrétien sur le leadership et la foi', 'https://example-christian-bookstore.com/es-tu-un-lion-ou-une-brebis', 'livre', 'spirituel', '/src/assets/images/boutique/es-tu-un-lion-ou-une-brebis.jpg', 'Auteur Chrétien', 'Éditions Chrétiennes', 15.00, true, 1),
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

-- Créer des index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published);
CREATE INDEX IF NOT EXISTS idx_articles_featured ON articles(featured);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON notifications(read);
CREATE INDEX IF NOT EXISTS idx_programs_status ON programs(status);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);
CREATE INDEX IF NOT EXISTS idx_events_event_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_testimonials_status ON testimonials(status);
CREATE INDEX IF NOT EXISTS idx_reports_year ON reports(year);
CREATE INDEX IF NOT EXISTS idx_volunteers_status ON volunteers(status);
CREATE INDEX IF NOT EXISTS idx_products_type ON products(type);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
CREATE INDEX IF NOT EXISTS idx_external_links_type ON external_links(type);
CREATE INDEX IF NOT EXISTS idx_external_links_status ON external_links(status);

-- Activer RLS (Row Level Security)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE external_links ENABLE ROW LEVEL SECURITY;

-- Créer les politiques de sécurité
-- Pour les articles - lecture publique, écriture pour les admins/éditeurs
CREATE POLICY "Articles are viewable by everyone" ON articles FOR SELECT USING (true);
CREATE POLICY "Articles are editable by admins and editors" ON articles FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role IN ('Admin', 'Editor')
    )
);

-- Pour les utilisateurs - lecture pour les admins, écriture pour les admins
CREATE POLICY "Users are viewable by admins" ON users FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Pour les contacts - lecture pour les admins, insertion publique
CREATE POLICY "Contacts are viewable by admins" ON contacts FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);
CREATE POLICY "Anyone can insert contacts" ON contacts FOR INSERT WITH CHECK (true);

-- Pour les notifications - lecture pour les admins
CREATE POLICY "Notifications are viewable by admins" ON notifications FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Pour les analytics - lecture pour les admins
CREATE POLICY "Analytics are viewable by admins" ON analytics FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Pour les programmes - lecture publique, écriture pour les admins
CREATE POLICY "Programs are viewable by everyone" ON programs FOR SELECT USING (true);
CREATE POLICY "Programs are editable by admins" ON programs FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Pour les événements - lecture publique, écriture pour les admins
CREATE POLICY "Events are viewable by everyone" ON events FOR SELECT USING (true);
CREATE POLICY "Events are editable by admins" ON events FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Pour les témoignages - lecture publique (approuvés), écriture publique, gestion pour les admins
CREATE POLICY "Approved testimonials are viewable by everyone" ON testimonials FOR SELECT USING (status = 'approved');
CREATE POLICY "Anyone can insert testimonials" ON testimonials FOR INSERT WITH CHECK (true);
CREATE POLICY "Testimonials are manageable by admins" ON testimonials FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Pour les paramètres - lecture publique, écriture pour les admins
CREATE POLICY "Settings are viewable by everyone" ON settings FOR SELECT USING (true);
CREATE POLICY "Settings are editable by admins" ON settings FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Pour les rapports - lecture publique, écriture pour les admins
CREATE POLICY "Reports are viewable by everyone" ON reports FOR SELECT USING (status = 'published');
CREATE POLICY "Reports are editable by admins" ON reports FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Pour les bénévoles - lecture pour les admins, insertion publique
CREATE POLICY "Volunteers are viewable by admins" ON volunteers FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);
CREATE POLICY "Anyone can insert volunteers" ON volunteers FOR INSERT WITH CHECK (true);

-- Pour les produits - lecture publique, écriture pour les admins
CREATE POLICY "Products are viewable by everyone" ON products FOR SELECT USING (true);
CREATE POLICY "Products are editable by admins" ON products FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Pour les liens externes - lecture publique, écriture pour les admins
CREATE POLICY "External_links are viewable by everyone" ON external_links FOR SELECT USING (status = 'active');
CREATE POLICY "External_links are editable by admins" ON external_links FOR ALL USING (
    EXISTS (
        SELECT 1 FROM users 
        WHERE users.email = auth.jwt() ->> 'email' 
        AND users.role = 'Admin'
    )
);

-- Vérifier que tout est bien configuré
SELECT 'Base de données VOP complète avec Contrado créée avec succès!' as status;
