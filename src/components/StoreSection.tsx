import { useState } from 'react';
import { Book, Headphones, Shirt, Download, ShoppingCart, Star, Eye } from 'lucide-react';
import Tshirt3DViewer from './Tshirt3DViewer';
import CustomOrderModal from './CustomOrderModal';

const StoreSection = () => {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [selectedTshirt, setSelectedTshirt] = useState<any>(null);
  const [is3DViewerOpen, setIs3DViewerOpen] = useState(false);
  // const [selectedCustomProduct, setSelectedCustomProduct] = useState<any>(null); // Non utilisé pour le moment
  const [isCustomOrderOpen, setIsCustomOrderOpen] = useState(false);

  const categories = [
    { id: 'tous', name: 'Tous', icon: ShoppingCart },
    { id: 'livres', name: 'Livres', icon: Book },
    { id: 'audio', name: 'Audio', icon: Headphones },
    { id: 'vetements', name: 'Vêtements', icon: Shirt },
    { id: 'numerique', name: 'Numérique', icon: Download }
  ];

  const products = [
    {
      id: 1,
      title: "Le Coaching Ultime pour Bâtir Votre Avenir",
      subtitle: "Sagesse Spirituelle et Maîtrise Technologique",
      author: "ANDJ Daniel Jonathan",
      price: "10€",
      originalPrice: "25€",
      category: "livres",
      type: "Système de Coaching Interactif",
      image: "/images/boutique/couverture_comment_investir_dans_ces_temps_de_la_fin.jpg",
      rating: 5,
      bestseller: true,
      description: "Ce n'est pas un livre à lire, c'est un système à VIVRE. Coaching interactif de plus de 12 chapitres avec workbook actif, secrets bibliques dévoilés et modes d'emploi interactifs pour maîtriser les finances modernes (IA, Crypto, Trading) sans jamais perdre votre âme.",
      url: "https://njunarse.mychariow.store/andjguidepratique",
      promo: true,
      features: [
        "🧠 Coaching d'Intuition Intégré",
        "🔑 Secrets Bibliques Dévoilés", 
        "✍️ Workbook Actif",
        "🌐 Philosophie Universelle",
        "🔗 Modes d'Emploi Interactifs"
      ]
    },
    {
      id: 2,
      title: "Tee-shirt VOP",
      author: "ANDJdesign Collection",
      price: "38,95€",
      category: "vetements",
      type: "Tee-shirt Officiel",
      image: "/images/boutique/202509191201220_Imageface.jpeg",
      rating: 5,
      colors: ["Bleu", "Blanc", "Noir"],
      url: "https://www.contrado.fr/stores/vop-shop/vop-t-shirt-2586577",
      is3D: true,
      images: {
        front: "/images/boutique/202509191201220_Imageface.jpeg",
        left: "/images/boutique/202509191201222_Imagegauche.jpeg",
        right: "/images/boutique/202509191201223_Imagedroit.jpeg"
      },
      contradoUrl: "https://www.contrado.fr/stores/vop-shop/vop-t-shirt-2586577",
      description: "Tee-shirt officiel VOP avec logo principal. Design classique et élégant pour tous."
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
      description: "Manuel pour découvrir votre identité réelle en Christ. Un livre qui révolutionnera votre compréhension de l'amour de Dieu et de votre identité en tant qu'enfant de Dieu.",
      url: "https://www.decitre.fr/ebooks/chretien-es-tu-un-lion-ou-une-brebis-9782379797323_9782379797323_1.html",
      comingSoon: false,
      digital: true
    },
    {
      id: 4,
      title: "La Prophétie de Bitcoin",
      author: "ANDJ Daniel Jonathan",
      price: "",
      category: "numerique",
      type: "Livre numérique (À paraître)",
      image: "/images/boutique/la_prophetie_du_bitcoin.png",
      rating: 5,
      downloadable: true,
      comingSoon: true,
      description: "Guide complet sur la crypto-monnaie depuis son origine jusqu'à aujourd'hui, avec stratégies d'investissement étape par étape",
      url: "https://njunarse.mychariow.store/prophetie-bitcoin"
    },
    {
      id: 5,
      title: "Tenue Homme de DIEU Premium",
      author: "VOP Boutique",
      price: "Sur mesure",
      category: "vetements",
      type: "Tenue sur mesure",
      image: "/images/boutique/1000151339.jpg",
      rating: 5,
      downloadable: false,
      comingSoon: false,
      customOrder: true,
      description: "Tenue premium pour homme de DIEU sur commande. Nous faisons sur mesure selon vos tailles et mesures. Si vous avez un modèle spécifique, donnez-nous le et nous le réaliserons avec devis et acompte.",
      url: "mailto:contact@lavop.org?subject=Commande Tenue Premium"
    },
    {
      id: 6,
      title: "Tenue Homme de DIEU Premium - Modèle 2",
      author: "VOP Boutique",
      price: "Sur mesure",
      category: "vetements",
      type: "Tenue sur mesure",
      image: "/images/boutique/1000151338.jpg",
      rating: 5,
      downloadable: false,
      comingSoon: false,
      customOrder: true,
      description: "Autre modèle de tenue premium pour homme de DIEU. Fabrication sur mesure avec vos spécifications personnalisées.",
      url: "mailto:contact@lavop.org?subject=Commande Tenue Premium Modèle 2"
    },
    {
      id: 7,
          title: "Tee-shirt VOPyouth",
          author: "ANDJdesign Collection",
          price: "38,95€",
          category: "vetements",
          type: "Tee-shirt Jeunesse",
          image: "/images/boutique/202509191202321_ImageFiles.jpeg",
          rating: 5,
          trending: true,
          url: "https://www.contrado.fr/stores/vop-shop/vopyouth-t-shirt-2586607",
          is3D: true,
          images: {
            front: "/images/boutique/202509191202321_ImageFiles.jpeg",
            left: "/images/boutique/202509191202321_ImageFiles.jpeg",
            right: "/images/boutique/202509191202321_ImageFiles.jpeg"
          },
          contradoUrl: "https://www.contrado.fr/stores/vop-shop/vopyouth-t-shirt-2586607",
          description: "Tee-shirt VOPyouth avec design moderne et confortable. Parfait pour la jeunesse engagée."
        },
        {
          id: 6,
          title: "Tee-shirt VOPsong Music",
          author: "ANDJdesign Collection",
          price: "38,95€",
          category: "vetements",
          type: "Tee-shirt Musical",
          image: "/images/boutique/202509191202271_ImageFiles.jpeg",
          rating: 5,
          bundle: false,
          url: "https://www.contrado.fr/stores/vop-shop/vopsongmusic-t-shirt-2586610",
          is3D: true,
          images: {
            front: "/images/boutique/202509191202271_ImageFiles.jpeg",
            left: "/images/boutique/202509191202272_ImageFiles.jpeg",
            right: "/images/boutique/202509191202271_ImageFiles.jpeg"
          },
          contradoUrl: "https://www.contrado.fr/stores/vop-shop/vopsongmusic-t-shirt-2586610",
          description: "Tee-shirt VOPsong Music avec design musical unique. Pour les amateurs de musique chrétienne."
        },
        {
          id: 8,
          title: "Tee-shirt VOP Principal",
          author: "ANDJdesign Collection",
          price: "38,95€",
          category: "vetements",
          type: "Tee-shirt Officiel",
          image: "/images/boutique/202509191201220_Imageface.jpeg",
          rating: 5,
          trending: true,
          url: "https://www.contrado.fr/stores/vop-shop/vop-t-shirt-2586577",
          is3D: true,
          images: {
            front: "/images/boutique/202509191201220_Imageface.jpeg",
            left: "/images/boutique/202509191201222_Imagegauche.jpeg",
            right: "/images/boutique/202509191201223_Imagedroit.jpeg"
          },
          contradoUrl: "https://www.contrado.fr/stores/vop-shop/vop-t-shirt-2586577",
          description: "Tee-shirt officiel VOP avec logo principal. Design classique et élégant pour tous."
        },
    {
      id: 9,
      title: "Les maths de Dieu",
      author: "Évangéliste Styve Ntoutoume",
      price: "",
      category: "livres",
      type: "Livre papier",
      image: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      bundle: false,
      customOrder: false,
      description: "Commande par WhatsApp ou email à jonathanakarentoutoume@gmail.com",
      url: "https://wa.me/24165515877?text=Bonjour, je souhaite commander le livre 'Les maths de Dieu'"
    },
    {
      id: 8,
      title: "L'Algorithme du Ciel",
      author: "ANDJ Daniel Jonathan",
      price: "",
      category: "numerique",
      type: "PDF + ePub (À paraître)",
      image: "/images/boutique/l'algorithme_du_ciel.png",
      rating: 5,
      downloadable: true,
      comingSoon: true,
      description: "Code divin pour la vie moderne. Découvrez les principes spirituels universels qui régissent notre existence.",
      url: "#"
    }
  ];

  const filteredProducts = activeCategory === 'tous' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="boutique" className="py-20 relative bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/boutique/ChatGPT Image 19 sept. 2025, 18_39_02.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/logos/Logo de la VOPsong music .jpg')] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/logos/Logo de la VOPyouth.jpg')] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 bg-[url('/images/boutique/ChatGPT Image 19 sept. 2025, 18_39_13.png')] bg-cover bg-center opacity-30"></div>
      </div>
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Boutique Officielle VOP
          </h2>
          <p className="text-xl text-[#003399]/90 max-w-3xl mx-auto">
            Découvrez notre collection officielle de vêtements et accessoires VOP
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#00B0F0] text-white shadow-lg'
                    : 'bg-white text-[#003399] hover:bg-[#66CCFF] hover:text-white'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.bestseller && (
                    <span className="bg-[#FFD700] text-[#003399] px-3 py-1 rounded-full text-xs font-bold">
                      Bestseller
                    </span>
                  )}
                  {product.trending && (
                    <span className="bg-[#CC3366] text-white px-3 py-1 rounded-full text-xs font-bold">
                      Tendance
                    </span>
                  )}
                  {product.bundle && (
                    <span className="bg-[#00B0F0] text-white px-3 py-1 rounded-full text-xs font-bold">
                      Pack
                    </span>
                  )}
                  {product.comingSoon && (
                    <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-bold">
                      Bientôt disponible
                    </span>
                  )}
                </div>

                {/* Quick Add */}
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 hover:bg-white text-[#003399] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
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
                {'duration' in product && (product as any).duration && (
                  <p className="text-[#66CCFF] text-sm mb-2">Durée: {(product as any).duration}</p>
                )}
                {product.colors && (
                  <div className="mb-3">
                    <p className="text-gray-600 text-sm">Couleurs: {product.colors.join(', ')}</p>
                  </div>
                )}
                {product.downloadable && (
                  <div className="flex items-center space-x-1 mb-3">
                    <Download className="w-4 h-4 text-[#00B0F0]" />
                    <span className="text-[#00B0F0] text-sm">Téléchargement immédiat</span>
                  </div>
                )}

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[#003399]">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                {product.comingSoon ? (
                  <button disabled className="w-full bg-orange-500 text-white px-4 py-2 rounded-full font-semibold cursor-not-allowed text-sm">
                    À paraître
                  </button>
                ) : product.customOrder ? (
                  <button 
                    onClick={() => {
                      // setSelectedCustomProduct(product);
                      setIsCustomOrderOpen(true);
                    }}
                    className="w-full bg-[#FFD700] text-[#003399] px-4 py-2 rounded-full font-semibold hover:bg-[#FFA500] transition-colors text-sm"
                  >
                    Commander sur mesure
                  </button>
                ) : product.is3D ? (
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button 
                      onClick={() => {
                        setSelectedTshirt(product);
                        setIs3DViewerOpen(true);
                      }}
                      className="flex items-center justify-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#003399] transition-colors text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Voir 3D</span>
                    </button>
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#FFD700] text-[#003399] px-4 py-2 rounded-full font-semibold hover:bg-[#FFA500] transition-colors text-sm">
                      Acheter
                    </a>
                  </div>
                ) : (
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-[#00B0F0] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#003399] transition-colors text-sm">
                    Acheter
                  </a>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="#boutique" className="bg-[#003399] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00B0F0] transition-colors transform hover:scale-105 inline-block">
            Voir Toute la Boutique
          </a>
        </div>
      </div>

      {/* 3D Viewer Modal */}
      {is3DViewerOpen && selectedTshirt && (
        <Tshirt3DViewer
          isOpen={is3DViewerOpen}
          onClose={() => {
            setIs3DViewerOpen(false);
            setSelectedTshirt(null);
          }}
          product={selectedTshirt}
        />
      )}

      {/* Custom Order Modal */}
      {isCustomOrderOpen && (
        <CustomOrderModal
          isOpen={isCustomOrderOpen}
          onClose={() => {
            setIsCustomOrderOpen(false);
            // setSelectedCustomProduct(null);
          }}
        />
      )}
    </section>
  );
};

export default StoreSection;