import { Book, Star, ExternalLink, Zap, Brain, Key, Edit, Globe, Link, Award } from 'lucide-react';

const CoachingSystemSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Coaching d'Intuition Intégré",
      description: "Méthode personnelle pour sentir les marchés et discerner où investir au-delà des graphiques",
      color: "text-[#00B0F0]"
    },
    {
      icon: Key,
      title: "Secrets Bibliques Dévoilés",
      description: "Compréhension profonde des lois de la semence et du don pour la prospérité",
      color: "text-[#FFD700]"
    },
    {
      icon: Edit,
      title: "Workbook Actif",
      description: "Sections pratiques où vous écrivez, définissez vos objectifs et prenez des engagements",
      color: "text-[#CC3366]"
    },
    {
      icon: Globe,
      title: "Philosophie Universelle",
      description: "Système pratique et universel qui guide quiconque vers la clarté et le succès éthique",
      color: "text-[#66CCFF]"
    },
    {
      icon: Link,
      title: "Modes d'Emploi Interactifs",
      description: "Liens cliquables dans chaque chapitre pour accéder directement aux ressources et outils",
      color: "text-[#FF6B35]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Le Coaching Ultime pour Bâtir Votre Avenir
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-6">
            Sagesse Spirituelle et Maîtrise Technologique
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-3xl mx-auto">
            <p className="text-lg font-semibold mb-4">
              ⚠️ ATTENTION : Ceci n'est pas un livre à lire, c'est un système à VIVRE.
            </p>
            <p className="text-white/90 text-sm">
              Si vous cherchez une simple lecture, ce produit n'est pas pour vous. 
              Si vous cherchez une transformation radicale de votre approche de la finance, 
              de la vie et de la spiritualité à l'ère de l'IA et de la Crypto, alors bienvenue.
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div className="text-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl font-bold text-[#FFD700]">6 000 FCFA</span>
              <span className="text-2xl text-white/60 line-through">15 000 FCFA</span>
            </div>
            <p className="text-white/90 mb-6">
              Prix promo limité - Investissez dans votre transformation
            </p>
            <a
              href="https://njunarse.mychariow.store/andjguidepratique"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#FFD700] text-[#003399] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFA500] transition-colors transform hover:scale-105"
            >
              <Book className="w-6 h-6" />
              <span>Accéder au Système</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 ${feature.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What You Get */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Ce que vous obtenez :</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-[#FFD700]" />
                <span className="text-white/90">Plus de 12 chapitres de coaching interactif</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-[#FFD700]" />
                <span className="text-white/90">Années de révélations, de tests et de succès condensés</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-[#FFD700]" />
                <span className="text-white/90">Mode d'emploi personnel d'ANDJ Daniel Jonathan</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-[#FFD700]" />
                <span className="text-white/90">Accès direct aux ressources et plateformes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-[#FFD700]" />
                <span className="text-white/90">Journal de bord vers la réussite</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-[#FFD700]" />
                <span className="text-white/90">Le pont entre sagesse millénaire et technologie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Investissez dans Votre Transformation</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Le coaching commence maintenant. Maîtrisez les finances modernes (IA, Crypto, Trading) 
              sans jamais perdre votre âme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://njunarse.mychariow.store/andjguidepratique"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#FFD700] text-[#003399] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFA500] transition-colors transform hover:scale-105"
              >
                <Book className="w-6 h-6" />
                <span>Commencer le Coaching</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="/boutique"
                className="inline-flex items-center space-x-2 bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                <Award className="w-5 h-5" />
                <span>Voir la Boutique</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingSystemSection;
