import { Heart, ChevronRight } from 'lucide-react';
import { UTM_LINKS } from '../config/chariowLinks';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images de fond qui défilent - Vraies images VOP
  const backgroundImages = [
    "/images/backgrounds/Dons de la VOP sortie .jpg",
    "/images/backgrounds/Dons de la vop mamie.jpg",
    "/images/backgrounds/Dons de la VOP .jpg",
    "/images/backgrounds/Donald VOP prêche .jpg",
    "/images/backgrounds/IMG-20250614-WA0064.jpg"
  ];

  // Rotation des images toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 51, 153, 0.7), rgba(0, 176, 240, 0.7)), url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundAttachment: 'scroll'
            }}
          />
        ))}
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-white rounded-full"></div>
        <div className="absolute top-20 right-16 sm:top-40 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 bg-[#FFD700] rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 sm:bottom-32 w-8 h-8 sm:w-16 sm:h-16 bg-[#CC3366] rounded-full"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-10 h-10 sm:w-20 sm:h-20 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                L'amour de Dieu
                <span className="block text-[#FFD700]">en action</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Jésus-Christ ressuscité, annoncé par les œuvres et la vérité. 
                <span className="block font-semibold text-[#FFD700] mt-2">
                  Christ pour la Veuve, l'Orphelin et le Pauvre — à Libreville & en provinces
                </span>
                <span className="block text-white/80 text-lg mt-2">
                  Aides financières ponctuelles à l'étranger (USA, Canada, etc.)
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={UTM_LINKS.DON_LIBRE_HERO} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-[#CC3366] hover:bg-[#FFD700] text-white hover:text-[#003399] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
                <span>Faire un don maintenant</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#actions" 
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#003399] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Découvrir nos actions</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                <span>Transparence totale</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                <span>Impact vérifiable</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Notre Impact</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FFD700] mb-2">Actions locales</div>
                  <div className="text-white/90 text-sm">Dons réguliers aux orphelinats de Libreville</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FFD700] mb-2">Soutiens internationaux</div>
                  <div className="text-white/90 text-sm">Aides ponctuelles à l'étranger</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FFD700] mb-2">6 ans</div>
                  <div className="text-white/90 text-sm">D'engagement depuis 2019</div>
                </div>
              </div>
            </div>

            {/* Quick Donation Options */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Don rapide</h4>
              <div className="grid grid-cols-3 gap-3">
                <a 
                  href={UTM_LINKS.DON_5000_HERO} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-[#FFD700] text-white hover:text-[#003399] p-3 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  5k FCFA
                </a>
                <a 
                  href={UTM_LINKS.DON_10000_HERO} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-[#FFD700] text-white hover:text-[#003399] p-3 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  10k FCFA
                </a>
                <a 
                  href={UTM_LINKS.DON_25000_HERO} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-[#FFD700] text-white hover:text-[#003399] p-3 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  25k FCFA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;