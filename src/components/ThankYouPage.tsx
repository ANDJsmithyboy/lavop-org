import { CheckCircle, Heart, Share2, Download, Mail, Users, Globe, Calendar } from 'lucide-react';

const ThankYouPage = () => {
  // Ces données seraient normalement récupérées depuis l'URL ou un état global
  const donationData = {
    amount: "25,000",
    currency: "FCFA",
    date: new Date().toLocaleDateString('fr-FR'),
    program: "Programme Orphelins",
    transactionId: "VOP-2024-001234"
  };

  const nextSteps = [
    {
      icon: Mail,
      title: "Recevez votre reçu",
      description: "Un reçu détaillé vous a été envoyé par email",
      action: "Vérifier vos emails"
    },
    {
      icon: Users,
      title: "Rejoignez notre communauté",
      description: "Restez informé de l'impact de votre don",
      action: "S'abonner à la newsletter"
    },
    {
      icon: Globe,
      title: "Suivez nos actions",
      description: "Découvrez comment votre don transforme des vies",
      action: "Voir nos programmes"
    }
  ];

  const impactExamples = [
    {
      amount: "5,000 FCFA",
      impact: "Nourrit une famille pendant 1 semaine",
      icon: "🍽️"
    },
    {
      amount: "10,000 FCFA", 
      impact: "Paie la scolarité d'un enfant pendant 1 mois",
      icon: "📚"
    },
    {
      amount: "25,000 FCFA",
      impact: "Finance une formation professionnelle",
      icon: "🎓"
    },
    {
      amount: "50,000 FCFA",
      impact: "Lance une micro-entreprise",
      icon: "💼"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003399] via-[#00B0F0] to-[#66CCFF] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Main Thank You Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00B0F0] to-[#003399] text-white p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <CheckCircle className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Merci pour votre don ! 🙏
            </h1>
            <p className="text-xl text-white/90">
              Votre générosité va transformer des vies
            </p>
          </div>

          {/* Donation Summary */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#003399] mb-6 text-center">Résumé de votre don</h2>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Montant</span>
                    <span className="text-2xl font-bold text-[#003399]">{donationData.amount} {donationData.currency}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Programme</span>
                    <span className="font-semibold text-[#00B0F0]">{donationData.program}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Date</span>
                    <span className="font-semibold">{donationData.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Référence</span>
                    <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">{donationData.transactionId}</span>
                  </div>
                </div>
                
                <div className="bg-[#00B0F0]/10 rounded-xl p-4">
                  <h3 className="font-semibold text-[#003399] mb-3">Votre impact</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Grâce à votre don de <strong>{donationData.amount} {donationData.currency}</strong>, 
                    vous contribuez directement au <strong>{donationData.program}</strong>.
                  </p>
                  <div className="flex items-center space-x-2 text-[#00B0F0]">
                    <Heart className="w-5 h-5" fill="currentColor" />
                    <span className="text-sm font-semibold">Merci de faire la différence !</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-6 text-center">Prochaines étapes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {nextSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="bg-[#00B0F0] text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-[#003399] mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <button className="text-[#00B0F0] font-semibold text-sm hover:underline">
                      {step.action}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Impact Examples */}
            <div className="bg-gradient-to-r from-[#66CCFF] to-[#00B0F0] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 text-center">Exemples d'impact de vos dons</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {impactExamples.map((example, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{example.icon}</div>
                    <div className="font-semibold text-sm">{example.amount}</div>
                    <div className="text-white/80 text-xs">{example.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-8 bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-2 bg-[#00B0F0] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#003399] transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Partager sur les réseaux</span>
              </button>
              
              <button className="flex items-center justify-center space-x-2 bg-white border-2 border-[#00B0F0] text-[#00B0F0] px-6 py-3 rounded-full font-semibold hover:bg-[#00B0F0] hover:text-white transition-colors">
                <Download className="w-5 h-5" />
                <span>Télécharger le reçu</span>
              </button>
              
              <a 
                href="#programmes" 
                className="flex items-center justify-center space-x-2 bg-[#CC3366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#003399] transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>Découvrir nos programmes</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8 text-white/80">
          <p className="text-lg">
            "Apprenez à faire le bien, recherchez la justice, protégez l'opprimé, 
            faites droit à l'orphelin, défendez la veuve." - Ésaïe 1:17
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} La VOP. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
