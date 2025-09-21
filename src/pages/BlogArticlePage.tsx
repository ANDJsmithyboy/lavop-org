import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const BlogArticlePage = () => {
  const { id } = useParams();
  
  const articles = {
    '1': {
      id: 1,
      title: "Sortie VOP 2025 : Joie et Espoir avec les Enfants Handicapés",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Le 15 juin 2025 restera gravé dans nos mémoires comme une journée exceptionnelle de partage et d'amour. 
          Notre équipe VOP s'est rendue à l'Association Tous Différents de Libreville pour une mission spéciale 
          dédiée aux enfants handicapés.
        </p>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Une Mission d'Amour</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          Dès notre arrivée, nous avons été accueillis par des sourires radieux et des regards pleins d'espoir. 
          Ces enfants, malgré leurs défis quotidiens, nous ont enseigné une leçon précieuse sur la joie de vivre 
          et la résilience.
        </p>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Notre fondateur, ANDJ Daniel Jonathan, a partagé un moment touchant avec une petite fille de 8 ans 
          qui, malgré son handicap moteur, a réussi à nous faire rire avec ses blagues. C'est dans ces moments 
          que l'on comprend vraiment le sens de notre mission.
        </p>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">L'Impact de Vos Dons</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          Grâce à vos généreux dons, nous avons pu apporter :
        </p>
        <ul class="list-disc pl-6 mb-6 text-gray-700">
          <li>Des fournitures scolaires adaptées</li>
          <li>Des jouets éducatifs spécialisés</li>
          <li>Des vêtements neufs</li>
          <li>Des médicaments essentiels</li>
          <li>Un repas festif pour tous</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Témoignages</h2>
        <blockquote class="bg-[#00B0F0]/10 border-l-4 border-[#00B0F0] p-6 my-6 italic text-gray-700">
          "Voir ces enfants sourire malgré leurs difficultés, c'est un rappel puissant de la bonté de Dieu. 
          Chaque don que vous faites transforme réellement des vies." - ANDJ Daniel Jonathan
        </blockquote>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          La directrice de l'association, Mme Émilie, a exprimé sa gratitude : "La VOP ne se contente pas 
          d'apporter des dons matériels, vous apportez de l'espoir et de la dignité à nos enfants."
        </p>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Continuez à Nous Soutenir</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Cette sortie n'est qu'un exemple de l'impact de vos dons. Chaque contribution, aussi petite soit-elle, 
          fait la différence dans la vie de ces enfants et de leurs familles.
        </p>
        
        <div class="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-6 rounded-2xl text-center">
          <h3 class="text-xl font-bold mb-2">Rejoignez Notre Mission</h3>
          <p class="mb-4">Votre don peut transformer une vie aujourd'hui</p>
          <a href="https://obsxsyzu.mychariow.store/don-montant-libre" 
             target="_blank" 
             rel="noopener noreferrer"
             class="inline-block bg-[#FFD700] text-[#003399] px-6 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors">
            Faire un don maintenant
          </a>
        </div>
      `,
      author: "Équipe VOP",
      date: "15 Juin 2025",
      category: "Actions Locales",
      image: "/images/activities/IMG-20250614-WA0058.jpg",
      readTime: "5 min",
      featured: true
    },
    '2': {
      id: 2,
      title: "Dons VOP : Impact Direct sur le Terrain",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Chaque don que vous faites à LA VOP a un impact concret et mesurable sur le terrain. 
          Nous croyons fermement en la transparence et voulons vous montrer comment vos contributions 
          transforment réellement des vies.
        </p>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Notre Approche Transparente</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          Contrairement à d'autres organisations, nous documentons chaque action, chaque don, 
          chaque sourire que nous créons. Pour nous, la transparence n'est pas un concept, 
          c'est une obligation morale.
        </p>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Témoignages Authentiques</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          Voici quelques témoignages récents de familles que nous avons aidées :
        </p>
        
        <div class="bg-gray-50 p-6 rounded-2xl mb-6">
          <p class="italic text-gray-700 mb-2">
            "Grâce au don de LA VOP, j'ai pu payer les frais de scolarité de mes trois enfants. 
            Ils peuvent maintenant continuer leurs études normalement." - Marie, mère de famille
          </p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-2xl mb-6">
          <p class="italic text-gray-700 mb-2">
            "Votre aide alimentaire est arrivée au bon moment. Nous avions vraiment besoin de cette 
            assistance et vous nous avez redonné espoir." - Jean, père de famille
          </p>
        </div>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Comment Nous Utilisons Vos Dons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-[#CC3366]/10 p-4 rounded-xl">
            <h3 class="font-bold text-[#CC3366] mb-2">80% - Aide Directe</h3>
            <p class="text-sm text-gray-700">Dons en nature, aide alimentaire, fournitures scolaires</p>
          </div>
          <div class="bg-[#00B0F0]/10 p-4 rounded-xl">
            <h3 class="font-bold text-[#00B0F0] mb-2">15% - Logistique</h3>
            <p class="text-sm text-gray-700">Transport, organisation des missions</p>
          </div>
          <div class="bg-[#FFD700]/10 p-4 rounded-xl">
            <h3 class="font-bold text-[#FFD700] mb-2">5% - Administration</h3>
            <p class="text-sm text-gray-700">Gestion, communication, rapports</p>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Rejoignez Notre Mission</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Votre don, même le plus petit, peut faire la différence. Chaque contribution est utilisée 
          de manière responsable et transparente pour maximiser l'impact sur le terrain.
        </p>
      `,
      author: "ANDJ Daniel Jonathan",
      date: "7 Juillet 2025",
      category: "Dons & Impact",
      image: "/images/activities/IMG-20250614-WA0099.jpg",
      readTime: "3 min",
      featured: false
    },
    '3': {
      id: 3,
      title: "VOP Youth : Mission d'Espoir à l'Hôpital",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Le 27 mars 2025, notre équipe VOP Youth a mené une mission d'espoir à l'hôpital de Libreville. 
          Cette initiative, portée par nos jeunes bénévoles, a apporté réconfort et espoir aux patients 
          et à leurs familles.
        </p>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">L'Esprit VOP Youth</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          VOP Youth représente l'avenir de notre organisation. Ces jeunes, âgés de 16 à 25 ans, 
          incarnent parfaitement notre vision : servir avec amour et compassion, peu importe l'âge.
        </p>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Une Journée Mémorable</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          Dès 8h du matin, nos jeunes bénévoles étaient prêts. Ils ont visité chaque service, 
          distribué des sourires, des prières et des petits cadeaux aux patients. Leur énergie 
          positive était contagieuse.
        </p>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Témoignages Touchants</h2>
        <blockquote class="bg-[#00B0F0]/10 border-l-4 border-[#00B0F0] p-6 my-6 italic text-gray-700">
          "Voir ces jeunes venir nous rendre visite, c'est comme recevoir la visite de mes propres enfants. 
          Ils m'ont redonné espoir." - Patient anonyme
        </blockquote>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Une patiente de 75 ans a confié à notre équipe : "Votre présence ici me rappelle que 
          l'amour de Dieu est partout, même dans les moments difficiles."
        </p>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">L'Impact de VOP Youth</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          Cette mission a permis de :
        </p>
        <ul class="list-disc pl-6 mb-6 text-gray-700">
          <li>Apporter du réconfort à 50+ patients</li>
          <li>Distribuer des cadeaux et des encouragements</li>
          <li>Partager des moments de prière</li>
          <li>Créer des liens intergénérationnels</li>
          <li>Inspirer d'autres jeunes à servir</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Rejoignez VOP Youth</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Si vous avez entre 16 et 25 ans et que vous souhaitez faire la différence dans votre communauté, 
          rejoignez VOP Youth. Ensemble, nous pouvons transformer notre société par l'amour et le service.
        </p>
      `,
      author: "Équipe VOP Youth",
      date: "27 Mars 2025",
      category: "Jeunesse",
      image: "/images/activities/1000151414.jpg",
      readTime: "4 min",
      featured: false
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#003399] mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">L'article que vous cherchez n'existe pas.</p>
          <Link to="/blog" className="bg-[#00B0F0] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#003399] transition-colors">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-[#00B0F0] hover:text-[#003399] transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour au blog</span>
          </Link>
        </div>
      </div>

      {/* Article */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Image Header */}
            <div className="relative h-64 md:h-96">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-[#00B0F0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Meta */}
              <div className="flex flex-wrap items-center space-x-6 mb-6 text-sm text-gray-500">
                <span className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de lecture</span>
                </span>
                <span className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-[#003399] mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlePage;
