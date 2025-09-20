// Script pour configurer la base de données Supabase
// À exécuter avec : node scripts/setup-database.js

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zfekgfupuzpnuixaqrsd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZWtnZnVwdXpwbnVpeGFxcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMjQ1NDksImV4cCI6MjA3MzkwMDU0OX0.UF06Fiz4pw5N8MEnOlzrZynzyuwQTMMNLckwDBkgr3k';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  console.log('🚀 Configuration de la base de données Supabase...');
  
  try {
    // Test de connexion
    const { data, error } = await supabase.from('articles').select('count');
    
    if (error) {
      console.log('❌ Erreur de connexion:', error.message);
      console.log('📋 Veuillez exécuter le script SQL dans Supabase SQL Editor:');
      console.log('   1. Allez sur https://supabase.com/dashboard');
      console.log('   2. Sélectionnez votre projet');
      console.log('   3. Allez dans SQL Editor');
      console.log('   4. Copiez et exécutez le contenu de database/schema.sql');
      return;
    }
    
    console.log('✅ Connexion à Supabase réussie !');
    console.log('📊 Base de données prête à être utilisée');
    
  } catch (err) {
    console.error('❌ Erreur:', err.message);
  }
}

setupDatabase();
