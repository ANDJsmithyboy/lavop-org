import { ArrowLeft, MapPin, Calendar, Users, Heart, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActionsDetailPage = () => {
  const actions = {
    'orphelinats-libreville': {
      id: 'orphelinats-libreville',
      title: 'Dons aux Orphelinats de Libreville',
      subtitle: '2 orphelinats soutenus',
      description: 'Soutien régulier aux orphelinats Bon Samaritain et Arc-en-ciel de Sainte-Marie avec dons en nature et en numéraire',
      fullContent: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-8 rounded-2xl">
            <h1 class="text-4xl font-bold mb-4">Dons aux Orphelinats de Libreville</h1>
            <p class="text-xl text-white/90">Soutien régulier aux orphelinats Bon Samaritain et Arc-en-ciel de Sainte-Marie</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 class="text-lg font-semibold">Enfants Soutenus</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">45+</p>
              <p class="text-gray-600 text-sm">Enfants orphelins aidés</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-green-100 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 class="text-lg font-semibold">Orphelinats</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">2</p>
              <p class="text-gray-600 text-sm">Établissements partenaires</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-yellow-100 rounded-lg">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 class="text-lg font-semibold">Investissement</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">2.5M</p>
              <p class="text-gray-600 text-sm">FCFA investis en 2024</p>
            </div>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h2 class="text-2xl font-bold text-[#003399] mb-6">Notre Action Concrète</h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Visites Régulières</h3>
                  <p class="text-gray-700">Chaque mois, notre équipe se rend dans les orphelinats pour apporter soutien moral et matériel aux enfants.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Dons Matériels</h3>
                  <p class="text-gray-700">Fournitures scolaires, vêtements, chaussures, jouets et produits d'hygiène pour améliorer le quotidien des enfants.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Soutien Financier</h3>
                  <p class="text-gray-700">Aide financière pour les frais de scolarité, soins médicaux et besoins urgents des orphelinats.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Accompagnement Spirituel</h3>
                  <p class="text-gray-700">Temps de prière, partage biblique et encouragement pour nourrir l'âme de ces enfants précieux.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-8 rounded-2xl text-center">
            <h3 class="text-2xl font-bold text-[#003399] mb-4">Rejoignez Notre Mission</h3>
            <p class="text-[#003399] mb-6">Votre don peut transformer la vie d'un enfant orphelin aujourd'hui</p>
            <a href="https://obsxsyzu.mychariow.store/don-montant-libre" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-[#003399] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00B0F0] transition-colors">
              Faire un don maintenant
            </a>
          </div>
        </div>
      `,
      image: '/images/activities/1000151414.jpg',
      location: 'Libreville, Gabon',
      date: 'Depuis 2019',
      impact: '45+ enfants soutenus'
    },
    'aide-veuves-locales': {
      id: 'aide-veuves-locales',
      title: 'Aide aux Veuves Locales',
      subtitle: 'Actions récurrentes depuis 2019',
      description: 'Visites et soutien spirituel aux veuves de Libreville et des provinces. Aide ponctuelle selon les besoins urgents.',
      fullContent: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-8 rounded-2xl">
            <h1 class="text-4xl font-bold mb-4">Aide aux Veuves Locales</h1>
            <p class="text-xl text-white/90">Actions récurrentes depuis 2019 - Visites et soutien spirituel aux veuves</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-pink-100 rounded-lg">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h3 class="text-lg font-semibold">Veuves Aidées</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">120+</p>
              <p class="text-gray-600 text-sm">Femmes soutenues</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 class="text-lg font-semibold">Visites</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">500+</p>
              <p class="text-gray-600 text-sm">Visites effectuées</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <h3 class="text-lg font-semibold">Aide Financière</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">1.8M</p>
              <p class="text-gray-600 text-sm">FCFA distribués</p>
            </div>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h2 class="text-2xl font-bold text-[#003399] mb-6">Notre Engagement</h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Visites à Domicile</h3>
                  <p class="text-gray-700">Rencontres personnalisées avec chaque veuve pour comprendre ses besoins spécifiques et apporter un soutien adapté.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Soutien Spirituel</h3>
                  <p class="text-gray-700">Temps de prière, partage biblique et encouragement pour fortifier ces femmes dans leur épreuve.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Aide Matérielle</h3>
                  <p class="text-gray-700">Dons de nourriture, vêtements, médicaments et aide financière selon les besoins urgents identifiés.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Formation et Autonomie</h3>
                  <p class="text-gray-700">Soutien pour développer des activités génératrices de revenus et retrouver l'autonomie financière.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-8 rounded-2xl text-center">
            <h3 class="text-2xl font-bold text-[#003399] mb-4">Soutenez les Veuves</h3>
            <p class="text-[#003399] mb-6">Votre don apporte espoir et dignité aux veuves dans le besoin</p>
            <a href="https://obsxsyzu.mychariow.store/don-montant-libre" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-[#003399] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00B0F0] transition-colors">
              Faire un don maintenant
            </a>
          </div>
        </div>
      `,
      image: '/images/activities/1000151429.jpg',
      location: 'Libreville et provinces',
      date: 'Depuis 2019',
      impact: '120+ veuves soutenues'
    },
    'vop-youth-hopital': {
      id: 'vop-youth-hopital',
      title: 'VOP Youth - Mission Hospitalière',
      subtitle: 'Mission 2023 réalisée',
      description: 'Notre équipe de jeunes apporte réconfort et espoir aux patients de l\'hôpital de Libreville',
      fullContent: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-8 rounded-2xl">
            <h1 class="text-4xl font-bold mb-4">VOP Youth - Mission Hospitalière</h1>
            <p class="text-xl text-white/90">Notre équipe de jeunes apporte réconfort et espoir aux patients</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 class="text-lg font-semibold">Patients Visités</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">80+</p>
              <p class="text-gray-600 text-sm">Patients encouragés</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-green-100 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 class="text-lg font-semibold">Jeunes Bénévoles</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">15</p>
              <p class="text-gray-600 text-sm">Membres VOP Youth</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-yellow-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 class="text-lg font-semibold">Missions</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">12</p>
              <p class="text-gray-600 text-sm">Visites effectuées</p>
            </div>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h2 class="text-2xl font-bold text-[#003399] mb-6">L'Impact de VOP Youth</h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Visites Hospitalières</h3>
                  <p class="text-gray-700">Chaque mois, nos jeunes se rendent à l'hôpital pour apporter réconfort et espoir aux patients.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Moments de Joie</h3>
                  <p class="text-gray-700">Chants, prières et partage pour illuminer les journées difficiles des patients hospitalisés.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Soutien Moral</h3>
                  <p class="text-gray-700">Écoute, encouragement et prières pour fortifier les patients et leurs familles.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Formation des Jeunes</h3>
                  <p class="text-gray-700">Nos jeunes apprennent l'empathie, le service et l'amour du prochain à travers ces missions.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-8 rounded-2xl text-center">
            <h3 class="text-2xl font-bold text-[#003399] mb-4">Rejoignez VOP Youth</h3>
            <p class="text-[#003399] mb-6">Devenez un jeune engagé pour l'amour de Dieu</p>
            <a href="https://wa.me/24174791530?text=🎓%20FORMATION%20SPIRITUELLE%20-%20LA%20VOP%0A%0ABonjour%20!%20Je%20souhaite%20rejoindre%20VOP%20Youth%20pour%20servir%20dans%20l'amour%20de%20Dieu." 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-[#003399] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00B0F0] transition-colors">
              Rejoindre VOP Youth
            </a>
          </div>
        </div>
      `,
      image: '/images/activities/1000151414.jpg',
      location: 'Hôpital de Libreville',
      date: '2023',
      impact: '80+ patients visités'
    },
    'soutiens-etranger': {
      id: 'soutiens-etranger',
      title: 'Soutiens Financiers à l\'Étranger',
      subtitle: 'Soutiens ponctuels internationaux',
      description: 'Aides ponctuelles aux familles et contacts aux USA, Canada et autres pays selon les besoins identifiés',
      fullContent: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white p-8 rounded-2xl">
            <h1 class="text-4xl font-bold mb-4">Soutiens Financiers à l'Étranger</h1>
            <p class="text-xl text-white/90">Aides ponctuelles aux familles et contacts aux USA, Canada et autres pays</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-blue-100 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 class="text-lg font-semibold">Pays Soutenus</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">9</p>
              <p class="text-gray-600 text-sm">Pays bénéficiaires</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 class="text-lg font-semibold">Familles Aidées</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">25+</p>
              <p class="text-gray-600 text-sm">Familles soutenues</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-yellow-100 rounded-lg">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 class="text-lg font-semibold">Aide Totale</h3>
              </div>
              <p class="text-3xl font-bold text-[#003399] mb-2">5.2M</p>
              <p class="text-gray-600 text-sm">FCFA distribués</p>
            </div>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h2 class="text-2xl font-bold text-[#003399] mb-6">Notre Mission Internationale</h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Identification des Besoins</h3>
                  <p class="text-gray-700">Nous identifions les familles dans le besoin à travers notre réseau international de contacts et partenaires.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Aide Financière Directe</h3>
                  <p class="text-gray-700">Transferts d'argent sécurisés pour couvrir les besoins urgents : nourriture, logement, soins médicaux.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Suivi et Accompagnement</h3>
                  <p class="text-gray-700">Suivi régulier des familles aidées pour s'assurer de l'impact positif de notre soutien.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-[#00B0F0] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Partenariats Locaux</h3>
                  <p class="text-gray-700">Collaboration avec des organisations locales pour maximiser l'impact de nos dons internationaux.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-8 rounded-2xl text-center">
            <h3 class="text-2xl font-bold text-[#003399] mb-4">Soutenez Notre Mission Internationale</h3>
            <p class="text-[#003399] mb-6">Votre don peut aider une famille à l'étranger aujourd'hui</p>
            <a href="https://obsxsyzu.mychariow.store/don-montant-libre" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-[#003399] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00B0F0] transition-colors">
              Faire un don maintenant
            </a>
          </div>
        </div>
      `,
      image: '/images/activities/IMG-20250614-WA0079.jpg',
      location: 'USA, Canada, autres pays',
      date: 'Depuis 2020',
      impact: '25+ familles aidées'
    }
  };

  const { id } = useParams();
  const action = actions[id as keyof typeof actions];

  if (!action) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Action non trouvée</h1>
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
              to="/#actions" 
              className="flex items-center space-x-2 text-gray-600 hover:text-[#00B0F0] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux actions</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div dangerouslySetInnerHTML={{ __html: action.fullContent }} />
      </div>
    </div>
  );
};

export default ActionsDetailPage;
