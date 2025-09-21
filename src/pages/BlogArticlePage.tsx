import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const BlogArticlePage = () => {
  const { id } = useParams();
  
  const articles = {
    '1': {
      id: 1,
      title: "Sortie VOP 2025 : Joie et Espoir avec les Enfants Handicapés",
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-8 rounded-2xl">
            <h1 class="text-4xl font-bold mb-4">Sortie VOP 2025 : Joie et Espoir avec les Enfants Handicapés</h1>
            <p class="text-xl text-white/90">Le 15 juin 2025 restera gravé dans nos mémoires comme une journée exceptionnelle de partage et d'amour</p>
          </div>

          <div class="prose prose-lg max-w-none">
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
          </div>
        </div>
      `,
      author: "Équipe VOP",
      date: "15 Juin 2025",
      category: "Actions Locales",
      readTime: "5 min",
      image: "/images/activities/1000151414.jpg"
    },
    '2': {
      id: 2,
      title: "VOP Youth : Mission d'Espoir à l'Hôpital de Libreville",
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-8 rounded-2xl">
            <h1 class="text-4xl font-bold mb-4">VOP Youth : Mission d'Espoir à l'Hôpital</h1>
            <p class="text-xl text-white/90">Notre équipe VOP Youth apporte réconfort et espoir aux patients</p>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Le 27 mars 2025, notre équipe VOP Youth a organisé une mission spéciale à l'hôpital de Libreville. 
              Cette initiative démontre l'engagement de nos jeunes dans l'amour de Dieu en action.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">L'Initiative Jeunesse</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Dirigée par notre secrétaire générale Émilie, cette mission a rassemblé 15 jeunes bénévoles 
              déterminés à apporter de la joie aux patients hospitalisés.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Activités Réalisées</h2>
            <ul class="list-disc pl-6 mb-6 text-gray-700">
              <li>Distribution de cadeaux aux enfants hospitalisés</li>
              <li>Moments de prière et d'encouragement</li>
              <li>Chants et louanges dans les couloirs</li>
              <li>Écoute et partage avec les familles</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Impact Mesurable</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="bg-blue-50 p-6 rounded-lg text-center">
                <h3 class="text-2xl font-bold text-[#003399] mb-2">80+</h3>
                <p class="text-gray-600">Patients visités</p>
              </div>
              <div class="bg-green-50 p-6 rounded-lg text-center">
                <h3 class="text-2xl font-bold text-[#003399] mb-2">15</h3>
                <p class="text-gray-600">Jeunes bénévoles</p>
              </div>
              <div class="bg-yellow-50 p-6 rounded-lg text-center">
                <h3 class="text-2xl font-bold text-[#003399] mb-2">12</h3>
                <p class="text-gray-600">Missions réalisées</p>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-8 rounded-2xl text-center">
              <h3 class="text-2xl font-bold text-[#003399] mb-4">Rejoignez VOP Youth</h3>
              <p class="text-[#003399] mb-6">Devenez un jeune engagé pour l'amour de Dieu</p>
              <a href="https://wa.me/24174791530?text=🎓%20FORMATION%20SPIRITUELLE%20-%20LA%20VOP%0A%0ABonjour%20!%20Je%20souhaite%20rejoindre%20VOP%20Youth%20pour%20servir%20dans%20l'amour%20de%20Dieu." 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="inline-block bg-[#003399] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00B0F0] transition-colors">
                Rejoindre VOP Youth
              </a>
            </div>
          </div>
        </div>
      `,
      author: "Équipe VOP Youth",
      date: "27 Mars 2025",
      category: "Jeunesse",
      readTime: "4 min",
      image: "/images/activities/1000151414.jpg"
    },
    '3': {
      id: 3,
      title: "Dons VOP : Impact Direct sur le Terrain",
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-8 rounded-2xl">
            <h1 class="text-4xl font-bold mb-4">Dons VOP : Impact Direct sur le Terrain</h1>
            <p class="text-xl text-white/90">Témoignages authentiques de nos actions de dons et de soutien</p>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Chaque don que vous faites à La VOP a un impact concret et mesurable sur le terrain. 
              Voici des témoignages authentiques de familles dont la vie a été transformée.
            </p>
            
            <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Témoignage de la Famille Mboumba</h2>
            <blockquote class="bg-[#00B0F0]/10 border-l-4 border-[#00B0F0] p-6 my-6 italic text-gray-700">
              "Grâce au don de La VOP, nous avons pu payer les frais de scolarité de nos trois enfants. 
              Ils peuvent maintenant continuer leurs études et rêver d'un avenir meilleur." - Marie Mboumba
            </blockquote>
            
            <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Soutien aux Orphelinats</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Nos dons réguliers aux orphelinats de Libreville permettent de :
            </p>
            <ul class="list-disc pl-6 mb-6 text-gray-700">
              <li>Assurer trois repas par jour aux enfants</li>
              <li>Fournir des vêtements et chaussures</li>
              <li>Payer les soins médicaux urgents</li>
              <li>Financer les fournitures scolaires</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-[#003399] mb-4 mt-8">Impact Mesurable</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-lg font-semibold mb-4">Familles Aidées</h3>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span>Orphelinats soutenus</span>
                    <span class="font-semibold">2</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Enfants aidés</span>
                    <span class="font-semibold">45+</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Veuves soutenues</span>
                    <span class="font-semibold">120+</span>
                  </div>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 class="text-lg font-semibold mb-4">Dons Investis</h3>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span>Total investi</span>
                    <span class="font-semibold">2.5M FCFA</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Dons internationaux</span>
                    <span class="font-semibold">5.2M FCFA</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Impact local</span>
                    <span class="font-semibold">20+ actions</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-6 rounded-2xl text-center">
              <h3 class="text-xl font-bold mb-2">Votre Don Fait la Différence</h3>
              <p class="mb-4">Chaque contribution transforme des vies concrètement</p>
              <a href="https://obsxsyzu.mychariow.store/don-montant-libre" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="inline-block bg-[#FFD700] text-[#003399] px-6 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors">
                Faire un don maintenant
              </a>
            </div>
          </div>
        </div>
      `,
      author: "ANDJ Daniel Jonathan",
      date: "7 Juillet 2025",
      category: "Dons & Impact",
      readTime: "3 min",
      image: "/images/activities/IMG-20250614-WA0099.jpg"
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/" className="text-[#00B0F0] hover:text-[#003399] transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              to="/#blog" 
              className="flex items-center space-x-2 text-gray-600 hover:text-[#00B0F0] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour au blog</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  );
};

export default BlogArticlePage;