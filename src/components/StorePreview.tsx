import { Book, Headphones, Shirt, Download, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CHARIOW_LINKS } from '../config/chariowLinks';

const StorePreview = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Le Coaching Ultime pour Bâtir Votre Avenir",
      subtitle: "Sagesse Spirituelle et Maîtrise Technologique",
      author: "ANDJ Daniel Jonathan",
      price: "6 000 FCFA",
      originalPrice: "15 000 FCFA",
      category: "livres",
      type: "Système de Coaching Interactif",
      image: "/images/boutique/couverture_comment_investir_dans_ces_temps_de_la_fin.jpg",
      rating: 5,
      bestseller: true,
      promo: true,
      description: "Ce n'est pas un livre à lire, c'est un système à VIVRE. Coaching interactif de plus de 12 chapitres avec workbook actif et secrets bibliques dévoilés.",
      url: CHARIOW_LINKS.BOUTIQUE_LIVRE_INVESTIR
    },
    {
      id: 2,
      title: "Tee-shirt VOP Principal",
      author: "ANDJdesign Collection",
      price: "38,95€",
      category: "vetements",
      type: "Tee-shirt Officiel",
      image: "/images/boutique/202509191201220_Imageface.jpeg",
      rating: 5,
      comingSoon: false,
      description: "Tee-shirt officiel VOP avec logo principal. Design classique et élégant pour tous.",
      url: "https://www.contrado.fr/stores/vop-shop/vop-t-shirt-2586577"
    },
    {
      id: 3,
      title: "Chrétien, es-tu un Lion ou une Brebis ?",
      author: "Évangéliste Styve Ntoutoume",
      price: "7,99€",
      category: "livres",
      type: "E-book ePub",
      image: "/images/boutique/chretien_est_tu_un_lion_ou_une_brebis_styve.webp",
      rating: 5,
      bestseller: true,
      comingSoon: false,
      description: "Manuel pour découvrir votre identité réelle en Christ. Un livre qui révolutionnera votre compréhension de l'amour de Dieu.",
      url: "https://www.decitre.fr/ebooks/chretien-es-tu-un-lion-ou-une-brebis-9782379797323_9782379797323_1.html"
    }
  ];

  return (
    <section id="boutique-preview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Boutique Chrétienne VOP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Livres, enseignements, vêtements et ressources spirituelles pour nourrir votre foi
          </p>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  {product.bestseller && (
                    <span className="bg-[#FFD700] text-[#003399] px-3 py-1 rounded-full text-xs font-bold">
                      Bestseller
                    </span>
                  )}
                  {product.comingSoon && (
                    <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-bold">
                      Bientôt disponible
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-[#00B0F0] text-sm font-medium">{product.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#003399] mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.author}</p>
                
                {/* Description pour certains produits */}
                {product.description && (
                  <p className="text-gray-500 text-xs mb-3 italic">{product.description}</p>
                )}

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < product.rating ? 'text-[#FFD700] fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-gray-500 text-sm ml-2">({product.rating}/5)</span>
                </div>

                {/* Additional Info */}
                {product.duration && (
                  <p className="text-[#66CCFF] text-sm mb-2">Durée: {product.duration}</p>
                )}

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[#003399]">{product.price}</span>
                  </div>
                  {product.comingSoon ? (
                    <button disabled className="bg-gray-400 text-white px-4 py-2 rounded-full font-semibold cursor-not-allowed text-sm">
                      Bientôt disponible
                    </button>
                  ) : (
                    <a 
                      href={product.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#00B0F0] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#003399] transition-colors text-sm"
                    >
                      Acheter
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/boutique" 
            className="group inline-flex items-center space-x-2 bg-[#003399] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00B0F0] transition-colors transform hover:scale-105"
          >
            <span>Voir toute la boutique</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StorePreview;
