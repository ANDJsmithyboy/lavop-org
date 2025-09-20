import React from 'react';
import { Music, Users, Flame, Heart } from 'lucide-react';

const MinistriesSection = () => {
  const ministries = [
    {
      id: 'vopyouth',
      name: 'VOP Youth',
      tagline: 'Jeunesse en Feu pour Christ',
      icon: Flame,
      color: 'text-[#66CCFF]',
      bgColor: 'bg-[#66CCFF]',
      gradient: 'from-[#66CCFF] to-[#CC3366]',
      image: 'https://images.pexels.com/photos/8837735/pexels-photo-8837735.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Un mouvement jeunesse dynamique qui inspire la nouvelle génération à vivre passionnément pour Christ',
      activities: ['Évangélisation', 'Œuvres sociales', 'Événements culturels', 'Entrepreneuriat jeune'],
      impact: '3,000+ jeunes touchés'
    },
    {
      id: 'vopmusic',
      name: 'VOP Song Music',
      tagline: 'Louange qui Transforme',
      icon: Music,
      color: 'text-[#CC3366]',
      bgColor: 'bg-[#CC3366]',
      gradient: 'from-[#CC3366] to-[#00B0F0]',
      image: 'https://images.pexels.com/photos/8164742/pexels-photo-8164742.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Ministère musical qui utilise la louange pour toucher les cœurs et évangéliser les nations',
      activities: ['Un réveil dans ma nation', 'C\'est le vent de l\'Esprit', 'Concerts prophétiques', 'Formation musicale'],
      impact: '50+ concerts organisés'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Nos Ministères Spécialisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez VOP Youth et VOP Song Music, nos ministères dédiés à la jeunesse et à la louange
          </p>
        </div>

        {/* Ministries */}
        <div className="space-y-16">
          {ministries.map((ministry, index) => {
            const IconComponent = ministry.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <div key={ministry.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={ministry.image} 
                      alt={ministry.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${ministry.gradient} opacity-20`}></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/90 p-4 rounded-full">
                        <IconComponent className={`w-8 h-8 ${ministry.color}`} />
                      </div>
                    </div>

                    {/* Impact Badge */}
                    <div className="absolute bottom-6 right-6">
                      <div className={`${ministry.bgColor} text-white px-6 py-3 rounded-full font-bold`}>
                        {ministry.impact}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <IconComponent className={`w-8 h-8 ${ministry.color}`} />
                      <h3 className="text-3xl md:text-4xl font-bold text-[#003399]">
                        {ministry.name}
                      </h3>
                    </div>
                    <p className={`text-xl font-semibold ${ministry.color} mb-4`}>
                      {ministry.tagline}
                    </p>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {ministry.description}
                  </p>

                  {/* Activities */}
                  <div>
                    <h4 className="text-lg font-bold text-[#003399] mb-3">Nos Activités :</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {ministry.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${ministry.bgColor} rounded-full`}></div>
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className={`bg-gradient-to-r ${ministry.gradient} text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all`}>
                      Rejoindre {ministry.name}
                    </button>
                    <button className="border-2 border-[#003399] text-[#003399] px-8 py-3 rounded-full font-semibold hover:bg-[#003399] hover:text-white transition-all">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Combined Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-[#003399] via-[#00B0F0] to-[#CC3366] rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center space-x-4 mb-6">
              <Flame className="w-12 h-12 text-[#FFD700]" />
              <Heart className="w-12 h-12 text-white" fill="currentColor" />
              <Music className="w-12 h-12 text-[#FFD700]" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold">
              Découvrez Votre Appel dans Nos Ministères
            </h3>
            
            <p className="text-xl text-white/90">
              Que vous soyez passionné par la jeunesse ou la musique, il y a une place pour vous dans la famille VOP
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="bg-[#FFD700] text-[#003399] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors">
                Rejoindre VOP Youth
              </button>
              <button className="bg-[#CC3366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#CC3366] transition-colors">
                Rejoindre VOP Music
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;