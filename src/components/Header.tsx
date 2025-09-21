import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import OptimizedLogo from './OptimizedLogo';
import { UTM_LINKS } from '../config/chariowLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', text: 'Accueil' },
    { href: '/a-propos', text: 'À propos' },
    { href: '/a-propos-fondateur', text: 'Le Fondateur' },
    { href: '/programmes', text: 'Programmes' },
    { href: '/boutique', text: 'Boutique' },
    { href: '/blog', text: 'Blog' },
    { href: '/impact', text: 'Impact' },
    { href: '/transparence', text: 'Transparence' },
    { href: '/#contact', text: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <OptimizedLogo 
              className="h-12 w-auto" 
              alt="Logo de la VOP" 
              priority={true}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.href} to={link.href} className="text-[#003399] hover:text-[#00B0F0] font-medium transition-colors">
                {link.text}
              </Link>
            ))}
            <a href={UTM_LINKS.DON_LIBRE_HEADER} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#CC3366] text-white px-4 py-2 rounded-full hover:bg-[#003399] transition-colors">
              <Heart className="w-5 h-5 animate-pulse" />
              <span>Faire un don</span>
            </a>
            <a href={UTM_LINKS.BOUTIQUE_OFFICIELLE} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#FFD700] text-[#003399] px-4 py-2 rounded-full hover:bg-[#FFA500] transition-colors">
              <span>Boutique VOP</span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[#003399]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="grid grid-cols-2 gap-4 px-4">
              {/* Colonne gauche - 4 premiers onglets */}
              <div className="space-y-3">
                {navLinks.slice(0, 4).map(link => ( 
                  <Link 
                    key={link.href} 
                    to={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="block text-[#003399] hover:text-[#00B0F0] font-medium py-2 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
              
              {/* Colonne droite - 4 derniers onglets */}
              <div className="space-y-3">
                {navLinks.slice(4, 8).map(link => ( 
                  <Link 
                    key={link.href} 
                    to={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="block text-[#003399] hover:text-[#00B0F0] font-medium py-2 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </nav>
            
            {/* Boutons d'action en bas */}
            <div className="mt-6 px-4 space-y-3">
              <a href={UTM_LINKS.DON_LIBRE_HEADER} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 w-full bg-[#CC3366] text-white px-4 py-3 rounded-full hover:bg-[#003399] transition-colors">
                <Heart className="w-5 h-5 animate-pulse" />
                <span>Faire un don</span>
              </a>
              <a href={UTM_LINKS.BOUTIQUE_OFFICIELLE} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 w-full bg-[#FFD700] text-[#003399] px-4 py-3 rounded-full hover:bg-[#FFA500] transition-colors">
                <span>Boutique VOP</span>
              </a>
            </div>
          </div>
        )}
        
        {/* SEO Keywords - Hidden but effective */}
        <div className="hidden">
          <span>ANDJ Daniel Jonathan, SmartANDJ AI Technologies, VOP Youth, VOP Song, Medium, TikTok, LinkedIn, GitHub, entrepreneur, prophète, Gabon, Libreville, ONG, orphelins, veuves, coaching, investissement, crypto, Bitcoin, algorithme du ciel, maths de Dieu, coaching ultime, prophétie Bitcoin, paradoxe existence, chrétien lion brebis, formation WhatsApp, évangélisation, ministère apostolique, apôtre Styve Ntoutoume, apôtre David Oyedepo, intelligence artificielle, objets connectés, SanoAI Predict, GabomaGPT, startup, innovation technologique, transformation digitale, leadership chrétien, vision entrepreneuriale, impact social, développement durable, éducation, santé, technologie, innovation, startup gabonaise, entrepreneur gabonais, prophète entrepreneur, architecte du futur, SmartANDJ, VOP Technologies, LA VOP International, Christ pour la Veuve l'Orphelin le Pauvre, Toutes les Nations Internationales</span>
        </div>
      </div>
    </header>
  );
};

export default Header;