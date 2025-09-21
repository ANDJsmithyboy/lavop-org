import { Play, Heart, Users, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const VOPActionsSection = () => {
  const actions = [
    {
      id: 1,
      title: "Dons aux Orphelinats de Libreville",
      description: "Soutien régulier aux orphelinats Bon Samaritain et Arc-en-ciel de Sainte-Marie avec dons en nature et en numéraire",
      video: "/videos/1000102806.mp4",
      thumbnail: "/images/activities/1000151414.jpg",
      whatsappUrl: "https://wa.me/24174791530?text=💝%20SOUTIEN%20ORPHELINATS%20VOP%0A%0ABonjour%20!%20Je%20souhaite%20soutenir%20les%20orphelinats%20de%20Libreville.",
      impact: "2 orphelinats soutenus",
      location: "Libreville, Gabon",
      date: "Depuis 2019",
      hashtags: ["#orphelinats", "#donsvop", "#libreville"],
      detailUrl: "/actions/orphelinats-libreville"
    },
    {
      id: 2,
      title: "Aide aux Veuves Locales",
      description: "Visites et soutien spirituel aux veuves de Libreville et des provinces. Aide ponctuelle selon les besoins urgents.",
      video: "/videos/1000102808.mp4",
      thumbnail: "/images/activities/1000151429.jpg",
      whatsappUrl: "https://wa.me/24174791530?text=💝%20SOUTIEN%20VEUVES%20VOP%0A%0ABonjour%20!%20Je%20souhaite%20soutenir%20l'aide%20aux%20veuves%20locales.",
      impact: "Actions récurrentes depuis 2019",
      location: "Libreville et provinces",
      date: "Depuis 2019",
      hashtags: ["#veuves", "#soutien", "#compassion"],
      detailUrl: "/actions/aide-veuves-locales"
    },
    {
      id: 3,
      title: "VOP Youth - Mission Hospitalière",
      description: "Notre équipe de jeunes apporte réconfort et espoir aux patients de l'hôpital de Libreville",
      video: "/videos/1000151380.mp4",
      thumbnail: "/images/activities/1000151414.jpg",
      whatsappUrl: "https://wa.me/24174791530?text=💝%20SOUTIEN%20VOP%20YOUTH%0A%0ABonjour%20!%20Je%20souhaite%20soutenir%20les%20missions%20VOP%20Youth.",
      impact: "Mission 2023 réalisée",
      location: "Hôpital de Libreville",
      date: "Mission 2023 réalisée",
      hashtags: ["#vopyouth", "#hopital", "#jeunesse"],
      detailUrl: "/actions/vop-youth-hopital"
    },
    {
      id: 4,
      title: "Soutiens Financiers à l'Étranger",
      description: "Aides ponctuelles aux familles et contacts aux USA, Canada et autres pays selon les besoins identifiés",
      video: "/videos/1000102806.mp4",
      thumbnail: "/images/activities/IMG-20250614-WA0079.jpg",
      whatsappUrl: "https://wa.me/24174791530?text=💝%20SOUTIEN%20INTERNATIONAL%20VOP%0A%0ABonjour%20!%20Je%20souhaite%20soutenir%20les%20aides%20internationales%20VOP.",
      impact: "Soutiens ponctuels internationaux",
      location: "USA, Canada, France",
      date: "Soutiens ponctuels internationaux",
      hashtags: ["#international", "#solidarite", "#familles"],
      detailUrl: "/actions/soutiens-internationaux"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Nos Actions Locales & Soutiens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez comment La VOP transforme des vies à Libreville et apporte son soutien à l'international
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {actions.map((action) => (
            <div key={action.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Video */}
              <div className="relative">
                <video
                  className="w-full h-64 object-cover rounded-t-2xl"
                  poster={action.thumbnail}
                  controls
                  preload="metadata"
                >
                  <source src={action.video} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
                
                {/* TikTok Link Overlay */}
                {action.tiktokUrl && (
                  <div className="absolute top-2 right-2">
                    <a
                      href={action.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-black/90 transition-colors flex items-center space-x-1"
                    >
                      <span>🎵</span>
                      <span>TikTok</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-[#00B0F0] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {action.impact}
                  </span>
                  <span className="text-gray-500 text-xs">{action.date}</span>
                </div>

                <h3 className="text-xl font-bold text-[#003399] mb-3">{action.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{action.description}</p>

                {/* Location */}
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-4 h-4 text-[#00B0F0]" />
                  <span className="text-gray-600 text-sm">{action.location}</span>
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {action.hashtags.map((tag, index) => (
                    <span key={index} className="text-[#00B0F0] text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  {action.tiktokUrl && (
                    <a
                      href={action.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      <span className="text-lg">🎵</span>
                      <span>TikTok</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <div className="flex space-x-3">
                    <Link 
                      to={action.detailUrl}
                      className="flex items-center space-x-2 bg-[#003399] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#00B0F0] transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>En savoir plus</span>
                    </Link>
                    <button
                      onClick={() => {
                        if (action.whatsappUrl) {
                          window.open(action.whatsappUrl, '_blank');
                        } else {
                          // Partager le contenu général
                          const shareText = `${action.title}\n\n${action.description}\n\n#LAVOP #ChristPourLaVOP`;
                          if (navigator.share) {
                            navigator.share({
                              title: action.title,
                              text: shareText
                            });
                          } else {
                            navigator.clipboard.writeText(shareText);
                            alert('Contenu copié !');
                          }
                        }
                      }}
                      className="flex items-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#003399] transition-colors text-sm"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Soutenir</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notre Impact Béton */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Notre Impact Béton</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">40+</div>
                <div className="text-white/90">Enfants soutenus</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-white/90">Veuves accompagnées</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-white/90">Années d'action</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-white/90">Pays de soutien</div>
              </div>
            </div>
          </div>
        </div>

        {/* Équipe VOP Photo */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                 <img
                   src="/images/activities/IMG-20250614-WA0079.jpg"
                   alt="Secrétaire générale mondiale de la VOP Émilie et fondateur Daniel Jonathan ANDJ avec une petite fille lors d'une sortie de la VOP"
                   className="w-full h-64 md:h-80 lg:h-96 object-cover"
                 />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#003399] mb-2">
                Équipe VOP en Action
              </h3>
              <p className="text-gray-600 mb-4">
                Secrétaire générale mondiale de la VOP Émilie et fondateur Daniel Jonathan ANDJ avec une petite fille lors d'une sortie de la VOP - 2025
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Suivez-nous sur TikTok</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Rejoignez notre communauté de 3000+ abonnés et découvrez nos actions en temps réel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.tiktok.com/@christpourlavop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#FFD700] text-[#003399] px-8 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Suivre @christpourlavop</span>
              </a>
              <a
                href="/programmes"
                className="inline-flex items-center space-x-2 bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                <Award className="w-5 h-5" />
                <span>Nos Programmes</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VOPActionsSection;
