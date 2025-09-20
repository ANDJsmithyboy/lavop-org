import { useState, useEffect } from 'react';
import { Heart, Gift } from 'lucide-react';
import { UTM_LINKS } from '../config/chariowLinks';

const DonationSection = () => {
  // const [selectedAmount, setSelectedAmount] = useState(10000);
  // const [customAmount, setCustomAmount] = useState('');
  // const [paymentMethod, setPaymentMethod] = useState('card'); // Simplifié pour lien externe
  const [isBeating, setIsBeating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBeating(true);
      setTimeout(() => setIsBeating(false), 400); // Durée du battement
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const predefinedAmounts = [5000, 10000, 25000];

  // Utilisation des liens centralisés avec UTM
  const donationLinks: { [key: string]: string } = {
    '5000': UTM_LINKS.DON_5000_HERO,
    '10000': UTM_LINKS.DON_10000_HERO,
    '25000': UTM_LINKS.DON_25000_HERO,
    'libre': UTM_LINKS.DON_LIBRE_SECTION
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#66CCFF] via-white to-[#00B0F0]/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-[#00B0F0] p-4 rounded-full">
              <Heart className="w-12 h-12 text-white" fill="currentColor" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Soutenez Notre Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre don permet de transformer des vies et d'apporter l'espoir de Christ aux plus démunis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-[#003399] mb-2 text-center">
              Je donne pour la mission
            </h3>
            <p className="text-center text-gray-600 mb-8">Chaque don finance nos actions de terrain. Merci !</p>

            {/* Amount Selection */}
            <div className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {predefinedAmounts.map((amount) => (
                  <a
                    key={amount}
                    href={donationLinks[amount.toString()]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border-2 border-gray-300 text-center font-semibold text-[#003399] hover:border-[#00B0F0] hover:bg-[#00B0F0] hover:text-white transition-all"
                  >
                    {amount.toLocaleString('fr-FR')} FCFA
                  </a>
                ))}
              </div>
              
              <a
                href={donationLinks.libre}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-gradient-to-r from-[#00B0F0] to-[#003399] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Heart className={`w-6 h-6 ${isBeating ? 'animate-beat' : ''}`} fill="currentColor" />
                <span>Donner un montant libre</span>
              </a>
            </div>

            <p className="text-gray-500 text-sm text-center mt-4">
              Paiement sécurisé • Mobile Money & Cartes • FCFA, EUR, USD
            </p>
          </div>

          {/* Impact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Gift className="w-8 h-8 text-[#FFD700]" />
                <h3 className="text-2xl font-bold text-[#003399]">Votre Impact</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#66CCFF] text-white rounded-full p-2 flex-shrink-0">
                    <span className="font-bold">5k</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003399]">Nourrir une famille</h4>
                    <p className="text-gray-600 text-sm">Fournit des repas pour une famille pendant plusieurs jours.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#00B0F0] text-white rounded-full p-2 flex-shrink-0">
                    <span className="font-bold">10k</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003399]">Éduquer un enfant</h4>
                    <p className="text-gray-600 text-sm">Contribue aux frais de scolarité et fournitures d'un orphelin.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#CC3366] text-white rounded-full p-2 flex-shrink-0">
                    <span className="font-bold">25k</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003399]">Soutenir une veuve</h4>
                    <p className="text-gray-600 text-sm">Aide à lancer une activité génératrice de revenus.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFD700] text-[#003399] rounded-full p-2 flex-shrink-0">
                    <span className="font-bold">50k</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003399]">Action d'évangélisation</h4>
                    <p className="text-gray-600 text-sm">Finance le matériel pour une mission de terrain.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white rounded-2xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Grâce aux dons de La VOP, ma famille et moi avons retrouvé l'espoir. 
                Mes enfants peuvent maintenant aller à l'école et nous avons découvert l'amour de Christ."
              </blockquote>
              <cite className="text-[#FFD700] font-semibold">
                - Marie, veuve au Cameroun
              </cite>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">La VOP est une organisation transparente et reconnue</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-[#003399] font-semibold">🏆 Certification ONG</div>
            <div className="text-[#003399] font-semibold">🔒 Paiements sécurisés</div>
            <div className="text-[#003399] font-semibold">📋 Rapports d'activité</div>
            <div className="text-[#003399] font-semibold">✅ Transparence financière</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;