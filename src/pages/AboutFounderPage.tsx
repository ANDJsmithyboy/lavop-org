import { 
  Heart, Globe, Book, Award, Users, Calendar, Mail, Phone, 
  MapPin, ExternalLink, Star, Quote, ChevronRight, Download,
  Facebook, Twitter, Instagram, Youtube, Linkedin, Github, MessageCircle,
  ArrowLeft
} from 'lucide-react';
import OptimizedFounderPhoto from '../components/OptimizedFounderPhoto';

const AboutFounderPage = () => {
  const founderInfo = {
    name: "ANDJ Daniel Jonathan",
    title: "Prophète, Entrepreneur & Architecte du Futur",
    subtitle: "Fondateur de LA VOP & SmartANDJ AI Technologies",
    email: "jonathanakarentoutoume@gmail.com",
    phone: "+241 65 51 58 77",
    location: "Libreville, Gabon",
    birthDate: "2001",
    age: "23 ans",
    nationality: "Gabonaise",
    languages: ["Français", "Anglais", "Espagnol"],
    avatar: "/images/founder/photo_andj_ceo.jpg",
    coverImage: "/images/activities/IMG-20250614-WA0079.jpg"
  };

  const achievements = [
    {
      icon: Heart,
      title: "Fondateur de LA VOP",
      description: "6 années d'engagement - 20+ orphelinats soutenus - 12+ pays étrangers touchés",
      year: "2019",
      backgroundImage: "/logo-vop.jpg"
    },
    {
      icon: Globe,
      title: "PDG de SmartANDJ AI Technologies",
      description: "Startup d'IA fondée le 19 avril 2024, développant des solutions pour l'Afrique ET A COMMENCÉ L'ENTREPRENARIAT À L'ÂGE DE 16 ans (7 ans d'expérience)",
      year: "2024",
      backgroundImage: "/images/logos/Mon_logoSamartandj.PNG"
    },
    {
      icon: Book,
      title: "Étudiant en IA & Objets Connectés",
      description: "Licence en Intelligence Artificielle, ambition Doctorat, inspiré par Andrew Ng",
      year: "2022",
      backgroundImage: "/images/logos/robotsmartandjia.png"
    },
    {
      icon: Users,
      title: "Prophète & Visionnaire",
      description: "Ministère apostolique et prophétique, appel divin manifesté dès l'enfance",
      year: "2019",
      backgroundImage: "/images/activities/IMG-20250614-WA0064.jpg"
    }
  ];

  const books = [
    {
      title: "Le Coaching Ultime pour Bâtir Votre Avenir",
      subtitle: "Sagesse Spirituelle et Maîtrise Technologique",
      description: "Système de coaching interactif de plus de 12 chapitres pour maîtriser les finances modernes (IA, Crypto, Trading) sans jamais perdre votre âme.",
      price: "10€",
      originalPrice: "25€",
      image: "/images/boutique/couverture_comment_investir_dans_ces_temps_de_la_fin.jpg",
      link: "https://njunarse.mychariow.store/andjguidepratique",
      features: [
        "🧠 Coaching d'Intuition Intégré",
        "🔑 Secrets Bibliques Dévoilés",
        "✍️ Workbook Actif",
        "🌐 Philosophie Universelle",
        "🔗 Modes d'Emploi Interactifs"
      ]
    },
    {
      title: "La Prophétie de Bitcoin",
      subtitle: "Guide Complet de la Crypto-monnaie",
      description: "Guide complet sur la crypto-monnaie depuis son origine jusqu'à aujourd'hui, avec stratégies d'investissement étape par étape.",
      price: "",
      status: "À paraître",
      image: "/images/boutique/la_prophetie_du_bitcoin.png",
      features: [
        "📈 Analyser la technique avancée",
        "💰 Stratégies d'investissement",
        "🔮 Prédictions de marché",
        "📚 Formation complète",
        "🎯 Conseils pratiques"
      ]
    },
    {
      title: "Le Paradoxe de l'Existence",
      subtitle: "Jésus : L'Enquête à la Recherche de la Vérité",
      description: "Une exploration profonde et spirituelle de la personne de Jésus-Christ, mêlant foi, philosophie et recherche de vérité pour une compréhension moderne de l'Évangile.",
      price: "À paraître",
      originalPrice: "",
      image: "/images/boutique/paradoxe_de_l'existence.png",
      link: "#",
      features: [
        "🔍 Enquête spirituelle approfondie",
        "📖 Approche philosophique moderne",
        "💡 Révélations bibliques",
        "🌅 Recherche de vérité personnelle",
        "📚 Guide de méditation"
      ]
    },
    {
      title: "L'Algorithme du Ciel",
      subtitle: "Code Divin pour la Vie Moderne",
      description: "Découvrez les principes spirituels universels qui régissent notre existence, présentés comme un algorithme divin applicable à tous les aspects de la vie moderne.",
      price: "",
      originalPrice: "",
      image: "/images/boutique/l'algorithme_du_ciel.png",
      link: "#",
      status: "À paraître",
      features: [
        "⚡ Principes spirituels universels",
        "🔢 Algorithme divin applicable",
        "🌟 Sagesse millénaire modernisée",
        "🎯 Application pratique quotidienne",
        "💫 Transformation personnelle"
      ]
    }
  ];

  const projects = [
    {
      title: "SanoAI Predict",
      description: "Application de diagnostic précoce utilisant l'IA pour analyser les données de santé et identifier des risques",
      status: "En développement",
      icon: "🏥",
      color: "text-green-600",
      backgroundImage: "/images/activities/1000223126.jpg"
    },
    {
      title: "GabomaGPT",
      description: "Modèle de langage avancé spécifiquement enseigné sur les contextes culturels et linguistiques du Gabon",
      status: "Projet visionnaire",
      icon: "🤖",
      color: "text-blue-600",
      backgroundImage: "/images/logos/gabomagpt.png"
    }
  ];

  const socialLinks = [
    { name: "TikTok", url: "https://www.tiktok.com/@christpourlavop", icon: ExternalLink, color: "text-pink-600" },
    { name: "YouTube", url: "https://youtube.com/@christpourlavop", icon: Youtube, color: "text-red-600" },
    { name: "Medium", url: "https://medium.com/@Danielandj", icon: Book, color: "text-green-600" },
    { name: "WhatsApp", url: "https://wa.me/24165515877", icon: MessageCircle, color: "text-green-500" },
    { name: "Email", url: "mailto:jonathanakarentoutoume@gmail.com", icon: Mail, color: "text-blue-600" }
  ];

  const testimonials = [
    {
      name: "Marie K.",
      role: "Investisseuse",
      content: "Daniel m'a appris à investir de manière intelligente. Ses conseils m'ont permis de multiplier mes économies par 5 en 2 ans.",
      rating: 5
    },
    {
      name: "Jean-Paul M.",
      role: "Entrepreneur",
      content: "Un mentor exceptionnel ! Sa vision des technologies et son approche spirituelle sont uniques.",
      rating: 5
    },
    {
      name: "Sarah L.",
      role: "Tradrice",
      content: "Le système de coaching de Daniel est révolutionnaire. J'ai enfin compris les marchés financiers.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bouton Retour */}
      <div className="fixed top-2 left-2 z-50">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1 bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 text-xs sm:text-sm"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-medium hidden sm:inline">Retour</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                {founderInfo.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 sm:mb-4">
                {founderInfo.title}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
                {founderInfo.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{founderInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{founderInfo.age}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>{founderInfo.nationality}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 sm:space-x-2 bg-white/20 backdrop-blur-sm px-2 sm:px-4 py-2 rounded-full hover:bg-white/30 transition-colors ${social.color} text-xs sm:text-sm`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">{social.name}</span>
                    </a>
                  );
                })}
              </div>
              
              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://wa.me/24165515877?text=Bonjour, je souhaite demander un coaching avec Daniel Jonathan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Coaching</span>
                </a>
                <a
                  href="#books"
                  className="flex items-center justify-center space-x-2 bg-[#FFD700] text-[#003399] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors text-sm sm:text-base"
                >
                  <Book className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Livres</span>
                </a>
              </div>
            </div>
            
            <OptimizedFounderPhoto
              src={founderInfo.avatar}
              alt={`Photo de ${founderInfo.name}, ${founderInfo.title}`}
              size="hero"
              showOverlay={true}
              showBadge={true}
              badgeText="Visionnaire"
            />
          </div>
        </div>
      </section>

      {/* Biographie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#003399] mb-8 text-center">
              Biographie
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>À 23 ans, Daniel Jonathan ANDJ</strong> incarne une alliance rare et puissante : 
                celle d'un prophète visionnaire et d'un innovateur technologique. Né au Gabon, son 
                parcours est défini par une double vocation qui s'est manifestée dès son plus jeune âge : 
                un appel divin profond et une passion insatiable pour la résolution de problèmes grâce à la technologie.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Les Fondations : Un Double Appel</strong><br/>
                Mon histoire n'est pas celle d'un choix entre la foi et la science, mais celle de leur convergence. 
                Depuis l'enfance, j'ai été témoin de la puissance de Dieu à travers des dons prophétiques, 
                tout en étant fasciné par la logique et le potentiel infini des systèmes informatiques. 
                J'ai compris très tôt que si la foi donne la vision, la technologie peut en être le plus grand accélérateur.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Le Pilier Spirituel : Servir avec la Vision d'un Père</strong><br/>
                En 2019, j'ai officiellement embrassé mon appel au ministère apostolique et prophétique. 
                Guidé et formé par mon père spirituel, l'<strong>Apôtre Styve Ntoutoume</strong>, j'ai fondé 
                l'<strong>ONG LA VOP</strong>, une organisation dédiée à servir les plus vulnérables de notre société : 
                les Veuves, les Orphelins et les Pauvres.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Mon ministère s'inspire profondément de la vie et de l'œuvre de l'<strong>Apôtre David O. Oyedepo</strong>, 
                dont l'exemple m'a appris que la foi sans les œuvres est morte. Il m'a enseigné à bâtir, 
                à entreprendre et à croire en un Dieu de miracles qui attend de nous que nous soyons des 
                acteurs de transformation dans le monde.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Le Pilier Technologique : Coder l'Avenir</strong><br/>
                Parallèlement à mon engagement spirituel, je poursuis activement l'excellence académique et technologique. 
                Actuellement en Licence en <strong>Intelligence Artificielle et Objets Connectés</strong>, mon ambition 
                est de poursuivre jusqu'au Doctorat, marchant dans les pas de figures emblématiques comme 
                <strong>Andrew Ng</strong>, dont les travaux en IA ont démocratisé l'accès à cette technologie révolutionnaire.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Cette passion pour l'IA n'est pas que théorique. Elle est le moteur de mes créations :
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>SmartANDJ AI Technologies :</strong> Ma startup, fondée le 19 avril 2024, est le véhicule de mes ambitions technologiques. Sa mission est de développer des solutions d'IA innovantes pour l'Afrique. Cette entreprise s'appuie sur 7 ans d'expérience entrepreneuriale que j'ai acquise depuis l'âge de 16 ans.</li>
                <li><strong>SanoAI Predict :</strong> Notre première application, un outil de diagnostic précoce qui utilise l'intelligence artificielle pour analyser des données de santé et identifier des risques.</li>
                <li><strong>GabomaGPT :</strong> Un projet qui me tient particulièrement à cœur. L'objectif est de développer un modèle de langage avancé, spécifiquement enseigné sur les contextes culturels et linguistiques du Gabon.</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Ma Vision : Là où la Foi Rencontre le Code</strong><br/>
                Pour moi, il n'y a aucune contradiction entre la salle de prière et le terminal de code. 
                La prière me donne la direction, la clarté et la vision. Le code me donne les outils pour 
                construire cette vision à grande échelle. Ma mission est de lever une génération de leaders 
                qui, comme moi, comprennent que l'on peut être rempli du Saint-Esprit et être à la pointe 
                de l'innovation mondiale.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Mon but ultime est de servir Dieu et ma nation, le Gabon, en bâtissant des systèmes, 
                des entreprises et des ministères qui résolvent de vrais problèmes et apportent la gloire à Dieu. 
                Que ce soit à travers un programme d'aide pour une veuve ou le déploiement d'un algorithme d'IA, 
                l'intention reste la même : manifester le Royaume de Dieu, ici et maintenant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003399] mb-12 text-center">
            Réalisations & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  {/* Image de fond */}
                  {achievement.backgroundImage && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20"
                      style={{ backgroundImage: `url(${achievement.backgroundImage})` }}
                    />
                  )}
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="bg-[#00B0F0]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-[#00B0F0]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#003399] mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="text-[#00B0F0] font-semibold">
                      Depuis {achievement.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projets Technologiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003399] mb-12 text-center">
            Projets Technologiques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                {/* Image de fond */}
                {project.backgroundImage && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${project.backgroundImage})` }}
                  />
                )}
                
                {/* Contenu */}
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-[#003399] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${project.color} bg-current/10`}>
                    {project.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livres & Publications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003399] mb-12 text-center">
            Livres & Publications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="relative">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-80 object-contain bg-gray-50"
                          />
                    {book.status && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-bold">
                          {book.status}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#003399] mb-2">
                      {book.title}
                    </h3>
                    <p className="text-[#00B0F0] font-medium mb-3">
                      {book.subtitle}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm">
                      {book.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {book.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-gray-600">
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-[#003399]">
                          {book.price}
                        </span>
                        {book.originalPrice && (
                          <span className="text-gray-400 line-through">
                            {book.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {book.link && book.link !== "#" && !book.status && (
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-[#00B0F0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003399] transition-colors"
                      >
                        <span>Acheter maintenant</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    )}
                    
                    {book.status && (
                      <button disabled className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                        {book.status}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003399] mb-12 text-center">
            Témoignages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-[#00B0F0] mb-4" />
                
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-[#003399]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe VOP */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003399] mb-12 text-center">
            Équipe VOP
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative order-2 md:order-1">
                  <img 
                    src="/images/activities/leontine_photo.jpg" 
                    alt="Leontine - Collaboratrice VOP Gabon"
                    className="w-full h-80 md:h-full object-cover object-center"
                    loading="lazy"
                    onError={(e) => {
                      console.log('Erreur de chargement de l\'image Leontine');
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Overlay pour améliorer la visibilité sur mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden"></div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#003399] mb-4">
                    Leontine
                  </h3>
                  <p className="text-[#00B0F0] font-semibold mb-4 text-lg">
                    Collaboratrice VOP - Gabon
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                    Collaboratrice dévouée de LA VOP au Gabon, Leontine apporte son expertise locale 
                    et sa passion pour servir les plus vulnérables de notre société. Son engagement 
                    sur le terrain contribue directement à l'impact de nos actions humanitaires.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="bg-[#00B0F0]/10 text-[#00B0F0] px-4 py-2 rounded-full text-sm font-semibold">
                      Collaboratrice VOP
                    </div>
                    <div className="text-gray-500 text-sm">
                      Gabon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#003399] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Contactez Daniel
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Prêt à transformer votre approche de l'investissement et de la technologie ?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6" />
                <a 
                  href="mailto:jonathanakarentoutoume@gmail.com"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  jonathanakarentoutoume@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>{founderInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6" />
                <span>{founderInfo.location}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:jonathanakarentoutoume@gmail.com?subject=Demande de coaching"
                className="bg-[#FFD700] text-[#003399] px-8 py-4 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
              >
                Demander un coaching
              </a>
              <a
                href="/boutique"
                className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Voir ses livres
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFounderPage;

