// Test spécifique pour l'image du fondateur
console.log('🖼️ Test de l\'image du fondateur - LA VOP');
console.log('==========================================');

// Vérifier que l'image du fondateur est présente
const checkFounderImage = () => {
  const founderImage = document.querySelector('img[alt*="ANDJ Daniel Jonathan"]');
  
  if (founderImage) {
    console.log('✅ Image du fondateur trouvée');
    console.log('📸 Source:', founderImage.src);
    console.log('📏 Dimensions:', founderImage.naturalWidth + 'x' + founderImage.naturalHeight);
    console.log('🎨 Classes CSS:', founderImage.className);
    
    // Vérifier si l'image est chargée
    if (founderImage.complete && founderImage.naturalHeight !== 0) {
      console.log('✅ Image chargée avec succès');
    } else {
      console.log('⏳ Image en cours de chargement...');
      
      founderImage.onload = () => {
        console.log('✅ Image chargée après attente');
        console.log('📏 Dimensions finales:', founderImage.naturalWidth + 'x' + founderImage.naturalHeight);
      };
      
      founderImage.onerror = () => {
        console.log('❌ Erreur de chargement de l\'image');
        console.log('🔍 Vérifiez le chemin:', founderImage.src);
      };
    }
  } else {
    console.log('❌ Image du fondateur non trouvée');
    
    // Chercher toutes les images sur la page
    const allImages = document.querySelectorAll('img');
    console.log('🔍 Images trouvées sur la page:', allImages.length);
    
    allImages.forEach((img, index) => {
      console.log(`Image ${index + 1}:`, img.src, img.alt);
    });
  }
};

// Vérifier la responsivité de l'image
const checkImageResponsiveness = () => {
  const founderImage = document.querySelector('img[alt*="ANDJ Daniel Jonathan"]');
  
  if (founderImage) {
    const rect = founderImage.getBoundingClientRect();
    const containerWidth = founderImage.parentElement.getBoundingClientRect().width;
    
    console.log('📱 Test de responsivité:');
    console.log('  - Largeur de l\'image:', rect.width + 'px');
    console.log('  - Largeur du conteneur:', containerWidth + 'px');
    console.log('  - Ratio:', (rect.width / containerWidth * 100).toFixed(1) + '%');
    
    if (rect.width <= containerWidth + 5) {
      console.log('✅ Image responsive (ne déborde pas)');
    } else {
      console.log('⚠️ Image déborde du conteneur');
    }
  }
};

// Vérifier l'accessibilité de l'image
const checkImageAccessibility = () => {
  const founderImage = document.querySelector('img[alt*="ANDJ Daniel Jonathan"]');
  
  if (founderImage) {
    console.log('♿ Test d\'accessibilité:');
    console.log('  - Alt text:', founderImage.alt);
    console.log('  - Alt text présent:', founderImage.alt ? '✅' : '❌');
    console.log('  - Alt text descriptif:', founderImage.alt.length > 10 ? '✅' : '⚠️');
  }
};

// Vérifier le style de l'image
const checkImageStyle = () => {
  const founderImage = document.querySelector('img[alt*="ANDJ Daniel Jonathan"]');
  
  if (founderImage) {
    const styles = window.getComputedStyle(founderImage);
    console.log('🎨 Style de l\'image:');
    console.log('  - Border radius:', styles.borderRadius);
    console.log('  - Box shadow:', styles.boxShadow);
    console.log('  - Object fit:', styles.objectFit);
    console.log('  - Aspect ratio:', styles.aspectRatio);
  }
};

// Exécuter tous les tests
const runImageTests = () => {
  console.log('\n🔍 Exécution des tests d\'image...\n');
  
  checkFounderImage();
  checkImageResponsiveness();
  checkImageAccessibility();
  checkImageStyle();
  
  console.log('\n✅ Tests d\'image terminés !');
  console.log('\n💡 Si l\'image ne s\'affiche pas:');
  console.log('1. Vérifiez que le fichier existe: src/assets/images/founder/photo_andj_ceo.jpg');
  console.log('2. Vérifiez la console pour les erreurs 404');
  console.log('3. Testez sur différentes résolutions');
};

// Lancer les tests
runImageTests();

// Re-tester lors du redimensionnement
window.addEventListener('resize', () => {
  console.log('\n🔄 Redimensionnement détecté, re-test de l\'image...');
  checkImageResponsiveness();
});
