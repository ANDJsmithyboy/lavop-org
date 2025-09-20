// Configuration centralisée des liens Chariow
// Liens officiels LA VOP

export const CHARIOW_LINKS = {
  // Dons généraux - LIENS OFFICIELS
  DON_LIBRE: 'https://obsxsyzu.mychariow.store/don-montant-libre',
  DON_5000: 'https://obsxsyzu.mychariow.store/don-5000-fcfa',
  DON_10000: 'https://obsxsyzu.mychariow.store/don-10000-fcfa',
  DON_25000: 'https://obsxsyzu.mychariow.store/don-25000-fcfa',
  DON_50000: 'https://obsxsyzu.mychariow.store/don-50000-fcfa',

  // Dons par programme - À créer dans Chariow
  DON_VEUVE: 'https://obsxsyzu.mychariow.store/don-programme-veuves',
  DON_ORPHELIN: 'https://obsxsyzu.mychariow.store/don-programme-orphelins',
  DON_EDUCATION: 'https://obsxsyzu.mychariow.store/don-programme-education',
  DON_EVANGELISATION: 'https://obsxsyzu.mychariow.store/don-programme-evangelisation',

  // Boutique - Liens officiels
  BOUTIQUE_LIVRE_INVESTIR: 'https://njunarse.mychariow.store/andjguidepratique',
  BOUTIQUE_LIVRE_BITCOIN: 'https://njunarse.mychariow.store/prophetie-bitcoin', // À venir
  
      // Boutique officielle VOP Shop sur Contrado
      BOUTIQUE_OFFICIELLE: 'https://www.contrado.fr/stores/vop-shop/',
      BOUTIQUE_TEE_VOP: 'https://www.contrado.fr/stores/vop-shop/vop-t-shirt-2586577',
      BOUTIQUE_TEE_VOPYOUTH: 'https://www.contrado.fr/stores/vop-shop/vopyouth-t-shirt-2586607',
      BOUTIQUE_TEE_VOPSONG: 'https://www.contrado.fr/stores/vop-shop/vopsongmusic-t-shirt-2586610',
} as const;

// Fonction utilitaire pour ajouter des UTM parameters
export const addUTMParams = (baseUrl: string, source: string, medium: string, campaign?: string) => {
  const url = new URL(baseUrl);
  url.searchParams.set('utm_source', source);
  url.searchParams.set('utm_medium', medium);
  if (campaign) {
    url.searchParams.set('utm_campaign', campaign);
  }
  return url.toString();
};

// Liens pré-configurés avec UTM
export const UTM_LINKS = {
  // Dons avec tracking
  DON_LIBRE_HERO: addUTMParams(CHARIOW_LINKS.DON_LIBRE, 'site', 'hero', 'don_principal'),
  DON_LIBRE_HEADER: addUTMParams(CHARIOW_LINKS.DON_LIBRE, 'site', 'header', 'don_global'),
  DON_LIBRE_FOOTER: addUTMParams(CHARIOW_LINKS.DON_LIBRE, 'site', 'footer', 'don_global'),
  DON_LIBRE_SECTION: addUTMParams(CHARIOW_LINKS.DON_LIBRE, 'site', 'donation_section', 'don_global'),
  
  // Dons rapides
  DON_5000_HERO: addUTMParams(CHARIOW_LINKS.DON_5000, 'site', 'hero', 'don_rapide'),
  DON_10000_HERO: addUTMParams(CHARIOW_LINKS.DON_10000, 'site', 'hero', 'don_rapide'),
  DON_25000_HERO: addUTMParams(CHARIOW_LINKS.DON_25000, 'site', 'hero', 'don_rapide'),
  
  // Dons par programme
  DON_VEUVE_PROGRAMME: addUTMParams(CHARIOW_LINKS.DON_VEUVE, 'site', 'programme', 'veuve'),
  DON_ORPHELIN_PROGRAMME: addUTMParams(CHARIOW_LINKS.DON_ORPHELIN, 'site', 'programme', 'orphelin'),
  DON_EDUCATION_PROGRAMME: addUTMParams(CHARIOW_LINKS.DON_EDUCATION, 'site', 'programme', 'education'),
  DON_EVANGELISATION_PROGRAMME: addUTMParams(CHARIOW_LINKS.DON_EVANGELISATION, 'site', 'programme', 'evangelisation'),
  
  // Boutique officielle
  BOUTIQUE_OFFICIELLE: CHARIOW_LINKS.BOUTIQUE_OFFICIELLE,
} as const;
