import { Book, Star, ExternalLink, Heart, Download } from 'lucide-react';

const SpiritualBooksSection = () => {
  const books = [
    {
      id: 1,
      title: "Le Coaching Ultime pour Bâtir Votre Avenir",
      subtitle: "Sagesse Spirituelle et Maîtrise Technologique",
      author: "ANDJ Daniel Jonathan",
      price: "10€",
      originalPrice: "25€",
      type: "Système de Coaching Interactif",
      image: "/src/assets/images/boutique/couverture_comment_investir_dans_ces_temps_de_la_fin.jpg",
      rating: 5,
      bestseller: true,
      promo: true,
      description: "Ce n'est pas un livre à lire, c'est un système à VIVRE. Coaching interactif de plus de 12 chapitres avec workbook actif, secrets bibliques dévoilés et modes d'emploi interactifs pour maîtriser les finances modernes (IA, Crypto, Trading) sans jamais perdre votre âme.",
      url: "https://njunarse.mychariow.store/andjguidepratique",
      publisher: "VOP Éditions",
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
      title: "Chrétien, es-tu un Lion ou une Brebis ?",
      author: "Évangéliste Styve Ntoutoume",
      price: "7,99€",
      type: "E-book ePub",
      image: "/src/assets/images/boutique/chretien_est_tu_un_lion_ou_une_brebis_styve.webp",
      rating: 5,
      bestseller: true,
      description: "Manuel pour découvrir votre identité réelle en Christ. Un livre qui révolutionnera votre compréhension de l'amour de Dieu et de votre identité en tant qu'enfant de Dieu.",
      url: "https://www.decitre.fr/ebooks/chretien-es-tu-un-lion-ou-une-brebis-9782379797323_9782379797323_1.html",
      publisher: "Iggybook",
      digital: true
    },
    {
      id: 3,
      title: "La Prophétie de Bitcoin",
      author: "ANDJ Daniel Jonathan",
      price: "",
      type: "Livre numérique (À paraître)",
      image: "/src/assets/images/boutique/la_prophetie_du_bitcoin.png",
      rating: 5,
      comingSoon: true,
      description: "Guide complet sur la crypto-monnaie depuis son origine jusqu'à aujourd'hui, avec stratégies d'investissement étape par étape.",
      url: "https://njunarse.mychariow.store/prophetie-bitcoin",
      publisher: "VOP Éditions"
    },
    {
      id: 4,
      title: "L'Algorithme du Ciel",
      author: "ANDJ Daniel Jonathan",
      price: "",
      type: "PDF + ePub (À paraître)",
      image: "/src/assets/images/boutique/l'algorithme_du_ciel.png",
      rating: 5,
      comingSoon: true,
      description: "Découvrez les principes spirituels universels qui régissent notre existence, présentés comme un algorithme divin applicable à tous les aspects de la vie moderne.",
      url: "#",
      publisher: "VOP Éditions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Livres Spirituels VOP
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Enseignements et guides pratiques par l'équipe VOP pour nourrir votre foi et votre croissance spirituelle
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              {/* Book Image */}
              <div className="relative h-80 overflow-hidden bg-gray-50">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  {book.bestseller && (
                    <span className="bg-[#FFD700] text-[#003399] px-3 py-1 rounded-full text-xs font-bold">
                      Bestseller
                    </span>
                  )}
                  {book.comingSoon && (
                    <span className="bg-[#CC3366] text-white px-3 py-1 rounded-full text-xs font-bold">
                      Bientôt disponible
                    </span>
                  )}
                  {book.digital && (
                    <span className="bg-[#00B0F0] text-white px-3 py-1 rounded-full text-xs font-bold">
                      E-book
                    </span>
                  )}
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-[#00B0F0] text-sm font-medium">{book.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#003399] mb-2">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2 font-semibold">{book.author}</p>
                <p className="text-gray-500 text-xs mb-3">{book.publisher}</p>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{book.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < book.rating ? 'text-[#FFD700] fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-gray-500 text-sm ml-2">({book.rating}/5)</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {book.price && <span className="text-2xl font-bold text-[#003399]">{book.price}</span>}
                    {book.originalPrice && book.price && (
                      <span className="text-gray-500 line-through text-lg">{book.originalPrice}</span>
                    )}
                  </div>
                  
                  {book.comingSoon ? (
                    <button disabled className="bg-gray-400 text-white px-4 py-2 rounded-full font-semibold cursor-not-allowed text-sm">
                      À paraître
                    </button>
                  ) : (
                    <a 
                      href={book.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-[#00B0F0] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#003399] transition-colors text-sm"
                    >
                      {book.digital ? (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Télécharger</span>
                        </>
                      ) : (
                        <>
                          <Book className="w-4 h-4" />
                          <span>Acheter</span>
                        </>
                      )}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Enseignements VOP</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Découvrez nos enseignements spirituels et guides pratiques pour approfondir votre foi et votre compréhension des Écritures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/boutique" 
                className="bg-[#FFD700] text-[#003399] px-8 py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
              >
                Voir tous les livres
              </a>
              <a 
                href="/programmes" 
                className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Nos programmes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualBooksSection;
