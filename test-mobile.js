// Script de test automatique pour l'optimisation mobile
// À exécuter dans la console du navigateur

console.log('🚀 Test d\'optimisation mobile - LA VOP');
console.log('=====================================');

// 1. Vérifier la viewport meta tag
const viewport = document.querySelector('meta[name="viewport"]');
if (viewport) {
  console.log('✅ Viewport meta tag présent:', viewport.content);
} else {
  console.log('❌ Viewport meta tag manquant');
}

// 2. Vérifier les breakpoints responsive
const checkBreakpoints = () => {
  const width = window.innerWidth;
  console.log(`📱 Largeur actuelle: ${width}px`);
  
  if (width < 640) {
    console.log('📱 Mode: Mobile (< 640px)');
  } else if (width < 768) {
    console.log('📱 Mode: Mobile Large (640px - 768px)');
  } else if (width < 1024) {
    console.log('📱 Mode: Tablet (768px - 1024px)');
  } else {
    console.log('💻 Mode: Desktop (> 1024px)');
  }
};

// 3. Vérifier les éléments tactiles
const checkTouchElements = () => {
  const buttons = document.querySelectorAll('button, a, input[type="button"], input[type="submit"]');
  let touchIssues = 0;
  
  buttons.forEach(button => {
    const rect = button.getBoundingClientRect();
    if (rect.height < 44) {
      console.log('⚠️ Bouton trop petit:', button.textContent || button.value, `(${rect.height}px)`);
      touchIssues++;
    }
  });
  
  if (touchIssues === 0) {
    console.log('✅ Tous les boutons respectent la taille tactile minimale (44px)');
  } else {
    console.log(`❌ ${touchIssues} boutons trop petits pour le tactile`);
  }
};

// 4. Vérifier les images responsive
const checkResponsiveImages = () => {
  const images = document.querySelectorAll('img');
  let responsiveIssues = 0;
  
  images.forEach(img => {
    const rect = img.getBoundingClientRect();
    const containerWidth = img.parentElement.getBoundingClientRect().width;
    
    if (rect.width > containerWidth + 10) {
      console.log('⚠️ Image déborde:', img.src, `(${rect.width}px > ${containerWidth}px)`);
      responsiveIssues++;
    }
  });
  
  if (responsiveIssues === 0) {
    console.log('✅ Toutes les images sont responsive');
  } else {
    console.log(`❌ ${responsiveIssues} images débordent de leur conteneur`);
  }
};

// 5. Vérifier la navigation mobile
const checkMobileNavigation = () => {
  const mobileMenu = document.querySelector('[class*="mobile"], [class*="hamburger"], [class*="menu"]');
  if (mobileMenu) {
    console.log('✅ Navigation mobile détectée');
  } else {
    console.log('⚠️ Navigation mobile non détectée');
  }
};

// 6. Vérifier les performances
const checkPerformance = () => {
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
      const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
      console.log(`⏱️ Temps de chargement: ${loadTime.toFixed(2)}ms`);
      
      if (loadTime < 3000) {
        console.log('✅ Temps de chargement acceptable');
      } else {
        console.log('⚠️ Temps de chargement lent');
      }
    }
  }
};

// 7. Vérifier l'accessibilité
const checkAccessibility = () => {
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  
  if (imagesWithoutAlt.length === 0) {
    console.log('✅ Toutes les images ont un attribut alt');
  } else {
    console.log(`⚠️ ${imagesWithoutAlt.length} images sans attribut alt`);
  }
  
  if (inputsWithoutLabels.length === 0) {
    console.log('✅ Tous les inputs ont des labels');
  } else {
    console.log(`⚠️ ${inputsWithoutLabels.length} inputs sans labels`);
  }
};

// Exécuter tous les tests
const runAllTests = () => {
  console.log('\n🔍 Exécution des tests...\n');
  
  checkBreakpoints();
  checkTouchElements();
  checkResponsiveImages();
  checkMobileNavigation();
  checkPerformance();
  checkAccessibility();
  
  console.log('\n✅ Tests terminés !');
  console.log('\n💡 Pour tester sur différentes tailles:');
  console.log('1. Ouvrez les DevTools (F12)');
  console.log('2. Cliquez sur l\'icône mobile (📱)');
  console.log('3. Sélectionnez différentes résolutions');
  console.log('4. Rechargez cette page et relancez les tests');
};

// Lancer les tests
runAllTests();

// Re-lancer les tests lors du redimensionnement
window.addEventListener('resize', () => {
  console.log('\n🔄 Redimensionnement détecté, re-test...');
  checkBreakpoints();
  checkTouchElements();
  checkResponsiveImages();
});

console.log('\n📋 Guide de test complet disponible dans MOBILE_TESTING_GUIDE.md');
