import { HandHeart, Lightbulb, MessageCircle } from 'lucide-react';

const PillarsSection = () => {
  const pillars = [
    {
      icon: HandHeart,
      title: "Nous Servons",
      description: "Aider concrètement les veuves, orphelins et pauvres avec compassion et dignité",
      color: "text-[#00B0F0]",
      bgColor: "bg-[#00B0F0]/10"
    },
    {
      icon: Lightbulb,
      title: "Nous Inspirons", 
      description: "Transmettre l'espoir et la foi par l'exemple et l'engagement chrétien",
      color: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10"
    },
    {
      icon: MessageCircle,
      title: "Nous Proclamons",
      description: "Annoncer l'Évangile de Christ et former des disciples dans toutes les nations",
      color: "text-[#CC3366]",
      bgColor: "bg-[#CC3366]/10"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Nos Trois Piliers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La mission de La VOP repose sur trois fondements bibliques qui guident toutes nos actions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${pillar.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-10 h-10 ${pillar.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-[#003399] mb-4 group-hover:text-[#00B0F0] transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="#actions" className="bg-[#00B0F0] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#003399] transition-colors transform hover:scale-105 inline-block">
            Découvrir Nos Actions
          </a>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;