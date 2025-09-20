// Test spécifique pour les réseaux sociaux et statistiques
console.log('🌐 Test des réseaux sociaux et statistiques - LA VOP');
console.log('==================================================');

// Vérifier les réseaux sociaux
const checkSocialLinks = () => {
  const expectedSocials = [
    { name: "TikTok", url: "https://www.tiktok.com/@christpourlavop" },
    { name: "YouTube", url: "https://youtube.com/@christpourlavop" },
    { name: "Medium", url: "https://medium.com/@danielandj" },
    { name: "Email", url: "mailto:jonathanakarentoutoume@gmail.com" }
  ];
  
  console.log('🔍 Vérification des réseaux sociaux...');
  
  expectedSocials.forEach((social, index) => {
    const linkElement = Array.from(document.querySelectorAll('a')).find(a => 
      a.href === social.url || a.href.includes(social.name.toLowerCase())
    );
    
    if (linkElement) {
      console.log(`✅ ${index + 1}. ${social.name} - ${social.url}`);
    } else {
      console.log(`❌ ${index + 1}. ${social.name} - Lien non trouvé`);
    }
  });
};

// Vérifier les statistiques
const checkStatistics = () => {
  console.log('\n📊 Vérification des statistiques...');
  
  const pageText = document.body.textContent;
  
  // Vérifier les statistiques clés
  const stats = [
    { text: "6 années d'engagement", found: pageText.includes("6 années") },
    { text: "2+ orphelinats soutenus", found: pageText.includes("orphelinats") },
    { text: "12+ pays étrangers", found: pageText.includes("pays étrangers") },
    { text: "23 ans", found: pageText.includes("23 ans") },
    { text: "Libreville, Gabon", found: pageText.includes("Libreville") }
  ];
  
  stats.forEach((stat, index) => {
    console.log(`${stat.found ? '✅' : '❌'} ${index + 1}. ${stat.text}`);
  });
};

// Vérifier les informations de contact
const checkContactInfo = () => {
  console.log('\n📞 Vérification des informations de contact...');
  
  const pageText = document.body.textContent;
  
  const contactInfo = [
    { text: "jonathanakarentoutoume@gmail.com", found: pageText.includes("jonathanakarentoutoume@gmail.com") },
    { text: "+241 65 51 58 77", found: pageText.includes("+241 65 51 58 77") },
    { text: "Libreville, Gabon", found: pageText.includes("Libreville, Gabon") }
  ];
  
  contactInfo.forEach((info, index) => {
    console.log(`${info.found ? '✅' : '❌'} ${index + 1}. ${info.text}`);
  });
};

// Vérifier les réalisations
const checkAchievements = () => {
  console.log('\n🏆 Vérification des réalisations...');
  
  const achievementTitles = document.querySelectorAll('h3');
  const expectedAchievements = [
    "Fondateur de LA VOP",
    "CEO SmartANDJ AI Technologies", 
    "Étudiant en IA & Objets Connectés",
    "Prophète & Visionnaire"
  ];
  
  expectedAchievements.forEach((achievement, index) => {
    const found = Array.from(achievementTitles).some(h3 => 
      h3.textContent.includes(achievement)
    );
    console.log(`${found ? '✅' : '❌'} ${index + 1}. ${achievement}`);
  });
};

// Vérifier les livres
const checkBooks = () => {
  console.log('\n📚 Vérification des livres...');
  
  const expectedBooks = [
    "Le Coaching Ultime pour Bâtir Votre Avenir",
    "La Prophétie de Bitcoin",
    "Le Paradoxe de l'Existence", 
    "L'Algorithme du Ciel"
  ];
  
  expectedBooks.forEach((book, index) => {
    const found = document.body.textContent.includes(book);
    console.log(`${found ? '✅' : '❌'} ${index + 1}. ${book}`);
  });
};

// Vérifier la responsivité des liens
const checkLinksResponsiveness = () => {
  console.log('\n📱 Test de responsivité des liens...');
  
  const socialLinks = document.querySelectorAll('a[href*="tiktok"], a[href*="youtube"], a[href*="medium"], a[href*="mailto"]');
  
  socialLinks.forEach((link, index) => {
    const rect = link.getBoundingClientRect();
    const isTouchFriendly = rect.height >= 44;
    
    console.log(`🔗 Lien ${index + 1}: ${link.textContent}`);
    console.log(`   - Taille: ${rect.width.toFixed(1)}x${rect.height.toFixed(1)}px`);
    console.log(`   - Tactile: ${isTouchFriendly ? '✅' : '❌'}`);
  });
};

// Exécuter tous les tests
const runAllTests = () => {
  console.log('\n🔍 Exécution des tests...\n');
  
  checkSocialLinks();
  checkStatistics();
  checkContactInfo();
  checkAchievements();
  checkBooks();
  checkLinksResponsiveness();
  
  console.log('\n✅ Tests terminés !');
  console.log('\n💡 Vérifications manuelles à faire:');
  console.log('1. Cliquer sur chaque lien social');
  console.log('2. Vérifier que les statistiques sont cohérentes');
  console.log('3. Tester les boutons de contact');
  console.log('4. Vérifier la responsivité sur mobile');
};

// Lancer les tests
runAllTests();

// Re-tester lors du redimensionnement
window.addEventListener('resize', () => {
  console.log('\n🔄 Redimensionnement détecté, re-test...');
  checkLinksResponsiveness();
});
