import { Heart, Globe, Calendar, MapPin, Book, Users } from 'lucide-react';
import founderPhoto from '../assets/fondateur-avec-des-enfants.jpg';
import petitsOrphelins from '../assets/petits-orphelins-vop.jpg';
import donsFamille from '../assets/dons-famille.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            À Propos de La VOP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Christ pour la Veuve, l'Orphelin, le Pauvre et Toutes les Nations Internationales
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#00B0F0] to-[#003399] text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Notre Fondateur</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={founderPhoto} 
                    alt="ANDJ Daniel Jonathan - Fondateur de La VOP"
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#FFD700]"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-[#FFD700]">
                      ANDJ Daniel Jonathan
                    </h4>
                    <p className="text-white/90 text-sm">
                      Fondateur & Visionnaire de La VOP
                    </p>
                  </div>
                </div>
                <p className="text-white/90">
                  Né le 14 juin 2002 à Lambaréné, Gabon. Entrepreneur humanitaire, auteur, 
                  technologue engagé et leader spirituel passionné par l'impact social et la 
                  justice pour les plus vulnérables.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Book className="w-5 h-5 text-[#FFD700]" />
                    <span className="text-sm">Auteur de "Comment investir dans ces temps de la fin ?"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Book className="w-5 h-5 text-[#FFD700]" />
                    <span className="text-sm">Expert en crypto-monnaies et investissements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Book className="w-5 h-5 text-[#FFD700]" />
                    <span className="text-sm">"La Prophétie de Bitcoin" - À paraître</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#003399] mb-6">Notre Histoire</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00B0F0] text-white rounded-full p-2 flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003399]">2019 - Les Débuts</h4>
                    <p className="text-gray-600 text-sm">Première activité durant la pandémie COVID-19</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFD700] text-[#003399] rounded-full p-2 flex-shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003399]">17 Décembre 2022</h4>
                    <p className="text-gray-600 text-sm">Lancement officiel de La VOP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#CC3366] text-white rounded-full p-2 flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003399]">2023-2024</h4>
                    <p className="text-gray-600 text-sm">Expansion internationale - 17+ pays touchés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div 
            className="bg-[#00B0F0]/10 rounded-2xl p-8 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 176, 240, 0.70), rgba(0, 176, 240, 0.70)), url('${petitsOrphelins}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Notre Mission</h3>
              <p className="text-white/95 leading-relaxed">
                Annoncer Jésus-Christ ressuscité non seulement par la parole, mais surtout par des actes 
                concrets d'amour, de justice et de miséricorde. Nous démontrons la compassion de Dieu en 
                servant activement les veuves, les orphelins, les pauvres et les laissés-pour-compte.
              </p>
            </div>
          </div>
          
          <div 
            className="bg-[#FFD700]/10 rounded-2xl p-8 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.70), rgba(255, 215, 0, 0.70)), url('${donsFamille}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#003399] mb-4">Notre Vision</h3>
              <p className="text-[#003399]/95 leading-relaxed">
                Être une lumière pour les nations et une voix pour les sans-voix. Établir une communauté 
                de disciples engagés dans l'action humanitaire, la transformation sociale, et la diffusion 
                de l'Évangile, dans l'unité et la puissance de l'Esprit.
              </p>
            </div>
          </div>
        </div>

        {/* Biblical Foundation */}
        <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white rounded-3xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Nos Fondements Bibliques</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <blockquote className="italic text-white/90 text-sm leading-relaxed">
                "Apprenez à faire le bien, recherchez la justice, protégez l'opprimé, 
                faites droit à l'orphelin, défendez la veuve."
              </blockquote>
              <cite className="text-[#FFD700] font-semibold text-sm">- Ésaïe 1:17</cite>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <blockquote className="italic text-white/90 text-sm leading-relaxed">
                "J'ai eu faim, et vous m'avez donné à manger... Ce que vous avez fait à l'un 
                de ces plus petits, c'est à moi que vous l'avez fait."
              </blockquote>
              <cite className="text-[#FFD700] font-semibold text-sm">- Matthieu 25:35-40</cite>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8" />
              </div>
              <blockquote className="italic text-white/90 text-sm leading-relaxed">
                "La religion pure et sans tache devant Dieu consiste à visiter les orphelins 
                et les veuves dans leur affliction."
              </blockquote>
              <cite className="text-[#FFD700] font-semibold text-sm">- Jacques 1:27</cite>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#003399] mb-8">Notre Présence Mondiale</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <MapPin className="w-8 h-8 text-[#00B0F0] mx-auto mb-3" />
              <h4 className="font-bold text-[#003399] mb-2">Siège Principal</h4>
              <p className="text-gray-600 text-sm">Libreville, Gabon</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <Globe className="w-8 h-8 text-[#FFD700] mx-auto mb-3" />
              <h4 className="font-bold text-[#003399] mb-2">Expansion</h4>
              <p className="text-gray-600 text-sm">France, UK, USA</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <Users className="w-8 h-8 text-[#CC3366] mx-auto mb-3" />
              <h4 className="font-bold text-[#003399] mb-2">Impact Local</h4>
              <p className="text-gray-600 text-sm">2 orphelinats soutenus</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <Heart className="w-8 h-8 text-[#66CCFF] mx-auto mb-3" />
              <h4 className="font-bold text-[#003399] mb-2">Soutiens Étrangers</h4>
              <p className="text-gray-600 text-sm">3 pays (USA, Canada, France)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;