import { Users, GraduationCap, Heart, Globe, ChevronRight } from 'lucide-react';

const ActionsSection = () => {
  const actions = [
    {
      icon: Heart,
      title: "Dons aux Orphelinats de Libreville",
      description: "Soutien régulier aux orphelinats Bon Samaritain et Arc-en-ciel de Sainte-Marie avec dons en nature et en numéraire",
      image: "/images/activities/IMG-20250614-WA0058.jpg",
      impact: "2 orphelinats soutenus",
      color: "text-[#CC3366]",
      bgColor: "bg-[#CC3366]"
    },
    {
      icon: Users,
      title: "Aide aux Veuves Locales",
      description: "Visites et soutien spirituel aux veuves de Libreville et des provinces. Aide ponctuelle selon les besoins urgents.",
      image: "/images/activities/1000151429.jpg",
      impact: "Actions récurrentes depuis 2019",
      color: "text-[#66CCFF]",
      bgColor: "bg-[#66CCFF]"
    },
    {
      icon: GraduationCap,
      title: "VOP Youth - Mission Hospitalière",
      description: "Notre équipe de jeunes apporte réconfort et espoir aux patients de l'hôpital de Libreville",
      image: "/images/activities/1000151414.jpg",
      impact: "Mission 2023 réalisée",
      color: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]"
    },
    {
      icon: Globe,
      title: "Soutiens Financiers à l'Étranger",
      description: "Aides ponctuelles aux familles et contacts aux USA, Canada et autres pays selon les besoins identifiés",
      image: "/images/activities/IMG-20250614-WA0079.jpg",
      impact: "Soutiens ponctuels internationaux",
      color: "text-[#00B0F0]",
      bgColor: "bg-[#00B0F0]"
    }
  ];

  return (
    <section id="actions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Nos Actions Locales & Soutiens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment La VOP transforme des vies à Libreville et apporte son soutien à l'international
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={action.image} 
                    alt={action.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 ${action.bgColor} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 p-3 rounded-full">
                      <IconComponent className={`w-8 h-8 ${action.color}`} />
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute bottom-6 right-6">
                    <div className={`${action.bgColor} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                      {action.impact}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#003399] mb-4 group-hover:text-[#00B0F0] transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {action.description}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-[#00B0F0] font-semibold hover:text-[#003399] transition-colors group">
                    <span>En savoir plus</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* International Aid Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003399] mb-4">
              Notre Impact Béton
            </h3>
            <p className="text-xl text-gray-600">
              Actions locales à Libreville & soutiens ponctuels à l'étranger depuis 2019
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-r from-[#00B0F0] to-[#003399] rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Aide Familiale Urgente</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">USA</span>
                  <span className="text-[#FFD700]">Décembre 2024</span>
                </div>
                <div className="text-sm text-white/90">
                  Application Virement Cash 500$
                </div>
                <div className="text-sm text-white/90">
                  Aide familiale urgente
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#CC3366] to-[#FF6B9D] rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Soutien Étudiant</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Canada</span>
                  <span className="text-[#FFD700]">Novembre 2024</span>
                </div>
                <div className="text-sm text-white/90">
                  Virement bancaire 300 CAD
                </div>
                <div className="text-sm text-white/90">
                  Soutien étudiant
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-[#003399] mb-4">Pays Touchés</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {['Angola', 'Guinée Conakry', 'Mali', 'Burkina Faso', 'Haïti', 'Cameroun', 'RDC', 'Malawi'].map((country) => (
                <span key={country} className="bg-[#00B0F0]/10 text-[#003399] px-3 py-1 rounded-full text-sm font-semibold">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#00B0F0] to-[#003399] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Impact de La VOP
            </h3>
            <p className="text-xl text-white/90">
              Des chiffres authentiques qui témoignent de l'amour de Dieu en action
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">6</div>
              <div className="text-white/90">Années d'engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">20</div>
              <div className="text-white/90">Orphelinats soutenus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">3K+</div>
              <div className="text-white/90">Abonnés TikTok</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">100%</div>
              <div className="text-white/90">Transparence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;