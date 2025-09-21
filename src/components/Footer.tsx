import { Facebook, Instagram, Youtube, Mail, Phone, Music } from 'lucide-react';
import OptimizedLogo from './OptimizedLogo';

const Footer = () => {
  return (
    <footer className="bg-[#003399] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <OptimizedLogo 
                className="h-14 w-auto" 
                alt="Logo de la VOP" 
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              L'amour de Dieu en action. Jésus-Christ ressuscité, annoncé par les œuvres et la vérité.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00B0F0]">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-gray-300 hover:text-[#66CCFF] transition-colors">À propos</a></li>
              <li><a href="/#actions" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Nos Actions</a></li>
              <li><a href="/boutique" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Boutique</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Nos Ministères</h4>
            <ul className="space-y-2">
              <li><a href="/#ministries" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Jeunesse VOP</a></li>
              <li><a href="https://www.youtube.com/watch?v=kFQCYR6tiTw" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Musique de chanson VOP</a></li>
                    <li><a href="https://wa.me/24174791530" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Formation (WhatsApp avec Daniel Jonathan, Évangéliste Styve et Prophète David SHEKINAH)</a></li>
              <li><a href="/#actions" className="text-gray-300 hover:text-[#66CCFF] transition-colors">Évangélisation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#CC3366]">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00B0F0]" />
                <span className="text-gray-300 text-sm">contact@lavop.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00B0F0]" />
                <span className="text-gray-300 text-sm">+241 74 79 15 30</span>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/christpourlavop" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-[#66CCFF] cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/christpourlavop" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-gray-300 hover:text-[#CC3366] cursor-pointer transition-colors" />
                </a>
                <a href="https://www.youtube.com/@christpourlavop" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                  <Youtube className="w-5 h-5 text-gray-300 hover:text-[#FFD700] cursor-pointer transition-colors" />
                </a>
                <a href="https://www.tiktok.com/@christpourlavop" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <Music className="w-5 h-5 text-gray-300 hover:text-[#FF6B9D] cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#00B0F0] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 La VOP. Tous droits réservés. (2019-2025)
              <br />
              <span className="text-[#FFD700] font-semibold">Prêt de 2025 - Expansion Internationale</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#66CCFF] text-sm italic font-medium">
                "Apprenez à faire le bien, recherchez la justice, protégez l'opprimé, faites droit à l'orphelin, défendez la veuve." - Ésaïe 1:17
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;