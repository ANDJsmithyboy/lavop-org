import { ExternalLink, Star, Shield, Truck } from 'lucide-react';

const ContradoPricing = () => {
  return (
    <div className="bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Prix Officiels Contrado</h3>
        <div className="flex items-center space-x-1">
          <Star className="w-5 h-5 text-[#FFD700] fill-current" />
          <span className="text-sm">9 avis</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl font-bold text-[#FFD700] mb-1">38,95€</div>
          <div className="text-sm text-white/90">Prix unitaire</div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <Truck className="w-5 h-5 text-[#FFD700]" />
            <span className="text-sm font-semibold">Livraison UE</span>
          </div>
          <div className="text-xs text-white/90">Tissu sourcé en UE</div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <Shield className="w-5 h-5 text-[#FFD700]" />
            <span className="text-sm font-semibold">Qualité Premium</span>
          </div>
          <div className="text-xs text-white/90">Couleurs vives et durables</div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <a 
          href="https://www.contrado.fr/stores/vop-shop" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-[#FFD700] text-[#003399] px-6 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
        >
          <span>Voir sur Contrado</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ContradoPricing;
