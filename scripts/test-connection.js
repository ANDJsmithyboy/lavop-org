// Script pour tester la connexion à Supabase
// À exécuter avec : node scripts/test-connection.js

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zfekgfupuzpnuixaqrsd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZWtnZnVwdXpwbnVpeGFxcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMjQ1NDksImV4cCI6MjA3MzkwMDU0OX0.UF06Fiz4pw5N8MEnOlzrZynzyuwQTMMNLckwDBkgr3k';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('🔍 Test de connexion à Supabase...');
  
  try {
    // Test 1: Connexion de base
    console.log('1️⃣ Test de connexion de base...');
    const { data: healthCheck, error: healthError } = await supabase
      .from('users')
      .select('count')
      .limit(1);
    
    if (healthError) {
      console.log('❌ Erreur de connexion:', healthError.message);
      return;
    }
    
    console.log('✅ Connexion réussie !');
    
    // Test 2: Vérifier les tables
    console.log('\n2️⃣ Vérification des tables...');
    const tables = ['articles', 'users', 'contacts', 'notifications', 'analytics', 'donations', 'programs', 'events', 'testimonials'];
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('count')
          .limit(1);
        
        if (error) {
          console.log(`❌ Table ${table}: ${error.message}`);
        } else {
          console.log(`✅ Table ${table}: OK`);
        }
      } catch (err) {
        console.log(`❌ Table ${table}: ${err.message}`);
      }
    }
    
    // Test 3: Vérifier les utilisateurs par défaut
    console.log('\n3️⃣ Vérification des utilisateurs...');
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('name, email, role, status');
    
    if (usersError) {
      console.log('❌ Erreur lors de la récupération des utilisateurs:', usersError.message);
    } else {
      console.log('✅ Utilisateurs trouvés:');
      users.forEach(user => {
        console.log(`   - ${user.name} (${user.email}) - ${user.role} - ${user.status}`);
      });
    }
    
    // Test 4: Vérifier les analytics
    console.log('\n4️⃣ Vérification des analytics...');
    const { data: analytics, error: analyticsError } = await supabase
      .from('analytics')
      .select('*')
      .limit(1);
    
    if (analyticsError) {
      console.log('❌ Erreur lors de la récupération des analytics:', analyticsError.message);
    } else {
      console.log('✅ Analytics trouvés:');
      if (analytics.length > 0) {
        const stats = analytics[0];
        console.log(`   - Vues totales: ${stats.total_views}`);
        console.log(`   - Articles: ${stats.total_articles}`);
        console.log(`   - Utilisateurs: ${stats.total_users}`);
        console.log(`   - Dons: ${stats.total_donations} FCFA`);
      }
    }
    
    console.log('\n🎉 Test de connexion terminé avec succès !');
    console.log('📊 Votre base de données VOP est prête à être utilisée.');
    
  } catch (err) {
    console.error('❌ Erreur générale:', err.message);
    console.log('\n🔧 Solutions possibles:');
    console.log('1. Vérifiez que le projet Supabase est actif');
    console.log('2. Vérifiez les clés API dans src/config/supabase.ts');
    console.log('3. Exécutez le script SQL dans Supabase SQL Editor');
    console.log('4. Vérifiez les politiques RLS');
  }
}

testConnection();
