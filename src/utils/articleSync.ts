// Système de synchronisation des articles entre dashboard et blog
export const ARTICLE_STORAGE_KEY = 'vop_articles';

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  published: boolean;
  views: number;
  likes: number;
  comments: number;
}

export const saveArticle = (article: Article): void => {
  const articles = getArticles();
  const existingIndex = articles.findIndex(a => a.id === article.id);
  
  if (existingIndex >= 0) {
    articles[existingIndex] = article;
  } else {
    articles.push(article);
  }
  
  localStorage.setItem(ARTICLE_STORAGE_KEY, JSON.stringify(articles));
};

export const getArticles = (): Article[] => {
  const stored = localStorage.getItem(ARTICLE_STORAGE_KEY);
  if (!stored) {
    // Articles par défaut
    const defaultArticles: Article[] = [
      {
        id: 1,
        title: "Sortie VOP 2025 : Joie et Espoir avec les Enfants Handicapés",
        excerpt: "Le 15 juin 2025 restera gravé dans nos mémoires comme une journée exceptionnelle de partage et d'amour. Notre équipe VOP s'est rendue à l'Association Tous Différents de Libreville pour une mission spéciale dédiée aux enfants handicapés.",
        content: "Le 15 juin 2025 restera gravé dans nos mémoires comme une journée exceptionnelle de partage et d'amour. Notre équipe VOP s'est rendue à l'Association Tous Différents de Libreville pour une mission spéciale dédiée aux enfants handicapés.\n\n**Une Mission d'Amour**\n\nDès notre arrivée, nous avons été accueillis par des sourires radieux et des regards pleins d'espoir. Ces enfants, malgré leurs défis quotidiens, nous ont enseigné une leçon précieuse sur la joie de vivre et la résilience.\n\nNotre fondateur, ANDJ Daniel Jonathan, a partagé un moment touchant avec une petite fille de 8 ans qui, malgré son handicap moteur, a réussi à nous faire rire avec ses blagues. C'est dans ces moments que l'on comprend vraiment le sens de notre mission.\n\n**L'Impact de Vos Dons**\n\nGrâce à vos généreux dons, nous avons pu apporter :\n- Des fournitures scolaires adaptées\n- Des jouets éducatifs spécialisés\n- Des vêtements neufs\n- Des médicaments essentiels\n- Un repas festif pour tous",
        author: "Équipe VOP",
        date: "15 Juin 2025",
        category: "Actions Locales",
        image: "/images/activities/1000151414.jpg",
        readTime: "5 min",
        published: true,
        views: 1250,
        likes: 89,
        comments: 23
      },
      {
        id: 2,
        title: "VOP Youth : Mission d'Espoir à l'Hôpital de Libreville",
        excerpt: "Notre équipe VOP Youth a apporté réconfort et espoir aux patients de l'hôpital de Libreville. Une mission touchante qui démontre l'amour de Dieu en action.",
        content: "Le 27 mars 2025, notre équipe VOP Youth a organisé une mission spéciale à l'hôpital de Libreville. Cette initiative démontre l'engagement de nos jeunes dans l'amour de Dieu en action.\n\n**L'Initiative Jeunesse**\n\nDirigée par notre secrétaire générale Émilie, cette mission a rassemblé 15 jeunes bénévoles déterminés à apporter de la joie aux patients hospitalisés.\n\n**Activités Réalisées**\n- Distribution de cadeaux aux enfants hospitalisés\n- Moments de prière et d'encouragement\n- Chants et louanges dans les couloirs\n- Écoute et partage avec les familles\n\n**Impact Mesurable**\n- **80+** Patients visités\n- **15** Jeunes bénévoles\n- **12** Missions réalisées\n\n**Rejoignez VOP Youth**\n\nDevenez un jeune engagé pour l'amour de Dieu. Contactez-nous pour participer à nos prochaines missions.",
        author: "Équipe VOP Youth",
        date: "27 Mars 2025",
        category: "Jeunesse",
        image: "/images/activities/1000151429.jpg",
        readTime: "4 min",
        published: true,
        views: 980,
        likes: 67,
        comments: 15
      },
      {
        id: 3,
        title: "Dons VOP : Impact Direct sur le Terrain",
        excerpt: "Témoignages authentiques de nos actions de dons et de soutien aux familles dans le besoin. Chaque don fait la différence dans la vie des plus vulnérables.",
        content: "Chaque don que vous faites à La VOP a un impact concret et mesurable sur le terrain. Voici des témoignages authentiques de familles dont la vie a été transformée.\n\n**Témoignage de la Famille Mboumba**\n\n*\"Grâce au don de La VOP, nous avons pu payer les frais de scolarité de nos trois enfants. Ils peuvent maintenant continuer leurs études et rêver d'un avenir meilleur.\"* - Marie Mboumba\n\n**Soutien aux Orphelinats**\n\nNos dons réguliers aux orphelinats de Libreville permettent de :\n- Assurer trois repas par jour aux enfants\n- Fournir des vêtements et chaussures\n- Payer les soins médicaux urgents\n- Financer les fournitures scolaires",
        author: "ANDJ Daniel Jonathan",
        date: "7 Juillet 2025",
        category: "Dons & Impact",
        image: "/images/activities/1000151429.jpg",
        readTime: "3 min",
        published: true,
        views: 1100,
        likes: 78,
        comments: 12
      },
      {
        id: 4,
        title: "Visite chez une Veuve - Soutien Concret",
        excerpt: "Accompagnement et soutien des veuves dans le besoin. Nos actions concrètes d'amour et de compassion envers les plus vulnérables de notre société.",
        content: "Notre mission de soutien aux veuves continue de transformer des vies dans notre communauté. Voici le témoignage d'une visite récente qui illustre notre engagement.\n\n**Une Visite Touchante**\n\nMme Marie, veuve depuis 3 ans, nous a accueillis avec gratitude. Grâce à nos dons réguliers, elle a pu maintenir ses enfants à l'école et subvenir à leurs besoins essentiels.\n\n**Notre Approche**\n- Visites régulières pour l'écoute et le soutien moral\n- Aide financière pour les besoins urgents\n- Formation pour développer des activités génératrices de revenus\n- Accompagnement spirituel et prières",
        author: "ANDJ Daniel Jonathan",
        date: "Novembre 2024",
        category: "Soutien Veuves",
        image: "/images/activities/1000151429.jpg",
        readTime: "2 min",
        published: true,
        views: 850,
        likes: 45,
        comments: 8
      },
      {
        id: 5,
        title: "Assemblée Générale VOP 2024 : Bilan et Perspectives",
        excerpt: "Réunion annuelle au siège de La VOP à Libreville. Bilan des actions réalisées et perspectives ambitieuses pour l'année 2025.",
        content: "Le 15 décembre 2024, La VOP a tenu son assemblée générale annuelle au siège de Libreville. Un moment important pour faire le bilan de nos actions et planifier l'avenir.\n\n**Bilan 2024**\n- **2,450 vues** sur notre site web\n- **1,250 utilisateurs** engagés\n- **8 articles** publiés\n- **25,000€** de dons reçus\n- **15.5%** de croissance mensuelle\n\n**Perspectives 2025**\n- Expansion internationale dans 3 nouveaux pays\n- Lancement de VOP Youth dans 5 villes\n- Programme de formation pour 100 leaders\n- Objectif de 50,000€ de dons",
        author: "Équipe VOP",
        date: "Décembre 2024",
        category: "Assemblée",
        image: "/images/activities/1000151368.jpg",
        readTime: "4 min",
        published: true,
        views: 1500,
        likes: 95,
        comments: 18
      },
      {
        id: 6,
        title: "Formation Spirituelle VOP : Équipement des Leaders",
        excerpt: "Programme de formation intensive pour les leaders de demain. Développement spirituel et leadership chrétien au service de la communauté.",
        content: "Notre programme de formation spirituelle continue de former des leaders engagés pour servir notre communauté avec excellence.\n\n**Module 1 : Fondements Bibliques**\n- Étude approfondie des Écritures\n- Principes de leadership chrétien\n- Développement du caractère\n\n**Module 2 : Service Pratique**\n- Techniques d'évangélisation\n- Gestion des projets communautaires\n- Communication efficace\n\n**Module 3 : Leadership Avancé**\n- Vision et stratégie\n- Gestion d'équipe\n- Résolution de conflits",
        author: "Équipe Formation VOP",
        date: "15 Janvier 2025",
        category: "Formation",
        image: "/images/activities/1000151368.jpg",
        readTime: "6 min",
        published: true,
        views: 1200,
        likes: 72,
        comments: 14
      },
      {
        id: 7,
        title: "Mission Internationale : Soutien aux Familles à l'Étranger",
        excerpt: "Nos actions de soutien financier aux familles gabonaises vivant à l'étranger. Solidarité internationale et entraide communautaire.",
        content: "La VOP étend son impact au-delà des frontières gabonaises en soutenant nos compatriotes vivant à l'étranger.\n\n**Pays Soutenus**\n- **États-Unis** : 8 familles aidées\n- **Canada** : 5 familles aidées\n- **France** : 7 familles aidées\n- **Belgique** : 3 familles aidées\n- **Suisse** : 2 familles aidées\n\n**Types d'Aide**\n- Frais de scolarité des enfants\n- Soins médicaux urgents\n- Aide au logement\n- Formation professionnelle\n\n**Impact Mesurable**\n- **25 familles** soutenues\n- **5.2M FCFA** investis\n- **100%** de satisfaction",
        author: "Équipe Internationale VOP",
        date: "3 Février 2025",
        category: "International",
        image: "/images/activities/IMG-20250614-WA0079.jpg",
        readTime: "3 min",
        published: true,
        views: 900,
        likes: 58,
        comments: 9
      },
      {
        id: 8,
        title: "Témoignages de Transformation : Vies Changées par l'Amour",
        excerpt: "Histoires inspirantes de vies transformées grâce à nos actions. Témoignages authentiques de l'impact de l'amour de Dieu dans la communauté.",
        content: "Voici des témoignages authentiques de vies transformées grâce à l'amour de Dieu manifesté à travers nos actions.\n\n**Témoignage de Sarah**\n\n*\"Grâce à La VOP, j'ai pu reprendre mes études. Aujourd'hui, je suis infirmière et je sers ma communauté avec amour.\"*\n\n**Témoignage de Jean**\n\n*\"La VOP m'a aidé à sortir de la drogue. Aujourd'hui, je suis marié, j'ai un travail et je sers Dieu avec joie.\"*\n\n**Témoignage de Marie**\n\n*\"Quand mon mari est décédé, La VOP était là. Grâce à leur soutien, j'ai pu élever mes enfants dignement.\"*",
        author: "Équipe Communication VOP",
        date: "20 Février 2025",
        category: "Témoignages",
        image: "/images/activities/1000151414.jpg",
        readTime: "5 min",
        published: true,
        views: 1800,
        likes: 120,
        comments: 25
      }
    ];
    localStorage.setItem(ARTICLE_STORAGE_KEY, JSON.stringify(defaultArticles));
    return defaultArticles;
  }
  
  return JSON.parse(stored);
};

export const deleteArticle = (id: number): void => {
  const articles = getArticles();
  const filteredArticles = articles.filter(article => article.id !== id);
  localStorage.setItem(ARTICLE_STORAGE_KEY, JSON.stringify(filteredArticles));
};

export const getPublishedArticles = (): Article[] => {
  return getArticles().filter(article => article.published);
};

export const getArticleById = (id: number): Article | undefined => {
  return getArticles().find(article => article.id === id);
};
