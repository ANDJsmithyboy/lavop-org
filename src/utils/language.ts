// Système de détection de langue simple
export const detectLanguage = (): string => {
  if (typeof window === 'undefined') return 'fr';
  
  const browserLang = navigator.language || navigator.languages?.[0] || 'fr';
  const lang = browserLang.split('-')[0];
  
  // Langues supportées
  const supportedLanguages = ['fr', 'en', 'es', 'pt'];
  
  return supportedLanguages.includes(lang) ? lang : 'fr';
};

export const getLanguageText = (lang: string) => {
  const texts = {
    fr: {
      hero: {
        title: "L'amour de Dieu",
        subtitle: "en action",
        description: "Jésus-Christ ressuscité, annoncé par les œuvres et la vérité.",
        cta1: "Faire un don maintenant",
        cta2: "Découvrir nos actions"
      },
      founder: {
        title: "Rencontrez Notre Fondateur",
        description: "Découvrez la vision et la passion d'ANDJ Daniel Jonathan"
      },
      actions: {
        title: "Nos Actions Locales & Soutiens"
      }
    },
    en: {
      hero: {
        title: "God's Love",
        subtitle: "in Action",
        description: "Jesus Christ risen, announced through works and truth.",
        cta1: "Make a donation now",
        cta2: "Discover our actions"
      },
      founder: {
        title: "Meet Our Founder",
        description: "Discover the vision and passion of ANDJ Daniel Jonathan"
      },
      actions: {
        title: "Our Local Actions & Support"
      }
    },
    es: {
      hero: {
        title: "El Amor de Dios",
        subtitle: "en Acción",
        description: "Jesucristo resucitado, anunciado por las obras y la verdad.",
        cta1: "Hacer una donación ahora",
        cta2: "Descubrir nuestras acciones"
      },
      founder: {
        title: "Conoce a Nuestro Fundador",
        description: "Descubre la visión y la pasión de ANDJ Daniel Jonathan"
      },
      actions: {
        title: "Nuestras Acciones Locales y Apoyos"
      }
    },
    pt: {
      hero: {
        title: "O Amor de Deus",
        subtitle: "em Ação",
        description: "Jesus Cristo ressuscitado, anunciado pelas obras e pela verdade.",
        cta1: "Fazer uma doação agora",
        cta2: "Descobrir nossas ações"
      },
      founder: {
        title: "Conheça Nosso Fundador",
        description: "Descubra a visão e a paixão de ANDJ Daniel Jonathan"
      },
      actions: {
        title: "Nossas Ações Locais e Apoios"
      }
    }
  };
  
  return texts[lang as keyof typeof texts] || texts.fr;
};
