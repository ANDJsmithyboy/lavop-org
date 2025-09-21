import { Heart, Users, GraduationCap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramsPreview = () => {
  const programs = [
    {
      icon: Heart,
      title: "Orphelinats — Libreville",
      description: "Dons en nature et en numéraire aux orphelinats",
      impact: "Enfants avec handicaps heureux",
      color: "text-[#CC3366]",
      bgColor: "bg-[#CC3366]",
      image: "/images/activities/IMG-20250614-WA0058.jpg"
    },
    {
      icon: Users,
      title: "Provinces — Aides ponctuelles",
      description: "Missions d'entraide selon les besoins urgents",
      impact: "Missions ponctuelles",
      color: "text-[#66CCFF]",
      bgColor: "bg-[#66CCFF]",
      image: "/images/activities/IMG-20230321-WA0010.jpg"
    },
    {
      icon: GraduationCap,
      title: "Soutiens financiers à l'étranger",
      description: "Appuis ciblés (USA, Canada, etc.)",
      impact: "Aides ponctuelles",
      color: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]",
      image: "https://images.pexels.com/photos/8837735/pexels-photo-8837735.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="programmes-preview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Nos Programmes d'Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos programmes concrets et soutenez directement l'action qui vous touche le plus
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 ${program.bgColor} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 p-2 rounded-full">
                      <IconComponent className={`w-6 h-6 ${program.color}`} />
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className={`${program.bgColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {program.impact}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#003399] mb-2 group-hover:text-[#00B0F0] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/programmes" 
            className="group inline-flex items-center space-x-2 bg-[#00B0F0] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#003399] transition-colors transform hover:scale-105"
          >
            <span>Voir tous les programmes</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
