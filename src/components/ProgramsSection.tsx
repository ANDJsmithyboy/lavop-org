import { Heart, Users, GraduationCap, Globe, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { UTM_LINKS } from '../config/chariowLinks';

const ProgramsSection = () => {
  const programs = [
    {
      id: 'orphelinats',
      title: "Programme Orphelins",
      subtitle: "Protection et éducation des enfants",
      description: "Dons en nature et en numéraire aux orphelinats Bon Samaritain et Arc-en-ciel de Sainte-Marie. Soutien éducatif et nutritionnel pour les enfants avec handicaps.",
      icon: Heart,
      color: "text-[#CC3366]",
      bgColor: "bg-[#CC3366]",
      gradient: "from-[#CC3366] to-[#FF6B9D]",
      image: "/images/activities/IMG-20250614-WA0058.jpg",
      impact: "Enfants avec handicaps heureux",
      countries: ["Libreville, Gabon"],
      needs: ["Fournitures scolaires", "Nourriture", "Vêtements", "Médicaments"],
      donationLink: UTM_LINKS.DON_ORPHELIN_PROGRAMME
    },
    {
      id: 'provinces',
      title: "Provinces — Aides ponctuelles",
      subtitle: "Missions d'entraide selon les besoins urgents",
      description: "Interventions ciblées en province selon les besoins urgents. Distribution de fournitures scolaires, aide alimentaire et soutien aux familles vulnérables.",
      icon: Users,
      color: "text-[#66CCFF]",
      bgColor: "bg-[#66CCFF]",
      gradient: "from-[#66CCFF] to-[#4A90E2]",
      image: "/images/activities/IMG-20230321-WA0010.jpg",
      impact: "Missions ponctuelles",
      countries: ["Lambaréné", "Port-Gentil", "Franceville"],
      needs: ["Fournitures scolaires", "Aide alimentaire", "Vêtements", "Médicaments"],
      donationLink: UTM_LINKS.DON_EDUCATION_PROGRAMME
    },
    {
      id: 'etranger',
      title: "Soutiens financiers à l'étranger",
      subtitle: "Appuis ciblés (USA, Canada, etc.)",
      description: "Aides financières ponctuelles via virements et applications de paiement. Soutien aux familles et étudiants à l'étranger.",
      icon: GraduationCap,
      color: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]",
      gradient: "from-[#FFD700] to-[#FFA500]",
      image: "https://images.pexels.com/photos/8837735/pexels-photo-8837735.jpeg?auto=compress&cs=tinysrgb&w=600",
      impact: "Aides ponctuelles",
      countries: ["USA", "Canada", "France"],
      needs: ["Virements", "Cash App", "Aide familiale", "Soutien étudiant"],
      donationLink: UTM_LINKS.DON_EVANGELISATION_PROGRAMME
    },
  ];

  return (
    <section id="programmes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Nos Actions Locales & Soutiens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Actions concrètes à Libreville, en provinces et soutiens ponctuels à l'étranger
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={program.id} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 p-3 rounded-full">
                      <IconComponent className={`w-8 h-8 ${program.color}`} />
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute bottom-6 right-6">
                    <div className={`${program.bgColor} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                      {program.impact}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[#003399] mb-2 group-hover:text-[#00B0F0] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-[#00B0F0] font-semibold">{program.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Countries & Needs */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#00B0F0]" />
                        <span className="font-semibold text-[#003399] text-sm">Zones d'intervention</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {program.countries.map((country, idx) => (
                          <span key={idx} className="bg-[#00B0F0]/10 text-[#003399] px-3 py-1 rounded-full text-xs">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Heart className="w-4 h-4 text-[#CC3366]" />
                        <span className="font-semibold text-[#003399] text-sm">Besoins prioritaires</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {program.needs.map((need, idx) => (
                          <span key={idx} className="bg-[#CC3366]/10 text-[#CC3366] px-3 py-1 rounded-full text-xs">
                            {need}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a 
                    href={program.donationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn w-full bg-gradient-to-r ${program.gradient} text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3`}
                  >
                    <Heart className="w-5 h-5" fill="currentColor" />
                    <span>Soutenir ce programme</span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Impact Stats */}
        <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Impact Global de Nos Programmes
            </h3>
            <p className="text-xl text-white/90">
              Des résultats concrets grâce à votre générosité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">20</div>
              <div className="text-white/90">Orphelinats soutenus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">5</div>
              <div className="text-white/90">Villes en province</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">9</div>
              <div className="text-white/90">Pays étrangers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">6</div>
              <div className="text-white/90">Années d'engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
