import { 
  Heart, CheckCircle, Share2, Download, Mail, Phone, 
  Calendar, Gift, Users, Globe, ArrowRight, ExternalLink,
  Facebook, Twitter, Instagram, Youtube, MessageCircle
} from 'lucide-react';
import { useEffect, useState } from 'react';

const ThankYouPage = () => {
  const [donationData, setDonationData] = useState({
    amount: '0',
    currency: 'FCFA',
    date: new Date().toLocaleDateString('fr-FR'),
    transactionId: 'VOP-' + Math.random().toString(36).substr(2, 9).toUpperCase()
  });

  useEffect(() => {
    // Récupérer les données de la donation depuis l'URL ou le localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const amount = urlParams.get('amount') || '0';
    const currency = urlParams.get('currency') || 'FCFA';
    
    setDonationData(prev => ({
      ...prev,
      amount,
      currency
    }));
  }, []);

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}`
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-blue-400',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent('J\'ai fait un don à LA VOP pour soutenir leur mission d\'amour et d\'espoir!')}&url=${encodeURIComponent(window.location.origin)}`
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500',
      url: `https://wa.me/?text=${encodeURIComponent('J\'ai fait un don à LA VOP! Rejoignez-moi pour soutenir leur mission: ' + window.location.origin)}`
    }
  ];

  const nextSteps = [
    {
      icon: Mail,
      title: 'Recevez nos actualités',
      description: 'Restez informé de l\'impact de votre don',
      action: 'S\'abonner à la newsletter',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Rejoignez notre communauté',
      description: 'Connectez-vous avec d\'autres bienfaiteurs',
      action: 'Rejoindre WhatsApp',
      color: 'text-green-600'
    },
    {
      icon: Calendar,
      title: 'Suivez nos actions',
      description: 'Découvrez nos prochaines missions',
      action: 'Voir le calendrier',
      color: 'text-purple-600'
    }
  ];

  const impactAreas = [
    {
      title: 'Orphelinats de Libreville',
      description: 'Soutien aux orphelinats Bon Samaritain et Arc-en-ciel de Sainte-Marie',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Aide aux Veuves',
      description: 'Soutien spirituel et matériel aux veuves dans le besoin',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Missions Provinciales',
      description: 'Interventions ponctuelles selon les besoins urgents',
      icon: Globe,
      color: 'text-green-500'
    },
    {
      title: 'Soutiens Internationaux',
      description: 'Aides ponctuelles aux familles à l\'étranger',
      icon: Gift,
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <CheckCircle className="w-24 h-24 text-[#FFD700] mx-auto mb-8 animate-pulse" />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Merci ! 🙏
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              Votre don fait la différence
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Confirmation de Don</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#FFD700] mb-2">
                    {donationData.amount} {donationData.currency}
                  </div>
                  <div className="text-white/80">Montant</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">
                    {donationData.date}
                  </div>
                  <div className="text-white/80">Date</div>
                </div>
                <div>
                  <div className="text-lg font-bold mb-2">
                    {donationData.transactionId}
                  </div>
                  <div className="text-white/80">Référence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact de votre don */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Votre don soutient directement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                    <IconComponent className={`w-12 h-12 ${area.color} mx-auto mb-4`} />
                    <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-white/80 text-sm">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Prochaines étapes */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#003399] text-center mb-12">
              Prochaines étapes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nextSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${step.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-[#003399] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <button className={`${step.color} hover:opacity-80 transition-opacity font-semibold`}>
                      {step.action} →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partage */}
      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#003399] mb-8">
              Partagez votre geste
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Inspirez d'autres personnes à faire la différence
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {shareOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <a
                    key={index}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${option.color} text-white px-6 py-3 rounded-full font-semibold hover:opacity-80 transition-opacity flex items-center space-x-2`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>Partager sur {option.name}</span>
                  </a>
                );
              })}
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#003399] mb-4">
                Télécharger votre reçu
              </h3>
              <p className="text-gray-600 mb-6">
                Conservez ce reçu pour vos déclarations fiscales
              </p>
              <button className="bg-[#00B0F0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003399] transition-colors flex items-center space-x-2 mx-auto">
                <Download className="w-5 h-5" />
                <span>Télécharger le reçu</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact et réseaux */}
      <section className="py-20 bg-[#003399] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Restons connectés
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Suivez nos actions et l'impact de votre générosité
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <a
                href="https://www.tiktok.com/@christpourlavop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-bold mb-2">TikTok</h3>
                <p className="text-white/80 text-sm">@christpourlavop</p>
              </a>
              
              <a
                href="https://youtube.com/@christpourlavop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">YouTube</h3>
                <p className="text-white/80 text-sm">Vidéos de nos actions</p>
              </a>
              
              <a
                href="https://medium.com/@danielandj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-2">Medium</h3>
                <p className="text-white/80 text-sm">Articles du fondateur</p>
              </a>
              
              <a
                href="mailto:contact@lavop.org"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors"
              >
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-white/80 text-sm">contact@lavop.org</p>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/"
                className="bg-[#FFD700] text-[#003399] px-8 py-4 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
              >
                Retour à l'accueil
              </a>
              <a
                href="/a-propos-fondateur"
                className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Découvrir le fondateur
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">
            © 2025 LA VOP - Christ pour la Veuve, l'Orphelin, le Pauvre et Toutes les Nations
          </p>
          <p className="text-white/60 text-sm mt-2">
            Merci de faire partie de notre mission d'amour et d'espoir
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouPage;
