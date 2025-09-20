// Test spécifique pour les livres du fondateur
console.log('📚 Test des livres du fondateur - LA VOP');
console.log('========================================');

// Vérifier que tous les livres sont présents
const checkBooks = () => {
  const expectedBooks = [
    "Le Coaching Ultime pour Bâtir Votre Avenir",
    "La Prophétie de Bitcoin", 
    "Le Paradoxe de l'Existence",
    "L'Algorithme du Ciel"
  ];
  
  console.log('🔍 Vérification des livres...');
  
  expectedBooks.forEach((bookTitle, index) => {
    const bookElement = Array.from(document.querySelectorAll('h3')).find(h3 => 
      h3.textContent.includes(bookTitle)
    );
    
    if (bookElement) {
      console.log(`✅ ${index + 1}. ${bookTitle} - Présent`);
      
      // Vérifier les détails du livre
      const bookCard = bookElement.closest('.bg-white');
      if (bookCard) {
        const price = bookCard.querySelector('[class*="text-2xl"]');
        const description = bookCard.querySelector('p');
        const features = bookCard.querySelectorAll('div[class*="text-sm"]');
        
        if (price) console.log(`   💰 Prix: ${price.textContent}`);
        if (description) console.log(`   📝 Description: ${description.textContent.substring(0, 50)}...`);
        if (features.length > 0) console.log(`   ⭐ Features: ${features.length} éléments`);
      }
    } else {
      console.log(`❌ ${index + 1}. ${bookTitle} - Manquant`);
    }
  });
};

// Vérifier la responsivité des livres
const checkBooksResponsiveness = () => {
  const bookCards = document.querySelectorAll('.bg-white.rounded-2xl.shadow-lg');
  
  console.log(`\n📱 Test de responsivité des livres:`);
  console.log(`📊 Nombre de cartes de livres: ${bookCards.length}`);
  
  bookCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const containerWidth = card.parentElement.getBoundingClientRect().width;
    
    console.log(`📖 Livre ${index + 1}:`);
    console.log(`   - Largeur: ${rect.width.toFixed(1)}px`);
    console.log(`   - Hauteur: ${rect.height.toFixed(1)}px`);
    console.log(`   - Responsive: ${rect.width <= containerWidth + 5 ? '✅' : '❌'}`);
  });
};

// Vérifier les images des livres
const checkBookImages = () => {
  const bookImages = document.querySelectorAll('.bg-white img');
  
  console.log(`\n🖼️ Test des images des livres:`);
  console.log(`📸 Nombre d'images: ${bookImages.length}`);
  
  bookImages.forEach((img, index) => {
    console.log(`📖 Image ${index + 1}:`);
    console.log(`   - Source: ${img.src}`);
    console.log(`   - Alt: ${img.alt || 'Pas d\'alt text'}`);
    console.log(`   - Chargée: ${img.complete ? '✅' : '⏳'}`);
    
    if (img.complete) {
      console.log(`   - Dimensions: ${img.naturalWidth}x${img.naturalHeight}`);
    }
  });
};

// Vérifier les boutons d'achat
const checkBuyButtons = () => {
  const buyButtons = document.querySelectorAll('a[href*="chariow"], a[href*="mychariow"], button');
  
  console.log(`\n🛒 Test des boutons d'achat:`);
  console.log(`🔘 Nombre de boutons: ${buyButtons.length}`);
  
  buyButtons.forEach((button, index) => {
    const text = button.textContent || button.value || 'Sans texte';
    const href = button.href || 'Pas de lien';
    
    console.log(`🔘 Bouton ${index + 1}: "${text}"`);
    if (href !== 'Pas de lien') {
      console.log(`   - Lien: ${href}`);
    }
  });
};

// Vérifier les prix
const checkPrices = () => {
  const priceElements = document.querySelectorAll('[class*="text-2xl"], [class*="text-3xl"]');
  
  console.log(`\n💰 Test des prix:`);
  
  priceElements.forEach((priceEl, index) => {
    const text = priceEl.textContent;
    if (text.includes('FCFA') || text.includes('$') || text.includes('€')) {
      console.log(`💰 Prix ${index + 1}: ${text}`);
    }
  });
};

// Exécuter tous les tests
const runBookTests = () => {
  console.log('\n🔍 Exécution des tests des livres...\n');
  
  checkBooks();
  checkBooksResponsiveness();
  checkBookImages();
  checkBuyButtons();
  checkPrices();
  
  console.log('\n✅ Tests des livres terminés !');
  console.log('\n💡 Vérifications à faire manuellement:');
  console.log('1. Tous les 4 livres sont visibles');
  console.log('2. Les images se chargent correctement');
  console.log('3. Les prix sont affichés');
  console.log('4. Les boutons d\'achat fonctionnent');
  console.log('5. Le layout s\'adapte sur mobile');
};

// Lancer les tests
runBookTests();

// Re-tester lors du redimensionnement
window.addEventListener('resize', () => {
  console.log('\n🔄 Redimensionnement détecté, re-test des livres...');
  checkBooksResponsiveness();
});
