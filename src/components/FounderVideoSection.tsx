import { Play, Heart, Users, Globe } from 'lucide-react';

const FounderVideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rencontrez Notre Fondateur
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez la vision et la passion d'ANDJ Daniel Jonathan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            {/* Photo du fondateur */}
            <div className="mb-6 text-center">
              <img 
                src="/images/founder/photo_andj_ceo.jpg" 
                alt="ANDJ Daniel Jonathan - Fondateur de LA VOP"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#FFD700] shadow-2xl"
              />
              <h3 className="text-xl font-bold text-white mt-4">ANDJ Daniel Jonathan</h3>
              <p className="text-[#FFD700] font-semibold">Fondateur & Président de LA VOP</p>
            </div>
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* YouTube Video Embed */}
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/kFQCYR6tiTw?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1"
                  title="ANDJ Daniel Jonathan - Fondateur de LA VOP"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Video Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Heart className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
                <div className="text-2xl font-bold">6</div>
                <div className="text-white/80 text-sm">Années d'engagement</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Users className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
                <div className="text-2xl font-bold">20+</div>
                <div className="text-white/80 text-sm">Impact local</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Globe className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
                <div className="text-2xl font-bold">9</div>
                <div className="text-white/80 text-sm">Soutien étranger</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">
                Une Vision Inspirée
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                "Notre mission n'est pas seulement d'aider, mais de transformer des vies 
                par l'amour de Dieu manifesté dans des actions concrètes. Chaque don, 
                chaque sourire, chaque geste d'amour compte."
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span className="text-white/90">Engagement local à Libreville</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span className="text-white/90">Soutiens ponctuels à l'étranger</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span className="text-white/90">Transparence totale dans nos actions</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">
                Rejoignez Notre Mission
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Votre soutien nous permet de continuer à servir les plus vulnérables 
                avec amour, compassion et efficacité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://obsxsyzu.mychariow.store/don-montant-libre?utm_source=site&utm_medium=video&utm_campaign=founder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFD700] text-[#003399] px-8 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors text-center"
                >
                  Faire un don maintenant
                </a>
                <a 
                  href="/impact"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Voir notre impact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVideoSection;
