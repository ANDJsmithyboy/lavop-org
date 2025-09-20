import { Heart, Users, Calendar, MapPin } from 'lucide-react';

const ActivitiesGallery = () => {
  const activities = [
    {
      id: 1,
      title: "Sortie VOPyouth à l'Hôpital 2023",
      description: "Visite et soutien aux enfants hospitalisés",
      image: "/src/assets/images/activities/1000151414.jpg",
      date: "2023",
      location: "Libreville, Gabon",
      type: "VOPyouth"
    },
    {
      id: 2,
      title: "Visite chez une Veuve",
      description: "Soutien et accompagnement des veuves dans le besoin",
      image: "/src/assets/images/activities/1000151429.jpg",
      date: "2024",
      location: "Libreville, Gabon",
      type: "Soutien Veuves"
    },
    {
      id: 3,
      title: "Assemblée Générale VOP",
      description: "Réunion annuelle au siège de La VOP",
      image: "/src/assets/images/activities/1000151368.jpg",
      date: "2024",
      location: "Siège VOP, Libreville",
      type: "Assemblée"
    },
    {
      id: 4,
      title: "Sortie avec les Enfants",
      description: "Moment de joie et de partage avec les enfants",
      image: "/src/assets/images/activities/IMG-20250614-WA0099.jpg",
      date: "2024",
      location: "Libreville, Gabon",
      type: "VOPyouth"
    },
    {
      id: 5,
      title: "Sortie VOP 2025",
      description: "Enfants avec handicaps heureux lors de notre sortie",
      image: "/src/assets/images/activities/IMG-20250614-WA0058.jpg",
      date: "2025",
      location: "Libreville, Gabon",
      type: "Inclusion"
    },
    {
      id: 6,
      title: "Équipe VOP en Action",
      description: "Secrétaire générale mondiale et fondateur avec une petite fille",
      image: "/src/assets/images/activities/IMG-20250614-WA0079.jpg",
      date: "2024",
      location: "Libreville, Gabon",
      type: "Équipe"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'VOPyouth':
        return 'bg-[#00B0F0] text-white';
      case 'Soutien Veuves':
        return 'bg-[#CC3366] text-white';
      case 'Assemblée':
        return 'bg-[#FFD700] text-[#003399]';
      case 'Inclusion':
        return 'bg-[#66CCFF] text-white';
      case 'Équipe':
        return 'bg-[#003399] text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Nos Actions en Images
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos activités concrètes à Libreville et en provinces
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(activity.type)}`}>
                    {activity.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003399] mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activity.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{activity.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{activity.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Rejoignez Notre Mission
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Votre soutien nous permet de continuer ces actions concrètes d'amour et de compassion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://obsxsyzu.mychariow.store/don-montant-libre?utm_source=site&utm_medium=gallery&utm_campaign=activities"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD700] text-[#003399] px-8 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
              >
                Faire un don maintenant
              </a>
              <a 
                href="/impact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Voir notre impact détaillé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesGallery;
