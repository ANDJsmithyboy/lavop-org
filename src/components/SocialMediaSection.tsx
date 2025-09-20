import { Youtube, Music, ExternalLink, Users, Heart, Globe } from 'lucide-react';

const SocialMediaSection = () => {
  const socialLinks = [
    {
      platform: "YouTube",
      name: "Christ pour la VOP",
      url: "https://share.google/W2p4eMYYAyFSf8AIi",
      icon: Youtube,
      color: "text-red-600",
      bgColor: "bg-red-50",
      description: "Chaîne officielle avec prédications et témoignages",
      subscribers: "Abonnés en croissance"
    },
    {
      platform: "TikTok",
      name: "@christpourlavop",
      url: "https://www.tiktok.com/@christpourlavop",
      icon: Music,
      color: "text-black",
      bgColor: "bg-gray-50",
      description: "Vidéos courtes de nos actions avec 3000+ abonnés",
      subscribers: "3K+ abonnés"
    },
    {
      platform: "Medium",
      name: "@Danielandj",
      url: "https://medium.com/@Danielandj",
      icon: ExternalLink,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Articles et réflexions du fondateur",
      subscribers: "Lecteurs engagés"
    }
  ];

  const founderInfo = {
    name: "ANDJ Daniel Jonathan",
    title: "Fondateur de La VOP & CEO SmartANDJ AI Technologies",
    description: "Entrepreneur humanitaire, auteur, technologue et leader spirituel",
    expertise: [
      "Fondateur de La VOP (Christ pour la Veuve, l'Orphelin, le Pauvre)",
      "CEO de SmartANDJ AI Technologies",
      "Auteur de 'Comment investir dans ces temps de la fin ?'",
      "Expert en crypto-monnaies et investissements",
      "Visionnaire de l'impact social et technologique"
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Réseaux Sociaux
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Suivez nos actions en temps réel et découvrez l'impact de La VOP
          </p>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${social.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${social.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {social.platform}
                  </h3>
                  <p className="text-[#FFD700] font-semibold mb-2">
                    {social.name}
                  </p>
                  <p className="text-white/80 text-sm mb-3">
                    {social.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-white/70">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{social.subscribers}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Founder Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[#FFD700] mb-4">
              À Propos du Fondateur
            </h3>
            <h4 className="text-xl font-semibold text-white mb-2">
              {founderInfo.name}
            </h4>
            <p className="text-white/90 text-lg">
              {founderInfo.title}
            </p>
            <p className="text-white/80 mt-2">
              {founderInfo.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="text-lg font-semibold text-[#FFD700] mb-4">
                Expertise & Leadership
              </h5>
              <ul className="space-y-3">
                {founderInfo.expertise.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-[#FFD700] mb-4">
                Identité Numérique
              </h5>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Globe className="w-5 h-5 text-[#FFD700]" />
                    <span className="font-semibold text-white">La VOP</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Christ pour la Veuve, l'Orphelin, le Pauvre et Toutes les Nations Internationales
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Heart className="w-5 h-5 text-[#FFD700]" />
                    <span className="font-semibold text-white">SmartANDJ AI</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Technologies d'intelligence artificielle pour l'impact social
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Information */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 rounded-2xl p-6 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-[#FFD700] mb-3">
              Mots-clés pour la visibilité Google
            </h4>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-white/80">
              <span className="bg-white/10 px-3 py-1 rounded-full">La VOP</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Christ pour la Veuve l'Orphelin le Pauvre</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Toutes les Nations Internationales</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">ANDJ Daniel Jonathan</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">SmartANDJ AI Technologies</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">ONG Gabon</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Action humanitaire Libreville</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
