import { useEffect, useState } from 'react';
import { Heart, Loader2, Shield, CheckCircle } from 'lucide-react';

interface ChariowRedirectProps {
  url: string;
  programName?: string;
  amount?: string;
}

const ChariowRedirect = ({ url, programName, amount }: ChariowRedirectProps) => {
  const [step, setStep] = useState(0);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const steps = [
      { delay: 500, action: () => setStep(1) },
      { delay: 1000, action: () => setStep(2) },
      { delay: 1500, action: () => setStep(3) },
      { delay: 2000, action: () => setStep(4) }
    ];

    steps.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });

    // Countdown et redirection
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          window.location.href = url;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [url]);

  const steps = [
    {
      icon: Heart,
      title: "Préparation de votre don",
      description: "Sécurisation de votre transaction",
      color: "text-[#CC3366]",
      bgColor: "bg-[#CC3366]"
    },
    {
      icon: Shield,
      title: "Vérification de sécurité",
      description: "Protection de vos données personnelles",
      color: "text-[#00B0F0]",
      bgColor: "bg-[#00B0F0]"
    },
    {
      icon: CheckCircle,
      title: "Redirection sécurisée",
      description: "Connexion à notre partenaire de paiement",
      color: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]"
    },
    {
      icon: Loader2,
      title: "Chargement...",
      description: "Ouverture de la page de paiement",
      color: "text-[#003399]",
      bgColor: "bg-[#003399]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003399] via-[#00B0F0] to-[#66CCFF] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00B0F0] to-[#003399] text-white p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Heart className="w-16 h-16 animate-pulse" fill="currentColor" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Redirection vers le paiement
            </h1>
            <p className="text-xl text-white/90">
              {programName && `Soutien du programme : ${programName}`}
              {amount && ` - Montant : ${amount}`}
            </p>
          </div>

          {/* Steps */}
          <div className="p-8">
            <div className="space-y-6">
              {steps.map((stepItem, index) => {
                const IconComponent = stepItem.icon;
                const isActive = step >= index;
                const isCurrent = step === index;
                
                return (
                  <div 
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${
                      isActive 
                        ? `${stepItem.bgColor}/10 border-2 border-${stepItem.bgColor}/30` 
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className={`p-3 rounded-full transition-all duration-500 ${
                      isActive ? stepItem.bgColor : 'bg-gray-300'
                    }`}>
                      <IconComponent 
                        className={`w-6 h-6 ${
                          isActive ? 'text-white' : 'text-gray-500'
                        } ${isCurrent ? 'animate-spin' : ''}`} 
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-semibold transition-colors duration-500 ${
                        isActive ? stepItem.color : 'text-gray-500'
                      }`}>
                        {stepItem.title}
                      </h3>
                      <p className={`text-sm transition-colors duration-500 ${
                        isActive ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {stepItem.description}
                      </p>
                    </div>

                    {isActive && (
                      <div className="text-[#00B0F0]">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Countdown */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-[#66CCFF] to-[#00B0F0] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Redirection automatique</h3>
                <div className="text-4xl font-bold text-[#FFD700] mb-2">
                  {countdown}
                </div>
                <p className="text-white/80 text-sm">
                  Vous serez redirigé vers la page de paiement sécurisée dans {countdown} seconde{countdown > 1 ? 's' : ''}
                </p>
              </div>
            </div>

            {/* Manual Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm mb-4">
                Si la redirection ne fonctionne pas automatiquement :
              </p>
              <a 
                href={url}
                className="inline-flex items-center space-x-2 bg-[#00B0F0] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#003399] transition-colors"
              >
                <span>Cliquer ici pour continuer</span>
                <Heart className="w-5 h-5" fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 text-center">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#00B0F0]" />
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#00B0F0]" />
                <span>SSL/TLS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-[#CC3366]" />
                <span>100% sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChariowRedirect;
