import { ExternalLink, ShoppingBag, Heart, Users, Star } from 'lucide-react';

const OfficialShopSection = () => {
  const shopInfo = {
    name: "VOP Shop Officiel",
    platform: "Contrado",
    url: "https://www.contrado.fr/stores-feeds/vop-shop/55042-atom.xml",
    description: "Boutique officielle des produits VOP sur Contrado",
    products: [
      {
        name: "Tee-shirt VOPyouth",
        description: "Collection jeunesse avec logo VOPyouth",
        category: "Vêtements"
      },
      {
        name: "Tee-shirt VOPsong Music", 
        description: "Collection musicale VOPsong",
        category: "Vêtements"
      },
      {
        name: "Accessoires VOP",
        description: "Divers accessoires et goodies",
        category: "Accessoires"
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#003399]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Boutique Officielle VOP
          </h2>
          <p className="text-xl text-[#003399]/90 max-w-3xl mx-auto">
            Découvrez notre collection officielle de vêtements et accessoires VOP
          </p>
        </div>

        {/* Shop Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-[#003399] text-white p-3 rounded-full">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003399]">
                    {shopInfo.name}
                  </h3>
                  <p className="text-[#003399]/80">
                    Plateforme : {shopInfo.platform}
                  </p>
                </div>
              </div>
              <p className="text-[#003399]/90 leading-relaxed mb-6">
                {shopInfo.description}
              </p>
              <a 
                href={shopInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#003399] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#003399]/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visiter la boutique officielle</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <Heart className="w-8 h-8 text-[#003399] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#003399]">100%</div>
                <div className="text-[#003399]/80 text-sm">Officiel</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <Users className="w-8 h-8 text-[#003399] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#003399]">3K+</div>
                <div className="text-[#003399]/80 text-sm">Clients</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003399] mb-6">
              Nos Produits
            </h3>
            {shopInfo.products.map((product, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#003399] text-white p-2 rounded-lg">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#003399] mb-1">
                      {product.name}
                    </h4>
                    <p className="text-[#003399]/80 text-sm mb-2">
                      {product.description}
                    </p>
                    <span className="bg-[#003399]/10 text-[#003399] px-2 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 text-center">
          <h3 className="text-2xl font-bold text-[#003399] mb-4">
            Soutenez La VOP en Achetant Nos Produits
          </h3>
          <p className="text-[#003399]/90 mb-6 max-w-2xl mx-auto">
            Chaque achat contribue directement à nos actions humanitaires. 
            Portez fièrement les couleurs de La VOP tout en soutenant notre mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={shopInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#003399] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003399]/90 transition-colors"
            >
              Voir tous les produits
            </a>
            <a 
              href="/boutique"
              className="bg-transparent border-2 border-[#003399] text-[#003399] px-8 py-3 rounded-full font-semibold hover:bg-[#003399]/10 transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialShopSection;
