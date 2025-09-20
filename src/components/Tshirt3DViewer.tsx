import { useState, useEffect } from 'react';
import { X, RotateCcw, ExternalLink, ShoppingCart, Heart } from 'lucide-react';

interface Tshirt3DViewerProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    title: string;
    price: string;
    images: {
      front: string;
      left: string;
      right: string;
    };
    description: string;
    contradoUrl: string;
  };
}

const Tshirt3DViewer = ({ isOpen, onClose, product }: Tshirt3DViewerProps) => {
  const [currentView, setCurrentView] = useState<'front' | 'left' | 'right'>('front');
  const [isRotating, setIsRotating] = useState(false);
  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const price = product.price.replace('€', '').replace(',', '.');
  const totalPrice = (parseFloat(price) * quantity).toFixed(2);

  const handleRotate = () => {
    setIsRotating(true);
    const views: ('front' | 'left' | 'right')[] = ['front', 'left', 'right'];
    const currentIndex = views.indexOf(currentView);
    const nextIndex = (currentIndex + 1) % views.length;
    
    setTimeout(() => {
      setCurrentView(views[nextIndex]);
      setIsRotating(false);
    }, 300);
  };

  const handleBuyNow = () => {
    window.open(product.contradoUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#003399]">{product.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* 3D Viewer */}
          <div className="space-y-6">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
              <div className={`relative transition-all duration-500 ${isRotating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
                <img
                  src={product.images[currentView]}
                  alt={`${product.title} - ${currentView}`}
                  className="max-w-full max-h-80 object-contain drop-shadow-2xl"
                />
                
                {/* Rotation indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="w-3 h-3 bg-[#00B0F0] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={handleRotate}
                disabled={isRotating}
                className="flex items-center space-x-2 bg-[#003399] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#003399]/90 transition-colors disabled:opacity-50"
              >
                <RotateCcw className={`w-5 h-5 ${isRotating ? 'animate-spin' : ''}`} />
                <span>Tourner</span>
              </button>
              
              <div className="flex space-x-2">
                {(['front', 'left', 'right'] as const).map((view) => (
                  <button
                    key={view}
                    onClick={() => setCurrentView(view)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      currentView === view
                        ? 'bg-[#00B0F0] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {view === 'front' ? 'Face' : view === 'left' ? 'Gauche' : 'Droite'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Choisir la taille</h3>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full font-semibold transition-colors ${
                      selectedSize === size
                        ? 'bg-[#00B0F0] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Quantité</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(1000, quantity + 1))}
                  className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-2xl p-6 text-[#003399]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold">Prix par pièce:</span>
                <span className="text-2xl font-bold">{product.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-3xl font-bold">{totalPrice} €</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleBuyNow}
                className="w-full flex items-center justify-center space-x-2 bg-[#00B0F0] text-white py-4 rounded-full font-semibold hover:bg-[#003399] transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Commander sur Contrado</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleBuyNow}
                className="w-full flex items-center justify-center space-x-2 bg-[#FFD700] text-[#003399] py-3 rounded-full font-semibold hover:bg-[#FFA500] transition-colors"
              >
                <Heart className="w-5 h-5" />
                <span>Voir la boutique complète</span>
              </button>
            </div>

            {/* Product Info */}
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
              <p className="mb-2">✓ Tissu: Poly Jersey recyclé Lifestyle 160g/m²</p>
              <p className="mb-2">✓ Coupe: Standard</p>
              <p className="mb-2">✓ Col: Rond</p>
              <p className="mb-2">✓ Manches: Courtes</p>
              <p>✓ Surpiqûres: Blanc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirt3DViewer;
